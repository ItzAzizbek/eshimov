"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];

const LAPIS: RGB = [11, 45, 99];
const COBALT: RGB = [15, 76, 151];
const COBALT_LIGHT: RGB = [31, 104, 184];
const TURQUOISE: RGB = [26, 166, 183];
const GLAZE: RGB = [226, 238, 236];
const GOLD: RGB = [233, 185, 58];

const GROUNDS: RGB[] = [LAPIS, COBALT, LAPIS, COBALT, LAPIS];
const STARS: RGB[] = [COBALT_LIGHT, COBALT_LIGHT, TURQUOISE, COBALT_LIGHT, COBALT_LIGHT, COBALT_LIGHT, GLAZE];

const mix = (a: RGB, b: RGB, t: number): string => {
  const r = a[0] + (b[0] - a[0]) * t;
  const g = a[1] + (b[1] - a[1]) * t;
  const bl = a[2] + (b[2] - a[2]) * t;
  return `rgb(${r | 0},${g | 0},${bl | 0})`;
};

const lerp = (a: RGB, b: RGB, t: number): RGB => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

// Warmth ramp for a lit star: its own colour, then turquoise, then gold lustre.
const hue = (t: number, base: RGB): RGB =>
  t < 0.5 ? lerp(base, TURQUOISE, t * 2) : lerp(TURQUOISE, GOLD, (t - 0.5) * 2);

const hash = (i: number, j: number) =>
  (Math.imul(i + 1, 73856093) ^ Math.imul(j + 1, 19349663)) >>> 0;

const SWEEP_MS = 11000;
const INTRO_MS = 1300;
const INNER = 0.7654; // inner/outer radius of an 8-point star built from two squares

/**
 * A wall of star-and-cross glazed tiles. The pointer warms nearby tiles from
 * cobalt through turquoise to gold lustre; at rest a slow band of light
 * sweeps the glaze. Static under reduced motion.
 */
export function TileWall({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = mq.matches;

    let w = 0;
    let h = 0;
    let size = 64;
    let cols = 0;
    let rows = 0;
    let heat = new Float32Array(0);
    let pointer: { x: number; y: number } | null = null;
    let raf = 0;
    let visible = true;
    const t0 = performance.now();

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = w < 640 ? 44 : 64;
      cols = Math.ceil(w / size) + 1;
      rows = Math.ceil(h / size) + 1;
      heat = new Float32Array(cols * rows);
    };

    const star = (cx: number, cy: number, R: number, fill: string) => {
      ctx.beginPath();
      for (let k = 0; k < 16; k++) {
        const a = (Math.PI / 8) * k - Math.PI / 2;
        const r = k % 2 === 0 ? R : R * INNER;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        if (k === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    };

    const draw = (now: number) => {
      const elapsed = now - t0;
      const intro = reduced ? 1 : Math.min(1, elapsed / INTRO_MS);
      const sweep = reduced ? -1 : (elapsed % SWEEP_MS) / SWEEP_MS;
      const reach = Math.hypot(w, h) / 2;
      const radius = size * 3.2;
      const offX = (w - cols * size) / 2;
      const offY = (h - rows * size) / 2;

      ctx.clearRect(0, 0, w, h);

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const idx = j * cols + i;
          const x = offX + i * size;
          const y = offY + j * size;
          const cx = x + size / 2;
          const cy = y + size / 2;

          // Radial reveal on load, from the centre of the wall outward.
          const d = Math.hypot(cx - w / 2, cy - h / 2) / reach;
          const shown = Math.min(1, Math.max(0, (intro * 1.35 - d) * 4));

          // Target warmth: pointer proximity plus the resting glaze sweep.
          let target = 0;
          if (pointer) {
            const pd = Math.hypot(cx - pointer.x, cy - pointer.y);
            if (pd < radius) {
              const f = 1 - pd / radius;
              target = f * f;
            }
          }
          if (sweep >= 0) {
            const pos = (cx / w + cy / h) / 2;
            const dist = Math.abs(pos - (sweep * 1.5 - 0.25));
            if (dist < 0.1) target = Math.max(target, (1 - dist / 0.1) * 0.5);
          }
          heat[idx] += (target - heat[idx]) * (target > heat[idx] ? 0.22 : 0.06);
          const t = heat[idx];

          const hs = hash(i, j);
          const ground = GROUNDS[hs % GROUNDS.length];
          const starCol = STARS[(hs >>> 3) % STARS.length];

          ctx.globalAlpha = shown;
          ctx.fillStyle = mix(ground, COBALT_LIGHT, Math.min(1, t * 0.9));
          ctx.fillRect(x, y, size + 0.5, size + 0.5);

          // Warm the star: starCol -> turquoise -> gold lustre.
          const dim = mix(starCol, ground, 0.35);
          const dimRGB = dim.match(/\d+/g)!.map(Number) as RGB;
          star(cx, cy, size * 0.42 * (0.9 + 0.1 * shown), mix(dimRGB, hue(t, starCol), Math.min(1, t * 4)));

          ctx.globalAlpha = shown;
          ctx.beginPath();
          ctx.arc(cx, cy, size * 0.07, 0, Math.PI * 2);
          ctx.fillStyle = mix(GOLD, LAPIS, 0.35 * (1 - t));
          ctx.fill();

          // Grout between tiles, with a catch-light on the top and left glaze edge.
          ctx.strokeStyle = "rgba(6,22,52,0.55)";
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, size, size);
          ctx.strokeStyle = "rgba(255,255,255,0.14)";
          ctx.beginPath();
          ctx.moveTo(x + 1.5, y + size - 1);
          ctx.lineTo(x + 1.5, y + 1.5);
          ctx.lineTo(x + size - 1, y + 1.5);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) {
        draw(performance.now());
        return;
      }
      if (visible) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const inside = e.clientY >= r.top && e.clientY <= r.bottom;
      pointer = inside ? { x: e.clientX - r.left, y: e.clientY - r.top } : null;
    };
    const onLeave = () => {
      pointer = null;
    };
    const onRelease = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") pointer = null;
    };
    const onMotionPref = () => {
      reduced = mq.matches;
      start();
    };

    layout();
    start();

    const ro = new ResizeObserver(() => {
      layout();
      if (reduced) draw(performance.now());
    });
    ro.observe(parent);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(parent);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onRelease, { passive: true });
    window.addEventListener("pointercancel", onLeave, { passive: true });
    window.addEventListener("scroll", onLeave, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    mq.addEventListener("change", onMotionPref);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onRelease);
      window.removeEventListener("pointercancel", onLeave);
      window.removeEventListener("scroll", onLeave);
      document.removeEventListener("pointerleave", onLeave);
      mq.removeEventListener("change", onMotionPref);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full bg-lapis ${className}`}
    />
  );
}

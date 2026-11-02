---
name: Eshimov Azizbek Portfolio
description: A glazed Registan tile wall in cobalt, lapis, turquoise and gold lustre, where the facts are laid like tiles.
colors:
  lapis: "#0b2d63"
  cobalt: "#0f4c97"
  turquoise: "#1aa6b7"
  gold: "#e9b93a"
  gold-deep: "#c9971c"
  brick: "#a8532e"
  glaze: "#f2f6f3"
  glaze-soft: "#e6eeec"
  ink: "#0a2147"
  ink-dim: "#2c4672"
  ink-mute: "#4d6490"
  ink-faint: "#a9bdc6"
  line: "#bcd0d6"
  line-soft: "#d5e3e6"
typography:
  display:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 10vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0px"
  focus: "2px"
  niche: "50% 50% 0 0 / 18% 18% 0 0"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "64px"
  section: "112px"
  section-wide: "160px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.lapis}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.lapis}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  nav-bar:
    backgroundColor: "{colors.lapis}"
    textColor: "#ffffff"
    padding: "16px 40px"
  niche:
    backgroundColor: "{colors.glaze}"
    textColor: "{colors.ink}"
    rounded: "{rounded.niche}"
    padding: "128px 64px 80px"
  stack-tile:
    backgroundColor: "{colors.lapis}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "20px"
---

# Design System: Eshimov Azizbek Portfolio

## Overview

**Creative North Star: "The Registan Tile Wall"**

The site is a glazed wall from Samarkand's Registan. Facts are laid like tiles: square, hard-edged, flat-coloured, set in grout. Cobalt, lapis, turquoise and gold lustre sit on a white glaze ground. The eight-point star-and-cross tile is the one repeating motif, and it appears as a canvas wall, a thin border band, a faint field behind light sections, and small markers.

Density is generous and confident. Headlines are sturdy and tight; body copy is quiet and readable. Surfaces are flat colour blocks with no soft shadows, and depth comes from tone steps between lapis, cobalt and glaze. Gold is the only action colour and is rare enough to be read as the next step.

The hero is a pointed niche (an iwan arch) with a gold double edge, set against the tile wall. Colour sections alternate between dark (lapis, cobalt) and light (glaze with a quiet tile field), each closed by the tile band.

**Key Characteristics:**
- Palette of lapis, cobalt, turquoise and gold on white glaze; brick is declared but unused in the build.
- One motif: the star-and-cross tile, in canvas, SVG band and field forms.
- Square corners everywhere except the arched niche.
- Sturdy display grotesk over a plain humanist body grotesk; no mono face.
- Gold is the sole action colour; flat blocks, no blur shadows.
- Motion is the tile wall (pointer warmth, resting sweep) plus small hover rotations; all of it has a still fallback.

## Colors

A lapis-and-cobalt field with turquoise as the cool accent and gold lustre as the single warm, active note, all on a faintly green-white glaze.

### Primary
- **Lapis** (#0b2d63): The deepest ground. Nav bar, hero ground, contact section, band background, and heading colour on light sections.
- **Cobalt** (#0f4c97): Mid-blue ground for the Projects section and the second tile tone; link and sub-heading colour on glaze.

### Secondary
- **Turquoise** (#1aa6b7): Cool accent. Star tiles on the wall, marker stars on light sections, back-end tiles in Stack, third tone in the model thread.

### Tertiary
- **Gold Lustre** (#e9b93a): The action colour. Buttons, nav dot, heading full stops, centres of tiles, the double edge of the niche, selection highlight, thread line.
- **Deep Gold** (#c9971c): Gold on light grounds only: focus outline on glaze, tile-field centre dots, hover colour for markers. Gold Lustre replaces it on dark grounds.
- **Kiln Brick** (#a8532e): Declared as a token but not used by any shipped surface. Do not use it until a surface needs it.

### Neutral
- **White Glaze** (#f2f6f3): Page ground and the niche panel.
- **Soft Glaze** (#e6eeec): Stack section ground, scrollbar track.
- **Ink** (#0a2147): Body text on glaze.
- **Dim Ink** (#2c4672): Paragraph text on glaze.
- **Mute Ink** (#4d6490), **Faint Ink** (#a9bdc6), **Line** (#bcd0d6), **Soft Line** (#d5e3e6): Declared tokens. The shipped sections do not currently use them; borders are lapis at 70% or white at 25%.

### Named Rules
**The One Lustre Rule.** Gold marks action and the single emphasis point on a surface. Never use it as a general decorative fill, and never put a second action colour beside it.

**The Glaze Ground Rule.** Light sections are glaze, never pure white, and carry the quiet tile field or a lapis rule. Dark sections are lapis or cobalt, never black.

**The Dark-Ground Pair Rule.** On lapis, cobalt and turquoise grounds text is white or lapis (turquoise and gold tiles take lapis text). Deep Gold is for light grounds only.

## Typography

**Display Font:** Familjen Grotesk (system-ui, sans-serif fallback)
**Body Font:** Hanken Grotesk (system-ui, sans-serif fallback)
**Label/Mono Font:** none; the mono token resolves to the body face.

**Character:** A sturdy display (weight 700, -0.02em tracking, balanced wrapping) over a plain, open body face. The display carries the voice; the body stays out of its way.

### Hierarchy
- **Display** (700, clamp(3.25rem, 10vw, 6rem), 0.92): Hero name (two lines) and the contact headline. Project name uses clamp(3.5rem, 11vw, 6rem), 0.9.
- **Headline** (700, clamp(2.5rem, 6vw, 4.5rem), 0.98): About and Stack section headings, lapis on glaze.
- **Title** (700, 1.875rem to 2.25rem, tight): Principle titles, model names, contact values, Stack tile names (1.5rem to 1.875rem), and the About sub-line in cobalt (1.5rem to 1.875rem).
- **Body** (400, 1rem to 1.25rem, 1.6 to 1.7): Paragraphs, 36 to 42rem measure (`max-w-xl` to `max-w-lg`). Lead paragraphs may be 600 weight on key words.
- **Label** (500 to 600, 0.875rem to 1rem, sentence case): Nav links, button text, tile category notes, footer. No uppercase, no tracking, no small-caps.

### Named Rules
**The Sturdy Display Rule.** Every display and title element uses the `font-display` treatment (700). Never set a display face light or italic.

**The Sentence-Case Rule.** Labels are plain sentence-case text at readable size. Section headings are statements, not tagged labels above them.

**The Tabular Clock Rule.** Numbers that sit in a column or a clock use tabular figures (the nav's Samarkand time).

## Layout

Single-column page of full-bleed bands. Content sits in a `max-w-7xl` (80rem) container with 24px side padding, 40px from md. Sections use 112px vertical padding, 160px from md. Section text splits into two columns at lg, in a roughly 1.1:1 ratio (Contact 1.2:1, Projects 1.15:1) with a 56 to 96px gap. Stack tiles form a grid of 2, 3, then 5 columns with 4:3 tiles and shared lapis grout lines.

The first viewport is a full-height (100svh) canvas tile wall under a fixed nav, with the niche anchored to the bottom and closed by a tile band. Tile size is 64px, or 44px below 640px. Navigation links collapse below md to a gold Contact button.

Rhythm alternates ground: lapis hero, cobalt Projects, glaze About, soft glaze Stack, lapis Contact. A 22px tile band closes the hero and Projects sections and opens Contact.

## Elevation & Depth

Flat and tonal. Depth comes from the colour step between lapis, cobalt, turquoise and glaze, and from grout lines (1px lapis at 70% or lapis at 55% on the canvas), plus a faint top-left catch-light on each canvas tile. There are no blurred or offset drop shadows.

The one layered edge is the niche's gold double edge: a 5px gold border plus zero-blur rings in lapis (10px) and Deep Gold (13px) via box-shadow spread. That is a ring of tile, not a shadow.

### Named Rules
**The Flat Glaze Rule.** Surfaces are flat colour. Separate them with tone, grout lines or the tile band; never with a blurred or offset shadow.

## Shapes

Square. Buttons, tiles, panels and bands have no radius. The only curves are the pointed-arch niche (top corners 50% by 18%, flat base), the 2px focus rounding, and the 4px scrollbar thumb. The star is built from two overlaid squares, one rotated 45 degrees; the 22px band tile is a turquoise square, a cobalt rotated square and a gold centre dot on lapis. Dividers are 3px lapis rules on light sections and 1px white at 25% on dark ones.

## Components

### Buttons
- **Shape:** Square (0px), 16px by 32px padding, 600 weight, 1rem.
- **Primary:** Gold Lustre fill with lapis text, for the one action on a surface. Hero: "Email me". Projects and Contact: with an arrow-out glyph.
- **Hover / Focus:** Fill switches to lapis with white text on glaze grounds (hero) or to white on dark grounds, 300ms. Arrow glyph nudges up and right 2px over 500ms. Focus is a 3px Deep Gold outline with 3px offset (Gold Lustre on dark grounds).
- **Outline:** 2px white-at-70% border, white text; on hover border and text turn gold. Used once, for the secondary Portail link on dark ground.
- **Text link:** Cobalt (or white on dark), 600 weight; a currentColor underline draws from the left in 450ms.
- **Mobile nav button:** Compact gold button (16px by 8px) with lapis text, shown below md.

### Navigation
A fixed, solid lapis bar (solid for legibility over the busy wall, not translucent), capped by a 10px tile band. Wordmark "Eshimov." in display type with a gold full stop; section links in white at 90%, with the underline-draw hover; a tabular "Samarkand HH:MM" clock from lg.

### Niche (signature)
The hero panel. A glaze-coloured pointed arch with a gold double edge, 94vw wide up to 56rem, centred, with centred lapis display name, one-line pitch and the gold CTA. It rises 56px into place on load.

### Tile Wall (signature)
A full-bleed canvas of 64px square tiles in lapis and cobalt, each with an eight-point star (cobalt-light, turquoise or glaze) and a gold centre dot, set in dark grout with a faint top-left highlight. The pointer warms nearby stars from their colour through turquoise to gold lustre over a radius of 3.2 tiles; at rest a slow diagonal band of light crosses the wall every 11 seconds. Tiles reveal radially from the centre over 1.3s on load. Under reduced motion it draws once, static. Rendering pauses when off-screen.

### Tile Band and Tile Field
The band is a 22px strip of repeating star tiles (10px in the nav), used as a rule and frame. The field is the same motif at 64px in cobalt, turquoise and gold at 7 to 25% opacity, behind light sections.

### Tiles (Stack and model thread)
Square colour blocks, tone coded by job: lapis (core), cobalt (look and motion), turquoise (back end), gold (AI), glaze (design). Text is white or lapis per ground, with a small category label over a display-weight name and a 25%-opacity star in the corner that turns 45 degrees on hover. The Projects model thread offsets alternate tiles by 24px along a 3px gold line, each with a lapis star marker.

### Principle Item
A turquoise star marker (28px) beside a title and short body; on hover it rotates 45 degrees and turns Deep Gold.

## Do's and Don'ts

### Do:
- **Do** use Gold Lustre (#e9b93a) for the one action on a surface, with lapis text.
- **Do** build with square corners and flat colour blocks; use the tile motif for rules, markers and fields.
- **Do** set every heading in the sturdy display treatment (700).
- **Do** keep nav solid lapis, and give dark sections a tile band edge.
- **Do** provide a static fallback for any motion; the wall draws once under `prefers-reduced-motion`.
- **Do** use Deep Gold for focus and tile accents on glaze, Gold Lustre on dark.

### Don't:
- **Don't** use blurred or offset drop shadows; use tone, grout or a zero-blur ring.
- **Don't** introduce a second action colour or put gold on glaze as text.
- **Don't** add a mono face, italic serif, tracked uppercase labels or kicker lines above headings.
- **Don't** round buttons or panels; the arch is the only large curve.
- **Don't** use black or pure white grounds.

### Not canonized (defects the build carries)
- Hero entrance (`motion.div` slide) uses framer-motion and is not gated by the reduced-motion CSS rule.
- Declared but unused tokens (brick, mute ink, faint ink, line colours) are recorded for completeness only.
- Hero and Projects use small `text-white/75` to `/90` text and tile-band opacity values that are one-offs.

export type Project = {
  name: string;
  tagline: string;
  url: string;
  // Planet appearance — referenced by Cosmos canvas
  color: string;        // base color hex
  emissive: string;     // emissive tint hex
  size: number;         // radius (relative)
  hasRing?: boolean;
  ringTilt?: number;
  category: string;
};

export const projects: Project[] = [
  {
    name: "Clevora AI",
    tagline: "AI Automation for Content Creators",
    url: "https://getclevora.xyz",
    color: "#48cae4",
    emissive: "#00b4d8",
    size: 0.95,
    hasRing: true,
    ringTilt: 0.35,
    category: "Flagship",
  },
  {
    name: "Clevora for Developers",
    tagline: "Build with Clevora's brain via API",
    url: "https://developers.getclevora.xyz",
    color: "#90e0ef",
    emissive: "#0ea5b7",
    size: 0.72,
    category: "Platform",
  },
  {
    name: "Entirety",
    tagline: "One package — every library",
    url: "https://entirety.vazulies.com",
    color: "#7dd3fc",
    emissive: "#0284c7",
    size: 0.86,
    hasRing: true,
    ringTilt: -0.6,
    category: "Dev Tools",
  },
  {
    name: "Okayable",
    tagline: "AI that reads the fine print for you",
    url: "https://okayable.com",
    color: "#a5f3fc",
    emissive: "#06b6d4",
    size: 0.78,
    category: "Consumer AI",
  },
  {
    name: "Kaizen",
    tagline: "Health, gamified — your life as an RPG",
    url: "https://ka1zen-app.vercel.app",
    color: "#5eead4",
    emissive: "#14b8a6",
    size: 0.82,
    category: "Health",
  },
  {
    name: "ClarifyHW",
    tagline: "An easier way to deal with your kid's homework",
    url: "https://clarifyhw.vercel.app",
    color: "#bae6fd",
    emissive: "#0369a1",
    size: 0.7,
    category: "EdTech",
  },
  {
    name: "Arzonroq",
    tagline: "Find the cheapest deals near you",
    url: "https://arzonroq.uz",
    color: "#67e8f9",
    emissive: "#0891b2",
    size: 0.76,
    hasRing: true,
    ringTilt: 0.9,
    category: "Marketplace",
  },
  {
    name: "Shelfie",
    tagline: "Reddit, for books",
    url: "https://shelfie.uz",
    color: "#cffafe",
    emissive: "#22d3ee",
    size: 0.74,
    category: "Social",
  },
  {
    name: "Reading",
    tagline: "IELTS Reading Platform",
    url: "https://reading.uz/eshimov",
    color: "#cffafe",
    emissive: "#22d3ee",
    size: 0.74,
    category: "Social",
  },
];

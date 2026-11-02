export type Project = {
  id: string;
  name: string;
  role?: string; // Azizbek's role, for products that are not his flagship
  tagline: string;
  url?: string; // absent when the product is no longer live
  blurb: string;
  category: string;
  meta?: string; // headline stat, shown beside the name
  started?: string; // when building began
  models?: string[]; // models the product puts on one thread
  modelsMore?: string; // how many more sit behind the ones listed
  image?: string; // screenshot under /public
  imageAlt?: string;
  tone: "dark" | "light";
  plate?: string[]; // lines for the role plate shown beside the text
};

// Portail leads. Each product gets its own space on the page.
export const projects: Project[] = [
  {
    id: "work",
    name: "Portail",
    tagline: "Every frontier model. One thread of context.",
    url: "https://portail.cc",
    blurb:
      "354 models from 58 labs in one chat, from GPT-5.5 and Claude to Gemini, Llama and DeepSeek. Switch models mid-conversation without losing the thread. It has memory, scheduled tasks, 23 connected apps and a Telegram bot. 157 releases since June 2026 and 110M tokens processed.",
    category: "AI Workspace",
    meta: "$450K valuation",
    started: "Building since June 2026",
    models: ["GPT-5.5", "Claude", "Gemini", "Llama"],
    modelsMore: "+350 more",
    image: "/portail-home.png",
    imageAlt:
      "The Portail home page: a chat box under the headline 'GPT, Claude and Gemini in one chat.'",
    tone: "dark",
  },
  {
    id: "okayable",
    name: "Okayable",
    role: "CTO and co-founder",
    tagline: "A personal AI tutor for IELTS.",
    url: "https://okayable.com",
    blurb:
      "Prepares students across all four IELTS skills: listening, speaking, reading and writing. Practice adapts to the student, essays are scored by AI against the real criteria, and there are mock exams and a study plan.",
    category: "Education",
    image: "/okayable-home.png",
    imageAlt: "The Okayable home page: 'Your dream score, within reach.'",
    tone: "light",
    plate: ["IELTS", "Listening, speaking, reading, writing"],
  },
  {
    id: "bazaargg",
    name: "BazaarGG",
    role: "CFO",
    tagline: "Game deals under a guarantor.",
    url: "https://bazaargg.com",
    blurb:
      "A marketplace for game accounts, in-game currency, items, skins, boosts, subscriptions and top-ups. Buyers deal with verified sellers, and every deal sits under a guarantor. The site is in Russian and prices are in soums.",
    category: "Marketplace",
    image: "/bazaargg-home.jpg",
    imageAlt:
      "The BazaarGG home page: a game-deal marketplace with a Steam balance top-up box.",
    tone: "dark",
    plate: ["Marketplace", "Accounts, currency, items, top-ups"],
  },
  {
    id: "1600",
    name: "1600.sh",
    role: "Founder, nonprofit",
    tagline: "The SAT is hard. We make it easy.",
    url: "https://1600.sh",
    blurb:
      "Take a full adaptive practice test, then drill the kinds of questions you get wrong in an app built like the real Digital SAT. It covers all 29 skills on the test and builds a day-by-day plan toward a target score. Free to start.",
    category: "Education",
    image: "/1600-home.png",
    imageAlt: "The 1600.sh home page: 'The SAT is hard. We make it easy.'",
    tone: "light",
    plate: ["Digital SAT", "Mock tests, study plan, 29 skills"],
  },
  {
    id: "clevora",
    name: "Clevora AI",
    role: "Founder",
    tagline: "AI content creation and automation for creators.",
    blurb:
      "My first company. I built it from December 2025 to June 2026, then pivoted into Portail. The site is no longer live.",
    category: "Creator Tools",
    tone: "dark",
    plate: ["December 2025 to June 2026", "No longer live"],
  },
];

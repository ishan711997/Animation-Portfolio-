import { PortfolioItem, Skill } from './types';

export const DESIGNER_NAME = "ISHAN SRIVASTAVA";
export const DESIGNER_ROLE = "Senior Motion Graphics Director";
export const DESIGNER_BIO = "Visual storyteller and director specializing in kinetic identities, cinematic commercial motion, and complex technical explainers. Over 8 years of pushing the boundaries of frame-by-frame narrative for global innovators.";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "v1",
    title: "Project Obsidian: Brand Identity",
    category: "3D Product Showcase",
    youtubeUrl: "https://www.youtube.com/embed/eptILeqGWsA",
    description: "An exploration of texture and light for a luxury tech brand's global launch.",
    viewCount: "24K"
  },
  {
    id: "v2",
    title: "Quantum Ledger UI Interface",
    category: "UI Animation",
    youtubeUrl: "https://www.youtube.com/embed/wo0MP9BXjPM",
    description: "Complex micro-interactions and dashboard visualizations for enterprise fintech.",
    viewCount: "9.2K"
  },
  {
    id: "v3",
    title: "The Math of Music: Kinetic Typography",
    category: "Math Explainer",
    youtubeUrl: "https://www.youtube.com/embed/JLDvYpxJb5I",
    description: "Visualizing sound waves and geometric patterns through rhythmic motion graphics.",
    viewCount: "58K"
  },
  {
    id: "v4",
    title: "Black Hole Dynamics Explainer",
    category: "Explainer",
    youtubeUrl: "https://www.youtube.com/embed/DJB5LltEkRY",
    description: "Translating complex gravitational physics into digestible visual narratives.",
    viewCount: "142K"
  },
  {
    id: "v5",
    title: "Genesis EV Series Launch",
    category: "Corporate",
    youtubeUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    description: "Cinematic CG reveal for the next generation of electric mobility.",
    viewCount: "31K"
  },
  {
    id: "v6",
    title: "Neural Network Visualization",
    category: "Technical Explainer Motion Graphics",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Abstract representation of data flow and AI cognitive processes.",
    viewCount: "18.5K"
  }
];

export const SKILLS: Skill[] = [
  { name: "After Effects / Expression Scripting", level: 98 },
  { name: "Cinema 4D / Octane Render", level: 88 },
  { name: "Direction & Storyboarding", level: 92 },
  { name: "Houdini Simulations", level: 75 },
  { name: "Color Grading & Compositing", level: 85 }
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ishan-srivastava-a12bb0119/",
  email: "ishan711997@gmail.com"
};
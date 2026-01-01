
import { PortfolioItem, Skill } from './types';

export const DESIGNER_NAME = "ISHAN SRIVASTAVA";
export const DESIGNER_ROLE = "Senior Motion Graphics Designer";
export const DESIGNER_BIO = "I am a visual storyteller specializing in high-impact motion graphics and dynamic visual design. With over 8 years of experience, I help brands communicate complex ideas through fluid animation and meticulous design aesthetics.";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "EcoTech Branding Reveal",
    category: "Corporate",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder links
    description: "A minimalist approach to high-tech sustainability branding.",
    viewCount: "12K"
  },
  {
    id: "2",
    title: "Neon Pulse UI Animation",
    category: "UI Animation",
    youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    description: "Exploration of micro-interactions for a cyberpunk fintech app.",
    viewCount: "8.5K"
  },
  {
    id: "3",
    title: "Summer Vibes Campaign",
    category: "Social Media",
    youtubeUrl: "https://www.youtube.com/watch?v=L_jWHffIx5E",
    description: "Vibrant motion patterns designed for high engagement on Instagram.",
    viewCount: "45K"
  },
  {
    id: "4",
    title: "Quantum Physics Explained",
    category: "Explainer",
    youtubeUrl: "https://www.youtube.com/watch?v=0_uWvE-wKyc",
    description: "Complex scientific concepts broken down into simple motion graphics.",
    viewCount: "120K"
  },
  {
    id: "5",
    title: "Automotive Dynamics 2024",
    category: "Corporate",
    youtubeUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    description: "3D Motion launch video for the new EV series.",
    viewCount: "15.2K"
  },
  {
    id: "6",
    title: "App Workflow Simulation",
    category: "UI Animation",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Detailed walkthrough of a productivity app interface.",
    viewCount: "6.7K"
  }
];

export const SKILLS: Skill[] = [
  { name: "After Effects", level: 95 },
  { name: "Cinema 4D", level: 85 },
  { name: "Motion Design", level: 98 },
  { name: "Visual Storytelling", level: 90 },
  { name: "Lottie / Web Animation", level: 80 },
  { name: "Color Grading", level: 75 }
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  vimeo: "https://vimeo.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
  email: "hello@alexrivera.design"
};

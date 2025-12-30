
export type Category = 'Explainer' | 'Social Media' | 'Corporate' | 'UI Animation' | 'All';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  youtubeUrl: string;
  description: string;
  viewCount: string;
}

export interface Skill {
  name: string;
  level: number;
}

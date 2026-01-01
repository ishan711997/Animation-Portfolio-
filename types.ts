
export type Category = 
  | 'Explainer' 
  | 'Social Media' 
  | 'Corporate' 
  | 'UI Animation' 
  | '3D Product Showcase' 
  | 'Technical Explainer Motion Graphics' 
  | 'Math Explainer'
  | 'All';

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
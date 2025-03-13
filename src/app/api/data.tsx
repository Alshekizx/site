import { Timestamp } from 'firebase/firestore';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  contentSections: string[];
  mainImage: string;
  extraImages: string[];
  modelFile?: string;  // Optional property
  modelScale: number;
  createdAt: Timestamp; 
}

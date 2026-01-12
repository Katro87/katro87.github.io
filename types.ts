// Fix: Added React import to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface Skill {
  name: string;
  level: number;
}

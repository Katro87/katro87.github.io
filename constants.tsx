
import React from 'react';
import { Project, Service, Skill } from './types';

export const COLORS = {
  primary: '#2563eb',
  secondary: '#7c3aed',
  accent: '#06b6d4',
  dark: '#0f172a',
  light: '#f8fafc',
  gray: '#64748b',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern E-Commerce',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/shop/800/600',
    description: 'A full-featured shopping platform with cart, payments, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'AI Image Generator',
    category: 'SaaS',
    image: 'https://picsum.photos/seed/ai/800/600',
    description: 'Leveraging Gemini API to generate stunning visuals from text prompts.',
    tech: ['TypeScript', 'Gemini API', 'Next.js'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Financial Tracker',
    category: 'FinTech',
    image: 'https://picsum.photos/seed/finance/800/600',
    description: 'Interactive dashboards for tracking personal expenses and investments.',
    tech: ['React', 'D3.js', 'Firebase'],
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'Crypto Dashboard',
    category: 'Blockchain',
    image: 'https://picsum.photos/seed/crypto/800/600',
    description: 'Real-time cryptocurrency monitoring tool with historical price charts.',
    tech: ['React', 'Recharts', 'CoinGecko API'],
    link: '#',
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Frontend Development (React/Next)', level: 95 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Node.js & Express', level: 82 },
  { name: 'TypeScript', level: 90 },
  { name: 'Database Management (SQL/NoSQL)', level: 75 },
  { name: 'Mobile App Development (React Native)', level: 70 }
];

export const ICONS = {
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 0 1 8.716 6.747M12 3a9.004 9.004 0 0 0-8.716 6.747" />
    </svg>
  ),
  Device: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  )
};

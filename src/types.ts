export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  purpose: string;
  contribution: string;
  technologies: string[];
  status: 'In Progress' | 'Completed Demo' | 'Project Archive';
  hasDatabase: boolean;
  githubUrl: string;
  liveDemoUrl?: string;
  imagePlaceholderTitle: string;
  imagePlaceholderSubtitle: string;
  wireframeFeatures: string[];
  badge?: string;
  badgeDesc?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface ExperienceItem {
  position: string;
  organization: string;
  description: string;
  period?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduationYear: string;
  note?: string;
}

export interface CertificationItem {
  title: string;
  type: 'Diploma' | 'Course';
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Eye, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Language, TRANSLATIONS } from '../data/translations';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const t = TRANSLATIONS[lang].projects;

  const projectsList = [
    {
      id: 'personal-portfolio',
      name: t.p4.title || (lang === 'ar' ? 'الموقع الشخصي والملف المهني' : 'Personal Portfolio Website'),
      category: t.p4.category,
      description: t.p4.description,
      longDescription: t.p4.longDescription,
      purpose: t.p4.purpose,
      contribution: t.p4.contribution,
      badge: t.p4.badge,
      badgeDesc: t.p4.badgeDesc,
      imagePlaceholderTitle: t.p4.wireframeTitle,
      imagePlaceholderSubtitle: t.p4.wireframeSubtitle,
      technologies: ['Artificial Intelligence / AI Tools', 'Google AI Studio', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
      wireframeFeatures: [t.p4.f1, t.p4.f2, t.p4.f3, t.p4.f4],
      status: t.statusCompleted,
      hasDatabase: false,
      githubUrl: '#',
      liveDemoUrl: '#',
    },
    {
      id: 'barur-accessories',
      name: 'Barur Accessories',
      category: t.p2.category,
      description: t.p2.description,
      longDescription: t.p2.longDescription,
      purpose: t.p2.purpose,
      contribution: t.p2.contribution,
      badge: t.p2.badge,
      badgeDesc: t.p2.badgeDesc,
      imagePlaceholderTitle: t.p2.wireframeTitle,
      imagePlaceholderSubtitle: t.p2.wireframeSubtitle,
      technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Recharts', 'WebAuthn / Passkeys', 'Node.js', 'Express.js', 'Google GenAI SDK'],
      wireframeFeatures: [t.p2.f1, t.p2.f2, t.p2.f3, t.p2.f4],
      status: t.statusInProgress,
      hasDatabase: true,
      githubUrl: '#',
      liveDemoUrl: null,
    },
    {
      id: 'al-hammadi-phone',
      name: t.p3.title || (lang === 'ar' ? 'الحمادي فون' : 'Al-Hammadi Phone'),
      category: t.p3.category,
      description: t.p3.description,
      longDescription: t.p3.longDescription,
      purpose: t.p3.purpose,
      contribution: t.p3.contribution,
      imagePlaceholderTitle: t.p3.wireframeTitle,
      imagePlaceholderSubtitle: t.p3.wireframeSubtitle,
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
      wireframeFeatures: [t.p3.f1, t.p3.f2, t.p3.f3, t.p3.f4],
      status: t.statusCompleted,
      hasDatabase: false,
      githubUrl: '#',
      liveDemoUrl: null,
    },
  ];

  const selectedProject = projectsList.find((p) => p.id === selectedProjectId) || null;

  return (
    <section id="projects" className="py-16 bg-[#252B38]/30 dark:bg-[#252B38]/30 bg-slate-100/50 border-y border-[#333D50]/50 dark:border-[#333D50]/50 border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-300 text-xs font-semibold text-[#8FA8C7] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-200 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-md relative"
            >
              {/* Category & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-semibold text-[#8FA8C7] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                        ✨ {project.badge}
                      </span>
                    )}
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        project.hasDatabase && project.status === t.statusInProgress
                          ? 'bg-[#172033] dark:bg-[#172033] bg-slate-100 text-[#A7A1C8] border-[#333D50]'
                          : 'bg-[#172033] dark:bg-[#172033] bg-slate-100 text-[#8FA8C7] border-[#333D50]'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Wireframe Placeholder */}
                <div className="w-full h-36 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 mb-5 p-3.5 flex flex-col justify-between transition-colors relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] text-[#A7A1C8] font-mono">
                    <span className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#8FA8C7]"></div>
                      {project.hasDatabase ? 'Firebase Backend' : 'Pure Web Frontend'}
                    </span>
                    <span className="text-[10px] opacity-70">{t.wireframe}</span>
                  </div>

                  <div className="my-auto text-center">
                    <h4 className="text-sm font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 group-hover:text-[#8FA8C7] transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-[11px] text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-0.5 line-clamp-1">
                      {project.imagePlaceholderSubtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#A7A1C8] pt-2 border-t border-[#333D50]/60 dark:border-[#333D50]/60 border-slate-200">
                    <span>{project.technologies.slice(0, 2).join(' • ')}</span>
                    <span className="text-[#8FA8C7] font-medium">{t.clickDetails}</span>
                  </div>
                </div>

                {/* Name & Short Description */}
                <h3 className="text-lg font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 mb-2 group-hover:text-[#8FA8C7] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 leading-relaxed mb-5">
                  "{project.description}"
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] dark:border-[#333D50] border-slate-200 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <div className="pt-4 border-t border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProjectId(project.id)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t.viewDetails}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        lang={lang}
      />
    </section>
  );
};

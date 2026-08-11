import React from 'react';
import { X, Github, ExternalLink, Database, Layout, AlertCircle, ArrowLeft, Layers, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

export interface TranslatedProject {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  purpose: string;
  contribution: string;
  imagePlaceholderTitle: string;
  imagePlaceholderSubtitle: string;
  technologies: string[];
  wireframeFeatures: string[];
  status: string;
  hasDatabase: boolean;
  githubUrl: string;
  liveDemoUrl: string | null;
  badge?: string;
  badgeDesc?: string;
}

interface ProjectDetailsModalProps {
  project: TranslatedProject | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;
  const t = TRANSLATIONS[lang].modal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#172033]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col transition-colors">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#172033] dark:bg-[#172033] bg-slate-50 border-b border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-100 border border-[#333D50] text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-700 hover:text-[#8FA8C7] transition-colors cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <div>
              <span className="text-xs font-semibold text-[#8FA8C7] uppercase tracking-wider block">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                ✨ {project.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#252B38] dark:bg-[#252B38] bg-slate-100 border border-[#333D50] text-[#8FA8C7]">
              {project.status}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#A7A1C8] hover:text-[#F7F7F5] dark:hover:text-[#F7F7F5] hover:bg-[#252B38] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800">
          
          {/* Wireframe Graphic Box */}
          <div className="rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 p-6 relative overflow-hidden shadow-inner">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#333D50] dark:border-[#333D50] border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333D50]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333D50]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333D50]"></div>
                <span className="text-xs font-mono text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-500 ltr:ml-2 rtl:mr-2">
                  {t.uiBlueprint}
                </span>
              </div>
              <span className="text-xs text-[#8FA8C7] font-mono bg-[#252B38] dark:bg-[#252B38] bg-slate-100 px-2.5 py-0.5 rounded border border-[#333D50]">
                {t.wireframe}
              </span>
            </div>

            <div className="text-center py-4">
              <Layout className="w-10 h-10 text-[#8FA8C7] mx-auto mb-2 opacity-90" />
              <h4 className="text-base font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                {project.imagePlaceholderTitle}
              </h4>
              <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 max-w-md mx-auto mt-1">
                {project.imagePlaceholderSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-[#333D50] dark:border-[#333D50] border-slate-200 text-xs">
              {project.wireframeFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 p-2 rounded bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50]/60 dark:border-[#333D50]/60 border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA8C7] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#8FA8C7] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {t.overview}
            </h4>
            <p className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-700 leading-relaxed text-xs sm:text-sm">
              {project.longDescription}
            </p>
          </div>

          {/* Purpose & Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 space-y-1.5">
              <h5 className="text-xs font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 uppercase tracking-wider">
                {t.purpose}
              </h5>
              <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 leading-relaxed">
                {project.purpose}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 space-y-1.5">
              <h5 className="text-xs font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 uppercase tracking-wider">
                {t.contribution}
              </h5>
              <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 leading-relaxed">
                {project.contribution}
              </p>
            </div>
          </div>

          {/* Database Notice */}
          <div className="p-4 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-start gap-3">
            <Database className="w-5 h-5 text-[#8FA8C7] shrink-0 mt-0.5" />
            <div className="text-xs space-y-0.5">
              <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 block">
                {project.hasDatabase ? t.fbNotice : t.noDbNotice}
              </span>
              <p className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600">
                {project.hasDatabase ? t.fbNoticeDesc : t.noDbNoticeDesc}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 uppercase tracking-wider">
              {t.techHeader}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] dark:border-[#333D50] border-slate-300 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3 bg-[#172033] dark:bg-[#172033] bg-slate-50 border-t border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-500 hidden sm:inline">
            {t.repoNote}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] text-xs font-bold transition-colors cursor-pointer shadow-sm"
          >
            {t.backBtn}
          </button>
        </div>

      </div>
    </div>
  );
};

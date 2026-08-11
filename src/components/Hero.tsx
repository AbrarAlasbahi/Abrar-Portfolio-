import React from 'react';
import { ArrowDown, FileDown, Mail, MapPin, GraduationCap, Building2, Loader2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onDownloadCV: () => void;
  isCvGenerating?: boolean;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV, isCvGenerating = false, lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden transition-colors">
      
      {/* Background Subtle Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#8FA8C7]/10 dark:bg-[#8FA8C7]/10 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Top Info Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 px-3.5 rounded-full bg-slate-100 dark:bg-[#252B38]/90 border border-slate-300 dark:border-[#333D50] text-xs text-slate-700 dark:text-[#F7F7F5] shadow-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <GraduationCap className="w-4 h-4 text-[#8FA8C7]" />
              <span>{t.role}</span>
            </span>
            <span className="text-slate-300 dark:text-[#333D50]">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8FA8C7]" />
              <span>{t.location}</span>
            </span>
            <span className="hidden md:inline text-slate-300 dark:text-[#333D50]">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-600 dark:text-[#A7A1C8]">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.targetNote}</span>
            </span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-[#F7F7F5] leading-tight">
              {t.name}
            </h1>
            
            {/* REQUIRED EXACT HEADLINE */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-[#8FA8C7] max-w-3xl mx-auto leading-snug">
              "{t.headline}"
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#A7A1C8] max-w-2xl mx-auto leading-relaxed">
            {t.supportingText}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#8FA8C7]"
            >
              <span>{t.viewProjects}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onDownloadCV}
              disabled={isCvGenerating}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-[#252B38] hover:bg-slate-200 dark:hover:bg-[#333D50] border border-slate-300 dark:border-[#333D50] text-slate-800 dark:text-[#F7F7F5] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 focus:outline-none cursor-pointer shadow-sm disabled:opacity-75"
            >
              {isCvGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#8FA8C7] shrink-0" />
                  <span>{lang === 'ar' ? 'جاري تجهيز السيرة الذاتية...' : 'Preparing your CV...'}</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 text-[#8FA8C7] shrink-0" />
                  <span>{t.downloadCV}</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-200 dark:bg-[#172033]/80 hover:bg-slate-300 dark:hover:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-slate-800 dark:text-[#F7F7F5] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t.contactMe}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].experience;

  return (
    <section id="experience" className="py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-100 border border-[#333D50] dark:border-[#333D50] border-slate-300 text-[#8FA8C7]">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 tracking-tight">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Experience Item Card */}
        <div className="max-w-4xl bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#333D50] dark:border-[#333D50] border-slate-200">
            <div>
              <span className="text-xs font-semibold text-[#8FA8C7] uppercase tracking-wider block mb-1">
                {t.roleType}
              </span>
              <h3 className="text-xl font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                {t.position}
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] dark:border-[#333D50] border-slate-200 text-xs text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 self-start sm:self-auto">
              <Building2 className="w-3.5 h-3.5 text-[#8FA8C7]" />
              <span>{t.organization}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 leading-relaxed">
            {t.description}
          </p>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface EducationProps {
  lang: Language;
}

export const Education: React.FC<EducationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].education;

  return (
    <section id="education" className="py-16 bg-[#252B38]/30 dark:bg-[#252B38]/30 bg-slate-100/50 border-y border-[#333D50]/50 dark:border-[#333D50]/50 border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-300 text-[#8FA8C7]">
            <GraduationCap className="w-5 h-5" />
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

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Degree 1 */}
          <div className="bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-200 rounded-2xl p-6 space-y-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#333D50] dark:border-[#333D50] border-slate-200">
                <span className="text-xs font-semibold text-[#8FA8C7] uppercase tracking-wider">
                  {t.higherEd}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] text-xs font-mono text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800">
                  <Calendar className="w-3 h-3 text-[#8FA8C7]" />
                  {t.year1}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                  {t.degree1}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#8FA8C7]">
                  {t.institution1}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#333D50]/60 dark:border-[#333D50]/60 border-slate-200">
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] text-xs font-mono font-bold text-[#8FA8C7]">
                {t.gpa1}
              </span>
            </div>
          </div>

          {/* Degree 2 */}
          <div className="bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-200 rounded-2xl p-6 space-y-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#333D50] dark:border-[#333D50] border-slate-200">
                <span className="text-xs font-semibold text-[#8FA8C7] uppercase tracking-wider">
                  {t.secondaryEd}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] text-xs font-mono text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800">
                  <BookOpen className="w-3 h-3 text-[#8FA8C7]" />
                  {t.year2}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                  {t.degree2}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#8FA8C7]">
                  {t.institution2}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#333D50]/60 dark:border-[#333D50]/60 border-slate-200">
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] text-xs font-mono font-bold text-[#8FA8C7]">
                {t.gpa2}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Languages as LangIcon, Globe2, Check } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface LanguagesProps {
  lang: Language;
}

export const Languages: React.FC<LanguagesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].languages;

  const languagesList = [
    { name: t.arabic, proficiency: t.arabicProf, level: '100%' },
    { name: t.english, proficiency: t.englishProf, level: '88%' },
  ];

  return (
    <section id="languages" className="py-16 bg-slate-100/50 dark:bg-[#252B38]/30 border-y border-slate-200 dark:border-[#333D50]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-white dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-[#8FA8C7]">
            <LangIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F7F7F5] tracking-tight">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A7A1C8]">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Languages Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {languagesList.map((language) => (
            <div
              key={language.name}
              className="bg-white dark:bg-[#252B38] border border-slate-200 dark:border-[#333D50] rounded-2xl p-6 space-y-4 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-[#172033] text-[#8FA8C7]">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F7F7F5]">
                    {language.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-[#172033] border border-slate-300 dark:border-[#333D50] text-[#8FA8C7]">
                  {language.proficiency}
                </span>
              </div>

              {/* Progress visual indicator */}
              <div className="w-full bg-slate-100 dark:bg-[#172033] h-2 rounded-full overflow-hidden border border-slate-300 dark:border-[#333D50]">
                <div
                  className="bg-[#8FA8C7] h-full rounded-full transition-all duration-500"
                  style={{ width: language.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

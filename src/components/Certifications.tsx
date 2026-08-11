import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface CertificationsProps {
  lang: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].certifications;

  return (
    <section id="certifications" className="py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-white dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-[#8FA8C7]">
            <Award className="w-5 h-5" />
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#252B38] border border-slate-200 dark:border-[#333D50] rounded-xl p-4.5 flex items-start gap-3 shadow-sm hover:border-[#8FA8C7]/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-[#172033] text-[#8FA8C7] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F7F7F5] leading-snug">
                  {item}
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-[#A7A1C8] font-medium block mt-1">
                  {t.verified}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { UserCheck, Laptop, Layers, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-16 bg-slate-100/70 dark:bg-[#252B38]/40 border-y border-slate-200 dark:border-[#333D50]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-white dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-[#8FA8C7]">
            <UserCheck className="w-5 h-5" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Content Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#252B38] border border-slate-200 dark:border-[#333D50] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md flex flex-col justify-between">
            <div className="space-y-4 text-slate-800 dark:text-[#F7F7F5] text-sm sm:text-base leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            {/* Key Focus Highlights */}
            <div className="pt-4 border-t border-slate-200 dark:border-[#333D50] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#172033]/60 border border-slate-200 dark:border-[#333D50]/60">
                <Laptop className="w-5 h-5 text-[#8FA8C7] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-[#F7F7F5] text-xs sm:text-sm">
                    {t.softwareDev}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-[#A7A1C8] mt-0.5">
                    {t.softwareDevDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#172033]/60 border border-slate-200 dark:border-[#333D50]/60">
                <Layers className="w-5 h-5 text-[#8FA8C7] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-[#F7F7F5] text-xs sm:text-sm">
                    {t.dbWeb}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-[#A7A1C8] mt-0.5">
                    {t.dbWebDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Summary & Candidate Profile (Clean Education/GPA Block) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* NEW REQUIRED EDUCATION & GPA SUMMARY BLOCK */}
            <div className="bg-white dark:bg-[#252B38] border border-slate-200 dark:border-[#333D50] rounded-2xl p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-[#333D50]">
                <GraduationCap className="w-5 h-5 text-[#8FA8C7]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-[#F7F7F5]">
                  {t.academicBlockTitle}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-[#A7A1C8] block uppercase">
                    {t.degree}
                  </span>
                  <p className="font-bold text-slate-900 dark:text-[#F7F7F5] mt-0.5">
                    {t.academicDegree}
                  </p>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-[#A7A1C8]">
                  <MapPin className="w-3.5 h-3.5 text-[#8FA8C7] mt-0.5 shrink-0" />
                  <span>{t.academicInstitution}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-[#333D50]/60 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-800 dark:text-[#F7F7F5] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#8FA8C7]" />
                    {t.graduationYear}
                  </span>

                  {/* Subtle, professional GPA badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#172033] border border-slate-300 dark:border-[#333D50]">
                    <span className="text-[11px] font-medium text-slate-600 dark:text-[#A7A1C8]">
                      {t.gpaLabel}:
                    </span>
                    <span className="font-mono font-bold text-slate-900 dark:text-[#8FA8C7]">
                      {t.gpaValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Candidate Profile Note */}
            <div className="bg-slate-50 dark:bg-[#172033] border border-slate-200 dark:border-[#333D50] rounded-2xl p-5 space-y-2">
              <span className="text-[11px] font-semibold text-slate-700 dark:text-[#8FA8C7] uppercase tracking-wider block">
                {t.companyAlignment}
              </span>
              <p className="text-xs text-slate-600 dark:text-[#A7A1C8] leading-relaxed">
                {t.alignmentDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

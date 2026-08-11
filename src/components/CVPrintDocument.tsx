import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface CVPrintDocumentProps {
  lang: Language;
}

export const CVPrintDocument: React.FC<CVPrintDocumentProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const tHero = TRANSLATIONS[lang].hero;
  const tAbout = TRANSLATIONS[lang].about;
  const tExp = TRANSLATIONS[lang].experience;
  const tProj = TRANSLATIONS[lang].projects;
  const tCerts = TRANSLATIONS[lang].certifications;
  const tLangs = TRANSLATIONS[lang].languages;
  const tEdu = TRANSLATIONS[lang].education;

  const name = isAr ? 'أبرار الأصبحي' : 'Abrar Alasbahi';
  const title = tHero.role;
  const location = tHero.location;
  const email = 'alasbhiabrar@gmail.com';
  const phone = '+967 772 996 116';

  const fontFamily = isAr
    ? "'Cairo', 'Tajawal', 'Noto Sans Arabic', 'Segoe UI', Arial, sans-serif"
    : "'Inter', 'Poppins', Arial, sans-serif";

  return (
    <div
      id="cv-print-root"
      dir={isAr ? 'rtl' : 'ltr'}
      lang={lang}
      className="cv-print-root hidden print:block bg-white text-slate-900"
      style={{
        fontFamily,
        direction: isAr ? 'rtl' : 'ltr',
        textAlign: isAr ? 'right' : 'left',
        lineHeight: 1.5,
        color: '#0f172a',
        letterSpacing: 'normal',
      }}
    >
      {/* HEADER SECTION */}
      <header className="cv-print-card pb-3 mb-4 border-b-2 border-blue-900">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 m-0 tracking-normal leading-tight">
              {name}
            </h1>
            <h2 className="text-sm font-bold text-blue-600 mt-0.5 mb-2">
              {title}
            </h2>
            <div className="text-xs text-slate-600 flex flex-wrap gap-3 items-center">
              <span>📍 {location}</span>
              <span>•</span>
              <span>✉️ {email}</span>
              <span>•</span>
              <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>📞 {phone}</span>
            </div>
          </div>
        </div>
      </header>

      {/* PROFESSIONAL PROFILE */}
      <section className="mb-4">
        <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
          {isAr ? 'الملف المهني' : 'Professional Profile'}
        </h3>
        <p className="text-xs text-slate-700 leading-relaxed m-0">
          {tAbout.p1}
        </p>
      </section>

      {/* EDUCATION & ACADEMIC GPA */}
      <section className="mb-4">
        <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
          {isAr ? 'المؤهل الأكاديمي والتقدير' : 'Academic Education & GPA'}
        </h3>
        <div className="space-y-2">
          <div className="cv-print-card p-2.5 bg-slate-50 border border-slate-200 rounded-md flex justify-between items-center">
            <div>
              <div className="text-xs font-bold text-slate-900">
                {tAbout.academicDegree}
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5">
                {tAbout.academicInstitution} ({tAbout.graduationYear})
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 text-blue-800 font-bold text-[11px] px-2.5 py-1 rounded whitespace-nowrap">
              {tEdu.gpa1}
            </div>
          </div>

          <div className="cv-print-card p-2.5 bg-slate-50 border border-slate-200 rounded-md flex justify-between items-center">
            <div>
              <div className="text-xs font-bold text-slate-900">
                {tEdu.degree2}
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5">
                {tEdu.institution2}
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 text-blue-800 font-bold text-[11px] px-2.5 py-1 rounded whitespace-nowrap">
              {tEdu.gpa2}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL EXPERIENCE */}
      <section className="mb-4">
        <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
          {isAr ? 'الخبرة العملية والتطبيقية' : 'Practical & Teaching Experience'}
        </h3>
        <div className="cv-print-card p-2.5 bg-slate-50 border border-slate-200 rounded-md">
          <div className="text-xs font-bold text-slate-900">
            {tExp.position}
          </div>
          <div className="text-[11px] font-semibold text-blue-600 mt-0.5">
            {tExp.organization}
          </div>
          <p className="text-[11px] text-slate-700 mt-1 m-0 leading-normal">
            {tExp.description}
          </p>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="mb-4">
        <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
          {isAr ? 'المهارات التقنية والبرمجية' : 'Technical & Core Skills'}
        </h3>
        <div className="cv-print-card flex flex-wrap gap-1.5">
          {['Flutter', 'Java', 'PHP', 'SQL', 'C++', 'C#', 'Firebase', 'React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'JavaScript', 'Microsoft Office', 'Networking Fundamentals'].map((s) => (
            <span
              key={s}
              className="tech-tag bg-slate-100 border border-slate-300 text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded"
              dir="ltr"
              style={{ unicodeBidi: 'isolate' }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS - CONTINUOUS FLOW */}
      <section className="cv-print-projects-wrapper mb-4">
        <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
          {isAr ? 'المشاريع البارزة والتطبيقية' : 'Featured Technical Projects'}
        </h3>
        
        <div className="space-y-2">
          {/* Project 1: Personal Portfolio Website */}
          <div className="cv-print-card p-2.5 bg-slate-50 border border-slate-200 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-900">
                {isAr ? 'الموقع الشخصي والملف المهني' : 'Personal Portfolio Website'}
              </span>
              <span className="tech-tag text-[10px] text-blue-700 font-semibold" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                React 18, TS, Vite, AI
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 m-0 leading-normal">
              {tProj.p4.description}
            </p>
          </div>

          {/* Project 3: Barur Accessories */}
          <div className="cv-print-card p-2.5 bg-slate-50 border border-slate-200 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-900">Barur Accessories</span>
              <span className="tech-tag text-[10px] text-blue-700 font-semibold" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                React 19, TS, Vite, Node, GenAI
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 m-0 leading-normal">
              {tProj.p2.description}
            </p>
          </div>

          {/* Project 4: Al-Hammadi Phone */}
          <div className="cv-print-card p-2.5 bg-slate-50 border border-slate-200 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-900">Al-Hammadi Phone</span>
              <span className="tech-tag text-[10px] text-blue-700 font-semibold" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                PHP, JS, HTML/CSS
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 m-0 leading-normal">
              {tProj.p3.description}
            </p>
          </div>
        </div>
      </section>

      {/* DIPLOMAS & LANGUAGES */}
      <div className="grid grid-cols-2 gap-4">
        {/* COURSES */}
        <section className="cv-print-card">
          <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
            {isAr ? 'الدورات والدبلومات' : 'Diplomas & Training'}
          </h3>
          <ul className={`m-0 text-[11px] text-slate-700 space-y-1 ${isAr ? 'pr-4 list-disc' : 'pl-4 list-disc'}`}>
            {tCerts.items.map((c: string, idx: number) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </section>

        {/* LANGUAGES */}
        <section className="cv-print-card">
          <h3 className="cv-print-heading text-xs font-extrabold text-blue-900 uppercase border-b border-slate-300 pb-1 mb-2 tracking-normal">
            {isAr ? 'اللغات' : 'Languages'}
          </h3>
          <ul className={`m-0 text-[11px] text-slate-700 space-y-1 ${isAr ? 'pr-4 list-disc' : 'pl-4 list-disc'}`}>
            <li><strong>{tLangs.arabic}</strong> ({tLangs.arabicProf})</li>
            <li><strong>{tLangs.english}</strong> ({tLangs.englishProf})</li>
          </ul>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="cv-print-card mt-6 pt-2 border-t border-slate-200 text-[10px] text-slate-400 flex justify-between items-center">
        <span>Abrar Alasbahi — Curriculum Vitae</span>
        <span>{isAr ? 'صفحة 1 من 2' : 'Page 1 of 2'}</span>
      </footer>
    </div>
  );
};

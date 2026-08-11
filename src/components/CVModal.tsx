import React, { useState } from 'react';
import { X, FileDown, Printer, GraduationCap, Briefcase, MapPin, Mail, Phone, Loader2, AlertCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { generateAndDownloadCV } from '../utils/cvGenerator';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onDownloadCV?: () => void;
  isCvGenerating?: boolean;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, lang, onDownloadCV, isCvGenerating: externalIsGenerating = false }) => {
  const [internalIsGenerating, setInternalIsGenerating] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  if (!isOpen) return null;
  const t = TRANSLATIONS[lang].cvModal;
  const tHero = TRANSLATIONS[lang].hero;
  const tAbout = TRANSLATIONS[lang].about;
  const tExp = TRANSLATIONS[lang].experience;
  const tProj = TRANSLATIONS[lang].projects;
  const tCerts = TRANSLATIONS[lang].certifications;
  const tLangs = TRANSLATIONS[lang].languages;

  const isGenerating = externalIsGenerating || internalIsGenerating;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (onDownloadCV) {
      onDownloadCV();
      return;
    }

    try {
      setInternalIsGenerating(true);
      setPdfError(null);
      await generateAndDownloadCV(lang);
    } catch (err: any) {
      console.error('PDF Generation Error:', err);
      setPdfError(
        err?.message || (
          lang === 'ar' 
            ? 'حدث خطأ أثناء تحميل السيرة الذاتية. يرجى المحاولة مرة أخرى.' 
            : 'An error occurred while generating the PDF. Please try again.'
        )
      );
    } finally {
      setInternalIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#172033]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-300 rounded-2xl shadow-2xl my-6 flex flex-col max-h-[92vh] overflow-hidden transition-colors">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#172033] dark:bg-[#172033] bg-slate-50 border-b border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h3 className="text-base font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 flex items-center gap-2">
              <FileDown className="w-5 h-5 text-[#8FA8C7]" />
              <span>{t.title}</span>
            </h3>
            <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              disabled={isGenerating}
              className="px-3 py-1.5 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-200 hover:bg-[#333D50] text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{t.printBtn}</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="px-3.5 py-1.5 rounded-lg bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm disabled:opacity-75"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{lang === 'ar' ? 'جاري الإنشاء...' : 'Generating...'}</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  <span>{t.downloadBtn}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A7A1C8] hover:text-[#F7F7F5] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Error Alert Banner if any */}
        {pdfError && (
          <div className="px-6 py-2.5 bg-red-500/10 border-b border-red-500/30 flex items-center gap-2 text-xs text-red-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{pdfError}</span>
          </div>
        )}

        {/* CV Document View Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#172033] dark:bg-[#172033] bg-slate-100 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 space-y-6">
          <div
            id="cv-document"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className="max-w-3xl mx-auto bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-300 rounded-xl p-6 sm:p-10 space-y-6 print:border-none print:shadow-none print:p-0 print:bg-white print:text-slate-900 shadow-md"
          >
            
            {/* Header Info */}
            <div className="border-b border-[#333D50] dark:border-[#333D50] border-slate-200 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                {lang === 'ar' ? 'أبرار الأصبحي' : 'Abrar Alasbahi'}
              </h1>
              <p className="text-sm font-bold text-[#8FA8C7] mt-1">
                {tHero.role}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-2.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8FA8C7]" />
                  {tHero.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#8FA8C7]" />
                  alasbhiabrar@gmail.com
                </span>
                <span>•</span>
                <a
                  href="tel:+967772996116"
                  dir="ltr"
                  style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                  className="flex items-center gap-1 hover:text-[#8FA8C7] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8FA8C7] shrink-0" />
                  <span>+967 772 996 116</span>
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7]">
                {t.profProfile}
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-700 leading-relaxed">
                {tAbout.p1}
              </p>
            </div>

            {/* Academic Qualification & GPA Block */}
            <div className="space-y-2 pt-2 border-t border-[#333D50] dark:border-[#333D50] border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {tAbout.academicBlockTitle}
              </h2>
              <div className="p-3.5 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 block">
                    {tAbout.academicDegree}
                  </span>
                  <span className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 block">
                    {tAbout.academicInstitution} ({tAbout.graduationYear})
                  </span>
                </div>
                <div className="px-3 py-1 rounded bg-[#252B38] dark:bg-[#252B38] bg-slate-200 border border-[#333D50] text-[#8FA8C7] font-mono font-bold self-start sm:self-auto">
                  {TRANSLATIONS[lang].education.gpa1}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 block">
                    {TRANSLATIONS[lang].education.degree2}
                  </span>
                  <span className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 block">
                    {TRANSLATIONS[lang].education.institution2}
                  </span>
                </div>
                <div className="px-3 py-1 rounded bg-[#252B38] dark:bg-[#252B38] bg-slate-200 border border-[#333D50] text-[#8FA8C7] font-mono font-bold self-start sm:self-auto">
                  {TRANSLATIONS[lang].education.gpa2}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2 pt-2 border-t border-[#333D50] dark:border-[#333D50] border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7] flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {tExp.title}
              </h2>
              <div className="p-3.5 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 space-y-1 text-xs">
                <div className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">{tExp.position}</div>
                <div className="text-[#8FA8C7] font-semibold">{tExp.organization}</div>
                <p className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 pt-1 leading-relaxed">{tExp.description}</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2 pt-2 border-t border-[#333D50] dark:border-[#333D50] border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7]">
                {t.techSkills}
              </h2>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['Flutter', 'Java', 'PHP', 'SQL', 'C++', 'Firebase', 'HTML & CSS', 'JavaScript', 'Microsoft Office', 'Networking Fundamentals'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded bg-[#172033] dark:bg-[#172033] bg-slate-100 border border-[#333D50] text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 text-[11px] font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-2 pt-2 border-t border-[#333D50] dark:border-[#333D50] border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7]">
                {t.featuredProjects}
              </h2>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200">
                  <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 block">{lang === 'ar' ? 'الموقع الشخصي والملف المهني' : 'Personal Portfolio Website'}</span>
                  <p className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-0.5">{tProj.p4.description}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200">
                  <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 block">Barur Accessories</span>
                  <p className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-0.5">{tProj.p2.description}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200">
                  <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 block">{lang === 'ar' ? 'الحمادي فون (Al-Hammadi Phone)' : 'Al-Hammadi Phone'}</span>
                  <p className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-0.5">{tProj.p3.description}</p>
                </div>
              </div>
            </div>

            {/* Courses & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-[#333D50] dark:border-[#333D50] border-slate-200">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7] mb-2">
                  {t.coursesDiplomas}
                </h2>
                <ul className="space-y-1 text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-700">
                  {tCerts.items.map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FA8C7]"></span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7] mb-2">
                  {t.languages}
                </h2>
                <ul className="space-y-1 text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FA8C7]"></span>
                    <span>{tLangs.arabic} ({tLangs.arabicProf})</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FA8C7]"></span>
                    <span>{tLangs.english} ({tLangs.englishProf})</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-3 bg-[#172033] dark:bg-[#172033] bg-slate-50 border-t border-[#333D50] dark:border-[#333D50] border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] text-xs font-bold cursor-pointer transition-colors shadow-sm"
          >
            {t.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
};

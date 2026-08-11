import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, Code2, FileDown, Loader2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onDownloadCV: () => void;
  isCvGenerating?: boolean;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadCV, isCvGenerating = false, lang }) => {
  const t = TRANSLATIONS[lang].footer;
  const tNav = TRANSLATIONS[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: tNav.home, href: '#home' },
    { name: tNav.about, href: '#about' },
    { name: tNav.projects, href: '#projects' },
    { name: tNav.experience, href: '#experience' },
    { name: tNav.education, href: '#education' },
    { name: tNav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[#172033] dark:bg-[#172033] bg-slate-100 border-t border-[#333D50] dark:border-[#333D50] border-slate-300 pt-12 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#333D50]/60 dark:border-[#333D50]/60 border-slate-300">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#252B38] dark:bg-[#252B38] bg-slate-200 border border-[#333D50] flex items-center justify-center text-[#8FA8C7] font-bold text-base shadow-sm">
                {lang === 'ar' ? 'أ' : 'AA'}
              </div>
              <span className="font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 text-lg">
                {lang === 'ar' ? 'أبرار الأصبحي' : 'Abrar Alasbahi'}
              </span>
            </div>

            <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 max-w-sm leading-relaxed">
              {t.roleDesc}
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7]">
              {t.navTitle}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 hover:text-[#8FA8C7] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact & CV */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8FA8C7]">
              {t.contactTitle}
            </h4>
            <div className="space-y-1.5 text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8FA8C7]" />
                <a href="mailto:alasbhiabrar@gmail.com" className="hover:text-[#8FA8C7] transition-colors">
                  alasbhiabrar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8FA8C7] shrink-0" />
                <a
                  href="tel:+967772996116"
                  dir="ltr"
                  style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                  className="hover:text-[#8FA8C7] transition-colors inline-block"
                >
                  +967 772 996 116
                </a>
              </div>
            </div>

            <button
              onClick={onDownloadCV}
              disabled={isCvGenerating}
              className="mt-2 text-xs font-semibold text-[#8FA8C7] hover:underline cursor-pointer flex items-center gap-1.5 disabled:opacity-75"
            >
              {isCvGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
                  <span>{lang === 'ar' ? 'جاري تجهيز السيرة الذاتية...' : 'Preparing your CV...'}</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5 shrink-0" />
                  <span>{tNav.downloadCV} (PDF)</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-500">
          <p>
            © {new Date().getFullYear()} {lang === 'ar' ? 'أبرار الأصبحي' : 'Abrar Alasbahi'}. {t.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-200 border border-[#333D50] text-[#8FA8C7] hover:text-[#F7F7F5] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

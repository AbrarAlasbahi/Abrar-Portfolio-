import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, Sun, Moon, Globe, Loader2 } from 'lucide-react';
import { Language, Theme, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onDownloadCV: () => void;
  isCvGenerating?: boolean;
  activeSection: string;
  lang: Language;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadCV,
  isCvGenerating = false,
  activeSection,
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home', id: 'home' },
    { name: t.about, href: '#about', id: 'about' },
    { name: t.projects, href: '#projects', id: 'projects' },
    { name: t.experience, href: '#experience', id: 'experience' },
    { name: t.education, href: '#education', id: 'education' },
    { name: t.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#172033]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#333D50]/50 py-3 shadow-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#8FA8C7] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] flex items-center justify-center text-slate-800 dark:text-[#8FA8C7] font-bold text-lg group-hover:border-[#8FA8C7] transition-colors shadow-sm">
              {lang === 'ar' ? 'أ' : 'AA'}
            </div>
            <div>
              <span className="block font-semibold text-slate-900 dark:text-[#F7F7F5] text-base tracking-tight group-hover:text-[#8FA8C7] transition-colors">
                {lang === 'ar' ? 'أبرار الأصبحي' : 'Abrar Alasbahi'}
              </span>
              <span className="block text-xs font-medium text-slate-600 dark:text-[#A7A1C8]">
                {lang === 'ar' ? 'تقنية المعلومات' : 'Information Technology'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-[#252B38]/80 p-1.5 rounded-full border border-slate-200 dark:border-[#333D50]/80 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#8FA8C7] text-[#172033] font-semibold shadow-sm'
                      : 'text-slate-700 dark:text-[#F7F7F5] hover:text-[#8FA8C7] dark:hover:text-[#8FA8C7] hover:bg-slate-200 dark:hover:bg-[#333D50]/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Tools: Lang Toggle, Theme Toggle, CV Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Button */}
            <button
              onClick={onToggleLang}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#252B38] hover:bg-slate-200 dark:hover:bg-[#333D50] border border-slate-300 dark:border-[#333D50] text-slate-800 dark:text-[#F7F7F5] text-xs font-semibold transition-all cursor-pointer shadow-sm"
              title="English / العربية"
            >
              <Globe className="w-3.5 h-3.5 text-[#8FA8C7]" />
              <span>{t.languageToggle}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#252B38] hover:bg-slate-200 dark:hover:bg-[#333D50] border border-slate-300 dark:border-[#333D50] text-slate-700 dark:text-[#8FA8C7] transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span className="text-xs font-semibold hidden md:inline text-slate-200">{lang === 'ar' ? 'مضيء' : 'Light'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-700" />
                  <span className="text-xs font-semibold hidden md:inline text-slate-700">{lang === 'ar' ? 'داكن' : 'Dark'}</span>
                </>
              )}
            </button>

            {/* Download CV Button */}
            <button
              onClick={onDownloadCV}
              disabled={isCvGenerating}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] text-xs sm:text-sm font-bold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8FA8C7] cursor-pointer disabled:opacity-75"
            >
              {isCvGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                  <span>{lang === 'ar' ? 'جاري تجهيز السيرة الذاتية...' : 'Preparing your CV...'}</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 shrink-0" />
                  <span>{t.downloadCV}</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-slate-800 dark:text-[#F7F7F5] hover:bg-slate-200 dark:hover:bg-[#333D50] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#172033]/95 border-b border-slate-200 dark:border-[#333D50] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#8FA8C7] text-[#172033] font-bold'
                      : 'text-slate-800 dark:text-[#F7F7F5] hover:bg-slate-100 dark:hover:bg-[#252B38]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#172033]"></div>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-[#333D50] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* Mobile Language Switcher */}
              <button
                onClick={onToggleLang}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-slate-800 dark:text-[#F7F7F5] text-xs font-semibold cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#8FA8C7]" />
                <span>{t.languageToggle}</span>
              </button>

              {/* Mobile Theme Toggle */}
              <button
                onClick={onToggleTheme}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#252B38] border border-slate-300 dark:border-[#333D50] text-slate-800 dark:text-[#F7F7F5] text-xs font-semibold cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-300" />
                    <span>{lang === 'ar' ? 'مضيء' : 'Light Mode'}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-700" />
                    <span>{lang === 'ar' ? 'داكن' : 'Dark Mode'}</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadCV();
              }}
              disabled={isCvGenerating}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#8FA8C7] text-[#172033] font-bold text-xs transition-colors shadow-sm cursor-pointer disabled:opacity-75"
            >
              {isCvGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                  <span>{lang === 'ar' ? 'جاري تجهيز السيرة الذاتية...' : 'Preparing your CV...'}</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 shrink-0" />
                  <span>{t.downloadCV}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

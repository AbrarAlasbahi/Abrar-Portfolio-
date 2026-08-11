import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { CVPrintDocument } from './components/CVPrintDocument';
import { Language, Theme } from './data/translations';
import { generateAndDownloadCV } from './utils/cvGenerator';
import { AlertCircle, X } from 'lucide-react';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio_theme') as Theme;
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });
  const [isCvGenerating, setIsCvGenerating] = useState(false);
  const [cvError, setCvError] = useState<string | null>(null);

  const handleDownloadCV = async () => {
    try {
      setIsCvGenerating(true);
      setCvError(null);
      await generateAndDownloadCV(lang);
    } catch (err: any) {
      console.error('CV Generation failed:', err);
      setCvError(
        err?.message || (
          lang === 'ar'
            ? 'فشل تحميل السيرة الذاتية. يرجى التكرم بالمحاولة مرة أخرى.'
            : 'Failed to generate CV. Please try again.'
        )
      );
    } finally {
      setIsCvGenerating(false);
    }
  };

  // Sync document direction and lang attribute
  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  // Sync theme class on <html> element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#172033] text-slate-900 dark:text-[#F7F7F5] flex flex-col font-sans transition-colors duration-200 selection:bg-[#8FA8C7] selection:text-[#172033]">
      
      {/* Error Toast Banner for CV Generation */}
      {cvError && (
        <div className="fixed top-20 right-4 left-4 sm:left-auto sm:max-w-md z-50 p-4 rounded-xl bg-red-900/90 text-white border border-red-500 shadow-2xl flex items-start gap-3 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300">
          <AlertCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
          <div className="flex-1 text-xs leading-relaxed">
            <span className="font-bold block mb-1">{lang === 'ar' ? 'تنبيه السيرة الذاتية' : 'CV Download Alert'}</span>
            <span>{cvError}</span>
          </div>
          <button
            onClick={() => setCvError(null)}
            className="p-1 hover:bg-red-800 rounded-lg transition-colors text-red-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        onDownloadCV={handleDownloadCV}
        isCvGenerating={isCvGenerating}
        activeSection={activeSection}
        lang={lang}
        theme={theme}
        onToggleLang={handleToggleLang}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onDownloadCV={handleDownloadCV} isCvGenerating={isCvGenerating} lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Certifications lang={lang} />
        <Languages lang={lang} />
        <Contact onDownloadCV={handleDownloadCV} isCvGenerating={isCvGenerating} lang={lang} />
      </main>

      {/* Footer */}
      <Footer onDownloadCV={handleDownloadCV} isCvGenerating={isCvGenerating} lang={lang} />

      {/* CV Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        lang={lang}
        onDownloadCV={handleDownloadCV}
        isCvGenerating={isCvGenerating}
      />

      {/* Hidden CV Print Document for Native A4 Printing & PDF Export */}
      <CVPrintDocument lang={lang} />
    </div>
  );
}

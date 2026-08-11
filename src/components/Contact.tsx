import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, FileDown, MessageSquare, Loader2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactProps {
  onDownloadCV: () => void;
  isCvGenerating?: boolean;
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ onDownloadCV, isCvGenerating = false, lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const t = TRANSLATIONS[lang].contact;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSending(true);

    const subject = encodeURIComponent(`رسالة موقع من: ${formData.name}`);
    const body = encodeURIComponent(`الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\n\nالرسالة:\n${formData.message}`);
    
    // Open default mail client addressed to user email
    window.location.href = `mailto:alasbhiabrar@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-300 text-xs font-semibold text-[#8FA8C7] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-2">
            {t.supporting}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contacts Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-200 rounded-2xl p-6 space-y-6 shadow-md">
              <h3 className="text-base font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 pb-3 border-b border-[#333D50] dark:border-[#333D50] border-slate-200">
                {t.directContacts}
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-200 text-[#8FA8C7] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-semibold text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-500 block uppercase">
                      {t.emailLabel}
                    </span>
                    <a
                      href="mailto:alasbhiabrar@gmail.com"
                      className="text-xs sm:text-sm font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 hover:text-[#8FA8C7] transition-colors truncate block"
                    >
                      alasbhiabrar@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('alasbhiabrar@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] text-[#8FA8C7] hover:text-[#F7F7F5] transition-colors cursor-pointer shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-200 text-[#8FA8C7] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-500 block uppercase">
                      {t.phoneLabel}
                    </span>
                    <a
                      href="tel:+967772996116"
                      dir="ltr"
                      style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                      className="text-xs sm:text-sm font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 hover:text-[#8FA8C7] transition-colors inline-block"
                    >
                      {t.phoneValue || "+967 772 996 116"}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+967772996116', 'phone')}
                  className="p-2 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] text-[#8FA8C7] hover:text-[#F7F7F5] transition-colors cursor-pointer shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-200 text-[#8FA8C7] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-500 block uppercase">
                    {t.locationLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                    {lang === 'ar' ? 'تعز، اليمن' : 'Taiz, Yemen'}
                  </span>
                </div>
              </div>

              {/* Download CV CTA */}
              <div className="pt-2">
                <button
                  onClick={onDownloadCV}
                  disabled={isCvGenerating}
                  className="w-full py-3 px-4 rounded-xl bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-75"
                >
                  {isCvGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      <span>{lang === 'ar' ? 'جاري تجهيز السيرة الذاتية...' : 'Preparing your CV...'}</span>
                    </>
                  ) : (
                    <>
                      <FileDown className="w-4 h-4 shrink-0" />
                      <span>{t.downloadCVBtn}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#252B38] dark:bg-[#252B38] bg-white border border-[#333D50] dark:border-[#333D50] border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="pb-5 border-b border-[#333D50] dark:border-[#333D50] border-slate-200 mb-6">
              <h3 className="text-base sm:text-lg font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                {t.formTitle}
              </h3>
              <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-1">
                {t.formSubtitle}
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#8FA8C7]/20 text-[#8FA8C7] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900">
                    {t.successTitle}
                  </h4>
                  <p className="text-xs text-[#A7A1C8] dark:text-[#A7A1C8] text-slate-600 mt-1 max-w-md mx-auto">
                    {t.successDesc}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-lg bg-[#252B38] dark:bg-[#252B38] bg-slate-200 border border-[#333D50] text-xs font-semibold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 hover:bg-[#333D50] transition-colors"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Recipient Email / Send To */}
                <div>
                  <label className="block text-xs font-semibold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 mb-1.5">
                    {t.recipientLabel || (lang === 'ar' ? 'إرسال إلى (البريد المستلم)' : 'Send To (Recipient)')}
                  </label>
                  <input
                    type="email"
                    readOnly
                    value="alasbhiabrar@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#172033]/80 dark:bg-[#172033]/80 bg-slate-100 border border-[#333D50] text-[#8FA8C7] text-xs font-mono focus:outline-none cursor-default select-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 mb-1.5">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-300 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#8FA8C7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 mb-1.5">
                    {t.emailInputLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-300 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#8FA8C7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-800 mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#172033] dark:bg-[#172033] bg-slate-50 border border-[#333D50] dark:border-[#333D50] border-slate-300 text-[#F7F7F5] dark:text-[#F7F7F5] text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#8FA8C7] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 px-4 rounded-xl bg-[#8FA8C7] hover:bg-[#A7A1C8] text-[#172033] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? t.sending : t.sendBtn}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

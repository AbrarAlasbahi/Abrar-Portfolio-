import { Language } from '../data/translations';

export async function generateAndDownloadCV(lang: Language): Promise<void> {
  try {
    if ('fonts' in document) {
      await document.fonts.ready;
    }

    // Brief delay to ensure complete DOM rendering
    await new Promise((resolve) => setTimeout(resolve, 100));

    const originalTitle = document.title;
    const filename = 'Abrar_Alasbahi_CV';
    document.title = filename;

    // Trigger native browser print flow
    window.print();

    // Restore original document title after print dialog closes
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  } catch (err: any) {
    console.error('Print CV Error:', err);
    throw new Error(
      lang === 'ar'
        ? 'حدث خطأ أثناء إعداد السيرة الذاتية للطباعة: ' + (err?.message || 'خطأ في النظام')
        : 'Failed to prepare CV for print/export: ' + (err?.message || 'System error')
    );
  }
}

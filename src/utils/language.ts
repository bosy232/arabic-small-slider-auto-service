export function getBrowserLanguage(): string {
  // Get browser language with fallback
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Check if it's Arabic (includes all Arabic variants like ar-SA, ar-EG, etc.)
  return browserLang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

export function setDocumentLanguage(isArabic: boolean): void {
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.lang = isArabic ? 'ar' : 'en';
}
'use client';

import { useTranslation } from 'next-i18next';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ALFarabi</h3>
            <p className="text-gray-400">
              Providing professional workforce supply and project execution services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.address')}</h4>
            <p className="text-gray-400">{t('footer.phone')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  },
  localePath: path.resolve('./public/locales'),
  ns: ['common', 'home', 'services', 'crew', 'contact', 'admin'],
  defaultNS: 'common',
};

#!/usr/bin/env node

const shelljs = require('shelljs');
const { locales } = require('./extract');

shelljs.config.silent = true;

shelljs.echo(`Language compilation ${locales.join(', ')} (${locales.length} languages)`);

locales.forEach(lang => {
  shelljs.echo(`Compiling language '${lang}.json'`);

  const command = [
    'formatjs compile',
    `lang/${lang}.json`,
    `--ast --out-file compiled-lang/${lang}.json`,
  ].join(' ');

  shelljs.exec(command);
});

// Extract to default locale
// Check if exist lang for each other locale
// If exist, open the existing file and compare with default locale, adding new keys

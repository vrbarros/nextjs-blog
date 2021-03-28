#!/usr/bin/env node

const shelljs = require('shelljs');

const locales = ['en', 'pt-br'];

shelljs.config.silent = true;

shelljs.echo(`Generating language extraction ${locales.join(', ')} (${locales.length} languages)`);

locales.forEach(lang => {
  shelljs.echo(`Extracting language '${lang}.json'`);

  const command = [
    'formatjs extract',
    '"{pages,components,containers}/**/*.js"',
    `--out-file lang/${lang}.json`,
    '--id-interpolation-pattern "[sha512:contenthash:base64:6]"',
  ].join(' ');

  shelljs.exec(command);
});

module.exports = { locales };

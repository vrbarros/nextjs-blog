import { shouldPolyfill as shouldPolyfillIntlGetCanonicalLocales } from '@formatjs/intl-getcanonicallocales/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlLocale } from '@formatjs/intl-locale/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlPluralRules } from '@formatjs/intl-pluralrules/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlNumberFormat } from '@formatjs/intl-numberformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlRelativeTimeFormat } from '@formatjs/intl-relativetimeformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlDateTimeFormat } from '@formatjs/intl-datetimeformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlDisplayNames } from '@formatjs/intl-displaynames/should-polyfill';
import { shouldPolyfill as shouldPolyfillIntlListFormat } from '@formatjs/intl-listformat/should-polyfill';

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function polyfill(locale) {
  // This platform already supports Intl.getCanonicalLocales
  if (shouldPolyfillIntlGetCanonicalLocales()) {
    await import('@formatjs/intl-getcanonicallocales/polyfill');
  }

  if (shouldPolyfillIntlLocale()) {
    await import('@formatjs/intl-locale/polyfill');
  }

  if (shouldPolyfillIntlPluralRules()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-pluralrules/polyfill');
  }

  if (Intl.PluralRules.polyfilled) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (locale) {
      case 'pt-br':
        await import('@formatjs/intl-pluralrules/locale-data/pt');
        break;
      default:
        await import('@formatjs/intl-pluralrules/locale-data/en');
        break;
    }
  }

  if (shouldPolyfillIntlNumberFormat()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-numberformat/polyfill');
  }

  if (Intl.NumberFormat.polyfilled) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (locale) {
      case 'pt-br':
        await import('@formatjs/intl-numberformat/locale-data/pt');
        break;
      default:
        await import('@formatjs/intl-numberformat/locale-data/en');
        break;
    }
  }

  if (shouldPolyfillIntlRelativeTimeFormat()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-relativetimeformat/polyfill');
  }

  if (Intl.RelativeTimeFormat.polyfilled) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (locale) {
      case 'pt-br':
        await import('@formatjs/intl-relativetimeformat/locale-data/pt');
        break;
      default:
        await import('@formatjs/intl-relativetimeformat/locale-data/en');
        break;
    }
  }

  if (shouldPolyfillIntlDateTimeFormat()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-datetimeformat/polyfill');
  }

  if (Intl.DateTimeFormat.polyfilled) {
    // Parallelize CLDR data loading
    const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')];

    // eslint-disable-next-line sonarjs/no-small-switch
    switch (locale) {
      case 'pt-br':
        dataPolyfills.push(import('@formatjs/intl-datetimeformat/locale-data/pt'));
        break;
      default:
        dataPolyfills.push(import('@formatjs/intl-datetimeformat/locale-data/en'));
        break;
    }
    await Promise.all(dataPolyfills);
  }

  if ('__setDefaultTimeZone' in Intl.DateTimeFormat) {
    // eslint-disable-next-line no-underscore-dangle
    Intl.DateTimeFormat.__setDefaultTimeZone('America/Sao_Paulo');
  }

  if (shouldPolyfillIntlDisplayNames()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-displaynames/polyfill');
  }

  if (Intl.DisplayNames.polyfilled) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (locale) {
      case 'pt-br':
        await import('@formatjs/intl-displaynames/locale-data/pt');
        break;
      default:
        await import('@formatjs/intl-displaynames/locale-data/en');
        break;
    }
  }

  if (shouldPolyfillIntlListFormat()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-listformat/polyfill');
  }

  if (Intl.ListFormat.polyfilled) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (locale) {
      case 'pt-br':
        await import('@formatjs/intl-listformat/locale-data/pt');
        break;
      default:
        await import('@formatjs/intl-listformat/locale-data/en');
        break;
    }
  }
}

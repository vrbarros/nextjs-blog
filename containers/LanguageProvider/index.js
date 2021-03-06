import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { polyfill } from '@/lib/polyfills';

async function loadLocaleData(locale) {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (locale) {
    case 'pt-br':
      return import(`@/compiled-lang/pt-br.json`);
    default:
      return import(`@/compiled-lang/en.json`);
  }
}

function LanguageProvider(props) {
  const { children, locale } = props;

  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLocaleData(locale).then(resp => {
      setMessages(resp);
      setLoading(false);
    });
  }, [locale]);

  polyfill(locale);

  if (loading) return <div></div>;

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale="en">
      {children}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string,
};

LanguageProvider.defaultProps = {
  locale: 'en',
};

export default LanguageProvider;

import PropTypes from 'prop-types';

import 'styles/global.css';

function App(props) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

App.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any
};

export default App;

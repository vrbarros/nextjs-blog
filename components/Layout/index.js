import { Head, Navigation, Footer } from '@app/components';
import PropTypes from 'prop-types';
import StoryblokService from '@app/utils/storyblok-service';
import React from 'react';

function Layout(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <Head />
      <Navigation />
      {children}
      <Footer />
      {StoryblokService.bridge()}
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

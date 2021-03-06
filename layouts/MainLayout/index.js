import { Navigation, Footer } from '@/components';
import PropTypes from 'prop-types';
import StoryblokService from '@/utils/storyblok-service';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import LanguageProvider from '@/containers/LanguageProvider/dynamic';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function MainLayout(props) {
  const { children } = props;

  const classes = useStyles();
  const router = useRouter();

  const { locale } = router;

  return (
    <LanguageProvider locale={locale}>
      <Navigation />
      <div className={classes.root}>
        {children}
        <Footer />
      </div>
      {StoryblokService.bridge()}
    </LanguageProvider>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;

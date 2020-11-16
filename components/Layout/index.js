import { Navigation, Footer } from '@app/components';
import PropTypes from 'prop-types';
import StoryblokService from '@app/utils/storyblok-service';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}));

function Layout(props) {
  const { children } = props;

  // Hooks
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.root}>
        {children}
        <Footer />
      </div>
      {StoryblokService.bridge()}
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

import { Navigation, Footer } from '@/components';
import PropTypes from 'prop-types';
import StoryblokService from '@/utils/storyblok-service';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: theme.spacing(2),
  },
}));

function MainLayout(props) {
  const { children } = props;

  // Hooks
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <div className={classes.root}>
        {children}
        <Footer />
      </div>
      {StoryblokService.bridge()}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;

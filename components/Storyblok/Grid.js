import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import MuiGrid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-cycle
import DynamicComponent from '@/components/Storyblok/DynamicComponent';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Grid({ blok }) {
  // Hooks
  const classes = useStyles();

  return (
    <SbEditable content={blok}>
      <MuiGrid container spacing={2} className={classes.root}>
        {blok.columns.map(nestedBlok => (
          // eslint-disable-next-line no-underscore-dangle
          <MuiGrid item key={nestedBlok._uid} lg={3} md={4} sm={6} xs={12}>
            <DynamicComponent blok={nestedBlok} />
          </MuiGrid>
        ))}
      </MuiGrid>
    </SbEditable>
  );
}

Grid.propTypes = {
  blok: PropTypes.object,
};

export default Grid;

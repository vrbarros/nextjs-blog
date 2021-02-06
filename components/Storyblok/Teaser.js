import SbEditable from 'storyblok-react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  image: {
    borderRadius: theme.shape.borderRadius * 5,
  },
}));

const Teaser = props => {
  const { blok } = props;

  // Hooks
  const classes = useStyles();

  return (
    <SbEditable content={blok}>
      <Grid container spacing={2} alignItems="center" className={classes.root}>
        <Grid item lg={3} md={4} xs={12}>
          {blok.image && (
            <Image src={blok.image.filename} width={300} height={300} className={classes.image} />
          )}
        </Grid>
        <Grid item lg={9} md={8} xs={12}>
          <Typography variant="h2" gutterBottom>
            {blok.headline}
          </Typography>
          <Typography variant="body1">{blok.description}</Typography>
        </Grid>
      </Grid>
    </SbEditable>
  );
};

Teaser.propTypes = {
  blok: PropTypes.object,
};

export default Teaser;

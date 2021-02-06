import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardMedia } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginBottom: theme.spacing(2),
  },
  content: {
    '& img': {
      maxWidth: '100%',
    },
    '& p': {
      fontSize: theme.typography.body1.fontSize,
    },
    '& h3': {
      fontSize: theme.typography.h3.fontSize,
    },
  },
}));

function BlogPost({ blok }) {
  const classes = useStyles();

  return (
    // eslint-disable-next-line no-underscore-dangle
    <SbEditable content={blok} key={blok._uid}>
      <CardMedia className={classes.media} image={blok.image} title={blok.title} />
      <Typography variant="h2" gutterBottom>
        {blok.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {blok.intro}
      </Typography>
      <div className={classes.content}>{render(blok.long_text)}</div>
    </SbEditable>
  );
}

BlogPost.propTypes = {
  blok: PropTypes.object,
};

export default BlogPost;

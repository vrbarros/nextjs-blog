/* eslint-disable no-underscore-dangle */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import useSWR from 'swr';

import Link from '@/components/Link';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  media: {
    height: 140,
  },
  category: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function MediumArticles({ blok }) {
  const classes = useStyles();
  const { data } = useSWR('/api/medium');

  const { posts = [], link } = data || {};

  if (!data) return <CircularProgress color="secondary" />;

  return (
    <SbEditable content={blok} key={blok._uid}>
      <Grid container spacing={2} key={blok._uid} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="div">
            {blok.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            {posts.length} stories at{' '}
            <Link href={link} target="_blank">
              @vrbarros
            </Link>
          </Typography>
        </Grid>
        {posts.map(post => (
          <Grid item key={post.guid} lg={3} md={4} sm={6} xs={12}>
            <Card variant="outlined">
              <CardMedia className={classes.media} image={post.thumbnail} title={post.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                {post.categories.map(category => (
                  <Chip
                    key={category}
                    size="small"
                    label={category}
                    color="secondary"
                    className={classes.category}
                  />
                ))}
              </CardContent>
              <CardActions>
                <Box marginLeft="auto">
                  <Button
                    size="small"
                    href={post.link}
                    component={Link}
                    naked
                    target="_blank"
                    endIcon={<Icon>open_in_new</Icon>}>
                    Learn More
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SbEditable>
  );
}

MediumArticles.propTypes = {
  blok: PropTypes.object,
};

export default MediumArticles;

import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import Typography from '@material-ui/core/Typography';
import { Link } from '@app/components';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  media: {
    height: 140
  }
}));

function FeaturedPosts({ blok }) {
  // Hooks
  const classes = useStyles();
  const { locale } = useRouter();

  return (
    <SbEditable content={blok} key={blok._uid}>
      <Grid container spacing={2} key={blok._uid} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="div">
            {blok.title}
          </Typography>
        </Grid>
        {blok.posts.map((post) => (
          <Grid item key={post.content?._uid} lg={3} md={4} sm={6} xs={12}>
            <Card>
              <CardMedia
                className={classes.media}
                image={post.content?.image}
                title={post.content?.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.content?.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.content?.intro}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={`/blog/${post.slug}`}
                  locale={locale}
                  component={Link}
                  naked>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SbEditable>
  );
}

FeaturedPosts.propTypes = {
  blok: PropTypes.object
};

export default FeaturedPosts;

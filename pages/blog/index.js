import { Layout, Link } from '@/components';
import PropTypes from 'prop-types';
import React from 'react';
import StoryblokService, { useStoryblok } from '@/utils/storyblok-service';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    justifyContent: 'space-between',
  },
}));

function Blog(props) {
  const { story: initialStory } = props;

  // Hooks
  const classes = useStyles();
  const { story: posts } = useStoryblok({ initialStory });
  const { locale } = useRouter();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mb: 2, mt: 2 }}>
          <Typography variant="h5" component="div">
            All Posts
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {posts.map(post => (
            // eslint-disable-next-line no-underscore-dangle
            <Grid item key={post._uid} md={4} sm={6} xs={12}>
              <Card>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.content.title}
                  subheader="20/11/2020"
                />
                <CardMedia
                  className={classes.media}
                  image={post.content?.image}
                  title={post.content.title}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.content.intro}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.actions}>
                  <Button
                    size="small"
                    href={`/blog/${post.slug}`}
                    locale={locale}
                    component={Link}
                    naked>
                    Learn More
                  </Button>
                  <div>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ locale, defaultLocale }) {
  const language = locale || defaultLocale;
  const insertLanguage = language !== defaultLocale ? `${language}/` : '';

  const res = await StoryblokService.get(`cdn/stories`, { starts_with: `${insertLanguage}blog/` });

  return { props: { story: res.data.stories } };
}

Blog.propTypes = {
  story: PropTypes.any,
};

export default Blog;

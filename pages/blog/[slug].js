import PropTypes from 'prop-types';
import React from 'react';
import { Layout, Storyblok, Head } from '@app/components';
import StoryblokService, { useStoryblok } from '@app/utils/storyblok-service';
import Container from '@material-ui/core/Container';

function Post(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story } = useStoryblok({ initialStory });

  return (
    <Layout>
      <Head title={story.content.title} description={story.content.intro} />
      <Container maxWidth="md">
        <Storyblok.BlogPost blok={story.content} />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await StoryblokService.get(`cdn/stories/blog/${params.slug}`);

  return { props: { story: res.data.story } };
}

Post.propTypes = {
  story: PropTypes.any
};

export default Post;

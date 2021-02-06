import PropTypes from 'prop-types';
import React from 'react';
import Container from '@material-ui/core/Container';

import MainLayout from '@/layouts/MainLayout';
import StoryblokService, { useStoryblok } from '@/utils/storyblok-service';
import { Storyblok, Head } from '@/components';

function Post(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story } = useStoryblok({ initialStory });

  return (
    <>
      <Head title={story.content.title} description={story.content.intro} />
      <Container maxWidth="md">
        <Storyblok.BlogPost blok={story.content} />
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await StoryblokService.get(`cdn/stories/blog/${params.slug}`);

  return { props: { story: res.data.story } };
}

Post.propTypes = {
  story: PropTypes.any,
};

Post.Layout = MainLayout;

export default Post;

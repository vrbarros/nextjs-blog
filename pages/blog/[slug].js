import PropTypes from 'prop-types';
import React from 'react';
import { Layout, Storyblok } from '@app/components';
import StoryblokService, { useStoryblok } from '@app/utils/storyblok-service';

function Post(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story } = useStoryblok({ initialStory });

  return (
    <Layout>
      <Storyblok.BlogPost blok={story.content} />
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

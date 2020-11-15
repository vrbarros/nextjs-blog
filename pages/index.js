import { Layout, Storyblok } from '@app/components';
import PropTypes from 'prop-types';
import React from 'react';
import StoryblokService, { useStoryblok } from '@app/utils/storyblok-service';

function Home(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story } = useStoryblok({ initialStory });

  return (
    <Layout>
      <div className="container mx-auto p-4 text-center">
        <Storyblok.Page content={story.content} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale, defaultLocale }) {
  const language = locale || defaultLocale;
  const insertLanguage = language !== defaultLocale ? `/${language}` : '';

  const res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
    resolve_relations: 'featured-posts.posts'
  });

  return { props: { story: res.data.story } };
}

Home.propTypes = {
  story: PropTypes.any
};

export default Home;

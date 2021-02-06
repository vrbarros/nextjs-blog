import { Storyblok, Head } from '@/components';
import PropTypes from 'prop-types';
import React from 'react';
import StoryblokService, { useStoryblok } from '@/utils/storyblok-service';
import Container from '@material-ui/core/Container';

import MainLayout from '@/layouts/MainLayout';

function Home(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story } = useStoryblok({ initialStory });

  return (
    <>
      <Head title="Home | victorbarros.com" />
      <Container maxWidth="lg">
        <Storyblok.Page content={story.content} />
      </Container>
    </>
  );
}

export async function getStaticProps({ locale, defaultLocale }) {
  const language = locale || defaultLocale;
  const insertLanguage = language !== defaultLocale ? `/${language}` : '';

  const story = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
    resolve_relations: 'featured-posts.posts',
  });

  return { props: { story: story.data.story } };
}

Home.propTypes = {
  story: PropTypes.any,
};

Home.Layout = MainLayout;

export default Home;

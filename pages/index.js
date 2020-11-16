import { Layout, Storyblok, Head } from '@app/components';
import PropTypes from 'prop-types';
import React from 'react';
import StoryblokService, { useStoryblok } from '@app/utils/storyblok-service';
import Container from '@material-ui/core/Container';

function Home(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story } = useStoryblok({ initialStory });

  return (
    <Layout>
      <Head title="Home | victorbarros.com" />
      <Container maxWidth="lg">
        <Storyblok.Page content={story.content} />
      </Container>
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

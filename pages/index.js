import PropTypes from 'prop-types';
import React from 'react';

import { Layout, Page } from 'components';

import StoryblokService from 'utils/storyblok-service';

function Home(props) {
  const { content, language } = props;

  return (
    <Layout language={language}>
      <div className="container mx-auto p-4 text-center">
        <Page content={content} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let language = params?.language || 'en';
  let insertLanguage = language !== 'en' ? `/${language}` : '';
  let res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
    resolve_relations: 'featured-posts.posts'
  });

  return { props: { content: res.data.story.content, language } };
}

Home.propTypes = {
  content: PropTypes.any,
  language: PropTypes.any
};

export default Home;

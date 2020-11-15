import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Layout, Page } from 'components';

import StoryblokService from 'utils/storyblok-service';

function Home(props) {
  const { story: initialStory, language } = props;

  const [story, setStory] = useState(initialStory);

  useEffect(() => {
    StoryblokService.initNewEditor(story, setStory);
  }, []);

  return (
    <Layout language={language}>
      <div className="container mx-auto p-4 text-center">
        <Page content={story.content} />
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

  return { props: { story: res.data.story, language } };
}

Home.propTypes = {
  story: PropTypes.any,
  language: PropTypes.any
};

export default Home;

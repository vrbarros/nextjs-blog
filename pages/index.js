import PropTypes from 'prop-types';
import React from 'react';

import { Layout, Page } from 'components';

import StoryblokService from 'utils/storyblok-service';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      story: props.res.data.story,
      language: props.language
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);
    let language = query.language || 'en';
    let insertLanguage = language !== 'en' ? `/${language}` : '';
    let res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
      resolve_relations: 'featured-posts.posts'
    });

    return {
      res,
      language
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const { content } = this.state.story;

    return (
      <Layout language={this.state.language}>
        <div className="container mx-auto p-4 text-center">
          <Page content={content} />
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  res: PropTypes.any,
  language: PropTypes.any
};

export default Home;

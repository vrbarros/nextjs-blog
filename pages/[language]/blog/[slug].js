import PropTypes from 'prop-types';
import React from 'react';
import { Layout, Storyblok } from '@app/components';
import StoryblokService from '@app/utils/storyblok-service';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      story: props.res.data.story,
      language: props.language
    };
  }

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query);

    let language = query.language || 'en';
    let trimDefault = asPath.replace('/en/blog', '/blog');
    let res = await StoryblokService.get(`cdn/stories${trimDefault}`);

    return {
      res,
      language
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const contentOfStory = this.state.story.content;

    return (
      <Layout language={this.state.language}>
        <Storyblok.BlogPost blok={contentOfStory} />
      </Layout>
    );
  }
}

Blog.propTypes = {
  res: PropTypes.any,
  language: PropTypes.any
};

export default Blog;

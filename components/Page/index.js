import PropTypes from 'prop-types';
import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';

const Page = ({ content }) => (
  <SbEditable content={content}>
    <main>
      {content.body.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  </SbEditable>
);

Page.propTypes = {
  content: PropTypes.object
};

export default Page;

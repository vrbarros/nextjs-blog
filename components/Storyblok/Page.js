import DynamicComponent from '@/components/Storyblok/DynamicComponent';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

const Page = ({ content }) => (
  <SbEditable content={content}>
    {content.body.map(blok => (
      // eslint-disable-next-line no-underscore-dangle
      <DynamicComponent blok={blok} key={blok._uid} />
    ))}
  </SbEditable>
);

Page.propTypes = {
  content: PropTypes.object,
};

export default Page;

import { Storyblok } from '@app/components';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

const Page = ({ content }) => (
  <SbEditable content={content}>
    {content.body.map((blok) => (
      <Storyblok.DynamicComponent blok={blok} key={blok._uid} />
    ))}
  </SbEditable>
);

Page.propTypes = {
  content: PropTypes.object
};

export default Page;

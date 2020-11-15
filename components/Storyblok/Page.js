import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

import { Storyblok } from '@app/components';

const Page = ({ content }) => (
  <SbEditable content={content}>
    <main>
      {content.body.map((blok) => (
        <Storyblok.DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  </SbEditable>
);

Page.propTypes = {
  content: PropTypes.object
};

export default Page;

import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

import DynamicComponent from '../DynamicComponent';

const Grid = ({ blok }) => (
  <SbEditable content={blok}>
    <ul className="flex py-8 mb-6">
      {blok.columns.map((nestedBlok) => (
        <li key={nestedBlok._uid} className="flex-auto px-6">
          <DynamicComponent blok={nestedBlok} />
        </li>
      ))}
    </ul>
  </SbEditable>
);

Grid.propTypes = {
  blok: PropTypes.object
};

export default Grid;

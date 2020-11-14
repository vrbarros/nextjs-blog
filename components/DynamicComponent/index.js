import { Teaser, Feature, Grid, Placeholder } from 'components';
import PropTypes from 'prop-types';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];

    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
};

DynamicComponent.propTypes = {
  blok: PropTypes.object
};

export default DynamicComponent;

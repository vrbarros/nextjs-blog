import { Teaser, Feature, Grid, Placeholder, FeaturedPosts } from 'components';
import PropTypes from 'prop-types';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  'featured-posts': FeaturedPosts
};

function DynamicComponent({ blok }) {
  if (Components[blok.component]) {
    const Component = Components[blok.component];

    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
}

DynamicComponent.propTypes = {
  blok: PropTypes.object
};

export default DynamicComponent;

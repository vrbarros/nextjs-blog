import { Teaser, Feature, Grid, Placeholder, FeaturedPosts } from 'components';
import PropTypes from 'prop-types';

function DynamicComponent({ blok }) {
  const Components = {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    'featured-posts': FeaturedPosts
  };

  if (Components[blok.component]) {
    const Component = Components[blok.component];

    console.log(blok);

    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
}

DynamicComponent.propTypes = {
  blok: PropTypes.object
};

export default DynamicComponent;

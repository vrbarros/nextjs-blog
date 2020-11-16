import { Storyblok } from '@app/components';
import PropTypes from 'prop-types';

function DynamicComponent({ blok }) {
  const Components = {
    teaser: Storyblok.Teaser,
    grid: Storyblok.Grid,
    feature: Storyblok.Feature,
    'featured-posts': Storyblok.FeaturedPosts
  };

  if (Components[blok.component]) {
    const Component = Components[blok.component];

    return <Component blok={blok} />;
  }

  return <Storyblok.Placeholder componentName={blok.component} />;
}

DynamicComponent.propTypes = {
  blok: PropTypes.object
};

export default DynamicComponent;

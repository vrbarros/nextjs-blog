import PropTypes from 'prop-types';

import Placeholder from '@/components/Storyblok/Placeholder';
import Teaser from '@/components/Storyblok/Teaser';
import Feature from '@/components/Storyblok/Feature';
// eslint-disable-next-line import/no-cycle
import Grid from '@/components/Storyblok/Grid';
import FeaturedPosts from '@/components/Storyblok/FeaturedPosts';

function DynamicComponent({ blok }) {
  const Components = {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    'featured-posts': FeaturedPosts,
  };

  if (Components[blok.component]) {
    const Component = Components[blok.component];

    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
}

DynamicComponent.propTypes = {
  blok: PropTypes.object,
};

export default DynamicComponent;

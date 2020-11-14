import SbEditable from 'storyblok-react';
import PropTypes from 'prop-types';

const Teaser = (props) => {
  const { blok } = props;

  return (
    <SbEditable content={blok}>
      <div className="py-10">
        <h2 className="font-serif text-3xl text-center">{blok.headline}</h2>
      </div>
    </SbEditable>
  );
};

Teaser.propTypes = {
  blok: PropTypes.object
};

export default Teaser;

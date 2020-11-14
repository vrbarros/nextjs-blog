import SbEditable from 'storyblok-react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Teaser = (props) => {
  const { blok } = props;

  return (
    <SbEditable content={blok}>
      <div className="bg-white-half">
        <div className="pb-6 pt-16 container mx-auto">
          <h2 className="text-6xl font-bold font-serif text-primary">{blok.headline}</h2>
          {blok.image && (
            <Image src={blok.image.filename} className="w-full" width={300} height={300} />
          )}
        </div>
      </div>
    </SbEditable>
  );
};

Teaser.propTypes = {
  blok: PropTypes.object
};

export default Teaser;

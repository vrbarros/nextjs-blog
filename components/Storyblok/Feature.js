import DynamicIcon from '@/components/Storyblok/DynamicIcon';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

const Feature = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col items-center">
      <DynamicIcon type={blok.icon} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl my-4">{blok.name}</div>
        <p className="text-base text-gray-600">{blok.description}</p>
      </div>
    </div>
  </SbEditable>
);

Feature.propTypes = {
  blok: PropTypes.object,
};

export default Feature;

import PropTypes from 'prop-types';

import Twitter from './Twitter';

const Components = {
  twitter: Twitter
};

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type];
    return <Component />;
  }
  return null;
};

DynamicIcon.propTypes = {
  type: PropTypes.any
};

export default DynamicIcon;

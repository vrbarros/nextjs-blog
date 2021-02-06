import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';

import api from '@/lib/api';

const fetcher = url => {
  const newOptions = { method: 'GET', url };

  return api(newOptions);
};

function SWRProvider(props) {
  const { children } = props;

  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        revalidateOnFocus: false,
        fetcher: (...args) => fetcher(...args).then(res => res.data),
      }}>
      {children}
    </SWRConfig>
  );
}

SWRProvider.propTypes = {
  children: PropTypes.any,
};

export default SWRProvider;

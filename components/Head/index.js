import NextHead from 'next/head';
import PropTypes from 'prop-types';

function Head(props) {
  const { title = 'Next.js Sample Website', description } = props;

  return (
    <NextHead>
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
      <meta name="og:title" content={title} />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;

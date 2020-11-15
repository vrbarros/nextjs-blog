import NextHead from 'next/head';
import PropTypes from 'prop-types';

function Head(props) {
  const { title = 'Next.js Sample Website', description } = props;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          title
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Head;

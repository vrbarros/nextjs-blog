import { Head, Navigation, Footer } from '@app/components';
import PropTypes from 'prop-types';
import StoryblokService from '@app/utils/storyblok-service';

function Layout(props) {
  const { children } = props;

  return (
    <div className="bg-gray-300">
      <Head />
      <Navigation />
      {/* <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main></main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div> */}
      {children}
      <Footer />
      {StoryblokService.bridge()}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

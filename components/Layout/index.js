import Link from 'next/link';
import PropTypes from 'prop-types';

import { Head, Navigation, Footer } from 'components';

import styles from './index.module.css';
import utilStyles from 'styles/utils.module.css';

const name = 'Victor Barros';

function Layout(props) {
  const { children, home } = props;

  return (
    <div>
      <Head />
      <Navigation />
      <div className={styles.container}>
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
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  home: PropTypes.any
};

export default Layout;

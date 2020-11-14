import Head from 'next/head';
import PropTypes from 'prop-types';

import { getAllPostIds, getPostData } from 'lib/posts';
import { Layout, Date } from 'components';

import utilStyles from 'styles/utils.module.css';

function Post(props) {
  const { postData } = props;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

Post.propTypes = {
  postData: PropTypes.object
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  };
}

export default Post;

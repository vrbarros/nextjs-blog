/* eslint-disable react/no-danger */
import Head from 'next/head';
import PropTypes from 'prop-types';

import { getAllPostIds, getPostData } from '@/lib/posts';
import { Layout, Date } from '@/components';

function Post(props) {
  const { postData } = props;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        {postData.title}
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

Post.propTypes = {
  postData: PropTypes.object,
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default Post;

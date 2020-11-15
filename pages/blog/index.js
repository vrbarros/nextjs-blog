import { Layout } from '@app/components';
import PropTypes from 'prop-types';
import React from 'react';
import StoryblokService, { useStoryblok } from '@app/utils/storyblok-service';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Blog(props) {
  const { story: initialStory } = props;

  // Hooks
  const { story: posts } = useStoryblok({ initialStory });
  const { locale } = useRouter();

  return (
    <Layout>
      <main className="container mx-auto">
        <h1 className="text-5xl font-bold font-serif text-primary tracking-wide pt-12">
          All Posts
        </h1>
        <ul>
          {posts.map((post) => (
            <li key={post._uid} className="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md bg-white">
              <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">
                  {`
                    ${new Date(post.created_at).getDay()}.
                    ${new Date(post.created_at).getMonth()}.
                    ${new Date(post.created_at).getFullYear()}`}
                </span>
              </div>
              <div className="mt-2">
                <Link href={`/blog/${post.slug}`} locale={locale}>
                  <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                    {post.content.title}
                  </a>
                </Link>
                <p className="mt-2 text-gray-600">{post.content.intro}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link href={`/blog/${post.slug}`} locale={locale}>
                  <a className="text-blue-600 hover:underline">Read more</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ locale, defaultLocale }) {
  const language = locale || defaultLocale;
  const insertLanguage = language !== defaultLocale ? `${language}/` : '';

  const res = await StoryblokService.get(`cdn/stories`, { starts_with: `${insertLanguage}blog/` });

  return { props: { story: res.data.stories } };
}

Blog.propTypes = {
  story: PropTypes.any
};

export default Blog;

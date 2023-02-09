import PostContent from "components/Posts/post-detail/PostContent";
import { getPostData, getPostFiles } from "helpers/post-util";
import React, { Fragment } from "react";
import Head from "next/head";
const PostDetailPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>{posts.title}</title>
        <meta name="description" content={posts.excerpt} />
      </Head>
      <PostContent posts={posts} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      posts: postData,
    },

    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    // path: [{ params: { slugs } }],
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;

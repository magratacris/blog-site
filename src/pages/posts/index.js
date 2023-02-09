import AllPosts from "components/Posts/AllPosts";
import { getAllPost } from "helpers/post-util";
import React, { Fragment } from "react";
import Head from "next/head";
const AllPostsPages = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of programming-related articles"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};
export function getStaticProps() {
  const allPosts = getAllPost();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPages;

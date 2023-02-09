import React from "react";
import classes from "../../src/styles/AllPost.module.css";
import PostsGrid from "./PostsGrid";
const AllPosts = ({ posts }) => {
  return (
    <section>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;

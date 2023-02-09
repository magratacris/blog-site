import PostsGrid from "components/Posts/PostsGrid";
import React from "react";
import classes from "../../src/styles/FeaturedPosts.module.css";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;

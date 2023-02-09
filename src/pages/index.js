import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Hero from "components/Homepage/Hero";
import FeaturedPosts from "components/Homepage/FeaturedPosts";
import { getFeaturedPosts } from "helpers/post-util";
import Head from "next/head";
export default function Home({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Irene&apos;s Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

//1.) Hero => Present ourselves | welcome section
//2.) Featured Section

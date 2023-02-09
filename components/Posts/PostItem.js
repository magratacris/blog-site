import React from "react";
import classes from "../../src/styles/PostItem.module.css";
import Image from "next/image";
import Link from "next/link";
const PostItem = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/Images/posts/${post.slug}/${post.image}`;
  const linkPath = `/posts/${post.slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={post.title} fill />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;

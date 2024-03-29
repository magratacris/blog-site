import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostHeader from "./PostHeader";
import classes from "../../../src/styles/PostContent.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ posts }) => {
  const imagePath = `/Images/posts/${posts.slug}/${posts.image}`;
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${posts.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/Images/posts/${posts.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children} // eslint-disable-line
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={posts.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {posts.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;

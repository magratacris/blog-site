import fs from "fs";
import path from "path";
import matter from "gray-matter";

//process.cwd - absolute path to the overall project folder
const postDirectory = path.join(process.cwd(), "posts");

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //data - metadata as a js object
  //content - markdown text as a string
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}
export function getAllPost() {
  //will read the content synchronously or in a blocking way
  const postFiles = getPostFiles();

  const allPost = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPost = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
}
export function getFeaturedPosts() {
  const allPosts = getAllPost();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

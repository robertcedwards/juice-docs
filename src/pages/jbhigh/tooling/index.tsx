import { Content } from "@theme/BlogPostPage";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import BlogPost from "../../../components/Blog/BlogPost";
import Search from "../../../components/UI/Search";
import styles from "./Tooling.module.css";

interface JBHighToolingProps {
  readonly toolingPosts: readonly { readonly content: Content }[];
}

const JBHighTooling = ({ toolingPosts }: JBHighToolingProps) => {
  const [posts, setPosts] =
    useState<readonly { readonly content: Content }[]>(toolingPosts);

  const searchPosts = (value: string) => {
    if (!value) return setPosts(toolingPosts);

    const filtered = posts.filter((post) =>
      post.content.contentTitle.toLowerCase().includes(value)
    );

    setPosts(filtered);
  };
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div>
            <h3>tooling</h3>
            <p>to enhance your jb project</p>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src="/img/jbhigh/icons/tooling/tooling.svg" height={300} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Search onChange={searchPosts} />

        <div className={styles.postsContainer}>
          {posts.map((post) => (
            <BlogPost
              content={post.content}
              key={post.content.metadata.permalink}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JBHighTooling;

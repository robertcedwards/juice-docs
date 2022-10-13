import { Content } from "@theme/BlogPostPage";
import Layout from "@theme/Layout";
import React from "react";
import BlogPost from "../../../components/Blog/BlogPost";
import styles from "./Tooling.module.css";

interface JBHighToolingProps {
  readonly toolingPosts: readonly { readonly content: Content }[];
}

const JBHighTooling = ({ toolingPosts }: JBHighToolingProps) => {
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
        <div className={styles.searchContainer}>
          <input type="text" className={styles.search} placeholder="SEARCH" />
        </div>

        <div className={styles.postsContainer}>
          {toolingPosts.map((post) => (
            <BlogPost content={post.content} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JBHighTooling;

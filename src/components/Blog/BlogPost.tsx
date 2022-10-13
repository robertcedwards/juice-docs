import Link from "@docusaurus/Link";
import { Content } from "@theme/BlogPostPage";
import React from "react";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  readonly content: Content;
}

const BlogPost = ({ content }: BlogPostProps) => {
  const readingTime = (time: number) => {
    if (time < 1) {
      return "One";
    }
    return Math.round(time);
  };

  return (
    <div className={styles.post} key={content.metadata.permalink}>
      <iframe
        height="300"
        width="100%"
        src="https://www.youtube.com/embed/GXqQh64Ah5Q"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      <div className={styles.info}>
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <img
            src="/img/jbhigh/icons/ClockCircle.svg"
            className={styles.icon}
          />
          <span>{readingTime(content.metadata.readingTime || 0)} min read</span>
        </div>
        <div className={styles.title}>
          <h3>
            <a href={content.metadata.permalink} target="_blank">
              {content.metadata.title}
            </a>
          </h3>
        </div>

        <div className={styles.dateAuthor}>
          <p>{content.metadata.formattedDate}</p>
          <p>
            By:{" "}
            {content.metadata.authors.length > 0 &&
              content.metadata.authors
                .map<React.ReactNode>((a) => (
                  <a href={`${a.url}`} target="_blank">
                    {a.name}
                  </a>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
          </p>
        </div>
        <p>{content.metadata.description}</p>
        <div className={styles.tags}>
          {content.metadata.tags.length > 0 &&
            content.metadata.tags
              .map<React.ReactNode>((t) => (
                <a href={`/blog/tags/${t.label}`} target="_blank">
                  {t.label}
                </a>
              ))
              .reduce((prev, curr) => [prev, ", ", curr])}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

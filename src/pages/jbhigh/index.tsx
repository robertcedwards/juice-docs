import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";
import HeroImageWrapper from "../../components/HeroImage";
import styles from "./styles.module.css";

const JBHigh = () => {
  return (
    <Layout>
      <HeroImageWrapper src={"/img/jbhigh/jbhigh_hero.png"} />
      <div className={styles.description}>
        <p>dao education</p>
        <p>• project tutorials</p>
        <p>• information hub</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <a href="/jbhigh/tooling">
            <img src="/img/jbhigh/icons/tooling.svg" />
            <h2>tooling to enhance your jb project</h2>
            <p>
              Visit the docs blog to learn about all the in-depth knowledge on
              stuff.
            </p>
          </a>
        </div>
        <div className={styles.card}>
          <img src="/img/jbhigh/icons/economics.svg" />
          <h2>home economics</h2>
          <p>
            Visit the blog for updates, observations, guides, and resources.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/img/jbhigh/icons/tutorial.svg" />
          <h2>project creator tutorial portal</h2>
          <p>
            For more, join the Juicebox Discord server and follow @juiceboxETH
            on Twitter.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default JBHigh;

import Layout from "@theme/Layout";
import React from "react";
import HeroImageWrapper from "../../components/HeroImage";
import styles from "./styles.module.css";

const JBHigh = () => {
  return (
    <Layout>
      <HeroImageWrapper src={"/img/jbhigh/jbhigh_hero.png"} />
      <div className={styles.description}>
        <li>dao education</li>
        <li>project tutorials</li>
        <li>information hub</li>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/img/jbhigh/icons/tooling.svg" />
          <h2>Tooling to enhance your jb project</h2>
          <p>
            Visit the docs blog to learn about all the in-depth knowledge on
            stuff.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/img/jbhigh/icons/economics.svg" />
          <h2>Home economics</h2>
          <p>
            Visit the blog for updates, observations, guides, and resources.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/img/jbhigh/icons/tutorial.svg" />
          <h2>Project creator tutorial portal</h2>
          <p>
            For more, join the Juicebox Discord server and follow @juiceboxETH
            on Twitter.
          </p>
        </div>
      </div>
      <div>aa</div>
    </Layout>
  );
};

export default JBHigh;

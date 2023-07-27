import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import { MendableSearchBar } from "@mendable/search"

import SkateFrames from './frames.js';

const style = { darkMode: true,  accentColor: "limegreen" }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((frameIndex + 1) % SkateFrames.length);
    }, 200); // Change this to adjust the speed of the animation

    return () => clearInterval(interval);
  }, [frameIndex]);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <SkateFrames></SkateFrames>
        <MendableSearchBar userIcon="" botIcon="https://images.ecency.com/u/hive-173115/avatar/large" cmdShortcutKey="y" dialogPlaceholder="Ask me anything about Skatehive" anon_key='524a2d83-688b-477a-ba99-05131d06138d' style={style} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            padding="20px">
            Become a SkateNerd - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn about skateboarding and web3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skatehive Docs 🛹</title>
        <meta property="og:title" content="Skatehive Docs 🛹" />
        <meta property="og:description" content="SkateHive App and Community documentation for onboarding savvy users" />
        <meta property="og:image" content="https://thumbnails.odycdn.com/optimize/s:400:0/quality:95/plain/https://spee.ch/8/b416b166fd9dbe4e.png" />
        <meta property="og:url" content="https://skatehive.app" />
        <meta name="twitter:card" content="summary_large_image" />

      </Helmet>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

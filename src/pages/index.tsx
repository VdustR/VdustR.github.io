import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { css, cx } from '@emotion/css';
import Layout from '@theme/Layout';
import React from 'react';

const cssHeroBanner = css`
  label: HeroBanner;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 966px) {
    padding: 2rem;
  }
`;

const cssButtons = css`
  label: Buttons;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cssFeatures = css`
  label: Features;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
`;

const cssFeatureImage = css`
  label: FeatureImage;
  height: 200px;
  width: 200px;
`;

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      {imgUrl && (
        <div className="text--center">
          <img className={cssFeatureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello, World!`} description="𝓕𝓪𝓷𝓬𝔂 𝓭𝓮𝓼𝓲𝓰𝓷. 𝚂𝚒𝚖𝚙𝚕𝚎 𝚕𝚒𝚏𝚎.">
      <header className={cx('hero hero--primary', cssHeroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={cssButtons}>
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={cssFeatures}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

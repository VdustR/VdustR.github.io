import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import style from './style.module.css';

const links: Record<string, string> = {
  Blog: '//vdustr.github.io/blog/',
  Repositories:
    '//github.com/VdustR?tab=repositories&q=archived%3Afalse+fork%3Afalse',
  Pocket: '//vdustr.github.io/pocket',
  Facebook: '//fb.me/vdustr',
  Discord: '//ganhuaking.tw',
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <div className={style.container}>
        <img
          className={style.cover}
          alt={siteConfig.title}
          src="https://vdustr.github.io/brand/2022-01/round.svg"
        />
        <section className={style.section}>
          {Object.entries(links).map(([name, href], i) => (
            <>
              <Link key={name} href={href}>
                {name}
              </Link>
              {i !== Object.keys(links).length - 1 ? '💠' : null}
            </>
          ))}
        </section>
      </div>
    </Layout>
  );
}

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import style from './style.module.css';

const links: Record<string, string> = {
  Blog: '/blog',
  Repositories:
    '//github.com/VdustR?tab=repositories&q=archived%3Afalse+fork%3Afalse',
  Pocket: '//vdustr.github.io/pocket',
  Facebook: '//fb.me/vdustr',
  Discord: '//ganhuaking.tw',
};

export default function Home() {
  return (
    <Layout title="">
      <div className={style.section}>
        {Object.entries(links).map(([name, href], i) => (
          <>
            <Link key={name} href={href}>
              {name}
            </Link>
            {i !== Object.keys(links).length - 1 ? 'ˑ' : null}
          </>
        ))}
      </div>
    </Layout>
  );
}

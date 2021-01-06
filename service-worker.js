/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1a0df50d0da74bfffc47bbaa99de5cc1"
  },
  {
    "url": "assets/css/0.styles.b4bf354f.css",
    "revision": "68397d56d4b38dad7cf970f7ec011b40"
  },
  {
    "url": "assets/img/codepen.14be1369.svg",
    "revision": "14be1369eed87ccff283f220f0e3e16a"
  },
  {
    "url": "assets/img/facebook.1901cad6.svg",
    "revision": "1901cad6de0b2e140e2edab8457037f4"
  },
  {
    "url": "assets/img/github.617870e4.svg",
    "revision": "617870e422d4b75087cdcf9ff298032e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f5500bc.js",
    "revision": "c2e650079b4a2982239e6f66ebc564f3"
  },
  {
    "url": "assets/js/11.4386f778.js",
    "revision": "e3359aa7ce6f4d0915a8020d9c4c9278"
  },
  {
    "url": "assets/js/12.f9cef27b.js",
    "revision": "2af59db446eac7f07f653e7d57350eac"
  },
  {
    "url": "assets/js/13.1e8ba154.js",
    "revision": "8a521ab0699b5709aa17e935cecb6742"
  },
  {
    "url": "assets/js/14.706e9769.js",
    "revision": "a024c58ef1c1c88b0c70261ad5f81749"
  },
  {
    "url": "assets/js/15.e9424b54.js",
    "revision": "26f0f8f9dc5c23a96cc67deac0bfc933"
  },
  {
    "url": "assets/js/16.87f08ba3.js",
    "revision": "b28bd7a9312b068ce33d5162e4896d78"
  },
  {
    "url": "assets/js/17.9a7fe4e7.js",
    "revision": "581098b6c0cc8d20766cd78658ed447a"
  },
  {
    "url": "assets/js/18.582d9683.js",
    "revision": "121965bd3da0032509dae7aa68665869"
  },
  {
    "url": "assets/js/19.f051e3d2.js",
    "revision": "0820342f8ad5c865e259bf0aa74cac1c"
  },
  {
    "url": "assets/js/2.81b8778c.js",
    "revision": "c562a47eddec507b1219e740f6d17d4e"
  },
  {
    "url": "assets/js/20.0212f68d.js",
    "revision": "afc2c569222d1c168dba3a58975b0890"
  },
  {
    "url": "assets/js/21.beb63f7c.js",
    "revision": "7ae415cd648f462f9933e0ae80f96586"
  },
  {
    "url": "assets/js/22.8f8c3c89.js",
    "revision": "e2273214d5cef82ae305513f269df846"
  },
  {
    "url": "assets/js/23.d957843d.js",
    "revision": "6d60c93dbbd94b6af09edbde31f532c8"
  },
  {
    "url": "assets/js/24.f5201619.js",
    "revision": "715805f78f71a5f079c618cef5f79062"
  },
  {
    "url": "assets/js/25.bf7207fe.js",
    "revision": "72697acb894038650c1cd095984aa04a"
  },
  {
    "url": "assets/js/26.5ac3f581.js",
    "revision": "bd4a80ec1d5697b6caac38f5637ae15c"
  },
  {
    "url": "assets/js/27.ba08f755.js",
    "revision": "87a6c0e738820c322469483befe36393"
  },
  {
    "url": "assets/js/28.9dbc3e2b.js",
    "revision": "faa32edfac1ebf86d063089c54ee63ac"
  },
  {
    "url": "assets/js/29.e34c6541.js",
    "revision": "f2b591b08239d75276e0f04e2d660bbb"
  },
  {
    "url": "assets/js/3.b47f5c29.js",
    "revision": "93b7fd886717f25251a47ce8b634f91b"
  },
  {
    "url": "assets/js/4.ef64a426.js",
    "revision": "c688518e9fc1662eb38791b6df2b70f5"
  },
  {
    "url": "assets/js/5.5ca6cbbc.js",
    "revision": "5d1ec476adeb5ba30b7aa0aac773b09d"
  },
  {
    "url": "assets/js/6.63ead8f1.js",
    "revision": "8bd37be2e9de2f9720543df6b612557a"
  },
  {
    "url": "assets/js/7.cc3e5445.js",
    "revision": "632736fc94abd30484362fe609015396"
  },
  {
    "url": "assets/js/8.ee8bedcd.js",
    "revision": "17238fc36eb05a4a28780facfa494d03"
  },
  {
    "url": "assets/js/9.93a3e566.js",
    "revision": "a759adfc5f8ce7356a8b661dfe0a6df2"
  },
  {
    "url": "assets/js/app.f65a4fc9.js",
    "revision": "92339b4beb910758a1b9a231239bd774"
  },
  {
    "url": "bin/7z.html",
    "revision": "1cdcdca8e7f7fa79800a3a6f8f84556c"
  },
  {
    "url": "bin/date.html",
    "revision": "70b9fa619f7f9cbb308934f028cd4a1c"
  },
  {
    "url": "bin/pwd.html",
    "revision": "82b4a1a2ed7ec75ea93baba255219587"
  },
  {
    "url": "bin/rsync.html",
    "revision": "5fd6dd6933b0249a1fd474a65bb27981"
  },
  {
    "url": "bookmarks/generator.html",
    "revision": "762f121555d2b9e5c6cfdb9e93467e6c"
  },
  {
    "url": "design/color.html",
    "revision": "469ac6c8aa02aa96093ac84b473e5127"
  },
  {
    "url": "design/font.html",
    "revision": "d477473454a8be7d9343972327c0e3d7"
  },
  {
    "url": "dev/common.html",
    "revision": "6d77bf7812e3f18dec175c88a11c2998"
  },
  {
    "url": "dev/javascript.html",
    "revision": "8bc72402f632ffb2b54a17f0b3256d34"
  },
  {
    "url": "dev/poi.html",
    "revision": "53a332fc1dc5fbf911b764426225459e"
  },
  {
    "url": "dev/react.html",
    "revision": "05249c37267fc8014c3c6a6fe02793dd"
  },
  {
    "url": "dev/vuepress.html",
    "revision": "8110ed133d5cf1855cf1a21f979b56a2"
  },
  {
    "url": "index.html",
    "revision": "22ba5cd2f30d3ed75d78459925f863cc"
  },
  {
    "url": "logo.jpg",
    "revision": "02c8c1ba236fc90040b2f433261f75f4"
  },
  {
    "url": "sh/fish.html",
    "revision": "24bd3c31c7b82e7bfda2a79d7aa0f5c3"
  },
  {
    "url": "sh/string.html",
    "revision": "6a38fdf2ee0f062fcd254022f5f5f160"
  },
  {
    "url": "sh/ternary.html",
    "revision": "93f4936158ab5fcf8f8ea3dceac28064"
  },
  {
    "url": "tools/index.html",
    "revision": "ce0a25d4c52a43a63a11634fd7c1627c"
  },
  {
    "url": "tools/mac.html",
    "revision": "18a78fcd6366e6afcdb14110dbbc2054"
  },
  {
    "url": "tools/web.html",
    "revision": "23c6fc199f07f7021f733aa348705906"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

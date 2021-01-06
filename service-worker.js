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
    "revision": "16bdd884f1f5849a5d1046bde4cac121"
  },
  {
    "url": "assets/css/0.styles.c318f6dd.css",
    "revision": "a21049c30d2c2be1eebaedba552ec1fd"
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
    "url": "assets/js/app.1617161f.js",
    "revision": "0533b348cf96497e38bacc4ba4475694"
  },
  {
    "url": "bin/7z.html",
    "revision": "fa270ccb9b26f4d1ac14f89f06d78cde"
  },
  {
    "url": "bin/date.html",
    "revision": "619dd52fa8c50eead3852406cee9f396"
  },
  {
    "url": "bin/pwd.html",
    "revision": "836bb928f195646cd5aaa7c75063f607"
  },
  {
    "url": "bin/rsync.html",
    "revision": "a4e080c9af1d594b357d0d791ebf05a7"
  },
  {
    "url": "bookmarks/generator.html",
    "revision": "d8d97eac68ef88259b6d9ae3633f7b93"
  },
  {
    "url": "design/color.html",
    "revision": "1f699258ea2e10bedf96fa494eb149a2"
  },
  {
    "url": "design/font.html",
    "revision": "fcab0210833c8faba2bef851d69288b2"
  },
  {
    "url": "dev/common.html",
    "revision": "4854dbf37d372cc3afabfda5a02918e1"
  },
  {
    "url": "dev/javascript.html",
    "revision": "5b818fd497cef5e47015336959101f0f"
  },
  {
    "url": "dev/poi.html",
    "revision": "b29c8130bd1caaa3913042aea672ec86"
  },
  {
    "url": "dev/react.html",
    "revision": "1368da2c327f0a1de7021eb088bd0af4"
  },
  {
    "url": "dev/vuepress.html",
    "revision": "da72ddd345bc0e45d891a29633a4cf2d"
  },
  {
    "url": "index.html",
    "revision": "56e76741c13256eceb0301dfe8d9e5dc"
  },
  {
    "url": "logo.jpg",
    "revision": "02c8c1ba236fc90040b2f433261f75f4"
  },
  {
    "url": "sh/fish.html",
    "revision": "99ea7320dfa6d461c579e21966cbd21b"
  },
  {
    "url": "sh/string.html",
    "revision": "7f4ac7a6d16ab7b1c85601dd0d511d05"
  },
  {
    "url": "sh/ternary.html",
    "revision": "a61fedab15cbeae971d9ae93fb475b7d"
  },
  {
    "url": "tools/index.html",
    "revision": "3d684c729f36935e3371c069025f6140"
  },
  {
    "url": "tools/mac.html",
    "revision": "c328a7a381064e61935e32d43bb329ff"
  },
  {
    "url": "tools/web.html",
    "revision": "b1a50dda06bf615cd87b9dee27623eda"
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

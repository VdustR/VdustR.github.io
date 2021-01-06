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
    "revision": "f32e575dee80eb99d1353f33bc8d2833"
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
    "url": "assets/js/25.8dd7b83a.js",
    "revision": "b0b3e91c8c7ecaef23aaac62d941dcd3"
  },
  {
    "url": "assets/js/26.740c21a5.js",
    "revision": "186c8e20b2fe273787ed991c7b1f96e0"
  },
  {
    "url": "assets/js/27.6cb9ee75.js",
    "revision": "12fdcb9d4322f82676f1a95f962655fb"
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
    "url": "assets/js/app.c6df5565.js",
    "revision": "dd8009d808971229122b8628fb31c1e9"
  },
  {
    "url": "bin/7z.html",
    "revision": "97b918e10b61ad74a37d23cee53fc9da"
  },
  {
    "url": "bin/date.html",
    "revision": "ac34ab68238237e09e79afd178aa1b7b"
  },
  {
    "url": "bin/pwd.html",
    "revision": "6b4cf50b8e72c1b22941ca7aec32bf43"
  },
  {
    "url": "bin/rsync.html",
    "revision": "04543e41fe597e0856070f58f4409116"
  },
  {
    "url": "bookmarks/generator.html",
    "revision": "0b9e2e579898e56d0a170eb7c48406d9"
  },
  {
    "url": "design/color.html",
    "revision": "2d7aea5ea178ce54fdca697969ea388f"
  },
  {
    "url": "design/font.html",
    "revision": "e07bcb850d3d0dd36303e7258f127a22"
  },
  {
    "url": "dev/common.html",
    "revision": "65b094c9e790ea9d8ed86b2b16250fb9"
  },
  {
    "url": "dev/javascript.html",
    "revision": "b962039e5691d5b834baad5511ceacd7"
  },
  {
    "url": "dev/poi.html",
    "revision": "7bee5daa1180b0f898a51a3bc992caa1"
  },
  {
    "url": "dev/react.html",
    "revision": "a8ee7cbb28367cd6ae0027f22d75ecb5"
  },
  {
    "url": "dev/vuepress.html",
    "revision": "5faab47b342655bb2c2a5337e880e6a1"
  },
  {
    "url": "index.html",
    "revision": "e214f71ae902d055d1cd21c28e99b817"
  },
  {
    "url": "logo.jpg",
    "revision": "02c8c1ba236fc90040b2f433261f75f4"
  },
  {
    "url": "sh/fish.html",
    "revision": "36218508d1891ef48b960596ab08b427"
  },
  {
    "url": "sh/string.html",
    "revision": "a35f73af3765075115f9f013a3dc7ec1"
  },
  {
    "url": "sh/ternary.html",
    "revision": "539022bc9ae39f5ddad5f29337374d53"
  },
  {
    "url": "tools/index.html",
    "revision": "0ef987833e72894b74442d329337e9df"
  },
  {
    "url": "tools/mac.html",
    "revision": "2a51edee89507950ce111b68f4abe01f"
  },
  {
    "url": "tools/web.html",
    "revision": "d86d18da3b1cd54403f2b0eb4bddc443"
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

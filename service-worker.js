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
    "revision": "f826269fc721f15c879611cb770c0b0a"
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
    "url": "assets/js/26.eee3e7e2.js",
    "revision": "9d1a4be5f2f878ef6b71aceefd595b2c"
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
    "url": "assets/js/app.1f52c258.js",
    "revision": "25c4ca7be950deb4b1bdad216395968e"
  },
  {
    "url": "bin/7z.html",
    "revision": "798e54535eed095672e1679a7e233529"
  },
  {
    "url": "bin/date.html",
    "revision": "f74f56db8596269283da0183ac239c7b"
  },
  {
    "url": "bin/pwd.html",
    "revision": "a0f9d5646e71868101a60c78269fd2aa"
  },
  {
    "url": "bin/rsync.html",
    "revision": "527addaadb3f671e64236caa989ee11b"
  },
  {
    "url": "bookmarks/generator.html",
    "revision": "6b4211ceb32c76c08691709b56909fe3"
  },
  {
    "url": "design/color.html",
    "revision": "7af3897c047ffc2e7a9e45cfaaba39fd"
  },
  {
    "url": "design/font.html",
    "revision": "9f847be2b428d0ae1980850191c803aa"
  },
  {
    "url": "dev/common.html",
    "revision": "a65d19f3b3e2447d1e67036302ebd89c"
  },
  {
    "url": "dev/javascript.html",
    "revision": "5f607aa322129e281b8e10927222a146"
  },
  {
    "url": "dev/poi.html",
    "revision": "c9e989870bda7e05571c3b4b523c9edb"
  },
  {
    "url": "dev/react.html",
    "revision": "27c09380ed5ec68a9729fc1f070fc094"
  },
  {
    "url": "dev/vuepress.html",
    "revision": "67b347fb5fab6e2bc5ff42d804ef0da5"
  },
  {
    "url": "index.html",
    "revision": "ae8e3dd714055757d2b14d231553b75c"
  },
  {
    "url": "logo.jpg",
    "revision": "02c8c1ba236fc90040b2f433261f75f4"
  },
  {
    "url": "sh/fish.html",
    "revision": "2c7aa88293488866de49f92c449c0ed0"
  },
  {
    "url": "sh/string.html",
    "revision": "46d09b5e5a60d64423c8466963f7898b"
  },
  {
    "url": "sh/ternary.html",
    "revision": "76aacbf23b37c03da54ce5a04da00a2f"
  },
  {
    "url": "tools/index.html",
    "revision": "15ff8b201656d454790fbeb6d6564e92"
  },
  {
    "url": "tools/mac.html",
    "revision": "6d5df43fa456b418d389c1ed569551b2"
  },
  {
    "url": "tools/web.html",
    "revision": "46e712d8e7e84ce5353c76f8cbb831e5"
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

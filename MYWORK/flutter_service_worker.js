'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "teams.js": "25635fff81a64f0092ec7c3c6472d4a8",
"version.json": "b4ed3d8a57f14a7facfef8adc69cdcbd",
"splash/img/light-2x.png": "e94726cbbc7a5795d5d92559b3d9b499",
"splash/img/dark-4x.png": "b48e1d85470cf333696780fd4a6f96fb",
"splash/img/light-3x.png": "6020399ce513b0019c05557c36fd3eb2",
"splash/img/dark-3x.png": "6020399ce513b0019c05557c36fd3eb2",
"splash/img/light-4x.png": "b48e1d85470cf333696780fd4a6f96fb",
"splash/img/dark-2x.png": "e94726cbbc7a5795d5d92559b3d9b499",
"splash/img/dark-1x.png": "2f9d75b780ea788505d513ef0fc6a119",
"splash/img/light-1x.png": "2f9d75b780ea788505d513ef0fc6a119",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "3e8699dd65a865ff991ec5b47a93643d",
"index.html": "6592df27f65c0c6b11334aaf0fd39eb1",
"/": "ad05061631025637ee5b1cb5f26cf4ca",
"main.dart.js": "c7773429ec9788913d9f01ac324efb0e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "6d49b6b36cabaa7ef4e3db096aa9ce5d",
"icons/Icon-192.png": "bb300e1fe6cba68b7c0d3884d111b813",
"icons/Icon-maskable-192.png": "bb300e1fe6cba68b7c0d3884d111b813",
"icons/Icon-maskable-512.png": "8fc123d79374c95cd73665a941007514",
"icons/Icon-512.png": "8fc123d79374c95cd73665a941007514",
"manifest.json": "ae06f915e2d0de275c03caab3f4107d0",
"assets/AssetManifest.json": "2bfb6135aff4ae621b044929c1ba5b47",
"assets/NOTICES": "db862cc189458b2732e91e3d573cb122",
"assets/FontManifest.json": "d7fa4c2f04c5555c884ca73a2a1ad538",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "b1a0f2961c98db83c76382512914ba96",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "4fc25f45b4de86a377e5a724d54c5374",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "5786a427a4df0d610713a2d9692f892a",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "ba8f94b4e24aac3eb4b1066bdf3df8a2",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "e86630a9b3578b3493a6c031c33fc56e",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "b1a0f2961c98db83c76382512914ba96",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "d45998f186e541a073dc27f2cb5595d6",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "4d9ea995dbaa306a11bc4aa9e92ca39d",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "62505756a8a1000a7bfad975ed8dd3c7",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "2b976112261e72f87e78abb09d2750ae",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "6bfef63387b05f3eb6df2d5095fb6b42",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "2b976112261e72f87e78abb09d2750ae",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "4a7f24921415a412f0f2db84de3b8a59",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "f9427f9006d823477c9fd8925c60abfd",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "ae6349650c51aa49d3e3afed9aaa17a6",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "c106cb5addf625adfbeb081d2ab13c51",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "5e0fec3b7db4bd7cd53410f025e62544",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "4b84f6987fd8d58cfdc01331ce8dee9d",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "6a68732515bbcb599bc9e904448c611c",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "67788df0e654ff3a6de6cddccd0c6b32",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "7355172d19253e0a01bb7e2979b85927",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "4074e091796c9d0d666f4b778ae9f41c",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "203cf26711125dfb68df97e0a8546d86",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/en_US.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "4ae99484cbe9e255ebbf552a6700648c",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "2a30ebb0c404dc04d412909e20096b3b",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "608592b83cea2a7f92f261c6b15f71d8",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "a3bef5f495c355ef0e8a8c3f7e240f0b",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "d84c2ad95a4371195d0e70658798fdcc",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "42798df70c9ce28a79f47d7cf5e9126c",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "a3b4ea5be5f13ebc617c719fa24ac224",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "bcde3a70d83d5dc432caaebaa54f37f8",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "73eff6c35a1a32cd405193bd50376730",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "4a12601b8cd320bde6fd144cffc83883",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "30da7d648c382c462f4d34cd0c4f6335",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "6b683ea0679660d9dee9e3c5b6773f1b",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "ec46396a64451abce588420de94a7379",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "8d7418ba822bd39e09d37d5a9523bb21",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "a99797968cbe03d47f26dec55d6184bf",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "5873065293490c08a503b1899a705fd6",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "28417e69f27ae558571d204c53e93a8c",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "dd2a8bac43e5e814e48fcf705915a2b8",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/images/search.svg": "79b7ce956cdf0a63c1af7c04be0956a2",
"assets/packages/reflexis_ui/lib/assets/images/notes.svg": "5ca34a0734c621172f00cca3e6ee7f65",
"assets/packages/reflexis_ui/lib/assets/images/load_fail.svg": "7c751f1b6a3d324f45730a20f0645706",
"assets/packages/reflexis_ui/lib/assets/images/completed_tasks.svg": "0dc32bc07940c6b4a5c9607ad7473191",
"assets/packages/reflexis_ui/lib/assets/images/cloud_fail.svg": "8a86ae2f4b82c4adcfafaeea80bc98df",
"assets/packages/reflexis_ui/lib/assets/images/sad_zebra.svg": "f3c754f52a7679fb5275cb3902de459b",
"assets/packages/reflexis_ui/lib/assets/images/chat.svg": "9c280d1b4a767df3784d10e463d7dee5",
"assets/packages/reflexis_ui/lib/assets/images/server_fail.svg": "d20bc5ecaa1d0681198fd0289565f12f",
"assets/packages/reflexis_ui/lib/assets/images/empty_box.svg": "34fcee2d89e36a035a22d687e57ccfdc",
"assets/packages/reflexis_ui/lib/assets/images/calendar.svg": "8f8779a6f7c1cec4fec20ae3a5b04c6d",
"assets/packages/reflexis_ui/lib/assets/images/notifications.svg": "a03c4a5e18990a6f598cc1c1c81bdaea",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/index.html": "b6196a9e894fead49e1eae738c6c5633",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/styles.css": "ea38c964a8c511d9a150105249a77f08",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/ckeditor.js": "45196a8b144ed42da7fd5a4ecbefddc7",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/ckeditor.js.map": "eacc8928aff76a87c790cccf09300c6a",
"assets/packages/reflexis_ui/lib/assets/editors/classic/index.html": "ad05061631025637ee5b1cb5f26cf4ca",
"assets/packages/reflexis_ui/lib/assets/editors/classic/styles.css": "2456f28fca3d1cd5a69cd6055d258e60",
"assets/packages/reflexis_ui/lib/assets/editors/classic/ckeditor.js": "d2c04d7c9f0679b43e250ac35c7efc0f",
"assets/packages/reflexis_ui/lib/assets/editors/classic/ckeditor.js.map": "2cdf38696299c7dc6f4c83dd3ee8709a",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/packages/reflexis_ui/lib/assets/fonts/reflexis.ttf": "7cf4e51f78e5dabe4ec61ce8df517e0b",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/packages/reflexis_ui/lib/assets/fonts/selection.json": "f3bc93de4a8081d4f47cfbd8293e782e",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/ztmf_localizations/lib/assets/zh.json": "ff946ce8754840c4157d1ed5fb9e061f",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "a0905edb11d53317eaf24b3cafa9f471",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "f3b3b884d3c7cd863bf531f79db28f28",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "00893c69fb0897ff1d04fb0373733cb4",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "234ec0936afea2206bcca44be001ceae",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "4d4f0ae0a4942c20bd74fa1ca65ff862",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "2040c7e277b9521c1970e223a5cbcb6a",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "05515e256350566883fa3b8e0baf9887",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "58a06fac37d8785db209f6705489f86f",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "e80420af3b0237673e2f95c2352d3ace",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "87862a0808a727e6cd7f6df7eecc6709",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "7d8b15e8da49a8368981c12cfbb3d6d3",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "7e6be53ddde86ac87c0c2af49558c8fc",
"assets/packages/ztmf_localizations/lib/assets/de.json": "f4d054e85b64dced0afc0d0de92c22ee",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "33c8b7b8fa7822360b6796ce967de206",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "91a978716f82b06b2985c01972b4fe64",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "dbbdeb8ac1564d4898415c4ea902e346",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "63de731d02e8576008940340b3d5bac2",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "1be8192e4636b0fd5a6115534526c32b",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "9db876e836827fb9ceb949ab2c1d8d43",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "4af2cf3785bb4f5fb33253652f63a83a",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "f39f27e7c0090a6a1bf1209db771be09",
"assets/packages/ztmf_localizations/lib/assets/en.json": "b038fb4738fba9d204450794c982aae3",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "6451f77ae4336eb4247c99ab3bc31179",
"assets/packages/ztmf_localizations/lib/assets/it.json": "f5b73c9fb434ce1dae2f63b26f1e7db7",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "9ab933c6e57bec8e0f7f115a4652359c",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "80e3468fe0bff91b8abca045b7ee15e3",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "aee9668d87f7a4456d95156f5dc5fcfe",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "02225aaa12d2c2290243f9a6ea12e161",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "f2e9a2a88db57cb8e17889fcb2f39805",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "28097b6d8a88c41576dafa4bbd830115",
"assets/packages/ztmf_localizations/lib/assets/in.json": "e09e6d69d20a2c54ed25e4e641c5a254",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "502f821b76a093242a0930b39d7696eb",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "3d6be9710fe8c243a98e44ebe837515b",
"assets/packages/ztmf_localizations/lib/assets/el.json": "f59d97cef53ede20ddf962b559e3abca",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "8785e2f6b7768c748d97b986a5b72a15",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "e96e1749cc864ed942a9c5ac493947ee",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "cf12e2e1042fa356caa937761db30f19",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "10362bfbd087109230973bbd3cefc4b3",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "55c82a7804ea656aabb60b29cb3cf5ec",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "07760251d0a580b71fd7e9990214965a",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "48fb0cf51d940eba2d896b477d89b3f0",
"assets/packages/ztmf_localizations/lib/assets/th.json": "024817714897e99c6b8a0aaf0bb4590a",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "2b9e825b55347a06fd3fcf11c5946320",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "22c5a8289bdbefe68619c8ee10c276d1",
"assets/packages/ztmf_localizations/lib/assets/es.json": "e17adac67f63c303de4d168ee44bd417",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "621c21eb7129db9a0cb5e396dc7651d9",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "c769b7b0f8717e2493e1df83d4c8f8f4",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "7e44f4dfc63efaf049036fc649f07d78",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "699c41f49f4b63e3ac45b2d3025fa328",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "db1a733f3adf1f50e9b302a5eea249f6",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/packages/kernel_auth/lib/assets/web/teams.js": "8984d6c9e09f8f458013f73c5afad94e",
"assets/shaders/ink_sparkle.frag": "e193443b8e9b18902ab23306d344ecdc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/config.json": "fcca9b516f020905eeacc5ccbada0932",
"assets/assets/colors.json": "483806d86ce4254875d796765a2f7a68",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

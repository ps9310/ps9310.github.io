'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8f01a065ba71c22fcf6e63eb5fc30266",
"index.html": "8c6a6a3dcbc8c771bb9228f295bbd42c",
"/": "ad05061631025637ee5b1cb5f26cf4ca",
"main.dart.js": "78d61913b6b624f19b8f69d53a1f7a07",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fbf4a6a05f7deebd9cf27dcfa055092",
"assets/AssetManifest.json": "2820b35b02b0e88fec67f9c8523dbab1",
"assets/NOTICES": "a536c3abae45d886f5daf0063e4eef5d",
"assets/FontManifest.json": "c1fc0d4221649efe089e45cbf403cf0b",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "4bc4525af6b20b7516fd0732df953841",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "fb9e079faa0d8f8a8b5dc96ce584f8db",
"assets/packages/reflexis_ui/lib/assets/strings/mk.json": "f1a57732519417053a9690d8e3f63a1c",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "787b4320c705fc36da6fa1da61303a95",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "8e7183fff384140184eab68486ce24ea",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "3e301c8c0afcd58aea63da4bc8028a6b",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "4bc4525af6b20b7516fd0732df953841",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "c807881cacb929906c3dbcf7c36551e4",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "9244fa2fda04423d7115f51d24d75e62",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "06df2e44f20508ab50c1ac49e9949647",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "567b2fcb71cd14eeb8b4f881c49a0261",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "0857c0cef27fa1fb76f4520bca8b44c9",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "8b9803ccca7ca2a87768282e402dee54",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "567b2fcb71cd14eeb8b4f881c49a0261",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "0857c0cef27fa1fb76f4520bca8b44c9",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "dd887511aea80f4ab0db9383726fcbad",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "f78a9da91ad31ff4745056c379405cd6",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "b55ba7c735aa86be6cf7ed5bda40fb48",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "e1c534610b80ae7b36b48c2f6d8c4e14",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "7e87d2f35a87903c40db92f4859199ba",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "fc9578e0fde165ec897b8f83c0550f80",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "7fa51ae52e48b39a26750ea2bef3274c",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "e1c534610b80ae7b36b48c2f6d8c4e14",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "ef3af96c39882e050bd66a19b851d196",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "35a7c70ce68712f3aa5657d6bb1c7134",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "89daf3e7d85396f5c57181a320ad49dd",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "ffe96f0ce36fb21ccc6ead12947d6065",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "c8250032b0ffbbad6710ecbcde574610",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "0857c0cef27fa1fb76f4520bca8b44c9",
"assets/packages/reflexis_ui/lib/assets/strings/en_US.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "5968e7e65fdc101f5ac997878930e8fb",
"assets/packages/reflexis_ui/lib/assets/strings/sq.json": "a419e37a8dc47879cd94cdc8b6436843",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "990312f15acfb3fb83910cd6edb99823",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "2342d7d22934530d575ea75c5523d0b9",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "31735f47cfb7eb9d2b8e114d4908b57b",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "edf5d5b72a2b09ef536062902588a6ee",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "49ec80f31372fcb700a38fe6c2059df7",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "7aa1337c737f7ab205ccd1d9811127fc",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "ac341c8a55f05f2b7966a0c7f9f09712",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "672c24d2a2b9c373c5516763a539da99",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "0037d0e446e7c7eddd1352dce2b8c70b",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "d9ea1a69ce81c359da364564470218b6",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "29f60014bc3ea86cc8000ba859cb935d",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "b275c404a1d17bfae5ad2aa6f7492308",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "d044e7a06b28b8e4cc07f63b8e72658b",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "0857c0cef27fa1fb76f4520bca8b44c9",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "6c3497a220360bf0b7590edba019ca10",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "2c561e040d133bffb771bb465643a15f",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "98810cb84f4ae3dbbc63772477f4bcc3",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "6762fefa195a512e83920e01e5284554",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "a1fe8747c95a102252c5ea439f7e8681",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "0857c0cef27fa1fb76f4520bca8b44c9",
"assets/packages/reflexis_ui/lib/assets/images/search.svg": "79b7ce956cdf0a63c1af7c04be0956a2",
"assets/packages/reflexis_ui/lib/assets/images/notes.svg": "5ca34a0734c621172f00cca3e6ee7f65",
"assets/packages/reflexis_ui/lib/assets/images/load_fail.svg": "7c751f1b6a3d324f45730a20f0645706",
"assets/packages/reflexis_ui/lib/assets/images/completed_tasks.svg": "0dc32bc07940c6b4a5c9607ad7473191",
"assets/packages/reflexis_ui/lib/assets/images/cloud_fail.svg": "8a86ae2f4b82c4adcfafaeea80bc98df",
"assets/packages/reflexis_ui/lib/assets/images/sad_zebra.svg": "f3c754f52a7679fb5275cb3902de459b",
"assets/packages/reflexis_ui/lib/assets/images/chat.svg": "9c280d1b4a767df3784d10e463d7dee5",
"assets/packages/reflexis_ui/lib/assets/images/server_fail.svg": "d20bc5ecaa1d0681198fd0289565f12f",
"assets/packages/reflexis_ui/lib/assets/images/empty_box.svg": "34fcee2d89e36a035a22d687e57ccfdc",
"assets/packages/reflexis_ui/lib/assets/images/punch.svg": "8e65a1dfaa58ec27ac40f7cbb88e4385",
"assets/packages/reflexis_ui/lib/assets/images/calendar.svg": "8f8779a6f7c1cec4fec20ae3a5b04c6d",
"assets/packages/reflexis_ui/lib/assets/images/notifications.svg": "a03c4a5e18990a6f598cc1c1c81bdaea",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/index.html": "b6196a9e894fead49e1eae738c6c5633",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/styles.css": "ea38c964a8c511d9a150105249a77f08",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/ckeditor.js": "45196a8b144ed42da7fd5a4ecbefddc7",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/ckeditor.js.map": "eacc8928aff76a87c790cccf09300c6a",
"assets/packages/reflexis_ui/lib/assets/editors/classic/index.html": "ad05061631025637ee5b1cb5f26cf4ca",
"assets/packages/reflexis_ui/lib/assets/editors/classic/styles.css": "2456f28fca3d1cd5a69cd6055d258e60",
"assets/packages/reflexis_ui/lib/assets/editors/classic/ckeditor.js": "607357d32480cccaf039f0032e2ecea1",
"assets/packages/reflexis_ui/lib/assets/editors/classic/ckeditor.js.map": "1cf488d542618b6d0237bef970de0f11",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/packages/reflexis_ui/lib/assets/fonts/reflexis.ttf": "2adfbafec44d9e753480811e20cae8e8",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/packages/reflexis_ui/lib/assets/fonts/selection.json": "268ecab67a2f6b00b79711460250f905",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/packages/reflexis_ui/lib/assets/animations/thumbs_up_approved.json": "3d1324d15e8f9b0b656f3aca3ef460f7",
"assets/packages/reflexis_ui/lib/assets/animations/time_approved.json": "f231a4009d94c46fe7f2306496f9f70b",
"assets/packages/reflexis_ui/lib/assets/animations/time_approved_glimmer.json": "611fe564b1e7121458985e9b1f6cb8e8",
"assets/packages/reflexis_ui/lib/assets/animations/two_checks.json": "65a5bddc7a4fe4a1499be20af35c1e3c",
"assets/packages/reflexis_ui/lib/assets/animations/check_glimmer.json": "1f46d17f1bd17217ba5eb116fa290287",
"assets/packages/reflexis_ui/lib/assets/animations/thumbs_up.json": "087bcb9e38fab38104bf64a83faedba0",
"assets/packages/reflexis_ui/lib/assets/animations/approval_stamped.json": "8f6527f26ce5c233fea820941c4adab9",
"assets/packages/reflexis_ui/lib/assets/animations/check.json": "ca516f06102d727d8e25fb6fa70e747a",
"assets/packages/reflexis_ui/lib/assets/animations/check_ripple.json": "74638175550f77bd357a48de6d36e4cb",
"assets/packages/reflexis_ui/lib/assets/animations/check_circle.json": "0893f6c2feebfcd4bc66838ce67b3f06",
"assets/packages/reflexis_ui/lib/assets/animations/time_approved_box.json": "f106c3354e66fd07eb82b382e03e7066",
"assets/packages/reflexis_ui/lib/assets/animations/timecard_tapping.json": "1aa17c200fa6f3d743e4e63f61947cad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "b11db8ec59b494470e6a9ecfe498e67a",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "224219a4d108f1e47aa8d883be6ecd7f",
"assets/packages/html_editor_enhanced/assets/summernote.html": "0a4697b4b9d3eba6074a152e66b83aaf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "f1c66d2bb0db13d30b7aaa86c07be1a4",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "1cd76f2bcd4d6d7bb8d765a234734796",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "1ab07b822bdb41c14c6fab2d4d041d4a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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

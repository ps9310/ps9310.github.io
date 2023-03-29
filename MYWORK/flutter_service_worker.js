'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "56bf35f4b477552fdfaa830736ae8fa2",
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
"index.html": "56eae8abae5e8ccd15e24384774b0e9c",
"/": "ad05061631025637ee5b1cb5f26cf4ca",
"main.dart.js": "6bf00320e74ee12fd0c3a38f4cf1de7d",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "6d49b6b36cabaa7ef4e3db096aa9ce5d",
"icons/Icon-192.png": "bb300e1fe6cba68b7c0d3884d111b813",
"icons/Icon-maskable-192.png": "bb300e1fe6cba68b7c0d3884d111b813",
"icons/Icon-maskable-512.png": "8fc123d79374c95cd73665a941007514",
"icons/Icon-512.png": "8fc123d79374c95cd73665a941007514",
"manifest.json": "ae06f915e2d0de275c03caab3f4107d0",
"assets/AssetManifest.json": "c2a57a3815291aa53a6867dfb082c2df",
"assets/NOTICES": "7644dd8b9333894e28b03be17a091894",
"assets/FontManifest.json": "d7fa4c2f04c5555c884ca73a2a1ad538",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/ztmf_responder/images/table_image.png": "78a26c2443ba9c324863558aef358802",
"assets/packages/ztmf_responder/images/row_image.png": "b9db8a2c4f93705be71db2b114c8959c",
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
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/ztmf_localizations/lib/assets/zh.json": "125bac409766c22962d4957b41dde429",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "f3631958dc2903d820d50a540b1293e6",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "c259ee6e4a8a9f7aabe86bcdb9c6c324",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "fcfd527f998bde1e0176677b76e22746",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "e837d7cb16d131f39571441516b6e620",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "78c60b9b325ae43e5a78e420799a61f3",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "33426d2f100313d5aff5e44c83e64c31",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "29a79fc82f2decbe8cef3f7658fad481",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "76a299e9dcd388e085735768ab276634",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "4bf06dd0a79a8a6367b3d64cac080206",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "70bba25a0e1e6d3ceb46f8788585dd88",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "70338255aa808714296c9e45aaf286d9",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "963305c63b45cd5cb2ef37e4375c6895",
"assets/packages/ztmf_localizations/lib/assets/de.json": "bd72c50a3a17d41264ff3a3a523d5682",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "c3c44787b168dda4a350aab15048c8a2",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "d913b64669cd46be30a20c48af04c574",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "79f56f42e94e7f72e6d3a088d85b9d4d",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "d6b93c59a1dbc2e0905b696aa09484de",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "57c2248fd31ccce07bb91133a250fe0a",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "1243902d1c9b9acd70c05c03c235c726",
"assets/packages/ztmf_localizations/lib/assets/fr_CH.json": "4491b0e155c46053ce0478c6e453a716",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "aeeb48c3f519801192169cf31bcb3c49",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "607ad54e54210fd4ca2b237afa270dff",
"assets/packages/ztmf_localizations/lib/assets/en.json": "45158923d004a849fd7f92942f6d896b",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "6b1e1f109726267417c457826cf5281c",
"assets/packages/ztmf_localizations/lib/assets/it.json": "c105a5cd88f28c29a74f3e425d878c7e",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "d6c51a0afe81fdce709c3e7d807eb6a0",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "f1d84b2b80a88f4894b95bc1228222d3",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "952bc72e97868ffb54fa6e5f603de7c6",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "7594d43add3b26e02819f7fac6a1a6ea",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "33ce7d7d2991461224eb548e12779091",
"assets/packages/ztmf_localizations/lib/assets/de_CH.json": "d9a8ff8e83ac73f5af623d3b4566b10e",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "aeb90b8ebe8a93f5b97e14b33760eefb",
"assets/packages/ztmf_localizations/lib/assets/in.json": "3cf097238ae945fe19be16815c0a7a79",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "12d9779aff0dc4cdf859bfcc1a528b27",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "4de1feb939ff1fa7a3279d41df38c6b2",
"assets/packages/ztmf_localizations/lib/assets/el.json": "d1dd27ff7a83574fdeb424f0c1681857",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "f1805e7f8e0bf4e51846cd4f7e851a42",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "49a39f9f360a9934ef1ff589293e61f4",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "9c67c8c489f79122f4ec587ed63eb761",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "f7876f5b00670b086d6db338a1fe5573",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "531628ddd0f68cb9eeb37c340c3d7016",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "8ea29f392bbdc43918cf3e80c82555a8",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "885edc854b75ea3f31cad3804a78f971",
"assets/packages/ztmf_localizations/lib/assets/th.json": "a9199352546ab45284174700dad1e9d6",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "dffe2b2ca2f0797d89deab5834cc1492",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "9c74daf92919c0c517e52eafd50c56d1",
"assets/packages/ztmf_localizations/lib/assets/es.json": "5d9ebc7b1d4887d462e12763ed88fb81",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "fae70b10058299bfa821d3a35c06fc17",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "5b685b88f8ec6cb09a6d6409789b12fc",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "21629b5518849940f916b633619978e5",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "a78d7bff338b3394e31549180cee3980",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "cff637fc93b073c576d867795c988c82",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/config.json": "aed0322721e82e12c1043950de4c1ad0",
"assets/assets/colors.json": "fea3e3379e2309c8c81cc9150db1ade6",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "51ae1f2e1c69591df8b2936defbfe4d8",
"index.html": "20ec08149bec094d7d8a348cee32137b",
"/": "ad05061631025637ee5b1cb5f26cf4ca",
"main.dart.js": "c3c9e7b4a7e5325d24960e0961dc1096",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e5f95517503ed72cdf44fc1f2ae3a97",
"assets/AssetManifest.json": "684273f412607bdec1e341731f8579b9",
"assets/NOTICES": "dedd818ad5e724dda9286863d537aa31",
"assets/FontManifest.json": "c1fc0d4221649efe089e45cbf403cf0b",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "7d13fbfca20a0bb4abe92e334c792d9c",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "34d7b6b832e85d048fd68969211f4c4c",
"assets/packages/reflexis_ui/lib/assets/strings/mk.json": "b3185c5d67d040adce2044a662ee47d9",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "40878987698816091af62b4511ad5b60",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "f92a4c9502a1645664a0808d2b67863e",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "ab45b0087d73113fcd1c54fa3fd532f0",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "7d13fbfca20a0bb4abe92e334c792d9c",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "8b76f84dd739effb92be45677d24d8a9",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "cd4e122380319f30c5b43697d73bbbd0",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "6e7bdb3fafed7c7af8eb2dc76583d6ab",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "4ab10591641eda69cf5013a99338a16e",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "468e5b47384b8a105d98ec26048b20a7",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "314a408d5d941b83217e780bedba2508",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "4ab10591641eda69cf5013a99338a16e",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "83b12a545c66bc7621e53123af1815b1",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "d9aefda422c194256e86229fcf5db1fa",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "62d0e03737411800ae92b2ed049fcbc3",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "938db48a4abee91127cd269a5cae09af",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "900e6b1df9c1e10679c888f7d662df7e",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "03ab87da64528e1434b55c6b0921408d",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CH.json": "8b76f84dd739effb92be45677d24d8a9",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "e8812ab5c4b2d8933c54b4449cef1be4",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "21a62086b9e2da36ee9fb03e17fb8b8b",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "900e6b1df9c1e10679c888f7d662df7e",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "afbcc29982c9ce0d0ec49d2e81c3527b",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "5aa413d89dccbd26fec2089c2a9d61c3",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "d39db97ca8f53cbf40f627e0e4133bfa",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "7f807c53a521d7e204d0adb7fd434533",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "32ae06c7057a33727a7ee4b7ddd4ffa9",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "468e5b47384b8a105d98ec26048b20a7",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "779c126600e1214e63f1fb3df60a2288",
"assets/packages/reflexis_ui/lib/assets/strings/de_CH.json": "35344b62f2e7cda7e281a3d0ac43af6b",
"assets/packages/reflexis_ui/lib/assets/strings/sq.json": "8eba3d46dae7b4caa776d44f240820ca",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "96c95fb7d24766b125426081e82622a2",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "32f4fa82c492d54ee4ca20c20a145854",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "189893ce6b4d4cf2c2d9011a4f21f589",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "c1ad51fcd998143de9c72fcb7c500791",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "154afdd44096ca50886c60b91869a2c8",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "bf1772dc92353c7e1d7ba89da3e417b8",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "66dc72d544e625be5cf7702dbac08f42",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "e9d599a2c7024c7dd982f8702bea0faa",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "bd333a05696c22ed53fd216444690a9a",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "7183dcb6bc2f764ce1c813e60653bffb",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "54daef9a2205288c56c968e19273a83e",
"assets/packages/reflexis_ui/lib/assets/strings/da.json": "50680b5310556e66239c1eba73f45160",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "7caa852b614dd0e48e47a6c897fdbc45",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "387329830a1de804e1ee14ac27e6f4a8",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "468e5b47384b8a105d98ec26048b20a7",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "2fd528023e6b23bdab0f89d676463c1d",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "d413a372acd784562c69e5e2680f71a1",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "9f20dd137473bf3f6a73cd69222d1fa8",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "6e52837e58faf019e404f3b0d3ae15de",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "672395c06fe24396832ae47871fcb7dc",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "468e5b47384b8a105d98ec26048b20a7",
"assets/packages/reflexis_ui/lib/assets/images/search.svg": "79b7ce956cdf0a63c1af7c04be0956a2",
"assets/packages/reflexis_ui/lib/assets/images/notes.svg": "5ca34a0734c621172f00cca3e6ee7f65",
"assets/packages/reflexis_ui/lib/assets/images/load_fail.svg": "7c751f1b6a3d324f45730a20f0645706",
"assets/packages/reflexis_ui/lib/assets/images/sleeping_zebra.svg": "8eb606f390f1bd27d5805790b83b4805",
"assets/packages/reflexis_ui/lib/assets/images/completed_tasks.svg": "0dc32bc07940c6b4a5c9607ad7473191",
"assets/packages/reflexis_ui/lib/assets/images/map.svg": "cb867dde3c42171f5149d5f47bdb1d8c",
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
"assets/packages/reflexis_ui/lib/assets/fonts/reflexis.ttf": "3e8981f5fa2433a32afee883df7c5fd4",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/packages/reflexis_ui/lib/assets/fonts/selection.json": "c65600595dec02ef4bd8898726fc39d5",
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
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
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
"assets/packages/ztmf_localizations/lib/assets/zh.json": "1ad619f977453079b4766fc74285cd3c",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "e0badd88b84b02d8be7d563754ecbc0f",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "61184f9466c05e6c4b69768d91b9db50",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "a1bf884791ff8ad0af0f2ede3bde30af",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "2ff5ecfb9ae8653ab0559ae482ec2f45",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "36d46566bdc41d9a92c818832138300e",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "9da7d29f4d6d7ca369de70c18e46ce43",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "12d0f92d835a1d0654d135251cfaffd5",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "a40630ad631ab8995744764b1a1b5305",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "65d13e5e3f88356d562842cda5b2ec34",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "2b0fa2afccc5f44f544e3e507ccf4977",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "a6491173fda30258be1d425b12dd7769",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "0d2e61912e528f6c46908985bd154ab6",
"assets/packages/ztmf_localizations/lib/assets/de.json": "f59fa0e0f3f6e9454d010b38da63f618",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "3839e7be425112c693556c9e1e00ee6a",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "3c27bc6ceb994325507795067c3c0dc5",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "2d2cb5ddde75156814777796d51dcbcd",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "1557db1f49678e493b9a510af22067d8",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "09453f22f0182b85665155af532cbd73",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "d86b123867ce6e65f31b2d042d406a90",
"assets/packages/ztmf_localizations/lib/assets/fr_CH.json": "d64dc730aedd14b7cc134f9a24bcc57c",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "5950238d438d760e09bb63f31d91af30",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "d630d012188cfa321e417369c8d02915",
"assets/packages/ztmf_localizations/lib/assets/en.json": "6ab1d2d7eb41201ea2482156214786a1",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "5ec6eb85636e6e3608da9e803bd50a87",
"assets/packages/ztmf_localizations/lib/assets/it.json": "e0aa6c3bf2da20c51f0f5357da883b84",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "4b0e35ffc7cf23e41643dd6be3c403be",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "d04e82cf9a79acb4530a152d275c97dc",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "06ebc869e6a9d45ff5d8b265aa885aac",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "f466ebee2fdfcfc8639751f5b425a3fd",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "31ccde7fd464f6dcb5cda3af17e241c0",
"assets/packages/ztmf_localizations/lib/assets/de_CH.json": "32372efacf76dc23fef8629ff3796785",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "47797306199b27931b236b2ac783b495",
"assets/packages/ztmf_localizations/lib/assets/in.json": "8ae47cf78a71090485aa53c694ecafff",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "d15800956cf88692410c89eec0a8b58e",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "2b57ac3d78736dfe172006fa85e37a12",
"assets/packages/ztmf_localizations/lib/assets/el.json": "3e019b25c5cd35a1aa42457d82d64190",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "d8448c64a302a154abafbe8f76b9beae",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "1b7f88deab8c692af7efab12a3f68e34",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "5caa15f85d4eeba2a11676cfec698fb4",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "6a362ea5fac54afabcf7427e6cdcd383",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "eea2353cfe59f4faa0a59446b47ebacd",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "7736621708f6ea9e1e9ddf65f7b6b268",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "82ee08a4968153d3afd69fac58c32106",
"assets/packages/ztmf_localizations/lib/assets/da.json": "121b4f6462a22e72d1bba59885120d2a",
"assets/packages/ztmf_localizations/lib/assets/th.json": "ceb2331009d12ba375482a4cc574611e",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "887c92a67ade51d04d69904f02c99b6a",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "72f20e34004ba686feab01144f1e1050",
"assets/packages/ztmf_localizations/lib/assets/es.json": "2d2d1212c30502d2a9ac21e50be55a6f",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "1149b8eac48a7309d9b876323281cd23",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "ead2721f35e0eb2764cadb56112b0aad",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "3737103acc30637e0a03640545a797a2",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "69b8073c95d49dca6f85fb25559c7e86",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "97f0eac1914280e48d12d37a4915a0ed",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/packages/kernel_auth/lib/assets/web/teams.js": "7ae06a4e9523164e2fb211c7472b67d8",
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

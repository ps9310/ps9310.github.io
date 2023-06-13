'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6684894b3bf311f9d537cff4fca22170",
"splash/img/light-2x.png": "fd129154906aad297a04307144f4e027",
"splash/img/dark-4x.png": "b400d8bf1d0e61ea002eaaeff94f13a0",
"splash/img/light-3x.png": "4da4a10e34ed3df3e68bd3257ef189ac",
"splash/img/dark-3x.png": "4da4a10e34ed3df3e68bd3257ef189ac",
"splash/img/light-4x.png": "b400d8bf1d0e61ea002eaaeff94f13a0",
"splash/img/dark-2x.png": "fd129154906aad297a04307144f4e027",
"splash/img/dark-1x.png": "ff4712c7ccd39e7d75120d60aac06a38",
"splash/img/light-1x.png": "ff4712c7ccd39e7d75120d60aac06a38",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "3e8699dd65a865ff991ec5b47a93643d",
"index.html": "1e0fcbc093c36cb60f6d10b6b964beab",
"/": "ad05061631025637ee5b1cb5f26cf4ca",
"main.dart.js": "3ee4076e66b0e22dfb64f441162fda00",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1eeca0f335ead5505a348872c492a8c8",
"assets/AssetManifest.json": "5bcb63d5055ab3f3fb9eb9d6e35436ea",
"assets/NOTICES": "1b5ddba92d15d283af5d3f8b23508e73",
"assets/FontManifest.json": "f90c55d98ab466aa4b502705d16a73d3",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/ztmf_responder/images/table_image.png": "78a26c2443ba9c324863558aef358802",
"assets/packages/ztmf_responder/images/row_image.png": "b9db8a2c4f93705be71db2b114c8959c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/mywork/assets/config.json": "aed0322721e82e12c1043950de4c1ad0",
"assets/packages/mywork/assets/colors.json": "fea3e3379e2309c8c81cc9150db1ade6",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "ef468532194544631491cb735b60435b",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "bf0af53d345e7f3e3a3af36eaae9a61f",
"assets/packages/reflexis_ui/lib/assets/strings/mk.json": "09ea4bd7301a0940e9669c45f94db369",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "0391344bc266967873c8a80b7658bde7",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "f5d2e22c685d4bcbb1b85fc48c5cc7d1",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "ce61af905841c45fdeb45100f34c82c7",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "ef468532194544631491cb735b60435b",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "fd0e0722fb09479898e5f9580c5c3054",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "27c50d7d1e61a9f11d785d9171f3c192",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "b4f38a171f92595112ff2752a67d9ec9",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "4531cfb8ce6756ae4431fb997e63a07e",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "5907a067b31a400247278c80aafaf3e0",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "c6646e555f07fc17948e5e3f0a4c4d76",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "4531cfb8ce6756ae4431fb997e63a07e",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "5907a067b31a400247278c80aafaf3e0",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "667e04242b0ab470bf23c65b164c4f9c",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "588e5dbd5d3e2aa4044baeb317aa3d1d",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "ff1bb9e5f1343e3f0c7af9e23355e81d",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "26f53480c6c00ae6f12a0495460898b1",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "cd074d1c300a77d5758801705dac7099",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "5646a294519520743982ce0adc0170ce",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "189a1eb33d48623c543f84364992bc0d",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "26f53480c6c00ae6f12a0495460898b1",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "2d72e191ba0edfc8f829b786cffe31e6",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "06dbc6312c248c935baea887c1d8ddc9",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "d65de4a318eeed2ff752253a8acf5245",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "22fe9c11178bb16eb50b4fc2432f5ff3",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "321a8ecd64fe3dd9fe9f0acd2fed6902",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "5907a067b31a400247278c80aafaf3e0",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "d7c94cfc8e10290bebb106aa90bd3923",
"assets/packages/reflexis_ui/lib/assets/strings/sq.json": "3c25b3fd927dbb8bc33d0be51388f8f2",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "f9afbe00354bc45235aab91589f4673a",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "eb565d5eb3e241e8d99f4d2d4785255e",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "7af5345cf0a49409a0ae9803a49fe68b",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "df3c9a7a979e3e1999d0d7247f2ed263",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "4a574569d1914f8f51ee5267c5cbf28f",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "7786f1c1e4096f93697a5d2c89d19261",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "0eedca00a42acef8dd35a5433e03717c",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "8ff9caa3c860d5d652be461826259c5f",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "280f3369c1cedc542e523f7eb6d98c51",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "2ce55846353b6128a6b0137dfcffa4a4",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "3cf4210c8e72d08280ab9f01d5521183",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "01ee29921f7507aabd5f9196af2685f9",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "a7b81a38bdf2a70f669e84b41246156f",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "5907a067b31a400247278c80aafaf3e0",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "971ac231ad420f2b6f9d33ed1c91b26a",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "ffa39fbd65ff1f7bcbbe342627b8e584",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "d63b051c83f7c33918f8f0ba04bfb8a8",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "e624edb318a1615e6a766c237982bd9f",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "46b728c87f4169031a18dc76a71bc84e",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "5907a067b31a400247278c80aafaf3e0",
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
"assets/packages/pinboard/assets/config.json": "5de8aa944336c043da29803848bc5a55",
"assets/packages/pinboard/assets/colors.json": "fea3e3379e2309c8c81cc9150db1ade6",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/qforms/assets/config.json": "aed0322721e82e12c1043950de4c1ad0",
"assets/packages/qforms/assets/colors.json": "1fdf3e03428d7b8b205caa1c489f815e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/qchat/assets/config.json": "5de8aa944336c043da29803848bc5a55",
"assets/packages/qchat/assets/sounds/new_msg.mp3": "387e7a9e5dfaf22381e02607a2e0ef8f",
"assets/packages/qchat/assets/colors.json": "fea3e3379e2309c8c81cc9150db1ade6",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/qaudit/assets/config.json": "79b3afda14b14621589ac559af43631a",
"assets/packages/qaudit/assets/colors.json": "1fdf3e03428d7b8b205caa1c489f815e",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "b11db8ec59b494470e6a9ecfe498e67a",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "224219a4d108f1e47aa8d883be6ecd7f",
"assets/packages/html_editor_enhanced/assets/summernote.html": "0a4697b4b9d3eba6074a152e66b83aaf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "f1c66d2bb0db13d30b7aaa86c07be1a4",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "1cd76f2bcd4d6d7bb8d765a234734796",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "1ab07b822bdb41c14c6fab2d4d041d4a",
"assets/packages/ztmf_localizations/lib/assets/zh.json": "c8823b9e5b043cb72c4eb99657216fe4",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "11dae2bf092ba877c583d78a3e81147f",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "01478d37d434fb7480dc062b90b6aa32",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "fab22ee436f7114de5449a851c63d860",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "2688a0aaa073d203724034c07e7075aa",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "7db8d43d8d1c245d82cf9645775136f5",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "58a128fc027bc7ef705d2379ac470b59",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "d198af06fe22a5fb4664596d58ce1298",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "3e373b464259e31fb3fabde1ef1d5e97",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "19551db2c5ebbf3843e78962ee95548b",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "9c67d975b05d9c99dd5a904e24fa24b1",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "27f7880b3b4f9491472f3c75158aaf26",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "a457614a46a5c386f52a181f617b8d8a",
"assets/packages/ztmf_localizations/lib/assets/de.json": "321a09b0dd33494356bd0adfcf8aa215",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "4d4b32b2d4e599400bc4a5614578c252",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "f41d8a2199fda63eea2febf6a3f81954",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "a5565794783222a5edd1c7fad06b49f6",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "a69b898e59ff85b586b206f38833246a",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "161f2a42a5067e8e2b586496cef4d52f",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "f93b032684b28d9674de560f50fe3e92",
"assets/packages/ztmf_localizations/lib/assets/fr_CH.json": "c7d5dcb57366c9732dcba32d30c2153b",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "ba7c25c1800485be843e38bbb5511d37",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "4cd3afd6fa097a0b8c04a41e99386ceb",
"assets/packages/ztmf_localizations/lib/assets/en.json": "302b8af4c7813be1c35d2651e5b25f1b",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "89174034b5095ed505a4b133931689f2",
"assets/packages/ztmf_localizations/lib/assets/it.json": "f6fa7f2cf2440a38d2d67eb9f92fb040",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "250bb1065cf77ea7579f5e8e8c2c1bd1",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "19c5f21916f7ef0f72438bcf07465a8c",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "9af001d1ad7f66585c282e94e63c3d27",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "cc072e386dbd0df048686c53fed84070",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "5f2e506319781804c83e24a4cf3afb8a",
"assets/packages/ztmf_localizations/lib/assets/de_CH.json": "cf46962c1a72ac783548a1ce6e7da139",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "b60ad80e5efe717bde02ce4e912fdb2d",
"assets/packages/ztmf_localizations/lib/assets/in.json": "c01bdf54929e6e6b0a2bde856ff49af7",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "e666ff086e151e03b09ee1ef320b9ca7",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "ebf1f8b4d8753160f7273863407e43a2",
"assets/packages/ztmf_localizations/lib/assets/el.json": "cc74a4598ee6341170efea96a07d4979",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "b8a7ed8b7feea5fbc5cc702b7953bdbb",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "8711a2de3111505849ca71fac09cecb9",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "4776618dcd45f5db3a08371601516077",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "8ad0372a6f7616aee8ce438bfccc994a",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "324db97d757812392b29e54556fdecb3",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "faa56cb070354f963620387eb6ef8ec8",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "eb4b6474f6c5570cafa26e00e10a22a5",
"assets/packages/ztmf_localizations/lib/assets/da.json": "fd271e753c4de192ab56fd61198b45e4",
"assets/packages/ztmf_localizations/lib/assets/th.json": "71adf9910796b3050313b8ba8e782939",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "1fb92657c6f55dc7098544d1d283daf6",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "653cc88a6e410c6b59fea916ca5d161f",
"assets/packages/ztmf_localizations/lib/assets/es.json": "6a4398acdc2ad7f2558b2dfcc4a77ff3",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "3d89c0220346b3306a5d492ed05939fe",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "4e858b8889e0ec0f136ca80e261130c1",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "3a6933cd385cb060eaae18bace9f565a",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "6f2bc1ececa2a1ba1fa5ff7adeff915b",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "789e53186b8477e3637f1adc79d1240e",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/packages/kernel_auth/lib/assets/web/teams.js": "7ae06a4e9523164e2fb211c7472b67d8",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/config.json": "5de8aa944336c043da29803848bc5a55",
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

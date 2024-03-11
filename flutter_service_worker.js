'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "352bdae70f1307f4676fdcf597c18c76",
".git/config": "62ab9cc89640a953a0034c22f10ec2ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d1f02d0502a4ae25ec3f6e5f17ac1af9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a0ead2cdfaccd3c088d05beb8f40bb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fe912271184041577164918cbea47e7",
".git/logs/refs/heads/main": "9fe912271184041577164918cbea47e7",
".git/logs/refs/remotes/origin/main": "4d299cb07e6556edb018a0068538eba8",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/02/cdd2cb905930d5e4332c32f237e7ca5a976030": "e4b3a7c8c8db3a4c9616a047f5112c29",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/97b265327d65b530b3b84d83789d2adf150c1a": "89e034407eab2291381fcf99e99b53ac",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/498af6edfd30c03a13c31b7c233d450c6bee57": "05f85f937490c388c0d7be022e712ebb",
".git/objects/17/f75abaf04d9fd1094417e1940d111496cb7deb": "39d9b81a8f780e7a9d1455ad9f98ef45",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2c/b7c69a317754ee411686b241f2a3185d7b7cdf": "3c5d5a38b2a0f03b1c8755f17bd22648",
".git/objects/2c/fd647961da48e22ffba137a9e832f712cb1874": "5a12ba3e6e858967c5dd75d7ef17bb54",
".git/objects/2d/7b7f687c0224b26ba07cfbd708d98e5f1027fe": "a979411e861228abd18347c5de8df7da",
".git/objects/2e/bfb17e0f9a018a3f39517674f2270dac9a170c": "0292a0ae299f236538024bf1039b7aa3",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/9a728bc2cfa61ab15268848772b7d3d36b3514": "e6ce13201d517b016994545578135b01",
".git/objects/51/065b16f5e0aff2917589ae8e96edf7706609d6": "fa092a79877d5951d2d2410ac91e8c50",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/8fa1c94f7557a118155747a9bfe32549995c39": "d2a1c602b1d33f630edf0f3d0b548b3a",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5a/513e8d6e38f595af9b7de7c221b319bac57d7f": "f33bb3eaf47dbe0fbe0fed8be670b37c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/64/3c0694feae49319bed460145449e99b0d62b37": "c83706d641d3d43df8a6c7e25e0d51f8",
".git/objects/69/7e24c0b931682b9a6d1c9da4f9e08f0caa26f7": "480e9f856990a6ada0b7d5b8832499c6",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/1a1704d826d3b0af51c2a6e657f7346bb17ca3": "49ed77582a6c54394ec879bbf034f9af",
".git/objects/76/da0d9daa631631149e02fe2ae0a71a193b7a09": "9c0964f81ecf4eda6bc075df63aac144",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/660e1aff1a567233162a2f9c50abc15ef226d1": "828233966770fcf4c7dc7778291b44a3",
".git/objects/81/6ae3b8732055569171b7990451b03be77261b7": "7e99682f08fa2c286192ae9da61b30b6",
".git/objects/88/3bdbe7aa6ff0e671ebba12a2a11baa1ce0e3d9": "54d4bde162467cdb06561c2efbf5889d",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/f0fc33ebbc707dd9c0c95ce0bbc90c64af73e5": "996738d7efd08fa81f7a876cdb162e8e",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/99cde3d2ceddf2e8f9c2d75440cdbe8f69e553": "fe0051afbedab738d0d15298db9e57e0",
".git/objects/9b/d0e2564b49f9319c63c877253ab5535280799a": "b4b0bfccc1cf6120f5251c92fe5a8ce7",
".git/objects/a0/8ecdd925eb4a7a3cb5627341840e10eed003a0": "99d82c8d4f7847fadfcea564028be66a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/25f95e63e3aa6555818f6b2ee68f02a414c8d0": "1ad934576c524fad0bc5a2b3215d76e9",
".git/objects/a4/4d19a9c6c016f03faa7e2f95157a3108293f72": "ffe9a2bb7269bdb9a0078036f43399c4",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ae/6b1005f468b72d488d159294f83cac82352da5": "62ec6f252aab3a221dfec2c0c3d5c685",
".git/objects/af/38e4b7fd1b583a5c1f943b48ada0cff50d208c": "fa8f73cab77d79c15b336c997567f46b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/acc31ae71a52c4e41ad3a9c38c2a9001a17202": "9e84cbf363292227169d5a977e37d008",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/f9b6feaa4bd150f6a4793531f7872f86021e89": "2bbb46c8e4a7c1486ad8267b2f9443b5",
".git/objects/c3/7e4efc5c115c28b68ef44837c0bc772d1368ee": "80cc6a2c2ae5646ee0160347accf8d88",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/dee8d47a87d873bd6a925834c10fc27c1cb6a3": "365838ff2f28c04657c0ca376e16e3ba",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/73c6f7d75a2227b903ef9c20eeb1025b360568": "a0606eafb1a63778d35647da7b63cae7",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b8d5bd0ca828b8dfbc9a5b93ae6253dde405f6": "d8e1a5145c7ce2b3f664fc2f6323d5de",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/d412aae9fca6d5e361100fc0cdc4ff04812c97": "e6a13c7a7e066e8bed2403c6b60f6d72",
".git/objects/eb/1cf0c06ca4b529a8257de4a5e7c2fbd22c7ba9": "958252c447a6cfa3d4c703f4f6865019",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/175aadb95772be7d64110fb40d950381796a93": "ed8442923c126040abd2818e306406fb",
".git/objects/f5/2ed35e6c355cdba3a8001b3b6d7304f0766ae5": "80cf4b66bbc760eefe891492da434733",
".git/objects/ff/b1f11308e27ee97eec912232fa3fcddb14976a": "3e46afdf823d157cb8bd0f51ad5a7471",
".git/ORIG_HEAD": "fa583174cb30fd8a15f31fc77004006b",
".git/refs/heads/main": "1343fd2efa05a4b6e35e0f8159f3cd41",
".git/refs/remotes/origin/main": "1343fd2efa05a4b6e35e0f8159f3cd41",
"assets/AssetManifest.bin": "0fe8cbb79bcf64f9bf0c203e877df8e5",
"assets/AssetManifest.bin.json": "efd490e0fe7af46f3fffbecb04d0c31b",
"assets/AssetManifest.json": "592bc6f1e98515710d4fdaf388bc2b5e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/lib/images/girldumbell.png": "9cd7797d644ebea441a85a0d69680ac0",
"assets/lib/images/girlsquat.png": "2101afc1eb6d65ce1ea954422c821f70",
"assets/lib/images/main.png": "c893a14c2849b67fd03cefc45075f034",
"assets/lib/images/manrun.png": "c895137b2b5c9237c3ba73b8b3b4d66f",
"assets/NOTICES": "1777a81e58930b2c13be1796f475ddd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aba3168ee3e94414fe5e6bca2ba397dd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c54e1944edceaf86127c8ce86e0d672",
"/": "8c54e1944edceaf86127c8ce86e0d672",
"logo.png": "2ba1b0c34da87b130a02125564048685",
"main.dart.js": "e87fae1a7a0bb3fe7aa0982adb26198d",
"manifest.json": "59c48b91a1b0e9d9ab34151565719236",
"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "c31c0a3b9bf5b44a220eebe4a55ae2c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

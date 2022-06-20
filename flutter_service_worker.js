'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "70f4947b1cd7ce1a27fd2be5f592e685",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "eac06265ba914cb986e79d390c34d075",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6148bc72aa2f2d9d40c75e806d1944fa",
".git/logs/refs/heads/main": "260e4c6e7efc18f97568ae84fe3d75ce",
".git/objects/00/d0b2733fe297d87d16f34de1ba4b0ad850022f": "e1bdf53d74cfeb8d2c72898672b7386c",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/8ae581076b89f281fcd3a3bc238444bdf6bef9": "8fee0d8c0aaad6af716269e8468ee515",
".git/objects/09/712aa281b08ed7934412746dd9d24a6e24adfb": "df5153e0aa92dc6c06543707e5abbe16",
".git/objects/0c/7611aace9248262d3b1e958576291f50fda353": "73ee8e7342ec7ecdd15db32d2b0ee8a9",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/53eafff79604de33a3a119670416b4805574af": "71cb21c2d3f5e3ad52f94c4cb3c77534",
".git/objects/16/2cd933400370c462bb362193d1d4c0da289217": "ee538068c00586dde3a1c86e55019afd",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/da4eaef0c2a8e96373c93ddcd92987f437d6b7": "c7aac06d0570d11b3cccb0aab48ac9b4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/8c6ac4fc2820f553bbbc0e45b714b875084eff": "ae702a4a51c766367693aeabce49a7b0",
".git/objects/37/b5b9cfd8f46b3ad068d5a8383f633b6562388d": "05bafcae3523b9e2f530443a2c5999b3",
".git/objects/3a/ddeb19b63d04327cb2a6e169d85c7513e393d8": "cbe4d05537b15a4da917a6390af53410",
".git/objects/41/a894a30f6c9e052f98081e32a17d32a0741b46": "bb3820ccc6168b8082420904d616d623",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/8881cdb05ad6ce6b4e85724c32202e6caead54": "0194b0a1bb82d664f1a8d8ebf13733a9",
".git/objects/49/a539e816f3cf9837929102417a3aaafa997dba": "8b7fa6bdd4ec9e682600347be7a42c23",
".git/objects/4a/ed7012edb61655df64ce77f5b82790fe72e78c": "ac1e88588d4354a425fdb238d4b122ba",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/5372b9d507e55ed1756b897b7190598b9c4844": "d9624541723091bd1b0fbd6140c1f25b",
".git/objects/5c/a6cea51130bec968196ab66e8b00ce90067db6": "b43552c3565ff1a53f02075a23a4c10b",
".git/objects/64/8cbbbfb35d4e190b9b48fbe57f2d9589e0866a": "044e5cc0a270945210fdf317920c5c98",
".git/objects/6f/85db61ba8fc0b3fe4e536236a43e27bebaea23": "9bb06989cec477afcb93a99759a1b595",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/60e666fdad5c0490e5ed58f86bfb5bdababbb8": "617dd69a28a3805ccf81fed3a03a9945",
".git/objects/85/9e2df7a8e1bd31e2663b93853d6c1e44ec066d": "7881d1714337f6fd86412bad93f83408",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/77b6b58d53c9d998a4c4668ce4e83d8ea76292": "927ad80a2445ce98b820872366b5093f",
".git/objects/8a/3ba50ae4d49e6941a031a40dbddf8e61e89f00": "c94b4ea2a0637d42d1e1f0db61b27c41",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9fd830c942c70c110c6c61e61b6401fafbeb61": "3dd826fc39c9ea3f2d26d564ca3cc526",
".git/objects/94/121a488fefeb0fbbc43fdba880847309d3d18c": "e1d433488f3a428f5d92db8665d61398",
".git/objects/96/ba79e7e43736b38427774cfaa2b02d5f091eb6": "e84f91451a937c73f872e99b0ffc3da8",
".git/objects/9c/3d43aa7abcb8f3f410f27373d488b43fe7afe8": "05e48120daec0aa69df65e52ba592768",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/9ce5e5848294680c8e9a9e17c1f587c2121b82": "ba84ad442fde803d2e479de977873c6b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/ed6c9b9f38e1d6206e3947b173a6a146f32efb": "5dfc1833e936ad3b5b809689286f7510",
".git/objects/ce/833048874ed2b49662b74edeec97f92ea7c15f": "7c0723590b22dd969456ea658d401bbe",
".git/objects/d2/9dd494a1e5e00bf247bff42e977d0f461e2a5e": "326e166dab2e4d2f2a722fe3cb15d8f2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/30999967f429adcf197a9acedb4fa16b7c7a18": "5d72103ba3638add54224df69eda6598",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/5c9a7da983e244ce18569c1b4c723797308f78": "bba36b1cb92f4057a49927d53f5ba143",
".git/objects/fc/3b3b8fabd66d7e491766a0dd643046bcaf03a0": "2fcef93bf386ad3368808f6addd2c533",
".git/refs/heads/main": "f3a8f264a9ce4cca9259e771b68ffd36",
"assets/AssetManifest.json": "f3ff7fd7f76b7e3af8644a2c1306cf19",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/20.png": "356fa5a0466bbadbf54fcc39177911c2",
"assets/lib/assets/40.png": "13ab78b1e1e1c06fab9272cc39e0989e",
"assets/lib/assets/60.png": "a03a318ca8ae79eb3a7442298d31426f",
"assets/lib/assets/80.png": "9d14f7409b6a9dd818393794e26417a6",
"assets/lib/assets/amsler%2520Grid.png": "d76c0710268668fab661710a5ea555ea",
"assets/lib/assets/doctorpic.png": "b7de68ee7f8f9314db50ef69a6ea85c0",
"assets/lib/assets/hmt1.png": "b54b330dd2894851ff0b237d1f093559",
"assets/lib/assets/hmt2.png": "f49a8014bd9d6613605afb88ea37ba75",
"assets/lib/assets/hmt3.png": "8bd2b5e1152e7705891c3a7af4821afe",
"assets/lib/assets/hmt4.png": "4dea674efcdbb8bb822c9ff20c4177a4",
"assets/lib/assets/hmt5.png": "e1d2bfbfd5571fa6fd3865e0d2020a57",
"assets/lib/assets/hmt6.png": "92d5698978ffe58c4f4d318a5749b183",
"assets/lib/assets/hmt7.png": "c60999a813b40f9b9808029e7833d314",
"assets/lib/assets/hmt8.png": "abde1b1ad2dc91096d03ec3ba75cea21",
"assets/lib/assets/hmt9.png": "0733e9f56d06583dfa4fac229a533c0b",
"assets/lib/assets/Ishihara_1.png": "712423ac285fc68d4b42cee7a4092617",
"assets/lib/assets/Ishihara_11.png": "60c8823139ee0d966c85a7cad9f01f77",
"assets/lib/assets/oneInTen.png": "0ec5c6c1a267c464e95bb3c2c1515383",
"assets/lib/assets/proudscience1.png": "ff646a8fd6447891402b78a4eef9d542",
"assets/lib/assets/scientist1.png": "3e7ebb4b76157fec6216f12677f7bd33",
"assets/NOTICES": "54a3c18ac32d95be5dba6ebb58942817",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0e285c507d73060579f0c05ea5a3817",
"/": "b0e285c507d73060579f0c05ea5a3817",
"main.dart.js": "6f6bbc96c72543180cad1eee1a20a231",
"manifest.json": "79e71cef1532421be44f0e858f916e04",
"version.json": "715a76c4b2d92bb4eac09cdd56d87cfd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

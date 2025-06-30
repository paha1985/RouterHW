const staticCacheName = "static-site";
const dynamicCacheName = "dynamic-site";

const ASSETS = ["/", "index.html", "index.css", "App.css"];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

self.addEventListener("activate", async (event) => {
  const cachKeysArr = await caches.keys();
  await Promise.all(
    cachKeysArr
      .filter((key) => key != staticCacheName)
      .map((key) => caches.delete(key))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(event.request).then((response) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
      );
    })
  );
});

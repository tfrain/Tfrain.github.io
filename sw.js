/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/first_hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/hexo+hithub_pages+nexT/hexo1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/hexo+hithub_pages+nexT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/hexo+nexT+something/1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/hexo+nexT+something/2.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/hexo+nexT+something/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Baidu_cloud_acceleration/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/2.2.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/2.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/3.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/4.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/5.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/6.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/7.1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/Java_further_study/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/java_entry_learning/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/Thinking-of-Chat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/Notes_of_Struts2/1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/Notes_of_Struts2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/0.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/2.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/3.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/4.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/5.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/6.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/7.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/8.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/9.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/servlet/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/12/CSS-Box-BFC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/12/linux-learning2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/12/linux_learning1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/linux_learning3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/yuque/linux_learning4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/yuque/linux_learning5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/yuque/num_11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/yuque/num_155/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/yuque/num_215/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/yuque/vim_skill/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/kxgzpq/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/linux_learning6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_264/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/num_944/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/shell_learning1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/try_test1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/yuque/wikipedia_algorithm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/03/yuque/pq6p97/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/02/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/CSS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Life/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Struts2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Vim/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/leetcode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/leetcode/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/servlet/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/guestbook/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/guestbook/index/1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","e9a90f300f72f1d6b0ceb6e22311540f"],["/tags/CSS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Java/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Life/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Struts2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/servlet/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/things/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>n(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/cages.png",revision:null},{url:"assets/index-DMjBu77z.js",revision:null},{url:"assets/index.css",revision:null},{url:"assets/starting-position-blue.png",revision:null},{url:"assets/starting-position-red.png",revision:null},{url:"assets/text-logo-removebg.png",revision:null},{url:"index.html",revision:"837b63b530a66e3735be0c249fb4133c"},{url:"pwa-192x192.png",revision:"cc0a17669071d6e160006f2c8081ce25"},{url:"pwa-512x512.png",revision:"12b7952180bf874108d9f24c69b63275"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"manifest.json",revision:"a1b35371bd1ef611bf23015becf9e84f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

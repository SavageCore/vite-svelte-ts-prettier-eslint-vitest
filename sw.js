if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const l=e=>s(e,r),o={module:{uri:r},exports:f,require:l};i[r]=Promise.all(c.map((e=>o[e]||l(e)))).then((e=>(n(...e),f)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"9d57ab38ff54e83b1f84c369f96bdba1"},{url:"assets/en-3338c545.js",revision:null},{url:"assets/en-US-3338c545.js",revision:null},{url:"assets/index-8020b1cc.js",revision:null},{url:"assets/index-ee55fc9d.css",revision:null},{url:"assets/svelte-2cc39e11.svg",revision:null},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"index.html",revision:"46dbce9c43f4ffc96a0eba1150d84fd7"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"pwa-64x64.png",revision:"c1e54717be2fba2b061a552e3d76c24f"},{url:"registerSW.js",revision:"543414562d8f3b842175ba23f5fcdfe7"},{url:"vite.svg",revision:"b7c707f0892c05ca6bd8ed875054d59c"},{url:"pwa-64x64.png",revision:"c1e54717be2fba2b061a552e3d76c24f"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"manifest.webmanifest",revision:"b2c7c7dd4cf7f2c7c5fb3b767927ef4a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

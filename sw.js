if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/en-3338c545.js",revision:null},{url:"assets/en-US-3338c545.js",revision:null},{url:"assets/index-8020b1cc.js",revision:null},{url:"assets/index-ee55fc9d.css",revision:null},{url:"index.html",revision:"f4b74b0d5898be37811bee8ce703ab5a"},{url:"registerSW.js",revision:"543414562d8f3b842175ba23f5fcdfe7"},{url:"manifest.webmanifest",revision:"4f6db8eaf84544316c0a5d8f409b7fb0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

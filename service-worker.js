if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,u)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let n={};const l=e=>s(e,o),t={module:{uri:o},exports:n,require:l};i[o]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(u(...e),n)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"movies-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue3-ts-pinia-router-movies-app/css/232.40063fe0.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/24.f611d265.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/304.60dabaab.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/402.f53ee93a.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/795.6ebf97d6.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/873.561d29d2.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/971.561d29d2.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/css/app.464636e4.css",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/Mulish-Bold.0a4236f1.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/Mulish-ExtraBold.792fb274.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/Mulish-Regular.a4c4b1ab.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/Mulish-SemiBold.89b626ee.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/fa-brands-400.72bb28ad.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/fa-regular-400.b70a92fb.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/fonts/fa-solid-900.6c7f21d6.ttf",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/bigBuckBunny.fe6cc856.png",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/castle.9e0e8c96.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/cinema.fdf33ebb.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/documentary.2550a6b7.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/ghost.5e407d8b.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/hearts.c3dde83e.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/hero.6c3203bf.png",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/killer.19847db9.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/registerHere.b4ce5574.png",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/rocket.da1b1b58.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/img/smile.3ecdac16.svg",revision:null},{url:"/vue3-ts-pinia-router-movies-app/index.html",revision:"ad5eccde55e20e02a003cfbf5099991a"},{url:"/vue3-ts-pinia-router-movies-app/js/1.cdb153fe.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/232.0523c8dd.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/24.3dd89584.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/304.3f08fb50.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/375.280cc0b6.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/402.183705bb.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/639.78632364.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/672.e5531e3d.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/704.b7559bc6.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/79.7fbfd87d.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/795.e9963af4.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/873.3c8e3eaf.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/971.6ee5566f.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/app.f21eeaf0.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/js/chunk-vendors.a1a7b65b.js",revision:null},{url:"/vue3-ts-pinia-router-movies-app/manifest.json",revision:"ffe2403d32013b392d2179f3fbf72583"},{url:"/vue3-ts-pinia-router-movies-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
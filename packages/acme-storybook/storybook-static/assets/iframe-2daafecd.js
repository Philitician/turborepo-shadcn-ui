import"../sb-preview/runtime.mjs";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",p=function(r,n){return new URL(r,n).href},a={},o=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,l),e in a)return;a[e]=!0;const _=e.endsWith(".css"),R=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const O=t[c];if(O.href===e&&(!_||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${R}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":f,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,O)=>{i.addEventListener("load",c),i.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,m=S({page:"preview"});E.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const r=T({url:u});E.setServerChannel(r),window.__STORYBOOK_SERVER_CHANNEL__=r}const P={};async function d(r){return P[r]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:w,PreviewWeb:L,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const r=await Promise.all([o(()=>import("./config-7f9351e3.js"),["./config-7f9351e3.js","./index-d475d2ea.js","./_getPrototype-a63210df.js","./_commonjsHelpers-042e6b4d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-39cf8ee9.js"),[],import.meta.url),o(()=>import("./preview-bb5acd95.js"),["./preview-bb5acd95.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),o(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-0b293f2a.js"),[],import.meta.url),o(()=>import("./preview-70d9b25c.js"),["./preview-70d9b25c.js","./preview-2ad6d133.css"],import.meta.url)]);return w(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-2daafecd.js.map

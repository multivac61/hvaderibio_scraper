import{y as b,s as T,V as I,A as x,E as O}from"./scheduler.e0665e3f.js";const f=[];function U(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let n;const r=new Set;function o(s){if(T(e,s)&&(e=s,n)){const l=!f.length;for(const i of r)i[1](),f.push(i,e);if(l){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function u(s){o(s(e))}function a(s,l=b){const i=[s,l];return r.add(i),r.size===1&&(n=t(o,u)||b),s(e),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:o,update:u,subscribe:a}}function j(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=t.length<2;return U(n,(a,s)=>{let l=!1;const i=[];let _=0,g=b;const v=()=>{if(_)return;g();const c=t(r?i[0]:i,a,s);u?a(c):g=O(c)?c:b},R=o.map((c,h)=>I(c,S=>{i[h]=S,_&=~(1<<h),l&&v()},()=>{_|=1<<h}));return l=!0,v(),function(){x(R),g(),l=!1}})}function K(e){return{subscribe:e.subscribe.bind(e)}}var A;const q=((A=globalThis.__sveltekit_qiag7u)==null?void 0:A.base)??"";var E;const L=((E=globalThis.__sveltekit_qiag7u)==null?void 0:E.assets)??q,N="1693823544608",$="sveltekit:snapshot",z="sveltekit:scroll",B="sveltekit:index",y={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const k={...y,"":y.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function X(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||P(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),u=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:o,target:r,download:u}}function H(e){let t=null,n=null,r=null,o=null,u=null,a=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),o===null&&(o=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),u===null&&(u=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=m(s);function l(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:k[r??"off"],preload_data:k[o??"off"],keep_focus:l(t),noscroll:l(n),reload:l(u),replace_state:l(a)}}function w(e){const t=p(e);let n=!0;function r(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function u(a){let s;return t.subscribe(l=>{(s===void 0||n&&l!==s)&&a(s=l)})}return{notify:r,set:o,subscribe:u}}function V(){const{set:e,subscribe:t}=p(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${L}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==N;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:r}}function P(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function W(e){e.client}const F={url:w({}),page:w({}),navigating:p(null),updated:V()};export{B as I,y as P,z as S,$ as a,X as b,H as c,F as d,q as e,G as f,C as g,W as h,P as i,j,K as k,U as r,D as s,p as w};

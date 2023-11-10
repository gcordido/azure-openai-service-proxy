(()=>{"use strict";var e,t,r,a,o,f={},n={};function b(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return f[e].call(r.exports,r,r.exports,b),r.exports}b.m=f,e=[],b.O=(t,r,a,o)=>{if(!r){var f=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||f>=o)&&Object.keys(b.O).every((e=>b.O[e](r[c])))?r.splice(c--,1):(n=!1,o<f&&(f=o));if(n){e.splice(d--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);b.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,b.d(o,f),o},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"assets/js/"+({8:"bd70b650",37:"7f145c32",53:"935f2afb",58:"9333ccf7",71:"e57c966d",85:"1f391b9e",88:"8986bf83",147:"75a48486",239:"b0473fff",308:"5f627916",408:"90600105",414:"393be207",513:"f8bc9294",514:"1be78505",539:"8c2fbbba",601:"1769a8d4",647:"01e278f5",686:"a1d6ee59",692:"f7beba17",710:"07a44773",817:"14eb3368",859:"26ed008a",863:"bb7c71b4",901:"213204e8",918:"17896441"}[e]||e)+"."+{8:"52d1fb21",37:"80fd889d",53:"bc16eafd",58:"e0e33c17",71:"d504d8f4",85:"bbb5cf32",88:"42d31132",147:"de6b1ff1",239:"82534447",248:"6aae7cc3",308:"1dcc33e4",408:"b87239a5",414:"fe44be4f",513:"191dc222",514:"6e0b79f7",539:"a4c71af4",601:"3c44693f",647:"be654ddb",686:"6696a112",692:"be22584d",710:"065409e4",712:"7dcd352d",817:"164b90fa",859:"a17da0d1",863:"b1139def",901:"a2d1a3e6",918:"ba637233"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",b.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,b.nc&&n.setAttribute("nonce",b.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/azure-openai-service-proxy/",b.gca=function(e){return e={17896441:"918",90600105:"408",bd70b650:"8","7f145c32":"37","935f2afb":"53","9333ccf7":"58",e57c966d:"71","1f391b9e":"85","8986bf83":"88","75a48486":"147",b0473fff:"239","5f627916":"308","393be207":"414",f8bc9294:"513","1be78505":"514","8c2fbbba":"539","1769a8d4":"601","01e278f5":"647",a1d6ee59:"686",f7beba17:"692","07a44773":"710","14eb3368":"817","26ed008a":"859",bb7c71b4:"863","213204e8":"901"}[e]||e,b.p+b.u(e)},(()=>{var e={303:0,532:0};b.f.j=(t,r)=>{var a=b.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=b.p+b.u(t),n=new Error;b.l(f,(r=>{if(b.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},b.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],c=r[2],i=0;if(f.some((t=>0!==e[t]))){for(a in n)b.o(n,a)&&(b.m[a]=n[a]);if(c)var d=c(b)}for(t&&t(r);i<f.length;i++)o=f[i],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return b.O(d)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
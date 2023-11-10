"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,h=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={},i="Using the Playground",s={unversionedId:"playground",id:"playground",title:"Using the Playground",description:"The Playground is a web-based application that allows you to test your OpenAI models. The Playground is a single page application (SPA) that is hosted in Azure Storage Static Websites. The Playground is a React application that uses the Azure Static Web Apps framework.",source:"@site/docs/70-playground.md",sourceDirName:".",slug:"/playground",permalink:"/azure-openai-service-proxy/playground",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/70-playground.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxy service rate limits",permalink:"/azure-openai-service-proxy/rate-limits/proxy-rate-limits"},next:{title:"OpenAI API access",permalink:"/azure-openai-service-proxy/raw-openai-api-access"}},p={},c=[{value:"Authentication",id:"authentication",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-playground"},"Using the Playground"),(0,a.kt)("p",null,"The Playground is a web-based application that allows you to test your OpenAI models. The Playground is a single page application (SPA) that is hosted in Azure Storage Static Websites. The Playground is a React application that uses the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/overview"},"Azure Static Web Apps")," framework."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"An event attendee needs to authenticate to the Playground using an event code. The event code is validated and the current time is checked against the event start and end times. If the event code is valid and the event is active, then the attendee is allowed to use the Playground."),(0,a.kt)("p",null,"The Azure OpenAI proxy service provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"Playground like")," experience for developers to explore the Azure OpenAI chat completion using the time bound event code."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9296).Z,width:"2149",height:"1553"})))}d.isMDXComponent=!0},9296:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/openai_proxy_playground-0c6e8dd5b4b6c72952694ad25127b0fb.png"}}]);
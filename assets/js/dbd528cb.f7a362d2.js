"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[995],{4137:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=l(t),u=a,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||i;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[h]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4426:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(4137));const i={},p="Whisper Intranet Access",o={unversionedId:"Proxies/Whisper-intranet",id:"Proxies/Whisper-intranet",title:"Whisper Intranet Access",description:"If you are running the Whisper Server in WSL and want to run the Whisper GUI app from a different computer on the same LAN, then run the proxy.py app on the same machine as the Whisper Transcriber Service. This is because the Whisper Transcriber Service REST API is not accessible from outside the Windows WSL environment. The proxy app runs on Windows and will forward the REST API calls to the Whisper Transcriber Service running in WSL.",source:"@site/docs/50-Proxies/33-Whisper-intranet.md",sourceDirName:"50-Proxies",slug:"/Proxies/Whisper-intranet",permalink:"/azure-openai-service-proxy/Proxies/Whisper-intranet",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/50-Proxies/33-Whisper-intranet.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Whisper Web App",permalink:"/azure-openai-service-proxy/Whisper-Client/Whisper-Web-App"},next:{title:"Whisper Anywhere Access",permalink:"/azure-openai-service-proxy/Proxies/Whisper-ngrok"}},s={},l=[{value:"Install the Proxy App",id:"install-the-proxy-app",level:2}],c={toc:l},h="wrapper";function m(e){let{components:r,...i}=e;return(0,a.kt)(h,(0,n.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whisper-intranet-access"},"Whisper Intranet Access"),(0,a.kt)("p",null,"If you are running the Whisper Server in WSL and want to run the Whisper GUI app from a different computer on the same LAN, then run the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy.py")," app on the same machine as the Whisper Transcriber Service. This is because the Whisper Transcriber Service REST API is not accessible from outside the Windows WSL environment. The ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," app runs on Windows and will forward the REST API calls to the Whisper Transcriber Service running in WSL."),(0,a.kt)("p",null,"The advantage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," app compared to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok")," is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," app connection between the client and server will be a lot faster as traffic is not routed through the internet."),(0,a.kt)("h2",{id:"install-the-proxy-app"},"Install the Proxy App"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the Windows machine that is running the Whisper Transcriber Service, install the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," on Windows. At the time of writing, version 3.11.3.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git client")," if it's not already installed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From a command prompt, clone the Whisper Transcriber Service Sample repository to your preferred repo folder."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gloveboxes/OpenAI-Whisper-Transcriber-Sample.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," folder."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd OpenAI-Whisper-Transcriber-Sample/proxy\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the required libraries."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install requests\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the proxy app."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python proxy.py\n")),(0,a.kt)("p",{parentName:"li"},"The app will start, showing the IP addresses that app is using."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:t(3430).Z,width:"1675",height:"276"})),(0,a.kt)("p",{parentName:"li"},"The proxy app is now listening for REST API calls on port ",(0,a.kt)("inlineCode",{parentName:"p"},"5600")," and will forward them to the Whisper Transcriber Service running in WSL."),(0,a.kt)("p",{parentName:"li"},"In the Whisper GUI app, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Whisper server address")," to the IP address of the Windows machine running the proxy app. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"http://whisper:5600"),"."))))}m.isMDXComponent=!0},3430:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/proxy_service-fff48f8b6fafa1014c8e99832aec1e68.png"}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[199],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={},i="Chat completions API",s={unversionedId:"raw-api-access/chat-completion",id:"raw-api-access/chat-completion",title:"Chat completions API",description:"The OpenAI proxy service chat completion endpoint is a REST API that generates a response to a messages. Requests are forwarded to the Azure OpenAI service and the response is returned to the caller.",source:"@site/docs/80-raw-api-access/20-chat-completion.md",sourceDirName:"80-raw-api-access",slug:"/raw-api-access/chat-completion",permalink:"/azure-openai-service-proxy/raw-api-access/chat-completion",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/80-raw-api-access/20-chat-completion.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Endpoint access",permalink:"/azure-openai-service-proxy/raw-api-access/introduction"},next:{title:"Completions API",permalink:"/azure-openai-service-proxy/raw-api-access/completions"}},p={},c=[{value:"Using the OpenAI SDK",id:"using-the-openai-sdk",level:2},{value:"Chat completion with Curl",id:"chat-completion-with-curl",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chat-completions-api"},"Chat completions API"),(0,o.kt)("p",null,"The OpenAI proxy service chat completion endpoint is a REST API that generates a response to a messages. Requests are forwarded to the Azure OpenAI service and the response is returned to the caller."),(0,o.kt)("h2",{id:"using-the-openai-sdk"},"Using the OpenAI SDK"),(0,o.kt)("p",null,"The following example is from the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/examples")," folder and demonstrates how to use the OpenAI Python SDK version 1.2.x to access the chat completions API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'""" Test Azure OpenAI Chat Completions API """\n\nimport os\nfrom dotenv import load_dotenv\nfrom openai import AzureOpenAI\n\nload_dotenv()\n\nENDPOINT_URL = os.environ.get("ENDPOINT_URL")\nAPI_KEY = os.environ.get("API_KEY")\nAPI_VERSION = "2023-09-01-preview"\n\n\nclient = AzureOpenAI(\n    azure_endpoint=ENDPOINT_URL,\n    api_key=API_KEY,\n    api_version=API_VERSION,\n)\n\nMESSAGES = [\n    {"role": "system", "content": "You are a helpful assistant."},\n    {"role": "user", "content": "Who won the world series in 2020?"},\n    {\n        "role": "assistant",\n        "content": "The Los Angeles Dodgers won the World Series in 2020.",\n    },\n    {"role": "user", "content": "Where was it played?"},\n]\n\n\ncompletion = client.chat.completions.create(\n    model="deployment-name",  # e.g. gpt-35-instant\n    messages=MESSAGES,\n)\n\nprint(completion.model_dump_json(indent=2))\nprint()\nprint(completion.choices[0].message.content)\n\n')),(0,o.kt)("h2",{id:"chat-completion-with-curl"},"Chat completion with Curl"),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL")," to access the chat completion API. Remember, the ",(0,o.kt)("inlineCode",{parentName:"p"},"API_KEY")," is the EventCode/GitHubUserName, eg ",(0,o.kt)("inlineCode",{parentName:"p"},"hackathon/gloveboxes"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ENDPOINT_URL")," is proxy url provided by the event administrator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n-H "api-key: API_KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "max_tokens": 256,\n    "temperature": 1,\n    "messages": [\n        {\n            "role": "system",\n            "content": "You are an AI assistant that writes poems in the style of William Shakespeare."\n        },\n        {\n            "role": "user",\n            "content": "Write a poem about indian elephants"\n        }\n    ]\n}\' \\\nhttps://ENDPOINT_URL/v1/api/openai/deployments/davinci/completions | jq\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[199],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[h]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={},i="Chat completions API",p={unversionedId:"raw-api-access/chat-completion",id:"raw-api-access/chat-completion",title:"Chat completions API",description:"The OpenAI proxy service chat completion endpoint is a REST API that generates a response to a user's prompt. Requests are forwarded to the Azure OpenAI service and the response is returned to the caller.",source:"@site/docs/80-raw-api-access/20-chat-completion.md",sourceDirName:"80-raw-api-access",slug:"/raw-api-access/chat-completion",permalink:"/azure-openai-service-proxy/raw-api-access/chat-completion",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/80-raw-api-access/20-chat-completion.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Endpoint access",permalink:"/azure-openai-service-proxy/raw-api-access/introduction"},next:{title:"Embeddings API",permalink:"/azure-openai-service-proxy/raw-api-access/embedding"}},s={},c=[{value:"Chat completion with Curl",id:"chat-completion-with-curl",level:2},{value:"Chat completion with Python and httpx",id:"chat-completion-with-python-and-httpx",level:2},{value:"The Python OpenAI Proxy SDK",id:"the-python-openai-proxy-sdk",level:2}],l={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chat-completions-api"},"Chat completions API"),(0,o.kt)("p",null,"The OpenAI proxy service chat completion endpoint is a REST API that generates a response to a user's prompt. Requests are forwarded to the Azure OpenAI service and the response is returned to the caller."),(0,o.kt)("h2",{id:"chat-completion-with-curl"},"Chat completion with Curl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n-H "openai-event-code: hackathon/githubuser" \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "max_tokens": 256,\n    "temperature": 1,\n    "messages": [\n        {\n            "role": "system",\n            "content": "You are an AI assistant that writes poems in the style of William Shakespeare."\n        },\n        {\n            "role": "user",\n            "content": "Write a poem about indian elephants"\n        }\n    ]\n}\' \\\nhttps://YOUR_OPENAI_PROXY_ENDPOINT/api/v1/chat/completions\n')),(0,o.kt)("p",null,"or pretty print the JSON response with ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n-H "openai-event-code: hackathon/githubuser" \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "max_tokens": 256,\n    "temperature": 1,\n    "messages": [\n        {\n            "role": "system",\n            "content": "You are an AI assistant that writes poems in the style of William Shakespeare."\n        },\n        {\n            "role": "user",\n            "content": "Write a poem about indian elephants"\n        }\n    ]\n}\' \\\nhttps://YOUR_OPENAI_PROXY_ENDPOINT/api/v1/chat/completions | jq\n')),(0,o.kt)("h2",{id:"chat-completion-with-python-and-httpx"},"Chat completion with Python and httpx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nrequest = {\n    "max_tokens": 256,\n    "temperature": 1,\n    "messages": [\n        {\n            "role": "system",\n            "content": "You are an AI assistant that writes poems in the style of William Shakespeare."\n        },\n        {\n            "role": "user",\n            "content": "Write a poem about indian elephants"\n        }\n    ]\n}\n\nurl = "https://YOUR_OPENAI_PROXY_ENDPOINT/api/v1/chat/completions"\n\nheaders = {"openai-event-code": hackathon/githubuser}\n\nresponse = httpx.post(url=url, headers=headers, json=request, timeout=30)\n\nif response.status_code == 200:\n    print(response.json())\n')),(0,o.kt)("h2",{id:"the-python-openai-proxy-sdk"},"The Python OpenAI Proxy SDK"),(0,o.kt)("p",null,"The Python OpenAI Proxy SDK wraps the REST API calls to the proxy service. The wrapper is designed to be a drop in replacement for the official OpenAI Chat Completion Python API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\'\'\' Example of using the OpenAI Proxy Python SDK \'\'\'\n\nimport json\nimport openai.error\nimport openai_proxy\n\nopenai_proxy.api_key = "hackathon/githubuser"\nopenai_proxy.api_base = "https://YOUR_OPENAI_PROXY_ENDPOINT"\nopenai_proxy.api_version = "2023-07-01-preview"\nopenai_proxy.api_type = "azure"\n\npoem_messages = [\n    {\n        "role": "system",\n        "content": "You are an AI assistant that writes poems in the style of William Shakespeare.",\n    },\n    {"role": "user", "content": "Write a poem about indian elephants"},\n]\n\ntry:\n    response = openai_proxy.ChatCompletion.create(\n        messages=poem_messages,\n        max_tokens=256,\n        temperature=1.0,\n    )\n\n    print(json.dumps(response, indent=4, sort_keys=True))\n\nexcept openai.error.InvalidRequestError as invalid_request_error:\n    print(invalid_request_error)\n\nexcept openai.error.AuthenticationError as authentication_error:\n    print(authentication_error)\n\nexcept openai.error.PermissionError as permission_error:\n    print(permission_error)\n\nexcept openai.error.TryAgain as try_again:\n    print(try_again)\n\nexcept openai.error.RateLimitError as rate_limit_error:\n    print(rate_limit_error)\n\nexcept openai.error.APIError as api_error:\n    print(api_error)\n\nexcept Exception as exception:\n    print(exception)\n')),(0,o.kt)("p",null,"A complete working example can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/main/src/sdk/python"},"Python OpenAI Proxy SDK")," folder."))}u.isMDXComponent=!0}}]);
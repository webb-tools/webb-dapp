"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[3147],{"./libs/webb-ui-components/src/stories/templates/TransferConfirm.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_webb_dapp_webb_dapp_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__),react__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),_webb_tools_webb_ui_components_containers__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./libs/webb-ui-components/src/containers/index.ts"),storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_home_runner_work_webb_dapp_webb_dapp_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Templates/TransferConfirm",component:_webb_tools_webb_ui_components_containers__WEBPACK_IMPORTED_MODULE_13__.Zb,decorators:[storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_14__.E]};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_12__.createElement("div",{className:"flex justify-center"},react__WEBPACK_IMPORTED_MODULE_12__.createElement(_webb_tools_webb_ui_components_containers__WEBPACK_IMPORTED_MODULE_13__.Zb,args))};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"Transfer In-Progress",progress:25,activeChains:["Optimism","Arbitrum"],note:"webb://v2:vanchor/1099511627780:109951123431284u182p347130287412083741289341238412472389741382974",amount:1.01,changeAmount:2.02,fee:.001,fungibleTokenSymbol:"weth",sourceChain:"Optimism",relayerAddress:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",relayerExternalUrl:"https://webb.tools/relayer",recipientAddress:"0xb507EcE3132875277d05045Bb1C914088A506443",destChain:"Arbitrum"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div className="flex justify-center">\n    <TransferConfirm {...args} />\n  </div>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./node_modules/storybook-addon-react-router-v6/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>yt});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js"),_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-events"),h="storybook/react-router-v6",o={CLEAR:`${h}/clear`,NAVIGATION:`${h}/navigation`,STORY_LOADED:`${h}/story-loaded`,ROUTE_MATCHES:`${h}/route-matches`,ACTION_INVOKED:`${h}/action_invoked`,ACTION_SETTLED:`${h}/action_settled`,LOADER_INVOKED:`${h}/loader_invoked`,LOADER_SETTLED:`${h}/loader_settled`},A=react__WEBPACK_IMPORTED_MODULE_0__.createContext([]),O=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(A),M=()=>{let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),e=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.TH)(),t=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.UO)(),[a]=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.lr)(),n=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.ur)(),s=O(),p={};a.forEach(((u,i)=>{p[i]=u}));let m=(()=>{let r=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.TH)();return`${r.pathname}${r.search}${r.hash}`})(),d=s.map((u=>[u.route.path,u.params]));return u=>{switch(u){case o.STORY_LOADED:{let i={url:m,path:e.pathname,routeParams:t,searchParams:p,routeMatches:d,hash:e.hash,routeState:e.state};return{key:`${o.STORY_LOADED}_${r.current++}`,type:o.STORY_LOADED,data:i}}case o.NAVIGATION:{let i={url:m,path:e.pathname,routeParams:t,searchParams:p,hash:e.hash,routeState:e.state,routeMatches:d,navigationType:n};return{key:`${o.NAVIGATION}_${r.current++}`,type:o.NAVIGATION,data:i}}case o.ROUTE_MATCHES:return{key:`${o.ROUTE_MATCHES}_${r.current++}`,type:o.ROUTE_MATCHES,data:{matches:d}}}}};async function N(r){let a,e=r.clone(),t=e.headers.get("content-type")||"";switch(!0){case t.startsWith("text"):a=await e.text();break;case t.startsWith("application/json"):a=await e.json();break;case t.startsWith("multipart/form-data"):case t.startsWith("application/x-www-form-urlencoded"):a=function Z(r){let e={};return r.forEach(((t,a)=>{t instanceof File?e[a]={filename:t.name,filesize:t.size,filetype:t.type}:e[a]=t})),e}(await e.formData());break;default:await e.arrayBuffer().then((s=>s.byteLength))}return a}var V=({children:r})=>{let e=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel(),t=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.TH)(),[a,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[s,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[m,d]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),u=M(),i=O(),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function F(){let r={};return r.promise=new Promise(((e,t)=>{r.resolve=e,r.reject=t})),r}());return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{n(t)})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{s&&E.current.resolve()}),[s]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{d(i);let l=setTimeout((()=>{s||(p(!0),e.emit(o.STORY_LOADED,u(o.STORY_LOADED)))}),0);return()=>clearTimeout(l)}),[s,i]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0!==a&&a.key!==t.key&&E.current.promise.then((()=>{e.emit(o.NAVIGATION,u(o.NAVIGATION))}))}),[t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{s&&i.length>m.length&&(d(i),e.emit(o.ROUTE_MATCHES,u(o.ROUTE_MATCHES)))}),[i]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r)},U=({children:r,routePath:e,routeParams:t,searchParams:a,routeState:n,browserPath:s,hydrationData:p})=>{let m=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel(),[d,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[i,E]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return m.on(_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__.STORY_ARGS_UPDATED,(()=>{E((f=>f+1))})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{let f=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Gn)(e||"",t),R=new URLSearchParams(a).toString(),c={search:R.length>0?`?${R}`:"",state:n};void 0!==s&&(c.pathname=s),void 0===s&&""!==f&&(c.pathname=f),void 0!==l.current&&Object.assign(c,l.current);let D=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.i7)(r),T=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.bi)(D,{initialEntries:[c],hydrationData:p});T.subscribe((g=>{l.current=g.location})),u(T)}),[i]),void 0===d?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.pG,{router:d,fallbackElement:react__WEBPACK_IMPORTED_MODULE_0__.createElement(pt,null)})};function pt(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Performing initial data load")}var C=()=>async(r,e)=>{switch(r){case o.ACTION_INVOKED:{let{request:t,params:a,context:n}=e,s={url:t.url,method:t.method,body:await N(t)};return{type:o.ACTION_INVOKED,data:{params:a,request:s,context:n}}}case o.ACTION_SETTLED:return{type:o.ACTION_SETTLED,data:e};case o.LOADER_INVOKED:{let{request:t,params:a,context:n}=e,s={url:t.url,method:t.method,body:N(t)};return{type:o.LOADER_INVOKED,data:{params:a,request:s,context:n}}}case o.LOADER_SETTLED:return{type:o.LOADER_SETTLED,data:e}}},q=({children:r,browserPath:e,routePath:t="*",routeParams:a,routeHandle:n,searchParams:s,routeState:p,outlet:m,hydrationData:d,action:u,loader:i,errorElement:E,shouldRevalidate:l})=>{let f=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel(),[R,x]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);react_router_dom__WEBPACK_IMPORTED_MODULE_3__.pW.Provider._context=new Proxy(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.pW.Provider._context??{},{set:(T,g,S)=>("_currentValue"===g&&x((w=>void 0!==S&&S.matches.length>w.length?S.matches:w)),Reflect.set(T,g,S))});let c=function ht(r){return null!==r&&"object"==typeof r&&Object.prototype.hasOwnProperty.call(r,"element")}(m)?m:{element:m},D={element:c.element,handle:c.handle,errorElement:c.errorElement,action:void 0!==c.action?j(f,c.action):void 0,loader:void 0!==c.loader?K(f,c.loader):void 0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(A.Provider,{value:R},react__WEBPACK_IMPORTED_MODULE_0__.createElement(U,{routePath:t,routeParams:a,routeState:p,searchParams:s,browserPath:e,hydrationData:d},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:t,handle:n,action:void 0!==u?j(f,u):void 0,loader:void 0!==i?K(f,i):void 0,shouldRevalidate:l,errorElement:E,element:react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,null,r)},void 0!==c.element&&void 0===c.path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{index:!0,...D}),void 0!==c.element&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:c.path,...D}))))};function j(r,e){let t=C();return async function(a){if(void 0===e)return;r.emit(o.ACTION_INVOKED,await t(o.ACTION_INVOKED,a));let n=await e(a);return r.emit(o.ACTION_SETTLED,await t(o.ACTION_SETTLED,n)),n}}function K(r,e){let t=C();return async function(a){if(void 0===e)return;r.emit(o.LOADER_INVOKED,await t(o.LOADER_INVOKED,a));let n=await e(a);return r.emit(o.LOADER_SETTLED,await t(o.LOADER_SETTLED,n)),n}}var yt=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(r,e,{parameters:t={}})=>{let{routePath:a="*",routeParams:n,routeState:s,routeHandle:p,searchParams:m,outlet:d,browserPath:u,loader:i,action:E,errorElement:l,hydrationData:f,shouldRevalidate:R}=t;if("string"!=typeof a)throw new Error("React Router decorator : `path` must be a string");if(void 0!==n&&"object"!=typeof n)throw new Error("React Router decorator : `params` must be an object with strings as values");if(void 0!==m&&"object"!=typeof m)throw new Error("React Router decorator : `search` must be an object with strings as values");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(q,{browserPath:u,routePath:a,routeParams:n,searchParams:m,routeState:s,routeHandle:p,outlet:d,loader:i,action:E,errorElement:l,hydrationData:f,shouldRevalidate:R},r(e))}})}}]);
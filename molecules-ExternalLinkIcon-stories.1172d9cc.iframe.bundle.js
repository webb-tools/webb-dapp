"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[7841],{"./libs/webb-ui-components/src/stories/molecules/ExternalLinkIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ExtraLarge:()=>ExtraLarge,Large:()=>Large,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Large_parameters,_Large_parameters_docs,_Large_parameters1,_ExtraLarge_parameters,_ExtraLarge_parameters_docs,_ExtraLarge_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/webb-ui-components/src/components/ExternalLinkIcon/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/webb-ui-components/src/constants/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/ExternalLinkIcon",component:_components_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_1__.A};var Default={render:function render(){return __jsx(_components_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_1__.A,{href:_constants__WEBPACK_IMPORTED_MODULE_2__.re})}},Large={render:function render(){return __jsx(_components_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_1__.A,{href:_constants__WEBPACK_IMPORTED_MODULE_2__.re,size:"lg"})}},ExtraLarge={render:function render(){return __jsx(_components_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_1__.A,{href:_constants__WEBPACK_IMPORTED_MODULE_2__.re,size:"xl"})}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  render: () => <ExternalLinkIcon href={TANGLE_MKT_URL} />\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Large.parameters={...Large.parameters,docs:{...null===(_Large_parameters=Large.parameters)||void 0===_Large_parameters?void 0:_Large_parameters.docs,source:{originalSource:'{\n  render: () => <ExternalLinkIcon href={TANGLE_MKT_URL} size="lg" />\n}',...null===(_Large_parameters1=Large.parameters)||void 0===_Large_parameters1||null===(_Large_parameters_docs=_Large_parameters1.docs)||void 0===_Large_parameters_docs?void 0:_Large_parameters_docs.source}}},ExtraLarge.parameters={...ExtraLarge.parameters,docs:{...null===(_ExtraLarge_parameters=ExtraLarge.parameters)||void 0===_ExtraLarge_parameters?void 0:_ExtraLarge_parameters.docs,source:{originalSource:'{\n  render: () => <ExternalLinkIcon href={TANGLE_MKT_URL} size="xl" />\n}',...null===(_ExtraLarge_parameters1=ExtraLarge.parameters)||void 0===_ExtraLarge_parameters1||null===(_ExtraLarge_parameters_docs=_ExtraLarge_parameters1.docs)||void 0===_ExtraLarge_parameters_docs?void 0:_ExtraLarge_parameters_docs.source}}};const __namedExportsOrder=["Default","Large","ExtraLarge"]},"./libs/dapp-config/src/constants/tangle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getPolkadotJsDashboardUrl(wsRpcEndpoint){return"https://polkadot.js.org/apps/?rpc=".concat(wsRpcEndpoint,"#/explorer")}__webpack_require__.d(__webpack_exports__,{Hp:()=>TANGLE_LOCAL_HTTP_RPC_ENDPOINT,fI:()=>TANGLE_LOCAL_WS_RPC_ENDPOINT,WA:()=>TANGLE_MAINNET_EVM_EXPLORER_URL,gC:()=>TANGLE_MAINNET_HTTP_RPC_ENDPOINT,vw:()=>TANGLE_MAINNET_NATIVE_EXPLORER_URL,us:()=>TANGLE_MAINNET_NATIVE_TOKEN_SYMBOL,Wo:()=>TANGLE_MAINNET_WS_RPC_ENDPOINT,fd:()=>TANGLE_TESTNET_EVM_EXPLORER_URL,HN:()=>TANGLE_TESTNET_HTTP_RPC_ENDPOINT,Y5:()=>TANGLE_TESTNET_NATIVE_EXPLORER_URL,fK:()=>TANGLE_TESTNET_NATIVE_TOKEN_SYMBOL,xF:()=>TANGLE_TESTNET_WS_RPC_ENDPOINT,Tr:()=>TANGLE_TOKEN_DECIMALS});var TANGLE_MAINNET_WS_RPC_ENDPOINT="wss://rpc.tangle.tools",TANGLE_MAINNET_HTTP_RPC_ENDPOINT="https://rpc.tangle.tools",TANGLE_MAINNET_NATIVE_EXPLORER_URL=(getPolkadotJsDashboardUrl(TANGLE_MAINNET_WS_RPC_ENDPOINT),"https://tangle.statescan.io/"),TANGLE_MAINNET_EVM_EXPLORER_URL="https://explorer.tangle.tools/",TANGLE_MAINNET_NATIVE_TOKEN_SYMBOL="TNT",TANGLE_TESTNET_WS_RPC_ENDPOINT="wss://testnet-rpc.tangle.tools",TANGLE_TESTNET_HTTP_RPC_ENDPOINT="https://testnet-rpc.tangle.tools",TANGLE_TESTNET_NATIVE_EXPLORER_URL=(getPolkadotJsDashboardUrl(TANGLE_TESTNET_WS_RPC_ENDPOINT),"https://testnet-explorer.tangle.tools/"),TANGLE_TESTNET_EVM_EXPLORER_URL="https://testnet-explorer.tangle.tools",TANGLE_TESTNET_NATIVE_TOKEN_SYMBOL="tTNT",TANGLE_LOCAL_WS_RPC_ENDPOINT="ws://127.0.0.1:9944",TANGLE_LOCAL_HTTP_RPC_ENDPOINT="http://127.0.0.1:9944",TANGLE_TOKEN_DECIMALS=(getPolkadotJsDashboardUrl(TANGLE_LOCAL_WS_RPC_ENDPOINT),18)},"./libs/webb-ui-components/src/components/ExternalLinkIcon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ExternalLinkIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),src=__webpack_require__("./libs/icons/src/index.ts"),__jsx=react.createElement,ExternalLinkIcon=function ExternalLinkIcon(_ref){var href=_ref.href,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,className=_ref.className;return __jsx("a",{href,target:"_blank",rel:"noopener noreferrer"},__jsx(src.kX,{size,className}))};const ExternalLinkIcon_ExternalLinkIcon=ExternalLinkIcon;ExternalLinkIcon.__docgenInfo={description:"",methods:[],displayName:"ExternalLinkIcon",props:{href:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"IconSize"},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const components_ExternalLinkIcon=ExternalLinkIcon_ExternalLinkIcon},"./libs/webb-ui-components/src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$i:()=>SOCIAL_URLS_RECORD,Bp:()=>DKG_STATS_URL,Ck:()=>TANGLE_TERMS_OF_SERVICE_URL,Gs:()=>SIDEBAR_OPEN_KEY,KL:()=>BRIDGE_URL,M$:()=>TANGLE_WHITEPAPER_URL,NZ:()=>WEBB_CAREERS_URL,SY:()=>footerNavs,VD:()=>TANGLE_PRESS_KIT_URL,Yk:()=>TANGLE_PRIVACY_POLICY_URL,ZH:()=>bottomLinks,a4:()=>WEBB_MKT_URL,bo:()=>WEBB_DOCS_URL,gc:()=>WEBB_AVAILABLE_SOCIALS,gk:()=>TANGLE_DOCS_URL,hS:()=>SOCIAL_ICONS_RECORD,kY:()=>TANGLE_GITHUB_URL,kZ:()=>logoConfig,m2:()=>TANGLE_TWITTER_URL,re:()=>TANGLE_MKT_URL,rg:()=>tangleLogoConfig,s7:()=>defaultSocialConfigs});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.push.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/web.url.to-json.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.delete.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.has.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.size.js");var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__),_webb_tools_dapp_config_constants_tangle__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./libs/dapp-config/src/constants/tangle.ts"),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./libs/icons/src/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var commonExternalProps={target:"_blank"},logoConfig={name:"Logo",path:"/"},BRIDGE_URL="https://app.webb.tools",DKG_STATS_URL="https://stats.tangle.tools",WEBB_MKT_URL="https://webb.tools",TANGLE_MKT_URL="https://tangle.tools",TANGLE_PRESS_KIT_URL="https://www.tangle.tools/press-kit",TANGLE_DOCS_URL="https://docs.tangle.tools/",TANGLE_GITHUB_URL="https://github.com/webb-tools/tangle",WEBB_DOCS_URL="https://docs.webb.tools/",TANGLE_WHITEPAPER_URL="https://github.com/webb-tools/tangle/blob/main/Tangle_Network_Whitepaper_March282024.pdf",WEBB_CAREERS_URL="https://wellfound.com/company/webb-4/jobs",TANGLE_TWITTER_URL="https://twitter.com/tangle_network",TANGLE_PRIVACY_POLICY_URL=("".concat(DKG_STATS_URL,"/#/keys"),"".concat(DKG_STATS_URL,"/#/authorities"),"".concat(DKG_STATS_URL,"/#/proposals"),new URL("/privacy-policy",TANGLE_MKT_URL).toString()),TANGLE_TERMS_OF_SERVICE_URL=new URL("/terms-of-service",TANGLE_MKT_URL).toString(),WEBB_AVAILABLE_SOCIALS=["telegram","discord","commonwealth","linkedin","twitter","github","youTube","community"],SOCIAL_URLS_RECORD={telegram:"https://t.me/webbprotocol",discord:"https://discord.com/invite/cv8EfJu3Tn",commonwealth:"https://commonwealth.im/webb",linkedin:"https://www.linkedin.com/company/webb-protocol",twitter:"https://twitter.com/webbprotocol",github:"https://github.com/webb-tools",youTube:"https://www.youtube.com/channel/UCDro1mNK9yHGQNDvFuucwVw",community:"https://www.tangle.tools/community"},SOCIAL_ICONS_RECORD={telegram:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.x3,discord:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.ci,commonwealth:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.zg,linkedin:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.wc,twitter:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.xq,github:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.P2,youTube:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.zW,community:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.pD},tangleLogoConfig={name:"Tangle Logo",path:TANGLE_MKT_URL},footerNavs=(_objectSpread({name:"Hubble Bridge",href:BRIDGE_URL},commonExternalProps),{dapp:[_objectSpread({name:"bridge",href:BRIDGE_URL},commonExternalProps)],network:[_objectSpread({name:"Tangle EVM Explorer",href:_webb_tools_dapp_config_constants_tangle__WEBPACK_IMPORTED_MODULE_11__.WA},commonExternalProps),_objectSpread({name:"Tangle Native explorer",href:_webb_tools_dapp_config_constants_tangle__WEBPACK_IMPORTED_MODULE_11__.vw},commonExternalProps)],developer:[_objectSpread({name:"documentation",href:WEBB_DOCS_URL},commonExternalProps),_objectSpread({name:"source code",href:SOCIAL_URLS_RECORD.github},commonExternalProps)],resources:[_objectSpread({name:"community",href:new URL("/docs/community",WEBB_DOCS_URL).toString()},commonExternalProps)],company:[_objectSpread({name:"about us",href:WEBB_MKT_URL},commonExternalProps),_objectSpread({name:"jobs",href:WEBB_CAREERS_URL},commonExternalProps)]}),bottomLinks=[_objectSpread({name:"Terms of Service",href:"https://webb.tools/terms-and-conditions"},commonExternalProps),_objectSpread({name:"Privacy Policy",href:"https://webb.tools/privacy-policy"},commonExternalProps)],defaultSocialConfigs=WEBB_AVAILABLE_SOCIALS.map((function(name){return{name,href:SOCIAL_URLS_RECORD[name],Icon:SOCIAL_ICONS_RECORD[name],target:"_blank",rel:"noopener noreferrer"}})),SIDEBAR_OPEN_KEY="isSidebarOpen"},"./node_modules/core-js/internals/regexp-get-flags.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),isPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js"),regExpFlags=__webpack_require__("./node_modules/core-js/internals/regexp-flags.js"),RegExpPrototype=RegExp.prototype;module.exports=function(R){var flags=R.flags;return void 0!==flags||"flags"in RegExpPrototype||hasOwn(R,"flags")||!isPrototypeOf(RegExpPrototype,R)?flags:call(regExpFlags,R)}},"./node_modules/core-js/modules/es.regexp.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var PROPER_FUNCTION_NAME=__webpack_require__("./node_modules/core-js/internals/function-name.js").PROPER,defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),$toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),getRegExpFlags=__webpack_require__("./node_modules/core-js/internals/regexp-get-flags.js"),RegExpPrototype=RegExp.prototype,nativeToString=RegExpPrototype.toString,NOT_GENERIC=fails((function(){return"/a/b"!==nativeToString.call({source:"a",flags:"b"})})),INCORRECT_NAME=PROPER_FUNCTION_NAME&&"toString"!==nativeToString.name;(NOT_GENERIC||INCORRECT_NAME)&&defineBuiltIn(RegExpPrototype,"toString",(function toString(){var R=anObject(this);return"/"+$toString(R.source)+"/"+$toString(getRegExpFlags(R))}),{unsafe:!0})}}]);
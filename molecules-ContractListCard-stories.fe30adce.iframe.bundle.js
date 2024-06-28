(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[1523],{"./libs/webb-ui-components/src/stories/molecules/ContractListCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Loading_parameters,_Loading_parameters_docs,_Loading_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ListCard_ContractListCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/webb-ui-components/src/components/ListCard/ContractListCard.tsx"),_ngneat_falso__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ngneat/falso/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/ContractListCard",component:_components_ListCard_ContractListCard__WEBPACK_IMPORTED_MODULE_1__.A};var Default={render:function render(){return __jsx(_components_ListCard_ContractListCard__WEBPACK_IMPORTED_MODULE_1__.A,{selectContractItems:[{name:"Webb Ethereum",address:(0,_ngneat_falso__WEBPACK_IMPORTED_MODULE_2__.zV4)(),blockExplorerUrl:"https://etherscan.io"},{name:"Webb Tangle",address:(0,_ngneat_falso__WEBPACK_IMPORTED_MODULE_2__.zV4)(),blockExplorerUrl:"https://etherscan.io"}]})}},Loading={render:function render(){return __jsx(_components_ListCard_ContractListCard__WEBPACK_IMPORTED_MODULE_1__.A,{selectContractItems:[],isLoading:!0})}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  render: () => <ContractListCard selectContractItems={[{\n    name: 'Webb Ethereum',\n    address: randEthereumAddress(),\n    blockExplorerUrl: 'https://etherscan.io'\n  }, {\n    name: 'Webb Tangle',\n    address: randEthereumAddress(),\n    blockExplorerUrl: 'https://etherscan.io'\n  }]} />\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Loading.parameters={...Loading.parameters,docs:{...null===(_Loading_parameters=Loading.parameters)||void 0===_Loading_parameters?void 0:_Loading_parameters.docs,source:{originalSource:"{\n  render: () => <ContractListCard selectContractItems={[]} isLoading />\n}",...null===(_Loading_parameters1=Loading.parameters)||void 0===_Loading_parameters1||null===(_Loading_parameters_docs=_Loading_parameters1.docs)||void 0===_Loading_parameters_docs?void 0:_Loading_parameters_docs.source}}};const __namedExportsOrder=["Default","Loading"]},"./libs/dapp-config/src/constants/tangle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HN:()=>TANGLE_TESTNET_HTTP_RPC_ENDPOINT,Hp:()=>TANGLE_LOCAL_HTTP_RPC_ENDPOINT,Tr:()=>TANGLE_TOKEN_DECIMALS,WA:()=>TANGLE_MAINNET_EVM_EXPLORER_URL,Wo:()=>TANGLE_MAINNET_WS_RPC_ENDPOINT,Y5:()=>TANGLE_TESTNET_NATIVE_EXPLORER_URL,fI:()=>TANGLE_LOCAL_WS_RPC_ENDPOINT,fK:()=>TANGLE_TESTNET_NATIVE_TOKEN_SYMBOL,fd:()=>TANGLE_TESTNET_EVM_EXPLORER_URL,gC:()=>TANGLE_MAINNET_HTTP_RPC_ENDPOINT,us:()=>TANGLE_MAINNET_NATIVE_TOKEN_SYMBOL,vw:()=>TANGLE_MAINNET_NATIVE_EXPLORER_URL,xF:()=>TANGLE_TESTNET_WS_RPC_ENDPOINT});var TANGLE_MAINNET_WS_RPC_ENDPOINT="wss://rpc.tangle.tools",TANGLE_MAINNET_HTTP_RPC_ENDPOINT="https://rpc.tangle.tools",TANGLE_MAINNET_NATIVE_EXPLORER_URL="https://tangle.statescan.io/",TANGLE_MAINNET_EVM_EXPLORER_URL="https://explorer.tangle.tools/",TANGLE_MAINNET_NATIVE_TOKEN_SYMBOL="TNT",TANGLE_TESTNET_WS_RPC_ENDPOINT="wss://testnet-rpc.tangle.tools",TANGLE_TESTNET_HTTP_RPC_ENDPOINT="https://testnet-rpc.tangle.tools",TANGLE_TESTNET_NATIVE_EXPLORER_URL="https://polkadot.js.org/apps/?rpc=".concat(TANGLE_TESTNET_WS_RPC_ENDPOINT,"#/explorer"),TANGLE_TESTNET_EVM_EXPLORER_URL="https://testnet-explorer.tangle.tools",TANGLE_TESTNET_NATIVE_TOKEN_SYMBOL="tTNT",TANGLE_LOCAL_WS_RPC_ENDPOINT="ws://127.0.0.1:9944",TANGLE_LOCAL_HTTP_RPC_ENDPOINT="http://127.0.0.1:9944",TANGLE_TOKEN_DECIMALS=("https://polkadot.js.org/apps/?rpc=".concat(TANGLE_LOCAL_WS_RPC_ENDPOINT,"#/explorer"),18)},"./libs/webb-ui-components/src/components/ListCard/ContractListCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_3__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/icons/src/index.ts"),_ScrollArea__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./libs/webb-ui-components/src/components/ScrollArea/index.ts"),_typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./libs/webb-ui-components/src/components/SkeletonLoader/index.ts"),_Input__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./libs/webb-ui-components/src/components/Input/index.ts"),_ListItem__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./libs/webb-ui-components/src/components/ListCard/ListItem.tsx"),_ListCardWrapper__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./libs/webb-ui-components/src/components/ListCard/ListCardWrapper.tsx"),viem__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/viem/_esm/utils/data/isHex.js"),_utils__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./libs/webb-ui-components/src/utils/index.ts"),_excluded=["isLoading","selectContractItems"],__jsx=react__WEBPACK_IMPORTED_MODULE_5__.createElement,ContractListCard=(0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)((function(_ref,ref){var isLoading=_ref.isLoading,selectContractItems=_ref.selectContractItems,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4___default()(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),searchText=_useState[0],setSearchText=_useState[1],filterList=(0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)((function(){return selectContractItems.filter((function(item){var _item$blockExplorerUr;return item.name.toLowerCase().includes(searchText.toLowerCase())||item.address.toLowerCase().includes(searchText.toLowerCase())||(null===(_item$blockExplorerUr=item.blockExplorerUrl)||void 0===_item$blockExplorerUr?void 0:_item$blockExplorerUr.toLowerCase().includes(searchText.toLowerCase()))}))}),[selectContractItems,searchText]);return __jsx(_ListCardWrapper__WEBPACK_IMPORTED_MODULE_12__.C,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_3___default()({title:"Select Contract",hideCloseButton:!0},props,{ref}),__jsx("div",{className:"py-4"},__jsx(_Input__WEBPACK_IMPORTED_MODULE_10__.p,{id:"contract",rightIcon:__jsx(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_6__.vj,null),placeholder:"Search contracts",value:searchText,onChange:function onChange(val){return setSearchText(val.toString())},isDisabled:isLoading||0===selectContractItems.length})),__jsx(_ScrollArea__WEBPACK_IMPORTED_MODULE_7__.F,{className:"lg:min-w-[350px] h-[376px]"},isLoading&&__jsx("div",{className:"space-y-2"},__jsx(_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__.A,{size:"xl"}),__jsx(_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__.A,{size:"xl"})),!isLoading&&__jsx("ul",{className:"py-2"},filterList.map((function(item,idx){var name=item.name,address=item.address,blockExplorerUrl=item.blockExplorerUrl,onSelectContract=item.onSelectContract;return __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_11__.c,{key:idx,className:"flex justify-between",onClick:function onClick(){onSelectContract&&onSelectContract()}},__jsx("div",null,__jsx(_typography__WEBPACK_IMPORTED_MODULE_8__.o,{component:"span",variant:"h5",fw:"bold",className:"block cursor-default"},name),__jsx(_typography__WEBPACK_IMPORTED_MODULE_8__.o,{component:"span",variant:"body1",fw:"bold",className:"cursor-default text-mono-100 dark:text-mono-80"},(0,viem__WEBPACK_IMPORTED_MODULE_14__.q)(address)?(0,_utils__WEBPACK_IMPORTED_MODULE_13__.f2)(address):(0,_utils__WEBPACK_IMPORTED_MODULE_13__.l1)(address))),"string"==typeof blockExplorerUrl&&__jsx("a",{href:blockExplorerUrl,target:"_blank",rel:"noreferrer noopener",className:"!text-inherit",onClick:function onClick(event){return event.stopPropagation()}},__jsx(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_6__.kX,{className:"inline-block !fill-current"})))})))))}));const __WEBPACK_DEFAULT_EXPORT__=ContractListCard;ContractListCard.__docgenInfo={description:"",methods:[],displayName:"ContractListCard"}},"./libs/webb-ui-components/src/components/SkeletonLoader/SkeletonLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>SkeletonLoader_SkeletonLoader});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");__webpack_require__("./node_modules/core-js/modules/es.error.cause.js");var __jsx=react.createElement,SkeletonLoader=function SkeletonLoader(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,className=_ref.className,classNames=(0,bundle_mjs.QP)("animate-pulse bg-slate-200 dark:bg-mono-160 w-full rounded-md",function getSkeletonClassNamesBySize(size){switch(size){case"xl":return"h-12";case"lg":return"h-6";case"md":return"h-4";default:throw new Error("Unknown skeleton size")}}(size),className);return __jsx("div",{className:classNames})};const SkeletonLoader_SkeletonLoader=SkeletonLoader;SkeletonLoader.__docgenInfo={description:"",methods:[],displayName:"SkeletonLoader",props:{size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:'The icon size, possible values: `md` (16px), `lg` (24px), `xl` (48px)\n@default "md"',defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The optional class name for overriding the style of the skeleton"}}}},"./libs/webb-ui-components/src/components/SkeletonLoader/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./libs/webb-ui-components/src/components/SkeletonLoader/SkeletonLoader.tsx").A},"./libs/webb-ui-components/src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$i:()=>SOCIAL_URLS_RECORD,Bp:()=>DKG_STATS_URL,Ck:()=>TANGLE_TERMS_OF_SERVICE_URL,Gs:()=>SIDEBAR_OPEN_KEY,KL:()=>BRIDGE_URL,M$:()=>TANGLE_WHITEPAPER_URL,NZ:()=>WEBB_CAREERS_URL,SY:()=>footerNavs,VD:()=>TANGLE_PRESS_KIT_URL,Yk:()=>TANGLE_PRIVACY_POLICY_URL,ZH:()=>bottomLinks,a4:()=>WEBB_MKT_URL,bo:()=>WEBB_DOCS_URL,gc:()=>WEBB_AVAILABLE_SOCIALS,gk:()=>TANGLE_DOCS_URL,hS:()=>SOCIAL_ICONS_RECORD,kY:()=>TANGLE_GITHUB_URL,kZ:()=>logoConfig,m2:()=>TANGLE_TWITTER_URL,re:()=>TANGLE_MKT_URL,rg:()=>tangleLogoConfig,s7:()=>defaultSocialConfigs});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.push.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/web.url.to-json.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.delete.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.has.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.size.js");var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__),_webb_tools_dapp_config_constants_tangle__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./libs/dapp-config/src/constants/tangle.ts"),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./libs/icons/src/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var commonExternalProps={target:"_blank"},logoConfig={name:"Logo",path:"/"},BRIDGE_URL="https://app.webb.tools",DKG_STATS_URL="https://stats.tangle.tools",WEBB_MKT_URL="https://webb.tools",TANGLE_MKT_URL="https://tangle.tools",TANGLE_PRESS_KIT_URL="https://www.tangle.tools/press-kit",TANGLE_DOCS_URL="https://docs.tangle.tools/",TANGLE_GITHUB_URL="https://github.com/webb-tools/tangle",WEBB_DOCS_URL="https://docs.webb.tools/",TANGLE_WHITEPAPER_URL="https://github.com/webb-tools/tangle/blob/main/Tangle_Network_Whitepaper_March282024.pdf",WEBB_CAREERS_URL="https://wellfound.com/company/webb-4/jobs",TANGLE_TWITTER_URL="https://twitter.com/tangle_network",TANGLE_PRIVACY_POLICY_URL=("".concat(DKG_STATS_URL,"/#/keys"),"".concat(DKG_STATS_URL,"/#/authorities"),"".concat(DKG_STATS_URL,"/#/proposals"),new URL("/privacy-policy",TANGLE_MKT_URL).toString()),TANGLE_TERMS_OF_SERVICE_URL=new URL("/terms-of-service",TANGLE_MKT_URL).toString(),WEBB_AVAILABLE_SOCIALS=["telegram","discord","commonwealth","linkedin","twitter","github","youTube","community"],SOCIAL_URLS_RECORD={telegram:"https://t.me/webbprotocol",discord:"https://discord.com/invite/cv8EfJu3Tn",commonwealth:"https://commonwealth.im/webb",linkedin:"https://www.linkedin.com/company/webb-protocol",twitter:"https://twitter.com/webbprotocol",github:"https://github.com/webb-tools",youTube:"https://www.youtube.com/channel/UCDro1mNK9yHGQNDvFuucwVw",community:"https://www.tangle.tools/community"},SOCIAL_ICONS_RECORD={telegram:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.x3,discord:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.ci,commonwealth:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.zg,linkedin:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.wc,twitter:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.xq,github:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.P2,youTube:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.zW,community:_webb_tools_icons__WEBPACK_IMPORTED_MODULE_12__.pD},tangleLogoConfig={name:"Tangle Logo",path:TANGLE_MKT_URL},footerNavs=(_objectSpread({name:"Hubble Bridge",href:BRIDGE_URL},commonExternalProps),{dapp:[_objectSpread({name:"bridge",href:BRIDGE_URL},commonExternalProps)],network:[_objectSpread({name:"Tangle EVM Explorer",href:_webb_tools_dapp_config_constants_tangle__WEBPACK_IMPORTED_MODULE_11__.WA},commonExternalProps),_objectSpread({name:"Tangle Native explorer",href:_webb_tools_dapp_config_constants_tangle__WEBPACK_IMPORTED_MODULE_11__.vw},commonExternalProps)],developer:[_objectSpread({name:"documentation",href:WEBB_DOCS_URL},commonExternalProps),_objectSpread({name:"source code",href:SOCIAL_URLS_RECORD.github},commonExternalProps)],resources:[_objectSpread({name:"community",href:new URL("/docs/community",WEBB_DOCS_URL).toString()},commonExternalProps)],company:[_objectSpread({name:"about us",href:WEBB_MKT_URL},commonExternalProps),_objectSpread({name:"jobs",href:WEBB_CAREERS_URL},commonExternalProps)]}),bottomLinks=[_objectSpread({name:"Terms of Service",href:"https://webb.tools/terms-and-conditions"},commonExternalProps),_objectSpread({name:"Privacy Policy",href:"https://webb.tools/privacy-policy"},commonExternalProps)],defaultSocialConfigs=WEBB_AVAILABLE_SOCIALS.map((function(name){return{name,href:SOCIAL_URLS_RECORD[name],Icon:SOCIAL_ICONS_RECORD[name],target:"_blank",rel:"noopener noreferrer"}})),SIDEBAR_OPEN_KEY="isSidebarOpen"},"./libs/webb-ui-components/src/typography/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>Typography});__webpack_require__("./node_modules/core-js/modules/es.array.push.js");var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/webb-ui-components/src/typography/utils/index.ts"),_excluded=["children","className","component","fw","ta","variant"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var defaultComponent={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",body1:"p",body2:"p",body3:"p",body4:"p",mono1:"span",mono2:"span",para1:"p",para2:"p",label:"span",utility:"span","mkt-h1":"h1","mkt-h2":"h2","mkt-h3":"h3","mkt-h4":"h4","mkt-subheading":"p","mkt-body1":"p","mkt-body2":"p","mkt-small-caps":"p","mkt-caption":"p","mkt-monospace":"p"},Typography=function Typography(props){var children=props.children,className=props.className,component=props.component,_props$fw=props.fw,fw=void 0===_props$fw?"normal":_props$fw,_props$ta=props.ta,ta=void 0===_props$ta?"left":_props$ta,variant=props.variant,restProps=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(props,_excluded),_component=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){return null!=component?component:defaultComponent[variant]}),[component,variant]),_className=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("".concat(variant),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.sN)(ta),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.NC)(variant,fw),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Qe)(variant),className)}),[className,fw,ta,variant]);return(0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(_component,_objectSpread(_objectSpread({},restProps),{},{className:_className}),children)};Typography.__docgenInfo={description:'The Webb Typography component\n\nProps:\n- `variant`: Represent different variants of the component\n- `component`: The html tag (default: same as `variant` prop)\n- `fw`: Represent the **font weight** of the component (default: `normal`)\n- `ta`: Text align (default: `left`)\n- `darkMode`: Control component dark mode display in `js`, leave it\'s empty if you want to control dark mode in `css`\n\n@example\n\n```jsx\n<Typography variant="h1" fw="semibold" ta="center">This is heading 1</Typography>\n<Typography variant="h2" component="h3">This is heading 3 with variant h2</Typography>\n```',methods:[],displayName:"Typography",props:{className:{required:!1,tsType:{name:"string"},description:"The tailwindcss className to override the style"},darkMode:{required:!1,tsType:{name:"boolean"},description:"Control dark mode using `js`, if it's empty, the component will control dark mode in `css`"},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},variant:{required:!0,tsType:{name:"TypoVariant"},description:"Represent different variants of the component"},component:{required:!1,tsType:{name:"ReactHTML"},description:"The html tag"},fw:{required:!1,tsType:{name:"union",raw:"| 'normal'\n| 'medium'\n| 'semibold'\n| 'bold'\n| 'black'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'black'"}]},description:"Font weight"},ta:{required:!1,tsType:{name:"union",raw:"'center' | 'justify' | 'right' | 'left'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"},{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:"Text align"}}}},"./libs/webb-ui-components/src/typography/Typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>_Typography__WEBPACK_IMPORTED_MODULE_0__.o});var _Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/typography/Typography/Typography.tsx")},"./libs/webb-ui-components/src/typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>_Typography__WEBPACK_IMPORTED_MODULE_0__.o});var _Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/typography/Typography/index.ts")},"./libs/webb-ui-components/src/typography/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NC:()=>getFontWeightClassName,Qe:()=>getDefaultTextColor,sN:()=>getTextAlignClassName});__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js");function getTextAlignClassName(textAlign){switch(textAlign){case"center":return"text-center";case"justify":return"text-justify";case"left":default:return"text-left";case"right":return"text-right"}}function getFontWeightClassName(variant,fontWeight){if(function isMonospaceVariant(variant){return-1!==["mono1","mono2","mkt-monospace"].indexOf(variant)}(variant)&&"semibold"===fontWeight)return"font-bold";if("label"===variant||"utility"===variant)return"";switch(fontWeight){case"normal":default:return"font-normal";case"medium":return"font-medium";case"semibold":return"font-semibold";case"bold":return"font-bold";case"black":return"font-black"}}function getDefaultTextColor(variant){return variant.startsWith("h")?"text-mono-200 dark:text-mono-00":"text-mono-160 dark:text-mono-80"}},"./libs/webb-ui-components/src/utils/getCookieItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js");const __WEBPACK_DEFAULT_EXPORT__=function getCookieItem(itemKey){var _document$cookie$spli;return null===(_document$cookie$spli=document.cookie.split("; ").find((function(row){return row.startsWith("".concat(itemKey,"="))})))||void 0===_document$cookie$spli?void 0:_document$cookie$spli.split("=")[1]}},"./libs/webb-ui-components/src/utils/getRoundedAmountString.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>getRoundedAmountString});__webpack_require__("./node_modules/core-js/modules/es.array.push.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js");var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__),numbro__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/numbro/dist/es/numbro.js"),_excluded=["roundingFunction","defaultPlaceholder"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function getRoundedAmountString(num){var digits=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,formatOption=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},_formatOption$roundin=formatOption.roundingFunction,roundingFunction=void 0===_formatOption$roundin?Math.floor:_formatOption$roundin,_formatOption$default=formatOption.defaultPlaceholder,defaultPlaceholder=void 0===_formatOption$default?"-":_formatOption$default,restOpts=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default()(formatOption,_excluded);if(0===num)return"0";if(!num)return defaultPlaceholder;if(num<0)return"< 0";var decimals=function getDecimals(digit){for(var s="0.";--digit;)s+="0";return parseFloat(s+"1")}(digits);return num<decimals?"< ".concat(decimals):(0,numbro__WEBPACK_IMPORTED_MODULE_4__.A)(num).format(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({average:num>1e3,totalLength:num<1e3?0:3,mantissa:digits,optionalMantissa:!0,trimMantissa:!0,thousandSeparated:!0,roundingFunction},restOpts))}},"./libs/webb-ui-components/src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CO:()=>calculateDateProgress,PK:()=>formatDateToUtc,Tl:()=>getPaginationItems,bN:()=>getRoundedAmountString.b,f2:()=>shortenHex.f,l1:()=>shortenString.l,Mg:()=>utils_toFixed});__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js");var isValid=__webpack_require__("./node_modules/date-fns/isValid.mjs"),differenceInMilliseconds=__webpack_require__("./node_modules/date-fns/differenceInMilliseconds.mjs"),calculateDateProgress=function calculateDateProgress(startDateStr,endDateStr,now){var _now$current$getTime;if(null===startDateStr||null===endDateStr)return null;if(!(0,isValid.f)(startDateStr)||!(0,isValid.f)(endDateStr))return null;var currentTime=null!==(_now$current$getTime=null==now?void 0:now.current.getTime())&&void 0!==_now$current$getTime?_now$current$getTime:Date.now(),startDate=new Date(startDateStr),endDate=new Date(endDateStr);if((0,differenceInMilliseconds.b)(currentTime,startDate)<0)return null;var diffBetweenStartAndEnd=Math.abs(startDate.getTime()-endDate.getTime()),diffBetweenStartAndNow=Math.abs(startDate.getTime()-currentTime);return 0===diffBetweenStartAndEnd?null:diffBetweenStartAndNow>diffBetweenStartAndEnd?100:parseFloat((diffBetweenStartAndNow/diffBetweenStartAndEnd*100).toFixed(2))},parseISO=(__webpack_require__("./node_modules/core-js/modules/es.error.cause.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/date-fns/parseISO.mjs")),mini=__webpack_require__("./node_modules/@date-fns/utc/date/mini.mjs"),formatDateToUtc=function formatDateToUtc(dateArg){if(!dateArg)return"TBD";if(!(0,isValid.f)(dateArg))throw new Error("Please provide valid date object");var dateISO;return dateISO="string"==typeof dateArg?(0,parseISO.H)(new Date(dateArg).toISOString()):(0,parseISO.H)(dateArg.toISOString()),new mini.a(dateISO.toString()).toString()};__webpack_require__("./node_modules/lodash/round.js"),__webpack_require__("./libs/webb-ui-components/src/utils/getCookieItem.ts");var toConsumableArray=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js"),toConsumableArray_default=__webpack_require__.n(toConsumableArray),range=function range(start,end){var length=end-start+1;return Array.from({length},(function(_,idx){return start+idx}))},getPaginationItems=function getPaginationItems(options){var _options$boundaryCoun=options.boundaryCount,boundaryCount=void 0===_options$boundaryCoun?1:_options$boundaryCoun,_options$count=options.count,count=void 0===_options$count?1:_options$count,_options$page=options.page,page=void 0===_options$page?1:_options$page,_options$siblingCount=options.siblingCount,siblingCount=void 0===_options$siblingCount?1:_options$siblingCount,startPages=range(1,Math.min(boundaryCount,count)),endPages=range(Math.max(count-boundaryCount+1,boundaryCount+1),count),siblingsStart=Math.max(Math.min(page-siblingCount,count-boundaryCount-2*siblingCount-1),boundaryCount+2),siblingsEnd=Math.min(Math.max(page+siblingCount,boundaryCount+2*siblingCount+2),endPages.length>0?endPages[0]-2:count-1);return[].concat(toConsumableArray_default()(startPages),toConsumableArray_default()(siblingsStart>boundaryCount+2?["start-ellipsis"]:boundaryCount+1<count-boundaryCount?[boundaryCount+1]:[]),toConsumableArray_default()(range(siblingsStart,siblingsEnd)),toConsumableArray_default()(siblingsEnd<count-boundaryCount-1?["end-ellipsis"]:count-boundaryCount>boundaryCount?[count-boundaryCount]:[]),toConsumableArray_default()(endPages)).filter((function(val){return"number"!=typeof val||val>0}))},getRoundedAmountString=__webpack_require__("./libs/webb-ui-components/src/utils/getRoundedAmountString.ts");__webpack_require__("./node_modules/core-js/modules/es.string.pad-start.js");__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.test.js");var console=__webpack_require__("./node_modules/console-browserify/index.js");const utils_isScientificNotation=function isScientificNotation(value){var stringValue=value.toString();return stringValue.length>1e3?(console.error("isScientificNotation: value is too long"),!1):/^[+-]?\d+(\.\d+)?e[+-]?\d+$/i.test(stringValue)};__webpack_require__("./libs/webb-ui-components/src/utils/isSideBarItemActive.ts");var numberToString=__webpack_require__("./libs/webb-ui-components/src/utils/numberToString.ts");__webpack_require__("./libs/webb-ui-components/src/constants/index.ts");var shortenHex=__webpack_require__("./libs/webb-ui-components/src/utils/shortenHex.ts"),shortenString=__webpack_require__("./libs/webb-ui-components/src/utils/shortenString.ts");__webpack_require__("./node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.dot-all.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js");const utils_toFixed=function toFixed(value){var fractionDigits=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,valueStr=utils_isScientificNotation(value)?(0,numberToString.A)(value):"".concat(value),regex=new RegExp("^-?\\d+(?:\\.\\d{0,".concat(fractionDigits,"})?")),matched=valueStr.match(regex);return matched&&null!=matched[0]?parseFloat(matched[0]):value}},"./libs/webb-ui-components/src/utils/isSideBarItemActive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");const __WEBPACK_DEFAULT_EXPORT__=function isSideBarItemActive(hrefOrArrayOfHrefs,pathnameOrHash){var _window,_window2;if("string"==typeof pathnameOrHash&&pathnameOrHash.length>0)return Array.isArray(hrefOrArrayOfHrefs)?hrefOrArrayOfHrefs.some((function(href){return href.length>0&&(pathnameOrHash.includes(href)||pathnameOrHash.includes(href))})):"/"===hrefOrArrayOfHrefs?"/"===pathnameOrHash:pathnameOrHash.includes(hrefOrArrayOfHrefs);var pathname=null===(_window=window)||void 0===_window||null===(_window=_window.location)||void 0===_window?void 0:_window.pathname,hash=null===(_window2=window)||void 0===_window2||null===(_window2=_window2.location)||void 0===_window2?void 0:_window2.hash;return!(!pathname&&!hash)&&("string"==typeof hrefOrArrayOfHrefs&&hrefOrArrayOfHrefs.length>0?pathname.includes(hrefOrArrayOfHrefs)||hash.includes(hrefOrArrayOfHrefs):!!Array.isArray(hrefOrArrayOfHrefs)&&hrefOrArrayOfHrefs.some((function(href){return href.length>0&&(pathname.includes(href)||hash.includes(href))})))}},"./libs/webb-ui-components/src/utils/numberToString.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js");const __WEBPACK_DEFAULT_EXPORT__=function numberToString(num){var str=String(num);if(-1!==str.indexOf("e")){var exponent=parseInt(str.split("-")[1],10);str=num.toFixed(exponent)}return str}},"./libs/webb-ui-components/src/utils/shortenHex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>shortenHex});__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js");var shortenHex=function shortenHex(hexStr){var chars=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,hexLower=hexStr.toLowerCase(),isStartWith0x=hexLower.startsWith("0x"),startStr="",endStr="";return isStartWith0x&&hexLower.length<=2*chars+2?hexLower:!isStartWith0x&&hexLower.length<=2*chars?"0x".concat(hexLower):(isStartWith0x?(startStr=hexLower.split("").slice(0,chars+2).join(""),endStr=hexLower.split("").slice(-chars).join("")):(startStr=hexLower.split("").slice(0,chars).join(""),endStr=hexLower.split("").slice(-chars).join("")),isStartWith0x?"".concat(startStr,"...").concat(endStr):"0x".concat(startStr,"...").concat(endStr))}},"./libs/webb-ui-components/src/utils/shortenString.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>shortenString});var shortenString=function shortenString(str){var chars=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(str.length<=2*chars)return str;var startStr=str.split("").slice(0,chars).join(""),endStr=str.split("").slice(-chars).join("");return"".concat(startStr,"...").concat(endStr)}},"?d4c0":()=>{}}]);
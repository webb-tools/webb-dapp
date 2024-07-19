"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[4001],{"./libs/webb-ui-components/src/stories/molecules/ToggleCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIconAndDescription:()=>WithIconAndDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_WithIconAndDescription_parameters,_WithIconAndDescription_parameters_docs,_WithIconAndDescription_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ToggleCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/webb-ui-components/src/components/ToggleCard/index.ts"),_webb_tools_icons_GasStationFill__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/icons/src/GasStationFill.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/V2 (WIP)/Molecules/ToggleCard",component:_components_ToggleCard__WEBPACK_IMPORTED_MODULE_1__.A};var Default={render:function render(){return __jsx(_components_ToggleCard__WEBPACK_IMPORTED_MODULE_1__.A,{title:"Title"})}},WithIconAndDescription={render:function render(){return __jsx(_components_ToggleCard__WEBPACK_IMPORTED_MODULE_1__.A,{title:"Title",description:"Description",info:"Information",Icon:__jsx(_webb_tools_icons_GasStationFill__WEBPACK_IMPORTED_MODULE_2__.A,{size:"lg"})})}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  render: () => <ToggleCard title="Title" />\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},WithIconAndDescription.parameters={...WithIconAndDescription.parameters,docs:{...null===(_WithIconAndDescription_parameters=WithIconAndDescription.parameters)||void 0===_WithIconAndDescription_parameters?void 0:_WithIconAndDescription_parameters.docs,source:{originalSource:'{\n  render: () => <ToggleCard title="Title" description="Description" info="Information" Icon={<GasStationFill size="lg" />} />\n}',...null===(_WithIconAndDescription_parameters1=WithIconAndDescription.parameters)||void 0===_WithIconAndDescription_parameters1||null===(_WithIconAndDescription_parameters_docs=_WithIconAndDescription_parameters1.docs)||void 0===_WithIconAndDescription_parameters_docs?void 0:_WithIconAndDescription_parameters_docs.source}}};const __namedExportsOrder=["Default","WithIconAndDescription"]},"./libs/dapp-types/src/utils/isPrimitive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isPrimitive(value){return null===value||"object"!=typeof value&&"function"!=typeof value}__webpack_require__.d(__webpack_exports__,{A:()=>isPrimitive})},"./libs/webb-ui-components/src/components/Label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),__jsx=react.createElement,Label=function Label(props){return __jsx(dist.b,props)};Label.__docgenInfo={description:"The accessible `Label` component\n\n@example\n\n```jsx\n <Label className='font-bold uppercase body4' htmlFor=\"username\">\n   Username\n </Label>\n```",methods:[],displayName:"Label"}},"./libs/webb-ui-components/src/components/Switcher/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Switcher});var helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_excluded=["className"],__jsx=react.createElement,Switcher=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,props=objectWithoutProperties_default()(_ref,_excluded),mergedClxs=(0,react.useMemo)((function(){return(0,bundle_mjs.QP)(classnames_default()("group","radix-state-checked:bg-blue-40 dark:radix-state-checked:bg-blue-90","radix-state-unchecked:bg-mono-80 dark:radix-state-unchecked:bg-mono-140","relative inline-flex h-3 w-[28px] flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out","focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75","radix-disabled:pointer-events-none radix-disabled:bg-mono-40 dark:radix-disabled:bg-mono-120"),className)}),[className]);return __jsx(dist.bL,extends_default()({},props,{ref,className:mergedClxs}),__jsx(dist.zi,{className:classnames_default()("group-radix-state-checked:translate-x-3","group-radix-state-unchecked:translate-x-0","group-radix-state-checked:bg-blue-70 dark:group-radix-state-checked:bg-blue-50","absolute inline-block top-1/2 -translate-y-1/2","shadow-[0_1px_4px_0_rgba(0,0,0,0.35)] dark:shadow-[0_2px_4px_0_rgba(6,6,6,0.35)]","group-hover:shadow-[0_2px_4px_1px_rgba(0,0,0,0.35)] dark:group-hover:shadow-[0_3px_4px_2px_rgba(6,6,6,0.35)]","pointer-events-none inline-block h-4 w-4 transform rounded-full bg-mono-0 dark:bg-mono-40 transition duration-200 ease-in-out","radix-disabled:bg-mono-20 dark:radix-disabled:bg-mono-140")}))}));Switcher.__docgenInfo={description:"",methods:[],displayName:"Switcher"}},"./libs/webb-ui-components/src/components/TitleWithInfo/TitleWithInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>TitleWithInfo});var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/icons/src/index.ts"),_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),tailwind_merge__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_Tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/webb-ui-components/src/components/Tooltip/index.ts"),_webb_tools_dapp_types_utils_isPrimitive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./libs/dapp-types/src/utils/isPrimitive.ts"),_excluded=["className","info","title","titleClassName","titleComponent","variant","isCenterInfo"],__jsx=react__WEBPACK_IMPORTED_MODULE_2__.createElement,TitleWithInfo=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(_ref,ref){var className=_ref.className,info=_ref.info,title=_ref.title,titleClassName=_ref.titleClassName,_ref$titleComponent=_ref.titleComponent,titleComponent=void 0===_ref$titleComponent?"span":_ref$titleComponent,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"body1":_ref$variant,isCenterInfo=_ref.isCenterInfo,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref,_excluded),mergedClsx=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.QP)("flex items-center space-x-1 text-mono-180 dark:text-mono-0",className)}),[className]);return __jsx("div",_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({},props,{className:mergedClsx,ref}),__jsx(_typography__WEBPACK_IMPORTED_MODULE_4__.o,{component:titleComponent,variant,fw:"bold",className:titleClassName},title),info&&__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.m_,null,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.k$,{className:"text-center",asChild:!0},__jsx("span",{className:"cursor-pointer !text-inherit"},__jsx(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_3__.B$,{className:"!fill-current pointer-events-none"}))),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.SK,{className:"break-normal max-w-[200px]"},(0,_webb_tools_dapp_types_utils_isPrimitive__WEBPACK_IMPORTED_MODULE_7__.A)(info)&&null!=info?__jsx(_typography__WEBPACK_IMPORTED_MODULE_4__.o,{ta:isCenterInfo?"center":"left",variant:"body3",className:"break-normal"},info):info)))}));TitleWithInfo.__docgenInfo={description:"The re-useable title component with small info in a popup tooltip\n\n@example\n\n```jsx\n <TitleWithInfo title='Active key' info='This is the active key card' />\n```",methods:[],displayName:"TitleWithInfo",props:{titleComponent:{defaultValue:{value:"'span'",computed:!1},required:!1},variant:{defaultValue:{value:"'body1'",computed:!1},required:!1}}}},"./libs/webb-ui-components/src/components/TitleWithInfo/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>_TitleWithInfo__WEBPACK_IMPORTED_MODULE_0__.B});var _TitleWithInfo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/components/TitleWithInfo/TitleWithInfo.tsx")},"./libs/webb-ui-components/src/components/ToggleCard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ToggleCard});__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.array.push.js");var helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),defineProperty_default=__webpack_require__.n(defineProperty),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./libs/icons/src/utils.ts"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),Typography=__webpack_require__("./libs/webb-ui-components/src/typography/Typography/index.ts"),Label=__webpack_require__("./libs/webb-ui-components/src/components/Label/index.ts"),Switcher=__webpack_require__("./libs/webb-ui-components/src/components/Switcher/index.ts"),TitleWithInfo=__webpack_require__("./libs/webb-ui-components/src/components/TitleWithInfo/index.ts"),_excluded=["className","Icon","title","id","description","info","switcherProps"],__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty_default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ToggleCard=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,Icon=_ref.Icon,title=_ref.title,id=_ref.id,description=_ref.description,info=_ref.info,switcherProps=_ref.switcherProps,props=objectWithoutProperties_default()(_ref,_excluded);return __jsx("div",extends_default()({className:(0,bundle_mjs.QP)("px-4 py-2 rounded-lg max-w-md","bg-[#F7F8F7]/50 hover:bg-mono-20","dark:bg-mono-180 dark:hover:bg-mono-170",className),ref},props),__jsx("div",{className:"flex items-center"},__jsx("div",{className:"flex gap-2 grow"},Icon&&__jsx("span",{className:(0,bundle_mjs.QP)("grow-0 shrink-0",(0,utils.yF)(Icon.props.size))},(0,react.cloneElement)(Icon,_objectSpread(_objectSpread({},Icon.props),{},{className:(0,bundle_mjs.QP)(Icon.props.className,"!fill-mono-100")}))),__jsx("div",{className:"space-y-2"},__jsx(Label.J,{id:null!=id?id:title},__jsx(TitleWithInfo.B,{title,variant:"body1",info,titleComponent:"span",className:"text-mono-180 dark:text-mono-40",titleClassName:"capitalize !text-inherit"})),description&&__jsx(Typography.o,{className:"text-mono-180 dark:text-mono-40",variant:"body1"},description))),__jsx(Switcher.i,switcherProps)))}));const ToggleCard_ToggleCard=ToggleCard;ToggleCard.__docgenInfo={description:"ToggleCard is a component that displays a title, description, and a switcher.\n\nProps:\n- className: Override the default styles.\n- Icon: The icon to display on the left side of the card.\n- title: The title of the card.\n- id: The id of the card.\n- description: The description of the card.\n- info: The info of the card.\n- switcherProps: The props of the switcher.",methods:[],displayName:"ToggleCard"};const components_ToggleCard=ToggleCard_ToggleCard},"./libs/webb-ui-components/src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SK:()=>TooltipBody,k$:()=>TooltipTrigger,m_:()=>Tooltip});var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_excluded=["button","children","className","title","isDisablePortal"],_excluded2=["children","className"],_excluded3=["children","isDefaultOpen","isDisableHoverableContent","isOpen","onChange","delayDuration"],__jsx=react__WEBPACK_IMPORTED_MODULE_2__.createElement,TooltipBody=function TooltipBody(_ref){var button=_ref.button,children=_ref.children,className=_ref.className,title=_ref.title,isDisablePortal=_ref.isDisablePortal,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref,_excluded),inner=__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.UC,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({sideOffset:4,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("radix-side-top:animate-slide-down-fade","radix-side-right:animate-slide-left-fade","radix-side-bottom:animate-slide-up-fade","radix-side-left:animate-slide-right-fade","inline-flex items-center break-all rounded p-2","bg-mono-20 dark:bg-mono-160","webb-shadow-sm z-[9999]")},props),__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.i3,{className:"fill-current text-mono-20 dark:text-mono-160 webb-shadow-sm"}),__jsx("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("body4 text-mono-140 dark:text-mono-80 font-normal min-w-0 max-w-[300px]",className)},title&&__jsx("h6",{className:"mb-2 utility"},title),children,button&&__jsx("div",{className:"flex justify-end mt-4"},button)));return isDisablePortal?inner:__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.ZL,null,inner)},TooltipTrigger=function TooltipTrigger(_ref2){var children=_ref2.children,className=_ref2.className,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2,_excluded2);return __jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.l9,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({className},props),children)},Tooltip=function Tooltip(_ref3){var children=_ref3.children,isDefaultOpen=_ref3.isDefaultOpen,isDisableHoverableContent=_ref3.isDisableHoverableContent,isOpen=_ref3.isOpen,onChange=_ref3.onChange,_ref3$delayDuration=_ref3.delayDuration,delayDuration=void 0===_ref3$delayDuration?100:_ref3$delayDuration,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref3,_excluded3);return __jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.Kq,null,__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.bL,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({},props,{defaultOpen:isDefaultOpen,open:isOpen,onOpenChange:onChange,disableHoverableContent:isDisableHoverableContent,delayDuration}),children))};TooltipBody.__docgenInfo={description:"The `ToolTipBody` component, use after the `TooltipTrigger`.\nReresents the popup content of the tooltip.\nMust use inside the `Tooltip` component.\n\n@example\n\n```jsx\n   <ToolTipBody className='max-w-[185px] w-auto'>\n     <span>A report of a DKG authority misbehaving. (Body xs Regular)</span>\n   </ToolTipBody>\n```",methods:[],displayName:"TooltipBody"},TooltipTrigger.__docgenInfo={description:"The `TooltipTrigger` component, wrap around a trigger component like `Button` or `Chip` or a html tag.\nMust use inside the `Tooltip` component.\n\n@example\n\n```jsx\n   <ToolTipTrigger>\n     <Chip color='blue'>Text only</Chip>\n   </ToolTipTrigger>\n```",methods:[],displayName:"TooltipTrigger"},Tooltip.__docgenInfo={description:"The `Tooltip` component.\n\n@example\n\n```jsx\n   <Tooltip isDefaultOpen>\n     <ToolTipTrigger>\n       <Chip color='blue'>Text only</Chip>\n     </ToolTipTrigger>\n     <ToolTipBody className='max-w-[185px] w-auto'>\n       <span>A report of a DKG authority misbehaving. (Body xs Regular)</span>\n     </ToolTipBody>\n   </Tooltip>\n```",methods:[],displayName:"Tooltip",props:{delayDuration:{defaultValue:{value:"100",computed:!1},required:!1}}}},"./libs/webb-ui-components/src/components/Tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SK:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.SK,k$:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.k$,m_:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.m_});var _Tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/components/Tooltip/Tooltip.tsx")},"./libs/webb-ui-components/src/typography/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});__webpack_require__("./node_modules/core-js/modules/es.array.push.js");var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/webb-ui-components/src/typography/utils/index.ts"),_excluded=["children","className","component","fw","ta","variant"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var defaultComponent={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",body1:"p",body2:"p",body3:"p",body4:"p",mono1:"span",mono2:"span",para1:"p",para2:"p",label:"span",utility:"span","mkt-h1":"h1","mkt-h2":"h2","mkt-h3":"h3","mkt-h4":"h4","mkt-subheading":"p","mkt-body1":"p","mkt-body2":"p","mkt-small-caps":"p","mkt-caption":"p","mkt-monospace":"p"},Typography=function Typography(props){var children=props.children,className=props.className,component=props.component,_props$fw=props.fw,fw=void 0===_props$fw?"normal":_props$fw,_props$ta=props.ta,ta=void 0===_props$ta?"left":_props$ta,variant=props.variant,restProps=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(props,_excluded),_component=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){return null!=component?component:defaultComponent[variant]}),[component,variant]),_className=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("".concat(variant),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.sN)(ta),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.NC)(variant,fw),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Qe)(variant),className)}),[className,fw,ta,variant]);return(0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(_component,_objectSpread(_objectSpread({},restProps),{},{className:_className}),children)};Typography.__docgenInfo={description:'The Webb Typography component\n\nProps:\n- `variant`: Represent different variants of the component\n- `component`: The html tag (default: same as `variant` prop)\n- `fw`: Represent the **font weight** of the component (default: `normal`)\n- `ta`: Text align (default: `left`)\n- `darkMode`: Control component dark mode display in `js`, leave it\'s empty if you want to control dark mode in `css`\n\n@example\n\n```jsx\n<Typography variant="h1" fw="semibold" ta="center">This is heading 1</Typography>\n<Typography variant="h2" component="h3">This is heading 3 with variant h2</Typography>\n```',methods:[],displayName:"Typography",props:{className:{required:!1,tsType:{name:"string"},description:"The tailwindcss className to override the style"},darkMode:{required:!1,tsType:{name:"boolean"},description:"Control dark mode using `js`, if it's empty, the component will control dark mode in `css`"},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},variant:{required:!0,tsType:{name:"TypoVariant"},description:"Represent different variants of the component"},component:{required:!1,tsType:{name:"ReactHTML"},description:"The html tag"},fw:{required:!1,tsType:{name:"union",raw:"| 'normal'\n| 'medium'\n| 'semibold'\n| 'bold'\n| 'black'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'black'"}]},description:"Font weight"},ta:{required:!1,tsType:{name:"union",raw:"'center' | 'justify' | 'right' | 'left'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"},{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:"Text align"}}}},"./libs/webb-ui-components/src/typography/Typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>_Typography__WEBPACK_IMPORTED_MODULE_0__.o});var _Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/typography/Typography/Typography.tsx")},"./libs/webb-ui-components/src/typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>_Typography__WEBPACK_IMPORTED_MODULE_0__.o});var _Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/typography/Typography/index.ts")},"./libs/webb-ui-components/src/typography/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NC:()=>getFontWeightClassName,Qe:()=>getDefaultTextColor,sN:()=>getTextAlignClassName});__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js");function getTextAlignClassName(textAlign){switch(textAlign){case"center":return"text-center";case"justify":return"text-justify";case"left":default:return"text-left";case"right":return"text-right"}}function getFontWeightClassName(variant,fontWeight){if(function isMonospaceVariant(variant){return-1!==["mono1","mono2","mkt-monospace"].indexOf(variant)}(variant)&&"semibold"===fontWeight)return"font-bold";if("label"===variant||"utility"===variant)return"";switch(fontWeight){case"normal":default:return"font-normal";case"medium":return"font-medium";case"semibold":return"font-semibold";case"bold":return"font-bold";case"black":return"font-black"}}function getDefaultTextColor(variant){return variant.startsWith("h")?"text-mono-200 dark:text-mono-00":"text-mono-160 dark:text-mono-80"}}}]);
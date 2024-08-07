"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[8771],{"./libs/webb-ui-components/src/components/Dropdown/DropdownMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js")),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const _excluded=["children","className","leftIcon","rightIcon","textTransform","disabled","isActive"],DropdownMenuItem=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(((_ref,ref)=>{let{children,className:clsxProp,leftIcon,rightIcon,textTransform="capitalize",disabled=!1,isActive=!1}=_ref,props=(0,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const className=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)(classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex items-center px-4 py-2 text-base outline-none",disabled?"opacity-60":"cursor-pointer",{"hover:bg-blue-0 dark:hover:bg-mono-170":!disabled},{"focus:bg-blue-0 dark:focus:bg-mono-170":!disabled},{"hover:text-mono-200 dark:hover:text-mono-0":!disabled},{"focus:text-mono-200 dark:focus:text-mono-0":!disabled},{"bg-blue-0 dark:bg-mono-170":isActive},{"text-mono-200 dark:text-mono-0":isActive},"radix-state-checked:text-mono-200 dark:radix-state-checked:text-mono-0","radix-state-active:text-mono-200 dark:radix-state-active:text-mono-0"),textTransform,clsxProp)),[clsxProp,textTransform,disabled,isActive]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.q7,Object.assign({className},props,{ref,children:[leftIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mr-2.5 shrink-0",children:leftIcon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"flex-grow text-inherit dark:text-inherit",children}),rightIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"shrink-0",children:rightIcon})]}))})),__WEBPACK_DEFAULT_EXPORT__=DropdownMenuItem;DropdownMenuItem.__docgenInfo={description:"The DropdownMenuItem component (must be used inside the `Dropdown*` component)\n\nProps:\n\n- `rightIcon`: The icon displayed after the text\n- `leftIcon`: The icon displayed before the text\n- `textTransform`: The text transform style\n\n@example\n\n```jsx\n <DropdownMenuItem rightIcon={<Filter />}>Filter</DropdownMenuItem>\n <DropdownMenuItem>Item 1</DropdownMenuItem>\n```",methods:[],displayName:"DropdownMenuItem",props:{textTransform:{defaultValue:{value:"'capitalize'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},isActive:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./libs/webb-ui-components/src/components/ErrorFallback/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ErrorFallback});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js")),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),constants=__webpack_require__("./libs/webb-ui-components/src/constants/index.ts"),typography=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),components_buttons=__webpack_require__("./libs/webb-ui-components/src/components/buttons/index.ts");const _excluded=["buttons","className","contactUsLinkProps","description","refreshPageButtonProps","reportIssueButtonProps","title"],telegramInfo=constants.s7.find((c=>"telegram"===c.name));var _telegramInfo_href;const contactLink=null!==(_telegramInfo_href=null==telegramInfo?void 0:telegramInfo.href)&&void 0!==_telegramInfo_href?_telegramInfo_href:"",githubInfo=constants.s7.find((c=>"github"===c.name));var _githubInfo_href;const reportIssueLink=`${null!==(_githubInfo_href=null==githubInfo?void 0:githubInfo.href)&&void 0!==_githubInfo_href?_githubInfo_href:""}/webb-dapp/issues/new/choose`,ErrorFallback=(0,react.forwardRef)(((_ref,ref)=>{let{buttons,className,contactUsLinkProps,description:descriptionProp,refreshPageButtonProps,reportIssueButtonProps,title="Oops something went wrong."}=_ref,props=(0,objectWithoutPropertiesLoose.A)(_ref,_excluded);const[hasClearedCache,setHasClearedCache]=(0,react.useState)(!1),description=(0,react.useMemo)((()=>descriptionProp||["Please either refresh the page or try again later.",{noWrapper:!1,children:(0,jsx_runtime.jsxs)("span",{className:"inline-block w-9/12 mx-auto",children:["If the issue persists, please"," ",(0,jsx_runtime.jsx)(components_buttons.$n,Object.assign({href:contactLink,target:"_blank"},contactUsLinkProps,{variant:"link",className:"inline-block",children:"contact us"}))," ","or report the issue."]})}]),[contactUsLinkProps,descriptionProp]),handleClearCache=(0,react.useCallback)((()=>{localStorage.clear(),setHasClearedCache(!0)}),[]),buttonProps=(0,react.useMemo)((()=>{if(buttons)return buttons;const commonButtonProps={className:"px-3 py-2 rounded-lg",size:"sm"};return[Object.assign({onClick:()=>window.location.reload(!0)},refreshPageButtonProps,commonButtonProps,{variant:"primary",children:"Refresh Page"}),Object.assign({onClick:handleClearCache},refreshPageButtonProps,commonButtonProps,{variant:"secondary",children:"Clear cache",isDisabled:hasClearedCache}),Object.assign({href:reportIssueLink,target:"_blank"},reportIssueButtonProps,commonButtonProps,{variant:"secondary",children:"Report issue"})]}),[buttons,handleClearCache,hasClearedCache,refreshPageButtonProps,reportIssueButtonProps]);return(0,jsx_runtime.jsxs)("div",Object.assign({},props,{className:(0,bundle_mjs.QP)("bg-mono-0 dark:bg-mono-180 p-6 rounded-lg","max-w-xl space-y-4 mx-auto",className),ref,children:[(0,jsx_runtime.jsx)(typography.o,{variant:"h4",fw:"bold",ta:"center",children:title}),(0,jsx_runtime.jsx)("div",{className:"space-y-2",children:description.map(((desc,index)=>"string"!=typeof desc&&desc.noWrapper?(0,jsx_runtime.jsx)(react.Fragment,{children:desc.children},index):(0,jsx_runtime.jsx)(typography.o,{className:"w-3/4 mx-auto",variant:"body1",ta:"center",fw:"semibold",children:"string"==typeof desc?desc:desc.children},index)))}),(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center gap-2",children:buttonProps.map(((buttonProps,index)=>(0,jsx_runtime.jsx)(components_buttons.$n,Object.assign({},buttonProps),index)))})]}))}));ErrorFallback.__docgenInfo={description:"The `ErrorFallback` component, used to display an error message when an UI error occurs.\n\n- `title`: The error title to display (default is \"Oops something went wrong.)\n- `description`: The error description to display, can be a string or a react element (string with links, etc.). When noWrapper is true, the children will be rendered without a wrapper (`<Typography />`)\n- `buttons`: The button prop list for displaying the buttons in the error fallback component. if not provided, the default button will be rendered (refresh page and report issue)\n- `contactUsLinkProps`: Contact us link props, for overriding the default props\n- `refreshPageButtonProps`: Refresh page button props for overriding the default props\n- `reportIssueButtonProps`: Report issue button props for overriding the default props\n\n```jsx\n <ErrorFallback className='mr-3' />\n <ErrorFallback\n   title='An error occurred'\n   description='Please refresh the page or try again later.'\n />\n```",methods:[],displayName:"ErrorFallback",props:{title:{defaultValue:{value:"'Oops something went wrong.'",computed:!1},required:!1}}}},"./libs/webb-ui-components/src/components/Notification/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ph:()=>NotificationProvider,OT:()=>notificationApi});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const NotificationCTXDefaultValue={addToQueue:()=>0,remove(){}},NotificationContext=react.createContext(NotificationCTXDefaultValue);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),src=__webpack_require__("./libs/icons/src/index.ts"),notistack_esm=__webpack_require__("./node_modules/notistack/notistack.esm.js"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),Typography=__webpack_require__("./libs/webb-ui-components/src/typography/Typography/index.ts");const NotificationItem=(0,react.forwardRef)(((props,ref)=>{const{id,message,Icon,secondaryMessage,style,variant,className}=props,DefaultIcon=(0,react.useMemo)((()=>{switch(variant){case"success":return(0,jsx_runtime.jsx)(src.ej,{size:"lg",className:"fill-green-70 dark:fill-green-30"});case"error":case"warning":return(0,jsx_runtime.jsx)(src.Fc,{size:"lg",className:"!fill-yellow-70"});default:return(0,jsx_runtime.jsx)(src.B$,{size:"lg",className:"fill-blue-70 dark:fill-blue-50"})}}),[variant]);return(0,jsx_runtime.jsxs)(notistack_esm.Zv,{ref,role:"alert",style,className:(0,bundle_mjs.QP)("p-4 w-[420px] rounded-lg","bg-mono-0 dark:bg-mono-140","flex items-start justify-between","shadow-md",className),children:[(0,jsx_runtime.jsxs)("div",{className:"flex space-x-3",children:[(0,jsx_runtime.jsx)("div",{className:"pt-0.5",children:null!=Icon?Icon:DefaultIcon}),(0,jsx_runtime.jsxs)("div",{className:"space-y-1 max-w-[313px] overflow-x-hidden",children:["string"==typeof message?(0,jsx_runtime.jsx)(Typography.o,{variant:"h5",fw:"bold",children:message}):message,"string"==typeof secondaryMessage?(0,jsx_runtime.jsx)(Typography.o,{variant:"body1",children:secondaryMessage}):secondaryMessage]})]}),(0,jsx_runtime.jsx)("button",{onClick:()=>(0,notistack_esm.mk)(id),children:(0,jsx_runtime.jsx)(src.bm,{size:"lg"})})]})}));NotificationItem.__docgenInfo={description:"",methods:[],displayName:"NotificationItem"};__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");let _notificationApi=Object.assign({},NotificationCTXDefaultValue);const NotificationStacked=({children})=>{const{closeSnackbar,enqueueSnackbar}=(0,notistack_esm.dh)(),addToQueue=(0,react.useCallback)((opts=>{const snackKey=opts.key||(new Date).getTime()+Math.random();return enqueueSnackbar(opts.message,Object.assign({},opts,{key:snackKey})),snackKey}),[enqueueSnackbar]),remove=(0,react.useCallback)((key=>closeSnackbar(key)),[closeSnackbar]);return(0,react.useEffect)((()=>{_notificationApi={addToQueue,remove}}),[addToQueue,remove]),(0,jsx_runtime.jsx)(NotificationContext.Provider,{value:{addToQueue,remove},children})},notificationApi=opts=>_notificationApi.addToQueue(opts);notificationApi.addToQueue=opts=>_notificationApi.addToQueue(opts),notificationApi.remove=key=>_notificationApi.remove(key),NotificationStacked.__docgenInfo={description:"",methods:[],displayName:"NotificationStacked",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const NotificationProvider=({children,maxStack:_maxStack=3})=>{const[domRoot,setDomRoot]=(0,react.useState)(void 0);return(0,react.useEffect)((()=>{var _document,_document_getElementById;setDomRoot(null!==(_document_getElementById=null===(_document=document)||void 0===_document?void 0:_document.getElementById("notification-root"))&&void 0!==_document_getElementById?_document_getElementById:void 0)}),[]),(0,jsx_runtime.jsx)(notistack_esm.n,{anchorOrigin:{horizontal:"right",vertical:"top"},autoHideDuration:5e3,preventDuplicate:!0,maxSnack:_maxStack,domRoot,Components:{default:NotificationItem,error:NotificationItem,info:NotificationItem,success:NotificationItem,warning:NotificationItem},children:(0,jsx_runtime.jsx)(NotificationStacked,{children})})};NotificationProvider.__docgenInfo={description:"",methods:[],displayName:"NotificationProvider",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxStack:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}}},"./libs/webb-ui-components/src/components/ThemeSwitcher/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ThemeSwitcher_ThemeSwitcherButton});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react_icons_esm=__webpack_require__("./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js"),hooks=__webpack_require__("./libs/webb-ui-components/src/hooks/index.ts"),src=__webpack_require__("./libs/icons/src/index.ts"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ThemeSwitcherButton=()=>{const[isDarkMode,toggleThemeMode]=(0,hooks.D2)(),Icon=(0,react.useMemo)((()=>{switch(isDarkMode?"dark":"light"){case"dark":return(0,jsx_runtime.jsx)(src.N$,{size:"lg"});case"light":return(0,jsx_runtime.jsx)(src.m7,{size:"lg"});default:return(0,jsx_runtime.jsx)(react_icons_esm.VDO,{className:"w-6 h-6 fill-mono-200 dark:fill-mono-40"})}}),[isDarkMode]);return(0,jsx_runtime.jsx)("button",{className:"relative inline-block text-left",onClick:()=>toggleThemeMode(),children:Icon})},ThemeSwitcher_ThemeSwitcherButton=ThemeSwitcherButton;ThemeSwitcherButton.__docgenInfo={description:"",methods:[],displayName:"ThemeSwitcherButton"};var DropdownMenuItem=__webpack_require__("./libs/webb-ui-components/src/components/Dropdown/DropdownMenuItem.tsx");const ThemeSwitcherMenuItem=props=>{const[isDarkMode,toggleThemeMode]=(0,hooks.D2)(),Icon=(0,react.useMemo)((()=>{switch(isDarkMode?"dark":"light"){case"light":return(0,jsx_runtime.jsx)(src.m7,{size:"lg"});case"dark":return(0,jsx_runtime.jsx)(src.N$,{size:"lg"});default:return(0,jsx_runtime.jsx)(react_icons_esm.VDO,{className:"w-6 h-6 fill-mono-200 dark:fill-mono-40"})}}),[isDarkMode]);return(0,jsx_runtime.jsx)(DropdownMenuItem.A,{onClick:()=>toggleThemeMode(),rightIcon:Icon,className:props.className,children:isDarkMode?"Light Theme":"Dark Theme"})};ThemeSwitcherMenuItem.__docgenInfo={description:"",methods:[],displayName:"ThemeSwitcherMenuItem",props:{className:{required:!1,tsType:{name:"string"},description:""}}}},"./libs/webb-ui-components/src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O$:()=>useCheckMobile,xw:()=>useCopyable.x,D2:()=>hooks_useDarkMode.D,X$:()=>useHiddenValue});__webpack_require__("./libs/webb-ui-components/src/hooks/useBreakpointValue.ts"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.test.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const useCheckMobile=()=>{const[isMobile,setIsMobile]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const checkIsMobile=()=>{const isMobileCheck=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);setIsMobile(isMobileCheck)};return checkIsMobile(),window.addEventListener("resize",checkIsMobile),()=>{window.removeEventListener("resize",checkIsMobile)}}),[]),{isMobile}};var useCopyable=__webpack_require__("./libs/webb-ui-components/src/hooks/useCopyable.ts"),hooks_useDarkMode=__webpack_require__("./libs/webb-ui-components/src/hooks/useDarkMode.ts"),use_local_storage_state=__webpack_require__("./node_modules/use-local-storage-state/index.js");function useHiddenValue(){return(0,use_local_storage_state.A)("isHiddenValue",{defaultValue:!1})}__webpack_require__("./libs/webb-ui-components/src/hooks/useMediaQuery.ts");__webpack_require__("./libs/webb-ui-components/src/hooks/useTimeAgo.ts");__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var Color,LogLevel,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@tanstack/table-core/build/lib/index.mjs"),app_util=(__webpack_require__("./node_modules/core-js/modules/es.json.stringify.js"),__webpack_require__("./node_modules/@webb-tools/app-util/index.js")),console=__webpack_require__("./node_modules/console-browserify/index.js");class LoggerEvent extends app_util.l7{constructor(){super(),this.sendEvent=this.emit}}!function(Color){Color.Reset="[0m",Color.Bright="[1m",Color.Dim="[2m",Color.Underscore="[4m",Color.Blink="[5m",Color.Reverse="[7m",Color.Hidden="[8m",Color.FgBlack="[30m",Color.FgRed="[31m",Color.FgGreen="[32m",Color.FgYellow="[33m",Color.FgBlue="[34m",Color.FgMagenta="[35m",Color.FgCyan="[36m",Color.FgWhite="[37m",Color.BgBlack="[40m",Color.BgRed="[41m",Color.BgGreen="[42m",Color.BgYellow="[43m",Color.BgBlue="[44m",Color.BgMagenta="[45m",Color.BgCyan="[46m",Color.BgWhite="[47m"}(Color||(Color={})),function(LogLevel){LogLevel[LogLevel.trace=0]="trace",LogLevel[LogLevel.log=1]="log",LogLevel[LogLevel.info=2]="info",LogLevel[LogLevel.warn=3]="warn",LogLevel[LogLevel.debug=4]="debug",LogLevel[LogLevel.error=5]="error"}(LogLevel||(LogLevel={}));class LoggerService{static new(ctx,logLevel=0){const logger=new LoggerService(ctx,logLevel);return LoggerService._loggers[ctx]=logger,logger}static get(ctx){const cachedLogger=LoggerService._loggers[ctx];return cachedLogger||LoggerService.new(ctx)}logger(level=0,color,...message){var _LoggerService_eventBus_sendEvent,_LoggerService_eventBus;let m="";try{m=JSON.stringify(message,null,2)}catch(e){m="Cant show message"}if(null===(_LoggerService_eventBus_sendEvent=(_LoggerService_eventBus=LoggerService.eventBus).sendEvent)||void 0===_LoggerService_eventBus_sendEvent||_LoggerService_eventBus_sendEvent.call(_LoggerService_eventBus,"log",{ctx:this.ctx,level,log:m}),LoggerService._enabled&&this.logLevel<=level){const date=new Date;return[`${color}[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}], [${this.ctx}] `,...message]}}constructor(ctx,logLevel){return this.ctx=ctx,this.logLevel=logLevel,this.mutedLogger=()=>null,this.debug=function debug(...message){const log=this.logger(4,"[30m",...message);return log?Function.prototype.bind.call(console.log,console,...log):this.mutedLogger}.call(this),this.error=function error(...message){const log=this.logger(5,"[31m",...message);return log?Function.prototype.bind.call(console.log,console,...log):this.mutedLogger}.call(this),this.info=function info(...message){const log=this.logger(2,"[36m",...message);return log?Function.prototype.bind.call(console.log,console,...log):this.mutedLogger}.call(this),this.warn=function warn(...message){const log=this.logger(3,"[33m",...message);return log?Function.prototype.bind.call(console.log,console,...log):this.mutedLogger}.call(this),this.trace=function trace(...message){const log=this.logger(0,"[30m",...message);return log?Function.prototype.bind.call(console.log,console,...log):this.mutedLogger}.call(this),this.log=function log(...message){const log1=this.logger(1,"[30m",...message);return log1?Function.prototype.bind.call(console.log,console,...log1):this.mutedLogger}.call(this),this}}LoggerService.eventBus=new LoggerEvent,LoggerService._loggers={},LoggerService._enabled=!0;const logger_LoggerService=LoggerService;var Notification=__webpack_require__("./libs/webb-ui-components/src/components/Notification/index.ts"),ErrorFallback=__webpack_require__("./libs/webb-ui-components/src/components/ErrorFallback/index.ts");class WebbUIErrorBoudary extends react.Component{static getDerivedStateFromError(error){return{hasError:!0,error}}componentDidCatch(error,errorInfo){this.props.logger.error(errorInfo),this.props.logger.debug({error,errorInfo})}render(){return this.state.hasError?(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center w-screen h-screen",children:(0,jsx_runtime.jsx)(ErrorFallback.x,{})}):this.props.children}constructor(...args){super(...args),this.state={hasError:!1,error:null,errorInfo:null}}}WebbUIErrorBoudary.__docgenInfo={description:"",methods:[],displayName:"WebbUIErrorBoudary",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},logger:{required:!0,tsType:{name:"LoggerService"},description:""}}};Notification.OT,lib.lQ,logger_LoggerService.get("app"),lib.lQ,logger_LoggerService.new("Stats App")},"./libs/webb-ui-components/src/hooks/useBreakpointValue.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/hooks/useMediaQuery.ts"),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js");const config=__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__)()({content:[]});const __WEBPACK_DEFAULT_EXPORT__=function useBreakpointValue(breakpoint,value,fallback,breakpoints){var _breakpointsToUse_breakpoint;const breakPointValue=null!==(_breakpointsToUse_breakpoint=(null!=breakpoints?breakpoints:config.theme.screens)[breakpoint])&&void 0!==_breakpointsToUse_breakpoint?_breakpointsToUse_breakpoint:config.theme.screens.md;return(0,_useMediaQuery__WEBPACK_IMPORTED_MODULE_0__.A)(`(min-width: ${breakPointValue})`)?value:fallback}},"./libs/webb-ui-components/src/hooks/useCopyable.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>useCopyable});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/copy-to-clipboard/index.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const useCopyable=(display=3e3)=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(""),[isCopied,setIsCopied]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_timeoutRef=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((()=>()=>clearTimeout(_timeoutRef.current)),[]),{isCopied,copy:value=>{if(isCopied)return;ref.current=value,copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(value),setIsCopied(!0);const timeoutObj=setTimeout((()=>setIsCopied(!1)),display);_timeoutRef.current&&clearTimeout(_timeoutRef.current),_timeoutRef.current=timeoutObj},copiedText:ref.current}}},"./libs/webb-ui-components/src/hooks/useDarkMode.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useDarkMode,m:()=>useNextDarkMode});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next-themes/dist/index.mjs"),use_local_storage_state__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/use-local-storage-state/index.js");function isBrowser(){return void 0!==window.document}function useDarkMode(defaultTheme="dark"){const[theme,setTheme]=(0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_4__.A)("theme",{defaultValue:defaultTheme}),isDarkMode=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>"dark"===theme),[theme]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{isBrowser()&&("dark"===theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))}),[theme]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>setTheme(defaultTheme)),[defaultTheme,setTheme]);return[isDarkMode,(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((nextThemeMode=>{if(!isBrowser())return;const _nextThemeMode=(null!=nextThemeMode?nextThemeMode:"dark"===theme)?"light":"dark";if(_nextThemeMode!==theme){switch(_nextThemeMode){case"dark":document.documentElement.classList.add("dark");break;case"light":document.documentElement.classList.remove("dark")}setTheme(_nextThemeMode)}}),[theme,setTheme])]}function useNextDarkMode(){const{theme,setTheme}=(0,next_themes__WEBPACK_IMPORTED_MODULE_3__.D)();return[(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>"dark"===theme),[theme]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((()=>{if(!isBrowser())return;const _nextThemeMode="dark"===theme?"light":"dark";_nextThemeMode!==theme&&setTheme(_nextThemeMode)}),[theme,setTheme])]}},"./libs/webb-ui-components/src/hooks/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>hooks_useMediaQuery});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.test.js");const utils_isSSR=()=>!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),hooks_useIsomorphicEffect=(()=>!utils_isSSR())()?react.useLayoutEffect:react.useEffect;const hooks_useMediaQuery=function useMediaQuery(query){const[matches,setMatches]=(0,react.useState)(!1);return hooks_useIsomorphicEffect((()=>{const mediaQuery=window.matchMedia(query);setMatches(mediaQuery.matches);const handler=event=>{setMatches(event.matches)};return"addEventListener"in mediaQuery&&mediaQuery.addEventListener("change",handler),"addListener"in mediaQuery&&mediaQuery.addListener(handler),()=>{"addEventListener"in mediaQuery&&mediaQuery.removeEventListener("change",handler),"addListener"in mediaQuery&&mediaQuery.removeListener(handler)}}),[query]),matches}},"./libs/webb-ui-components/src/hooks/useTimeAgo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const DAY=86400,WEEK=7*DAY;function dateParser(date){const parsed=new Date(date);if(!Number.isNaN(parsed.valueOf()))return parsed;const parts=String(date).match(/\d+/g);if(null==parts||parts.length<=2)return parsed;{const[firstP,secondP,...restPs]=parts.map((x=>parseInt(x))),[year,monthIdx,_date,hours,minutes,seconds,ms]=[firstP,secondP-1,...restPs];return new Date(Date.UTC(year,monthIdx,_date,hours,minutes,seconds,ms))}}function defaultFormatter(value,_unit,suffix){return value+" "+(1!==value?_unit+"s":_unit)+" "+suffix}const __WEBPACK_DEFAULT_EXPORT__=opts=>{const{date,live=!0,maxPeriod=WEEK,minPeriod=0,now=()=>Date.now(),formatter=defaultFormatter}=opts,[timeNow,setTimeNow]=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(now());(0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((()=>{const timeoutId=(()=>{const then=dateParser(date).valueOf();if(!then)return console.warn("Invalid Date provided"),0;const seconds=Math.round(Math.abs(timeNow-then)/1e3),unboundPeriod=seconds<60?1e3:seconds<3600?6e4:seconds<DAY?36e5:1e3*WEEK,period=Math.min(Math.max(unboundPeriod,1e3*minPeriod),1e3*maxPeriod);return period?setTimeout((()=>{setTimeNow(now())}),period):0})();return()=>{timeoutId&&clearTimeout(timeoutId)}}),[date,live,maxPeriod,minPeriod,now,timeNow]);const then=dateParser(date).valueOf();if(!then)return null;const seconds=Math.round(Math.abs(timeNow-then)/1e3),suffix=then<timeNow?"ago":"from now",[value,unit]=seconds<60?[Math.round(seconds),"second"]:seconds<3600?[Math.round(seconds/60),"minute"]:seconds<DAY?[Math.round(seconds/3600),"hour"]:seconds<WEEK?[Math.round(seconds/DAY),"day"]:seconds<2592e3?[Math.round(seconds/WEEK),"week"]:seconds<31536e3?[Math.round(seconds/2592e3),"month"]:[Math.round(seconds/31536e3),"year"];return formatter(value,unit,suffix,then,defaultFormatter.bind(null,value,unit,suffix),now)}},"./libs/webb-ui-components/src/stories/molecules/ThemeSwitcher.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/webb-ui-components/src/components/ThemeSwitcher/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/ThemeSwitcherButton",component:_components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.j},Default=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.j,Object.assign({},args))).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ThemeSwitcherButton {...args} />",...Default.parameters?.docs?.source}}}}}]);
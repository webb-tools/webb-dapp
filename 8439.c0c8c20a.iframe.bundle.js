"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[8439],{"./node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}__webpack_require__.d(__webpack_exports__,{M:()=>$e42e1063c40fb3ef$export$b9ecd428b558ff10})},"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>$6ed0406888f73fc4$export$43e446d32b3d21af,e:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1,k:()=>$c512c27ab02ef895$export$fd42f52fd3ae1109});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);function Provider(props){const{children,...context}=props,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{XB:()=>$5cb92bef7577960e$export$177fb62ff3ec1f22});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,_extends({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}},"./node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{M:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/@radix-ui/react-portal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{h:()=>$f1701beae083dbae$export$602eac185826482c});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const $f1701beae083dbae$export$602eac185826482c=(0,react.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom.createPortal((0,react.createElement)(dist.WV.div,_extends({},portalProps,{ref:forwardedRef})),container):null}))},"./node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{WV:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034,jH:()=>$8927f6f2acc4f386$export$6d1a0317bde7de7f});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?dist.g7:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,_extends({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom.flushSync)((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{g7:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360,A4:()=>$5e63c961fc1ce211$export$d9f1ccf0bdb05d45});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,_extends({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,_extends({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?(0,dist.F)(forwardedRef,children.ref):children.ref}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>$b1b2314f5f9a1d84$export$25bec8c6f54ee79a});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$9f79659886946c16$export$e5c5a5f917a5871c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}}}]);
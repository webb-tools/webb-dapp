"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[4017,6299],{"./node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function composeEventHandlers(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(originalEventHandler?.(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return ourEventHandler?.(event)}}__webpack_require__.d(__webpack_exports__,{m:()=>composeEventHandlers})},"./node_modules/@radix-ui/react-accordion/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$m:()=>AccordionTrigger,UC:()=>Content2,Y9:()=>Header,bL:()=>Root2,l9:()=>Trigger2,q7:()=>Item});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-collapsible/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ACCORDION_KEYS=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Collection,useCollection,createCollectionScope]=(0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.N)("Accordion"),[createAccordionContext,createAccordionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.A)("Accordion",[createCollectionScope,_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_4__.z3]),useCollapsibleScope=(0,_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_4__.z3)(),Accordion=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{type,...accordionProps}=props,singleProps=accordionProps,multipleProps=accordionProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Provider,{scope:props.__scopeAccordion,children:"multiple"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionImplMultiple,{...multipleProps,ref:forwardedRef}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionImplSingle,{...singleProps,ref:forwardedRef})})}));Accordion.displayName="Accordion";var[AccordionValueProvider,useAccordionValueContext]=createAccordionContext("Accordion"),[AccordionCollapsibleProvider,useAccordionCollapsibleContext]=createAccordionContext("Accordion",{collapsible:!1}),AccordionImplSingle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},collapsible=!1,...accordionSingleProps}=props,[value,setValue]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionValueProvider,{scope:props.__scopeAccordion,value:value?[value]:[],onItemOpen:setValue,onItemClose:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>collapsible&&setValue("")),[collapsible,setValue]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionImpl,{...accordionSingleProps,ref:forwardedRef})})})})),AccordionImplMultiple=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...accordionMultipleProps}=props,[value=[],setValue]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange}),handleItemOpen=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((itemValue=>setValue(((prevValue=[])=>[...prevValue,itemValue]))),[setValue]),handleItemClose=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((itemValue=>setValue(((prevValue=[])=>prevValue.filter((value2=>value2!==itemValue))))),[setValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionValueProvider,{scope:props.__scopeAccordion,value,onItemOpen:handleItemOpen,onItemClose:handleItemClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionImpl,{...accordionMultipleProps,ref:forwardedRef})})})})),[AccordionImplProvider,useAccordionContext]=createAccordionContext("Accordion"),AccordionImpl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,disabled,dir,orientation="vertical",...accordionProps}=props,accordionRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__.s)(accordionRef,forwardedRef),getItems=useCollection(__scopeAccordion),isDirectionLTR="ltr"===(0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_7__.jH)(dir),handleKeyDown=(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.m)(props.onKeyDown,(event=>{if(!ACCORDION_KEYS.includes(event.key))return;const target=event.target,triggerCollection=getItems().filter((item=>!item.ref.current?.disabled)),triggerIndex=triggerCollection.findIndex((item=>item.ref.current===target)),triggerCount=triggerCollection.length;if(-1===triggerIndex)return;event.preventDefault();let nextIndex=triggerIndex;const endIndex=triggerCount-1,moveNext=()=>{nextIndex=triggerIndex+1,nextIndex>endIndex&&(nextIndex=0)},movePrev=()=>{nextIndex=triggerIndex-1,nextIndex<0&&(nextIndex=endIndex)};switch(event.key){case"Home":nextIndex=0;break;case"End":nextIndex=endIndex;break;case"ArrowRight":"horizontal"===orientation&&(isDirectionLTR?moveNext():movePrev());break;case"ArrowDown":"vertical"===orientation&&moveNext();break;case"ArrowLeft":"horizontal"===orientation&&(isDirectionLTR?movePrev():moveNext());break;case"ArrowUp":"vertical"===orientation&&movePrev()}const clampedIndex=nextIndex%triggerCount;triggerCollection[clampedIndex].ref.current?.focus()}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionImplProvider,{scope:__scopeAccordion,disabled,direction:dir,orientation,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Slot,{scope:__scopeAccordion,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__.sG.div,{...accordionProps,"data-orientation":orientation,ref:composedRefs,onKeyDown:disabled?void 0:handleKeyDown})})})})),[AccordionItemProvider,useAccordionItemContext]=createAccordionContext("AccordionItem"),AccordionItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,value,...accordionItemProps}=props,accordionContext=useAccordionContext("AccordionItem",__scopeAccordion),valueContext=useAccordionValueContext("AccordionItem",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion),triggerId=(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.B)(),open=value&&valueContext.value.includes(value)||!1,disabled=accordionContext.disabled||props.disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionItemProvider,{scope:__scopeAccordion,open,disabled,triggerId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_4__.bL,{"data-orientation":accordionContext.orientation,"data-state":getState(open),...collapsibleScope,...accordionItemProps,ref:forwardedRef,disabled,open,onOpenChange:open2=>{open2?valueContext.onItemOpen(value):valueContext.onItemClose(value)}})})}));AccordionItem.displayName="AccordionItem";var AccordionHeader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...headerProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionHeader",__scopeAccordion);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__.sG.h3,{"data-orientation":accordionContext.orientation,"data-state":getState(itemContext.open),"data-disabled":itemContext.disabled?"":void 0,...headerProps,ref:forwardedRef})}));AccordionHeader.displayName="AccordionHeader";var AccordionTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...triggerProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionTrigger",__scopeAccordion),collapsibleContext=useAccordionCollapsibleContext("AccordionTrigger",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.ItemSlot,{scope:__scopeAccordion,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_4__.l9,{"aria-disabled":itemContext.open&&!collapsibleContext.collapsible||void 0,"data-orientation":accordionContext.orientation,id:itemContext.triggerId,...collapsibleScope,...triggerProps,ref:forwardedRef})})}));AccordionTrigger.displayName="AccordionTrigger";var AccordionContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...contentProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionContent",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_4__.UC,{role:"region","aria-labelledby":itemContext.triggerId,"data-orientation":accordionContext.orientation,...collapsibleScope,...contentProps,ref:forwardedRef,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...props.style}})}));function getState(open){return open?"open":"closed"}AccordionContent.displayName="AccordionContent";var Root2=Accordion,Item=AccordionItem,Header=AccordionHeader,Trigger2=AccordionTrigger,Content2=AccordionContent},"./node_modules/@radix-ui/react-collapsible/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UC:()=>Content,bL:()=>Root,l9:()=>Trigger,z3:()=>createCollapsibleScope});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[createCollapsibleContext,createCollapsibleScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Collapsible"),[CollapsibleProvider,useCollapsibleContext]=createCollapsibleContext("Collapsible"),Collapsible=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,open:openProp,defaultOpen,disabled,onOpenChange,...collapsibleProps}=props,[open=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapsibleProvider,{scope:__scopeCollapsible,disabled,contentId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),open,onOpenToggle:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.div,{"data-state":getState(open),"data-disabled":disabled?"":void 0,...collapsibleProps,ref:forwardedRef})})}));Collapsible.displayName="Collapsible";var CollapsibleTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,...triggerProps}=props,context=useCollapsibleContext("CollapsibleTrigger",__scopeCollapsible);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.button,{type:"button","aria-controls":context.contentId,"aria-expanded":context.open||!1,"data-state":getState(context.open),"data-disabled":context.disabled?"":void 0,disabled:context.disabled,...triggerProps,ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onClick,context.onOpenToggle)})}));CollapsibleTrigger.displayName="CollapsibleTrigger";var CollapsibleContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=useCollapsibleContext("CollapsibleContent",props.__scopeCollapsible);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.C,{present:forceMount||context.open,children:({present})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollapsibleContentImpl,{...contentProps,ref:forwardedRef,present})})}));CollapsibleContent.displayName="CollapsibleContent";var CollapsibleContentImpl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,present,children,...contentProps}=props,context=useCollapsibleContext("CollapsibleContent",__scopeCollapsible),[isPresent,setIsPresent]=react__WEBPACK_IMPORTED_MODULE_0__.useState(present),ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_8__.s)(forwardedRef,ref),heightRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),height=heightRef.current,widthRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),width=widthRef.current,isOpen=context.open||isPresent,isMountAnimationPreventedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(isOpen),originalStylesRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__.N)((()=>{const node=ref.current;if(node){originalStylesRef.current=originalStylesRef.current||{transitionDuration:node.style.transitionDuration,animationName:node.style.animationName},node.style.transitionDuration="0s",node.style.animationName="none";const rect=node.getBoundingClientRect();heightRef.current=rect.height,widthRef.current=rect.width,isMountAnimationPreventedRef.current||(node.style.transitionDuration=originalStylesRef.current.transitionDuration,node.style.animationName=originalStylesRef.current.animationName),setIsPresent(present)}}),[context.open,present]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.div,{"data-state":getState(context.open),"data-disabled":context.disabled?"":void 0,id:context.contentId,hidden:!isOpen,...contentProps,ref:composedRefs,style:{"--radix-collapsible-content-height":height?`${height}px`:void 0,"--radix-collapsible-content-width":width?`${width}px`:void 0,...props.style},children:isOpen&&children})}));function getState(open){return open?"open":"closed"}var Root=Collapsible,Trigger=CollapsibleTrigger,Content=CollapsibleContent},"./node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>createCollection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map).current;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,context.collectionRef);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createContextScope,q:()=>createContext2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function createContext2(rootComponentName,defaultContext){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);function Provider(props){const{children,...context}=props,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}},"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>useDirection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DirectionContext=(__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0));function useDirection(localDir){const globalDir=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{}),count=0;function useId(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Presence});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");var Presence=props=>{const{present,children}=props,presence=function usePresence(present){const[node,setNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),stylesRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef({}),prevPresentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(present),prevAnimationNameRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef("none"),initialState=present?"mounted":"unmounted",[state,send]=function useStateMachine(initialState,machine){return react__WEBPACK_IMPORTED_MODULE_0__.useReducer(((state,event)=>machine[state][event]??state),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const currentAnimationName=getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===styles?.display)send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)((()=>{if(node){const handleAnimationEnd=event=>{const isCurrentAnimation=getAnimationName(stylesRef.current).includes(event.animationName);event.target===node&&isCurrentAnimation&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node&&(prevAnimationNameRef.current=getAnimationName(stylesRef.current))};return node.addEventListener("animationstart",handleAnimationStart),node.addEventListener("animationcancel",handleAnimationEnd),node.addEventListener("animationend",handleAnimationEnd),()=>{node.removeEventListener("animationstart",handleAnimationStart),node.removeEventListener("animationcancel",handleAnimationEnd),node.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2=>{node2&&(stylesRef.current=getComputedStyle(node2)),setNode(node2)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(presence.ref,function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(child));return"function"==typeof children||presence.isPresent?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{ref}):null};function getAnimationName(styles){return styles?.animationName||"none"}Presence.displayName="Presence"},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useCallbackRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useCallbackRef(callback){const callbackRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{callbackRef.current=callback})),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useControllableState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function useControllableState({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function useUncontrolledState({defaultProp,onChange}){const uncontrolledState=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),[value]=uncontrolledState,prevValueRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextValue=>{if(isControlled){const value2="function"==typeof nextValue?nextValue(prop):nextValue;value2!==prop&&handleChange(value2)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useLayoutEffect2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useLayoutEffect2=Boolean(globalThis?.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/core-js/modules/es.string.starts-with.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var descriptor,$=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),getOwnPropertyDescriptor=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,toLength=__webpack_require__("./node_modules/core-js/internals/to-length.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),notARegExp=__webpack_require__("./node_modules/core-js/internals/not-a-regexp.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),correctIsRegExpLogic=__webpack_require__("./node_modules/core-js/internals/correct-is-regexp-logic.js"),IS_PURE=__webpack_require__("./node_modules/core-js/internals/is-pure.js"),stringSlice=uncurryThis("".slice),min=Math.min,CORRECT_IS_REGEXP_LOGIC=correctIsRegExpLogic("startsWith");$({target:"String",proto:!0,forced:!!(IS_PURE||CORRECT_IS_REGEXP_LOGIC||(descriptor=getOwnPropertyDescriptor(String.prototype,"startsWith"),!descriptor||descriptor.writable))&&!CORRECT_IS_REGEXP_LOGIC},{startsWith:function startsWith(searchString){var that=toString(requireObjectCoercible(this));notARegExp(searchString);var index=toLength(min(arguments.length>1?arguments[1]:void 0,that.length)),search=toString(searchString);return stringSlice(that,index,index+search.length)===search}})}}]);
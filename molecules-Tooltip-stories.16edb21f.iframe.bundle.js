/*! For license information please see molecules-Tooltip-stories.16edb21f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[2920],{"./node_modules/@radix-ui/react-tooltip/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i3:()=>Arrow2,UC:()=>Content2,ZL:()=>Portal,Kq:()=>Provider,bL:()=>Root3,k$:()=>TooltipTrigger,l9:()=>Trigger});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_dismissable_layer_dist=__webpack_require__("./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),react_popper_dist=__webpack_require__("./node_modules/@radix-ui/react-popper/dist/index.mjs"),react_portal_dist=__webpack_require__("./node_modules/@radix-ui/react-portal/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_slot_dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),VisuallyHidden=react.forwardRef(((props,forwardedRef)=>(0,jsx_runtime.jsx)(react_primitive_dist.sG.span,{...props,ref:forwardedRef,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...props.style}})));VisuallyHidden.displayName="VisuallyHidden";var Root=VisuallyHidden,[createTooltipContext,createTooltipScope]=(0,react_context_dist.A)("Tooltip",[react_popper_dist.Bk]),usePopperScope=(0,react_popper_dist.Bk)(),DEFAULT_DELAY_DURATION=700,[TooltipProviderContextProvider,useTooltipProviderContext]=createTooltipContext("TooltipProvider"),TooltipProvider=props=>{const{__scopeTooltip,delayDuration=DEFAULT_DELAY_DURATION,skipDelayDuration=300,disableHoverableContent=!1,children}=props,[isOpenDelayed,setIsOpenDelayed]=react.useState(!0),isPointerInTransitRef=react.useRef(!1),skipDelayTimerRef=react.useRef(0);return react.useEffect((()=>{const skipDelayTimer=skipDelayTimerRef.current;return()=>window.clearTimeout(skipDelayTimer)}),[]),(0,jsx_runtime.jsx)(TooltipProviderContextProvider,{scope:__scopeTooltip,isOpenDelayed,delayDuration,onOpen:react.useCallback((()=>{window.clearTimeout(skipDelayTimerRef.current),setIsOpenDelayed(!1)}),[]),onClose:react.useCallback((()=>{window.clearTimeout(skipDelayTimerRef.current),skipDelayTimerRef.current=window.setTimeout((()=>setIsOpenDelayed(!0)),skipDelayDuration)}),[skipDelayDuration]),isPointerInTransitRef,onPointerInTransitChange:react.useCallback((inTransit=>{isPointerInTransitRef.current=inTransit}),[]),disableHoverableContent,children})};TooltipProvider.displayName="TooltipProvider";var[TooltipContextProvider,useTooltipContext]=createTooltipContext("Tooltip"),Tooltip=props=>{const{__scopeTooltip,children,open:openProp,defaultOpen=!1,onOpenChange,disableHoverableContent:disableHoverableContentProp,delayDuration:delayDurationProp}=props,providerContext=useTooltipProviderContext("Tooltip",props.__scopeTooltip),popperScope=usePopperScope(__scopeTooltip),[trigger,setTrigger]=react.useState(null),contentId=(0,react_id_dist.B)(),openTimerRef=react.useRef(0),disableHoverableContent=disableHoverableContentProp??providerContext.disableHoverableContent,delayDuration=delayDurationProp??providerContext.delayDuration,wasOpenDelayedRef=react.useRef(!1),[open=!1,setOpen]=(0,react_use_controllable_state_dist.i)({prop:openProp,defaultProp:defaultOpen,onChange:open2=>{open2?(providerContext.onOpen(),document.dispatchEvent(new CustomEvent("tooltip.open"))):providerContext.onClose(),onOpenChange?.(open2)}}),stateAttribute=react.useMemo((()=>open?wasOpenDelayedRef.current?"delayed-open":"instant-open":"closed"),[open]),handleOpen=react.useCallback((()=>{window.clearTimeout(openTimerRef.current),wasOpenDelayedRef.current=!1,setOpen(!0)}),[setOpen]),handleClose=react.useCallback((()=>{window.clearTimeout(openTimerRef.current),setOpen(!1)}),[setOpen]),handleDelayedOpen=react.useCallback((()=>{window.clearTimeout(openTimerRef.current),openTimerRef.current=window.setTimeout((()=>{wasOpenDelayedRef.current=!0,setOpen(!0)}),delayDuration)}),[delayDuration,setOpen]);return react.useEffect((()=>()=>window.clearTimeout(openTimerRef.current)),[]),(0,jsx_runtime.jsx)(react_popper_dist.bL,{...popperScope,children:(0,jsx_runtime.jsx)(TooltipContextProvider,{scope:__scopeTooltip,contentId,open,stateAttribute,trigger,onTriggerChange:setTrigger,onTriggerEnter:react.useCallback((()=>{providerContext.isOpenDelayed?handleDelayedOpen():handleOpen()}),[providerContext.isOpenDelayed,handleDelayedOpen,handleOpen]),onTriggerLeave:react.useCallback((()=>{disableHoverableContent?handleClose():window.clearTimeout(openTimerRef.current)}),[handleClose,disableHoverableContent]),onOpen:handleOpen,onClose:handleClose,disableHoverableContent,children})})};Tooltip.displayName="Tooltip";var TooltipTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeTooltip,...triggerProps}=props,context=useTooltipContext("TooltipTrigger",__scopeTooltip),providerContext=useTooltipProviderContext("TooltipTrigger",__scopeTooltip),popperScope=usePopperScope(__scopeTooltip),ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref,context.onTriggerChange),isPointerDownRef=react.useRef(!1),hasPointerMoveOpenedRef=react.useRef(!1),handlePointerUp=react.useCallback((()=>isPointerDownRef.current=!1),[]);return react.useEffect((()=>()=>document.removeEventListener("pointerup",handlePointerUp)),[handlePointerUp]),(0,jsx_runtime.jsx)(react_popper_dist.Mz,{asChild:!0,...popperScope,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{"aria-describedby":context.open?context.contentId:void 0,"data-state":context.stateAttribute,...triggerProps,ref:composedRefs,onPointerMove:(0,dist.m)(props.onPointerMove,(event=>{"touch"!==event.pointerType&&(hasPointerMoveOpenedRef.current||providerContext.isPointerInTransitRef.current||(context.onTriggerEnter(),hasPointerMoveOpenedRef.current=!0))})),onPointerLeave:(0,dist.m)(props.onPointerLeave,(()=>{context.onTriggerLeave(),hasPointerMoveOpenedRef.current=!1})),onPointerDown:(0,dist.m)(props.onPointerDown,(()=>{isPointerDownRef.current=!0,document.addEventListener("pointerup",handlePointerUp,{once:!0})})),onFocus:(0,dist.m)(props.onFocus,(()=>{isPointerDownRef.current||context.onOpen()})),onBlur:(0,dist.m)(props.onBlur,context.onClose),onClick:(0,dist.m)(props.onClick,context.onClose)})})}));TooltipTrigger.displayName="TooltipTrigger";var[PortalProvider,usePortalContext]=createTooltipContext("TooltipPortal",{forceMount:void 0}),TooltipPortal=props=>{const{__scopeTooltip,forceMount,children,container}=props,context=useTooltipContext("TooltipPortal",__scopeTooltip);return(0,jsx_runtime.jsx)(PortalProvider,{scope:__scopeTooltip,forceMount,children:(0,jsx_runtime.jsx)(react_presence_dist.C,{present:forceMount||context.open,children:(0,jsx_runtime.jsx)(react_portal_dist.Z,{asChild:!0,container,children})})})};TooltipPortal.displayName="TooltipPortal";var TooltipContent=react.forwardRef(((props,forwardedRef)=>{const portalContext=usePortalContext("TooltipContent",props.__scopeTooltip),{forceMount=portalContext.forceMount,side="top",...contentProps}=props,context=useTooltipContext("TooltipContent",props.__scopeTooltip);return(0,jsx_runtime.jsx)(react_presence_dist.C,{present:forceMount||context.open,children:context.disableHoverableContent?(0,jsx_runtime.jsx)(TooltipContentImpl,{side,...contentProps,ref:forwardedRef}):(0,jsx_runtime.jsx)(TooltipContentHoverable,{side,...contentProps,ref:forwardedRef})})})),TooltipContentHoverable=react.forwardRef(((props,forwardedRef)=>{const context=useTooltipContext("TooltipContent",props.__scopeTooltip),providerContext=useTooltipProviderContext("TooltipContent",props.__scopeTooltip),ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref),[pointerGraceArea,setPointerGraceArea]=react.useState(null),{trigger,onClose}=context,content=ref.current,{onPointerInTransitChange}=providerContext,handleRemoveGraceArea=react.useCallback((()=>{setPointerGraceArea(null),onPointerInTransitChange(!1)}),[onPointerInTransitChange]),handleCreateGraceArea=react.useCallback(((event,hoverTarget)=>{const currentTarget=event.currentTarget,exitPoint={x:event.clientX,y:event.clientY},paddedExitPoints=function getPaddedExitPoints(exitPoint,exitSide,padding=5){const paddedExitPoints=[];switch(exitSide){case"top":paddedExitPoints.push({x:exitPoint.x-padding,y:exitPoint.y+padding},{x:exitPoint.x+padding,y:exitPoint.y+padding});break;case"bottom":paddedExitPoints.push({x:exitPoint.x-padding,y:exitPoint.y-padding},{x:exitPoint.x+padding,y:exitPoint.y-padding});break;case"left":paddedExitPoints.push({x:exitPoint.x+padding,y:exitPoint.y-padding},{x:exitPoint.x+padding,y:exitPoint.y+padding});break;case"right":paddedExitPoints.push({x:exitPoint.x-padding,y:exitPoint.y-padding},{x:exitPoint.x-padding,y:exitPoint.y+padding})}return paddedExitPoints}(exitPoint,function getExitSideFromRect(point,rect){const top=Math.abs(rect.top-point.y),bottom=Math.abs(rect.bottom-point.y),right=Math.abs(rect.right-point.x),left=Math.abs(rect.left-point.x);switch(Math.min(top,bottom,right,left)){case left:return"left";case right:return"right";case top:return"top";case bottom:return"bottom";default:throw new Error("unreachable")}}(exitPoint,currentTarget.getBoundingClientRect())),graceArea=function getHull(points){const newPoints=points.slice();return newPoints.sort(((a,b)=>a.x<b.x?-1:a.x>b.x?1:a.y<b.y?-1:a.y>b.y?1:0)),function getHullPresorted(points){if(points.length<=1)return points.slice();const upperHull=[];for(let i=0;i<points.length;i++){const p=points[i];for(;upperHull.length>=2;){const q=upperHull[upperHull.length-1],r=upperHull[upperHull.length-2];if(!((q.x-r.x)*(p.y-r.y)>=(q.y-r.y)*(p.x-r.x)))break;upperHull.pop()}upperHull.push(p)}upperHull.pop();const lowerHull=[];for(let i=points.length-1;i>=0;i--){const p=points[i];for(;lowerHull.length>=2;){const q=lowerHull[lowerHull.length-1],r=lowerHull[lowerHull.length-2];if(!((q.x-r.x)*(p.y-r.y)>=(q.y-r.y)*(p.x-r.x)))break;lowerHull.pop()}lowerHull.push(p)}return lowerHull.pop(),1===upperHull.length&&1===lowerHull.length&&upperHull[0].x===lowerHull[0].x&&upperHull[0].y===lowerHull[0].y?upperHull:upperHull.concat(lowerHull)}(newPoints)}([...paddedExitPoints,...function getPointsFromRect(rect){const{top,right,bottom,left}=rect;return[{x:left,y:top},{x:right,y:top},{x:right,y:bottom},{x:left,y:bottom}]}(hoverTarget.getBoundingClientRect())]);setPointerGraceArea(graceArea),onPointerInTransitChange(!0)}),[onPointerInTransitChange]);return react.useEffect((()=>()=>handleRemoveGraceArea()),[handleRemoveGraceArea]),react.useEffect((()=>{if(trigger&&content){const handleTriggerLeave=event=>handleCreateGraceArea(event,content),handleContentLeave=event=>handleCreateGraceArea(event,trigger);return trigger.addEventListener("pointerleave",handleTriggerLeave),content.addEventListener("pointerleave",handleContentLeave),()=>{trigger.removeEventListener("pointerleave",handleTriggerLeave),content.removeEventListener("pointerleave",handleContentLeave)}}}),[trigger,content,handleCreateGraceArea,handleRemoveGraceArea]),react.useEffect((()=>{if(pointerGraceArea){const handleTrackPointerGrace=event=>{const target=event.target,pointerPosition={x:event.clientX,y:event.clientY},hasEnteredTarget=trigger?.contains(target)||content?.contains(target),isPointerOutsideGraceArea=!function isPointInPolygon(point,polygon){const{x,y}=point;let inside=!1;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const xi=polygon[i].x,yi=polygon[i].y,xj=polygon[j].x,yj=polygon[j].y;yi>y!=yj>y&&x<(xj-xi)*(y-yi)/(yj-yi)+xi&&(inside=!inside)}return inside}(pointerPosition,pointerGraceArea);hasEnteredTarget?handleRemoveGraceArea():isPointerOutsideGraceArea&&(handleRemoveGraceArea(),onClose())};return document.addEventListener("pointermove",handleTrackPointerGrace),()=>document.removeEventListener("pointermove",handleTrackPointerGrace)}}),[trigger,content,pointerGraceArea,onClose,handleRemoveGraceArea]),(0,jsx_runtime.jsx)(TooltipContentImpl,{...props,ref:composedRefs})})),[VisuallyHiddenContentContextProvider,useVisuallyHiddenContentContext]=createTooltipContext("Tooltip",{isInside:!1}),TooltipContentImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeTooltip,children,"aria-label":ariaLabel,onEscapeKeyDown,onPointerDownOutside,...contentProps}=props,context=useTooltipContext("TooltipContent",__scopeTooltip),popperScope=usePopperScope(__scopeTooltip),{onClose}=context;return react.useEffect((()=>(document.addEventListener("tooltip.open",onClose),()=>document.removeEventListener("tooltip.open",onClose))),[onClose]),react.useEffect((()=>{if(context.trigger){const handleScroll=event=>{const target=event.target;target?.contains(context.trigger)&&onClose()};return window.addEventListener("scroll",handleScroll,{capture:!0}),()=>window.removeEventListener("scroll",handleScroll,{capture:!0})}}),[context.trigger,onClose]),(0,jsx_runtime.jsx)(react_dismissable_layer_dist.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside:event=>event.preventDefault(),onDismiss:onClose,children:(0,jsx_runtime.jsxs)(react_popper_dist.UC,{"data-state":context.stateAttribute,...popperScope,...contentProps,ref:forwardedRef,style:{...contentProps.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,jsx_runtime.jsx)(react_slot_dist.xV,{children}),(0,jsx_runtime.jsx)(VisuallyHiddenContentContextProvider,{scope:__scopeTooltip,isInside:!0,children:(0,jsx_runtime.jsx)(Root,{id:context.contentId,role:"tooltip",children:ariaLabel||children})})]})})}));TooltipContent.displayName="TooltipContent";var TooltipArrow=react.forwardRef(((props,forwardedRef)=>{const{__scopeTooltip,...arrowProps}=props,popperScope=usePopperScope(__scopeTooltip);return useVisuallyHiddenContentContext("TooltipArrow",__scopeTooltip).isInside?null:(0,jsx_runtime.jsx)(react_popper_dist.i3,{...popperScope,...arrowProps,ref:forwardedRef})}));TooltipArrow.displayName="TooltipArrow";var Provider=TooltipProvider,Root3=Tooltip,Trigger=TooltipTrigger,Portal=TooltipPortal,Content2=TooltipContent,Arrow2=TooltipArrow},"./libs/webb-ui-components/src/stories/molecules/Tooltip.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/webb-ui-components/src/components/Tooltip/index.ts"),_components_Chip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/webb-ui-components/src/components/Chip/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Tooltip",component:_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__.m_};var Default=function Template(){return __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__.m_,{isDefaultOpen:!0},__jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__.k$,null,__jsx(_components_Chip__WEBPACK_IMPORTED_MODULE_2__.v,{color:"blue"},"Text only")),__jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__.SK,null,__jsx("span",null,"A report of a DKG authority misbehaving. (Body xs Regular)")))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'() => <Tooltip isDefaultOpen>\n    <TooltipTrigger>\n      <Chip color="blue">Text only</Chip>\n    </TooltipTrigger>\n    <TooltipBody>\n      <span>A report of a DKG authority misbehaving. (Body xs Regular)</span>\n    </TooltipBody>\n  </Tooltip>',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./libs/webb-ui-components/src/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),classNames={blue:{active:"text-blue-90 bg-blue-10 dark:text-blue-30 dark:bg-blue-120",disabled:"bg-blue-10 text-blue-40 dark:bg-blue-120 dark:text-blue-90",selected:"border-solid border-2 border-blue-90 dark:border-blue-30"},green:{active:"bg-green-10 text-green-90 dark:bg-green-120 dark:text-green-50",disabled:"bg-green-10 text-green-40 dark:bg-green-120 dark:text-green-90",selected:"border-solid border-2 border-green-90 dark:border-green-50"},purple:{active:"bg-purple-10 text-purple-90 dark:bg-purple-120 dark:text-purple-50",disabled:"bg-purple-10 text-purple-40 dark:bg-purple-120 dark:text-purple-90",selected:"border-solid border-2 border-purple-90 dark:border-purple-50"},red:{active:"bg-red-10 text-red-90 dark:bg-red-120 dark:text-red-50",disabled:"bg-red-10 text-red-40 dark:bg-red-120 dark:text-red-90",selected:"border-solid border-2 border-red-90 dark:border-red-50"},yellow:{active:"bg-yellow-10 text-yellow-90 dark:bg-yellow-120 dark:text-yellow-50",disabled:"bg-yellow-10 text-yellow-40 dark:bg-yellow-120 dark:text-yellow-90",selected:"border-solid border-2 border-yellow-90 dark:border-yellow-30"},grey:{active:"bg-inherit text-mono-120 dark:inherit dark:text-mono-80",disabled:"bg-mono-200/[5%] text-mono-160 dark:bg-mono-0/[5%] dark:text-mono-0",selected:"border-solid border-2 border-mono-120 dark:border-mono-80"},"dark-grey":{active:"bg-mono-100 dark:bg-mono-140 !text-mono-0",disabled:"!opacity-50",selected:"border-solid border-2 border-mono-120 dark:border-mono-80"}};var _excluded=["children","className","color","isDisabled","isSelected"],__jsx=react.createElement,Chip=react.forwardRef((function(props,ref){var children=props.children,classNameProp=props.className,_props$color=props.color,color=void 0===_props$color?"green":_props$color,isDisabled=props.isDisabled,isSelected=props.isSelected,restProps=objectWithoutProperties_default()(props,_excluded),baseClsx=(0,react.useMemo)((function(){return"box-border inline-flex items-center gap-2 px-3 py-1.5 rounded-full uppercase text-[12px] leading-[15px] font-bold"}),[]),className=(0,react.useMemo)((function(){var _getChipClassName=function getChipClassName(color,isDisabled,isSelected){var _classNames$color=classNames[color],active=_classNames$color.active,disabled=_classNames$color.disabled,selected=_classNames$color.selected;return{activeOrDisable:isDisabled?disabled:active,selected:isSelected?selected:""}}(color,isDisabled,isSelected),activeOrDisable=_getChipClassName.activeOrDisable,selected=_getChipClassName.selected;return(0,bundle_mjs.QP)(baseClsx,activeOrDisable,selected,classNameProp)}),[baseClsx,color,isDisabled,isSelected,classNameProp]);return __jsx("span",extends_default()({className},restProps,{ref}),children)}));Chip.__docgenInfo={description:'The `Chip` component\n\nProps:\n\n- `color`: The visual style of the badge (default: "green")\n- `isDisabled`: If `true`, the chip will display as disabled state\n\n@example\n\n```jsx\n <Chip>Active</Chip>\n <Chip color="red" isDisabled>Disabled</Chip>\n```',methods:[],displayName:"Chip"}},"./libs/webb-ui-components/src/components/Chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>_Chip__WEBPACK_IMPORTED_MODULE_0__.v});var _Chip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/components/Chip/Chip.tsx")},"./libs/webb-ui-components/src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SK:()=>TooltipBody,k$:()=>TooltipTrigger,m_:()=>Tooltip});var _home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),tailwind_merge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_excluded=["button","children","className","title","isDisablePortal"],_excluded2=["children","className"],_excluded3=["children","isDefaultOpen","isDisableHoverableContent","isOpen","onChange","delayDuration"],__jsx=react__WEBPACK_IMPORTED_MODULE_2__.createElement,TooltipBody=function TooltipBody(_ref){var button=_ref.button,children=_ref.children,className=_ref.className,title=_ref.title,isDisablePortal=_ref.isDisablePortal,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref,_excluded),inner=__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.UC,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({sideOffset:4,className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("radix-side-top:animate-slide-down-fade","radix-side-right:animate-slide-left-fade","radix-side-bottom:animate-slide-up-fade","radix-side-left:animate-slide-right-fade","inline-flex items-center break-all rounded p-2","bg-mono-20 dark:bg-mono-160","webb-shadow-sm z-[9999]")},props),__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.i3,{className:"fill-current text-mono-20 dark:text-mono-160 webb-shadow-sm"}),__jsx("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.QP)("body4 text-mono-140 dark:text-mono-80 font-normal min-w-0 max-w-[300px]",className)},title&&__jsx("h6",{className:"mb-2 utility"},title),children,button&&__jsx("div",{className:"flex justify-end mt-4"},button)));return isDisablePortal?inner:__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.ZL,null,inner)},TooltipTrigger=function TooltipTrigger(_ref2){var children=_ref2.children,className=_ref2.className,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2,_excluded2);return __jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.l9,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({className},props),children)},Tooltip=function Tooltip(_ref3){var children=_ref3.children,isDefaultOpen=_ref3.isDefaultOpen,isDisableHoverableContent=_ref3.isDisableHoverableContent,isOpen=_ref3.isOpen,onChange=_ref3.onChange,_ref3$delayDuration=_ref3.delayDuration,delayDuration=void 0===_ref3$delayDuration?100:_ref3$delayDuration,props=_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref3,_excluded3);return __jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.Kq,null,__jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.bL,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({},props,{defaultOpen:isDefaultOpen,open:isOpen,onOpenChange:onChange,disableHoverableContent:isDisableHoverableContent,delayDuration}),children))};TooltipBody.__docgenInfo={description:"The `ToolTipBody` component, use after the `TooltipTrigger`.\nReresents the popup content of the tooltip.\nMust use inside the `Tooltip` component.\n\n@example\n\n```jsx\n   <ToolTipBody className='max-w-[185px] w-auto'>\n     <span>A report of a DKG authority misbehaving. (Body xs Regular)</span>\n   </ToolTipBody>\n```",methods:[],displayName:"TooltipBody"},TooltipTrigger.__docgenInfo={description:"The `TooltipTrigger` component, wrap around a trigger component like `Button` or `Chip` or a html tag.\nMust use inside the `Tooltip` component.\n\n@example\n\n```jsx\n   <ToolTipTrigger>\n     <Chip color='blue'>Text only</Chip>\n   </ToolTipTrigger>\n```",methods:[],displayName:"TooltipTrigger"},Tooltip.__docgenInfo={description:"The `Tooltip` component.\n\n@example\n\n```jsx\n   <Tooltip isDefaultOpen>\n     <ToolTipTrigger>\n       <Chip color='blue'>Text only</Chip>\n     </ToolTipTrigger>\n     <ToolTipBody className='max-w-[185px] w-auto'>\n       <span>A report of a DKG authority misbehaving. (Body xs Regular)</span>\n     </ToolTipBody>\n   </Tooltip>\n```",methods:[],displayName:"Tooltip",props:{delayDuration:{defaultValue:{value:"100",computed:!1},required:!1}}}},"./libs/webb-ui-components/src/components/Tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SK:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.SK,k$:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.k$,m_:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.m_});var _Tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/components/Tooltip/Tooltip.tsx")},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js":module=>{function _extends(){return module.exports=_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports,_extends.apply(this,arguments)}module.exports=_extends,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":module=>{module.exports=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target},module.exports.__esModule=!0,module.exports.default=module.exports}}]);
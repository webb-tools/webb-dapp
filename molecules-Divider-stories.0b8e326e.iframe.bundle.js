(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[6946],{"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-separator/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),DEFAULT_ORIENTATION="horizontal",ORIENTATIONS=["horizontal","vertical"],Separator=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{decorative,orientation:orientationProp=DEFAULT_ORIENTATION,...domProps}=props,orientation=function isValidOrientation(orientation){return ORIENTATIONS.includes(orientation)}(orientationProp)?orientationProp:DEFAULT_ORIENTATION,semanticProps=decorative?{role:"none"}:{"aria-orientation":"vertical"===orientation?orientation:void 0,role:"separator"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.div,{"data-orientation":orientation,...semanticProps,...domProps,ref:forwardedRef})}));Separator.displayName="Separator";var Root=Separator},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./libs/webb-ui-components/src/stories/molecules/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_Divider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/webb-ui-components/src/components/Divider/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Divider",component:_components_Divider__WEBPACK_IMPORTED_MODULE_1__.c};var Default=function Template(){return __jsx(_components_Divider__WEBPACK_IMPORTED_MODULE_1__.c,null)}.bind({});Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"() => <Divider />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./libs/webb-ui-components/src/components/Divider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-separator/dist/index.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),_excluded=["className"],__jsx=react.createElement,Divider=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,props=objectWithoutProperties_default()(_ref,_excluded);return __jsx(dist.b,extends_default()({},props,{className:(0,bundle_mjs.QP)("bg-mono-40","radix-orientation-horizontal:h-[1px] radix-orientation-horizontal:w-full","radix-orientation-vertical:h-full radix-orientation-vertical:w-[1px]",className),ref}))}));Divider.__docgenInfo={description:"",methods:[],displayName:"Divider"}},"./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js":module=>{function _extends(){return module.exports=_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports,_extends.apply(this,arguments)}module.exports=_extends,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":module=>{module.exports=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target},module.exports.__esModule=!0,module.exports.default=module.exports}}]);
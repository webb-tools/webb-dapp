(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[8961],{"./libs/webb-ui-components/src/stories/molecules/Chip.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Secondary_parameters,_Secondary_parameters_docs,_Secondary_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_Chip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/webb-ui-components/src/components/Chip/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Chip",component:_components_Chip__WEBPACK_IMPORTED_MODULE_1__.v};var Template=function Template(args){return __jsx(_components_Chip__WEBPACK_IMPORTED_MODULE_1__.v,args,"Active")},Primary=Template.bind({});Primary.args={color:"yellow",isDisabled:!1};var Secondary=Template.bind({});Secondary.args={color:"green",isDisabled:!0},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"args => <Chip {...args}>Active</Chip>",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary_parameters=Secondary.parameters)||void 0===_Secondary_parameters?void 0:_Secondary_parameters.docs,source:{originalSource:"args => <Chip {...args}>Active</Chip>",...null===(_Secondary_parameters1=Secondary.parameters)||void 0===_Secondary_parameters1||null===(_Secondary_parameters_docs=_Secondary_parameters1.docs)||void 0===_Secondary_parameters_docs?void 0:_Secondary_parameters_docs.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./libs/webb-ui-components/src/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),classNames={blue:{active:"text-blue-90 bg-blue-10 dark:text-blue-30 dark:bg-blue-120",disabled:"bg-blue-10 text-blue-40 dark:bg-blue-120 dark:text-blue-90",selected:"border-solid border-2 border-blue-90 dark:border-blue-30"},green:{active:"bg-green-10 text-green-90 dark:bg-green-120 dark:text-green-50",disabled:"bg-green-10 text-green-40 dark:bg-green-120 dark:text-green-90",selected:"border-solid border-2 border-green-90 dark:border-green-50"},purple:{active:"bg-purple-10 text-purple-90 dark:bg-purple-120 dark:text-purple-50",disabled:"bg-purple-10 text-purple-40 dark:bg-purple-120 dark:text-purple-90",selected:"border-solid border-2 border-purple-90 dark:border-purple-50"},red:{active:"bg-red-10 text-red-90 dark:bg-red-120 dark:text-red-50",disabled:"bg-red-10 text-red-40 dark:bg-red-120 dark:text-red-90",selected:"border-solid border-2 border-red-90 dark:border-red-50"},yellow:{active:"bg-yellow-10 text-yellow-90 dark:bg-yellow-120 dark:text-yellow-50",disabled:"bg-yellow-10 text-yellow-40 dark:bg-yellow-120 dark:text-yellow-90",selected:"border-solid border-2 border-yellow-90 dark:border-yellow-30"},grey:{active:"bg-inherit text-mono-120 dark:inherit dark:text-mono-80",disabled:"bg-mono-200/[5%] text-mono-160 dark:bg-mono-0/[5%] dark:text-mono-0",selected:"border-solid border-2 border-mono-120 dark:border-mono-80"},"dark-grey":{active:"bg-mono-100 dark:bg-mono-140 !text-mono-0",disabled:"!opacity-50",selected:"border-solid border-2 border-mono-120 dark:border-mono-80"}};var _excluded=["children","className","color","isDisabled","isSelected"],__jsx=react.createElement,Chip=react.forwardRef((function(props,ref){var children=props.children,classNameProp=props.className,_props$color=props.color,color=void 0===_props$color?"green":_props$color,isDisabled=props.isDisabled,isSelected=props.isSelected,restProps=objectWithoutProperties_default()(props,_excluded),baseClsx=(0,react.useMemo)((function(){return"box-border inline-flex items-center gap-2 px-3 py-1.5 rounded-full uppercase text-[12px] leading-[15px] font-bold"}),[]),className=(0,react.useMemo)((function(){var _getChipClassName=function getChipClassName(color,isDisabled,isSelected){var _classNames$color=classNames[color],active=_classNames$color.active,disabled=_classNames$color.disabled,selected=_classNames$color.selected;return{activeOrDisable:isDisabled?disabled:active,selected:isSelected?selected:""}}(color,isDisabled,isSelected),activeOrDisable=_getChipClassName.activeOrDisable,selected=_getChipClassName.selected;return(0,bundle_mjs.QP)(baseClsx,activeOrDisable,selected,classNameProp)}),[baseClsx,color,isDisabled,isSelected,classNameProp]);return __jsx("span",extends_default()({className},restProps,{ref}),children)}));Chip.__docgenInfo={description:'The `Chip` component\n\nProps:\n\n- `color`: The visual style of the badge (default: "green")\n- `isDisabled`: If `true`, the chip will display as disabled state\n\n@example\n\n```jsx\n <Chip>Active</Chip>\n <Chip color="red" isDisabled>Disabled</Chip>\n```',methods:[],displayName:"Chip"}},"./libs/webb-ui-components/src/components/Chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>_Chip__WEBPACK_IMPORTED_MODULE_0__.v});var _Chip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/components/Chip/Chip.tsx")},"./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js":module=>{function _extends(){return module.exports=_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports,_extends.apply(this,arguments)}module.exports=_extends,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":module=>{module.exports=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target},module.exports.__esModule=!0,module.exports.default=module.exports}}]);
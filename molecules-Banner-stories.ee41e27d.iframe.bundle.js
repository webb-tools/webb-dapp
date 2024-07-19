(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[3713],{"./libs/webb-ui-components/src/stories/molecules/Banner.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BridgeDapp:()=>BridgeDapp,StatsDapp:()=>StatsDapp,WithoutButton:()=>WithoutButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BridgeDapp_parameters,_BridgeDapp_parameters_docs,_BridgeDapp_parameters1,_StatsDapp_parameters,_StatsDapp_parameters_docs,_StatsDapp_parameters1,_WithoutButton_parameters,_WithoutButton_parameters_docs,_WithoutButton_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__),_components_Banner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/webb-ui-components/src/components/Banner/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Banner",component:_components_Banner__WEBPACK_IMPORTED_MODULE_2__.l};var Template=function Template(args){return __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_2__.l,args)},BridgeDapp=Template.bind({});BridgeDapp.args={dappName:"bridge",bannerText:"Hubble Bridge is in beta version.",buttonText:"Report Bug",onClose:lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()};var StatsDapp=Template.bind({});StatsDapp.args={dappName:"stats",bannerText:"Stats dApp is in beta version.",buttonText:"Report Bug",onClose:lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()};var WithoutButton=Template.bind({});WithoutButton.args={dappName:"bridge",bannerText:"Hubble Bridge is in beta version.",onClose:lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()},BridgeDapp.parameters={...BridgeDapp.parameters,docs:{...null===(_BridgeDapp_parameters=BridgeDapp.parameters)||void 0===_BridgeDapp_parameters?void 0:_BridgeDapp_parameters.docs,source:{originalSource:"args => <Banner {...args} />",...null===(_BridgeDapp_parameters1=BridgeDapp.parameters)||void 0===_BridgeDapp_parameters1||null===(_BridgeDapp_parameters_docs=_BridgeDapp_parameters1.docs)||void 0===_BridgeDapp_parameters_docs?void 0:_BridgeDapp_parameters_docs.source}}},StatsDapp.parameters={...StatsDapp.parameters,docs:{...null===(_StatsDapp_parameters=StatsDapp.parameters)||void 0===_StatsDapp_parameters?void 0:_StatsDapp_parameters.docs,source:{originalSource:"args => <Banner {...args} />",...null===(_StatsDapp_parameters1=StatsDapp.parameters)||void 0===_StatsDapp_parameters1||null===(_StatsDapp_parameters_docs=_StatsDapp_parameters1.docs)||void 0===_StatsDapp_parameters_docs?void 0:_StatsDapp_parameters_docs.source}}},WithoutButton.parameters={...WithoutButton.parameters,docs:{...null===(_WithoutButton_parameters=WithoutButton.parameters)||void 0===_WithoutButton_parameters?void 0:_WithoutButton_parameters.docs,source:{originalSource:"args => <Banner {...args} />",...null===(_WithoutButton_parameters1=WithoutButton.parameters)||void 0===_WithoutButton_parameters1||null===(_WithoutButton_parameters_docs=_WithoutButton_parameters1.docs)||void 0===_WithoutButton_parameters_docs?void 0:_WithoutButton_parameters_docs.source}}};const __namedExportsOrder=["BridgeDapp","StatsDapp","WithoutButton"]},"./libs/webb-ui-components/src/components/Banner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>Banner});var helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),Close=__webpack_require__("./libs/icons/src/Close.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),typography=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),buttons=__webpack_require__("./libs/webb-ui-components/src/components/buttons/index.ts"),__jsx=react.createElement,Banner=react.forwardRef((function(props,ref){var onClose=props.onClose,buttonText=props.buttonText,buttonProps=props.buttonProps,buttonClassNameProp=props.buttonClassName,bannerClassNameProp=props.className,Icon=props.Icon,bannerText=props.bannerText,bannerBaseClx=(0,react.useMemo)((function(){return"flex justify-between gap-2 w-full items-center px-7 py-2 bg-blue-10 dark:bg-blue-120"}),[]),bannerClassName=(0,react.useMemo)((function(){return(0,bundle_mjs.QP)(bannerBaseClx,bannerClassNameProp)}),[bannerBaseClx,bannerClassNameProp]),buttonBaseClx=(0,react.useMemo)((function(){return"ml-2 py-2 px-3 rounded-lg uppercase bg-mono-0 dark:bg-mono-0 text-blue-70 dark:text-blue-120 hover:bg-mono-0 hover:dark:bg-mono-0 border-none"}),[]),buttonClassName=(0,react.useMemo)((function(){return(0,bundle_mjs.QP)(buttonBaseClx,buttonClassNameProp)}),[buttonBaseClx,buttonClassNameProp]);return __jsx("div",{className:bannerClassName,ref},__jsx("span",null),__jsx("span",{className:"flex items-center gap-2"},__jsx("span",null,__jsx(Icon,{size:"lg",className:"fill-blue-70 dark:fill-mono-0"})),__jsx(typography.o,{variant:"body1",fw:"bold",className:"text-blue-70 dark:text-mono-0"},bannerText),buttonText&&__jsx(buttons.Button,extends_default()({},buttonProps,{variant:"utility",size:"sm",className:buttonClassName}),buttonText)),__jsx("span",{onClick:onClose,className:"cursor-pointer"},__jsx(Close.b,{size:"lg",className:"fill-blue-70 dark:fill-mono-0"})))}));Banner.__docgenInfo={description:"The `Banner` component\n\n- `onClose`: Callback function when the close icon is clicked - this will close the banner\n- `Icon`: The icon to be displayed on the left side of the banner\n- `bannerText`: The text to display on the banner\n- `buttonProps`: `Optional`. The button props to pass into the Button component\n- `buttonText`: `Optional`. The text to display on the button\n- `buttonClassName`: `Optional`. The class name to pass into the button\n\n```jsx\n      <Banner Icon={Box1Line} bannerText='Hubble Bridge is in beta version.' buttonText='Report Bug' onClose={onCloseHandler}>\n  </Banner>\n```",methods:[],displayName:"Banner"}},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./node_modules/next/dist/compiled/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/viem/_esm/utils/data/isHex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isHex(value,{strict=!0}={}){return!!value&&("string"==typeof value&&(strict?/^0x[0-9a-fA-F]*$/.test(value):value.startsWith("0x")))}__webpack_require__.d(__webpack_exports__,{q:()=>isHex})}}]);
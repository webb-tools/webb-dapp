(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[7089],{"./node_modules/@radix-ui/react-separator/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),DEFAULT_ORIENTATION="horizontal",ORIENTATIONS=["horizontal","vertical"],Separator=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{decorative,orientation:orientationProp=DEFAULT_ORIENTATION,...domProps}=props,orientation=function isValidOrientation(orientation){return ORIENTATIONS.includes(orientation)}(orientationProp)?orientationProp:DEFAULT_ORIENTATION,semanticProps=decorative?{role:"none"}:{"aria-orientation":"vertical"===orientation?orientation:void 0,role:"separator"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.div,{"data-orientation":orientation,...semanticProps,...domProps,ref:forwardedRef})}));Separator.displayName="Separator";var Root=Separator},"./libs/webb-ui-components/src/stories/molecules/AmountInput.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAmount:()=>WithAmount,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.push.js");var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_WithAmount_parameters,_WithAmount_parameters_docs,_WithAmount_parameters1,_WithTitle_parameters,_WithTitle_parameters_docs,_WithTitle_parameters1,_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_BridgeInputs_AmountInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/webb-ui-components/src/components/BridgeInputs/AmountInput.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_2__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_home_runner_work_webb_dapp_webb_dapp_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/AmountInput",component:_components_BridgeInputs_AmountInput__WEBPACK_IMPORTED_MODULE_3__.J};var Template=function Template(args){return __jsx(_components_BridgeInputs_AmountInput__WEBPACK_IMPORTED_MODULE_3__.J,args)},Default=Template.bind({});Default.args={id:"amount"};var WithAmount=Template.bind({});WithAmount.args={id:"amount",amount:"200"};var WithTitle=Template.bind({});WithAmount.args=_objectSpread(_objectSpread({},WithAmount.args),{},{title:"Enter Amount:"}),Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <AmountInput {...args} />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},WithAmount.parameters={...WithAmount.parameters,docs:{...null===(_WithAmount_parameters=WithAmount.parameters)||void 0===_WithAmount_parameters?void 0:_WithAmount_parameters.docs,source:{originalSource:"args => <AmountInput {...args} />",...null===(_WithAmount_parameters1=WithAmount.parameters)||void 0===_WithAmount_parameters1||null===(_WithAmount_parameters_docs=_WithAmount_parameters1.docs)||void 0===_WithAmount_parameters_docs?void 0:_WithAmount_parameters_docs.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...null===(_WithTitle_parameters=WithTitle.parameters)||void 0===_WithTitle_parameters?void 0:_WithTitle_parameters.docs,source:{originalSource:"args => <AmountInput {...args} />",...null===(_WithTitle_parameters1=WithTitle.parameters)||void 0===_WithTitle_parameters1||null===(_WithTitle_parameters_docs=_WithTitle_parameters1.docs)||void 0===_WithTitle_parameters_docs?void 0:_WithTitle_parameters_docs.source}}};const __namedExportsOrder=["Default","WithAmount","WithTitle"]},"./node_modules/@noble/hashes/esm/sha3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a0:()=>keccak_512,lY:()=>keccak_256});var _assert_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@noble/hashes/esm/_assert.js"),_u64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@noble/hashes/esm/_u64.js"),_utils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@noble/hashes/esm/utils.js");const SHA3_PI=[],SHA3_ROTL=[],_SHA3_IOTA=[],_0n=BigInt(0),_1n=BigInt(1),_2n=BigInt(2),_7n=BigInt(7),_256n=BigInt(256),_0x71n=BigInt(113);for(let round=0,R=_1n,x=1,y=0;round<24;round++){[x,y]=[y,(2*x+3*y)%5],SHA3_PI.push(2*(5*y+x)),SHA3_ROTL.push((round+1)*(round+2)/2%64);let t=_0n;for(let j=0;j<7;j++)R=(R<<_1n^(R>>_7n)*_0x71n)%_256n,R&_2n&&(t^=_1n<<(_1n<<BigInt(j))-_1n);_SHA3_IOTA.push(t)}const[SHA3_IOTA_H,SHA3_IOTA_L]=(0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.lD)(_SHA3_IOTA,!0),rotlH=(h,l,s)=>s>32?(0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.WM)(h,l,s):(0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.P5)(h,l,s),rotlL=(h,l,s)=>s>32?(0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.im)(h,l,s):(0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.B4)(h,l,s);class Keccak extends _utils_js__WEBPACK_IMPORTED_MODULE_1__.Vw{constructor(blockLen,suffix,outputLen,enableXOF=!1,rounds=24){if(super(),this.blockLen=blockLen,this.suffix=suffix,this.outputLen=outputLen,this.enableXOF=enableXOF,this.rounds=rounds,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.ai)(outputLen),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.DH)(this.state)}keccak(){_utils_js__WEBPACK_IMPORTED_MODULE_1__.qv||(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.Fc)(this.state32),function keccakP(s,rounds=24){const B=new Uint32Array(10);for(let round=24-rounds;round<24;round++){for(let x=0;x<10;x++)B[x]=s[x]^s[x+10]^s[x+20]^s[x+30]^s[x+40];for(let x=0;x<10;x+=2){const idx1=(x+8)%10,idx0=(x+2)%10,B0=B[idx0],B1=B[idx0+1],Th=rotlH(B0,B1,1)^B[idx1],Tl=rotlL(B0,B1,1)^B[idx1+1];for(let y=0;y<50;y+=10)s[x+y]^=Th,s[x+y+1]^=Tl}let curH=s[2],curL=s[3];for(let t=0;t<24;t++){const shift=SHA3_ROTL[t],Th=rotlH(curH,curL,shift),Tl=rotlL(curH,curL,shift),PI=SHA3_PI[t];curH=s[PI],curL=s[PI+1],s[PI]=Th,s[PI+1]=Tl}for(let y=0;y<50;y+=10){for(let x=0;x<10;x++)B[x]=s[y+x];for(let x=0;x<10;x++)s[y+x]^=~B[(x+2)%10]&B[(x+4)%10]}s[0]^=SHA3_IOTA_H[round],s[1]^=SHA3_IOTA_L[round]}B.fill(0)}(this.state32,this.rounds),_utils_js__WEBPACK_IMPORTED_MODULE_1__.qv||(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.Fc)(this.state32),this.posOut=0,this.pos=0}update(data){(0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.t2)(this);const{blockLen,state}=this,len=(data=(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ZJ)(data)).length;for(let pos=0;pos<len;){const take=Math.min(blockLen-this.pos,len-pos);for(let i=0;i<take;i++)state[this.pos++]^=data[pos++];this.pos===blockLen&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state,suffix,pos,blockLen}=this;state[pos]^=suffix,128&suffix&&pos===blockLen-1&&this.keccak(),state[blockLen-1]^=128,this.keccak()}writeInto(out){(0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.t2)(this,!1),(0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.ee)(out),this.finish();const bufferOut=this.state,{blockLen}=this;for(let pos=0,len=out.length;pos<len;){this.posOut>=blockLen&&this.keccak();const take=Math.min(blockLen-this.posOut,len-pos);out.set(bufferOut.subarray(this.posOut,this.posOut+take),pos),this.posOut+=take,pos+=take}return out}xofInto(out){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(out)}xof(bytes){return(0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.ai)(bytes),this.xofInto(new Uint8Array(bytes))}digestInto(out){if((0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.CG)(out,this),this.finished)throw new Error("digest() was already called");return this.writeInto(out),this.destroy(),out}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(to){const{blockLen,suffix,outputLen,rounds,enableXOF}=this;return to||(to=new Keccak(blockLen,suffix,outputLen,enableXOF,rounds)),to.state32.set(this.state32),to.pos=this.pos,to.posOut=this.posOut,to.finished=this.finished,to.rounds=rounds,to.suffix=suffix,to.outputLen=outputLen,to.enableXOF=enableXOF,to.destroyed=this.destroyed,to}}const gen=(suffix,blockLen,outputLen)=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ld)((()=>new Keccak(blockLen,suffix,outputLen))),keccak_256=gen(1,136,32),keccak_512=gen(1,72,64)},"./node_modules/core-js/modules/es.string.starts-with.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var descriptor,$=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),getOwnPropertyDescriptor=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,toLength=__webpack_require__("./node_modules/core-js/internals/to-length.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),notARegExp=__webpack_require__("./node_modules/core-js/internals/not-a-regexp.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),correctIsRegExpLogic=__webpack_require__("./node_modules/core-js/internals/correct-is-regexp-logic.js"),IS_PURE=__webpack_require__("./node_modules/core-js/internals/is-pure.js"),stringSlice=uncurryThis("".slice),min=Math.min,CORRECT_IS_REGEXP_LOGIC=correctIsRegExpLogic("startsWith");$({target:"String",proto:!0,forced:!!(IS_PURE||CORRECT_IS_REGEXP_LOGIC||(descriptor=getOwnPropertyDescriptor(String.prototype,"startsWith"),!descriptor||descriptor.writable))&&!CORRECT_IS_REGEXP_LOGIC},{startsWith:function startsWith(searchString){var that=toString(requireObjectCoercible(this));notARegExp(searchString);var index=toLength(min(arguments.length>1?arguments[1]:void 0,that.length)),search=toString(searchString);return stringSlice(that,index,index+search.length)===search}})},"./node_modules/next/dist/compiled/@babel/runtime/helpers/arrayLikeToArray.js":module=>{module.exports=function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/next/dist/compiled/@babel/runtime/helpers/unsupportedIterableToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayLikeToArray=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/arrayLikeToArray.js");module.exports=function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?arrayLikeToArray(o,minLen):void 0}},module.exports.__esModule=!0,module.exports.default=module.exports}}]);
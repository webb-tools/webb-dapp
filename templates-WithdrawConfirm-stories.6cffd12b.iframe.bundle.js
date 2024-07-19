"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[1369],{"./libs/webb-ui-components/src/stories/templates/WithdrawConfirm.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WithdrawConfirm_stories});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/storybook-addon-remix-react-router/dist/index.js"),helpers_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),src=__webpack_require__("./libs/icons/src/index.ts"),decimal=__webpack_require__("./node_modules/decimal.js/decimal.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),AmountInfo=__webpack_require__("./libs/webb-ui-components/src/containers/ConfirmationCard/AmountInfo.tsx"),Button=__webpack_require__("./libs/webb-ui-components/src/components/buttons/Button.tsx"),Chip=__webpack_require__("./libs/webb-ui-components/src/components/Chip/Chip.tsx"),Checkbox=__webpack_require__("./libs/webb-ui-components/src/components/CheckBox/Checkbox.tsx"),SteppedProgress=__webpack_require__("./libs/webb-ui-components/src/components/Progress/SteppedProgress.tsx"),SpendNoteInput=__webpack_require__("./libs/webb-ui-components/src/containers/ConfirmationCard/SpendNoteInput.tsx"),RefundAmount=__webpack_require__("./libs/webb-ui-components/src/containers/ConfirmationCard/RefundAmount.tsx"),TitleWithInfo=__webpack_require__("./libs/webb-ui-components/src/components/TitleWithInfo/TitleWithInfo.tsx"),typography=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),TxProgressor=__webpack_require__("./libs/webb-ui-components/src/components/TxProgressor/index.ts"),TxConfirmationRing=__webpack_require__("./libs/webb-ui-components/src/components/TxConfirmationRing/index.ts"),WrapperSection=__webpack_require__("./libs/webb-ui-components/src/containers/ConfirmationCard/WrapperSection.tsx"),utils=__webpack_require__("./libs/webb-ui-components/src/containers/ConfirmationCard/utils.ts"),_excluded=["actionBtnProps","amount","changeAmount","checkboxProps","className","fee","feeInfo","fungibleTokenSymbol","wrappableTokenSymbol","note","onClose","progress","totalProgress","receivingInfo","refundAmount","refundToken","relayerAddress","relayerAvatarTheme","txStatusMessage","txStatusColor","relayerExternalUrl","remainingAmount","title","sourceAddress","destAddress","sourceTypedChainId","destTypedChainId","poolAddress","poolExplorerUrl","newBalance","feesSection"],__jsx=react.createElement,WithdrawConfirm=(0,react.forwardRef)((function(_ref,ref){var _checkboxProps$childr,_actionBtnProps$child,actionBtnProps=_ref.actionBtnProps,amount=_ref.amount,changeAmount=_ref.changeAmount,checkboxProps=_ref.checkboxProps,className=_ref.className,token1Symbol=(_ref.fee,_ref.feeInfo,_ref.fungibleTokenSymbol),token2Symbol=_ref.wrappableTokenSymbol,note=_ref.note,onClose=_ref.onClose,progress=_ref.progress,totalProgress=_ref.totalProgress,refundAmount=(_ref.receivingInfo,_ref.refundAmount),refundToken=_ref.refundToken,txStatusMessage=(_ref.relayerAddress,_ref.relayerAvatarTheme,_ref.txStatusMessage),_ref$txStatusColor=_ref.txStatusColor,txStatusColor=void 0===_ref$txStatusColor?"blue":_ref$txStatusColor,_ref$title=(_ref.relayerExternalUrl,_ref.remainingAmount,_ref.title),title=void 0===_ref$title?"Confirm Withdrawal":_ref$title,sourceAddress=_ref.sourceAddress,destAddress=_ref.destAddress,sourceTypedChainId=_ref.sourceTypedChainId,destTypedChainId=_ref.destTypedChainId,poolAddress=_ref.poolAddress,poolExplorerUrl=_ref.poolExplorerUrl,newBalance=_ref.newBalance,feesSection=_ref.feesSection,props=objectWithoutProperties_default()(_ref,_excluded);return __jsx("div",extends_default()({},props,{className:(0,bundle_mjs.QP)("p-4 rounded-lg bg-mono-0 dark:bg-mono-190 flex flex-col justify-between gap-9",className),ref}),__jsx("div",{className:"space-y-4"},__jsx("div",{className:"flex items-center justify-between p-2"},__jsx(typography.o,{variant:"h5",fw:"bold"},title),__jsx("button",{onClick:onClose},__jsx(src.bm,{size:"lg"}))),"number"==typeof progress&&"number"==typeof totalProgress?__jsx("div",{className:"flex flex-col gap-3"},__jsx("div",{className:"flex items-center justify-between"},__jsx(TitleWithInfo.B,{title:"Status:",variant:"utility",titleClassName:"text-mono-200 dark:text-mono-0"}),__jsx(Chip.v,{color:txStatusColor},txStatusMessage)),__jsx(SteppedProgress.A,{steps:totalProgress,activeStep:progress})):null,__jsx(WrapperSection.A,null,__jsx(TxProgressor.jg,{txSourceInfo:{isSource:!0,typedChainId:sourceTypedChainId,amount:new decimal.A(-1*amount),tokenSymbol:token1Symbol,walletAddress:sourceAddress,accountType:"note",tokenType:"shielded"},txDestinationInfo:{typedChainId:destTypedChainId,amount:new decimal.A(amount),tokenSymbol:null!=token2Symbol?token2Symbol:token1Symbol,walletAddress:destAddress,accountType:"wallet",tokenType:"unshielded"}})),__jsx(TxConfirmationRing.A,{source:{address:sourceAddress,typedChainId:sourceTypedChainId,isNoteAccount:!0},dest:{address:destAddress,typedChainId:destTypedChainId,isNoteAccount:!1},title:token1Symbol,subtitle:poolAddress,externalLink:poolExplorerUrl}),__jsx("div",{className:"flex flex-col gap-1"},__jsx("div",{className:"flex items-center gap-0.5"},__jsx(src.gJ,{className:"fill-mono-120 dark:fill-mono-100"}),__jsx(TitleWithInfo.B,{title:"Change Note",info:"Unique identifier for the remaining shielded funds after transfer.",variant:"utility",titleClassName:"text-mono-120 dark:text-mono-100",className:"text-mono-120 dark:text-mono-100"})),"string"==typeof note&&__jsx(WrapperSection.A,null,__jsx(SpendNoteInput.A,{note}))),__jsx("div",{className:"flex flex-col gap-2"},__jsx(AmountInfo.A,{label:"Change Amount",amount:(0,utils.N)(changeAmount),tokenSymbol:token1Symbol,tooltipContent:"The value associated with the change note."}),__jsx(AmountInfo.A,{label:"New Balance",amount:(0,utils.N)(newBalance),tokenSymbol:token1Symbol,tooltipContent:"Your updated shielded balance of ".concat(token1Symbol," on destination chain after deposit.")})),feesSection,refundAmount&&__jsx(RefundAmount.A,{tokenSymbol:null!=refundToken?refundToken:"",amount:(0,utils.N)(refundAmount),refundAddress:destAddress}),__jsx(Checkbox.o,extends_default()({},checkboxProps,{wrapperClassName:(0,bundle_mjs.QP)("flex items-start",null==checkboxProps?void 0:checkboxProps.wrapperClassName)}),null!==(_checkboxProps$childr=null==checkboxProps?void 0:checkboxProps.children)&&void 0!==_checkboxProps$childr?_checkboxProps$childr:"I acknowledge that I've saved the change note note (if applicable), essential for future transactions and fund access.")),__jsx("div",{className:"flex flex-col gap-2"},__jsx(Button.A,extends_default()({},actionBtnProps,{isFullWidth:!0,className:"justify-center"}),null!==(_actionBtnProps$child=null==actionBtnProps?void 0:actionBtnProps.children)&&void 0!==_actionBtnProps$child?_actionBtnProps$child:"Withdraw"),!progress&&__jsx(Button.A,{variant:"secondary",isFullWidth:!0,className:"justify-center",onClick:onClose},"Back")))}));WithdrawConfirm.__docgenInfo={description:"",methods:[],displayName:"WithdrawConfirm",props:{txStatusColor:{defaultValue:{value:"'blue'",computed:!1},required:!1},title:{defaultValue:{value:"'Confirm Withdrawal'",computed:!1},required:!1}}};var WithdrawConfirm_stories_jsx=react.createElement;const WithdrawConfirm_stories={title:"Design System/Templates/WithdrawConfirm",component:WithdrawConfirm,decorators:[dist.y]};var Default=function Template(args){return WithdrawConfirm_stories_jsx("div",{className:"flex justify-center"},WithdrawConfirm_stories_jsx(WithdrawConfirm,args))}.bind({});Default.args={title:"Withdraw In-Progress",activeChains:["Optimism"],note:"webb://v2:vanchor/1099511627780:109951123431284u182p347130287412083741289341238412472389741382974",amount:1.01,changeAmount:2.02,fee:.001,progress:25,recipientAddress:"0xb507EcE3132875277d05045Bb1C914088A506443",fungibleTokenSymbol:"eth",wrappableTokenSymbol:"weth",relayerAddress:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",relayerExternalUrl:"https://webb.tools",unshieldedAddress:"0xb507EcE3132875277d05045Bb1C914088A506443",destChain:"Optimism"},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'args => <div className="flex justify-center">\n    <WithdrawConfirm {...args} />\n  </div>',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]}}]);
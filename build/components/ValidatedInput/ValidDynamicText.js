import{jsxs as t,jsx as i}from"react/jsx-runtime";import*as e from"react";import{s as o}from"../../style-inject.es-1f59c1d0.js";import{c as a}from"../../index-6ea95111.js";import{FieldLabel as n,FieldErrorMessage as d}from"../Form/utility/index.js";import{Button as s}from"../Button/index.js";import{Input as l}from"./ValidFieldText.js";import{translation as r}from"../../utils/i18n/index.js";import"../../fa_icons-e535ff8d.js";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../constants/common.js";import"../../utils/typography.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"styled-components";import"../../objectWithoutProperties-90b89624.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../get-ae46b391.js";import"../../index-30af9964.js";import"../../_commonjsHelpers-6e998e78.js";import"../../objectSpread-31108fba.js";import"../../index-d6dbd426.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../Label-4bb20552.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../unitless.esm-d94354fa.js";import"../../index-c71b7636.js";import"../../noop-2d37c277.js";import"../../slicedToArray-a622878d.js";import"../../index-72b69d08.js";import"../InlinePopover/index.js";import"../../math-8f990b78.js";import"../../elevation-a7875ae2.js";import"../../Popper-9fe52944.js";import"../../memoize-one.esm-8827f1ac.js";import"../../types/enum.js";import"../../utils/input.js";o('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-dynamic-text .field-label{font-size:14px;padding-bottom:4px}.valid-dynamic-text__input{display:flex;flex-direction:column}.valid-dynamic-text__input label{display:none}.valid-dynamic-text__input__field{align-items:center;display:flex;flex-direction:row}.valid-dynamic-text__input__field:hover{background-color:transparent!important}.valid-dynamic-text__input__field:not(:last-child){margin-bottom:16px}.valid-dynamic-text__input__field [class|=Content__ChildWrapper]>[class|=Content]{border:1px solid #b8bfcd}.valid-dynamic-text__input__field [class|=Content__ChildWrapper]>[class|=Content]:hover{border-color:#687792}.valid-dynamic-text__input__field--focused [class|=Content__ChildWrapper]>[class|=Content]{border:2px solid #0b6cff}.valid-dynamic-text__input__field--focused [class|=Content__ChildWrapper]>[class|=Content]:hover{border-color:#0b6cff}.valid-dynamic-text__input__field>div{width:calc(100% - 40px)}.valid-dynamic-text__input__field--disabled>div{width:100%}.valid-dynamic-text__input__field button{color:#4c576b!important;width:40px}.valid-dynamic-text__input__field button:hover{text-decoration:none}.valid-dynamic-text__input__field input{font-family:Roboto,sans-serif;font-size:16px}.valid-dynamic-text__input__add-btn{align-items:center;background-color:#f5f6f8!important;border-radius:4px;display:flex;height:40px;justify-content:center;width:calc(100% - 40px)}.valid-dynamic-text__input__add-btn button:hover{text-decoration:none}.valid-dynamic-text__input__add-btn button:disabled span{color:#b8bfcd}.valid-dynamic-text__input__add-btn button span{color:#0b6cff}');const p=({placeholder:o,name:p,values:m,onChange:c,isDisabled:_=!1,type:u="text",label:f,errMessage:x,maxField:b,addText:j=r("common.add"),dataQa:y=null})=>{const[v,h]=e.useState(null);return t("div",{className:"valid-dynamic-text",children:[i(n,{label:f}),t("div",{className:"valid-dynamic-text__input","data-qa-id":y,children:[m.map(((e,n)=>t("div",{className:a("valid-dynamic-text__input__field",{"valid-dynamic-text__input__field--focused":v===n,"valid-dynamic-text__input__field--disabled":_}),children:[i(l,{isLabelHidden:!0,placeholder:o,name:p,value:e,onChange:t=>((t,i)=>{const{value:e}=t.currentTarget;m[i]=e,c(m)})(t,n),disabled:_,shouldFitContainer:!0,type:u,onFocus:()=>h(n),onBlur:()=>h(null)}),m.length>1&&!_&&i(s,{onClick:()=>(t=>{c([...m.filter(((i,e)=>e!==t))])})(n),appearance:"link",children:i("span",{className:"icon icon-trash"})})]},n))),!!x&&i(d,{message:x}),i("div",{className:"valid-dynamic-text__input__add-btn",hidden:_,children:t(s,{onClick:()=>{c([...m,""])},appearance:"link",isDisabled:m.length===b,children:[i("span",{className:"icon-plus"})," ",`${j} (${m.length}/${b})`]})})]})]})};export{p as ValidDynamicText};

import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as s}from"../../index-6ea95111.js";import{FieldLabel as o,FieldErrorMessage as i,FieldHelperText as r}from"../Form/utility/index.js";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{Enum as m}from"../../types/enum.js";import{Select as p}from"../Select/index.js";import"react";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-e535ff8d.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../Select-9aaa0650.js";import"../../react-select.esm-246b1386.js";import"../../stateManager-845a3300.esm-42e65bf5.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-30af9964.js";import"../../createSelect-25733085.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-select-input .field-label{font-size:14px;padding-bottom:4px}');const l=m("LOADING","FAILED","SUCCESS"),n=({label:a,placeholder:m,options:l=[],name:n,value:c,onChange:j,errMessage:d,optionalLabel:b,isInvalid:f,isDisabled:u=!1,isRequired:g=!0,isClearable:x,tooltip:h,selectDataQa:y,isMulti:v=!1,className:L,helperText:C,...S})=>e("div",{className:s("valid-select-input",L),children:[!!a&&t(o,{label:a,optionalLabel:b,isRequired:g,tooltip:h}),t(p,{...S,options:l,placeholder:m,name:n,value:c,onChange:j,isDisabled:u,isClearable:x,isMulti:v,dataQa:y}),f&&t(i,{message:d}),C&&t(r,{message:C})]});export{l as RELOADSTATUS,n as ValidSelect};

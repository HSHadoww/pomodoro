import{u as ne}from"./settings-2d17dc4f.js";import{p as R,I as P,a4 as ue,m as W,a5 as se,B as re,q as p,W as F,H as T,c as i,a6 as ie,a7 as de,K as v,v as B,h as a,o as ce,a8 as fe,a9 as H,r as ve,X,R as h,x as me,Y as Ve,Q as U,aa as ye,ab as be,ac as Ce,ad as A,L as ge,J as Se,ae as _e,n as Ie,af as ke,ag as he,s as Re,d as G,e as xe,f as y,V as Pe,u as w,ah as M,i as d,a0 as J,a1 as pe,t as Be,ai as Ae,aj as Ge}from"./index-af5a3a55.js";import{V as x,a as we}from"./VRow-a33a4282.js";import{V as Y,b as $e,c as K,d as Fe}from"./VInput-d764d6b6.js";const z=Symbol.for("vuetify:selection-control-group"),D=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ue},...W(),...se(),...re()},"SelectionControlGroup"),Te=R({...D({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ue=p()({name:"VSelectionControlGroup",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:r}=s;const l=F(e,"modelValue"),o=T(),m=i(()=>e.id||`v-selection-control-group-${o}`),n=i(()=>e.name||m.value),t=new Set;return ie(z,{modelValue:l,forceUpdate:()=>{t.forEach(u=>u())},onForceUpdate:u=>{t.add(u),ce(()=>{t.delete(u)})}}),de({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),B(()=>{var u;return a("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=r.default)==null?void 0:u.call(r)])}),{}}}),Z=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...W(),...D()},"VSelectionControl");function De(e){const s=be(z,void 0),{densityClasses:r}=Ce(e),l=F(e,"modelValue"),o=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=i(()=>e.falseValue!==void 0?e.falseValue:!1),n=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=i({get(){const c=s?s.modelValue.value:l.value;return n.value?A(c).some(f=>e.valueComparator(f,o.value)):e.valueComparator(c,o.value)},set(c){if(e.readonly)return;const f=c?o.value:m.value;let V=f;n.value&&(V=c?[...A(l.value),f]:A(l.value).filter(g=>!e.valueComparator(g,o.value))),s?s.modelValue.value=V:l.value=V}}),{textColorClasses:u,textColorStyles:S}=ge(i(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:_,backgroundColorStyles:b}=Se(i(()=>t.value&&!e.error&&!e.disabled?e.color:void 0)),C=i(()=>t.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:r,trueValue:o,falseValue:m,model:t,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,icon:C}}const ee=p()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:Z(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:l}=s;const{group:o,densityClasses:m,icon:n,model:t,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,trueValue:C}=De(e),c=T(),f=i(()=>e.id||`input-${c}`),V=H(!1),g=H(!1),I=ve();o==null||o.onForceUpdate(()=>{I.value&&(I.value.checked=t.value)});function O(k){V.value=!0,_e(k.target,":focus-visible")!==!1&&(g.value=!0)}function E(){V.value=!1,g.value=!1}function le(k){e.readonly&&o&&Ie(()=>o.forceUpdate()),t.value=k.target.checked}return B(()=>{var j,q;const k=l.label?l.label({label:e.label,props:{for:f.value}}):e.label,[te,ae]=X(r),L=a("input",h({ref:I,checked:t.value,disabled:!!(e.readonly||e.disabled),id:f.value,onBlur:E,onFocus:O,onInput:le,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},ae),null);return a("div",h({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":V.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},m.value,e.class]},te,{style:e.style}),[a("div",{class:["v-selection-control__wrapper",u.value],style:S.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:_,backgroundColorStyles:b}),me(a("div",{class:["v-selection-control__input"]},[((q=l.input)==null?void 0:q.call(l,{model:t,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,inputNode:L,icon:n.value,props:{onFocus:O,onBlur:E,id:f.value}}))??a(U,null,[n.value&&a(ye,{key:"icon",icon:n.value},null),L])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&a(Y,{for:f.value,clickable:!0,onClick:oe=>oe.stopPropagation()},{default:()=>[k]})])}),{isFocused:V,input:I}}}),Ne=R({...Z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$=p()({name:"VRadio",props:Ne(),setup(e,s){let{slots:r}=s;return B(()=>a(ee,h(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),r)),{}}});const Oe=R({height:{type:[Number,String],default:"auto"},...$e(),...ke(D(),["multiple"]),trueIcon:{type:P,default:"$radioOn"},falseIcon:{type:P,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Q=p()({name:"VRadioGroup",inheritAttrs:!1,props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:l}=s;const o=T(),m=i(()=>e.id||`radio-group-${o}`),n=F(e,"modelValue");return B(()=>{const[t,u]=X(r),S=K.filterProps(e),_=ee.filterProps(e),b=l.label?l.label({label:e.label,props:{for:m.value}}):e.label;return a(K,h({class:["v-radio-group",e.class],style:e.style},t,S,{modelValue:n.value,"onUpdate:modelValue":C=>n.value=C,id:m.value}),{...l,default:C=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:g}=C;return a(U,null,[b&&a(Y,{id:c.value},{default:()=>[b]}),a(Ue,h(_,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:g.value,"aria-labelledby":b?c.value:void 0,multiple:!1},u,{modelValue:n.value,"onUpdate:modelValue":I=>n.value=I}),l)])}})}),{}}}),N=e=>(Ae("data-v-f85932d0"),e=e(),Ge(),e),Ee=N(()=>d("h1",{class:"text-center"},"通知設定",-1)),Le=N(()=>d("h1",{class:"text-center"},"鈴聲設定",-1)),je=N(()=>d("thead",null,[d("tr",null,[d("th",null,"名稱"),d("th",null,"試聽"),d("th",null,"選擇")])],-1)),qe=["src"],He={__name:"SettingsView",setup(e){const s=ne(),{alarms:r,selectedAlarm:l,notify:o}=Re(s);return(m,n)=>(G(),xe(Pe,null,{default:y(()=>[a(we,null,{default:y(()=>[a(x,{cols:"12"},{default:y(()=>[Ee]),_:1}),a(x,{cols:"12"},{default:y(()=>[a(Q,{inline:"",modelValue:w(o),"onUpdate:modelValue":n[0]||(n[0]=t=>M(o)?o.value=t:null)},{default:y(()=>[a($,{label:"開啟",value:!0}),a($,{label:"關閉",value:!1})]),_:1},8,["modelValue"])]),_:1}),a(x,{cols:"12"},{default:y(()=>[Le]),_:1}),a(x,{cols:"12"},{default:y(()=>[a(Fe,null,{default:y(()=>[je,d("tbody",null,[(G(!0),J(U,null,pe(w(r),t=>(G(),J("tr",{key:t.id},[d("td",null,Be(t.name),1),d("td",null,[d("audio",{src:t.file,controls:""},null,8,qe)]),d("td",null,[a(Q,{modelValue:w(l),"onUpdate:modelValue":n[1]||(n[1]=u=>M(l)?l.value=u:null)},{default:y(()=>[a($,{value:t.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},We=he(He,[["__scopeId","data-v-f85932d0"]]);export{We as default};

"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["keyboard-shortcuts-dialog"],{18558:(e,t,r)=>{r.d(t,{JC:()=>a.JC,KK:()=>a.KK,SK:()=>i,Vy:()=>a.Vy,ai:()=>a.ai,oc:()=>a.oc,rd:()=>a.rd});var a=r(50515);let s=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function i(e){return Array.from(e.matchAll(s)).map(([,e])=>e)}},98164:(e,t,r)=>{r.d(t,{$$:()=>n,GI:()=>i,zw:()=>s});var a=r(18558);let s=()=>{if("undefined"==typeof document)return!1;let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},i=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),o=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),n=e=>{let t=(0,a.Vy)(e),r=s()&&!function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),r=e.getAttribute("type")?.toLowerCase()??"text",a="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!o.has(r)||e.isContentEditable)&&!a}(e.target);return i(t)||r}},34968:(e,t,r)=>{var a=r(72245),s=r(74848),i=r(96540),o=r(90600),n=r(75177),l=r(38553),c=r(55847),d=r(86079),u=r(65862);function m({group:{service:{name:e},commands:t}}){let r=(0,i.useId)();return(0,s.jsxs)(n.A,{sx:{borderRadius:2,border:"1px solid",borderColor:"border.default",overflow:"hidden"},children:[(0,s.jsx)(n.A,{as:"h3",id:r,sx:{bg:"canvas.subtle",fontWeight:"bold",py:2,px:3,fontSize:1},children:e}),(0,s.jsx)(n.A,{as:"ul",role:"list","aria-labelledby":r,sx:{listStyleType:"none"},children:t.map(({id:e,name:t,keybinding:r})=>(0,s.jsxs)(n.A,{as:"li",sx:{borderTop:"1px solid",borderColor:"border.default",py:2,px:3,display:"flex",gap:2,justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)("div",{children:t}),(0,s.jsx)(n.A,{sx:{textAlign:"right"},children:(Array.isArray(r)?r:[r]).map((e,t)=>(0,s.jsxs)(i.Fragment,{children:[t>0&&" or ",(0,s.jsx)(u.z,{keys:e})]},e))})]},e))})]})}try{m.displayName||(m.displayName="ShortcutsGroupList")}catch{}let h={keyboardShortcuts:"Keyboard shortcuts",siteWideShortcuts:"Site-wide shortcuts",loading:"Loading"};r(4001);var p=r(58033),g=r(28784),y=r(18558);let f=()=>(0,s.jsxs)(n.A,{role:"status",sx:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(l.A,{size:"large"}),(0,s.jsx)("span",{className:"sr-only",children:h.loading})]}),b=e=>Array.isArray(e)?e.map(e=>(0,y.rd)(e)):(0,y.rd)(e??""),_=({children:e})=>(0,s.jsx)(n.A,{sx:{display:"flex",flexDirection:"row",gap:2,flexWrap:"wrap"},children:e}),R=({children:e})=>(0,s.jsx)(n.A,{sx:{flex:"250px",display:"flex",flexDirection:"column",gap:2},children:e}),x=({visible:e,onVisibleChange:t,docsUrl:r})=>{let[a,o]=(0,i.useState)({service:{id:"global",name:"Global"},commands:[]}),[n,l]=(0,i.useState)([]),[u,y]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let t=(0,p.c)(),r=async()=>{y(!0);let e=document.querySelector("meta[name=github-keyboard-shortcuts]");if(!e)throw Error('The "github-keyboard-shortcuts" meta tag must be present');let r={contexts:e.content},a=`/site/keyboard_shortcuts?${new URLSearchParams(r).toString()}`,s=await (0,g.lS)(a,{method:"GET"});if(s.ok){let{global:e,...r}=(await s.json()).commands;o({service:{id:"global",name:h.siteWideShortcuts},commands:[...e.commands,...t.find(e=>"global"===e.service.id)?.commands??[]].map(e=>({...e,keybinding:b(e.keybinding)}))}),l([...Object.values(r),...t].map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:b(e.keybinding)}))})))}else l(t.map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:b(e.keybinding)}))})));y(!1)};e&&r()},[e]),e)?(0,s.jsx)(d.l,{title:h.keyboardShortcuts,"aria-modal":"true",width:"xlarge",height:"large",onClose:()=>t(!1),sx:{color:"fg.default"},children:u?(0,s.jsx)(f,{}):(0,s.jsxs)(_,{children:[(0,s.jsx)(R,{children:n.map(e=>(0,s.jsx)(m,{group:e},e.service.id))}),(0,s.jsxs)(R,{children:[(0,s.jsx)(m,{group:a},a.service.id),(0,s.jsx)(c.Q,{as:"a",href:r,sx:{width:"100%"},children:"View all keyboard shortcuts"})]})]})}):null};try{f.displayName||(f.displayName="LoadingState")}catch{}try{_.displayName||(_.displayName="Columns")}catch{}try{R.displayName||(R.displayName="Column")}catch{}try{x.displayName||(x.displayName="ShortcutsDialog")}catch{}var E=r(97564);function v({docsUrl:e}){let[t,r]=(0,i.useState)(!1);return(0,E.G7)("react_keyboard_shortcuts_dialog")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.ak,{commands:{"keyboard-shortcuts-dialog:show-dialog":()=>r(!0)}}),(0,s.jsx)(x,{visible:t,onVisibleChange:r,docsUrl:e})]}):(0,s.jsx)(s.Fragment,{})}try{v.displayName||(v.displayName="KeyboardShortcutsDialog")}catch{}(0,a.k)("keyboard-shortcuts-dialog",{Component:v})},92536:(e,t,r)=>{r.d(t,{R:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new a),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let a=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},75014:(e,t,r)=>{r.d(t,{Mm:()=>i,QJ:()=>o,w8:()=>s});var a=r(96540);function s(e){return((0,a.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function i(e){let t=(0,a.useRef)(e.__wrapperElement.anchor||null),[r,s]=(0,a.useState)(!1),i=(0,a.useCallback)(()=>{s(!r)},[r,s]);return(0,a.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),o(e,i),{ref:t,open:r,setOpen:s}}function o(e,t){let r=(0,a.useRef)(e.__wrapperElement.anchor);(0,a.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},72245:(e,t,r)=>{r.d(t,{k:()=>c});let a=new(r(92536)).R;var s=r(74848),i=r(39595),o=r(24508),n=r(23235);let l=class ReactPartialElement extends o.H{async getReactNode(e,t){var r;let{Component:i}=await (r=this.name,a.getRegistration(r)),o=this.closest("react-partial-anchor");return(0,s.jsx)(n.c,{partialName:this.name,embeddedData:e,Component:i,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:o,onError:t})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function c(e,t){a.register(e,t)}l=function(e,t,r,a){var s,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([i.p_],l)},23581:(e,t,r)=>{r.d(t,{A:()=>n});let{getItem:a,setItem:s,removeItem:i}=(0,r(74572).A)("localStorage"),o="REACT_PROFILING_ENABLED",n={enable:()=>s(o,"true"),disable:()=>i(o),isEnabled:()=>!!a(o)}},51012:(e,t,r)=>{r.d(t,{N:()=>i});var a=r(97156),s=r(96540);let i=void 0!==a.cg?.document?.createElement?s.useLayoutEffect:s.useEffect},28784:(e,t,r)=>{function a(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function s(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return a(e,{...t,body:s,headers:r})}function i(e,t={}){let r={...t.headers,"GitHub-Is-React":"true"};return a(e,{...t,headers:r})}function o(e,t){let r={...t?.headers??{},"GitHub-Is-React":"true"};return s(e,{...t,headers:r})}r.d(t,{DI:()=>a,QJ:()=>i,Sr:()=>o,lS:()=>s})},23235:(e,t,r)=>{r.d(t,{c:()=>g});var a=r(74848),s=r(96540),i=r(36165),o=r(45588),n=r(49107),l=r(47767),c=r(59840);function d({children:e,history:t}){let[r,i]=(0,s.useState)({location:t.location});return(0,c.m)(()=>t.listen(i),[t]),(0,a.jsx)(l.Ix,{location:r.location,navigator:t,children:e})}try{d.displayName||(d.displayName="PartialRouter")}catch{}var u=r(17857),m=r(51261),h=r(75014),p=r(44196);function g({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:c,anchorElement:g,onError:y}){let f=s.useRef(),b=globalThis.window;f.current||(f.current=b?(0,m.z)({window:b}):(0,o.sC)({initialEntries:[{pathname:"/"}]}));let _=f.current,R=(0,h.w8)(g);return(0,a.jsx)(i.U,{appName:e,wasServerRendered:l,children:(0,a.jsx)(p.t,{onError:y,children:(0,a.jsx)(n.Q,{history:_,routes:[],children:(0,a.jsxs)(d,{history:_,children:[(0,a.jsx)(r,{...t.props,...R}),(0,a.jsx)(u.h,{ssrError:c})]})})})})}try{g.displayName||(g.displayName="PartialEntry")}catch{}},24508:(e,t,r)=>{r.d(t,{H:()=>ReactBaseElement});var a=r(74848),s=r(39595),i=r(5338),o=r(96540),n=r(23581),l=r(79461),c=r(51528);function d(e,t,r,a){var s,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}let u=RegExp("Minified React error #(?<invariant>\\d+)"),m=["419","421"];let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}get attemptedSSR(){return"true"===this.getAttribute("attempted-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:i.H,hydrateRoot:i.c};n.A.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=!1,r=JSON.parse(this.embeddedDataText),s=this.ssrError?.textContent,l=await this.getReactNode(r,e=>{t=!0,setTimeout(()=>{throw e})}),d=(0,a.jsx)(o.StrictMode,{children:l});if(s&&this.logSSRError(s),this.hasSSRContent){let r=this.querySelector('style[data-styled="true"]');r&&document.head.appendChild(r),this.root=e.hydrateRoot(this.reactRoot,d,{onRecoverableError:e=>{if(!(e instanceof Error))return;let r=u.exec(e.message),a=String(r?.groups?.invariant);t=!m.includes(a),(0,c.i)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:a}})}}),r&&requestIdleCallback(()=>{r.parentElement?.removeChild(r)}),(0,c.i)({incrementKey:"REACT_RENDER",incrementTags:{csr:!1,error:t,ssr:!0,ssrError:!1}})}else this.root=e.createRoot(this.reactRoot),this.root.render(d),(0,c.i)({incrementKey:"REACT_RENDER",incrementTags:{csr:!0,error:t,ssr:this.attemptedSSR,ssrError:!!this.ssrError}});this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,87335,19))}logSSRError(e){if(l.z[e])return console.error("SSR failed with an expected error:",l.z[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:a,lineno:s,colno:i}=e,o=`${t} at ${r} (${a}:${s}:${i})`;return t=" ",o}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};d([s.aC],ReactBaseElement.prototype,"embeddedData",void 0),d([s.aC],ReactBaseElement.prototype,"ssrError",void 0),d([s.aC],ReactBaseElement.prototype,"reactRoot",void 0);try{u.displayName||(u.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react-css","react-lib","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_octicons-react_di-5313f5","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_mjs","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_Dialog_Dialog_js-node_modules_primer_react_lib-esm_-bc19fa","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-146db5","ui_packages_ui-commands_ui-commands_ts"],()=>t(34968)),e.O()}]);
//# sourceMappingURL=keyboard-shortcuts-dialog-0ac527d18262.js.map
"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[226],{4247:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(1182),i=n.n(o),s=n(2806),r=n.n(s)()(i());r.push([t.id,".hXRin0tc .tiptap {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.hXRin0tc .tiptap :is(h1, h2) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.hXRin0tc .tiptap :is(p, h1, h2) {\n  margin: 0;\n}\n\n.hXRin0tc .tiptap strong {\n  font-weight: bold;\n}\n\n.hXRin0tc .tiptap em {\n  font-style: italic;\n}\n\n.hXRin0tc .tiptap s {\n  text-decoration: line-through;\n}\n\n.hXRin0tc .tiptap u {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/styles/tiptap.module.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,0CAA0C;EAC1C,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".textItem :global(.tiptap) {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.textItem :global(.tiptap :is(h1, h2)) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.textItem :global(.tiptap :is(p, h1, h2)) {\n  margin: 0;\n}\n\n.textItem :global(.tiptap strong) {\n  font-weight: bold;\n}\n\n.textItem :global(.tiptap em) {\n  font-style: italic;\n}\n\n.textItem :global(.tiptap s) {\n  text-decoration: line-through;\n}\n\n.textItem :global(.tiptap u) {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]),r.locals={textItem:"hXRin0tc"};const a=r},6226:(t,e,n)=>{n.r(e),n.d(e,{default:()=>cn});var o=n(6218);function i(t){(0,o.append_styles)(t,"svelte-su3qhz",".mondrian__img-1XHDzr{height:100%;width:100%}")}function s(t){let e,n;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"aria-label",n=t[0].alt),(0,o.attr)(e,"class","mondrian__img-1XHDzr"),(0,o.attr)(e,"role","img")},m(t,n){(0,o.insert)(t,e,n)},p(t,[i]){1&i&&n!==(n=t[0].alt)&&(0,o.attr)(e,"aria-label",n)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function r(t,e,n){let{item:o}=e;return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o]}n(9763);class a extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,r,s,o.safe_not_equal,{item:0},i)}}const l=a;var d=n(7268),c=n(6195);class u{constructor(t){this.parse=t=>this.zod.parse(t),this.is=t=>this.zod.safeParse(t).success,this.assert=t=>{this.parse(t)},this.zod=t}}const m=new u(c.Ay.object({name:c.Ay.enum(["fadeInUp"]),delay:c.Ay.number().min(0),duration:c.Ay.number().positive(),easing:c.Ay.enum(["ease","ease-in","ease-out","ease-in-out","linear","step-start","step-end"])})),p=new u(c.Ay.object({id:c.Ay.string(),path:c.Ay.string(),width:c.Ay.number().optional(),height:c.Ay.number().optional()})),h=new u(c.Ay.object({assetId:c.Ay.string().optional(),color:c.Ay.string().optional(),opacity:c.Ay.number().min(0).max(1).default(1)})),g=new u(h.zod.extend({type:c.Ay.literal("color"),color:h.zod.shape.color.unwrap().default("#e4e4e4")})),_=new u(h.zod.extend({type:c.Ay.literal("image"),assetId:h.zod.shape.assetId.unwrap()})),f=new u(h.zod.extend({type:c.Ay.literal("none")})),y=new u(c.Ay.discriminatedUnion("type",[g.zod,_.zod,f.zod])),v=new u(c.Ay.discriminatedUnion("type",[g.zod,f.zod])),b=new u(c.Ay.object({id:c.Ay.string(),clonedFromId:c.Ay.string().optional(),state:c.Ay.string(),visible:c.Ay.boolean()})),$=new u(c.Ay.object({unit:c.Ay.enum(["px","%","auto","fr"]),value:c.Ay.number()})),w=new u(c.Ay.object({top:$.zod.default({value:0,unit:"px"}),left:$.zod.default({value:0,unit:"px"}),bottom:$.zod.default({value:0,unit:"px"}),right:$.zod.default({value:0,unit:"px"})})),A=new u(c.Ay.object({id:c.Ay.string(),type:c.Ay.literal("tiptap")})),x="default",k=c.Ay.object({id:c.Ay.string().default(x),name:c.Ay.string().max(128),children:c.Ay.array(b.zod).optional(),text:A.zod.optional(),textVerticalAlign:c.Ay.enum(["top","middle","bottom"]).default("top"),x:$.zod.default({value:0,unit:"px"}),y:$.zod.default({value:0,unit:"px"}),position:c.Ay.enum(["absolute"]).default("absolute"),width:$.zod.default({value:100,unit:"%"}),height:$.zod.default({value:100,unit:"%"}),padding:w.zod,fill:y.zod,overlay:v.zod,aspectRatioLocked:c.Ay.boolean().default(!1),clipPath:c.Ay.literal("ellipse").optional(),borderRadius:c.Ay.object({topLeft:$.zod.default({value:0,unit:"px"}),topRight:$.zod.default({value:0,unit:"px"}),bottomRight:$.zod.default({value:0,unit:"px"}),bottomLeft:$.zod.default({value:0,unit:"px"})}),entranceAnimation:m.zod.nullable().optional()}),C=new u(k),S=(new u(k.required({children:!0})),k.partial().required({id:!0,name:!0})),z=new u(S),I=new u(S.required({children:!0})),E="changeState",M="changeVisibility",j=new u(c.Ay.object({id:c.Ay.string(),event:c.Ay.enum(["click","hover"])}).and(c.Ay.discriminatedUnion("action",[c.Ay.object({action:c.Ay.literal(E),targetId:c.Ay.string(),targetState:c.Ay.string().default(x)}),c.Ay.object({action:c.Ay.literal(M),targetId:c.Ay.string(),targetVisibility:c.Ay.boolean()})]))),N=new u(c.Ay.object({id:c.Ay.string(),blockumentId:c.Ay.string(),clonedFromId:c.Ay.string().optional(),parentId:c.Ay.string(),type:c.Ay.string(),name:c.Ay.string().max(128),tagName:c.Ay.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:c.Ay.boolean().default(!1),authoringVisible:c.Ay.boolean().default(!0),initialVisible:c.Ay.boolean().default(!0),initialState:c.Ay.string().default(x),states:c.Ay.intersection(c.Ay.object({default:C.zod}),c.Ay.record(z.zod)),triggers:c.Ay.array(j.zod),assets:c.Ay.record(p.zod).default({}).optional(),removed:c.Ay.boolean().default(!1)})),q=(new u(c.Ay.object({id:c.Ay.string(),title:c.Ay.string().max(255),children:c.Ay.array(b.zod).max(1)})),new u(N.zod.extend({type:c.Ay.literal("group"),states:c.Ay.intersection(c.Ay.object({default:C.zod.required({children:!0})}),c.Ay.record(I.zod.required({children:!0})))}))),T=new u(N.zod.extend({type:c.Ay.literal("image"),alt:c.Ay.string()})),L=new u(N.zod.extend({type:c.Ay.literal("shape")})),B=new u(N.zod.extend({type:c.Ay.literal("text")}));new u(c.Ay.discriminatedUnion("type",[q.zod,T.zod,L.zod,B.zod]));var R,X;!function(t){t.Blockuments="blockuments",t.Items="items"}(R||(R={})),R.Blockuments,R.Items,function(t){t.APP="app",t.BLOCKUMENT="blockument",t.COURSE="course"}(X||(X={})),n(9840);var O=n(4198),Z=n(4717),D=n(2359),P=n(31),F=n(2740),K=n(1430);const H=/([a-z%]+)\s*$/i,W=O.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle"],attributes:{textSize:{default:14,parseHTML(t){const e=t.style.fontSize,n=parseFloat(e);if(isNaN(n))return null;const o=H.exec(e);if(null==o)return null;switch(o[1]){case"rem":return Math.round(10*n);case"px":return Math.round(n);default:return null}},renderHTML:t=>({style:`font-size: ${t.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:t=>({chain:e})=>e().setMark("textStyle",{textSize:t}).run()})}),Y=O.YY.create({name:"paragraphStyle",addCommands:()=>({setParagraphStyle:(t,e)=>({dispatch:n,state:o,tr:i})=>{const s=i.selection.$from.blockRange(i.selection.$from);return null!=s&&(null!=n&&(i.doc.nodesBetween(s.start,s.end,((n,s)=>{if(n.type===o.schema.nodes.heading||n.type===o.schema.nodes.paragraph){const r="heading"===t?o.schema.nodes.heading:o.schema.nodes.paragraph,a={...n.attrs};"heading"===t&&"number"==typeof e.level&&(a.level=e.level),i.setNodeMarkup(s,r,a,n.marks)}if(n.type===o.schema.nodes.text){const t=o.schema.marks.textStyle.isInSet(n.marks);i.addMark(s,s+n.nodeSize,o.schema.marks.textStyle.create({...t?.attrs,textSize:e.textSize}))}})),e.bold?i.addMark(s.start,s.end,o.schema.marks.bold.create()):i.removeMark(s.start,s.end,o.schema.marks.bold)),!0)}})});Z.A.configure({types:["textStyle"]});const G=[K.A.configure({history:!1,heading:{levels:[1,2]}}),D.A.configure({types:["heading","paragraph"]}),P.A,Z.A,Y,W,F.A];(0,O._w)(G);var V=n(1120);const U=new Map,Q={...(0,V.writable)(U),add:(t,e)=>(U.has(t)||U.set(t,function(t){let e,n,o;t.subscribe((t=>{e=t}));const i=(0,V.writable)(e);i.subscribe((t=>{n=o??e,o=t}));const s={...i,revert(){s.set(n)},reset(){s.set(e)}};return s}(e)),U.get(t)),get(t){if(!U.has(t))throw new Error(`No state found for item ${t}`);return U.get(t)},resetAll(){[...U.values()].forEach((t=>{t.reset()}))}},J=new Map,tt={...(0,V.writable)(J),add:(t,e)=>(J.set(t,function(t){let e;t.subscribe((t=>{e=t}));const n={...(0,V.writable)(e),show(){n.set(!0)},hide(){n.set(!1)},reset(){n.set(e)}};return n}(e)),J.get(t)),get(t){if(!J.has(t))throw new Error(`No visibility found for item ${t}`);return J.get(t)},resetAll(){[...J.values()].forEach((t=>{t.reset()}))}};function et(t,e,n){return e.addEventListener(t,n),()=>{e.removeEventListener(t,n)}}matchMedia("(prefers-reduced-motion)");const nt=new WeakMap;function ot(t,e,n=Object.keys(t.states.default)){const o=t.states.default,i=structuredClone(t.states[e]);return n.reduce(((t,e)=>(t[e]||(t[e]=structuredClone(o[e])),t)),i)}new IntersectionObserver((t=>{for(const e of t){if(!e.isIntersecting)continue;const t=nt.get(e.target);null!=t&&"paused"===t.playState&&t.play()}}),{threshold:.3});const it=({value:t,unit:e})=>{switch(e){case"auto":return"auto";case"px":return t/10+"rem";default:return(({value:t,unit:e})=>`${t}${e}`)({value:t,unit:e})}};function st(t){(0,o.append_styles)(t,"svelte-bbp0xy",".mondrian__clipped-KfJDq2{border-radius:inherit;display:flex;height:100%;inset:0;position:absolute;width:100%;z-index:-1}")}function rt(t){let e,n;const i=t[7].default,s=(0,o.create_slot)(i,t,t[6],null);return{c(){e=(0,o.element)("div"),s&&s.c(),(0,o.attr)(e,"class","mondrian__clipped-KfJDq2"),(0,o.set_style)(e,"clip-path",t[0])},m(t,i){(0,o.insert)(t,e,i),s&&s.m(e,null),n=!0},p(t,[r]){s&&s.p&&(!n||64&r)&&(0,o.update_slot_base)(s,i,t,t[6],n?(0,o.get_slot_changes)(i,t[6],r,null):(0,o.get_all_dirty_from_scope)(t[6]),null),1&r&&(0,o.set_style)(e,"clip-path",t[0])},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function at(t,e,n){let i,s,r,a,{$$slots:l={},$$scope:d}=e,{item:c}=e;const u=Q.get(c.id);return(0,o.component_subscribe)(t,u,(t=>n(5,a=t))),t.$$set=t=>{"item"in t&&n(2,c=t.item),"$$scope"in t&&n(6,d=t.$$scope)},t.$$.update=()=>{36&t.$$.dirty&&n(4,i=c.states[a]),16&t.$$.dirty&&n(3,s="ellipse"===i.clipPath),8&t.$$.dirty&&n(0,r=s?"ellipse(50% 50%)":void 0)},[r,u,c,s,i,a,d,l]}class lt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,at,rt,o.safe_not_equal,{item:2},st)}}const dt=lt;function ct(t){(0,o.append_styles)(t,"svelte-1cx7a5",".mondrian__fill-QARoMt{background-position:center;background-size:cover;inset:0;position:absolute;border-radius:inherit}")}function ut(t){let e;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"class","mondrian__fill-QARoMt"),(0,o.set_style)(e,"background-color",t[1]),(0,o.set_style)(e,"background-image",t[2]),(0,o.set_style)(e,"opacity",t[0].opacity)},m(t,n){(0,o.insert)(t,e,n)},p(t,n){2&n&&(0,o.set_style)(e,"background-color",t[1]),4&n&&(0,o.set_style)(e,"background-image",t[2]),1&n&&(0,o.set_style)(e,"opacity",t[0].opacity)},d(t){t&&(0,o.detach)(e)}}}function mt(t){let e,n=(null!=t[1]||null!=t[2])&&ut(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){null!=t[1]||null!=t[2]?n?n.p(t,o):(n=ut(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function pt(t,e,n){let{assets:o}=e,{fill:i}=e,s=null,r=null;return t.$$set=t=>{"assets"in t&&n(3,o=t.assets),"fill"in t&&n(0,i=t.fill)},t.$$.update=()=>{if(9&t.$$.dirty)switch(i?.type){case"color":n(1,s=i.color),n(2,r=null);break;case"image":{n(1,s=null);const t=o?.[i.assetId];n(2,r=null==t?null:`url("${function(t){return`assets/${t.path}`}(t)}")`);break}default:n(1,s=n(2,r=null))}},[i,s,r,o]}class ht extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,pt,mt,o.safe_not_equal,{assets:3,fill:0},ct)}}const gt=ht;function _t(t){(0,o.append_styles)(t,"svelte-10psccx",".mondrian__item-TjghN4{--mon-item-bounding-box-color:var(--mon-color-border-selected);position:absolute;z-index:1;height:max-content;width:max-content;user-select:none;pointer-events:var(--mon-item-pointer-events)}.mondrian__item-TjghN4.mondrian__--mon-dragging-2taOid{cursor:grab;opacity:0.3}.mondrian__item-TjghN4.mondrian__--root-Amto2y{position:relative}.mondrian__item-TjghN4.mondrian__--hidden-1drsFa{display:none}.mondrian__item-TjghN4.mondrian__--hover-1j_qym{--bounding-box-thickness:var(--art-border-width-lg)}.mondrian__item-TjghN4.mondrian__--selected-X6u_q2{--bounding-box-thickness:var(--art-border-width-md)}.mondrian__item-TjghN4.mondrian__--dropping-into-1h2MEI{--bounding-box-thickness:var(--art-border-width-md);--bounding-box-style:dashed}.mondrian__item-TjghN4.mondrian__--clickable-3YP0bP{cursor:pointer}.mondrian__item-TjghN4:is(.mondrian__--hover-1j_qym, .mondrian__--selected-X6u_q2, .mondrian__--dropping-into-1h2MEI)::before{content:'';pointer-events:none;position:absolute;inset:0px;outline:var(--bounding-box-thickness) var(--bounding-box-style, solid)\n      var(--mon-item-bounding-box-color)}.mondrian__item-TjghN4:is(.mondrian__--selected-X6u_q2):hover{cursor:grab}.mondrian__item-TjghN4:is(.mondrian__--selected-X6u_q2):active{cursor:grabbing}.mondrian__item-TjghN4[data-mon-disabled],.mondrian__item-TjghN4[data-mon-disabled] *{pointer-events:none !important}.mondrian__item-TjghN4.mondrian__--debug-1O8sdX::after{content:attr(data-parent-id) '>' attr(data-item-id);position:absolute;bottom:0;right:0;overflow:hidden;white-space:nowrap;padding:var(--art-space-0-25) var(--art-space-0-5);font:1.1rem / 1 monospace;background-color:#f006;backdrop-filter:grayscale(100%) blur(3px);color:#000;border-radius:var(--art-border-radius-sm) 0 0 0;pointer-events:none}.mondrian__item-TjghN4.mondrian__--preview-item-Q2gClX{--mon-item-pointer-events:none;position:static}.mon-app:not(.mon-meta-key-down, .mon-preview-active)\n    :is(.mondrian__item-TjghN4[data-item-type='group']:not(.mondrian__--root-Amto2y) .mondrian__item-TjghN4:not(.mondrian__--selected-X6u_q2)){--mon-item-pointer-events:none}")}const ft=t=>({}),yt=t=>({}),vt=t=>({}),bt=t=>({});function $t(t){let e,n;return e=new gt({props:{assets:t[0].assets,fill:t[19]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n[0]&&(o.assets=t[0].assets),524288&n[0]&&(o.fill=t[19]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function wt(t){let e,n;return e=new gt({props:{assets:t[0].assets,fill:t[18]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n[0]&&(o.assets=t[0].assets),262144&n[0]&&(o.fill=t[18]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function At(t){let e,n,i,s=null!=t[19]&&$t(t),r=null!=t[18]&&wt(t);return{c(){s&&s.c(),e=(0,o.space)(),r&&r.c(),n=(0,o.empty)()},m(t,a){s&&s.m(t,a),(0,o.insert)(t,e,a),r&&r.m(t,a),(0,o.insert)(t,n,a),i=!0},p(t,i){null!=t[19]?s?(s.p(t,i),524288&i[0]&&(0,o.transition_in)(s,1)):(s=$t(t),s.c(),(0,o.transition_in)(s,1),s.m(e.parentNode,e)):s&&((0,o.group_outros)(),(0,o.transition_out)(s,1,1,(()=>{s=null})),(0,o.check_outros)()),null!=t[18]?r?(r.p(t,i),262144&i[0]&&(0,o.transition_in)(r,1)):(r=wt(t),r.c(),(0,o.transition_in)(r,1),r.m(n.parentNode,n)):r&&((0,o.group_outros)(),(0,o.transition_out)(r,1,1,(()=>{r=null})),(0,o.check_outros)())},i(t){i||((0,o.transition_in)(s),(0,o.transition_in)(r),i=!0)},o(t){(0,o.transition_out)(s),(0,o.transition_out)(r),i=!1},d(t){t&&((0,o.detach)(e),(0,o.detach)(n)),s&&s.d(t),r&&r.d(t)}}}function xt(t){let e,n,i,s,r,a,l,d,c,u,m,p,h,g,_,f;n=new dt({props:{item:t[0],$$slots:{default:[At]},$$scope:{ctx:t}}});const y=t[27].before,v=(0,o.create_slot)(y,t,t[33],bt),b=[t[14]];var $=t[2];function w(t,e){let n={};for(let t=0;t<b.length;t+=1)n=(0,o.assign)(n,b[t]);return void 0!==e&&16384&e[0]&&(n=(0,o.assign)(n,(0,o.get_spread_update)(b,[(0,o.get_spread_object)(t[14])]))),{props:n}}$&&(r=(0,o.construct_svelte_component)($,w(t)));const A=t[27].after,x=(0,o.create_slot)(A,t,t[33],yt);let k=[{"data-item-type":l=t[0].type},{"data-item-id":d=t[0].id.slice(0,5)},{"data-parent-id":c=t[0].parentId.slice(0,5)},{"data-mon-disabled":u=!!t[7]||void 0},{"data-mon-item-id":m=t[0].id},{class:"mondrian__item-TjghN4"},{tabindex:"-1"}],C={};for(let t=0;t<k.length;t+=1)C=(0,o.assign)(C,k[t]);return{c(){e=(0,o.element)(t[0].tagName??"div"),(0,o.create_component)(n.$$.fragment),i=(0,o.space)(),v&&v.c(),s=(0,o.space)(),r&&(0,o.create_component)(r.$$.fragment),a=(0,o.space)(),x&&x.c(),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,C),(0,o.toggle_class)(e,"mondrian__--debug-1O8sdX",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-2taOid",t[8]),(0,o.toggle_class)(e,"mondrian__--root-Amto2y",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-1drsFa",!t[11]),(0,o.toggle_class)(e,"mondrian__--selected-X6u_q2",t[5]),(0,o.toggle_class)(e,"mondrian__--dropping-into-1h2MEI",t[9]),(0,o.toggle_class)(e,"mondrian__--hover-1j_qym",t[6]),(0,o.toggle_class)(e,"mondrian__--preview-item-Q2gClX",t[4]),(0,o.toggle_class)(e,"mondrian__--clickable-3YP0bP",t[13]),(0,o.set_style)(e,"padding",t[17]),(0,o.set_style)(e,"width",t[23]),(0,o.set_style)(e,"height",t[22]),(0,o.set_style)(e,"border-radius",t[16]),(0,o.set_style)(e,"top",t[20]),(0,o.set_style)(e,"left",t[21]),(0,o.set_style)(e,"z-index",t[15])},m(l,d){(0,o.insert)(l,e,d),(0,o.mount_component)(n,e,null),(0,o.append)(e,i),v&&v.m(e,null),(0,o.append)(e,s),r&&(0,o.mount_component)(r,e,null),(0,o.append)(e,a),x&&x.m(e,null),t[32](e),g=!0,_||(f=[(0,o.listen)(e,"mousedown",t[28]),(0,o.listen)(e,"click",t[29]),(0,o.listen)(e,"keydown",t[30]),(0,o.listen)(e,"keyup",t[31]),(0,o.action_destroyer)(p=t[10].call(null,e,{itemId:t[0].id,enabled:!t[7]})),(0,o.action_destroyer)(h=t[3].call(null,e,t[0]))],_=!0)},p(t,i){const s={};if(1&i[0]&&(s.item=t[0]),786433&i[0]|4&i[1]&&(s.$$scope={dirty:i,ctx:t}),n.$set(s),v&&v.p&&(!g||4&i[1])&&(0,o.update_slot_base)(v,y,t,t[33],g?(0,o.get_slot_changes)(y,t[33],i,vt):(0,o.get_all_dirty_from_scope)(t[33]),bt),4&i[0]&&$!==($=t[2])){if(r){(0,o.group_outros)();const t=r;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}$?(r=(0,o.construct_svelte_component)($,w(t,i)),(0,o.create_component)(r.$$.fragment),(0,o.transition_in)(r.$$.fragment,1),(0,o.mount_component)(r,e,a)):r=null}else if($){const e=16384&i[0]?(0,o.get_spread_update)(b,[(0,o.get_spread_object)(t[14])]):{};r.$set(e)}x&&x.p&&(!g||4&i[1])&&(0,o.update_slot_base)(x,A,t,t[33],g?(0,o.get_slot_changes)(A,t[33],i,ft):(0,o.get_all_dirty_from_scope)(t[33]),yt),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,C=(0,o.get_spread_update)(k,[(!g||1&i[0]&&l!==(l=t[0].type))&&{"data-item-type":l},(!g||1&i[0]&&d!==(d=t[0].id.slice(0,5)))&&{"data-item-id":d},(!g||1&i[0]&&c!==(c=t[0].parentId.slice(0,5)))&&{"data-parent-id":c},(!g||128&i[0]&&u!==(u=!!t[7]||void 0))&&{"data-mon-disabled":u},(!g||1&i[0]&&m!==(m=t[0].id))&&{"data-mon-item-id":m},{class:"mondrian__item-TjghN4"},{tabindex:"-1"}])),p&&(0,o.is_function)(p.update)&&129&i[0]&&p.update.call(null,{itemId:t[0].id,enabled:!t[7]}),h&&(0,o.is_function)(h.update)&&1&i[0]&&h.update.call(null,t[0]),(0,o.toggle_class)(e,"mondrian__--debug-1O8sdX",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-2taOid",t[8]),(0,o.toggle_class)(e,"mondrian__--root-Amto2y",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-1drsFa",!t[11]),(0,o.toggle_class)(e,"mondrian__--selected-X6u_q2",t[5]),(0,o.toggle_class)(e,"mondrian__--dropping-into-1h2MEI",t[9]),(0,o.toggle_class)(e,"mondrian__--hover-1j_qym",t[6]),(0,o.toggle_class)(e,"mondrian__--preview-item-Q2gClX",t[4]),(0,o.toggle_class)(e,"mondrian__--clickable-3YP0bP",t[13]),131072&i[0]&&(0,o.set_style)(e,"padding",t[17]),8388608&i[0]&&(0,o.set_style)(e,"width",t[23]),4194304&i[0]&&(0,o.set_style)(e,"height",t[22]),65536&i[0]&&(0,o.set_style)(e,"border-radius",t[16]),1048576&i[0]&&(0,o.set_style)(e,"top",t[20]),2097152&i[0]&&(0,o.set_style)(e,"left",t[21]),32768&i[0]&&(0,o.set_style)(e,"z-index",t[15])},i(t){g||((0,o.transition_in)(n.$$.fragment,t),(0,o.transition_in)(v,t),r&&(0,o.transition_in)(r.$$.fragment,t),(0,o.transition_in)(x,t),g=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),(0,o.transition_out)(v,t),r&&(0,o.transition_out)(r.$$.fragment,t),(0,o.transition_out)(x,t),g=!1},d(i){i&&(0,o.detach)(e),(0,o.destroy_component)(n),v&&v.d(i),r&&(0,o.destroy_component)(r),x&&x.d(i),t[32](null),_=!1,(0,o.run_all)(f)}}}function kt(t){let e,n,i=t[0].tagName??"div",s=(t[0].tagName??"div")&&xt(t);return{c(){s&&s.c(),e=(0,o.empty)()},m(t,i){s&&s.m(t,i),(0,o.insert)(t,e,i),n=!0},p(t,n){t[0].tagName??"div"?i?(0,o.safe_not_equal)(i,t[0].tagName??"div")?(s.d(1),s=xt(t),i=t[0].tagName??"div",s.c(),s.m(e.parentNode,e)):s.p(t,n):(s=xt(t),i=t[0].tagName??"div",s.c(),s.m(e.parentNode,e)):i&&(s.d(1),s=null,i=t[0].tagName??"div")},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function Ct({event:t}){return"click"===t}function St(t,e,n){let i,s,r,a,l,d,c,u,m,p,h,g,_,{$$slots:f={},$$scope:y}=e,{item:v}=e,{idx:b=0}=e,{isRoot:$=!1}=e,{ItemComponent:w}=e,{bindTriggers:A=(()=>{})}=e,{stateId:x}=e,{isPreviewItem:k=!1}=e,{isSelected:C=!1}=e,{isHovered:S=!1}=e,{isDisabled:z=!1}=e,{isDragging:I=!1}=e,{isDroppingInto:E=!1}=e,{hoverItem:M=(()=>{})}=e,{visible:j}=e;return t.$$set=t=>{"item"in t&&n(0,v=t.item),"idx"in t&&n(24,b=t.idx),"isRoot"in t&&n(1,$=t.isRoot),"ItemComponent"in t&&n(2,w=t.ItemComponent),"bindTriggers"in t&&n(3,A=t.bindTriggers),"stateId"in t&&n(25,x=t.stateId),"isPreviewItem"in t&&n(4,k=t.isPreviewItem),"isSelected"in t&&n(5,C=t.isSelected),"isHovered"in t&&n(6,S=t.isHovered),"isDisabled"in t&&n(7,z=t.isDisabled),"isDragging"in t&&n(8,I=t.isDragging),"isDroppingInto"in t&&n(9,E=t.isDroppingInto),"hoverItem"in t&&n(10,M=t.hoverItem),"visible"in t&&n(11,j=t.visible),"$$scope"in t&&n(33,y=t.$$scope)},t.$$.update=()=>{33554433&t.$$.dirty[0]&&n(26,i=ot(v,x)),67108864&t.$$.dirty[0]&&n(23,s=it(i.width)),67108864&t.$$.dirty[0]&&n(22,r=it(i.height)),67108864&t.$$.dirty[0]&&n(21,a=it(i.x)),67108864&t.$$.dirty[0]&&n(20,l=it(i.y)),67108864&t.$$.dirty[0]&&n(19,d=i.fill),67108864&t.$$.dirty[0]&&n(18,c=i.overlay),67108864&t.$$.dirty[0]&&n(17,u=[i.padding.top,i.padding.right,i.padding.bottom,i.padding.left].map(it).join(" ")),67108864&t.$$.dirty[0]&&n(16,m=it(i.borderRadius.topLeft)),16777216&t.$$.dirty[0]&&n(15,p=9999-b),33554433&t.$$.dirty[0]&&n(14,h=function(t,e){switch(t){case"text":case"shape":return{item:v,stateId:e};default:return{item:v}}}(v.type,x)),1&t.$$.dirty[0]&&n(13,g=v?.triggers.some(Ct))},[v,$,w,A,k,C,S,z,I,E,M,j,_,g,h,p,m,u,c,d,l,a,r,s,b,x,i,f,function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(t){o.binding_callbacks[t?"unshift":"push"]((()=>{_=t,n(12,_)}))},y]}class zt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,St,kt,o.safe_not_equal,{item:0,idx:24,isRoot:1,ItemComponent:2,bindTriggers:3,stateId:25,isPreviewItem:4,isSelected:5,isHovered:6,isDisabled:7,isDragging:8,isDroppingInto:9,hoverItem:10,visible:11},_t,[-1,-1])}}const It=zt;function Et(t){(0,o.append_styles)(t,"svelte-1wgxiik",".mondrian__text-item-base-2GzC1M{display:flex;flex-direction:column;height:100%}.mondrian__text-item-base-2GzC1M[data-vertical-align='top']{justify-content:flex-start}.mondrian__text-item-base-2GzC1M[data-vertical-align='middle']{justify-content:center}.mondrian__text-item-base-2GzC1M[data-vertical-align='bottom']{justify-content:flex-end}.mondrian__text-item-base-2GzC1M .tiptap{height:auto}")}const Mt=t=>({item:1&t}),jt=t=>({item:t[0]});function Nt(t){let e,n,i;const s=t[4].default,r=(0,o.create_slot)(s,t,t[3],jt);return{c(){e=(0,o.element)("div"),r&&r.c(),(0,o.attr)(e,"class","mondrian__text-item-base-2GzC1M"),(0,o.attr)(e,"data-vertical-align",n=t[1].textVerticalAlign)},m(t,n){(0,o.insert)(t,e,n),r&&r.m(e,null),i=!0},p(t,[a]){r&&r.p&&(!i||9&a)&&(0,o.update_slot_base)(r,s,t,t[3],i?(0,o.get_slot_changes)(s,t[3],a,Mt):(0,o.get_all_dirty_from_scope)(t[3]),jt),(!i||2&a&&n!==(n=t[1].textVerticalAlign))&&(0,o.attr)(e,"data-vertical-align",n)},i(t){i||((0,o.transition_in)(r,t),i=!0)},o(t){(0,o.transition_out)(r,t),i=!1},d(t){t&&(0,o.detach)(e),r&&r.d(t)}}}function qt(t,e,n){let o,{$$slots:i={},$$scope:s}=e,{item:r}=e,{stateId:a}=e;return t.$$set=t=>{"item"in t&&n(0,r=t.item),"stateId"in t&&n(2,a=t.stateId),"$$scope"in t&&n(3,s=t.$$scope)},t.$$.update=()=>{5&t.$$.dirty&&n(1,o=ot(r,a))},[r,o,a,s,i]}class Tt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,qt,Nt,o.safe_not_equal,{item:0,stateId:2},Et)}}const Lt=Tt;o.SvelteComponent;var Bt=n(2604),Rt=n.n(Bt),Xt=n(101),Ot=n.n(Xt),Zt=n(5863),Dt=n.n(Zt),Pt=n(3124),Ft=n.n(Pt),Kt=n(6896),Ht=n.n(Kt),Wt=n(9917),Yt=n.n(Wt),Gt=n(4247),Vt={};Vt.styleTagTransform=Yt(),Vt.setAttributes=Ft(),Vt.insert=Dt().bind(null,"head"),Vt.domAPI=Ot(),Vt.insertStyleElement=Ht(),Rt()(Gt.A,Vt);const Ut=Gt.A&&Gt.A.locals?Gt.A.locals:void 0;var Qt=n(3948);const Jt=function(){const t=(0,V.writable)({blockuments:{},items:{},tiptap:{}}),{subscribe:e,set:n,update:o}=t,i=new Map;return{subscribe:e,set:n,update:o,addManifest:(t,e)=>{i.set(t,e),s()},removeManifest:t=>{i.delete(t),s()}};function s(){n(function(...t){const e={};for(const n of t)for(const[t,o]of Object.entries(n))e[t]=Object.assign({},e[t],o);return e}(...i.values()))}}();function te(t){let e,n;return e=new Lt({props:{item:t[0],stateId:t[1],$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n&&(o.item=t[0]),2&n&&(o.stateId=t[1]),68&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function ee(t){let e,n,i,s=(0,Qt.Z)(t[2],G)+"";return{c(){e=(0,o.element)("div"),n=(0,o.element)("div"),(0,o.attr)(n,"class","tiptap"),(0,o.attr)(e,"class",i=Ut.textItem)},m(t,i){(0,o.insert)(t,e,i),(0,o.append)(e,n),n.innerHTML=s},p(t,e){4&e&&s!==(s=(0,Qt.Z)(t[2],G)+"")&&(n.innerHTML=s)},d(t){t&&(0,o.detach)(e)}}}function ne(t){let e,n,i=void 0!==t[2]&&te(t);return{c(){i&&i.c(),e=(0,o.empty)()},m(t,s){i&&i.m(t,s),(0,o.insert)(t,e,s),n=!0},p(t,[n]){void 0!==t[2]?i?(i.p(t,n),4&n&&(0,o.transition_in)(i,1)):(i=te(t),i.c(),(0,o.transition_in)(i,1),i.m(e.parentNode,e)):i&&((0,o.group_outros)(),(0,o.transition_out)(i,1,1,(()=>{i=null})),(0,o.check_outros)())},i(t){n||((0,o.transition_in)(i),n=!0)},o(t){(0,o.transition_out)(i),n=!1},d(t){t&&(0,o.detach)(e),i&&i.d(t)}}}function oe(t,e,n){let i,s,r,a;(0,o.component_subscribe)(t,Jt,(t=>n(5,a=t)));let{item:l}=e,{stateId:d}=e;return t.$$set=t=>{"item"in t&&n(0,l=t.item),"stateId"in t&&n(1,d=t.stateId)},t.$$.update=()=>{3&t.$$.dirty&&n(4,i=l.states[d]),16&t.$$.dirty&&n(3,s=i.text.id),40&t.$$.dirty&&n(2,r=a.tiptap?.[s])},[l,d,r,s,i,a]}class ie extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,oe,ne,o.safe_not_equal,{item:0,stateId:1})}}const se=ie;function re(t){(0,o.append_styles)(t,"svelte-1vwx6yd",".mondrian__surface-3PSuzl{width:100%;position:relative}")}function ae(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function le(t,e){let n,i,s,r;var a=e[0];function l(t,e){return{props:{idx:t[7],itemId:t[5].id}}}return a&&(i=(0,o.construct_svelte_component)(a,l(e))),{key:t,first:null,c(){n=(0,o.empty)(),i&&(0,o.create_component)(i.$$.fragment),s=(0,o.empty)(),this.first=n},m(t,e){(0,o.insert)(t,n,e),i&&(0,o.mount_component)(i,t,e),(0,o.insert)(t,s,e),r=!0},p(t,n){if(e=t,1&n&&a!==(a=e[0])){if(i){(0,o.group_outros)();const t=i;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}a?(i=(0,o.construct_svelte_component)(a,l(e)),(0,o.create_component)(i.$$.fragment),(0,o.transition_in)(i.$$.fragment,1),(0,o.mount_component)(i,s.parentNode,s)):i=null}else if(a){const t={};2&n&&(t.idx=e[7]),2&n&&(t.itemId=e[5].id),i.$set(t)}},i(t){r||(i&&(0,o.transition_in)(i.$$.fragment,t),r=!0)},o(t){i&&(0,o.transition_out)(i.$$.fragment,t),r=!1},d(t){t&&((0,o.detach)(n),(0,o.detach)(s)),i&&(0,o.destroy_component)(i,t)}}}function de(t){let e,n,i=[],s=new Map,r=(0,o.ensure_array_like)(t[1].children);const a=t=>t[5].id;for(let e=0;e<r.length;e+=1){let n=ae(t,r,e),o=a(n);s.set(o,i[e]=le(o,n))}return{c(){e=(0,o.element)("div");for(let t=0;t<i.length;t+=1)i[t].c();(0,o.attr)(e,"class","mondrian__surface-3PSuzl")},m(t,s){(0,o.insert)(t,e,s);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null);n=!0},p(t,[n]){3&n&&(r=(0,o.ensure_array_like)(t[1].children),(0,o.group_outros)(),i=(0,o.update_keyed_each)(i,n,a,1,t,r,s,e,o.outro_and_destroy_block,le,null,ae),(0,o.check_outros)())},i(t){if(!n){for(let t=0;t<r.length;t+=1)(0,o.transition_in)(i[t]);n=!0}},o(t){for(let t=0;t<i.length;t+=1)(0,o.transition_out)(i[t]);n=!1},d(t){t&&(0,o.detach)(e);for(let t=0;t<i.length;t+=1)i[t].d()}}}function ce(t,e,n){let i,s,{item:r}=e,{Item:a=fe}=e;const l=Q.get(r.id);return(0,o.component_subscribe)(t,l,(t=>n(4,s=t))),t.$$set=t=>{"item"in t&&n(3,r=t.item),"Item"in t&&n(0,a=t.Item)},t.$$.update=()=>{24&t.$$.dirty&&n(1,i=r.states[s])},[a,i,l,r,s]}class ue extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,ce,de,o.safe_not_equal,{item:3,Item:0},re)}}const me=ue,pe=(t,e)=>{function n(n,o={}){e.triggers.filter((t=>t.event===n)).forEach((n=>{!function(t,e,n){e.dispatchEvent(new CustomEvent("trigger",{detail:n,bubbles:!0}))}(0,t,{itemId:e.id,triggerId:n.id,...o})}))}const o=[...new Set(e.triggers.map((t=>t.event)))].map((e=>"hover"===e?[et("mouseenter",t,(()=>{n(e,{hovered:!0})})),et("mouseleave",t,(()=>{n(e,{hovered:!1})}))]:et(e,t,(()=>{n(e)})))).flat(2).filter(Boolean);return{destroy(){o.forEach((t=>{t()}))}}};function he(t){let e,n;return e=new It({props:{item:t[2],idx:t[0],isRoot:t[1],stateId:t[5],ItemComponent:t[4],bindTriggers:pe,visible:t[6]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,[n]){const o={};4&n&&(o.item=t[2]),1&n&&(o.idx=t[0]),2&n&&(o.isRoot=t[1]),32&n&&(o.stateId=t[5]),16&n&&(o.ItemComponent=t[4]),64&n&&(o.visible=t[6]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function ge(t,e,n){let i,s,r,a,d,c,u=o.noop;(0,o.component_subscribe)(t,Jt,(t=>n(9,a=t))),t.$$.on_destroy.push((()=>u()));let{itemId:m}=e,{idx:p=0}=e,{isRoot:h=!1}=e;const g=tt.get(m);return(0,o.component_subscribe)(t,g,(t=>n(6,c=t))),t.$$set=t=>{"itemId"in t&&n(8,m=t.itemId),"idx"in t&&n(0,p=t.idx),"isRoot"in t&&n(1,h=t.isRoot)},t.$$.update=()=>{768&t.$$.dirty&&n(2,i=a.items[m]),4&t.$$.dirty&&n(4,s=(t=>({image:()=>l,text:()=>se,group:()=>me,shape:()=>se}[t.type]()))(i)),4&t.$$.dirty&&(n(3,r=Q.get(i.id)),u(),u=(0,o.subscribe)(r,(t=>n(5,d=t))))},[p,h,i,r,s,d,c,g,m,a]}class _e extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,ge,he,o.safe_not_equal,{itemId:8,idx:0,isRoot:1})}}const fe=_e;var ye=n(5608),ve=n(251);function be(t,e){return[...t.querySelectorAll(e)]}function $e(t,e,n,o){return e.addEventListener(t,n,o),()=>{e.removeEventListener(t,n,o)}}var we=n(9205);const Ae=n.n(we)()("mondrian").extend("keyboard"),xe=Object.freeze(["Alt","Control","Meta","Shift"]),ke={activeModifierKeys:new Set,get alt(){return ke.activeModifierKeys.has("Alt")},get meta(){return ke.activeModifierKeys.has("Meta")||ke.activeModifierKeys.has("Control")},get shift(){return ke.activeModifierKeys.has("Shift")},key:void 0,get combo(){return[ke.meta&&"Meta",ke.alt&&"Alt",ke.shift&&"Shift",ke.key].filter(Boolean).join("+")}},Ce=(0,V.readable)(ke,(t=>{function e(e){const n="keydown"===e.type,{key:o}=e;xe.includes(o)?n?ke.activeModifierKeys.add(o):(ke.activeModifierKeys.delete(o),ke.key=void 0):ke.key=n?o:void 0,t(ke)}return window.addEventListener("keydown",e),window.addEventListener("keyup",e),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",e)}})),Se={...Ce,is:t=>(ke.combo&&Ae(`comparing keycombos, store: ${ke.combo}, comparison: ${t}`),ke.combo.toLowerCase()===t.toLowerCase()),on(t,e){const n=n=>{Se.is(t)&&(Ae("keyCombo matched, executing handler",t),e(n))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},reset(){ke.activeModifierKeys.clear(),ke.key=void 0}},ze={down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1},Ie=((0,V.readable)(ze,(t=>{return window.addEventListener("mousedown",e),window.addEventListener("mousemove",o),window.addEventListener("mouseup",n),function(){window.removeEventListener("mousedown",e),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",n)};function e(t){ze.down=!0,ze.downX=ze.x=t.clientX,ze.downY=ze.y=t.clientY,ze.target=t.target,i()}function n(){ze.down=!1,ze.downX=ze.x=ze.downY=ze.y=-1,ze.target=void 0,i()}function o(t){ze.x=t.x,ze.y=t.y,i()}function i(){t(ze)}})),"mondrian-suspense");var Ee,Me,je=n(5942);class Ne extends ve.WF{get $form(){return(0,ye.gn)(this,Me,"f")?.form??null}get $slotted(){return this.$$$("*")}constructor(){super(),Ee.set(this,[]),Me.set(this,void 0),this.$=t=>function(t,e){return t.querySelector(e)}(this.shadowRoot,t),this.$$=t=>be(this.shadowRoot,t),this.$$$=(t,e)=>{const n=e?`slot[name="${e}"]`:"slot:not([name])",o=this.$(n);return o?o.assignedElements({flatten:!0}).map((e=>e.matches(t)?[e]:be(e,t))).flat():(console.warn(`Could not query ${n} within ${this.tagName.toLowerCase()} because it does not exist.`),[])},this.hasSlotted=t=>this.$slotted.some((e=>e.contains(t))),this.hasWithin=t=>this.contains(t)||this.hasSlotted(t),this.unbindEvents=()=>{(0,ye.gn)(this,Ee,"f").forEach((t=>t()))},this.collectOff=t=>{(0,ye.gn)(this,Ee,"f").push(t)},this.on=(t,e,n)=>{const o=$e(t,this,e,n);return this.collectOff(o),o},this.dispatch=(t,e={})=>function(t,e,n={},o={}){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,...o,detail:n}))}(this,t,e),this.constructor.formAssociated&&(0,ye.GG)(this,Me,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}Ee=new WeakMap,Me=new WeakMap,Ne.shadowRootOptions={...ve.WF.shadowRootOptions,delegatesFocus:!0};const qe=ve.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    width: var(--width, fit-content);
  }

  :host([block]) {
    --width: 100%;
  }

  :host([size='s']) {
    --height: 2.4rem;
    --font-size: 1.2rem;
  }

  :host([size='m']) {
    --height: 3.2rem;
    --font-size: 1.4rem;
  }

  :host([kind='primary']) {
    --background-color: var(--mon-color-primary);
    --color: var(--art-color-mono-white);
  }

  :host([kind='primary-ghost']) {
    --border-color: var(--mon-color-primary);
    --color: var(--mon-color-primary);
  }

  :host([kind='secondary']) {
    --background-color: var(--art-color-mono-black);
    --color: var(--art-color-mono-white);
  }

  :host([kind='secondary-ghost']) {
    --border-color: var(--art-color-neutral-600);
    --color: var(--art-color-mono-black);
  }

  :host([kind='danger']) {
    --background-color: var(--art-color-critical-root);
    --color: var(--art-color-mono-white);
  }

  :host([kind='danger-ghost']) {
    --border-color: var(--art-color-critical-root);
    --color: var(--art-color-critical-root);
  }

  :host .button {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    border: 1px solid var(--border-color, transparent);
    background-color: var(--background-color, transparent);
    color: var(--color, var(--art-color-mono-black));
    height: var(--height, auto);
    font-size: var(--font-size, auto);
    font-weight: var(--art-font-weight-600);
    white-space: nowrap;
    border-radius: var(--height, 0);
    padding: 0 1.25em;
    transition: all ease-in-out 0.1s;
  }

  :host .button[aria-disabled='true'] {
    pointer-events: none;
  }

  :host .mon-button-contents:has(.button[aria-disabled='true']) {
    cursor: not-allowed;
  }
`;let Te=class extends Ne{constructor(){super(...arguments),this.kind="primary",this.size="m",this.type="button",this.href=void 0,this.block=!1,this.disabled=!1}get submits(){return"submit"===this.type&&!this.disabled}bindEvents(){this.on("click",(()=>{this.submits&&this.$form?.requestSubmit()}))}render(){return this.href?ve.qy`
        <div class="mon-button-contents">
          <a
            class="button"
            href=${this.href}
            aria-disabled="${JSON.stringify(this.disabled)}"
          >
            <slot />
          </a>
        </div>
      `:ve.qy`
      <div class="mon-button-contents">
        <button
          class="button"
          type=${this.type}
          ${this.disabled?'disabled="true"':""}
          aria-disabled="${JSON.stringify(this.disabled)}"
        >
          <slot />
        </button>
      </div>
    `}};Te.formAssociated=!0,Te.styles=qe,(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Te.prototype,"kind",void 0),(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Te.prototype,"size",void 0),(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Te.prototype,"type",void 0),(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Te.prototype,"href",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],Te.prototype,"block",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],Te.prototype,"disabled",void 0),Te=(0,ye.Cg)([(0,je.EM)("mon-button")],Te);const Le=ve.AH`
  :host {
    cursor: pointer;
    display: flex;
    gap: var(--art-space-1);
    padding: var(--art-space-1) var(--art-space-2);
    background-color: var(--art-color-mono-white);
  }

  :host([selected]) {
    background-color: var(--art-color-blue-100);
  }

  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: var(--_icon-size);
    height: var(--_icon-size);
  }

  .content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;let Be=class extends Ne{constructor(){super(...arguments),this.selected=!1,this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("mouseleave",(()=>{this.dispatch("hover",{value:this.value,hovered:!1})}))}}updated(t){t.has("selected")&&this.dispatch("change:selected",{selected:t.get("selected"),value:this.value})}render(){return ve.qy`
      <slot name="icon"></slot>
      <span class="content">
        <slot></slot>
      </span>
    `}};Be.formAssociated=!0,Be.styles=Le,(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Be.prototype,"name",void 0),(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Be.prototype,"value",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],Be.prototype,"selected",void 0),(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Be.prototype,"for",void 0),Be=(0,ye.Cg)([(0,je.EM)("mon-menu-item")],Be);const Re=ve.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--art-color-neutral-600);
    display: block;
    position: relative;
    max-width: 100%;
  }

  :host(:is(:hover, :focus-within)) {
    --icon-color: var(--art-color-blue-600);
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    display: flex;
    gap: var(--art-space-1);
    border: 1px solid var(--mon-color-border);
    border-radius: var(--art-border-radius-md);
    background: var(--art-color-mono-white);
    padding: var(--art-space-1) var(--art-space-2);
    text-align: left;
    font-family: inherit;
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: 12px;
    height: 12px;
    fill: var(--icon-color);
  }

  .menu {
    --inset: calc(100% + var(--art-space-0-5)) 0 auto 0;
    width: fit-content;
  }
`;let Xe=class extends Ne{constructor(){super(...arguments),this.open=!1,this.value=null,this.onSubmit=t=>{this.value=t.detail.value,this.open=!1},this.onClickOutside=t=>{this.hasWithin(t.detail.$target)||(this.open=!1)},this.onClickTrigger=()=>{this.open=!this.open},this.onKeyUp=t=>{"ArrowDown"===t.key&&(t.preventDefault(),this.open=!0)},this.onSlotChange=()=>{this.value||(this.value=this.$selected?.value??null)},this.onSelectedChange=()=>{this.value=this.$selected?.value??null},this.renderLabel=()=>{if(this.value)return this.$$$(`mon-menu-item[value="${this.value}"]`)[0]?.innerText}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}renderTrigger(){const t=this.renderLabel()??ve.qy`<slot name="placeholder">Choose an item…</slot>`;return ve.qy`
      <button
        @click=${this.onClickTrigger}
        @keyup=${this.onKeyUp}
        type="button"
        class="trigger"
      >
        <span class="trigger-content"> ${t} </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?ve.qy`
      <mon-menu
        class="menu"
        name=${this.name}
        floating
        autofocusit
        @clickoutside=${this.onClickOutside}
        @mon-menu:submit=${this.onSubmit}
      >
        <slot
          @change:selected=${this.onSelectedChange}
          @slotchange=${this.onSlotChange}
        ></slot>
      </mon-menu>
    `:ve.qy`
        <slot
          class="hidden"
          @change:selected=${this.onSelectedChange}
          @slotchange=${this.onSlotChange}
        ></slot>
      `}render(){return ve.qy` ${this.renderTrigger()} ${this.renderMenu()} `}};var Oe;Xe.styles=Re,(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],Xe.prototype,"name",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],Xe.prototype,"open",void 0),(0,ye.Cg)([(0,je.wk)()],Xe.prototype,"value",void 0),Xe=(0,ye.Cg)([(0,je.EM)("mon-dropdown")],Xe);const Ze=ve.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    background: var(--art-color-mono-white);
    border-radius: var(--art-border-radius-md);
    padding: var(--art-space-1) 0;
  }

  :host([bordered]) {
    border: 1px solid var(--mon-color-border);
  }

  :host([floating]) {
    position: var(--position, absolute);
    inset: var(--inset, 100% 0 auto 0);
    z-index: 99999;
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;let De=class extends Ne{constructor(){super(...arguments),this.bordered=!0,this.floating=!1,this.autofocusit=!1,this.value=null,this.pressing=!1,this.bindEvents=()=>{this.on("change",this.onChange),this.on("click",this.onClick),this.on("keydown",this.onKeydown),this.on("keyup",this.onKeyup),this.on("mouseover",this.onMouseover),this.collectOff($e("mousedown",window,(t=>{t.target instanceof HTMLElement&&!this.hasWithin(t.target)&&this.dispatch("clickoutside",{$target:t.target})})))},this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.choose=t=>{const e=t.closest("label")?.querySelector("input");e&&(e.checked=!0,e.focus(),e.dispatchEvent(new Event("change",{bubbles:!0})))},this.focusFirstApplicableItem=()=>{const t=this.$selected??this.$$$("mon-menu-item")[0];t&&this.choose(t)},this.onMouseover=t=>{t.target instanceof Be&&this.choose(t.target)},this.onChange=t=>{this.value=t.target.value??null,this.$slotted.forEach((t=>{const e=t.querySelector("mon-menu-item");e&&e.toggleAttribute("selected",e.value===this.value)}))},this.onClick=t=>{!this.pressing&&t.target instanceof HTMLInputElement&&requestAnimationFrame((()=>{this.submit()}))},this.onKeyup=t=>{const{key:e}=t;"Enter"!==e&&" "!==e||this.submit(),this.pressing=!1},this.onKeydown=()=>{this.pressing=!0},this.onSlotChange=()=>{this.wrapSlots(),this.autofocusit&&this.focusFirstApplicableItem()},this.wrapSlots=()=>{this.$slotted.forEach((t=>{if(!(t instanceof Be))return;const e=document.createElement("div"),n=document.createElement("li");t.replaceWith(e),(0,ve.XX)(ve.qy`
          <label ?for=${t.for}>
            ${(0,ye.gn)(this,Oe,"f").call(this,t)} ${t}
          </label>
        `,n),e.replaceWith(n)}))},Oe.set(this,(t=>null!=t.for?ve.qy``:ve.qy`
      <input
        type="radio"
        role="menuitem"
        checked=${t.selected}
        name=${this.name}
        value=${t.value}
        class="mon-visually-hidden"
      />
    `))}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}render(){return ve.qy`
      <ul
        aria-label=${this.getAttribute("aria-label")}
        class="list"
        role="menu"
      >
        <slot @slotchange=${this.onSlotChange}>
          <li>Nothing to see here…</li>
        </slot>
      </ul>
    `}};function Pe(t){(0,o.append_styles)(t,"svelte-1ooljvd",".mondrian__suspense-3tgPBN.mondrian__--loading-3irTkJ{visibility:hidden}")}Oe=new WeakMap,De.styles=Ze,(0,ye.Cg)([(0,je.MZ)({type:String,reflect:!0})],De.prototype,"name",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],De.prototype,"bordered",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],De.prototype,"floating",void 0),(0,ye.Cg)([(0,je.MZ)({type:Boolean,reflect:!0})],De.prototype,"autofocusit",void 0),De=(0,ye.Cg)([(0,je.EM)("mon-menu")],De),n(2466),o.SvelteComponent,n(9777),o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,n(2732),o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent;const Fe=t=>({isLoading:1&t}),Ke=t=>({isLoading:t[0]});function He(t){let e,n;const i=t[2].default,s=(0,o.create_slot)(i,t,t[1],Ke);return{c(){e=(0,o.element)("div"),s&&s.c(),(0,o.attr)(e,"class","mondrian__suspense-3tgPBN"),(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},m(t,i){(0,o.insert)(t,e,i),s&&s.m(e,null),n=!0},p(t,[r]){s&&s.p&&(!n||3&r)&&(0,o.update_slot_base)(s,i,t,t[1],n?(0,o.get_slot_changes)(i,t[1],r,Fe):(0,o.get_all_dirty_from_scope)(t[1]),Ke),(!n||1&r)&&(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function We(t,e,n){let{$$slots:o={},$$scope:i}=e;const s=function(){const t=new Set;return(0,d.setContext)(Ie,t),t}();let r=!0;return(0,d.onMount)((()=>{Promise.all(s).then((()=>{n(0,r=!1)}))})),t.$$set=t=>{"$$scope"in t&&n(1,i=t.$$scope)},[r,i,o]}class Ye extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,We,He,o.safe_not_equal,{},Pe)}}const Ge=Ye;o.SvelteComponent,o.SvelteComponent;const Ve={[E](t,e,n,o){const i="self"===t.targetId?n:o[t.targetId];!1===e.hovered?Q.get(i.id)?.revert():Q.get(i.id)?.set(t.targetState)},[M](t,e,n,o){const i="self"===t.targetId?n:o[t.targetId];!1===e.hovered?tt.get(i.id)?.set(!t.targetVisibility):tt.get(i.id)?.set(t.targetVisibility)}},Ue=(t,e)=>{const n=et("trigger",t,(t=>{const{itemId:n,triggerId:o,...i}=t.detail,s=e[n];if(!s)throw new Error(`Could not execute trigger ${o} on item ${n} because the item could not be found.`);const r=s?.triggers.find((t=>t.id===o));if(!r)throw new Error(`Could not execute trigger ${o} on item ${n} because the trigger could not be found.`);const a=Ve[r.action];if(!a)throw new Error(`Could not execute trigger ${o} on item ${n} because an appropriate handler for its '${r.action}' action could not be found.`);a(r,i,s,e)}));return{destroy(){n()}}};function Qe(t){(0,o.append_styles)(t,"svelte-1cqy2hj",".mondrian__preview-3xSDFv{display:flex;justify-content:center;position:relative;z-index:0}.mondrian__preview--empty-1NrG6Q{background-color:var(--art-color-neutral-050)}")}function Je(t){let e,n;return e=new Ge({props:{$$slots:{default:[en]},$$scope:{ctx:t}}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};258&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function tn(t){let e,n,i,s;return{c(){e=(0,o.element)("div"),n=(0,o.text)("Block "),i=(0,o.text)(t[0]),s=(0,o.text)(" could not be loaded")},m(t,r){(0,o.insert)(t,e,r),(0,o.append)(e,n),(0,o.append)(e,i),(0,o.append)(e,s)},p(t,e){1&e&&(0,o.set_data)(i,t[0])},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function en(t){let e,n,i,s,r,a;return n=new fe({props:{itemId:t[7].id,isRoot:!0}}),{c(){e=(0,o.element)("div"),(0,o.create_component)(n.$$.fragment),(0,o.attr)(e,"class","mondrian__preview-3xSDFv"),(0,o.toggle_class)(e,"mondrian__preview--empty-1NrG6Q",t[1])},m(l,d){(0,o.insert)(l,e,d),(0,o.mount_component)(n,e,null),s=!0,r||(a=(0,o.action_destroyer)(i=Ue.call(null,e,t[3])),r=!0)},p(t,n){(!s||2&n)&&(0,o.toggle_class)(e,"mondrian__preview--empty-1NrG6Q",t[1])},i(t){s||((0,o.transition_in)(n.$$.fragment,t),s=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),s=!1},d(t){t&&(0,o.detach)(e),(0,o.destroy_component)(n),r=!1,a()}}}function nn(t){let e,n,i,s;const r=[tn,Je],a=[];function l(t,e){return 1===e?function(t){const e=t.slice(),n=e[3][e[4]];return e[7]=n,e}(t):t}return e=function(t,e){return void 0===t[2]||void 0===t[4]?0:1}(t),n=a[e]=r[e](l(t,e)),{c(){n.c(),i=(0,o.empty)()},m(t,n){a[e].m(t,n),(0,o.insert)(t,i,n),s=!0},p(t,[o]){n.p(l(t,e),o)},i(t){s||((0,o.transition_in)(n),s=!0)},o(t){(0,o.transition_out)(n),s=!1},d(t){t&&(0,o.detach)(i),a[e].d(t)}}}function on(t,e,n){let o,{manifest:i}=e,{blockumentId:s}=e;const r=Symbol("LearnComponent"),a=i.blockuments?.[s],l=i.items??{},c=a?.children[0]?.id;return Jt.addManifest(r,i),Object.values(l).forEach((t=>{Q.add(t.id,(0,V.readable)(t.initialState)),tt.add(t.id,(0,V.readable)(t.initialVisible))})),(0,d.onMount)((()=>{Q.resetAll(),tt.resetAll()})),(0,d.onDestroy)((()=>{Jt.removeManifest(r)})),t.$$set=t=>{"manifest"in t&&n(5,i=t.manifest),"blockumentId"in t&&n(0,s=t.blockumentId)},n(1,o=1===Object.keys(l).length),[s,o,a,l,c,i]}class sn extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,on,nn,o.safe_not_equal,{manifest:5,blockumentId:0},Qe)}}const rn=sn;var an=n(2834),ln=n.n(an);const dn=((t,e={},n="div")=>o=>{const i=(0,an.useRef)(null),s=(0,an.useRef)(null),[r,a]=(0,an.useState)(!1);return(0,an.useEffect)((()=>{const e=/on([A-Z]{1,}[a-zA-Z]*)/,n=/watch([A-Z]{1,}[a-zA-Z]*)/;s.current=new t({target:i.current,props:o});const r=[];for(const t in o){const i=t.match(e),a=t.match(n);null!=i&&"function"==typeof o[t]&&s.current.$on(`${i[1][0].toLowerCase()}${i[1].slice(1)}`,o[t]),null!=a&&"function"==typeof o[t]&&r.push([`${a[1][0].toLowerCase()}${a[1].slice(1)}`,o[t]])}if(r.length>0){const t=s.current.$$.update;s.current.$$.update=function(){r.forEach((([t,e])=>{if(null!==s.current){const n=s.current.$$.props[t];e(s.current.$$.ctx[n])}})),t.apply(null)}}return()=>{null!==s.current&&s.current.$destroy()}}),[o]),(0,an.useEffect)((()=>{r?null!==s.current&&s.current.$set(o):a(!0)}),[o,r]),ln().createElement(n,{ref:i,style:e})})(rn),cn=t=>ln().createElement(dn,{...t})}}]);
//# sourceMappingURL=52197d92.js.map
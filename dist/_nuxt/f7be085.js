(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(t,e,r){var content=r(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("bb7e2ade",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r(206)},216:function(t,e,r){var n=r(34)(!1);n.push([t.i,".loader-container{background-color:var(--bgColor);border:4px solid var(--borderColor);display:grid;flex:1 1 50%;padding:1em;position:relative;transition:all .2s}.loader-container svg.single-loader{align-self:center;max-height:50vh;width:100%}",""]),t.exports=n},229:function(t,e,r){"use strict";r.r(e);r(215);var n=r(22),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader-container"},[t.$state.codeActive||t.$state.styleActive||t.$state.shapeActive?t._e():[r("p",[t._v("Select a language to start")])],t._v(" "),t.$state.codeActive&&!t.$state.styleActive?[r("p",[t._v("Select a style to start")])]:t._e(),t._v(" "),t.$state.codeActive&&t.$state.styleActive&&!t.$state.shapeActive?[r("p",[t._v("Select a shape to start")])]:t._e(),t._v(" "),"spinner1"===t.$state.styleActive?[r("svg",{directives:[{name:"show",rawName:"v-show",value:t.$state.renderComponent,expression:"$state.renderComponent"}],ref:"spinnerLoaderRef",staticClass:"single-loader",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",overflow:"visible",fill:t.$state.fillColor,stroke:t.$state.fillColor}},[r("defs",["custom"===t.$state.shapeActive?[r("svg",{attrs:{id:"spinner"},domProps:{innerHTML:t._s(t.$state.customShape)}})]:t._e(),t._v(" "),"circle"===t.$state.shapeActive?[r("circle",{attrs:{id:"spinner",r:"4",cx:"50",cy:"50",transform:"translate(0 -30)"}})]:t._e(),t._v(" "),"square"===t.$state.shapeActive?[r("rect",{attrs:{id:"spinner",x:"15",y:"45",width:"10",height:"10"}})]:t._e(),t._v(" "),"triangle"===t.$state.shapeActive?[r("polygon",{attrs:{id:"spinner",points:"20,40 28,55 12,55"}})]:t._e(),t._v(" "),"rect"===t.$state.shapeActive?[r("rect",{attrs:{id:"spinner",x:"15",y:"40",width:"10",height:"20",rx:"2",ry:"2"}})]:t._e(),t._v(" "),"bar"===t.$state.shapeActive?[r("rect",{attrs:{id:"spinner",x:"46.5",y:"40",width:"7",height:"20",rx:"2",ry:"2",transform:"translate(0 -30)"}})]:t._e()],2),t._v(" "),"SMIL"===t.$state.codeActive?t._l(12,(function(e,i){return r("use",{key:"smilSpinner"+i,attrs:{"xlink:href":"#spinner",transform:"rotate("+30*i+" 50 50)"}},[t.$state.effectActive.includes("opacity")?[r("animate",{attrs:{attributeName:"opacity",values:"0;1;0",dur:"1s",begin:.08*i+"s",repeatCount:"indefinite"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("translate")?[r("animateTransform",{attrs:{attributeName:"transform",type:"translate",additive:"sum",dur:"1s",begin:.08*i+"s",repeatCount:"indefinite",from:"0 0",to:"10"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("rotate")?[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",additive:"sum",dur:"1s",begin:""+.08*i,repeatCount:"indefinite",from:"0 80 90",to:"360 "+3*i+" 10"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("scale")?[r("animateTransform",{attrs:{attributeName:"transform",type:"scale",additive:"sum",dur:"1s",begin:.08*i+"s",repeatCount:"indefinite",from:"0",to:"1"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("skew")?[r("animateTransform",{attrs:{attributeName:"transform",type:"skewX",additive:"sum",dur:"1s",begin:.08*i+"s",repeatCount:"indefinite",from:"0",to:"20"}})]:t._e()],2)})):t._e(),t._v(" "),"SASS"===t.$state.codeActive&&t.$state.computedAnimationBoth.length>0?t._l(12,(function(e,i){return r("g",{key:"sassSpinner"+i,attrs:{transform:"rotate("+30*i+" 50 50)"}},[r("use",{style:{animation:t.$state.computedAnimationBoth[i].join(",")},attrs:{"xlink:href":"#spinner"}})])})):t._e()],2)]:t._e(),t._v(" "),"inline1"===t.$state.styleActive?[r("svg",{directives:[{name:"show",rawName:"v-show",value:t.$state.renderComponent,expression:"$state.renderComponent"}],ref:"inlineLoaderRef",staticClass:"single-loader",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",overflow:"visible",fill:t.$state.fillColor}},[r("defs",["custom"===t.$state.shapeActive?[r("svg",{attrs:{id:"inline"},domProps:{innerHTML:t._s(t.$state.customShape)}})]:t._e(),t._v(" "),"circle"===t.$state.shapeActive?[r("circle",{attrs:{id:"inline",cx:"20",cy:"50",r:"6"}})]:t._e(),t._v(" "),"square"===t.$state.shapeActive?[r("rect",{attrs:{id:"inline",x:"15",y:"45",width:"10",height:"10"}})]:t._e(),t._v(" "),"triangle"===t.$state.shapeActive?[r("polygon",{attrs:{id:"inline",points:"20,40 28,55 12,55"}})]:t._e(),t._v(" "),"rect"===t.$state.shapeActive?[r("rect",{attrs:{id:"inline",x:"10",y:"45",width:"16",height:"10",rx:"2",ry:"2"}})]:t._e(),t._v(" "),"bar"===t.$state.shapeActive?[r("rect",{attrs:{id:"inline",x:"15",y:"40",width:"10",height:"20",rx:"2",ry:"2"}})]:t._e()],2),t._v(" "),"SMIL"===t.$state.codeActive?t._l(4,(function(e,i){return r("use",{key:"smilInline"+i,attrs:{"xlink:href":"#inline",x:""+20*i}},[t.$state.effectActive.includes("opacity")?[r("animate",{attrs:{attributeName:"opacity",values:"0;1;0",dur:"1s",begin:.25*i+"s",repeatCount:"indefinite"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("translate")?[r("animateTransform",{attrs:{attributeName:"transform",type:"translate",additive:"sum",dur:"1s",begin:.25*i+"s",repeatCount:"indefinite",from:"0 0",to:"10"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("rotate")?[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",additive:"sum",dur:"1s",begin:""+.25*i,repeatCount:"indefinite",from:"0 60 70",to:"360 "+20*i+" 70"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("scale")?[r("animateTransform",{attrs:{attributeName:"transform",type:"scale",additive:"sum",dur:"1s",begin:.25*i+"s",repeatCount:"indefinite",from:"0",to:"1.2"}})]:t._e(),t._v(" "),t.$state.effectActive.includes("skew")?[r("animateTransform",{attrs:{attributeName:"transform",type:"skewX",additive:"sum",dur:"1s",begin:.25*i+"s",repeatCount:"indefinite",from:"0",to:"20"}})]:t._e()],2)})):t._e(),t._v(" "),"SASS"===t.$state.codeActive&&t.$state.computedAnimationBoth.length>0?t._l(4,(function(e,i){return r("use",{key:"sassInline"+i,style:{animation:t.$state.computedAnimationBoth[i].join(",")},attrs:{"xlink:href":"#inline",x:""+20*i}})})):t._e()],2)]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);
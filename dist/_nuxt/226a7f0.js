(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{224:function(t,e,n){"use strict";n.r(e);var l={methods:{setStyle:function(t){var e=this;this.$state.styleActive=t;for(var i=0;i<this.$state.styles.length;i++)this.$state.styles[i].id===t&&(this.$state.loaderCurrent=this.$state.styles[i].use);"SASS"===this.$state.codeActive&&(this.setEffect("opacity"),this.setEffect("opacity"),"inline1"===this.$state.styleActive&&this.$nextTick((function(){e.$state.stylesCode=e.$parent.$refs.stylesInline.innerHTML})),"spinner1"===this.$state.styleActive&&this.$nextTick((function(){e.$state.stylesCode=e.$parent.$refs.stylesSpinner.innerHTML}))),this.getSmilCode()},getSmilCode:function(){var t=this;this.$nextTick((function(){"spinner1"===t.$state.styleActive&&(t.$state.loaderSmil=t.$parent.$refs.spinnerLoaderRef.innerHTML,t.$state.loaderSmil=t.$state.loaderSmil.replaceAll("\x3c!----\x3e","").replaceAll("normal none running","")),"inline1"===t.$state.styleActive&&(t.$state.loaderSmil=t.$parent.$refs.inlineLoaderRef.innerHTML,t.$state.loaderSmil=t.$state.loaderSmil.replaceAll("\x3c!----\x3e","").replaceAll("normal none running",""))}))}}},r=n(22),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"style-bar-box"},[n("h3",[t._v("Style:")]),t._v(" "),n("div",t._l(t.$state.styles,(function(style){return n("div",{key:style.id,staticClass:"loop-container style-option",class:{active:t.$state.styleActive===style.id},on:{click:function(e){return t.setStyle(style.id)}}},[n("svg",{attrs:{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",overflow:"visible",fill:"#84c9d2"},domProps:{innerHTML:t._s(style.svg)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[38,48],{303:function(e,t,r){},304:function(e,t,r){e.exports=r.p+"assets/img/link.03ea4d17.svg"},305:function(e,t,r){"use strict";r(303)},306:function(e,t,r){"use strict";r.r(t);var a={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},s=(r(305),r(41)),o=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?t("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[t("img",{attrs:{src:r(304)}})]):this._e()],2)}),[],!1,null,null,null);t.default=o.exports},454:function(e,t,r){},597:function(e,t,r){"use strict";r(454)},647:function(e,t,r){"use strict";r.r(t);r(10);var a=r(307),s=r(306),o={components:{Cropper:a.c,ExampleWrapper:s.default},data:function(){return{image:"https://images.unsplash.com/photo-1604335079441-274c03ad99a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80"}},methods:{reset:function(){this.image=null},uploadImage:function(e){var t=this.$refs.cropper.getResult().canvas;if(t){var r=new FormData;t.toBlob((function(e){r.append("file",e),fetch("http://example.com/upload/",{method:"POST",body:r})}),"image/jpeg")}}}},p=(r(597),r(41)),n=Object(p.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("example-wrapper",{staticClass:"upload-to-server-example",attrs:{"no-border":!0,href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/upload-to-server-example.vue"}},[t("div",{staticClass:"cropper-wrapper"},[t("cropper",{ref:"cropper",attrs:{src:this.image}})],1),this._v(" "),t("div",{staticClass:"button-wrapper"},[t("span",{staticClass:"button",on:{click:this.uploadImage}},[this._v(" Crop image ")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
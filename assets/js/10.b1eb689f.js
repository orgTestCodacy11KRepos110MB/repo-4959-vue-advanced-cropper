(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(t,i,s){},334:function(t,i,s){t.exports=s.p+"assets/img/zoom-in.183e2f11.svg"},335:function(t,i,s){t.exports=s.p+"assets/img/zoom-out.2312de1c.svg"},336:function(t,i,s){t.exports=s.p+"assets/img/arrow-top.83788133.svg"},337:function(t,i,s){t.exports=s.p+"assets/img/arrow-left.68982e03.svg"},338:function(t,i,s){t.exports=s.p+"assets/img/arrow-right.94faf580.svg"},339:function(t,i,s){t.exports=s.p+"assets/img/arrow-bottom.a1a804cf.svg"},340:function(t,i,s){t.exports=s.p+"assets/img/girl-in-green.dfe942b2.jpg"},341:function(t,i,s){"use strict";var e=s(182);s.n(e).a},372:function(t,i,s){"use strict";s.r(i);var e={components:{Cropper:s(11).b},data:function(){return{image:s(340),size:{width:null,height:null}}},methods:{boundaries:function(t){var i=t.cropper;t.imageSize;return{width:i.clientWidth,height:i.clientHeight}},updateSize:function(t){var i=t.coordinates;this.size.width=Math.round(i.width),this.size.height=Math.round(i.height)},zoom:function(t){this.$refs.cropper.zoom(t)},move:function(t){"left"===t?this.$refs.cropper.move(-this.size.width/4):"right"===t?this.$refs.cropper.move(this.size.width/4):"top"===t?this.$refs.cropper.move(0,-this.size.height/4):"bottom"===t&&this.$refs.cropper.move(0,this.size.height/4)}}},o=(s(341),s(1)),r=Object(o.a)(e,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"manipulate-image-example"},[e("Cropper",{ref:"cropper",attrs:{classname:"coodinates-cropper",src:t.image,boundaries:t.boundaries,"stencil-props":{minAspectRatio:.5}},on:{change:t.updateSize}}),t._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"button",attrs:{title:"Zoom In"},on:{click:function(i){return t.zoom(2)}}},[e("img",{attrs:{src:s(334)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Zoom Out"},on:{click:function(i){return t.zoom(.5)}}},[e("img",{attrs:{src:s(335)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Top"},on:{click:function(i){return t.move("top")}}},[e("img",{attrs:{src:s(336)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Left"},on:{click:function(i){return t.move("left")}}},[e("img",{attrs:{src:s(337)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Right"},on:{click:function(i){return t.move("right")}}},[e("img",{attrs:{src:s(338)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Bottom"},on:{click:function(i){return t.move("bottom")}}},[e("img",{attrs:{src:s(339)}})])]),t._v(" "),t.size.width&&t.size.height?e("div",{staticClass:"size-info"},[e("div",[t._v("Width: "+t._s(t.size.width)+"px")]),t._v(" "),e("div",[t._v("Height: "+t._s(t.size.height)+"px")])]):t._e()],1)},[],!1,null,null,null);i.default=r.exports}}]);
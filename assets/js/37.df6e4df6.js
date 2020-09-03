(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{281:function(t,a,s){t.exports=s.p+"assets/img/cropper-structure.c241d64b.svg"},282:function(t,a,s){t.exports=s.p+"assets/img/stencil-structure.52cc4434.svg"},410:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"customize-appearance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customize-appearance","aria-hidden":"true"}},[t._v("#")]),t._v(" Customize appearance")]),t._v(" "),e("h2",{attrs:{id:"cropper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cropper","aria-hidden":"true"}},[t._v("#")]),t._v(" Cropper")]),t._v(" "),e("p",[t._v("There are plenty of ways to customize cropper, and there will be described the most important ones.")]),t._v(" "),e("p",[t._v("Below schematically represented the internal structure of cropper and its main components.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(281),alt:"Internal structure"}})]),t._v(" "),e("h3",{attrs:{id:"cropper-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cropper-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Cropper")]),t._v(" "),e("p",[t._v("To customize "),e("code",[t._v("cropper")]),t._v(" itself, that can be imagined as wrapper for the "),e("code",[t._v("area")]),t._v(", "),e("code",[t._v("background")]),t._v(" and "),e("code",[t._v("image")]),t._v(", you can pass class name to "),e("code",[t._v("classname")]),t._v(" prop.")]),t._v(" "),e("p",[t._v("It can be useful if you want to set background of filled area at the scheme above or don't want to create and style cropper wrapper.")]),t._v(" "),e("h3",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[t._v("#")]),t._v(" Image")]),t._v(" "),e("p",[t._v("You can apply different effects (for example blurring) to image by passing custom class name to "),e("code",[t._v("imageClass")]),t._v(" prop. By default it has "),e("code",[t._v("0.5")]),t._v(" only opacity.")]),t._v(" "),e("h3",{attrs:{id:"background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[t._v("#")]),t._v(" Background")]),t._v(" "),e("p",[t._v("Background is literally background directly under image. By default it's black rectangle, but you are able to change, let's say, its color by passing class name to "),e("code",[t._v("backgroundClass")]),t._v(" prop.")]),t._v(" "),e("h2",{attrs:{id:"styling-notice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styling-notice","aria-hidden":"true"}},[t._v("#")]),t._v(" Styling notice")]),t._v(" "),e("p",[t._v("There is only one way to change the styling of cropper and default stencils: add additional classes to them.\nPassing inline styles is not supported now.")]),t._v(" "),e("h3",{attrs:{id:"scoped-styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scoped-styles","aria-hidden":"true"}},[t._v("#")]),t._v(" Scoped styles")]),t._v(" "),e("p",[t._v("If you use "),e("code",[t._v("vue-loader")]),t._v(" "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoped css"),e("OutboundLink")],1),t._v(", you will not be able to pass the scoped class name to stencil,\nbackground and image, because they are children components of cropper:")]),t._v(" "),e("blockquote",[e("p",[t._v("With scoped, the parent component's styles will not leak into child components. However, a child component's root node will be affected by both the parent's scoped CSS and the child's scoped CSS. This is by design so that the parent can style the child root element for layout purposes.")])]),t._v(" "),e("p",[t._v("To bypass this limitation you can:")]),t._v(" "),e("ul",[e("li",[t._v("Use "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[t._v("not scoped classes"),e("OutboundLink")],1),t._v(" for a background, stencil and image.")]),t._v(" "),e("li",[t._v("Use "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("the deep selector"),e("OutboundLink")],1),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(">>> .background")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"stencil"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stencil","aria-hidden":"true"}},[t._v("#")]),t._v(" Stencil")]),t._v(" "),e("p",[t._v("There may be numerous different stencils with different ways to customize them. But there will be described customizing of default stencils like ("),e("router-link",{attrs:{to:"/components/rectangle-stencil.html"}},[t._v("RectangleStencil")]),t._v(" and "),e("router-link",{attrs:{to:"/components/circle-stencil.html"}},[t._v("CircleStencil")]),t._v(")")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(282),alt:"Internal structure"}})]),t._v(" "),e("p",[t._v("To customize stencil you should pass props to "),e("code",[t._v("stencilProps")]),t._v(" props as object (read "),e("router-link",{attrs:{to:"/tutorials/recipes.html#passing-props-to-a-stencil"}},[t._v("here")]),t._v(" in detail)")],1),t._v(" "),e("h3",{attrs:{id:"handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handler","aria-hidden":"true"}},[t._v("#")]),t._v(" Handler")]),t._v(" "),e("p",[t._v("You are able to customize handle by the following ways:")]),t._v(" "),e("ul",[e("li",[t._v("change handler component")]),t._v(" "),e("li",[t._v("add custom handler classnames")]),t._v(" "),e("li",[t._v("remove or add handlers at one of six positions")])]),t._v(" "),e("h4",{attrs:{id:"change-handler-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-handler-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Change handler component")]),t._v(" "),e("p",[t._v("To change handler component just pass the name of globally registered handler component or handler component options object to "),e("code",[t._v("handlerComponent")]),t._v(" prop.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlerComponent: 'myHandler'\n\t}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h4",{attrs:{id:"customize-the-classnames"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-classnames","aria-hidden":"true"}},[t._v("#")]),t._v(" Customize the classnames")]),t._v(" "),e("p",[t._v("To add handler classnames you should pass an object to "),e("code",[t._v("handlersClasses")]),t._v(" prop. All available classnames are represented at the example below")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlersClasses: {\n\t\t\tdefault: 'handler',\n\t\t\thover: 'handler--hover',\n\t\t\teastNorth: 'handler--east-north',\n\t\t\tnorth: 'handler--north',\n\t\t\twestNorth: 'handler--west-north',\n\t\t\twest: 'handler--west',\n\t\t\twestSouth: 'handler--west-south',\n\t\t\tsouth: 'handler--south',\n\t\t\teastSouth: 'handler--east-south',\n\t\t\teast: 'handler--ease',\n\t\t}\n\t}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("Pay attention to "),e("code",[t._v("default")]),t._v(" classname. If you want just change classname of a handler you should anyway pass an object:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Cropper")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlerClasses: {\n\t\t\tdefault: 'handler',\n\t\t}\n\t}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h4",{attrs:{id:"customize-the-list-of-handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-list-of-handlers","aria-hidden":"true"}},[t._v("#")]),t._v(" Customize the list of handlers")]),t._v(" "),e("p",[t._v("To change the list of handlers you should pass an object "),e("code",[t._v("handlers")]),t._v(" to stencil props.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlers: {\n\t\t\teastNorth: true,\n\t\t\tnorth: false,\n\t\t\twestNorth: true,\n\t\t\twest: false,\n\t\t\twestSouth: true,\n\t\t\tsouth: false,\n\t\t\teastSouth: true,\n\t\t\teast: false,\n\t\t}\n\t}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Remember!")]),t._v(" "),e("p",[t._v("If you don't set "),e("code",[t._v("[direction]: true")]),t._v(" the correspondenting handler will be hidden, so if you pass an empty object all handlers will be hidden")])]),t._v(" "),e("h3",{attrs:{id:"lines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lines","aria-hidden":"true"}},[t._v("#")]),t._v(" Lines")]),t._v(" "),e("p",[t._v("You are able to customize lines by the same three ways:")]),t._v(" "),e("ul",[e("li",[t._v("change line component ("),e("code",[t._v("lineComponent")]),t._v(")")]),t._v(" "),e("li",[t._v("add custom line classnames ("),e("code",[t._v("linesClasses")]),t._v(")")]),t._v(" "),e("li",[t._v("remove or add lines at one of four positions ("),e("code",[t._v("lines")]),t._v(")")])]),t._v(" "),e("p",[t._v("Line component by default is "),e("router-link",{attrs:{to:"/components/simple-line.html"}},[t._v("SimpleLine")]),t._v(". Each line is a narrow block with applied border style. So to change the apperance of line you should change the border style.")],1),t._v(" "),e("p",[t._v("The example is given below")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".line")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dashed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Know issue")]),t._v(" "),e("p",[t._v("Currently there are problems with changing the line width.")])]),t._v(" "),e("h3",{attrs:{id:"preview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preview","aria-hidden":"true"}},[t._v("#")]),t._v(" Preview")]),t._v(" "),e("p",[t._v("The necessity to change preview appearance is pretty rare. But if you want to change it you may pass custom classname to "),e("code",[t._v("previewClass")]),t._v(" prop.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\tpreviewClass: 'preview'\n\t}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("stencil-component")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("circle-stencil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".preview")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dashed 1px "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.25"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("customize-preview-example")],1)},[],!1,null,null,null);a.default=n.exports}}]);
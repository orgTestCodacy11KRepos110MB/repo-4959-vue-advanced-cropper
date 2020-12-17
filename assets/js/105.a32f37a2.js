(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{670:function(t,a,s){"use strict";s.r(a);var e=s(41),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cropper-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cropper-types"}},[t._v("#")]),t._v(" Cropper Types")]),t._v(" "),s("p",[t._v("The croppers are different. The mission of this library is give the developer possibility to create\nnot only croppers with different appearance, but also with different behavior.")]),t._v(" "),s("p",[t._v("Despite the variety of different croppers they can be classified on the three groups:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/introduction/types.html#classic-cropper"}},[t._v("Classic")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/introduction/types.html#static-cropper"}},[t._v("Static")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/introduction/types.html#hybrid-cropper"}},[t._v("Hybrid")])],1)]),t._v(" "),s("p",[t._v("If you able to create all of them, you will able to create almost any of existing and even possible croppers.")]),t._v(" "),s("h2",{attrs:{id:"classic-cropper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classic-cropper"}},[t._v("#")]),t._v(" Classic Cropper")]),t._v(" "),s("p",[t._v("The classic cropper is the cropper, where the major way to choice an area is the resizing and moving the stencil. Depending on specific cropper\nuse may or may not resize and move image, but it's always the minor way.")]),t._v(" "),s("types-classic-cropper",{attrs:{img:"https://images.pexels.com/photos/3761018/pexels-photo-3761018.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}}),t._v(" "),s("p",[t._v("Examples: "),s("a",{attrs:{href:"https://www.yandex.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yandex"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"basic-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-implementation"}},[t._v("#")]),t._v(" Basic Implementation")]),t._v(" "),s("p",[t._v("The most basic cropper configuration will give you the "),s("strong",[t._v("classic")]),t._v(" cropper, that is displayed above.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"improving-techniques"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#improving-techniques"}},[t._v("#")]),t._v(" Improving Techniques")]),t._v(" "),s("h4",{attrs:{id:"the-wide-tall-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-wide-tall-images"}},[t._v("#")]),t._v(" The wide / tall images")]),t._v(" "),s("p",[t._v("If an user would crop the wide or tall image in the cropper with limited height or width it will be pretty uncomfortable to resize and move image.")]),t._v(" "),s("types-classic-cropper",{attrs:{"small-height":!0,img:"https://images.pexels.com/photos/3760925/pexels-photo-3760925.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}}),t._v(" "),s("p",[t._v("Due the backward compatibility "),s("code",[t._v("default-boundaries")]),t._v(" is equal to "),s("code",[t._v("fit")]),t._v(". In the next major releases it will be probably changed to "),s("code",[t._v("fill")]),t._v(".")]),t._v(" "),s("p",[t._v("Let's change it:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("types-classic-cropper",{attrs:{"small-height":!0,"default-boundaries":"fill",img:"https://images.pexels.com/photos/3760925/pexels-photo-3760925.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}}),t._v(" "),s("p",[t._v("Perhaps, it's the better result. There are no black borders, for example. But it's still has the obvious disadvantages. Due the equality of default image restriction to "),s("code",[t._v("fill-area")]),t._v(", the image\ntries to fill the entire boundaries, but the boundaries is equal to entire cropper now, so user can't reduce the image now.")]),t._v(" "),s("p",[t._v("Let's set "),s("code",[t._v("image-restriction")]),t._v(" to "),s("code",[t._v("fit-area")]),t._v(" also to give an user experience similar to common modern image viewers.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fit-area"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("types-classic-cropper",{attrs:{"small-height":!0,"default-boundaries":"fill","image-restriction":"fit-area",img:"https://images.pexels.com/photos/3760925/pexels-photo-3760925.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}}),t._v(" "),s("h4",{attrs:{id:"adjusting-stencil"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-stencil"}},[t._v("#")]),t._v(" Adjusting Stencil")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Notice!")]),t._v(" "),s("p",[t._v("It's the part of the experimental API. It may be changed in the future.")])]),t._v(" "),s("p",[t._v("The stencil size doesn't change when you manipulate image by default. It might cause some discomfort to user in\na special situations like the situation in the example below. Try to reduce image size. You can't do it, because\nto reduce image size the stencil size should be reduced as well.")]),t._v(" "),s("types-classic-cropper",{attrs:{"default-size":{width:950,height:600},"default-visible-area":{width:1100,height:448,left:-58,top:300},"small-height":!0,"default-boundaries":"fill","image-restriction":"fit-area",img:"https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}),t._v(" "),s("p",[t._v("To fix it there is "),s("code",[t._v("adjustStencil")]),t._v(" option in "),s("code",[t._v("resizeImage")]),t._v(" prop. Let's add it to the previous example.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fit-area"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":resize-image")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n        adjustStencil: true\n    }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("types-classic-cropper",{attrs:{"resize-image":{adjustStencil:!0},"default-size":{width:950,height:600},"default-visible-area":{width:1100,height:448,left:-58,top:300},"small-height":!0,"default-boundaries":"fill","image-restriction":"fit-area",img:"https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}),t._v(" "),s("p",[t._v("Try to resize the image in this example. It's much more comfortable. This option is also very useful when you have\nwidth and height limitations.")]),t._v(" "),s("h3",{attrs:{id:"recommended-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-implementation"}},[t._v("#")]),t._v(" Recommended Implementation")]),t._v(" "),s("p",[t._v("Thus, taking into account the written above the recommended implementation of "),s("strong",[t._v("classic cropper")]),t._v(" type is following:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fit-area"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":resize-image")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n        adjustStencil: true\n    }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"static-cropper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static-cropper"}},[t._v("#")]),t._v(" Static Cropper")]),t._v(" "),s("p",[t._v("The static cropper has the static stencil. It doesn't have handlers, it can't be moved or resized. An user can only change the image size and position.")]),t._v(" "),s("types-static-cropper"),t._v(" "),s("p",[t._v("Examples: "),s("a",{attrs:{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Instagram"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"basic-implementation-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-implementation-2"}},[t._v("#")]),t._v(" Basic Implementation")]),t._v(" "),s("p",[t._v("To implement the static cropper above you should:")]),t._v(" "),s("ul",[s("li",[t._v("set "),s("code",[t._v("image-restriction")]),t._v(" to "),s("code",[t._v("stencil")]),t._v(" (to give an user the possibility to move the image to the edge of the fixed stencil)")]),t._v(" "),s("li",[t._v("disable the stencil adjusting to prevent the changing of stencil size during the image resize")]),t._v(" "),s("li",[t._v("hide the handlers, disable move and scale for the stencil or use a custom one")]),t._v(" "),s("li",[t._v("set the aspect ratio, because you can't change aspect ratio in the static cropper and you shouldn't rely on a random one")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlers: {},\n\t\tmovable: false,\n\t\tscalable: false,\n\t\taspectRatio: 1,\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":resize-image")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\tadjustStencil: false\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stencil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"improving-techniques-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#improving-techniques-2"}},[t._v("#")]),t._v(" Improving Techniques")]),t._v(" "),s("h4",{attrs:{id:"the-wide-tall-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-wide-tall-image"}},[t._v("#")]),t._v(" The wide/tall image")]),t._v(" "),s("p",[t._v("It's recommended to set "),s("code",[t._v("default-boundaries")]),t._v(" to "),s("code",[t._v("fill")]),t._v(" also, otherwise the large images uploaded to limited cropper will behave a pretty strange to user.\nIt will be the default value later, but due the backward compatibility it's still equals to "),s("code",[t._v("fit")]),t._v(" by default.")]),t._v(" "),s("types-static-cropper",{attrs:{"small-height":!0,img:"https://images.unsplash.com/photo-1583172332547-c768b4e2f5ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"}}),t._v(" "),s("p",[t._v("The result code that we will get in this case is pretty similar:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlers: {},\n\t\tmovable: false,\n\t\tscalable: false,\n\t\taspectRatio: 1,\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":resize-image")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\tadjustStencil: false\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stencil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("types-static-cropper",{attrs:{"default-boundaries":"fill","small-height":!0,img:"https://images.unsplash.com/photo-1583172332547-c768b4e2f5ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"}}),t._v(" "),s("h4",{attrs:{id:"the-fixed-stencil-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-fixed-stencil-size"}},[t._v("#")]),t._v(" The fixed stencil size")]),t._v(" "),s("p",[t._v("The stencil size in the croppers above is pretty unpredictable. For the used image above it's already too small.\nYou can imagine what the stencil size you would get for a narrower image. So the fixed croppers have fixed stencil size alike.")]),t._v(" "),s("p",[t._v("The most simpler way to set fixed stencil size is using "),s("a",{attrs:{href:"http://localhost:8080/vue-advanced-cropper/components/cropper.html#stencilsize",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("stencil-size")]),s("OutboundLink")],1),t._v(" prop.")]),t._v(" "),s("p",[t._v("Notice, that in the following example:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("aspectRatio")]),t._v(" is not set explicitly because it's calculated from "),s("code",[t._v("stencil-size")]),t._v(",")]),t._v(" "),s("li",[s("code",[t._v("adjustStencil")]),t._v(" option is absented too because it's always disabled if you use "),s("code",[t._v("stencil-size")]),t._v(" prop.")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlers: {},\n\t\tmovable: false,\n\t\tscalable: false,\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\twidth: 280,\n\t\theight: 280\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stencil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("types-static-cropper",{attrs:{"stencil-size":{width:250,height:250},"small-height":!0,"default-boundaries":"fill",img:"https://images.unsplash.com/photo-1583172332547-c768b4e2f5ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"}}),t._v(" "),s("h3",{attrs:{id:"recommended-implementation-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-implementation-2"}},[t._v("#")]),t._v(" Recommended Implementation")]),t._v(" "),s("p",[t._v("Thus, taking into account the written above the recommended implementation of "),s("strong",[t._v("fixed cropper")]),t._v(" type is following:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-props")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\thandlers: {},\n\t\tmovable: false,\n\t\tscalable: false,\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\twidth: 280,\n\t\theight: 280\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stencil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"hybrid-cropper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-cropper"}},[t._v("#")]),t._v(" Hybrid Cropper")]),t._v(" "),s("p",[t._v("The hybrid cropper is the cropper that has semi-static stencil, i.e. user able to\nchange its size and position, but it always tries to return to some default position and return some default size.")]),t._v(" "),s("p",[t._v("This process of returning to some default constraints is called "),s("strong",[t._v("auto zoom")]),t._v(".")]),t._v(" "),s("p",[t._v("Examples: "),s("a",{attrs:{href:"https://www.telegram.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telegram"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("To implement the hybrid cropper we will use the fragments of recommended implementations and just add "),s("code",[t._v("autoZoom")]),t._v("\nprop to them.")]),t._v(" "),s("h4",{attrs:{id:"classic-hybrid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classic-hybrid"}},[t._v("#")]),t._v(" Classic Hybrid")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("classic hybrid")]),t._v(" is the cropper type, that is very similar to the "),s("strong",[t._v("classic cropper")]),t._v(", but its stencil is\nautomatically resized and moved. It makes it more closer to static cropper, because its stencil tries to be static.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":auto-zoom")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":transitions")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":resize-image")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\tadjustStencil: true\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fit-area"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("Note, that "),s("code",[t._v("transitions")]),t._v(" prop is added. It is needed to make auto zoom smoother, but it's the part of experimental API, so use it careful.")]),t._v(" "),s("types-hybrid-cropper",{attrs:{src:"https://images.unsplash.com/photo-1586598901893-8ac605430b78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80","default-boundaries":"fill","image-restriction":"fit-area","resize-image":{adjustStencil:!0},transitions:!0,"auto-zoom":!0}}),t._v(" "),s("h4",{attrs:{id:"fixed-hybrid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-hybrid"}},[t._v("#")]),t._v(" Fixed Hybrid")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("fixed hybrid")]),t._v(" is the cropper type, that is very similar to the "),s("strong",[t._v("fixed cropper")]),t._v(", but user is able to change\nthe size and position of cropper.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cropper")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":auto-zoom")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":transitions")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stencil-size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n\t\twidth: 280,\n\t\theight: 280\n\t}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-restriction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stencil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default-boundaries")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("types-hybrid-cropper",{attrs:{src:"https://images.unsplash.com/photo-1583853287541-6e82b3d5ea12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80",priority:"visibleArea","auto-zoom":!0,transitions:!0,"stencil-size":{width:280,height:280},"small-height":!0,"image-restriction":"stencil","default-boundaries":"fill"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(t,e,r){"use strict";r.r(e);r(41),r(31),r(63),r(32),r(64);var n=r(26),c=(r(40),r(15),r(66));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"Detail",data:function(){return{data:{}}},props:{item:Object},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["getProducts"])),mounted:function(){var t=this;this.data=this.getProducts.filter((function(e){return e.id==t.$route.query.id}))[0]}},d=l,O=r(33),component=Object(O.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-wrapper__item",attrs:{src:t.data.image,alt:t.data.title}})]),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("h1",{staticClass:"content-wrapper__title"},[t._v(t._s(t.data.title))]),t._v(" "),e("h1",{staticClass:"content-wrapper__description"},[t._v("$"+t._s(t.data.price))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
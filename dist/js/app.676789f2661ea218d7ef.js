webpackJsonp([1],{"/VV0":function(e,t,n){t=e.exports=n("lcwS")(void 0),t.push([e.i,"*{ margin:0px; padding:0px; }\nheader{ width:100%; height:44px; background: #f70; text-align: center; line-height: 44px; color: #fff; font-weight: bold  }\n.body{ padding:10px;}\n.body p{ line-height: 1.5em}\n.submit{ height:44px; width:100%; border-radius: 3px; background: #f70; margin-top: 30px; line-height: 44px; text-align: center; color: #fff; font-weight: bold }\n\n\n.updateBox{ width:100%; border: 1px solid #333; height:180px; display:flex;  align-items: center; justify-content: center }\n\n\n\n\n\n\n",""])},C8Yn:function(e,t,n){"use strict";function r(e){return{type:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeName=r},Oqez:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("gp7H")},SZiR:function(e,t,n){var r=n("/VV0");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n("BMrJ")(r,o);r.locals&&(e.exports=r.locals)},TX0z:function(e,t,n){"use strict";function r(e){return{name:e.demo.languageName}}function o(e){return{changeName:function(){return e(c.changeName("name"))}}}function i(e,t,n){return Object.assign({},n,e,t)}var a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n("C8Yn"),u=n("1n8/"),s=n("jYI/");n("SZiR"),t.mapStateToProps=r,t.mapDispatchToProps=o;var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.submit=function(){window.postMessage("weixin","")},t.prototype.render=function(){return u.createElement("article",null,u.createElement("header",{id:"app"},"上传身份认证信息"),u.createElement("article",{className:"body"},u.createElement("div",{className:"updateBox"},u.createElement("div",null,"+ 点击上传")),u.createElement("div",{onClick:this.submit.bind(this),className:"submit"},"确定上传")))},t}(u.Component);t.default=s.connect(r,o,i)(p)},gp7H:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("1n8/"),o=n("NKHc"),i=n("jYI/"),a=n("TX0z"),c=n("lxiX"),u=c.default();o.render(r.createElement(i.Provider,{store:u},r.createElement(a.default,{name:"123"})),document.getElementById("app"))},imCj:function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n("vE+p");t.demoReduces=function(e,t){switch(void 0===e&&(e=o.default.demo),t.type){case"changeName":return r({},e)}return e}},lxiX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("fpuT"),o=n("imCj"),i=n("vE+p"),a=r.combineReducers({demo:o.demoReduces});t.default=function(){return r.createStore(a,i.default)}},"vE+p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={demo:{languageName:"typescript"}}}},["Oqez"]);
//# sourceMappingURL=app.676789f2661ea218d7ef.js.map
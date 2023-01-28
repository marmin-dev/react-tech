/*! For license information please see server.js.LICENSE.txt */
(()=>{"use strict";var e,r={183:(e,r,t)=>{t(661),t(537);var n=t(771),o=t.n(n);t(997),o()({resolved:{},chunkName:function(){return"pages-RedPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(645).then(t.bind(t,952))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 952}}),o()({resolved:{},chunkName:function(){return"pages-BluePage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(29).then(t.bind(t,175))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 175}}),o()({resolved:{},chunkName:function(){return"pages-UsersPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(850).then(t.bind(t,712))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 712}})},537:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(661),o=t(997);const i=function(){return(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(n.Link,{to:"/red",children:"Red"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.Link,{to:"/blue",children:"Blue"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.Link,{to:"/users",children:"Users"})})]})}},488:(e,r,t)=>{require("react-dom/server");const n=require("express");var o=t.n(n);require("react-router-dom/server"),t(183);const i=require("path");var u=t.n(i);const a=require("fs");var s=t.n(a);t(701),t(165);const c=require("redux");var l=t(802);t(477),(0,c.combineReducers)({users:l.ZP}),t(22),require("redux-thunk"),require("redux-saga"),require("@loadable/server"),t(997),u().resolve("./build/loadable-stats.json"),JSON.parse(s().readFileSync(u().resolve("./build/asset-manifest.json"),"utf-8")),o()()},701:(e,r,t)=>{t.d(r,{lm:()=>u,p9:()=>i});var n=t(689),o=(0,n.createContext)(null),i=function(e){var r=e.resolve,t=(0,n.useContext)(o);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},u=function(e){var r=(0,n.useContext)(o);return r?r.done?null:void r.promises.push(Promise.resolve(e())):null}},802:(e,r,t)=>{t.d(r,{ZP:()=>P,PR:()=>x,Rf:()=>w,HD:()=>S});var n=t(2);function o(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==(0,n.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,n.Z)(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=t(165);function s(e,r,t,n,o,i,u){try{var a=e[i](u),s=a.value}catch(e){return void t(e)}a.done?r(s):Promise.resolve(s).then(n,o)}const c=require("axios");var l=t.n(c),f=t(477),h=(0,a.Z)().mark(E),p=(0,a.Z)().mark(S),v="users/GET_USERS_PENDING",d="users/GET_USERS_SUCCESS",y="users/GET_USERS_FAILURE",g="users/GET_USER",m="users/GET_USER_SUCCESS",b="users/GET_USER_FAILURE",x=function(e){return{type:g,payload:e}},w=function(){return function(){var e,r=(e=(0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:v}),e.next=4,l().get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:d,payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r((n=e.t0,{type:y,error:!0,payload:n})),e.t0;case 12:case"end":return e.stop()}var n}),e,null,[[0,8]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function u(e){s(i,n,o,u,a,"next",e)}function a(e){s(i,n,o,u,a,"throw",e)}u(void 0)}))});return function(e){return r.apply(this,arguments)}}()},j=function(e){return l().get("https://jsonplaceholder.typicode.com/users/".concat(e))};function E(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.call)(j,e.payload);case 3:return r=t.sent,t.next=6,(0,f.put)((o=r.data,{type:m,payload:o}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,(0,f.put)((n=t.t0,{type:b,payload:n,error:!0}));case 12:case"end":return t.stop()}var n,o}),h,null,[[0,8]])}function S(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.takeEvery)(g,E);case 2:case"end":return e.stop()}}),p)}var O={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case v:return u(u({},e),{},{loading:u(u({},e.loading),{},{users:!0})});case d:return u(u({},e),{},{loading:u(u({},e.loading),{},{users:!1}),users:r.payload.data});case y:return u(u({},e),{},{loading:u(u({},e.loading),{},{users:!1}),error:u(u({},e.error),{},{users:r.payload})});case g:return u(u({},e),{},{loading:u(u({},e.loading),{},{user:!0}),error:u(u({},e.error),{},{user:null})});case m:return u(u({},e),{},{loading:u(u({},e.loading),{},{user:!1}),user:r.payload});case b:return u(u({},e),{},{loading:u(u({},e.loading),{},{user:!1}),error:u(u({},e.error),{},{user:r.paylsoad})});default:return e}}},771:e=>{e.exports=require("@loadable/component")},689:e=>{e.exports=require("react")},22:e=>{e.exports=require("react-redux")},661:e=>{e.exports=require("react-router-dom")},997:e=>{e.exports=require("react/jsx-runtime")},477:e=>{e.exports=require("redux-saga/effects")},165:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(2);function o(){o=function(){return e};var e={},r=Object.prototype,t=r.hasOwnProperty,i=Object.defineProperty||function(e,r,t){e[r]=t.value},u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function l(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{l({},"")}catch(e){l=function(e,r,t){return e[r]=t}}function f(e,r,t,n){var o=r&&r.prototype instanceof v?r:v,u=Object.create(o.prototype),a=new L(n||[]);return i(u,"_invoke",{value:E(e,t,a)}),u}function h(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var p={};function v(){}function d(){}function y(){}var g={};l(g,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(_([])));b&&b!==r&&t.call(b,a)&&(g=b);var x=y.prototype=v.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(r){l(e,r,(function(e){return this._invoke(r,e)}))}))}function j(e,r){function o(i,u,a,s){var c=h(e[i],e,u);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&t.call(f,"__await")?r.resolve(f.__await).then((function(e){o("next",e,a,s)}),(function(e){o("throw",e,a,s)})):r.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return o("throw",e,a,s)}))}s(c.arg)}var u;i(this,"_invoke",{value:function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return u=u?u.then(n,n):n()}})}function E(e,r,t){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(t.method=o,t.arg=i;;){var u=t.delegate;if(u){var a=S(u,t);if(a){if(a===p)continue;return a}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var s=h(e,r,t);if("normal"===s.type){if(n=t.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(n="completed",t.method="throw",t.arg=s.arg)}}}function S(e,r){var t=r.method,n=e.iterator[t];if(void 0===n)return r.delegate=null,"throw"===t&&e.iterator.return&&(r.method="return",r.arg=void 0,S(e,r),"throw"===r.method)||"return"!==t&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+t+"' method")),p;var o=h(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function P(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:d,configurable:!0}),d.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},w(j.prototype),l(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(r,t,n,o,i){void 0===i&&(i=Promise);var u=new j(f(r,t,n,o),i);return e.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},w(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=Object(e),t=[];for(var n in r)t.push(n);return t.reverse(),function e(){for(;t.length;){var n=t.pop();if(n in r)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return u.type="throw",u.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=t.call(i,"catchLoc"),s=t.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=e,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(u)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),p},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),P(t),p}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var o=n.arg;P(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:_(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},e}},2:(e,r,t)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.d(r,{Z:()=>n})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>"js/"+{29:"pages-BluePage",645:"pages-RedPage",850:"pages-UsersPage"}[e]+".chunk.js",n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e={179:1},n.f.require=(r,t)=>{e[r]||(r=>{var t=r.modules,o=r.ids,i=r.runtime;for(var u in t)n.o(t,u)&&(n.m[u]=t[u]);i&&i(n);for(var a=0;a<o.length;a++)e[o[a]]=1})(require("./"+n.u(r)))};n(488)})();
(this["webpackJsonphnk-v1"]=this["webpackJsonphnk-v1"]||[]).push([[11],{109:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},182:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var r=n(109),a=n(10),c=n(0),o=n.n(c),l=n(20),u=n(26),i=n(55),s=n(53),m=n(22);n(182);function f(){var e=Object(l.d)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],f=n[1],b=Object(c.useState)(""),h=Object(r.a)(b,2),p=h[0],d=h[1];function v(){var t={username:i,password:p};e(Object(s.a)(t,(function(t){e(Object(a.e)(Object(u.i)(m.a.HOME)))}),(function(e){alert(e)})))}function y(e){"Enter"===e.key&&v()}return Object(c.useEffect)((function(){}),[e]),o.a.createElement("div",{className:"outer"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",null,o.a.createElement("h3",null,"Log in"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"T\xe0i kho\u1ea3n"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\xe0i kho\u1ea3n",value:i,onKeyPress:y,onChange:function(e){f(e.target.value)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"M\u1eadt kh\u1ea9u"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u",value:p,onKeyPress:y,onChange:function(e){d(e.target.value)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),o.a.createElement("button",{onClick:v,className:"btn btn-dark btn-lg btn-block"},"\u0110\u0103ng nh\u1eadp"))))}t.default=function(){return Object(i.a)().isLoggedIn?o.a.createElement(u.c,{to:m.a.HOME}):o.a.createElement(f,null)}}}]);
//# sourceMappingURL=11.b1ed452c.chunk.js.map
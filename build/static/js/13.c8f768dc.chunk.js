(this["webpackJsonphnk-v1"]=this["webpackJsonphnk-v1"]||[]).push([[13],{182:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return r}))},463:function(e,t,a){"use strict";a.r(t);var n=a(112),c=a(0),r=a.n(c),l=a(204),i=a(84),o=a(201),u=a(24),s=a(31),m=a(16),b=a(8),O=a(138),f=a.n(O),j=a(142),p=a(26),g=a(34),d=a(124),h=a(141),E=a(182),N=a(462),y=a(453),C=a(454),k=a(447),v=a(450),S=a(202),T=a(468),w=a(455),R=a(244),P=a(9),q=function(e){var t,a=Object(R.a)().t,l=Object(u.d)(),s=e.onHide,m=e.onSuccessCreated,O=e.visible,f=e.modalTitle,j=e.item,p=Object(c.useState)([]),d=Object(n.a)(p,2),h=d[0],q=d[1],D=Object(c.useState)(""),B=Object(n.a)(D,2),F=B[0],H=B[1];function _(e){return function(t){var a=Object(b.map)(h,(function(t){return e.id!==t.id?Object(E.a)({},t):Object(E.a)(Object(E.a)({},e),{},{checked:!e.checked})}));q(a)}}function I(e){return function(t){var a=Object(b.map)(h,(function(t){return Object(E.a)(Object(E.a)({},t),{},{checked:e})}));q(a)}}return Object(c.useEffect)((function(){if(Object(b.get)(j,"original.id"))H(Object(b.get)(j,"original.roleName","")),l(Object(g.g)({id:Object(b.get)(j,"original.id"),pageNumber:1,pageSize:1e3},(function(e){if(e.list.length>=0){var t=Object(b.map)(h,(function(t){return-1!==e.list.findIndex((function(e){return t.id===e.idSubRole}))?Object(E.a)(Object(E.a)({},t),{},{checked:!0}):Object(E.a)(Object(E.a)({},t),{},{checked:!1})}));q(t)}}),(function(){})));else{H("");var e=Object(b.map)(h,(function(e){return Object(E.a)(Object(E.a)({},e),{},{checked:!1})}));q(e)}}),[j]),Object(c.useEffect)((function(){l(Object(g.e)({},(function(e){e.list.length>=0&&q(Object(b.map)(e.list,(function(e){return Object(E.a)(Object(E.a)({},e),{},{checked:!1})})))}),(function(){})))}),[]),r.a.createElement(N.a,{isOpen:O,className:"sipTitleModalCreateNew"},r.a.createElement(y.a,{toggle:s},f),r.a.createElement(C.a,null,r.a.createElement(k.a,null,r.a.createElement(v.a,null,a("T\xean quy\u1ec1n")),r.a.createElement(S.a,{value:F,onChange:(t=H,function(e){t(e.currentTarget.value)}),placeholder:a("Nh\u1eadp t\xean quy\u1ec1n")})),r.a.createElement(o.a,{className:"pl-1 pt-3",style:{justifyContent:"space-around"}},r.a.createElement(k.a,null,r.a.createElement(i.a,{color:"primary",onClick:I(!0)},"Ch\u1ecdn t\u1ea5t c\u1ea3")),r.a.createElement(k.a,null,r.a.createElement(i.a,{color:"primary",onClick:I(!1)},"B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"))),r.a.createElement(o.a,{className:"pl-1 pt-3",style:{justifyContent:"space-around"}},Object(b.map)(h,(function(e){return r.a.createElement(k.a,{key:e.id.toString()},r.a.createElement(v.a,null,e.subRoleName),r.a.createElement(T.a,{type:"switch",id:e.id.toString(),name:e.RoleCode,checked:e.checked,onChange:_(e)}))})))),r.a.createElement(w.a,{className:"justify-content-end"},r.a.createElement(i.a,{color:"primary",onClick:function(e){e.preventDefault();var t={data:Object(b.map)(h,(function(e){return{roleName:F,idSubRole:e.id,RoleCode:e.RoleCode,subRoleName:e.subRoleName,status:!0===e.checked?1:0}}))};if(Object(b.get)(j,"original.id")){var n=t.data.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{idRole:Object(b.get)(j,"original.id")})}));l(Object(g.h)({data:n},(function(){m(),Object(P.a)(r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-check-square mr-2"}),a("C\u1eadp nh\u1eadt quy\u1ec1n")," ",a("th\xe0nh c\xf4ng")),{type:"success"})}),(function(){Object(P.a)(r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-window-close mr-2"}),a("\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra ")),{type:"error"})})))}else l(Object(g.a)(t,(function(){m(),Object(P.a)(r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-check-square mr-2"}),a("T\u1ea1o quy\u1ec1n")," ",a("th\xe0nh c\xf4ng")),{type:"success"})}),(function(){Object(P.a)(r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-window-close mr-2"}),a("\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra ")),{type:"error"})})))}},a("Ghi l\u1ea1i"))))},D=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),l=a[0],o=a[1],u=Object(R.a)().t;function s(){o(!l)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:e.classNameBtn?e.classNameBtn:"SipTableFunctionIcon",onClick:s,color:"primary",title:u("X\xf3a")},e.buttonLabel?e.buttonLabel:r.a.createElement("img",{src:"../../assets/img/icon/iconRemove.svg",alt:"VTPostek"})),r.a.createElement(N.a,{isOpen:l,toggle:s,className:e.className?e.className:"sipTitleModalCreateNew"},r.a.createElement(y.a,{toggle:s},e.titleModal?e.titleModal:u("X\xe1c nh\u1eadn")),r.a.createElement(C.a,null,r.a.createElement("p",null,e.contentConfirm?e.contentConfirm:u("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?"))),r.a.createElement(w.a,{className:"justify-content-end"},r.a.createElement(i.a,{color:"primary",onClick:function(){e.handleDoSomething(),o(!1)}},e.saveButton?e.saveButton:u("X\xf3a")),r.a.createElement(i.a,{onClick:s},e.cancelButton?e.cancelButton:u("H\u1ee7y")))))};t.default=function(e){var t=Object(u.d)(),a=f.a.parse(Object(b.get)(e,"location.search")),O=Object(b.get)(a,"pageNumber"),E=Object(b.get)(a,"pageitems"),N=Object(c.useState)(1),y=Object(n.a)(N,2),C=y[0],k=y[1],v=Object(c.useState)([]),S=Object(n.a)(v,2),T=S[0],w=S[1],R=Object(c.useState)(O?Object(b.toNumber)(O):1),B=Object(n.a)(R,2),F=B[0],H=B[1],_=Object(c.useState)(E?Object(b.toNumber)(E):20),I=Object(n.a)(_,2),z=I[0],M=I[1],X=Object(c.useState)(!1),x=Object(n.a)(X,2),L=x[0],G=x[1],J=Object(c.useState)({}),Q=Object(n.a)(J,2),V=Q[0],A=Q[1];Object(c.useEffect)((function(){t(Object(g.c)({pageNumber:F,pageSize:z},(function(e){e.list.length>=0&&(w(e.list),k(Object(b.toNumber)(e.total_pages)))}),(function(){})))}),[]);var K=function(e){t(Object(m.e)(Object(s.i)(p.a.THONG_TIN_CHI_TIET_ROLE,{idRole:e.id})))};function U(e){return function(){A(e),G(!L)}}function W(e){return function(){t(Object(g.b)({idRole:Object(b.get)(e,"original.id")},(function(a){P.a.success("Xo\xe1 quy\u1ec1n ".concat(Object(b.get)(e,"original.roleName","")," th\xe0nh c\xf4ng")),t(Object(g.c)({pageNumber:F,pageSize:z},(function(e){e.list.length>=0&&(w(e.list),k(Object(b.toNumber)(e.total_pages)))}),(function(){})))}),(function(){})))}}var Y=function(){!0===L&&A({}),G(!L)},Z=Object(c.useMemo)((function(){return[{Header:"ID",accessor:"id"},{Header:"T\xean quy\u1ec1n",accessor:"roleName"},{Header:"Qu\u1ea3n tr\u1ecb",accessor:"",Cell:function(e){var t=e.row;return r.a.createElement(l.a,null,r.a.createElement(i.a,{className:"ml-2",color:"primary",onClick:U(t)},r.a.createElement("i",{className:"fa fa-pencil mr-2"}),"S\u1eeda"),r.a.createElement(D,{classNameBtn:"ml-2",buttonLabel:r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-trash mr-2"}),"Xo\xe1"),handleDoSomething:W(t)}))}}]}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"mb-3 sipTitleContainer"},r.a.createElement("h1",{className:"sipTitle"},"Th\xf4ng tin quy\u1ec1n"),r.a.createElement("div",{className:"sipTitleRightBlock"},r.a.createElement(i.a,{className:"ml-2",color:"primary",onClick:Y},r.a.createElement("i",{className:"fa fa-pencil mr-2"}),"Th\xeam m\u1edbi"))),r.a.createElement("h1",{className:"sipTitle"},"Danh s\xe1ch quy\u1ec1n"),r.a.createElement(o.a,{className:"sipTableContainer sipTableRowClickable"},r.a.createElement(j.a,{disableOnClickCellEnd:!0,columns:Z,data:T,onRowClick:K})),r.a.createElement(h.a,{pageRangeDisplayed:2,marginPagesDisplayed:2,pageCount:C,onThisPaginationChange:function(e){H(e.selected+1),function(e){var a=Object(d.a)(window.location.pathname+window.location.search,{pageNumber:e});t(Object(m.f)(Object(s.i)(a)))}(e.selected+1)},setPageSize:M}),r.a.createElement(q,{visible:L,onSuccessCreated:function(){t(Object(g.c)({pageNumber:F,pageSize:z},(function(e){e.list.length>=0&&(w(e.list),k(Object(b.toNumber)(e.total_pages)))}),(function(){}))),Y()},onHide:Y,modalTitle:"T\u1ea1o quy\u1ec1n",item:V}))}}}]);
//# sourceMappingURL=13.c8f768dc.chunk.js.map
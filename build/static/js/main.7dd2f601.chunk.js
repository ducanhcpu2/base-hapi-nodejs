(this["webpackJsonphnk-v1"]=this["webpackJsonphnk-v1"]||[]).push([[2],{104:function(t,e,n){},105:function(t,e,n){"use strict";n.r(e);n(68);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),i=(n(73),n(20)),u=n(26),s=n(61),h=n(23),_=n(36),l=n.n(_),d=(n(78),n(79),n(25)),g=n(57),N=n(32),p=n(31),O=n(80),E=function(t){Object(N.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={hasError:!1},a}return Object(g.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"handleRefresh",value:function(){window.location.reload()}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("div",{className:"text-center"},c.a.createElement("h4",{className:"mb-3"},"Vui l\xf2ng t\u1ea3i l\u1ea1i trang!"),c.a.createElement(O.a,{color:"primary",onClick:this.handleRefresh},"Refresh")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(c.a.Component),b=n(40),f=n(16),H=Object(f.a)(),A=n(22),I=n(62),T=n(63),m=n(54),k=n(11),U=n(17),G=n(58),v=Object(G.a)({listReport:[]}),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U.b:return t.set("listReport",e.data);default:return t}},j=n(42),R=n(21),w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return Object(j.a)(t,(function(t){switch(e.type){case R.a:return t.loggedInUser=!0,t.accessToken=e.data,t;default:return t}}))};var y=function(t){return Object(k.c)({router:Object(h.b)(t),auth:w,BaoCaoReducer:C})},B=n(6),D=n.n(B),K=n(12),S=n(35),x=n(18),P=n(8),L=n(59),z=n.n(L),W=["getting_all_reports","getting_detail_reports","getting_reports_by_id","getusers","creat_roles","create_detail_report","create_report","create_sub_roles","register_user","roles","update_report","login"],Y=Object(P.zipObject)(W,Object(P.map)(W,(function(t){return z.a.resolve("/",t)}))),J=function(t){Object(N.a)(n,t);var e=Object(p.a)(n);function n(t,a){var c;return Object(d.a)(this,n),(c=e.call(this)).status=t,c.messages=a,c}return n}((function t(){Object(d.a)(this,t),Error.apply(this)})),M=n(60),q=n.n(M),V=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOCATION_API_ENDPOINT,q.a.create({baseURL:"http://20.63.153.9:8069/"}));V.interceptors.request.use((function(t){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={headers:{accept:"application/json"},timeout:3e4},n=Object(P.get)(Et.getState(),"auth.accessToken");return console.log(Et.getState()),n&&Object(P.merge)(e,{headers:{access_token:n}}),Object(P.merge)(e,t)}(t)}),(function(t){return Promise.reject(t)})),V.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));function X(t){return F.apply(this,arguments)}function F(){return(F=Object(x.a)(D.a.mark((function t(e){var n,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.get(Y.getting_all_reports+"?pageOffset=1&pageSize=1000");case 2:if(n=t.sent,a=n.data,200!==Object(P.get)(a,"error")){t.next=6;break}return t.abrupt("return",a);case 6:throw new J(a.error,a.messages);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(t){return $.apply(this,arguments)}function $(){return($=Object(x.a)(D.a.mark((function t(e){var n,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.get(Y.getting_detail_reports+"/"+Object(P.get)(e,"idBaoCao","")+"?pageOffset=1&pageSize=10000");case 2:if(n=t.sent,a=n.data,200!==Object(P.get)(a,"error")){t.next=6;break}return t.abrupt("return",a);case 6:throw new J(a.error,a.messages);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Z=D.a.mark(nt),tt=D.a.mark(at),et=D.a.mark(ct);function nt(t){var e;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(K.b)(X,t.data);case 2:return(e=n.sent).data&&e.data.length>=0&&t.onSuccess(e.data),n.next=6,Object(K.c)(Object(S.b)(e.data));case 6:case"end":return n.stop()}}),Z)}function at(t){var e;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(K.b)(Q,t.data);case 2:return(e=n.sent).data&&e.data.length>=0&&t.onSuccess(e.data),n.next=6,Object(K.c)(Object(S.b)(e.data));case 6:case"end":return n.stop()}}),tt)}function ct(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.d)(U.a,nt);case 2:return t.next=4,Object(K.d)(U.c,at);case 4:case"end":return t.stop()}}),et)}var rt=n(53);function ot(t){return it.apply(this,arguments)}function it(){return(it=Object(x.a)(D.a.mark((function t(e){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.post(Y.login,e);case 2:if(n=t.sent,200!==Object(P.get)(n,"status")){t.next=5;break}return t.abrupt("return",n.data);case 5:throw new J(n.status.toString(),[n.statusText]);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var ut=D.a.mark(ht),st=D.a.mark(_t);function ht(t){var e;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(K.b)(ot,t.data);case 2:if(200!==(e=n.sent).error){n.next=9;break}return t.onSuccess(e.data),n.next=7,Object(K.c)(Object(rt.b)(e.data));case 7:n.next=10;break;case 9:t.onError(e.messages);case 10:case"end":return n.stop()}}),ut)}function _t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.d)(R.b,ht);case 2:case"end":return t.stop()}}),st)}var lt=D.a.mark(dt);function dt(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.a)([Object(K.b)(ct),Object(K.b)(_t)]);case 2:case"end":return t.stop()}}),lt)}var gt=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),Nt=Object(T.a)(),pt=y(H),Ot=Object(I.a)({middleware:[Nt,Object(m.a)(H)],preloadedState:gt,reducer:pt});Ot.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(n){}}({auth:Ot.getState().auth})})),Nt.run(dt);var Et=Ot,bt=(n(104),n(55)),ft=function(t){return Object(bt.a)().isLoggedIn?c.a.createElement(u.d,t):c.a.createElement(u.c,{to:A.a.AUTH_LOGIN})};l.a.locale("vi");var Ht=c.a.lazy((function(){return n.e(6).then(n.bind(null,216))})),At=c.a.lazy((function(){return Promise.all([n.e(5),n.e(13)]).then(n.bind(null,215))})),It=c.a.lazy((function(){return n.e(7).then(n.bind(null,217))})),Tt=function(){return Object(a.useEffect)((function(){s.a.configure()}),[]),c.a.createElement(E,null,c.a.createElement(i.a,{store:Et},c.a.createElement(h.a,{history:H},c.a.createElement(u.e,{history:H},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(b.a,{error:!1})},c.a.createElement(u.g,null,c.a.createElement(u.d,{path:A.a.AUTH,component:Ht}),c.a.createElement(u.d,{path:A.a.ERROR,component:It}),c.a.createElement(ft,{path:A.a.ROOT,component:At})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r}));var a="GET_ALL_REPORT",c="GET_ALL_REPORT_DONE",r="GET_DETAIL_REPORT"},21:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var a="LOGIN_USER",c="LOGIN_DONE"},22:function(t,e,n){"use strict";var a="/auth",c="".concat(a,"/login"),r="".concat(a,"/login-callback"),o="".concat(a,"/logout-callback"),i="".concat(a,"/silent-callback"),u="".concat("/error","/404"),s="".concat("/error","/500"),h="".concat("/error","/no-data"),_="".concat("/bao-cao","/bao-cao-1"),l="/khai-thac-di",d="".concat(l,"/dong-bang-ke"),g="".concat(l,"/dong-bang-ke-noi-tinh"),N="".concat(l,"/thong-tin-bang-ke"),p="".concat(l,"/dong-tai"),O="".concat(l,"/danh-sach-phieu-gui-trong-tai/:idTai"),E="".concat(l,"/danh-sach-phieu-gui-trong-tai-da-dong/:idTai"),b="".concat(l,"/danh-sach-phieu-gui-trong-bang-ke/:idBangKe"),f="".concat(l,"/danh-sach-phieu-gui-trong-bang-ke-da-dong/:idBangKe"),H="".concat(l,"/dong-chuyen-thu"),A="".concat(l,"/danh-sach-tai-kien-trong-chuyen-thu/:idChuyenThu"),I="".concat(l,"/danh-sach-tai-kien-trong-chuyen-thu-da-dong/:idChuyenThu"),T="".concat(l,"/tach-phieu-gui"),m="".concat(l,"/chi-tiet-nhom-hang-hoa"),k="".concat("/nhap-phieu-gui","/phieu-gui-trong-nuoc/tao-don"),U="".concat("/nhap-phieu-gui","/phieu-gui-trong-nuoc/:idDonHang"),G="".concat("/nhap-phieu-gui","/phieu-gui-quoc-te/tao-don"),v="".concat("/nhap-phieu-gui","/phieu-gui-quoc-te/:idDonHang"),C="".concat("/nhap-phieu-gui","/nhap-tu-file-excel"),j="".concat("/nhap-phieu-gui","/chi-tiet-lich-su/:created_dt&:id"),R="".concat("/nhap-phieu-gui","/nhan-tai-buu-cuc-goc"),w="".concat("/nhap-phieu-gui","/chi-tiet-nhom-hang-hoa"),y="/dieu-hanh",B="".concat(y,"/bien-ban-noi-bo"),D="".concat(y,"/sua-bien-ban"),K="".concat(y,"/xac-minh-bien-ban"),S="".concat(y,"/khieu-nai-khach-hang"),x="".concat(y,"/chi-tiet-khieu-nai"),P="".concat(y,"/lap-bien-ban"),L="".concat(y,"/tra-cuu-bien-ban"),z="".concat("/khai-thac-den","/nhan-chuyen-thu"),W="".concat("/khai-thac-den","/nhan-tai-kien"),Y="".concat("/khai-thac-den","/nhan-bang-ke-phieu-gui"),J="".concat("/khai-thac-den","/thong-tin-chuyen-thu/:idChuyenThu"),M="".concat("/khai-thac-den","/thong-tin-tai/:idTaiKien"),q="".concat("/khai-thac-den","/thong-tin-bang-ke/:idBangKe"),V="".concat("/khai-thac-den","/khai-thac-chuyen-thu-den"),X="".concat("/khai-thac-den","/khai-thac-tai"),F="".concat("/khai-thac-den","/phan-cong-phat-nhan"),Q="".concat("/khach-hang","/tiep-xuc-khach-hang"),$="".concat("/ke-khai-chi-phi","/tao-moi-bang-ke"),Z="".concat("/ke-khai-chi-phi","/chi-tiet-bang-ke/:idBangKe");e.a={ROOT:"/",HOME:"/home",ERROR:"/error",ERROR_404:u,ERROR_500:s,ERROR_NO_DATA:h,AUTH:a,AUTH_LOGIN:c,AUTH_LOGIN_CALLBACK:r,AUTH_LOGOUT_CALLBACK:o,AUTH_SILENT_CALLBACK:i,BAO_CAO:"/bao-cao",BAO_CAO_1:_,KHAI_THAC_DI:l,DONG_BANG_KE:d,DONG_BANG_KE_NOI_TINH:g,THONG_TIN_BANG_KE:N,DONG_TAI:p,DANH_SACH_PHIEU_GUI_TRONG_TAI:O,DANH_SACH_PHIEU_GUI_TRONG_TAI_DA_DONG:E,DANH_SACH_PHIEU_GUI_TRONG_BANG_KE:b,DANH_SACH_PHIEU_GUI_TRONG_BANG_KE_DA_DONG:f,DONG_CHUYEN_THU:H,DANH_SACH_TAI_KIEN_TRONG_CHUYEN_THU:A,DANH_SACH_TAI_KIEN_TRONG_CHUYEN_THU_DA_DONG:I,TACH_PHIEU_GUI:T,CHI_TIET_BUU_BUI_CHUA_DONG_BANG_KE:m,NHAP_PHIEU_GUI:"/nhap-phieu-gui",PHIEU_GUI_TRONG_NUOC:U,NHAP_PHIEU_GUI_TRONG_NUOC:k,NHAP_PHIEU_GUI_QUOC_TE:G,PHIEU_GUI_QUOC_TE:v,NHAP_TU_FILE_EXCEL:C,CHI_TIET_LICH_SU:j,NHAN_TAI_BUU_CUC_GOC:R,CHI_TIET_NHOM_HANG_HOA:w,DIEU_HANH:y,BIEN_BAN_NOI_BO:B,SUA_BIEN_BAN:D,XAC_MINH_BIEN_BAN:K,KHIEU_NAI_KHACH_HANG:S,CHI_TIET_KHIEU_NAI:x,LAP_BIEN_BAN:P,TRA_CUU_BIEN_BAN:L,KHAI_THAC_DEN:"/khai-thac-den",NHAN_CHUYEN_THU:z,NHAN_TAI_KIEN:W,KHAI_THAC_CHUYEN_THU_DEN:V,THONG_TIN_CHUYEN_THU:J,THONG_TIN_TAI:M,THONG_TIN_BANG_KE_PHIEU_GUI:q,KHAI_THAC_TAI:X,NHAN_BANG_KE_PHIEU_GUI:Y,PHAN_CONG_PHAT_NHAN:F,KHACH_HANG:"/khach-hang",TIEP_XUC_KHACH_HANG:Q,THONG_TIN_KIEN_HANG:"/thong-tin-kien-hang/:idDonHang/:idKienHang",THONG_TIN_DON_HANG_NEW:"/thong-tin-don-hang-new",THONG_TIN_BAO_CAO:"/thong-tin-bao-cao/:idBaoCao",IN_DON_HANG:"/in-don-hang/:idDonHang",THONG_TIN_DON_HANG_ORIGIN:"/thong-tin-don-hang",THONG_TIN_KIEN_HANG_ORIGIN:"/thong-tin-kien-hang",KE_KHAI_CHI_PHI:"/ke-khai-chi-phi",TAO_MOI_BANG_KE:$,CHI_TIET_BANG_KE:Z}},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o}));var a=n(17),c=function(t,e,n){return{type:a.a,data:t,onSuccess:e,onError:n}},r=function(t){return{type:a.b,data:t}},o=function(t,e,n){return{type:a.c,data:t,onSuccess:e,onError:n}}},40:function(t,e,n){"use strict";var a=n(0),c=n.n(a),r=n(80);e.a=function(t){return t.error?c.a.createElement("div",{className:"text-center"},c.a.createElement("h4",{className:"mb-3"},"Vui l\xf2ng t\u1ea3i l\u1ea1i trang!"),c.a.createElement(r.a,{color:"primary",onClick:function(){window.location.reload()}},"Refresh")):c.a.createElement("div",{className:"ant-skeleton ant-skeleton-active"},c.a.createElement("div",{className:"ant-skeleton-content"},c.a.createElement("h3",{className:"ant-skeleton-title"},"Temp"),c.a.createElement("ul",{className:"ant-skeleton-paragraph"},c.a.createElement("li",null),c.a.createElement("li",null),c.a.createElement("li",{style:{width:"61%"}}))))}},53:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var a=n(21),c=function(t,e,n){return{type:a.b,data:t,onSuccess:e,onError:n}},r=function(t){return{type:a.a,data:t}}},55:function(t,e,n){"use strict";var a=n(20),c=n(8),r=function(t){return console.log(Object(c.get)(t,"auth")),Object(c.get)(t,"auth.loggedInUser")};e.a=function(){return{isLoggedIn:!!Object(a.e)(r)}}},67:function(t,e,n){t.exports=n(105)},73:function(t,e,n){}},[[67,3,4]]]);
//# sourceMappingURL=main.7dd2f601.chunk.js.map
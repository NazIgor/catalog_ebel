"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[454],{736:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var n=t(8152),i=t(3504),r=t(2791),s=t(2384),c=t(4423),l=t(7970),d=t(184),o=function(e){var a=e.uiData,t=e.loading,n=e.lang,i=e.contentChange,r=!t&&a?(0,d.jsxs)("ul",{onClick:i,children:[(0,d.jsx)("li",{className:"admin-side_item","data-target":"start",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"start",children:a.btn_main[n]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"catalog",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"catalog",children:a.btn_catalog[n]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"mebel",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"mebel",children:a.btn_mebel[n]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"banner",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"banner",children:a.btn_banner[n]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"collection",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"collection",children:a.btn_set[n]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"ui",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"ui",children:a.btn_addUI[n]})})]}):null;return(0,d.jsx)("div",{className:"admin-side",children:r})},u=t(7754),m=t.p+"static/media/delete.9e293051bc3753d3441b.png",g=function(e){var a=e.lang,t=e.langs,i=(0,r.useRef)(),c=(0,r.useRef)(),o=(0,r.useState)(null),u=(0,n.Z)(o,2),g=u[0],h=u[1],x=(0,r.useState)(null),f=(0,n.Z)(x,2),j=(f[0],f[1]),p=(0,r.useState)(null),v=(0,n.Z)(p,2),b=v[0],N=v[1],C=(0,r.useState)(null),A=(0,n.Z)(C,2),S=A[0],Z=A[1],k=(0,r.useState)([]),_=(0,n.Z)(k,2),w=_[0],E=_[1],U=(0,r.useState)([]),D=(0,n.Z)(U,2),O=D[0],R=D[1],B=(0,r.useState)(!1),y=(0,n.Z)(B,2),L=y[0],F=y[1],I=(0,s.Z)(),K=I.loading,T=(I.error,I.postData);(0,r.useEffect)((function(){Y()}),[]);var q,Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a={action:"read"};e&&(a.id=e,F(!0)),T({catalog:a}).then((function(a){z(e,a.Catalog)})).catch((function(e){return console.log("error read catalogs, ",e)}))},z=function(e,a){console.log(e),e?(R(a),F(!1)):E(a)},P=function(e,a){var n={action:"write"};t.forEach((function(a){n[a]=document.querySelector("input[data-target=".concat(e,"-").concat(a,"]")).value,document.querySelector("input[data-target=".concat(e,"-").concat(a,"]")).value=""})),a&&(n.id=a,F(!0)),T({catalog:n}).then((function(e){z(a,e.Catalog)})).catch((function(e){console.log("error add catalog: ",n," error: ",e),alert("Error add to catalog, details in the console")}))},Q=function(e,a){var t=e.target.parentElement.getAttribute(a),n={action:"del",target:"data-mainid"===a?"cat":"subCat",id:t};T({catalog:n}).then((function(e){z("data-subid"===a,e.Catalog)})).catch((function(e){console.log("error delete catalog: ",n,"error: ",e),alert("Error delete, details in the console")}))},H=function(e,a){e.target.getAttribute("data-subid")?j(e.target.getAttribute("data-subid")):(j(null),Z(!1),c.current&&c.current.classList.remove("active"),h(e.target.getAttribute("data-mainid")),R([]),Y(e.target.getAttribute("data-mainid"))),a.current&&a.current.classList.remove("active"),a.current=e.target,a.current.classList.add("active")},M=function(e){return t.map((function(a,t){return(0,d.jsx)("input",{type:"text",className:"addCat-input","data-lang":a,"data-target":"".concat(e,"-").concat(a),placeholder:a},"".concat(e,"-").concat(a," ").concat(t))}))},V=function(e){"main"===e?N((function(e){return!e})):Z((function(e){return!e}))},X=g?"addCat right ":"addCat right hide",G=b?"add-area ":"add-area hide",W=S&&g?"add-area ":"add-area hide";return(0,d.jsxs)("div",{className:"admin-catalog",children:[(0,d.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}),(0,d.jsxs)("div",{className:"admin-catalog-data",children:[(0,d.jsxs)("div",{className:"admin-catalog-data_right",children:[(0,d.jsx)("h4",{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433:"}),(0,d.jsx)("ul",{className:"items",onClick:function(e){H(e,i)},children:K&&!L?(0,d.jsx)(l.$,{}):(q="main",w.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)("div",{className:"item","data-mainid":e.id,children:[e[a]," ",(0,d.jsx)("img",{src:m,alt:"delete",onClick:function(e){return Q(e,"data-mainid")}})]})},"".concat(q).concat(e.id))})))}),(0,d.jsxs)("div",{className:"addCat left",children:[(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return V("main")},children:"Add Catalog"}),(0,d.jsxs)("div",{className:G,children:[M("mainCatalog"),(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return P("mainCatalog",null)},children:"Ok"})]})]})]}),(0,d.jsxs)("div",{className:"admin-catalog-data_left",children:[(0,d.jsx)("h4",{children:"\u041f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438:"}),(0,d.jsx)("ul",{className:"items",onClick:function(e){H(e,c)},children:L?(0,d.jsx)(l.$,{}):O.map((function(e){return(0,d.jsx)("li",{className:"items-elem",children:(0,d.jsxs)("div",{className:"item","data-subid":e.id,children:[e[a]," ",(0,d.jsx)("img",{src:m,alt:"delete",onClick:function(e){return Q(e,"data-subid")}})]})},"sub".concat(e.id))}))}),(0,d.jsxs)("div",{className:X,children:[(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return V("sub")},children:"Add subCatalog"}),(0,d.jsxs)("div",{className:W,children:[M("subCatalog"),(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return P("subCatalog",g)},children:"Ok"})]})]})]})]})]})},h=t(8683),x=t(5717),f=function(e){var a=e.data;return(0,d.jsx)("div",{className:"courusel",children:(0,d.jsx)(x.Z,(0,h.Z)((0,h.Z)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:a.map((function(e,a){return(0,d.jsx)("img",{src:e,alt:"img-courusel"},"imgs".concat(a))}))}))})},j=t.p+"static/media/temp.ab7a8c46f82d1d1b419d.jpg",p=function(e){var a=e.lang,t=e.data;return(0,d.jsx)(d.Fragment,{children:t.map((function(e,t){return(0,d.jsx)("li",{children:(0,d.jsxs)("div",{className:"item","data-proid":e.id,children:[(0,d.jsxs)("div",{className:"description",children:[(0,d.jsx)("h3",{children:e.name[a]}),(0,d.jsx)("div",{children:e.descr[a]}),(0,d.jsx)("div",{children:(0,d.jsxs)("strong",{children:["$ ",(Math.round(100*e.price)/100).toLocaleString("ru-RU")]})}),(0,d.jsx)("br",{})]}),(0,d.jsx)("div",{className:"imgs",children:(0,d.jsx)(f,{data:[j,j,j]})}),(0,d.jsxs)("div",{className:"pics",children:[(0,d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABYUlEQVRIie3VvUrDUBgG4PcrtnVzd3JxFEy8BAXlZPYCvAHBSRcxAUG9ClcXR1O8AwdJdXURQQdHp5LU9nWQYNL8x3M69d3OX56cky8JsMicIiYuGtnqCMQpBB8gDnpD/9E4HNrKFeIs0fUF4V4vGDwYg3PQPxzYSe68oxMuyQoE18kOrXA/8F0KvNxBYlUrHNrKDW3lVuKC83Tzn2j8TAle9YeDk3hsbDnHBC8BQAi3++SnbqY1nFdIFHj9wHeTc4DfU5hd3wouqd7MzovSGC5Dm+CNiqsOCgAdyqhqTu0d10XzCqk1rButBZtAK2FTaClsEgUKqnpsO7tCHFYtpsBrgxbC3eDuniKl8OxXSgsMAJ0pP02hpfCEeDOFZuBwS23EH/blZ/9lKpN1EW4T3Acw0oVmElrqIrIUk//XON+bjqPTSr1OkaVeAawB+o60KEupFuUdQhK4geDWFLrIXPMDlIu3TSNeiOUAAAAASUVORK5CYII=",alt:"edit"}),(0,d.jsx)("img",{src:m,alt:"delete"})]})]},"prod".concat(e.id,"-").concat(t))},"prod".concat(e.id,"-").concat(t))}))})},v=t(7831),b={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},N={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},C={display:"flex",minWidth:0,overflow:"hidden"},A={display:"block",width:"auto",height:"100%"},S=function(e){var a=e.getFiles,t=(0,r.useState)([]),i=(0,n.Z)(t,2),c=i[0],l=i[1],o=(0,s.Z)(),u=o.postFiles,m=(o.clearError,(0,v.uI)({accept:{"image/*":[]},onDrop:function(e){var a=e.map((function(e){return e}));u({parts:{data:a}}).then((function(e){return console.log("server answer: ".concat(e))})).catch((function(e){return console.log("error: ".concat(e))})),l(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}})),g=m.getRootProps,x=m.getInputProps;(0,r.useEffect)((function(){a()}),[c]);var f=c.map((function(e){return(0,d.jsx)("div",{style:N,children:(0,d.jsx)("div",{style:C,children:(0,d.jsx)("img",{src:e.preview,style:A,alt:"",onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));return(0,r.useEffect)((function(){return function(){return c.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[]),(0,d.jsxs)("section",{className:"container-upload",children:[(0,d.jsxs)("div",(0,h.Z)((0,h.Z)({},g({className:"dropzone"})),{},{children:[(0,d.jsx)("input",(0,h.Z)({},x())),(0,d.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 1 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"})]})),(0,d.jsx)("aside",{style:b,children:f})]})},Z=function(e){var a=e.langs,t=(0,r.useState)(!1),i=(0,n.Z)(t,2),c=i[0],l=i[1],o=(0,r.useState)(null),u=(0,n.Z)(o,2),m=u[0],g=u[1],h=(0,r.useRef)([]),x=(0,s.Z)(),f=x.postData,j=x.clearError,p=c?"add-area":"add-area add-area_hide";return(0,d.jsxs)("div",{className:"product_add",children:[(0,d.jsx)("div",{className:"label",onClick:function(){return l((function(e){return!e}))},children:"------\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c------"}),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("div",{className:"des",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043d\u0438\u0436\u0435:"}),(h.current=[],a.map((function(e){return function(){var a=(0,r.useState)(""),t=(0,n.Z)(a,2),i=t[0],s=t[1];return(0,d.jsx)("input",{type:"text",placeholder:e,"data-name":e,value:i,onChange:function(e){s((function(a){return e.target.value}))},ref:function(e){return function(e){e&&h.current.push(e)}(e)}},"input".concat(e))}()}))),(0,d.jsx)(S,{getFiles:function(e){return function(e){g(e)}(e)}}),(0,d.jsx)("button",{onClick:function(){h.current.forEach((function(e){console.log(e.getAttribute("data-name"),e.getAttribute("value"))})),console.log(m),j(),f({parts:{data:m}}).then((function(e){console.log(e)})).catch((function(e){console.log("error:  ",e)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},k=function(e){var a=e.lang,t=e.langs,i=(0,r.useState)(!0),s=(0,n.Z)(i,2),c=s[0],l=s[1],o=c?"items items_hide":"items ";return(0,d.jsx)("div",{className:"admin-container",children:(0,d.jsxs)("div",{className:"products",children:[(0,d.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432:"}),(0,d.jsx)("div",{className:"hide-show",onClick:function(){l((function(e){return!e}))},children:"------\u0421\u043a\u0440\u044b\u0442\u044c/ \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a------"}),(0,d.jsx)("div",{className:o,children:(0,d.jsx)("ul",{children:(0,d.jsx)(p,{lang:a,data:[{id:1,name:{en:"Chair",ru:"\u0421\u0442\u0443\u043b",kz:"\u041a\u043e\u0440\u043f\u0435"},set:2,imgs:["/images/temp/temp.jpg","src/images/temp/temp2.jpg"],descr:{en:"Cool chair",ru:"\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0434\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0441\u0442\u0443\u043b",kz:"\u0416\u0430\u043a\u0441\u044b \u0435\u043a\u0435\u043d \u043a\u043e\u0440\u043f\u0435"},price:200},{id:2,name:{en:"Table",ru:"\u0421\u0442o\u043b",kz:"\u041a\u043e\u0440\u043f\u04352"},set:2,imgs:["src/images/temp/temp.jpg","src/images/temp/temp2.jpg"],descr:{en:"Cool table",ru:"\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0434\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0441\u0442o\u043b",kz:"\u0416\u0430\u043a\u0441\u044b \u0435\u043a\u0435\u043d \u043a\u043e\u0440\u043f\u0435"},price:3500}]})})}),(0,d.jsx)(Z,{langs:t})]})})},_=function(e){var a=(0,r.useState)(e.lang),t=(0,n.Z)(a,2),m=t[0],h=t[1],x=(0,r.useState)("start"),f=(0,n.Z)(x,2),j=f[0],p=f[1],v=(0,s.Z)(),b=v.postData,N=v.clearError,C=v.error,A=v.loading,S=(0,r.useState)(null),Z=(0,n.Z)(S,2),_=Z[0],w=Z[1],E=e.langs;(0,r.useEffect)((function(){h((function(a){return e.lang})),console.log("change lang to: ",m)}),[e.lang]),(0,r.useEffect)((function(){U()}),[]);var U=function(){N(),b({getlocale:""}).then((function(e){w(e.Getlocale)})).catch((function(e){return console.log("error get data from server: ",e)}))},D=function(){return(0,d.jsxs)("div",{className:"admin-container",children:[(0,d.jsx)("h3",{children:"\u0410\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c!"}),(0,d.jsx)("p",{children:"........................."}),(0,d.jsxs)(i.OL,{to:"/",children:["\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443  ",_.button_send[m]]})]})},O=C?(0,d.jsx)(c.Z,{}):null,R=A&&!C?(0,d.jsx)(l.$,{}):null,B=A||C||!_?null:function(){switch(j){case"ui":return(0,d.jsx)("div",{className:"admin-container",children:(0,d.jsx)(u.Z,{lang:e.lang,langs:e.langs,uIData:e.uiData.Getlocale})});case"catalog":return(0,d.jsx)("div",{className:"admin-container",children:(0,d.jsx)(g,{lang:m,langs:E})});case"start":return(0,d.jsx)(D,{});case"mebel":return(0,d.jsx)(k,{lang:m,langs:E});default:return(0,d.jsxs)("div",{className:"admin-container",children:[" ",(0,d.jsx)("h4",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442:)))"})]})}}();return(0,d.jsxs)("div",{className:"admin-panel",children:[A?null:(0,d.jsx)(o,{uiData:_,loading:A,lang:m,contentChange:function(e){var a=e.target.getAttribute("data-target");p(a)}}),O,R,B]})}},4423:function(e,a,t){var n=t(184);a.Z=function(){return(0,n.jsxs)("div",{className:"error-loading",children:[(0,n.jsx)("h2",{children:"OOPS!!!"}),(0,n.jsx)("h5",{children:"\u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :("})]})}}}]);
//# sourceMappingURL=454.b5cfaf96.chunk.js.map
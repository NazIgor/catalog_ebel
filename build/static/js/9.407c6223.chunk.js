"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[9],{7522:function(e,a,t){t.r(a),t.d(a,{default:function(){return U}});var n=t(8152),i=t(3504),s=t(2791),c=t(2384),r=t(4423),l=t(7970),d=t(184),o=function(e){var a=e.uiData,t=e.loading,n=e.lang,i=e.contentChange;console.log(n,a);var s=!t&&a?(0,d.jsxs)("ul",{onClick:i,children:[(0,d.jsx)("li",{className:"admin-side_item","data-target":"start",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"start",children:a.btn_main[n.name]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"catalog",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"catalog",children:a.btn_catalog[n.name]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"mebel",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"mebel",children:a.btn_mebel[n.name]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"banner",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"banner",children:a.btn_banner[n.name]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"collection",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"collection",children:a.btn_set[n.name]})}),(0,d.jsx)("li",{className:"admin-side_item","data-target":"ui",children:(0,d.jsx)("div",{className:"admin-side_item_btn","data-target":"ui",children:a.btn_addUI[n.name]})})]}):null;return(0,d.jsx)("div",{className:"admin-side",children:s})},u=t(7754),m=t.p+"static/media/delete.9e293051bc3753d3441b.png",h=function(e){var a=e.lang,t=e.langs,i=(0,s.useRef)(),r=(0,s.useRef)(),o=(0,s.useState)(null),u=(0,n.Z)(o,2),h=u[0],g=u[1],x=(0,s.useState)(null),f=(0,n.Z)(x,2),j=(f[0],f[1]),p=(0,s.useState)(null),v=(0,n.Z)(p,2),b=v[0],N=v[1],A=(0,s.useState)(null),C=(0,n.Z)(A,2),_=C[0],k=C[1],S=(0,s.useState)([]),Z=(0,n.Z)(S,2),w=Z[0],E=Z[1],D=(0,s.useState)([]),y=(0,n.Z)(D,2),U=y[0],R=y[1],O=(0,s.useState)(!1),q=(0,n.Z)(O,2),B=q[0],I=q[1],F=(0,c.Z)(),L=F.loading,T=(F.error,F.postData);(0,s.useEffect)((function(){Y()}),[]);var K,Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a={action:"read"};e&&(a.id=e,I(!0)),T({catalog:a}).then((function(a){z(e,a.Catalog)})).catch((function(e){return console.log("error read catalogs, ",e)}))},z=function(e,a){e?(R(a),I(!1)):E(a)},P=function(e,a){var n={langs:[],action:"write"};t.forEach((function(a){var t={};t.id=a.id,t.value=document.querySelector("input[data-target=".concat(e,"-").concat(a.name,"]")).value,n.langs.push(t),document.querySelector("input[data-target=".concat(e,"-").concat(a.name,"]")).value=""})),a&&(n.id=a,I(!0)),T({catalog:n}).then((function(e){z(a,e.Catalog)})).catch((function(e){console.log("error add catalog: ",n," error: ",e),alert("Error add to catalog, details in the console")}))},Q=function(e,a){var t=e.target.parentElement.getAttribute(a),n={action:"del",target:"data-mainid"===a?"cat":"subCat",id:t};T({catalog:n}).then((function(e){z("data-subid"===a,e.Catalog)})).catch((function(e){console.log("error delete catalog: ",n,"error: ",e),alert("Error delete, details in the console")}))},G=function(e,a){e.target.getAttribute("data-subid")?j(e.target.getAttribute("data-subid")):(j(null),k(!1),r.current&&r.current.classList.remove("active"),g(e.target.getAttribute("data-mainid")),R([]),Y(e.target.getAttribute("data-mainid"))),a.current&&a.current.classList.remove("active"),a.current=e.target,a.current.classList.add("active")},H=function(e){return t.map((function(a,t){return(0,d.jsx)("input",{type:"text",className:"addCat-input","data-lang":a.name,"data-target":"".concat(e,"-").concat(a.name),placeholder:a.fullName},"".concat(e,"-").concat(a.name," ").concat(t))}))},M=function(e){"main"===e?N((function(e){return!e})):k((function(e){return!e}))},V=h?"addCat right ":"addCat right hide",X=b?"add-area ":"add-area hide",W=_&&h?"add-area ":"add-area hide";return(0,d.jsxs)("div",{className:"admin-catalog",children:[(0,d.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}),(0,d.jsxs)("div",{className:"admin-catalog-data",children:[(0,d.jsxs)("div",{className:"admin-catalog-data_right",children:[(0,d.jsx)("h4",{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433:"}),(0,d.jsx)("ul",{className:"items",onClick:function(e){G(e,i)},children:L&&!B?(0,d.jsx)(l.$,{}):(K="main",w.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)("div",{className:"item","data-mainid":e.id,children:[e[a.name]," ",(0,d.jsx)("img",{src:m,alt:"delete",onClick:function(e){return Q(e,"data-mainid")}})]})},"".concat(K).concat(e.id))})))}),(0,d.jsxs)("div",{className:"addCat left",children:[(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return M("main")},children:"Add Catalog"}),(0,d.jsxs)("div",{className:X,children:[H("mainCatalog"),(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return P("mainCatalog",null)},children:"Ok"})]})]})]}),(0,d.jsxs)("div",{className:"admin-catalog-data_left",children:[(0,d.jsx)("h4",{children:"\u041f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438:"}),(0,d.jsx)("ul",{className:"items",onClick:function(e){G(e,r)},children:B?(0,d.jsx)(l.$,{}):U.map((function(e){return(0,d.jsx)("li",{className:"items-elem",children:(0,d.jsxs)("div",{className:"item","data-subid":e.id,children:[e[a.name]," ",(0,d.jsx)("img",{src:m,alt:"delete",onClick:function(e){return Q(e,"data-subid")}})]})},"sub".concat(e.id))}))}),(0,d.jsxs)("div",{className:V,children:[(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return M("sub")},children:"Add subCatalog"}),(0,d.jsxs)("div",{className:W,children:[H("subCatalog"),(0,d.jsx)("button",{className:"addCat-btn",onClick:function(){return P("subCatalog",h)},children:"Ok"})]})]})]})]})]})},g=t(8683),x=t(5717),f=function(e){var a=e.data;return(0,d.jsx)("div",{className:"courusel",children:(0,d.jsx)(x.Z,(0,g.Z)((0,g.Z)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:a.map((function(e,a){return(0,d.jsx)("img",{src:e,alt:"img-courusel"},"imgs".concat(a))}))}))})},j=t.p+"static/media/temp.ab7a8c46f82d1d1b419d.jpg",p=function(e){var a=e.lang,t=e.data;return(0,d.jsx)(d.Fragment,{children:t.map((function(e,t){return(0,d.jsx)("li",{children:(0,d.jsxs)("div",{className:"item","data-proid":e.id,children:[(0,d.jsxs)("div",{className:"description",children:[(0,d.jsx)("h3",{children:e.name[a.name]}),(0,d.jsx)("div",{children:e.descr[a.name]}),(0,d.jsx)("div",{children:(0,d.jsxs)("strong",{children:["$ ",(Math.round(100*e.price)/100).toLocaleString("ru-RU")]})}),(0,d.jsx)("br",{})]}),(0,d.jsx)("div",{className:"imgs",children:(0,d.jsx)(f,{data:[j,j,j]})}),(0,d.jsxs)("div",{className:"pics",children:[(0,d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABYUlEQVRIie3VvUrDUBgG4PcrtnVzd3JxFEy8BAXlZPYCvAHBSRcxAUG9ClcXR1O8AwdJdXURQQdHp5LU9nWQYNL8x3M69d3OX56cky8JsMicIiYuGtnqCMQpBB8gDnpD/9E4HNrKFeIs0fUF4V4vGDwYg3PQPxzYSe68oxMuyQoE18kOrXA/8F0KvNxBYlUrHNrKDW3lVuKC83Tzn2j8TAle9YeDk3hsbDnHBC8BQAi3++SnbqY1nFdIFHj9wHeTc4DfU5hd3wouqd7MzovSGC5Dm+CNiqsOCgAdyqhqTu0d10XzCqk1rButBZtAK2FTaClsEgUKqnpsO7tCHFYtpsBrgxbC3eDuniKl8OxXSgsMAJ0pP02hpfCEeDOFZuBwS23EH/blZ/9lKpN1EW4T3Acw0oVmElrqIrIUk//XON+bjqPTSr1OkaVeAawB+o60KEupFuUdQhK4geDWFLrIXPMDlIu3TSNeiOUAAAAASUVORK5CYII=",alt:"edit"}),(0,d.jsx)("img",{src:m,alt:"delete"})]})]},"prod".concat(e.id,"-").concat(t))},"prod".concat(e.id,"-").concat(t))}))})},v=t(7831),b={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},N={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},A={display:"flex",minWidth:0,overflow:"hidden"},C={display:"block",width:"auto",height:"100%"},_=function(e){var a=e.getFiles,t=(0,s.useState)([]),i=(0,n.Z)(t,2),c=i[0],r=i[1],l=(0,s.useState)(null),o=(0,n.Z)(l,2),u=o[0],m=o[1],h=(0,v.uI)({accept:{"image/*":[]},onDrop:function(e){r(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})));var a=new FormData;m((function(){return e.forEach((function(e,t){a.append(e.name,e)})),a}))}}),x=h.getRootProps,f=h.getInputProps;(0,s.useEffect)((function(){a(c,u)}),[c,u]);var j=c.map((function(e){return(0,d.jsx)("div",{style:N,children:(0,d.jsx)("div",{style:A,children:(0,d.jsx)("img",{src:e.preview,style:C,alt:"",onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));return(0,s.useEffect)((function(){return function(){return c.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[]),(0,d.jsxs)("section",{className:"container-upload",children:[(0,d.jsxs)("div",(0,g.Z)((0,g.Z)({},x({className:"dropzone"})),{},{children:[(0,d.jsx)("input",(0,g.Z)({},f())),(0,d.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 1 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"})]})),(0,d.jsx)("aside",{style:b,children:j})]})},k=function(e){var a=e.data,t=e.check;return(0,d.jsx)("li",{children:(0,d.jsx)("div",{className:"cats_sub_item",children:(0,d.jsxs)("label",{children:[(0,d.jsx)("input",{type:"checkbox",disabled:!t,subcatsid:a.id})," ",a.name]})})},"subs_".concat(a.id))},S=function(e){var a=e.data,t=(0,s.useState)(!1),i=(0,n.Z)(t,2),c=i[0],r=i[1],l=a.items?a.items.map((function(e,a){return(0,d.jsx)(k,{data:e,check:c},"subs_".concat(a))})):null;return(0,d.jsxs)("div",{className:"admin_catalogs",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("input",{type:"checkbox",checked:c,onChange:function(){r((function(e){return!e}))},catid:a.id,who:"cats"}),a.name]}),(0,d.jsx)("ul",{className:"items admin_add_catalogs",children:l})]})},Z=function(e){var a=e.data,t=a?a.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)("label",{children:[(0,d.jsx)("input",{type:"checkbox",style:{marginRight:"5px",width:"auto"},setid:e.id})," ",e.name]})},"sets_".concat(e.id))})):null;return(0,d.jsx)("div",{className:"admin_add_sets_list",children:(0,d.jsx)("ul",{children:t})})},w=[{name:"1",id:1,items:[{id:1,name:"1-1"},{id:2,name:"1-2"},{id:3,name:"1-3"}]},{name:"2",id:2,items:[{id:4,name:"2-1"},{id:5,name:"2-2"},{id:6,name:"2-3"}]}],E=[{id:1,name:"\u043a\u0443\u0445\u043d\u044f"},{id:2,name:"\u0421\u043f\u0430\u043b\u044c\u043d\u044f"},{id:3,name:"\u041f\u0440\u0438\u0445\u043e\u0436\u0430\u044f"},{id:4,name:"\u0413\u043e\u0441\u0442\u0438\u043d\u043d\u0430\u044f"}];var D=function(e){var a=e.langs,t=(0,s.useState)(!1),i=(0,n.Z)(t,2),r=i[0],o=i[1],u=(0,s.useState)(null),m=(0,n.Z)(u,2),h=m[0],x=m[1],f=(0,s.useRef)([]),j=(0,s.useRef)([]),p=(0,c.Z)(),v=p.postData,b=p.clearError,N=p.postFiles,A=p.loading,C=p.error,k=function(e){return"names"===e?f.current=[]:j.current=[],a.map((function(a){return function(){var t=(0,s.useState)(""),i=(0,n.Z)(t,2),c=i[0],r=i[1],l=function(e){r(e.target.value)},o=function(a){a&&("names"===e?f.current.push(a):j.current.push(a))};return"names"===e?(0,d.jsx)("input",{type:"text",placeholder:a.fullName,"data-name":a.id,value:c,onChange:l,ref:function(e){return o(e)}},"input".concat(a.id)):(0,d.jsx)("textarea",{name:"descr-".concat(a.name),placeholder:a.fullName,"data-name":a.id,value:c,cols:"30",rows:"10",className:"descr-txtArea",onChange:l,ref:function(e){return o(e)}},"txtArea".concat(a.id))}()}))},D=r?"add-area":"add-area add-area_hide",y=new FormData,U={},R={},O=function(){return(0,d.jsx)("div",{className:"show-spiner",children:(0,d.jsx)(l.$,{})})},q=w?w.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)("div",{className:"cats_items",children:(0,d.jsx)(S,{data:e})})},"add_cats-".concat(e.id))})):null;return(0,d.jsxs)("div",{className:"product_add",children:[(0,d.jsx)("div",{className:"label",onClick:function(){return o((function(e){return!e}))},children:"------\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c------"}),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:D,children:[A&&!C?(0,d.jsx)(O,{}):null,(0,d.jsx)("div",{className:"des",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043d\u0438\u0436\u0435:"}),(0,d.jsx)("div",{className:"names",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),k("names"),(0,d.jsx)("div",{className:"names",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),k("txtArea"),(0,d.jsx)("div",{className:"names",children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 \u0438 \u043f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438"}),(0,d.jsx)("ul",{className:"admin_add_catalogs",children:q}),(0,d.jsx)("div",{className:"names",children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432 \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0432\u0445\u043e\u0434\u0438\u0442 \u0442\u043e\u0432\u0430\u0440:"}),(0,d.jsx)("ul",{className:"admin_add_sets",children:(0,d.jsx)(Z,{data:E})}),(0,d.jsx)(_,{getFiles:function(e,a){return function(e,a){x(e)}(e)}}),(0,d.jsx)("button",{onClick:function(){f.current.forEach((function(e){U[e.getAttribute("data-name")]=e.getAttribute("value")})),j.current.forEach((function(e){R[e.getAttribute("data-name")]=e.textContent})),h.forEach((function(e,a){y.append("product_img".concat(a),e)})),b();var e=function(e){for(var a={sets:[]},t=0;t<e.length;t++)e[t].checked&&a.sets.push(e[t].getAttribute("setiD"));return a}(document.querySelector(".admin_add_sets_list").getElementsByTagName("input")),a=function(e){var a={cats:[],subCats:[]};return e.forEach((function(e){var t=e.getElementsByTagName("ul");if(e.querySelector("input[who='cats']").checked){a.cats.push(e.querySelector("input[who='cats']").getAttribute("catid"));for(var n=0;n<t[0].children.length;n++){var i=t[0].children[n].querySelector("input");i.checked&&a.subCats.push(i.getAttribute("subcatsid"))}}})),a}(document.querySelector(".admin_add_catalogs").querySelectorAll(".cats_items"));v({parts:{data:{name:(0,g.Z)({},U),descr:(0,g.Z)({},R),sets:e.sets,cats:a.cats,subCats:a.subCats}}}).then((function(e){console.log(e),console.log(h.length);h.length&&N(y,"http://ebel.lc/upload/".concat(1)).then((function(e){console.log(e)})).catch((function(e){return console.log("error request in add files: ".concat(e))}))})).catch((function(e){return console.log("error request in add information: ".concat(e))}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},y=function(e){var a=e.lang,t=e.langs,i=(0,s.useState)(!0),c=(0,n.Z)(i,2),r=c[0],l=c[1],o=r?"items items_hide":"items ";return(0,d.jsx)("div",{className:"admin-container",children:(0,d.jsxs)("div",{className:"products",children:[(0,d.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432:"}),(0,d.jsx)("div",{className:"hide-show",onClick:function(){l((function(e){return!e}))},children:"------\u0421\u043a\u0440\u044b\u0442\u044c/ \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a------"}),(0,d.jsx)("div",{className:o,children:(0,d.jsx)("ul",{children:(0,d.jsx)(p,{lang:a,data:[{id:1,name:{en:"Chair",ru:"\u0421\u0442\u0443\u043b",kz:"\u041a\u043e\u0440\u043f\u0435"},set:2,imgs:["/images/temp/temp.jpg","src/images/temp/temp2.jpg"],descr:{en:"Cool chair",ru:"\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0434\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0441\u0442\u0443\u043b",kz:"\u0416\u0430\u043a\u0441\u044b \u0435\u043a\u0435\u043d \u043a\u043e\u0440\u043f\u0435"},price:200},{id:2,name:{en:"Table",ru:"\u0421\u0442o\u043b",kz:"\u041a\u043e\u0440\u043f\u04352"},set:2,imgs:["src/images/temp/temp.jpg","src/images/temp/temp2.jpg"],descr:{en:"Cool table",ru:"\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0434\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0441\u0442o\u043b",kz:"\u0416\u0430\u043a\u0441\u044b \u0435\u043a\u0435\u043d \u043a\u043e\u0440\u043f\u0435"},price:3500}]})})}),(0,d.jsx)(D,{langs:t})]})})},U=function(e){console.log(e);var a=(0,s.useState)("ru"),t=(0,n.Z)(a,2),m=t[0],g=t[1],x=(0,s.useState)("start"),f=(0,n.Z)(x,2),j=f[0],p=f[1],v=(0,c.Z)(),b=v.postData,N=v.clearError,A=v.error,C=v.loading,_=(0,s.useState)(e.uiData?e.uiData.GetUI:null),k=(0,n.Z)(_,2),S=k[0],Z=k[1],w=e.langs;(0,s.useEffect)((function(){g((function(a){return e.lang})),console.log("change lang to: ",m.name)}),[e.lang]),(0,s.useEffect)((function(){e.uiData||E()}),[]);var E=function(){N(),b({getUI:""}).then((function(e){Z(e.GetUI)})).catch((function(e){return console.log("error get data from server: ",e)}))},D=function(){return(0,d.jsxs)("div",{className:"admin-container",children:[(0,d.jsx)("h3",{children:"\u0410\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c!"}),(0,d.jsx)("p",{children:"........................."}),(0,d.jsxs)(i.OL,{to:"/",children:["\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443  ",S.button_send[m.name]]})]})},U=A?(0,d.jsx)(r.Z,{}):null,R=C&&!A?(0,d.jsx)(l.$,{}):null,O=C||A||!S?null:function(){switch(j){case"ui":return(0,d.jsx)("div",{className:"admin-container",children:(0,d.jsx)(u.Z,{lang:e.lang,langs:e.langs,uIData:e.uiData.GetUI})});case"catalog":return(0,d.jsx)("div",{className:"admin-container",children:(0,d.jsx)(h,{lang:m,langs:w})});case"start":return(0,d.jsx)(D,{});case"mebel":return(0,d.jsx)(y,{lang:m,langs:w});default:return(0,d.jsxs)("div",{className:"admin-container",children:[" ",(0,d.jsx)("h4",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442:)))"})]})}}();return(0,d.jsxs)("div",{className:"admin-panel",children:[C?null:(0,d.jsx)(o,{uiData:S,loading:C,lang:m,contentChange:function(e){var a=e.target.getAttribute("data-target");p(a)}}),U,R,O]})}},4423:function(e,a,t){var n=t(184);a.Z=function(){return(0,n.jsxs)("div",{className:"error-loading",children:[(0,n.jsx)("h2",{children:"OOPS!!!"}),(0,n.jsx)("h5",{children:"\u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :("})]})}}}]);
//# sourceMappingURL=9.407c6223.chunk.js.map
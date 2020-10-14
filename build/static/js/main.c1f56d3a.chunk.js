(this["webpackJsonpbroker-app"]=this["webpackJsonpbroker-app"]||[]).push([[0],{32:function(e,t,a){},50:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),r=a.n(l),u=(a(32),a(7)),o=a(43),i=function(){return n.createElement(n.Fragment,null,n.createElement(o.a,null,n.createElement("h1",null,"Home"),n.createElement("p",null,"This application has been developed as a simple user interface to input and save Broker Policies."),n.createElement("p",null,"Use the navigation buttons in the header to view each page of the application."),n.createElement("p",null,"You can view, edit, create, and delete the following elements:"),n.createElement("ul",null,n.createElement("li",null,"Policy"),n.createElement("li",null,"Policy Type"),n.createElement("li",null,"Insurer"))))},m=a(86),s=a(87),p=a(8),d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{bg:"primary",expand:"lg",variant:"dark"},c.a.createElement(m.a.Brand,null,"Broker App"),c.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(s.a,{className:"m-auto"},c.a.createElement(p.c,{to:"/",className:"nav-link",exact:!0,activeClassName:"active"},"Home"),c.a.createElement(p.c,{to:"/policy",className:"nav-link",activeClassName:"active"},"Policies"),c.a.createElement(p.c,{to:"/insurer",className:"nav-link",activeClassName:"active"},"Insurers"),c.a.createElement(p.c,{to:"/policy-type",className:"nav-link",activeClassName:"active"},"Policy Types")))))},E=a(4),f=a(3),b=a(80),h=a(81),y=a(88),v=a(82),j=a(15),O=function(e){e.match;var t=e.history,a=Object(n.useState)({name:""}),l=Object(f.a)(a,2),r=l[0],u=l[1],i=Object(n.useState)(null),m=Object(f.a)(i,2),s=m[0],p=m[1];return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Create policy type"),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Name"),c.a.createElement(y.a,{type:"text",value:r.name,placeholder:"Enter name",onChange:function(e){u(Object(E.a)(Object(E.a)({},r),{},{name:e.target.value}))}})),c.a.createElement(v.a,{onClick:function(){""===r.name&&p("You must enter a value for the name");var e="".concat("http://broker-api.fraserjameskelly.com","/policy-type/");j.post(e,r).then((function(e){t.push("/policy-type/list")})).catch((function(e){p(e.data)}))},variant:"success"},"Update"),null!==s&&c.a.createElement("p",null,s))},g=a(83),k=a(15),C=function(e){e.match;var t=Object(n.useState)(!0),a=Object(f.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(null),o=Object(f.a)(u,2),i=o[0],m=o[1],s=Object(n.useState)([]),d=Object(f.a)(s,2),E=d[0],b=d[1];Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/policy-type");k.get(e).then((function(e){r(!1),b(e.data)})).catch((function(e){m(e.data)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Policy types"),l&&c.a.createElement("p",null,"Loading..."),E.length>0&&c.a.createElement(g.a,{striped:!0,bordered:!0,responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"ID"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,E.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.name),c.a.createElement("td",{className:"actions"},c.a.createElement("div",null,c.a.createElement(p.b,{to:"/policy-type/update/".concat(e.id),className:"btn btn-info mr-2"},"Edit"),c.a.createElement(v.a,{variant:"danger",onClick:function(){window.confirm("Delete this Policy Type? It will also delete any Policies associated.")&&function(e){var t="".concat("http://broker-api.fraserjameskelly.com","/policy-type/").concat(e.id);k.delete(t).then((function(t){var a=E.filter((function(t){return t.id!==e.id}));b(a)})).catch((function(e){m(e.data)}))}(e)}},"Delete"))))})))),null!==i&&c.a.createElement("p",null,i),c.a.createElement(p.b,{to:"/policy-type/create",className:"btn btn-success"},"Create new Policy Type"))},N=a(15),S=function(e){var t=e.match,a=e.history,l=Object(n.useState)(!0),r=Object(f.a)(l,2),u=r[0],i=r[1],m=Object(n.useState)(null),s=Object(f.a)(m,2),p=s[0],d=s[1],j=Object(n.useState)(null),O=Object(f.a)(j,2),g=O[0],k=O[1],C=parseInt(t.params.policyTypeId);Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/policy-type/").concat(C);N.get(e).then((function(e){i(!1),k(e.data)})).catch((function(e){d(e.data)}))}),[]);return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Policy type ",t.params.policyTypeId),u&&c.a.createElement("p",null,"Loading..."),null!==g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Name"),c.a.createElement(y.a,{type:"text",value:g.name,placeholder:"Enter name",onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{name:e.target.value}))}})),c.a.createElement(v.a,{onClick:function(){var e="".concat("http://broker-api.fraserjameskelly.com","/policy-type/").concat(C);N.post(e,g).then((function(e){i(!1),a.push("/policy-type/list")})).catch((function(e){d(e.data)}))},variant:"success"},"Update")),null!==p&&c.a.createElement("p",null,p))},I=a(15),w=function(e){e.match;var t=e.history,a=Object(n.useState)(!0),l=Object(f.a)(a,2),r=l[0],u=l[1],i=Object(n.useState)({customerName:"",customerAddress:"",premium:"0",policyType:0,insurer:0}),m=Object(f.a)(i,2),s=m[0],p=m[1],d=Object(n.useState)([]),j=Object(f.a)(d,2),O=j[0],g=j[1],k=Object(n.useState)([]),C=Object(f.a)(k,2),N=C[0],S=C[1],w=Object(n.useState)(null),P=Object(f.a)(w,2),A=P[0],x=P[1];Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/policy-type"),t="".concat("http://broker-api.fraserjameskelly.com","/insurer");I.get(e).then((function(e){u(!1),g(e.data)})).catch((function(e){x(e.data)})),I.get(t).then((function(e){u(!1),S(e.data)})).catch((function(e){x(e.data)}))}),[]);return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Create Policy "),r&&c.a.createElement("p",null,"Loading..."),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Customer Name"),c.a.createElement(y.a,{type:"text",value:s.customerName,placeholder:"Enter customer name",onChange:function(e){p(Object(E.a)(Object(E.a)({},s),{},{customerName:e.target.value}))}})),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Customer Address"),c.a.createElement(y.a,{type:"text",value:s.customerAddress,placeholder:"Enter customer address",onChange:function(e){p(Object(E.a)(Object(E.a)({},s),{},{customerAddress:e.target.value}))}})),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Premium"),c.a.createElement(y.a,{type:"text",value:s.premium,placeholder:"Enter premium",onChange:function(e){p(Object(E.a)(Object(E.a)({},s),{},{premium:e.target.value}))}})),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Policy Type"),c.a.createElement(y.a,{as:"select",onChange:function(e){p(Object(E.a)(Object(E.a)({},s),{},{policyType:parseInt(e.target.value)}))}},O.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Insurer"),c.a.createElement(y.a,{as:"select",onChange:function(e){p(Object(E.a)(Object(E.a)({},s),{},{insurer:parseInt(e.target.value)}))}},N.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement(v.a,{onClick:function(){if(""!==s.customerName)if(""!==s.customerAddress)if(0>=parseFloat(s.premium))x("Please enter a valid number for the premium");else{p(Object(E.a)(Object(E.a)({},s),{},{premium:parseFloat(s.premium).toString()}));var e="".concat("http://broker-api.fraserjameskelly.com","/policy/");I.post(e,s).then((function(e){t.push("/policy/list")})).catch((function(e){x(e.data)}))}else x("You must enter a value for the customer address");else x("You must enter a value for the customer name")},variant:"success"},"Create"),null!==A&&c.a.createElement("p",null,A))},P=a(84),A=a(15),x=function(e){e.match;var t=Object(n.useState)(!0),a=Object(f.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(null),i=Object(f.a)(u,2),m=i[0],s=i[1],d=Object(n.useState)(""),E=Object(f.a)(d,2),b=E[0],h=E[1],j=Object(n.useState)({name:"ID",dir:"ASC"}),O=Object(f.a)(j,2),k=O[0],C=O[1],N=Object(n.useState)(""),S=Object(f.a)(N,2),I=S[0],w=S[1],x=Object(n.useState)(""),T=Object(f.a)(x,2),D=T[0],F=T[1],L=Object(n.useState)([]),Y=Object(f.a)(L,2),B=Y[0],U=Y[1],H=Object(n.useState)([]),J=Object(f.a)(H,2),W=J[0],$=J[1],q=Object(n.useState)([]),z=Object(f.a)(q,2),G=z[0],K=z[1],M=Object(n.useState)([]),Q=Object(f.a)(M,2),R=Q[0],V=Q[1];Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/policy"),t="".concat("http://broker-api.fraserjameskelly.com","/policy-type"),a="".concat("http://broker-api.fraserjameskelly.com","/insurer");A.get(e).then((function(e){r(!1),V(e.data.sort((function(e,t){return e.id>t.id?1:-1}))),K(e.data.sort((function(e,t){return e.id>t.id?1:-1})))})).catch((function(e){s(e.data)})),A.get(t).then((function(e){r(!1),U(e.data)})).catch((function(e){s(e.data)})),A.get(a).then((function(e){r(!1),$(e.data)})).catch((function(e){s(e.data)}))}),[]);var X=function(e){var t=e.currentTarget.value,a=k.name!==t||k.name===t&&"DESC"===k.dir?"ASC":"DESC";if(C({name:t,dir:a}),"ID"===t)if("ASC"===a){var n=G.sort((function(e,t){return e.id>t.id?1:-1}));K(n)}else{var c=G.sort((function(e,t){return e.id<t.id?1:-1}));K(c)}else if("Name"===t)if("ASC"===a){var l=G.sort((function(e,t){return e.customerName>t.customerName?1:-1}));K(l)}else{var r=G.sort((function(e,t){return e.customerName<t.customerName?1:-1}));K(r)}else if("Premium"===t)if("ASC"===a){var u=G.sort((function(e,t){return e.premium>t.premium?1:-1}));K(u)}else{var o=G.sort((function(e,t){return e.premium<t.premium?1:-1}));K(o)}};return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Policies"),l&&c.a.createElement("p",null,"Loading..."),c.a.createElement("div",{className:"mb-3"},c.a.createElement(y.a,{type:"text",value:b,placeholder:"Search",onChange:function(e){var t=e.target.value;if(h(t),""===t)K(R);else{var a=G.filter((function(e){return e.customerName.toLowerCase().includes(t.toLowerCase())||e.customerAddress.toLowerCase().includes(t.toLowerCase())}));K(a)}},className:"table-search"})),c.a.createElement(P.a,{className:"filter-row mb-3"},c.a.createElement(o.a,{xs:12,md:6},c.a.createElement(y.a,{as:"select",onChange:function(e){var t=e.target.value;if(w(t),""===t)K(R);else{var a=R.filter((function(e){return e.policyType.id===parseInt(t)}));K(a),h(""),C({name:"ID",dir:"ASC"})}},value:I},c.a.createElement("option",{value:""},"Filter by Policy Type"),B.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement(o.a,{xs:12,md:6},c.a.createElement(y.a,{as:"select",onChange:function(e){var t=e.target.value;if(F(t),""===t)K(R);else{var a=R.filter((function(e){return e.insurer.id===parseInt(t)}));K(a),h(""),C({name:"ID",dir:"ASC"})}},value:D},c.a.createElement("option",{value:""},"Filter by Insurer"),W.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),G.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{striped:!0,bordered:!0,responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("button",{className:"sort-button ".concat("ID"===k.name&&k.dir),onClick:X,value:"ID"},"ID")),c.a.createElement("th",null,c.a.createElement("button",{className:"sort-button ".concat("Name"===k.name&&k.dir),onClick:X,value:"Name"},"Customer Name")),c.a.createElement("th",{className:"d-none d-md-table-cell"},"Customer Address"),c.a.createElement("th",{className:"d-none d-md-table-cell"},c.a.createElement("button",{className:"sort-button ".concat("Premium"===k.name&&k.dir),onClick:X,value:"Premium"},"Premium")),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,G.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.customerName),c.a.createElement("td",{className:"d-none d-md-table-cell"},e.customerAddress),c.a.createElement("td",{className:"d-none d-md-table-cell"},e.premium),c.a.createElement("td",{className:"actions"},c.a.createElement("div",null,c.a.createElement(p.b,{to:"/policy/update/".concat(e.id),className:"btn btn-info mr-2"},"Edit"),c.a.createElement(v.a,{variant:"danger",onClick:function(){window.confirm("Delete this item?")&&function(e){var t="".concat("http://broker-api.fraserjameskelly.com","/policy/").concat(e.id);A.delete(t).then((function(t){var a=G.filter((function(t){return t.id!==e.id}));K(a)})).catch((function(e){s(e.data)}))}(e)}},"Delete"))))}))))),null!==m&&c.a.createElement("p",null,m),c.a.createElement(p.b,{to:"/policy/create",className:"btn btn-success"},"Create new Policy"))},T=a(15),D=function(e){var t=e.match,a=e.history,l=Object(n.useState)(!0),r=Object(f.a)(l,2),u=r[0],i=r[1],m=Object(n.useState)(null),s=Object(f.a)(m,2),p=s[0],d=s[1],j=Object(n.useState)(null),O=Object(f.a)(j,2),g=O[0],k=O[1],C=Object(n.useState)([]),N=Object(f.a)(C,2),S=N[0],I=N[1],w=Object(n.useState)([]),P=Object(f.a)(w,2),A=P[0],x=P[1],D=parseInt(t.params.policyId);Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/policy/").concat(D),t="".concat("http://broker-api.fraserjameskelly.com","/policy-type"),a="".concat("http://broker-api.fraserjameskelly.com","/insurer");T.get(e).then((function(e){i(!1),k(e.data)})).catch((function(e){d(e.data)})),T.get(t).then((function(e){i(!1),I(e.data)})).catch((function(e){d(e.data)})),T.get(a).then((function(e){i(!1),x(e.data)})).catch((function(e){d(e.data)}))}),[]);return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Update Policy ",t.params.policyId),u&&c.a.createElement("p",null,"Loading..."),null!==g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Customer Name"),c.a.createElement(y.a,{type:"text",value:g.customerName,placeholder:"Enter customer name",onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{customerName:e.target.value}))}})),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Customer Address"),c.a.createElement(y.a,{type:"text",value:g.customerAddress,placeholder:"Enter customer address",onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{customerAddress:e.target.value}))}})),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Premium"),c.a.createElement(y.a,{type:"input",value:g.premium,placeholder:"Enter premium",onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{premium:e.target.value}))},pattern:"[0-9]+([\\.,][0-9]+)?"})),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Policy Type"),c.a.createElement(y.a,{as:"select",value:g.policyType.id,onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{policyType:parseInt(e.target.value)}))}},S.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Insurer"),c.a.createElement(y.a,{as:"select",value:g.insurer.id,onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{insurer:parseInt(e.target.value)}))}},A.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement(v.a,{onClick:function(){if(null!==g){if(console.log(g.policyType),""===g.customerName)return void d("You must enter a value for the customer name");if(""===g.customerAddress)return void d("You must enter a value for the customer address");if(0>=parseFloat(g.premium))return void d("Please enter a valid number for the premium");k(Object(E.a)(Object(E.a)({},g),{},{premium:parseFloat(g.premium).toString()}));var e="".concat("http://broker-api.fraserjameskelly.com","/policy/").concat(D);T.post(e,g).then((function(e){i(!1),a.push("/policy/list")})).catch((function(e){d(e.data)}))}},variant:"success"},"Update")),null!==p&&c.a.createElement("p",null,p))},F=a(15),L=function(e){e.match;var t=e.history,a=Object(n.useState)({name:""}),l=Object(f.a)(a,2),r=l[0],u=l[1],i=Object(n.useState)(null),m=Object(f.a)(i,2),s=m[0],p=m[1];return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Create Insurer"),c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Name"),c.a.createElement(y.a,{type:"text",value:r.name,placeholder:"Enter name",onChange:function(e){u(Object(E.a)(Object(E.a)({},r),{},{name:e.target.value}))}})),c.a.createElement(v.a,{onClick:function(){""===r.name&&p("You must enter a value for the name");var e="".concat("http://broker-api.fraserjameskelly.com","/insurer/");F.post(e,r).then((function(e){t.push("/insurer/list")})).catch((function(e){p(e.data)}))},variant:"success"},"Create"),null!==s&&c.a.createElement("p",null,s))},Y=a(15),B=function(e){var t=e.match,a=e.history,l=Object(n.useState)(!0),r=Object(f.a)(l,2),u=r[0],i=r[1],m=Object(n.useState)(null),s=Object(f.a)(m,2),p=s[0],d=s[1],j=Object(n.useState)(null),O=Object(f.a)(j,2),g=O[0],k=O[1],C=parseInt(t.params.insurerId);Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/insurer/").concat(C);Y.get(e).then((function(e){i(!1),k(e.data)})).catch((function(e){d(e.data)}))}),[]);return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Insurer ",t.params.insurerId),u&&c.a.createElement("p",null,"Loading..."),null!==g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement(h.a,null,"Name"),c.a.createElement(y.a,{type:"text",value:g.name,placeholder:"Enter name",onChange:function(e){k(Object(E.a)(Object(E.a)({},g),{},{name:e.target.value}))}})),c.a.createElement(v.a,{onClick:function(){var e="".concat("http://broker-api.fraserjameskelly.com","/insurer/").concat(C);Y.post(e,g).then((function(e){i(!1),a.push("/insurer/list")})).catch((function(e){d(e.data)}))},variant:"success"},"Create")),null!==p&&c.a.createElement("p",null,p))},U=a(15),H=function(e){e.match;var t=Object(n.useState)(!0),a=Object(f.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(null),i=Object(f.a)(u,2),m=i[0],s=i[1],d=Object(n.useState)([]),E=Object(f.a)(d,2),b=E[0],h=E[1];Object(n.useEffect)((function(){var e="".concat("http://broker-api.fraserjameskelly.com","/insurer");U.get(e).then((function(e){r(!1),h(e.data)})).catch((function(e){s(e.data)}))}),[]);return c.a.createElement(o.a,null,c.a.createElement("h1",null,"Insurers"),l&&c.a.createElement("p",null,"Loading..."),b.length>0&&c.a.createElement(g.a,{striped:!0,bordered:!0,responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"ID"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,b.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"id"},e.id),c.a.createElement("td",null,e.name),c.a.createElement("td",{className:"actions"},c.a.createElement("div",null,c.a.createElement(p.b,{to:"/insurer/update/".concat(e.id),className:"btn btn-info mr-2"},"Edit"),c.a.createElement(v.a,{variant:"danger",onClick:function(){window.confirm("Delete this Insurer? It will also delete any Policies associated.")&&function(e){var t="".concat("http://broker-api.fraserjameskelly.com","/insurer/").concat(e.id);U.delete(t).then((function(t){var a=b.filter((function(t){return t.id!==e.id}));h(a)})).catch((function(e){s(e.data)}))}(e)}},"Delete"))))})))),null!==m&&c.a.createElement("p",null,m),c.a.createElement(p.b,{to:"/insurer/create",className:"btn btn-success"},"Create new Insurer"))},J=a(85),W=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(J.a,null,c.a.createElement(P.a,null,c.a.createElement("main",{className:"p-3 col"},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:i}),c.a.createElement(u.a,{exact:!0,path:"/policy/create",component:w}),c.a.createElement(u.a,{exact:!0,path:"/policy/update/:policyId",component:D}),c.a.createElement(u.a,{path:"/policy/",component:x}),c.a.createElement(u.a,{exact:!0,path:"/policy-type/create",component:O}),c.a.createElement(u.a,{exact:!0,path:"/policy-type/update/:policyTypeId",component:S}),c.a.createElement(u.a,{path:"/policy-type/",component:C}),c.a.createElement(u.a,{exact:!0,path:"/insurer/create",component:L}),c.a.createElement(u.a,{exact:!0,path:"/insurer/update/:insurerId",component:B}),c.a.createElement(u.a,{path:"/insurer/",component:H}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p.a,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.c1f56d3a.chunk.js.map
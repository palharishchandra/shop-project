(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,r){},73:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(23),a=r.n(c),s=r(6),i=(r(72),r(73),r(101)),o=r(16),d=r(8),l=r(108),u=r(109),j=r(26),p=r(7),b=r.n(p),h=r(14),O=r(15),x=r.n(O),f="USER_LOGIN_REQUEST",m="USER_LOGIN_SUCCESS",g="USER_LOGIN_FAIL",v="USER_LOGOUT",y="USER_REGISTER_REQUEST",S="USER_REGISTER_SUCCESS",E="USER_REGISTER_FAIL",I="USER_DETAILS_RESET",C="USER_LIST_RESET",_=r(1);var T=function(){var e=Object(d.k)(),t=Object(s.c)((function(e){return e.userLogin})).userInfo,r=Object(s.b)();return Object(n.useEffect)((function(){console.log(t),null===t&&e.push("/login/")}),[t,e]),Object(_.jsx)("header",{children:Object(_.jsx)(l.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,children:Object(_.jsxs)(i.a,{children:[Object(_.jsx)(j.LinkContainer,{to:"/",children:Object(_.jsx)(l.a.Brand,{href:"#home",children:"SHOP"})}),Object(_.jsx)(l.a.Toggle,{}),Object(_.jsxs)(u.a,{className:"me-auto",children:[t?Object(_.jsx)(j.LinkContainer,{to:"/cart",children:Object(_.jsxs)(u.a.Link,{href:"",children:[Object(_.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart"]})}):Object(_.jsx)(j.LinkContainer,{to:"/login/",children:Object(_.jsxs)(u.a.Link,{href:"",children:[Object(_.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart"]})}),t?Object(_.jsx)(j.LinkContainer,{to:"/login",children:Object(_.jsx)(u.a.Link,{children:Object(_.jsxs)("i",{className:"fas fa-user",onClick:function(){r((function(e){localStorage.removeItem("userInfo"),e({type:v}),e({type:I}),e({type:"ORDER_LIST_MY_RESET"}),e({type:C})}))},children:[" ","Logout"]})})}):Object(_.jsx)(j.LinkContainer,{to:"/login/",children:Object(_.jsxs)(u.a.Link,{children:[Object(_.jsx)("i",{className:"fas fa-user"}),"Login"]})})]}),Object(_.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(_.jsxs)(l.a.Text,{children:["Signed in as: ",Object(_.jsx)("a",{href:"#login",children:null===t||void 0===t?void 0:t.username})]})})]})})})},L=r(102),k=r(62),R=function(){return Object(_.jsx)("footer",{children:Object(_.jsx)(i.a,{children:Object(_.jsx)(L.a,{children:Object(_.jsxs)(k.a,{className:"text-center py-3",children:[" ","Copyright \xa9 harishchandra.pal@outlook.com"]})})})})},w=r(104),P=r(105),U=r(106),A=r(103);var D=function(){return Object(_.jsx)(A.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"},children:Object(_.jsx)("span",{className:"sr-only",children:"Loading..."})})},N=r(110);var G=function(e){var t=e.variant,r=e.children;return Object(_.jsx)(N.a,{variant:t,children:r})},F="PRODUCT_LIST_REQUEST",M="PRODUCT_LIST_SUCCESS",q="PRODUCT_LIST_FAIL",B="PRODUCT_DETAILS_REQUEST",J="PRODUCT_DETAILS_SUCCESS",Q="PRODUCT_DETAILS_FAIL",H="PRODUCT_DELETE_REQUEST",z="PRODUCT_DELETE_SUCCESS",V="PRODUCT_DELETE_FAIL",Y="PRODUCT_CREATE_REQUEST",$="PRODUCT_CREATE_SUCCESS",W="PRODUCT_CREATE_FAIL",K="PRODUCT_CREATE_RESET",X="PRODUCT_UPDATE_REQUEST",Z="PRODUCT_UPDATE_SUCCESS",ee="PRODUCT_UPDATE_FAIL",te="PRODUCT_UPDATE_RESET",re=function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:F}),e.next=4,x.a.get("/api/products/");case 4:r=e.sent,n=r.data,t({type:M,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:q,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},ne="CART_ADD_ITEM",ce="CART_REMOVE_ITEM",ae="CART_SAVE_SHIPPING_ADDRESS",se="CART_SAVE_PAYMENT_METHOD",ie="CART_CLEAR_ITEMS",oe=function(e,t){return function(){var r=Object(h.a)(b.a.mark((function r(n,c){var a,s;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.a.get("/api/products/".concat(e));case 2:a=r.sent,s=a.data,n({type:ne,payload:{product:s._id,name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems));case 6:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},de=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.productList})),r=t.error,c=t.loading,a=t.products;Object(n.useEffect)((function(){e(re())}),[e]);var i=Object(s.c)((function(e){return e.cart})).cartItems;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Latest Product"}),c?Object(_.jsx)(D,{}):r?Object(_.jsx)(G,{variant:"danger",children:r}):Object(_.jsx)(L.a,{children:Object(_.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Product Id"}),Object(_.jsx)("th",{children:"Product Name"}),Object(_.jsx)("th",{children:"Product Image"}),Object(_.jsx)("th",{children:"Product Price"}),Object(_.jsx)("th",{children:"Remaining"}),Object(_.jsx)("th",{children:"Action"})]})}),Object(_.jsx)("tbody",{children:a.map((function(t){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:t._id}),Object(_.jsx)("td",{children:t.name}),Object(_.jsxs)("td",{children:[Object(_.jsx)(P.a,{className:"images",src:t.image,fluid:!0})," "]}),Object(_.jsxs)("td",{children:["\u20b9",t.price]}),Object(_.jsx)("td",{children:t.countInStock}),Object(_.jsx)("td",{children:void 0!==i.filter((function(e){return e.product===t._id}))[0]?Object(_.jsxs)(L.a,{children:[Object(_.jsx)(k.a,{sm:1,children:Object(_.jsx)("i",{className:"fas fa-check "})}),Object(_.jsx)(k.a,{sm:9,children:Object(_.jsx)("p",{className:"font-weight-normal",children:"Item has been added"})})]}):Object(_.jsx)(U.a,{disabled:0===t.countInStock,variant:"primary",onClick:function(){return r=t._id,console.log("Add to cart",r),void e(oe(r,1));var r},children:"Add To Cart"})})]},t._id)}))})]})})]})},le=function(e){var t=e.history,r=(e.match,Object(s.b)()),c=Object(s.c)((function(e){return e.productList})),a=c.error,i=c.loading,o=c.products,d=Object(s.c)((function(e){return e.productDelete})),l=d.loading,u=d.error,p=d.success,O=Object(s.c)((function(e){return e.productCreate})),f=O.loading,m=O.error,g=O.success,v=O.product,y=function(e){window.confirm("Are you sure you want to delete this product?")&&r(function(e){return function(){var t=Object(h.a)(b.a.mark((function t(r,n){var c,a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:H}),c=n(),a=c.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},t.next=6,x.a.delete("/api/products/delete/".concat(e,"/"),s);case 6:t.sent.data,r({type:z}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:V,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}(e))},S=t.location.search;return Object(n.useEffect)((function(){r({type:K}),g?t.push("/admin/product/".concat(v._id,"/edit")):r(re())}),[r,t,p,g,v,S]),Object(_.jsxs)("div",{children:[Object(_.jsxs)(L.a,{className:"align-items-center",children:[Object(_.jsx)(k.a,{sm:11,children:Object(_.jsx)("h1",{children:"Admin Page"})}),Object(_.jsx)(k.a,{className:"text-right",sm:2,children:Object(_.jsxs)(U.a,{className:"my-3",onClick:function(){r(function(){var e=Object(h.a)(b.a.mark((function e(t,r){var n,c,a,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y}),n=r(),c=n.userLogin.userInfo,a={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,x.a.post("/api/products/create/",{},a);case 6:s=e.sent,i=s.data,t({type:$,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:W,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}())},children:[Object(_.jsx)("i",{className:"fas fa-plus"})," Create Product"]})})]}),l&&Object(_.jsx)(D,{}),u&&Object(_.jsx)(G,{variant:"danger",children:u}),f&&Object(_.jsx)(D,{}),m&&Object(_.jsx)(G,{variant:"danger",children:m}),i?Object(_.jsx)(D,{}):a?Object(_.jsx)(G,{variant:"danger",children:a}):Object(_.jsx)(L.a,{children:Object(_.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Product Id"}),Object(_.jsx)("th",{children:"Product Name"}),Object(_.jsx)("th",{children:"Product Image"}),Object(_.jsx)("th",{children:"Product Price"}),Object(_.jsx)("th",{children:"Remaining in stock"}),Object(_.jsx)("th",{children:"Status"}),Object(_.jsx)("th",{children:"Action"})]})}),Object(_.jsx)("tbody",{children:o.map((function(e){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:e._id}),Object(_.jsx)("td",{children:e.name}),Object(_.jsxs)("td",{children:[Object(_.jsx)(P.a,{className:"images",src:e.image,fluid:!0})," "]}),Object(_.jsxs)("td",{children:["\u20b9",e.price]}),Object(_.jsx)("td",{children:e.countInStock}),Object(_.jsx)("td",{children:(null===e||void 0===e?void 0:e.status)?"Active":"Inactive"}),Object(_.jsx)("td",{children:Object(_.jsxs)(L.a,{children:[Object(_.jsx)(k.a,{sm:6,children:Object(_.jsx)(j.LinkContainer,{to:"/admin/product/".concat(e._id,"/edit"),children:Object(_.jsx)(U.a,{variant:"light",className:"btn-sm",children:Object(_.jsx)("i",{className:"fas fa-edit"})})})}),Object(_.jsx)(k.a,{sm:6,children:Object(_.jsx)(U.a,{variant:"danger",className:"btn-sm",onClick:function(){return y(e._id)},children:Object(_.jsx)("i",{className:"fas fa-trash"})})})]})})]},e._id)}))})]})})]})},ue=r(45),je=r(111),pe=r(107),be=r(112);var he=function(e){var t=e.match,r=e.location,c=e.history,a=t.params.id,i=r.search?Number(r.search.split("=")[1]):1,d=Object(s.b)(),l=Object(s.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){a&&d(oe(a,i))}),[d,a,i]);var u=function(e){d(function(e){return function(t,r){t({type:ce,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems))}}(e))};return Object(_.jsxs)(L.a,{children:[Object(_.jsxs)(k.a,{md:8,children:[Object(_.jsx)("h1",{children:"Shopping Cart"}),0===l.length?Object(_.jsxs)(G,{variant:"info",children:["Your cart is empty ",Object(_.jsx)(o.Link,{to:"/",children:"Go Back"})]}):Object(_.jsx)(je.a,{variant:"flush",children:l.map((function(e){return Object(_.jsx)(je.a.Item,{children:Object(_.jsxs)(L.a,{children:[Object(_.jsx)(k.a,{md:2,children:Object(_.jsx)(P.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(_.jsx)(k.a,{md:3,children:Object(_.jsx)(o.Link,{to:"/product/".concat(e.product),children:e.name})}),Object(_.jsxs)(k.a,{md:2,children:["$",e.price]}),Object(_.jsx)(k.a,{md:3,children:Object(_.jsx)(pe.a.Control,{as:"select",value:e.qty,onChange:function(t){return d(oe(e.product,Number(t.target.value)))},children:Object(ue.a)(Array(e.countInStock).keys()).map((function(e){return Object(_.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(_.jsx)(k.a,{md:1,children:Object(_.jsx)(U.a,{type:"button",variant:"light",onClick:function(){return u(e.product)},children:Object(_.jsx)("i",{className:"fas fa-trash"})})})]})},e.product)}))})]}),Object(_.jsx)(k.a,{md:4,children:Object(_.jsxs)(be.a,{children:[Object(_.jsx)(je.a,{variant:"flush",children:Object(_.jsxs)(je.a.Item,{children:[Object(_.jsxs)("h2",{children:["Subtotal (",l.reduce((function(e,t){return e+t.qty}),0),") items"]}),"$",l.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2)]})}),Object(_.jsx)(je.a.Item,{children:Object(_.jsx)(U.a,{type:"button",className:"btn-block",disabled:0===l.length,onClick:function(){c.push("/login?redirect=shipping")},children:"Proceed To Checkout"})})]})})]})},Oe=r(12);var xe=function(e){var t=e.children;return Object(_.jsx)(i.a,{children:Object(_.jsx)(L.a,{className:"justify-content-md-center",children:Object(_.jsx)(k.a,{xs:12,md:6,children:t})})})};var fe=function(e){var t=e.location,r=e.history,c=Object(n.useState)(""),a=Object(Oe.a)(c,2),i=a[0],d=a[1],l=Object(n.useState)(""),u=Object(Oe.a)(l,2),j=u[0],p=u[1],O=Object(s.b)(),v=t.search?t.search.split("=")[1]:"/",y=Object(s.c)((function(e){return e.userLogin})),S=y.error,E=y.loading,I=y.userInfo;return Object(n.useEffect)((function(){I&&r.push(v)}),[r,I,v]),Object(_.jsxs)(xe,{children:[Object(_.jsx)("h1",{children:"Sign In"}),S&&Object(_.jsx)(G,{variant:"danger",children:S}),E&&Object(_.jsx)(D,{}),Object(_.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var r=Object(h.a)(b.a.mark((function r(n){var c,a,s;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:f}),c={headers:{"Content-type":"application/json"}},r.next=5,x.a.post("/api/users/login/",{username:e,password:t},c);case 5:a=r.sent,s=a.data,n({type:m,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),n({type:g,payload:r.t0.response&&r.t0.response.data.detail?r.t0.response.data.detail:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(i,j))},children:[Object(_.jsxs)(pe.a.Group,{controlId:"email",children:[Object(_.jsx)(pe.a.Label,{children:"Email Address"}),Object(_.jsx)(pe.a.Control,{type:"email",placeholder:"Enter Email",value:i,onChange:function(e){return d(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"password",children:[Object(_.jsx)(pe.a.Label,{children:"Password"}),Object(_.jsx)(pe.a.Control,{type:"password",placeholder:"Enter Password",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(_.jsx)(U.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(_.jsx)(L.a,{className:"py-3",children:Object(_.jsxs)(k.a,{children:["New Customer?"," ",Object(_.jsx)(o.Link,{to:v?"/register?redirect=".concat(v):"/register",children:"Register"})]})})]})};var me=function(e){var t=e.location,r=e.history,c=Object(n.useState)(""),a=Object(Oe.a)(c,2),i=a[0],d=a[1],l=Object(n.useState)(""),u=Object(Oe.a)(l,2),j=u[0],p=u[1],O=Object(n.useState)(""),f=Object(Oe.a)(O,2),g=f[0],v=f[1],I=Object(n.useState)(!1),C=Object(Oe.a)(I,2),T=C[0],R=C[1],w=Object(n.useState)(""),P=Object(Oe.a)(w,2),A=P[0],N=P[1],F=Object(n.useState)(""),M=Object(Oe.a)(F,2),q=M[0],B=M[1],J=Object(s.b)(),Q=t.search?t.search.split("=")[1]:"/",H=Object(s.c)((function(e){return e.userRegister})),z=H.error,V=H.loading,Y=H.userInfo;return Object(n.useEffect)((function(){Y&&r.push(Q)}),[r,Y,Q]),Object(n.useEffect)((function(){console.log(T)}),[T]),Object(_.jsxs)(xe,{children:[Object(_.jsx)("h1",{children:"Sign In"}),q&&Object(_.jsx)(G,{variant:"danger",children:q}),z&&Object(_.jsx)(G,{variant:"danger",children:z}),V&&Object(_.jsx)(D,{}),Object(_.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),g!==A?B("Passwords do not match"):J(function(e,t,r,n){return function(){var c=Object(h.a)(b.a.mark((function c(a){var s,i,o;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a({type:y}),s={headers:{"Content-type":"application/json"}},c.next=5,x.a.post("/api/users/register/",{name:e,email:t,password:r,is_staff:n},s);case 5:i=c.sent,o=i.data,a({type:S,payload:o}),a({type:m,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),a({type:E,payload:c.t0.response&&c.t0.response.data.detail?c.t0.response.data.detail:c.t0.message});case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()}(i,j,g,T))},children:[Object(_.jsxs)(pe.a.Group,{controlId:"name",children:[Object(_.jsx)(pe.a.Label,{children:"Name"}),Object(_.jsx)(pe.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:i,onChange:function(e){return d(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"email",children:[Object(_.jsx)(pe.a.Label,{children:"Email Address"}),Object(_.jsx)(pe.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"passwordConfirm",children:[Object(_.jsx)(pe.a.Label,{children:"Select User"}),Object(_.jsxs)("select",{class:"form-select","aria-label":"Default select example",value:T,onChange:function(e){return R(e.target.value)},children:[Object(_.jsx)("option",{selected:!0,value:!1,children:"User"}),Object(_.jsx)("option",{value:!0,children:"Admin"})]})]}),Object(_.jsxs)(pe.a.Group,{controlId:"password",children:[Object(_.jsx)(pe.a.Label,{children:"Password"}),Object(_.jsx)(pe.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:g,onChange:function(e){return v(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"passwordConfirm",children:[Object(_.jsx)(pe.a.Label,{children:"Confirm Password"}),Object(_.jsx)(pe.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:A,onChange:function(e){return N(e.target.value)}})]}),Object(_.jsx)(U.a,{type:"submit",variant:"primary",children:"Register"})]}),Object(_.jsx)(L.a,{className:"py-3",children:Object(_.jsxs)(k.a,{children:["Have an Account?"," ",Object(_.jsx)(o.Link,{to:Q?"/login?redirect=".concat(Q):"/login",children:"Sign In"})]})})]})};var ge=function(e){var t=e.match,r=e.history,c=t.params.id,a=Object(n.useState)(""),i=Object(Oe.a)(a,2),d=i[0],l=i[1],u=Object(n.useState)(0),j=Object(Oe.a)(u,2),p=j[0],O=j[1],f=Object(n.useState)(""),m=Object(Oe.a)(f,2),g=m[0],v=m[1],y=Object(n.useState)(0),S=Object(Oe.a)(y,2),E=S[0],I=S[1],C=Object(n.useState)(""),T=Object(Oe.a)(C,2),L=T[0],k=T[1],R=Object(n.useState)(!1),w=Object(Oe.a)(R,2),P=w[0],A=w[1],N=Object(s.b)(),F=Object(s.c)((function(e){return e.productDetails})),M=F.error,q=F.loading,H=F.product,z=Object(s.c)((function(e){return e.productUpdate})),V=z.error,Y=z.loading,$=z.success;Object(n.useEffect)((function(){var e;$?(N({type:te}),r.push("/")):H.name&&H._id===Number(c)?(l(H.name),O(H.price),v(H.image),I(H.countInStock),k(H.description)):N((e=c,function(){var t=Object(h.a)(b.a.mark((function t(r){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:B}),t.next=4,x.a.get("/api/products/".concat(e));case 4:n=t.sent,c=n.data,r({type:J,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:Q,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[N,H,c,r,$]);var W=function(){var e=Object(h.a)(b.a.mark((function e(t){var r,n,a,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],(n=new FormData).append("image",r),n.append("product_id",c),A(!0),e.prev=5,a={headers:{"Content-Type":"multipart/form-data"}},e.next=9,x.a.post("/api/products/upload/",n,a);case 9:s=e.sent,i=s.data,v(i),A(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),A(!1);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{children:[Object(_.jsx)(o.Link,{to:"/",children:"Go Back"}),Object(_.jsxs)(xe,{children:[Object(_.jsx)("h1",{children:"Edit Product"}),Y&&Object(_.jsx)(D,{}),V&&Object(_.jsx)(G,{variant:"danger",children:V}),q?Object(_.jsx)(D,{}):M?Object(_.jsx)(G,{variant:"danger",children:M}):Object(_.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),N(function(e){return function(){var t=Object(h.a)(b.a.mark((function t(r,n){var c,a,s,i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:X}),c=n(),a=c.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},t.next=6,x.a.put("/api/products/update/".concat(e._id,"/"),e,s);case 6:i=t.sent,o=i.data,r({type:Z,payload:o}),r({type:J,payload:o}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:ee,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()}({_id:c,name:d,price:p,image:g,countInStock:E,description:L}))},children:[Object(_.jsxs)(pe.a.Group,{controlId:"name",children:[Object(_.jsx)(pe.a.Label,{children:"Name"}),Object(_.jsx)(pe.a.Control,{type:"name",placeholder:"Enter name",value:d,onChange:function(e){return l(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"price",children:[Object(_.jsx)(pe.a.Label,{children:"Price"}),Object(_.jsx)(pe.a.Control,{type:"number",placeholder:"Enter price",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"image",children:[Object(_.jsx)(pe.a.Label,{children:"Image"}),Object(_.jsx)(pe.a.Control,{type:"text",placeholder:"Enter image",value:g,onChange:function(e){return v(e.target.value)}}),Object(_.jsx)(pe.a.File,{id:"image-file",label:"Choose File",custom:!0,onChange:W}),P&&Object(_.jsx)(D,{})]}),Object(_.jsxs)(pe.a.Group,{controlId:"countinstock",children:[Object(_.jsx)(pe.a.Label,{children:"Stock"}),Object(_.jsx)(pe.a.Control,{type:"number",placeholder:"Enter stock",value:E,onChange:function(e){return I(e.target.value)}})]}),Object(_.jsxs)(pe.a.Group,{controlId:"description",children:[Object(_.jsx)(pe.a.Label,{children:"Description"}),Object(_.jsx)(pe.a.Control,{type:"text",placeholder:"Enter description",value:L,onChange:function(e){return k(e.target.value)}})]}),Object(_.jsx)(U.a,{type:"submit",variant:"primary",children:"Update"})]})]})]})};r(98);var ve=function(){var e=Object(s.c)((function(e){return e.userLogin})).userInfo,t=null===e||void 0===e?void 0:e.isAdmin;return Object(_.jsx)(o.HashRouter,{children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(T,{}),Object(_.jsx)("main",{className:"py-3",children:Object(_.jsxs)(i.a,{children:[Object(_.jsx)(d.d,{path:"/",component:t?le:de,exact:!0}),Object(_.jsx)(d.d,{path:"/cart/",component:he,exact:!0}),Object(_.jsx)(d.d,{path:"/login/",component:fe,exact:!0}),Object(_.jsx)(d.d,{path:"/register/",component:me,exact:!0}),Object(_.jsx)(d.d,{path:"/admin/product/:id/edit",component:ge})]})}),Object(_.jsx)(R,{})]})})},ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,113)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},Se=r(34),Ee=r(63),Ie=r(64),Ce=r(10),_e=Object(Se.combineReducers)({productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(Ce.a)({loading:!0},e);case J:return{loading:!1,product:t.payload};case Q:return{loading:!1,error:t.payload};default:return e}},productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return{loading:!0,products:[]};case M:return{loading:!1,products:t.payload};case q:return{loading:!1,error:t.payload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{loading:!0};case z:return{loading:!1,success:!0};case V:return{loading:!1,error:t.payload};default:return e}},productCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case $:return{loading:!1,success:!0,product:t.payload};case W:return{loading:!1,error:t.payload};case K:return{};default:return e}},productUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case Z:return{loading:!1,success:!0,product:t.payload};case ee:return{loading:!1,error:t.payload};case te:return{product:{}};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shippingAddress:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:var r=t.payload,n=e.cartItems.find((function(e){return e.product===r.product}));return n?Object(Ce.a)(Object(Ce.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?r:e}))}):Object(Ce.a)(Object(Ce.a)({},e),{},{cartItems:[].concat(Object(ue.a)(e.cartItems),[r])});case ce:return Object(Ce.a)(Object(Ce.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case ae:return Object(Ce.a)(Object(Ce.a)({},e),{},{shippingAddress:t.payload});case se:return Object(Ce.a)(Object(Ce.a)({},e),{},{paymentMethod:t.payload});case ie:return Object(Ce.a)(Object(Ce.a)({},e),{},{cartItems:[]});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case m:return{loading:!1,userInfo:t.payload};case g:return{loading:!1,error:t.payload};case v:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};case v:return{};default:return e}}}),Te={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},Le=[Ee.a],ke=Object(Se.createStore)(_e,Te,Object(Ie.composeWithDevTools)(Se.applyMiddleware.apply(void 0,Le)));a.a.render(Object(_.jsx)(s.a,{store:ke,children:Object(_.jsx)(ve,{})}),document.getElementById("root")),ye()}},[[99,1,2]]]);
//# sourceMappingURL=main.4ded616a.chunk.js.map
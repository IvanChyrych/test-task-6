(function(t){function e(e){for(var a,i,o=e[0],u=e[1],s=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},c=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/test-task-6/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0cf5":function(t,e,r){},"0d12":function(t,e,r){t.exports=r.p+"img/ULTRA Speed Light 500 ml.d69a47b9.jpg"},"0e29":function(t,e,r){},"137f":function(t,e,r){t.exports=r.p+"img/TIBHAR Evolution MX-D.a03d04d4.png"},2117:function(t,e,r){t.exports=r.p+"img/NITTAKU 3 Premuim 40+.5ea41a63.jpg"},"318d":function(t,e,r){"use strict";r("7ba9")},"3ea6":function(t,e,r){t.exports=r.p+"img/BUTTERFLY Tenergy 19.1bba1387.jpg"},"427e":function(t,e,r){t.exports=r.p+"img/NITTAKU Flyatt Spin.905edf19.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("main-wrapper")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-wrapper"},[r("keep-alive",[r("router-view")],1)],1)},o=[],u={name:"main-wrapper",props:{cart_data:{type:Array,default:function(){return[]}}}},s=u,l=r("2877"),d=Object(l["a"])(s,i,o,!1,null,null,null),p=d.exports,m={name:"App",components:{mainWrapper:p}},_=m,f=(r("034f"),Object(l["a"])(_,n,c,!1,null,null,null)),h=f.exports,v=r("2f62"),T=r("bc3a"),b=r.n(T),g={GET_PRODUCTS_FROM_API:function(t){var e=t.commit;return b()("https://www.nbrb.by/api/exrates/rates?periodicity=0",{method:"GET"}).then((function(t){return e("SET_PRODUCTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},ADD_TO_CART:function(t,e){var r=t.commit;r("SET_CART",e)},DELETE_FROM_CART:function(t,e){var r=t.commit;r("REMOVE_FROM_CART",e)},INCREMENT:function(t,e){var r=t.commit;r("INCREMENT_ITEM",e)},DECREMENT:function(t,e){var r=t.commit;r("DECREMENT_ITEM",e)},GET_SEARCH_VALUE_FROM_VUEX:function(t,e){var r=t.commit;r("SET_SEARCH_VALUE_TO_VUEX",e)}},E={SEARCH_VALUE:function(t){return t.searchValue},PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}},C=(r("d81d"),r("a434"),{INCREMENT_ITEM:function(t,e){t.cart[e].quantity++},DECREMENT_ITEM:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--},SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){if(t.cart.length){var r=!1;t.cart.map((function(t){t.article===e.article&&(r=!0,t.quantity++)})),r||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},SET_SEARCH_VALUE_TO_VUEX:function(t,e){t.searchValue=e}});a["a"].use(v["a"]);var O=new v["a"].Store({state:{searchValue:"",products:[],cart:[]},mutations:C,actions:g,getters:E}),R=O,P=r("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("div",{staticClass:"cart__back-to-catalog"},[r("router-link",{attrs:{to:{name:"catalog"}}},[r("button",[t._v("Back to catalogg")])])],1),r("div",{staticClass:"cart__main"},[r("h1",[t._v("Cart")]),t._l(t.cart_data,(function(e,a){return r("cart-item",{key:e.article,attrs:{cart_item_data:e},on:{deleteFromCart:function(e){return t.deleteFromCart(a)},increment:function(e){return t.increment(a)},decrement:function(e){return t.decrement(a)}}})}))],2),r("div",{staticClass:"cart__total"},[r("p",[t._v("Total: "+t._s(t.cartTotal))])])])},A=[],S=r("5530"),j=r("b85c"),U=(r("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-item"},[a("img",{attrs:{src:r("bb6e")("./"+t.cart_item_data.image),alt:""}}),a("h2",[t._v(t._s(t.cart_item_data.name))]),a("p",[t._v("price:"+t._s(t.cart_item_data.price))]),a("p",[t._v("article:"+t._s(t.cart_item_data.article))]),a("p",[t._v("available: "+t._s(t.cart_item_data.available))]),a("p",[t._v("quantity: "+t._s(t.cart_item_data.quantity))]),a("button",{on:{click:t.deleteFromCart}},[t._v("delete")]),a("button",{on:{click:t.increment}},[t._v("+")]),a("button",{on:{click:t.decrement}},[t._v("-")])])}),x=[],D={name:"cart-item",props:{cart_item_data:{type:Object,default:function(){return{}}}},methods:{increment:function(){this.$emit("increment")},decrement:function(){this.$emit("decrement")},deleteFromCart:function(){this.$emit("deleteFromCart")}}},M=D,V=Object(l["a"])(M,U,x,!1,null,null,null),F=V.exports,k={name:"cart",components:{cartItem:F},props:{cart_data:{type:Array,default:function(){return[]}}},computed:{cartTotal:function(){var t=[];if(this.cart_data.length){var e,r=Object(j["a"])(this.cart_data);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.push(a.quantity*a.price)}}catch(n){r.e(n)}finally{r.f()}t=t.reduce((function(t,e){return t+e}))}return t}},methods:Object(S["a"])(Object(S["a"])({},Object(v["b"])(["DELETE_FROM_CART","INCREMENT","DECREMENT"])),{},{deleteFromCart:function(t){this.DELETE_FROM_CART(t)},increment:function(t){this.INCREMENT(t)},decrement:function(t){this.DECREMENT(t)}})},I=k,w=(r("a530"),Object(l["a"])(I,y,A,!1,null,null,null)),L=w.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"catalog"},[r("v-header"),r("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[r("div",{staticClass:"cart"},[t._v("Cart: "+t._s(t.CART.length))])]),r("div",{staticClass:"catalog__select"},[r("v-select",{attrs:{selected:t.selected,options:t.categories},on:{select:t.sortByCategories}})],1),r("h1",[t._v("Catalog")]),r("div",{staticClass:"catalog__products"},t._l(t.filteredProducts,(function(e){return r("catalog-item",{key:e.Cur_ID,attrs:{product_data:e},on:{addToCart:t.addToCart,productClick:t.productClick}})})),1),r("div",{staticClass:"catalog__slider"},[r("div",{staticClass:"range-slider"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPrice,expression:"minPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"1000",step:"10"},domProps:{value:t.minPrice},on:{change:t.setRangeSlider,__r:function(e){t.minPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.maxPrice,expression:"maxPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"1000",step:"10"},domProps:{value:t.maxPrice},on:{change:t.setRangeSlider,__r:function(e){t.maxPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"catalog__range-values"},[r("p",[t._v("min: "+t._s(t.minPrice))]),r("p",[t._v("max: "+t._s(t.maxPrice))])])],1)},$=[],B=r("2909"),H=(r("4de4"),r("b0c0"),r("caad"),r("2532"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-header"},[r("router-link",{attrs:{to:{name:"main-page"}}},[r("h2",[t._v("Main Page")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),r("button",{staticClass:"searchButton",on:{click:function(e){return t.search(t.searchValue)}}},[t._v("search")])],1)}),G=[],q={name:"header",data:function(){return{searchValue:""}},computed:Object(S["a"])({},Object(v["c"])(["SEARCH_VALUE"])),methods:Object(S["a"])(Object(S["a"])({},Object(v["b"])(["GET_SEARCH_VALUE_FROM_VUEX"])),{},{search:function(t){this.GET_SEARCH_VALUE_FROM_VUEX(t),this.$router.push("/catalog")}})},X=q,Y=(r("a157"),Object(l["a"])(X,H,G,!1,null,null,null)),J=Y.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"catalog"},[r("p",[t._v("Валюта: "+t._s(t.product_data.Cur_Name)+" ")]),r("p",[t._v("Курс: "+t._s(t.product_data.Cur_OfficialRate)+" ")])])},W=[],z={name:"catalog",props:{product_data:{type:Object,default:function(){return{}}}},methods:{addToCart:function(){this.$emit("addToCart",this.product_data)},productClick:function(){this.$emit("productClick",this.product_data.article)}}},Q=z,Z=(r("318d"),Object(l["a"])(Q,K,W,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-select"},[r("p",{on:{click:function(e){t.areOprionsVisible=!t.areOprionsVisible}}},[t._v(" "+t._s(t.selected)+" ")]),t.areOprionsVisible?r("div",{staticClass:"options"},t._l(t.options,(function(e){return r("p",{key:e.value,on:{click:function(r){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])},rt=[],at={name:"vSelect",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""}},methods:{selectOption:function(t){this.$emit("select",t),this.areOprionsVisible=!1}},data:function(){return{areOprionsVisible:!1}}},nt=at,ct=Object(l["a"])(nt,et,rt,!1,null,null,null),it=ct.exports,ot={name:"catalog",components:{catalogItem:tt,vSelect:it,vHeader:J},props:{msg:String},data:function(){return{categories:[{name:"all",value:"a"},{name:"balls",value:"b"},{name:"glues",value:"g"},{name:"rubbers",value:"r"}],selected:"all",sortedProducts:[],minPrice:0,maxPrice:1e3}},methods:Object(S["a"])(Object(S["a"])({},Object(v["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)},sortByCategories:function(t){var e=this;this.sortedProducts=Object(B["a"])(this.PRODUCTS),this.sortedProducts=this.sortedProducts.filter((function(t){return t.price>=e.minPrice&&t.price<=e.maxPrice})),t&&(this.sortedProducts=this.sortedProducts.filter((function(r){return e.selected,t.name,r.category===t.name})))},setRangeSlider:function(){if(this.minPrice>this.maxPrice){var t=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=t}this.sortByCategories()},searchProductBySerchValue:function(t){this.sortedProducts=Object(B["a"])(this.PRODUCTS),this.sortedProducts=t?this.sortedProducts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.PRODUCTS},productClick:function(t){this.$router.push({name:"product",query:{product:t}})}}),watch:{SEARCH_VALUE:function(){this.searchProductBySerchValue(this.SEARCH_VALUE)}},computed:Object(S["a"])(Object(S["a"])({},Object(v["c"])(["CART","PRODUCTS","SEARCH_VALUE"])),{},{filteredProducts:function(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}}),mounted:function(){var t=this;this.GET_PRODUCTS_FROM_API().then((function(e){e.data&&(t.sortByCategories(),t.searchProductBySerchValue(t.SEARCH_VALUE))}))}},ut=ot,st=(r("f7b0"),Object(l["a"])(ut,N,$,!1,null,null,null)),lt=st.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-page"},[r("v-header"),r("router-link",{attrs:{to:{name:"catalog"}}},[r("h1",[t._v("Catalog")])])],1)},pt=[],mt={name:"main-page",components:{vHeader:J}},_t=mt,ft=Object(l["a"])(_t,dt,pt,!1,null,null,null),ht=ft.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-page"},[a("img",{attrs:{src:r("bb6e")("./"+t.product.image),alt:""}}),a("p",[t._v("Product name "+t._s(t.products_data.Cur_Code))]),a("p",[t._v("price:"+t._s(t.product.price))]),a("p",[t._v("available:"+t._s(t.product.available))]),a("button",{on:{click:t.addToCart}},[t._v("add to cart")])])},Tt=[],bt={name:"product",computed:Object(S["a"])(Object(S["a"])({},Object(v["c"])(["PRODUCTS"])),{},{product:function(){var t={},e=this;return this.PRODUCTS.map((function(r){r.article===e.$route.query.product&&(t=r)})),t}}),methods:Object(S["a"])({},Object(v["b"])(["GET_PRODUCTS_FROM_API"])),mounted:function(){this.GET_PRODUCTS_FROM_API()}},gt=bt,Et=Object(l["a"])(gt,vt,Tt,!1,null,null,null),Ct=Et.exports;a["a"].use(P["a"]);var Ot=new P["a"]({routes:[{path:"/",name:"main-page",component:ht},{path:"/catalog",name:"catalog",component:lt,props:!0},{path:"/product-page",name:"product",component:Ct},{path:"/cart",name:"cart",component:L,props:!0}]}),Rt=Ot;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(h)},store:R,router:Rt}).$mount("#app")},"654a":function(t,e,r){t.exports=r.p+"img/DHS 3 DJ40+ WTT ITTF.2d717afc.png"},"66e5":function(t,e,r){t.exports=r.p+"img/BUTTERFLY Free Chack PRO II 50ml.165c1937.png"},"7ba9":function(t,e,r){},"85ec":function(t,e,r){},a157:function(t,e,r){"use strict";r("dbc7")},a530:function(t,e,r){"use strict";r("0e29")},bb6e:function(t,e,r){var a={"./BUTTERFLY 3 G40+.jpg":"dbe9","./BUTTERFLY Free Chack PRO II 50ml.png":"66e5","./BUTTERFLY Tenergy 19.jpg":"3ea6","./DHS 3 DJ40+ WTT ITTF.png":"654a","./NITTAKU 3 Premuim 40+.jpg":"2117","./NITTAKU Flyatt Spin.png":"427e","./Revolution Nr.3 250 ml.jpg":"d364","./TIBHAR Evolution MX-D.png":"137f","./ULTRA Speed Light 500 ml.jpg":"0d12"};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=c,t.exports=n,n.id="bb6e"},d364:function(t,e,r){t.exports=r.p+"img/Revolution Nr.3 250 ml.975d640c.jpg"},dbc7:function(t,e,r){},dbe9:function(t,e,r){t.exports=r.p+"img/BUTTERFLY 3 G40+.99aa388f.jpg"},f7b0:function(t,e,r){"use strict";r("0cf5")}});
//# sourceMappingURL=app.6bbe299f.js.map
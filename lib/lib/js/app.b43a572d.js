(function(t){function e(e){for(var a,i,c=e[0],l=e[1],o=e[2],m=0,d=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"268e":function(t,e,n){"use strict";var a=n("c1a0"),r=n.n(a);r.a},"2a19":function(t,e,n){"use strict";var a=n("475d"),r=n.n(a);r.a},"400e":function(t,e,n){},"475d":function(t,e,n){},"52b6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loading?n("div",{staticClass:"spinner-container"},[n("spinner")],1):t._e(),n("app-header",{attrs:{scrolled:t.scrolled,loading:t.loading}}),n("section",{staticClass:"body-content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{attrs:{announcements:t.announcements,research:t.research,members:t.members,tags:t.tags,links:t.links}})],1)],1),n("app-footer")],1)},s=[],i=(n("96cf"),n("3b8d")),c=(n("bcc3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header",class:{"header-scrolled":t.scrolled}},[n("div",{staticClass:"header-content"},[n("div",{staticClass:"logo"},[n("div",{staticClass:"logo-drawing-container"},[n("div",{ref:"logo",staticClass:"logo-drawing"})]),t._m(0)]),n("div",{staticClass:"header-menu"},[n("router-link",{staticClass:"header-menu-item",attrs:{to:"/"}},[t._v("\n        Home\n      ")]),n("router-link",{staticClass:"header-menu-item",attrs:{to:"/members"}},[t._v("\n        Members\n      ")]),n("router-link",{staticClass:"header-menu-item",attrs:{to:"/research"}},[t._v("\n        Research\n      ")]),n("router-link",{staticClass:"header-menu-item",attrs:{to:"/links"}},[t._v("\n        Links\n      ")]),n("router-link",{staticClass:"header-menu-item",attrs:{to:"/contact"}},[t._v("\n        Contact\n      ")])],1)])])}),l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-text"},[t._v("USERS &"),n("br"),t._v("INFORMATION")])}],o=n("5f5d"),u=n.n(o),m={name:"AppHeader",props:{scrolled:Boolean},data:function(){return{logo:null}},mounted:function(){this.logo=new u.a(this.$refs.logo,{defaultColor:"#ffffff"})},watch:{scrolled:function(){this.scrolled?this.logo.setDefaultColor("#222222"):this.logo.setDefaultColor("#ffffff")}}},d=m,v=(n("de1f"),n("2877")),f=Object(v["a"])(d,c,l,!1,null,null,null),h=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-inner"},[n("div",{staticClass:"footer-item"},[n("div",{staticClass:"text"},[t._v("\n          © Copyright "+t._s((new Date).getFullYear())+" | Users & Information Lab.\n        ")]),t._m(0)]),t._m(1)])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[t._v("\n          U&I Lab., Room 4417, E3-1 Computer Science Building,"),n("br"),t._v("\n          KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-item"},[n("div",{staticClass:"text"},[n("a",{attrs:{href:"https://github.com/uilab-github/uilab-github.github.io"}},[t._v("\n            Admin\n          ")])])])}],b={name:"AppFooter",props:{scrolled:Boolean}},k=b,_=(n("9c802"),Object(v["a"])(k,p,g,!1,null,"90554012",null)),y=_.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sk-fading-circle"},[n("div",{staticClass:"sk-circle1 sk-circle"}),n("div",{staticClass:"sk-circle2 sk-circle"}),n("div",{staticClass:"sk-circle3 sk-circle"}),n("div",{staticClass:"sk-circle4 sk-circle"}),n("div",{staticClass:"sk-circle5 sk-circle"}),n("div",{staticClass:"sk-circle6 sk-circle"}),n("div",{staticClass:"sk-circle7 sk-circle"}),n("div",{staticClass:"sk-circle8 sk-circle"}),n("div",{staticClass:"sk-circle9 sk-circle"}),n("div",{staticClass:"sk-circle10 sk-circle"}),n("div",{staticClass:"sk-circle11 sk-circle"}),n("div",{staticClass:"sk-circle12 sk-circle"})])}],j=(n("f83c"),{}),x=Object(v["a"])(j,C,w,!1,null,"58fcd93a",null),S=x.exports,I=(n("28a5"),n("ac4d"),n("8a81"),n("ac6a"),n("d225")),O=n("b0b4"),A="https://sheets.googleapis.com/v4/spreadsheets",M=function(){function t(){Object(I["a"])(this,t),this.key=null}return Object(O["a"])(t,[{key:"validateKey",value:function(){if(null===this.key)throw Error("Use setKey(key) method to set API key for using Google API first.")}},{key:"setKey",value:function(t){this.key=t}},{key:"getContent",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n,a){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.validateKey(),r="".concat(A,"/").concat(e,"/values/").concat(n,"!").concat(a,"?key=").concat(this.key),t.next=4,fetch(r);case 4:return s=t.sent,t.abrupt("return",s.json());case 6:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}()},{key:"getRanges",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.validateKey(),a=n.map((function(t){return"ranges=".concat(encodeURI(t))})).join("&"),r="".concat(A,"/").concat(e,"/values:batchGet?").concat(a,"&key=").concat(this.key),t.next=5,fetch(r);case 5:return s=t.sent,t.abrupt("return",s.json());case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}]),t}(),T=new M,E="1v2JBn1EHa20kcwz5rtszoNmjx9Znqzk-dGMhKw1m3vE",U="AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs";function $(){return R.apply(this,arguments)}function R(){return R=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,s,i,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=["Announcements!A2:B","Members!A2:H","Research!A2:F","Tags!A2:F","Links!A2:G"],t.next=3,T.getRanges(E,e);case 3:return n=t.sent,a=n.valueRanges,r=L(a[0].values),s=z(a[1].values),i=D(a[2].values),c=K(a[3].values),l=Y(a[4].values),t.abrupt("return",{announcements:r,members:s,research:i,tags:c,links:l});case 11:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function L(t){var e=[],n=!0,a=!1,r=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var c=s.value;e.push({title:c[0],content:c[1]})}}catch(l){a=!0,r=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return e}function z(t){var e=[],n=null,a=!0,r=!1,s=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,o=l[0];n&&n.title===o||(n&&e.push(n),n={title:o,members:[]}),n.members.push({name:l[1],email:l[2],image:l[3],description:l[4],links:l[5],degree:l[6],year:l[7]})}}catch(u){r=!0,s=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return n&&e.push(n),e}function D(t){var e=[],n=null,a=!0,r=!1,s=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,o=l[0];n&&n.title===o||(n&&e.push(n),n={title:o,items:[]}),n.items.push({title:l[1],authors:l[2],booktitle:l[3],links:l[4],tags:(l[5]||"").split(",").map((function(t){return t.trim()}))})}}catch(u){r=!0,s=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return n&&e.push(n),e}function K(t){var e={},n=!0,a=!1,r=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var c=s.value,l=c[0];e[l]={title:c[1],tag:c[2],color:c[3]}}}catch(o){a=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return e}function Y(t){var e=[],n=null,a=!0,r=!1,s=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,o=l[0];n&&n.category===o||(n&&e.push(n),n={category:o,links:[]}),n.links.push({title:l[1],fullTitle:l[2],url:l[3],query:l[4],callMonth:l[5],eventMonth:l[6]})}}catch(u){r=!0,s=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return n&&e.push(n),e}T.setKey(U);var F={name:"App",components:{AppHeader:h,AppFooter:y,Spinner:S},data:function(){return{scrolled:!1,loading:!1,announcements:[],research:[],members:[],tags:{},links:[]}},created:function(){this.loadData()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{loadData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,$();case 3:e=t.sent,this.announcements=e.announcements,this.research=e.research,this.members=e.members,this.tags=e.tags,this.links=e.links,this.loading=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleScroll:function(){var t=window.scrollY,e=30;!this.scrolled&&t>e?this.scrolled=!0:this.scrolled&&t<=e&&(this.scrolled=!1)}}},P=F,N=(n("268e"),Object(v["a"])(P,r,s,!1,null,"a2e5317a",null)),B=N.exports,J=n("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("screen",{attrs:{size:"large",backgroundSrc:"@/images/backgrounds/cs_building_night.jpg"}},[n("h1",[t._v("Users & Information Lab. @ KAIST")]),n("br"),n("small",[t._v("Artificial Intelligence | Social Computing | Interactive Computing")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"container"},[n("announcements",{attrs:{announcements:t.announcements}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"container"},[n("latest-publications",{attrs:{research:t.research,tags:t.tags}})],1)])],1)},q=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"screen",class:{"screen-large":"large"===t.size},style:t.getStyleWithBgImage()},[n("div",{staticClass:"content"},[t._t("default")],2)])},H=[],Q=(n("a481"),"/"),W={name:"AppHeader",props:{size:String,backgroundSrc:String},data:function(){return{baseUrl:Q}},methods:{getStyleWithBgImage:function(){var t=(this.backgroundSrc||"").replace(/@\//g,this.baseUrl);return{backgroundImage:'linear-gradient(\n          rgba(0, 0, 0, 0.5), \n          rgba(0, 0, 0, 0.5)\n        ),\n        url("'.concat(t,'")')}}}},X=W,Z=(n("c703"),Object(v["a"])(X,G,H,!1,null,"d202dba0",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcements v-padded"},[n("h3",{staticClass:"row-title"},[t._v("Announcements")]),t._l(t.announcements,(function(e,a){return n("div",{key:a,staticClass:"announcement row-item"},[e.title?n("h4",{staticClass:"announcement-title"},[t._v("\n      "+t._s(e.title)+"\n    ")]):t._e(),n("div",{staticClass:"announcement-content"},[n("vue-markdown",{attrs:{source:e.content}})],1)])}))],2)},nt=[],at=n("9ce6"),rt=n.n(at),st={name:"Announcements",components:{VueMarkdown:rt.a},props:{announcements:Array}},it=st,ct=(n("56fa"),Object(v["a"])(it,et,nt,!1,null,"9d0cc1a8",null)),lt=ct.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main v-padded"},[n("h3",{staticClass:"row-title"},[t._v("Latest Publications")]),t.research.length>0?t._l(t.research[0].items.slice(0,t.listSize),(function(e,a){return n("research-item",{key:a,attrs:{item:e,tags:t.tags,activeTagId:null}})})):t._e(),n("div",{staticClass:"link-buttons link-buttons-large"},[n("router-link",{staticClass:"more-button",attrs:{to:"/research"}},[t._v("See All")])],1)],2)},ut=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"research-item row-item",class:{hidden:t.isHidden()}},[n("div",{staticClass:"title-row"},[n("h4",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._l(t.item.tags,(function(e){return[e in t.tags?n("div",{key:e,staticClass:"tag",style:{backgroundColor:t.tags[e].color}},[t._v("\n        "+t._s(t.tags[e].tag)+"\n      ")]):t._e()]}))],2),n("div",{staticClass:"authors"},[t._v(t._s(t.item.authors))]),n("div",{staticClass:"booktitle"},[t._v(t._s(t.item.booktitle))]),n("div",{staticClass:"link-buttons link-buttons-small"},[n("vue-markdown",{attrs:{source:t.sanitizeUrls(t.item.links),breaks:!1}})],1)])},dt=[],vt=(n("6762"),n("2fdb"),"/"),ft={name:"research-item",components:{VueMarkdown:rt.a},props:{item:Object,tags:Object,activeTagId:String},data:function(){return{baseUrl:vt}},methods:{isHidden:function(){return null!==this.activeTagId&&!this.item.tags.includes(this.activeTagId)},sanitizeUrls:function(t){return t?t.replace(/@\//g,this.baseUrl):""}}},ht=ft,pt=(n("f476"),Object(v["a"])(ht,mt,dt,!1,null,"f92aaa5e",null)),gt=pt.exports,bt=7,kt={name:"research-category",components:{ResearchItem:gt},props:{research:Array,tags:Object},data:function(){return{listSize:bt}}},_t=kt,yt=(n("936b"),Object(v["a"])(_t,ot,ut,!1,null,"71f89b14",null)),Ct=yt.exports,wt={name:"home",components:{Screen:tt,Announcements:lt,LatestPublications:Ct},props:{announcements:Array,research:Array,tags:Object}},jt=wt,xt=Object(v["a"])(jt,V,q,!1,null,null,null),St=xt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"members"},[n("screen",{attrs:{backgroundSrc:"@/images/backgrounds/ducks_grass.jpg"}},[n("h2",[t._v("Members")]),n("br"),n("small",[t._v("Users & Information Lab. @ KAIST")])]),t._l(t.members,(function(t,e){return n("div",{key:e,staticClass:"row"},[n("div",{staticClass:"container"},[n("member-group",{attrs:{group:t}})],1)])}))],2)},Ot=[],At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group v-padded"},[n("h3",{staticClass:"row-title"},[t._v(t._s(t.group.title))]),t._l(t.group.members,(function(t,e){return[t.year?n("alumnus",{key:e,attrs:{member:t}}):n("member",{key:e,attrs:{member:t}})]}))],2)},Mt=[],Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row-card-item"},[n("div",{staticClass:"member"},[n("div",{staticClass:"member-image",style:t.getStyleWithImage(t.member.image)}),n("div",{staticClass:"member-text"},[n("h4",{staticClass:"member-name"},[t._v(t._s(t.member.name))]),n("a",{staticClass:"member-email",attrs:{href:"mailto:"+t.member.email}},[t._v("\n        "+t._s(t.member.email)+"\n      ")]),n("div",{staticClass:"member-description"},[n("vue-markdown",{attrs:{source:t.member.description}})],1),n("div",{staticClass:"link-buttons"},[n("vue-markdown",{attrs:{source:t.sanitizeUrls(t.member.links),breaks:!1}})],1)])])])},Et=[],Ut="/",$t={name:"Member",components:{VueMarkdown:rt.a},props:{member:Object},data:function(){return{baseUrl:Ut}},methods:{sanitizeUrls:function(t){return t.replace(/@\//g,this.baseUrl)},getStyleWithImage:function(t){return{backgroundImage:'url("'.concat(this.sanitizeUrls(t),'")')}}}},Rt=$t,Lt=Object(v["a"])(Rt,Tt,Et,!1,null,null,null),zt=Lt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"member row-card-item"},[n("div",{staticClass:"image",style:t.getStyleWithImage(t.member.image)}),n("div",{staticClass:"text"},[n("div",{staticClass:"text-row"},[n("h4",{staticClass:"text-item name"},[t._v(t._s(t.member.name))]),n("a",{staticClass:"text-item email",attrs:{href:"mailto:"+t.member.email}},[t._v("\n        "+t._s(t.member.email)+"\n      ")]),n("div",{staticClass:"text-item grad"},[t._v("\n        "+t._s("("+t.member.degree+", "+t.member.year+")")+"\n      ")])]),n("div",{staticClass:"description"},[n("vue-markdown",{attrs:{source:t.member.description}})],1),n("div",{staticClass:"link-buttons link-buttons-small"},[n("vue-markdown",{attrs:{source:t.member.links,breaks:!1}})],1)])])},Kt=[],Yt="/",Ft={name:"Alumnus",components:{VueMarkdown:rt.a},props:{member:Object},data:function(){return{baseUrl:Yt}},methods:{sanitizeUrl:function(t){return t.replace("@/",this.baseUrl)},getStyleWithImage:function(t){return{backgroundImage:'url("'.concat(this.sanitizeUrl(t),'")')}}}},Pt=Ft,Nt=(n("e78a"),Object(v["a"])(Pt,Dt,Kt,!1,null,"d1d9b064",null)),Bt=Nt.exports,Jt={name:"MemberGroup",components:{Member:zt,Alumnus:Bt},props:{group:Object}},Vt=Jt,qt=Object(v["a"])(Vt,At,Mt,!1,null,null,null),Gt=qt.exports,Ht={name:"members",components:{Screen:tt,MemberGroup:Gt},props:{members:Array}},Qt=Ht,Wt=Object(v["a"])(Qt,It,Ot,!1,null,null,null),Xt=Wt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"research"},[n("screen",{attrs:{backgroundSrc:"@/images/backgrounds/library.jpg"}},[n("h2",[t._v("Research")]),n("br"),n("small",[t._v("Users & Information Lab. @ KAIST")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"container"},[n("tag-selector",{attrs:{tags:t.tags},model:{value:t.activeTagId,callback:function(e){t.activeTagId=e},expression:"activeTagId"}})],1)]),t._l(t.research,(function(e,a){return n("div",{key:a,staticClass:"row"},[n("div",{staticClass:"container"},[n("research-category",{attrs:{category:e,tags:t.tags,activeTagId:t.activeTagId}})],1)])}))],2)},te=[],ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category v-padded"},[n("h3",{staticClass:"row-title"},[t._v(t._s(t.category.title))]),t._l(t.category.items,(function(e,a){return[n("research-item",{key:a,attrs:{item:e,tags:t.tags,activeTagId:t.activeTagId}})]}))],2)},ne=[],ae={name:"research-category",components:{ResearchItem:gt},props:{category:Object,tags:Object,activeTagId:String},data:function(){return{}}},re=ae,se=Object(v["a"])(re,ee,ne,!1,null,null,null),ie=se.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-selector v-padded"},[n("h3",{staticClass:"row-title"},[t._v("Topics")]),n("div",{staticClass:"link-buttons link-buttons-large"},[n("a",{staticClass:"tag",class:{active:null===t.value},on:{click:function(){return t.$emit("input",null)}}},[t._v("\n      Show All\n    ")]),t._l(Object.keys(t.tags),(function(e){return n("a",{key:e,staticClass:"tag",class:{active:t.value===e},style:{backgroundColor:t.tags[e].color},on:{click:function(){return t.$emit("input",e)}}},[t._v("\n      "+t._s(t.tags[e].title)+"\n    ")])}))],2)])},le=[],oe={name:"tag-selector",props:{tags:Object,value:String}},ue=oe,me=(n("9b9a"),Object(v["a"])(ue,ce,le,!1,null,"605a0ae6",null)),de=me.exports,ve={name:"research",components:{Screen:tt,ResearchCategory:ie,TagSelector:de},props:{research:Array,tags:Object},data:function(){return{activeTagId:null}}},fe=ve,he=Object(v["a"])(fe,Zt,te,!1,null,null,null),pe=he.exports,ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},[n("screen",{attrs:{backgroundSrc:"@/images/backgrounds/ki_night.jpg"}},[n("h2",[t._v("Links")]),n("br"),n("small",[t._v("Users & Information Lab. @ KAIST")])]),t._l(t.links,(function(t,e){return n("div",{key:e,staticClass:"row"},[n("div",{staticClass:"container"},[n("link-group",{attrs:{group:t}})],1)])}))],2)},be=[],ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group v-padded"},[n("h3",{staticClass:"row-title"},[t._v(t._s(t.group.category))]),t._l(t.group.links,(function(t,e){return[n("link-item",{key:e,attrs:{link:t}})]}))],2)},_e=[],ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-item row-card-item"},[n("div",{staticClass:"title"},[t._v(t._s(t.link.title))]),t.link.fullTitle?n("div",{staticClass:"subtitle"},[t._v(t._s(t.link.fullTitle))]):t._e(),t.link.eventMonth?n("div",{staticClass:"description"},[t.link.callMonth?n("p",[t._v("\n      Paper submission deadline is usually in "+t._s(t.link.callMonth)+".\n    ")]):t._e(),t.link.eventMonth?n("p",[t._v("\n      The conference is usually held in "+t._s(t.link.eventMonth)+".\n    ")]):t._e()]):t._e(),t.link.url?n("div",{staticClass:"links"},[n("a",{attrs:{href:t.link.url}},[t._v("\n      Link\n    ")])]):t.link.query?n("div",{staticClass:"links"},[t.isThisYearVisible()?n("a",{attrs:{href:t.getThisYearQueryUrl()}},[t._v("\n      "+t._s("Link ("+t.link.title+" "+(new Date).getFullYear()+")")+"\n    ")]):t._e(),t.isNextYearVisible()?n("a",{attrs:{href:t.getNextYearQueryUrl()}},[t._v("\n      "+t._s("Link ("+t.link.title+" "+((new Date).getFullYear()+1)+")")+"\n    ")]):t._e()]):t._e()])},Ce=[],we=(n("b54a"),{name:"LinkItem",props:{link:Object},methods:{getMonthNumber:function(t){return"JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(t.slice(0,3))/3+1},isThisYearVisible:function(){if(!this.link.eventMonth)return!0;var t=(new Date).getMonth()+1;return t<=this.getMonthNumber(this.link.eventMonth)},isNextYearVisible:function(){if(!this.link.eventMonth)return!0;var t=(new Date).getMonth()+1;return t>=this.getMonthNumber(this.link.eventMonth)},getThisYearQueryUrl:function(){var t=(new Date).getFullYear(),e=this.link.query.replace(/{{year}}/g,t),n=encodeURI(e);return"http://www.google.com/search?q=".concat(n,"&btnI")},getNextYearQueryUrl:function(){var t=(new Date).getFullYear()+1,e=this.link.query.replace(/{{year}}/g,t),n=encodeURI(e);return"http://www.google.com/search?q=".concat(n,"&btnI")}}}),je=we,xe=(n("2a19"),Object(v["a"])(je,ye,Ce,!1,null,"08523ec0",null)),Se=xe.exports,Ie={name:"LinkGroup",components:{LinkItem:Se},props:{group:Object}},Oe=Ie,Ae=Object(v["a"])(Oe,ke,_e,!1,null,null,null),Me=Ae.exports,Te={name:"links",components:{Screen:tt,LinkGroup:Me},props:{links:Array}},Ee=Te,Ue=Object(v["a"])(Ee,ge,be,!1,null,null,null),$e=Ue.exports,Re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("screen",{attrs:{backgroundSrc:"@/images/backgrounds/cs_night.jpg"}},[n("h2",[t._v("Contact")]),n("br"),n("small",[t._v("Users & Information Lab. @ KAIST")])]),t._m(0),t._m(1)],1)},Le=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"container"},[n("div",{staticClass:"contact v-padded"},[n("h3",{staticClass:"row-title"},[t._v("Address")]),n("div",{staticClass:"text"},[t._v("\n          U&I Lab., Room 4417, E3-1 Computer Science Building,"),n("br"),t._v("\n          KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"container"},[n("div",{staticClass:"contact v-padded"},[n("h3",{staticClass:"row-title"},[t._v("Map")]),n("iframe",{staticClass:"map-iframe",attrs:{src:"https://www.google.com/maps/embed?region=KR&language=en&pb=!1m18!1m12!1m3!1d803.1790312985661!2d127.36539104087727!3d36.36765437275756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDIyJzA1LjAiTiAxMjfCsDIxJzU2LjEiRQ!5e0!3m2!1sen!2skr!4v1569390740572!5m2!1sen!2skr",frameborder:"0",allowfullscreen:""}})])])])}],ze={name:"contact",components:{Screen:tt}},De=ze,Ke=(n("f905"),Object(v["a"])(De,Re,Le,!1,null,"200812aa",null)),Ye=Ke.exports;a["a"].use(J["a"]);var Fe=new J["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:St},{path:"/members",name:"members",component:Xt},{path:"/research",name:"research",component:pe},{path:"/links",name:"links",component:$e},{path:"/contact",name:"contact",component:Ye}]});a["a"].config.productionTip=!1,new a["a"]({router:Fe,render:function(t){return t(B)}}).$mount("#app")},"56fa":function(t,e,n){"use strict";var a=n("400e"),r=n.n(a);r.a},7063:function(t,e,n){},"86a4":function(t,e,n){},"936b":function(t,e,n){"use strict";var a=n("bcc8"),r=n.n(a);r.a},"9b9a":function(t,e,n){"use strict";var a=n("a039"),r=n.n(a);r.a},"9c802":function(t,e,n){"use strict";var a=n("86a4"),r=n.n(a);r.a},a039:function(t,e,n){},b817:function(t,e,n){},bcc3:function(t,e,n){},bcc8:function(t,e,n){},c03e:function(t,e,n){},c1a0:function(t,e,n){},c703:function(t,e,n){"use strict";var a=n("ddad"),r=n.n(a);r.a},ddad:function(t,e,n){},de1f:function(t,e,n){"use strict";var a=n("b817"),r=n.n(a);r.a},e78a:function(t,e,n){"use strict";var a=n("52b6"),r=n.n(a);r.a},eefe:function(t,e,n){},f476:function(t,e,n){"use strict";var a=n("7063"),r=n.n(a);r.a},f83c:function(t,e,n){"use strict";var a=n("c03e"),r=n.n(a);r.a},f905:function(t,e,n){"use strict";var a=n("eefe"),r=n.n(a);r.a}});
//# sourceMappingURL=app.b43a572d.js.map
(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n,r,o,l,c,i,s,u,d,p,m,h,b,y,g,f,E,w,v,O=a(0),j=a.n(O),k=a(9),C=a.n(k),S=a(21),I=(a(101),a(11)),M=a(10),R=a(34),x=a(3),P=a(47),D=a.n(P),K=a(142),z=a(189),H=a(195),N=a(190),B=a(191),T=a(42),V=a(192),A=a(187),W=a(193),F=a(194),_=a(143),L=a(85),q=a.n(L),G=a(86),J=a.n(G),U=a(15),X=a(197),$=a(177),Q=a(178),Y=a(179),Z=a(78),ee=a.n(Z),te=a(79),ae=a.n(te),ne=a(38),re=a.n(ne),oe=a(180),le=a(75),ce=a.n(le),ie=a(76),se=a.n(ie),ue=Object(K.a)(function(e){return Object(X.a)({nested:{paddingLeft:e.spacing(4),fontStyle:"italic"}})}),de=Object(U.a)(function(e){var t=e.store,a=e.collection,n=ue();function r(e){return t.drawerSelectedCollection===e}return j.a.createElement(j.a.Fragment,null,j.a.createElement($.a,{selected:r(a.id),onClick:function(e){return n=a.id,void t.toggleDrawerSelectedCollection(n);var n}},j.a.createElement(Q.a,{primary:a.name}),r(a.id)?j.a.createElement(ee.a,null):j.a.createElement(ae.a,null)),j.a.createElement(Y.a,{in:r(a.id),timeout:"auto",unmountOnExit:!0},j.a.createElement(oe.a,{component:"div",disablePadding:!0},j.a.createElement($.a,{button:!0,className:n.nested},j.a.createElement(S.b,{to:"/keywords/".concat(a.id)},j.a.createElement(Q.a,{primary:"Overview",disableTypography:!0}))),a.keywords.map(function(e){return e.name.length>35?j.a.createElement(ce.a,{content:e.name,direction:"right",distance:26},j.a.createElement($.a,{button:!0,key:e.id,className:n.nested},j.a.createElement(S.b,{to:"/keywords/".concat(a.id,"/").concat(e.id,"/")},j.a.createElement(Q.a,{disableTypography:!0},j.a.createElement(se.a,{text:e.name,length:"35"}))))):j.a.createElement($.a,{button:!0,key:e.id,className:n.nested},j.a.createElement(S.b,{to:"/keywords/".concat(a.id,"/").concat(e.id,"/")},j.a.createElement(Q.a,{primary:e.name,disableTypography:!0})))}))))}),pe=Object(U.a)(function(e){var t=e.store;return j.a.createElement(oe.a,null,t.collections.map(function(e,a){return t.collectionHasMore&&a===t.collections.length-3?j.a.createElement(re.a,{key:e.id},function(a){return a.isVisible&&t.getCollections(t.collections.length),j.a.createElement(de,{store:t,collection:e})}):j.a.createElement(de,{key:e.id,store:t,collection:e})}))}),me=a(183),he=a(185),be=a(182),ye=a(184),ge=a(181),fe=function(e){return j.a.createElement(T.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)},Ee=function(e){var t=e.collection;return j.a.createElement(ge.a,{key:t.id},j.a.createElement(be.a,null,j.a.createElement(S.b,{to:"/keywords/".concat(t.id)},t.name)),j.a.createElement(be.a,null,t.type),j.a.createElement(be.a,null,t.version),j.a.createElement(be.a,{align:"right"},t.keywords.length))},we=Object(U.a)(function(e){var t=e.store,a=t.collectionHasMore?"".concat(t.collections.length,"+"):t.collections.length.toString();return j.a.createElement(j.a.Fragment,null,j.a.createElement(fe,null,"Collections (",a,")"),j.a.createElement(me.a,{size:"small"},j.a.createElement(ye.a,null,j.a.createElement(ge.a,null,j.a.createElement(be.a,null,"Name"),j.a.createElement(be.a,null,"Type"),j.a.createElement(be.a,null,"Version"),j.a.createElement(be.a,{align:"right"},"Keywords"))),j.a.createElement(he.a,null,t.collections.map(function(e,a){return t.collectionHasMore&&a===t.collections.length-3?j.a.createElement(re.a,{key:e.id},function(a){return a.isVisible&&t.getCollections(t.collections.length),j.a.createElement(Ee,{collection:e})}):j.a.createElement(Ee,{key:e.id,collection:e})}))))}),ve=a(23),Oe=a(28),je=a(39),ke=a(26),Ce=a(12),Se=(a(122),a(44)),Ie=a.n(Se),Me=a(6),Re=new(n=Me.d.bound,r=Me.d.bound,o=Me.d.bound,l=Me.d.bound,c=Me.d.bound,i=Me.d.bound,s=Me.d.bound,u=Me.d.bound,d=function(){function e(){Object(je.a)(this,e),Object(Oe.a)(this,"collectionsMap",p,this),Object(Oe.a)(this,"collectionHasMore",m,this),Object(Oe.a)(this,"searchTerm",h,this),Object(Oe.a)(this,"searchHasMore",b,this),Object(Oe.a)(this,"searchResults",y,this),Object(Oe.a)(this,"drawerSelectedCollection",g,this),Object(Oe.a)(this,"detailCollection",f,this),Object(Oe.a)(this,"selectedKeywordId",E,this),Object(Oe.a)(this,"versionInfo",w,this),this.getVersionInfo(),this.getCollections()}return Object(ke.a)(e,[{key:"toggleDrawerSelectedCollection",value:function(e){this.drawerSelectedCollection===e?this.drawerSelectedCollection=0:this.drawerSelectedCollection=e}},{key:"getVersionInfo",value:function(){var e=this;return Ie.a.get("/api/v1/version/").then(function(t){e.versionInfo=t.data})}},{key:"getCollection",value:function(e){var t=this;return this.selectedKeywordId=null,this.detailCollection=null,Ie.a.get("/api/v1/collections/".concat(e,"/")).then(function(e){t.detailCollection=e.data})}},{key:"getCollectionWithKeywordSelected",value:function(e,t){this.getCollection(e),this.selectedKeywordId=t}},{key:"getCollections",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return this.collectionHasMore=!1,Ie.a.get("/api/v1/collections/?skip=".concat(t,"&limit=").concat(a)).then(function(n){var r=new Map(n.data.map(function(e,a){return[t+a,e]}));e.collectionsMap=new Map([].concat(Object(ve.a)(Array.from(e.collectionsMap)),Object(ve.a)(Array.from(r)))),e.collectionHasMore=n.data.length===a})}},{key:"clearSearchResults",value:function(){this.searchResults=new Map,this.searchHasMore=!1}},{key:"searchKeywords",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return this.searchTerm=e,e.length>2?(this.searchHasMore=!1,Ie.a.get("/api/v1/keywords/search/?pattern=".concat(e,"&skip=").concat(a,"&limit=").concat(n)).then(function(e){var r=new Map(e.data.map(function(e,t){return[a+t,e]})),o=e.data.length===n;t.updateSearchResults(r,o)})):(this.clearSearchResults(),Promise.resolve())}},{key:"updateSearchResults",value:function(e,t){this.searchResults=new Map([].concat(Object(ve.a)(Array.from(this.searchResults)),Object(ve.a)(Array.from(e)))),this.searchHasMore=t}},{key:"collections",get:function(){return Array.from(this.collectionsMap.values())}}]),e}(),p=Object(Ce.a)(d.prototype,"collectionsMap",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),m=Object(Ce.a)(d.prototype,"collectionHasMore",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=Object(Ce.a)(d.prototype,"searchTerm",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=Object(Ce.a)(d.prototype,"searchHasMore",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=Object(Ce.a)(d.prototype,"searchResults",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),g=Object(Ce.a)(d.prototype,"drawerSelectedCollection",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f=Object(Ce.a)(d.prototype,"detailCollection",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=Object(Ce.a)(d.prototype,"selectedKeywordId",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=Object(Ce.a)(d.prototype,"versionInfo",[Me.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(Ce.a)(d.prototype,"collections",[Me.e],Object.getOwnPropertyDescriptor(d.prototype,"collections"),d.prototype),Object(Ce.a)(d.prototype,"toggleDrawerSelectedCollection",[n],Object.getOwnPropertyDescriptor(d.prototype,"toggleDrawerSelectedCollection"),d.prototype),Object(Ce.a)(d.prototype,"getVersionInfo",[r],Object.getOwnPropertyDescriptor(d.prototype,"getVersionInfo"),d.prototype),Object(Ce.a)(d.prototype,"getCollection",[o],Object.getOwnPropertyDescriptor(d.prototype,"getCollection"),d.prototype),Object(Ce.a)(d.prototype,"getCollectionWithKeywordSelected",[l],Object.getOwnPropertyDescriptor(d.prototype,"getCollectionWithKeywordSelected"),d.prototype),Object(Ce.a)(d.prototype,"getCollections",[c],Object.getOwnPropertyDescriptor(d.prototype,"getCollections"),d.prototype),Object(Ce.a)(d.prototype,"clearSearchResults",[i],Object.getOwnPropertyDescriptor(d.prototype,"clearSearchResults"),d.prototype),Object(Ce.a)(d.prototype,"searchKeywords",[s],Object.getOwnPropertyDescriptor(d.prototype,"searchKeywords"),d.prototype),Object(Ce.a)(d.prototype,"updateSearchResults",[u],Object.getOwnPropertyDescriptor(d.prototype,"updateSearchResults"),d.prototype),d),xe=function(e){var t=e.keyword;return j.a.createElement(ge.a,{key:t.id},j.a.createElement(be.a,null,j.a.createElement(S.b,{to:"/keywords/".concat(t.collection.id,"/").concat(t.id,"/")},t.name)),j.a.createElement(be.a,null,t.collection.name),j.a.createElement(be.a,null,t.synopsis))},Pe=Object(U.a)(function(e){var t,a,n=e.store;if(n.searchResults.size>0){var r=n.searchHasMore?"".concat(n.searchResults.size,"+"):n.searchResults.size.toString();a="Found ".concat(r,' keywords matching "').concat(n.searchTerm,'"'),t=j.a.createElement(me.a,{size:"small"},j.a.createElement(ye.a,null,j.a.createElement(ge.a,null,j.a.createElement(be.a,null,"Name"),j.a.createElement(be.a,null,"Collection"),j.a.createElement(be.a,null,"Description"))),j.a.createElement(he.a,null,Array.from(n.searchResults.values()).map(function(e,t){return n.searchHasMore&&t===n.searchResults.size-3?j.a.createElement(re.a,{key:e.id},function(t){return t.isVisible&&n.searchKeywords(n.searchTerm,n.searchResults.size),j.a.createElement(xe,{keyword:e})}):j.a.createElement(xe,{key:e.id,keyword:e})})))}else a="No keywords found";return j.a.createElement(j.a.Fragment,null,j.a.createElement(fe,null,a),t)}),De=a(81),Ke=a(82),ze=a(87),He=Object(U.a)(v=function(e){function t(){return Object(je.a)(this,t),Object(De.a)(this,Object(Ke.a)(t).apply(this,arguments))}return Object(ze.a)(t,e),Object(ke.a)(t,[{key:"componentDidUpdate",value:function(){if(this.props.store.selectedKeywordId){var e=document.getElementById(this.props.store.selectedKeywordId.toString());e&&e.scrollIntoView({behavior:"smooth",block:"center"})}}},{key:"render",value:function(){var e,t=this.props.store;return e=t&&t.detailCollection?j.a.createElement(j.a.Fragment,null,j.a.createElement(fe,null,t.detailCollection.name),j.a.createElement("div",null,"version: ",t.detailCollection.version),j.a.createElement("div",null,"scope: ",t.detailCollection.scope),j.a.createElement("div",null,"path: ",t.detailCollection.path),j.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.detailCollection.html_doc}}),j.a.createElement(fe,null,"Keywords (",t.detailCollection.keywords.length,")"),j.a.createElement(me.a,{size:"small"},j.a.createElement(ye.a,null,j.a.createElement(ge.a,null,j.a.createElement(be.a,null,"Keyword"),j.a.createElement(be.a,null,"Arguments"),j.a.createElement(be.a,null,"Documentation"))),j.a.createElement(he.a,null,t.detailCollection.keywords.map(function(e){return j.a.createElement(ge.a,{id:e.id.toString(),key:e.id},j.a.createElement(be.a,null,e.name),j.a.createElement(be.a,null,e.arg_string),j.a.createElement(be.a,{dangerouslySetInnerHTML:{__html:e.html_doc}}))})))):j.a.createElement(j.a.Fragment,null,j.a.createElement(fe,null,"Collection not found")),j.a.createElement(j.a.Fragment,null,e)}}]),t}(j.a.Component))||v,Ne=a(16),Be=a(83),Te=a.n(Be),Ve=a(84),Ae=a.n(Ve),We=a(186),Fe=a(196),_e=Object(K.a)(function(e){return{search:Object(M.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ne.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ne.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(M.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:180,"&:focus":{width:240}})}}),Le=Object(U.a)(function(e){var t=e.store,a=e.history,n=_e(),r=function(e){if(""===e.trim())t.searchKeywords(e),a.push("/");else{var n=D.a.stringify({q:e});a.push("/search/?".concat(n))}},o=t.searchTerm?j.a.createElement(We.a,{position:"end"},j.a.createElement(A.a,{onClick:function(e){return r("")}},j.a.createElement(Te.a,null))):null;return j.a.createElement("div",{className:n.search},j.a.createElement("div",{className:n.searchIcon},j.a.createElement(Ae.a,null)),j.a.createElement(Fe.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},value:t.searchTerm,inputProps:{"aria-label":"search"},onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&r(t.searchTerm)},endAdornment:o}))}),qe=(a(139),a(188)),Ge=Object(U.a)(function(e){var t=e.store,a=t.versionInfo?"version ".concat(t.versionInfo.version):"";return j.a.createElement(T.a,{variant:"body2",color:"textSecondary",align:"center"},j.a.createElement(qe.a,{color:"inherit",href:"https://github.com/pbylicki/rfhub2"},"rfhub2")," ".concat(a))});function Je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Je(a,!0).forEach(function(t){Object(M.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Je(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Xe=Object(K.a)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Ue({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawer:{width:300,flexShrink:0},drawerPaper:{width:300},drawerPaperClose:Object(M.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}),$e=Object(U.a)(function(e){var t=e.store,a=Xe(),n=t.versionInfo?t.versionInfo.title:"rfhub2";return j.a.createElement(T.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},j.a.createElement(S.b,{to:"/"},n))}),Qe=Object(R.e)(function(e){var t=e.history,a=Re,n=Xe(),r=j.a.useState(!0),o=Object(I.a)(r,2),l=o[0],c=o[1];return j.a.createElement("div",{className:n.root},j.a.createElement(z.a,null),j.a.createElement(N.a,{position:"absolute",className:Object(x.a)(n.appBar,l&&n.appBarShift)},j.a.createElement(B.a,{className:n.toolbar},j.a.createElement(A.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(x.a)(n.menuButton,l&&n.menuButtonHidden)},j.a.createElement(q.a,null)),j.a.createElement($e,{store:a}),j.a.createElement(Le,{store:a,history:t}))),j.a.createElement(H.a,{className:n.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:n.drawerPaper}},j.a.createElement("div",{className:n.toolbarIcon},j.a.createElement(A.a,{onClick:function(){c(!1)}},j.a.createElement(J.a,null))),j.a.createElement(V.a,null),j.a.createElement(pe,{store:a})),j.a.createElement("main",{className:n.content},j.a.createElement("div",{className:n.appBarSpacer}),j.a.createElement(W.a,{maxWidth:"lg",className:n.container},j.a.createElement(F.a,{container:!0,spacing:3},j.a.createElement(F.a,{item:!0,xs:12},j.a.createElement(_.a,{className:n.paper},j.a.createElement(R.a,{path:"/",exact:!0,render:function(e){return j.a.createElement(we,Object.assign({},e,{store:a}))}}),j.a.createElement(R.a,{path:"/search/",render:function(e){var t=D.a.parse(e.location.search);return t.q?(a.clearSearchResults(),a.searchKeywords(t.q)):a.searchKeywords(""),j.a.createElement(Pe,Object.assign({},e,{store:a}))}}),j.a.createElement(R.a,{path:"/keywords/:id/",exact:!0,render:function(e){var t=parseInt(e.match.params.id);return a.getCollection(t),j.a.createElement(He,{store:a})}}),j.a.createElement(R.a,{path:"/keywords/:id/:keywordId",exact:!0,render:function(e){var t=parseInt(e.match.params.id),n=parseInt(e.match.params.keywordId);return a.getCollectionWithKeywordSelected(t,n),j.a.createElement(He,{store:a})}}))))),j.a.createElement(Ge,{store:a})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));C.a.render(j.a.createElement(S.a,null,j.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(140)}},[[96,1,2]]]);
//# sourceMappingURL=main.9d0402f6.chunk.js.map
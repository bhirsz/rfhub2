(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n,r,o,l,c,i,s,u,d,p,m,h,b,g,y,f,w,E,v=a(0),O=a.n(v),j=a(9),k=a.n(j),C=a(22),S=(a(96),a(11)),I=a(10),M=a(34),x=a(3),P=a(46),R=a.n(P),D=a(133),K=a(177),z=a(184),H=a(178),N=a(179),B=a(42),T=a(181),V=a(180),W=a(182),A=a(183),F=a(134),_=a(79),L=a.n(_),q=a(80),G=a.n(q),J=a(15),U=a(186),X=a(167),$=a(168),Q=a(169),Y=a(73),Z=a.n(Y),ee=a(74),te=a.n(ee),ae=a(37),ne=a.n(ae),re=a(170),oe=Object(D.a)(function(e){return Object(U.a)({nested:{paddingLeft:e.spacing(4),fontStyle:"italic"}})}),le=Object(J.a)(function(e){var t=e.store,a=e.collection,n=oe();function r(e){return t.drawerSelectedCollection===e}return O.a.createElement(O.a.Fragment,null,O.a.createElement(X.a,{selected:r(a.id),onClick:function(e){return n=a.id,void t.toggleDrawerSelectedCollection(n);var n}},O.a.createElement($.a,{primary:a.name}),r(a.id)?O.a.createElement(Z.a,null):O.a.createElement(te.a,null)),O.a.createElement(Q.a,{in:r(a.id),timeout:"auto",unmountOnExit:!0},O.a.createElement(re.a,{component:"div",disablePadding:!0},O.a.createElement(X.a,{button:!0,className:n.nested},O.a.createElement(C.b,{to:"/keywords/".concat(a.id)},O.a.createElement($.a,{primary:"Overview"}))),a.keywords.map(function(e){return O.a.createElement(X.a,{button:!0,key:e.id,className:n.nested},O.a.createElement(C.b,{to:"/keywords/".concat(a.id,"/").concat(e.id,"/")},O.a.createElement($.a,{primary:e.name})))}))))}),ce=Object(J.a)(function(e){var t=e.store;return O.a.createElement(re.a,null,t.collections.map(function(e,a){return t.collectionHasMore&&a===t.collections.length-3?O.a.createElement(ne.a,{key:e.id},function(a){return a.isVisible&&t.getCollections(t.collections.length),O.a.createElement(le,{store:t,collection:e})}):O.a.createElement(le,{key:e.id,store:t,collection:e})}))}),ie=a(173),se=a(175),ue=a(172),de=a(174),pe=a(171),me=function(e){return O.a.createElement(B.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)},he=function(e){var t=e.collection;return O.a.createElement(pe.a,{key:t.id},O.a.createElement(ue.a,null,O.a.createElement(C.b,{to:"/keywords/".concat(t.id)},t.name)),O.a.createElement(ue.a,null,t.type),O.a.createElement(ue.a,null,t.version),O.a.createElement(ue.a,{align:"right"},t.keywords.length))},be=Object(J.a)(function(e){var t=e.store,a=t.collectionHasMore?"".concat(t.collections.length,"+"):t.collections.length.toString();return O.a.createElement(O.a.Fragment,null,O.a.createElement(me,null,"Collections (",a,")"),O.a.createElement(ie.a,{size:"small"},O.a.createElement(de.a,null,O.a.createElement(pe.a,null,O.a.createElement(ue.a,null,"Name"),O.a.createElement(ue.a,null,"Type"),O.a.createElement(ue.a,null,"Version"),O.a.createElement(ue.a,{align:"right"},"Keywords"))),O.a.createElement(se.a,null,t.collections.map(function(e,a){return t.collectionHasMore&&a===t.collections.length-3?O.a.createElement(ne.a,{key:e.id},function(a){return a.isVisible&&t.getCollections(t.collections.length),O.a.createElement(he,{collection:e})}):O.a.createElement(he,{key:e.id,collection:e})}))))}),ge=a(23),ye=a(28),fe=a(38),we=a(26),Ee=a(13),ve=(a(113),a(41)),Oe=a.n(ve),je=a(6),ke=new(n=je.d.bound,r=je.d.bound,o=je.d.bound,l=je.d.bound,c=je.d.bound,i=je.d.bound,s=je.d.bound,u=function(){function e(){Object(fe.a)(this,e),Object(ye.a)(this,"collectionsMap",d,this),Object(ye.a)(this,"collectionHasMore",p,this),Object(ye.a)(this,"searchTerm",m,this),Object(ye.a)(this,"searchHasMore",h,this),Object(ye.a)(this,"searchResults",b,this),Object(ye.a)(this,"drawerSelectedCollection",g,this),Object(ye.a)(this,"detailCollection",y,this),Object(ye.a)(this,"selectedKeywordId",f,this),Object(ye.a)(this,"versionInfo",w,this),this.getVersionInfo(),this.getCollections()}return Object(we.a)(e,[{key:"toggleDrawerSelectedCollection",value:function(e){this.drawerSelectedCollection===e?this.drawerSelectedCollection=0:this.drawerSelectedCollection=e}},{key:"getVersionInfo",value:function(){var e=this;return Oe.a.get("/api/v1/version/").then(function(t){e.versionInfo=t.data})}},{key:"getCollection",value:function(e){var t=this;return this.selectedKeywordId=null,this.detailCollection=null,Oe.a.get("/api/v1/collections/".concat(e,"/")).then(function(e){t.detailCollection=e.data})}},{key:"getCollectionWithKeywordSelected",value:function(e,t){this.getCollection(e),this.selectedKeywordId=t}},{key:"getCollections",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return this.collectionHasMore=!1,Oe.a.get("/api/v1/collections/?skip=".concat(t,"&limit=").concat(a)).then(function(n){var r=new Map(n.data.map(function(e,a){return[t+a,e]}));e.collectionsMap=new Map([].concat(Object(ge.a)(Array.from(e.collectionsMap)),Object(ge.a)(Array.from(r)))),e.collectionHasMore=n.data.length===a})}},{key:"clearSearchResults",value:function(){this.searchResults=new Map,this.searchHasMore=!1}},{key:"searchKeywords",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return this.searchTerm=e,e.length>2?(this.searchHasMore=!1,Oe.a.get("/api/v1/keywords/search/?pattern=".concat(e,"&skip=").concat(a,"&limit=").concat(n)).then(function(e){var r=new Map(e.data.map(function(e,t){return[a+t,e]}));t.searchResults=new Map([].concat(Object(ge.a)(Array.from(t.searchResults)),Object(ge.a)(Array.from(r)))),t.searchHasMore=e.data.length===n})):(this.clearSearchResults(),Promise.resolve())}},{key:"collections",get:function(){return Array.from(this.collectionsMap.values())}}]),e}(),d=Object(Ee.a)(u.prototype,"collectionsMap",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),p=Object(Ee.a)(u.prototype,"collectionHasMore",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=Object(Ee.a)(u.prototype,"searchTerm",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),h=Object(Ee.a)(u.prototype,"searchHasMore",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=Object(Ee.a)(u.prototype,"searchResults",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),g=Object(Ee.a)(u.prototype,"drawerSelectedCollection",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=Object(Ee.a)(u.prototype,"detailCollection",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=Object(Ee.a)(u.prototype,"selectedKeywordId",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=Object(Ee.a)(u.prototype,"versionInfo",[je.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(Ee.a)(u.prototype,"collections",[je.e],Object.getOwnPropertyDescriptor(u.prototype,"collections"),u.prototype),Object(Ee.a)(u.prototype,"toggleDrawerSelectedCollection",[n],Object.getOwnPropertyDescriptor(u.prototype,"toggleDrawerSelectedCollection"),u.prototype),Object(Ee.a)(u.prototype,"getVersionInfo",[r],Object.getOwnPropertyDescriptor(u.prototype,"getVersionInfo"),u.prototype),Object(Ee.a)(u.prototype,"getCollection",[o],Object.getOwnPropertyDescriptor(u.prototype,"getCollection"),u.prototype),Object(Ee.a)(u.prototype,"getCollectionWithKeywordSelected",[l],Object.getOwnPropertyDescriptor(u.prototype,"getCollectionWithKeywordSelected"),u.prototype),Object(Ee.a)(u.prototype,"getCollections",[c],Object.getOwnPropertyDescriptor(u.prototype,"getCollections"),u.prototype),Object(Ee.a)(u.prototype,"clearSearchResults",[i],Object.getOwnPropertyDescriptor(u.prototype,"clearSearchResults"),u.prototype),Object(Ee.a)(u.prototype,"searchKeywords",[s],Object.getOwnPropertyDescriptor(u.prototype,"searchKeywords"),u.prototype),u),Ce=function(e){var t=e.keyword;return O.a.createElement(pe.a,{key:t.id},O.a.createElement(ue.a,null,O.a.createElement(C.b,{to:"/keywords/".concat(t.collection.id,"/").concat(t.id,"/")},t.name)),O.a.createElement(ue.a,null,t.collection.name),O.a.createElement(ue.a,null,t.synopsis))},Se=Object(J.a)(function(e){var t,a,n=e.store;if(n.searchResults.size>0){var r=n.searchHasMore?"".concat(n.searchResults.size,"+"):n.searchResults.size.toString();a="Found ".concat(r,' keywords matching "').concat(n.searchTerm,'"'),t=O.a.createElement(ie.a,{size:"small"},O.a.createElement(de.a,null,O.a.createElement(pe.a,null,O.a.createElement(ue.a,null,"Name"),O.a.createElement(ue.a,null,"Collection"),O.a.createElement(ue.a,null,"Description"))),O.a.createElement(se.a,null,Array.from(n.searchResults.values()).map(function(e,t){return n.searchHasMore&&t===n.searchResults.size-3?O.a.createElement(ne.a,{key:e.id},function(t){return t.isVisible&&n.searchKeywords(n.searchTerm,n.searchResults.size),O.a.createElement(Ce,{keyword:e})}):O.a.createElement(Ce,{key:e.id,keyword:e})})))}else a="No keywords found";return O.a.createElement(O.a.Fragment,null,O.a.createElement(me,null,a),t)}),Ie=a(76),Me=a(77),xe=a(81),Pe=Object(J.a)(E=function(e){function t(){return Object(fe.a)(this,t),Object(Ie.a)(this,Object(Me.a)(t).apply(this,arguments))}return Object(xe.a)(t,e),Object(we.a)(t,[{key:"componentDidUpdate",value:function(){if(this.props.store.selectedKeywordId){var e=document.getElementById(this.props.store.selectedKeywordId.toString());e&&e.scrollIntoView({behavior:"smooth",block:"center"})}}},{key:"render",value:function(){var e,t=this.props.store;return e=t&&t.detailCollection?O.a.createElement(O.a.Fragment,null,O.a.createElement(me,null,t.detailCollection.name),O.a.createElement("div",null,"version: ",t.detailCollection.version),O.a.createElement("div",null,"scope: ",t.detailCollection.scope),O.a.createElement("div",null,"path: ",t.detailCollection.path),O.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.detailCollection.html_doc}}),O.a.createElement(me,null,"Keywords (",t.detailCollection.keywords.length,")"),O.a.createElement(ie.a,{size:"small"},O.a.createElement(de.a,null,O.a.createElement(pe.a,null,O.a.createElement(ue.a,null,"Keyword"),O.a.createElement(ue.a,null,"Arguments"),O.a.createElement(ue.a,null,"Documentation"))),O.a.createElement(se.a,null,t.detailCollection.keywords.map(function(e){return O.a.createElement(pe.a,{id:e.id.toString(),key:e.id},O.a.createElement(ue.a,null,e.name),O.a.createElement(ue.a,null,e.arg_string),O.a.createElement(ue.a,{dangerouslySetInnerHTML:{__html:e.html_doc}}))})))):O.a.createElement(O.a.Fragment,null,O.a.createElement(me,null,"Collection not found")),O.a.createElement(O.a.Fragment,null,e)}}]),t}(O.a.Component))||E,Re=a(16),De=a(78),Ke=a.n(De),ze=a(185),He=Object(D.a)(function(e){return{search:Object(I.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Re.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Re.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(I.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:180,"&:focus":{width:240}})}}),Ne=Object(J.a)(function(e){var t=e.store,a=e.history,n=He();return O.a.createElement("div",{className:n.search},O.a.createElement("div",{className:n.searchIcon},O.a.createElement(Ke.a,null)),O.a.createElement(ze.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},value:t.searchTerm,inputProps:{"aria-label":"search"},onChange:function(e){var n=e.target.value;if(""===n.trim())t.searchKeywords(n),a.push("/");else{var r=R.a.stringify({q:n});a.push("/search/?".concat(r))}}}))}),Be=(a(130),a(176)),Te=Object(J.a)(function(e){var t=e.store,a=t.versionInfo?"version ".concat(t.versionInfo.version):"";return O.a.createElement(B.a,{variant:"body2",color:"textSecondary",align:"center"},O.a.createElement(Be.a,{color:"inherit",href:"https://github.com/pbylicki/rfhub2"},"rfhub2")," ".concat(a))});function Ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ve(a,!0).forEach(function(t){Object(I.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ve(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ae=Object(D.a)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:We({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawer:{width:300,flexShrink:0},drawerPaper:{width:300},drawerPaperClose:Object(I.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}),Fe=Object(J.a)(function(e){var t=e.store,a=Ae(),n=t.versionInfo?t.versionInfo.title:"rfhub2";return O.a.createElement(B.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},O.a.createElement(C.b,{to:"/"},n))}),_e=Object(M.e)(function(e){var t=e.history,a=ke,n=Ae(),r=O.a.useState(!0),o=Object(S.a)(r,2),l=o[0],c=o[1];return O.a.createElement("div",{className:n.root},O.a.createElement(K.a,null),O.a.createElement(H.a,{position:"absolute",className:Object(x.a)(n.appBar,l&&n.appBarShift)},O.a.createElement(N.a,{className:n.toolbar},O.a.createElement(V.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(x.a)(n.menuButton,l&&n.menuButtonHidden)},O.a.createElement(L.a,null)),O.a.createElement(Fe,{store:a}),O.a.createElement(Ne,{store:a,history:t}))),O.a.createElement(z.a,{className:n.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:n.drawerPaper}},O.a.createElement("div",{className:n.toolbarIcon},O.a.createElement(V.a,{onClick:function(){c(!1)}},O.a.createElement(G.a,null))),O.a.createElement(T.a,null),O.a.createElement(ce,{store:a})),O.a.createElement("main",{className:n.content},O.a.createElement("div",{className:n.appBarSpacer}),O.a.createElement(W.a,{maxWidth:"lg",className:n.container},O.a.createElement(A.a,{container:!0,spacing:3},O.a.createElement(A.a,{item:!0,xs:12},O.a.createElement(F.a,{className:n.paper},O.a.createElement(M.a,{path:"/",exact:!0,render:function(e){return O.a.createElement(be,Object.assign({},e,{store:a}))}}),O.a.createElement(M.a,{path:"/search/",render:function(e){var t=R.a.parse(e.location.search);return t.q?(a.clearSearchResults(),a.searchKeywords(t.q)):a.searchKeywords(""),O.a.createElement(Se,Object.assign({},e,{store:a}))}}),O.a.createElement(M.a,{path:"/keywords/:id/",exact:!0,render:function(e){var t=parseInt(e.match.params.id);return a.getCollection(t),O.a.createElement(Pe,{store:a})}}),O.a.createElement(M.a,{path:"/keywords/:id/:keywordId",exact:!0,render:function(e){var t=parseInt(e.match.params.id),n=parseInt(e.match.params.keywordId);return a.getCollectionWithKeywordSelected(t,n),O.a.createElement(Pe,{store:a})}}))))),O.a.createElement(Te,{store:a})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));k.a.render(O.a.createElement(C.a,null,O.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(131)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.17ad586e.chunk.js.map
(this.webpackJsonprandommap=this.webpackJsonprandommap||[]).push([[0],{126:function(e,t,n){e.exports=n(159)},131:function(e,t,n){},156:function(e,t){},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(131),n(203)),s=n(202),l=n(109),u=n(43),m=n(34),p=n(40),d=n(32),g=n(205),f=n(191),h=n(208),v=Object(h.a)(),b=n(29),E=n(204),y=n(200),w=n(102),O=n.n(w),j=n(101),C=n.n(j),S=n(193),x=n(195),I=n(196),k=n(211),N=Object(f.a)((function(e){return{listItemIcon:{minWidth:e.spacing(3)}}}));var M=function(e){var t=e.countries,n=N();return r.a.createElement(S.a,{component:"nav",className:n.root},t.map((function(e,t){return r.a.createElement(x.a,{button:!0,key:e.rsmKey},r.a.createElement(I.a,{className:n.listItemIcon},t+1),r.a.createElement(k.a,{primary:e.properties.NAME}))})))},z=n(147),A={scale:5,encoderOptions:1,backgroundColor:"white"},B=Object(f.a)((function(e){return{root:{padding:e.spacing(2)},button:{marginTop:e.spacing(1),margin:e.spacing(.5),fontSize:"0.5em"},listItemIcon:{minWidth:e.spacing(3)}}}));var R=function(e){var t=e.onUpdate,n=e.defaultValues,a=e.selected,o=r.a.useState(Object(p.a)({},n)),i=Object(d.a)(o,2),c=i[0],s=i[1],l=function(e){e.preventDefault(),t(c)},u=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:l,className:u.root},r.a.createElement("div",null,r.a.createElement(E.a,{id:"countryCount",name:"countryCount",label:"No. Countries",type:"number",size:"small",InputLabelProps:{shrink:!0},value:c.countryCount,onChange:function(e){e.preventDefault(),s(Object(p.a)({},c,Object(b.a)({},e.target.name,e.target.value)))}})),r.a.createElement("div",null,r.a.createElement(y.a,{variant:"contained",color:"primary",size:"small",component:"span",className:u.button,startIcon:r.a.createElement(C.a,null),onClick:l},"Update"),r.a.createElement(y.a,{variant:"contained",color:"secondary",size:"small",component:"span",className:u.button,startIcon:r.a.createElement(O.a,null),onClick:function(e){e.preventDefault(),z.saveSvgAsPng(document.getElementById("map-svg"),"countries.png",A)}},"Export"))),r.a.createElement("div",null,r.a.createElement(M,{countries:a})))},W=n(42);function G(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var K=n(93),L=n(17);var D=function(e){var t=e.selected,n=Object(L.a)();return Object(a.useMemo)((function(){return t.map((function(e,t){var a=Object(K.a)(e),o=Math.random()<.5?-1:1;return r.a.createElement(W.Annotation,{key:e.rsmKey,subject:a,dx:(10+20*Math.random())*o,dy:10+20*Math.random()},r.a.createElement("text",{x:1===o?5:-10,y:5,fontSize:2*n.typography.fontSize,alignmentBaseline:"below"},t+1))}))}),[t,n.typography.fontSize])},U=n(103),V=n.n(U);var H=function(e){var t=e.geographies,n=e.selectCount,o=e.setSelected,i=e.mapId,c=Object(L.a)(),s=Object(a.useMemo)((function(){return function(e,t,n){var a=V()(n);return e.sort((function(e,t){return e.properties.NAME>t.properties.NAME?1:-1})).sort((function(){return.5-a()})).slice(0,t)}(t,n,i)}),[n,t,i]),l=s.map((function(e){return e.properties.NAME}));return Object(a.useEffect)((function(){o(s)}),[s,o]),t.map((function(e){return l.includes(e.properties.NAME)?r.a.createElement(W.Geography,{key:e.rsmKey,geography:e,style:{default:{fill:c.palette.primary.main,stroke:c.palette.secondary.main,strokeWidth:1}}}):r.a.createElement(W.Geography,{key:e.rsmKey,geography:e,style:{default:{fill:c.palette.secondary.main}}})}))},J=Object(f.a)((function(e){return{svgContainer:{position:"relative",height:0,width:"100%",padding:e.spacing(4),verticalAlign:"text-top"},parentSvg:{position:"absolute",padding:e.spacing(4),verticalAlign:"text-top"}}}));var P=function(e){var t=e.countryCount,n=void 0===t?10:t,o=e.selected,i=e.setSelected,c=e.mapId,s=function(){var e=Object(a.useState)(G()),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r(G())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),l=s.height,u=s.width,m=J();return r.a.createElement("div",{className:m.svgContainer,style:{maxWidth:u,maxHeight:l}},r.a.createElement("svg",{id:"map-svg",className:m.parentSvg,viewBox:"0 0 ".concat(u," ").concat(l),preserveAspectRatio:"xMinYMax meet"},r.a.createElement(W.ComposableMap,{preserveAspectRatio:"xMinYMin"},r.a.createElement(W.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){var t=e.geographies;return r.a.createElement(H,{mapId:c,geographies:t,selectCount:n,setSelected:i})})),r.a.createElement(D,{selected:o}))))},Y=n(207),F=n(201),T=n(104),X=n.n(T),$=n(106),q=n.n($),Q=n(4),Z=n(209),_=Object(f.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(b.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}}));function ee(e){return e.open?r.a.createElement(X.a,null):r.a.createElement(Z.a,{title:"Reveal"},r.a.createElement(q.a,null))}var te=function(e){var t,n,a=e.children,o=_(),i=r.a.useState(!1),c=Object(d.a)(i,2),s=c[0],l=c[1];return r.a.createElement(Y.a,{variant:"permanent",className:Object(Q.a)(o.drawer,(t={},Object(b.a)(t,o.drawerOpen,s),Object(b.a)(t,o.drawerClose,!s),t)),classes:{paper:Object(Q.a)((n={},Object(b.a)(n,o.drawerOpen,s),Object(b.a)(n,o.drawerClose,!s),n))}},r.a.createElement("div",{className:o.toolbar},r.a.createElement(F.a,{onClick:function(){l(!s)}},r.a.createElement(ee,{open:s}))),s&&a)},ne=Object(f.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)}}}));var ae=function(){var e=ne(),t=Object(m.e)({countryCount:Object(m.f)(m.a,10),mapId:Object(m.f)(m.c,v)}),n=Object(d.a)(t,2),o=n[0],i=n[1],c=r.a.useState([]),s=Object(d.a)(c,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){i(Object(p.a)({mapId:Object(h.a)()},o))}),[]),r.a.createElement(g.a,{className:e.root},r.a.createElement(te,{countryCount:o.countryCount,selected:l},r.a.createElement(R,{onUpdate:function(e){console.log("controls update to",e),i({mapId:Object(h.a)(),countryCount:e.countryCount},"push")},defaultValues:Object(p.a)({},o),selected:l})),r.a.createElement(g.a,{className:e.content},r.a.createElement(P,{mapId:o.mapId,countryCount:o.countryCount,selected:l,setSelected:u})))},re=n(111),oe=n(108),ie=n.n(oe),ce=n(107),se=n.n(ce),le=Object(re.a)({palette:{primary:se.a,secondary:ie.a},status:{danger:"orange"},typography:{fontSize:12}}),ue={transformSearchString:m.d};var me=function(){return r.a.createElement(s.a,{theme:le},r.a.createElement(c.a,null),r.a.createElement(l.a,null,r.a.createElement(m.b,{ReactRouterRoute:u.a,stringifyOptions:ue},r.a.createElement(ae,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.ea7a6c07.chunk.js.map
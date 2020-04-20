(this.webpackJsonprandommap=this.webpackJsonprandommap||[]).push([[0],{103:function(e,t,n){e.exports=n(116)},108:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),i=n.n(o),c=(n(108),n(25)),s=n(159),l=n(157),u=n(147),m=n(156),p=n(32);function d(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var g=n(76),f=n(16);var h=function(e){var t=e.selected,n=Object(f.a)();return Object(a.useMemo)((function(){return t.map((function(e,t){var a=Object(g.a)(e),o=Math.random()<.5?-1:1;return r.a.createElement(p.Annotation,{key:e.rsmKey,subject:a,dx:(10+20*Math.random())*o,dy:10+20*Math.random()},r.a.createElement("text",{x:1===o?5:-10,y:5,fontSize:n.typography.fontSize,alignmentBaseline:"below"},t+1))}))}),[t,n.typography.fontSize])};var v=function(e){var t=e.geographies,n=e.selectCount,o=e.setSelected,i=Object(f.a)(),c=Object(a.useMemo)((function(){return function(e,t){return e.sort((function(){return.5-Math.random()})).slice(0,t)}(t,n)}),[n,t]),s=c.map((function(e){return e.properties.NAME}));return Object(a.useEffect)((function(){o(c)}),[c,o]),t.map((function(e){return s.includes(e.properties.NAME)?r.a.createElement(p.Geography,{key:e.rsmKey,geography:e,style:{default:{fill:i.palette.primary.main,stroke:i.palette.secondary.main,strokeWidth:1}}}):r.a.createElement(p.Geography,{key:e.rsmKey,geography:e,style:{default:{fill:i.palette.secondary.main}}})}))},y=Object(u.a)((function(e){return{svgContainer:{position:"relative",height:0,width:"100%",padding:e.spacing(4),verticalAlign:"text-top"},parentSvg:{position:"absolute",padding:e.spacing(4),verticalAlign:"text-top"}}}));var b=function(e){var t=e.countryCount,n=void 0===t?10:t,o=e.selected,i=e.setSelected,s=function(){var e=Object(a.useState)(d()),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r(d())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),l=s.height,u=s.width,m=y();return r.a.createElement("div",{className:m.svgContainer,style:{maxWidth:u,maxHeight:l}},r.a.createElement("svg",{id:"map-svg",className:m.parentSvg,viewBox:"0 0 ".concat(u," ").concat(l),preserveAspectRatio:"xMinYMax meet"},r.a.createElement(p.ComposableMap,{preserveAspectRatio:"xMinYMin"},r.a.createElement(p.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){var t=e.geographies;return r.a.createElement(v,{geographies:t,selectCount:n,setSelected:i})})),r.a.createElement(h,{selected:o}))))},E=n(50),w=n(22),j=n(161),O=n(155),C=n(87),S=n.n(C),x=n(88),k=n.n(x),M=n(4),N=n(158),I=n(154),z=n(86),A=n.n(z),B=n(85),W=n.n(B),G=n(149),K=n(151),L=n(152),D=n(163),F=Object(u.a)((function(e){return{listItemIcon:{minWidth:e.spacing(3)}}}));var R=function(e){var t=e.countries,n=F();return r.a.createElement(G.a,{component:"nav",className:n.root},t.map((function(e,t){return r.a.createElement(K.a,{button:!0,key:e.rsmKey},r.a.createElement(L.a,{className:n.listItemIcon},t+1),r.a.createElement(D.a,{primary:e.properties.NAME}))})))},H=n(112),J={scale:5,encoderOptions:1,backgroundColor:"white"},P=Object(u.a)((function(e){return{root:{padding:e.spacing(2)},button:{marginTop:e.spacing(1),margin:e.spacing(.5),fontSize:"0.5em"},listItemIcon:{minWidth:e.spacing(3)}}}));var Y=function(e){var t=e.setForm,n=e.form,a=e.selected,o=r.a.useState(Object(E.a)({countryCount:0},n)),i=Object(c.a)(o,2),s=i[0],l=i[1],u=P();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t(s)},className:u.root},r.a.createElement("div",null,r.a.createElement(N.a,{id:"countryCount",name:"countryCount",label:"No. Countries",type:"number",size:"small",InputLabelProps:{shrink:!0},value:s.countryCount,onChange:function(e){e.preventDefault(),l(Object(E.a)({},s,Object(w.a)({},e.target.name,e.target.value)))}})),r.a.createElement("div",null,r.a.createElement(I.a,{variant:"contained",color:"primary",size:"small",component:"span",className:u.button,startIcon:r.a.createElement(W.a,null)},"Update"),r.a.createElement(I.a,{variant:"contained",color:"secondary",size:"small",component:"span",className:u.button,startIcon:r.a.createElement(A.a,null),onClick:function(e){e.preventDefault(),H.saveSvgAsPng(document.getElementById("map-svg"),"countries.png",J)}},"Export"))),r.a.createElement("div",null,r.a.createElement(R,{countries:a})))},T=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(w.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(E.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}}));var U=function(e){var t,n,a=e.countryCount,o=e.setCountryCount,i=e.selected,s=T(),l=r.a.useState(!1),u=Object(c.a)(l,2),m=u[0],p=u[1];return r.a.createElement(j.a,{variant:"permanent",className:Object(M.a)(s.drawer,(t={},Object(w.a)(t,s.drawerOpen,m),Object(w.a)(t,s.drawerClose,!m),t)),classes:{paper:Object(M.a)((n={},Object(w.a)(n,s.drawerOpen,m),Object(w.a)(n,s.drawerClose,!m),n))}},r.a.createElement("div",{className:s.toolbar},r.a.createElement(O.a,{onClick:function(){p(!m)}},m?r.a.createElement(S.a,null):r.a.createElement(k.a,null))),m&&r.a.createElement(Y,{setForm:function(e){o(e.countryCount)},form:{countryCount:a},selected:i}))},V=n(91),X=n(90),$=n.n(X),q=n(89),Q=n.n(q),Z=Object(V.a)({palette:{primary:Q.a,secondary:$.a},status:{danger:"orange"},typography:{fontSize:12}}),_=Object(u.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)}}}));var ee=function(){var e=_(),t=r.a.useState(10),n=Object(c.a)(t,2),a=n[0],o=n[1],i=r.a.useState([]),u=Object(c.a)(i,2),p=u[0],d=u[1];return r.a.createElement(m.a,{theme:Z},r.a.createElement(l.a,null),r.a.createElement(s.a,{className:e.root},r.a.createElement(U,{countryCount:a,setCountryCount:o,selected:p}),r.a.createElement(s.a,{className:e.content},r.a.createElement(b,{countryCount:a,selected:p,setSelected:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.ef4f4a17.chunk.js.map
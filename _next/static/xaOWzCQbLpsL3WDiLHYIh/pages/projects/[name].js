(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{IqIU:function(t,e,n){"use strict";n.r(e);var a=n("ln6h"),r=n.n(a),o=n("O40h"),i=n("q1tI"),c=n.n(i),l=n("8Kt/"),u=n.n(l),s=n("GP6N"),p=n("zgjP"),m=n.n(p),b=n("3bhu"),d=n("4oX2"),h=n("/WnG"),f=n("AQz0"),w=n("KoTp"),j=c.a.createElement,g={titleContainer:Object(s.b)({width:"100%",marginBottom:"30px"}),title:Object(s.b)({margin:"0 0 10px 0",fontSize:"3rem"}),meta:Object(s.b)({width:"100%",borderBottom:"1px dashed rgba(0, 0, 0, 0.4)"}),category:Object(s.b)({fontWeight:"bold",lineHeight:"2rem"}),date:Object(s.b)({marginLeft:"10px",lineHeight:"2rem"})},_=function(t){var e=t.project,n=t.date;return j("div",{className:"main-container"},j(u.a,null,j("title",null,e.meta.title," | Yiqin Zhao")),j(b.a,{active:"projects"}),j(h.a,null,j(f.a,null),j("div",{className:g.titleContainer},j("h1",{className:g.title},e.meta.title)),j(f.a,null)),j(h.a,null,j(f.a,null),j(w.a,{content:e.body}),j(f.a,null)),j(d.a,{date:n}))};_.getInitialProps=function(){var t=Object(o.a)(r.a.mark(function t(e){var a,o,i,c,l,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.req,o=e.query,!a){t.next=13;break}return i=n("Wgwc"),c=i().format("MMM D, YYYY"),t.next=6,m()("http://localhost:3000/api/projects?name="+encodeURIComponent(o.name));case 6:return l=t.sent,t.next=9,l.json();case 9:return u=t.sent,t.abrupt("return",{project:u,date:c});case 13:return t.abrupt("return",__NEXT_DATA__.props.pageProps);case 14:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.default=_},Or1x:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[name]",function(){return n("IqIU")}])}},[["Or1x",1,0]]]);
import{f as m,o as a,a as l,t as n,K as i,b as s,F as o,r as d,B as c}from"./entry-637e5fcf.mjs";const x={key:0,class:"dark:text-white text-center md:text-5xl font-bold my-4 md:my-6 max-w-5xl mx-auto"},f={key:1,class:"dark:text-gray-200 text-center md:text-xl font-normal my-6 max-w-4xl mx-auto"},h={class:"prose dark:prose-invert mx-auto md:my-12 pb-6"},y={class:"flex flex-row flex-wrap justify-center"},k=["href"],w=["src"],b={class:"no-underline"},v={class:"no-underline"},p={class:"flex flex-row flex-wrap justify-center"},_={class:"no-underline"},g={class:"text-center p-4 md:p-6 md:text-2xl text-black dark:text-white font-bold"},L={class:"flex flex-row flex-wrap justify-center"},j=["href"],B={class:"inline-block px-4 py-3 bg-neutral-300 dark:bg-neutral-600 hover:dark:bg-slate-700 hover:bg-slate-200 isolate rounded-md shadow-md transition"},T=["src"],C=m({__name:"ProjectHeader",props:["title","hideTitle","headerImage","videoLink","subtitle","authors","venue","artifactLinks"],setup(t){return(N,S)=>(a(),l("header",null,[t.hideTitle?i("",!0):(a(),l("h1",x,n(t.title),1)),t.subtitle?(a(),l("h2",f,n(t.subtitle),1)):i("",!0),s("div",h,[s("div",y,[(a(!0),l(o,null,d(t.authors,(e,r)=>(a(),l("a",{class:"md:text-xl p-3 flex flex-col justify-between items-center",href:e.url,key:e.name},[e.avatar?(a(),l("img",{key:0,class:"w-24 m-0 mb-4",src:e.avatar,alt:""},null,8,w)):i("",!0),s("div",null,[s("span",null,n(e.name),1),s("span",b,[s("sup",v,n([...new Set(t.authors.map(u=>u.affiliation))].indexOf(e.affiliation)+1),1),c(n(r<t.authors.length-1?", ":""),1)])])],8,k))),128))]),s("div",p,[(a(!0),l(o,null,d([...new Set(t.authors.map(e=>e.affiliation))],(e,r)=>(a(),l("span",{class:"md:text-xl px-4 no-underline",key:`${e}`},[s("span",_,[s("sup",null,n(r+1),1),c(n(e),1)])]))),128))]),s("div",g,n(t.venue),1),s("div",L,[(a(!0),l(o,null,d(t.artifactLinks,(e,r)=>(a(),l("a",{class:"md:text-xl px-3 no-underline my-2",href:`${e}`,key:r},[s("span",B,n(r),1)],8,j))),128))])]),t.videoLink?(a(),l("iframe",{key:2,class:"w-full my-12",src:t.videoLink,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",style:{height:"min(50vw, 500px)"}},null,8,T)):i("",!0)]))}});export{C as default};
import i from"./ContentList-6faa7750.mjs";import{_ as p,o as r,c as a,a as e,t as o,b as f,w as u,F as _,r as h}from"./entry-4614ee3a.mjs";import"./ContentQuery-e963d1f1.mjs";import"./asyncData-13def6b8.mjs";const m={__name:"MoreProjects",props:["title","links"],setup(n,{expose:l}){l();const s={};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},x=e("div",{class:"w-full dark:border-gray-600 border-gray-200 border my-12"},null,-1),w={class:"text-2xl font-bold dark:text-white text-black"},y={class:"max-w-prose mx-auto flex flex-row flex-wrap justify-between items-center"},b={class:"w-1/4 flex items-center"},v=["href"],k=["src"],g=["href"],j={class:"p-4 flex flex-col justify-between w-full h-full"},$={class:"uppercase text-xs font-bold opacity-70"},S={class:"text-bold font-bold text-sm md:text-xl m-0 py-2 md:py-3"},B={class:"text-xs opacity-70"};function D(n,l,s,L,P,q){const c=i;return r(),a(_,null,[x,e("div",w,o(s.title),1),e("section",y,[f(c,{path:n.$route.path.split("/").slice(0,2).join("/")+"/",head:!1,query:{sort:{date:-1},where:{_path:{$in:s.links}}}},{default:u(({list:d})=>[(r(!0),a(_,null,h(d,t=>(r(),a("div",{key:t._path,class:"w-full prose dark:prose-invert md:my-4 flex overflow-hidden flex-row"},[e("div",b,[e("a",{href:`${t._path}`},[e("img",{class:"m-0 rounded-md",src:t.thumbnail,alt:""},null,8,k)],8,v)]),e("a",{href:`${t._path}`,class:"w-3/4 h-full decoration-transparent"},[e("div",j,[e("div",$,o(t.tag),1),e("h1",S,o(t.title),1),e("div",B,o(new Date(t.date).toLocaleDateString()),1)])],8,g)]))),128))]),_:1},8,["path","query"])])],64)}var V=p(m,[["render",D]]);export{V as default};
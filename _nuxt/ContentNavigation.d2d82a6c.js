import{u as d}from"./asyncData.7d8a7aab.js";import{g as l,E as f,k as p,G as v,y as m,H as g,I as h,J as y,n as s}from"./entry.58f6e3e1.js";import{_}from"./nuxt-link.06c15aea.js";const x=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=p(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>s(_,{to:e._path},()=>e.title),a=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,i+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}});export{x as default};
import{u as d}from"./asyncData.33ec8846.js";import{f as l,l as p,m as f,p as v,q as m,s as _,v as g,x as y,y as r}from"./entry.814e8337.js";import{_ as h}from"./nuxt-link.60101623.js";/* empty css                      */const b=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=p(u),e=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!e.value&&v("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${_(e.value)}`,()=>y(e.value));return{navigation:o}},render(u){const t=g(),{navigation:e}=u,o=n=>r(h,{to:n._path},()=>n.title),a=(n,i)=>r("ul",i?{"data-level":i}:null,n.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=n=>a(n,0);return t!=null&&t.default?t.default({navigation:e,...this.$attrs}):c(e)}});export{b as default};
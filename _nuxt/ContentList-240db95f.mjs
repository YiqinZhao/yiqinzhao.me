import i from"./ContentQuery-321582c7.mjs";import{f as m,h as y,j as o}from"./entry-637e5fcf.mjs";import"./asyncData-5336f35d.mjs";var s=m({name:"ContentList",props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(a){const e=y(),{path:d,query:f}=a,p=Object.assign(f||{},{path:d}),u=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return o(i,p,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:r})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:r,...this.$attrs}):({data:t})=>u("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>u("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:r})=>u("not-found",r)}})}});export{s as default};
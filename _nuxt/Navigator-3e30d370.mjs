import{E as f,o as a,a as o,b as t,C as l,u as n,F as h,r as u,t as r}from"./entry-637e5fcf.mjs";import{_}from"./qin-logo-950e455c.mjs";import{_ as g}from"./arrow-right-bold-47ad9143.mjs";const b={class:"md:flex justify-between max-w-6xl mx-auto"},y={class:"text-xl font-bold hover:dark:text-white hover:text-black transition-colors",href:"/"},k=t("img",{class:"inline w-10 dark:invert transition-opacity opacity-60 hover:opacity-100",src:_,alt:""},null,-1),m=[k],v={class:"flex flex-row justify-center"},w=["href"],C={key:0,class:"transition-border text-black dark:text-white border-b-2 border-b-gray-400"},j={key:1,class:"transition-border hover:border-b-2 border-b-gray-400"},B={class:"fixed flex md:hidden flex-row justify-between p-5 text-black dark:text-white bg-gray-100 dark:bg-gray-800 z-30 w-full top-0"},O={class:"text-xl font-bold"},z=["src"],M={class:"flex md:hidden opacity-0 flex-row justify-between p-5 text-black dark:text-white bg-gray-100 dark:bg-gray-800 z-30 w-full top-0"},N={class:"text-xl font-bold"},R=["src"],q={class:"flex flex-col p-5 pt-24 text-xl text-gray-400 dark:text-gray-500"},E=["href"],F={class:"flex justify-between"},I={key:0,class:"text-black dark:text-white font-medium"},V={key:1,class:"transition-border hover:border-b-4 border-b-gray-400"},D=t("div",{class:"text-gray-400 dark:text-gray-500 text-center py-4"},"Yiqin Zhao",-1),H={data(){return{menuOpen:!1}},methods:{onMenuButtonClick(){this.menuOpen=!this.menuOpen}}},Z=Object.assign(H,{__name:"Navigator",setup(L){const{path:c}=f(),d=c.split("/")[1],p=[{path:"/",text:"Home"},{path:"/news/",text:"News"},{path:"/research/",text:"Research"},{path:"/project/",text:"Projects"},{path:"/yiqinzhao-cv.pdf",text:"CV"}].map(s=>(s.active=s.path.split("/")[1]===d,s)),x=p.filter(s=>s.active)[0];return(s,i)=>(a(),o(h,null,[t("div",{class:l(["hidden md:block text-normal px-4 py-2 text-gray-500 dark:text-gray-400 mx-auto bg-gray-100 dark:bg-gray-800",n(c)==="/"?"bg-transparent dark:bg-transparent":""])},[t("div",b,[t("a",y,[t("span",{class:l({"opacity-0":n(c)==="/"})},m,2)]),t("div",v,[(a(!0),o(h,null,u(n(p),e=>(a(),o("a",{class:"pl-10 font-medium hover:dark:text-white hover:text-black transition-colors flex items-center",key:e.text,href:e.path},[e.path.split("/")[1]===n(d)?(a(),o("span",C,r(e.text),1)):(a(),o("span",j,r(e.text),1))],8,w))),128))])])],2),t("div",B,[t("span",O,r(n(x).text),1),t("span",{onClick:i[0]||(i[0]=(...e)=>s.onMenuButtonClick&&s.onMenuButtonClick(...e))},[t("img",{class:"inline dark:invert",src:s.menuOpen?"/assets/img/icons/close.svg":"/assets/img/icons/menu.svg",alt:""},null,8,z)])]),t("div",M,[t("span",N,r(n(x).text),1),t("span",{onClick:i[1]||(i[1]=(...e)=>s.onMenuButtonClick&&s.onMenuButtonClick(...e))},[t("img",{class:"inline dark:invert",src:s.menuOpen?"/assets/img/icons/close.svg":"/assets/img/icons/menu.svg",alt:""},null,8,R)])]),t("div",{class:l(["fixed flex flex-col justify-between w-full h-full top-0 left-0 bg-gray-100 dark:bg-gray-800 z-20",{hidden:!s.menuOpen}])},[t("div",q,[(a(!0),o(h,null,u(n(p),e=>(a(),o("a",{class:"hover:text-white transition-color py-3",key:e.text,href:e.path},[t("div",F,[e.active?(a(),o("span",I,r(e.text),1)):(a(),o("span",V,r(e.text),1)),t("img",{class:l(["dark:invert w-6 opacity-50",{"opacity-100":e.path.split("/")[1]===n(d)}]),src:g,alt:""},null,2)])],8,E))),128))]),D],2)],64))}});export{Z as default};
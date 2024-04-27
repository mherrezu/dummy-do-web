import{o as n,c as l,g,f as m,t as u,n as h,h as f,a as o,i as b,r as _,b as i,w as d,j as v,v as k}from"./index-CU6vLvZ0.js";const y=(s,e)=>{const t=s.__vccOpts||s;for(const[r,a]of e)t[r]=a;return t},w={props:{buttonType:{type:String,default:"button"},color:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},label:{type:String,default:""},size:{type:String,default:"md"},transition:{type:String,default:"off"},selected:{type:String,default:"off"}},computed:{buttonClasses(){return{"text-md":this.size==="navbar","px-2.5 py-2 gap-x-2 text-xs":this.size==="xs","px-3.5 py-2 gap-x-2 text-sm":this.size==="sm","px-4 py-2.5 gap-x-2 text-sm":this.size==="md","px-4.5 py-2.5 gap-x-2 text-xl":this.size==="lg","px-5 py-3 gap-x-2 text-xl":this.size==="xl","px-7 py-4 gap-x-3 text-2xl":this.size==="xxl","py-5 gap-x-4 text-4xl":this.size==="4xl","text-primary-200 hover:bg-primary-200 hover:text-secondary-100 cursor-pointer":this.color==="still-color"&&!this.disabled,"text-primary-200 hover:text-secondary-200 hover:bg-primary-200 cursor-pointer":this.color==="frontend-home"&&!this.disabled,"text-secondary-200 hover:text-primary-200 hover:bg-secondary-200 cursor-pointer":this.color==="backend-home"&&!this.disabled,"cursor-not-allowed bg-slate-50 dark:bg-dark-gray-900/60 border border-gray-400 dark:border-dark-gray-300 text-gray-400 dark:text-gray-600 stroke-current":this.disabled&&this.color==="no-color","text-primary-200 text-bold cursor-pointer":this.color==="front-title-color"&&!this.disabled,"text-secondary-200 text-bold cursor-pointer":this.color==="back-title-color"&&!this.disabled,"text-secondary-100 text-bold cursor-pointer":this.color==="about-title-color"&&!this.disabled,"bg-slate-50 hover:bg-primary-200 text-secondary-100 hover:text-secondary-200 cursor-pointer":this.color==="primary"&&!this.disabled,"bg-primary-200 text-secondary-200":this.color==="primary-selected"&&!this.disabled,"cursor-not-allowed bg-gray-200 text-gray-400 stroke-current":this.color==="primary"&&this.disabled,"bg-slate-50 hover:bg-secondary-200 text-secondary-100 hover:text-primary-200 cursor-pointer":this.color==="secondary"&&!this.disabled,"bg-secondary-200 text-primary-200":this.color==="secondary-selected"&&!this.disabled,"cursor-not-allowed bg-slate-50 dark:bg-dark-gray-900/60 border border-gray-400 dark:border-dark-gray-300 text-gray-400 dark:text-gray-600 stroke-current":this.disabled&&this.color==="secondary","transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300":this.transition==="on"&&!this.disabled}}},methods:{handleClick(s){this.disabled&&s.stopPropagation()}}},z=["type","disabled"],M={key:1};function C(s,e,t,r,a,p){return n(),l("button",{type:t.buttonType,class:h([p.buttonClasses,"flex items-center justify-center"]),disabled:t.disabled,onClick:e[0]||(e[0]=f(x=>s.$emit("onClick",x),["stop"]))},[t.label?m("",!0):g(s.$slots,"default",{key:0}),t.label?(n(),l("p",M,u(t.label),1)):m("",!0)],10,z)}const c=y(w,[["render",C]]),$="https://mherrezu.github.io/dummy-do-web/assets/github-DIwGqeHE.svg",j="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='50px'%20height='50px'%3e%3cg%20fill='%23624f8f'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M16,3c-7.16752,0%20-13,5.83248%20-13,13v18c0,7.16752%205.83248,13%2013,13h18c7.16752,0%2013,-5.83248%2013,-13v-18c0,-7.16752%20-5.83248,-13%20-13,-13zM16,5h18c6.08648,0%2011,4.91352%2011,11v18c0,6.08648%20-4.91352,11%20-11,11h-18c-6.08648,0%20-11,-4.91352%20-11,-11v-18c0,-6.08648%204.91352,-11%2011,-11zM37,11c-1.10457,0%20-2,0.89543%20-2,2c0,1.10457%200.89543,2%202,2c1.10457,0%202,-0.89543%202,-2c0,-1.10457%20-0.89543,-2%20-2,-2zM25,14c-6.06329,0%20-11,4.93671%20-11,11c0,6.06329%204.93671,11%2011,11c6.06329,0%2011,-4.93671%2011,-11c0,-6.06329%20-4.93671,-11%20-11,-11zM25,16c4.98241,0%209,4.01759%209,9c0,4.98241%20-4.01759,9%20-9,9c-4.98241,0%20-9,-4.01759%20-9,-9c0,-4.98241%204.01759,-9%209,-9z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",O={name:"Footer",data(){return{currentYear:new Date().getFullYear()}}},S={class:"bg-secondary-100 text-primary-200 py-4"},B={class:"container mx-auto px-4 flex justify-between items-center"},N=b('<div class="flex flex-row"><a href="https://github.com/mherrezu/dummy-do-web" target="_blank"><img src="'+$+'" alt="GitHub" color="text-primary-200" class="m-2"></a><a href="https://www.instagram.com/dummydoweb/" target="_blank"><img src="'+j+'" alt="Instagram" color="text-primary-200" class="m-2"></a></div>',1);function D(s,e,t,r,a,p){return n(),l("footer",S,[o("div",B,[o("div",null,[o("p",null,"© "+u(a.currentYear)+" dummy do web",1)]),N])])}const Q=y(O,[["render",D]]),F="https://mherrezu.github.io/dummy-do-web/assets/Logo%20-%20Purple-CRcs-1Tx.png",T={class:"font-jura bg-secondary-100 p-4 sm:p-8"},V={class:"flex items-center justify-between h-22"},L=b('<div class="flex items-center min-w-40"><img src="'+F+'" alt="Logo" class="h-12"><p class="pl-3 text-primary-200 text-md selection:select-none">dummy do web</p></div><div class="hidden md:block"><h2 class="text-secondary-200 text-xl">junior made easy</h2></div>',2),Y={class:"hidden md:block"},E={class:"flex items-baseline space-x-4 text-primary-200 text-md min-w-44"},G={class:"absolute top-4 right-4 flex items-center sm:hidden"},H=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),I=[H],P=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),q=[P],A={class:"sm:hidden h-screen",id:"mobile-menu"},R={class:"flex flex-col items-end text-primary-200 text-md mt-8"},J={name:"Navbar",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}},U=Object.assign(J,{setup(s){return(e,t)=>{const r=_("router-link");return n(),l("nav",T,[o("div",V,[L,o("div",Y,[o("div",E,[i(r,{to:"/"},{default:d(()=>[i(c,{size:"navbar",color:"still-color",transition:"on",label:"home"})]),_:1}),i(r,{to:"/about"},{default:d(()=>[i(c,{size:"navbar",color:"still-color",transition:"on",label:"about"})]),_:1})])]),o("div",G,[o("button",{type:"button",onClick:t[0]||(t[0]=(...a)=>e.toggleMenu&&e.toggleMenu(...a)),class:"relative inline-flex items-center justify-center rounded-md p-2 text-primary-200 hover:bg-secondary-200 hover:text-primary-200","aria-controls":"mobile-menu"},[(n(),l("svg",{class:h({"hidden h-8 w-8":e.isMenuOpen,"block h-8 w-8":!e.isMenuOpen}),fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},I,2)),(n(),l("svg",{class:h({"hidden h-8 w-8":!e.isMenuOpen,"block h-8 w-8":e.isMenuOpen}),fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},q,2))])])]),v(o("div",A,[o("div",R,[i(r,{to:"/"},{default:d(()=>[i(c,{size:"navbar",color:"still-color",transition:"on",label:"home"})]),_:1}),i(r,{to:"/about"},{default:d(()=>[i(c,{size:"navbar",color:"still-color",transition:"on",label:"about"})]),_:1})])],512),[[k,e.isMenuOpen]])])}}});export{c as C,Q as F,U as _,y as a};

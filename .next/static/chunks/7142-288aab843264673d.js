"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7142],{8104:function(e,s,n){n.d(s,{Z:function(){return r}});function r(e){let{preview:s,lightMode:n}=e,r=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),t=document.querySelector('link[href="/dark/assets/css/style.css"]'),l=document.querySelector('link[href="/light/assets/css/style.css"]'),i=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),a=document.querySelector('link[href="/light/assets/css/plugins.css"]');n&&!s&&t&&t.remove(),n&&!s&&i&&i.remove(),!n&&l&&l.remove(),!n&&a&&a.remove(),s&&r?(document.head.append(r),l&&l.remove(),a&&a.remove()):!s&&r&&r.remove()}},6054:function(e,s,n){var r=n(5893),t=n(7294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),n=function(e){let s=this.querySelector(".hover-anim"),{offsetX:n,offsetY:r}=e,{offsetWidth:t,offsetHeight:l}=this;s.style.transform="translate(".concat(n/t*50-25,"px, ").concat(r/l*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")},r=e=>{let{clientX:n,clientY:r}=e;s.style.left=n+"px",s.style.top=r+"px"};e.forEach(e=>e.addEventListener("mousemove",n)),e.forEach(e=>e.addEventListener("mouseleave",n)),window.addEventListener("mousemove",r),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,r.jsx)("div",{className:"cursor"})}},7458:function(e,s,n){var r=n(5893),t=n(7294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,r.jsxs)("div",{className:"loader-wrap",children:[(0,r.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,r.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,r.jsx)("div",{className:"loader-wrap-heading",children:(0,r.jsx)("span",{children:(0,r.jsxs)("h2",{className:"load-text",children:[(0,r.jsx)("span",{children:"L"}),(0,r.jsx)("span",{children:"o"}),(0,r.jsx)("span",{children:"a"}),(0,r.jsx)("span",{children:"d"}),(0,r.jsx)("span",{children:"i"}),(0,r.jsx)("span",{children:"n"}),(0,r.jsx)("span",{children:"g"})]})})})]})}},4555:function(e,s,n){n.d(s,{Z:function(){return a}});var r=n(5893),t=n(7294);let l=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),n=s.getTotalLength(),r=()=>{let e=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=n-e*n/r};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=n+" "+n,s.style.strokeDashoffset=n,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",r(),window.addEventListener("scroll",r),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},i=()=>((0,t.useEffect)(()=>{l()},[]),(0,r.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}));var a=i},8232:function(e,s,n){var r=n(5893);n(7294);var t=n(1664),l=n.n(t);s.Z=function(e){let{lightMode:s}=e;function n(e){document.querySelectorAll("ul.main-menu li").forEach(e=>{e.classList.add("hoverd")}),e.currentTarget.classList.remove("hoverd")}function t(){document.querySelectorAll("ul.main-menu li").forEach(e=>e.classList.remove("hoverd"))}function i(e){let s=e.currentTarget.querySelector(".sub-menu");s&&(s.classList.contains("sub-open")?(document.querySelectorAll(".sub-menu").forEach(e=>{e.classList.remove("sub-open"),e.style.maxHeight="0",e.previousElementSibling.children[0].classList.remove("dopen")}),s.classList.remove("sub-open"),s.style.maxHeight="0",s.previousElementSibling.children[0].classList.remove("dopen")):s.classList.contains("sub-open")||(document.querySelectorAll(".sub-menu").forEach(e=>{e.classList.remove("sub-open"),e.style.maxHeight="0",e.previousElementSibling.children[0].classList.remove("dopen")}),s.classList.add("sub-open"),s.style.maxHeight="400px",s.previousElementSibling.children[0].classList.add("dopen")))}return(0,r.jsx)("div",{className:"hamenu",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-2",children:(0,r.jsx)("div",{className:"menu-text",children:(0,r.jsx)("div",{className:"text",children:(0,r.jsx)("h2",{})})})}),(0,r.jsx)("div",{className:"col-lg-7",children:(0,r.jsx)("div",{className:"menu-links",children:(0,r.jsxs)("ul",{className:"main-menu rest",children:[(0,r.jsx)("li",{onMouseEnter:n,onMouseLeave:t,onClick:i,children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsxs)("div",{className:"link cursor-pointer dmenu",children:[(0,r.jsx)("span",{children:(0,r.jsx)(l(),{href:"/",className:"fill-text","data-text":"Home",children:"Home"})})," ",(0,r.jsx)("i",{})]})})}),(0,r.jsx)("li",{onMouseEnter:n,onMouseLeave:t,onClick:i,children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsxs)("div",{className:"link cursor-pointer dmenu",children:[(0,r.jsx)("span",{children:(0,r.jsx)(l(),{href:"/jrmwebsite/studio",className:"fill-text","data-text":"Studio",children:"Studio"})})," ",(0,r.jsx)("i",{})]})})}),(0,r.jsx)("li",{onMouseEnter:n,onMouseLeave:t,onClick:i,children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsxs)("div",{className:"link cursor-pointer dmenu",children:[(0,r.jsx)("span",{children:(0,r.jsx)(l(),{href:"/jrmwebsite/contact",className:"fill-text","data-text":"Kontakt",children:"Kontakt"})})," ",(0,r.jsx)("i",{})]})})}),(0,r.jsx)("li",{onMouseEnter:n,onMouseLeave:t,onClick:i,children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsxs)("div",{className:"link cursor-pointer dmenu",children:[(0,r.jsx)("span",{children:(0,r.jsx)(l(),{href:"/jrmwebsite/faq",className:"fill-text","data-text":"FAQ",children:"FAQ"})})," ",(0,r.jsx)("i",{})]})})}),(0,r.jsx)("li",{onMouseEnter:n,onMouseLeave:t,onClick:i,children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsxs)("div",{className:"link cursor-pointer dmenu",children:[(0,r.jsx)("span",{children:(0,r.jsx)(l(),{href:"/jrmwebsite/datenschutzerklaerung",className:"fill-text","data-text":"Datenschutzerkl\xe4rung",children:"Datenschutzerkl\xe4rung"})})," ",(0,r.jsx)("i",{})]})})}),(0,r.jsx)("li",{onMouseEnter:n,onMouseLeave:t,onClick:i,children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsxs)("div",{className:"link cursor-pointer dmenu",children:[(0,r.jsx)("span",{children:(0,r.jsx)(l(),{href:"/jrmwebsite/impressum",className:"fill-text","data-text":"Impressum",children:"Impressum"})})," ",(0,r.jsx)("i",{})]})})})]})})}),(0,r.jsx)("div",{className:"col-lg-3 d-flex align-items-end",children:(0,r.jsxs)("div",{className:"cont-info full-width",children:[(0,r.jsx)("div",{className:"item",children:(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"#0",children:"contact@jrmrecords.com"})})}),(0,r.jsxs)("ul",{className:"rest social-text d-flex mt-50 fz-13",children:[(0,r.jsx)("li",{className:"mr-20",children:(0,r.jsx)("a",{href:"https://www.instagram.com/jrmrecords_/?hl=de",className:"hover-this",target:"_blank",children:(0,r.jsx)("span",{className:"hover-anim",children:"Instagram"})})}),(0,r.jsx)("li",{className:"mr-20",children:(0,r.jsx)("a",{href:"https://www.tiktok.com/@juniormafiaofficial?_t=8dSxx7JbJ5n&_r=1",className:"hover-this",target:"_blank",children:(0,r.jsx)("span",{className:"hover-anim",children:"TikTok"})})})]})]})})]})})})}},7217:function(e,s,n){var r=n(5893),t=n(1664),l=n.n(t),i=n(7294);s.Z=function(e){let{lightMode:s,alwaysDark:n,darkOnScroll:t}=e;return(0,i.useEffect)(()=>{if(t){let e=document.querySelector("#navi");window.addEventListener("scroll",()=>{window.scrollY>500?(e.className="topnav dark change nav-scroll",e.querySelector("img").src="/dark/assets/imgs/logo-dark.png"):(e.className="topnav",e.querySelector("img").src="/dark/assets/imgs/logo-light.png")})}},[t]),(0,r.jsx)("div",{id:"navi",className:"topnav ".concat(n&&"navlit"),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(l(),{href:"/",passHref:!0,children:(0,r.jsx)("div",{className:"logo icon-img-120",children:(0,r.jsx)("img",{src:"/dark/assets/imgs/logo-".concat(n?"dark":"light",".png"),alt:""})})}),(0,r.jsxs)("div",{className:"menu-icon cursor-pointer",onClick:function(e){let r=document.querySelector(".hamenu"),t=document.querySelector("#navi");e.currentTarget.classList.contains("open")?(e.currentTarget.classList.remove("open"),null==r||r.classList.remove("open"),r.style.left="-100%",s&&!n&&(t.classList.remove("navlit"),t.querySelector("img").src="/dark/assets/imgs/logo-light.png")):(e.currentTarget.classList.add("open"),null==r||r.classList.add("open"),r.style.left=0,s&&!n&&(t.classList.add("navlit"),t.querySelector("img").src="/dark/assets/imgs/logo-dark.png"))},children:[(0,r.jsxs)("span",{className:"icon",children:[(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]}),(0,r.jsx)("span",{className:"text",children:(0,r.jsx)("span",{className:"word",children:"Menu"})})]})]})})}}}]);
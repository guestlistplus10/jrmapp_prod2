"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9761],{8104:function(e,s,a){a.d(s,{Z:function(){return i}});function i(e){let{preview:s,lightMode:a}=e,i=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),l=document.querySelector('link[href="/dark/assets/css/style.css"]'),n=document.querySelector('link[href="/light/assets/css/style.css"]'),r=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),c=document.querySelector('link[href="/light/assets/css/plugins.css"]');a&&!s&&l&&l.remove(),a&&!s&&r&&r.remove(),!a&&n&&n.remove(),!a&&c&&c.remove(),s&&i?(document.head.append(i),n&&n.remove(),c&&c.remove()):!s&&i&&i.remove()}},8366:function(e,s,a){a.d(s,{Z:function(){return i}});function i(){let e=document.querySelectorAll("[data-background]");e.length>0&&e.forEach(e=>{let s=e.dataset.background;e.style.backgroundImage="url('".concat(s,"')")})}},6054:function(e,s,a){var i=a(5893),l=a(7294);s.Z=function(){return(0,l.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),a=function(e){let s=this.querySelector(".hover-anim"),{offsetX:a,offsetY:i}=e,{offsetWidth:l,offsetHeight:n}=this;s.style.transform="translate(".concat(a/l*50-25,"px, ").concat(i/n*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")},i=e=>{let{clientX:a,clientY:i}=e;s.style.left=a+"px",s.style.top=i+"px"};e.forEach(e=>e.addEventListener("mousemove",a)),e.forEach(e=>e.addEventListener("mouseleave",a)),window.addEventListener("mousemove",i),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,i.jsx)("div",{className:"cursor"})}},7458:function(e,s,a){var i=a(5893),l=a(7294);s.Z=function(){return(0,l.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,i.jsxs)("div",{className:"loader-wrap",children:[(0,i.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,i.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,i.jsx)("div",{className:"loader-wrap-heading",children:(0,i.jsx)("span",{children:(0,i.jsxs)("h2",{className:"load-text",children:[(0,i.jsx)("span",{children:"L"}),(0,i.jsx)("span",{children:"o"}),(0,i.jsx)("span",{children:"a"}),(0,i.jsx)("span",{children:"d"}),(0,i.jsx)("span",{children:"i"}),(0,i.jsx)("span",{children:"n"}),(0,i.jsx)("span",{children:"g"})]})})})]})}},4555:function(e,s,a){a.d(s,{Z:function(){return c}});var i=a(5893),l=a(7294);let n=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),a=s.getTotalLength(),i=()=>{let e=window.pageYOffset,i=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=a-e*a/i};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=a+" "+a,s.style.strokeDashoffset=a,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",i(),window.addEventListener("scroll",i),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},r=()=>((0,l.useEffect)(()=>{n()},[]),(0,i.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,i.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,i.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}));var c=r},6660:function(e,s,a){var i=a(5893);s.Z=function(e){let{statement:s}=e,a=s.split("<BR>");return a.map((e,s)=>(0,i.jsxs)("span",{style:{display:"block"},children:[e,s!==a.length-1?(0,i.jsx)("br",{}):null]},s))}},9977:function(e,s,a){a.d(s,{Z:function(){return c}});var i=a(5893);a(7294);var l=a(1664),n=a.n(l),r=JSON.parse('[{"id":1,"title":"Free advertising for your online business.","image":"/dark/assets/imgs/sass-img/blog/1.jpg","date":"August 6, 2022","tags":["Marketing","Design"]},{"id":2,"title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/sass-img/blog/2.jpg","date":"August 6, 2022","tags":["Marketing","Design"]}]'),c=function(){return(0,i.jsx)("section",{className:"blog-list-half crev section-padding sub-bg","data-scroll-index":"6",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"sec-lg-head mb-80",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-7",children:[(0,i.jsx)("h6",{className:"dot-titl-non mb-10",children:"Our Blog"}),(0,i.jsx)("h2",{className:"fz-50",children:"Latest News"})]}),(0,i.jsx)("div",{className:"col-lg-5 d-flex align-items-center",children:(0,i.jsx)("div",{className:"full-width d-flex justify-content-end justify-end",children:(0,i.jsx)("div",{className:"vew-all",children:(0,i.jsxs)(n(),{href:"/dark/blog-half-img",children:["View All Our News",(0,i.jsx)("span",{children:(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})})]})})})})]})}),(0,i.jsx)("div",{className:"row",children:r.map((e,s)=>(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"item ".concat(s!==r.length-1?"md-mb80":""),children:(0,i.jsxs)("div",{className:"row rest",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:e.image,alt:""})})}),(0,i.jsx)("div",{className:"col-md-6 valign",children:(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("span",{className:"date fz-12 ls1 text-u opacity-7 mb-15",children:e.date}),(0,i.jsx)("h5",{children:(0,i.jsx)(n(),{href:"/dark/blog-details",children:e.title})}),(0,i.jsx)("div",{className:"tags colorbg mt-15",children:e.tags.map((e,s)=>(0,i.jsx)(n(),{href:"/dark/blog-half-img",className:"me-1",children:e},e))})]})})]})})},e.id))})]})})}},2012:function(e,s,a){var i=a(5893);a(7294),s.Z=function(){return(0,i.jsx)("section",{className:"contact-crev section-padding","data-scroll-index":"7",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-5",children:(0,i.jsxs)("div",{className:"sec-lg-head md-mb80",children:[(0,i.jsx)("h2",{className:"fz-50",children:"Du willst mit uns arbeiten?"}),(0,i.jsx)("p",{className:"fz-15 mt-10",children:"Schreib uns eine Nachricht auf Instagram und wir melden uns bei dir!"}),(0,i.jsxs)("ul",{className:"rest social-text d-flex mt-60",children:[(0,i.jsx)("li",{className:"mr-30",children:(0,i.jsx)("a",{href:"https://www.instagram.com/jrmrecords_/?hl=de",className:"hover-this",target:"_blank",children:(0,i.jsx)("span",{className:"hover-anim",children:"Instagram"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.tiktok.com/@juniormafiaofficial?_t=8dSxx7JbJ5n&_r=1",className:"hover-this",target:"_blank",children:(0,i.jsx)("span",{className:"hover-anim",children:"TikTok"})})})]})]})})})})})}},7725:function(e,s,a){var i=a(5893);a(7294);var l=a(7513);s.Z=function(e){let{lightMode:s}=e;return(0,i.jsx)("footer",{className:"sub-bg",children:(0,i.jsx)("div",{className:"sub-footer pt-40 pb-40 bord-thin-top",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/logo-".concat(s?"dark":"light",".png"),alt:""})})})}),(0,i.jsx)("div",{className:"col-lg-8",children:(0,i.jsx)("div",{className:"copyright d-flex",children:(0,i.jsx)("div",{className:"ml-auto",children:(0,i.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by ",(0,i.jsxs)("span",{className:"underline",children:[" ",(0,i.jsx)("a",{href:l.a,target:"_blank",children:l.v})]})]})})})})]})})})})}},2035:function(e,s,a){var i=a(5893),l=a(7294),n=a(1664),r=a.n(n),c=a(8366);s.Z=function(){return(0,l.useEffect)(()=>{(0,c.Z)()},[]),(0,i.jsxs)("header",{className:"header-freelancer full-height bord-thin-bottom valign position-re","data-overlay-dark":"5","data-scroll-index":"0",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"caption",children:[(0,i.jsxs)("h6",{className:"fw-400 mb-15",children:["Hello ",(0,i.jsx)("span",{className:"icon-img-30",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/svg-assets/hi.png",alt:""})})," , I'm Chadwick Boseman."]}),(0,i.jsx)("h1",{className:"fz-60",children:"A Visual Designer Specializing in UI & UX"}),(0,i.jsxs)("div",{className:"row mt-50",children:[(0,i.jsx)("div",{className:"col-lg-3 cal-act order2",children:(0,i.jsxs)(r(),{href:"/dark/portfolio-classic-grid",className:"butn-circle d-flex align-items-center text-center",children:[(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)("span",{children:(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})}),(0,i.jsx)("span",{className:"full-width",children:"View Works"})]}),(0,i.jsx)("img",{src:"/dark/assets/imgs/svg-assets/circle-star.svg",alt:"",className:"circle-star"})]})}),(0,i.jsx)("div",{className:"col-lg-8 offset-lg-1 valign order1 md-mb50",children:(0,i.jsx)("p",{className:"fz-16",children:"We appreciate your trust greatly our clients choose us & our products because they know we are the best."})})]})]})})})}),(0,i.jsx)("div",{className:"bg-img","data-background":"/dark/assets/imgs/freelancer/h2.png"})]})}},8800:function(e,s,a){var i=a(5893),l=a(7294);s.Z=function(){function e(s){let a=s.clientX,i=s.clientY,l=document.querySelectorAll(".parallax");l.forEach(e=>{let s=e.dataset.speed,l=(window.innerWidth/2-a)*s,n=(window.innerHeight/2-i)*s;e.style.transform="translate3d(".concat(l/10,"rem, ").concat(n/10,"rem, 0)")}),requestAnimationFrame(e)}return(0,l.useEffect)(()=>(document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)),[]),(0,i.jsx)("section",{className:"intro-img-parlx section-padding pb-0 sub-bg","data-scroll-index":"2",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)("div",{className:"col-lg-5 valign md-hide",children:(0,i.jsx)("h2",{className:"max-text","data-text":" Creative UI - UX Designer.",children:" Creative UI - UX Designer."})}),(0,i.jsx)("div",{className:"col-lg-3 order2",children:(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("img",{src:"/dark/assets/imgs/freelancer/h2.png",alt:"",className:"parallax","data-speed":"0.01"}),(0,i.jsx)("span",{className:"star-shape",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/svg-assets/star-shape.png",alt:"",className:"parallax","data-speed":"-0.01"})})]})}),(0,i.jsx)("div",{className:"col-lg-3 valign order1",children:(0,i.jsxs)("div",{className:"text-qoute",children:[(0,i.jsx)("span",{className:"exp mb-30 main-bg",children:"7+ Years Experience"}),(0,i.jsx)("p",{children:"I'm Creative Independent Web Developer, and I'm very passionate and dedicated to my work, Using year-over-year design approaches and the latest technologies."}),(0,i.jsx)("div",{className:"stauts mt-50",children:(0,i.jsxs)("div",{className:"item d-flex align-items-center",children:[(0,i.jsx)("h2",{className:"mr-20",children:"12k"}),(0,i.jsxs)("p",{className:"fz-14",children:["Happy Users ",(0,i.jsx)("br",{})," Around World"]})]})})]})})]})})})}},2108:function(e,s,a){var i=a(5893);a(7294),s.Z=function(){return(0,i.jsx)("section",{className:"serv-marq bord-thin-bottom",children:(0,i.jsx)("div",{className:"container-fluid ontop sub-bg rest pt-20 pb-20",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"main-marq light-text",children:(0,i.jsxs)("div",{className:"slide-har st1",children:[(0,i.jsxs)("div",{className:"box non-strok",children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"UI-UX Experience"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Web Development"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Digital Marketing"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Product Design"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Mobile Solutions"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})})]}),(0,i.jsxs)("div",{className:"box non-strok",children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"UI-UX Experience"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Web Development"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Digital Marketing"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Product Design"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[(0,i.jsx)("span",{children:"Mobile Solutions"})," ",(0,i.jsx)("span",{className:"fz-50 ml-50 stroke icon",children:"*"})]})})]})]})})})})})})}},845:function(e,s,a){var i=a(5893),l=a(7294);s.Z=function(e){let{lightMode:s}=e;function a(){let e=window.scrollY,s=document.querySelector(".navbar");e>300?s.classList.add("nav-scroll"):s.classList.remove("nav-scroll")}function n(e){setTimeout(()=>{var s;return null===(s=document.querySelector('[data-scroll-index="'.concat(e,'"]')))||void 0===s?void 0:s.scrollIntoView({smooth:!0})},700)}return(0,l.useEffect)(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[]),(0,i.jsx)("nav",{className:"navbar navbar-expand-lg static main-bg",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("a",{className:"logo icon-img-100",href:"#",children:s?(0,i.jsx)("img",{src:"/dark/assets/imgs/logo-dark.png",alt:"logo"}):(0,i.jsx)("img",{src:"/dark/assets/imgs/logo-light.png",alt:"logo"})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")},children:(0,i.jsx)("span",{className:"icon-bar",children:(0,i.jsx)("i",{className:"fas fa-bars"})})}),(0,i.jsx)("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",children:(0,i.jsxs)("ul",{className:"navbar-nav",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"0",onClick:()=>n(0),children:(0,i.jsx)("span",{className:"rolling-text",children:"Home"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"1",onClick:()=>n(1),children:(0,i.jsx)("span",{className:"rolling-text",children:"Services"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"2",onClick:()=>n(2),children:(0,i.jsx)("span",{className:"rolling-text",children:"About"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"3",onClick:()=>n(3),children:(0,i.jsx)("span",{className:"rolling-text",children:"Portfolio"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"4",onClick:()=>n(4),children:(0,i.jsx)("span",{className:"rolling-text",children:"Resume"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"6",onClick:()=>n(6),children:(0,i.jsx)("span",{className:"rolling-text",children:"Blog"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#0","data-scroll-nav":"7",onClick:()=>n(7),children:(0,i.jsx)("span",{className:"rolling-text",children:"Contact"})})})]})}),(0,i.jsxs)("div",{className:"search-form",children:[(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("input",{type:"text",name:"search",placeholder:"Search"}),(0,i.jsx)("button",{children:(0,i.jsx)("span",{className:"pe-7s-search"})})]}),(0,i.jsxs)("div",{className:"search-icon",onClick:function(){let e=document.querySelector(".navbar .search-form"),s=document.querySelector(".search-form .close-search");e.classList.toggle("open"),e.classList.contains("open")?s.style.display="block":s.style.display="none"},children:[(0,i.jsx)("span",{className:"pe-7s-search open-search"}),(0,i.jsx)("span",{className:"pe-7s-close close-search"})]})]})]})})}},8462:function(e,s,a){a.d(s,{Z:function(){return c}});var i=a(5893);a(7294);var l=a(1664),n=a.n(l),r=JSON.parse('[{"id":1,"image":"/dark/assets/imgs/freelancer/works/1.jpg","title":"GeekFolio Architecture","category":"Branding","date":"2023"},{"id":2,"image":"/dark/assets/imgs/freelancer/works/2.jpg","title":"Luxury Modern Chair","category":"Branding","date":"2023"},{"id":3,"image":"/dark/assets/imgs/freelancer/works/3.jpg","title":"Partiner BPO","category":"Branding","date":"2023"},{"id":4,"image":"/dark/assets/imgs/freelancer/works/4.jpg","title":"From our gallery","category":"Branding","date":"2023"},{"id":5,"image":"/dark/assets/imgs/freelancer/works/5.jpg","title":"Astra Brand Identity","category":"Branding","date":"2023"}]'),c=function(){return(0,i.jsx)("section",{className:"portfolio clasic section-padding","data-scroll-index":"3",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"sec-lg-head mb-50",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"position-re",children:[(0,i.jsx)("h6",{className:"dot-titl-non mb-10",children:"Portfolio"}),(0,i.jsx)("h2",{className:"fz-50",children:"Selected Works"})]})}),(0,i.jsx)("div",{className:"col-lg-5 d-flex align-items-center",children:(0,i.jsx)("div",{className:"full-width d-flex justify-content-end justify-end",children:(0,i.jsx)("div",{className:"vew-all",children:(0,i.jsxs)(n(),{href:"/dark/portfolio-classic-grid",children:["View All Works",(0,i.jsx)("span",{children:(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})})]})})})})]})}),(0,i.jsx)("div",{className:"row",children:r.map((e,s)=>(0,i.jsx)("div",{className:"col-lg-".concat(s>1?"4":"6"),children:(0,i.jsxs)("div",{className:"item mt-30",children:[(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("img",{src:e.image,alt:"",className:"radius-10"}),(0,i.jsx)(n(),{href:"/dark/project-details1",className:"tag",children:(0,i.jsx)("span",{children:e.category})})]}),(0,i.jsxs)("div",{className:"cont mt-30 d-flex",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h6",{className:"line-height-1",children:(0,i.jsx)(n(),{href:"/dark/project-details1",children:e.title})})}),(0,i.jsx)("div",{className:"ml-auto",children:(0,i.jsxs)("p",{className:"fz-14",children:["\xa9 ",e.date]})})]})]})},e.id))})]})})}},5370:function(e,s,a){a.d(s,{Z:function(){return t}});var i=a(5893);a(7294);var l=a(1664),n=a.n(l),r=a(6660),c=JSON.parse('[{"id":1,"image":"assets/imgs/serv-icons/0.png","title":"Brand Strategy & <BR> Art Direction","text":"Creating a higher spacing and how people move through a unique."},{"id":2,"image":"assets/imgs/serv-icons/1.png","title":"UX/UI Design & <BR> Website/App Design","text":"Creating a higher spacing and how people move through a unique."},{"id":3,"image":"assets/imgs/serv-icons/0.png","title":"Brand Strategy & <BR> Art Direction","text":"Creating a higher spacing and how people move through a unique."},{"id":4,"image":"assets/imgs/serv-icons/1.png","title":"UX/UI Design & <BR> Website/App Design","text":"Creating a higher spacing and how people move through a unique."}]'),t=function(e){let{lightMode:s}=e;return(0,i.jsx)("section",{className:"serv-box section-padding","data-scroll-index":"1",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"sec-lg-head mb-80",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"position-re",children:[(0,i.jsx)("h6",{className:"dot-titl-non mb-10",children:"Featured Services"}),(0,i.jsx)("h2",{className:"fz-50",children:"Our Services"})]})}),(0,i.jsx)("div",{className:"col-lg-5 d-flex align-items-center",children:(0,i.jsx)("div",{className:"full-width d-flex justify-content-end justify-end",children:(0,i.jsx)("div",{className:"vew-all",children:(0,i.jsxs)(n(),{href:"/dark/page-services",children:["View All Services",(0,i.jsx)("span",{children:(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})})]})})})})]})}),(0,i.jsx)("div",{className:"row",children:c.map((e,a)=>(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"serv-item d-flex ".concat(a!==c.length-1?"mb-30":""," radius-10"),children:[(0,i.jsx)("div",{className:"icon-img-80",children:(0,i.jsx)("img",{src:"/".concat(s?"light":"dark","/").concat(e.image),alt:""})}),(0,i.jsxs)("div",{className:"ml-60",children:[(0,i.jsx)("h5",{className:"mb-15",children:(0,i.jsx)(r.Z,{statement:e.title})}),(0,i.jsx)("p",{children:e.text})]})]})},e.id))})]})})}},3351:function(e,s,a){var i=a(5893);a(7294),a(1664),s.Z=function(e){let{lightMode:s}=e;return(0,i.jsx)("section",{className:"skills-exp section-padding sub-bg","data-scroll-index":"4",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-6",children:[(0,i.jsx)("div",{className:"sec-lg-head mb-80",children:(0,i.jsxs)("div",{className:"position-re",children:[(0,i.jsx)("h6",{className:"dot-titl-non mb-10",children:"Soft- & Hardware"}),(0,i.jsx)("h2",{className:"fz-50",children:"Nutzbare Digital Audio Workstations"})]})}),(0,i.jsxs)("div",{className:"skill-item d-flex justify-content-between md-mb50",children:[(0,i.jsxs)("div",{className:"item text-center",children:[(0,i.jsx)("div",{className:"icon-img-60 m-auto",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/jrmwebimg/icons/protoolsicon.png",alt:""})}),(0,i.jsx)("span",{className:"mt-15",children:"Avid ProTools"})]}),(0,i.jsxs)("div",{className:"item text-center",children:[(0,i.jsx)("div",{className:"icon-img-60 m-auto",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/jrmwebimg/icons/abletonicon.png",alt:""})}),(0,i.jsx)("span",{className:"mt-15",children:"Ableton Live"})]}),(0,i.jsxs)("div",{className:"item text-center",children:[(0,i.jsx)("div",{className:"icon-img-60 m-auto",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/jrmwebimg/icons/flicon.png",alt:""})}),(0,i.jsx)("span",{className:"mt-15",children:"Fl Studio"})]}),(0,i.jsxs)("div",{className:"item text-center",children:[(0,i.jsx)("div",{className:"icon-img-60 m-auto",children:(0,i.jsx)("img",{src:"/dark/assets/imgs/jrmwebimg/icons/logicicon.png",alt:""})}),(0,i.jsx)("span",{className:"mt-15",children:"Logic Pro"})]})]})]}),(0,i.jsx)("div",{className:"col-lg-5 offset-lg-1 valign",children:(0,i.jsx)("p1",{children:"Zus\xe4tzlich zu den g\xe4ngigen DAWs verf\xfcgen wir \xfcber eine umfangreiche Auswahl an branchen\xfcblichen Plugins, darunter Waves Audio, Universal Audio, Izotope , Slate Digital, Antares Autotune, Melodyne und viele mehr."})})]})})})}},8099:function(e,s,a){a.d(s,{Z:function(){return d}});var i=a(5893),l=a(7294),n=a(719),r=a(1911),c=JSON.parse('[{"id":1,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","author":{"picture":"/dark/assets/imgs/testim/1.jpg","name":"Leonard Heiser","position":"Ceo"}},{"id":2,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","author":{"picture":"/dark/assets/imgs/testim/2.jpg","name":"Leonard Heiser","position":"Ceo"}}]');let t={modules:[r.W_,r.tl,r.pt],spaceBetween:30,speed:1e3,slidesPerView:2,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}};var d=function(){let[e,s]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{s(!0)},[]),(0,i.jsx)("section",{className:"testim-crv section-padding","data-scroll-index":"5",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4 valign",children:(0,i.jsxs)("div",{className:"sec-lg-head md-mb80",children:[(0,i.jsxs)("div",{className:"position-re",children:[(0,i.jsx)("h6",{className:"dot-titl-non mb-10",children:"What Clients Says?"}),(0,i.jsx)("h2",{className:"fz-50",children:"Testimonials"})]}),(0,i.jsxs)("div",{className:"swiper-controls testim-controls arrow-out d-flex mt-50",children:[(0,i.jsx)("div",{className:"swiper-button-prev",children:(0,i.jsx)("span",{className:"left",children:(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",fill:"currentColor"})})})}),(0,i.jsx)("div",{className:"swiper-button-next ml-50",children:(0,i.jsx)("span",{className:"right",children:(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",fill:"currentColor"})})})})]})]})}),(0,i.jsx)("div",{className:"col-lg-8",children:(0,i.jsx)("div",{className:"testim-swiper2",children:e&&(0,i.jsx)(n.tq,{...t,id:"content-carousel-container-unq-testim",className:"swiper-container",children:c.map(e=>(0,i.jsx)(n.o5,{children:(0,i.jsxs)("div",{className:"item",children:[(0,i.jsxs)("div",{className:"cont mb-40",children:[(0,i.jsx)("div",{className:"rate-stars mb-20 fz-12",children:(0,i.jsxs)("span",{className:"rate main-color",children:[(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"})]})}),(0,i.jsx)("p",{className:"fw-400",children:e.content})]}),(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"img circle-60",children:(0,i.jsx)("img",{src:e.author.picture,alt:"",className:"circle-img"})})}),(0,i.jsx)("div",{className:"ml-30",children:(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("h6",{className:"fz-16",children:e.author.name}),(0,i.jsx)("span",{className:"opacity-7 sub-title",children:e.author.position})]})})]})]})},e.id))})})})]})})})}},7283:function(e,s,a){var i=a(5893),l=a(7294),n=a(9008),r=a.n(n),c=a(8104),t=a(7458),d=a(6054),o=a(4555);let m=e=>{let{children:s,lightMode:a}=e;return(0,l.useEffect)(()=>{(0,c.Z)({lightMode:a})},[a]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{children:a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/plugins.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/style.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})]})}),(0,i.jsx)(t.Z,{}),(0,i.jsx)(d.Z,{}),(0,i.jsx)(o.Z,{}),s]})};s.Z=m},7513:function(e){e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}}]);
const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let n=[];t.addEventListener("click",(function(){n=setInterval((()=>{d.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a3c9610f.js.map

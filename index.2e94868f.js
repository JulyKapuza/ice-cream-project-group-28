!function(){var e=document.querySelector(".header__menu--js"),t=document.querySelector(".js-open"),n=document.querySelector(".js-close"),s=document.querySelectorAll(".link-close-menu"),c=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",c),n.addEventListener("click",c);var o=function(){e.classList.contains("is-open")&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"))};s.forEach((function(e){e.addEventListener("click",o)})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.2e94868f.js.map

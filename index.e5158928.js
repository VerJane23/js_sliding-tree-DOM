var e=document.querySelectorAll("li"),t=document.querySelector(".tree");e.forEach(function(e){var t=document.createElement("span");e.prepend(t),t.append(t.nextSibling)}),t.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.closest("li").querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.e5158928.js.map

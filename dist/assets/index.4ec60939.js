Element.prototype._addDataValue=function(e,t){e=`data-${e}`;let l=this.getAttribute(e);null===l?this.setAttribute(e,t):(t=t.split(" "),l=l.split(" "),t.map((e=>{!l.includes(e)&&l.push(e)})),this.setAttribute(e,l.join(" ")))},Element.prototype._removeDataValue=function(e,t){let l=[];e=`data-${e}`;let r=this.getAttribute(e);null!==r&&(r.split(" ").map((e=>{!t.split(" ").includes(e)&&l.push(e)})),0!==l.length?this.setAttribute(e,l.join(" ")):this.removeAttribute(e))},Element.prototype._hasDataValue=function(e,t){e=`data-${e}`;let l=this.getAttribute(e);return null!==l&&l.split(" ").includes(t)};new Promise((e=>{let t=setInterval((()=>{"0px"===getComputedStyle(document.body)["margin-left"]&&(clearInterval(t),e())}),1)})).then((()=>{document.querySelectorAll('[data-controller="lib-ns"]').forEach((e=>{!function(e,t){let l={behavior:"auto",ref:{nav:t.querySelector("[data-lib-ns-nav]"),select:t.querySelectorAll("[data-lib-ns-nav-item]"),progress:t.querySelector("[data-lib-ns-progress]"),counterMin:t.querySelector('[data-lib-ns-counter="min"]'),counterMax:t.querySelector('[data-lib-ns-counter="max"]'),prev:t.querySelector("[data-lib-ns-prev]"),next:t.querySelector("[data-lib-ns-next]")}};if(!e.classList.contains("is-fade")){l.behavior="smooth";let t=()=>{l.isDown=!1,l.paused=!1,e.classList.remove("is-grabbing"),e.scrollLeft=e.scrollLeft-1};e.addEventListener("mouseleave",t),e.addEventListener("mouseup",t),e.addEventListener("mousedown",(t=>{l.isDown=!0,l.startX=t.pageX-e.offsetLeft,l.scrollLeft=e.scrollLeft,l.paused=!0})),e.addEventListener("mousemove",(t=>{if(!l.isDown)return;t.preventDefault();const r=1.25*(t.pageX-e.offsetLeft-l.startX);e.classList.add("is-grabbing"),e.scrollLeft=l.scrollLeft-r,e.ondragstart=e=>{e.preventDefault()}}))}null!==l.ref.counterMax&&(console.log(e.scrollWidth,e.children[0].clientWidth),l.counterMax=parseInt(((e.scrollWidth-e.clientWidth)/e.children[0].clientWidth+1).toFixed(0)),l.ref.counterMax.textContent=l.counterMax),null!==l.ref.nav&&(l.ref.nav.insertAdjacentHTML("beforeend",[...Array(l.counterMax)].map(((e,t)=>`<div data-state="${0===t&&"active"}" aria-label="${t+1}" aria-current="step" data-lib-ns-nav-item="${t}"></div>`)).join("")),l.ref.select=t.querySelectorAll("[data-lib-ns-nav-item]")),void 0!==l.ref.select[0]&&l.ref.select.forEach((t=>{t.addEventListener("click",(()=>{if(!t._hasDataValue("state","active")){let r=e.scrollLeft/e.children[0].clientWidth,a=t.dataset.libNsNavItem;r-a<=0?e.scroll({left:e.scrollLeft+e.children[0].clientWidth*(a-r),behavior:l.behavior}):e.scroll({left:e.scrollLeft-e.children[0].clientWidth*(r-a),behavior:l.behavior})}}))})),e.addEventListener("scroll",(()=>{null!==l.ref.progress&&(l.ref.progress.value=((e.scrollLeft+e.clientWidth)/e.scrollWidth*100).toFixed(2));let t=parseInt((e.scrollLeft/e.children[0].clientWidth+1).toFixed(0));null!==l.ref.counterMin&&(l.ref.counterMin.textContent=t),void 0!==l.ref.select[0]&&(l.ref.select.forEach((e=>e._removeDataValue("state","active"))),l.ref.select[t-1]._addDataValue("state","active")),Math.floor(e.scrollLeft/e.children[0].clientWidth)===e.scrollLeft/e.children[0].clientWidth&&[...e.children].forEach(((t,l)=>{t._removeDataValue("state","active"),e.scrollLeft===t.offsetLeft-t.parentNode.offsetLeft&&t._addDataValue("state","active")}))}),{passive:!0}),null!==l.ref.progress&&l.ref.progress.addEventListener("click",(t=>{e.scrollLeft=e.scrollWidth/100*(t.clientX-t.target.offsetLeft)/t.target.clientWidth*100})),null!==l.ref.prev&&null!==l.ref.next&&(l.ref.prev.addEventListener("click",(()=>e.scroll({left:e.scrollLeft-e.children[0].clientWidth,behavior:l.behavior}))),l.ref.next.addEventListener("click",(()=>e.scroll({left:e.scrollLeft+e.children[0].clientWidth,behavior:l.behavior})))),[l.ref.prev,l.ref.next,...l.ref.select,l.ref.progress].map((e=>{null!=e&&(e.addEventListener("mouseenter",(()=>l.paused=!0)),e.addEventListener("mouseleave",(()=>l.paused=!1)))})),isNaN(parseInt(e.getAttribute("data-lib-ns")))||setInterval((()=>{l.paused||(e.scrollLeft<=e.children[0].clientWidth?e.scroll({left:e.scrollLeft+e.children[0].clientWidth,behavior:l.behavior}):e.scroll({left:0,behavior:l.behavior}))}),parseInt(e.getAttribute("data-lib-ns")))}(e.querySelector("[data-lib-ns]"),e)}))}));
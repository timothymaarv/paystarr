/*! For license information please see main.a30a686fede2b3361fbb.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/classes/Page.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./node_modules/lodash/lodash.js");class o{constructor({element:e,elements:t,id:r}){this.selector=e,this.selectorChildren={...t},this.id=r}create(){this.element=document.querySelector(this.selector),this.elements={},(0,s.each)(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}destroy(){this.removeEventListeners()}}},"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");class l extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=1,r=0;setInterval((()=>{r+=1,console.log(r),100===r&&(t=t%e.length()+1,console.log(t))}),1e3),(0,o.each)(this.selectorChildren.slides,((e,r)=>{const s=e.querySelector(".slide__title").textContent,o=(e.querySelector(".slide__text"),e.querySelector(".slide__image"),e.querySelector(".progress"));console.log(s),r===t&&(console.log(r),console.log(t),console.log(o))}))}}}},(function(e){e.h=()=>"be7a9760e877d3d14f72"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vcGF5c3RhcnIvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcbiAgICB9O1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChjaGlsZCwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGNoaWxkIGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gY2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNoaWxkKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSBcImNsYXNzZXMvUGFnZS5qc1wiO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDogXCJob21lXCIsXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBmZWF0dXJlSXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVhdHVyZV9faXRlbVwiKSxcbiAgICAgICAgc2xpZGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mZWF0dXJlc1wiLCB7XG4gICAgICAgIGJvcmRlclJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcmVtIDEuOHJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX193cmFwcGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXG4gICAgfSk7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgICAvLyAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAvLyAgIH0pO1xuXG4gICAgICAvLyAgIGlmICh0aXRsZSA9PT0gXCJTZW5kXCIpIHtcbiAgICAgIC8vICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAvLyAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvb3RlckFuaW1hdGlvbnMoKSB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZm9vdGVyXCIsIHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwiYm90dG9tIDcwJVwiLFxuICAgICAgdHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5mb290ZXJcIixcbiAgICAgIGVuZDogXCJib3R0b20gMTAwJVwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2xpZGVBbmltYXRpb25zKCkge1xuICAgIGNvbnN0IHNsaWRlclRpdGxlcyA9IFtcbiAgICAgIFwiU2VjdXJlIEN1cnJlbmN5IEV4Y2hhbmdlXCIsXG4gICAgICBcIkZhc3QgUGF5bWVudCBQcm9jZXNzaW5nXCIsXG4gICAgICBcIk11bHRpcGxlIFBheW1lbnQgT3B0aW9uc1wiLFxuICAgIF07XG4gICAgbGV0IGFjdGl2ZSA9IDE7XG4gICAgbGV0IHBlcmNlbnQgPSAwO1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgcGVyY2VudCArPSAxO1xuICAgICAgY29uc29sZS5sb2cocGVyY2VudCk7XG5cbiAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgYWN0aXZlID0gKGFjdGl2ZSAlIHNsaWRlclRpdGxlcy5sZW5ndGgoKSkgKyAxO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uc2xpZGVzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190ZXh0XCIpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX2ltYWdlXCIpO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIik7XG5cbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XG5cbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUuXG4gICAgICB9XG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJlN2E5NzYwZTg3N2QzZDE0ZjcyXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVhY2giLCJjaGlsZCIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiSG9tZSIsInN1cGVyIiwiZmVhdHVyZUl0ZW1zIiwic2xpZGVzIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiaXRlbSIsInRleHRDb250ZW50IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwidGl0bGUiLCJwcm9ncmVzcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
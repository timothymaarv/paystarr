/*! For license information please see main.438f385a231321cf1fc9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./app/classes/Page.js"),i=r("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.mobile=window.innerWidth<=768,this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){const e=document.querySelector(".features");gsap.set(e,{borderRadius:"0rem",margin:"0rem"}),gsap.registerPlugin("ScrollTrigger"),this.mobile?gsap.set(e,{borderRadius:"0rem",margin:"0rem"}):ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,i.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,i.each)(this.selectorChildren.slides,((s,i)=>{s.querySelector(".slide__title").textContent;const o=s.querySelector(".slide__title"),a=s.querySelector(".slide__text"),l=s.querySelector(".slide__image"),n=s.querySelector(".progress"),d=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),i===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),o.style.opacity=1,a.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",l.style.display="block",l.style.zIndex=10,d.appendChild(n)):(gsap.set(n,{display:"none"}),o.style.opacity=.4,a.style.opacity=.4,gsap.to(l,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=i,r=0}))}))}onResize(){window.innerWidth<=768?(this.mobile=!0,console.log("mobile view"),this.featureAnimations()):(this.mobile=!1,this.featureAnimations())}}}},(function(e){e.h=()=>"41119e1f9750ab0d7adb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBTVEsTUFBTUUsUUFBVSxRQUV0QlYsRUFBTVEsTUFBTUksT0FBUyxHQUNyQlYsRUFBSVcsWUFBWVosS0FJaEJoQyxLQUFLQyxJQUFJK0IsRUFBVSxDQUNqQlMsUUFBUyxTQUtYWixFQUFhVSxNQUFNQyxRQUFVLEdBQzdCVixFQUFLUyxNQUFNQyxRQUFVLEdBR3JCeEMsS0FBS08sR0FBR3dCLEVBQU8sQ0FDYlUsUUFBUyxPQUNURSxPQUFRLElBckNWLEdBQ0MsS0FFSDVCLEVBQUt6QixpQkFBaUIsU0FBUyxLQUM3Qm9DLEVBQVNFLEVBQ1RELEVBQVUsQ0FBQyxHQWtDYixHQU1KLENBRUFwQyxXQUNpQlAsT0FBT0MsWUFBYyxLQUdsQ0gsS0FBS0MsUUFBUyxFQUNkOEQsUUFBUUMsSUFBSSxlQUNaaEUsS0FBS0ssc0JBRUxMLEtBQUtDLFFBQVMsRUFDZEQsS0FBS0ssb0JBRVQsa0JDaE9GNEQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVzXCIpO1xuXG4gICAgZ3NhcC5zZXQoZmVhdHVyZXMsIHtcbiAgICAgIGJvcmRlclJhZGl1czogXCIwcmVtXCIsXG4gICAgICBtYXJnaW46IFwiMHJlbVwiLFxuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIGlmICghdGhpcy5tb2JpbGUpIHtcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZlYXR1cmVzXCIsIHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwcmVtIDEuOHJlbVwiLFxuICAgICAgICB9KSxcbiAgICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9fd3JhcHBlclwiLFxuICAgICAgICBlbmRUcmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnc2FwLnNldChmZWF0dXJlcywge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMHJlbVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcblxuICAgICAgaWYgKHRpdGxlID09PSBcIkNvbXBsaWFuY2VcIikge1xuICAgICAgICBwbGF5ZXIuc2VlayhcIjYwJVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpdGxlID09PSBcIlN1cHBvcnRcIikge1xuICAgICAgICBwbGF5ZXIuc2VlayhcIjEwMCVcIik7XG4gICAgICAgIHBsYXllci5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5zdG9wKCk7XG5cbiAgICAgIC8vIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAvLyBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aXRsZSk7XG5cbiAgICAgIC8vICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIC8vICAgfSk7XG5cbiAgICAgIC8vICAgaWYgKHRpdGxlID09PSBcIlNlbmRcIikge1xuICAgICAgLy8gICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG4gICAgICAvLyAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIC8vICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9vdGVyQW5pbWF0aW9ucygpIHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mb290ZXJcIiwge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJib3R0b20gNzAlXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLmZvb3RlclwiLFxuICAgICAgZW5kOiBcImJvdHRvbSAxMDAlXCIsXG4gICAgfSk7XG4gIH1cblxuICBzbGlkZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3Qgc2xpZGVyVGl0bGVzID0gW1xuICAgICAgXCJTZWN1cmUgQ3VycmVuY3kgRXhjaGFuZ2VcIixcbiAgICAgIFwiRmFzdCBQYXltZW50IFByb2Nlc3NpbmdcIixcbiAgICAgIFwiTXVsdGlwbGUgUGF5bWVudCBPcHRpb25zXCIsXG4gICAgXTtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgcGVyY2VudCA9IDA7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5zbGlkZXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpO1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGV4dFwiKTtcblxuICAgICAgY29uc3QgaW1hZ2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX2ltYWdlXCIpO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIik7XG4gICAgICBjb25zdCBiYXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYmFyXCIpO1xuXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGRvY3VtZW50LmNsb25lTm9kZShwcm9ncmVzcyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBhY3RpdmUgPVxuICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgPyAoYWN0aXZlICUgc2xpZGVyVGl0bGVzLmxlbmd0aCkgKyAxXG4gICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT2ZmKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1MCk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWN0aXZlID0gaW5kZXg7XG4gICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT24oKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgd2lkdGg6IGAke3BlcmNlbnR9JWAsXG4gICAgICAgICAgZWFzZTogXCJFeHBvLmVhc2VJbk91dFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJCODZGOVwiO1xuICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XG4gICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBiYXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09mZigpIHtcbiAgICAgICAgZ3NhcC5zZXQocHJvZ3Jlc3MsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS56SW5kZXggPSAxO1xuICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgZ3NhcC50byhpbWFnZSwge1xuICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgLy8gY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIC8vIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGNvbnN0IG1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcblxuICAgIGlmIChtb2JpbGUpIHtcbiAgICAgIHRoaXMubW9iaWxlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlIHZpZXdcIik7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MTExOWUxZjk3NTBhYjBkN2FkYlwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJtb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwiY3JlYXRlIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZmVhdHVyZXMiLCJxdWVyeVNlbGVjdG9yIiwiZ3NhcCIsInNldCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiZWFjaCIsInNlbGVjdG9yQ2hpbGRyZW4iLCJpdGVtIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInBsYXllciIsInNlZWsiLCJzdG9wIiwicGxheSIsInBhdXNlIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwidGl0bGVXcmFwcGVyIiwidGV4dCIsImltYWdlIiwicHJvZ3Jlc3MiLCJiYXIiLCJjbG9uZU5vZGUiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsIndpZHRoIiwiZWFzZSIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
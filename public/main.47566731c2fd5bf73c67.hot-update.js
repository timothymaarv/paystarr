/*! For license information please see main.47566731c2fd5bf73c67.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");const i=window.innerWidth<1024;class l extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),window.addEventListener("resize",(()=>{onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),!window.mobileCheck&&ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent;const i=s.querySelector(".slide__title"),l=s.querySelector(".slide__text"),a=s.querySelector(".slide__image"),n=s.querySelector(".progress"),c=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),i.style.opacity=1,l.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",a.style.display="block",a.style.zIndex=10,c.appendChild(n)):(gsap.set(n,{display:"none"}),i.style.opacity=.4,l.style.opacity=.4,gsap.to(a,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=o,r=0}))}))}onResize(){console.log(i)}}}},(function(e){e.h=()=>"d556bb306e035c9b882e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdyQjFDLEtBQUtLLEdBQUcyQixFQUFPLENBQ2JXLFFBQVMsT0FDVEUsT0FBUSxJQXJDVixHQUNDLEtBRUg5QixFQUFLdkIsaUJBQWlCLFNBQVMsS0FDN0JtQyxFQUFTRSxFQUNURCxFQUFVLENBQUMsR0FrQ2IsR0FNSixDQUVBbkMsV0FDRXNELFFBQVFDLElBQUkzRSxFQUNkLGtCQzFNRjRFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXlzdGFyci8uL2FwcC9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL3BheXN0YXJyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY2xhc3Nlcy9QYWdlLmpzXCI7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5jb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgb25SZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcbiAgfVxuXG4gIHNjcm9sbCgpIHtcbiAgICBidXR0ZXIuaW5pdCh7XG4gICAgICB3cmFwcGVySWQ6IFwiYnV0dGVyXCIsXG4gICAgICBjYW5jZWxPblRvdWNoOiBmYWxzZSxcbiAgICAgIHdyYXBwZXJEYW1wZXI6IDAuMDgsXG4gICAgfSk7XG4gIH1cblxuICBmZWF0dXJlQW5pbWF0aW9ucygpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zKTtcblxuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgIXdpbmRvdy5tb2JpbGVDaGVjayAmJlxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjByZW0gMS44cmVtXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX193cmFwcGVyXCIsXG4gICAgICAgIGVuZFRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgICAgfSk7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuXG4gICAgICBpZiAodGl0bGUgPT09IFwiQ29tcGxpYW5jZVwiKSB7XG4gICAgICAgIHBsYXllci5zZWVrKFwiNjAlXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGl0bGUgPT09IFwiU3VwcG9ydFwiKSB7XG4gICAgICAgIHBsYXllci5zZWVrKFwiMTAwJVwiKTtcbiAgICAgICAgcGxheWVyLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLnN0b3AoKTtcblxuICAgICAgLy8gcGxheWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIC8vIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgLy8gICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gICB9KTtcblxuICAgICAgLy8gICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAvLyAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcbiAgICAgIC8vICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgLy8gICB9XG4gICAgfSk7XG4gIH1cblxuICBmb290ZXJBbmltYXRpb25zKCkge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZvb3RlclwiLCB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI2cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcImJvdHRvbSA3MCVcIixcbiAgICAgIHRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuZm9vdGVyXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIDEwMCVcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBzbGlkZXJUaXRsZXMgPSBbXG4gICAgICBcIlNlY3VyZSBDdXJyZW5jeSBFeGNoYW5nZVwiLFxuICAgICAgXCJGYXN0IFBheW1lbnQgUHJvY2Vzc2luZ1wiLFxuICAgICAgXCJNdWx0aXBsZSBQYXltZW50IE9wdGlvbnNcIixcbiAgICBdO1xuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCBwZXJjZW50ID0gMDtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLnNsaWRlcywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190ZXh0XCIpO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9faW1hZ2VcIik7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKTtcbiAgICAgIGNvbnN0IGJhciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5iYXJcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gZG9jdW1lbnQuY2xvbmVOb2RlKHByb2dyZXNzKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG5cbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBwZXJjZW50ICs9IDE7XG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgICAgIGFjdGl2ZSA9XG4gICAgICAgICAgICBhY3RpdmUgPCBzbGlkZXJUaXRsZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICA/IChhY3RpdmUgJSBzbGlkZXJUaXRsZXMubGVuZ3RoKSArIDFcbiAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmUpIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPZmYoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTUwKTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhY3RpdmUgPSBpbmRleDtcbiAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPbigpIHtcbiAgICAgICAgZ3NhcC5zZXQocHJvZ3Jlc3MsIHtcbiAgICAgICAgICB3aWR0aDogYCR7cGVyY2VudH0lYCxcbiAgICAgICAgICBlYXNlOiBcIkV4cG8uZWFzZUluT3V0XCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMkI4NkY5XCI7XG4gICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGJhci5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT2ZmKCkge1xuICAgICAgICBnc2FwLnNldChwcm9ncmVzcywge1xuICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAvLyBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgLy8gY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgY29uc29sZS5sb2cobW9iaWxlKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDU1NmJiMzA2ZTAzNWM5Yjg4MmVcIikiXSwibmFtZXMiOlsibW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIkhvbWUiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZmVhdHVyZUl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzIiwidGhpcyIsInNjcm9sbCIsImZlYXR1cmVBbmltYXRpb25zIiwic2xpZGVBbmltYXRpb25zIiwiZm9vdGVyQW5pbWF0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsImNyZWF0ZSIsImJ1dHRlciIsImluaXQiLCJ3cmFwcGVySWQiLCJjYW5jZWxPblRvdWNoIiwid3JhcHBlckRhbXBlciIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIm1vYmlsZUNoZWNrIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiZWFjaCIsInNlbGVjdG9yQ2hpbGRyZW4iLCJpdGVtIiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJwbGF5ZXIiLCJzZWVrIiwic3RvcCIsInBsYXkiLCJwYXVzZSIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInNsaWRlclRpdGxlcyIsImFjdGl2ZSIsInBlcmNlbnQiLCJpbmRleCIsInRpdGxlV3JhcHBlciIsInRleHQiLCJpbWFnZSIsInByb2dyZXNzIiwiYmFyIiwiY2xvbmVOb2RlIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZXQiLCJ3aWR0aCIsImVhc2UiLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9
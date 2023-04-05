/*! For license information please see main.438309743bd152e8553f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./app/classes/Page.js"),i=r("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),this.mobile=window.innerWidth<=768,window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){if(gsap.registerPlugin("ScrollTrigger"),this.mobile){const e=document.querySelector(".features");gsap.set(e,{borderRadius:"0rem",margin:"0rem"})}else ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"});(0,i.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,i.each)(this.selectorChildren.slides,((s,i)=>{s.querySelector(".slide__title").textContent;const o=s.querySelector(".slide__title"),a=s.querySelector(".slide__text"),l=s.querySelector(".slide__image"),n=s.querySelector(".progress"),d=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),i===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),o.style.opacity=1,a.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",l.style.display="block",l.style.zIndex=10,d.appendChild(n)):(gsap.set(n,{display:"none"}),o.style.opacity=.4,a.style.opacity=.4,gsap.to(l,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=i,r=0}))}))}onResize(){window.innerWidth<=768?(this.mobile=!0,this.featureAnimations()):(this.mobile=!1,this.featureAnimations())}}}},(function(e){e.h=()=>"71403a5f2ca3af5fd8a4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckJWLEVBQUlXLFlBQVlaLEtBSWhCbEMsS0FBS0ksSUFBSThCLEVBQVUsQ0FDakJTLFFBQVMsU0FLWFosRUFBYVUsTUFBTUMsUUFBVSxHQUM3QlYsRUFBS1MsTUFBTUMsUUFBVSxHQUdyQjFDLEtBQUtTLEdBQUd3QixFQUFPLENBQ2JVLFFBQVMsT0FDVEUsT0FBUSxJQXJDVixHQUNDLEtBRUg1QixFQUFLekIsaUJBQWlCLFNBQVMsS0FDN0JvQyxFQUFTRSxFQUNURCxFQUFVLENBQUMsR0FrQ2IsR0FNSixDQUVBcEMsV0FDaUJILE9BQU9DLFlBQWMsS0FHbENQLEtBQUtLLFFBQVMsRUFDZEwsS0FBS0Usc0JBRUxGLEtBQUtLLFFBQVMsRUFDZEwsS0FBS0Usb0JBRVQsa0JDek5GNkQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuICAgIHRoaXMubW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGJ1dHRlci5pbml0KHtcbiAgICAgIHdyYXBwZXJJZDogXCJidXR0ZXJcIixcbiAgICAgIGNhbmNlbE9uVG91Y2g6IGZhbHNlLFxuICAgICAgd3JhcHBlckRhbXBlcjogMC4wOCxcbiAgICB9KTtcbiAgfVxuXG4gIGZlYXR1cmVBbmltYXRpb25zKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMpO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBpZiAodGhpcy5tb2JpbGUpIHtcbiAgICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlc1wiKTtcblxuICAgICAgZ3NhcC5zZXQoZmVhdHVyZXMsIHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjByZW1cIixcbiAgICAgICAgbWFyZ2luOiBcIjByZW1cIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mZWF0dXJlc1wiLCB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgICAgfSksXG4gICAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmZlYXR1cmVfX3dyYXBwZXJcIixcbiAgICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuXG4gICAgICBpZiAodGl0bGUgPT09IFwiQ29tcGxpYW5jZVwiKSB7XG4gICAgICAgIHBsYXllci5zZWVrKFwiNjAlXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGl0bGUgPT09IFwiU3VwcG9ydFwiKSB7XG4gICAgICAgIHBsYXllci5zZWVrKFwiMTAwJVwiKTtcbiAgICAgICAgcGxheWVyLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLnN0b3AoKTtcblxuICAgICAgLy8gcGxheWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIC8vIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgLy8gICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gICB9KTtcblxuICAgICAgLy8gICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAvLyAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcbiAgICAgIC8vICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgLy8gICB9XG4gICAgfSk7XG4gIH1cblxuICBmb290ZXJBbmltYXRpb25zKCkge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZvb3RlclwiLCB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI2cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcImJvdHRvbSA3MCVcIixcbiAgICAgIHRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuZm9vdGVyXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIDEwMCVcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBzbGlkZXJUaXRsZXMgPSBbXG4gICAgICBcIlNlY3VyZSBDdXJyZW5jeSBFeGNoYW5nZVwiLFxuICAgICAgXCJGYXN0IFBheW1lbnQgUHJvY2Vzc2luZ1wiLFxuICAgICAgXCJNdWx0aXBsZSBQYXltZW50IE9wdGlvbnNcIixcbiAgICBdO1xuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCBwZXJjZW50ID0gMDtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLnNsaWRlcywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190ZXh0XCIpO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9faW1hZ2VcIik7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKTtcbiAgICAgIGNvbnN0IGJhciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5iYXJcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gZG9jdW1lbnQuY2xvbmVOb2RlKHByb2dyZXNzKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG5cbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBwZXJjZW50ICs9IDE7XG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgICAgIGFjdGl2ZSA9XG4gICAgICAgICAgICBhY3RpdmUgPCBzbGlkZXJUaXRsZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICA/IChhY3RpdmUgJSBzbGlkZXJUaXRsZXMubGVuZ3RoKSArIDFcbiAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmUpIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPZmYoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTUwKTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhY3RpdmUgPSBpbmRleDtcbiAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPbigpIHtcbiAgICAgICAgZ3NhcC5zZXQocHJvZ3Jlc3MsIHtcbiAgICAgICAgICB3aWR0aDogYCR7cGVyY2VudH0lYCxcbiAgICAgICAgICBlYXNlOiBcIkV4cG8uZWFzZUluT3V0XCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMkI4NkY5XCI7XG4gICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGJhci5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT2ZmKCkge1xuICAgICAgICBnc2FwLnNldChwcm9ncmVzcywge1xuICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAvLyBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgLy8gY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgY29uc3QgbW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4O1xuXG4gICAgaWYgKG1vYmlsZSkge1xuICAgICAgdGhpcy5tb2JpbGUgPSB0cnVlO1xuICAgICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vYmlsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzE0MDNhNWYyY2EzYWY1ZmQ4YTRcIikiXSwibmFtZXMiOlsiSG9tZSIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJmZWF0dXJlSXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzbGlkZXMiLCJ0aGlzIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwibW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsImNyZWF0ZSIsImJ1dHRlciIsImluaXQiLCJ3cmFwcGVySWQiLCJjYW5jZWxPblRvdWNoIiwid3JhcHBlckRhbXBlciIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsImZlYXR1cmVzIiwicXVlcnlTZWxlY3RvciIsInNldCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIlNjcm9sbFRyaWdnZXIiLCJhbmltYXRpb24iLCJ0byIsInNjcnViIiwic3RhcnQiLCJ0cmlnZ2VyIiwiZW5kVHJpZ2dlciIsImVuZCIsImVhY2giLCJzZWxlY3RvckNoaWxkcmVuIiwiaXRlbSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwbGF5ZXIiLCJzZWVrIiwic3RvcCIsInBsYXkiLCJwYXVzZSIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInNsaWRlclRpdGxlcyIsImFjdGl2ZSIsInBlcmNlbnQiLCJpbmRleCIsInRpdGxlV3JhcHBlciIsInRleHQiLCJpbWFnZSIsInByb2dyZXNzIiwiYmFyIiwiY2xvbmVOb2RlIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJ3aWR0aCIsImVhc2UiLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiYXBwZW5kQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
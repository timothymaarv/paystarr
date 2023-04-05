/*! For license information please see main.d580fda2dcd831c766ef.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./app/classes/Page.js"),i=r("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),this.mobile=window.innerWidth<=768,window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){this.mobile||(gsap.registerPlugin("ScrollTrigger"),!window.mobileCheck&&ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,i.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))})))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,i.each)(this.selectorChildren.slides,((s,i)=>{s.querySelector(".slide__title").textContent;const o=s.querySelector(".slide__title"),l=s.querySelector(".slide__text"),a=s.querySelector(".slide__image"),n=s.querySelector(".progress"),d=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),i===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),o.style.opacity=1,l.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",a.style.display="block",a.style.zIndex=10,d.appendChild(n)):(gsap.set(n,{display:"none"}),o.style.opacity=.4,l.style.opacity=.4,gsap.to(a,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=i,r=0}))}))}onResize(){window.innerWidth<=768?(this.mobile=!0,this.featureAnimations()):(this.mobile=!1,this.featureAnimations())}}}},(function(e){e.h=()=>"bf8de821d1e0b4f26a80"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBS1UsTUFBTUMsUUFBVSxHQUdyQjFDLEtBQUtLLEdBQUcyQixFQUFPLENBQ2JXLFFBQVMsT0FDVEUsT0FBUSxJQXJDVixHQUNDLEtBRUg5QixFQUFLdkIsaUJBQWlCLFNBQVMsS0FDN0JtQyxFQUFTRSxFQUNURCxFQUFVLENBQUMsR0FrQ2IsR0FNSixDQUVBbkMsV0FDaUJILE9BQU9DLFlBQWMsS0FHbENQLEtBQUtLLFFBQVMsRUFDZEwsS0FBS0Usc0JBRUxGLEtBQUtLLFFBQVMsRUFDZEwsS0FBS0Usb0JBRVQsa0JDbE5GNkQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuICAgIHRoaXMubW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGJ1dHRlci5pbml0KHtcbiAgICAgIHdyYXBwZXJJZDogXCJidXR0ZXJcIixcbiAgICAgIGNhbmNlbE9uVG91Y2g6IGZhbHNlLFxuICAgICAgd3JhcHBlckRhbXBlcjogMC4wOCxcbiAgICB9KTtcbiAgfVxuXG4gIGZlYXR1cmVBbmltYXRpb25zKCkge1xuICAgIGlmICh0aGlzLm1vYmlsZSkgcmV0dXJuO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMpO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICAhd2luZG93Lm1vYmlsZUNoZWNrICYmXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mZWF0dXJlc1wiLCB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgICAgfSksXG4gICAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmZlYXR1cmVfX3dyYXBwZXJcIixcbiAgICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXG4gICAgICB9KTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG5cbiAgICAgIGlmICh0aXRsZSA9PT0gXCJDb21wbGlhbmNlXCIpIHtcbiAgICAgICAgcGxheWVyLnNlZWsoXCI2MCVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aXRsZSA9PT0gXCJTdXBwb3J0XCIpIHtcbiAgICAgICAgcGxheWVyLnNlZWsoXCIxMDAlXCIpO1xuICAgICAgICBwbGF5ZXIuc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuc3RvcCgpO1xuXG4gICAgICAvLyBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgLy8gcGxheWVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgICAvLyAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAvLyAgIH0pO1xuXG4gICAgICAvLyAgIGlmICh0aXRsZSA9PT0gXCJTZW5kXCIpIHtcbiAgICAgIC8vICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAvLyAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvb3RlckFuaW1hdGlvbnMoKSB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZm9vdGVyXCIsIHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwiYm90dG9tIDcwJVwiLFxuICAgICAgdHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5mb290ZXJcIixcbiAgICAgIGVuZDogXCJib3R0b20gMTAwJVwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2xpZGVBbmltYXRpb25zKCkge1xuICAgIGNvbnN0IHNsaWRlclRpdGxlcyA9IFtcbiAgICAgIFwiU2VjdXJlIEN1cnJlbmN5IEV4Y2hhbmdlXCIsXG4gICAgICBcIkZhc3QgUGF5bWVudCBQcm9jZXNzaW5nXCIsXG4gICAgICBcIk11bHRpcGxlIFBheW1lbnQgT3B0aW9uc1wiLFxuICAgIF07XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IHBlcmNlbnQgPSAwO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uc2xpZGVzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RleHRcIik7XG5cbiAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX19pbWFnZVwiKTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpO1xuICAgICAgY29uc3QgYmFyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJhclwiKTtcblxuICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBkb2N1bWVudC5jbG9uZU5vZGUocHJvZ3Jlc3MpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHBlcmNlbnQgKz0gMTtcblxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICAgICAgYWN0aXZlID1cbiAgICAgICAgICAgIGFjdGl2ZSA8IHNsaWRlclRpdGxlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgID8gKGFjdGl2ZSAlIHNsaWRlclRpdGxlcy5sZW5ndGgpICsgMVxuICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09mZigpO1xuICAgICAgICB9XG4gICAgICB9LCAxNTApO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IGluZGV4O1xuICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09uKCkge1xuICAgICAgICBnc2FwLnNldChwcm9ncmVzcywge1xuICAgICAgICAgIHdpZHRoOiBgJHtwZXJjZW50fSVgLFxuICAgICAgICAgIGVhc2U6IFwiRXhwby5lYXNlSW5PdXRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyQjg2RjlcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICBpbWFnZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPZmYoKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBjb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG5cbiAgICBpZiAobW9iaWxlKSB7XG4gICAgICB0aGlzLm1vYmlsZSA9IHRydWU7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZjhkZTgyMWQxZTBiNGYyNmE4MFwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsInNsaWRlQW5pbWF0aW9ucyIsImZvb3RlckFuaW1hdGlvbnMiLCJtb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwiY3JlYXRlIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwibW9iaWxlQ2hlY2siLCJTY3JvbGxUcmlnZ2VyIiwiYW5pbWF0aW9uIiwidG8iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJzY3J1YiIsInN0YXJ0IiwidHJpZ2dlciIsImVuZFRyaWdnZXIiLCJlbmQiLCJlYWNoIiwic2VsZWN0b3JDaGlsZHJlbiIsIml0ZW0iLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInBsYXllciIsInNlZWsiLCJzdG9wIiwicGxheSIsInBhdXNlIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwidGl0bGVXcmFwcGVyIiwidGV4dCIsImltYWdlIiwicHJvZ3Jlc3MiLCJiYXIiLCJjbG9uZU5vZGUiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldCIsIndpZHRoIiwiZWFzZSIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJhcHBlbmRDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
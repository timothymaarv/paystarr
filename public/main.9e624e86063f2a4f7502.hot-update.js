/*! For license information please see main.9e624e86063f2a4f7502.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");class i extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.mobile=window.innerWidth<=768,this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){const e=document.querySelector(".features");e.style.borderRadius=0,e.style.margin=0,console.log("features is",e),gsap.registerPlugin("ScrollTrigger"),this.mobile?(e.style.borderRadius=0,e.style.margin=0):ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent;const i=s.querySelector(".slide__title"),l=s.querySelector(".slide__text"),n=s.querySelector(".slide__image"),a=s.querySelector(".progress"),c=s.querySelector(".bar");document.cloneNode(a),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t?(gsap.set(a,{width:`${r}%`,ease:"Expo.easeInOut"}),i.style.opacity=1,l.style.opacity=1,a.style.display="block",a.style.backgroundColor="#2B86F9",n.style.display="block",n.style.zIndex=10,c.appendChild(a)):(gsap.set(a,{display:"none"}),i.style.opacity=.4,l.style.opacity=.4,gsap.to(n,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=o,r=0}))}))}onResize(){window.innerWidth<=768?(this.mobile=!0,console.log("mobile view"),this.featureAnimations()):(console.log("not mobile view"),this.mobile=!1,this.featureAnimations())}}}},(function(e){e.h=()=>"0ee1cebef49ec3df0519"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsUUFDekJULEVBQVNsQyxNQUFNNEMsZ0JBQWtCLFVBQ2pDWCxFQUFNakMsTUFBTTJDLFFBQVUsUUFFdEJWLEVBQU1qQyxNQUFNNkMsT0FBUyxHQUNyQlYsRUFBSVcsWUFBWVosS0FJaEI3QixLQUFLa0MsSUFBSUwsRUFBVSxDQUNqQlMsUUFBUyxTQUtYWixFQUFhL0IsTUFBTTBDLFFBQVUsR0FDN0JWLEVBQUtoQyxNQUFNMEMsUUFBVSxHQUdyQnJDLEtBQUtJLEdBQUd3QixFQUFPLENBQ2JVLFFBQVMsT0FDVEUsT0FBUSxJQXJDVixHQUNDLEtBRUg1QixFQUFLM0IsaUJBQWlCLFNBQVMsS0FDN0JzQyxFQUFTRSxFQUNURCxFQUFVLENBQUMsR0FrQ2IsR0FNSixDQUVBdEMsV0FDaUJQLE9BQU9DLFlBQWMsS0FHbENILEtBQUtDLFFBQVMsRUFDZG9CLFFBQVFDLElBQUksZUFDWnRCLEtBQUtLLHNCQUVMZ0IsUUFBUUMsSUFBSSxtQkFDWnRCLEtBQUtDLFFBQVMsRUFDZEQsS0FBS0ssb0JBRVQsa0JDcE9GNEQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVzXCIpO1xuXG4gICAgLy8gZ3NhcC5zZXQoZmVhdHVyZXMsIHtcbiAgICAvLyAgIGJvcmRlclJhZGl1czogXCIwcmVtXCIsXG4gICAgLy8gICBtYXJnaW46IFwiMHJlbVwiLFxuICAgIC8vIH0pO1xuXG4gICAgZmVhdHVyZXMuc3R5bGUuYm9yZGVyUmFkaXVzID0gMDtcbiAgICBmZWF0dXJlcy5zdHlsZS5tYXJnaW4gPSAwO1xuXG4gICAgY29uc29sZS5sb2coXCJmZWF0dXJlcyBpc1wiLCBmZWF0dXJlcyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zKTtcblxuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgaWYgKCF0aGlzLm1vYmlsZSkge1xuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjByZW0gMS44cmVtXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX193cmFwcGVyXCIsXG4gICAgICAgIGVuZFRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzLnN0eWxlLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICBmZWF0dXJlcy5zdHlsZS5tYXJnaW4gPSAwO1xuICAgIH1cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG5cbiAgICAgIGlmICh0aXRsZSA9PT0gXCJDb21wbGlhbmNlXCIpIHtcbiAgICAgICAgcGxheWVyLnNlZWsoXCI2MCVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aXRsZSA9PT0gXCJTdXBwb3J0XCIpIHtcbiAgICAgICAgcGxheWVyLnNlZWsoXCIxMDAlXCIpO1xuICAgICAgICBwbGF5ZXIuc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuc3RvcCgpO1xuXG4gICAgICAvLyBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgLy8gcGxheWVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgICAvLyAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAvLyAgIH0pO1xuXG4gICAgICAvLyAgIGlmICh0aXRsZSA9PT0gXCJTZW5kXCIpIHtcbiAgICAgIC8vICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAvLyAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvb3RlckFuaW1hdGlvbnMoKSB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZm9vdGVyXCIsIHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwiYm90dG9tIDcwJVwiLFxuICAgICAgdHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5mb290ZXJcIixcbiAgICAgIGVuZDogXCJib3R0b20gMTAwJVwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2xpZGVBbmltYXRpb25zKCkge1xuICAgIGNvbnN0IHNsaWRlclRpdGxlcyA9IFtcbiAgICAgIFwiU2VjdXJlIEN1cnJlbmN5IEV4Y2hhbmdlXCIsXG4gICAgICBcIkZhc3QgUGF5bWVudCBQcm9jZXNzaW5nXCIsXG4gICAgICBcIk11bHRpcGxlIFBheW1lbnQgT3B0aW9uc1wiLFxuICAgIF07XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IHBlcmNlbnQgPSAwO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uc2xpZGVzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RleHRcIik7XG5cbiAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX19pbWFnZVwiKTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpO1xuICAgICAgY29uc3QgYmFyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJhclwiKTtcblxuICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBkb2N1bWVudC5jbG9uZU5vZGUocHJvZ3Jlc3MpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHBlcmNlbnQgKz0gMTtcblxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICAgICAgYWN0aXZlID1cbiAgICAgICAgICAgIGFjdGl2ZSA8IHNsaWRlclRpdGxlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgID8gKGFjdGl2ZSAlIHNsaWRlclRpdGxlcy5sZW5ndGgpICsgMVxuICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09mZigpO1xuICAgICAgICB9XG4gICAgICB9LCAxNTApO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IGluZGV4O1xuICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09uKCkge1xuICAgICAgICBnc2FwLnNldChwcm9ncmVzcywge1xuICAgICAgICAgIHdpZHRoOiBgJHtwZXJjZW50fSVgLFxuICAgICAgICAgIGVhc2U6IFwiRXhwby5lYXNlSW5PdXRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyQjg2RjlcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICBpbWFnZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPZmYoKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBjb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG5cbiAgICBpZiAobW9iaWxlKSB7XG4gICAgICB0aGlzLm1vYmlsZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vYmlsZSB2aWV3XCIpO1xuICAgICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBtb2JpbGUgdmlld1wiKTtcbiAgICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZWUxY2ViZWY0OWVjM2RmMDUxOVwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJtb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwiY3JlYXRlIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZmVhdHVyZXMiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJjb25zb2xlIiwibG9nIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiZWFjaCIsInNlbGVjdG9yQ2hpbGRyZW4iLCJpdGVtIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInBsYXllciIsInNlZWsiLCJzdG9wIiwicGxheSIsInBhdXNlIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwidGl0bGVXcmFwcGVyIiwidGV4dCIsImltYWdlIiwicHJvZ3Jlc3MiLCJiYXIiLCJjbG9uZU5vZGUiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNldCIsIndpZHRoIiwiZWFzZSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiYXBwZW5kQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
/*! For license information please see main.dc149c2bfe50d9d6fb54.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r("./app/classes/Page.js"),s=r("./node_modules/lodash/lodash.js");class i extends o.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,s.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,s.each)(this.selectorChildren.slides,((o,s)=>{o.querySelector(".slide__title").textContent;const i=o.querySelector(".slide__title"),l=o.querySelector(".slide__text"),a=o.querySelector(".slide__image"),n=o.querySelector(".progress"),c=o.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),s===t?(gsap.to(n,{width:`${r}%`}),gsap.to(a,{display:"block",zIndex:10,duration:3}),i.style.opacity=1,l.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",c.appendChild(n)):(n.style.display="none",i.style.opacity=.4,l.style.opacity=.4,gsap.to(a,{display:"none",zIndex:1,duration:3}))}),300);o.addEventListener("click",(()=>{t=s,r=0}))}))}}}},(function(e){e.h=()=>"ddd90662c1c538b631f1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYzE0OWMyYmZlNTBkOWQ2ZmI1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFDTEYsS0FBS0csa0JBQ0xILEtBQUtJLGtCQUNQLENBRUFDLFNBQ0ViLE1BQU1hLFFBQ1IsQ0FFQUosU0FDRUssT0FBT0MsS0FBSyxDQUNWQyxVQUFXLFNBQ1hDLGVBQWUsRUFDZkMsY0FBZSxLQUVuQixDQUVBUixvQkFHRVMsS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsWUFBYSxDQUM5QkMsYUFBYyxPQUNkQyxPQUFRLGdCQUVWQyxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxvQkFDVEMsV0FBWSxVQUNaQyxJQUFLLGFBR1BDLEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCNUIsY0FBZTZCLElBQzFCQSxFQUFLQyxjQUFjLHlCQUF5QkMsWUFDN0NGLEVBQUtDLGNBQWMseUJBQ25CRCxFQUFLQyxjQUFjLGlCQUFpQixHQWFyRCxDQUVBdEIsbUJBQ0VPLEtBQUtDLGVBQWUsaUJBRXBCQyxjQUFjUixPQUFPLENBQ25CUyxVQUFXSCxLQUFLSSxHQUFHLFVBQVcsQ0FDNUJhLG9CQUFxQixPQUNyQkMscUJBQXNCLFNBRXhCWCxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxVQUNUQyxXQUFZLFVBQ1pDLElBQUssZUFFVCxDQUVBbkIsa0JBQ0UsTUFBTTJCLEVBQWUsQ0FDbkIsMkJBQ0EsMEJBQ0EsNEJBRUYsSUFBSUMsRUFBUyxFQUNUQyxFQUFVLEdBRWRULEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCekIsUUFBUSxDQUFDMEIsRUFBTVEsS0FDMUJSLEVBQUtDLGNBQWMsaUJBQWlCQyxZQUFsRCxNQUVNTyxFQUFlVCxFQUFLQyxjQUFjLGlCQUNsQ1MsRUFBT1YsRUFBS0MsY0FBYyxnQkFFMUJVLEVBQVFYLEVBQUtDLGNBQWMsaUJBQzNCVyxFQUFXWixFQUFLQyxjQUFjLGFBQzlCWSxFQUFNYixFQUFLQyxjQUFjLFFBRVg3QixTQUFTMEMsVUFBVUYsR0FJdEJHLGFBQVksS0FDM0JSLEdBQVcsRUFFSyxNQUFaQSxJQUNGRCxFQUNFQSxFQUFTRCxFQUFhVyxPQUFTLEVBQzFCVixFQUFTRCxFQUFhVyxPQUFVLEVBQ2pDLEVBQ05ULEVBQVUsR0FHUkMsSUFBVUYsR0FhZHBCLEtBQUtJLEdBQUdzQixFQUFVLENBQ2hCSyxNQUFRLEdBQUVWLE9BR1pyQixLQUFLSSxHQUFHcUIsRUFBTyxDQUNiTyxRQUFTLFFBQ1RDLE9BQVEsR0FDUkMsU0FBVSxJQUdaWCxFQUFhWSxNQUFNQyxRQUFVLEVBQzdCWixFQUFLVyxNQUFNQyxRQUFVLEVBQ3JCVixFQUFTUyxNQUFNSCxRQUFVLFFBQ3pCTixFQUFTUyxNQUFNRSxnQkFBa0IsVUFJakNWLEVBQUlXLFlBQVlaLEtBSWhCQSxFQUFTUyxNQUFNSCxRQUFVLE9BRXpCVCxFQUFhWSxNQUFNQyxRQUFVLEdBQzdCWixFQUFLVyxNQUFNQyxRQUFVLEdBR3JCcEMsS0FBS0ksR0FBR3FCLEVBQU8sQ0FDYk8sUUFBUyxPQUNUQyxPQUFRLEVBQ1JDLFNBQVUsSUF2Q1osR0FDQyxLQUVIcEIsRUFBS3lCLGlCQUFpQixTQUFTLEtBQzdCbkIsRUFBU0UsRUFDVEQsRUFBVSxDQUFDLEdBb0NiLEdBTUosa0JDMUtGbUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGJ1dHRlci5pbml0KHtcbiAgICAgIHdyYXBwZXJJZDogXCJidXR0ZXJcIixcbiAgICAgIGNhbmNlbE9uVG91Y2g6IGZhbHNlLFxuICAgICAgd3JhcHBlckRhbXBlcjogMC4wOCxcbiAgICB9KTtcbiAgfVxuXG4gIGZlYXR1cmVBbmltYXRpb25zKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMpO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9fd3JhcHBlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgIH0pO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgLy8gICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gICB9KTtcblxuICAgICAgLy8gICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAvLyAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcbiAgICAgIC8vICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgLy8gICB9XG4gICAgfSk7XG4gIH1cblxuICBmb290ZXJBbmltYXRpb25zKCkge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZvb3RlclwiLCB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI2cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcImJvdHRvbSA3MCVcIixcbiAgICAgIHRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuZm9vdGVyXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIDEwMCVcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBzbGlkZXJUaXRsZXMgPSBbXG4gICAgICBcIlNlY3VyZSBDdXJyZW5jeSBFeGNoYW5nZVwiLFxuICAgICAgXCJGYXN0IFBheW1lbnQgUHJvY2Vzc2luZ1wiLFxuICAgICAgXCJNdWx0aXBsZSBQYXltZW50IE9wdGlvbnNcIixcbiAgICBdO1xuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCBwZXJjZW50ID0gMDtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLnNsaWRlcywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190ZXh0XCIpO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9faW1hZ2VcIik7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKTtcbiAgICAgIGNvbnN0IGJhciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5iYXJcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gZG9jdW1lbnQuY2xvbmVOb2RlKHByb2dyZXNzKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG5cbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBwZXJjZW50ICs9IDE7XG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgICAgIGFjdGl2ZSA9XG4gICAgICAgICAgICBhY3RpdmUgPCBzbGlkZXJUaXRsZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICA/IChhY3RpdmUgJSBzbGlkZXJUaXRsZXMubGVuZ3RoKSArIDFcbiAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmUpIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPZmYoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwKTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhY3RpdmUgPSBpbmRleDtcbiAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPbigpIHtcbiAgICAgICAgZ3NhcC50byhwcm9ncmVzcywge1xuICAgICAgICAgIHdpZHRoOiBgJHtwZXJjZW50fSVgLFxuICAgICAgICB9KTtcblxuICAgICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgIHpJbmRleDogMTAsXG4gICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMkI4NkY5XCI7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIGJhci5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT2ZmKCkge1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIC8vIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAvLyBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgLy8gY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZGQ5MDY2MmMxYzUzOGI2MzFmMVwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsInNsaWRlQW5pbWF0aW9ucyIsImZvb3RlckFuaW1hdGlvbnMiLCJjcmVhdGUiLCJidXR0ZXIiLCJpbml0Iiwid3JhcHBlcklkIiwiY2FuY2VsT25Ub3VjaCIsIndyYXBwZXJEYW1wZXIiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiYW5pbWF0aW9uIiwidG8iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJzY3J1YiIsInN0YXJ0IiwidHJpZ2dlciIsImVuZFRyaWdnZXIiLCJlbmQiLCJlYWNoIiwic2VsZWN0b3JDaGlsZHJlbiIsIml0ZW0iLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJzbGlkZXJUaXRsZXMiLCJhY3RpdmUiLCJwZXJjZW50IiwiaW5kZXgiLCJ0aXRsZVdyYXBwZXIiLCJ0ZXh0IiwiaW1hZ2UiLCJwcm9ncmVzcyIsImJhciIsImNsb25lTm9kZSIsInNldEludGVydmFsIiwibGVuZ3RoIiwid2lkdGgiLCJkaXNwbGF5IiwiekluZGV4IiwiZHVyYXRpb24iLCJzdHlsZSIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
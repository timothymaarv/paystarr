/*! For license information please see main.340d2760eea9cde3a42b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");class l extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent;const l=s.querySelector(".slide__title"),i=s.querySelector(".slide__text"),a=s.querySelector(".slide__image"),n=s.querySelector(".progress"),c=s.querySelector(".bar");document.cloneNode(n);setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t?(gsap.to(n,{width:gsap.utils.interpolate(r,100,10)}),l.style.opacity=1,i.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",a.style.zIndex=10,c.appendChild(n)):(n.style.display="none",a.style.zIndex=1,l.style.opacity=.4,i.style.opacity=.4)}),300)}))}}}},(function(e){e.h=()=>"00b36261a36604862fe1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNDBkMjc2MGVlYTljZGUzYTQyYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFDTEYsS0FBS0csa0JBQ0xILEtBQUtJLGtCQUNQLENBRUFDLFNBQ0ViLE1BQU1hLFFBQ1IsQ0FFQUosU0FDRUssT0FBT0MsS0FBSyxDQUNWQyxVQUFXLFNBQ1hDLGVBQWUsRUFDZkMsY0FBZSxLQUVuQixDQUVBUixvQkFHRVMsS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsWUFBYSxDQUM5QkMsYUFBYyxPQUNkQyxPQUFRLGdCQUVWQyxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxvQkFDVEMsV0FBWSxVQUNaQyxJQUFLLGFBR1BDLEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCNUIsY0FBZTZCLElBQzFCQSxFQUFLQyxjQUFjLHlCQUF5QkMsWUFDN0NGLEVBQUtDLGNBQWMseUJBQ25CRCxFQUFLQyxjQUFjLGlCQUFpQixHQWFyRCxDQUVBdEIsbUJBQ0VPLEtBQUtDLGVBQWUsaUJBRXBCQyxjQUFjUixPQUFPLENBQ25CUyxVQUFXSCxLQUFLSSxHQUFHLFVBQVcsQ0FDNUJhLG9CQUFxQixPQUNyQkMscUJBQXNCLFNBRXhCWCxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxVQUNUQyxXQUFZLFVBQ1pDLElBQUssZUFFVCxDQUVBbkIsa0JBQ0UsTUFBTTJCLEVBQWUsQ0FDbkIsMkJBQ0EsMEJBQ0EsNEJBRUYsSUFBSUMsRUFBUyxFQUNUQyxFQUFVLEdBRWRULEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCekIsUUFBUSxDQUFDMEIsRUFBTVEsS0FDMUJSLEVBQUtDLGNBQWMsaUJBQWlCQyxZQUFsRCxNQUVNTyxFQUFlVCxFQUFLQyxjQUFjLGlCQUNsQ1MsRUFBT1YsRUFBS0MsY0FBYyxnQkFFMUJVLEVBQVFYLEVBQUtDLGNBQWMsaUJBQzNCVyxFQUFXWixFQUFLQyxjQUFjLGFBQzlCWSxFQUFNYixFQUFLQyxjQUFjLFFBRVg3QixTQUFTMEMsVUFBVUYsR0FJdkNHLGFBQVksS0FDVlIsR0FBVyxFQUVLLE1BQVpBLElBQ0ZELEVBQ0VBLEVBQVNELEVBQWFXLE9BQVMsRUFDMUJWLEVBQVNELEVBQWFXLE9BQVUsRUFDakMsRUFDTlQsRUFBVSxHQUdSQyxJQUFVRixHQUtacEIsS0FBS0ksR0FBR3NCLEVBQVUsQ0FDaEJLLE1BQU8vQixLQUFLZ0MsTUFBTUMsWUFBWVosRUFBUyxJQUFLLE1BSTlDRSxFQUFhVyxNQUFNQyxRQUFVLEVBQzdCWCxFQUFLVSxNQUFNQyxRQUFVLEVBQ3JCVCxFQUFTUSxNQUFNRSxRQUFVLFFBQ3pCVixFQUFTUSxNQUFNRyxnQkFBa0IsVUFFakNaLEVBQU1TLE1BQU1JLE9BQVMsR0FDckJYLEVBQUlZLFlBQVliLEtBRWhCQSxFQUFTUSxNQUFNRSxRQUFVLE9BQ3pCWCxFQUFNUyxNQUFNSSxPQUFTLEVBQ3JCZixFQUFhVyxNQUFNQyxRQUFVLEdBQzdCWCxFQUFLVSxNQUFNQyxRQUFVLEdBQ3ZCLEdBQ0MsSUFBSSxHQU1YLGtCQ3BKRkssRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGJ1dHRlci5pbml0KHtcbiAgICAgIHdyYXBwZXJJZDogXCJidXR0ZXJcIixcbiAgICAgIGNhbmNlbE9uVG91Y2g6IGZhbHNlLFxuICAgICAgd3JhcHBlckRhbXBlcjogMC4wOCxcbiAgICB9KTtcbiAgfVxuXG4gIGZlYXR1cmVBbmltYXRpb25zKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMpO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9fd3JhcHBlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgIH0pO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgLy8gICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gICB9KTtcblxuICAgICAgLy8gICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAvLyAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcbiAgICAgIC8vICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgLy8gICB9XG4gICAgfSk7XG4gIH1cblxuICBmb290ZXJBbmltYXRpb25zKCkge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZvb3RlclwiLCB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI2cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcImJvdHRvbSA3MCVcIixcbiAgICAgIHRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuZm9vdGVyXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIDEwMCVcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBzbGlkZXJUaXRsZXMgPSBbXG4gICAgICBcIlNlY3VyZSBDdXJyZW5jeSBFeGNoYW5nZVwiLFxuICAgICAgXCJGYXN0IFBheW1lbnQgUHJvY2Vzc2luZ1wiLFxuICAgICAgXCJNdWx0aXBsZSBQYXltZW50IE9wdGlvbnNcIixcbiAgICBdO1xuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCBwZXJjZW50ID0gMDtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLnNsaWRlcywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190ZXh0XCIpO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9faW1hZ2VcIik7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKTtcbiAgICAgIGNvbnN0IGJhciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5iYXJcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gZG9jdW1lbnQuY2xvbmVOb2RlKHByb2dyZXNzKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG5cbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBhY3RpdmUgPVxuICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgPyAoYWN0aXZlICUgc2xpZGVyVGl0bGVzLmxlbmd0aCkgKyAxXG4gICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuXG4gICAgICAgICAgZ3NhcC50byhwcm9ncmVzcywge1xuICAgICAgICAgICAgd2lkdGg6IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUocGVyY2VudCwgMTAwLCAxMCksXG4gICAgICAgICAgICAvLyBlYXNlOiBcImN1YmljLWJlemllcigwLjc3LDAsMC4xOCwxKTtcIixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRpdGxlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMkI4NkY5XCI7XG4gICAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICAgIGJhci5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICB9XG4gICAgICB9LCAzMDApO1xuXG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAwYjM2MjYxYTM2NjA0ODYyZmUxXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZmVhdHVyZUl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzIiwidGhpcyIsInNjcm9sbCIsImZlYXR1cmVBbmltYXRpb25zIiwic2xpZGVBbmltYXRpb25zIiwiZm9vdGVyQW5pbWF0aW9ucyIsImNyZWF0ZSIsImJ1dHRlciIsImluaXQiLCJ3cmFwcGVySWQiLCJjYW5jZWxPblRvdWNoIiwid3JhcHBlckRhbXBlciIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJhbmltYXRpb24iLCJ0byIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNjcnViIiwic3RhcnQiLCJ0cmlnZ2VyIiwiZW5kVHJpZ2dlciIsImVuZCIsImVhY2giLCJzZWxlY3RvckNoaWxkcmVuIiwiaXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInNsaWRlclRpdGxlcyIsImFjdGl2ZSIsInBlcmNlbnQiLCJpbmRleCIsInRpdGxlV3JhcHBlciIsInRleHQiLCJpbWFnZSIsInByb2dyZXNzIiwiYmFyIiwiY2xvbmVOb2RlIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJ3aWR0aCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiYXBwZW5kQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
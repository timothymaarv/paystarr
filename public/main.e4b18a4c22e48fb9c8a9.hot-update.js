/*! For license information please see main.e4b18a4c22e48fb9c8a9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");class l extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent;const l=s.querySelector(".slide__title"),i=s.querySelector(".slide__text"),a=s.querySelector(".slide__image"),n=s.querySelector(".progress"),c=s.querySelector(".bar");document.cloneNode(n);setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t?(gsap.to(n,{width:`${r}%`}),l.style.opacity=1,i.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",a.style.display="block",a.style.zIndex=10,c.appendChild(n)):(n.style.display="none",a.style.zIndex=1,l.style.opacity=.4,i.style.opacity=.4,a.style.display="none",gsap.to(a,{display:"none",duration:3}))}),300)}))}}}},(function(e){e.h=()=>"42db8dbcec9a3631319a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNGIxOGE0YzIyZTQ4ZmI5YzhhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFDTEYsS0FBS0csa0JBQ0xILEtBQUtJLGtCQUNQLENBRUFDLFNBQ0ViLE1BQU1hLFFBQ1IsQ0FFQUosU0FDRUssT0FBT0MsS0FBSyxDQUNWQyxVQUFXLFNBQ1hDLGVBQWUsRUFDZkMsY0FBZSxLQUVuQixDQUVBUixvQkFHRVMsS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsWUFBYSxDQUM5QkMsYUFBYyxPQUNkQyxPQUFRLGdCQUVWQyxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxvQkFDVEMsV0FBWSxVQUNaQyxJQUFLLGFBR1BDLEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCNUIsY0FBZTZCLElBQzFCQSxFQUFLQyxjQUFjLHlCQUF5QkMsWUFDN0NGLEVBQUtDLGNBQWMseUJBQ25CRCxFQUFLQyxjQUFjLGlCQUFpQixHQWFyRCxDQUVBdEIsbUJBQ0VPLEtBQUtDLGVBQWUsaUJBRXBCQyxjQUFjUixPQUFPLENBQ25CUyxVQUFXSCxLQUFLSSxHQUFHLFVBQVcsQ0FDNUJhLG9CQUFxQixPQUNyQkMscUJBQXNCLFNBRXhCWCxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxVQUNUQyxXQUFZLFVBQ1pDLElBQUssZUFFVCxDQUVBbkIsa0JBQ0UsTUFBTTJCLEVBQWUsQ0FDbkIsMkJBQ0EsMEJBQ0EsNEJBRUYsSUFBSUMsRUFBUyxFQUNUQyxFQUFVLEdBRWRULEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCekIsUUFBUSxDQUFDMEIsRUFBTVEsS0FDMUJSLEVBQUtDLGNBQWMsaUJBQWlCQyxZQUFsRCxNQUVNTyxFQUFlVCxFQUFLQyxjQUFjLGlCQUNsQ1MsRUFBT1YsRUFBS0MsY0FBYyxnQkFFMUJVLEVBQVFYLEVBQUtDLGNBQWMsaUJBQzNCVyxFQUFXWixFQUFLQyxjQUFjLGFBQzlCWSxFQUFNYixFQUFLQyxjQUFjLFFBRVg3QixTQUFTMEMsVUFBVUYsR0FJdkNHLGFBQVksS0FDVlIsR0FBVyxFQUVLLE1BQVpBLElBQ0ZELEVBQ0VBLEVBQVNELEVBQWFXLE9BQVMsRUFDMUJWLEVBQVNELEVBQWFXLE9BQVUsRUFDakMsRUFDTlQsRUFBVSxHQUdSQyxJQUFVRixHQUtacEIsS0FBS0ksR0FBR3NCLEVBQVUsQ0FDaEJLLE1BQVEsR0FBRVYsT0FHWkUsRUFBYVMsTUFBTUMsUUFBVSxFQUM3QlQsRUFBS1EsTUFBTUMsUUFBVSxFQUNyQlAsRUFBU00sTUFBTUUsUUFBVSxRQUN6QlIsRUFBU00sTUFBTUcsZ0JBQWtCLFVBQ2pDVixFQUFNTyxNQUFNRSxRQUFVLFFBRXRCVCxFQUFNTyxNQUFNSSxPQUFTLEdBQ3JCVCxFQUFJVSxZQUFZWCxLQUVoQkEsRUFBU00sTUFBTUUsUUFBVSxPQUN6QlQsRUFBTU8sTUFBTUksT0FBUyxFQUNyQmIsRUFBYVMsTUFBTUMsUUFBVSxHQUM3QlQsRUFBS1EsTUFBTUMsUUFBVSxHQUNyQlIsRUFBTU8sTUFBTUUsUUFBVSxPQUV0QmxDLEtBQUtJLEdBQUdxQixFQUFPLENBQ2JTLFFBQVMsT0FDVEksU0FBVSxJQUVkLEdBQ0MsSUFBSSxHQU1YLGtCQzFKRkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGJ1dHRlci5pbml0KHtcbiAgICAgIHdyYXBwZXJJZDogXCJidXR0ZXJcIixcbiAgICAgIGNhbmNlbE9uVG91Y2g6IGZhbHNlLFxuICAgICAgd3JhcHBlckRhbXBlcjogMC4wOCxcbiAgICB9KTtcbiAgfVxuXG4gIGZlYXR1cmVBbmltYXRpb25zKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMpO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9fd3JhcHBlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgIH0pO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgLy8gICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gICB9KTtcblxuICAgICAgLy8gICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAvLyAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcbiAgICAgIC8vICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgLy8gICB9XG4gICAgfSk7XG4gIH1cblxuICBmb290ZXJBbmltYXRpb25zKCkge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZvb3RlclwiLCB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI2cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcImJvdHRvbSA3MCVcIixcbiAgICAgIHRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuZm9vdGVyXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIDEwMCVcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBzbGlkZXJUaXRsZXMgPSBbXG4gICAgICBcIlNlY3VyZSBDdXJyZW5jeSBFeGNoYW5nZVwiLFxuICAgICAgXCJGYXN0IFBheW1lbnQgUHJvY2Vzc2luZ1wiLFxuICAgICAgXCJNdWx0aXBsZSBQYXltZW50IE9wdGlvbnNcIixcbiAgICBdO1xuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCBwZXJjZW50ID0gMDtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLnNsaWRlcywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGl0bGVcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190ZXh0XCIpO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9faW1hZ2VcIik7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKTtcbiAgICAgIGNvbnN0IGJhciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5iYXJcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gZG9jdW1lbnQuY2xvbmVOb2RlKHByb2dyZXNzKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG5cbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBhY3RpdmUgPVxuICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgPyAoYWN0aXZlICUgc2xpZGVyVGl0bGVzLmxlbmd0aCkgKyAxXG4gICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuXG4gICAgICAgICAgZ3NhcC50byhwcm9ncmVzcywge1xuICAgICAgICAgICAgd2lkdGg6IGAke3BlcmNlbnR9JWAsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHByb2dyZXNzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJCODZGOVwiO1xuICAgICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICAgIGJhci5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMCk7XG5cbiAgICAgIC8vIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgLy8gY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIC8vIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDJkYjhkYmNlYzlhMzYzMTMxOWFcIikiXSwibmFtZXMiOlsiSG9tZSIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJmZWF0dXJlSXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzbGlkZXMiLCJ0aGlzIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwiY3JlYXRlIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiZWFjaCIsInNlbGVjdG9yQ2hpbGRyZW4iLCJpdGVtIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwidGl0bGVXcmFwcGVyIiwidGV4dCIsImltYWdlIiwicHJvZ3Jlc3MiLCJiYXIiLCJjbG9uZU5vZGUiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsIndpZHRoIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImFwcGVuZENoaWxkIiwiZHVyYXRpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
/*! For license information please see main.5d78261c07b2eb026914.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var s=t("./app/classes/Page.js"),i=t("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,i.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){(0,i.each)(this.selectorChildren.slides,(e=>{const r=e.querySelector(".slide__title");e.querySelector(".slide__text"),e.querySelector(".slide__image");console.log(r)}))}}}},(function(e){e.h=()=>"9f27c1cca1c028f7c7da"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZDc4MjYxYzA3YjJlYjAyNjkxNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFDTEYsS0FBS0csa0JBQ0xILEtBQUtJLGtCQUNQLENBRUFDLFNBQ0ViLE1BQU1hLFFBQ1IsQ0FFQUosU0FDRUssT0FBT0MsS0FBSyxDQUNWQyxVQUFXLFNBQ1hDLGVBQWUsRUFDZkMsY0FBZSxLQUVuQixDQUVBUixvQkFHRVMsS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsWUFBYSxDQUM5QkMsYUFBYyxPQUNkQyxPQUFRLGdCQUVWQyxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxvQkFDVEMsV0FBWSxVQUNaQyxJQUFLLGFBR1BDLEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCNUIsY0FBZTZCLElBQzFCQSxFQUFLQyxjQUFjLHlCQUF5QkMsWUFDN0NGLEVBQUtDLGNBQWMseUJBQ25CRCxFQUFLQyxjQUFjLGlCQUFpQixHQWFyRCxDQUVBdEIsbUJBQ0VPLEtBQUtDLGVBQWUsaUJBRXBCQyxjQUFjUixPQUFPLENBQ25CUyxVQUFXSCxLQUFLSSxHQUFHLFVBQVcsQ0FDNUJhLG9CQUFxQixPQUNyQkMscUJBQXNCLFNBRXhCWCxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxVQUNUQyxXQUFZLFVBQ1pDLElBQUssZUFFVCxDQUVBbkIsbUJBQ0VvQixFQUFBQSxFQUFBQSxNQUFLdkIsS0FBS3dCLGlCQUFpQnpCLFFBQVMwQixJQUdsQyxNQUFNSyxFQUFRTCxFQUFLQyxjQUFjLGlCQUNwQkQsRUFBS0MsY0FBYyxnQkFDbEJELEVBQUtDLGNBQWMsaUJBRWpDSyxRQUFRQyxJQUFJRixFQUFNLEdBS3RCLGtCQ2xHRkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjbGFzc2VzL1BhZ2UuanNcIjtcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6IFwiaG9tZVwiLFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgZmVhdHVyZUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlYXR1cmVfX2l0ZW1cIiksXG4gICAgICAgIHNsaWRlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLnNsaWRlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuZm9vdGVyQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGJ1dHRlci5pbml0KHtcbiAgICAgIHdyYXBwZXJJZDogXCJidXR0ZXJcIixcbiAgICAgIGNhbmNlbE9uVG91Y2g6IGZhbHNlLFxuICAgICAgd3JhcHBlckRhbXBlcjogMC4wOCxcbiAgICB9KTtcbiAgfVxuXG4gIGZlYXR1cmVBbmltYXRpb25zKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMpO1xuXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9fd3JhcHBlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgIH0pO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRpdGxlKTtcblxuICAgICAgLy8gICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gICB9KTtcblxuICAgICAgLy8gICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAvLyAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcbiAgICAgIC8vICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgLy8gICB9XG4gICAgfSk7XG4gIH1cblxuICBmb290ZXJBbmltYXRpb25zKCkge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZvb3RlclwiLCB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI2cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcImJvdHRvbSA3MCVcIixcbiAgICAgIHRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kVHJpZ2dlcjogXCIuZm9vdGVyXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIDEwMCVcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9ucygpIHtcbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5zbGlkZXMsIChpdGVtKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpO1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGV4dFwiKTtcbiAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX19pbWFnZVwiKTtcblxuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgLy8gY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAvLyBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgLy8gY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZjI3YzFjY2ExYzAyOGY3YzdkYVwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsInNsaWRlQW5pbWF0aW9ucyIsImZvb3RlckFuaW1hdGlvbnMiLCJjcmVhdGUiLCJidXR0ZXIiLCJpbml0Iiwid3JhcHBlcklkIiwiY2FuY2VsT25Ub3VjaCIsIndyYXBwZXJEYW1wZXIiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiYW5pbWF0aW9uIiwidG8iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJzY3J1YiIsInN0YXJ0IiwidHJpZ2dlciIsImVuZFRyaWdnZXIiLCJlbmQiLCJlYWNoIiwic2VsZWN0b3JDaGlsZHJlbiIsIml0ZW0iLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
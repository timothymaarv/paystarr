/*! For license information please see main.b61b0208f37e7116767d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var a=t("./app/classes/Page.js"),o=t("./node_modules/lodash/lodash.js");class s extends a.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,markers:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}}}},(function(e){e.h=()=>"1a3cbb9d4aabbb20be33"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNjFiMDIwOGYzN2U3MTE2NzY3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFFTEYsS0FBS0csa0JBQ1AsQ0FFQUMsU0FDRVosTUFBTVksUUFDUixDQUVBSCxTQUNFSSxPQUFPQyxLQUFLLENBQ1ZDLFVBQVcsU0FDWEMsZUFBZSxFQUNmQyxjQUFlLEtBRW5CLENBRUFQLG9CQUdFUSxLQUFLQyxlQUFlLGlCQUVwQkMsY0FBY1IsT0FBTyxDQUNuQlMsVUFBV0gsS0FBS0ksR0FBRyxZQUFhLENBQzlCQyxhQUFjLE9BQ2RDLE9BQVEsZ0JBRVZDLE9BQU8sRUFFUEMsTUFBTyxhQUNQQyxRQUFTLG9CQUNUQyxXQUFZLFVBQ1pDLElBQUssYUFHUEMsRUFBQUEsRUFBQUEsTUFBS3RCLEtBQUt1QixpQkFBaUIzQixjQUFlNEIsSUFDMUJBLEVBQUtDLGNBQWMseUJBQXlCQyxZQUM3Q0YsRUFBS0MsY0FBYyx5QkFDbkJELEVBQUtDLGNBQWMsaUJBQWlCLEdBYXJELENBRUF0QixtQkFDRU8sS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsVUFBVyxDQUM1QmEsb0JBQXFCLE9BQ3JCQyxxQkFBc0IsU0FFeEJYLE9BQU8sRUFDUFksU0FBUyxFQUNUWCxNQUFPLGFBQ1BDLFFBQVMsVUFDVEMsV0FBWSxVQUNaQyxJQUFLLGVBRVQsa0JDbkZGUyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5c3RhcnIvLi9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXlzdGFyci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNsYXNzZXMvUGFnZS5qc1wiO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDogXCJob21lXCIsXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBmZWF0dXJlSXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVhdHVyZV9faXRlbVwiKSxcbiAgICAgICAgc2xpZGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIC8vIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mZWF0dXJlc1wiLCB7XG4gICAgICAgIGJvcmRlclJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcmVtIDEuOHJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX193cmFwcGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXG4gICAgfSk7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgICAvLyAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAvLyAgIH0pO1xuXG4gICAgICAvLyAgIGlmICh0aXRsZSA9PT0gXCJTZW5kXCIpIHtcbiAgICAgIC8vICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAvLyAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvb3RlckFuaW1hdGlvbnMoKSB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZm9vdGVyXCIsIHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwiYm90dG9tIDcwJVwiLFxuICAgICAgdHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5mb290ZXJcIixcbiAgICAgIGVuZDogXCJib3R0b20gMTAwJVwiLFxuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYTNjYmI5ZDRhYWJiYjIwYmUzM1wiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsImZvb3RlckFuaW1hdGlvbnMiLCJjcmVhdGUiLCJidXR0ZXIiLCJpbml0Iiwid3JhcHBlcklkIiwiY2FuY2VsT25Ub3VjaCIsIndyYXBwZXJEYW1wZXIiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiYW5pbWF0aW9uIiwidG8iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJzY3J1YiIsInN0YXJ0IiwidHJpZ2dlciIsImVuZFRyaWdnZXIiLCJlbmQiLCJlYWNoIiwic2VsZWN0b3JDaGlsZHJlbiIsIml0ZW0iLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJtYXJrZXJzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9
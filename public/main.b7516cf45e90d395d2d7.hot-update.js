/*! For license information please see main.b7516cf45e90d395d2d7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./app/classes/Page.js"),i=r("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),this.mobile=window.innerWidth<=768,window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){if(gsap.registerPlugin("ScrollTrigger"),this.mobile){const e=document.querySelector(".features");gsap.set(e,{borderRadius:"0rem",margin:"0rem"})}!this.mobile&&ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,i.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,i.each)(this.selectorChildren.slides,((s,i)=>{s.querySelector(".slide__title").textContent;const o=s.querySelector(".slide__title"),a=s.querySelector(".slide__text"),l=s.querySelector(".slide__image"),n=s.querySelector(".progress"),d=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),i===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),o.style.opacity=1,a.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",l.style.display="block",l.style.zIndex=10,d.appendChild(n)):(gsap.set(n,{display:"none"}),o.style.opacity=.4,a.style.opacity=.4,gsap.to(l,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=i,r=0}))}))}onResize(){window.innerWidth<=768?(this.mobile=!0,this.featureAnimations()):(this.mobile=!1,this.featureAnimations())}}}},(function(e){e.h=()=>"ffdcaf550b8861f2b2f2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTUksT0FBUyxHQUNyQlYsRUFBSVcsWUFBWVosS0FJaEJsQyxLQUFLSSxJQUFJOEIsRUFBVSxDQUNqQlMsUUFBUyxTQUtYWixFQUFhVSxNQUFNQyxRQUFVLEdBQzdCVixFQUFLUyxNQUFNQyxRQUFVLEdBR3JCMUMsS0FBS1MsR0FBR3dCLEVBQU8sQ0FDYlUsUUFBUyxPQUNURSxPQUFRLElBckNWLEdBQ0MsS0FFSDVCLEVBQUt6QixpQkFBaUIsU0FBUyxLQUM3Qm9DLEVBQVNFLEVBQ1RELEVBQVUsQ0FBQyxHQWtDYixHQU1KLENBRUFwQyxXQUNpQkgsT0FBT0MsWUFBYyxLQUdsQ1AsS0FBS0ssUUFBUyxFQUNkTCxLQUFLRSxzQkFFTEYsS0FBS0ssUUFBUyxFQUNkTCxLQUFLRSxvQkFFVCxrQkMxTkY2RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5c3RhcnIvLi9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXlzdGFyci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNsYXNzZXMvUGFnZS5qc1wiO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDogXCJob21lXCIsXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBmZWF0dXJlSXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVhdHVyZV9faXRlbVwiKSxcbiAgICAgICAgc2xpZGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG4gICAgdGhpcy5tb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIGlmICh0aGlzLm1vYmlsZSkge1xuICAgICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVzXCIpO1xuXG4gICAgICBnc2FwLnNldChmZWF0dXJlcywge1xuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMHJlbVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgIXRoaXMubW9iaWxlICYmXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mZWF0dXJlc1wiLCB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgICBtYXJnaW46IFwiMHJlbSAxLjhyZW1cIixcbiAgICAgICAgfSksXG4gICAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmZlYXR1cmVfX3dyYXBwZXJcIixcbiAgICAgICAgZW5kVHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXG4gICAgICB9KTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG5cbiAgICAgIGlmICh0aXRsZSA9PT0gXCJDb21wbGlhbmNlXCIpIHtcbiAgICAgICAgcGxheWVyLnNlZWsoXCI2MCVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aXRsZSA9PT0gXCJTdXBwb3J0XCIpIHtcbiAgICAgICAgcGxheWVyLnNlZWsoXCIxMDAlXCIpO1xuICAgICAgICBwbGF5ZXIuc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuc3RvcCgpO1xuXG4gICAgICAvLyBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgLy8gcGxheWVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgICAvLyAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAvLyAgIH0pO1xuXG4gICAgICAvLyAgIGlmICh0aXRsZSA9PT0gXCJTZW5kXCIpIHtcbiAgICAgIC8vICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAvLyAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvb3RlckFuaW1hdGlvbnMoKSB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZm9vdGVyXCIsIHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwiYm90dG9tIDcwJVwiLFxuICAgICAgdHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5mb290ZXJcIixcbiAgICAgIGVuZDogXCJib3R0b20gMTAwJVwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2xpZGVBbmltYXRpb25zKCkge1xuICAgIGNvbnN0IHNsaWRlclRpdGxlcyA9IFtcbiAgICAgIFwiU2VjdXJlIEN1cnJlbmN5IEV4Y2hhbmdlXCIsXG4gICAgICBcIkZhc3QgUGF5bWVudCBQcm9jZXNzaW5nXCIsXG4gICAgICBcIk11bHRpcGxlIFBheW1lbnQgT3B0aW9uc1wiLFxuICAgIF07XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IHBlcmNlbnQgPSAwO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uc2xpZGVzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RleHRcIik7XG5cbiAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX19pbWFnZVwiKTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpO1xuICAgICAgY29uc3QgYmFyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJhclwiKTtcblxuICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBkb2N1bWVudC5jbG9uZU5vZGUocHJvZ3Jlc3MpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHBlcmNlbnQgKz0gMTtcblxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICAgICAgYWN0aXZlID1cbiAgICAgICAgICAgIGFjdGl2ZSA8IHNsaWRlclRpdGxlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgID8gKGFjdGl2ZSAlIHNsaWRlclRpdGxlcy5sZW5ndGgpICsgMVxuICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09mZigpO1xuICAgICAgICB9XG4gICAgICB9LCAxNTApO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IGluZGV4O1xuICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09uKCkge1xuICAgICAgICBnc2FwLnNldChwcm9ncmVzcywge1xuICAgICAgICAgIHdpZHRoOiBgJHtwZXJjZW50fSVgLFxuICAgICAgICAgIGVhc2U6IFwiRXhwby5lYXNlSW5PdXRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyQjg2RjlcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICBpbWFnZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPZmYoKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBjb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG5cbiAgICBpZiAobW9iaWxlKSB7XG4gICAgICB0aGlzLm1vYmlsZSA9IHRydWU7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZmRjYWY1NTBiODg2MWYyYjJmMlwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsInNsaWRlQW5pbWF0aW9ucyIsImZvb3RlckFuaW1hdGlvbnMiLCJtb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwiY3JlYXRlIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiZmVhdHVyZXMiLCJxdWVyeVNlbGVjdG9yIiwic2V0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiZWFjaCIsInNlbGVjdG9yQ2hpbGRyZW4iLCJpdGVtIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInBsYXllciIsInNlZWsiLCJzdG9wIiwicGxheSIsInBhdXNlIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwidGl0bGVXcmFwcGVyIiwidGV4dCIsImltYWdlIiwicHJvZ3Jlc3MiLCJiYXIiLCJjbG9uZU5vZGUiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsIndpZHRoIiwiZWFzZSIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJhcHBlbmRDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
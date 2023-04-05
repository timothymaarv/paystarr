/*! For license information please see main.a2ac92516303d3917a8d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");let i=window.innerWidth<=768;class l extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),!window.mobileCheck&&ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent;const i=s.querySelector(".slide__title"),l=s.querySelector(".slide__text"),a=s.querySelector(".slide__image"),n=s.querySelector(".progress"),c=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),i.style.opacity=1,l.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",a.style.display="block",a.style.zIndex=10,c.appendChild(n)):(gsap.set(n,{display:"none"}),i.style.opacity=.4,l.style.opacity=.4,gsap.to(a,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=o,r=0}))}))}onResize(){console.log(i)}}}},(function(e){e.h=()=>"9a1e0c380b72eeae49a9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVUsR0FHckIxQyxLQUFLSyxHQUFHMkIsRUFBTyxDQUNiVyxRQUFTLE9BQ1RFLE9BQVEsSUFyQ1YsR0FDQyxLQUVIOUIsRUFBS3ZCLGlCQUFpQixTQUFTLEtBQzdCbUMsRUFBU0UsRUFDVEQsRUFBVSxDQUFDLEdBa0NiLEdBTUosQ0FFQW5DLFdBQ0VzRCxRQUFRQyxJQUFJM0UsRUFDZCxrQkMxTUY0RSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5c3RhcnIvLi9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXlzdGFyci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNsYXNzZXMvUGFnZS5qc1wiO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxubGV0IG1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDogXCJob21lXCIsXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBmZWF0dXJlSXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVhdHVyZV9faXRlbVwiKSxcbiAgICAgICAgc2xpZGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgICF3aW5kb3cubW9iaWxlQ2hlY2sgJiZcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZlYXR1cmVzXCIsIHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwcmVtIDEuOHJlbVwiLFxuICAgICAgICB9KSxcbiAgICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9fd3JhcHBlclwiLFxuICAgICAgICBlbmRUcmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcbiAgICAgIH0pO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcblxuICAgICAgaWYgKHRpdGxlID09PSBcIkNvbXBsaWFuY2VcIikge1xuICAgICAgICBwbGF5ZXIuc2VlayhcIjYwJVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpdGxlID09PSBcIlN1cHBvcnRcIikge1xuICAgICAgICBwbGF5ZXIuc2VlayhcIjEwMCVcIik7XG4gICAgICAgIHBsYXllci5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5zdG9wKCk7XG5cbiAgICAgIC8vIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAvLyBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aXRsZSk7XG5cbiAgICAgIC8vICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIC8vICAgfSk7XG5cbiAgICAgIC8vICAgaWYgKHRpdGxlID09PSBcIlNlbmRcIikge1xuICAgICAgLy8gICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG4gICAgICAvLyAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIC8vICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9vdGVyQW5pbWF0aW9ucygpIHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mb290ZXJcIiwge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJib3R0b20gNzAlXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLmZvb3RlclwiLFxuICAgICAgZW5kOiBcImJvdHRvbSAxMDAlXCIsXG4gICAgfSk7XG4gIH1cblxuICBzbGlkZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3Qgc2xpZGVyVGl0bGVzID0gW1xuICAgICAgXCJTZWN1cmUgQ3VycmVuY3kgRXhjaGFuZ2VcIixcbiAgICAgIFwiRmFzdCBQYXltZW50IFByb2Nlc3NpbmdcIixcbiAgICAgIFwiTXVsdGlwbGUgUGF5bWVudCBPcHRpb25zXCIsXG4gICAgXTtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgcGVyY2VudCA9IDA7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5zbGlkZXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpO1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGV4dFwiKTtcblxuICAgICAgY29uc3QgaW1hZ2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX2ltYWdlXCIpO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIik7XG4gICAgICBjb25zdCBiYXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYmFyXCIpO1xuXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGRvY3VtZW50LmNsb25lTm9kZShwcm9ncmVzcyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBhY3RpdmUgPVxuICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgPyAoYWN0aXZlICUgc2xpZGVyVGl0bGVzLmxlbmd0aCkgKyAxXG4gICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT2ZmKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1MCk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWN0aXZlID0gaW5kZXg7XG4gICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT24oKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgd2lkdGg6IGAke3BlcmNlbnR9JWAsXG4gICAgICAgICAgZWFzZTogXCJFeHBvLmVhc2VJbk91dFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJCODZGOVwiO1xuICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XG4gICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBiYXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09mZigpIHtcbiAgICAgICAgZ3NhcC5zZXQocHJvZ3Jlc3MsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS56SW5kZXggPSAxO1xuICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgZ3NhcC50byhpbWFnZSwge1xuICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgLy8gY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIC8vIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGNvbnNvbGUubG9nKG1vYmlsZSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlhMWUwYzM4MGI3MmVlYWU0OWE5XCIpIl0sIm5hbWVzIjpbIm1vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsInNsaWRlQW5pbWF0aW9ucyIsImZvb3RlckFuaW1hdGlvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJjcmVhdGUiLCJidXR0ZXIiLCJpbml0Iiwid3JhcHBlcklkIiwiY2FuY2VsT25Ub3VjaCIsIndyYXBwZXJEYW1wZXIiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJtb2JpbGVDaGVjayIsIlNjcm9sbFRyaWdnZXIiLCJhbmltYXRpb24iLCJ0byIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNjcnViIiwic3RhcnQiLCJ0cmlnZ2VyIiwiZW5kVHJpZ2dlciIsImVuZCIsImVhY2giLCJzZWxlY3RvckNoaWxkcmVuIiwiaXRlbSIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicGxheWVyIiwic2VlayIsInN0b3AiLCJwbGF5IiwicGF1c2UiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJzbGlkZXJUaXRsZXMiLCJhY3RpdmUiLCJwZXJjZW50IiwiaW5kZXgiLCJ0aXRsZVdyYXBwZXIiLCJ0ZXh0IiwiaW1hZ2UiLCJwcm9ncmVzcyIsImJhciIsImNsb25lTm9kZSIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2V0Iiwid2lkdGgiLCJlYXNlIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
/*! For license information please see main.898d07a5196536cb243c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");class i extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent,s.querySelector(".slide__text"),s.querySelector(".slide__image");const i=s.querySelector(".progress");document.cloneNode(i);setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t&&(i.style.backgroundColor="red",i.style.width=`${r}%`,s.appendChild(i))}),100)}))}}}},(function(e){e.h=()=>"a1ab25736547830980a6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44OThkMDdhNTE5NjUzNmNiMjQzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFDTEYsS0FBS0csa0JBQ0xILEtBQUtJLGtCQUNQLENBRUFDLFNBQ0ViLE1BQU1hLFFBQ1IsQ0FFQUosU0FDRUssT0FBT0MsS0FBSyxDQUNWQyxVQUFXLFNBQ1hDLGVBQWUsRUFDZkMsY0FBZSxLQUVuQixDQUVBUixvQkFHRVMsS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsWUFBYSxDQUM5QkMsYUFBYyxPQUNkQyxPQUFRLGdCQUVWQyxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxvQkFDVEMsV0FBWSxVQUNaQyxJQUFLLGFBR1BDLEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCNUIsY0FBZTZCLElBQzFCQSxFQUFLQyxjQUFjLHlCQUF5QkMsWUFDN0NGLEVBQUtDLGNBQWMseUJBQ25CRCxFQUFLQyxjQUFjLGlCQUFpQixHQWFyRCxDQUVBdEIsbUJBQ0VPLEtBQUtDLGVBQWUsaUJBRXBCQyxjQUFjUixPQUFPLENBQ25CUyxVQUFXSCxLQUFLSSxHQUFHLFVBQVcsQ0FDNUJhLG9CQUFxQixPQUNyQkMscUJBQXNCLFNBRXhCWCxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxVQUNUQyxXQUFZLFVBQ1pDLElBQUssZUFFVCxDQUVBbkIsa0JBQ0UsTUFBTTJCLEVBQWUsQ0FDbkIsMkJBQ0EsMEJBQ0EsNEJBRUYsSUFBSUMsRUFBUyxFQUNUQyxFQUFVLEdBRWRULEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCekIsUUFBUSxDQUFDMEIsRUFBTVEsS0FDMUJSLEVBQUtDLGNBQWMsaUJBQWlCQyxZQUNyQ0YsRUFBS0MsY0FBYyxnQkFDbEJELEVBQUtDLGNBQWMsaUJBRmpDLE1BR01RLEVBQVdULEVBQUtDLGNBQWMsYUFFaEI3QixTQUFTc0MsVUFBVUQsR0FJdkNFLGFBQVksS0FDVkosR0FBVyxFQUVLLE1BQVpBLElBQ0ZELEVBQ0VBLEVBQVNELEVBQWFPLE9BQVMsRUFDMUJOLEVBQVNELEVBQWFPLE9BQVUsRUFDakMsRUFDTkwsRUFBVSxHQUdSQyxJQUFVRixJQUlaRyxFQUFTSSxNQUFNQyxnQkFBa0IsTUFDakNMLEVBQVNJLE1BQU1FLE1BQVMsR0FBRVIsS0FDMUJQLEVBQUtnQixZQUFZUCxHQUlqQixHQUVELElBQUksR0FNWCxrQkNySUZRLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXlzdGFyci8uL2FwcC9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL3BheXN0YXJyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY2xhc3Nlcy9QYWdlLmpzXCI7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGZlYXR1cmVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mZWF0dXJlX19pdGVtXCIpLFxuICAgICAgICBzbGlkZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5zbGlkZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLmZvb3RlckFuaW1hdGlvbnMoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcbiAgfVxuXG4gIHNjcm9sbCgpIHtcbiAgICBidXR0ZXIuaW5pdCh7XG4gICAgICB3cmFwcGVySWQ6IFwiYnV0dGVyXCIsXG4gICAgICBjYW5jZWxPblRvdWNoOiBmYWxzZSxcbiAgICAgIHdyYXBwZXJEYW1wZXI6IDAuMDgsXG4gICAgfSk7XG4gIH1cblxuICBmZWF0dXJlQW5pbWF0aW9ucygpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zKTtcblxuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZlYXR1cmVzXCIsIHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgbWFyZ2luOiBcIjByZW0gMS44cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgIHRyaWdnZXI6IFwiLmZlYXR1cmVfX3dyYXBwZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kOiBcInRvcCB0b3BcIixcbiAgICB9KTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aXRsZSk7XG5cbiAgICAgIC8vICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIC8vICAgfSk7XG5cbiAgICAgIC8vICAgaWYgKHRpdGxlID09PSBcIlNlbmRcIikge1xuICAgICAgLy8gICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG4gICAgICAvLyAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIC8vICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9vdGVyQW5pbWF0aW9ucygpIHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mb290ZXJcIiwge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJib3R0b20gNzAlXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLmZvb3RlclwiLFxuICAgICAgZW5kOiBcImJvdHRvbSAxMDAlXCIsXG4gICAgfSk7XG4gIH1cblxuICBzbGlkZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3Qgc2xpZGVyVGl0bGVzID0gW1xuICAgICAgXCJTZWN1cmUgQ3VycmVuY3kgRXhjaGFuZ2VcIixcbiAgICAgIFwiRmFzdCBQYXltZW50IFByb2Nlc3NpbmdcIixcbiAgICAgIFwiTXVsdGlwbGUgUGF5bWVudCBPcHRpb25zXCIsXG4gICAgXTtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgcGVyY2VudCA9IDA7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5zbGlkZXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGV4dFwiKTtcbiAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX19pbWFnZVwiKTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpO1xuXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGRvY3VtZW50LmNsb25lTm9kZShwcm9ncmVzcyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHBlcmNlbnQgKz0gMTtcblxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICAgICAgYWN0aXZlID1cbiAgICAgICAgICAgIGFjdGl2ZSA8IHNsaWRlclRpdGxlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgID8gKGFjdGl2ZSAlIHNsaWRlclRpdGxlcy5sZW5ndGgpICsgMVxuICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcbiAgICAgICAgICBwcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiAoaXRlbS5oYXNDaGlsZE5vZGUocHJvZ3Jlc3MpKSB7XG4gICAgICAgICAgLy8gICBpdGVtLnJlbW92ZUNoaWxkKHByb2dyZXNzKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIC8vIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgLy8gY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIC8vIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTFhYjI1NzM2NTQ3ODMwOTgwYTZcIikiXSwibmFtZXMiOlsiSG9tZSIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJmZWF0dXJlSXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzbGlkZXMiLCJ0aGlzIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwiY3JlYXRlIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiZWFjaCIsInNlbGVjdG9yQ2hpbGRyZW4iLCJpdGVtIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwicHJvZ3Jlc3MiLCJjbG9uZU5vZGUiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJhcHBlbmRDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
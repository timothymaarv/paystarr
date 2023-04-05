/*! For license information please see main.e814b680d0fac6c47e05.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./app/classes/Page.js"),o=r("./node_modules/lodash/lodash.js");class l extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,o.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,o.each)(this.selectorChildren.slides,((s,o)=>{s.querySelector(".slide__title").textContent;const l=s.querySelector(".slide__title"),i=s.querySelector(".slide__text"),a=s.querySelector(".slide__image"),n=s.querySelector(".progress"),c=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),o===t?(gsap.set(n,{width:`${r}%`}),l.style.opacity=1,i.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",a.style.display="block",a.style.zIndex=10,c.appendChild(n)):(gsap.set(n,{display:"none"}),n.style.display="none",l.style.opacity=.4,i.style.opacity=.4,gsap.to(a,{display:"none",zIndex:1}))}),200);s.addEventListener("click",(()=>{t=o,r=0}))}))}}}},(function(e){e.h=()=>"0e039b408ccca8d0d369"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lODE0YjY4MGQwZmFjNmM0N2UwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxvQkFDTEYsS0FBS0csa0JBQ0xILEtBQUtJLGtCQUNQLENBRUFDLFNBQ0ViLE1BQU1hLFFBQ1IsQ0FFQUosU0FDRUssT0FBT0MsS0FBSyxDQUNWQyxVQUFXLFNBQ1hDLGVBQWUsRUFDZkMsY0FBZSxLQUVuQixDQUVBUixvQkFHRVMsS0FBS0MsZUFBZSxpQkFFcEJDLGNBQWNSLE9BQU8sQ0FDbkJTLFVBQVdILEtBQUtJLEdBQUcsWUFBYSxDQUM5QkMsYUFBYyxPQUNkQyxPQUFRLGdCQUVWQyxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxvQkFDVEMsV0FBWSxVQUNaQyxJQUFLLGFBR1BDLEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCNUIsY0FBZTZCLElBQzFCQSxFQUFLQyxjQUFjLHlCQUF5QkMsWUFDN0NGLEVBQUtDLGNBQWMseUJBQ25CRCxFQUFLQyxjQUFjLGlCQUFpQixHQWFyRCxDQUVBdEIsbUJBQ0VPLEtBQUtDLGVBQWUsaUJBRXBCQyxjQUFjUixPQUFPLENBQ25CUyxVQUFXSCxLQUFLSSxHQUFHLFVBQVcsQ0FDNUJhLG9CQUFxQixPQUNyQkMscUJBQXNCLFNBRXhCWCxPQUFPLEVBRVBDLE1BQU8sYUFDUEMsUUFBUyxVQUNUQyxXQUFZLFVBQ1pDLElBQUssZUFFVCxDQUVBbkIsa0JBQ0UsTUFBTTJCLEVBQWUsQ0FDbkIsMkJBQ0EsMEJBQ0EsNEJBRUYsSUFBSUMsRUFBUyxFQUNUQyxFQUFVLEdBRWRULEVBQUFBLEVBQUFBLE1BQUt2QixLQUFLd0IsaUJBQWlCekIsUUFBUSxDQUFDMEIsRUFBTVEsS0FDMUJSLEVBQUtDLGNBQWMsaUJBQWlCQyxZQUFsRCxNQUVNTyxFQUFlVCxFQUFLQyxjQUFjLGlCQUNsQ1MsRUFBT1YsRUFBS0MsY0FBYyxnQkFFMUJVLEVBQVFYLEVBQUtDLGNBQWMsaUJBQzNCVyxFQUFXWixFQUFLQyxjQUFjLGFBQzlCWSxFQUFNYixFQUFLQyxjQUFjLFFBRVg3QixTQUFTMEMsVUFBVUYsR0FJdEJHLGFBQVksS0FDM0JSLEdBQVcsRUFFSyxNQUFaQSxJQUNGRCxFQUNFQSxFQUFTRCxFQUFhVyxPQUFTLEVBQzFCVixFQUFTRCxFQUFhVyxPQUFVLEVBQ2pDLEVBQ05ULEVBQVUsR0FHUkMsSUFBVUYsR0FhZHBCLEtBQUsrQixJQUFJTCxFQUFVLENBQ2pCTSxNQUFRLEdBQUVYLE9BUVpFLEVBQWFVLE1BQU1DLFFBQVUsRUFDN0JWLEVBQUtTLE1BQU1DLFFBQVUsRUFDckJSLEVBQVNPLE1BQU1FLFFBQVUsUUFDekJULEVBQVNPLE1BQU1HLGdCQUFrQixVQUNqQ1gsRUFBTVEsTUFBTUUsUUFBVSxRQUV0QlYsRUFBTVEsTUFBTUksT0FBUyxHQUNyQlYsRUFBSVcsWUFBWVosS0FJaEIxQixLQUFLK0IsSUFBSUwsRUFBVSxDQUNqQlMsUUFBUyxTQUdYVCxFQUFTTyxNQUFNRSxRQUFVLE9BRXpCWixFQUFhVSxNQUFNQyxRQUFVLEdBQzdCVixFQUFLUyxNQUFNQyxRQUFVLEdBR3JCbEMsS0FBS0ksR0FBR3FCLEVBQU8sQ0FDYlUsUUFBUyxPQUNURSxPQUFRLElBekNWLEdBQ0MsS0FFSHZCLEVBQUt5QixpQkFBaUIsU0FBUyxLQUM3Qm5CLEVBQVNFLEVBQ1RELEVBQVUsQ0FBQyxHQXNDYixHQU1KLGtCQzVLRm1CLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXlzdGFyci8uL2FwcC9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL3BheXN0YXJyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY2xhc3Nlcy9QYWdlLmpzXCI7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGZlYXR1cmVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mZWF0dXJlX19pdGVtXCIpLFxuICAgICAgICBzbGlkZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5zbGlkZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLmZvb3RlckFuaW1hdGlvbnMoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcbiAgfVxuXG4gIHNjcm9sbCgpIHtcbiAgICBidXR0ZXIuaW5pdCh7XG4gICAgICB3cmFwcGVySWQ6IFwiYnV0dGVyXCIsXG4gICAgICBjYW5jZWxPblRvdWNoOiBmYWxzZSxcbiAgICAgIHdyYXBwZXJEYW1wZXI6IDAuMDgsXG4gICAgfSk7XG4gIH1cblxuICBmZWF0dXJlQW5pbWF0aW9ucygpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zKTtcblxuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgYW5pbWF0aW9uOiBnc2FwLnRvKFwiLmZlYXR1cmVzXCIsIHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgbWFyZ2luOiBcIjByZW0gMS44cmVtXCIsXG4gICAgICB9KSxcbiAgICAgIHNjcnViOiB0cnVlLCAvLyBiYWNrIGFuZCBmb3J0aFxuICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgIHRyaWdnZXI6IFwiLmZlYXR1cmVfX3dyYXBwZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgZW5kOiBcInRvcCB0b3BcIixcbiAgICB9KTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aXRsZSk7XG5cbiAgICAgIC8vICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIC8vICAgfSk7XG5cbiAgICAgIC8vICAgaWYgKHRpdGxlID09PSBcIlNlbmRcIikge1xuICAgICAgLy8gICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG4gICAgICAvLyAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIC8vICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9vdGVyQW5pbWF0aW9ucygpIHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mb290ZXJcIiwge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJib3R0b20gNzAlXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLmZvb3RlclwiLFxuICAgICAgZW5kOiBcImJvdHRvbSAxMDAlXCIsXG4gICAgfSk7XG4gIH1cblxuICBzbGlkZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3Qgc2xpZGVyVGl0bGVzID0gW1xuICAgICAgXCJTZWN1cmUgQ3VycmVuY3kgRXhjaGFuZ2VcIixcbiAgICAgIFwiRmFzdCBQYXltZW50IFByb2Nlc3NpbmdcIixcbiAgICAgIFwiTXVsdGlwbGUgUGF5bWVudCBPcHRpb25zXCIsXG4gICAgXTtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgcGVyY2VudCA9IDA7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5zbGlkZXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpO1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGV4dFwiKTtcblxuICAgICAgY29uc3QgaW1hZ2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX2ltYWdlXCIpO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIik7XG4gICAgICBjb25zdCBiYXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYmFyXCIpO1xuXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGRvY3VtZW50LmNsb25lTm9kZShwcm9ncmVzcyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBhY3RpdmUgPVxuICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgPyAoYWN0aXZlICUgc2xpZGVyVGl0bGVzLmxlbmd0aCkgKyAxXG4gICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT2ZmKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMCk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWN0aXZlID0gaW5kZXg7XG4gICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT24oKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgd2lkdGg6IGAke3BlcmNlbnR9JWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgLy8gICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIC8vICAgekluZGV4OiAxMCxcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyQjg2RjlcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICBpbWFnZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPZmYoKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlMDM5YjQwOGNjY2E4ZDBkMzY5XCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZmVhdHVyZUl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzIiwidGhpcyIsInNjcm9sbCIsImZlYXR1cmVBbmltYXRpb25zIiwic2xpZGVBbmltYXRpb25zIiwiZm9vdGVyQW5pbWF0aW9ucyIsImNyZWF0ZSIsImJ1dHRlciIsImluaXQiLCJ3cmFwcGVySWQiLCJjYW5jZWxPblRvdWNoIiwid3JhcHBlckRhbXBlciIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJhbmltYXRpb24iLCJ0byIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNjcnViIiwic3RhcnQiLCJ0cmlnZ2VyIiwiZW5kVHJpZ2dlciIsImVuZCIsImVhY2giLCJzZWxlY3RvckNoaWxkcmVuIiwiaXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInNsaWRlclRpdGxlcyIsImFjdGl2ZSIsInBlcmNlbnQiLCJpbmRleCIsInRpdGxlV3JhcHBlciIsInRleHQiLCJpbWFnZSIsInByb2dyZXNzIiwiYmFyIiwiY2xvbmVOb2RlIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZXQiLCJ3aWR0aCIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=
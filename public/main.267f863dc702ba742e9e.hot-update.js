/*! For license information please see main.267f863dc702ba742e9e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./app/classes/Page.js"),i=r("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations(),this.mobile=window.innerWidth<=768,window.addEventListener("resize",(()=>{this.onResize()}))}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){const e=document.querySelector(".features");gsap.set(e,{borderRadius:"0rem",margin:"0rem"}),gsap.registerPlugin("ScrollTrigger"),this.mobile||ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,i.each)(this.selectorChildren.featureItems,(e=>{const t=e.querySelector(".feature__item__title").textContent,r=(e.querySelector(".feature__item__title"),e.querySelector(".feature__icon"),e.querySelector("lottie-player"));"Compliance"===t&&r.seek("60%"),"Support"===t&&(r.seek("100%"),r.stop()),r.stop(),e.addEventListener("mouseenter",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.pause()}))}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,i.each)(this.selectorChildren.slides,((s,i)=>{s.querySelector(".slide__title").textContent;const o=s.querySelector(".slide__title"),a=s.querySelector(".slide__text"),l=s.querySelector(".slide__image"),n=s.querySelector(".progress"),d=s.querySelector(".bar");document.cloneNode(n),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),i===t?(gsap.set(n,{width:`${r}%`,ease:"Expo.easeInOut"}),o.style.opacity=1,a.style.opacity=1,n.style.display="block",n.style.backgroundColor="#2B86F9",l.style.display="block",l.style.zIndex=10,d.appendChild(n)):(gsap.set(n,{display:"none"}),o.style.opacity=.4,a.style.opacity=.4,gsap.to(l,{display:"none",zIndex:1}))}),150);s.addEventListener("click",(()=>{t=i,r=0}))}))}onResize(){window.innerWidth<=768?(this.mobile=!0,this.featureAnimations()):(this.mobile=!1,this.featureAnimations())}}}},(function(e){e.h=()=>"7929a6a1911459fe243d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixFQUFJVyxZQUFZWixLQUloQmhDLEtBQUtDLElBQUkrQixFQUFVLENBQ2pCUyxRQUFTLFNBS1haLEVBQWFVLE1BQU1DLFFBQVUsR0FDN0JWLEVBQUtTLE1BQU1DLFFBQVUsR0FHckJ4QyxLQUFLTyxHQUFHd0IsRUFBTyxDQUNiVSxRQUFTLE9BQ1RFLE9BQVEsSUFyQ1YsR0FDQyxLQUVINUIsRUFBS3pCLGlCQUFpQixTQUFTLEtBQzdCb0MsRUFBU0UsRUFDVEQsRUFBVSxDQUFDLEdBa0NiLEdBTUosQ0FFQXBDLFdBQ2lCSCxPQUFPQyxZQUFjLEtBR2xDUCxLQUFLSyxRQUFTLEVBQ2RMLEtBQUtFLHNCQUVMRixLQUFLSyxRQUFTLEVBQ2RMLEtBQUtFLG9CQUVULGtCQ3pORjZELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXlzdGFyci8uL2FwcC9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL3BheXN0YXJyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY2xhc3Nlcy9QYWdlLmpzXCI7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGZlYXR1cmVJdGVtczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mZWF0dXJlX19pdGVtXCIpLFxuICAgICAgICBzbGlkZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgICB0aGlzLmZlYXR1cmVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5zbGlkZUFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLmZvb3RlckFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLm1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcbiAgfVxuXG4gIHNjcm9sbCgpIHtcbiAgICBidXR0ZXIuaW5pdCh7XG4gICAgICB3cmFwcGVySWQ6IFwiYnV0dGVyXCIsXG4gICAgICBjYW5jZWxPblRvdWNoOiBmYWxzZSxcbiAgICAgIHdyYXBwZXJEYW1wZXI6IDAuMDgsXG4gICAgfSk7XG4gIH1cblxuICBmZWF0dXJlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBmZWF0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZXNcIik7XG5cbiAgICBnc2FwLnNldChmZWF0dXJlcywge1xuICAgICAgYm9yZGVyUmFkaXVzOiBcIjByZW1cIixcbiAgICAgIG1hcmdpbjogXCIwcmVtXCIsXG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zKTtcblxuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oXCJTY3JvbGxUcmlnZ2VyXCIpO1xuXG4gICAgaWYgKCF0aGlzLm1vYmlsZSkge1xuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZmVhdHVyZXNcIiwge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjByZW0gMS44cmVtXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX193cmFwcGVyXCIsXG4gICAgICAgIGVuZFRyaWdnZXI6IFwiLnNsaWRlclwiLFxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uZmVhdHVyZUl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuICAgICAgY29uc3QgcGxheWVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibG90dGllLXBsYXllclwiKTtcblxuICAgICAgaWYgKHRpdGxlID09PSBcIkNvbXBsaWFuY2VcIikge1xuICAgICAgICBwbGF5ZXIuc2VlayhcIjYwJVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpdGxlID09PSBcIlN1cHBvcnRcIikge1xuICAgICAgICBwbGF5ZXIuc2VlayhcIjEwMCVcIik7XG4gICAgICAgIHBsYXllci5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5zdG9wKCk7XG5cbiAgICAgIC8vIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAvLyBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aXRsZSk7XG5cbiAgICAgIC8vICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIC8vICAgfSk7XG5cbiAgICAgIC8vICAgaWYgKHRpdGxlID09PSBcIlNlbmRcIikge1xuICAgICAgLy8gICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG4gICAgICAvLyAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIC8vICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9vdGVyQW5pbWF0aW9ucygpIHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mb290ZXJcIiwge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNnJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJib3R0b20gNzAlXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZFRyaWdnZXI6IFwiLmZvb3RlclwiLFxuICAgICAgZW5kOiBcImJvdHRvbSAxMDAlXCIsXG4gICAgfSk7XG4gIH1cblxuICBzbGlkZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc3Qgc2xpZGVyVGl0bGVzID0gW1xuICAgICAgXCJTZWN1cmUgQ3VycmVuY3kgRXhjaGFuZ2VcIixcbiAgICAgIFwiRmFzdCBQYXltZW50IFByb2Nlc3NpbmdcIixcbiAgICAgIFwiTXVsdGlwbGUgUGF5bWVudCBPcHRpb25zXCIsXG4gICAgXTtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgcGVyY2VudCA9IDA7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5zbGlkZXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RpdGxlXCIpO1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fdGV4dFwiKTtcblxuICAgICAgY29uc3QgaW1hZ2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX2ltYWdlXCIpO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIik7XG4gICAgICBjb25zdCBiYXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYmFyXCIpO1xuXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGRvY3VtZW50LmNsb25lTm9kZShwcm9ncmVzcyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBhY3RpdmUgPVxuICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgPyAoYWN0aXZlICUgc2xpZGVyVGl0bGVzLmxlbmd0aCkgKyAxXG4gICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgdHdlYWtWYWx1ZXNPbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT2ZmKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1MCk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWN0aXZlID0gaW5kZXg7XG4gICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHR3ZWFrVmFsdWVzT24oKSB7XG4gICAgICAgIGdzYXAuc2V0KHByb2dyZXNzLCB7XG4gICAgICAgICAgd2lkdGg6IGAke3BlcmNlbnR9JWAsXG4gICAgICAgICAgZWFzZTogXCJFeHBvLmVhc2VJbk91dFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJCODZGOVwiO1xuICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XG4gICAgICAgIGltYWdlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBiYXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09mZigpIHtcbiAgICAgICAgZ3NhcC5zZXQocHJvZ3Jlc3MsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS56SW5kZXggPSAxO1xuICAgICAgICB0aXRsZVdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgZ3NhcC50byhpbWFnZSwge1xuICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgLy8gY29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKTtcbiAgICAgIC8vIGNvbnN0IGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faWNvblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGNvbnN0IG1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcblxuICAgIGlmIChtb2JpbGUpIHtcbiAgICAgIHRoaXMubW9iaWxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2JpbGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmVhdHVyZUFuaW1hdGlvbnMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5MjlhNmExOTExNDU5ZmUyNDNkXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZmVhdHVyZUl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzIiwidGhpcyIsInNjcm9sbCIsImZlYXR1cmVBbmltYXRpb25zIiwic2xpZGVBbmltYXRpb25zIiwiZm9vdGVyQW5pbWF0aW9ucyIsIm1vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJjcmVhdGUiLCJidXR0ZXIiLCJpbml0Iiwid3JhcHBlcklkIiwiY2FuY2VsT25Ub3VjaCIsIndyYXBwZXJEYW1wZXIiLCJmZWF0dXJlcyIsInF1ZXJ5U2VsZWN0b3IiLCJnc2FwIiwic2V0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiYW5pbWF0aW9uIiwidG8iLCJzY3J1YiIsInN0YXJ0IiwidHJpZ2dlciIsImVuZFRyaWdnZXIiLCJlbmQiLCJlYWNoIiwic2VsZWN0b3JDaGlsZHJlbiIsIml0ZW0iLCJ0aXRsZSIsInRleHRDb250ZW50IiwicGxheWVyIiwic2VlayIsInN0b3AiLCJwbGF5IiwicGF1c2UiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJzbGlkZXJUaXRsZXMiLCJhY3RpdmUiLCJwZXJjZW50IiwiaW5kZXgiLCJ0aXRsZVdyYXBwZXIiLCJ0ZXh0IiwiaW1hZ2UiLCJwcm9ncmVzcyIsImJhciIsImNsb25lTm9kZSIsInNldEludGVydmFsIiwibGVuZ3RoIiwid2lkdGgiLCJlYXNlIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImFwcGVuZENoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9
/*! For license information please see main.bb62482e7c5643239d0b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/classes/Page.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r("./node_modules/lodash/lodash.js");class l{constructor({element:e,elements:t,id:r}){this.selector=e,this.selectorChildren={...t},this.id=r}create(){this.element=document.querySelector(this.selector),this.elements={},(0,s.each)(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}destroy(){this.removeEventListeners()}}},"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r("./app/classes/Page.js"),l=r("./node_modules/lodash/lodash.js");class o extends s.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations(),this.slideAnimations(),this.footerAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".features",{borderRadius:"6rem",margin:"0rem 1.8rem"}),scrub:!0,start:"top center",trigger:".feature__wrapper",endTrigger:".slider",end:"top top"}),(0,l.each)(this.selectorChildren.featureItems,(e=>{e.querySelector(".feature__item__title").textContent,e.querySelector(".feature__item__title"),e.querySelector(".feature__icon")}))}footerAnimations(){gsap.registerPlugin("ScrollTrigger"),ScrollTrigger.create({animation:gsap.to(".footer",{borderTopLeftRadius:"6rem",borderTopRightRadius:"6rem"}),scrub:!0,start:"bottom 70%",trigger:".slider",endTrigger:".footer",end:"bottom 100%"})}slideAnimations(){const e=["Secure Currency Exchange","Fast Payment Processing","Multiple Payment Options"];let t=0,r=0;(0,l.each)(this.selectorChildren.slides,((s,l)=>{s.querySelector(".slide__title").textContent;const o=s.querySelector(".slide__title"),i=s.querySelector(".slide__text"),n=s.querySelector(".slide__image"),a=s.querySelector(".progress"),c=s.querySelector(".bar"),d=(document.cloneNode(a),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),l===t?u():m()}),300));function u(){gsap.to(a,{width:`${r}%`}),gsap.to(n,{display:"block",zIndex:10,duration:3}),o.style.opacity=1,i.style.opacity=1,a.style.display="block",a.style.backgroundColor="#2B86F9",c.appendChild(a)}function m(){a.style.display="none",o.style.opacity=.4,i.style.opacity=.4,gsap.to(n,{display:"none",zIndex:1,duration:3})}s.addEventListener("click",(()=>{t=l,clearInterval(d),setInterval((()=>{r+=1,100===r&&(t=t<e.length-1?t%e.length+1:0,r=0),l===t?u():m()}),300)}))}))}}}},(function(e){e.h=()=>"c253e826fe9ad46668f8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUNQNUIsS0FBS0ksR0FBR21CLEVBQVUsQ0FDaEJPLE1BQVEsR0FBRVosT0FHWmxCLEtBQUtJLEdBQUdrQixFQUFPLENBQ2JTLFFBQVMsUUFDVEMsT0FBUSxHQUNSQyxTQUFVLElBR1piLEVBQWFjLE1BQU1DLFFBQVUsRUFDN0JkLEVBQUthLE1BQU1DLFFBQVUsRUFDckJaLEVBQVNXLE1BQU1ILFFBQVUsUUFDekJSLEVBQVNXLE1BQU1FLGdCQUFrQixVQUlqQ1osRUFBSWEsWUFBWWQsRUFDbEIsQ0FFQSxTQUFTTSxJQUNQTixFQUFTVyxNQUFNSCxRQUFVLE9BRXpCWCxFQUFhYyxNQUFNQyxRQUFVLEdBQzdCZCxFQUFLYSxNQUFNQyxRQUFVLEdBR3JCbkMsS0FBS0ksR0FBR2tCLEVBQU8sQ0FDYlMsUUFBUyxPQUNUQyxPQUFRLEVBQ1JDLFNBQVUsR0FFZCxDQXhEQXJCLEVBQUswQixpQkFBaUIsU0FBUyxLQUM3QnJCLEVBQVNFLEVBQ1RvQixjQUFjZCxHQUVkRSxhQUFZLEtBQ1ZULEdBQVcsRUFFSyxNQUFaQSxJQUNGRCxFQUNFQSxFQUFTRCxFQUFhaEMsT0FBUyxFQUMxQmlDLEVBQVNELEVBQWFoQyxPQUFVLEVBQ2pDLEVBQ05rQyxFQUFVLEdBR1JDLElBQVVGLEVBQ1pXLElBRUFDLEdBQ0YsR0FDQyxJQUFJLEdBb0NULEdBTUosa0JDNUxGVyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5c3RhcnIvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL3BheXN0YXJyLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcbiAgICB9O1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChjaGlsZCwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGNoaWxkIGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gY2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNoaWxkKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSBcImNsYXNzZXMvUGFnZS5qc1wiO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDogXCJob21lXCIsXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBmZWF0dXJlSXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVhdHVyZV9faXRlbVwiKSxcbiAgICAgICAgc2xpZGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gICAgdGhpcy5mb290ZXJBbmltYXRpb25zKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFwiU2Nyb2xsVHJpZ2dlclwiKTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIGFuaW1hdGlvbjogZ3NhcC50byhcIi5mZWF0dXJlc1wiLCB7XG4gICAgICAgIGJvcmRlclJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcmVtIDEuOHJlbVwiLFxuICAgICAgfSksXG4gICAgICBzY3J1YjogdHJ1ZSwgLy8gYmFjayBhbmQgZm9ydGhcbiAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX193cmFwcGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5zbGlkZXJcIixcbiAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXG4gICAgfSk7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgICAvLyAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAvLyAgIH0pO1xuXG4gICAgICAvLyAgIGlmICh0aXRsZSA9PT0gXCJTZW5kXCIpIHtcbiAgICAgIC8vICAgICBjb25zdCBwbGF5ZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb3R0aWUtcGxheWVyXCIpO1xuICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAvLyAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvb3RlckFuaW1hdGlvbnMoKSB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihcIlNjcm9sbFRyaWdnZXJcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBhbmltYXRpb246IGdzYXAudG8oXCIuZm9vdGVyXCIsIHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI2cmVtXCIsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjZyZW1cIixcbiAgICAgIH0pLFxuICAgICAgc2NydWI6IHRydWUsIC8vIGJhY2sgYW5kIGZvcnRoXG4gICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwiYm90dG9tIDcwJVwiLFxuICAgICAgdHJpZ2dlcjogXCIuc2xpZGVyXCIsXG4gICAgICBlbmRUcmlnZ2VyOiBcIi5mb290ZXJcIixcbiAgICAgIGVuZDogXCJib3R0b20gMTAwJVwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2xpZGVBbmltYXRpb25zKCkge1xuICAgIGNvbnN0IHNsaWRlclRpdGxlcyA9IFtcbiAgICAgIFwiU2VjdXJlIEN1cnJlbmN5IEV4Y2hhbmdlXCIsXG4gICAgICBcIkZhc3QgUGF5bWVudCBQcm9jZXNzaW5nXCIsXG4gICAgICBcIk11bHRpcGxlIFBheW1lbnQgT3B0aW9uc1wiLFxuICAgIF07XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IHBlcmNlbnQgPSAwO1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uc2xpZGVzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX190aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfX3RleHRcIik7XG5cbiAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlX19pbWFnZVwiKTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpO1xuICAgICAgY29uc3QgYmFyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJhclwiKTtcblxuICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBkb2N1bWVudC5jbG9uZU5vZGUocHJvZ3Jlc3MpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHBlcmNlbnQgKz0gMTtcblxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICAgICAgYWN0aXZlID1cbiAgICAgICAgICAgIGFjdGl2ZSA8IHNsaWRlclRpdGxlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgID8gKGFjdGl2ZSAlIHNsaWRlclRpdGxlcy5sZW5ndGgpICsgMVxuICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgcGVyY2VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xuICAgICAgICAgIHR3ZWFrVmFsdWVzT24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0d2Vha1ZhbHVlc09mZigpO1xuICAgICAgICB9XG4gICAgICB9LCAzMDApO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IGluZGV4O1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgcGVyY2VudCArPSAxO1xuXG4gICAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgICAgICAgYWN0aXZlID1cbiAgICAgICAgICAgICAgYWN0aXZlIDwgc2xpZGVyVGl0bGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICA/IChhY3RpdmUgJSBzbGlkZXJUaXRsZXMubGVuZ3RoKSArIDFcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgdHdlYWtWYWx1ZXNPbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0d2Vha1ZhbHVlc09mZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiB0d2Vha1ZhbHVlc09uKCkge1xuICAgICAgICBnc2FwLnRvKHByb2dyZXNzLCB7XG4gICAgICAgICAgd2lkdGg6IGAke3BlcmNlbnR9JWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgekluZGV4OiAxMCxcbiAgICAgICAgICBkdXJhdGlvbjogMyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB0ZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyQjg2RjlcIjtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgICAgICAvLyBpbWFnZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdHdlYWtWYWx1ZXNPZmYoKSB7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIHRleHQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pdGVtX190aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIC8vIGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICAvLyBjb25zdCBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2ljb25cIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyNTNlODI2ZmU5YWQ0NjY2OGY4XCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVhY2giLCJjaGlsZCIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiSG9tZSIsInN1cGVyIiwiZmVhdHVyZUl0ZW1zIiwic2xpZGVzIiwic2Nyb2xsIiwiZmVhdHVyZUFuaW1hdGlvbnMiLCJzbGlkZUFuaW1hdGlvbnMiLCJmb290ZXJBbmltYXRpb25zIiwiYnV0dGVyIiwiaW5pdCIsIndyYXBwZXJJZCIsImNhbmNlbE9uVG91Y2giLCJ3cmFwcGVyRGFtcGVyIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImFuaW1hdGlvbiIsInRvIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic2NydWIiLCJzdGFydCIsInRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwiZW5kIiwiaXRlbSIsInRleHRDb250ZW50IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2xpZGVyVGl0bGVzIiwiYWN0aXZlIiwicGVyY2VudCIsImluZGV4IiwidGl0bGVXcmFwcGVyIiwidGV4dCIsImltYWdlIiwicHJvZ3Jlc3MiLCJiYXIiLCJpbnRlcnZhbCIsImNsb25lTm9kZSIsInNldEludGVydmFsIiwidHdlYWtWYWx1ZXNPbiIsInR3ZWFrVmFsdWVzT2ZmIiwid2lkdGgiLCJkaXNwbGF5IiwiekluZGV4IiwiZHVyYXRpb24iLCJzdHlsZSIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhckludGVydmFsIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9
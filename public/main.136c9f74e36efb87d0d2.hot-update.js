/*! For license information please see main.136c9f74e36efb87d0d2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./app/pages/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var l=r("./app/classes/Page.js"),s=r("./node_modules/lodash/lodash.js");class a extends l.default{constructor(){super({id:"home",element:".home",elements:{featureItems:document.querySelectorAll(".feature__item"),slides:document.querySelectorAll(".slide")}}),this.scroll(),this.featureAnimations()}create(){super.create()}scroll(){butter.init({wrapperId:"butter",cancelOnTouch:!1,wrapperDamper:.08})}featureAnimations(){(0,s.each)(this.selectorChildren.featureItems,(e=>{console.log(e);const t=e.querySelector(".feature__item__title");e.querySelector(".feature__item__title"),e.querySelector(".feature__icon");if(e.addEventListener("click",(()=>{console.log(t)})),"Send"===t){e.querySelector("lottie-player").play()}}))}}}},(function(e){e.h=()=>"0726eb24afeddf786505"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMzZjOWY3NGUzNmVmYjg3ZDBkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K0xBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFDaENDLGNBQ0VDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsYUFBY0MsU0FBU0MsaUJBQWlCLGtCQUN4Q0MsT0FBUUYsU0FBU0MsaUJBQWlCLGFBSXRDRSxLQUFLQyxTQUNMRCxLQUFLRSxtQkFFUCxDQUVBQyxTQUNFWCxNQUFNVyxRQUNSLENBRUFGLFNBQ0VHLE9BQU9DLEtBQUssQ0FDVkMsVUFBVyxTQUNYQyxlQUFlLEVBQ2ZDLGNBQWUsS0FFbkIsQ0FFQU4scUJBR0VPLEVBQUFBLEVBQUFBLE1BQUtULEtBQUtVLGlCQUFpQmQsY0FBZWUsSUFDeENDLFFBQVFDLElBQUlGLEdBRVosTUFBTUcsRUFBUUgsRUFBS0ksY0FBYyx5QkFDcEJKLEVBQUtJLGNBQWMseUJBQ25CSixFQUFLSSxjQUFjLGtCQU1oQyxHQUpBSixFQUFLSyxpQkFBaUIsU0FBUyxLQUM3QkosUUFBUUMsSUFBSUMsRUFBTSxJQUdOLFNBQVZBLEVBQWtCLENBQ0xILEVBQUtJLGNBQWMsaUJBRTNCRSxNQUVULElBRUosa0JDcERGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5c3RhcnIvLi9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXlzdGFyci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNsYXNzZXMvUGFnZS5qc1wiO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDogXCJob21lXCIsXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBmZWF0dXJlSXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVhdHVyZV9faXRlbVwiKSxcbiAgICAgICAgc2xpZGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgdGhpcy5mZWF0dXJlQW5pbWF0aW9ucygpO1xuICAgIC8vIHRoaXMuc2xpZGVBbmltYXRpb25zKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgYnV0dGVyLmluaXQoe1xuICAgICAgd3JhcHBlcklkOiBcImJ1dHRlclwiLFxuICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2UsXG4gICAgICB3cmFwcGVyRGFtcGVyOiAwLjA4LFxuICAgIH0pO1xuICB9XG5cbiAgZmVhdHVyZUFuaW1hdGlvbnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RvckNoaWxkcmVuLmZlYXR1cmVJdGVtcyk7XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5mZWF0dXJlSXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZV9faXRlbV9fdGl0bGVcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZlYXR1cmVfX2l0ZW1fX3RpdGxlXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mZWF0dXJlX19pY29uXCIpO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGl0bGUgPT09IFwiU2VuZFwiKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImxvdHRpZS1wbGF5ZXJcIik7XG4gICAgICAgIC8vIHBsYXllci5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBmYWxzZSk7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIC8vIHBsYXllci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNzI2ZWIyNGFmZWRkZjc4NjUwNVwiKSJdLCJuYW1lcyI6WyJIb21lIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImZlYXR1cmVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsInRoaXMiLCJzY3JvbGwiLCJmZWF0dXJlQW5pbWF0aW9ucyIsImNyZWF0ZSIsImJ1dHRlciIsImluaXQiLCJ3cmFwcGVySWQiLCJjYW5jZWxPblRvdWNoIiwid3JhcHBlckRhbXBlciIsImVhY2giLCJzZWxlY3RvckNoaWxkcmVuIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
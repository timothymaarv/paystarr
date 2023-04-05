/*! For license information please see main.3adabc1bce6d68bfe1fd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatepaystarr("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,n,t)=>{var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function s(){}function a(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(u(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function l(e){if(!e)return!1;var n=document.querySelectorAll("link"),t=!1;return c.call(n,(function(n){if(n.href){var o=function(e,n){var t;return e=r(e),n.some((function(r){e.indexOf(n)>-1&&(t=r)})),t}(n.href,e);u(o)&&!0!==n.visited&&o&&(a(n,o),t=!0)}})),t}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&a(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),s;var t,c,a,u=function(e){var n=o[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(n=i.src)}o[e]=n}return function(e){if(!n)return null;var t=n.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return r(n.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[n.replace(".js",".css")]}}(e);return t=function(){var e=u(n.filename),t=l(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,a=0,function(){var e=this,n=arguments;clearTimeout(a),a=setTimeout((function(){return t.apply(e,n)}),c)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(n,"i"),"").split("/"),r=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",n+r+t.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},"./styles/index.scss":(e,n,t)=>{t.r(n);var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},(function(e){e.h=()=>"6771a91f27f17f3c9e68"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQ0gsTUFDRixRQUNFRixFQUFZRyxLQUFLRixHQUVyQixPQUFPRCxDQUNULEdBQTBCLElBQUlmLEtBQUssSUFrQnJDLDBDQ2xDTSxJQUFJbUIsRUFBWSxFQUFRLDBFQUFSLENBQW9GN0MsRUFBTzhDLEdBQUksQ0FBQyxXQUFhLEdBQUcsUUFBUyxJQUN6STlDLEVBQU8rQyxJQUFJQyxRQUFRSCxHQUNuQjdDLEVBQU8rQyxJQUFJRSxZQUFPQyxFQUFXTCxrQkNObkNNLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXlzdGFyci8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9wYXlzdGFyci8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ub3JtYWxpemUtdXJsLmpzIiwid2VicGFjazovL3BheXN0YXJyLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcGF5c3RhcnIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG5cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufVxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuICBpZiAoIXNyYykge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICBzcmMgPSAvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqL2RvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuICAgICAgdmFyIGxhc3RTY3JpcHRUYWcgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiAoZmlsZU1hcCkge1xuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgaWYgKCFmaWxlTWFwKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cbiAgaWYgKCFpc1VybFJlcXVlc3QoIC8qKiBAdHlwZSB7c3RyaW5nfSAqL3VybCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsLmlzTG9hZGVkID09PSBmYWxzZSkge1xuICAgIC8vIFdlIHNlZW0gdG8gYmUgYWJvdXQgdG8gcmVwbGFjZSBhIGNzcyBsaW5rIHRoYXQgaGFzbid0IGxvYWRlZCB5ZXQuXG4gICAgLy8gV2UncmUgcHJvYmFibHkgY2hhbmdpbmcgdGhlIHNhbWUgZmlsZSBtb3JlIHRoYW4gb25jZS5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5mdW5jdGlvbiBnZXRSZWxvYWRVcmwoaHJlZiwgc3JjKSB7XG4gIHZhciByZXQ7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGhyZWYgPSBub3JtYWxpemVVcmwoaHJlZik7XG4gIHNyYy5zb21lKFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdXJsID0gZ2V0UmVsb2FkVXJsKGVsLmhyZWYsIHNyYyk7XG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXJsKSB7XG4gICAgICB1cGRhdGVDc3MoZWwsIHVybCk7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsb2FkZWQ7XG59XG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1VybFJlcXVlc3QodXJsKSB7XG4gIC8vIEFuIFVSTCBpcyBub3QgYW4gcmVxdWVzdCBpZlxuXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHNyYyA9IGdldFNjcmlwdFNyYyhvcHRpb25zLmZpbGVuYW1lKTtcbiAgICB2YXIgcmVsb2FkZWQgPSByZWxvYWRTdHlsZShzcmMpO1xuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVib3VuY2UodXBkYXRlLCA1MCk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhDb21wb25lbnRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVVcmwocGF0aENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHBhdGhDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIGNhc2UgXCIuLlwiOlxuICAgICAgICBhY2N1bXVsYXRvci5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9bXSkuam9pbihcIi9cIik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsU3RyaW5nKSB7XG4gIHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjgwNjE3MDk5OTE0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjc3MWE5MWYyN2YxN2YzYzllNjhcIikiXSwibmFtZXMiOlsibm9ybWFsaXplVXJsIiwicmVxdWlyZSIsInNyY0J5TW9kdWxlSWQiLCJPYmplY3QiLCJjcmVhdGUiLCJub0RvY3VtZW50IiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJub29wIiwidXBkYXRlQ3NzIiwiZWwiLCJ1cmwiLCJocmVmIiwic3BsaXQiLCJpc1VybFJlcXVlc3QiLCJpc0xvYWRlZCIsImluZGV4T2YiLCJ2aXNpdGVkIiwibmV3RWwiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJyZWxvYWRTdHlsZSIsInNyYyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYWRlZCIsImNhbGwiLCJyZXQiLCJzb21lIiwiZ2V0UmVsb2FkVXJsIiwicmVsb2FkQWxsIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGVJZCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZm4iLCJ0aW1lIiwidGltZW91dCIsImdldFNjcmlwdFNyYyIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYXN0U2NyaXB0VGFnIiwibGVuZ3RoIiwiZmlsZU1hcCIsInNwbGl0UmVzdWx0IiwiZmlsZW5hbWUiLCJtYXAiLCJtYXBSdWxlIiwicmVnIiwiUmVnRXhwIiwicmVwbGFjZSIsImdldEN1cnJlbnRTY3JpcHRVcmwiLCJyZWxvYWRlZCIsImxvY2FscyIsImpvaW4iLCJzZWxmIiwidGhpcyIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJ1cmxTdHJpbmciLCJ0cmltIiwicHJvdG9jb2wiLCJjb21wb25lbnRzIiwiaG9zdCIsInRvTG93ZXJDYXNlIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwicG9wIiwicHVzaCIsImNzc1JlbG9hZCIsImlkIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
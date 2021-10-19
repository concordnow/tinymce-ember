(function(){"use strict"
var e=Object.hasOwnProperty,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.Env"),i=tinymce.util.Tools.resolve("tinymce.util.Delay"),o=function(e){return e.getParam("min_height",e.getElement().offsetHeight,"number")},r=function(e,t,n,o,u){i.setEditorTimeout(e,(function(){s(e,t),n--?r(e,t,n,o,u):u&&u()}),o)},u=function(e,t){var n=e.getBody()
n&&(n.style.overflowY=t?"":"hidden",t||(n.scrollTop=0))},a=function(e,t,n,i){var o=parseInt(e.getStyle(t,n,i),10)
return isNaN(o)?0:o},s=function(e,t,i){var r=e.dom,c=e.getDoc()
if(c)if(function(e){return e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen()}(e))u(e,!0)
else{var f=c.documentElement,l=function(e){return e.getParam("autoresize_bottom_margin",50,"number")}(e),g=o(e),m=a(r,f,"margin-top",!0),d=a(r,f,"margin-bottom",!0),h=f.offsetHeight+m+d+l
h<0&&(h=0)
var v=e.getContainer().offsetHeight-e.getContentAreaContainer().offsetHeight
h+v>o(e)&&(g=h+v)
var y=function(e){return e.getParam("max_height",0,"number")}(e)
if(y&&g>y?(g=y,u(e,!0)):u(e,!1),g!==t.get()){var p=g-t.get()
if(r.setStyle(e.getContainer(),"height",g+"px"),t.set(g),function(e){e.fire("ResizeEditor")}(e),n.browser.isSafari()&&n.mac){var b=e.getWin()
b.scrollTo(b.pageXOffset,b.pageYOffset)}e.hasFocus()&&function(e){if("setcontent"===(null==e?void 0:e.type.toLowerCase())){var t=e
return!0===t.selection||!0===t.paste}return!1}(i)&&e.selection.scrollIntoView(),n.webkit&&p<0&&s(e,t,i)}}}
t.add("autoresize",(function(t){var n,i,o
if(n=t.settings,i="resize",e.call(n,i)||(t.settings.resize=!1),!t.inline){var u=(o=0,{get:function(){return o},set:function(e){o=e}});(function(e,t){e.addCommand("mceAutoResize",(function(){s(e,t)}))})(t,u),function(e,t){e.on("init",(function(){var t=function(e){return e.getParam("autoresize_overflow_padding",1,"number")}(e),n=e.dom
n.setStyles(e.getDoc().documentElement,{height:"auto"}),n.setStyles(e.getBody(),{paddingLeft:t,paddingRight:t,"min-height":0})})),e.on("NodeChange SetContent keyup FullscreenStateChanged ResizeContent",(function(n){s(e,t,n)})),function(e){return e.getParam("autoresize_on_init",!0,"boolean")}(e)&&e.on("init",(function(){r(e,t,20,100,(function(){r(e,t,5,1e3)}))}))}(t,u)}}))})()
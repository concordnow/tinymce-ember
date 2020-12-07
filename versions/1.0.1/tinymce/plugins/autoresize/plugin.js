(function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env"),n=tinymce.util.Tools.resolve("tinymce.util.Delay"),i=function(e){return e.getParam("min_height",e.getElement().offsetHeight,"number")},o=function(e,t,i,r,u){n.setEditorTimeout(e,(function(){a(e,t),i--?o(e,t,i,r,u):u&&u()}),r)},r=function(e,t){var n=e.getBody()
n&&(n.style.overflowY=t?"":"hidden",t||(n.scrollTop=0))},u=function(e,t,n,i){var o=parseInt(e.getStyle(t,n,i),10)
return isNaN(o)?0:o},a=function(e,n){var o=e.dom,s=e.getDoc()
if(s)if(function(e){return e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen()}(e))r(e,!0)
else{var f=s.documentElement,c=function(e){return e.getParam("autoresize_bottom_margin",50,"number")}(e),g=i(e),l=u(o,f,"margin-top",!0),m=u(o,f,"margin-bottom",!0),d=f.offsetHeight+l+m+c
d<0&&(d=0)
var h=e.getContainer().offsetHeight-e.getContentAreaContainer().offsetHeight
d+h>i(e)&&(g=d+h)
var v=function(e){return e.getParam("max_height",0,"number")}(e)
if(v&&g>v?(g=v,r(e,!0)):r(e,!1),g!==n.get()){var y=g-n.get()
if(o.setStyle(e.getContainer(),"height",g+"px"),n.set(g),function(e){e.fire("ResizeEditor")}(e),t.browser.isSafari()&&t.mac){var p=e.getWin()
p.scrollTo(p.pageXOffset,p.pageYOffset)}e.hasFocus()&&e.selection.scrollIntoView(e.selection.getNode()),t.webkit&&y<0&&a(e,n)}}}
e.add("autoresize",(function(e){if(e.settings.hasOwnProperty("resize")||(e.settings.resize=!1),!e.inline){var t=(n=0,{get:function(){return n},set:function(e){n=e}});(function(e,t){e.addCommand("mceAutoResize",(function(){a(e,t)}))})(e,t),function(e,t){e.on("init",(function(){var t=function(e){return e.getParam("autoresize_overflow_padding",1,"number")}(e),n=e.dom
n.setStyles(e.getDoc().documentElement,{height:"auto"}),n.setStyles(e.getBody(),{paddingLeft:t,paddingRight:t,"min-height":0})})),e.on("NodeChange SetContent keyup FullscreenStateChanged ResizeContent",(function(){a(e,t)})),function(e){return e.getParam("autoresize_on_init",!0,"boolean")}(e)&&e.on("init",(function(){o(e,t,20,100,(function(){o(e,t,5,1e3)}))}))}(e,t)}var n}))})()

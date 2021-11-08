(function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),n=tinymce.util.Tools.resolve("tinymce.EditorManager"),i=tinymce.util.Tools.resolve("tinymce.Env"),o=tinymce.util.Tools.resolve("tinymce.util.Delay"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),r=tinymce.util.Tools.resolve("tinymce.util.VK"),u=t.DOM,a=function(e){e.keyCode!==r.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()}
e.add("tabfocus",(function(e){(function(e){var t=function(t){var a
if(!(t.keyCode!==r.TAB||t.ctrlKey||t.altKey||t.metaKey||t.isDefaultPrevented())){var c,s=function(i){var o=u.select(":input:enabled,*[tabindex]:not(iframe)"),r=function(e){var t=e
return"BODY"===e.nodeName||"hidden"!==t.type&&"none"!==t.style.display&&"hidden"!==t.style.visibility&&r(e.parentNode)},c=function(e){return/INPUT|TEXTAREA|BUTTON/.test(e.tagName)&&n.get(t.id)&&-1!==e.tabIndex&&r(e)}
if(l.each(o,(function(t,n){if(t.id===e.id)return a=n,!1})),i>0){for(var s=a+1;s<o.length;s++)if(c(o[s]))return o[s]}else for(s=a-1;s>=0;s--)if(c(o[s]))return o[s]
return null},y=l.explode(function(e){return e.getParam("tab_focus",function(e){return e.getParam("tabfocus_elements",":prev,:next")}(e))}(e))
if(1===y.length&&(y[1]=y[0],y[0]=":prev"),c=t.shiftKey?":prev"===y[0]?s(-1):u.get(y[0]):":next"===y[1]?s(1):u.get(y[1])){var f=n.get(c.id||c.name)
c.id&&f?f.focus():o.setTimeout((function(){i.webkit||window.focus(),c.focus()}),10),t.preventDefault()}}}
e.on("init",(function(){e.inline&&u.setAttrib(e.getBody(),"tabIndex",null),e.on("keyup",a),i.gecko?e.on("keypress keydown",t):e.on("keydown",t)}))})(e)}))})()

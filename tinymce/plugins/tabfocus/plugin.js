(function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),n=tinymce.util.Tools.resolve("tinymce.EditorManager"),i=tinymce.util.Tools.resolve("tinymce.Env"),o=tinymce.util.Tools.resolve("tinymce.util.Delay"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),r=tinymce.util.Tools.resolve("tinymce.util.VK"),u=t.DOM,c=function(e){e.keyCode!==r.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()}
e.add("tabfocus",(function(e){(function(e){var t=function(t){var c,a
if(!(t.keyCode!==r.TAB||t.ctrlKey||t.altKey||t.metaKey||t.isDefaultPrevented())){var s,y=function(i){var o=u.select(":input:enabled,*[tabindex]:not(iframe)"),r=function(e){return"BODY"===e.nodeName||"hidden"!==e.type&&"none"!==e.style.display&&"hidden"!==e.style.visibility&&r(e.parentNode)},s=function(e){return/INPUT|TEXTAREA|BUTTON/.test(e.tagName)&&n.get(t.id)&&-1!==e.tabIndex&&r(e)}
if(l.each(o,(function(t,n){if(t.id===e.id)return c=n,!1})),i>0){for(a=c+1;a<o.length;a++)if(s(o[a]))return o[a]}else for(a=c-1;a>=0;a--)if(s(o[a]))return o[a]
return null},f=l.explode(function(e){return e.getParam("tab_focus",function(e){return e.getParam("tabfocus_elements",":prev,:next")}(e))}(e))
if(1===f.length&&(f[1]=f[0],f[0]=":prev"),s=t.shiftKey?":prev"===f[0]?y(-1):u.get(f[0]):":next"===f[1]?y(1):u.get(f[1])){var d=n.get(s.id||s.name)
s.id&&d?d.focus():o.setTimeout((function(){i.webkit||window.focus(),s.focus()}),10),t.preventDefault()}}}
e.on("init",(function(){e.inline&&u.setAttrib(e.getBody(),"tabIndex",null),e.on("keyup",c),i.gecko?e.on("keypress keydown",t):e.on("keydown",t)}))})(e)}))})()

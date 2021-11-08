(function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=tinymce.util.Tools.resolve("tinymce.Env"),n=new RegExp("^"+/(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source+"$","i"),r=function(t){return/^[(\[{ \u00a0]$/.test(t)},i=function(t){return 3===t.nodeType},o=function(t){return 1===t.nodeType},f=function(t,e){if(e<0&&(e=0),i(t)){var n=t.data.length
e>n&&(e=n)}return e},a=function(t,e,n){!o(e)||e.hasChildNodes()?t.setStart(e,f(e,n)):t.setStartBefore(e)},u=function(t,e,n){!o(e)||e.hasChildNodes()?t.setEnd(e,f(e,n)):t.setEndAfter(e)},d=function(t,e){var o,f,d,s,l,c,g,h=function(t){return t.getParam("autolink_pattern",n)}(t),C=function(t){return t.getParam("default_link_target",!1)}(t)
if(null===t.dom.getParent(t.selection.getNode(),"a[href]")){var m=t.selection.getRng().cloneRange()
if(m.startOffset<5){if(!(l=m.endContainer.previousSibling)){if(!m.endContainer.firstChild||!m.endContainer.firstChild.nextSibling)return
l=m.endContainer.firstChild.nextSibling}if(c=l.length,a(m,l,c),u(m,l,c),m.endOffset<5)return
o=m.endOffset,f=l}else{if(f=m.endContainer,!i(f)&&f.firstChild){for(;!i(f)&&f.firstChild;)f=f.firstChild
i(f)&&(a(m,f,0),u(m,f,f.nodeValue.length))}o=1===m.endOffset?2:m.endOffset-1-e}var k,w=o
do{a(m,f,o>=2?o-2:0),u(m,f,o>=1?o-1:0),o-=1,g=m.toString()}while(!r(g)&&o-2>=0)
r(m.toString())?(a(m,f,o),u(m,f,w),o+=1):0===m.startOffset?(a(m,f,0),u(m,f,w)):(a(m,f,o),u(m,f,w)),s=m.toString(),k=s.charAt(s.length-1),/[?!,.;:]/.test(k)&&u(m,f,w-1)
var y=(s=m.toString().trim()).match(h),v=function(t){return t.getParam("link_default_protocol","http","string")}(t)
if(y){var A=y[0];(function(t,e,n){return""===e||t.length>=e.length&&t.substr(n,n+e.length)===e})(A,"www.",0)?A=v+"://"+A:function(t,e){return-1!==t.indexOf(e)}(A,"@")&&!function(t){return/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(t)}(A)&&(A="mailto:"+A),d=t.selection.getBookmark(),t.selection.setRng(m),t.execCommand("createlink",!1,A),!1!==C&&t.dom.setAttrib(t.selection.getNode(),"target",C),t.selection.moveToBookmark(d),t.nodeChanged()}}},s=function(t){var n
t.on("keydown",(function(e){if(13===e.keyCode)return function(t){return d(t,-1)}(t)})),e.browser.isIE()?t.on("focus",(function(){if(!n){n=!0
try{t.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}})):(t.on("keypress",(function(e){if(41===e.keyCode||93===e.keyCode||125===e.keyCode)return function(t){return d(t,-1)}(t)})),t.on("keyup",(function(e){if(32===e.keyCode)return function(t){return d(t,0)}(t)})))}
t.add("autolink",(function(t){s(t)}))})()

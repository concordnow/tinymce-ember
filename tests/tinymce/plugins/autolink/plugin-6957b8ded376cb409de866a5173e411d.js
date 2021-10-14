(function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env"),n=new RegExp("^"+/(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source+"$","i"),i=function(e,t){if(t<0&&(t=0),3===e.nodeType){var n=e.data.length
t>n&&(t=n)}return t},o=function(e,t,n){1!==t.nodeType||t.hasChildNodes()?e.setStart(t,i(t,n)):e.setStartBefore(t)},r=function(e,t,n){1!==t.nodeType||t.hasChildNodes()?e.setEnd(t,i(t,n)):e.setEndAfter(t)},a=function(e,t,i){var a,f,d,s,u,c,l,g=function(e){return e.getParam("autolink_pattern",n)}(e),h=function(e){return e.getParam("default_link_target",!1)}(e)
if("A"!==e.selection.getNode().tagName){var C=e.selection.getRng().cloneRange()
if(C.startOffset<5){if(!(u=C.endContainer.previousSibling)){if(!C.endContainer.firstChild||!C.endContainer.firstChild.nextSibling)return
u=C.endContainer.firstChild.nextSibling}if(c=u.length,o(C,u,c),r(C,u,c),C.endOffset<5)return
a=C.endOffset,f=u}else{if(3!==(f=C.endContainer).nodeType&&f.firstChild){for(;3!==f.nodeType&&f.firstChild;)f=f.firstChild
3===f.nodeType&&(o(C,f,0),r(C,f,f.nodeValue.length))}a=1===C.endOffset?2:C.endOffset-1-t}var m,y=a
do{o(C,f,a>=2?a-2:0),r(C,f,a>=1?a-1:0),a-=1,l=C.toString()}while(" "!==l&&""!==l&&160!==l.charCodeAt(0)&&a-2>=0&&l!==i)
!function(e,t){return e===t||" "===e||160===e.charCodeAt(0)}(C.toString(),i)?0===C.startOffset?(o(C,f,0),r(C,f,y)):(o(C,f,a),r(C,f,y)):(o(C,f,a),r(C,f,y),a+=1),s=C.toString(),m=s.charAt(s.length-1),/[?!,.;:]/.test(m)&&r(C,f,y-1)
var w=(s=C.toString().trim()).match(g),k=function(e){return e.getParam("link_default_protocol","http","string")}(e)
if(w){var p=w[0];(function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t})(p,"www.",0)?p=k+"://"+p:function(e,t){return-1!==e.indexOf(t)}(p,"@")&&!function(e){return/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(e)}(p)&&(p="mailto:"+p),d=e.selection.getBookmark(),e.selection.setRng(C),e.execCommand("createlink",!1,p),!1!==h&&e.dom.setAttrib(e.selection.getNode(),"target",h),e.selection.moveToBookmark(d),e.nodeChanged()}}},f=function(e){var n
e.on("keydown",(function(t){if(13===t.keyCode)return function(e){a(e,-1,"")}(e)})),t.browser.isIE()?e.on("focus",(function(){if(!n){n=!0
try{e.execCommand("AutoUrlDetect",!1,!0)}catch(t){}}})):(e.on("keypress",(function(t){if(41===t.keyCode)return function(e){a(e,-1,"(")}(e)})),e.on("keyup",(function(t){if(32===t.keyCode)return function(e){a(e,0,"")}(e)})))}
e.add("autolink",(function(e){f(e)}))})()

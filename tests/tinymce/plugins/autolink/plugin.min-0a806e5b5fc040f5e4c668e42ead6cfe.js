!function(){"use strict"
function e(e,t){var n
return t<0&&(t=0),3!==e.nodeType||(n=e.data.length)<t&&(t=n),t}function t(t,n,o){1!==n.nodeType||n.hasChildNodes()?t.setStart(n,e(n,o)):t.setStartBefore(n)}function n(t,n,o){1!==n.nodeType||n.hasChildNodes()?t.setEnd(n,e(n,o)):t.setEndAfter(n)}function o(e,o,i){var r,d,s,l,f,c,g=e.getParam("autolink_pattern",a),u=e.getParam("default_link_target",!1)
if("A"!==e.selection.getNode().tagName){var h=e.selection.getRng().cloneRange()
if(h.startOffset<5){if(!(l=h.endContainer.previousSibling)){if(!h.endContainer.firstChild||!h.endContainer.firstChild.nextSibling)return
l=h.endContainer.firstChild.nextSibling}if(t(h,l,f=l.length),n(h,l,f),h.endOffset<5)return
r=h.endOffset,d=l}else{if(3!==(d=h.endContainer).nodeType&&d.firstChild){for(;3!==d.nodeType&&d.firstChild;)d=d.firstChild
3===d.nodeType&&(t(h,d,0),n(h,d,d.nodeValue.length))}r=1===h.endOffset?2:h.endOffset-1-o}for(var C,m=r;t(h,d,2<=r?r-2:0),n(h,d,1<=r?r-1:0),--r," "!==(c=h.toString())&&""!==c&&160!==c.charCodeAt(0)&&0<=r-2&&c!==i;);(C=h.toString())===i||" "===C||160===C.charCodeAt(0)?(t(h,d,r),n(h,d,m),r+=1):(0===h.startOffset?t(h,d,0):t(h,d,r),n(h,d,m)),y=h.toString(),/[?!,.;:]/.test(y.charAt(y.length-1))&&n(h,d,m-1)
var y,k,w,p,A=(y=h.toString().trim()).match(g),v=e.getParam("link_default_protocol","http","string")
A&&((w=k=A[0]).length>=(p="www.").length&&w.substr(0,0+p.length)===p?k=v+"://"+k:-1===k.indexOf("@")||/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(k)||(k="mailto:"+k),s=e.selection.getBookmark(),e.selection.setRng(h),e.execCommand("createlink",!1,k),!1!==u&&e.dom.setAttrib(e.selection.getNode(),"target",u),e.selection.moveToBookmark(s),e.nodeChanged())}}var i=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.Env"),a=new RegExp("^"+/(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source+"$","i")
i.add("autolink",(function(e){var t,n;(t=e).on("keydown",(function(e){13===e.keyCode&&o(t,-1,"")})),r.browser.isIE()?t.on("focus",(function(){if(!n){n=!0
try{t.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}})):(t.on("keypress",(function(e){41===e.keyCode&&o(t,-1,"(")})),t.on("keyup",(function(e){32===e.keyCode&&o(t,0,"")})))}))}()

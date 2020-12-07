(function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=tinymce.util.Tools.resolve("tinymce.Env"),n=function(t,e){if(e<0&&(e=0),3===t.nodeType){var n=t.data.length
e>n&&(e=n)}return e},i=function(t,e,i){1!==e.nodeType||e.hasChildNodes()?t.setStart(e,n(e,i)):t.setStartBefore(e)},o=function(t,e,i){1!==e.nodeType||e.hasChildNodes()?t.setEnd(e,n(e,i)):t.setEndAfter(e)},r=function(t,e,n){var r,f,a,s,d,l,c,u=function(t){return t.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@(?!.*@))(.+)$/i)}(t),g=function(t){return t.getParam("default_link_target",!1)}(t)
if("A"!==t.selection.getNode().tagName){var h=t.selection.getRng().cloneRange()
if(h.startOffset<5){if(!(d=h.endContainer.previousSibling)){if(!h.endContainer.firstChild||!h.endContainer.firstChild.nextSibling)return
d=h.endContainer.firstChild.nextSibling}if(l=d.length,i(h,d,l),o(h,d,l),h.endOffset<5)return
r=h.endOffset,f=d}else{if(3!==(f=h.endContainer).nodeType&&f.firstChild){for(;3!==f.nodeType&&f.firstChild;)f=f.firstChild
3===f.nodeType&&(i(h,f,0),o(h,f,f.nodeValue.length))}r=1===h.endOffset?2:h.endOffset-1-e}var m=r
do{i(h,f,r>=2?r-2:0),o(h,f,r>=1?r-1:0),r-=1,c=h.toString()}while(" "!==c&&""!==c&&160!==c.charCodeAt(0)&&r-2>=0&&c!==n)
!function(t,e){return t===e||" "===t||160===t.charCodeAt(0)}(h.toString(),n)?0===h.startOffset?(i(h,f,0),o(h,f,m)):(i(h,f,r),o(h,f,m)):(i(h,f,r),o(h,f,m),r+=1),"."===(s=h.toString()).charAt(s.length-1)&&o(h,f,m-1)
var C=(s=h.toString().trim()).match(u),y=function(t){return t.getParam("link_default_protocol","http","string")}(t)
C&&("www."===C[1]?C[1]=y+"://www.":/@$/.test(C[1])&&!/^mailto:/.test(C[1])&&(C[1]="mailto:"+C[1]),a=t.selection.getBookmark(),t.selection.setRng(h),t.execCommand("createlink",!1,C[1]+C[2]),!1!==g&&t.dom.setAttrib(t.selection.getNode(),"target",g),t.selection.moveToBookmark(a),t.nodeChanged())}},f=function(t){var n
t.on("keydown",(function(e){if(13===e.keyCode)return function(t){r(t,-1,"")}(t)})),e.browser.isIE()?t.on("focus",(function(){if(!n){n=!0
try{t.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}})):(t.on("keypress",(function(e){if(41===e.keyCode)return function(t){r(t,-1,"(")}(t)})),t.on("keyup",(function(e){if(32===e.keyCode)return function(t){r(t,0,"")}(t)})))}
t.add("autolink",(function(t){f(t)}))})()

!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env"),n=function(e,t){var n
return t<0&&(t=0),3!==e.nodeType||(n=e.data.length)<t&&(t=n),t},o=function(e,t,o){1!==t.nodeType||t.hasChildNodes()?e.setStart(t,n(t,o)):e.setStartBefore(t)},i=function(e,t,o){1!==t.nodeType||t.hasChildNodes()?e.setEnd(t,n(t,o)):e.setEndAfter(t)},r=function(e,t,n){var r,a,s,d,f,l,c,g=e.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@(?!.*@))(.+)$/i),u=e.getParam("default_link_target",!1)
if("A"!==e.selection.getNode().tagName){var h=e.selection.getRng().cloneRange()
if(h.startOffset<5){if(!(f=h.endContainer.previousSibling)){if(!h.endContainer.firstChild||!h.endContainer.firstChild.nextSibling)return
f=h.endContainer.firstChild.nextSibling}if(l=f.length,o(h,f,l),i(h,f,l),h.endOffset<5)return
r=h.endOffset,a=f}else{if(3!==(a=h.endContainer).nodeType&&a.firstChild){for(;3!==a.nodeType&&a.firstChild;)a=a.firstChild
3===a.nodeType&&(o(h,a,0),i(h,a,a.nodeValue.length))}r=1===h.endOffset?2:h.endOffset-1-t}for(var m,C=r;o(h,a,2<=r?r-2:0),i(h,a,1<=r?r-1:0),--r," "!==(c=h.toString())&&""!==c&&160!==c.charCodeAt(0)&&0<=r-2&&c!==n;);(m=h.toString())===n||" "===m||160===m.charCodeAt(0)?(o(h,a,r),i(h,a,C),r+=1):(0===h.startOffset?o(h,a,0):o(h,a,r),i(h,a,C)),"."===(d=h.toString()).charAt(d.length-1)&&i(h,a,C-1)
var y=(d=h.toString().trim()).match(g),k=e.getParam("link_default_protocol","http","string")
y&&("www."===y[1]?y[1]=k+"://www.":/@$/.test(y[1])&&!/^mailto:/.test(y[1])&&(y[1]="mailto:"+y[1]),s=e.selection.getBookmark(),e.selection.setRng(h),e.execCommand("createlink",!1,y[1]+y[2]),!1!==u&&e.dom.setAttrib(e.selection.getNode(),"target",u),e.selection.moveToBookmark(s),e.nodeChanged())}}
e.add("autolink",(function(e){(function(n){var o
n.on("keydown",(function(e){13!==e.keyCode||r(n,-1,"")})),t.browser.isIE()?n.on("focus",(function(){if(!o){o=!0
try{n.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}})):(n.on("keypress",(function(e){41!==e.keyCode||r(n,-1,"(")})),n.on("keyup",(function(e){32!==e.keyCode||r(n,0,"")})))})(e)}))}()

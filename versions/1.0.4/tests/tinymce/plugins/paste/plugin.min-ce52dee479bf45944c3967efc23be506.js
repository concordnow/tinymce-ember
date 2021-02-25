!function(){"use strict"
var e,t,n,r=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(e){return function(){return e}},i=a(!1),s=a(!0),u=function(){return l},l=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:i,isSome:i,isNone:s,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:n,orThunk:t,map:u,each:function(){},bind:u,exists:i,forall:s,filter:u,equals:e,equals_:e,toArray:function(){return[]},toString:a("none()")}),c=function(e){var t=a(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:s,isNone:i,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return c(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:l},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(i,(function(t){return n(e,t)}))}}
return o},f={some:c,none:u,from:function(e){return null==e?l:c(e)}},d=("function",function(e){return"function"==typeof e}),m=Array.prototype.slice,p=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var a=e[o]
r[o]=t(a,o)}return r},g=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},v=d(Array.from)?Array.from:function(e){return m.call(e)},h=tinymce.util.Tools.resolve("tinymce.Env"),b=tinymce.util.Tools.resolve("tinymce.util.Delay"),y=tinymce.util.Tools.resolve("tinymce.util.Promise"),x=tinymce.util.Tools.resolve("tinymce.util.VK"),P=function(e,t){return e.fire("PastePlainTextToggle",{state:t})},w=function(e){return e.getParam("paste_data_images",!1)},_=function(e){return e.getParam("paste_retain_style_properties")},T=function(e){return e.getParam("validate")},C=function(e){return e.getParam("paste_data_images",!1,"boolean")},D="x-tinymce/html",k="\x3c!-- "+D+" --\x3e",S=function(e){return-1!==e.indexOf(k)},O=tinymce.util.Tools.resolve("tinymce.html.Entities"),R=tinymce.util.Tools.resolve("tinymce.util.Tools"),A=tinymce.util.Tools.resolve("tinymce.html.DomParser"),I=tinymce.util.Tools.resolve("tinymce.html.Serializer"),F=" ",E=tinymce.util.Tools.resolve("tinymce.html.Node"),M=tinymce.util.Tools.resolve("tinymce.html.Schema")
function N(e,t){return R.each(t,(function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])})),e}function B(e){return N(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?F:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function j(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}var H,$=function(e,t){var n,r=_(e)
r&&(n=R.makeMap(r.split(/[, ]/))),t=N(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,F],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return 0<t.length?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(F):""}]])
var o=e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"),a=M({valid_elements:o,valid_children:"-li[p]"})
R.each(a.elements,(function(e){e.attributes.class||(e.attributes.class={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))}))
var i=A({},a)
i.addAttributeFilter("style",(function(t){for(var r,o=t.length;o--;)(r=t[o]).attr("style",function(e,t,n,r){var o,a={},i=e.dom.parseStyle(r)
return R.each(i,(function(i,s){switch(s){case"mso-list":(o=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(o[1],10)),/Ignore/i.test(i)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
break
case"horiz-align":s="text-align"
break
case"vert-align":s="vertical-align"
break
case"font-color":case"mso-foreground":s="color"
break
case"mso-background":case"mso-highlight":s="background"
break
case"font-weight":case"font-style":return void("normal"!==i&&(a[s]=i))
case"mso-element":if(/^(comment|comment-list)$/i.test(i))return void n.remove()}0!==s.indexOf("mso-comment")?0!==s.indexOf("mso-")&&("all"===_(e)||t&&t[s])&&(a[s]=i):n.remove()})),/(bold)/i.test(a["font-weight"])&&(delete a["font-weight"],n.wrap(new E("b",1))),/(italic)/i.test(a["font-style"])&&(delete a["font-style"],n.wrap(new E("i",1))),(a=e.dom.serializeStyle(a,n.name))||null}(e,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)})),i.addNodeFilter("del",(function(e){for(var t=e.length;t--;)e[t].remove()})),i.addNodeFilter("a",(function(e){for(var t,n,r,o=e.length;o--;)if(n=(t=e[o]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove()
else if(n&&0===n.indexOf("file://")&&(n=(n=n.split("#")[1])&&"#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap()
continue}t.attr({href:n,name:r})}else t.unwrap()}))
var s=i.parse(t)
return e.getParam("paste_convert_word_fake_lists",!0)&&function(e){var t,n,r=1
function o(e,t){if(3!==e.type||!t.test(e.value)){if(e=e.firstChild)do{if(!o(e,t))return}while(e=e.next)
return 1}e.value=e.value.replace(t,"")}function a(e,a,i){var s=e._listLevel||r
s!==r&&(t=s<r?t&&t.parent.parent:(n=t,null)),t&&t.name===a?t.append(e):(n=n||t,t=new E(a,1),1<i&&t.attr("start",""+i),e.wrap(t)),e.name="li",r<s&&n&&n.lastChild.append(t),r=s,function e(t){if(t._listIgnore)t.remove()
else if(t=t.firstChild)for(;e(t),t=t.next;);}(e),o(e,/^\u00a0+/),o(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),o(e,/^\u00a0+/)}for(var i=[],s=e.firstChild;null!=s;)if(i.push(s),null!==(s=s.walk()))for(;void 0!==s&&s.parent!==e;)s=s.walk()
for(var u=0;u<i.length;u++)if("p"===(e=i[u]).name&&e.firstChild){var l=function e(t){var n=""
if(3===t.type)return t.value
if(t=t.firstChild)for(;n+=e(t),t=t.next;);return n}(e)
if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(l)){a(e,"ul")
continue}if(function(e){var t
return e=e.replace(/^[\u00a0 ]+/,""),R.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(e))return!(t=!0)})),t}(l)){var c=/([0-9]+)\./.exec(l),f=1
c&&(f=parseInt(c[1],10)),a(e,"ol",f)
continue}if(e._listLevel){a(e,"ul",1)
continue}t=null}else n=t,t=null}(s),I({validate:T(e)},a).serialize(s)},L=function(e,t){return{content:e,cancelled:t}},z=function(e,t,n){var r,o,a=j(t)
return function(e,t,n,r){var o,a,i,s,u,l,c,f,d,m,p,g=(o=t,a=n,i=r,e.fire("PastePreProcess",{content:o,internal:a,wordContent:i})),v=function(e,t){var n=A({},e.schema)
n.addNodeFilter("meta",(function(e){R.each(e,(function(e){e.remove()}))}))
var r=n.parse(t,{forced_root_block:!1,isRootContent:!0})
return I({validate:T(e)},e.schema).serialize(r)}(e,g.content)
return e.hasEventListeners("PastePostProcess")&&!g.isDefaultPrevented()?(u=v,l=n,c=r,f=(s=e).dom.create("div",{style:"display:none"},u),d=l,m=c,p=s.fire("PastePostProcess",{node:f,internal:d,wordContent:m}),L(p.node.innerHTML,p.isDefaultPrevented())):L(v,g.isDefaultPrevented())}(e,a?(o=t,(r=e).getParam("paste_enable_default_filters",!0)?$(r,o):o):t,n,a)},U=function(e,t){return e.insertContent(t,{merge:e.getParam("paste_merge_formats",!0),paste:!0}),!0},q=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},V=function(e){return q(e)&&/.(gif|jpe?g|png)$/.test(e)},K=function(e,t,n){return!(!1!==e.selection.isCollapsed()||!q(t)||(o=t,a=n,(r=e).undoManager.extra((function(){a(r,o)}),(function(){r.execCommand("mceInsertLink",!1,o)})),0))
var r,o,a},X=function(e,t,n){return!!V(t)&&(o=t,a=n,(r=e).undoManager.extra((function(){a(r,o)}),(function(){r.insertContent('<img src="'+o+'">')})),!0)
var r,o,a},W=function(e){return"\n"===e||"\r"===e},Y=function(e,t,n,r){var o=z(e,t,n)
!1===o.cancelled&&function(e,t,n){var r,o
n||!1===e.getParam("smart_paste",!0)?U(e,t):(r=e,o=t,R.each([K,X,U],(function(e){return!0!==e(r,o,U)})))}(e,o.content,r)},Z=function(e,t,n){var r=n||S(t)
Y(e,t.replace(k,""),r,!1)},G=function(e,t){var n,r,o,a=e.dom.encode(t).replace(/\r\n/g,"\n"),i=function(e,t){var n,r,o,a=(n=e.getParam("paste_tab_spaces",4,"number"))<=0?"":new Array(n+1).join(" "),i=t.replace(/\t/g,a)
return(o={pcIsSpace:!(r=function(e,t){return-1!==" \f\t\v".indexOf(t)||t===F?e.pcIsSpace||""===e.str||e.str.length===i.length-1||(n=i,(r=e.str.length+1)<n.length&&0<=r&&W(n[r]))?{pcIsSpace:!1,str:e.str+F}:{pcIsSpace:!0,str:e.str+" "}:{pcIsSpace:W(t),str:e.str+t}
var n,r}),str:""},g(i,(function(e){o=r(o,e)})),o).str}(e,a),s=(n=i,r=e.getParam("forced_root_block"),o=e.getParam("forced_root_block_attrs"),r?function(e,t,n){var r=e.split(/\n\n/),o=function(e,t){var n,r=[],o="<"+e
if("object"==typeof t){for(n in t)t.hasOwnProperty(n)&&r.push(n+'="'+O.encodeAllRaw(t[n])+'"')
r.length&&(o+=" "+r.join(" "))}return o+">"}(t,n),a="</"+t+">",i=R.map(r,(function(e){return e.split(/\n/).join("<br />")}))
return 1===i.length?i[0]:R.map(i,(function(e){return o+e+a})).join("")}(n,!0===r?"p":r,o):n.replace(/\r?\n/g,"<br>"))
Y(e,s,!1,!0)},J=function(e){var t,n={}
if(e&&(!e.getData||(t=e.getData("Text"))&&0<t.length&&-1===t.indexOf("data:text/mce-internal,")&&(n["text/plain"]=t),e.types))for(var r=0;r<e.types.length;r++){var o=e.types[r]
try{n[o]=e.getData(o)}catch(a){n[o]=""}}return n},Q=function(e,t){return t in e&&0<e[t].length},ee=function(e){return Q(e,"text/html")||Q(e,"text/plain")},te=("mceclip",H=0,function(){return"mceclip"+H++}),ne=function(e,t,n){var r,o,a,i,s="paste"===t.type?t.clipboardData:t.dataTransfer
if(C(e)&&s){var u=(a=(o=s).items?p(v(o.items),(function(e){return e.getAsFile()})):[],i=o.files?v(o.files):[],function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var a=e[r]
t(a)&&n.push(a)}return n}(0<a.length?a:i,(function(e){return/^image\/(jpeg|png|gif|bmp)$/.test(e.type)})))
if(0<u.length)return t.preventDefault(),r=u,y.all(p(r,(function(e){return new y((function(t){var n=e.getAsFile?e.getAsFile():e,r=new window.FileReader
r.onload=function(){t({blob:n,uri:r.result})},r.readAsDataURL(n)}))}))).then((function(t){n&&e.selection.setRng(n),g(t,(function(t){(function(e,t){var n,r,o,a,i,s,u,l,c,f=(n=t.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),d=f.data,m=f.type,p=te(),g=e.getParam("images_reuse_filename")&&t.blob.name?(o=e,(a=t.blob.name.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i))?o.dom.encode(a[1]):null):p,v=new Image
v.src=t.uri,l=v,!(c=e.getParam("images_dataimg_filter"))||c(l)?(s=void 0,(u=(i=e.editorUpload.blobCache).getByData(d,m))?s=u:(s=i.create(p,t.blob,d,g),i.add(s)),Z(e,'<img src="'+s.blobUri()+'">',!1)):Z(e,'<img src="'+t.uri+'">',!1)})(e,t)}))})),!0}return!1},re=function(e){return x.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode},oe=function(e,t,n){var o,a,i=(o=r(f.none()),{clear:function(){return o.set(f.none())},set:function(e){return o.set(f.some(e))},isSet:function(){return o.get().isSome()},on:function(e){return o.get().each(e)}})
function s(n,r,o,a){var i
Q(n,"text/html")?i=n["text/html"]:(i=t.getHtml(),a=a||S(i),t.isDefaultContent(i)&&(o=!0)),i=B(i),t.remove()
var s=!1===a&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(i),u=V(i)
i.length&&(!s||u)||(o=!0),(o||u)&&(i=Q(n,"text/plain")&&s?n["text/plain"]:function(e){var t=M(),n=A({},t),r="",o=t.getShortEndedElements(),a=R.makeMap("script noscript style textarea video audio iframe object"," "),i=t.getBlockElements()
return e=N(e,[/<!\[[^\]]+\]>/g]),function e(t){var n=t.name,s=t
if("br"!==n){if("wbr"!==n)if(o[n]&&(r+=" "),a[n])r+=" "
else{if(3===t.type&&(r+=t.value),!t.shortEnded&&(t=t.firstChild))for(;e(t),t=t.next;);i[n]&&s.next&&(r+="\n","p"===n&&(r+="\n"))}}else r+="\n"}(n.parse(e)),r}(i)),t.isDefaultContent(i)?r||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):o?G(e,i):Z(e,i,a)}e.on("keydown",(function(n){function r(e){re(e)&&!e.isDefaultPrevented()&&t.remove()}if(re(n)&&!n.isDefaultPrevented()){if((a=n.shiftKey&&86===n.keyCode)&&h.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
if(n.stopImmediatePropagation(),i.set(n),window.setTimeout((function(){i.clear()}),100),h.ie&&a)return n.preventDefault(),!0,void e.fire("paste",{ieFake:true})
t.remove(),t.create(),e.once("keyup",r),e.once("paste",(function(){e.off("keyup",r)}))}})),e.on("paste",(function(r){var o,u,l=i.isSet(),c=(o=e,J(r.clipboardData||o.getDoc().dataTransfer)),f="text"===n.get()||a,d=Q(c,D)
a=!1,r.isDefaultPrevented()||(u=r.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&u&&u.items&&0===u.items.length)||!ee(c)&&ne(e,r,t.getLastRng()||e.selection.getRng())?t.remove():(l||r.preventDefault(),!h.ie||l&&!r.ieFake||Q(c,"text/html")||(t.create(),e.dom.bind(t.getEl(),"paste",(function(e){e.stopPropagation()})),e.getDoc().execCommand("Paste",!1,null),c["text/html"]=t.getHtml()),Q(c,"text/html")?(r.preventDefault(),d=d||S(c["text/html"]),s(c,l,f,d)):b.setEditorTimeout(e,(function(){s(c,l,f,d)}),0))}))},ae=function(e){return h.ie&&e.inline?document.body:e.getBody()},ie=function(e){return e.dom.get("mcepastebin")},se=function(e,t){var n,r=ie(e)
return(n=r)&&"mcepastebin"===n.id&&function(e,t){return t===e}(t,r.innerHTML)},ue=function(e){var t=r(null),n="%MCEPASTEBIN%"
return{create:function(){return function(e,t,n){var r=e.dom,o=e.getBody()
t.set(e.selection.getRng())
var a=e.dom.add(ae(e),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(h.ie||h.gecko)&&r.setStyle(a,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(a,"beforedeactivate focusin focusout",(function(e){e.stopPropagation()})),function(e,t,n){var r
ae(r=e)!==r.getBody()&&e.dom.bind(t,"paste keyup",(function(t){se(e,n)||e.fire("paste")}))}(e,a,n),a.focus(),e.selection.select(a,!0)}(e,t,n)},remove:function(){return function(e,t){if(ie(e)){for(var n=void 0,r=t.get();n=e.dom.get("mcepastebin");)e.dom.remove(n),e.dom.unbind(n)
r&&e.selection.setRng(r)}t.set(null)}(e,t)},getEl:function(){return ie(e)},getHtml:function(){return function(e){var t=function(t,n){t.appendChild(n),e.dom.remove(n,!0)},n=R.grep(ae(e).childNodes,(function(e){return"mcepastebin"===e.id})),r=n.shift()
R.each(n,(function(e){t(r,e)}))
for(var o=e.dom.select("div[id=mcepastebin]",r),a=o.length-1;0<=a;a--){var i=e.dom.create("div")
r.insertBefore(i,o[a]),t(i,o[a])}return r?r.innerHTML:""}(e)},getLastRng:function(){return t.get()},isDefault:function(){return se(e,n)},isDefaultContent:function(e){return e===n}}},le=function(e,t,n,r){!function(e,t,n){if(r=e,!1!==h.iOS||"function"!=typeof(null==r?void 0:r.setData))return!1
try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(D,t),!0}catch(o){return!1}var r}(e.clipboardData,t.html,t.text)?n(t.html,r):(e.preventDefault(),r())},ce=function(e){return function(t,n){var r=k+t,o=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),a=e.dom.create("div",{contenteditable:"true"},r)
e.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(a),e.dom.add(e.getBody(),o)
var i=e.selection.getRng()
a.focus()
var s=e.dom.createRng()
s.selectNodeContents(a),e.selection.setRng(s),b.setTimeout((function(){e.selection.setRng(i),o.parentNode.removeChild(o),n()}),0)}},fe=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},de=function(e){return!e.selection.isCollapsed()||!!(t=e).dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())
var t},me=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),pe=function(e,t){return me.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())},ge=function(e,t){e.focus(),e.selection.setRng(t)}
function ve(e,t){e.on("PastePreProcess",(function(n){n.content=t(e,n.content,n.internal,n.wordContent)}))}function he(e,t){if(!j(t))return t
var n=[]
return R.each(e.schema.getBlockElements(),(function(e,t){n.push(t)})),t=N(t,[[new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g"),"$1"]]),N(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function be(e,t,n,r){if(r||n)return t
var o,a,i,s=e.getParam("paste_webkit_styles")
return!1===e.getParam("paste_remove_styles_if_webkit",!0)||"all"===s?t:(s&&(o=s.split(/[, ]/)),t=(t=o?(a=e.dom,i=e.selection.getNode(),t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(e,t,n,r){var s=a.parseStyle(a.decode(n)),u={}
if("none"===o)return t+r
for(var l=0;l<o.length;l++){var c=s[o[l]],f=a.getStyle(i,o[l],!0);/color/.test(o[l])&&(c=a.toHex(c),f=a.toHex(f)),f!==c&&(u[o[l]]=c)}return(u=a.serializeStyle(u,"span"))?t+' style="'+u+'"'+r:t+r}))):t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")).replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(e,t,n,r){return t+' style="'+n+'"'+r})))}function ye(e,t){e.$("a",t).find("font,u").each((function(t,n){e.dom.remove(n,!0)}))}var xe=function(e,t){return function(n){n.setActive("text"===t.pasteFormat.get())
var r=function(e){return n.setActive(e.state)}
return e.on("PastePlainTextToggle",r),function(){return e.off("PastePlainTextToggle",r)}}}
o.add("paste",(function(e){if(0==(!!e.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0))){var t=r(!1),n=r(e.getParam("paste_as_text",!1)?"text":"html"),o=(f=n,d=ue(c=e),c.on("PreInit",(function(){return function(e,t,n){var r
oe(e,t,n),e.parser.addNodeFilter("img",(function(t,n,o){var a,i=function(e){e.attr("data-mce-object")||r===h.transparentSrc||e.remove()}
if(!C(e)&&(a=o).data&&!0===a.data.paste)for(var s=t.length;s--;)(r=t[s].attr("src"))&&(0!==r.indexOf("webkit-fake-url")&&(e.getParam("allow_html_data_urls",!1,"boolean")||0!==r.indexOf("data:"))||i(t[s]))}))}(c,d,f)})),{pasteFormat:f,pasteHtml:function(e,t){return Z(c,e,t)},pasteText:function(e){return G(c,e)},pasteImageData:function(e,t){return ne(c,e,t)},getDataTransferItems:J,hasHtmlOrText:ee,hasContentType:Q})
return s=e,h.webkit&&ve(s,be),h.ie&&(ve(s,he),l=ye,(u=s).on("PastePostProcess",(function(e){l(u,e.node)}))),i=o,(a=e).ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return a.execCommand("mceTogglePlainTextPaste")},onSetup:xe(a,i)}),a.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:function(){return a.execCommand("mceTogglePlainTextPaste")},onSetup:xe(a,i)}),function(e,t){e.addCommand("mceTogglePlainTextPaste",(function(){var n,r
n=e,"text"===(r=t).pasteFormat.get()?(r.pasteFormat.set("html"),P(n,!1)):(r.pasteFormat.set("text"),P(n,!0)),n.focus()})),e.addCommand("mceInsertClipboardContent",(function(e,n){n.content&&t.pasteHtml(n.content,n.internal),n.text&&t.pasteText(n.text)}))}(e,o),function(e){var t=e.plugins.paste,n=e.getParam("paste_preprocess")
n&&e.on("PastePreProcess",(function(e){n.call(t,t,e)}))
var r=e.getParam("paste_postprocess")
r&&e.on("PastePostProcess",(function(e){r.call(t,t,e)}))}(e),function(e){var t,n
e.on("cut",(t=e,function(e){de(t)&&le(e,fe(t),ce(t),(function(){var e
h.browser.isChrome()?(e=t.selection.getRng(),b.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)):t.execCommand("Delete")}))})),e.on("copy",(n=e,function(e){de(n)&&le(e,fe(n),ce(n),(function(){}))}))}(e),function(e,t,n){e.getParam("paste_block_drop",!1)&&e.on("dragend dragover draggesture dragdrop drop drag",(function(e){e.preventDefault(),e.stopPropagation()})),w(e)||e.on("drop",(function(e){var t=e.dataTransfer
t&&t.files&&0<t.files.length&&e.preventDefault()})),e.on("drop",(function(r){var o,a,i,s,u=pe(e,r)
r.isDefaultPrevented()||n.get()||(o=t.getDataTransferItems(r.dataTransfer),a=t.hasContentType(o,D),(!t.hasHtmlOrText(o)||(i=o["text/plain"])&&0===i.indexOf("file://"))&&t.pasteImageData(r,u)||!u||!e.getParam("paste_filter_drop",!0)||(s=o["mce-internal"]||o["text/html"]||o["text/plain"])&&(r.preventDefault(),b.setEditorTimeout(e,(function(){e.undoManager.transact((function(){o["mce-internal"]&&e.execCommand("Delete"),ge(e,u),s=B(s),o["text/html"]?t.pasteHtml(s,a):t.pasteText(s)}))}))))})),e.on("dragstart",(function(e){n.set(!0)})),e.on("dragover dragend",(function(t){w(e)&&!1===n.get()&&(t.preventDefault(),ge(e,pe(e,t))),"dragend"===t.type&&n.set(!1)}))}(e,o,t),{clipboard:o,quirks:void 0}}var a,i,s,u,l,c,f,d}))}()

!function(){"use strict"
var e,t,n,r=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},a=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(e){return function(){return e}},i=o(!1),s=o(!0),u=function(){return l},l=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:i,isSome:i,isNone:s,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(void 0),or:n,orThunk:t,map:u,each:function(){},bind:u,exists:i,forall:s,filter:u,equals:e,equals_:e,toArray:function(){return[]},toString:o("none()")}),c=function(e){var t=o(e),n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:s,isNone:i,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return c(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?a:l},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(i,(function(t){return n(e,t)}))}}
return a},f={some:c,none:u,from:function(e){return null==e?l:c(e)}},d=function(e){return!(null===(t=e)||void 0===t)
var t},m=("function",function(e){return"function"==typeof e}),p=Array.prototype.slice,g=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1},v=function(e,t){for(var n=e.length,r=new Array(n),a=0;a<n;a++){var o=e[a]
r[a]=t(o,a)}return r},h=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},y=m(Array.from)?Array.from:function(e){return p.call(e)},b=function(){var e=r(f.none())
return{clear:function(){return e.set(f.none())},set:function(t){return e.set(f.some(t))},isSet:function(){return e.get().isSome()},on:function(t){return e.get().each(t)}}},x=function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t},P=tinymce.util.Tools.resolve("tinymce.Env"),w=tinymce.util.Tools.resolve("tinymce.util.Delay"),_=tinymce.util.Tools.resolve("tinymce.util.Promise"),T=tinymce.util.Tools.resolve("tinymce.util.VK"),C=function(e,t){return e.fire("PastePlainTextToggle",{state:t})},D=tinymce.util.Tools.resolve("tinymce.util.Tools"),k=function(e){return e.getParam("paste_data_images",!1)},S=function(e){return e.getParam("paste_retain_style_properties")},O=function(e){return e.getParam("validate")},j=function(e){return e.getParam("paste_data_images",!1,"boolean")},R=function(e){return D.explode(e.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))},A="x-tinymce/html",I="\x3c!-- "+A+" --\x3e",F=function(e){return-1!==e.indexOf(I)},E=tinymce.util.Tools.resolve("tinymce.html.Entities"),M=tinymce.util.Tools.resolve("tinymce.html.DomParser"),N=tinymce.util.Tools.resolve("tinymce.html.Serializer"),B=" ",H=tinymce.util.Tools.resolve("tinymce.html.Node"),L=tinymce.util.Tools.resolve("tinymce.html.Schema")
function $(e,t){return D.each(t,(function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])})),e}function z(e){return $(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?B:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function U(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}var q,V=function(e,t){var n,r=S(e)
r&&(n=D.makeMap(r.split(/[, ]/))),t=$(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,B],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return 0<t.length?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(B):""}]])
var a=e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"),o=L({valid_elements:a,valid_children:"-li[p]"})
D.each(o.elements,(function(e){e.attributes.class||(e.attributes.class={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))}))
var i=M({},o)
i.addAttributeFilter("style",(function(t){for(var r,a=t.length;a--;)(r=t[a]).attr("style",function(e,t,n,r){var a,o={},i=e.dom.parseStyle(r)
return D.each(i,(function(i,s){switch(s){case"mso-list":(a=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(a[1],10)),/Ignore/i.test(i)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
break
case"horiz-align":s="text-align"
break
case"vert-align":s="vertical-align"
break
case"font-color":case"mso-foreground":s="color"
break
case"mso-background":case"mso-highlight":s="background"
break
case"font-weight":case"font-style":return void("normal"!==i&&(o[s]=i))
case"mso-element":if(/^(comment|comment-list)$/i.test(i))return void n.remove()}0!==s.indexOf("mso-comment")?0!==s.indexOf("mso-")&&("all"===S(e)||t&&t[s])&&(o[s]=i):n.remove()})),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],n.wrap(new H("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],n.wrap(new H("i",1))),(o=e.dom.serializeStyle(o,n.name))||null}(e,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)})),i.addNodeFilter("del",(function(e){for(var t=e.length;t--;)e[t].remove()})),i.addNodeFilter("a",(function(e){for(var t,n,r,a=e.length;a--;)if(n=(t=e[a]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove()
else if(n&&0===n.indexOf("file://")&&(n=(n=n.split("#")[1])&&"#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap()
continue}t.attr({href:n,name:r})}else t.unwrap()}))
var s=i.parse(t)
return e.getParam("paste_convert_word_fake_lists",!0)&&function(e){var t,n,r=1
function a(e,t){if(3!==e.type||!t.test(e.value)){if(e=e.firstChild)do{if(!a(e,t))return}while(e=e.next)
return 1}e.value=e.value.replace(t,"")}function o(e,o,i){var s=e._listLevel||r
s!==r&&(t=s<r?t&&t.parent.parent:(n=t,null)),t&&t.name===o?t.append(e):(n=n||t,t=new H(o,1),1<i&&t.attr("start",""+i),e.wrap(t)),e.name="li",r<s&&n&&n.lastChild.append(t),r=s,function e(t){if(t._listIgnore)t.remove()
else if(t=t.firstChild)for(;e(t),t=t.next;);}(e),a(e,/^\u00a0+/),a(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),a(e,/^\u00a0+/)}for(var i=[],s=e.firstChild;null!=s;)if(i.push(s),null!==(s=s.walk()))for(;void 0!==s&&s.parent!==e;)s=s.walk()
for(var u=0;u<i.length;u++)if("p"===(e=i[u]).name&&e.firstChild){var l=function e(t){var n=""
if(3===t.type)return t.value
if(t=t.firstChild)for(;n+=e(t),t=t.next;);return n}(e)
if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(l)){o(e,"ul")
continue}if(function(e){var t
return e=e.replace(/^[\u00a0 ]+/,""),D.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(e))return!(t=!0)})),t}(l)){var c=/([0-9]+)\./.exec(l),f=1
c&&(f=parseInt(c[1],10)),o(e,"ol",f)
continue}if(e._listLevel){o(e,"ul",1)
continue}t=null}else n=t,t=null}(s),N({validate:O(e)},o).serialize(s)},K=function(e,t){return{content:e,cancelled:t}},X=function(e,t,n){var r,a,o=U(t)
return function(e,t,n,r){var a,o,i,s,u,l,c,f,d,m,p,g=(a=t,o=n,i=r,e.fire("PastePreProcess",{content:a,internal:o,wordContent:i})),v=function(e,t){var n=M({},e.schema)
n.addNodeFilter("meta",(function(e){D.each(e,(function(e){e.remove()}))}))
var r=n.parse(t,{forced_root_block:!1,isRootContent:!0})
return N({validate:O(e)},e.schema).serialize(r)}(e,g.content)
return e.hasEventListeners("PastePostProcess")&&!g.isDefaultPrevented()?(u=v,l=n,c=r,f=(s=e).dom.create("div",{style:"display:none"},u),d=l,m=c,p=s.fire("PastePostProcess",{node:f,internal:d,wordContent:m}),K(p.node.innerHTML,p.isDefaultPrevented())):K(v,g.isDefaultPrevented())}(e,o?(a=t,(r=e).getParam("paste_enable_default_filters",!0)?V(r,a):a):t,n,o)},W=function(e,t){return e.insertContent(t,{merge:e.getParam("paste_merge_formats",!0),paste:!0}),!0},Y=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},Z=function(e,t){return Y(t)&&g(R(e),(function(e){return x(n=t,r="."+e,n.length-r.length)
var n,r}))},G=function(e,t,n){return!(!1!==e.selection.isCollapsed()||!Y(t)||(a=t,o=n,(r=e).undoManager.extra((function(){o(r,a)}),(function(){r.execCommand("mceInsertLink",!1,a)})),0))
var r,a,o},J=function(e,t,n){return!!Z(e,t)&&(a=t,o=n,(r=e).undoManager.extra((function(){o(r,a)}),(function(){r.insertContent('<img src="'+a+'">')})),!0)
var r,a,o},Q=function(e){return"\n"===e||"\r"===e},ee=function(e,t,n,r){var a=X(e,t,n)
!1===a.cancelled&&function(e,t,n){var r,a
n||!1===e.getParam("smart_paste",!0)?W(e,t):(r=e,a=t,D.each([G,J,W],(function(e){return!0!==e(r,a,W)})))}(e,a.content,r)},te=function(e,t,n){var r=n||F(t)
ee(e,t.replace(I,""),r,!1)},ne=function(e,t){var n,r,a,o=e.dom.encode(t).replace(/\r\n/g,"\n"),i=function(e,t){var n,r,a,o=(n=e.getParam("paste_tab_spaces",4,"number"))<=0?"":new Array(n+1).join(" "),i=t.replace(/\t/g,o)
return(a={pcIsSpace:!(r=function(e,t){return-1!==" \f\t\v".indexOf(t)||t===B?e.pcIsSpace||""===e.str||e.str.length===i.length-1||(n=i,(r=e.str.length+1)<n.length&&0<=r&&Q(n[r]))?{pcIsSpace:!1,str:e.str+B}:{pcIsSpace:!0,str:e.str+" "}:{pcIsSpace:Q(t),str:e.str+t}
var n,r}),str:""},h(i,(function(e){a=r(a,e)})),a).str}(e,o),s=(n=i,r=e.getParam("forced_root_block"),a=e.getParam("forced_root_block_attrs"),r?function(e,t,n){var r=e.split(/\n\n/),a=function(e,t){var n,r=[],a="<"+e
if("object"==typeof t){for(n in t)t.hasOwnProperty(n)&&r.push(n+'="'+E.encodeAllRaw(t[n])+'"')
r.length&&(a+=" "+r.join(" "))}return a+">"}(t,n),o="</"+t+">",i=D.map(r,(function(e){return e.split(/\n/).join("<br />")}))
return 1===i.length?i[0]:D.map(i,(function(e){return a+e+o})).join("")}(n,!0===r?"p":r,a):n.replace(/\r?\n/g,"<br>"))
ee(e,s,!1,!0)},re=function(e){var t,n={}
if(e&&(!e.getData||(t=e.getData("Text"))&&0<t.length&&-1===t.indexOf("data:text/mce-internal,")&&(n["text/plain"]=t),e.types))for(var r=0;r<e.types.length;r++){var a=e.types[r]
try{n[a]=e.getData(a)}catch(o){n[a]=""}}return n},ae=function(e,t){return t in e&&0<e[t].length},oe=function(e){return ae(e,"text/html")||ae(e,"text/plain")},ie=("mceclip",q=0,function(){return"mceclip"+q++}),se=function(e,t,n){var r,a,o,i,s="paste"===t.type?t.clipboardData:t.dataTransfer
if(j(e)&&s){var u=(r=e,o=(a=s).items?v(y(a.items),(function(e){return e.getAsFile()})):[],i=a.files?y(a.files):[],function(e,t){for(var n=[],r=0,a=e.length;r<a;r++){var o=e[r]
t(o,r)&&n.push(o)}return n}(0<o.length?o:i,function(e){var t=R(e)
return function(e){return n=e.type,x(n,"image/",0)&&g(t,(function(t){return n=t,r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},(D.hasOwn(r,n)?"image/"+r[n]:"image/"+n)===e.type
var n,r}))
var n}}(r)))
if(0<u.length)return t.preventDefault(),function(e){return _.all(v(e,(function(e){return new _((function(t){var n=d(e.getAsFile)?e.getAsFile():e,r=new window.FileReader
r.onload=function(){t({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))}(u).then((function(t){n&&e.selection.setRng(n),h(t,(function(t){(function(e,t){var n,r,a,o,i,s,u,l,c,f,m,p,g=(n=t.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),v=g.data,h=g.type,y=ie(),b=t.blob,x=new Image
x.src=t.uri,m=x,!(p=e.getParam("images_dataimg_filter"))||p(m)?(l=void 0,(o=(a=e.editorUpload.blobCache).getByData(v,h))?l=o:(s=(i=e.getParam("images_reuse_filename")&&d(b.name))?(c=e,f=b.name.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i),d(f)?c.dom.encode(f[1]):null):y,u=i?b.name:void 0,l=a.create(y,b,v,s,u),a.add(l)),te(e,'<img src="'+l.blobUri()+'">',!1)):te(e,'<img src="'+t.uri+'">',!1)})(e,t)}))})),!0}return!1},ue=function(e){return T.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode},le=function(e,t,n){var r,a=b(),o=b()
function i(e,n,r,a,o){var i
ae(n,"text/html")?i=n["text/html"]:(i=t.getHtml(),o=o||F(i),t.isDefaultContent(i)&&(a=!0)),i=z(i),t.remove()
var s=!1===o&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(i),u=Z(e,i)
i.length&&(!s||u)||(a=!0),(a||u)&&(i=ae(n,"text/plain")&&s?n["text/plain"]:function(e){var t=L(),n=M({},t),r="",a=t.getShortEndedElements(),o=D.makeMap("script noscript style textarea video audio iframe object"," "),i=t.getBlockElements()
return e=$(e,[/<!\[[^\]]+\]>/g]),function e(t){var n=t.name,s=t
if("br"!==n){if("wbr"!==n)if(a[n]&&(r+=" "),o[n])r+=" "
else{if(3===t.type&&(r+=t.value),!t.shortEnded&&(t=t.firstChild))for(;e(t),t=t.next;);i[n]&&s.next&&(r+="\n","p"===n&&(r+="\n"))}}else r+="\n"}(n.parse(e)),r}(i)),t.isDefaultContent(i)?r||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):a?ne(e,i):te(e,i,o)}e.on("keyup",o.clear),e.on("keydown",(function(n){var i=function(e){ue(e)&&!e.isDefaultPrevented()&&t.remove()}
if(ue(n)&&!n.isDefaultPrevented()){if((r=n.shiftKey&&86===n.keyCode)&&P.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
if(n.stopImmediatePropagation(),a.set(n),o.set(!0),P.ie&&r)return n.preventDefault(),!0,void e.fire("paste",{ieFake:true})
t.remove(),t.create(),e.once("keyup",i),e.once("paste",(function(){e.off("keyup",i)}))}})),e.on("paste",(function(s){var u=a.isSet()||o.isSet()
u&&a.clear()
var l,c,f=(l=e,re(s.clipboardData||l.getDoc().dataTransfer)),d="text"===n.get()||r,m=ae(f,A)
r=!1,s.isDefaultPrevented()||(c=s.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&c&&c.items&&0===c.items.length)||!oe(f)&&se(e,s,t.getLastRng()||e.selection.getRng())?t.remove():(u||s.preventDefault(),!P.ie||u&&!s.ieFake||ae(f,"text/html")||(t.create(),e.dom.bind(t.getEl(),"paste",(function(e){e.stopPropagation()})),e.getDoc().execCommand("Paste",!1,null),f["text/html"]=t.getHtml()),ae(f,"text/html")?(s.preventDefault(),m=m||F(f["text/html"]),i(e,f,u,d,m)):w.setEditorTimeout(e,(function(){i(e,f,u,d,m)}),0))}))},ce=function(e){return P.ie&&e.inline?document.body:e.getBody()},fe=function(e){return e.dom.get("mcepastebin")},de=function(e,t){var n,r=fe(e)
return(n=r)&&"mcepastebin"===n.id&&function(e,t){return t===e}(t,r.innerHTML)},me=function(e){var t=r(null),n="%MCEPASTEBIN%"
return{create:function(){return function(e,t,n){var r=e.dom,a=e.getBody()
t.set(e.selection.getRng())
var o=e.dom.add(ce(e),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(P.ie||P.gecko)&&r.setStyle(o,"left","rtl"===r.getStyle(a,"direction",!0)?65535:-65535),r.bind(o,"beforedeactivate focusin focusout",(function(e){e.stopPropagation()})),function(e,t,n){var r
ce(r=e)!==r.getBody()&&e.dom.bind(t,"paste keyup",(function(t){de(e,n)||e.fire("paste")}))}(e,o,n),o.focus(),e.selection.select(o,!0)}(e,t,n)},remove:function(){return function(e,t){if(fe(e)){for(var n=void 0,r=t.get();n=e.dom.get("mcepastebin");)e.dom.remove(n),e.dom.unbind(n)
r&&e.selection.setRng(r)}t.set(null)}(e,t)},getEl:function(){return fe(e)},getHtml:function(){return function(e){var t=function(t,n){t.appendChild(n),e.dom.remove(n,!0)},n=D.grep(ce(e).childNodes,(function(e){return"mcepastebin"===e.id})),r=n.shift()
D.each(n,(function(e){t(r,e)}))
for(var a=e.dom.select("div[id=mcepastebin]",r),o=a.length-1;0<=o;o--){var i=e.dom.create("div")
r.insertBefore(i,a[o]),t(i,a[o])}return r?r.innerHTML:""}(e)},getLastRng:function(){return t.get()},isDefault:function(){return de(e,n)},isDefaultContent:function(e){return e===n}}},pe=function(e,t,n,r){!function(e,t,n){if(r=e,!1!==P.iOS||"function"!=typeof(null==r?void 0:r.setData))return!1
try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(A,t),!0}catch(a){return!1}var r}(e.clipboardData,t.html,t.text)?n(t.html,r):(e.preventDefault(),r())},ge=function(e){return function(t,n){var r=I+t,a=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),o=e.dom.create("div",{contenteditable:"true"},r)
e.dom.setStyles(a,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),a.appendChild(o),e.dom.add(e.getBody(),a)
var i=e.selection.getRng()
o.focus()
var s=e.dom.createRng()
s.selectNodeContents(o),e.selection.setRng(s),w.setTimeout((function(){e.selection.setRng(i),a.parentNode.removeChild(a),n()}),0)}},ve=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},he=function(e){return!e.selection.isCollapsed()||!!(t=e).dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())
var t},ye=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),be=function(e,t){return ye.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())},xe=function(e,t){e.focus(),e.selection.setRng(t)}
function Pe(e,t){e.on("PastePreProcess",(function(n){n.content=t(e,n.content,n.internal,n.wordContent)}))}function we(e,t){if(!U(t))return t
var n=[]
return D.each(e.schema.getBlockElements(),(function(e,t){n.push(t)})),t=$(t,[[new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g"),"$1"]]),$(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function _e(e,t,n,r){if(r||n)return t
var a,o,i,s=e.getParam("paste_webkit_styles")
return!1===e.getParam("paste_remove_styles_if_webkit",!0)||"all"===s?t:(s&&(a=s.split(/[, ]/)),t=(t=a?(o=e.dom,i=e.selection.getNode(),t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(e,t,n,r){var s=o.parseStyle(o.decode(n)),u={}
if("none"===a)return t+r
for(var l=0;l<a.length;l++){var c=s[a[l]],f=o.getStyle(i,a[l],!0);/color/.test(a[l])&&(c=o.toHex(c),f=o.toHex(f)),f!==c&&(u[a[l]]=c)}return(u=o.serializeStyle(u,"span"))?t+' style="'+u+'"'+r:t+r}))):t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")).replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(e,t,n,r){return t+' style="'+n+'"'+r})))}function Te(e,t){e.$("a",t).find("font,u").each((function(t,n){e.dom.remove(n,!0)}))}var Ce=function(e,t){return function(n){n.setActive("text"===t.pasteFormat.get())
var r=function(e){return n.setActive(e.state)}
return e.on("PastePlainTextToggle",r),function(){return e.off("PastePlainTextToggle",r)}}}
a.add("paste",(function(e){if(0==(!!e.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0))){var t=r(!1),n=r(e.getParam("paste_as_text",!1)?"text":"html"),a=(f=n,d=me(c=e),c.on("PreInit",(function(){return function(e,t,n){var r
le(e,t,n),e.parser.addNodeFilter("img",(function(t,n,a){var o,i=function(e){e.attr("data-mce-object")||r===P.transparentSrc||e.remove()}
if(!j(e)&&(o=a).data&&!0===o.data.paste)for(var s=t.length;s--;)(r=t[s].attr("src"))&&(0!==r.indexOf("webkit-fake-url")&&(e.getParam("allow_html_data_urls",!1,"boolean")||0!==r.indexOf("data:"))||i(t[s]))}))}(c,d,f)})),{pasteFormat:f,pasteHtml:function(e,t){return te(c,e,t)},pasteText:function(e){return ne(c,e)},pasteImageData:function(e,t){return se(c,e,t)},getDataTransferItems:re,hasHtmlOrText:oe,hasContentType:ae})
return s=e,P.webkit&&Pe(s,_e),P.ie&&(Pe(s,we),l=Te,(u=s).on("PastePostProcess",(function(e){l(u,e.node)}))),i=a,(o=e).ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return o.execCommand("mceTogglePlainTextPaste")},onSetup:Ce(o,i)}),o.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:function(){return o.execCommand("mceTogglePlainTextPaste")},onSetup:Ce(o,i)}),function(e,t){e.addCommand("mceTogglePlainTextPaste",(function(){var n,r
n=e,"text"===(r=t).pasteFormat.get()?(r.pasteFormat.set("html"),C(n,!1)):(r.pasteFormat.set("text"),C(n,!0)),n.focus()})),e.addCommand("mceInsertClipboardContent",(function(e,n){n.content&&t.pasteHtml(n.content,n.internal),n.text&&t.pasteText(n.text)}))}(e,a),function(e){var t=e.plugins.paste,n=e.getParam("paste_preprocess")
n&&e.on("PastePreProcess",(function(e){n.call(t,t,e)}))
var r=e.getParam("paste_postprocess")
r&&e.on("PastePostProcess",(function(e){r.call(t,t,e)}))}(e),function(e){var t,n
e.on("cut",(t=e,function(e){he(t)&&pe(e,ve(t),ge(t),(function(){var e
P.browser.isChrome()||P.browser.isFirefox()?(e=t.selection.getRng(),w.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)):t.execCommand("Delete")}))})),e.on("copy",(n=e,function(e){he(n)&&pe(e,ve(n),ge(n),(function(){}))}))}(e),function(e,t,n){e.getParam("paste_block_drop",!1)&&e.on("dragend dragover draggesture dragdrop drop drag",(function(e){e.preventDefault(),e.stopPropagation()})),k(e)||e.on("drop",(function(e){var t=e.dataTransfer
t&&t.files&&0<t.files.length&&e.preventDefault()})),e.on("drop",(function(r){var a,o,i,s,u=be(e,r)
r.isDefaultPrevented()||n.get()||(a=t.getDataTransferItems(r.dataTransfer),o=t.hasContentType(a,A),(!t.hasHtmlOrText(a)||(i=a["text/plain"])&&0===i.indexOf("file://"))&&t.pasteImageData(r,u)||!u||!e.getParam("paste_filter_drop",!0)||(s=a["mce-internal"]||a["text/html"]||a["text/plain"])&&(r.preventDefault(),w.setEditorTimeout(e,(function(){e.undoManager.transact((function(){a["mce-internal"]&&e.execCommand("Delete"),xe(e,u),s=z(s),a["text/html"]?t.pasteHtml(s,o):t.pasteText(s)}))}))))})),e.on("dragstart",(function(e){n.set(!0)})),e.on("dragover dragend",(function(t){k(e)&&!1===n.get()&&(t.preventDefault(),xe(e,be(e,t))),"dragend"===t.type&&n.set(!1)}))}(e,a,t),{clipboard:a,quirks:void 0}}var o,i,s,u,l,c,f,d}))}()

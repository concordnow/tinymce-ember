!function(){"use strict"
var e,t,n,r,o=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},a=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(){},s=function(e){return function(){return e}},u=s(!1),l=s(!0),c=function(){return f},f=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:u,isSome:u,isNone:l,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:n,orThunk:t,map:c,each:i,bind:c,exists:u,forall:l,filter:c,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}),d=function(e){var t=s(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:l,isNone:u,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return d(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:f},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(u,(function(t){return n(e,t)}))}}
return o},m={some:d,none:c,from:function(e){return null==e?f:d(e)}},p=function(e){return!(null===(t=e)||void 0===t)
var t},g=("function",function(e){return"function"==typeof e}),v=Array.prototype.slice,h=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1},y=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var a=e[o]
r[o]=t(a,o)}return r},b=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},x=g(Array.from)?Array.from:function(e){return v.call(e)},P=function(){var e=o(m.none())
return{clear:function(){return e.set(m.none())},set:function(t){return e.set(m.some(t))},isSet:function(){return e.get().isSome()},on:function(t){return e.get().each(t)}}},w=function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t},_=tinymce.util.Tools.resolve("tinymce.Env"),C=tinymce.util.Tools.resolve("tinymce.util.Delay"),T=tinymce.util.Tools.resolve("tinymce.util.Promise"),D=tinymce.util.Tools.resolve("tinymce.util.VK"),k=function(e,t){return e.fire("PastePlainTextToggle",{state:t})},S=tinymce.util.Tools.resolve("tinymce.util.Tools"),O=function(e){return e.getParam("paste_data_images",!1)},j=function(e){return e.getParam("paste_retain_style_properties")},R=function(e){return e.getParam("validate")},A=function(e){return e.getParam("paste_data_images",!1,"boolean")},I=function(e){return S.explode(e.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))},F="x-tinymce/html",E="\x3c!-- "+F+" --\x3e",M=function(e){return-1!==e.indexOf(E)},N=tinymce.util.Tools.resolve("tinymce.html.Entities"),B=tinymce.util.Tools.resolve("tinymce.html.DomParser"),L=tinymce.util.Tools.resolve("tinymce.html.Serializer"),H=tinymce.util.Tools.resolve("tinymce.html.Node"),$=tinymce.util.Tools.resolve("tinymce.html.Schema"),z=function(e,t){return S.each(t,(function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])})),e},U=function(e){return z(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?" ":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},q=function(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)},V=function(e,t){var n,r=j(e)
r&&(n=S.makeMap(r.split(/[, ]/))),t=z(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi," "],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return 0<t.length?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(" "):""}]])
var o=e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"),a=$({valid_elements:o,valid_children:"-li[p]"})
S.each(a.elements,(function(e){e.attributes.class||(e.attributes.class={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))}))
var i=B({},a)
i.addAttributeFilter("style",(function(t){for(var r,o=t.length;o--;)(r=t[o]).attr("style",function(e,t,n,r){var o,a={},i=e.dom.parseStyle(r)
return S.each(i,(function(i,s){switch(s){case"mso-list":(o=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(o[1],10)),/Ignore/i.test(i)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
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
case"mso-element":if(/^(comment|comment-list)$/i.test(i))return void n.remove()}0!==s.indexOf("mso-comment")?0!==s.indexOf("mso-")&&("all"===j(e)||t&&t[s])&&(a[s]=i):n.remove()})),/(bold)/i.test(a["font-weight"])&&(delete a["font-weight"],n.wrap(new H("b",1))),/(italic)/i.test(a["font-style"])&&(delete a["font-style"],n.wrap(new H("i",1))),(a=e.dom.serializeStyle(a,n.name))||null}(e,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)})),i.addNodeFilter("del",(function(e){for(var t=e.length;t--;)e[t].remove()})),i.addNodeFilter("a",(function(e){for(var t,n,r,o=e.length;o--;)if(n=(t=e[o]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove()
else if(n&&0===n.indexOf("file://")&&(n=(n=n.split("#")[1])&&"#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap()
continue}t.attr({href:n,name:r})}else t.unwrap()}))
var s=i.parse(t)
return e.getParam("paste_convert_word_fake_lists",!0)&&function(e){for(var t,n,r=1,o=function(e){var t=""
if(3===e.type)return e.value
if(e=e.firstChild)for(;t+=o(e),e=e.next;);return t},a=function(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1
if(e=e.firstChild)do{if(!a(e,t))return!1}while(e=e.next)
return!0},i=function(e){if(e._listIgnore)e.remove()
else if(e=e.firstChild)for(;i(e),e=e.next;);},s=function(e,o,s){var u=e._listLevel||r
u!==r&&(t=u<r?t&&t.parent.parent:(n=t,null)),t&&t.name===o?t.append(e):(n=n||t,t=new H(o,1),1<s&&t.attr("start",""+s),e.wrap(t)),e.name="li",r<u&&n&&n.lastChild.append(t),r=u,i(e),a(e,/^\u00a0+/),a(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),a(e,/^\u00a0+/)},u=[],l=e.firstChild;null!=l;)if(u.push(l),null!==(l=l.walk()))for(;void 0!==l&&l.parent!==e;)l=l.walk()
for(var c=0;c<u.length;c++)if("p"===(e=u[c]).name&&e.firstChild){var f=o(e)
if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(f)){s(e,"ul")
continue}if(function(e){var t
return e=e.replace(/^[\u00a0 ]+/,""),S.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(e))return!(t=!0)})),t}(f)){var d=/([0-9]+)\./.exec(f),m=1
d&&(m=parseInt(d[1],10)),s(e,"ol",m)
continue}if(e._listLevel){s(e,"ul",1)
continue}t=null}else n=t,t=null}(s),L({validate:R(e)},a).serialize(s)},K=function(e,t){return{content:e,cancelled:t}},X=function(e,t,n){var r,o,a=q(t)
return function(e,t,n,r){var o,a,i,s,u,l,c,f,d,m,p,g=(o=t,a=n,i=r,e.fire("PastePreProcess",{content:o,internal:a,wordContent:i})),v=function(e,t){var n=B({},e.schema)
n.addNodeFilter("meta",(function(e){S.each(e,(function(e){e.remove()}))}))
var r=n.parse(t,{forced_root_block:!1,isRootContent:!0})
return L({validate:R(e)},e.schema).serialize(r)}(e,g.content)
return e.hasEventListeners("PastePostProcess")&&!g.isDefaultPrevented()?(u=v,l=n,c=r,f=(s=e).dom.create("div",{style:"display:none"},u),d=l,m=c,p=s.fire("PastePostProcess",{node:f,internal:d,wordContent:m}),K(p.node.innerHTML,p.isDefaultPrevented())):K(v,g.isDefaultPrevented())}(e,a?(o=t,(r=e).getParam("paste_enable_default_filters",!0)?V(r,o):o):t,n,a)},W=function(e,t){return e.insertContent(t,{merge:e.getParam("paste_merge_formats",!0),paste:!0}),!0},Y=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},Z=function(e,t){return Y(t)&&h(I(e),(function(e){return n=t.toLowerCase(),r="."+e.toLowerCase(),w(n,r,n.length-r.length)
var n,r}))},G=function(e,t,n){return!(!1!==e.selection.isCollapsed()||!Y(t)||(o=t,a=n,(r=e).undoManager.extra((function(){a(r,o)}),(function(){r.execCommand("mceInsertLink",!1,o)})),0))
var r,o,a},J=function(e,t,n){return!!Z(e,t)&&(o=t,a=n,(r=e).undoManager.extra((function(){a(r,o)}),(function(){r.insertContent('<img src="'+o+'">')})),!0)
var r,o,a},Q=function(e){return"\n"===e||"\r"===e},ee=function(e,t,n,r){var o=X(e,t,n)
!1===o.cancelled&&function(e,t,n){var r,o
n||!1===e.getParam("smart_paste",!0)?W(e,t):(r=e,o=t,S.each([G,J,W],(function(e){return!0!==e(r,o,W)})))}(e,o.content,r)},te=function(e,t,n){var r=n||M(t)
ee(e,t.replace(E,""),r,!1)},ne=function(e,t){var n,r,o,a=e.dom.encode(t).replace(/\r\n/g,"\n"),i=function(e,t){var n,r,o,a=(n=e.getParam("paste_tab_spaces",4,"number"))<=0?"":new Array(n+1).join(" "),i=t.replace(/\t/g,a)
return(o={pcIsSpace:!(r=function(e,t){return-1!==" \f\t\v".indexOf(t)||" "===t?e.pcIsSpace||""===e.str||e.str.length===i.length-1||(n=i,(r=e.str.length+1)<n.length&&0<=r&&Q(n[r]))?{pcIsSpace:!1,str:e.str+" "}:{pcIsSpace:!0,str:e.str+" "}:{pcIsSpace:Q(t),str:e.str+t}
var n,r}),str:""},b(i,(function(e){o=r(o,e)})),o).str}(e,a),s=(n=i,r=e.getParam("forced_root_block"),o=e.getParam("forced_root_block_attrs"),r?function(e,t,n){var r=e.split(/\n\n/),o=function(e,t){var n,r=[],o="<"+e
if("object"==typeof t){for(n in t)t.hasOwnProperty(n)&&r.push(n+'="'+N.encodeAllRaw(t[n])+'"')
r.length&&(o+=" "+r.join(" "))}return o+">"}(t,n),a="</"+t+">",i=S.map(r,(function(e){return e.split(/\n/).join("<br />")}))
return 1===i.length?i[0]:S.map(i,(function(e){return o+e+a})).join("")}(n,!0===r?"p":r,o):n.replace(/\r?\n/g,"<br>"))
ee(e,s,!1,!0)},re=function(e){var t,n={}
if(e&&(!e.getData||(t=e.getData("Text"))&&0<t.length&&-1===t.indexOf("data:text/mce-internal,")&&(n["text/plain"]=t),e.types))for(var o=0;o<e.types.length;o++){var a=e.types[o]
try{n[a]=e.getData(a)}catch(r){n[a]=""}}return n},oe=function(e,t){return t in e&&0<e[t].length},ae=function(e){return oe(e,"text/html")||oe(e,"text/plain")},ie=("mceclip",r=0,function(){return"mceclip"+r++}),se=function(e,t,n){var r,o,a,i,s="paste"===t.type?t.clipboardData:t.dataTransfer
if(A(e)&&s){var u=(r=e,a=(o=s).items?y(x(o.items),(function(e){return e.getAsFile()})):[],i=o.files?x(o.files):[],function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var a=e[r]
t(a,r)&&n.push(a)}return n}(0<a.length?a:i,function(e){var t=I(e)
return function(e){return n=e.type,w(n,"image/",0)&&h(t,(function(t){return n=t.toLowerCase(),r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},(S.hasOwn(r,n)?"image/"+r[n]:"image/"+n)===e.type
var n,r}))
var n}}(r)))
if(0<u.length)return t.preventDefault(),function(e){return T.all(y(e,(function(e){return new T((function(t){var n=p(e.getAsFile)?e.getAsFile():e,r=new window.FileReader
r.onload=function(){t({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))}(u).then((function(t){n&&e.selection.setRng(n),b(t,(function(t){(function(e,t){var n,r,o,a,i,s,u,l,c,f,d,m,g=(n=t.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),v=g.data,h=g.type,y=ie(),b=t.blob,x=new Image
x.src=t.uri,d=x,!(m=e.getParam("images_dataimg_filter"))||m(d)?(l=void 0,(a=(o=e.editorUpload.blobCache).getByData(v,h))?l=a:(s=(i=e.getParam("images_reuse_filename")&&p(b.name))?(c=e,f=b.name.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i),p(f)?c.dom.encode(f[1]):null):y,u=i?b.name:void 0,l=o.create(y,b,v,s,u),o.add(l)),te(e,'<img src="'+l.blobUri()+'">',!1)):te(e,'<img src="'+t.uri+'">',!1)})(e,t)}))})),!0}return!1},ue=function(e){return D.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode},le=function(e,t,n){var r;(function(e,t,n){var r,o=P(),a=P()
e.on("keyup",a.clear),e.on("keydown",(function(n){var i=function(e){ue(e)&&!e.isDefaultPrevented()&&t.remove()}
if(ue(n)&&!n.isDefaultPrevented()){if((r=n.shiftKey&&86===n.keyCode)&&_.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
if(n.stopImmediatePropagation(),o.set(n),a.set(!0),_.ie&&r)return n.preventDefault(),void e.fire("paste",{ieFake:!0})
t.remove(),t.create(),e.once("keyup",i),e.once("paste",(function(){e.off("keyup",i)}))}}))
var i=function(e,n,r,o,a){var i
oe(n,"text/html")?i=n["text/html"]:(i=t.getHtml(),a=a||M(i),t.isDefaultContent(i)&&(o=!0)),i=U(i),t.remove()
var s,u,l,c,f,d,m,p,g=!1===a&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(i),v=Z(e,i)
i.length&&(!g||v)||(o=!0),(o||v)&&(i=oe(n,"text/plain")&&g?n["text/plain"]:(s=i,u=$(),l=B({},u),c="",f=u.getShortEndedElements(),d=S.makeMap("script noscript style textarea video audio iframe object"," "),m=u.getBlockElements(),p=function(e){var t=e.name,n=e
if("br"!==t){if("wbr"!==t)if(f[t]&&(c+=" "),d[t])c+=" "
else{if(3===e.type&&(c+=e.value),!e.shortEnded&&(e=e.firstChild))for(;p(e),e=e.next;);m[t]&&n.next&&(c+="\n","p"===t&&(c+="\n"))}}else c+="\n"},s=z(s,[/<!\[[^\]]+\]>/g]),p(l.parse(s)),c)),t.isDefaultContent(i)?r||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):o?ne(e,i):te(e,i,a)}
e.on("paste",(function(s){var u=o.isSet()||a.isSet()
u&&o.clear()
var l,c,f=(l=e,re(s.clipboardData||l.getDoc().dataTransfer)),d="text"===n.get()||r,m=oe(f,F)
r=!1,s.isDefaultPrevented()||(c=s.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&c&&c.items&&0===c.items.length)||!ae(f)&&se(e,s,t.getLastRng()||e.selection.getRng())?t.remove():(u||s.preventDefault(),!_.ie||u&&!s.ieFake||oe(f,"text/html")||(t.create(),e.dom.bind(t.getEl(),"paste",(function(e){e.stopPropagation()})),e.getDoc().execCommand("Paste",!1,null),f["text/html"]=t.getHtml()),oe(f,"text/html")?(s.preventDefault(),m=m||M(f["text/html"]),i(e,f,u,d,m)):C.setEditorTimeout(e,(function(){i(e,f,u,d,m)}),0))}))})(e,t,n),e.parser.addNodeFilter("img",(function(t,n,o){var a,i=function(e){e.attr("data-mce-object")||r===_.transparentSrc||e.remove()}
if(!A(e)&&(a=o).data&&!0===a.data.paste)for(var s=t.length;s--;)(r=t[s].attr("src"))&&(0!==r.indexOf("webkit-fake-url")&&(e.getParam("allow_html_data_urls",!1,"boolean")||0!==r.indexOf("data:"))||i(t[s]))}))},ce=function(e){return _.ie&&e.inline?document.body:e.getBody()},fe=function(e){return e.dom.get("mcepastebin")},de=function(e,t){var n,r=fe(e)
return(n=r)&&"mcepastebin"===n.id&&function(e,t){return t===e}(t,r.innerHTML)},me=function(e){var t=o(null),n="%MCEPASTEBIN%"
return{create:function(){return function(e,t,n){var r=e.dom,o=e.getBody()
t.set(e.selection.getRng())
var a=e.dom.add(ce(e),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(_.ie||_.gecko)&&r.setStyle(a,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(a,"beforedeactivate focusin focusout",(function(e){e.stopPropagation()})),function(e,t,n){var r
ce(r=e)!==r.getBody()&&e.dom.bind(t,"paste keyup",(function(t){de(e,n)||e.fire("paste")}))}(e,a,n),a.focus(),e.selection.select(a,!0)}(e,t,n)},remove:function(){return function(e,t){if(fe(e)){for(var n=void 0,r=t.get();n=e.dom.get("mcepastebin");)e.dom.remove(n),e.dom.unbind(n)
r&&e.selection.setRng(r)}t.set(null)}(e,t)},getEl:function(){return fe(e)},getHtml:function(){return function(e){var t=function(t,n){t.appendChild(n),e.dom.remove(n,!0)},n=S.grep(ce(e).childNodes,(function(e){return"mcepastebin"===e.id})),r=n.shift()
S.each(n,(function(e){t(r,e)}))
for(var o=e.dom.select("div[id=mcepastebin]",r),a=o.length-1;0<=a;a--){var i=e.dom.create("div")
r.insertBefore(i,o[a]),t(i,o[a])}return r?r.innerHTML:""}(e)},getLastRng:function(){return t.get()},isDefault:function(){return de(e,n)},isDefaultContent:function(e){return e===n}}},pe=function(e,t,n,r){!function(e,t,n){if(r=e,!1!==_.iOS||"function"!=typeof(null==r?void 0:r.setData))return!1
try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(F,t),!0}catch(o){return!1}var r}(e.clipboardData,t.html,t.text)?n(t.html,r):(e.preventDefault(),r())},ge=function(e){return function(t,n){var r=E+t,o=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),a=e.dom.create("div",{contenteditable:"true"},r)
e.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(a),e.dom.add(e.getBody(),o)
var i=e.selection.getRng()
a.focus()
var s=e.dom.createRng()
s.selectNodeContents(a),e.selection.setRng(s),C.setTimeout((function(){e.selection.setRng(i),o.parentNode.removeChild(o),n()}),0)}},ve=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},he=function(e){return!e.selection.isCollapsed()||!!(t=e).dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())
var t},ye=function(e){var t,n
e.on("cut",(t=e,function(e){he(t)&&pe(e,ve(t),ge(t),(function(){var e
_.browser.isChrome()||_.browser.isFirefox()?(e=t.selection.getRng(),C.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)):t.execCommand("Delete")}))})),e.on("copy",(n=e,function(e){he(n)&&pe(e,ve(n),ge(n),i)}))},be=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),xe=function(e,t){return be.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())},Pe=function(e,t){e.focus(),e.selection.setRng(t)},we=function(e,t){e.on("PastePreProcess",(function(n){n.content=t(e,n.content,n.internal,n.wordContent)}))},_e=function(e,t){if(!q(t))return t
var n=[]
S.each(e.schema.getBlockElements(),(function(e,t){n.push(t)}))
var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g")
return t=z(t,[[r,"$1"]]),z(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])},Ce=function(e,t,n,r){if(r||n)return t
var o,a,i,s=e.getParam("paste_webkit_styles")
return!1===e.getParam("paste_remove_styles_if_webkit",!0)||"all"===s?t:(s&&(o=s.split(/[, ]/)),t=(t=o?(a=e.dom,i=e.selection.getNode(),t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(e,t,n,r){var s=a.parseStyle(a.decode(n)),u={}
if("none"===o)return t+r
for(var l=0;l<o.length;l++){var c=s[o[l]],f=a.getStyle(i,o[l],!0);/color/.test(o[l])&&(c=a.toHex(c),f=a.toHex(f)),f!==c&&(u[o[l]]=c)}return(u=a.serializeStyle(u,"span"))?t+' style="'+u+'"'+r:t+r}))):t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")).replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(e,t,n,r){return t+' style="'+n+'"'+r})))},Te=function(e,t){e.$("a",t).find("font,u").each((function(t,n){e.dom.remove(n,!0)}))},De=function(e,t){return function(n){n.setActive("text"===t.pasteFormat.get())
var r=function(e){return n.setActive(e.state)}
return e.on("PastePlainTextToggle",r),function(){return e.off("PastePlainTextToggle",r)}}}
a.add("paste",(function(e){if(0==(!!e.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0))){var t=o(!1),n=o(e.getParam("paste_as_text",!1)?"text":"html"),r=(f=n,d=me(c=e),c.on("PreInit",(function(){return le(c,d,f)})),{pasteFormat:f,pasteHtml:function(e,t){return te(c,e,t)},pasteText:function(e){return ne(c,e)},pasteImageData:function(e,t){return se(c,e,t)},getDataTransferItems:re,hasHtmlOrText:ae,hasContentType:oe})
return s=e,_.webkit&&we(s,Ce),_.ie&&(we(s,_e),l=Te,(u=s).on("PastePostProcess",(function(e){l(u,e.node)}))),i=r,(a=e).ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return a.execCommand("mceTogglePlainTextPaste")},onSetup:De(a,i)}),a.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:function(){return a.execCommand("mceTogglePlainTextPaste")},onSetup:De(a,i)}),function(e,t){e.addCommand("mceTogglePlainTextPaste",(function(){var n,r
n=e,"text"===(r=t).pasteFormat.get()?(r.pasteFormat.set("html"),k(n,!1)):(r.pasteFormat.set("text"),k(n,!0)),n.focus()})),e.addCommand("mceInsertClipboardContent",(function(e,n){n.content&&t.pasteHtml(n.content,n.internal),n.text&&t.pasteText(n.text)}))}(e,r),function(e){var t=e.plugins.paste,n=e.getParam("paste_preprocess")
n&&e.on("PastePreProcess",(function(e){n.call(t,t,e)}))
var r=e.getParam("paste_postprocess")
r&&e.on("PastePostProcess",(function(e){r.call(t,t,e)}))}(e),ye(e),function(e,t,n){e.getParam("paste_block_drop",!1)&&e.on("dragend dragover draggesture dragdrop drop drag",(function(e){e.preventDefault(),e.stopPropagation()})),O(e)||e.on("drop",(function(e){var t=e.dataTransfer
t&&t.files&&0<t.files.length&&e.preventDefault()})),e.on("drop",(function(r){var o,a,i,s,u=xe(e,r)
r.isDefaultPrevented()||n.get()||(o=t.getDataTransferItems(r.dataTransfer),a=t.hasContentType(o,F),(!t.hasHtmlOrText(o)||(i=o["text/plain"])&&0===i.indexOf("file://"))&&t.pasteImageData(r,u)||!u||!e.getParam("paste_filter_drop",!0)||(s=o["mce-internal"]||o["text/html"]||o["text/plain"])&&(r.preventDefault(),C.setEditorTimeout(e,(function(){e.undoManager.transact((function(){o["mce-internal"]&&e.execCommand("Delete"),Pe(e,u),s=U(s),o["text/html"]?t.pasteHtml(s,a):t.pasteText(s)}))}))))})),e.on("dragstart",(function(e){n.set(!0)})),e.on("dragover dragend",(function(t){O(e)&&!1===n.get()&&(t.preventDefault(),Pe(e,xe(e,t))),"dragend"===t.type&&n.set(!1)}))}(e,r,t),{clipboard:r,quirks:void 0}}var a,i,s,u,l,c,f,d}))}()

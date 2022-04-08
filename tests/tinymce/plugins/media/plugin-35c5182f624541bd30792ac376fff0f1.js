(function(){"use strict"
var e,t,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},o=function(e){return function(t){return n=typeof(r=t),(null===r?"null":"object"===n&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":n)===e
var r,n}},i=o("string"),a=o("object"),c=o("array"),u=function(e){return!function(e){return null==e}(e)},s=function(){},l=function(e){return function(){return e}},m=function(e){return e},d=l(!1),f=l(!0),h=function(){return p},p={fold:function(e,t){return e()},isSome:d,isNone:f,getOr:t=m,getOrThunk:e=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:t,orThunk:e,map:h,each:s,bind:h,exists:d,forall:f,filter:function(){return h()},toArray:function(){return[]},toString:l("none()")},g=function(e){var t=l(e),r=function(){return o},n=function(t){return t(e)},o={fold:function(t,r){return r(e)},isSome:f,isNone:d,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(t){return g(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?o:p},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o},v={some:g,none:h,from:function(e){return null==e?p:g(e)}},b=Array.prototype.push,w=function(e,t){for(var r=0,n=e.length;r<n;r++){t(e[r],r)}},y=function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!c(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e)
b.apply(t,e[r])}return t},x=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},j=Object.keys,O=Object.hasOwnProperty,S=function(e,t){return _(e,t)?v.from(e[t]):v.none()},_=function(e,t){return O.call(e,t)},k=function(e){return e.getParam("media_scripts")},A=function(e){return e.getParam("media_live_embeds",!0)},T=tinymce.util.Tools.resolve("tinymce.util.Tools"),C=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),D=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),P=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]},$=C.DOM,M=function(e){return e.replace(/px$/,"")},F=function(e,t){var r=x(!1),n={}
return D({validate:!1,allow_conditional_comments:!0,start:function(t,o){if(r.get());else if(_(o.map,"data-ephox-embed-iri"))r.set(!0),n=function(e){var t=e.map.style,r=t?$.parseStyle(t):{}
return{type:"ephox-embed-iri",source:e.map["data-ephox-embed-iri"],altsource:"",poster:"",width:S(r,"max-width").map(M).getOr(""),height:S(r,"max-height").map(M).getOr("")}}(o)
else{if(n.source||"param"!==t||(n.source=o.map.movie),"iframe"!==t&&"object"!==t&&"embed"!==t&&"video"!==t&&"audio"!==t||(n.type||(n.type=t),n=T.extend(o.map,n)),"script"===t){var i=P(e,o.map.src)
if(!i)return
n={type:"script",source:o.map.src,width:String(i.width),height:String(i.height)}}"source"===t&&(n.source?n.altsource||(n.altsource=o.map.src):n.source=o.map.src),"img"!==t||n.poster||(n.poster=o.map.src)}}}).parse(t),n.source=n.source||n.src||n.data,n.altsource=n.altsource||"",n.poster=n.poster||"",n},z=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()]
return t||""},N=tinymce.util.Tools.resolve("tinymce.html.Schema"),U=tinymce.util.Tools.resolve("tinymce.html.Writer"),E=C.DOM,R=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},L=function(e,t){(function(e,t){for(var r=j(e),n=0,o=r.length;n<o;n++){var i=r[n]
t(e[i],i)}})(t,(function(t,r){var n=""+t
if(e.map[r])for(var o=e.length;o--;){var i=e[o]
i.name===r&&(n?(e.map[r]=n,i.value=n):(delete e.map[r],e.splice(o,1)))}else n&&(e.push({name:r,value:n}),e.map[r]=n)}))},I=["source","altsource"],B=function(e,t,r){var n,o=U(),i=x(!1),a=0
return D({validate:!1,allow_conditional_comments:!0,comment:function(e){o.comment(e)},cdata:function(e){o.cdata(e)},text:function(e,t){o.text(e,t)},start:function(e,c,u){if(i.get());else if(_(c.map,"data-ephox-embed-iri"))i.set(!0),function(e,t){var r=t.map.style,n=r?E.parseStyle(r):{}
n["max-width"]=R(e.width),n["max-height"]=R(e.height),L(t,{style:E.serializeStyle(n)})}(t,c)
else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":void 0!==t.height&&void 0!==t.width&&L(c,{width:t.width,height:t.height})}if(r)switch(e){case"video":L(c,{poster:t.poster,src:""}),t.altsource&&L(c,{src:""})
break
case"iframe":L(c,{src:t.source})
break
case"source":if(a<2&&(L(c,{src:t[I[a]],type:t[I[a]+"mime"]}),!t[I[a]]))return
a++
break
case"img":if(!t.poster)return
n=!0}}o.start(e,c,u)},end:function(e){if(!i.get()){if("video"===e&&r)for(var c=0;c<2;c++)if(t[I[c]]){var u=[]
u.map={},a<=c&&(L(u,{src:t[I[c]],type:t[I[c]+"mime"]}),o.start("source",u,!0))}if(t.poster&&"object"===e&&r&&!n){var s=[]
s.map={},L(s,{src:t.poster,width:t.width,height:t.height}),o.start("img",s,!0)}}o.end(e)}},N({})).parse(e),o.getContent()},W=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],G=function(e,t){for(var r=function(e){var t=e.match(/^(https?:\/\/|www\.)(.+)$/i)
return t&&t.length>1?"www."===t[1]?"https://":t[1]:"https://"}(t),n=e.regex.exec(t),o=r+e.url,i=function(e){o=o.replace("$"+e,(function(){return n[e]?n[e]:""}))},a=0;a<n.length;a++)i(a)
return o.replace(/\?$/,"")},q=function(e,t){var r=T.extend({},t)
if(!r.source&&(T.extend(r,F(k(e),r.embed)),!r.source))return""
r.altsource||(r.altsource=""),r.poster||(r.poster=""),r.source=e.convertURL(r.source,"source"),r.altsource=e.convertURL(r.altsource,"source"),r.sourcemime=z(r.source),r.altsourcemime=z(r.altsource),r.poster=e.convertURL(r.poster,"poster")
var n,o,i=(n=r.source,(o=W.filter((function(e){return e.regex.test(n)}))).length>0?T.extend({},o[0],{url:G(o[0],n)}):null)
if(i&&(r.source=i.url,r.type=i.type,r.allowfullscreen=i.allowFullscreen,r.width=r.width||String(i.w),r.height=r.height||String(i.h)),r.embed)return B(r.embed,r,!0)
var a=P(k(e),r.source)
a&&(r.type="script",r.width=String(a.width),r.height=String(a.height))
var c=function(e){return e.getParam("audio_template_callback")}(e),u=function(e){return e.getParam("video_template_callback")}(e)
return r.width=r.width||"300",r.height=r.height||"150",T.each(r,(function(t,n){r[n]=e.dom.encode(""+t)})),"iframe"===r.type?function(e){var t=e.allowfullscreen?' allowFullscreen="1"':""
return'<iframe src="'+e.source+'" width="'+e.width+'" height="'+e.height+'"'+t+"></iframe>"}(r):"application/x-shockwave-flash"===r.sourcemime?function(e){var t='<object data="'+e.source+'" width="'+e.width+'" height="'+e.height+'" type="application/x-shockwave-flash">'
return e.poster&&(t+='<img src="'+e.poster+'" width="'+e.width+'" height="'+e.height+'" />'),t+"</object>"}(r):-1!==r.sourcemime.indexOf("audio")?function(e,t){return t?t(e):'<audio controls="controls" src="'+e.source+'">'+(e.altsource?'\n<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</audio>"}(r,c):"script"===r.type?function(e){return'<script src="'+e.source+'"><\/script>'}(r):function(e,t){return t?t(e):'<video width="'+e.width+'" height="'+e.height+'"'+(e.poster?' poster="'+e.poster+'"':"")+' controls="controls">\n<source src="'+e.source+'"'+(e.sourcemime?' type="'+e.sourcemime+'"':"")+" />\n"+(e.altsource?'<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</video>"}(r,u)},H=function(e){return e.hasAttribute("data-mce-object")||e.hasAttribute("data-ephox-embed-iri")},J=tinymce.util.Tools.resolve("tinymce.util.Promise"),K={},Q=function(e){return function(t){return q(e,t)}},V=function(e,t){var r=function(e){return e.getParam("media_url_resolver")}(e)
return r?function(e,t,r){return new J((function(n,o){var i=function(r){return r.html&&(K[e.source]=r),n({url:e.source,html:r.html?r.html:t(e)})}
K[e.source]?i(K[e.source]):r({url:e.source},i,o)}))}(t,Q(e),r):function(e,t){return J.resolve({html:t(e),url:e.source})}(t,Q(e))},X=function(e,t){var r=t?function(e,t){return S(t,e).bind((function(e){return S(e,"meta")}))}(t,e).getOr({}):{},o=function(e,t,r){return function(n){var o,i=function(){return S(e,n)},c=function(){return S(t,n)},u=function(e){return S(e,"value").bind((function(e){return e.length>0?v.some(e):v.none()}))}
return(o={})[n]=(n===r?i().bind((function(e){return a(e)?u(e).orThunk(c):c().orThunk((function(){return v.from(e)}))})):c().orThunk((function(){return i().bind((function(e){return a(e)?u(e):v.from(e)}))}))).getOr(""),o}}(e,r,t)
return n(n(n(n(n({},o("source")),o("altsource")),o("poster")),o("embed")),function(e,t){var r={}
return S(e,"dimensions").each((function(e){w(["width","height"],(function(n){S(t,n).orThunk((function(){return S(e,n)})).each((function(e){return r[n]=e}))}))})),r}(e,r))},Y=function(e){var t=n(n({},e),{source:{value:S(e,"source").getOr("")},altsource:{value:S(e,"altsource").getOr("")},poster:{value:S(e,"poster").getOr("")}})
return w(["width","height"],(function(r){S(e,r).each((function(e){var n=t.dimensions||{}
n[r]=e,t.dimensions=n}))})),t},Z=function(e){return function(t){var r=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error."
e.notificationManager.open({type:"error",text:r})}},ee=function(e,t){return F(k(e),t)},te=function(e,t){return function(r){if(i(r.url)&&r.url.trim().length>0){var o=r.html,a=ee(t,o),c=n(n({},a),{source:r.url,embed:o})
e.setData(Y(c))}}},re=function(e,t){var r=e.dom.select("*[data-mce-object]")
e.insertContent(t),function(e,t){for(var r=e.dom.select("*[data-mce-object]"),n=0;n<t.length;n++)for(var o=r.length-1;o>=0;o--)t[n]===r[o]&&r.splice(o,1)
e.selection.select(r[0])}(e,r),e.nodeChanged()},ne=function(e,t,r){var n
t.embed=B(t.embed,t),t.embed&&(e.source===t.source||(n=t.source,_(K,n)))?re(r,t.embed):V(r,t).then((function(e){re(r,e.html)})).catch(Z(r))},oe=function(e){var t=function(e){var t=e.selection.getNode(),r=H(t)?e.serializer.serialize(t,{selection:!0}):""
return n({embed:r},F(k(e),r))}(e),r=x(t),o=Y(t),i=function(e){return e.getParam("media_dimensions",!0)}(e)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[],a={title:"General",name:"general",items:y([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],i])},c={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},u=[];(function(e){return e.getParam("media_alt_source",!0)})(e)&&u.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),function(e){return e.getParam("media_poster",!0)}(e)&&u.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"})
var s={title:"Advanced",name:"advanced",items:u},l=[a,c]
u.length>0&&l.push(s)
var m={type:"tabpanel",tabs:l},d=e.windowManager.open({title:"Insert/Edit Media",size:"normal",body:m,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var n=X(t.getData())
ne(r.get(),n,e),t.close()},onChange:function(t,o){switch(o.name){case"source":(function(t,r){var n=X(r.getData(),"source")
t.source!==n.source&&(te(d,e)({url:n.source,html:""}),V(e,n).then(te(d,e)).catch(Z(e)))})(r.get(),t)
break
case"embed":(function(t){var r=X(t.getData()),n=ee(e,r.embed)
t.setData(Y(n))})(t)
break
case"dimensions":case"altsource":case"poster":(function(t,r){var o=X(t.getData(),r),i=q(e,o)
t.setData(Y(n(n({},o),{embed:i})))})(t,o.name)}r.set(X(t.getData()))},initialData:o})},ie=tinymce.util.Tools.resolve("tinymce.html.Node"),ae=tinymce.util.Tools.resolve("tinymce.Env"),ce=tinymce.util.Tools.resolve("tinymce.html.DomParser"),ue=function(e,t){if(!1===function(e){return e.getParam("media_filter_html",!0)}(e))return t
var r,n=U()
return D({validate:!1,allow_conditional_comments:!1,comment:function(e){r||n.comment(e)},cdata:function(e){r||n.cdata(e)},text:function(e,t){r||n.text(e,t)},start:function(t,o,i){if(r=!0,"script"!==t&&"noscript"!==t&&"svg"!==t){for(var a=o.length-1;a>=0;a--){var c=o[a].name
0===c.indexOf("on")&&(delete o.map[c],o.splice(a,1)),"style"===c&&(o[a].value=e.dom.serializeStyle(e.dom.parseStyle(o[a].value),t))}n.start(t,o,i),r=!1}},end:function(e){r||n.end(e)}},N({})).parse(t),n.getContent()},se=function(e){var t=e.name
return"iframe"===t||"video"===t||"audio"===t},le=function(e,t,r,n){void 0===n&&(n=null)
var o=e.attr(r)
return u(o)?o:_(t,r)?null:n},me=function(e,t,r){var n="img"===t.name||"video"===e.name,o=n?"300":null,i="audio"===e.name?"30":"150",a=n?i:null
t.attr({width:le(e,r,"width",o),height:le(e,r,"height",a)})},de=function(e,t){var r=t.name,n=new ie("img",1)
return n.shortEnded=!0,he(e,t,n),me(t,n,{}),n.attr({style:t.attr("style"),src:ae.transparentSrc,"data-mce-object":r,class:"mce-object mce-object-"+r}),n},fe=function(e,t){var r=t.name,n=new ie("span",1)
n.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":r,class:"mce-preview-object mce-object-"+r}),he(e,t,n)
var o=e.dom.parseStyle(t.attr("style")),i=new ie(r,1)
if(me(t,i,o),i.attr({src:t.attr("src"),style:t.attr("style"),class:t.attr("class")}),"iframe"===r)i.attr({allowfullscreen:t.attr("allowfullscreen"),frameborder:"0"})
else{w(["controls","crossorigin","currentTime","loop","muted","poster","preload"],(function(e){i.attr(e,t.attr(e))}))
var a=n.attr("data-mce-html")
u(a)&&function(e,t,r,n){for(var o=ce({forced_root_block:!1,validate:!1},e.schema).parse(n,{context:t});o.firstChild;)r.append(o.firstChild)}(e,r,i,unescape(a))}var c=new ie("span",1)
return c.attr("class","mce-shim"),n.append(i),n.append(c),n},he=function(e,t,r){for(var n=t.attributes,o=n.length;o--;){var i=n[o].name,a=n[o].value
"width"!==i&&"height"!==i&&"style"!==i&&("data"!==i&&"src"!==i||(a=e.convertURL(a,i)),r.attr("data-mce-p-"+i,a))}var c=t.firstChild&&t.firstChild.value
c&&(r.attr("data-mce-html",escape(ue(e,c))),r.firstChild=null)},pe=function(e){var t=e.attr("class")
return t&&/\btiny-pageembed\b/.test(t)},ge=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||pe(e))return!0
return!1},ve=function(e){e.on("preInit",(function(){var t=e.schema.getSpecialElements()
T.each("video audio iframe object".split(" "),(function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var r=e.schema.getBoolAttrs()
T.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),(function(e){r[e]={}})),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",function(e){return function(t){for(var r,n,o=t.length;o--;)(r=t[o]).parent&&(r.parent.attr("data-mce-object")||("script"!==r.name||(n=P(k(e),r.attr("src"))))&&(n&&(n.width&&r.attr("width",n.width.toString()),n.height&&r.attr("height",n.height.toString())),se(r)&&A(e)&&ae.ceFalse?ge(r)||r.replace(fe(e,r)):ge(r)||r.replace(de(e,r))))}}(e)),e.serializer.addAttributeFilter("data-mce-object",(function(t,r){for(var n,o,i,a,c,u,s,l,m=t.length;m--;)if((n=t[m]).parent){for(s=n.attr(r),o=new ie(s,1),"audio"!==s&&"script"!==s&&((l=n.attr("class"))&&-1!==l.indexOf("mce-preview-object")?o.attr({width:n.firstChild.attr("width"),height:n.firstChild.attr("height")}):o.attr({width:n.attr("width"),height:n.attr("height")})),o.attr({style:n.attr("style")}),i=(a=n.attributes).length;i--;){var d=a[i].name
0===d.indexOf("data-mce-p-")&&o.attr(d.substr(11),a[i].value)}"script"===s&&o.attr("type","text/javascript"),(c=n.attr("data-mce-html"))&&((u=new ie("#text",3)).raw=!0,u.value=ue(e,unescape(c)),o.append(u)),n.replace(o)}}))})),e.on("SetContent",(function(){e.$("span.mce-preview-object").each((function(t,r){var n=e.$(r)
0===n.find("span.mce-shim").length&&n.append('<span class="mce-shim"></span>')}))}))}
r.add("media",(function(e){return function(e){e.addCommand("mceMedia",(function(){oe(e)}))}(e),function(e){var t=function(){return e.execCommand("mceMedia")}
e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:t,onSetup:function(t){var r=e.selection
return t.setActive(H(r.getNode())),r.selectorChangedWithUnbind("img[data-mce-object],span[data-mce-object],div[data-ephox-embed-iri]",t.setActive).unbind}}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:t})}(e),function(e){e.on("ResolveName",(function(e){var t
1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}))}(e),ve(e),function(e){e.on("click keyup touchend",(function(){var t=e.selection.getNode()
t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")})),e.on("ObjectSelected",(function(e){"script"===e.target.getAttribute("data-mce-object")&&e.preventDefault()})),e.on("ObjectResized",(function(e){var t=e.target
if(t.getAttribute("data-mce-object")){var r=t.getAttribute("data-mce-html")
r&&(r=unescape(r),t.setAttribute("data-mce-html",escape(B(r,{width:String(e.width),height:String(e.height)}))))}}))}(e),function(e){return{showDialog:function(){oe(e)}}}(e)}))})()

(function(){"use strict"
var e,t,r,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},o=function(){},a=function(e){return function(){return e}},c=a(!1),u=a(!0),s=function(){return l},l=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:c,isSome:c,isNone:u,getOr:r=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:r,orThunk:t,map:s,each:o,bind:s,exists:c,forall:u,filter:s,equals:e,equals_:e,toArray:function(){return[]},toString:a("none()")}),m=function(e){var t=a(e),r=function(){return i},n=function(t){return t(e)},i={fold:function(t,r){return r(e)},is:function(t){return e===t},isSome:u,isNone:c,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(t){return m(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?i:l},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,r){return t.fold(c,(function(t){return r(e,t)}))}}
return i},d={some:m,none:s,from:function(e){return null==e?l:m(e)}},f=function(e){return function(t){return n=typeof(r=t),(null===r?"null":"object"===n&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":n)===e
var r,n}},h=f("string"),p=f("object"),g=f("array"),v=Array.prototype.push,w=function(e,t){for(var r=0,n=e.length;r<n;r++){t(e[r],r)}},b=function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!g(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e)
v.apply(t,e[r])}return t},y=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},x=Object.keys,j=Object.hasOwnProperty,O=function(e,t){return S(e,t)?d.from(e[t]):d.none()},S=function(e,t){return j.call(e,t)},_=function(e){return e.getParam("media_scripts")},k=function(e){return e.getParam("media_live_embeds",!0)},A=tinymce.util.Tools.resolve("tinymce.util.Tools"),T=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),C=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),P=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]},D=T.DOM,$=function(e){return e.replace(/px$/,"")},F=function(e,t){var r=y(!1),n={}
return C({validate:!1,allow_conditional_comments:!0,start:function(t,i){if(r.get());else if(S(i.map,"data-ephox-embed-iri"))r.set(!0),n=function(e){var t=e.map.style,r=t?D.parseStyle(t):{}
return{type:"ephox-embed-iri",source:e.map["data-ephox-embed-iri"],altsource:"",poster:"",width:O(r,"max-width").map($).getOr(""),height:O(r,"max-height").map($).getOr("")}}(i)
else{if(n.source||"param"!==t||(n.source=i.map.movie),"iframe"!==t&&"object"!==t&&"embed"!==t&&"video"!==t&&"audio"!==t||(n.type||(n.type=t),n=A.extend(i.map,n)),"script"===t){var o=P(e,i.map.src)
if(!o)return
n={type:"script",source:i.map.src,width:String(o.width),height:String(o.height)}}"source"===t&&(n.source?n.altsource||(n.altsource=i.map.src):n.source=i.map.src),"img"!==t||n.poster||(n.poster=i.map.src)}}}).parse(t),n.source=n.source||n.src||n.data,n.altsource=n.altsource||"",n.poster=n.poster||"",n},M=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()]
return t||""},z=tinymce.util.Tools.resolve("tinymce.html.Schema"),N=tinymce.util.Tools.resolve("tinymce.html.Writer"),U=T.DOM,E=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},R=function(e,t){(function(e,t){for(var r=x(e),n=0,i=r.length;n<i;n++){var o=r[n]
t(e[o],o)}})(t,(function(t,r){var n=""+t
if(e.map[r])for(var i=e.length;i--;){var o=e[i]
o.name===r&&(n?(e.map[r]=n,o.value=n):(delete e.map[r],e.splice(i,1)))}else n&&(e.push({name:r,value:n}),e.map[r]=n)}))},L=["source","altsource"],I=function(e,t,r){var n,i=N(),o=y(!1),a=0
return C({validate:!1,allow_conditional_comments:!0,comment:function(e){i.comment(e)},cdata:function(e){i.cdata(e)},text:function(e,t){i.text(e,t)},start:function(e,c,u){if(o.get());else if(S(c.map,"data-ephox-embed-iri"))o.set(!0),function(e,t){var r=t.map.style,n=r?U.parseStyle(r):{}
n["max-width"]=E(e.width),n["max-height"]=E(e.height),R(t,{style:U.serializeStyle(n)})}(t,c)
else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":void 0!==t.height&&void 0!==t.width&&R(c,{width:t.width,height:t.height})}if(r)switch(e){case"video":R(c,{poster:t.poster,src:""}),t.altsource&&R(c,{src:""})
break
case"iframe":R(c,{src:t.source})
break
case"source":if(a<2&&(R(c,{src:t[L[a]],type:t[L[a]+"mime"]}),!t[L[a]]))return
a++
break
case"img":if(!t.poster)return
n=!0}}i.start(e,c,u)},end:function(e){if(!o.get()){if("video"===e&&r)for(var c=0;c<2;c++)if(t[L[c]]){var u=[]
u.map={},a<=c&&(R(u,{src:t[L[c]],type:t[L[c]+"mime"]}),i.start("source",u,!0))}if(t.poster&&"object"===e&&r&&!n){var s=[]
s.map={},R(s,{src:t.poster,width:t.width,height:t.height}),i.start("img",s,!0)}}i.end(e)}},z({})).parse(e),i.getContent()},q=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],B=function(e,t){for(var r=function(e){var t=e.match(/^(https?:\/\/|www\.)(.+)$/i)
return t&&t.length>1?"www."===t[1]?"https://":t[1]:"https://"}(t),n=e.regex.exec(t),i=r+e.url,o=function(e){i=i.replace("$"+e,(function(){return n[e]?n[e]:""}))},a=0;a<n.length;a++)o(a)
return i.replace(/\?$/,"")},W=function(e,t){var r=A.extend({},t)
if(!r.source&&(A.extend(r,F(_(e),r.embed)),!r.source))return""
r.altsource||(r.altsource=""),r.poster||(r.poster=""),r.source=e.convertURL(r.source,"source"),r.altsource=e.convertURL(r.altsource,"source"),r.sourcemime=M(r.source),r.altsourcemime=M(r.altsource),r.poster=e.convertURL(r.poster,"poster")
var n,i,o=(n=r.source,(i=q.filter((function(e){return e.regex.test(n)}))).length>0?A.extend({},i[0],{url:B(i[0],n)}):null)
if(o&&(r.source=o.url,r.type=o.type,r.allowFullscreen=o.allowFullscreen,r.width=r.width||String(o.w),r.height=r.height||String(o.h)),r.embed)return I(r.embed,r,!0)
var a=P(_(e),r.source)
a&&(r.type="script",r.width=String(a.width),r.height=String(a.height))
var c=function(e){return e.getParam("audio_template_callback")}(e),u=function(e){return e.getParam("video_template_callback")}(e)
return r.width=r.width||"300",r.height=r.height||"150",A.each(r,(function(t,n){r[n]=e.dom.encode(""+t)})),"iframe"===r.type?function(e){var t=e.allowFullscreen?' allowFullscreen="1"':""
return'<iframe src="'+e.source+'" width="'+e.width+'" height="'+e.height+'"'+t+"></iframe>"}(r):"application/x-shockwave-flash"===r.sourcemime?function(e){var t='<object data="'+e.source+'" width="'+e.width+'" height="'+e.height+'" type="application/x-shockwave-flash">'
return e.poster&&(t+='<img src="'+e.poster+'" width="'+e.width+'" height="'+e.height+'" />'),t+"</object>"}(r):-1!==r.sourcemime.indexOf("audio")?function(e,t){return t?t(e):'<audio controls="controls" src="'+e.source+'">'+(e.altsource?'\n<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</audio>"}(r,c):"script"===r.type?function(e){return'<script src="'+e.source+'"><\/script>'}(r):function(e,t){return t?t(e):'<video width="'+e.width+'" height="'+e.height+'"'+(e.poster?' poster="'+e.poster+'"':"")+' controls="controls">\n<source src="'+e.source+'"'+(e.sourcemime?' type="'+e.sourcemime+'"':"")+" />\n"+(e.altsource?'<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</video>"}(r,u)},G=tinymce.util.Tools.resolve("tinymce.util.Promise"),H={},J=function(e){return function(t){return W(e,t)}},K=function(e,t){var r=function(e){return e.getParam("media_url_resolver")}(e)
return r?function(e,t,r){return new G((function(n,i){var o=function(r){return r.html&&(H[e.source]=r),n({url:e.source,html:r.html?r.html:t(e)})}
H[e.source]?o(H[e.source]):r({url:e.source},o,i)}))}(t,J(e),r):function(e,t){return new G((function(r){r({html:t(e),url:e.source})}))}(t,J(e))},Q=function(e,t){return O(t,e).bind((function(e){return O(e,"meta")}))},V=function(e,t,r){return function(n){var i,o=function(){return O(e,n)},a=function(){return O(t,n)},c=function(e){return O(e,"value").bind((function(e){return e.length>0?d.some(e):d.none()}))}
return(i={})[n]=(n===r?o().bind((function(e){return p(e)?c(e).orThunk(a):a().orThunk((function(){return d.from(e)}))})):a().orThunk((function(){return o().bind((function(e){return p(e)?c(e):d.from(e)}))}))).getOr(""),i}},X=function(e,t){var r={}
return O(e,"dimensions").each((function(e){w(["width","height"],(function(n){O(t,n).orThunk((function(){return O(e,n)})).each((function(e){return r[n]=e}))}))})),r},Y=function(e,t){var r=t?Q(t,e).getOr({}):{},n=V(e,r,t)
return i(i(i(i(i({},n("source")),n("altsource")),n("poster")),n("embed")),X(e,r))},Z=function(e){var t=i(i({},e),{source:{value:O(e,"source").getOr("")},altsource:{value:O(e,"altsource").getOr("")},poster:{value:O(e,"poster").getOr("")}})
return w(["width","height"],(function(r){O(e,r).each((function(e){var n=t.dimensions||{}
n[r]=e,t.dimensions=n}))})),t},ee=function(e){return function(t){var r=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error."
e.notificationManager.open({type:"error",text:r})}},te=function(e,t){return F(_(e),t)},re=function(e,t){return function(r){if(h(r.url)&&r.url.trim().length>0){var n=r.html,o=te(t,n),a=i(i({},o),{source:r.url,embed:n})
e.setData(Z(a))}}},ne=function(e,t){var r=e.dom.select("img[data-mce-object]")
e.insertContent(t),function(e,t){for(var r=e.dom.select("img[data-mce-object]"),n=0;n<t.length;n++)for(var i=r.length-1;i>=0;i--)t[n]===r[i]&&r.splice(i,1)
e.selection.select(r[0])}(e,r),e.nodeChanged()},ie=function(e,t,r){var n
t.embed=I(t.embed,t),t.embed&&(e.source===t.source||(n=t.source,H.hasOwnProperty(n)))?ne(r,t.embed):K(r,t).then((function(e){ne(r,e.html)})).catch(ee(r))},oe=function(e){var t=function(e){var t=e.selection.getNode(),r=function(e){return e.getAttribute("data-mce-object")||e.getAttribute("data-ephox-embed-iri")}(t)?e.serializer.serialize(t,{selection:!0}):""
return i({embed:r},F(_(e),r))}(e),r=y(t),n=Z(t),o=function(e){return e.getParam("media_dimensions",!0)}(e)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[],a={title:"General",name:"general",items:b([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],o])},c={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},u=[];(function(e){return e.getParam("media_alt_source",!0)})(e)&&u.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),function(e){return e.getParam("media_poster",!0)}(e)&&u.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"})
var s={title:"Advanced",name:"advanced",items:u},l=[a,c]
u.length>0&&l.push(s)
var m={type:"tabpanel",tabs:l},d=e.windowManager.open({title:"Insert/Edit Media",size:"normal",body:m,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var n=Y(t.getData())
ie(r.get(),n,e),t.close()},onChange:function(t,n){switch(n.name){case"source":(function(t,r){var n=Y(r.getData(),"source")
t.source!==n.source&&(re(d,e)({url:n.source,html:""}),K(e,n).then(re(d,e)).catch(ee(e)))})(r.get(),t)
break
case"embed":(function(t){var r=Y(t.getData()),n=te(e,r.embed)
t.setData(Z(n))})(t)
break
case"dimensions":case"altsource":case"poster":(function(t,r){var n=Y(t.getData(),r),o=W(e,n)
t.setData(Z(i(i({},n),{embed:o})))})(t,n.name)}r.set(Y(t.getData()))},initialData:n})},ae=tinymce.util.Tools.resolve("tinymce.html.Node"),ce=tinymce.util.Tools.resolve("tinymce.Env"),ue=function(e,t){if(!1===function(e){return e.getParam("media_filter_html",!0)}(e))return t
var r,n=N()
return C({validate:!1,allow_conditional_comments:!1,comment:function(e){n.comment(e)},cdata:function(e){n.cdata(e)},text:function(e,t){n.text(e,t)},start:function(t,i,o){if(r=!0,"script"!==t&&"noscript"!==t&&"svg"!==t){for(var a=i.length-1;a>=0;a--){var c=i[a].name
0===c.indexOf("on")&&(delete i.map[c],i.splice(a,1)),"style"===c&&(i[a].value=e.dom.serializeStyle(e.dom.parseStyle(i[a].value),t))}n.start(t,i,o),r=!1}},end:function(e){r||n.end(e)}},z({})).parse(t),n.getContent()},se=function(e,t){var r=t.name,n=new ae("img",1)
return n.shortEnded=!0,me(e,t,n),n.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===r?"30":"150"),style:t.attr("style"),src:ce.transparentSrc,"data-mce-object":r,class:"mce-object mce-object-"+r}),n},le=function(e,t){var r=t.name,n=new ae("span",1)
n.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":r,class:"mce-preview-object mce-object-"+r}),me(e,t,n)
var i=new ae(r,1)
i.attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),style:t.attr("style"),class:t.attr("class"),width:t.attr("width"),height:t.attr("height"),frameborder:"0"})
var o=new ae("span",1)
return o.attr("class","mce-shim"),n.append(i),n.append(o),n},me=function(e,t,r){var n,i,o,a=t.attributes
for(o=a.length;o--;)n=a[o].name,i=a[o].value,"width"!==n&&"height"!==n&&"style"!==n&&("data"!==n&&"src"!==n||(i=e.convertURL(i,n)),r.attr("data-mce-p-"+n,i))
var c=t.firstChild&&t.firstChild.value
c&&(r.attr("data-mce-html",escape(ue(e,c))),r.firstChild=null)},de=function(e){var t=e.attr("class")
return t&&/\btiny-pageembed\b/.test(t)},fe=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||de(e))return!0
return!1},he=function(e){e.on("preInit",(function(){var t=e.schema.getSpecialElements()
A.each("video audio iframe object".split(" "),(function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var r=e.schema.getBoolAttrs()
A.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),(function(e){r[e]={}})),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",function(e){return function(t){for(var r,n,i=t.length;i--;)(r=t[i]).parent&&(r.parent.attr("data-mce-object")||("script"!==r.name||(n=P(_(e),r.attr("src"))))&&(n&&(n.width&&r.attr("width",n.width.toString()),n.height&&r.attr("height",n.height.toString())),"iframe"===r.name&&k(e)&&ce.ceFalse?fe(r)||r.replace(le(e,r)):fe(r)||r.replace(se(e,r))))}}(e)),e.serializer.addAttributeFilter("data-mce-object",(function(t,r){for(var n,i,o,a,c,u,s,l,m=t.length;m--;)if((n=t[m]).parent){for(s=n.attr(r),i=new ae(s,1),"audio"!==s&&"script"!==s&&((l=n.attr("class"))&&-1!==l.indexOf("mce-preview-object")?i.attr({width:n.firstChild.attr("width"),height:n.firstChild.attr("height")}):i.attr({width:n.attr("width"),height:n.attr("height")})),i.attr({style:n.attr("style")}),o=(a=n.attributes).length;o--;){var d=a[o].name
0===d.indexOf("data-mce-p-")&&i.attr(d.substr(11),a[o].value)}"script"===s&&i.attr("type","text/javascript"),(c=n.attr("data-mce-html"))&&((u=new ae("#text",3)).raw=!0,u.value=ue(e,unescape(c)),i.append(u)),n.replace(i)}}))})),e.on("SetContent",(function(){e.$("span.mce-preview-object").each((function(t,r){var n=e.$(r)
0===n.find("span.mce-shim").length&&n.append('<span class="mce-shim"></span>')}))}))},pe=function(e,t){return function(r){return e.selection.selectorChangedWithUnbind(t.join(","),r.setActive).unbind}}
n.add("media",(function(e){return function(e){e.addCommand("mceMedia",(function(){oe(e)}))}(e),function(e){e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:function(){e.execCommand("mceMedia")},onSetup:pe(e,["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"])}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:function(){e.execCommand("mceMedia")}})}(e),function(e){e.on("ResolveName",(function(e){var t
1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}))}(e),he(e),function(e){e.on("click keyup touchend",(function(){var t=e.selection.getNode()
t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")})),e.on("ObjectSelected",(function(e){var t=e.target.getAttribute("data-mce-object")
"audio"!==t&&"script"!==t||e.preventDefault()})),e.on("ObjectResized",(function(e){var t,r=e.target
r.getAttribute("data-mce-object")&&(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(I(t,{width:String(e.width),height:String(e.height)}))))}))}(e),function(e){return{showDialog:function(){oe(e)}}}(e)}))})()

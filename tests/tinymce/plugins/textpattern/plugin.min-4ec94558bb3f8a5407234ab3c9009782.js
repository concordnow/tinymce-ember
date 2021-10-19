!function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(){return(n=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])
return t}).apply(this,arguments)}
function r(t,n,r){if(r||2===arguments.length)for(var e,o=0,a=n.length;o<a;o++)!e&&o in n||((e=e||Array.prototype.slice.call(n,0,o))[o]=n[o])
return t.concat(e||Array.prototype.slice.call(n))}function e(t){return function(n){return e=typeof(r=n),(null===r?"null":"object"==e&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":e)===t
var r,e}}function o(){}function a(t){return function(){return t}}function i(t){return t}function u(){return m}var f=e("string"),c=e("object"),s=e("array"),l=a(!1),d=a(!0),m={fold:function(t,n){return t()},isSome:l,isNone:d,getOr:i,getOrThunk:g,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:i,orThunk:g,map:u,each:o,bind:u,exists:l,forall:d,filter:function(){return m},toArray:function(){return[]},toString:a("none()")}
function g(t){return t()}function p(t,n){return-1<E.call(t,n)}function h(t,n){for(var r=t.length,e=new Array(r),o=0;o<r;o++){var a=t[o]
e[o]=n(a,o)}return e}function v(t,n){for(var r=0,e=t.length;r<e;r++)n(t[r],r)}function y(t,n){for(var r=[],e=0,o=t.length;e<o;e++){var a=t[e]
n(a,e)&&r.push(a)}return r}function b(t,n,r){return function(t){for(var e,o=t.length-1;0<=o;o--)e=t[o],r=n(r,e,o)}(t),r}function k(t,n){for(var r=0,e=t.length;r<e;++r)if(!0!==n(t[r],r))return
return 1}var O=function(t){function n(){return o}function r(n){return n(t)}var e=a(t),o={fold:function(n,r){return r(t)},isSome:d,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(n){return O(n(t))},each:function(n){n(t)},bind:r,exists:r,forall:r,filter:function(n){return n(t)?o:m},toArray:function(){return[t]},toString:function(){return"some("+t+")"}}
return o},w={some:O,none:u,from:function(t){return null==t?m:O(t)}},C=Array.prototype.slice,E=Array.prototype.indexOf,x=Object.keys,R=Object.hasOwnProperty
function T(t){var n=[],r=[]
return v(t,(function(t){t.fold((function(t){n.push(t)}),(function(t){r.push(t)}))})),{errors:n,values:r}}function P(t){return"inline-command"===t.type||"inline-format"===t.type}function N(t){return"block-command"===t.type||"block-format"===t.type}function S(t){function n(n){return at.error({message:n,pattern:t})}function r(r,e,o){if(void 0===t.format)return void 0!==t.cmd?f(t.cmd)?at.value(o(t.cmd,t.value)):n(r+" pattern has non-string `cmd` parameter"):n(r+" pattern is missing both `format` and `cmd` parameters")
var a=void 0
if(s(t.format)){if(!k(t.format,f))return n(r+" pattern has non-string items in the `format` array")
a=t.format}else{if(!f(t.format))return n(r+" pattern has non-string `format` parameter")
a=[t.format]}return at.value(e(a))}if(!c(t))return n("Raw pattern is not an object")
if(!f(t.start))return n("Raw pattern is missing `start` parameter")
if(void 0===t.end)return void 0!==t.replacement?f(t.replacement)?0===t.start.length?n("Replacement pattern has empty `start` parameter"):at.value({type:"inline-command",start:"",end:t.start,cmd:"mceInsertContent",value:t.replacement}):n("Replacement pattern has non-string `replacement` parameter"):0===t.start.length?n("Block pattern has empty `start` parameter"):r("Block",(function(n){return{type:"block-format",start:t.start,format:n[0]}}),(function(n,r){return{type:"block-command",start:t.start,cmd:n,value:r}}))
if(!f(t.end))return n("Inline pattern has non-string `end` parameter")
if(0===t.start.length&&0===t.end.length)return n("Inline pattern has empty `start` and `end` parameters")
var e=t.start,o=t.end
return 0===o.length&&(o=e,e=""),r("Inline",(function(t){return{type:"inline-format",start:e,end:o,format:t}}),(function(t,n){return{type:"inline-command",start:e,end:o,cmd:t,value:n}}))}function M(t){return"block-command"===t.type?{start:t.start,cmd:t.cmd,value:t.value}:"block-format"===t.type?{start:t.start,format:t.format}:"inline-command"===t.type?"mceInsertContent"===t.cmd&&""===t.start?{start:t.end,replacement:t.value}:{start:t.start,end:t.end,cmd:t.cmd,value:t.value}:"inline-format"===t.type?{start:t.start,end:t.end,format:1===t.format.length?t.format[0]:t.format}:void 0}function A(t){return{inlinePatterns:y(t,P),blockPatterns:(n=y(t,N),r=function(t,n){return t.start.length===n.start.length?0:t.start.length>n.start.length?-1:1},(e=C.call(n,0)).sort(r),e)}
var n,r,e}function B(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=it.console
r&&(r.error||r.log).apply(r,t)}function D(t){var n=t.getParam("forced_root_block","p")
return!1===n?"":!0===n?"p":n}function I(t,n){return{container:t,offset:n}}function j(t){return t.nodeType===Node.TEXT_NODE}function _(t,n,r,e){void 0===e&&(e=!0)
var o=n.startContainer.parentNode,a=n.endContainer.parentNode
n.deleteContents(),e&&!r(n.startContainer)&&(j(n.startContainer)&&0===n.startContainer.data.length&&t.remove(n.startContainer),j(n.endContainer)&&0===n.endContainer.data.length&&t.remove(n.endContainer),mt(t,o,r),o!==a&&mt(t,a,r))}function U(t){return 0===t.start.length}function L(t,n){var r=w.from(t.dom.getParent(n.startContainer,t.dom.isBlock))
return""===D(t)?r.orThunk((function(){return w.some(t.getBody())})):r}function V(t){return function(n){return t===n?-1:0}}function W(t,n,r){if(j(t)&&0<=n)return w.some(I(t,n))
var e=dt(gt)
return w.from(e.backwards(t,n,V(t),r)).map((function(t){return I(t.container,t.container.data.length)}))}function q(t,n,r){if(j(n)&&(r<0||r>n.data.length))return[]
for(var e=[r],o=n;o!==t&&o.parentNode;){for(var a=o.parentNode,i=0;i<a.childNodes.length;i++)if(a.childNodes[i]===o){e.push(i)
break}o=a}return o===t?e.reverse():[]}function F(t,n,r,e,o){return{start:q(t,n,r),end:q(t,e,o)}}function G(t,n){var r=n.slice(),e=r.pop(),o=r,a=w.some(t)
return v(o,(function(t,n){a=function(t,n){return t.bind((function(t){return w.from(t.childNodes[n])}))}(a,t)})),a.bind((function(t){return j(t)&&(e<0||e>t.data.length)?w.none():w.some({node:t,offset:e})}))}function H(t,n){return G(t,n.start).bind((function(r){var e=r.node,o=r.offset
return G(t,n.end).map((function(t){var n=t.node,r=t.offset,a=document.createRange()
return a.setStart(e,o),a.setEnd(n,r),a}))}))}function J(t,n,r){(function(t,n){if(j(t)&&t.length<=0)return w.some(I(t,0))
var r=dt(gt)
return w.from(r.forwards(t,0,V(t),n)).map((function(t){return I(t.container,0)}))})(n,n).each((function(e){var o=e.container
ht(o,r.start.length,n).each((function(r){var e=t.createRng()
e.setStart(o,0),e.setEnd(r.container,r.offset),_(t,e,(function(t){return t===n}))}))}))}function K(t,n){return t.create("span",{"data-mce-type":"bookmark",id:n})}function X(t,n){var r=t.createRng()
return r.setStartAfter(n.start),r.setEndBefore(n.end),r}function z(t,n,r){var e=H(t.getRoot(),r).getOrDie("Unable to resolve path range"),o=e.startContainer,a=e.endContainer,i=0===e.endOffset?a:a.splitText(e.endOffset),u=0===e.startOffset?o:o.splitText(e.startOffset)
return{prefix:n,end:i.parentNode.insertBefore(K(t,n+"-end"),i),start:u.parentNode.insertBefore(K(t,n+"-start"),u)}}function Q(t,n,r){mt(t,t.get(n.prefix+"-end"),r),mt(t,t.get(n.prefix+"-start"),r)}function Y(t,n,r){t.selection.setRng(r),"inline-format"===n.type?v(n.format,(function(n){t.formatter.apply(n)})):t.execCommand(n.cmd,!1,n.value)}function Z(t,n,r){var e=t.selection.getRng()
return!1===e.collapsed?[]:L(t,e).bind((function(o){var a=e.startOffset-(r?1:0)
return bt(t,n,e.startContainer,a,o)})).fold((function(){return[]}),(function(t){return t.matches}))}function $(t,r){var e,o,a,i,u,f,c
0!==r.length&&(e=t.dom,o=t.selection.getBookmark(),a=e,i=r,u=(new Date).getTime(),f="mce_textpattern_"+Math.floor(1e9*Math.random())+ ++vt+String(u),c=b(i,(function(t,r){var e=z(a,f+"_end"+t.length,r.endRng)
return t.concat([n(n({},r),{endMarker:e})])}),[]),v(b(c,(function(t,r){var e=c.length-t.length-1,o=U(r.pattern)?r.endMarker:z(a,f+"_start"+e,r.startRng)
return t.concat([n(n({},r),{startMarker:o})])}),[]),(function(n){function r(t){return t===h}var o,a,i,u,f,c,s,l,d,m,g,p,h=e.getParent(n.startMarker.start,e.isBlock)
U(n.pattern)?(a=n.pattern,i=n.endMarker,u=r,f=X((o=t).dom,i),_(o.dom,f,u),Y(o,a,f)):(c=t,s=n.pattern,l=n.startMarker,d=n.endMarker,m=r,p=X(g=c.dom,d),_(g,X(g,l),m),_(g,p,m),Y(c,s,X(g,{prefix:l.prefix,start:l.end,end:d.start}))),Q(e,n.endMarker,r),Q(e,n.startMarker,r)})),t.selection.moveToBookmark(o))}function tt(t,n){var r=Z(t,n.inlinePatterns,!0)
0<r.length&&t.undoManager.transact((function(){$(t,r)}))}function nt(t,n,r){for(var e=0;e<t.length;e++)if(r(t[e],n))return 1}function rt(t,n){var r=[",",".",";",":","!","?"],e=[32]
t.on("keydown",(function(r){13!==r.keyCode||ct.modifierPressed(r)||!function(t,n){if(t.selection.isCollapsed()){var r=Z(t,n.inlinePatterns,!1),e=function(t,n){var r=t.dom,e=t.selection.getRng()
return L(t,e).filter((function(n){var e=D(t),o=""===e&&r.is(n,"body")||r.is(n,e)
return null!==n&&o})).bind((function(t){var e,o=t.textContent,a=n,i=(e=o).replace(" "," ")
return function(t,n,r){for(var e=0,o=t.length;e<o;e++){var a=t[e]
if(n(a))return w.some(a)
if(r(a,e))break}return w.none()}(a,(function(t){return 0===e.indexOf(t.start)||0===i.indexOf(t.start)}),l).map((function(n){return st.trim(o).length===n.start.length?[]:[{pattern:n,range:F(r.getRoot(),t,0,t,0)}]}))})).getOr([])}(t,n.blockPatterns)
return(0<e.length||0<r.length)&&(t.undoManager.add(),t.undoManager.extra((function(){t.execCommand("mceInsertNewLine")}),(function(){var n,o,a
t.insertContent("\ufeff"),$(t,r),n=t,0!==(o=e).length&&(a=n.selection.getBookmark(),v(o,(function(t){return o=(r=n).dom,a=(e=t).pattern,i=H(o.getRoot(),e.range).getOrDie("Unable to resolve path range"),L(r,i).each((function(t){"block-format"===a.type?function(t,n){var r,e=n.get(t)
return s(e)&&(0<(r=e).length?w.some(r[0]):w.none()).exists((function(t){return R.call(t,"block")}))}(a.format,r.formatter)&&r.undoManager.transact((function(){J(r.dom,t,a),r.formatter.apply(a.format)})):"block-command"===a.type&&r.undoManager.transact((function(){J(r.dom,t,a),r.execCommand(a.cmd,!1,a.value)}))})),1
var r,e,o,a,i})),n.selection.moveToBookmark(a))
var i=t.selection.getRng(),u=W(i.startContainer,i.startOffset,t.dom.getRoot())
t.execCommand("mceInsertNewLine"),u.each((function(n){var r=n.container
"\ufeff"===r.data.charAt(n.offset-1)&&(r.deleteData(n.offset-1,1),mt(t.dom,r.parentNode,(function(n){return n===t.dom.getRoot()})))}))})),1)}}(t,n.get())||r.preventDefault()}),!0),t.on("keyup",(function(r){nt(e,r,(function(t,n){return t===n.keyCode&&!1===ct.modifierPressed(n)}))&&tt(t,n.get())})),t.on("keypress",(function(e){nt(r,e,(function(t,n){return t.charCodeAt(0)===n.charCode}))&&ft.setEditorTimeout(t,(function(){tt(t,n.get())}))}))}!function(t){if(!s(t))throw new Error("cases must be an array")
if(0===t.length)throw new Error("there must be at least one case")
var n=[],r={}
v(t,(function(e,o){var a=x(e)
if(1!==a.length)throw new Error("one and only one name per case")
var i=a[0],u=e[i]
if(void 0!==r[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!s(u))throw new Error("case arguments must be an array")
n.push(i),r[i]=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e]
var a=r.length
if(a!==u.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+u.length+" ("+u+"), got "+a)
return{fold:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e]
if(n.length!==t.length)throw new Error("Wrong number of arguments to fold. Expected "+t.length+", got "+n.length)
return n[o].apply(null,r)},match:function(t){var e=x(t)
if(n.length!==e.length)throw new Error("Wrong number of arguments to match. Expected: "+n.join(",")+"\nActual: "+e.join(","))
if(!k(n,(function(t){return p(e,t)})))throw new Error("Not all branches were specified when using match. Specified: "+e.join(", ")+"\nRequired: "+n.join(", "))
return t[i].apply(null,r)},log:function(t){console.log(t,{constructors:n,constructor:i,params:r})}}}}))}([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}])
var et=function(t){return{isValue:d,isError:l,getOr:a(t),getOrThunk:a(t),getOrDie:a(t),or:function(n){return et(t)},orThunk:function(n){return et(t)},fold:function(n,r){return r(t)},map:function(n){return et(n(t))},mapError:function(n){return et(t)},each:function(n){n(t)},bind:function(n){return n(t)},exists:function(n){return n(t)},forall:function(n){return n(t)},toOptional:function(){return w.some(t)}}},ot=function(t){return{isValue:l,isError:d,getOr:i,getOrThunk:function(t){return t()},getOrDie:function(){return n=String(t),function(){throw new Error(n)}()
var n},or:i,orThunk:function(t){return t()},fold:function(n,r){return n(t)},map:function(n){return ot(t)},mapError:function(n){return ot(n(t))},each:o,bind:function(n){return ot(t)},exists:l,forall:d,toOptional:w.none}},at={value:et,error:ot,fromOption:function(t,n){return t.fold((function(){return ot(n)}),et)}},it="undefined"!=typeof window?window:Function("return this;")(),ut=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],ft=tinymce.util.Tools.resolve("tinymce.util.Delay"),ct=tinymce.util.Tools.resolve("tinymce.util.VK"),st=tinymce.util.Tools.resolve("tinymce.util.Tools"),lt=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),dt=tinymce.util.Tools.resolve("tinymce.dom.TextSeeker"),mt=function(t,n,r){var e
n&&t.isEmpty(n)&&!r(n)&&(e=n.parentNode,t.remove(n),mt(t,e,r))},gt=lt.DOM,pt=function(t,n,r){if(!j(t))return w.none()
var e=t.textContent
if(0<=n&&n<=e.length)return w.some(I(t,n))
var o=dt(gt)
return w.from(o.backwards(t,n,V(t),r)).bind((function(t){var e=t.container.data
return pt(t.container,n+e.length,r)}))},ht=function(t,n,r){if(!j(t))return w.none()
var e=t.textContent
if(n<=e.length)return w.some(I(t,n))
var o=dt(gt)
return w.from(o.forwards(t,n,V(t),r)).bind((function(t){return ht(t.container,n-e.length,r)}))},vt=0,yt=function(t,n,r,e){var o,a,i,u,f,c,s,l=n.start
return a=e.container,i=e.offset,o=l,u=function(t,n){var r=t.data.substring(0,n),e=r.lastIndexOf(o.charAt(o.length-1)),a=r.lastIndexOf(o)
return-1!==a?a+o.length:-1!==e?e+1:-1},f=r,s=dt(t,(c=t,function(t){return c.isBlock(t)||p(["BR","IMG","HR","INPUT"],t.nodeName)||"false"===c.getContentEditable(t)})),w.from(s.backwards(a,i,u,f)).bind((function(e){if(e.offset>=l.length){var o=t.createRng()
return o.setStart(e.container,e.offset-l.length),o.setEnd(e.container,e.offset),w.some(o)}var a=e.offset-l.length
return pt(e.container,a,r).map((function(n){var r=t.createRng()
return r.setStart(n.container,n.offset),r.setEnd(e.container,e.offset),r})).filter((function(t){return t.toString()===l})).orThunk((function(){return yt(t,n,r,I(e.container,0))}))}))},bt=function(t,n,r,e,o){var a=t.dom
return W(r,e,a.getRoot()).bind((function(i){var u=a.createRng()
u.setStart(o,0),u.setEnd(r,e)
for(var f,c=u.toString(),s=0;s<n.length;s++){var l,d,m=n[s],g=m.end
if(f=void 0,l=(f=c).length-g.length,""===(d=g)||f.length>=d.length&&f.substr(l,l+d.length)===d){var p=n.slice()
p.splice(s,1)
var h=function(t,n,r){var e=t.dom,o=e.getRoot(),a=r.pattern,i=r.position.container,u=r.position.offset
return pt(i,u-r.pattern.end.length,n).bind((function(f){var c=F(o,f.container,f.offset,i,u)
if(U(a))return w.some({matches:[{pattern:a,startRng:c,endRng:c}],position:f})
var s=bt(t,r.remainingPatterns,f.container,f.offset,n),l=s.getOr({matches:[],position:f}),d=l.position
return function(t,n,r,e,o,a){if(void 0===a&&(a=!1),0!==n.start.length||a)return W(r,e,o).bind((function(r){return yt(t,n,o,r).bind((function(t){if(a){if(t.endContainer===r.container&&t.endOffset===r.offset)return w.none()
if(0===r.offset&&t.endContainer.textContent.length===t.endOffset)return w.none()}return w.some(t)}))}))
var i=t.createRng()
return i.setStart(r,e),i.setEnd(r,e),w.some(i)}(e,a,d.container,d.offset,n,s.isNone()).map((function(t){var n=F(o,t.startContainer,t.startOffset,t.endContainer,t.endOffset)
return{matches:l.matches.concat([{pattern:a,startRng:n,endRng:c}]),position:I(t.startContainer,t.startOffset)}}))}))}(t,o,{pattern:m,remainingPatterns:p,position:i})
if(h.isSome())return h}}return w.none()}))}
t.add("textpattern",(function(t){var n,e,o,a=(n=function(){var n=t.getParam("textpattern_patterns",ut,"array")
if(!s(n))return B("The setting textpattern_patterns should be an array"),{inlinePatterns:[],blockPatterns:[]}
var r=T(h(n,S))
return v(r.errors,(function(t){return B(t.message,t.pattern),0})),A(r.values)}(),e=n,{get:function(){return e},set:function(t){e=t}})
return rt(t,a),o=a,{setPatterns:function(t){var n=T(h(t,S))
if(0<n.errors.length){var r=n.errors[0]
throw new Error(r.message+":\n"+JSON.stringify(r.pattern,null,2))}o.set(A(n.values))},getPatterns:function(){return r(r([],h(o.get().inlinePatterns,M),!0),h(o.get().blockPatterns,M),!0)}}}))}()
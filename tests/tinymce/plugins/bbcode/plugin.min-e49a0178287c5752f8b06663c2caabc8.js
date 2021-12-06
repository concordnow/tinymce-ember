!function(){"use strict"
function o(o){function e(e,t){o=o.replace(e,t)}return o=t.trim(o),e(/\n/gi,"<br />"),e(/\[b\]/gi,"<strong>"),e(/\[\/b\]/gi,"</strong>"),e(/\[i\]/gi,"<em>"),e(/\[\/i\]/gi,"</em>"),e(/\[u\]/gi,"<u>"),e(/\[\/u\]/gi,"</u>"),e(/\[url=([^\]]+)\](.*?)\[\/url\]/gi,'<a href="$1">$2</a>'),e(/\[url\](.*?)\[\/url\]/gi,'<a href="$1">$1</a>'),e(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" />'),e(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<font color="$1">$2</font>'),e(/\[code\](.*?)\[\/code\]/gi,'<span class="codeStyle">$1</span>&nbsp;'),e(/\[quote.*?\](.*?)\[\/quote\]/gi,'<span class="quoteStyle">$1</span>&nbsp;'),o}var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.util.Tools")
e.add("bbcode",(function(e){e.on("BeforeSetContent",(function(e){e.content=o(e.content)})),e.on("PostProcess",(function(e){function i(o,e){n=n.replace(o,e)}var n
e.set&&(e.content=o(e.content)),e.get&&(e.content=(n=e.content,n=t.trim(n),i(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi,"[url=$1]$2[/url]"),i(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),i(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),i(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),i(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),i(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi,"[color=$1]$2[/color]"),i(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[color=$1]$2[/color]"),i(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi,"[size=$1]$2[/size]"),i(/<font>(.*?)<\/font>/gi,"$1"),i(/<img.*?src=\"(.*?)\".*?\/>/gi,"[img]$1[/img]"),i(/<span class=\"codeStyle\">(.*?)<\/span>/gi,"[code]$1[/code]"),i(/<span class=\"quoteStyle\">(.*?)<\/span>/gi,"[quote]$1[/quote]"),i(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi,"[code][b]$1[/b][/code]"),i(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi,"[quote][b]$1[/b][/quote]"),i(/<em class=\"codeStyle\">(.*?)<\/em>/gi,"[code][i]$1[/i][/code]"),i(/<em class=\"quoteStyle\">(.*?)<\/em>/gi,"[quote][i]$1[/i][/quote]"),i(/<u class=\"codeStyle\">(.*?)<\/u>/gi,"[code][u]$1[/u][/code]"),i(/<u class=\"quoteStyle\">(.*?)<\/u>/gi,"[quote][u]$1[/u][/quote]"),i(/<\/(strong|b)>/gi,"[/b]"),i(/<(strong|b)>/gi,"[b]"),i(/<\/(em|i)>/gi,"[/i]"),i(/<(em|i)>/gi,"[i]"),i(/<\/u>/gi,"[/u]"),i(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi,"[u]$1[/u]"),i(/<u>/gi,"[u]"),i(/<blockquote[^>]*>/gi,"[quote]"),i(/<\/blockquote>/gi,"[/quote]"),i(/<br \/>/gi,"\n"),i(/<br\/>/gi,"\n"),i(/<br>/gi,"\n"),i(/<p>/gi,""),i(/<\/p>/gi,"\n"),i(/&nbsp;|\u00a0/gi," "),i(/&quot;/gi,'"'),i(/&lt;/gi,"<"),i(/&gt;/gi,">"),i(/&amp;/gi,"&"),n))}))}))}()
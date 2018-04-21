!function(){"use strict";function u(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var l,s={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0,encodeHTMLSource:function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}}};l=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=s:"function"==typeof define&&define.amd?define(function(){return s}):l.doT=s;var d={start:"'+(",end:")+'",startencode:"'+encodeHTML("},f={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},p=/$^/;s.template=function(e,t,n){var r,o,a=(t=t||s.templateSettings).append?d:f,c=0,i=t.use||t.define?function r(o,e,a){return("string"==typeof e?e:e.toString()).replace(o.define||p,function(e,r,t,n){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in a||(":"===t?(o.defineParams&&n.replace(o.defineParams,function(e,t,n){a[r]={arg:t,text:n}}),r in a||(a[r]=n)):new Function("def","def['"+r+"']="+n)(a)),""}).replace(o.use||p,function(e,t){o.useParams&&(t=t.replace(o.useParams,function(e,t,n,r){if(a[n]&&a[n].arg&&r){var o=(n+":"+r).replace(/'|\\/g,"_");return a.__exp=a.__exp||{},a.__exp[o]=a[n].text.replace(new RegExp("(^|[^\\w$])"+a[n].arg+"([^\\w$])","g"),"$1"+r+"$2"),t+"def.__exp['"+o+"']"}}));var n=new Function("def","return "+t)(a);return n?r(o,n,a):n})}(t,e,n||{}):e;i=("var out='"+(t.strip?i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):i).replace(/'|\\/g,"\\$&").replace(t.interpolate||p,function(e,t){return a.start+u(t)+a.end}).replace(t.encode||p,function(e,t){return r=!0,a.startencode+u(t)+a.end}).replace(t.conditional||p,function(e,t,n){return t?n?"';}else if("+u(n)+"){out+='":"';}else{out+='":n?"';if("+u(n)+"){out+='":"';}out+='"}).replace(t.iterate||p,function(e,t,n,r){return t?(c+=1,o=r||"i"+c,t=u(t),"';var arr"+c+"="+t+";if(arr"+c+"){var "+n+","+o+"=-1,l"+c+"=arr"+c+".length-1;while("+o+"<l"+c+"){"+n+"=arr"+c+"["+o+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||p,function(e,t){return"';"+u(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(t.selfcontained||!l||l._encodeHTML||(l._encodeHTML=s.encodeHTMLSource(t.doNotSkipEncoded)),i="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+s.encodeHTMLSource.toString()+"("+(t.doNotSkipEncoded||"")+"));"+i);try{return new Function(t.varname,i)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+i),e}},s.compile=function(e,t){return s.template(e,null,t)}}(),function(){var T,M;function L(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;!function(t,n){if(t.hasAttribute("M-temp")){var e=t.getAttribute("M-temp");if(T&&(e=e.replace(/\[(.?)size(.?)\]/,"$1"+T+"$2")),M&&(e=e.replace(/\[(.?)lang(.?)\]/,"$1"+M+"$2")),e=e.replace(/\[.?(lang|size).?\]/g,"")){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var e=doT.template(n);n=e(JSON.parse(r.responseText)),a(t,n)}},r.open("GET",e,!0),r.send()}else{var o=doT.template(n);n=o(),a(t,n)}}else a(t,n)}(t,e)}},n.open("GET",e,!0),n.send()}function a(e,t){!function(){var e=document.querySelectorAll("script:not(.accounted)"),t=e.length;for(;t--;)e[t].classList.add("accounted")}(),e.outerHTML=t,function(){var e=document.querySelectorAll("script:not(.accounted)"),t=e.length;for(;t--;){var n=document.createElement("SCRIPT");n.innerHTML=e[t].innerHTML,e[t].hasAttribute("src")&&n.setAttribute("src",e[t].getAttribute("src")),document.head.appendChild(n)}}()}function n(e){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){document.documentElement.innerHTML=o.responseText;for(var e=document.querySelectorAll("script:not([src*='modulr.js']):not([src*='modulr.min.js'])"),t=0,n=e.length;t<n;){var r=document.createElement("SCRIPT");r.innerHTML=e[t].innerHTML,e[t].hasAttribute("src")&&r.setAttribute("src",e[t].getAttribute("src")),document.head.appendChild(r),t++}}},o.open("GET",e,!0),o.send()}include=function(e,t,n,r){var o=document.documentElement.getBoundingClientRect().width,a=e;if("object"==typeof n){for(var c=0,i=n.length,u=!1;c<i;){var l=/(\d+)?\((\D*)\)(\d+)?/g.exec(n[c]),s=l[2];(o>l[1]||null==l[1])&&(o<=l[3]||null==l[3])&&(u=!0,s&&(T=s,a=a.replace(/\[(.?)size(.?)\]/,"$1"+s+"$2"))),c++}if(!u)return}if(r){if(~window.location.search.indexOf("lang=")){localStorage.setItem("language",/(?:\?|&)lang=(.*?)(?:&|$)/g.exec(window.location.search)[1])}for(var d=0,f=r.length;d<f;){var p=r[d];localStorage.getItem("language")==p&&(a=a.replace(/\[(.?)lang(.?)\]/,"$1"+p+"$2"),M=p),d++}}a=a.replace(/\[.?(lang|size).?\]/g,"");var g=document.querySelector("script[M-name="+t+"]:not(.accounted)");if(g.style.display="block",g.style.color="transparent",g.style.height="100vh",g.style.overflow="hidden",g.hasAttribute("M-lazy")){console.log(g);var m=g.getAttribute("M-lazy")||100,v=window.innerHeight;g.getBoundingClientRect().top-v-m<=0?L(g,a):window.addEventListener("scroll",function e(){g.getBoundingClientRect().top-v-m<=0&&(window.removeEventListener("scroll",e),L(g,a))})}else if(g.hasAttribute("M-hash")){g.style.display="none";for(var h=g.getAttribute("M-name"),w=document.querySelectorAll("a[M-hash="+h+"]"),S=w.length;S--;){var y=S;w[S].addEventListener("click",function e(){for(;y--;)w[y].removeEventListener("click",e);L(g,a)})}}else L(g,a)},window.addEventListener("click",function(e){var t=function(e){for(;e;){if("A"===e.tagName)return e.href;e=e.parentElement}}(e.target);t&&(e.preventDefault(),-1==t.indexOf("#")&&(n(t),history.pushState(null,null,t)))}),window.addEventListener("popstate",function(e){n(window.location.href)})}();
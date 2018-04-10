!function(){"use strict";function u(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var s,d={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0,encodeHTMLSource:function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}}};s=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):s.doT=d;var l={start:"'+(",end:")+'",startencode:"'+encodeHTML("},f={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},p=/$^/;d.template=function(e,t,n){var r,o,a=(t=t||d.templateSettings).append?l:f,i=0,c=t.use||t.define?function r(o,e,a){return("string"==typeof e?e:e.toString()).replace(o.define||p,function(e,r,t,n){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in a||(":"===t?(o.defineParams&&n.replace(o.defineParams,function(e,t,n){a[r]={arg:t,text:n}}),r in a||(a[r]=n)):new Function("def","def['"+r+"']="+n)(a)),""}).replace(o.use||p,function(e,t){o.useParams&&(t=t.replace(o.useParams,function(e,t,n,r){if(a[n]&&a[n].arg&&r){var o=(n+":"+r).replace(/'|\\/g,"_");return a.__exp=a.__exp||{},a.__exp[o]=a[n].text.replace(new RegExp("(^|[^\\w$])"+a[n].arg+"([^\\w$])","g"),"$1"+r+"$2"),t+"def.__exp['"+o+"']"}}));var n=new Function("def","return "+t)(a);return n?r(o,n,a):n})}(t,e,n||{}):e;c=("var out='"+(t.strip?c.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):c).replace(/'|\\/g,"\\$&").replace(t.interpolate||p,function(e,t){return a.start+u(t)+a.end}).replace(t.encode||p,function(e,t){return r=!0,a.startencode+u(t)+a.end}).replace(t.conditional||p,function(e,t,n){return t?n?"';}else if("+u(n)+"){out+='":"';}else{out+='":n?"';if("+u(n)+"){out+='":"';}out+='"}).replace(t.iterate||p,function(e,t,n,r){return t?(i+=1,o=r||"i"+i,t=u(t),"';var arr"+i+"="+t+";if(arr"+i+"){var "+n+","+o+"=-1,l"+i+"=arr"+i+".length-1;while("+o+"<l"+i+"){"+n+"=arr"+i+"["+o+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||p,function(e,t){return"';"+u(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(t.selfcontained||!s||s._encodeHTML||(s._encodeHTML=d.encodeHTMLSource(t.doNotSkipEncoded)),c="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+d.encodeHTMLSource.toString()+"("+(t.doNotSkipEncoded||"")+"));"+c);try{return new Function(t.varname,c)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+c),e}},d.compile=function(e,t){return d.template(e,null,t)}}(),function(){function h(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;!function(t,n){if(t.hasAttribute("M-data")){var e=t.getAttribute("M-data");if(-1!=e.indexOf("{")){var r=doT.template(n);n=r(JSON.parse(e)),a(t,n)}else{var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){var e=doT.template(n);n=e(JSON.parse(o.responseText)),a(t,n)}},o.open("GET",e,!0),o.send()}}else a(t,n)}(t,e)}},n.open("GET",e,!0),n.send()}function a(e,t){!function(){var e=document.querySelectorAll("script:not(.accounted)"),t=e.length;for(;t--;)e[t].classList.add("accounted")}(),e.outerHTML=t,function(){var e=document.querySelectorAll("script:not(.accounted)"),t=e.length;for(;t--;){var n=document.createElement("SCRIPT");n.innerHTML=e[t].innerHTML,e[t].hasAttribute("src")&&n.setAttribute("src",e[t].getAttribute("src")),document.head.appendChild(n)}}()}function n(e){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){document.documentElement.innerHTML=o.responseText;for(var e=document.querySelectorAll("script:not([src$='modulr.js']):not([src$='modulr.min.js'])"),t=0,n=e.length;t<n;){var r=document.createElement("SCRIPT");r.innerHTML=e[t].innerHTML,e[t].hasAttribute("src")&&r.setAttribute("src",e[t].getAttribute("src")),document.head.appendChild(r),t++}}},o.open("GET",e,!0),o.send()}include=function(e,t,n){var r=document.documentElement.getBoundingClientRect().width,o=e,a=e,i=0,c=0;if(n)for(c=n.length;i<c;){var u=/(\d+)?\((\D*)\)(\d+)?/g.exec(n[i]),s=u[2];if(!(r>u[1]||null==u[1])||!(r<=u[3]||null==u[3]))return;var d=o.lastIndexOf(".");if(s)a=o.substring(0,d+1)+s+o.substr(d);i++}var l=document.querySelector("script[M-name="+t+"]:not(.accounted)");if(l.style.display="block",l.style.color="transparent",l.style.height="50vh",l.hasAttribute("M-lazy")){var f=l.getAttribute("M-lazy")||100,p=window.innerHeight;l.getBoundingClientRect().top-p-f<=0?h(l,a):window.addEventListener("scroll",function e(){l.getBoundingClientRect().top-p-f<=0&&(window.removeEventListener("scroll",e),h(l,a))})}else if(l.hasAttribute("M-hash")){l.style.display="none";for(var g=l.getAttribute("M-name"),m=document.querySelectorAll("a[M-hash="+g+"]"),v=m.length;v--;)m[v].addEventListener("click",function e(){this.removeEventListener("click",e),h(l,a)})}else h(l,a)},window.addEventListener("click",function(e){var t=function(e){for(;e;){if("A"===e.tagName)return e.href;e=e.parentElement}}(e.target);t&&e.preventDefault(),t&&-1==t.indexOf("#")&&(n(t),history.pushState(null,null,t))}),window.addEventListener("popstate",function(e){n(window.location.href)})}();
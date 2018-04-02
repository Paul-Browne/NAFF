/* doT.js */
!function(){"use strict";function e(n,t,r){return("string"==typeof t?t:t.toString()).replace(n.define||c,function(e,t,o,a){return 0===t.indexOf("def.")&&(t=t.substring(4)),t in r||(":"===o?(n.defineParams&&a.replace(n.defineParams,function(e,n,o){r[t]={arg:n,text:o}}),t in r||(r[t]=a)):new Function("def","def['"+t+"']="+a)(r)),""}).replace(n.use||c,function(t,o){n.useParams&&(o=o.replace(n.useParams,function(e,n,t,o){if(r[t]&&r[t].arg&&o){var a=(t+":"+o).replace(/'|\\/g,"_");return r.__exp=r.__exp||{},r.__exp[a]=r[t].text.replace(new RegExp("(^|[^\\w$])"+r[t].arg+"([^\\w$])","g"),"$1"+o+"$2"),n+"def.__exp['"+a+"']"}}));var a=new Function("def","return "+o)(r);return a?e(n,a,r):a})}function n(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var t,r={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};r.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},t=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):t.doT=r;var o={start:"'+(",end:")+'",startencode:"'+encodeHTML("},a={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},c=/$^/;r.template=function(u,i,d){var s,l,p=(i=i||r.templateSettings).append?o:a,f=0,g=i.use||i.define?e(i,u,d||{}):u;g=("var out='"+(i.strip?g.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):g).replace(/'|\\/g,"\\$&").replace(i.interpolate||c,function(e,t){return p.start+n(t)+p.end}).replace(i.encode||c,function(e,t){return s=!0,p.startencode+n(t)+p.end}).replace(i.conditional||c,function(e,t,r){return t?r?"';}else if("+n(r)+"){out+='":"';}else{out+='":r?"';if("+n(r)+"){out+='":"';}out+='"}).replace(i.iterate||c,function(e,t,r,o){return t?(f+=1,l=o||"i"+f,t=n(t),"';var arr"+f+"="+t+";if(arr"+f+"){var "+r+","+l+"=-1,l"+f+"=arr"+f+".length-1;while("+l+"<l"+f+"){"+r+"=arr"+f+"["+l+"+=1];out+='"):"';} } out+='"}).replace(i.evaluate||c,function(e,t){return"';"+n(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),s&&(i.selfcontained||!t||t._encodeHTML||(t._encodeHTML=r.encodeHTMLSource(i.doNotSkipEncoded)),g="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+r.encodeHTMLSource.toString()+"("+(i.doNotSkipEncoded||"")+"));"+g);try{return new Function(i.varname,g)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+g),e}},r.compile=function(e,n){return r.template(e,null,n)}}();

/* Set-DOM.js */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).setDOM=e()}}(function(){return function e(t,n,r){function i(d,a){if(!n[d]){if(!t[d]){var f="function"==typeof require&&require;if(!a&&f)return f(d,!0);if(o)return o(d,!0);var u=new Error("Cannot find module '"+d+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[d]={exports:{}};t[d][0].call(l.exports,function(e){var n=t[d][1][e];return i(n||e)},l,l.exports,e,t,n,r)}return n[d].exports}for(var o="function"==typeof require&&require,d=0;d<r.length;d++)i(r[d]);return i}({1:[function(e,t){"use strict";function n(e,t){!function(e,t){if(!e)throw new Error("set-dom: "+t)}(e&&e.nodeType,"You must provide a valid node to update."),e.nodeType===h&&(e=e.documentElement),t.nodeType===v?i(e,t):r(e,"string"==typeof t?s(t,e.nodeName):t),e[m]||(e[m]=!0,f(e))}function r(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===p){if(function(e,t){return a(e)&&a(t)||d(e)===d(t)||e.isEqualNode(t)}(e,t))return;if(i(e,t),e.nodeName===t.nodeName)!function(e,t){var n,r,i,o,d;for(n=e.length;n--;)r=e[n],o=r.namespaceURI,d=r.localName,(i=t.getNamedItemNS(o,d))||e.removeNamedItemNS(o,d);for(n=t.length;n--;)r=t[n],o=r.namespaceURI,d=r.localName,(i=e.getNamedItemNS(o,d))?i.value!==r.value&&(i.value=r.value):(t.removeNamedItemNS(o,d),e.setNamedItemNS(r))}(e.attributes,t.attributes);else{for(var n=t.cloneNode();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else e.parentNode.replaceChild(t,u(e)),f(t)}function i(e,t){for(var n,i,d,a,l,s,c=e.firstChild,m=t.firstChild,p=0;c;)p++,i=o(n=c),c=c.nextSibling,i&&(s||(s={}),s[i]=n);for(c=e.firstChild;m;)p--,d=m,m=m.nextSibling,s&&(a=o(d))&&(l=s[a])?(delete s[a],l!==c?e.insertBefore(l,c):c=c.nextSibling,r(l,d)):c?(n=c,c=c.nextSibling,o(n)?(e.insertBefore(d,n),f(d)):r(n,d)):(e.appendChild(d),f(d));for(i in s)p--,e.removeChild(u(s[i]));for(;--p>=0;)e.removeChild(u(e.lastChild))}function o(e){if(e.nodeType===p){var t=e.getAttribute(n.KEY)||e.id;return t?c+t:void 0}}function d(e){return e.getAttribute(n.CHECKSUM)||NaN}function a(e){return null!=e.getAttribute(n.IGNORE)}function f(e){return l(e,"mount")}function u(e){return l(e,"dismount")}function l(e,t){if(o(e)){var n=document.createEvent("Event"),r={value:e};n.initEvent(t,!1,!1),Object.defineProperty(n,"target",r),Object.defineProperty(n,"srcElement",r),e.dispatchEvent(n)}for(var i=e.firstChild;i;)i=l(i,t).nextSibling;return e}n.KEY="data-key",n.IGNORE="data-ignore",n.CHECKSUM="data-checksum";var s=e(2),c="_set-dom-",m=c+"mounted",p=1,h=9,v=11;t.exports=n},{2:2}],2:[function(e,t){"use strict";function n(e,t){if(t===i){if(d)return c.innerHTML=e,c;var n=e.match(p);if(n){var o=n[2],a=n.index+n[1].length,u=a+o.length;e=e.slice(0,a)+e.slice(u),m.innerHTML=o}for(var l=r.parseFromString(e,f),s=l.body;m.firstChild;)s.appendChild(m.firstChild);return l.documentElement}return m.innerHTML=e,m.firstChild}var r=window.DOMParser&&new window.DOMParser,i="HTML",o=!1,d=!1,a="text/html",f="application/xhtml+xml";try{var u=r.parseFromString('<wbr class="A"/>',a).body.firstChild,l=document.createElement("div");if(l.appendChild(u),"A"!==l.firstChild.classList[0])throw new Error;o=!0}catch(e){}var s=document.implementation.createHTMLDocument(""),c=s.documentElement,m=s.body;try{c.innerHTML+="",d=!0}catch(e){r.parseFromString('<wbr class="A"/>',f);var p=/(<body[^>]*>)([\s\S]*)<\/body>/}t.exports=o?function(e,t){var o=r.parseFromString(e,a);return o.body?t===i?o.documentElement:o.body.firstChild:n(e,t)}:n},{}]},{},[1])(1)});

/* naff.js */
!function() {

    function _request(targ, url){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var res = xhr.responseText;
                replaceScriptTagWithResponse(targ, res);
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    }

    function replaceScriptTagWithResponse(outer, res) {
        /* json data */
        if (outer.hasAttribute("nf-data")) {
            var jsonData = outer.getAttribute("nf-data");
            if (jsonData.indexOf("{") != -1) {
                var dotted = doT.template(res);
                res = dotted(JSON.parse(jsonData));
                addAccountedClassToScripts_addContent_addNewScriptsToHead(outer, res);
            } else {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var dotted = doT.template(res);
                        res = dotted(JSON.parse(xmlhttp.responseText));
                        addAccountedClassToScripts_addContent_addNewScriptsToHead(outer, res);
                    }
                }
                xmlhttp.open("GET", jsonData, true);
                xmlhttp.send();
            }
        } else {
            addAccountedClassToScripts_addContent_addNewScriptsToHead(outer, res);
        }
    }

    function addAccountedClassToScripts_addContent_addNewScriptsToHead(outer, res){
        addAccountedClassToScripts();
        outer.outerHTML = res;
        addNewScriptsToHead();
    }

    function addAccountedClassToScripts() {
        var scripts = document.querySelectorAll("script:not(.accounted)");
        var _k = scripts.length;
        while(_k--){
            scripts[_k].classList.add('accounted');
        }
    }

    function addNewScriptsToHead() {
        var addScripts = document.querySelectorAll("script:not(.accounted)");
        var _l = addScripts.length;
        while(_l--){
           var newScript = document.createElement("SCRIPT");
           newScript.innerHTML = addScripts[_l].innerHTML;
           if (addScripts[_l].hasAttribute("src")) {
               newScript.setAttribute("src", addScripts[_l].getAttribute("src"));
           }
           document.head.appendChild(newScript);
        }
    }

    function clickedOn(el) {
        while (el) {
            if (el.tagName === 'A') {
                return el.href;
            }
            el = el.parentElement;
        }
    }

    include = function(theUrl, target, arr) {
        var wW = window.innerWidth;
        var _url = theUrl;
        var url = theUrl;
        var i = 0;
        var j = 0;
        if (arr) {
            j = arr.length;
        }

        while(i < j) {
            var REG = /(\d+)?\((\D*)\)(\d+)?/g;
            var match = REG.exec(arr[i]);
            var suffix = match[2];
            
            if( ( wW > match[1] || match[1] == undefined) && ( wW <= match[3] || match[3] == undefined) ){
                var mime = _url.lastIndexOf('.');
                console.log(suffix);
                if(suffix){
                    var url = _url.substring(0, mime+1) + suffix + _url.substr(mime);
                }
            }

            i++;
        }       

        var _target = document.querySelector("script[nf-name=" + target + "]:not(.accounted)");

        _target.style.display = "block";
        _target.style.color = "transparent";
        _target.style.height = "50vh";


        if (_target.hasAttribute("nf-lazy")) {
            var offset = _target.getAttribute("nf-lazy") || 100;
            var wH = window.innerHeight;
            var ps = _target.getBoundingClientRect().top - wH - offset;

            if (ps <= 0) {
                _request(_target, url);
            } else {
                window.addEventListener("scroll", function checkScrollPosition(){
                    var newPS = _target.getBoundingClientRect().top - wH - offset;
                    if (newPS <= 0) {
                        window.removeEventListener("scroll", checkScrollPosition);
                        _request(_target, url);
                    }
                })
            }

        } else if (_target.hasAttribute("nf-hash")) {
            _target.style.display = "none";
            var _hash = _target.getAttribute("nf-name");        
            var matchingAnchor = document.querySelectorAll("a[nf-hash=" + _hash + "]");
            var _j = matchingAnchor.length;
            while(_j--){
                matchingAnchor[_j].addEventListener("click", function checkClickedAnchor() {
                    this.removeEventListener("click", checkClickedAnchor);
                    _request(_target, url);
                })
            }
        } else {
            _request(_target, url);
        }
    }

    function fullReplace(theUrl) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                document.documentElement.innerHTML = xmlhttp.responseText;
                var addScripts = document.querySelectorAll("script:not([src$='naff.js']):not([src$='naff.min.js'])");
                var _i = 0;
                var __i = addScripts.length;
                while(_i < __i){
                    var newScript = document.createElement("SCRIPT");
                    newScript.innerHTML = addScripts[_i].innerHTML;
                    if (addScripts[_i].hasAttribute("src")) {
                        newScript.setAttribute("src", addScripts[_i].getAttribute("src"));
                    }
                    document.head.appendChild(newScript);
                    _i++;
                }
            }
        }
        xmlhttp.open("GET", theUrl, true);
        xmlhttp.send();
    }

    window.addEventListener("click", function(e) {
        var _this = clickedOn(e.target);
        if (_this){
            e.preventDefault();
        }
        if (_this && _this.indexOf("#") == -1) {
            fullReplace(_this);
            history.pushState(null, null, _this);
        }
    });

    window.addEventListener("popstate", function(e) {
        fullReplace(window.location.href);
    });

}();

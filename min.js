var uce=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}var u=function(t){return{get:function(e){return t.get(e)},set:function(e,n){return t.set(e,n),n}}},l=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,f=/<[a-z][^>]+$/i,p=/>[^<>]*$/,d=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,v=/\s+$/,h=function(t,e,n){return s.test(e)?t:"<".concat(e).concat(n.replace(v,""),"></").concat(e,">")},y=function(t,e,n){for(var r=[],o=t.length,a=function(n){var o=t[n-1];r.push(l.test(o)&&function t(e,n){return 0<n--&&(f.test(e[n])||!p.test(e[n])&&t(e,n))}(t,n)?o.replace(l,(function(t,r,o){return"".concat(e).concat(n-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(e).concat(n-1,"--\x3e"))},c=1;c<o;c++)a(c);r.push(t[o-1]);var i=r.join("").trim();return n?i:i.replace(d,h)},g=Array.isArray,b=[],m=b.indexOf,w=b.slice,k=function(t,e){return 111===t.nodeType?1/e<0?e?function(t){var e=t.firstChild,n=t.lastChild,r=document.createRange();return r.setStartAfter(e),r.setEndAfter(n),r.deleteContents(),e}(t):t.lastChild:e?t.valueOf():t.firstChild:t},C=function(t){var e="fragment",n="template",r="content"in a(n)?function(t){var e=a(n);return e.innerHTML=t,e.content}:function(t){var r=a(e),c=a(n),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var u=RegExp.$1;c.innerHTML="<table>"+t+"</table>",i=c.querySelectorAll(u)}else c.innerHTML=t,i=c.childNodes;return o(r,i),r};return function(t,e){return("svg"===e?c:r)(t)};function o(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function a(n){return n===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}function c(t){var n=a(e),r=a("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",o(n,r.firstChild.childNodes),n}}(document),O=function(t,e){return t.childNodes[e]},x=function(t){for(var e=[],n=t.parentNode;n;)e.push(m.call(n.childNodes,t)),n=(t=n).parentNode;return e},E=document,N=E.createTreeWalker,A=E.importNode,M=1!=A.length,j=M?function(t,e){return A.call(document,C(t,e),!0)}:C,S=M?function(t){return N.call(document,t,129,null,!1)}:function(t){return N.call(document,t,129)},T=function(t,e,n){return function(t,e,n,r,o){for(var a=n.length,c=e.length,i=a,u=0,l=0,s=null;u<c||l<i;)if(c===u)for(var f=i<a?l?r(n[l-1],-0).nextSibling:r(n[i-l],0):o;l<i;)t.insertBefore(r(n[l++],1),f);else if(i===l)for(;u<c;)s&&s.has(e[u])||t.removeChild(r(e[u],-1)),u++;else if(e[u]===n[l])u++,l++;else if(e[c-1]===n[i-1])c--,i--;else if(e[u]===n[i-1]&&n[l]===e[c-1]){var p=r(e[--c],-1).nextSibling;t.insertBefore(r(n[l++],1),r(e[u++],-1).nextSibling),t.insertBefore(r(n[--i],1),p),e[c]=n[i]}else{if(!s){s=new Map;for(var d=l;d<i;)s.set(n[d],d++)}if(s.has(e[u])){var v=s.get(e[u]);if(l<v&&v<i){for(var h=u,y=1;++h<c&&h<i&&s.get(e[h])===v+y;)y++;if(y>v-l)for(var g=r(e[u],0);l<v;)t.insertBefore(r(n[l++],1),g);else t.replaceChild(r(n[l++],1),r(e[u++],-1))}else u++}else t.removeChild(r(e[u++],-1))}return n}(t.parentNode,e,n,k,t)},L=function(t,e){return"ref"===e?function(t){return function(e){"function"==typeof e?e(t):e.current=t}}(t):"aria"===e?function(t){return function(e){for(var n in e){var r="role"===n?n:"aria-".concat(n),o=e[n];null==o?t.removeAttribute(r):t.setAttribute(r,o)}}}(t):".dataset"===e?function(t){var e=t.dataset;return function(t){for(var n in t){var r=t[n];null==r?delete e[n]:e[n]=r}}}(t):"."===e.slice(0,1)?function(t,e){return function(n){t[e]=n}}(t,e.slice(1)):"on"===e.slice(0,2)?function(t,e){var n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),function(e){var o=g(e)?e:[e,!1];n!==o[0]&&(n&&t.removeEventListener(r,n,o[1]),(n=o[0])&&t.addEventListener(r,n,o[1]))}}(t,e):function(t,e){var n,r=!0,o=document.createAttributeNS(null,e);return function(e){n!==e&&(null==(n=e)?r||(t.removeAttributeNode(o),r=!0):(o.value=e,r&&(t.setAttributeNodeNS(o),r=!1)))}}(t,e)};function _(t){var e=t.type,n=t.path.reduceRight(O,this);return"node"===e?function(t){var e,n,r=[];return function o(a){switch(typeof a){case"string":case"number":case"boolean":e!==a&&(e=a,n?n.textContent=a:n=document.createTextNode(a),r=T(t,r,[n]));break;case"object":case"undefined":if(null==a){e!=a&&(e=a,r=T(t,r,[]));break}if(g(a)){e=a,0===a.length?r=T(t,r,[]):"object"==typeof a[0]?r=T(t,r,a):o(String(a));break}"ELEMENT_NODE"in a&&e!==a&&(e=a,r=T(t,r,11===a.nodeType?w.call(a.childNodes):[a]))}}}(n):"attr"===e?L(n,t.name):function(t){var e;return function(n){e!=n&&(e=n,t.textContent=null==n?"":n)}}(n)}var P="isµ",R=u(new WeakMap),$=function(t,e){var n=R.get(e)||R.set(e,function(t,e){for(var n=y(e,P,"svg"===t),r=j(n,t),o=S(r),a=[],c=e.length-1,i=0,u="".concat(P).concat(i);i<c;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===u&&(a.push({type:"node",path:x(l)}),u="".concat(P).concat(++i));else{for(;l.hasAttribute(u);)a.push({type:"attr",path:x(l),name:l.getAttribute(u)}),l.removeAttribute(u),u="".concat(P).concat(++i);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(u,"--\x3e")&&(a.push({type:"text",path:x(l)}),u="".concat(P).concat(++i))}}return{content:r,nodes:a}}(t,e)),r=n.content,o=n.nodes,a=A.call(document,r,!0);return{content:a,updates:o.map(_,a)}},W=function(t,e){var n=e.type,r=e.template,o=e.values,a=o.length;D(t,o,a);var c=t.entry;c&&c.template===r&&c.type===n||(t.entry=c=function(t,e){var n=$(t,e);return{type:t,template:e,content:n.content,updates:n.updates,wire:null}}(n,r));for(var i=c,u=i.content,l=i.updates,s=i.wire,f=0;f<a;f++)l[f](o[f]);return s||(c.wire=function(t){var e=t.childNodes,n=e.length;if(n<2)return n?e[0]:t;var r=w.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(e.length!==n)for(var o=0;o<n;)t.appendChild(r[o++]);return t}}}(u))},D=function t(e,n,r){for(var o=e.stack,a=0;a<r;a++){var c=n[a];c instanceof H?n[a]=W(o[a]||(o[a]={stack:[],entry:null,wire:null}),c):g(c)?t(o[a]||(o[a]={stack:[],entry:null,wire:null}),c,c.length):o[a]=null}r<o.length&&o.splice(r)};function H(t,e,n){this.type=t,this.template=e,this.values=n}var B=Object.create,z=Object.defineProperties,q=function(t){var e=u(new WeakMap);return z((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new H(t,e,r)}),{for:{value:function(n,r){var o=e.get(n)||e.set(n,B(null));return o[r]||(o[r]=function(e){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return W(e,{type:t,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return W({stack:[],entry:null,wire:null},{type:t,template:e,values:r}).valueOf()}}})},F=u(new WeakMap),G=function(t,e){var n="function"==typeof e?e():e,r=F.get(t)||F.set(t,{stack:[],entry:null,wire:null}),o=n instanceof H?W(r,n):n;return o!==r.wire&&(r.wire=o,t.textContent="",t.appendChild(o.valueOf())),t},I=q("html"),J=q("svg");function K(t){for(var e=t[0],n=1,r=arguments.length;n<r;n++)e+=arguments[n]+t[n];return e}var Q=new WeakMap,U=function(t,e){var n="function"==typeof e?e:t[e],r=Q.get(t)||function(t,e){return Q.set(t,e),e}(t,new Map);return r.get(n)||function(t,e,n){return t.set(e,n),n}(r,n,n.bind(t))},V=customElements,X=V.define,Y=Object.create,Z=Object.defineProperties,tt=Object.getOwnPropertyDescriptor,et=Object.keys,nt="element",rt=u(new Map([[nt,{c:HTMLElement,e:nt}]])),ot=function(t){return document.createElement(t)},at=function(t){return rt.get(t)||rt.set(t,{c:ot(t).constructor,e:t})},ct=function(){},it=function(t,n){for(var o=n.attachShadow,a=n.attributeChanged,c=n.connected,u=n.disconnected,l=n.handleEvent,s=n.init,f=n.observedAttributes,p=n.props,d=n.style,v=new WeakMap,h=new Map,y={},g={},b=[],m=Y(null),w=function(t){if(!v.has(t)){v.set(t,0),Z(t,{bound:{value:U.bind(null,t)},html:{value:ut.bind(o?t.attachShadow(o):t)}});for(var e=0;e<M;e++){var n=b[e],r=n.type,a=n.options;t.addEventListener(r,t,a)}h.forEach((function(e,n){n.set(t,e)})),s&&s.call(t)}},k=et(n),C=0,O=k.length;C<O;C++){var x=k[C];if(/^on/.test(x)&&!/Options$/.test(x)){var E=n[x+"Options"]||!1,N=x.toLowerCase(),A=N.slice(2);b.push({type:A,options:E}),m[A]=x,N!==x&&(A=N.slice(2,3)+x.slice(3),m[A]=x,b.push({type:A,options:E}))}switch(x){case"attachShadow":case"observedAttributes":case"style":break;default:g[x]=tt(n,x)}}var M=b.length;if(M&&!l&&(g.handleEvent={value:function(t){this[m[t.type]](t)}}),null!==p)if(p)for(var j=function(t,e){var n=new WeakMap,r=t[e];h.set(n,p[r]),g[r]={get:function(){return w(this),n.get(this)},set:function(t){w(this),n.set(this,t),(this.render||ct).call(this)}}},S=et(p),T=0;T<S.length;T++)j(S,T);else g.props={get:function(){for(var t={},e=this.attributes,n=e.length,r=0;r<n;r++){var o=e[r],a=o.name,c=o.value;t[a]=c}return t}};f&&(y.observedAttributes={value:f}),g.attributeChangedCallback={value:function(){w(this),a&&a.apply(this,arguments)}},g.connectedCallback={value:function(){w(this),c&&c.apply(this,arguments)}},u&&(g.disconnectedCallback={value:u});var L=at(n.extends||nt),_=L.c,P=L.e,R=function(t){r(o,t);var n=i(o);function o(){return e(this,o),n.apply(this,arguments)}return o}(_);Z(R,y),Z(R.prototype,g);var $=[t,R];P!==nt&&$.push({extends:P}),X.apply(V,$),rt.set(t,{c:R,e:P}),d&&(document.head.appendChild(ot("style")).textContent=d(P===nt?t:P+'[is="'+t+'"]'))};function ut(){return G(this,I.apply(null,arguments))}return V.get("uce-lib")||V.define("uce-lib",function(t){r(l,t);var o,a,c,u=i(l);function l(){return e(this,l),u.apply(this,arguments)}return o=l,c=[{key:"define",get:function(){return it}},{key:"render",get:function(){return G}},{key:"html",get:function(){return I}},{key:"svg",get:function(){return J}},{key:"css",get:function(){return K}}],(a=null)&&n(o.prototype,a),c&&n(o,c),l}(at(nt).c)),t.css=K,t.define=it,t.html=I,t.render=G,t.svg=J,t}({});
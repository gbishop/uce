var uce=function(e){"use strict";const t=new WeakMap,n=(e,t,n,r,s,o)=>{const c="selectedIndex"in t;let a=c;for(;r<s;){const s=e(n[r],1);if(t.insertBefore(s,o),c&&a&&s.selected){a=!a;const{selectedIndex:e}=t;t.selectedIndex=e<0?r:n.indexOf.call(t.querySelectorAll("option"),s)}r++}},r=(e,t,n,r)=>{for(;n<r;)((s=e(t[n++],-1)).remove||o).call(s);var s},s=(e,t,n)=>{let r=1,s=t;for(;r<s;){const t=(r+s)/2>>>0;n<e[t]?s=t:r=t+1}return r};function o(){const{parentNode:e}=this;e&&e.removeChild(this)}var c=(e,t,o,c,a)=>{const l=t.length;let i=l,u=0,d=o.length,p=0;for(;u<i&&p<d&&t[u]===o[p];)u++,p++;for(;u<i&&p<d&&t[i-1]===o[d-1];)i--,d--;const h=u===i,f=p===d;return h&&f?o:h&&p<d?(n(c,e,o,p,d,((e,t,n,r,s)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:s)(c,t,u,l,a)),o):f&&u<i?(r(c,t,u,i),o):(((e,t,s,o,c,a,l,i,u)=>{const d=[],p=e.length;let h=l,f=0;for(;f<p;)switch(e[f++]){case 0:c++,h++;break;case 1:d.push(o[c]),n(t,s,o,c++,c,h<i?t(a[h],0):u);break;case-1:h++}for(f=0;f<p;)switch(e[f++]){case 0:l++;break;case-1:-1<d.indexOf(a[l])?l++:r(t,a,l++,l)}})(((e,t,n,r,o,c,a,l)=>{let i=0,u=r<l?r:l;const d=Array(u++),p=[];p.push(-1);for(let e=1;e<u;e++)p.push(a);const h=o.slice(c,a);for(let r=t;r<n;r++){const t=h.indexOf(e[r]);if(-1<t){const e=t+c;i=s(p,u,e),-1<i&&(p[i]=e,d[i]={newi:r,oldi:e,prev:d[i-1]})}}for(i=--u,--a;p[i]>a;)--i;u=l+r-i;const f=Array(u);let m=d[i];for(--n;m;){const{newi:e,oldi:t}=m;for(;n>e;)f[--u]=1,--n;for(;a>t;)f[--u]=-1,--a;f[--u]=0,--n,--a,m=m.prev}for(;n>=t;)f[--u]=1,--n;for(;a>=c;)f[--u]=-1,--a;return f})(o,p,d,d-p,t,u,i,i-u),c,e,o,p,t,u,l,a),o)};const{isArray:a}=Array,{indexOf:l,slice:i}=[],u=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),d=(e,t)=>("svg"===t?h:p)(e),p=e=>{const t=u("template");return t.innerHTML=e,t.content},h=e=>{const{content:t}=u("template"),n=u("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},f=(e,t)=>e.childNodes[t],m=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(l.call(n.childNodes,e)),n=(e=n).parentNode;return t},{defineProperties:g}=Object,b=e=>{const{childNodes:t}=e,{length:n}=t;if(1===n)return t[0];const r=i.call(t,0);return g(e,{remove:{value(){const e=document.createRange();return e.setStartBefore(r[1]),e.setEndAfter(r[n-1]),e.deleteContents(),r[0]}},valueOf:{value(){if(t.length!==n){const t=document.createRange();t.setStartBefore(r[0]),t.setEndAfter(r[n-1]),e.appendChild(t.extractContents())}return e}}})},{createTreeWalker:v,importNode:w}=document,y=1!=w.length,x=y?(e,t)=>w.call(document,d(e,t),!0):d,k=y?e=>v.call(document,e,129,null,!1):e=>v.call(document,e,129),C=(e,t)=>11===e.nodeType?1/t<0?t?e.remove():e.lastChild:t?e.valueOf():e.firstChild:e;function N(e){const{type:t,path:n}=e,r=n.reduce(f,this);return"node"===t?((e,t)=>{let n;const r=document.createTextNode(""),s=o=>{switch(typeof o){case"string":case"number":case"boolean":n!==o&&(n=o,r.textContent=o,t=c(e.parentNode,t,[r],C,e));break;case"object":case"undefined":if(null==o){t=c(e.parentNode,t,[],C,e);break}default:if(n=o,a(o))if(0===o.length)t=c(e.parentNode,t,[],C,e);else switch(typeof o[0]){case"string":case"number":case"boolean":s(String(o));break;default:t=c(e.parentNode,t,o,C,e)}else"ELEMENT_NODE"in o&&(t=c(e.parentNode,t,11===o.nodeType?i.call(o.childNodes):[o],C,e))}};return s})(r,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}let r=!0;const s=e.ownerDocument.createAttribute(t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNode(s),r=!1)))}})(r,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(r)}const $="".trimStart||function(){return this.replace(/^[ \f\n\r\t]+/,"")},A="".trimEnd||function(){return this.replace(/[ \f\n\r\t]+$/,"")},L=/([^ \f\n\r\t\\>"'=]+)\s*=\s*(['"]?)$/,E=new WeakMap,O=(e,t)=>{const{wire:n,updates:r}=M(e,t);return{type:e,template:t,wire:n,updates:r}},S=(e,t)=>{for(;t--;){const n=e[t];if(/<[A-Za-z][^>]+$/.test(n))return!0;if(/>[^<>]*$/.test(n))return!1}return!1},T=(e,t)=>{const n=(e=>{const t=[];for(let n=0,{length:r}=e;n<r;n++){const s=n<1?$.call(e[n]):e[n];L.test(s)&&S(e,n+1)?t.push(s.replace(L,(e,t,r)=>`isµ${n}=${r||'"'}${t}${r?"":'"'}`)):n+1<r?t.push(s,`\x3c!--isµ${n}--\x3e`):t.push(A.call(s))}return t.join("").replace(/<([A-Za-z]+[A-Za-z0-9:._-]*)([^>]*?)(\/>)/g,B)})(t),r=x(n,e),s=k(r),o=[],c=t.length-1;let a=0,l=`isµ${a}`;for(;a<c;){const e=s.nextNode();if(!e)throw`bad template: ${n}`;if(8===e.nodeType)e.textContent===l&&(o.push({type:"node",path:m(e)}),l=`isµ${++a}`);else{for(;e.hasAttribute(l);)o.push({type:"attr",path:m(e),name:e.getAttribute(l)}),e.removeAttribute(l),l=`isµ${++a}`;/^(?:style|textarea)$/i.test(e.tagName)&&$.call(A.call(e.textContent))===`\x3c!--${l}--\x3e`&&(o.push({type:"text",path:m(e)}),l=`isµ${++a}`)}}return{content:r,nodes:o}},M=(e,t)=>{const{content:n,nodes:r}=E.get(t)||W(e,t),s=w.call(document,n,!0),o=r.map(N,s);return{wire:b(s),updates:o}},j=(e,t)=>{const{sub:n,stack:r}=e,s={a:0,aLength:n.length,i:0,iLength:r.length},o=P(e,t,s),{a:c,i:a,aLength:l,iLength:i}=s;return c<l&&n.splice(c),a<i&&r.splice(a),o},W=(e,t)=>{const n=T(e,t);return E.set(t,n),n},P=(e,t,n)=>{const{stack:r}=e,{i:s,iLength:o}=n,{type:c,template:a,values:l}=t,i=s===o;i&&(n.iLength=r.push(O(c,a))),n.i++,z(e,l,n);let u=r[s];i||u.template===a&&u.type===c||(r[s]=u=O(c,a));const{wire:d,updates:p}=u;for(let e=0,{length:t}=p;e<t;e++)p[e](l[e]);return d},z=(e,t,n)=>{for(let r=0,{length:s}=t;r<s;r++){const s=t[r];if("object"==typeof s&&s)if(s instanceof D)t[r]=P(e,s,n);else if(a(s))for(let t=0,{length:r}=s;t<r;t++){const r=s[t];if("object"==typeof r&&r&&r instanceof D){const{sub:o}=e,{a:c,aLength:a}=n;c===a&&(n.aLength=o.push({sub:[],stack:[],wire:null})),n.a++,s[t]=j(o[c],r)}}}},B=(e,t,n)=>/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i.test(t)?e:`<${t}${n}></${t}>`;function D(e,t,n){this.type=e,this.template=t,this.values=n}const{create:H,defineProperties:I}=Object,Z=e=>{const t=new WeakMap;return I((t,...n)=>new D(e,t,n),{for:{value(n,r){const s=t.get(n)||t.set(n,H(null)).get(n);return s[r]||(s[r]=(o={sub:[],stack:[],wire:null},(t,...n)=>j(o,new D(e,t,n))));var o}},node:{value:(t,...n)=>j({sub:[],stack:[],wire:null},new D(e,t,n))}})},R=Z("html"),_=(Z("svg"),(e,n)=>{const r="function"==typeof n?n():n,s=t.get(e)||(e=>{const n={sub:[],stack:[],wire:null};return t.set(e,n),n})(e),o=r instanceof D?j(s,r):r;return o!==s.wire&&(s.wire=o,e.textContent="",e.appendChild(o.valueOf())),e}),{define:q}=customElements,{create:F,defineProperties:G,getOwnPropertyDescriptor:J,keys:K}=Object,Q=new WeakMap;function U(){return _(this,R.apply(null,arguments))}return e.define=(e,t)=>{const{attachShadow:n,attributeChanged:r,connected:s,disconnected:o,handleEvent:c,init:a,observedAttributes:l}=t,i={},u={},d=[],p=F(null);for(let e=K(t),n=0,{length:r}=e;n<r;n++){const r=e[n];if(/^on/.test(r)&&!/Options$/.test(r)){const e=t[r+"Options"]||!1,n=r.toLowerCase();let s=n.slice(2);d.push({type:s,options:e}),p[s]=r,n!==r&&(s=r.slice(2,3).toLowerCase()+r.slice(3),p[s]=r,d.push({type:s,options:e}))}switch(r){case"attachShadow":case"observedAttributes":break;default:u[r]=J(t,r)}}const{length:h}=d;h&&!c&&(u.handleEvent={value(e){this[p[e.type]](e)}}),l&&(i.observedAttributes={value:l}),u.attributeChangedCallback={value(){b(this),r&&r.apply(this,arguments)}},u.connectedCallback={value(){b(this),s&&s.apply(this,arguments)}},o&&(u.disconnectedCallback={value:o});const f=t.extends||"element";class m extends((e=>"element"===e?HTMLElement:document.createElement(e).constructor)(f)){}G(m,i),G(m.prototype,u);const g=[e,m];function b(e){if(!Q.has(e)){if(Q.set(e,!0),h)for(let t=0;t<h;t++){const{type:n,options:r}=d[t];e.addEventListener(n,e,r)}G(e,{html:{value:U.bind(n?e.attachShadow(n):e)}}),a&&a.call(e)}}"element"!==f&&g.push({extends:f}),q.apply(customElements,g)},e}({});

var uce=function(e){"use strict";var t=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const n=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<[a-z][^>]+$/i,l=/>[^<>]*$/,o=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,a=/\s+$/,i=(e,t)=>0<t--&&(r.test(e[t])||!l.test(e[t])&&i(e,t)),c=(e,t,n)=>s.test(t)?e:`<${t}${n.replace(a,"")}></${t}>`;const{isArray:u}=Array,{indexOf:d,slice:p}=[],h=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;const f=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),g=(e,t)=>("svg"===t?v:m)(e),m=e=>{const t=f("template");return t.innerHTML=e,t.content},v=e=>{const{content:t}=f("template"),n=f("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:s}=n.firstChild;let{length:r}=s;for(;r--;)t.appendChild(s[0]);return t},b=({childNodes:e},t)=>e[t],y=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(d.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:w,importNode:C}=document,x=1!=C.length,k=x?(e,t)=>C.call(document,g(e,t),!0):g,N=x?e=>w.call(document,e,129,null,!1):e=>w.call(document,e,129),$=(e,t,n)=>((e,t,n,s,r)=>{const l=n.length;let o=t.length,a=l,i=0,c=0,u=null;for(;i<o||c<a;)if(o===i){const t=a<l?c?s(n[c-1],-0).nextSibling:s(n[a-c],0):r;for(;c<a;)e.insertBefore(s(n[c++],1),t)}else if(a===c)for(;i<o;)u&&u.has(t[i])||e.removeChild(s(t[i],-1)),i++;else if(t[i]===n[c])i++,c++;else if(t[o-1]===n[a-1])o--,a--;else if(t[i]===n[a-1]&&n[c]===t[o-1]){const r=s(t[--o],-1).nextSibling;e.insertBefore(s(n[c++],1),s(t[i++],-1).nextSibling),e.insertBefore(s(n[--a],1),r),t[o]=n[a]}else{if(!u){u=new Map;let e=c;for(;e<a;)u.set(n[e],e++)}if(u.has(t[i])){const r=u.get(t[i]);if(c<r&&r<a){let l=i,d=1;for(;++l<o&&l<a&&u.get(t[l])===r+d;)d++;if(d>r-c){const l=s(t[i],0);for(;c<r;)e.insertBefore(s(n[c++],1),l)}else e.replaceChild(s(n[c++],1),s(t[i++],-1))}else i++}else e.removeChild(s(t[i++],-1))}return n})(e.parentNode,t,n,h,e),E=(e,t)=>"ref"===t?(e=>t=>{"function"==typeof t?t(e):t.current=e})(e):"aria"===t?(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e):"data"===t?(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e):"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,s=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(s=s.toLowerCase()),t=>{const r=u(t)?t:[t,!1];n!==r[0]&&(n&&e.removeEventListener(s,n,r[1]),(n=r[0])&&e.addEventListener(s,n,r[1]))}})(e,t):((e,t)=>{let n,s=!0;const r=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?s||(e.removeAttributeNode(r),s=!0):(r.value=t,s&&(e.setAttributeNodeNS(r),s=!1)))}})(e,t);function A(e){const{type:t,path:n}=e,s=n.reduceRight(b,this);return"node"===t?(e=>{let t,n,s=[];const r=l=>{switch(typeof l){case"string":case"number":case"boolean":t!==l&&(t=l,n?n.textContent=l:n=document.createTextNode(l),s=$(e,s,[n]));break;case"object":case"undefined":if(null==l){t!=l&&(t=l,s=$(e,s,[]));break}if(u(l)){t=l,0===l.length?s=$(e,s,[]):"object"==typeof l[0]?s=$(e,s,l):r(String(l));break}"ELEMENT_NODE"in l&&t!==l&&(t=l,s=$(e,s,11===l.nodeType?p.call(l.childNodes):[l]))}};return r})(s):"attr"===t?E(s,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(s)}const O=t(new WeakMap),L=(e,t)=>{const s=((e,t,s)=>{const r=[],{length:l}=e;for(let s=1;s<l;s++){const l=e[s-1];r.push(n.test(l)&&i(e,s)?l.replace(n,(e,n,r)=>`${t}${s-1}=${r||'"'}${n}${r?"":'"'}`):`${l}\x3c!--${t}${s-1}--\x3e`)}r.push(e[l-1]);const a=r.join("").trim();return s?a:a.replace(o,c)})(t,"isµ","svg"===e),r=k(s,e),l=N(r),a=[],u=t.length-1;let d=0,p="isµ"+d;for(;d<u;){const e=l.nextNode();if(!e)throw"bad template: "+s;if(8===e.nodeType)e.textContent===p&&(a.push({type:"node",path:y(e)}),p="isµ"+ ++d);else{for(;e.hasAttribute(p);)a.push({type:"attr",path:y(e),name:e.getAttribute(p)}),e.removeAttribute(p),p="isµ"+ ++d;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${p}--\x3e`&&(a.push({type:"text",path:y(e)}),p="isµ"+ ++d)}}return{content:r,nodes:a}},M=(e,t)=>{const{content:n,nodes:s}=O.get(t)||O.set(t,L(e,t)),r=C.call(document,n,!0);return{content:r,updates:s.map(A,r)}},S=(e,{type:t,template:n,values:s})=>{const{length:r}=s;T(e,s,r);let{entry:l}=e;l&&l.template===n&&l.type===t||(e.entry=l=((e,t)=>{const{content:n,updates:s}=M(e,t);return{type:e,template:t,content:n,updates:s,wire:null}})(t,n));const{content:o,updates:a,wire:i}=l;for(let e=0;e<r;e++)a[e](s[e]);return i||(l.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const s=p.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:s[0],lastChild:s[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(s[t++])}return e}}})(o))},T=({stack:e},t,n)=>{for(let s=0;s<n;s++){const n=t[s];n instanceof j?t[s]=S(e[s]||(e[s]={stack:[],entry:null,wire:null}),n):u(n)?T(e[s]||(e[s]={stack:[],entry:null,wire:null}),n,n.length):e[s]=null}n<e.length&&e.splice(n)};function j(e,t,n){this.type=e,this.template=t,this.values=n}const{create:W,defineProperties:B}=Object,z=t(new WeakMap),D=e=>{const n=t(new WeakMap);return B((t,...n)=>new j(e,t,n),{for:{value(t,s){const r=n.get(t)||n.set(t,W(null));return r[s]||(r[s]=(t=>(n,...s)=>S(t,{type:e,template:n,values:s}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>S({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},H=D("html"),P=D("svg"),_=(e,t)=>{const n="function"==typeof t?t():t,s=z.get(e)||z.set(e,{stack:[],entry:null,wire:null}),r=n instanceof j?S(s,n):n;return r!==s.wire&&(s.wire=r,e.textContent="",e.appendChild(r.valueOf())),e},R=customElements,{define:q}=R,{create:F,defineProperties:G,getOwnPropertyDescriptor:I,keys:J}=Object,K=new WeakMap,Q=t(new Map),U=e=>"element"===e?HTMLElement:Q.get(e)||Q.set(e,document.createElement(e).constructor),V=(e,t)=>{const{attachShadow:n,attributeChanged:s,connected:r,disconnected:l,handleEvent:o,init:a,observedAttributes:i,props:c}=t,u={},d={},p=[],h=F(null);for(let e=J(t),n=0,{length:s}=e;n<s;n++){const s=e[n];if(/^on/.test(s)&&!/Options$/.test(s)){const e=t[s+"Options"]||!1,n=s.toLowerCase();let r=n.slice(2);p.push({type:r,options:e}),h[r]=s,n!==s&&(r=n.slice(2,3)+s.slice(3),h[r]=s,p.push({type:r,options:e}))}switch(s){case"attachShadow":case"observedAttributes":break;default:d[s]=I(t,s)}}const{length:f}=p;f&&!o&&(d.handleEvent={value(e){this[h[e.type]](e)}}),c||(d.props={get(){const e={};for(let{attributes:t}=this,{length:n}=t,s=0;s<n;s++){const{name:n,value:r}=t[s];e[n]=r}return e}}),i&&(u.observedAttributes={value:i}),d.attributeChangedCallback={value(){b(this),s&&s.apply(this,arguments)}},d.connectedCallback={value(){b(this),r&&r.apply(this,arguments)}},l&&(d.disconnectedCallback={value:l});const g=t.extends||"element";class m extends(U(g)){}G(m,u),G(m.prototype,d);const v=[e,m];function b(e){if(!K.has(e)){K.set(e,0),G(e,{html:{value:X.bind(n?e.attachShadow(n):e)}});for(let t=0;t<f;t++){const{type:n,options:s}=p[t];e.addEventListener(n,e,s)}a&&a.call(e)}}"element"!==g&&v.push({extends:g}),q.apply(R,v)};function X(){return _(this,H.apply(null,arguments))}return R.get("uce-lib")||R.define("uce-lib",class extends(U("element")){static get define(){return V}static get render(){return _}static get html(){return H}static get svg(){return P}}),e.define=V,e.html=H,e.render=_,e.svg=P,e}({});

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ra=!1;var ao=Array.isArray,_d=Array.prototype.indexOf,lo=Array.from,pd=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,hc=Object.getOwnPropertyDescriptors,gd=Object.prototype,md=Array.prototype,co=Object.getPrototypeOf;function vd(n){return n()}function Aa(n){for(var e=0;e<n.length;e++)n[e]()}const Ue=2,dc=4,uo=8,ho=16,Et=32,yi=64,er=128,Fe=256,tr=512,Ne=1024,wt=2048,Dn=4096,ht=8192,Or=16384,yd=32768,fo=65536,bd=1<<17,Ed=1<<19,fc=1<<20,Zt=Symbol("$state");function _c(n){return n===this.v}function wd(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function pc(n){return!wd(n,this.v)}function Id(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Cd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Td(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function kd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Nd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rd(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ad(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Dr=!1,Pd=!1;function Od(){Dr=!0}const Dd=1,Md=2,Ld=16,xd=1,Fd=2,we=Symbol();let ne=null;function Pa(n){ne=n}function ce(n,e=!1,t){ne={p:ne,c:null,e:null,m:!1,s:n,x:null,l:null},Dr&&!e&&(ne.l={s:null,u:null,r1:[],r2:Ie(!1)})}function ue(n){const e=ne;if(e!==null){const o=e.e;if(o!==null){var t=G,i=z;e.e=null;try{for(var r=0;r<o.length;r++){var s=o[r];Bt(s.effect),Ut(s.reaction),xr(s.fn)}}finally{Bt(t),Ut(i)}}ne=e.p,e.m=!0}return{}}function bi(){return!Dr||ne!==null&&ne.l===null}function Ie(n,e){var t={f:0,v:n,reactions:null,equals:_c,rv:0,wv:0};return t}function Mi(n){return Bd(Ie(n))}function Ud(n,e=!1){var i;const t=Ie(n);return e||(t.equals=pc),Dr&&ne!==null&&ne.l!==null&&((i=ne.l).s??(i.s=[])).push(t),t}function Bd(n){return z!==null&&!We&&(z.f&Ue)!==0&&(Je===null?Qd([n]):Je.push(n)),n}function _e(n,e){return z!==null&&!We&&bi()&&(z.f&(Ue|ho))!==0&&(Je===null||!Je.includes(n))&&Ad(),nr(n,e)}function nr(n,e){return n.equals(e)||(n.v,n.v=e,n.wv=Ac(),gc(n,wt),bi()&&G!==null&&(G.f&Ne)!==0&&(G.f&(Et|yi))===0&&(ot===null?Jd([n]):ot.push(n))),e}function gc(n,e){var t=n.reactions;if(t!==null)for(var i=bi(),r=t.length,s=0;s<r;s++){var o=t[s],a=o.f;(a&wt)===0&&(!i&&o===G||(_t(o,e),(a&(Ne|Fe))!==0&&((a&Ue)!==0?gc(o,Dn):Br(o))))}}let Wd=!1;function Ce(n,e=null,t){if(typeof n!="object"||n===null||Zt in n)return n;const i=co(n);if(i!==gd&&i!==md)return n;var r=new Map,s=ao(n),o=Ie(0);s&&r.set("length",Ie(n.length));var a;return new Proxy(n,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&kd();var h=r.get(c);return h===void 0?(h=Ie(u.value),r.set(c,h)):_e(h,Ce(u.value,a)),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0)c in l&&r.set(c,Ie(we));else{if(s&&typeof c=="string"){var h=r.get("length"),d=Number(c);Number.isInteger(d)&&d<h.v&&_e(h,d)}_e(u,we),Oa(o)}return!0},get(l,c,u){var _;if(c===Zt)return n;var h=r.get(c),d=c in l;if(h===void 0&&(!d||(_=Jn(l,c))!=null&&_.writable)&&(h=Ie(Ce(d?l[c]:we,a)),r.set(c,h)),h!==void 0){var f=q(h);return f===we?void 0:f}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var h=r.get(c);h&&(u.value=q(h))}else if(u===void 0){var d=r.get(c),f=d==null?void 0:d.v;if(d!==void 0&&f!==we)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(l,c){var f;if(c===Zt)return!0;var u=r.get(c),h=u!==void 0&&u.v!==we||Reflect.has(l,c);if(u!==void 0||G!==null&&(!h||(f=Jn(l,c))!=null&&f.writable)){u===void 0&&(u=Ie(h?Ce(l[c],a):we),r.set(c,u));var d=q(u);if(d===we)return!1}return h},set(l,c,u,h){var T;var d=r.get(c),f=c in l;if(s&&c==="length")for(var _=u;_<d.v;_+=1){var g=r.get(_+"");g!==void 0?_e(g,we):_ in l&&(g=Ie(we),r.set(_+"",g))}d===void 0?(!f||(T=Jn(l,c))!=null&&T.writable)&&(d=Ie(void 0),_e(d,Ce(u,a)),r.set(c,d)):(f=d.v!==we,_e(d,Ce(u,a)));var y=Reflect.getOwnPropertyDescriptor(l,c);if(y!=null&&y.set&&y.set.call(h,u),!f){if(s&&typeof c=="string"){var b=r.get("length"),E=Number(c);Number.isInteger(E)&&E>=b.v&&_e(b,E+1)}Oa(o)}return!0},ownKeys(l){q(o);var c=Reflect.ownKeys(l).filter(d=>{var f=r.get(d);return f===void 0||f.v!==we});for(var[u,h]of r)h.v!==we&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Nd()}})}function Oa(n,e=1){_e(n,n.v+e)}function Da(n){return n!==null&&typeof n=="object"&&Zt in n?n[Zt]:n}function Vd(n,e){return Object.is(Da(n),Da(e))}var Ma,mc,vc,yc;function Hd(){if(Ma===void 0){Ma=window,mc=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype;vc=Jn(e,"firstChild").get,yc=Jn(e,"nextSibling").get,n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function bc(n=""){return document.createTextNode(n)}function ai(n){return vc.call(n)}function Mr(n){return yc.call(n)}function m(n,e){return ai(n)}function M(n,e){{var t=ai(n);return t instanceof Comment&&t.data===""?Mr(t):t}}function p(n,e=1,t=!1){let i=n;for(;e--;)i=Mr(i);return i}function $d(n){n.textContent=""}function _o(n){var e=Ue|wt,t=z!==null&&(z.f&Ue)!==0?z:null;return G===null||t!==null&&(t.f&Fe)!==0?e|=Fe:G.f|=fc,{ctx:ne,deps:null,effects:null,equals:_c,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??G}}function Lr(n){const e=_o(n);return e.equals=pc,e}function Ec(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)ft(e[t])}}function jd(n){for(var e=n.parent;e!==null;){if((e.f&Ue)===0)return e;e=e.parent}return null}function qd(n){var e,t=G;Bt(jd(n));try{Ec(n),e=Oc(n)}finally{Bt(t)}return e}function wc(n){var e=qd(n),t=(Ot||(n.f&Fe)!==0)&&n.deps!==null?Dn:Ne;_t(n,t),n.equals(e)||(n.v=e,n.wv=Ac())}function Ic(n){G===null&&z===null&&Sd(),z!==null&&(z.f&Fe)!==0&&G===null&&Cd(),mo&&Id()}function zd(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ei(n,e,t,i=!0){var r=(n&yi)!==0,s=G,o={ctx:ne,deps:null,nodes_start:null,nodes_end:null,f:n|wt,first:null,fn:e,last:null,next:null,parent:r?null:s,prev:null,teardown:null,transitions:null,wv:0};if(t)try{vo(o),o.f|=yd}catch(c){throw ft(o),c}else e!==null&&Br(o);var a=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(fc|er))===0;if(!a&&!r&&i&&(s!==null&&zd(o,s),z!==null&&(z.f&Ue)!==0)){var l=z;(l.effects??(l.effects=[])).push(o)}return o}function Ds(n){Ic();var e=G!==null&&(G.f&Et)!==0&&ne!==null&&!ne.m;if(e){var t=ne;(t.e??(t.e=[])).push({fn:n,effect:G,reaction:z})}else{var i=xr(n);return i}}function Gd(n){return Ic(),po(n)}function Kd(n){const e=Ei(yi,n,!0);return(t={})=>new Promise(i=>{t.outro?ir(e,()=>{ft(e),i(void 0)}):(ft(e),i(void 0))})}function xr(n){return Ei(dc,n,!1)}function po(n){return Ei(uo,n,!0)}function ge(n,e=[],t=_o){const i=e.map(t);return Fr(()=>n(...i.map(q)))}function Fr(n,e=0){return Ei(uo|ho|e,n,!0)}function Cn(n,e=!0){return Ei(uo|Et,n,!0,e)}function Cc(n){var e=n.teardown;if(e!==null){const t=mo,i=z;La(!0),Ut(null);try{e.call(null)}finally{La(t),Ut(i)}}}function Sc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;ft(t,e),t=i}}function Yd(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Et)===0&&ft(e),e=t}}function ft(n,e=!0){var t=!1;if((e||(n.f&Ed)!==0)&&n.nodes_start!==null){for(var i=n.nodes_start,r=n.nodes_end;i!==null;){var s=i===r?null:Mr(i);i.remove(),i=s}t=!0}Sc(n,e&&!t),ar(n,0),_t(n,Or);var o=n.transitions;if(o!==null)for(const l of o)l.stop();Cc(n);var a=n.parent;a!==null&&a.first!==null&&Tc(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Tc(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function ir(n,e){var t=[];go(n,t,!0),kc(t,()=>{ft(n),e&&e()})}function kc(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function go(n,e,t){if((n.f&ht)===0){if(n.f^=ht,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var i=n.first;i!==null;){var r=i.next,s=(i.f&fo)!==0||(i.f&Et)!==0;go(i,e,s?t:!1),i=r}}}function rr(n){Nc(n,!0)}function Nc(n,e){if((n.f&ht)!==0){n.f^=ht,(n.f&Ne)===0&&(n.f^=Ne),wi(n)&&(_t(n,wt),Br(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&fo)!==0||(t.f&Et)!==0;Nc(t,r?e:!1),t=i}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let zi=!1,Ms=!1,sr=null,Gi=!1,mo=!1;function La(n){mo=n}let Ki=[];let z=null,We=!1;function Ut(n){z=n}let G=null;function Bt(n){G=n}let Je=null;function Qd(n){Je=n}let ye=null,Pe=0,ot=null;function Jd(n){ot=n}let Rc=1,or=0,Ot=!1,Kt=null;function Ac(){return++Rc}function wi(n){var h;var e=n.f;if((e&wt)!==0)return!0;if((e&Dn)!==0){var t=n.deps,i=(e&Fe)!==0;if(t!==null){var r,s,o=(e&tr)!==0,a=i&&G!==null&&!Ot,l=t.length;if(o||a){var c=n,u=c.parent;for(r=0;r<l;r++)s=t[r],(o||!((h=s==null?void 0:s.reactions)!=null&&h.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);o&&(c.f^=tr),a&&u!==null&&(u.f&Fe)===0&&(c.f^=Fe)}for(r=0;r<l;r++)if(s=t[r],wi(s)&&wc(s),s.wv>n.wv)return!0}(!i||G!==null&&!Ot)&&_t(n,Ne)}return!1}function Xd(n,e){for(var t=e;t!==null;){if((t.f&er)!==0)try{t.fn(n);return}catch{t.f^=er}t=t.parent}throw zi=!1,n}function Zd(n){return(n.f&Or)===0&&(n.parent===null||(n.parent.f&er)===0)}function Ur(n,e,t,i){if(zi){if(t===null&&(zi=!1),Zd(e))throw n;return}t!==null&&(zi=!0);{Xd(n,e);return}}function Pc(n,e,t=!0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];(s.f&Ue)!==0?Pc(s,e,!1):e===s&&(t?_t(s,wt):(s.f&Ne)!==0&&_t(s,Dn),Br(s))}}function Oc(n){var f;var e=ye,t=Pe,i=ot,r=z,s=Ot,o=Je,a=ne,l=We,c=n.f;ye=null,Pe=0,ot=null,Ot=(c&Fe)!==0&&(We||!Gi||z===null),z=(c&(Et|yi))===0?n:null,Je=null,Pa(n.ctx),We=!1,or++;try{var u=(0,n.fn)(),h=n.deps;if(ye!==null){var d;if(ar(n,Pe),h!==null&&Pe>0)for(h.length=Pe+ye.length,d=0;d<ye.length;d++)h[Pe+d]=ye[d];else n.deps=h=ye;if(!Ot)for(d=Pe;d<h.length;d++)((f=h[d]).reactions??(f.reactions=[])).push(n)}else h!==null&&Pe<h.length&&(ar(n,Pe),h.length=Pe);if(bi()&&ot!==null&&!We&&h!==null&&(n.f&(Ue|Dn|wt))===0)for(d=0;d<ot.length;d++)Pc(ot[d],n);return r!==null&&or++,u}finally{ye=e,Pe=t,ot=i,z=r,Ot=s,Je=o,Pa(a),We=l}}function ef(n,e){let t=e.reactions;if(t!==null){var i=_d.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&Ue)!==0&&(ye===null||!ye.includes(e))&&(_t(e,Dn),(e.f&(Fe|tr))===0&&(e.f^=tr),Ec(e),ar(e,0))}function ar(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)ef(n,t[i])}function vo(n){var e=n.f;if((e&Or)===0){_t(n,Ne);var t=G,i=ne,r=Gi;G=n,Gi=!0;try{(e&ho)!==0?Yd(n):Sc(n),Cc(n);var s=Oc(n);n.teardown=typeof s=="function"?s:null,n.wv=Rc;var o=n.deps,a;Ra&&Pd&&n.f&wt}catch(l){Ur(l,n,t,i||n.ctx)}finally{Gi=r,G=t}}}function tf(){try{Td()}catch(n){if(sr!==null)Ur(n,sr,null);else throw n}}function nf(){try{for(var n=0;Ki.length>0;){n++>1e3&&tf();var e=Ki,t=e.length;Ki=[];for(var i=0;i<t;i++){var r=e[i];(r.f&Ne)===0&&(r.f^=Ne);var s=sf(r);rf(s)}}}finally{Ms=!1,sr=null}}function rf(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(Or|ht))===0)try{wi(i)&&(vo(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Tc(i):i.fn=null))}catch(r){Ur(r,i,null,i.ctx)}}}function Br(n){Ms||(Ms=!0,queueMicrotask(nf));for(var e=sr=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(yi|Et))!==0){if((t&Ne)===0)return;e.f^=Ne}}Ki.push(e)}function sf(n){var e=[],t=n.first;e:for(;t!==null;){var i=t.f,r=(i&Et)!==0,s=r&&(i&Ne)!==0,o=t.next;if(!s&&(i&ht)===0){if((i&dc)!==0)e.push(t);else if(r)t.f^=Ne;else{var a=z;try{z=t,wi(t)&&vo(t)}catch(u){Ur(u,t,null,t.ctx)}finally{z=a}}var l=t.first;if(l!==null){t=l;continue}}if(o===null){let u=t.parent;for(;u!==null;){if(n===u)break e;var c=u.next;if(c!==null){t=c;continue e}u=u.parent}}t=o}return e}function q(n){var e=n.f,t=(e&Ue)!==0;if(Kt!==null&&Kt.add(n),z!==null&&!We){Je!==null&&Je.includes(n)&&Rd();var i=z.deps;n.rv<or&&(n.rv=or,ye===null&&i!==null&&i[Pe]===n?Pe++:ye===null?ye=[n]:(!Ot||!ye.includes(n))&&ye.push(n))}else if(t&&n.deps===null&&n.effects===null){var r=n,s=r.parent;s!==null&&(s.f&Fe)===0&&(r.f^=Fe)}return t&&(r=n,wi(r)&&wc(r)),n.v}function of(n){var e=Kt;Kt=new Set;var t=Kt,i;try{if(Ii(n),e!==null)for(i of Kt)e.add(i)}finally{Kt=e}return t}function yo(n){var e=of(()=>Ii(n));for(var t of e)if((t.f&bd)!==0)for(const i of t.deps||[])(i.f&Ue)===0&&nr(i,i.v);else nr(t,t.v)}function Ii(n){var e=We;try{return We=!0,n()}finally{We=e}}const af=-7169;function _t(n,e){n.f=n.f&af|e}function lf(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Zt in n)Ls(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Zt in t&&Ls(t)}}}function Ls(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Ls(n[i],e)}catch{}const t=co(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=hc(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const cf=["touchstart","touchmove"];function uf(n){return cf.includes(n)}let xa=!1;function hf(){xa||(xa=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function df(n){var e=z,t=G;Ut(null),Bt(null);try{return n()}finally{Ut(e),Bt(t)}}function bo(n,e,t,i=t){n.addEventListener(e,()=>df(t));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),hf()}const Dc=new Set,xs=new Set;function De(n){for(var e=0;e<n.length;e++)Dc.add(n[e]);for(var t of xs)t(n)}function Li(n){var E;var e=this,t=e.ownerDocument,i=n.type,r=((E=n.composedPath)==null?void 0:E.call(n))||[],s=r[0]||n.target,o=0,a=n.__root;if(a){var l=r.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=r[o]||n.target,s!==e){pd(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=z,h=G;Ut(null),Bt(null);try{for(var d,f=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+i];if(g!==void 0&&(!s.disabled||n.target===s))if(ao(g)){var[y,...b]=g;y.apply(s,[n,...b])}else g.call(s,n)}catch(T){d?f.push(T):d=T}if(n.cancelBubble||_===e||_===null)break;s=_}if(d){for(let T of f)queueMicrotask(()=>{throw T});throw d}}finally{n.__root=e,delete n.currentTarget,Ut(u),Bt(h)}}}function Mc(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function lr(n,e){var t=G;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function N(n,e){var t=(e&xd)!==0,i=(e&Fd)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=Mc(s?n:"<!>"+n),t||(r=ai(r)));var o=i||mc?document.importNode(r,!0):r.cloneNode(!0);if(t){var a=ai(o),l=o.lastChild;lr(a,l)}else lr(o,o);return o}}function Oe(){var n=document.createDocumentFragment(),e=document.createComment(""),t=bc();return n.append(e,t),lr(e,t),n}function I(n,e){n!==null&&n.before(e)}function Yt(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function ff(n,e){return _f(n,e)}const _n=new Map;function _f(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:o=!0}){Hd();var a=new Set,l=h=>{for(var d=0;d<h.length;d++){var f=h[d];if(!a.has(f)){a.add(f);var _=uf(f);e.addEventListener(f,Li,{passive:_});var g=_n.get(f);g===void 0?(document.addEventListener(f,Li,{passive:_}),_n.set(f,1)):_n.set(f,g+1)}}};l(lo(Dc)),xs.add(l);var c=void 0,u=Kd(()=>{var h=t??e.appendChild(bc());return Cn(()=>{if(s){ce({});var d=ne;d.c=s}r&&(i.$$events=r),c=n(h,i)||{},s&&ue()}),()=>{var _;for(var d of a){e.removeEventListener(d,Li);var f=_n.get(d);--f===0?(document.removeEventListener(d,Li),_n.delete(d)):_n.set(d,f)}xs.delete(l),h!==t&&((_=h.parentNode)==null||_.removeChild(h))}});return pf.set(c,u),c}let pf=new WeakMap;function V(n,e,t=!1){var i=n,r=null,s=null,o=we,a=t?fo:0,l=!1;const c=(h,d=!0)=>{l=!0,u(d,h)},u=(h,d)=>{o!==(o=h)&&(o?(r?rr(r):d&&(r=Cn(()=>d(i))),s&&ir(s,()=>{s=null})):(s?rr(s):d&&(s=Cn(()=>d(i))),r&&ir(r,()=>{r=null})))};Fr(()=>{l=!1,e(c),l||u(null,null)},a)}function os(n,e){return e}function gf(n,e,t,i){for(var r=[],s=e.length,o=0;o<s;o++)go(e[o].e,r,!0);var a=s>0&&r.length===0&&t!==null;if(a){var l=t.parentNode;$d(l),l.append(t),i.clear(),kt(n,e[0].prev,e[s-1].next)}kc(r,()=>{for(var c=0;c<s;c++){var u=e[c];a||(i.delete(u.k),kt(n,u.prev,u.next)),ft(u.e,!a)}})}function as(n,e,t,i,r,s=null){var o=n,a={flags:e,items:new Map,first:null},l=null,c=!1,u=Lr(()=>{var h=t();return ao(h)?h:h==null?[]:lo(h)});Fr(()=>{var h=q(u),d=h.length;c&&d===0||(c=d===0,mf(h,a,o,r,e,i,t),s!==null&&(d===0?l?rr(l):l=Cn(()=>s(o)):l!==null&&ir(l,()=>{l=null})),q(u))})}function mf(n,e,t,i,r,s,o){var a=n.length,l=e.items,c=e.first,u=c,h,d=null,f=[],_=[],g,y,b,E;for(E=0;E<a;E+=1){if(g=n[E],y=s(g,E),b=l.get(y),b===void 0){var T=u?u.e.nodes_start:t;d=yf(T,e,d,d===null?e.first:d.next,g,y,E,i,r,o),l.set(y,d),f=[],_=[],u=d.next;continue}if(vf(b,g,E),(b.e.f&ht)!==0&&rr(b.e),b!==u){if(h!==void 0&&h.has(b)){if(f.length<_.length){var O=_[0],C;d=O.prev;var S=f[0],D=f[f.length-1];for(C=0;C<f.length;C+=1)Fa(f[C],O,t);for(C=0;C<_.length;C+=1)h.delete(_[C]);kt(e,S.prev,D.next),kt(e,d,S),kt(e,D,O),u=O,d=D,E-=1,f=[],_=[]}else h.delete(b),Fa(b,u,t),kt(e,b.prev,b.next),kt(e,b,d===null?e.first:d.next),kt(e,d,b),d=b;continue}for(f=[],_=[];u!==null&&u.k!==y;)(u.e.f&ht)===0&&(h??(h=new Set)).add(u),_.push(u),u=u.next;if(u===null)continue;b=u}f.push(b),d=b,u=b.next}if(u!==null||h!==void 0){for(var L=h===void 0?[]:lo(h);u!==null;)(u.e.f&ht)===0&&L.push(u),u=u.next;var B=L.length;if(B>0){var k=null;gf(e,L,k,l)}}G.first=e.first&&e.first.e,G.last=d&&d.e}function vf(n,e,t,i){nr(n.v,e),n.i=t}function yf(n,e,t,i,r,s,o,a,l,c){var u=(l&Dd)!==0,h=(l&Ld)===0,d=u?h?Ud(r):Ie(r):r,f=(l&Md)===0?o:Ie(o),_={i:f,v:d,k:s,a:null,e:null,prev:t,next:i};try{return _.e=Cn(()=>a(n,d,f,c),Wd),_.e.prev=t&&t.e,_.e.next=i&&i.e,t===null?e.first=_:(t.next=_,t.e.next=_.e),i!==null&&(i.prev=_,i.e.prev=_.e),_}finally{}}function Fa(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==i;){var o=Mr(s);r.before(s),s=o}}function kt(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function bf(n,e,t,i,r){var s=n,o="",a;Fr(()=>{o!==(o=e()??"")&&(a!==void 0&&(ft(a),a=void 0),o!==""&&(a=Cn(()=>{var l=o+"",c=Mc(l);lr(ai(c),c.lastChild),s.before(c)})))})}function Ge(n,e,t,i){var r=n.__attributes??(n.__attributes={});r[e]!==(r[e]=t)&&(t==null?n.removeAttribute(e):typeof t!="string"&&Ef(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var Ua=new Map;function Ef(n){var e=Ua.get(n.nodeName);if(e)return e;Ua.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=hc(i);for(var s in t)t[s].set&&e.push(s);i=co(i)}return e}function xe(n,e,t=e){var i=bi();bo(n,"input",r=>{var s=r?n.defaultValue:n.value;if(s=ls(n)?cs(s):s,t(s),i&&s!==(s=e())){var o=n.selectionStart,a=n.selectionEnd;n.value=s??"",a!==null&&(n.selectionStart=o,n.selectionEnd=Math.min(a,n.value.length))}}),Ii(e)==null&&n.value&&t(ls(n)?cs(n.value):n.value),po(()=>{var r=e();ls(n)&&r===cs(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Xn(n,e,t=e){bo(n,"change",i=>{var r=i?n.defaultChecked:n.checked;t(r)}),Ii(e)==null&&t(n.checked),po(()=>{var i=e();n.checked=!!i})}function ls(n){var e=n.type;return e==="number"||e==="range"}function cs(n){return n===""?null:+n}function Lc(n,e,t){if(n.multiple)return If(n,e);for(var i of n.options){var r=Zn(i);if(Vd(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function wf(n,e){xr(()=>{var t=new MutationObserver(()=>{var i=n.__value;Lc(n,i)});return t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function Eo(n,e,t=e){var i=!0;bo(n,"change",r=>{var s=r?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(s),Zn);else{var a=n.querySelector(s)??n.querySelector("option:not([disabled])");o=a&&Zn(a)}t(o)}),xr(()=>{var r=e();if(Lc(n,r,i),i&&r===void 0){var s=n.querySelector(":checked");s!==null&&(r=Zn(s),t(r))}n.__value=r,i=!1}),wf(n)}function If(n,e){for(var t of n.options)t.selected=~e.indexOf(Zn(t))}function Zn(n){return"__value"in n?n.__value:n.value}function Me(n=!1){const e=ne,t=e.l.u;if(!t)return;let i=()=>lf(e.s);if(n){let r=0,s={};const o=_o(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&r++,r});i=()=>q(o)}t.b.length&&Gd(()=>{Ba(e,i),Aa(t.b)}),Ds(()=>{const r=Ii(()=>t.m.map(vd));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Ds(()=>{Ba(e,i),Aa(t.a)})}function Ba(n,e){if(n.l.s)for(const t of n.l.s)q(t);e()}function Ee(n){var e=Ie(0);return function(){return arguments.length===1?(_e(e,q(e)+1),arguments[0]):(q(e),n())}}const Cf="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cf);Od();const xc="scouterID",Fc="email",Uc="password";let J=Ce({scouterID:localStorage.getItem(xc)||"",email:localStorage.getItem(Fc)||"",password:localStorage.getItem(Uc)||""});function us(){localStorage.setItem(xc,J.scouterID),localStorage.setItem(Fc,J.email),localStorage.setItem(Uc,J.password)}let Z=Ce({uiState:"home",homeState:J.scouterID.length>=2?"start":"setup",matchState:"metadata"});function Bc(n){Z.uiState=n,Z.homeState="start",Z.matchState="metadata"}let R=Ce({metadata:{matchNumber:null,teamNumber:null,alliance:null},prematch:{noShow:!1,startingLocation:null},autonomous:{leave:!1,coral:{preloaded:!1,stationPickup:0,groundIntake:0,l1:0,l2:0,l3:0,l4:0,dropped:0},algae:{reefDescoreDrop:0,reefDescoreTake:0,groundIntake:0,processor:0,net:0,dropped:0}},teleop:{coral:{stationPickup:0,groundIntake:0,l1:0,l2:0,l3:0,l4:0,dropped:0},algae:{reefDescoreDrop:0,reefDescoreTake:0,groundIntake:0,processor:0,net:0,dropped:0}},endgame:{barge:null},postmatch:{dead:!1,tippedOver:!1,card:!1}}),ve=Ce({hasCoral:!1,hasAlgae:!1}),wo;const Sf=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];function Io(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17}function Co(n){return Sf[n]}function Sn(n){let e=0;for(;n!==0;)e++,n>>>=1;return e}function Tf(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');wo=n}function Wc(){return typeof wo<"u"}function kf(n){return wo(n)}const So={bit:1},Tn={bit:0},To={bit:3},ko={bit:2};function Nf(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return So;case"m":case"medium":return Tn;case"q":case"quartile":return To;case"h":case"high":return ko;default:throw new Error("Unknown EC Level: "+n)}}function Rf(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4}function Vc(n,e){if(Rf(n))return n;try{return Nf(n)}catch{return e}}function Hc(){this.buffer=[],this.length=0}Hc.prototype={get:function(n){const e=Math.floor(n/8);return(this.buffer[e]>>>7-n%8&1)===1},put:function(n,e){for(let t=0;t<e;t++)this.putBit((n>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),n&&(this.buffer[e]|=128>>>this.length%8),this.length++}};function Ci(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Ci.prototype.set=function(n,e,t,i){const r=n*this.size+e;this.data[r]=t,i&&(this.reservedBit[r]=!0)};Ci.prototype.get=function(n,e){return this.data[n*this.size+e]};Ci.prototype.xor=function(n,e,t){this.data[n*this.size+e]^=t};Ci.prototype.isReserved=function(n,e){return this.reservedBit[n*this.size+e]};function Af(n){if(n===1)return[];const e=Math.floor(n/7)+2,t=Io(n),i=t===145?26:Math.ceil((t-13)/(2*e-2))*2,r=[t-7];for(let s=1;s<e-1;s++)r[s]=r[s-1]-i;return r.push(6),r.reverse()}function Pf(n){const e=[],t=Af(n),i=t.length;for(let r=0;r<i;r++)for(let s=0;s<i;s++)r===0&&s===0||r===0&&s===i-1||r===i-1&&s===0||e.push([t[r],t[s]]);return e}const Wa=7;function Of(n){const e=Io(n);return[[0,0],[e-Wa,0],[0,e-Wa]]}const st={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Qt={N1:3,N2:3,N3:40,N4:10};function Df(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7}function Mf(n){return Df(n)?parseInt(n,10):void 0}function Lf(n){const e=n.size;let t=0,i=0,r=0,s=null,o=null;for(let a=0;a<e;a++){i=r=0,s=o=null;for(let l=0;l<e;l++){let c=n.get(a,l);c===s?i++:(i>=5&&(t+=Qt.N1+(i-5)),s=c,i=1),c=n.get(l,a),c===o?r++:(r>=5&&(t+=Qt.N1+(r-5)),o=c,r=1)}i>=5&&(t+=Qt.N1+(i-5)),r>=5&&(t+=Qt.N1+(r-5))}return t}function xf(n){const e=n.size;let t=0;for(let i=0;i<e-1;i++)for(let r=0;r<e-1;r++){const s=n.get(i,r)+n.get(i,r+1)+n.get(i+1,r)+n.get(i+1,r+1);(s===4||s===0)&&t++}return t*Qt.N2}function Ff(n){const e=n.size;let t=0,i=0,r=0;for(let s=0;s<e;s++){i=r=0;for(let o=0;o<e;o++)i=i<<1&2047|n.get(s,o),o>=10&&(i===1488||i===93)&&t++,r=r<<1&2047|n.get(o,s),o>=10&&(r===1488||r===93)&&t++}return t*Qt.N3}function Uf(n){let e=0;const t=n.data.length;for(let r=0;r<t;r++)e+=n.data[r];return Math.abs(Math.ceil(e*100/t/5)-10)*Qt.N4}function Bf(n,e,t){switch(n){case st.PATTERN000:return(e+t)%2===0;case st.PATTERN001:return e%2===0;case st.PATTERN010:return t%3===0;case st.PATTERN011:return(e+t)%3===0;case st.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2===0;case st.PATTERN101:return e*t%2+e*t%3===0;case st.PATTERN110:return(e*t%2+e*t%3)%2===0;case st.PATTERN111:return(e*t%3+(e+t)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}function Fs(n,e){const t=e.size;for(let i=0;i<t;i++)for(let r=0;r<t;r++)e.isReserved(r,i)||e.xor(r,i,Bf(n,r,i))}function Wf(n,e){const t=Object.keys(st).length;let i=0,r=1/0;for(let s=0;s<t;s++){e(s),Fs(s,n);const o=Lf(n)+xf(n)+Ff(n)+Uf(n);Fs(s,n),o<r&&(r=o,i=s)}return i}const xi=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Fi=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];function Vf(n,e){switch(e){case So:return xi[(n-1)*4+0];case Tn:return xi[(n-1)*4+1];case To:return xi[(n-1)*4+2];case ko:return xi[(n-1)*4+3];default:return}}function No(n,e){switch(e){case So:return Fi[(n-1)*4+0];case Tn:return Fi[(n-1)*4+1];case To:return Fi[(n-1)*4+2];case ko:return Fi[(n-1)*4+3];default:return}}const ei=new Uint8Array(512),Us=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)ei[t]=e,Us[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)ei[t]=ei[t-255]})();function Hf(n){return ei[n]}function $c(n,e){return n===0||e===0?0:ei[Us[n]+Us[e]]}function $f(n,e){const t=new Uint8Array(n.length+e.length-1);for(let i=0;i<n.length;i++)for(let r=0;r<e.length;r++)t[i+r]^=$c(n[i],e[r]);return t}function jf(n,e){let t=new Uint8Array(n);for(;t.length-e.length>=0;){const i=t[0];for(let s=0;s<e.length;s++)t[s]^=$c(e[s],i);let r=0;for(;r<t.length&&t[r]===0;)r++;t=t.slice(r)}return t}function qf(n){let e=new Uint8Array([1]);for(let t=0;t<n;t++)e=$f(e,new Uint8Array([1,Hf(t)]));return e}function Ro(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}Ro.prototype.initialize=function(e){this.degree=e,this.genPoly=qf(this.degree)};Ro.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const i=jf(t,this.genPoly),r=this.degree-i.length;if(r>0){const s=new Uint8Array(this.degree);return s.set(i,r),s}return i};function Wr(n){return!isNaN(n)&&n>=1&&n<=40}const jc="[0-9]+",zf="[A-Z $%*+\\-./:]+";let li="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";li=li.replace(/u/g,"\\u");const Gf="(?:(?![A-Z0-9 $%*+\\-./:]|"+li+`)(?:.|[\r
]))+`,Kf=new RegExp(li,"g"),Yf=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Qf=new RegExp(Gf,"g"),Jf=new RegExp(jc,"g"),Xf=new RegExp(zf,"g"),Zf=new RegExp("^"+li+"$"),e_=new RegExp("^"+jc+"$"),t_=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");function n_(n){return Zf.test(n)}function i_(n){return e_.test(n)}function r_(n){return t_.test(n)}const Ht={id:"Numeric",bit:1,ccBits:[10,12,14]},pt={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},me={id:"Byte",bit:4,ccBits:[8,16,16]},gt={id:"Kanji",bit:8,ccBits:[8,10,12]},qc={};function Ao(n,e){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!Wr(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?n.ccBits[0]:e<27?n.ccBits[1]:n.ccBits[2]}function s_(n){return i_(n)?Ht:r_(n)?pt:n_(n)?gt:me}function Va(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")}function o_(n){return n&&n.bit&&n.ccBits}function a_(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return Ht;case"alphanumeric":return pt;case"kanji":return gt;case"byte":return me;default:throw new Error("Unknown mode: "+n)}}function l_(n,e){if(o_(n))return n;try{return a_(n)}catch{return e}}const zc=7973,Ha=Sn(zc);function c_(n,e,t){for(let i=1;i<=40;i++)if(e<=Kc(i,t,n))return i}function Gc(n,e){return Ao(n,e)+4}function u_(n,e){let t=0;return n.forEach(function(i){const r=Gc(i.mode,e);t+=r+i.getBitsLength()}),t}function h_(n,e){for(let t=1;t<=40;t++)if(u_(n,t)<=Kc(t,e,qc))return t}function d_(n,e){return Wr(n)?parseInt(n,10):e}function Kc(n,e,t){if(!Wr(n))throw new Error("Invalid QR Code version");typeof t>"u"&&(t=me);const i=Co(n),r=No(n,e),s=(i-r)*8;if(t===qc)return s;const o=s-Gc(t,n);switch(t){case Ht:return Math.floor(o/10*3);case pt:return Math.floor(o/11*2);case gt:return Math.floor(o/13);case me:default:return Math.floor(o/8)}}function $a(n,e){let t;const i=Vc(e,Tn);if(Array.isArray(n)){if(n.length>1)return h_(n,i);if(n.length===0)return 1;t=n[0]}else t=n;return c_(t.mode,t.getLength(),i)}function f_(n){if(!Wr(n)||n<7)throw new Error("Invalid QR Code version");let e=n<<12;for(;Sn(e)-Ha>=0;)e^=zc<<Sn(e)-Ha;return n<<12|e}const Yc=1335,__=21522,ja=Sn(Yc);function p_(n,e){const t=n.bit<<3|e;let i=t<<10;for(;Sn(i)-ja>=0;)i^=Yc<<Sn(i)-ja;return(t<<10|i)^__}function en(n){this.mode=Ht,this.data=n.toString()}en.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};en.prototype.getLength=function(){return this.data.length};en.prototype.getBitsLength=function(){return en.getBitsLength(this.data.length)};en.prototype.write=function(e){let t,i,r;for(t=0;t+3<=this.data.length;t+=3)i=this.data.substr(t,3),r=parseInt(i,10),e.put(r,10);const s=this.data.length-t;s>0&&(i=this.data.substr(t),r=parseInt(i,10),e.put(r,s*3+1))};const hs=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Vr(n){this.mode=pt,this.data=n}function Qc(n){return 11*Math.floor(n/2)+6*(n%2)}Vr.prototype.getLength=function(){return this.data.length};Vr.prototype.getBitsLength=function(){return Qc(this.data.length)};Vr.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=hs.indexOf(this.data[t])*45;i+=hs.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(hs.indexOf(this.data[t]),6)};function tn(n){this.mode=me,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}tn.getBitsLength=function(e){return e*8};tn.prototype.getLength=function(){return this.data.length};tn.prototype.getBitsLength=function(){return tn.getBitsLength(this.data.length)};tn.prototype.write=function(n){for(let e=0,t=this.data.length;e<t;e++)n.put(this.data[e],8)};function nn(n){this.mode=gt,this.data=n}nn.getBitsLength=function(e){return e*13};nn.prototype.getLength=function(){return this.data.length};nn.prototype.getBitsLength=function(){return nn.getBitsLength(this.data.length)};nn.prototype.write=function(n){let e;for(e=0;e<this.data.length;e++){let t=kf(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),n.put(t,13)}};var ds={exports:{}},qa;function g_(){return qa||(qa=1,function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},o={};o[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var l,c,u,h,d,f,_,g,y;!a.empty();){l=a.pop(),c=l.value,h=l.cost,d=t[c]||{};for(u in d)d.hasOwnProperty(u)&&(f=d[u],_=h+f,g=o[u],y=typeof o[u]>"u",(y||g>_)&&(o[u]=_,a.push(u,_),s[u]=c))}if(typeof r<"u"&&typeof o[r]>"u"){var b=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(b)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(ds)),ds.exports}var m_=g_();function za(n){return unescape(encodeURIComponent(n)).length}function $n(n,e,t){const i=[];let r;for(;(r=n.exec(t))!==null;)i.push({data:r[0],index:r.index,mode:e,length:r[0].length});return i}function Jc(n){const e=$n(Jf,Ht,n),t=$n(Xf,pt,n);let i,r;return Wc()?(i=$n(Qf,me,n),r=$n(Kf,gt,n)):(i=$n(Yf,me,n),r=[]),e.concat(t,i,r).sort(function(o,a){return o.index-a.index}).map(function(o){return{data:o.data,mode:o.mode,length:o.length}})}function fs(n,e){switch(e){case Ht:return en.getBitsLength(n);case pt:return Qc(n);case gt:return nn.getBitsLength(n);case me:return tn.getBitsLength(n)}}function v_(n){return n.reduce(function(e,t){const i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function y_(n){const e=[];for(let t=0;t<n.length;t++){const i=n[t];switch(i.mode){case Ht:e.push([i,{data:i.data,mode:pt,length:i.length},{data:i.data,mode:me,length:i.length}]);break;case pt:e.push([i,{data:i.data,mode:me,length:i.length}]);break;case gt:e.push([i,{data:i.data,mode:me,length:za(i.data)}]);break;case me:e.push([{data:i.data,mode:me,length:za(i.data)}])}}return e}function b_(n,e){const t={},i={start:{}};let r=["start"];for(let s=0;s<n.length;s++){const o=n[s],a=[];for(let l=0;l<o.length;l++){const c=o[l],u=""+s+l;a.push(u),t[u]={node:c,lastCount:0},i[u]={};for(let h=0;h<r.length;h++){const d=r[h];t[d]&&t[d].node.mode===c.mode?(i[d][u]=fs(t[d].lastCount+c.length,c.mode)-fs(t[d].lastCount,c.mode),t[d].lastCount+=c.length):(t[d]&&(t[d].lastCount=c.length),i[d][u]=fs(c.length,c.mode)+4+Ao(c.mode,e))}}r=a}for(let s=0;s<r.length;s++)i[r[s]].end=0;return{map:i,table:t}}function Ga(n,e){let t;const i=s_(n);if(t=l_(e,i),t!==me&&t.bit<i.bit)throw new Error('"'+n+'" cannot be encoded with mode '+Va(t)+`.
 Suggested mode is: `+Va(i));switch(t===gt&&!Wc()&&(t=me),t){case Ht:return new en(n);case pt:return new Vr(n);case gt:return new nn(n);case me:return new tn(n)}}function Po(n){return n.reduce(function(e,t){return typeof t=="string"?e.push(Ga(t,null)):t.data&&e.push(Ga(t.data,t.mode)),e},[])}function E_(n,e){const t=Jc(n),i=y_(t),r=b_(i,e),s=m_.find_path(r.map,"start","end"),o=[];for(let a=1;a<s.length-1;a++)o.push(r.table[s[a]].node);return Po(v_(o))}function w_(n){return Po(Jc(n))}function I_(n,e){const t=n.size,i=Of(e);for(let r=0;r<i.length;r++){const s=i[r][0],o=i[r][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||t<=s+a))for(let l=-1;l<=7;l++)o+l<=-1||t<=o+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?n.set(s+a,o+l,!0,!0):n.set(s+a,o+l,!1,!0))}}function C_(n){const e=n.size;for(let t=8;t<e-8;t++){const i=t%2===0;n.set(t,6,i,!0),n.set(6,t,i,!0)}}function S_(n,e){const t=Pf(e);for(let i=0;i<t.length;i++){const r=t[i][0],s=t[i][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?n.set(r+o,s+a,!0,!0):n.set(r+o,s+a,!1,!0)}}function T_(n,e){const t=n.size,i=f_(e);let r,s,o;for(let a=0;a<18;a++)r=Math.floor(a/3),s=a%3+t-8-3,o=(i>>a&1)===1,n.set(r,s,o,!0),n.set(s,r,o,!0)}function _s(n,e,t){const i=n.size,r=p_(e,t);let s,o;for(s=0;s<15;s++)o=(r>>s&1)===1,s<6?n.set(s,8,o,!0):s<8?n.set(s+1,8,o,!0):n.set(i-15+s,8,o,!0),s<8?n.set(8,i-s-1,o,!0):s<9?n.set(8,15-s-1+1,o,!0):n.set(8,15-s-1,o,!0);n.set(i-8,8,1,!0)}function k_(n,e){const t=n.size;let i=-1,r=t-1,s=7,o=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!n.isReserved(r,a-l)){let c=!1;o<e.length&&(c=(e[o]>>>s&1)===1),n.set(r,a-l,c),s--,s===-1&&(o++,s=7)}if(r+=i,r<0||t<=r){r-=i,i=-i;break}}}function N_(n,e,t){const i=new Hc;t.forEach(function(l){i.put(l.mode.bit,4),i.put(l.getLength(),Ao(l.mode,n)),l.write(i)});const r=Co(n),s=No(n,e),o=(r-s)*8;for(i.getLengthInBits()+4<=o&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(o-i.getLengthInBits())/8;for(let l=0;l<a;l++)i.put(l%2?17:236,8);return R_(i,n,e)}function R_(n,e,t){const i=Co(e),r=No(e,t),s=i-r,o=Vf(e,t),a=i%o,l=o-a,c=Math.floor(i/o),u=Math.floor(s/o),h=u+1,d=c-u,f=new Ro(d);let _=0;const g=new Array(o),y=new Array(o);let b=0;const E=new Uint8Array(n.buffer);for(let D=0;D<o;D++){const L=D<l?u:h;g[D]=E.slice(_,_+L),y[D]=f.encode(g[D]),_+=L,b=Math.max(b,L)}const T=new Uint8Array(i);let O=0,C,S;for(C=0;C<b;C++)for(S=0;S<o;S++)C<g[S].length&&(T[O++]=g[S][C]);for(C=0;C<d;C++)for(S=0;S<o;S++)T[O++]=y[S][C];return T}function A_(n,e,t,i){let r;if(Array.isArray(n))r=Po(n);else if(typeof n=="string"){let c=e;if(!c){const u=w_(n);c=$a(u,t)}r=E_(n,c||40)}else throw new Error("Invalid data");const s=$a(r,t);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=N_(e,t,r),a=Io(e),l=new Ci(a);return I_(l,e),C_(l),S_(l,e),_s(l,t,0),e>=7&&T_(l,e),k_(l,o),isNaN(i)&&(i=Wf(l,_s.bind(null,l,t))),Fs(i,l),_s(l,t,i),{modules:l,version:e,errorCorrectionLevel:t,maskPattern:i,segments:r}}function P_(n,e){if(typeof n>"u"||n==="")throw new Error("No input text");let t=Tn,i,r;return typeof e<"u"&&(t=Vc(e.errorCorrectionLevel,Tn),i=d_(e.version),r=Mf(e.maskPattern),e.toSJISFunc&&Tf(e.toSJISFunc)),A_(n,i,t,r)}function Ka(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let e=n.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+n);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(i){return[i,i]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}function O_(n){n||(n={}),n.color||(n.color={});const e=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,t=n.width&&n.width>=21?n.width:void 0,i=n.scale||4;return{width:t,scale:t?4:i,margin:e,color:{dark:Ka(n.color.dark||"#000000ff"),light:Ka(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}}function Ya(n,e){const t=n.a/255,i=e+'="'+n.hex+'"';return t<1?i+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':i}function ps(n,e,t){let i=n+e;return typeof t<"u"&&(i+=" "+t),i}function D_(n,e,t){let i="",r=0,s=!1,o=0;for(let a=0;a<n.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!s&&(s=!0),n[a]?(o++,a>0&&l>0&&n[a-1]||(i+=s?ps("M",l+t,.5+c+t):ps("m",r,0),r=0,s=!1),l+1<e&&n[a+1]||(i+=ps("h",o),o=0)):r++}return i}function M_(n,e,t){const i=O_(e),r=n.modules.size,s=n.modules.data,o=r+i.margin*2,a=i.color.light.a?"<path "+Ya(i.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",l="<path "+Ya(i.color.dark,"stroke")+' d="'+D_(s,r,i.margin)+'"/>',c='viewBox="0 0 '+o+" "+o+'"';return'<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges" style="'+e.style+'">'+a+l+`</svg>
`}function L_(n,e){const t=P_(n,e);return M_(t,e)}var Qa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(n,e){if(!n)throw Mn(e)},Mn=function(n){return new Error("Firebase Database ("+Xc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},x_=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):x_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new F_;const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eu=function(n){const e=Zc(n);return Oo.encodeByteArray(e,!0)},cr=function(n){return eu(n).replace(/\./g,"")},ur=function(n){try{return Oo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){return tu(void 0,n)}function tu(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!B_(t)||(n[t]=tu(n[t],e[t]));return n}function B_(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=()=>W_().__FIREBASE_DEFAULTS__,H_=()=>{if(typeof process>"u"||typeof Qa>"u")return;const n=Qa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ur(n[1]);return e&&JSON.parse(e)},Do=()=>{try{return V_()||H_()||$_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nu=n=>{var e,t;return(t=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},j_=n=>{const e=nu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},iu=()=>{var n;return(n=Do())===null||n===void 0?void 0:n.config},ru=n=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cr(JSON.stringify(t)),cr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function z_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function G_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function su(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K_(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Y_(){return Xc.NODE_ADMIN===!0}function Q_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="FirebaseError";class $t extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=X_,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Z_(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $t(r,a,i)}}function Z_(n,e){return n.replace(ep,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const ep=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){return JSON.parse(n)}function le(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=ci(ur(s[0])||""),t=ci(ur(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},tp=function(n){const e=ou(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},np=function(n){const e=ou(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function kn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hr(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function dr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Ja(s)&&Ja(o)){if(!dr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Ja(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Yn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Qn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function rp(n,e){const t=new sp(n,e);return t.subscribe.bind(t)}class sp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");op(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=gs),r.error===void 0&&(r.error=gs),r.complete===void 0&&(r.complete=gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gs(){}function Lo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,v(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},$r=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Hr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(n){return n===zt?void 0:n}function up(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const dp={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},fp=j.INFO,_p={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},pp=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=_p[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xo{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const gp=(n,e)=>e.some(t=>n instanceof t);let Xa,Za;function mp(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,Ws=new WeakMap,lu=new WeakMap,ms=new WeakMap,Fo=new WeakMap;function yp(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Dt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&au.set(t,n)}).catch(()=>{}),Fo.set(e,n),e}function bp(n){if(Ws.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ws.set(n,e)}let Vs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ws.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ep(n){Vs=n(Vs)}function wp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(vs(this),e,...t);return lu.set(i,e.sort?e.sort():[e]),Dt(i)}:vp().includes(n)?function(...e){return n.apply(vs(this),e),Dt(au.get(this))}:function(...e){return Dt(n.apply(vs(this),e))}}function Ip(n){return typeof n=="function"?wp(n):(n instanceof IDBTransaction&&bp(n),gp(n,mp())?new Proxy(n,Vs):n)}function Dt(n){if(n instanceof IDBRequest)return yp(n);if(ms.has(n))return ms.get(n);const e=Ip(n);return e!==n&&(ms.set(n,e),Fo.set(e,n)),e}const vs=n=>Fo.get(n);function Cp(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Dt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Dt(o.result),l.oldVersion,l.newVersion,Dt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sp=["get","getKey","getAll","getAllKeys","count"],Tp=["put","add","delete","clear"],ys=new Map;function el(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ys.get(e))return ys.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Tp.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Sp.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return ys.set(e,s),s}Ep(n=>({...n,get:(e,t,i)=>el(e,t)||n.get(e,t,i),has:(e,t)=>!!el(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Np(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hs="@firebase/app",tl="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new xo("@firebase/app"),Rp="@firebase/app-compat",Ap="@firebase/analytics-compat",Pp="@firebase/analytics",Op="@firebase/app-check-compat",Dp="@firebase/app-check",Mp="@firebase/auth",Lp="@firebase/auth-compat",xp="@firebase/database",Fp="@firebase/data-connect",Up="@firebase/database-compat",Bp="@firebase/functions",Wp="@firebase/functions-compat",Vp="@firebase/installations",Hp="@firebase/installations-compat",$p="@firebase/messaging",jp="@firebase/messaging-compat",qp="@firebase/performance",zp="@firebase/performance-compat",Gp="@firebase/remote-config",Kp="@firebase/remote-config-compat",Yp="@firebase/storage",Qp="@firebase/storage-compat",Jp="@firebase/firestore",Xp="@firebase/vertexai",Zp="@firebase/firestore-compat",eg="firebase",tg="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="[DEFAULT]",ng={[Hs]:"fire-core",[Rp]:"fire-core-compat",[Pp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Dp]:"fire-app-check",[Op]:"fire-app-check-compat",[Mp]:"fire-auth",[Lp]:"fire-auth-compat",[xp]:"fire-rtdb",[Fp]:"fire-data-connect",[Up]:"fire-rtdb-compat",[Bp]:"fire-fn",[Wp]:"fire-fn-compat",[Vp]:"fire-iid",[Hp]:"fire-iid-compat",[$p]:"fire-fcm",[jp]:"fire-fcm-compat",[qp]:"fire-perf",[zp]:"fire-perf-compat",[Gp]:"fire-rc",[Kp]:"fire-rc-compat",[Yp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Jp]:"fire-fst",[Zp]:"fire-fst-compat",[Xp]:"fire-vertex","fire-js":"fire-js",[eg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map,ig=new Map,js=new Map;function nl(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(js.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;js.set(e,n);for(const t of fr.values())nl(t,n);for(const t of ig.values())nl(t,n);return!0}function Uo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new Si("app","Firebase",rg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=tg;function cu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$s,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Mt.create("bad-app-name",{appName:String(r)});if(t||(t=iu()),!t)throw Mt.create("no-options");const s=fr.get(r);if(s){if(dr(t,s.options)&&dr(i,s.config))return s;throw Mt.create("duplicate-app",{appName:r})}const o=new hp(r);for(const l of js.values())o.addComponent(l);const a=new sg(t,i,o);return fr.set(r,a),a}function uu(n=$s){const e=fr.get(n);if(!e&&n===$s&&iu())return cu();if(!e)throw Mt.create("no-app",{appName:n});return e}function Lt(n,e,t){var i;let r=(i=ng[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}Nn(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebase-heartbeat-database",ag=1,ui="firebase-heartbeat-store";let bs=null;function hu(){return bs||(bs=Cp(og,ag,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ui)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mt.create("idb-open",{originalErrorMessage:n.message})})),bs}async function lg(n){try{const t=(await hu()).transaction(ui),i=await t.objectStore(ui).get(du(n));return await t.done,i}catch(e){if(e instanceof $t)mt.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(t.message)}}}async function il(n,e){try{const i=(await hu()).transaction(ui,"readwrite");await i.objectStore(ui).put(e,du(n)),await i.done}catch(t){if(t instanceof $t)mt.warn(t.message);else{const i=Mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mt.warn(i.message)}}}function du(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1024,ug=30;class hg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fg(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>ug){const o=_g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){mt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rl(),{heartbeatsToSend:i,unsentEntries:r}=dg(this._heartbeatsCache.heartbeats),s=cr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return mt.warn(t),""}}}function rl(){return new Date().toISOString().substring(0,10)}function dg(n,e=cg){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),sl(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),sl(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sl(n){return cr(JSON.stringify({version:2,heartbeats:n})).length}function _g(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){Nn(new rn("platform-logger",e=>new kp(e),"PRIVATE")),Nn(new rn("heartbeat",e=>new hg(e),"PRIVATE")),Lt(Hs,tl,n),Lt(Hs,tl,"esm2017"),Lt("fire-js","")}pg("");var gg="firebase",mg="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(gg,mg,"app");var ol={};const al="@firebase/database",ll="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu="";function vg(n){fu=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ci(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yg(e)}}catch{}return new bg},Jt=_u("localStorage"),Eg=_u("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new xo("@firebase/database"),wg=function(){let n=1;return function(){return n++}}(),pu=function(n){const e=ap(n),t=new ip;t.update(e);const i=t.digest();return Oo.encodeByteArray(i)},Ti=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ti.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let ti=null,cl=!0;const Ig=function(n,e){v(!0,"Can't turn on custom loggers persistently."),vn.logLevel=j.VERBOSE,ti=vn.log.bind(vn)},pe=function(...n){if(cl===!0&&(cl=!1,ti===null&&Eg.get("logging_enabled")===!0&&Ig()),ti){const e=Ti.apply(null,n);ti(e)}},ki=function(n){return function(...e){pe(n,...e)}},qs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ti(...n);vn.error(e)},vt=function(...n){const e=`FIREBASE FATAL ERROR: ${Ti(...n)}`;throw vn.error(e),new Error(e)},ke=function(...n){const e="FIREBASE WARNING: "+Ti(...n);vn.warn(e)},Cg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Rn="[MIN_NAME]",sn="[MAX_NAME]",Fn=function(n,e){if(n===e)return 0;if(n===Rn||e===sn)return-1;if(e===Rn||n===sn)return 1;{const t=ul(n),i=ul(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Tg=function(n,e){return n===e?0:n<e?-1:1},jn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+le(e))},Bo=function(n){if(typeof n!="object"||n===null)return le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=le(e[i]),t+=":",t+=Bo(n[e[i]]);return t+="}",t},mu=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function Re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const vu=function(n){v(!gu(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,a,l;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},kg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ng=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ag=new RegExp("^-?(0*)\\d{1,10}$"),Pg=-2147483648,Og=2147483647,ul=function(n){if(Ag.test(n)){const e=Number(n);if(e>=Pg&&e<=Og)return e}return null},Un=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ke("Exception was thrown by user callback.",t),e},Math.floor(0))}},Dg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ni=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ve(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Yi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="5",yu="v",bu="s",Eu="r",wu="f",Iu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cu="ls",Su="p",zs="ac",Tu="websocket",ku="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,i,r,s=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ru(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let i;if(e===Tu)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ku)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xg(n)&&(t.ns=n.namespace);const r=[];return Re(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.counters_={}}incrementCounter(e,t=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return U_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={},ws={};function Vo(n){const e=n.toString();return Es[e]||(Es[e]=new Fg),Es[e]}function Ug(n,e){const t=n.toString();return ws[t]||(ws[t]=e()),ws[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Un(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="start",Wg="close",Vg="pLPCommand",Hg="pRTLPCB",Au="id",Pu="pw",Ou="ser",$g="cb",jg="seg",qg="ts",zg="d",Gg="dframe",Du=1870,Mu=30,Kg=Du-Mu,Yg=25e3,Qg=3e4;class gn{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ki(e),this.stats_=Vo(t),this.urlFn=l=>(this.appCheckToken&&(l[zs]=this.appCheckToken),Ru(t,ku,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Qg)),Sg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ho((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hl)this.id=a,this.password=l;else if(o===Wg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[hl]="t",i[Ou]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$g]=this.scriptTagHolder.uniqueCallbackIdentifier),i[yu]=Wo,this.transportSessionId&&(i[bu]=this.transportSessionId),this.lastSessionId&&(i[Cu]=this.lastSessionId),this.applicationId&&(i[Su]=this.applicationId),this.appCheckToken&&(i[zs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Iu.test(location.hostname)&&(i[Eu]=wu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gn.forceAllow_=!0}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){return gn.forceAllow_?!0:!gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kg()&&!Ng()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=eu(t),r=mu(i,Kg);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Gg]="t",i[Au]=e,i[Pu]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ho{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wg(),window[Vg+this.uniqueCallbackIdentifier]=e,window[Hg+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ho.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pe("frame writing exception"),a.stack&&pe(a.stack),pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Au]=this.myID,e[Pu]=this.myPW,e[Ou]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mu+i.length<=Du;){const o=this.pendingSegs.shift();i=i+"&"+jg+r+"="+o.seg+"&"+qg+r+"="+o.ts+"&"+zg+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(Yg)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=16384,Xg=45e3;let _r=null;typeof MozWebSocket<"u"?_r=MozWebSocket:typeof WebSocket<"u"&&(_r=WebSocket);class He{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ki(this.connId),this.stats_=Vo(t),this.connURL=He.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[yu]=Wo,typeof location<"u"&&location.hostname&&Iu.test(location.hostname)&&(o[Eu]=wu),t&&(o[bu]=t),i&&(o[Cu]=i),r&&(o[zs]=r),s&&(o[Su]=s),Ru(e,Tu,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jt.set("previous_websocket_failure",!0);try{let i;Y_(),this.mySock=new _r(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&_r!==null&&!He.forceDisallow_}static previouslyFailed(){return Jt.isInMemoryStorage||Jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ci(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=mu(t,Jg);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Xg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}He.responsesRequiredToBeHealthy=2;He.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{static get ALL_TRANSPORTS(){return[gn,He]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=He&&He.isAvailable();let i=t&&!He.previouslyFailed();if(e.webSocketOnly&&(t||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[He];else{const r=this.transports_=[];for(const s of hi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=6e4,em=5e3,tm=10*1024,nm=100*1024,Is="t",dl="d",im="s",fl="r",rm="e",_l="o",pl="a",gl="n",ml="p",sm="h";class om{constructor(e,t,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ki("c:"+this.id+":"),this.transportManager_=new hi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ni(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Is in e){const t=e[Is];t===pl?this.upgradeIfSecondaryHealthy_():t===fl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_l&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=jn("t",e),i=jn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ml,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=jn("t",e),i=jn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=jn(Is,e);if(dl in e){const i=e[dl];if(t===sm){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===gl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===im?this.onConnectionShutdown_(i):t===fl?this.onReset_(i):t===rm?qs("Server Error: "+i):t===_l?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wo!==i&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ni(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ni(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(em))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ml,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends xu{static getInstance(){return new pr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=32,yl=768;class K{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $(){return new K("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Wt(n){return n.pieces_.length-n.pieceNum_}function Y(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new K(n.pieces_,e)}function Fu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function am(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Uu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Bu(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new K(e,0)}function re(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof K)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new K(t,0)}function U(n){return n.pieceNum_>=n.pieces_.length}function Se(n,e){const t=x(n),i=x(e);if(t===null)return e;if(t===i)return Se(Y(n),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function $o(n,e){if(Wt(n)!==Wt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function $e(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Wt(n)>Wt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class lm{constructor(e,t){this.errorPrefix_=t,this.parts_=Uu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$r(this.parts_[i]);Wu(this)}}function cm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$r(e),Wu(n)}function um(n){const e=n.parts_.pop();n.byteLength_-=$r(e),n.parts_.length>0&&(n.byteLength_-=1)}function Wu(n){if(n.byteLength_>yl)throw new Error(n.errorPrefix_+"has a key path longer than "+yl+" bytes ("+n.byteLength_+").");if(n.parts_.length>vl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vl+") or object contains a cycle "+Gt(n))}function Gt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends xu{static getInstance(){return new jo}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=1e3,hm=60*5*1e3,bl=30*1e3,dm=1.3,fm=3e4,_m="server_kill",El=3;class dt extends Lu{constructor(e,t,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dt.nextPersistentConnectionId_++,this.log_=ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qn,this.maxReconnectDelay_=hm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(le(s)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new Hr,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;dt.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&It(e,"w")){const i=kn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||np(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tp(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qs("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fm&&(this.reconnectDelay_=qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pe("getToken() completed but was canceled"):(pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new om(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ke(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(_m)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),l())}}}interrupt(e){pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bs(this.interruptReasons_)&&(this.reconnectDelay_=qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>Bo(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new K(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){pe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=El&&(this.reconnectDelay_=bl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=El&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+fu.replace(/\./g,"-")]=1,Mo()?e["framework.cordova"]=1:su()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pr.getInstance().currentlyOnline();return Bs(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new F(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new F(Rn,e),r=new F(Rn,t);return this.compare(i,r)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class Vu extends jr{static get __EMPTY_NODE(){return Ui}static set __EMPTY_NODE(e){Ui=e}compare(e,t){return Fn(e.name,t.name)}isDefinedOn(e){throw Mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return F.MIN}maxPost(){return new F(sn,Ui)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Ui)}toString(){return".key"}}const yn=new Vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??ae.RED,this.left=r??Te.EMPTY_NODE,this.right=s??Te.EMPTY_NODE}copy(e,t,i,r,s){return new ae(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class pm{copy(e,t,i,r,s){return this}insert(e,t,i){return new ae(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(e,t=Te.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Te(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new Te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bi(this.root_,null,this.comparator_,!0,e)}}Te.EMPTY_NODE=new pm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,e){return Fn(n.name,e.name)}function qo(n,e){return Fn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;function mm(n){Gs=n}const Hu=function(n){return typeof n=="number"?"number:"+vu(n):"string:"+n},$u=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else v(n===Gs||n.isEmpty(),"priority of unexpected type.");v(n===Gs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;class oe{static set __childrenNodeConstructor(e){wl=e}static get __childrenNodeConstructor(){return wl}constructor(e,t=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$u(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:x(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=x(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(v(i!==".priority"||Wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=vu(this.value_):e+=this.value_,this.lazyHash_=pu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=oe.VALUE_TYPE_ORDER.indexOf(t),s=oe.VALUE_TYPE_ORDER.indexOf(i);return v(r>=0,"Unknown leaf type: "+t),v(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju,qu;function vm(n){ju=n}function ym(n){qu=n}class bm extends jr{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Fn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return F.MIN}maxPost(){return new F(sn,new oe("[PRIORITY-POST]",qu))}makePost(e,t){const i=ju(e);return new F(t,new oe("[PRIORITY-POST]",i))}toString(){return".priority"}}const ee=new bm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=Math.log(2);class wm{constructor(e){const t=s=>parseInt(Math.log(s)/Em,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gr=function(n,e,t,i){n.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new ae(d,h.node,ae.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=r(l,f),g=r(f+1,c);return h=n[f],d=t?t(h):h,new ae(d,h.node,ae.BLACK,_,g)}},s=function(l){let c=null,u=null,h=n.length;const d=function(_,g){const y=h-_,b=h;h-=_;const E=r(y+1,b),T=n[y],O=t?t(T):T;f(new ae(O,T.node,g,null,E))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(_+1));g?d(y,ae.BLACK):(d(y,ae.BLACK),d(y,ae.RED))}return u},o=new wm(n.length),a=s(o);return new Te(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;const pn={};class at{static get Default(){return v(pn&&ee,"ChildrenNode.ts has not been loaded"),Cs=Cs||new at({".priority":pn},{".priority":ee}),Cs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=kn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Te?t:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,t){v(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(F.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=gr(i,e.getCompare()):a=pn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new at(u,c)}addToIndexes(e,t){const i=hr(this.indexes_,(r,s)=>{const o=kn(this.indexSet_,s);if(v(o,"Missing index implementation for "+s),r===pn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gr(a,o.getCompare())}else return pn;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new at(i,this.indexSet_)}removeFromIndexes(e,t){const i=hr(this.indexes_,r=>{if(r===pn)return r;{const s=t.get(e.name);return s?r.remove(new F(e.name,s)):r}});return new at(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;class P{static get EMPTY_NODE(){return zn||(zn=new P(new Te(qo),null,at.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&$u(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zn:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new F(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?zn:this.priorityNode_;return new P(r,o,s)}}updateChild(e,t){const i=x(e);if(i===null)return t;{v(x(e)!==".priority"||Wt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Y(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(ee,(o,a)=>{t[o]=a.val(e),i++,s&&P.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hu(this.getPriority().val())+":"),this.forEachChild(ee,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":pu(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new F(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new F(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new F(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,F.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ni?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ee),r=t.getIterator(ee);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Im extends P{constructor(){super(new Te(qo),P.EMPTY_NODE,at.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ni=new Im;Object.defineProperties(F,{MIN:{value:new F(Rn,P.EMPTY_NODE)},MAX:{value:new F(sn,Ni)}});Vu.__EMPTY_NODE=P.EMPTY_NODE;oe.__childrenNodeConstructor=P;mm(Ni);ym(Ni);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=!0;function de(n,e=null){if(n===null)return P.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new oe(t,de(e))}if(!(n instanceof Array)&&Cm){const t=[];let i=!1;if(Re(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new F(o,l)))}}),t.length===0)return P.EMPTY_NODE;const s=gr(t,gm,o=>o.name,qo);if(i){const o=gr(t,ee.getCompare());return new P(s,de(e),new at({".priority":o},{".priority":ee}))}else return new P(s,de(e),at.Default)}else{let t=P.EMPTY_NODE;return Re(n,(i,r)=>{if(It(n,i)&&i.substring(0,1)!=="."){const s=de(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(de(e))}}vm(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends jr{constructor(e){super(),this.indexPath_=e,v(!U(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Fn(e.name,t.name):s}makePost(e,t){const i=de(e),r=P.EMPTY_NODE.updateChild(this.indexPath_,i);return new F(t,r)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ni);return new F(sn,e)}toString(){return Uu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends jr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Fn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,t){const i=de(e);return new F(t,i)}toString(){return".value"}}const km=new Tm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){return{type:"value",snapshotNode:n}}function An(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function di(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function fi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Nm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(di(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(An(t,i)):o.trackChildChange(fi(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ee,(r,s)=>{t.hasChild(r)||i.trackChildChange(di(r,s))}),t.isLeafNode()||t.forEachChild(ee,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(fi(r,s,o))}else i.trackChildChange(An(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.indexedFilter_=new zo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_i.getStartPost_(e),this.endPost_=_i.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new F(t,i))||(i=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=P.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(P.EMPTY_NODE);const s=this;return t.forEachChild(ee,(o,a)=>{s.matches(new F(o,a))||(r=r.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new _i(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new F(t,i))||(i=P.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new F(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(fi(t,i,h)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(di(t,h));const g=a.updateImmediateChild(t,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(An(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(di(c.name,c.node)),s.trackChildChange(An(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Am(n){return n.loadsAllData()?new zo(n.getIndex()):n.hasLimit()?new Rm(n):new _i(n)}function Il(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ee?t="$priority":n.index_===km?t="$value":n.index_===yn?t="$key":(v(n.index_ instanceof Sm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=le(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=le(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+le(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=le(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+le(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Cl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ee&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Lu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=ki("p:rest:"),this.listens_={}}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=mr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Il(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),kn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,t){const i=mr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Il(e._queryParams),i=e._path.toString(),r=new Hr;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ln(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ci(a.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){return{value:null,children:new Map}}function Gu(n,e,t){if(U(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=x(e);n.children.has(i)||n.children.set(i,vr());const r=n.children.get(i);e=Y(e),Gu(r,e,t)}}function Ks(n,e,t){n.value!==null?t(e,n.value):Om(n,(i,r)=>{const s=new K(e.toString()+"/"+i);Ks(r,s,t)})}function Om(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Re(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=10*1e3,Mm=30*1e3,Lm=5*60*1e3;class xm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Dm(e);const i=Sl+(Mm-Sl)*Math.random();ni(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Re(e,(r,s)=>{s>0&&It(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),ni(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(je||(je={}));function Ku(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ko(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=je.ACK_USER_WRITE,this.source=Ku()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new K(e));return new yr($(),t,this.revert)}}else return v(x(this.path)===e,"operationForChild called for unrelated child."),new yr(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.source=e,this.path=t,this.type=je.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new pi(this.source,$()):new pi(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=je.OVERWRITE}operationForChild(e){return U(this.path)?new on(this.source,$(),this.snap.getImmediateChild(e)):new on(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=je.MERGE}operationForChild(e){if(U(this.path)){const t=this.children.subtree(new K(e));return t.isEmpty()?null:t.value?new on(this.source,$(),t.value):new gi(this.source,$(),t)}else return v(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Um(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Nm(o.childName,o.snapshotNode))}),Gn(n,r,"child_removed",e,i,t),Gn(n,r,"child_added",e,i,t),Gn(n,r,"child_moved",s,i,t),Gn(n,r,"child_changed",e,i,t),Gn(n,r,"value",e,i,t),r}function Gn(n,e,t,i,r,s){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Wm(n,a,l)),o.forEach(a=>{const l=Bm(n,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Bm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Wm(n,e,t){if(e.childName==null||t.childName==null)throw Mn("Should only compare child_ events.");const i=new F(e.childName,e.snapshotNode),r=new F(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e){return{eventCache:n,serverCache:e}}function ii(n,e,t,i){return qr(new an(e,t,i),n.serverCache)}function Yu(n,e,t,i){return qr(n.eventCache,new an(e,t,i))}function Ys(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ln(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;const Vm=()=>(Ss||(Ss=new Te(Tg)),Ss);class Q{static fromObject(e){let t=new Q(null);return Re(e,(i,r)=>{t=t.set(new K(i),r)}),t}constructor(e,t=Vm()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(U(e))return null;{const i=x(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Y(e),t);return s!=null?{path:re(new K(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const t=x(e),i=this.children.get(t);return i!==null?i.subtree(Y(e)):new Q(null)}}set(e,t){if(U(e))return new Q(t,this.children);{const i=x(e),s=(this.children.get(i)||new Q(null)).set(Y(e),t),o=this.children.insert(i,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const t=x(e),i=this.children.get(t);if(i){const r=i.remove(Y(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const t=x(e),i=this.children.get(t);return i?i.get(Y(e)):null}}setTree(e,t){if(U(e))return t;{const i=x(e),s=(this.children.get(i)||new Q(null)).setTree(Y(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Q(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(re(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,$(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(U(e))return null;{const s=x(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),re(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$(),t)}foreachOnPath_(e,t,i){if(U(e))return this;{this.value&&i(t,this.value);const r=x(e),s=this.children.get(r);return s?s.foreachOnPath_(Y(e),re(t,r),i):new Q(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(re(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.writeTree_=e}static empty(){return new ze(new Q(null))}}function ri(n,e,t){if(U(e))return new ze(new Q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Se(r,e);return s=s.updateChild(o,t),new ze(n.writeTree_.set(r,s))}else{const r=new Q(t),s=n.writeTree_.setTree(e,r);return new ze(s)}}}function Tl(n,e,t){let i=n;return Re(t,(r,s)=>{i=ri(i,re(e,r),s)}),i}function kl(n,e){if(U(e))return ze.empty();{const t=n.writeTree_.setTree(e,new Q(null));return new ze(t)}}function Qs(n,e){return un(n,e)!=null}function un(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Se(t.path,e)):null}function Nl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ee,(i,r)=>{e.push(new F(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new F(i,r.value))}),e}function xt(n,e){if(U(e))return n;{const t=un(n,e);return t!=null?new ze(new Q(t)):new ze(n.writeTree_.subtree(e))}}function Js(n){return n.writeTree_.isEmpty()}function Pn(n,e){return Qu($(),n.writeTree_,e)}function Qu(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(v(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=Qu(re(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(re(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n,e){return eh(e,n)}function Hm(n,e,t,i,r){v(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=ri(n.visibleWrites,e,t)),n.lastWriteId=i}function $m(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function jm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&qm(a,i.path)?r=!1:$e(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return zm(n),!0;if(i.snap)n.visibleWrites=kl(n.visibleWrites,i.path);else{const a=i.children;Re(a,l=>{n.visibleWrites=kl(n.visibleWrites,re(i.path,l))})}return!0}else return!1}function qm(n,e){if(n.snap)return $e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$e(re(n.path,t),e))return!0;return!1}function zm(n){n.visibleWrites=Ju(n.allWrites,Gm,$()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Gm(n){return n.visible}function Ju(n,e,t){let i=ze.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let a;if(s.snap)$e(t,o)?(a=Se(t,o),i=ri(i,a,s.snap)):$e(o,t)&&(a=Se(o,t),i=ri(i,$(),s.snap.getChild(a)));else if(s.children){if($e(t,o))a=Se(t,o),i=Tl(i,a,s.children);else if($e(o,t))if(a=Se(o,t),U(a))i=Tl(i,$(),s.children);else{const l=kn(s.children,x(a));if(l){const c=l.getChild(Y(a));i=ri(i,$(),c)}}}else throw Mn("WriteRecord should have .snap or .children")}}return i}function Xu(n,e,t,i,r){if(!i&&!r){const s=un(n.visibleWrites,e);if(s!=null)return s;{const o=xt(n.visibleWrites,e);if(Js(o))return t;if(t==null&&!Qs(o,$()))return null;{const a=t||P.EMPTY_NODE;return Pn(o,a)}}}else{const s=xt(n.visibleWrites,e);if(!r&&Js(s))return t;if(!r&&t==null&&!Qs(s,$()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},a=Ju(n.allWrites,o,e),l=t||P.EMPTY_NODE;return Pn(a,l)}}}function Km(n,e,t){let i=P.EMPTY_NODE;const r=un(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ee,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=xt(n.visibleWrites,e);return t.forEachChild(ee,(o,a)=>{const l=Pn(xt(s,new K(o)),a);i=i.updateImmediateChild(o,l)}),Nl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=xt(n.visibleWrites,e);return Nl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ym(n,e,t,i,r){v(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,t);if(Qs(n.visibleWrites,s))return null;{const o=xt(n.visibleWrites,s);return Js(o)?r.getChild(t):Pn(o,r.getChild(t))}}function Qm(n,e,t,i){const r=re(e,t),s=un(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=xt(n.visibleWrites,r);return Pn(o,i.getNode().getImmediateChild(t))}else return null}function Jm(n,e){return un(n.visibleWrites,e)}function Xm(n,e,t,i,r,s,o){let a;const l=xt(n.visibleWrites,e),c=un(l,$());if(c!=null)a=c;else if(t!=null)a=Pn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<r;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Zm(){return{visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1}}function br(n,e,t,i){return Xu(n.writeTree,n.treePath,e,t,i)}function Jo(n,e){return Km(n.writeTree,n.treePath,e)}function Rl(n,e,t,i){return Ym(n.writeTree,n.treePath,e,t,i)}function Er(n,e){return Jm(n.writeTree,re(n.treePath,e))}function ev(n,e,t,i,r,s){return Xm(n.writeTree,n.treePath,e,t,i,r,s)}function Xo(n,e,t){return Qm(n.writeTree,n.treePath,e,t)}function Zu(n,e){return eh(re(n.treePath,e),n.writeTree)}function eh(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,fi(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,di(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,An(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,fi(i,e.snapshotNode,r.oldSnap));else throw Mn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const th=new nv;class Zo{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xo(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ln(this.viewCache_),s=ev(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){return{filter:n}}function rv(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sv(n,e,t,i,r){const s=new tv;let o,a;if(t.type===je.OVERWRITE){const c=t;c.source.fromUser?o=Xs(n,e,c.path,c.snap,i,r,s):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=wr(n,e,c.path,c.snap,i,r,a,s))}else if(t.type===je.MERGE){const c=t;c.source.fromUser?o=av(n,e,c.path,c.children,i,r,s):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zs(n,e,c.path,c.children,i,r,a,s))}else if(t.type===je.ACK_USER_WRITE){const c=t;c.revert?o=uv(n,e,c.path,i,r,s):o=lv(n,e,c.path,c.affectedTree,i,r,s)}else if(t.type===je.LISTEN_COMPLETE)o=cv(n,e,t.path,i,s);else throw Mn("Unknown operation type: "+t.type);const l=s.getChanges();return ov(e,o,l),{viewCache:o,changes:l}}function ov(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ys(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(zu(Ys(e)))}}function nh(n,e,t,i,r,s){const o=e.eventCache;if(Er(i,t)!=null)return e;{let a,l;if(U(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ln(e),u=c instanceof P?c:P.EMPTY_NODE,h=Jo(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=br(i,ln(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=x(t);if(c===".priority"){v(Wt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Rl(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Y(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Rl(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Xo(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return ii(e,a,o.isFullyInitialized()||U(t),n.filter.filtersNodes())}}function wr(n,e,t,i,r,s,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(U(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=x(t);if(!l.isCompleteForPath(t)&&Wt(t)>1)return e;const _=Y(t),y=l.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,_,th,null)}const h=Yu(e,c,l.isFullyInitialized()||U(t),u.filtersNodes()),d=new Zo(r,h,s);return nh(n,h,t,r,d,a)}function Xs(n,e,t,i,r,s,o){const a=e.eventCache;let l,c;const u=new Zo(r,e,s);if(U(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ii(e,c,!0,n.filter.filtersNodes());else{const h=x(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=ii(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Y(t),f=a.getNode().getImmediateChild(h);let _;if(U(d))_=i;else{const g=u.getCompleteChild(h);g!=null?Fu(d)===".priority"&&g.getChild(Bu(d)).isEmpty()?_=g:_=g.updateChild(d,i):_=P.EMPTY_NODE}if(f.equals(_))l=e;else{const g=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=ii(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Al(n,e){return n.eventCache.isCompleteForChild(e)}function av(n,e,t,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=re(t,l);Al(e,x(u))&&(a=Xs(n,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=re(t,l);Al(e,x(u))||(a=Xs(n,a,u,c,r,s,o))}),a}function Pl(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Zs(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(t)?c=i:c=new Q(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=Pl(n,f,d);l=wr(n,l,new K(h),_,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),g=Pl(n,_,d);l=wr(n,l,new K(h),g,r,s,o,a)}}),l}function lv(n,e,t,i,r,s,o){if(Er(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(U(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return wr(n,e,t,l.getNode().getChild(t),r,s,a,o);if(U(t)){let c=new Q(null);return l.getNode().forEachChild(yn,(u,h)=>{c=c.set(new K(u),h)}),Zs(n,e,t,c,r,s,a,o)}else return e}else{let c=new Q(null);return i.foreach((u,h)=>{const d=re(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Zs(n,e,t,c,r,s,a,o)}}function cv(n,e,t,i,r){const s=e.serverCache,o=Yu(e,s.getNode(),s.isFullyInitialized()||U(t),s.isFiltered());return nh(n,o,t,i,th,r)}function uv(n,e,t,i,r,s){let o;if(Er(i,t)!=null)return e;{const a=new Zo(i,e,r),l=e.eventCache.getNode();let c;if(U(t)||x(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=br(i,ln(e));else{const h=e.serverCache.getNode();v(h instanceof P,"serverChildren would be complete if leaf node"),u=Jo(i,h)}u=u,c=n.filter.updateFullNode(l,u,s)}else{const u=x(t);let h=Xo(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,Y(t),a,s):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,P.EMPTY_NODE,Y(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=br(i,ln(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Er(i,$())!=null,ii(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new zo(i.getIndex()),s=Am(i);this.processor_=iv(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(P.EMPTY_NODE,a.getNode(),null),u=new an(l,o.isFullyInitialized(),r.filtersNodes()),h=new an(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qr(h,u),this.eventGenerator_=new Fm(this.query_)}get query(){return this.query_}}function dv(n){return n.viewCache_.serverCache.getNode()}function fv(n,e){const t=ln(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!U(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function Ol(n){return n.eventRegistrations_.length===0}function _v(n,e){n.eventRegistrations_.push(e)}function Dl(n,e,t){const i=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Ml(n,e,t,i){e.type===je.MERGE&&e.source.queryId!==null&&(v(ln(n.viewCache_),"We should always have a full cache before handling merges"),v(Ys(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=sv(n.processor_,r,e,t,i);return rv(n.processor_,s.viewCache),v(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,ih(n,s.changes,s.viewCache.eventCache.getNode(),null)}function pv(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ee,(s,o)=>{i.push(An(s,o))}),t.isFullyInitialized()&&i.push(zu(t.getNode())),ih(n,i,t.getNode(),e)}function ih(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return Um(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir;class gv{constructor(){this.views=new Map}}function mv(n){v(!Ir,"__referenceConstructor has already been defined"),Ir=n}function vv(){return v(Ir,"Reference.ts has not been loaded"),Ir}function yv(n){return n.views.size===0}function ea(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return v(s!=null,"SyncTree gave us an op for an invalid query."),Ml(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Ml(o,e,t,i));return s}}function bv(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=br(t,r?i:null),l=!1;a?l=!0:i instanceof P?(a=Jo(t,i),l=!1):(a=P.EMPTY_NODE,l=!1);const c=qr(new an(a,l,!1),new an(i,r,!1));return new hv(e,c)}return o}function Ev(n,e,t,i,r,s){const o=bv(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),_v(o,t),pv(o,t)}function wv(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const a=Vt(n);if(r==="default")for(const[l,c]of n.views.entries())o=o.concat(Dl(c,t,i)),Ol(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=n.views.get(r);l&&(o=o.concat(Dl(l,t,i)),Ol(l)&&(n.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Vt(n)&&s.push(new(vv())(e._repo,e._path)),{removed:s,events:o}}function rh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function bn(n,e){let t=null;for(const i of n.views.values())t=t||fv(i,e);return t}function sh(n,e){if(e._queryParams.loadsAllData())return zr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function oh(n,e){return sh(n,e)!=null}function Vt(n){return zr(n)!=null}function zr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;function Iv(n){v(!Cr,"__referenceConstructor has already been defined"),Cr=n}function Cv(){return v(Cr,"Reference.ts has not been loaded"),Cr}let Sv=1;class Ll{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=Zm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ah(n,e,t,i,r){return Hm(n.pendingWriteTree_,e,t,i,r),r?Ri(n,new on(Ku(),e,t)):[]}function Xt(n,e,t=!1){const i=$m(n.pendingWriteTree_,e);if(jm(n.pendingWriteTree_,e)){let s=new Q(null);return i.snap!=null?s=s.set($(),!0):Re(i.children,o=>{s=s.set(new K(o),!0)}),Ri(n,new yr(i.path,s,t))}else return[]}function Gr(n,e,t){return Ri(n,new on(Ko(),e,t))}function Tv(n,e,t){const i=Q.fromObject(t);return Ri(n,new gi(Ko(),e,i))}function kv(n,e){return Ri(n,new pi(Ko(),e))}function Nv(n,e,t){const i=na(n,t);if(i){const r=ia(i),s=r.path,o=r.queryId,a=Se(s,e),l=new pi(Yo(o),a);return ra(n,s,l)}else return[]}function eo(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||oh(o,e))){const l=wv(o,e,t,i);yv(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(d,f)=>Vt(f));if(u&&!h){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=Pv(d);for(let _=0;_<f.length;++_){const g=f[_],y=g.query,b=uh(n,g);n.listenProvider_.startListening(si(y),Sr(n,y),b.hashFn,b.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(si(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Kr(d));n.listenProvider_.stopListening(si(d),f)}))}Ov(n,c)}return a}function Rv(n,e,t,i){const r=na(n,i);if(r!=null){const s=ia(r),o=s.path,a=s.queryId,l=Se(o,e),c=new on(Yo(a),l,t);return ra(n,o,c)}else return[]}function Av(n,e,t,i){const r=na(n,i);if(r){const s=ia(r),o=s.path,a=s.queryId,l=Se(o,e),c=Q.fromObject(t),u=new gi(Yo(a),l,c);return ra(n,o,u)}else return[]}function xl(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(d,f)=>{const _=Se(d,r);s=s||bn(f,_),o=o||Vt(f)});let a=n.syncPointTree_.get(r);a?(o=o||Vt(a),s=s||bn(a,$())):(a=new gv,n.syncPointTree_=n.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=P.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((f,_)=>{const g=bn(_,$());g&&(s=s.updateImmediateChild(f,g))}));const c=oh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Kr(e);v(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Dv();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Qo(n.pendingWriteTree_,r);let h=Ev(a,e,t,u,s,l);if(!c&&!o&&!i){const d=sh(a,e);h=h.concat(Mv(n,e,d))}return h}function ta(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Se(o,e),c=bn(a,l);if(c)return c});return Xu(r,e,s,t,!0)}function Ri(n,e){return lh(e,n.syncPointTree_,null,Qo(n.pendingWriteTree_,$()))}function lh(n,e,t,i){if(U(n.path))return ch(n,e,t,i);{const r=e.get($());t==null&&r!=null&&(t=bn(r,$()));let s=[];const o=x(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Zu(i,o);s=s.concat(lh(a,l,c,u))}return r&&(s=s.concat(ea(r,n,i,t))),s}}function ch(n,e,t,i){const r=e.get($());t==null&&r!=null&&(t=bn(r,$()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Zu(i,o),u=n.operationForChild(o);u&&(s=s.concat(ch(u,a,l,c)))}),r&&(s=s.concat(ea(r,n,i,t))),s}function uh(n,e){const t=e.query,i=Sr(n,t);return{hashFn:()=>(dv(e)||P.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Nv(n,t._path,i):kv(n,t._path);{const s=Rg(r,t);return eo(n,t,null,s)}}}}function Sr(n,e){const t=Kr(e);return n.queryToTagMap.get(t)}function Kr(n){return n._path.toString()+"$"+n._queryIdentifier}function na(n,e){return n.tagToQueryMap.get(e)}function ia(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new K(n.substr(0,e))}}function ra(n,e,t){const i=n.syncPointTree_.get(e);v(i,"Missing sync point for query tag that we're tracking");const r=Qo(n.pendingWriteTree_,e);return ea(i,t,r,null)}function Pv(n){return n.fold((e,t,i)=>{if(t&&Vt(t))return[zr(t)];{let r=[];return t&&(r=rh(t)),Re(i,(s,o)=>{r=r.concat(o)}),r}})}function si(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Cv())(n._repo,n._path):n}function Ov(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=Kr(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function Dv(){return Sv++}function Mv(n,e,t){const i=e._path,r=Sr(n,e),s=uh(n,t),o=n.listenProvider_.startListening(si(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)v(!Vt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!U(c)&&u&&Vt(u))return[zr(u).query];{let d=[];return u&&(d=d.concat(rh(u).map(f=>f.query))),Re(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(si(u),Sr(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sa(t)}node(){return this.node_}}class oa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=re(this.path_,e);return new oa(this.syncTree_,t)}node(){return ta(this.syncTree_,this.path_)}}const Lv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fl=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Fv(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},Fv=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&v(!1,"Unexpected increment value: "+i);const r=e.node();if(v(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Uv=function(n,e,t,i){return aa(e,new oa(t,n),i)},hh=function(n,e,t){return aa(n,new sa(e),t)};function aa(n,e,t){const i=n.getPriority().val(),r=Fl(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Fl(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new oe(a,de(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new oe(r))),o.forEachChild(ee,(a,l)=>{const c=aa(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ca(n,e){let t=e instanceof K?e:new K(e),i=n,r=x(t);for(;r!==null;){const s=kn(i.node.children,r)||{children:{},childCount:0};i=new la(r,i,s),t=Y(t),r=x(t)}return i}function Bn(n){return n.node.value}function dh(n,e){n.node.value=e,to(n)}function fh(n){return n.node.childCount>0}function Bv(n){return Bn(n)===void 0&&!fh(n)}function Yr(n,e){Re(n.node.children,(t,i)=>{e(new la(t,n,i))})}function _h(n,e,t,i){t&&e(n),Yr(n,r=>{_h(r,e,!0)})}function Wv(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ai(n){return new K(n.parent===null?n.name:Ai(n.parent)+"/"+n.name)}function to(n){n.parent!==null&&Vv(n.parent,n.name,n)}function Vv(n,e,t){const i=Bv(t),r=It(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,to(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,to(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=/[\[\].#$\/\u0000-\u001F\u007F]/,$v=/[\[\].#$\u0000-\u001F\u007F]/,Ts=10*1024*1024,ph=function(n){return typeof n=="string"&&n.length!==0&&!Hv.test(n)},gh=function(n){return typeof n=="string"&&n.length!==0&&!$v.test(n)},jv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gh(n)},qv=function(n,e,t,i){ua(Lo(n,"value"),e,t)},ua=function(n,e,t){const i=t instanceof K?new lm(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Gt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Gt(i)+" with contents = "+e.toString());if(gu(e))throw new Error(n+"contains "+e.toString()+" "+Gt(i));if(typeof e=="string"&&e.length>Ts/3&&$r(e)>Ts)throw new Error(n+"contains a string greater than "+Ts+" utf8 bytes "+Gt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Re(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ph(o)))throw new Error(n+" contains an invalid key ("+o+") "+Gt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cm(i,o),ua(n,a,i),um(i)}),r&&s)throw new Error(n+' contains ".value" child '+Gt(i)+" in addition to actual children.")}},mh=function(n,e,t,i){if(!gh(t))throw new Error(Lo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zv=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mh(n,e,t)},Gv=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Kv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!jv(t))throw new Error(Lo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ha(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!$o(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function vh(n,e,t){ha(n,t),yh(n,i=>$o(i,e))}function yt(n,e,t){ha(n,t),yh(n,i=>$e(i,e)||$e(e,i))}function yh(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(Qv(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Qv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ti&&pe("event: "+t.toString()),Un(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="repo_interrupt",Xv=25;class Zv{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vr(),this.transactionQueueTree_=new la,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ey(n,e,t){if(n.stats_=Vo(n.repoInfo_),n.forceRestClient_||Dg())n.server_=new mr(n.repoInfo_,(i,r,s,o)=>{Ul(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Bl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new dt(n.repoInfo_,e,(i,r,s,o)=>{Ul(n,i,r,s,o)},i=>{Bl(n,i)},i=>{ny(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ug(n.repoInfo_,()=>new xm(n.stats_,n.server_)),n.infoData_=new Pm,n.infoSyncTree_=new Ll({startListening:(i,r,s,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Gr(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fa(n,"connected",!1),n.serverSyncTree_=new Ll({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);yt(n.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function ty(n){const t=n.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function da(n){return Lv({timestamp:ty(n)})}function Ul(n,e,t,i,r){n.dataUpdateCount++;const s=new K(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const l=hr(t,c=>de(c));o=Av(n.serverSyncTree_,s,l,r)}else{const l=de(t);o=Rv(n.serverSyncTree_,s,l,r)}else if(i){const l=hr(t,c=>de(c));o=Tv(n.serverSyncTree_,s,l)}else{const l=de(t);o=Gr(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Qr(n,s)),yt(n.eventQueue_,a,o)}function Bl(n,e){fa(n,"connected",e),e===!1&&ry(n)}function ny(n,e){Re(e,(t,i)=>{fa(n,t,i)})}function fa(n,e,t){const i=new K("/.info/"+e),r=de(t);n.infoData_.updateSnapshot(i,r);const s=Gr(n.infoSyncTree_,i,r);yt(n.eventQueue_,i,s)}function bh(n){return n.nextWriteId_++}function iy(n,e,t,i,r){_a(n,"set",{path:e.toString(),value:t,priority:i});const s=da(n),o=de(t,i),a=ta(n.serverSyncTree_,e),l=hh(o,a,s),c=bh(n),u=ah(n.serverSyncTree_,e,l,c,!0);ha(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||ke("set at "+e+" failed: "+d);const g=Xt(n.serverSyncTree_,c,!_);yt(n.eventQueue_,e,g),ly(n,r,d,f)});const h=Sh(n,e);Qr(n,h),yt(n.eventQueue_,h,[])}function ry(n){_a(n,"onDisconnectEvents");const e=da(n),t=vr();Ks(n.onDisconnect_,$(),(r,s)=>{const o=Uv(r,s,n.serverSyncTree_,e);Gu(t,r,o)});let i=[];Ks(t,$(),(r,s)=>{i=i.concat(Gr(n.serverSyncTree_,r,s));const o=Sh(n,r);Qr(n,o)}),n.onDisconnect_=vr(),yt(n.eventQueue_,$(),i)}function sy(n,e,t){let i;x(e._path)===".info"?i=xl(n.infoSyncTree_,e,t):i=xl(n.serverSyncTree_,e,t),vh(n.eventQueue_,e._path,i)}function oy(n,e,t){let i;x(e._path)===".info"?i=eo(n.infoSyncTree_,e,t):i=eo(n.serverSyncTree_,e,t),vh(n.eventQueue_,e._path,i)}function ay(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Jv)}function _a(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pe(t,...e)}function ly(n,e,t,i){e&&Un(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Eh(n,e,t){return ta(n.serverSyncTree_,e,t)||P.EMPTY_NODE}function pa(n,e=n.transactionQueueTree_){if(e||Jr(n,e),Bn(e)){const t=Ih(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&cy(n,Ai(e),t)}else fh(e)&&Yr(e,t=>{pa(n,t)})}function cy(n,e,t){const i=t.map(c=>c.currentWriteId),r=Eh(n,e,i);let s=r;const o=r.hash();for(let c=0;c<t.length;c++){const u=t[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Se(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,c=>{_a(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Xt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Jr(n,ca(n.transactionQueueTree_,e)),pa(n,n.transactionQueueTree_),yt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Un(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Qr(n,e)}},o)}function Qr(n,e){const t=wh(n,e),i=Ai(t),r=Ih(n,t);return uy(n,r,i),i}function uy(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Se(t,l.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Xt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Xv)u=!0,h="maxretry",r=r.concat(Xt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Eh(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ua("transaction failed: Data returned ",f,l.path);let _=de(f);typeof f=="object"&&f!=null&&It(f,".priority")||(_=_.updatePriority(d.getPriority()));const y=l.currentWriteId,b=da(n),E=hh(_,d,b);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=E,l.currentWriteId=bh(n),o.splice(o.indexOf(y),1),r=r.concat(ah(n.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(Xt(n.serverSyncTree_,y,!0))}else u=!0,h="nodata",r=r.concat(Xt(n.serverSyncTree_,l.currentWriteId,!0))}yt(n.eventQueue_,t,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Jr(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Un(i[a]);pa(n,n.transactionQueueTree_)}function wh(n,e){let t,i=n.transactionQueueTree_;for(t=x(e);t!==null&&Bn(i)===void 0;)i=ca(i,t),e=Y(e),t=x(e);return i}function Ih(n,e){const t=[];return Ch(n,e,t),t.sort((i,r)=>i.order-r.order),t}function Ch(n,e,t){const i=Bn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);Yr(e,r=>{Ch(n,r,t)})}function Jr(n,e){const t=Bn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,dh(e,t.length>0?t:void 0)}Yr(e,i=>{Jr(n,i)})}function Sh(n,e){const t=Ai(wh(n,e)),i=ca(n.transactionQueueTree_,e);return Wv(i,r=>{ks(n,r)}),ks(n,i),_h(i,r=>{ks(n,r)}),t}function ks(n,e){const t=Bn(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Xt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dh(e,void 0):t.length=s+1,yt(n.eventQueue_,Ai(e),r);for(let o=0;o<i.length;o++)Un(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function dy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ke(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wl=function(n,e){const t=fy(n),i=t.namespace;t.domain==="firebase.com"&&vt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Cg();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Nu(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new K(t.pathString)}},fy=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(r=hy(n.substring(u,h)));const d=dy(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class py{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return U(this._path)?null:Fu(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=Cl(this._queryParams),t=Bo(e);return t==="{}"?"default":t}get _queryObject(){return Cl(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof ga))return!1;const t=this._repo===e._repo,i=$o(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+am(this._path)}}class jt extends ga{constructor(e,t){super(e,t,new Go,!1)}get parent(){const e=Bu(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Tr{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new K(e),i=no(this.ref,e);return new Tr(this._node.getChild(t),i,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Tr(r,no(this.ref,i),ee)))}hasChild(e){const t=new K(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ye(n,e){return n=Le(n),n._checkNotDeleted("ref"),e!==void 0?no(n._root,e):n._root}function no(n,e){return n=Le(n),x(n._path)===null?zv("child","path",e):mh("child","path",e),new jt(n._repo,re(n._path,e))}function et(n,e){n=Le(n),Gv("set",n._path),qv("set",e,n._path);const t=new Hr;return iy(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ma{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new _y("value",this,new Tr(e.snapshotNode,new jt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new py(this,e,t):null}matches(e){return e instanceof ma?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function my(n,e,t,i,r){const s=new gy(t,void 0),o=new ma(s);return sy(n._repo,n,o),()=>oy(n._repo,n,o)}function Xr(n,e,t,i){return my(n,"value",e)}mv(jt);Iv(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="FIREBASE_DATABASE_EMULATOR_HOST",io={};let yy=!1;function by(n,e,t,i){n.repoInfo_=new Nu(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Ey(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pe("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wl(s,r),a=o.repoInfo,l;typeof process<"u"&&ol&&(l=ol[vy]),l?(s=`http://${l}?ns=${a.namespace}`,o=Wl(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new Lg(n.name,n.options,e);Kv("Invalid Firebase Database URL",o),U(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Iy(a,n,c,new Mg(n,t));return new Cy(u,n)}function wy(n,e){const t=io[e];(!t||t[n.key]!==n)&&vt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ay(n),delete t[n.key]}function Iy(n,e,t,i){let r=io[e.name];r||(r={},io[e.name]=r);let s=r[n.toURLString()];return s&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zv(n,yy,t,i),r[n.toURLString()]=s,s}class Cy{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ey(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}function Sy(n=uu(),e){const t=Uo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=j_("database");i&&Ty(t,...i)}return t}function Ty(n,e,t,i={}){n=Le(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&vt("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Yi(Yi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:q_(i.mockUserToken,n.app.options.projectId);s=new Yi(o)}by(r,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n){vg(xn),Nn(new rn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ey(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),Lt(al,ll,n),Lt(al,ll,"esm2017")}dt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};dt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ky();function va(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Th(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ny=Th,kh=new Si("auth","Firebase",Th());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new xo("@firebase/auth");function Ry(n,...e){kr.logLevel<=j.WARN&&kr.warn(`Auth (${xn}): ${n}`,...e)}function Qi(n,...e){kr.logLevel<=j.ERROR&&kr.error(`Auth (${xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,...e){throw ya(n,...e)}function Xe(n,...e){return ya(n,...e)}function Nh(n,e,t){const i=Object.assign(Object.assign({},Ny()),{[e]:t});return new Si("auth","Firebase",i).create(e,{appName:n.name})}function Ft(n){return Nh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ya(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return kh.create(n,...e)}function A(n,e,...t){if(!n)throw ya(e,...t)}function lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qi(e),new Error(e)}function bt(n,e){n||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ay(){return Vl()==="http:"||Vl()==="https:"}function Vl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ay()||G_()||"connection"in navigator)?navigator.onLine:!0}function Oy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,bt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mo()||su()}get(){return Py()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e){bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new Pi(3e4,6e4);function hn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qt(n,e,t,i,r={}){return Ah(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ln(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},s);return z_()||(c.referrerPolicy="no-referrer"),Rh.fetch()(Ph(n,n.config.apiHost,t,a),c)})}async function Ah(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Dy),e);try{const r=new xy(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wi(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Nh(n,u,c);Ke(n,u)}}catch(r){if(r instanceof $t)throw r;Ke(n,"network-request-failed",{message:String(r)})}}async function Zr(n,e,t,i,r={}){const s=await qt(n,e,t,i,r);return"mfaPendingCredential"in s&&Ke(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ph(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?ba(n.config,r):`${n.config.apiScheme}://${r}`}function Ly(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xe(this.auth,"network-request-failed")),My.get())})}}function Wi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Xe(n,e,i);return r.customData._tokenResponse=t,r}function Hl(n){return n!==void 0&&n.enterprise!==void 0}class Fy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ly(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uy(n,e){return qt(n,"GET","/v2/recaptchaConfig",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function Oh(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wy(n,e=!1){const t=Le(n),i=await t.getIdToken(e),r=Ea(i);A(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:oi(Ns(r.auth_time)),issuedAtTime:oi(Ns(r.iat)),expirationTime:oi(Ns(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ns(n){return Number(n)*1e3}function Ea(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qi("JWT malformed, contained fewer than 3 sections"),null;try{const r=ur(t);return r?JSON.parse(r):(Qi("Failed to decode base64 JWT payload"),null)}catch(r){return Qi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function $l(n){const e=Ea(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof $t&&Vy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Vy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(n){var e;const t=n.auth,i=await n.getIdToken(),r=await mi(n,Oh(t,{idToken:i}));A(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dh(s.providerUserInfo):[],a=jy(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new so(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function $y(n){const e=Le(n);await Nr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jy(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Dh(n){return n.map(e=>{var{providerId:t}=e,i=va(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(n,e){const t=await Ah(n,{},async()=>{const i=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Ph(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zy(n,e){return qt(n,"POST","/v2/accounts:revokeToken",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){A(e.length!==0,"internal-error");const t=$l(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await qy(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new En;return i&&(A(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(A(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=va(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new so(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mi(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wy(this,e)}reload(){return $y(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Nr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await mi(this,By(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=t.createdAt)!==null&&c!==void 0?c:void 0,E=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:O,isAnonymous:C,providerData:S,stsTokenManager:D}=t;A(T&&D,e,"internal-error");const L=En.fromJSON(this.name,D);A(typeof T=="string",e,"internal-error"),St(h,e.name),St(d,e.name),A(typeof O=="boolean",e,"internal-error"),A(typeof C=="boolean",e,"internal-error"),St(f,e.name),St(_,e.name),St(g,e.name),St(y,e.name),St(b,e.name),St(E,e.name);const B=new ct({uid:T,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:C,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:L,createdAt:b,lastLoginAt:E});return S&&Array.isArray(S)&&(B.providerData=S.map(k=>Object.assign({},k))),y&&(B._redirectEventId=y),B}static async _fromIdTokenResponse(e,t,i=!1){const r=new En;r.updateFromServerResponse(t);const s=new ct({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Nr(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];A(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Dh(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new En;a.updateFromIdToken(i);const l=new ct({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new so(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;function ut(n){bt(n instanceof Function,"Expected a class definition");let e=jl.get(n);return e?(bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mh.type="NONE";const ql=Mh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e,t){return`firebase:${n}:${e}:${t}`}class wn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ji(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ji("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new wn(ut(ql),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||ut(ql);const o=Ji(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=ct._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new wn(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new wn(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wh(e))return"Blackberry";if(Vh(e))return"Webos";if(xh(e))return"Safari";if((e.includes("chrome/")||Fh(e))&&!e.includes("edge/"))return"Chrome";if(Bh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Lh(n=be()){return/firefox\//i.test(n)}function xh(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fh(n=be()){return/crios\//i.test(n)}function Uh(n=be()){return/iemobile/i.test(n)}function Bh(n=be()){return/android/i.test(n)}function Wh(n=be()){return/blackberry/i.test(n)}function Vh(n=be()){return/webos/i.test(n)}function wa(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gy(n=be()){var e;return wa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ky(){return K_()&&document.documentMode===10}function Hh(n=be()){return wa(n)||Bh(n)||Vh(n)||Wh(n)||/windows phone/i.test(n)||Uh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n,e=[]){let t;switch(n){case"Browser":t=zl(be());break;case"Worker":t=`${zl(be())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e={}){return qt(n,"GET","/v2/passwordPolicy",hn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=6;class Xy{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Jy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gl(this),this.idTokenSubscription=new Gl(this),this.beforeStateQueue=new Yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oh(this,{idToken:e}),i=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Ft(this));const t=e?Le(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qy(this),t=new Xy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$h(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ry(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wn(n){return Le(n)}class Gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=rp(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eb(n){es=n}function jh(n){return es.loadJS(n)}function tb(){return es.recaptchaEnterpriseScript}function nb(){return es.gapiScript}function ib(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class rb{constructor(){this.enterprise=new sb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ob="recaptcha-enterprise",qh="NO_RECAPTCHA";class ab{constructor(e){this.type=ob,this.auth=Wn(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Uy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fy(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Hl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&Hl(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tb();l.length!==0&&(l+=a),jh(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Kl(n,e,t,i=!1,r=!1){const s=new ab(n);let o;if(r)o=qh;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yl(n,e,t,i,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kl(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kl(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n,e){const t=Uo(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(dr(s,e??{}))return r;Ke(r,"already-initialized")}return t.initialize({options:e})}function cb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ut);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ub(n,e,t){const i=Wn(n);A(i._canInitEmulator,i,"emulator-config-failed"),A(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=zh(e),{host:o,port:a}=hb(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),db()}function zh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hb(n){const e=zh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ql(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ql(o)}}}function Ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function db(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function fb(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(n,e){return Zr(n,"POST","/v1/accounts:signInWithPassword",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(n,e){return Zr(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}async function gb(n,e){return Zr(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Ia{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new vi(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,t,"signInWithPassword",_b);case"emailLink":return pb(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,i,"signUpPassword",fb);case"emailLink":return gb(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n,e){return Zr(n,"POST","/v1/accounts:signInWithIdp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="http://localhost";class cn extends Ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=va(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new cn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return In(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,In(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:mb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ln(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yb(n){const e=Yn(Qn(n)).link,t=e?Yn(Qn(e)).deep_link_id:null,i=Yn(Qn(n)).deep_link_id;return(i?Yn(Qn(i)).link:null)||i||t||e||n}class Ca{constructor(e){var t,i,r,s,o,a;const l=Yn(Qn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=vb((r=l.mode)!==null&&r!==void 0?r:null);A(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=yb(e);try{return new Ca(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ca.parseLink(t);return A(i,"argument-error"),vi._fromEmailAndCode(e,i.code,i.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Oi{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Rt.credential(t,i)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Oi{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Oi{constructor(){super("twitter.com")}static credential(e,t){return cn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pt.credential(t,i)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await ct._fromIdTokenResponse(e,i,r),o=Jl(i);return new On({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Jl(i);return new On({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Jl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends $t{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Rr(e,t,i,r)}}function Kh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(n,s,e,i):s})}async function bb(n,e,t=!1){const i=await mi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return On._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(n,e,t=!1){const{auth:i}=n;if(Ve(i.app))return Promise.reject(Ft(i));const r="reauthenticate";try{const s=await mi(n,Kh(i,r,e,n),t);A(s.idToken,i,"internal-error");const o=Ea(s.idToken);A(o,i,"internal-error");const{sub:a}=o;return A(n.uid===a,i,"user-mismatch"),On._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ke(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(n,e,t=!1){if(Ve(n.app))return Promise.reject(Ft(n));const i="signIn",r=await Kh(n,i,e),s=await On._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function wb(n,e){return Yh(Wn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(n){const e=Wn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Cb(n,e,t){return Ve(n.app)?Promise.reject(Ft(n)):wb(Le(n),Vn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ib(n),i})}function Sb(n,e,t,i){return Le(n).onIdTokenChanged(e,t,i)}function Tb(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function kb(n){return Le(n).signOut()}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1e3,Rb=10;class Jh extends Qh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Ky()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rb):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jh.type="LOCAL";const Ab=Jh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends Qh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xh.type="SESSION";const Zh=Xh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new ts(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await Pb(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Sa("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function Db(n){Ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xb(){return ed()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="firebaseLocalStorageDb",Fb=1,Pr="firebaseLocalStorage",nd="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ns(n,e){return n.transaction([Pr],e?"readwrite":"readonly").objectStore(Pr)}function Ub(){const n=indexedDB.deleteDatabase(td);return new Di(n).toPromise()}function oo(){const n=indexedDB.open(td,Fb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pr,{keyPath:nd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pr)?e(i):(i.close(),await Ub(),e(await oo()))})})}async function Xl(n,e,t){const i=ns(n,!0).put({[nd]:e,value:t});return new Di(i).toPromise()}async function Bb(n,e){const t=ns(n,!1).get(e),i=await new Di(t).toPromise();return i===void 0?null:i.value}function Zl(n,e){const t=ns(n,!0).delete(e);return new Di(t).toPromise()}const Wb=800,Vb=3;class id{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Vb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ed()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(xb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mb(),!this.activeServiceWorker)return;this.sender=new Ob(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await Xl(e,Ar,"1"),await Zl(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Xl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Bb(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ns(r,!1).getAll();return new Di(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}id.type="LOCAL";const Hb=id;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n,e){return e?ut(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jb(n){return Yh(n.auth,new Ta(n),n.bypassAuthState)}function qb(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),Eb(t,new Ta(n),n.bypassAuthState)}async function zb(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),bb(t,new Ta(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jb;case"linkViaPopup":case"linkViaRedirect":return zb;case"reauthViaPopup":case"reauthViaRedirect":return qb;default:Ke(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Pi(2e3,1e4);class mn extends rd{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gb.get())};e()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="pendingRedirect",Xi=new Map;class Yb extends rd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Xi.get(this.auth._key());if(!e){try{const i=await Qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xi.set(this.auth._key(),e)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qb(n,e){const t=Zb(e),i=Xb(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Jb(n,e){Xi.set(n._key(),e)}function Xb(n){return ut(n._redirectPersistence)}function Zb(n){return Ji(Kb,n.config.apiKey,n.name)}async function eE(n,e,t=!1){if(Ve(n.app))return Promise.reject(Ft(n));const i=Wn(n),r=$b(i,e),o=await new Yb(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=10*60*1e3;class nE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!sd(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ec(e))}saveEventToCache(e){this.cachedEventUids.add(ec(e)),this.lastProcessedEventTime=Date.now()}}function ec(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oE=/^https?/;async function aE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rE(n);for(const t of e)try{if(lE(t))return}catch{}Ke(n,"unauthorized-domain")}function lE(n){const e=ro(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!oE.test(t))return!1;if(sE.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new Pi(3e4,6e4);function tc(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function uE(n){return new Promise((e,t)=>{var i,r,s;function o(){tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tc(),t(Xe(n,"network-request-failed"))},timeout:cE.get()})}if(!((r=(i=Ze().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)o();else{const a=ib("iframefcb");return Ze()[a]=()=>{gapi.load?o():t(Xe(n,"network-request-failed"))},jh(`${nb()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function hE(n){return Zi=Zi||uE(n),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Pi(5e3,15e3),fE="__/auth/iframe",_E="emulator/auth/iframe",pE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mE(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ba(e,_E):`https://${n.config.authDomain}/${fE}`,i={apiKey:e.apiKey,appName:n.name,v:xn},r=gE.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Ln(i).slice(1)}`}async function vE(n){const e=await hE(n),t=Ze().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:mE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pE,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),a=Ze().setTimeout(()=>{s(o)},dE.get());function l(){Ze().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bE=500,EE=600,wE="_blank",IE="http://localhost";class nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CE(n,e,t,i=bE,r=EE){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yE),{width:i.toString(),height:r.toString(),top:s,left:o}),c=be().toLowerCase();t&&(a=Fh(c)?wE:t),Lh(c)&&(e=e||IE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(Gy(c)&&a!=="_self")return SE(e||"",a),new nc(null);const h=window.open(e||"",a,u);A(h,n,"popup-blocked");try{h.focus()}catch{}return new nc(h)}function SE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="__/auth/handler",kE="emulator/auth/handler",NE=encodeURIComponent("fac");async function ic(n,e,t,i,r,s){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xn,eventId:r};if(e instanceof Gh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Bs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Oi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${NE}=${encodeURIComponent(l)}`:"";return`${RE(n)}?${Ln(a).slice(1)}${c}`}function RE({config:n}){return n.emulator?ba(n,kE):`https://${n.authDomain}/${TE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="webStorageSupport";class AE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zh,this._completeRedirectFn=eE,this._overrideRedirectResult=Jb}async _openPopup(e,t,i,r){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ic(e,t,i,ro(),r);return CE(e,o,Sa())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await ic(e,t,i,ro(),r);return Db(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(bt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await vE(e),i=new nE(e);return t.register("authEvent",r=>(A(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rs,{type:Rs},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Rs];o!==void 0&&t(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hh()||xh()||wa()}}const PE=AE;var rc="@firebase/auth",sc="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ME(n){Nn(new rn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$h(n)},c=new Zy(i,r,s,l);return cb(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Nn(new rn("auth-internal",e=>{const t=Wn(e.getProvider("auth").getImmediate());return(i=>new OE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(rc,sc,DE(n)),Lt(rc,sc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=5*60,xE=ru("authIdTokenMaxAge")||LE;let oc=null;const FE=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>xE)return;const r=t==null?void 0:t.token;oc!==r&&(oc=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function UE(n=uu()){const e=Uo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lb(n,{popupRedirectResolver:PE,persistence:[Hb,Ab,Zh]}),i=ru("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=FE(s.toString());Tb(t,o,()=>o(t.currentUser)),Sb(t,a=>o(a))}}const r=nu("auth");return r&&ub(t,`http://${r}`),t}function BE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}eb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Xe("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",BE().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ME("Browser");let qe=Ce({connected:!1,signedIn:!1});const WE=JSON.parse(atob("eyJhcGlLZXkiOiJBSXphU3lEdlo1VXFsZmg5ZTI2NUN6Sms0OFBGSmhyS0V1alQ5NzAiLCJhdXRoRG9tYWluIjoicXVpY2tzY291dC1kNGQxYS5maXJlYmFzZWFwcC5jb20iLCJkYXRhYmFzZVVSTCI6Imh0dHBzOi8vcXVpY2tzY291dC1kNGQxYS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20iLCJwcm9qZWN0SWQiOiJxdWlja3Njb3V0LWQ0ZDFhIiwic3RvcmFnZUJ1Y2tldCI6InF1aWNrc2NvdXQtZDRkMWEuZmlyZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2luZ1NlbmRlcklkIjoiODI0MDY5ODk2OTkwIiwiYXBwSWQiOiIxOjgyNDA2OTg5Njk5MDp3ZWI6YjE1Y2ZiZjBjOTFhYzIxMTFiYTcwZiJ9")),od=cu(WE),ac=UE(od),Qe=Sy(od),VE=Ye(Qe,".info/connected");Xr(VE,n=>{n.val()===!0?(console.log("connected"),qe.connected=!0):(console.log("not connected"),qe.connected=!1)});let As=!1,Ps=null;async function ad(){if(J.scouterID.length>2&&!As){As=!0,console.log("trying to sign in"),await kb(ac);try{await Cb(ac,J.email,J.password),console.log("signed in"),qe.signedIn=!0,Ps!=null&&clearInterval(Ps),Ps=setInterval(()=>{qe.connected&&qE()},5e3)}catch(n){console.log("can't sign in",n),qe.signedIn=!1}As=!1}}let w=Ce({connected:{},queue:{},match:{matchRunning:!1,matchEnded:!1,matchNumber:0,teamAllianceColors:{},objectiveScouters:{},subjectiveScouters:{}}});const HE="scouterIDMapping";let Tt=Ce({matchConfig:{matchNumber:NaN,red1:NaN,red2:NaN,red3:NaN,blue1:NaN,blue2:NaN,blue3:NaN},scouterIDMapping:JSON.parse(localStorage.getItem(HE))||{}});const ld="isInMatch",cd="matchEndSignaled";let tt=Ce({isInOnlineMatch:JSON.parse(localStorage.getItem(ld))||!1,matchEndSignaled:JSON.parse(localStorage.getItem(cd))||!1});function ud(){localStorage.setItem(ld,JSON.stringify(tt.isInOnlineMatch)),localStorage.setItem(cd,JSON.stringify(tt.matchEndSignaled))}const $E=Ye(Qe,"connected");Xr($E,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),w.connected=e,delete w.connected._,J.scouterID.length<=2?ka():hd()});const jE=Ye(Qe,"queue");Xr(jE,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),w.queue=e,delete w.queue._,J.scouterID.length<=2?ka():hd()});const is=Ye(Qe,"match");Xr(is,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),w.match=e,delete w.match._,w.match.matchRunning=w.match.matchRunning||!1,w.match.matchEnded=w.match.matchEnded||!1,w.match.matchNumber=w.match.matchNumber||0,w.match.teamAllianceColors=w.match.teamAllianceColors||{},w.match.objectiveScouters=w.match.objectiveScouters||{},w.match.subjectiveScouters=w.match.subjectiveScouters||{},J.scouterID.length<=2&&ka()});function qE(){for(const n of Object.keys(w.connected))et(Ye(Qe,`connected/${n}`),!1)}function hd(){console.log("Updating as lead");for(const n of Object.keys(w.queue))if(w.queue[n]==-1){const e=Object.values(w.queue),t=Math.max(e.length-1,Math.max(...e));et(Ye(Qe,`queue/${n}`),t+1)}}function ka(){console.log("Updating as scouter"),(!(J.scouterID in w.connected)||!w.connected[J.scouterID])&&et(Ye(Qe,`connected/${J.scouterID}`),!0),w.match.matchRunning&&J.scouterID in w.match.objectiveScouters&&(Z.uiState!="match"&&(tt.isInOnlineMatch=!0,R.metadata.matchNumber=w.match.matchNumber,R.metadata.teamNumber=w.match.objectiveScouters[J.scouterID],R.metadata.alliance=w.match.teamAllianceColors[R.metadata.teamNumber],Z.matchState="prematch",Z.uiState="match"),tt.matchEndSignaled=w.match.matchEnded,ud())}function zE(){et(Ye(Qe,`queue/${J.scouterID}`),-1)}function dd(n){et(Ye(Qe,`queue/${n}`),null)}function GE(){const n=Object.keys(w.queue).slice(0,6);w.match.matchNumber=Tt.matchConfig.matchNumber,w.match.teamAllianceColors={};const e=[Tt.matchConfig.red1,Tt.matchConfig.red2,Tt.matchConfig.red3],t=[Tt.matchConfig.blue1,Tt.matchConfig.blue2,Tt.matchConfig.blue3];for(const s of e)w.match.teamAllianceColors[s]="red";for(const s of t)w.match.teamAllianceColors[s]="blue";w.match.objectiveScouters={};const i=[...e,...t];let r=0;for(const s of n)w.match.objectiveScouters[s]=i[r],r++,et(Ye(Qe,`queue/${s}`),null);w.match.matchEnded=!1,w.match.matchRunning=!0,et(is,w.match)}function KE(){w.match.matchEnded=!0,et(is,w.match)}function YE(){w.match.matchRunning=!1,et(is,w.match)}function QE(n,e,t){et(Ye(Qe,`collectedMatchData/${R.metadata.matchNumber}/${R.metadata.teamNumber}`),n).then(()=>e()).catch(()=>t())}function Na(){tt.isInOnlineMatch=!1,tt.matchEndSignaled=!1,ud(),setTimeout(()=>location.reload(),300)}var JE=(n,e)=>e.buttonState="normal",XE=()=>Bc("home"),ZE=N('<button class="standard-button header__return-button header--right">Cancel Exit</button> <button class="standard-button standard-button--danger header__return-button header--right">Confirm Exit (all data will be lost!)</button>',1),ew=(n,e)=>e.buttonState="confirm exit",tw=N('<button class="standard-button header__return-button header--right">Return to Home</button>');function dn(n,e){ce(e,!0);let t=Ce({buttonState:"normal"});var i=Oe(),r=M(i);{var s=o=>{var a=Oe(),l=M(a);{var c=h=>{var d=ZE(),f=M(d);f.__click=[JE,t];var _=p(f,2);_.__click=[XE],I(h,d)},u=h=>{var d=tw();d.__click=[ew,t],I(h,d)};V(l,h=>{t.buttonState=="confirm exit"?h(c):h(u,!1)})}I(o,a)};V(r,o=>{tt.isInOnlineMatch||o(s)})}I(n,i),ue()}De(["click"]);const Ct=""+new URL("text-logo-removebg.png",import.meta.url).href;var nw=N('<h3 style="color: orange">Scouting lead has signaled that the match is ended. Please finalize and upload your data.</h3>'),iw=N("<h2> </h2> <!>",1);function fn(n,e){ce(e,!1),Me();var t=iw(),i=M(t),r=m(i),s=p(i,2);{var o=a=>{var l=nw();I(a,l)};V(s,a=>{tt.matchEndSignaled&&a(o)})}ge(()=>Yt(r,`Scouting Team ${R.metadata.teamNumber??""} (${R.metadata.alliance??""} alliance)`)),I(n,t),ue()}var rw=(n,e)=>_e(e,!1),sw=()=>Na(),ow=N('<!> <br> <br> <div><button class="standard-button">Back</button></div> <div><button class="standard-button standard-button--danger footer__button">New match (ALL DATA WILL BE RESET!)</button></div>',1),aw=N("<p>Exporting...</p>"),lw=(n,e)=>_e(e,!1),cw=N('<p>An error occurred. Check your internet connection and try again</p> <button class="standard-button">Back</button>',1),uw=()=>Na(),hw=N('<p>Successfully exported!</p> <button class="standard-button standard-button--danger footer__button">New match (ALL DATA WILL BE RESET!)</button>',1),dw=(n,e,t,i,r)=>{if(!qe.connected){alert("Currently disconnected from server. Check your internet connection and try again");return}_e(e,!0),QE(t,()=>_e(e,!1),()=>_e(i,!0)),_e(r,!0)},fw=(n,e)=>_e(e,!0),_w=N('<button class="standard-button">Export over the internet (recommended)</button> <br> <button class="standard-button">Export via QR code</button> <br>',1),pw=()=>Na(),gw=N('<button class="standard-button standard-button--danger footer__button">New match (ALL DATA WILL BE RESET!)</button>'),mw=N('<div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Postmatch)</button> <!></div></div>'),vw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Export Data</h2> <!></div> <!>',1);function yw(n,e){ce(e,!0);function t(O){let C=[];for(const S of Object.values(O))typeof S=="object"?C=[...C,...t(S)]:S==null?C.push(""):C.push(S);return C}const i=[J.scouterID,...t(R.metadata),...t(R.prematch),...t(R.autonomous),...t(R.teleop),...t(R.endgame),...t(R.postmatch)];let r=L_(i.join("	"),{style:"width: 100%",margin:0}),s=Mi(!1),o=Mi(!1),a=Mi(!1),l=Mi(!1);var c=vw(),u=M(c),h=m(u);Ge(h,"src",Ct);var d=p(h,2);dn(d,{});var f=p(u,2),_=m(f);fn(_,{});var g=p(_,4);{var y=O=>{var C=ow(),S=M(C);bf(S,()=>r);var D=p(S,6),L=m(D);L.__click=[rw,l];var B=p(D,2),k=m(B);k.__click=[sw],I(O,C)},b=O=>{var C=Oe(),S=M(C);{var D=B=>{var k=Oe(),W=M(k);{var X=fe=>{var ie=aw();I(fe,ie)},he=fe=>{var ie=Oe(),nt=M(ie);{var Hn=it=>{var te=cw(),ss=p(M(te),2);ss.__click=[lw,s],I(it,te)},rs=it=>{var te=hw(),ss=p(M(te),2);ss.__click=[uw],I(it,te)};V(nt,it=>{q(a)?it(Hn):it(rs,!1)},!0)}I(fe,ie)};V(W,fe=>{q(o)?fe(X):fe(he,!1)})}I(B,k)},L=B=>{var k=_w(),W=M(k);W.__click=[dw,o,i,a,s];var X=p(W,4);X.__click=[fw,l],I(B,k)};V(S,B=>{q(s)?B(D):B(L,!1)},!0)}I(O,C)};V(g,O=>{q(l)?O(y):O(b,!1)})}var E=p(f,2);{var T=O=>{var C=mw(),S=m(C),D=m(S);D.__click=()=>Z.matchState="postmatch";var L=p(D,2);{var B=k=>{var W=gw();W.__click=[pw],I(k,W)};V(L,k=>{tt.isInOnlineMatch||k(B)})}I(O,C)};V(E,O=>{!q(s)&&!q(l)&&O(T)})}I(n,c),ue()}De(["click"]);var Ae=Ee(()=>R),lc=Ee(()=>Z),bw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <div class="subheader subheader--underline subheader--underline--blue">Metadata</div> <label>Match number: <input class="input input--disable-spinner" type="number" placeholder="Enter Match Number"></label> <br> <label>Team number: <input class="input input--disable-spinner" type="number" placeholder="Enter Team Number"></label> <br> <label>Alliance: <select class="input"><option>Blue</option><option>Red</option></select></label></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Next (Prematch)</button></div></div>',1);function Ew(n,e){ce(e,!1),Me();var t=bw(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(r,2);dn(s,{});var o=p(i,2),a=m(o);fn(a,{});var l=p(a,4),c=p(m(l)),u=p(l,4),h=p(m(u)),d=p(u,4),f=p(m(d));ge(()=>{Ae(),yo(()=>{})});var _=m(f);_.value=(_.__value="blue")==null?"":"blue";var g=p(_);g.value=(g.__value="red")==null?"":"red";var y=p(o,2),b=m(y),E=m(b);E.__click=()=>lc(lc().matchState="prematch"),ge(()=>E.disabled=Ae().metadata.matchNumber==null||Ae().metadata.teamNumber==null||Ae().metadata.alliance==null),xe(c,()=>Ae().metadata.matchNumber,T=>Ae(Ae().metadata.matchNumber=T)),xe(h,()=>Ae().metadata.teamNumber,T=>Ae(Ae().metadata.teamNumber=T)),Eo(f,()=>Ae().metadata.alliance,T=>Ae(Ae().metadata.alliance=T)),I(n,t),ue()}De(["click"]);const ww=""+new URL("starting-position-red.png",import.meta.url).href,Iw=""+new URL("starting-position-blue.png",import.meta.url).href;var Be=Ee(()=>R),Vi=Ee(()=>Z),Cw=N('<label>Starting position: <select><option>Barge-side</option><option>Center</option><option>Processor-side</option></select></label> <br> <img style="max-width:50%" alt="Field with starting locations indicated"> <br>',1),Sw=N('<button class="standard-button">Previous (Metadata)</button>'),Tw=N(`<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <div class="subheader subheader--underline subheader--underline--green">Prematch</div> <label>No show: <input type="checkbox"></label> <br> <!> <style>img {
			max-width: 50%;
		}</style></div> <div class="footer"><div class="footer--middle"><!> <button class="standard-button footer__button">Next (Autonomous)</button></div></div>`,1);function kw(n,e){ce(e,!1),Me();var t=Tw(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(r,2);dn(s,{});var o=p(i,2),a=m(o);fn(a,{});var l=p(a,4),c=p(m(l)),u=p(l,4);{var h=b=>{var E=Cw(),T=M(E),O=p(m(T));ge(()=>{Be(),yo(()=>{})});var C=m(O);C.value=(C.__value="bargeSide")==null?"":"bargeSide";var S=p(C);S.value=(S.__value="center")==null?"":"center";var D=p(S);D.value=(D.__value="processorSide")==null?"":"processorSide";var L=p(T,4);ge(()=>Ge(L,"src",Be().metadata.alliance=="blue"?Iw:ww)),Eo(O,()=>Be().prematch.startingLocation,B=>Be(Be().prematch.startingLocation=B)),I(b,E)};V(u,b=>{Be().prematch.noShow||b(h)})}var d=p(o,2),f=m(d),_=m(f);{var g=b=>{var E=Sw();E.__click=()=>Vi(Vi().matchState="metadata"),I(b,E)};V(_,b=>{tt.isInOnlineMatch||b(g)})}var y=p(_,2);y.__click=()=>Vi(Vi().matchState="autonomous"),ge(()=>y.disabled=Be().prematch.startingLocation==null&&!Be().prematch.noShow),Xn(c,()=>Be().prematch.noShow,b=>Be(Be().prematch.noShow=b)),I(n,t),ue()}De(["click"]);function Nw(n,e){(e.isAutonomous?R.autonomous:R.teleop).algae.reefDescoreDrop++}var Rw=N('<button class="standard-button scoring-grid__button">Coral preloaded</button>'),Aw=N('<div><button class="standard-button scoring-grid__button">Coral taken from station</button></div> <div><button class="standard-button scoring-grid__button">Coral taken from ground</button></div> <div><!></div> <div></div> <div></div>',1),Pw=N('<div><button class="standard-button scoring-grid__button">Scored L4</button></div> <div><button class="standard-button scoring-grid__button">Scored L3</button></div> <div><button class="standard-button scoring-grid__button">Scored L2</button></div> <div><button class="standard-button scoring-grid__button">Scored L1 (Trough)</button></div> <div><button class="standard-button scoring-grid__button">Dropped</button></div>',1),Ow=N('<div><button class="standard-button scoring-grid__button">Descored from reef and dropped</button></div> <div><button class="standard-button scoring-grid__button">Descored from reef and taken</button></div> <div><button class="standard-button scoring-grid__button">Taken from ground</button></div> <div></div> <div></div>',1),Dw=N('<div><button class="standard-button scoring-grid__button">Scored in processor</button></div> <div><button class="standard-button scoring-grid__button">Scored in net</button></div> <div><button class="standard-button scoring-grid__button">Dropped</button></div> <div></div> <div></div>',1),Mw=N('<div class="scoring-grid full-height"><!> <!></div>');function fd(n,e){ce(e,!0);function t(){(e.isAutonomous?R.autonomous:R.teleop).coral.preloaded=!0,ve.hasCoral=!0}function i(){(e.isAutonomous?R.autonomous:R.teleop).coral.stationPickup++,ve.hasCoral=!0}function r(){(e.isAutonomous?R.autonomous:R.teleop).coral.groundIntake++,ve.hasCoral=!0}function s(){(e.isAutonomous?R.autonomous:R.teleop).coral.l1++,ve.hasCoral=!1}function o(){(e.isAutonomous?R.autonomous:R.teleop).coral.l2++,ve.hasCoral=!1}function a(){(e.isAutonomous?R.autonomous:R.teleop).coral.l3++,ve.hasCoral=!1}function l(){(e.isAutonomous?R.autonomous:R.teleop).coral.l4++,ve.hasCoral=!1}function c(){(e.isAutonomous?R.autonomous:R.teleop).coral.dropped++,ve.hasCoral=!1}function u(){(e.isAutonomous?R.autonomous:R.teleop).algae.reefDescoreTake++,ve.hasAlgae=!0}function h(){(e.isAutonomous?R.autonomous:R.teleop).algae.groundIntake++,ve.hasAlgae=!0}function d(){(e.isAutonomous?R.autonomous:R.teleop).algae.processor++,ve.hasAlgae=!1}function f(){(e.isAutonomous?R.autonomous:R.teleop).algae.net++,ve.hasAlgae=!1}function _(){(e.isAutonomous?R.autonomous:R.teleop).algae.dropped++,ve.hasAlgae=!1}var g=Mw(),y=m(g);{var b=S=>{var D=Aw(),L=M(D),B=m(L);B.__click=i;var k=p(L,2),W=m(k);W.__click=r;var X=p(k,2),he=m(X);{var fe=ie=>{var nt=Rw();nt.__click=t,I(ie,nt)};V(he,ie=>{e.isAutonomous&&!R.autonomous.coral.preloaded&&ie(fe)})}I(S,D)},E=S=>{var D=Pw(),L=M(D),B=m(L);B.__click=l;var k=p(L,2),W=m(k);W.__click=a;var X=p(k,2),he=m(X);he.__click=o;var fe=p(X,2),ie=m(fe);ie.__click=s;var nt=p(fe,2),Hn=m(nt);Hn.__click=c,I(S,D)};V(y,S=>{ve.hasCoral?S(E,!1):S(b)})}var T=p(y,2);{var O=S=>{var D=Ow(),L=M(D),B=m(L);B.__click=[Nw,e];var k=p(L,2),W=m(k);W.__click=u;var X=p(k,2),he=m(X);he.__click=h,I(S,D)},C=S=>{var D=Dw(),L=M(D),B=m(L);B.__click=d;var k=p(L,2),W=m(k);W.__click=f;var X=p(k,2),he=m(X);he.__click=_,I(S,D)};V(T,S=>{ve.hasAlgae?S(C,!1):S(O)})}I(n,g),ue()}De(["click"]);var Os=Ee(()=>R),Hi=Ee(()=>Z),Lw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Autonomous</h2> <label>Left starting line: <input type="checkbox"></label> <br> <!></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Prematch)</button> <button class="standard-button footer__button">Next (Teleop)</button></div></div>',1);function xw(n,e){ce(e,!1),Me();var t=Lw(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(r,2);dn(s,{});var o=p(i,2),a=m(o);fn(a,{});var l=p(a,4),c=p(m(l)),u=p(l,4);fd(u,{isAutonomous:!0});var h=p(o,2),d=m(h),f=m(d);f.__click=()=>Hi(Hi().matchState="prematch");var _=p(f,2);_.__click=()=>Hi(Hi().matchState="teleop"),Xn(c,()=>Os().autonomous.leave,g=>Os(Os().autonomous.leave=g)),I(n,t),ue()}De(["click"]);var $i=Ee(()=>Z),Fw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Teleop</h2> <!></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Autonomous)</button> <button class="standard-button footer__button">Next (Endgame)</button></div></div>',1);function Uw(n,e){ce(e,!1),Me();var t=Fw(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(r,2);dn(s,{});var o=p(i,2),a=m(o);fn(a,{});var l=p(a,4);fd(l,{isAutonomous:!1});var c=p(o,2),u=m(c),h=m(u);h.__click=()=>$i($i().matchState="autonomous");var d=p(h,2);d.__click=()=>$i($i().matchState="endgame"),I(n,t),ue()}De(["click"]);const Bw=""+new URL("cages.png",import.meta.url).href;var Kn=Ee(()=>R),ji=Ee(()=>Z),Ww=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Endgame</h2> <label>Barge: <select><option>None</option><option>Park</option><option>Shallow cage climb</option><option>Deep cage climb</option></select></label> <br> <img style="max-width: 50%" alt="Barge with cage levels indicated"> <br></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Teleop)</button> <button class="standard-button footer__button">Next (Postmatch)</button></div></div>',1);function Vw(n,e){ce(e,!1),Me();var t=Ww(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(r,2);dn(s,{});var o=p(i,2),a=m(o);fn(a,{});var l=p(a,4),c=p(m(l));ge(()=>{Kn(),yo(()=>{})});var u=m(c);u.value=(u.__value="none")==null?"":"none";var h=p(u);h.value=(h.__value="park")==null?"":"park";var d=p(h);d.value=(d.__value="shallowCage")==null?"":"shallowCage";var f=p(d);f.value=(f.__value="deepCage")==null?"":"deepCage";var _=p(l,4);Ge(_,"src",Bw);var g=p(o,2),y=m(g),b=m(y);b.__click=()=>ji(ji().matchState="teleop");var E=p(b,2);E.__click=()=>ji(ji().matchState="postmatch"),ge(()=>E.disabled=Kn().endgame.barge==null),Eo(c,()=>Kn().endgame.barge,T=>Kn(Kn().endgame.barge=T)),I(n,t),ue()}De(["click"]);var rt=Ee(()=>R),qi=Ee(()=>Z),Hw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Postmatch</h2> <label>Dead: <input type="checkbox"></label> <br> <label>Tipped over: <input type="checkbox"></label> <br> <label>Yellow/red card: <input type="checkbox"></label> <br></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Endgame)</button> <button class="standard-button footer__button">Finish and Export</button></div></div>',1);function $w(n,e){ce(e,!1),Me();var t=Hw(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(r,2);dn(s,{});var o=p(i,2),a=m(o);fn(a,{});var l=p(a,4),c=p(m(l)),u=p(l,4),h=p(m(u)),d=p(u,4),f=p(m(d)),_=p(o,2),g=m(_),y=m(g);y.__click=()=>qi(qi().matchState="endgame");var b=p(y,2);b.__click=()=>qi(qi().matchState="export"),Xn(c,()=>rt().postmatch.dead,E=>rt(rt().postmatch.dead=E)),Xn(h,()=>rt().postmatch.tippedOver,E=>rt(rt().postmatch.tippedOver=E)),Xn(f,()=>rt().postmatch.card,E=>rt(rt().postmatch.card=E)),I(n,t),ue()}De(["click"]);function jw(n,e){ce(e,!1),Me();var t=Oe(),i=M(t);{var r=o=>{Ew(o,{})},s=o=>{var a=Oe(),l=M(a);{var c=h=>{kw(h,{})},u=h=>{var d=Oe(),f=M(d);{var _=y=>{xw(y,{})},g=y=>{var b=Oe(),E=M(b);{var T=C=>{Uw(C,{})},O=C=>{var S=Oe(),D=M(S);{var L=k=>{Vw(k,{})},B=k=>{var W=Oe(),X=M(W);{var he=ie=>{$w(ie,{})},fe=ie=>{yw(ie,{})};V(X,ie=>{Z.matchState=="postmatch"?ie(he):ie(fe,!1)},!0)}I(k,W)};V(D,k=>{Z.matchState=="endgame"?k(L):k(B,!1)},!0)}I(C,S)};V(E,C=>{Z.matchState=="teleop"?C(T):C(O,!1)},!0)}I(y,b)};V(f,y=>{Z.matchState=="autonomous"?y(_):y(g,!1)},!0)}I(h,d)};V(l,h=>{Z.matchState=="prematch"?h(c):h(u,!1)},!0)}I(o,a)};V(i,o=>{Z.matchState=="metadata"?o(r):o(s,!1)})}I(n,t),ue()}var H=Ee(()=>Tt),qw=N("<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>"),zw=N("<p>Connected to server, but not signed in as a lead. Try going into setup and fixing your login.</p>"),Gw=N("<p>Connected to server and successfully signed in as a lead!</p>"),Kw=()=>alert("TODO"),Yw=()=>alert("TODO"),Qw=N("<p> </p>"),Jw=N("<strong>NOT CONNECTED</strong>"),Xw=(n,e)=>dd(q(e)),Zw=N('<p> <!> <button class="standard-button">Remove from queue</button></p>'),eI=()=>GE(),tI=N('<h2>Match Configuration</h2> <label>Match Number: <input type="number"></label> <br> <label>Red 1: <input type="number"></label> <br> <label>Red 2: <input type="number"></label> <br> <label>Red 3: <input type="number"></label> <br> <label>Blue 1: <input type="number"></label> <br> <label>Blue 2: <input type="number"></label> <br> <label>Blue 3: <input type="number"></label> <br> <div><button class="standard-button">Start match with top six in queue</button></div>',1),nI=N("<p> </p>"),iI=()=>YE(),rI=N('<h2>Remaining Data</h2> <div><button class="standard-button standard-button--danger">Force end match (not all scouters have submitted results)</button></div>',1),sI=()=>KE(),oI=N('<div><button class="standard-button">Signal match is ended and allow scouters to submit results</button></div>'),aI=N("<h2>Match Info</h2> <p> </p> <!> <!>",1),lI=N("<h2>Connected Scouters</h2> <details><summary>Expand</summary> <!></details> <h2>Queue</h2> <!> <!>",1),cI=N('<!> <button class="standard-button">Import scouter ID map</button> <br> <button class="standard-button">Export data</button> <br> <!>',1);function uI(n,e){ce(e,!1),Me();var t=cI(),i=M(t);{var r=u=>{var h=qw();I(u,h)},s=u=>{var h=Oe(),d=M(h);{var f=g=>{var y=zw();I(g,y)},_=g=>{var y=Gw();I(g,y)};V(d,g=>{qe.signedIn?g(_,!1):g(f)},!0)}I(u,h)};V(i,u=>{qe.connected?u(s,!1):u(r)})}var o=p(i,2);o.__click=[Kw];var a=p(o,4);a.__click=[Yw];var l=p(a,4);{var c=u=>{var h=lI(),d=p(M(h),2),f=p(m(d),2);as(f,1,()=>Object.keys(w.connected).filter(E=>w.connected[E]),os,(E,T)=>{var O=Qw(),C=m(O);ge(()=>Yt(C,`${H().scouterIDMapping[q(T)]||"Unknown"} (ID: ${q(T)??""})`)),I(E,O)});var _=p(d,4);as(_,1,()=>Object.keys(w.queue).sort((E,T)=>w.queue[E]-w.queue[T]),os,(E,T,O)=>{var C=Zw(),S=m(C),D=p(S);{var L=k=>{var W=Jw();I(k,W)};V(D,k=>{(!(q(T)in w.connected)||!w.connected[q(T)])&&k(L)})}var B=p(D,2);B.__click=[Xw,T],ge(()=>Yt(S,`${O+1}. ${H().scouterIDMapping[q(T)]||"Unknown"} (ID: ${q(T)??""}) `)),I(E,C)});var g=p(_,2);{var y=E=>{var T=tI(),O=p(M(T),2),C=p(m(O)),S=p(O,4),D=p(m(S)),L=p(S,4),B=p(m(L)),k=p(L,4),W=p(m(k)),X=p(k,4),he=p(m(X)),fe=p(X,4),ie=p(m(fe)),nt=p(fe,4),Hn=p(m(nt)),rs=p(nt,4),it=m(rs);it.__click=[eI],ge(te=>it.disabled=te,[()=>Number.isNaN(H().matchConfig.matchNumber)||Number.isNaN(H().matchConfig.red1)||Number.isNaN(H().matchConfig.red2)||Number.isNaN(H().matchConfig.red3)||Number.isNaN(H().matchConfig.blue1)||Number.isNaN(H().matchConfig.blue2)||Number.isNaN(H().matchConfig.blue3)],Lr),xe(C,()=>H().matchConfig.matchNumber,te=>H(H().matchConfig.matchNumber=Number.parseInt((te||"").toString()))),xe(D,()=>H().matchConfig.red1,te=>H(H().matchConfig.red1=Number.parseInt((te||"").toString()))),xe(B,()=>H().matchConfig.red2,te=>H(H().matchConfig.red2=Number.parseInt((te||"").toString()))),xe(W,()=>H().matchConfig.red3,te=>H(H().matchConfig.red3=Number.parseInt((te||"").toString()))),xe(he,()=>H().matchConfig.blue1,te=>H(H().matchConfig.blue1=Number.parseInt((te||"").toString()))),xe(ie,()=>H().matchConfig.blue2,te=>H(H().matchConfig.blue2=Number.parseInt((te||"").toString()))),xe(Hn,()=>H().matchConfig.blue3,te=>H(H().matchConfig.blue3=Number.parseInt((te||"").toString()))),I(E,T)},b=E=>{var T=aI(),O=p(M(T),2),C=m(O),S=p(O,2);as(S,1,()=>Object.keys(w.match.objectiveScouters),os,(k,W)=>{var X=nI(),he=m(X);ge(()=>Yt(he,`${H().scouterIDMapping[q(W)]||"Unknown"} (ID: ${q(W)??""}) - ${w.match.objectiveScouters[q(W)]??""} (${w.match.teamAllianceColors[w.match.objectiveScouters[q(W)]]??""})`)),I(k,X)});var D=p(S,2);{var L=k=>{var W=rI(),X=p(M(W),2),he=m(X);he.__click=[iI],I(k,W)},B=k=>{var W=oI(),X=m(W);X.__click=[sI],I(k,W)};V(D,k=>{w.match.matchEnded?k(L):k(B,!1)})}ge(()=>Yt(C,`Match Number: ${w.match.matchNumber??""}`)),I(E,T)};V(g,E=>{w.match.matchRunning?E(b,!1):E(y)})}I(u,h)};V(l,u=>{qe.connected&&qe.signedIn&&u(c)})}I(n,t),ue()}De(["click"]);var hI=N("<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>"),dI=()=>zE(),fI=N('<button class="standard-button">Join Queue</button> <br>',1),_I=N("<p> </p>"),pI=()=>dd(J.scouterID),gI=N('<!> <button class="standard-button">Leave Queue</button> <br>',1),mI=N("<p>Connected to server!</p> <!> <br> <br> <br>",1),vI=()=>Bc("match"),yI=N('<!> <button class="standard-button standard-button--danger">Start manual scouting</button> <br>',1);function bI(n,e){ce(e,!1),Me();var t=yI(),i=M(t);{var r=a=>{var l=hI();I(a,l)},s=a=>{var l=mI(),c=p(M(l),2);{var u=d=>{var f=fI(),_=M(f);_.__click=[dI],I(d,f)},h=d=>{var f=gI(),_=M(f);{var g=b=>{var E=_I(),T=m(E);ge(O=>Yt(T,`Currently #${O??""} in queue`),[()=>Object.keys(w.queue).sort((O,C)=>w.queue[O]-w.queue[C]).indexOf(J.scouterID)+1],Lr),I(b,E)};V(_,b=>{w.queue[J.scouterID]!=-1&&b(g)})}var y=p(_,2);y.__click=[pI],I(d,f)};V(c,d=>{!(J.scouterID in w.queue)||!w.queue[J.scouterID]?d(u):d(h,!1)})}I(a,l)};V(i,a=>{qe.connected?a(s,!1):a(r)})}var o=p(i,2);o.__click=[vI],I(n,t),ue()}De(["click"]);var cc=Ee(()=>Z),EI=N('<div class="header"><img class="header__img" alt="QuickScout"></div> <div class="contents"><h3>Made by FRC Teams 749, 955, 997</h3> <button class="standard-button">Setup</button> <p> </p> <!></div>',1);function wI(n,e){ce(e,!1),Me();var t=EI(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(i,2),o=p(m(s),2);o.__click=()=>cc(cc().homeState="setup");var a=p(o,2),l=m(a),c=p(a,2);{var u=d=>{uI(d,{})},h=d=>{bI(d,{})};V(c,d=>{J.scouterID.length>2?d(u):d(h,!1)})}ge(()=>Yt(l,`Welcome! Your scouter ID is set to ${J.scouterID??""}`)),I(n,t),ue()}De(["click"]);var se=Ee(()=>J),uc=Ee(()=>Z),II=N("<br> <label>Email: <input></label> <br> <label>Password: <input></label> <br>",1),CI=N("<p>Scouter IDs should be a single letter followed by a single number.</p> <p>Your scouter ID should be on your role badge. If you don't know it, please ask your scouting lead for your scouter ID.</p>",1),SI=N('<div class="header"><img class="header__img" alt="QuickScout"></div> <div class="contents"><h1>Setup</h1> <label>Scouter ID: <input></label> <!> <button class="standard-button">Complete Setup</button></div>',1);function TI(n,e){ce(e,!1),Me();var t=SI(),i=M(t),r=m(i);Ge(r,"src",Ct);var s=p(i,2),o=p(m(s),2),a=p(m(o)),l=p(o,2);{var c=d=>{var f=II(),_=p(M(f),2),g=p(m(_)),y=p(_,4),b=p(m(y));xe(g,()=>se().email,E=>{se(se().email=E),us()}),xe(b,()=>se().password,E=>{se(se().password=E),us()}),I(d,f)},u=d=>{var f=CI();I(d,f)};V(l,d=>{se().scouterID=="LEAD"?d(c):d(u,!1)})}var h=p(l,2);h.__click=()=>{ad(),uc(uc().homeState="start")},ge(d=>h.disabled=d,[()=>se().scouterID.length>2?se().email.length==0||se().password.length==0:!/[A-Z][0-9]$/.test(se().scouterID)],Lr),xe(a,()=>se().scouterID,d=>{se(se().scouterID=d.toUpperCase()),se().scouterID.startsWith("LE")||se(se().scouterID=se().scouterID.slice(0,2)),us()}),I(n,t),ue()}De(["click"]);function kI(n,e){ce(e,!1),Me();var t=Oe(),i=M(t);{var r=o=>{TI(o,{})},s=o=>{wI(o,{})};V(i,o=>{Z.homeState=="setup"?o(r):o(s,!1)})}I(n,t),ue()}var NI=N("<main><!></main>");function RI(n,e){ce(e,!0),Ds(()=>{ad()});var t=NI(),i=m(t);{var r=o=>{jw(o,{})},s=o=>{kI(o,{})};V(i,o=>{Z.uiState=="match"?o(r):o(s,!1)})}I(n,t),ue()}ff(RI,{target:document.getElementById("app")});

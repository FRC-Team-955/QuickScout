(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Ra=!1;var oo=Array.isArray,_d=Array.prototype.indexOf,ao=Array.from,pd=Object.defineProperty,er=Object.getOwnPropertyDescriptor,hc=Object.getOwnPropertyDescriptors,gd=Object.prototype,md=Array.prototype,lo=Object.getPrototypeOf;function vd(n){return n()}function Aa(n){for(var e=0;e<n.length;e++)n[e]()}const je=2,dc=4,co=8,uo=16,St=32,Er=64,si=128,$e=256,oi=512,Oe=1024,Tt=2048,xn=4096,pt=8192,Fi=16384,yd=32768,ho=65536,bd=1<<17,Ed=1<<19,fc=1<<20,tn=Symbol("$state");function _c(n){return n===this.v}function wd(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function pc(n){return!wd(n,this.v)}function Id(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Cd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Td(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function kd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Nd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rd(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ad(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Ui=!1,Pd=!1;function Od(){Ui=!0}const Dd=1,Md=2,Ld=16,xd=1,Fd=2,Se=Symbol();let ie=null;function Pa(n){ie=n}function he(n,e=!1,t){ie={p:ie,c:null,e:null,m:!1,s:n,x:null,l:null},Ui&&!e&&(ie.l={s:null,u:null,r1:[],r2:Te(!1)})}function de(n){const e=ie;if(e!==null){const o=e.e;if(o!==null){var t=K,r=G;e.e=null;try{for(var i=0;i<o.length;i++){var s=o[i];Ht(s.effect),Vt(s.reaction),Vi(s.fn)}}finally{Ht(t),Vt(r)}}ie=e.p,e.m=!0}return{}}function wr(){return!Ui||ie!==null&&ie.l===null}function Te(n,e){var t={f:0,v:n,reactions:null,equals:_c,rv:0,wv:0};return t}function Fr(n){return Bd(Te(n))}function Ud(n,e=!1){var r;const t=Te(n);return e||(t.equals=pc),Ui&&ie!==null&&ie.l!==null&&((r=ie.l).s??(r.s=[])).push(t),t}function Bd(n){return G!==null&&!Ke&&(G.f&je)!==0&&(st===null?Qd([n]):st.push(n)),n}function pe(n,e){return G!==null&&!Ke&&wr()&&(G.f&(je|uo))!==0&&(st===null||!st.includes(n))&&Ad(),ai(n,e)}function ai(n,e){return n.equals(e)||(n.v,n.v=e,n.wv=Pc(),gc(n,Tt),wr()&&K!==null&&(K.f&Oe)!==0&&(K.f&(St|Er))===0&&(ct===null?Jd([n]):ct.push(n))),e}function gc(n,e){var t=n.reactions;if(t!==null)for(var r=wr(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;(a&Tt)===0&&(!r&&o===K||(vt(o,e),(a&(Oe|$e))!==0&&((a&je)!==0?gc(o,xn):ji(o))))}}let Wd=!1;function Ne(n,e=null,t){if(typeof n!="object"||n===null||tn in n)return n;const r=lo(n);if(r!==gd&&r!==md)return n;var i=new Map,s=oo(n),o=Te(0);s&&i.set("length",Te(n.length));var a;return new Proxy(n,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&kd();var h=i.get(c);return h===void 0?(h=Te(u.value),i.set(c,h)):pe(h,Ne(u.value,a)),!0},deleteProperty(l,c){var u=i.get(c);if(u===void 0)c in l&&i.set(c,Te(Se));else{if(s&&typeof c=="string"){var h=i.get("length"),d=Number(c);Number.isInteger(d)&&d<h.v&&pe(h,d)}pe(u,Se),Oa(o)}return!0},get(l,c,u){var _;if(c===tn)return n;var h=i.get(c),d=c in l;if(h===void 0&&(!d||(_=er(l,c))!=null&&_.writable)&&(h=Te(Ne(d?l[c]:Se,a)),i.set(c,h)),h!==void 0){var f=$(h);return f===Se?void 0:f}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var h=i.get(c);h&&(u.value=$(h))}else if(u===void 0){var d=i.get(c),f=d==null?void 0:d.v;if(d!==void 0&&f!==Se)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(l,c){var f;if(c===tn)return!0;var u=i.get(c),h=u!==void 0&&u.v!==Se||Reflect.has(l,c);if(u!==void 0||K!==null&&(!h||(f=er(l,c))!=null&&f.writable)){u===void 0&&(u=Te(h?Ne(l[c],a):Se),i.set(c,u));var d=$(u);if(d===Se)return!1}return h},set(l,c,u,h){var T;var d=i.get(c),f=c in l;if(s&&c==="length")for(var _=u;_<d.v;_+=1){var g=i.get(_+"");g!==void 0?pe(g,Se):_ in l&&(g=Te(Se),i.set(_+"",g))}d===void 0?(!f||(T=er(l,c))!=null&&T.writable)&&(d=Te(void 0),pe(d,Ne(u,a)),i.set(c,d)):(f=d.v!==Se,pe(d,Ne(u,a)));var m=Reflect.getOwnPropertyDescriptor(l,c);if(m!=null&&m.set&&m.set.call(h,u),!f){if(s&&typeof c=="string"){var w=i.get("length"),C=Number(c);Number.isInteger(C)&&C>=w.v&&pe(w,C+1)}Oa(o)}return!0},ownKeys(l){$(o);var c=Reflect.ownKeys(l).filter(d=>{var f=i.get(d);return f===void 0||f.v!==Se});for(var[u,h]of i)h.v!==Se&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Nd()}})}function Oa(n,e=1){pe(n,n.v+e)}function Da(n){return n!==null&&typeof n=="object"&&tn in n?n[tn]:n}function Vd(n,e){return Object.is(Da(n),Da(e))}var Ma,mc,vc,yc;function Hd(){if(Ma===void 0){Ma=window,mc=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype;vc=er(e,"firstChild").get,yc=er(e,"nextSibling").get,n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function bc(n=""){return document.createTextNode(n)}function cr(n){return vc.call(n)}function Bi(n){return yc.call(n)}function E(n,e){return cr(n)}function D(n,e){{var t=cr(n);return t instanceof Comment&&t.data===""?Bi(t):t}}function p(n,e=1,t=!1){let r=n;for(;e--;)r=Bi(r);return r}function $d(n){n.textContent=""}function fo(n){var e=je|Tt,t=G!==null&&(G.f&je)!==0?G:null;return K===null||t!==null&&(t.f&$e)!==0?e|=$e:K.f|=fc,{ctx:ie,deps:null,effects:null,equals:_c,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??K}}function Wi(n){const e=fo(n);return e.equals=pc,e}function Ec(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)mt(e[t])}}function jd(n){for(var e=n.parent;e!==null;){if((e.f&je)===0)return e;e=e.parent}return null}function qd(n){var e,t=K;Ht(jd(n));try{Ec(n),e=Dc(n)}finally{Ht(t)}return e}function wc(n){var e=qd(n),t=(Lt||(n.f&$e)!==0)&&n.deps!==null?xn:Oe;vt(n,t),n.equals(e)||(n.v=e,n.wv=Pc())}function Ic(n){K===null&&G===null&&Sd(),G!==null&&(G.f&$e)!==0&&K===null&&Cd(),po&&Id()}function zd(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ir(n,e,t,r=!0){var i=(n&Er)!==0,s=K,o={ctx:ie,deps:null,nodes_start:null,nodes_end:null,f:n|Tt,first:null,fn:e,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,wv:0};if(t)try{go(o),o.f|=yd}catch(c){throw mt(o),c}else e!==null&&ji(o);var a=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(fc|si))===0;if(!a&&!i&&r&&(s!==null&&zd(o,s),G!==null&&(G.f&je)!==0)){var l=G;(l.effects??(l.effects=[])).push(o)}return o}function Os(n){Ic();var e=K!==null&&(K.f&St)!==0&&ie!==null&&!ie.m;if(e){var t=ie;(t.e??(t.e=[])).push({fn:n,effect:K,reaction:G})}else{var r=Vi(n);return r}}function Gd(n){return Ic(),Cc(n)}function Kd(n){const e=Ir(Er,n,!0);return(t={})=>new Promise(r=>{t.outro?li(e,()=>{mt(e),r(void 0)}):(mt(e),r(void 0))})}function Vi(n){return Ir(dc,n,!1)}function Cc(n){return Ir(co,n,!0)}function ce(n,e=[],t=fo){const r=e.map(t);return Hi(()=>n(...r.map($)))}function Hi(n,e=0){return Ir(co|uo|e,n,!0)}function kn(n,e=!0){return Ir(co|St,n,!0,e)}function Sc(n){var e=n.teardown;if(e!==null){const t=po,r=G;La(!0),Vt(null);try{e.call(null)}finally{La(t),Vt(r)}}}function Tc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var r=t.next;mt(t,e),t=r}}function Yd(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&St)===0&&mt(e),e=t}}function mt(n,e=!0){var t=!1;if((e||(n.f&Ed)!==0)&&n.nodes_start!==null){for(var r=n.nodes_start,i=n.nodes_end;r!==null;){var s=r===i?null:Bi(r);r.remove(),r=s}t=!0}Tc(n,e&&!t),di(n,0),vt(n,Fi);var o=n.transitions;if(o!==null)for(const l of o)l.stop();Sc(n);var a=n.parent;a!==null&&a.first!==null&&kc(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function kc(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function li(n,e){var t=[];_o(n,t,!0),Nc(t,()=>{mt(n),e&&e()})}function Nc(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var i of n)i.out(r)}else e()}function _o(n,e,t){if((n.f&pt)===0){if(n.f^=pt,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var i=r.next,s=(r.f&ho)!==0||(r.f&St)!==0;_o(r,e,s?t:!1),r=i}}}function ci(n){Rc(n,!0)}function Rc(n,e){if((n.f&pt)!==0){n.f^=pt,(n.f&Oe)===0&&(n.f^=Oe),Cr(n)&&(vt(n,Tt),ji(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&ho)!==0||(t.f&St)!==0;Rc(t,i?e:!1),t=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let Jr=!1,Ds=!1,ui=null,Xr=!1,po=!1;function La(n){po=n}let Zr=[];let G=null,Ke=!1;function Vt(n){G=n}let K=null;function Ht(n){K=n}let st=null;function Qd(n){st=n}let Ee=null,xe=0,ct=null;function Jd(n){ct=n}let Ac=1,hi=0,Lt=!1,Jt=null;function Pc(){return++Ac}function Cr(n){var h;var e=n.f;if((e&Tt)!==0)return!0;if((e&xn)!==0){var t=n.deps,r=(e&$e)!==0;if(t!==null){var i,s,o=(e&oi)!==0,a=r&&K!==null&&!Lt,l=t.length;if(o||a){var c=n,u=c.parent;for(i=0;i<l;i++)s=t[i],(o||!((h=s==null?void 0:s.reactions)!=null&&h.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);o&&(c.f^=oi),a&&u!==null&&(u.f&$e)===0&&(c.f^=$e)}for(i=0;i<l;i++)if(s=t[i],Cr(s)&&wc(s),s.wv>n.wv)return!0}(!r||K!==null&&!Lt)&&vt(n,Oe)}return!1}function Xd(n,e){for(var t=e;t!==null;){if((t.f&si)!==0)try{t.fn(n);return}catch{t.f^=si}t=t.parent}throw Jr=!1,n}function Zd(n){return(n.f&Fi)===0&&(n.parent===null||(n.parent.f&si)===0)}function $i(n,e,t,r){if(Jr){if(t===null&&(Jr=!1),Zd(e))throw n;return}t!==null&&(Jr=!0);{Xd(n,e);return}}function Oc(n,e,t=!0){var r=n.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];(s.f&je)!==0?Oc(s,e,!1):e===s&&(t?vt(s,Tt):(s.f&Oe)!==0&&vt(s,xn),ji(s))}}function Dc(n){var f;var e=Ee,t=xe,r=ct,i=G,s=Lt,o=st,a=ie,l=Ke,c=n.f;Ee=null,xe=0,ct=null,Lt=(c&$e)!==0&&(Ke||!Xr||G===null),G=(c&(St|Er))===0?n:null,st=null,Pa(n.ctx),Ke=!1,hi++;try{var u=(0,n.fn)(),h=n.deps;if(Ee!==null){var d;if(di(n,xe),h!==null&&xe>0)for(h.length=xe+Ee.length,d=0;d<Ee.length;d++)h[xe+d]=Ee[d];else n.deps=h=Ee;if(!Lt)for(d=xe;d<h.length;d++)((f=h[d]).reactions??(f.reactions=[])).push(n)}else h!==null&&xe<h.length&&(di(n,xe),h.length=xe);if(wr()&&ct!==null&&!Ke&&h!==null&&(n.f&(je|xn|Tt))===0)for(d=0;d<ct.length;d++)Oc(ct[d],n);return i!==null&&hi++,u}finally{Ee=e,xe=t,ct=r,G=i,Lt=s,st=o,Pa(a),Ke=l}}function ef(n,e){let t=e.reactions;if(t!==null){var r=_d.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(e.f&je)!==0&&(Ee===null||!Ee.includes(e))&&(vt(e,xn),(e.f&($e|oi))===0&&(e.f^=oi),Ec(e),di(e,0))}function di(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)ef(n,t[r])}function go(n){var e=n.f;if((e&Fi)===0){vt(n,Oe);var t=K,r=ie,i=Xr;K=n,Xr=!0;try{(e&uo)!==0?Yd(n):Tc(n),Sc(n);var s=Dc(n);n.teardown=typeof s=="function"?s:null,n.wv=Ac;var o=n.deps,a;Ra&&Pd&&n.f&Tt}catch(l){$i(l,n,t,r||n.ctx)}finally{Xr=i,K=t}}}function tf(){try{Td()}catch(n){if(ui!==null)$i(n,ui,null);else throw n}}function nf(){try{for(var n=0;Zr.length>0;){n++>1e3&&tf();var e=Zr,t=e.length;Zr=[];for(var r=0;r<t;r++){var i=e[r];(i.f&Oe)===0&&(i.f^=Oe);var s=sf(i);rf(s)}}}finally{Ds=!1,ui=null}}function rf(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var r=n[t];if((r.f&(Fi|pt))===0)try{Cr(r)&&(go(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?kc(r):r.fn=null))}catch(i){$i(i,r,null,r.ctx)}}}function ji(n){Ds||(Ds=!0,queueMicrotask(nf));for(var e=ui=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(Er|St))!==0){if((t&Oe)===0)return;e.f^=Oe}}Zr.push(e)}function sf(n){var e=[],t=n.first;e:for(;t!==null;){var r=t.f,i=(r&St)!==0,s=i&&(r&Oe)!==0,o=t.next;if(!s&&(r&pt)===0){if((r&dc)!==0)e.push(t);else if(i)t.f^=Oe;else{var a=G;try{G=t,Cr(t)&&go(t)}catch(u){$i(u,t,null,t.ctx)}finally{G=a}}var l=t.first;if(l!==null){t=l;continue}}if(o===null){let u=t.parent;for(;u!==null;){if(n===u)break e;var c=u.next;if(c!==null){t=c;continue e}u=u.parent}}t=o}return e}function $(n){var e=n.f,t=(e&je)!==0;if(Jt!==null&&Jt.add(n),G!==null&&!Ke){st!==null&&st.includes(n)&&Rd();var r=G.deps;n.rv<hi&&(n.rv=hi,Ee===null&&r!==null&&r[xe]===n?xe++:Ee===null?Ee=[n]:(!Lt||!Ee.includes(n))&&Ee.push(n))}else if(t&&n.deps===null&&n.effects===null){var i=n,s=i.parent;s!==null&&(s.f&$e)===0&&(i.f^=$e)}return t&&(i=n,Cr(i)&&wc(i)),n.v}function of(n){var e=Jt;Jt=new Set;var t=Jt,r;try{if(qi(n),e!==null)for(r of Jt)e.add(r)}finally{Jt=e}return t}function mo(n){var e=of(()=>qi(n));for(var t of e)if((t.f&bd)!==0)for(const r of t.deps||[])(r.f&je)===0&&ai(r,r.v);else ai(t,t.v)}function qi(n){var e=Ke;try{return Ke=!0,n()}finally{Ke=e}}const af=-7169;function vt(n,e){n.f=n.f&af|e}function lf(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(tn in n)Ms(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&tn in t&&Ms(t)}}}function Ms(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{Ms(n[r],e)}catch{}const t=lo(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=hc(t);for(let i in r){const s=r[i].get;if(s)try{s.call(n)}catch{}}}}}const cf=["touchstart","touchmove"];function uf(n){return cf.includes(n)}let xa=!1;function hf(){xa||(xa=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function df(n){var e=G,t=K;Vt(null),Ht(null);try{return n()}finally{Vt(e),Ht(t)}}function Mc(n,e,t,r=t){n.addEventListener(e,()=>df(t));const i=n.__on_r;i?n.__on_r=()=>{i(),r(!0)}:n.__on_r=()=>r(!0),hf()}const Lc=new Set,Ls=new Set;function Ue(n){for(var e=0;e<n.length;e++)Lc.add(n[e]);for(var t of Ls)t(n)}function Ur(n){var C;var e=this,t=e.ownerDocument,r=n.type,i=((C=n.composedPath)==null?void 0:C.call(n))||[],s=i[0]||n.target,o=0,a=n.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||n.target,s!==e){pd(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=G,h=K;Vt(null),Ht(null);try{for(var d,f=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+r];if(g!==void 0&&(!s.disabled||n.target===s))if(oo(g)){var[m,...w]=g;m.apply(s,[n,...w])}else g.call(s,n)}catch(T){d?f.push(T):d=T}if(n.cancelBubble||_===e||_===null)break;s=_}if(d){for(let T of f)queueMicrotask(()=>{throw T});throw d}}finally{n.__root=e,delete n.currentTarget,Vt(u),Ht(h)}}}function xc(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function fi(n,e){var t=K;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function N(n,e){var t=(e&xd)!==0,r=(e&Fd)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=xc(s?n:"<!>"+n),t||(i=cr(i)));var o=r||mc?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=cr(o),l=o.lastChild;fi(a,l)}else fi(o,o);return o}}function ke(){var n=document.createDocumentFragment(),e=document.createComment(""),t=bc();return n.append(e,t),fi(e,t),n}function I(n,e){n!==null&&n.before(e)}function ut(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function ff(n,e){return _f(n,e)}const mn=new Map;function _f(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:o=!0}){Hd();var a=new Set,l=h=>{for(var d=0;d<h.length;d++){var f=h[d];if(!a.has(f)){a.add(f);var _=uf(f);e.addEventListener(f,Ur,{passive:_});var g=mn.get(f);g===void 0?(document.addEventListener(f,Ur,{passive:_}),mn.set(f,1)):mn.set(f,g+1)}}};l(ao(Lc)),Ls.add(l);var c=void 0,u=Kd(()=>{var h=t??e.appendChild(bc());return kn(()=>{if(s){he({});var d=ie;d.c=s}i&&(r.$$events=i),c=n(h,r)||{},s&&de()}),()=>{var _;for(var d of a){e.removeEventListener(d,Ur);var f=mn.get(d);--f===0?(document.removeEventListener(d,Ur),mn.delete(d)):mn.set(d,f)}Ls.delete(l),h!==t&&((_=h.parentNode)==null||_.removeChild(h))}});return pf.set(c,u),c}let pf=new WeakMap;function F(n,e,t=!1){var r=n,i=null,s=null,o=Se,a=t?ho:0,l=!1;const c=(h,d=!0)=>{l=!0,u(d,h)},u=(h,d)=>{o!==(o=h)&&(o?(i?ci(i):d&&(i=kn(()=>d(r))),s&&li(s,()=>{s=null})):(s?ci(s):d&&(s=kn(()=>d(r))),i&&li(i,()=>{i=null})))};Hi(()=>{l=!1,e(c),l||u(null,null)},a)}function Br(n,e){return e}function gf(n,e,t,r){for(var i=[],s=e.length,o=0;o<s;o++)_o(e[o].e,i,!0);var a=s>0&&i.length===0&&t!==null;if(a){var l=t.parentNode;$d(l),l.append(t),r.clear(),At(n,e[0].prev,e[s-1].next)}Nc(i,()=>{for(var c=0;c<s;c++){var u=e[c];a||(r.delete(u.k),At(n,u.prev,u.next)),mt(u.e,!a)}})}function Wr(n,e,t,r,i,s=null){var o=n,a={flags:e,items:new Map,first:null},l=null,c=!1,u=Wi(()=>{var h=t();return oo(h)?h:h==null?[]:ao(h)});Hi(()=>{var h=$(u),d=h.length;c&&d===0||(c=d===0,mf(h,a,o,i,e,r,t),s!==null&&(d===0?l?ci(l):l=kn(()=>s(o)):l!==null&&li(l,()=>{l=null})),$(u))})}function mf(n,e,t,r,i,s,o){var a=n.length,l=e.items,c=e.first,u=c,h,d=null,f=[],_=[],g,m,w,C;for(C=0;C<a;C+=1){if(g=n[C],m=s(g,C),w=l.get(m),w===void 0){var T=u?u.e.nodes_start:t;d=yf(T,e,d,d===null?e.first:d.next,g,m,C,r,i,o),l.set(m,d),f=[],_=[],u=d.next;continue}if(vf(w,g,C),(w.e.f&pt)!==0&&ci(w.e),w!==u){if(h!==void 0&&h.has(w)){if(f.length<_.length){var A=_[0],y;d=A.prev;var S=f[0],W=f[f.length-1];for(y=0;y<f.length;y+=1)Fa(f[y],A,t);for(y=0;y<_.length;y+=1)h.delete(_[y]);At(e,S.prev,W.next),At(e,d,S),At(e,W,A),u=A,d=W,C-=1,f=[],_=[]}else h.delete(w),Fa(w,u,t),At(e,w.prev,w.next),At(e,w,d===null?e.first:d.next),At(e,d,w),d=w;continue}for(f=[],_=[];u!==null&&u.k!==m;)(u.e.f&pt)===0&&(h??(h=new Set)).add(u),_.push(u),u=u.next;if(u===null)continue;w=u}f.push(w),d=w,u=w.next}if(u!==null||h!==void 0){for(var M=h===void 0?[]:ao(h);u!==null;)(u.e.f&pt)===0&&M.push(u),u=u.next;var L=M.length;if(L>0){var R=null;gf(e,M,R,l)}}K.first=e.first&&e.first.e,K.last=d&&d.e}function vf(n,e,t,r){ai(n.v,e),n.i=t}function yf(n,e,t,r,i,s,o,a,l,c){var u=(l&Dd)!==0,h=(l&Ld)===0,d=u?h?Ud(i):Te(i):i,f=(l&Md)===0?o:Te(o),_={i:f,v:d,k:s,a:null,e:null,prev:t,next:r};try{return _.e=kn(()=>a(n,d,f,c),Wd),_.e.prev=t&&t.e,_.e.next=r&&r.e,t===null?e.first=_:(t.next=_,t.e.next=_.e),r!==null&&(r.prev=_,r.e.prev=_.e),_}finally{}}function Fa(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==r;){var o=Bi(s);i.before(s),s=o}}function At(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function bf(n,e,t,r,i){var s=n,o="",a;Hi(()=>{o!==(o=e()??"")&&(a!==void 0&&(mt(a),a=void 0),o!==""&&(a=kn(()=>{var l=o+"",c=xc(l);fi(cr(c),c.lastChild),s.before(c)})))})}function tt(n,e,t,r){var i=n.__attributes??(n.__attributes={});i[e]!==(i[e]=t)&&(t==null?n.removeAttribute(e):typeof t!="string"&&Ef(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var Ua=new Map;function Ef(n){var e=Ua.get(n.nodeName);if(e)return e;Ua.set(n.nodeName,e=[]);for(var t,r=n,i=Element.prototype;i!==r;){t=hc(r);for(var s in t)t[s].set&&e.push(s);r=lo(r)}return e}function He(n,e,t=e){var r=wr();Mc(n,"input",i=>{var s=i?n.defaultValue:n.value;if(s=ls(n)?cs(s):s,t(s),r&&s!==(s=e())){var o=n.selectionStart,a=n.selectionEnd;n.value=s??"",a!==null&&(n.selectionStart=o,n.selectionEnd=Math.min(a,n.value.length))}}),qi(e)==null&&n.value&&t(ls(n)?cs(n.value):n.value),Cc(()=>{var i=e();ls(n)&&i===cs(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function ls(n){var e=n.type;return e==="number"||e==="range"}function cs(n){return n===""?null:+n}function Fc(n,e,t){if(n.multiple)return If(n,e);for(var r of n.options){var i=tr(r);if(Vd(i,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function wf(n,e){Vi(()=>{var t=new MutationObserver(()=>{var r=n.__value;Fc(n,r)});return t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function vo(n,e,t=e){var r=!0;Mc(n,"change",i=>{var s=i?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(s),tr);else{var a=n.querySelector(s)??n.querySelector("option:not([disabled])");o=a&&tr(a)}t(o)}),Vi(()=>{var i=e();if(Fc(n,i,r),r&&i===void 0){var s=n.querySelector(":checked");s!==null&&(i=tr(s),t(i))}n.__value=i,r=!1}),wf(n)}function If(n,e){for(var t of n.options)t.selected=~e.indexOf(tr(t))}function tr(n){return"__value"in n?n.__value:n.value}function Be(n=!1){const e=ie,t=e.l.u;if(!t)return;let r=()=>lf(e.s);if(n){let i=0,s={};const o=fo(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>$(o)}t.b.length&&Gd(()=>{Ba(e,r),Aa(t.b)}),Os(()=>{const i=qi(()=>t.m.map(vd));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&Os(()=>{Ba(e,r),Aa(t.a)})}function Ba(n,e){if(n.l.s)for(const t of n.l.s)$(t);e()}function Ie(n){var e=Te(0);return function(){return arguments.length===1?(pe(e,$(e)+1),arguments[0]):($(e),n())}}const Cf="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cf);Od();const Uc="scouterID",Bc="email",Wc="password";let Z=Ne({scouterID:localStorage.getItem(Uc)||"",email:localStorage.getItem(Bc)||"",password:localStorage.getItem(Wc)||""});function us(){localStorage.setItem(Uc,Z.scouterID),localStorage.setItem(Bc,Z.email),localStorage.setItem(Wc,Z.password)}let ne=Ne({uiState:"home",homeState:Z.scouterID.length>=2?"start":"setup",matchState:"metadata"});function yo(n){ne.uiState=n,ne.homeState="start",ne.matchState="metadata"}let k=Ne({metadata:{matchNumber:null,teamNumber:null,alliance:null},prematch:{noShow:!1,startingLocation:null},autonomous:{leave:!1,coral:{preloaded:!1,stationPickup:0,groundIntake:0,l1:0,l2:0,l3:0,l4:0,dropped:0},algae:{reefDescoreDrop:0,reefDescoreTake:0,groundIntake:0,processor:0,net:0,dropped:0}},teleop:{coral:{stationPickup:0,groundIntake:0,l1:0,l2:0,l3:0,l4:0,dropped:0},algae:{reefDescoreDrop:0,reefDescoreTake:0,groundIntake:0,processor:0,net:0,dropped:0}},endgame:{barge:null},postmatch:{dead:!1,tippedOver:!1,card:!1}}),ye=Ne({hasCoral:!1,hasAlgae:!1}),bo;const Sf=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];function Eo(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17}function wo(n){return Sf[n]}function Nn(n){let e=0;for(;n!==0;)e++,n>>>=1;return e}function Tf(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');bo=n}function Vc(){return typeof bo<"u"}function kf(n){return bo(n)}const Io={bit:1},Rn={bit:0},Co={bit:3},So={bit:2};function Nf(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return Io;case"m":case"medium":return Rn;case"q":case"quartile":return Co;case"h":case"high":return So;default:throw new Error("Unknown EC Level: "+n)}}function Rf(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4}function Hc(n,e){if(Rf(n))return n;try{return Nf(n)}catch{return e}}function $c(){this.buffer=[],this.length=0}$c.prototype={get:function(n){const e=Math.floor(n/8);return(this.buffer[e]>>>7-n%8&1)===1},put:function(n,e){for(let t=0;t<e;t++)this.putBit((n>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),n&&(this.buffer[e]|=128>>>this.length%8),this.length++}};function Sr(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Sr.prototype.set=function(n,e,t,r){const i=n*this.size+e;this.data[i]=t,r&&(this.reservedBit[i]=!0)};Sr.prototype.get=function(n,e){return this.data[n*this.size+e]};Sr.prototype.xor=function(n,e,t){this.data[n*this.size+e]^=t};Sr.prototype.isReserved=function(n,e){return this.reservedBit[n*this.size+e]};function Af(n){if(n===1)return[];const e=Math.floor(n/7)+2,t=Eo(n),r=t===145?26:Math.ceil((t-13)/(2*e-2))*2,i=[t-7];for(let s=1;s<e-1;s++)i[s]=i[s-1]-r;return i.push(6),i.reverse()}function Pf(n){const e=[],t=Af(n),r=t.length;for(let i=0;i<r;i++)for(let s=0;s<r;s++)i===0&&s===0||i===0&&s===r-1||i===r-1&&s===0||e.push([t[i],t[s]]);return e}const Wa=7;function Of(n){const e=Eo(n);return[[0,0],[e-Wa,0],[0,e-Wa]]}const lt={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Xt={N1:3,N2:3,N3:40,N4:10};function Df(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7}function Mf(n){return Df(n)?parseInt(n,10):void 0}function Lf(n){const e=n.size;let t=0,r=0,i=0,s=null,o=null;for(let a=0;a<e;a++){r=i=0,s=o=null;for(let l=0;l<e;l++){let c=n.get(a,l);c===s?r++:(r>=5&&(t+=Xt.N1+(r-5)),s=c,r=1),c=n.get(l,a),c===o?i++:(i>=5&&(t+=Xt.N1+(i-5)),o=c,i=1)}r>=5&&(t+=Xt.N1+(r-5)),i>=5&&(t+=Xt.N1+(i-5))}return t}function xf(n){const e=n.size;let t=0;for(let r=0;r<e-1;r++)for(let i=0;i<e-1;i++){const s=n.get(r,i)+n.get(r,i+1)+n.get(r+1,i)+n.get(r+1,i+1);(s===4||s===0)&&t++}return t*Xt.N2}function Ff(n){const e=n.size;let t=0,r=0,i=0;for(let s=0;s<e;s++){r=i=0;for(let o=0;o<e;o++)r=r<<1&2047|n.get(s,o),o>=10&&(r===1488||r===93)&&t++,i=i<<1&2047|n.get(o,s),o>=10&&(i===1488||i===93)&&t++}return t*Xt.N3}function Uf(n){let e=0;const t=n.data.length;for(let i=0;i<t;i++)e+=n.data[i];return Math.abs(Math.ceil(e*100/t/5)-10)*Xt.N4}function Bf(n,e,t){switch(n){case lt.PATTERN000:return(e+t)%2===0;case lt.PATTERN001:return e%2===0;case lt.PATTERN010:return t%3===0;case lt.PATTERN011:return(e+t)%3===0;case lt.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2===0;case lt.PATTERN101:return e*t%2+e*t%3===0;case lt.PATTERN110:return(e*t%2+e*t%3)%2===0;case lt.PATTERN111:return(e*t%3+(e+t)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}function xs(n,e){const t=e.size;for(let r=0;r<t;r++)for(let i=0;i<t;i++)e.isReserved(i,r)||e.xor(i,r,Bf(n,i,r))}function Wf(n,e){const t=Object.keys(lt).length;let r=0,i=1/0;for(let s=0;s<t;s++){e(s),xs(s,n);const o=Lf(n)+xf(n)+Ff(n)+Uf(n);xs(s,n),o<i&&(i=o,r=s)}return r}const Vr=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Hr=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];function Vf(n,e){switch(e){case Io:return Vr[(n-1)*4+0];case Rn:return Vr[(n-1)*4+1];case Co:return Vr[(n-1)*4+2];case So:return Vr[(n-1)*4+3];default:return}}function To(n,e){switch(e){case Io:return Hr[(n-1)*4+0];case Rn:return Hr[(n-1)*4+1];case Co:return Hr[(n-1)*4+2];case So:return Hr[(n-1)*4+3];default:return}}const nr=new Uint8Array(512),Fs=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)nr[t]=e,Fs[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)nr[t]=nr[t-255]})();function Hf(n){return nr[n]}function jc(n,e){return n===0||e===0?0:nr[Fs[n]+Fs[e]]}function $f(n,e){const t=new Uint8Array(n.length+e.length-1);for(let r=0;r<n.length;r++)for(let i=0;i<e.length;i++)t[r+i]^=jc(n[r],e[i]);return t}function jf(n,e){let t=new Uint8Array(n);for(;t.length-e.length>=0;){const r=t[0];for(let s=0;s<e.length;s++)t[s]^=jc(e[s],r);let i=0;for(;i<t.length&&t[i]===0;)i++;t=t.slice(i)}return t}function qf(n){let e=new Uint8Array([1]);for(let t=0;t<n;t++)e=$f(e,new Uint8Array([1,Hf(t)]));return e}function ko(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ko.prototype.initialize=function(e){this.degree=e,this.genPoly=qf(this.degree)};ko.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=jf(t,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};function zi(n){return!isNaN(n)&&n>=1&&n<=40}const qc="[0-9]+",zf="[A-Z $%*+\\-./:]+";let ur="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ur=ur.replace(/u/g,"\\u");const Gf="(?:(?![A-Z0-9 $%*+\\-./:]|"+ur+`)(?:.|[\r
]))+`,Kf=new RegExp(ur,"g"),Yf=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Qf=new RegExp(Gf,"g"),Jf=new RegExp(qc,"g"),Xf=new RegExp(zf,"g"),Zf=new RegExp("^"+ur+"$"),e_=new RegExp("^"+qc+"$"),t_=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");function n_(n){return Zf.test(n)}function r_(n){return e_.test(n)}function i_(n){return t_.test(n)}const qt={id:"Numeric",bit:1,ccBits:[10,12,14]},yt={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},me={id:"Byte",bit:4,ccBits:[8,16,16]},bt={id:"Kanji",bit:8,ccBits:[8,10,12]},zc={};function No(n,e){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!zi(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?n.ccBits[0]:e<27?n.ccBits[1]:n.ccBits[2]}function s_(n){return r_(n)?qt:i_(n)?yt:n_(n)?bt:me}function Va(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")}function o_(n){return n&&n.bit&&n.ccBits}function a_(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return qt;case"alphanumeric":return yt;case"kanji":return bt;case"byte":return me;default:throw new Error("Unknown mode: "+n)}}function l_(n,e){if(o_(n))return n;try{return a_(n)}catch{return e}}const Gc=7973,Ha=Nn(Gc);function c_(n,e,t){for(let r=1;r<=40;r++)if(e<=Yc(r,t,n))return r}function Kc(n,e){return No(n,e)+4}function u_(n,e){let t=0;return n.forEach(function(r){const i=Kc(r.mode,e);t+=i+r.getBitsLength()}),t}function h_(n,e){for(let t=1;t<=40;t++)if(u_(n,t)<=Yc(t,e,zc))return t}function d_(n,e){return zi(n)?parseInt(n,10):e}function Yc(n,e,t){if(!zi(n))throw new Error("Invalid QR Code version");typeof t>"u"&&(t=me);const r=wo(n),i=To(n,e),s=(r-i)*8;if(t===zc)return s;const o=s-Kc(t,n);switch(t){case qt:return Math.floor(o/10*3);case yt:return Math.floor(o/11*2);case bt:return Math.floor(o/13);case me:default:return Math.floor(o/8)}}function $a(n,e){let t;const r=Hc(e,Rn);if(Array.isArray(n)){if(n.length>1)return h_(n,r);if(n.length===0)return 1;t=n[0]}else t=n;return c_(t.mode,t.getLength(),r)}function f_(n){if(!zi(n)||n<7)throw new Error("Invalid QR Code version");let e=n<<12;for(;Nn(e)-Ha>=0;)e^=Gc<<Nn(e)-Ha;return n<<12|e}const Qc=1335,__=21522,ja=Nn(Qc);function p_(n,e){const t=n.bit<<3|e;let r=t<<10;for(;Nn(r)-ja>=0;)r^=Qc<<Nn(r)-ja;return(t<<10|r)^__}function nn(n){this.mode=qt,this.data=n.toString()}nn.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};nn.prototype.getLength=function(){return this.data.length};nn.prototype.getBitsLength=function(){return nn.getBitsLength(this.data.length)};nn.prototype.write=function(e){let t,r,i;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-t;s>0&&(r=this.data.substr(t),i=parseInt(r,10),e.put(i,s*3+1))};const hs=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Gi(n){this.mode=yt,this.data=n}function Jc(n){return 11*Math.floor(n/2)+6*(n%2)}Gi.prototype.getLength=function(){return this.data.length};Gi.prototype.getBitsLength=function(){return Jc(this.data.length)};Gi.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=hs.indexOf(this.data[t])*45;r+=hs.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(hs.indexOf(this.data[t]),6)};function rn(n){this.mode=me,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}rn.getBitsLength=function(e){return e*8};rn.prototype.getLength=function(){return this.data.length};rn.prototype.getBitsLength=function(){return rn.getBitsLength(this.data.length)};rn.prototype.write=function(n){for(let e=0,t=this.data.length;e<t;e++)n.put(this.data[e],8)};function sn(n){this.mode=bt,this.data=n}sn.getBitsLength=function(e){return e*13};sn.prototype.getLength=function(){return this.data.length};sn.prototype.getBitsLength=function(){return sn.getBitsLength(this.data.length)};sn.prototype.write=function(n){let e;for(e=0;e<this.data.length;e++){let t=kf(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),n.put(t,13)}};var ds={exports:{}},qa;function g_(){return qa||(qa=1,function(n){var e={single_source_shortest_paths:function(t,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,h,d,f,_,g,m;!a.empty();){l=a.pop(),c=l.value,h=l.cost,d=t[c]||{};for(u in d)d.hasOwnProperty(u)&&(f=d[u],_=h+f,g=o[u],m=typeof o[u]>"u",(m||g>_)&&(o[u]=_,a.push(u,_),s[u]=c))}if(typeof i<"u"&&typeof o[i]>"u"){var w=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(w)}return s},extract_shortest_path_from_predecessor_list:function(t,r){for(var i=[],s=r;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,r,i){var s=e.single_source_shortest_paths(t,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var r=e.PriorityQueue,i={},s;t=t||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=t.sorter||r.default_sorter,i},default_sorter:function(t,r){return t.cost-r.cost},push:function(t,r){var i={value:t,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(ds)),ds.exports}var m_=g_();function za(n){return unescape(encodeURIComponent(n)).length}function qn(n,e,t){const r=[];let i;for(;(i=n.exec(t))!==null;)r.push({data:i[0],index:i.index,mode:e,length:i[0].length});return r}function Xc(n){const e=qn(Jf,qt,n),t=qn(Xf,yt,n);let r,i;return Vc()?(r=qn(Qf,me,n),i=qn(Kf,bt,n)):(r=qn(Yf,me,n),i=[]),e.concat(t,r,i).sort(function(o,a){return o.index-a.index}).map(function(o){return{data:o.data,mode:o.mode,length:o.length}})}function fs(n,e){switch(e){case qt:return nn.getBitsLength(n);case yt:return Jc(n);case bt:return sn.getBitsLength(n);case me:return rn.getBitsLength(n)}}function v_(n){return n.reduce(function(e,t){const r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function y_(n){const e=[];for(let t=0;t<n.length;t++){const r=n[t];switch(r.mode){case qt:e.push([r,{data:r.data,mode:yt,length:r.length},{data:r.data,mode:me,length:r.length}]);break;case yt:e.push([r,{data:r.data,mode:me,length:r.length}]);break;case bt:e.push([r,{data:r.data,mode:me,length:za(r.data)}]);break;case me:e.push([{data:r.data,mode:me,length:za(r.data)}])}}return e}function b_(n,e){const t={},r={start:{}};let i=["start"];for(let s=0;s<n.length;s++){const o=n[s],a=[];for(let l=0;l<o.length;l++){const c=o[l],u=""+s+l;a.push(u),t[u]={node:c,lastCount:0},r[u]={};for(let h=0;h<i.length;h++){const d=i[h];t[d]&&t[d].node.mode===c.mode?(r[d][u]=fs(t[d].lastCount+c.length,c.mode)-fs(t[d].lastCount,c.mode),t[d].lastCount+=c.length):(t[d]&&(t[d].lastCount=c.length),r[d][u]=fs(c.length,c.mode)+4+No(c.mode,e))}}i=a}for(let s=0;s<i.length;s++)r[i[s]].end=0;return{map:r,table:t}}function Ga(n,e){let t;const r=s_(n);if(t=l_(e,r),t!==me&&t.bit<r.bit)throw new Error('"'+n+'" cannot be encoded with mode '+Va(t)+`.
 Suggested mode is: `+Va(r));switch(t===bt&&!Vc()&&(t=me),t){case qt:return new nn(n);case yt:return new Gi(n);case bt:return new sn(n);case me:return new rn(n)}}function Ro(n){return n.reduce(function(e,t){return typeof t=="string"?e.push(Ga(t,null)):t.data&&e.push(Ga(t.data,t.mode)),e},[])}function E_(n,e){const t=Xc(n),r=y_(t),i=b_(r,e),s=m_.find_path(i.map,"start","end"),o=[];for(let a=1;a<s.length-1;a++)o.push(i.table[s[a]].node);return Ro(v_(o))}function w_(n){return Ro(Xc(n))}function I_(n,e){const t=n.size,r=Of(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||t<=s+a))for(let l=-1;l<=7;l++)o+l<=-1||t<=o+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?n.set(s+a,o+l,!0,!0):n.set(s+a,o+l,!1,!0))}}function C_(n){const e=n.size;for(let t=8;t<e-8;t++){const r=t%2===0;n.set(t,6,r,!0),n.set(6,t,r,!0)}}function S_(n,e){const t=Pf(e);for(let r=0;r<t.length;r++){const i=t[r][0],s=t[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?n.set(i+o,s+a,!0,!0):n.set(i+o,s+a,!1,!0)}}function T_(n,e){const t=n.size,r=f_(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+t-8-3,o=(r>>a&1)===1,n.set(i,s,o,!0),n.set(s,i,o,!0)}function _s(n,e,t){const r=n.size,i=p_(e,t);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?n.set(s,8,o,!0):s<8?n.set(s+1,8,o,!0):n.set(r-15+s,8,o,!0),s<8?n.set(8,r-s-1,o,!0):s<9?n.set(8,15-s-1+1,o,!0):n.set(8,15-s-1,o,!0);n.set(r-8,8,1,!0)}function k_(n,e){const t=n.size;let r=-1,i=t-1,s=7,o=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!n.isReserved(i,a-l)){let c=!1;o<e.length&&(c=(e[o]>>>s&1)===1),n.set(i,a-l,c),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||t<=i){i-=r,r=-r;break}}}function N_(n,e,t){const r=new $c;t.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),No(l.mode,n)),l.write(r)});const i=wo(n),s=To(n,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return R_(r,n,e)}function R_(n,e,t){const r=wo(e),i=To(e,t),s=r-i,o=Vf(e,t),a=r%o,l=o-a,c=Math.floor(r/o),u=Math.floor(s/o),h=u+1,d=c-u,f=new ko(d);let _=0;const g=new Array(o),m=new Array(o);let w=0;const C=new Uint8Array(n.buffer);for(let W=0;W<o;W++){const M=W<l?u:h;g[W]=C.slice(_,_+M),m[W]=f.encode(g[W]),_+=M,w=Math.max(w,M)}const T=new Uint8Array(r);let A=0,y,S;for(y=0;y<w;y++)for(S=0;S<o;S++)y<g[S].length&&(T[A++]=g[S][y]);for(y=0;y<d;y++)for(S=0;S<o;S++)T[A++]=m[S][y];return T}function A_(n,e,t,r){let i;if(Array.isArray(n))i=Ro(n);else if(typeof n=="string"){let c=e;if(!c){const u=w_(n);c=$a(u,t)}i=E_(n,c||40)}else throw new Error("Invalid data");const s=$a(i,t);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=N_(e,t,i),a=Eo(e),l=new Sr(a);return I_(l,e),C_(l),S_(l,e),_s(l,t,0),e>=7&&T_(l,e),k_(l,o),isNaN(r)&&(r=Wf(l,_s.bind(null,l,t))),xs(r,l),_s(l,t,r),{modules:l,version:e,errorCorrectionLevel:t,maskPattern:r,segments:i}}function P_(n,e){if(typeof n>"u"||n==="")throw new Error("No input text");let t=Rn,r,i;return typeof e<"u"&&(t=Hc(e.errorCorrectionLevel,Rn),r=d_(e.version),i=Mf(e.maskPattern),e.toSJISFunc&&Tf(e.toSJISFunc)),A_(n,r,t,i)}function Ka(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let e=n.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+n);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(r){return[r,r]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}function O_(n){n||(n={}),n.color||(n.color={});const e=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,t=n.width&&n.width>=21?n.width:void 0,r=n.scale||4;return{width:t,scale:t?4:r,margin:e,color:{dark:Ka(n.color.dark||"#000000ff"),light:Ka(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}}function Ya(n,e){const t=n.a/255,r=e+'="'+n.hex+'"';return t<1?r+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':r}function ps(n,e,t){let r=n+e;return typeof t<"u"&&(r+=" "+t),r}function D_(n,e,t){let r="",i=0,s=!1,o=0;for(let a=0;a<n.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!s&&(s=!0),n[a]?(o++,a>0&&l>0&&n[a-1]||(r+=s?ps("M",l+t,.5+c+t):ps("m",i,0),i=0,s=!1),l+1<e&&n[a+1]||(r+=ps("h",o),o=0)):i++}return r}function M_(n,e,t){const r=O_(e),i=n.modules.size,s=n.modules.data,o=i+r.margin*2,a=r.color.light.a?"<path "+Ya(r.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",l="<path "+Ya(r.color.dark,"stroke")+' d="'+D_(s,i,r.margin)+'"/>',c='viewBox="0 0 '+o+" "+o+'"';return'<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+c+' shape-rendering="crispEdges" style="'+e.style+'">'+a+l+`</svg>
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
 */const Zc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(n,e){if(!n)throw Fn(e)},Fn=function(n){return new Error("Firebase Database ("+Zc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const eu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},x_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):x_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new F_;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(n){const e=eu(n);return Ao.encodeByteArray(e,!0)},_i=function(n){return tu(n).replace(/\./g,"")},pi=function(n){try{return Ao.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function U_(n){return nu(void 0,n)}function nu(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!B_(t)||(n[t]=nu(n[t],e[t]));return n}function B_(n){return n!=="__proto__"}/**
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
 */const V_=()=>W_().__FIREBASE_DEFAULTS__,H_=()=>{if(typeof process>"u"||typeof Qa>"u")return;const n=Qa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pi(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return V_()||H_()||$_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ru=n=>{var e,t;return(t=(e=Po())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},j_=n=>{const e=ru(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},iu=()=>{var n;return(n=Po())===null||n===void 0?void 0:n.config},su=n=>{var e;return(e=Po())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function q_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_i(JSON.stringify(t)),_i(JSON.stringify(o)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function z_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function G_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K_(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Y_(){return Zc.NODE_ADMIN===!0}function Q_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const X_="FirebaseError";class zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=X_,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Z_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,r)}}function Z_(n,e){return n.replace(ep,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ep=/\{\$([^}]+)}/g;/**
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
 */function hr(n){return JSON.parse(n)}function ue(n){return JSON.stringify(n)}/**
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
 */const au=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=hr(pi(s[0])||""),t=hr(pi(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},tp=function(n){const e=au(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},np=function(n){const e=au(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function An(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Us(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gi(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function mi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ja(s)&&Ja(o)){if(!mi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ja(n){return n!==null&&typeof n=="object"}/**
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
 */function Un(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class rp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)r[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ip(n,e){const t=new sp(n,e);return t.subscribe.bind(t)}class sp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");op(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=gs),i.error===void 0&&(i.error=gs),i.complete===void 0&&(i.complete=gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gs(){}function Do(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ap=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,v(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yi=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class on{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class lp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ki;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(n){return n===Yt?void 0:n}function up(n){return n.instantiationMode==="EAGER"}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const dp={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},fp=z.INFO,_p={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},pp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=_p[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const gp=(n,e)=>e.some(t=>n instanceof t);let Xa,Za;function mp(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lu=new WeakMap,Bs=new WeakMap,cu=new WeakMap,ms=new WeakMap,Lo=new WeakMap;function yp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(xt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lu.set(t,n)}).catch(()=>{}),Lo.set(e,n),e}function bp(n){if(Bs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Bs.set(n,e)}let Ws={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ep(n){Ws=n(Ws)}function wp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vs(this),e,...t);return cu.set(r,e.sort?e.sort():[e]),xt(r)}:vp().includes(n)?function(...e){return n.apply(vs(this),e),xt(lu.get(this))}:function(...e){return xt(n.apply(vs(this),e))}}function Ip(n){return typeof n=="function"?wp(n):(n instanceof IDBTransaction&&bp(n),gp(n,mp())?new Proxy(n,Ws):n)}function xt(n){if(n instanceof IDBRequest)return yp(n);if(ms.has(n))return ms.get(n);const e=Ip(n);return e!==n&&(ms.set(n,e),Lo.set(e,n)),e}const vs=n=>Lo.get(n);function Cp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=xt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xt(o.result),l.oldVersion,l.newVersion,xt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sp=["get","getKey","getAll","getAllKeys","count"],Tp=["put","add","delete","clear"],ys=new Map;function el(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ys.get(e))return ys.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Tp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sp.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ys.set(e,s),s}Ep(n=>({...n,get:(e,t,r)=>el(e,t)||n.get(e,t,r),has:(e,t)=>!!el(e,t)||n.has(e,t)}));/**
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
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Np(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",tl="0.11.1";/**
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
 */const Et=new Mo("@firebase/app"),Rp="@firebase/app-compat",Ap="@firebase/analytics-compat",Pp="@firebase/analytics",Op="@firebase/app-check-compat",Dp="@firebase/app-check",Mp="@firebase/auth",Lp="@firebase/auth-compat",xp="@firebase/database",Fp="@firebase/data-connect",Up="@firebase/database-compat",Bp="@firebase/functions",Wp="@firebase/functions-compat",Vp="@firebase/installations",Hp="@firebase/installations-compat",$p="@firebase/messaging",jp="@firebase/messaging-compat",qp="@firebase/performance",zp="@firebase/performance-compat",Gp="@firebase/remote-config",Kp="@firebase/remote-config-compat",Yp="@firebase/storage",Qp="@firebase/storage-compat",Jp="@firebase/firestore",Xp="@firebase/vertexai",Zp="@firebase/firestore-compat",eg="firebase",tg="11.3.1";/**
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
 */const Hs="[DEFAULT]",ng={[Vs]:"fire-core",[Rp]:"fire-core-compat",[Pp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Dp]:"fire-app-check",[Op]:"fire-app-check-compat",[Mp]:"fire-auth",[Lp]:"fire-auth-compat",[xp]:"fire-rtdb",[Fp]:"fire-data-connect",[Up]:"fire-rtdb-compat",[Bp]:"fire-fn",[Wp]:"fire-fn-compat",[Vp]:"fire-iid",[Hp]:"fire-iid-compat",[$p]:"fire-fcm",[jp]:"fire-fcm-compat",[qp]:"fire-perf",[zp]:"fire-perf-compat",[Gp]:"fire-rc",[Kp]:"fire-rc-compat",[Yp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Jp]:"fire-fst",[Zp]:"fire-fst-compat",[Xp]:"fire-vertex","fire-js":"fire-js",[eg]:"fire-js-all"};/**
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
 */const vi=new Map,rg=new Map,$s=new Map;function nl(n,e){try{n.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if($s.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;$s.set(e,n);for(const t of vi.values())nl(t,n);for(const t of rg.values())nl(t,n);return!0}function xo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ye(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Tr("app","Firebase",ig);/**
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
 */class sg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Bn=tg;function uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(t||(t=iu()),!t)throw Ft.create("no-options");const s=vi.get(i);if(s){if(mi(t,s.options)&&mi(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const o=new hp(i);for(const l of $s.values())o.addComponent(l);const a=new sg(t,r,o);return vi.set(i,a),a}function hu(n=Hs){const e=vi.get(n);if(!e&&n===Hs&&iu())return uu();if(!e)throw Ft.create("no-app",{appName:n});return e}function Ut(n,e,t){var r;let i=(r=ng[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(a.join(" "));return}Pn(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const og="firebase-heartbeat-database",ag=1,dr="firebase-heartbeat-store";let bs=null;function du(){return bs||(bs=Cp(og,ag,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),bs}async function lg(n){try{const t=(await du()).transaction(dr),r=await t.objectStore(dr).get(fu(n));return await t.done,r}catch(e){if(e instanceof zt)Et.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(t.message)}}}async function rl(n,e){try{const r=(await du()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,fu(n)),await r.done}catch(t){if(t instanceof zt)Et.warn(t.message);else{const r=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Et.warn(r.message)}}}function fu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cg=1024,ug=30;class hg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=il();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ug){const o=_g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=il(),{heartbeatsToSend:r,unsentEntries:i}=dg(this._heartbeatsCache.heartbeats),s=_i(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Et.warn(t),""}}}function il(){return new Date().toISOString().substring(0,10)}function dg(n,e=cg){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),sl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return rl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return rl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sl(n){return _i(JSON.stringify({version:2,heartbeats:n})).length}function _g(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function pg(n){Pn(new on("platform-logger",e=>new kp(e),"PRIVATE")),Pn(new on("heartbeat",e=>new hg(e),"PRIVATE")),Ut(Vs,tl,n),Ut(Vs,tl,"esm2017"),Ut("fire-js","")}pg("");var ol={};const al="@firebase/database",ll="1.0.12";/**
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
 */let _u="";function gg(n){_u=n}/**
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
 */class mg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:hr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pu=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mg(e)}}catch{}return new vg},Zt=pu("localStorage"),yg=pu("sessionStorage");/**
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
 */const En=new Mo("@firebase/database"),bg=function(){let n=1;return function(){return n++}}(),gu=function(n){const e=ap(n),t=new rp;t.update(e);const r=t.digest();return Ao.encodeByteArray(r)},kr=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=kr.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let rr=null,cl=!0;const Eg=function(n,e){v(!0,"Can't turn on custom loggers persistently."),En.logLevel=z.VERBOSE,rr=En.log.bind(En)},ge=function(...n){if(cl===!0&&(cl=!1,rr===null&&yg.get("logging_enabled")===!0&&Eg()),rr){const e=kr.apply(null,n);rr(e)}},Nr=function(n){return function(...e){ge(n,...e)}},js=function(...n){const e="FIREBASE INTERNAL ERROR: "+kr(...n);En.error(e)},wt=function(...n){const e=`FIREBASE FATAL ERROR: ${kr(...n)}`;throw En.error(e),new Error(e)},Pe=function(...n){const e="FIREBASE WARNING: "+kr(...n);En.warn(e)},wg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ig=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},On="[MIN_NAME]",an="[MAX_NAME]",Wn=function(n,e){if(n===e)return 0;if(n===On||e===an)return-1;if(e===On||n===an)return 1;{const t=ul(n),r=ul(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Cg=function(n,e){return n===e?0:n<e?-1:1},zn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ue(e))},Fo=function(n){if(typeof n!="object"||n===null)return ue(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=ue(e[r]),t+=":",t+=Fo(n[e[r]]);return t+="}",t},vu=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function De(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const yu=function(n){v(!mu(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Sg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Ng=new RegExp("^-?(0*)\\d{1,10}$"),Rg=-2147483648,Ag=2147483647,ul=function(n){if(Ng.test(n)){const e=Number(n);if(e>=Rg&&e<=Ag)return e}return null},Vn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Pe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Pg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ir=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Og{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ye(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Dg{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ei.OWNER="owner";/**
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
 */const Uo="5",bu="v",Eu="s",wu="r",Iu="f",Cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Su="ls",Tu="p",qs="ac",ku="websocket",Nu="long_polling";/**
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
 */class Ru{constructor(e,t,r,i,s=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Mg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Au(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let r;if(e===ku)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Nu)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mg(n)&&(t.ns=n.namespace);const i=[];return De(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Lg{constructor(){this.counters_={}}incrementCounter(e,t=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return U_(this.counters_)}}/**
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
 */const Es={},ws={};function Bo(n){const e=n.toString();return Es[e]||(Es[e]=new Lg),Es[e]}function xg(n,e){const t=n.toString();return ws[t]||(ws[t]=e()),ws[t]}/**
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
 */class Fg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hl="start",Ug="close",Bg="pLPCommand",Wg="pRTLPCB",Pu="id",Ou="pw",Du="ser",Vg="cb",Hg="seg",$g="ts",jg="d",qg="dframe",Mu=1870,Lu=30,zg=Mu-Lu,Gg=25e3,Kg=3e4;class yn{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nr(e),this.stats_=Bo(t),this.urlFn=l=>(this.appCheckToken&&(l[qs]=this.appCheckToken),Au(t,Nu,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kg)),Ig(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wo((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hl)this.id=a,this.password=l;else if(o===Ug)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[hl]="t",r[Du]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Vg]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bu]=Uo,this.transportSessionId&&(r[Eu]=this.transportSessionId),this.lastSessionId&&(r[Su]=this.lastSessionId),this.applicationId&&(r[Tu]=this.applicationId),this.appCheckToken&&(r[qs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cu.test(location.hostname)&&(r[wu]=Iu);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yn.forceAllow_=!0}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){return yn.forceAllow_?!0:!yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sg()&&!Tg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=tu(t),i=vu(r,zg);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[qg]="t",r[Pu]=e,r[Ou]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ue(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Wo{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bg(),window[Bg+this.uniqueCallbackIdentifier]=e,window[Wg+this.uniqueCallbackIdentifier]=t,this.myIFrame=Wo.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ge("frame writing exception"),a.stack&&ge(a.stack),ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pu]=this.myID,e[Ou]=this.myPW,e[Du]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lu+r.length<=Mu;){const o=this.pendingSegs.shift();r=r+"&"+Hg+i+"="+o.seg+"&"+$g+i+"="+o.ts+"&"+jg+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(Gg)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Yg=16384,Qg=45e3;let yi=null;typeof MozWebSocket<"u"?yi=MozWebSocket:typeof WebSocket<"u"&&(yi=WebSocket);class Qe{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nr(this.connId),this.stats_=Bo(t),this.connURL=Qe.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[bu]=Uo,typeof location<"u"&&location.hostname&&Cu.test(location.hostname)&&(o[wu]=Iu),t&&(o[Eu]=t),r&&(o[Su]=r),i&&(o[qs]=i),s&&(o[Tu]=s),Au(e,ku,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{let r;Y_(),this.mySock=new yi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yi!==null&&!Qe.forceDisallow_}static previouslyFailed(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=hr(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=vu(t,Yg);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
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
 */class fr{static get ALL_TRANSPORTS(){return[yn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Qe&&Qe.isAvailable();let r=t&&!Qe.previouslyFailed();if(e.webSocketOnly&&(t||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qe];else{const i=this.transports_=[];for(const s of fr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fr.globalTransportInitialized_=!1;/**
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
 */const Jg=6e4,Xg=5e3,Zg=10*1024,em=100*1024,Is="t",dl="d",tm="s",fl="r",nm="e",_l="o",pl="a",gl="n",ml="p",rm="h";class im{constructor(e,t,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nr("c:"+this.id+":"),this.transportManager_=new fr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ir(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>em?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Is in e){const t=e[Is];t===pl?this.upgradeIfSecondaryHealthy_():t===fl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_l&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zn("t",e),r=zn("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ml,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zn("t",e),r=zn("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zn(Is,e);if(dl in e){const r=e[dl];if(t===rm){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===gl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tm?this.onConnectionShutdown_(r):t===fl?this.onReset_(r):t===nm?js("Server Error: "+r):t===_l?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):js("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Uo!==r&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ir(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ir(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ml,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xu{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Fu{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class bi extends Fu{static getInstance(){return new bi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vl=32,yl=768;class Y{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function j(){return new Y("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function $t(n){return n.pieces_.length-n.pieceNum_}function Q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Y(n.pieces_,e)}function Uu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function sm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Bu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Wu(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Y(e,0)}function se(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Y(t,0)}function B(n){return n.pieceNum_>=n.pieces_.length}function Re(n,e){const t=x(n),r=x(e);if(t===null)return e;if(t===r)return Re(Q(n),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Vo(n,e){if($t(n)!==$t(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Je(n,e){let t=n.pieceNum_,r=e.pieceNum_;if($t(n)>$t(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class om{constructor(e,t){this.errorPrefix_=t,this.parts_=Bu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Yi(this.parts_[r]);Vu(this)}}function am(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Yi(e),Vu(n)}function lm(n){const e=n.parts_.pop();n.byteLength_-=Yi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Vu(n){if(n.byteLength_>yl)throw new Error(n.errorPrefix_+"has a key path longer than "+yl+" bytes ("+n.byteLength_+").");if(n.parts_.length>vl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vl+") or object contains a cycle "+Qt(n))}function Qt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ho extends Fu{static getInstance(){return new Ho}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gn=1e3,cm=60*5*1e3,bl=30*1e3,um=1.3,hm=3e4,dm="server_kill",El=3;class gt extends xu{constructor(e,t,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=Nr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gn,this.maxReconnectDelay_=cm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ho.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(ue(s)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Ki,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&kt(e,"w")){const r=An(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||np(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tp(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):js("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hm&&(this.reconnectDelay_=Gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*um)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new im(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,f=>{Pe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(dm)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pe(h),l())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Us(this.interruptReasons_)&&(this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Fo(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){ge("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=El&&(this.reconnectDelay_=bl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ge("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=El&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+_u.replace(/\./g,"-")]=1,Oo()?e["framework.cordova"]=1:ou()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bi.getInstance().currentlyOnline();return Us(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
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
 */class U{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new U(e,t)}}/**
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
 */class Qi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new U(On,e),i=new U(On,t);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
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
 */let $r;class Hu extends Qi{static get __EMPTY_NODE(){return $r}static set __EMPTY_NODE(e){$r=e}compare(e,t){return Wn(e.name,t.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return U.MIN}maxPost(){return new U(an,$r)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,$r)}toString(){return".key"}}const wn=new Hu;/**
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
 */class jr{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class le{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??le.RED,this.left=i??Ae.EMPTY_NODE,this.right=s??Ae.EMPTY_NODE}copy(e,t,r,i,s){return new le(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Ae.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}le.RED=!0;le.BLACK=!1;class fm{copy(e,t,r,i,s){return this}insert(e,t,r){return new le(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,t=Ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,le.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,le.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new jr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new jr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new jr(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new fm;/**
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
 */function _m(n,e){return Wn(n.name,e.name)}function $o(n,e){return Wn(n,e)}/**
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
 */let zs;function pm(n){zs=n}const $u=function(n){return typeof n=="number"?"number:"+yu(n):"string:"+n},ju=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else v(n===zs||n.isEmpty(),"priority of unexpected type.");v(n===zs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wl;class ae{static set __childrenNodeConstructor(e){wl=e}static get __childrenNodeConstructor(){return wl}constructor(e,t=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ju(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:x(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=x(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(v(r!==".priority"||$t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$u(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=yu(this.value_):e+=this.value_,this.lazyHash_=gu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(t),s=ae.VALUE_TYPE_ORDER.indexOf(r);return v(i>=0,"Unknown leaf type: "+t),v(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qu,zu;function gm(n){qu=n}function mm(n){zu=n}class vm extends Qi{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Wn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return U.MIN}maxPost(){return new U(an,new ae("[PRIORITY-POST]",zu))}makePost(e,t){const r=qu(e);return new U(t,new ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new vm;/**
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
 */const ym=Math.log(2);class bm{constructor(e){const t=s=>parseInt(Math.log(s)/ym,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ei=function(n,e,t,r){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new le(d,h.node,le.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=i(l,f),g=i(f+1,c);return h=n[f],d=t?t(h):h,new le(d,h.node,le.BLACK,_,g)}},s=function(l){let c=null,u=null,h=n.length;const d=function(_,g){const m=h-_,w=h;h-=_;const C=i(m+1,w),T=n[m],A=t?t(T):T;f(new le(A,T.node,g,null,C))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(_+1));g?d(m,le.BLACK):(d(m,le.BLACK),d(m,le.RED))}return u},o=new bm(n.length),a=s(o);return new Ae(r||e,a)};/**
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
 */let Cs;const vn={};class ht{static get Default(){return v(vn&&re,"ChildrenNode.ts has not been loaded"),Cs=Cs||new ht({".priority":vn},{".priority":re}),Cs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=An(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ae?t:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,t){v(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ei(r,e.getCompare()):a=vn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ht(u,c)}addToIndexes(e,t){const r=gi(this.indexes_,(i,s)=>{const o=An(this.indexSet_,s);if(v(o,"Missing index implementation for "+s),i===vn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ei(a,o.getCompare())}else return vn;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new ht(r,this.indexSet_)}removeFromIndexes(e,t){const r=gi(this.indexes_,i=>{if(i===vn)return i;{const s=t.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new ht(r,this.indexSet_)}}/**
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
 */let Kn;class O{static get EMPTY_NODE(){return Kn||(Kn=new O(new Ae($o),null,ht.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ju(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kn}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Kn:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new U(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Kn:this.priorityNode_;return new O(i,o,s)}}updateChild(e,t){const r=x(e);if(r===null)return t;{v(x(e)!==".priority"||$t(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,a)=>{t[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$u(this.getPriority().val())+":"),this.forEachChild(re,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":gu(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new U(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new U(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(re),i=t.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Em extends O{constructor(){super(new Ae($o),O.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Rr=new Em;Object.defineProperties(U,{MIN:{value:new U(On,O.EMPTY_NODE)},MAX:{value:new U(an,Rr)}});Hu.__EMPTY_NODE=O.EMPTY_NODE;ae.__childrenNodeConstructor=O;pm(Rr);mm(Rr);/**
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
 */const wm=!0;function _e(n,e=null){if(n===null)return O.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ae(t,_e(e))}if(!(n instanceof Array)&&wm){const t=[];let r=!1;if(De(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new U(o,l)))}}),t.length===0)return O.EMPTY_NODE;const s=Ei(t,_m,o=>o.name,$o);if(r){const o=Ei(t,re.getCompare());return new O(s,_e(e),new ht({".priority":o},{".priority":re}))}else return new O(s,_e(e),ht.Default)}else{let t=O.EMPTY_NODE;return De(n,(r,i)=>{if(kt(n,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(_e(e))}}gm(_e);/**
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
 */class Im extends Qi{constructor(e){super(),this.indexPath_=e,v(!B(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Wn(e.name,t.name):s}makePost(e,t){const r=_e(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(t,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new U(an,e)}toString(){return Bu(this.indexPath_,0).join("/")}}/**
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
 */class Cm extends Qi{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Wn(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,t){const r=_e(e);return new U(t,r)}toString(){return".value"}}const Sm=new Cm;/**
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
 */function Gu(n){return{type:"value",snapshotNode:n}}function Dn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _r(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function pr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Tm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class jo{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(_r(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Dn(t,r)):o.trackChildChange(pr(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{t.hasChild(i)||r.trackChildChange(_r(i,s))}),t.isLeafNode()||t.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(pr(i,s,o))}else r.trackChildChange(Dn(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gr{constructor(e){this.indexedFilter_=new jo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gr.getStartPost_(e),this.endPost_=gr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new U(t,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=O.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return t.forEachChild(re,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class km{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new U(t,r))||(r=O.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new U(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(pr(t,r,h)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(_r(t,h));const g=a.updateImmediateChild(t,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Dn(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(_r(c.name,c.node)),s.trackChildChange(Dn(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class qo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:On}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new qo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nm(n){return n.loadsAllData()?new jo(n.getIndex()):n.hasLimit()?new km(n):new gr(n)}function Il(n){const e={};if(n.isDefault())return e;let t;if(n.index_===re?t="$priority":n.index_===Sm?t="$value":n.index_===wn?t="$key":(v(n.index_ instanceof Im,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ue(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=ue(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+ue(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=ue(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+ue(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Cl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==re&&(e.i=n.index_.toString()),e}/**
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
 */class wi extends xu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Nr("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wi.getListenId_(e,r),a={};this.listens_[o]=a;const l=Il(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),An(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const r=wi.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Il(e._queryParams),r=e._path.toString(),i=new Ki;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Un(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hr(a.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Rm{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ii(){return{value:null,children:new Map}}function Ku(n,e,t){if(B(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=x(e);n.children.has(r)||n.children.set(r,Ii());const i=n.children.get(r);e=Q(e),Ku(i,e,t)}}function Gs(n,e,t){n.value!==null?t(e,n.value):Am(n,(r,i)=>{const s=new Y(e.toString()+"/"+r);Gs(i,s,t)})}function Am(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class Pm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&De(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const Sl=10*1e3,Om=30*1e3,Dm=5*60*1e3;class Mm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Pm(e);const r=Sl+(Om-Sl)*Math.random();ir(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;De(e,(i,s)=>{s>0&&kt(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),ir(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dm))}}/**
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
 */var Xe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Yu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Go(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ci{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Xe.ACK_USER_WRITE,this.source=Yu()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Y(e));return new Ci(j(),t,this.revert)}}else return v(x(this.path)===e,"operationForChild called for unrelated child."),new Ci(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class mr{constructor(e,t){this.source=e,this.path=t,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new mr(this.source,j()):new mr(this.source,Q(this.path))}}/**
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
 */class ln{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Xe.OVERWRITE}operationForChild(e){return B(this.path)?new ln(this.source,j(),this.snap.getImmediateChild(e)):new ln(this.source,Q(this.path),this.snap)}}/**
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
 */class vr{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Xe.MERGE}operationForChild(e){if(B(this.path)){const t=this.children.subtree(new Y(e));return t.isEmpty()?null:t.value?new ln(this.source,j(),t.value):new vr(this.source,j(),t)}else return v(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vr(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class cn{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Lm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xm(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Tm(o.childName,o.snapshotNode))}),Yn(n,i,"child_removed",e,r,t),Yn(n,i,"child_added",e,r,t),Yn(n,i,"child_moved",s,r,t),Yn(n,i,"child_changed",e,r,t),Yn(n,i,"value",e,r,t),i}function Yn(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,l)=>Um(n,a,l)),o.forEach(a=>{const l=Fm(n,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Fm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Um(n,e,t){if(e.childName==null||t.childName==null)throw Fn("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function Ji(n,e){return{eventCache:n,serverCache:e}}function sr(n,e,t,r){return Ji(new cn(e,t,r),n.serverCache)}function Qu(n,e,t,r){return Ji(n.eventCache,new cn(e,t,r))}function Ks(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function un(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ss;const Bm=()=>(Ss||(Ss=new Ae(Cg)),Ss);class X{static fromObject(e){let t=new X(null);return De(e,(r,i)=>{t=t.set(new Y(r),i)}),t}constructor(e,t=Bm()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:j(),value:this.value};if(B(e))return null;{const r=x(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),t);return s!=null?{path:se(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const t=x(e),r=this.children.get(t);return r!==null?r.subtree(Q(e)):new X(null)}}set(e,t){if(B(e))return new X(t,this.children);{const r=x(e),s=(this.children.get(r)||new X(null)).set(Q(e),t),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const t=x(e),r=this.children.get(t);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const t=x(e),r=this.children.get(t);return r?r.get(Q(e)):null}}setTree(e,t){if(B(e))return t;{const r=x(e),s=(this.children.get(r)||new X(null)).setTree(Q(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,j(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(B(e))return null;{const s=x(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),se(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,j(),t)}foreachOnPath_(e,t,r){if(B(e))return this;{this.value&&r(t,this.value);const i=x(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),se(t,i),r):new X(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new X(null))}}function or(n,e,t){if(B(e))return new et(new X(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Re(i,e);return s=s.updateChild(o,t),new et(n.writeTree_.set(i,s))}else{const i=new X(t),s=n.writeTree_.setTree(e,i);return new et(s)}}}function Tl(n,e,t){let r=n;return De(t,(i,s)=>{r=or(r,se(e,i),s)}),r}function kl(n,e){if(B(e))return et.empty();{const t=n.writeTree_.setTree(e,new X(null));return new et(t)}}function Ys(n,e){return dn(n,e)!=null}function dn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Re(t.path,e)):null}function Nl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(re,(r,i)=>{e.push(new U(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Bt(n,e){if(B(e))return n;{const t=dn(n,e);return t!=null?new et(new X(t)):new et(n.writeTree_.subtree(e))}}function Qs(n){return n.writeTree_.isEmpty()}function Mn(n,e){return Ju(j(),n.writeTree_,e)}function Ju(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(v(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=Ju(se(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(se(n,".priority"),r)),t}}/**
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
 */function Ko(n,e){return th(e,n)}function Wm(n,e,t,r,i){v(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=or(n.visibleWrites,e,t)),n.lastWriteId=r}function Vm(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Hm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&$m(a,r.path)?i=!1:Je(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return jm(n),!0;if(r.snap)n.visibleWrites=kl(n.visibleWrites,r.path);else{const a=r.children;De(a,l=>{n.visibleWrites=kl(n.visibleWrites,se(r.path,l))})}return!0}else return!1}function $m(n,e){if(n.snap)return Je(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Je(se(n.path,t),e))return!0;return!1}function jm(n){n.visibleWrites=Xu(n.allWrites,qm,j()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function qm(n){return n.visible}function Xu(n,e,t){let r=et.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Je(t,o)?(a=Re(t,o),r=or(r,a,s.snap)):Je(o,t)&&(a=Re(o,t),r=or(r,j(),s.snap.getChild(a)));else if(s.children){if(Je(t,o))a=Re(t,o),r=Tl(r,a,s.children);else if(Je(o,t))if(a=Re(o,t),B(a))r=Tl(r,j(),s.children);else{const l=An(s.children,x(a));if(l){const c=l.getChild(Q(a));r=or(r,j(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return r}function Zu(n,e,t,r,i){if(!r&&!i){const s=dn(n.visibleWrites,e);if(s!=null)return s;{const o=Bt(n.visibleWrites,e);if(Qs(o))return t;if(t==null&&!Ys(o,j()))return null;{const a=t||O.EMPTY_NODE;return Mn(o,a)}}}else{const s=Bt(n.visibleWrites,e);if(!i&&Qs(s))return t;if(!i&&t==null&&!Ys(s,j()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Je(c.path,e)||Je(e,c.path))},a=Xu(n.allWrites,o,e),l=t||O.EMPTY_NODE;return Mn(a,l)}}}function zm(n,e,t){let r=O.EMPTY_NODE;const i=dn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Bt(n.visibleWrites,e);return t.forEachChild(re,(o,a)=>{const l=Mn(Bt(s,new Y(o)),a);r=r.updateImmediateChild(o,l)}),Nl(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Bt(n.visibleWrites,e);return Nl(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Gm(n,e,t,r,i){v(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,t);if(Ys(n.visibleWrites,s))return null;{const o=Bt(n.visibleWrites,s);return Qs(o)?i.getChild(t):Mn(o,i.getChild(t))}}function Km(n,e,t,r){const i=se(e,t),s=dn(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Bt(n.visibleWrites,i);return Mn(o,r.getNode().getImmediateChild(t))}else return null}function Ym(n,e){return dn(n.visibleWrites,e)}function Qm(n,e,t,r,i,s,o){let a;const l=Bt(n.visibleWrites,e),c=dn(l,j());if(c!=null)a=c;else if(t!=null)a=Mn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<i;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Jm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Si(n,e,t,r){return Zu(n.writeTree,n.treePath,e,t,r)}function Yo(n,e){return zm(n.writeTree,n.treePath,e)}function Rl(n,e,t,r){return Gm(n.writeTree,n.treePath,e,t,r)}function Ti(n,e){return Ym(n.writeTree,se(n.treePath,e))}function Xm(n,e,t,r,i,s){return Qm(n.writeTree,n.treePath,e,t,r,i,s)}function Qo(n,e,t){return Km(n.writeTree,n.treePath,e,t)}function eh(n,e){return th(se(n.treePath,e),n.writeTree)}function th(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Zm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,pr(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,_r(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,Dn(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,pr(r,e.snapshotNode,i.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ev{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const nh=new ev;class Jo{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qo(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:un(this.viewCache_),s=Xm(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function tv(n){return{filter:n}}function nv(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function rv(n,e,t,r,i){const s=new Zm;let o,a;if(t.type===Xe.OVERWRITE){const c=t;c.source.fromUser?o=Js(n,e,c.path,c.snap,r,i,s):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=ki(n,e,c.path,c.snap,r,i,a,s))}else if(t.type===Xe.MERGE){const c=t;c.source.fromUser?o=sv(n,e,c.path,c.children,r,i,s):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xs(n,e,c.path,c.children,r,i,a,s))}else if(t.type===Xe.ACK_USER_WRITE){const c=t;c.revert?o=lv(n,e,c.path,r,i,s):o=ov(n,e,c.path,c.affectedTree,r,i,s)}else if(t.type===Xe.LISTEN_COMPLETE)o=av(n,e,t.path,r,s);else throw Fn("Unknown operation type: "+t.type);const l=s.getChanges();return iv(e,o,l),{viewCache:o,changes:l}}function iv(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ks(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(Gu(Ks(e)))}}function rh(n,e,t,r,i,s){const o=e.eventCache;if(Ti(r,t)!=null)return e;{let a,l;if(B(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=un(e),u=c instanceof O?c:O.EMPTY_NODE,h=Yo(r,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Si(r,un(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=x(t);if(c===".priority"){v($t(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Rl(r,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Q(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Rl(r,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Qo(r,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,s):a=o.getNode()}}return sr(e,a,o.isFullyInitialized()||B(t),n.filter.filtersNodes())}}function ki(n,e,t,r,i,s,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(B(t))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=x(t);if(!l.isCompleteForPath(t)&&$t(t)>1)return e;const _=Q(t),m=l.getNode().getImmediateChild(f).updateChild(_,r);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,_,nh,null)}const h=Qu(e,c,l.isFullyInitialized()||B(t),u.filtersNodes()),d=new Jo(i,h,s);return rh(n,h,t,i,d,a)}function Js(n,e,t,r,i,s,o){const a=e.eventCache;let l,c;const u=new Jo(i,e,s);if(B(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=sr(e,c,!0,n.filter.filtersNodes());else{const h=x(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=sr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Q(t),f=a.getNode().getImmediateChild(h);let _;if(B(d))_=r;else{const g=u.getCompleteChild(h);g!=null?Uu(d)===".priority"&&g.getChild(Wu(d)).isEmpty()?_=g:_=g.updateChild(d,r):_=O.EMPTY_NODE}if(f.equals(_))l=e;else{const g=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=sr(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Al(n,e){return n.eventCache.isCompleteForChild(e)}function sv(n,e,t,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=se(t,l);Al(e,x(u))&&(a=Js(n,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=se(t,l);Al(e,x(u))||(a=Js(n,a,u,c,i,s,o))}),a}function Pl(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Xs(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(t)?c=r:c=new X(null).setTree(t,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=Pl(n,f,d);l=ki(n,l,new Y(h),_,i,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),g=Pl(n,_,d);l=ki(n,l,new Y(h),g,i,s,o,a)}}),l}function ov(n,e,t,r,i,s,o){if(Ti(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ki(n,e,t,l.getNode().getChild(t),i,s,a,o);if(B(t)){let c=new X(null);return l.getNode().forEachChild(wn,(u,h)=>{c=c.set(new Y(u),h)}),Xs(n,e,t,c,i,s,a,o)}else return e}else{let c=new X(null);return r.foreach((u,h)=>{const d=se(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Xs(n,e,t,c,i,s,a,o)}}function av(n,e,t,r,i){const s=e.serverCache,o=Qu(e,s.getNode(),s.isFullyInitialized()||B(t),s.isFiltered());return rh(n,o,t,r,nh,i)}function lv(n,e,t,r,i,s){let o;if(Ti(r,t)!=null)return e;{const a=new Jo(r,e,i),l=e.eventCache.getNode();let c;if(B(t)||x(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Si(r,un(e));else{const h=e.serverCache.getNode();v(h instanceof O,"serverChildren would be complete if leaf node"),u=Yo(r,h)}u=u,c=n.filter.updateFullNode(l,u,s)}else{const u=x(t);let h=Qo(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,Q(t),a,s):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,O.EMPTY_NODE,Q(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Si(r,un(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ti(r,j())!=null,sr(e,c,o,n.filter.filtersNodes())}}/**
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
 */class cv{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new jo(r.getIndex()),s=Nm(r);this.processor_=tv(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),u=new cn(l,o.isFullyInitialized(),i.filtersNodes()),h=new cn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ji(h,u),this.eventGenerator_=new Lm(this.query_)}get query(){return this.query_}}function uv(n){return n.viewCache_.serverCache.getNode()}function hv(n,e){const t=un(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!B(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function Ol(n){return n.eventRegistrations_.length===0}function dv(n,e){n.eventRegistrations_.push(e)}function Dl(n,e,t){const r=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Ml(n,e,t,r){e.type===Xe.MERGE&&e.source.queryId!==null&&(v(un(n.viewCache_),"We should always have a full cache before handling merges"),v(Ks(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=rv(n.processor_,i,e,t,r);return nv(n.processor_,s.viewCache),v(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,ih(n,s.changes,s.viewCache.eventCache.getNode(),null)}function fv(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(re,(s,o)=>{r.push(Dn(s,o))}),t.isFullyInitialized()&&r.push(Gu(t.getNode())),ih(n,r,t.getNode(),e)}function ih(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return xm(n.eventGenerator_,e,t,i)}/**
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
 */let Ni;class _v{constructor(){this.views=new Map}}function pv(n){v(!Ni,"__referenceConstructor has already been defined"),Ni=n}function gv(){return v(Ni,"Reference.ts has not been loaded"),Ni}function mv(n){return n.views.size===0}function Xo(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return v(s!=null,"SyncTree gave us an op for an invalid query."),Ml(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Ml(o,e,t,r));return s}}function vv(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Si(t,i?r:null),l=!1;a?l=!0:r instanceof O?(a=Yo(t,r),l=!1):(a=O.EMPTY_NODE,l=!1);const c=Ji(new cn(a,l,!1),new cn(r,i,!1));return new cv(e,c)}return o}function yv(n,e,t,r,i,s){const o=vv(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),dv(o,t),fv(o,t)}function bv(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=jt(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Dl(c,t,r)),Ol(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Dl(l,t,r)),Ol(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!jt(n)&&s.push(new(gv())(e._repo,e._path)),{removed:s,events:o}}function sh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function In(n,e){let t=null;for(const r of n.views.values())t=t||hv(r,e);return t}function oh(n,e){if(e._queryParams.loadsAllData())return Xi(n);{const r=e._queryIdentifier;return n.views.get(r)}}function ah(n,e){return oh(n,e)!=null}function jt(n){return Xi(n)!=null}function Xi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ri;function Ev(n){v(!Ri,"__referenceConstructor has already been defined"),Ri=n}function wv(){return v(Ri,"Reference.ts has not been loaded"),Ri}let Iv=1;class Ll{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=Jm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lh(n,e,t,r,i){return Wm(n.pendingWriteTree_,e,t,r,i),i?Ar(n,new ln(Yu(),e,t)):[]}function en(n,e,t=!1){const r=Vm(n.pendingWriteTree_,e);if(Hm(n.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(j(),!0):De(r.children,o=>{s=s.set(new Y(o),!0)}),Ar(n,new Ci(r.path,s,t))}else return[]}function Zi(n,e,t){return Ar(n,new ln(zo(),e,t))}function Cv(n,e,t){const r=X.fromObject(t);return Ar(n,new vr(zo(),e,r))}function Sv(n,e){return Ar(n,new mr(zo(),e))}function Tv(n,e,t){const r=ea(n,t);if(r){const i=ta(r),s=i.path,o=i.queryId,a=Re(s,e),l=new mr(Go(o),a);return na(n,s,l)}else return[]}function Zs(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ah(o,e))){const l=bv(o,e,t,r);mv(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(d,f)=>jt(f));if(u&&!h){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=Rv(d);for(let _=0;_<f.length;++_){const g=f[_],m=g.query,w=hh(n,g);n.listenProvider_.startListening(ar(m),Ai(n,m),w.hashFn,w.onComplete)}}}!h&&c.length>0&&!r&&(u?n.listenProvider_.stopListening(ar(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(es(d));n.listenProvider_.stopListening(ar(d),f)}))}Av(n,c)}return a}function kv(n,e,t,r){const i=ea(n,r);if(i!=null){const s=ta(i),o=s.path,a=s.queryId,l=Re(o,e),c=new ln(Go(a),l,t);return na(n,o,c)}else return[]}function Nv(n,e,t,r){const i=ea(n,r);if(i){const s=ta(i),o=s.path,a=s.queryId,l=Re(o,e),c=X.fromObject(t),u=new vr(Go(a),l,c);return na(n,o,u)}else return[]}function xl(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=Re(d,i);s=s||In(f,_),o=o||jt(f)});let a=n.syncPointTree_.get(i);a?(o=o||jt(a),s=s||In(a,j())):(a=new _v,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const g=In(_,j());g&&(s=s.updateImmediateChild(f,g))}));const c=ah(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=es(e);v(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Pv();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Ko(n.pendingWriteTree_,i);let h=yv(a,e,t,u,s,l);if(!c&&!o&&!r){const d=oh(a,e);h=h.concat(Ov(n,e,d))}return h}function Zo(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Re(o,e),c=In(a,l);if(c)return c});return Zu(i,e,s,t,!0)}function Ar(n,e){return ch(e,n.syncPointTree_,null,Ko(n.pendingWriteTree_,j()))}function ch(n,e,t,r){if(B(n.path))return uh(n,e,t,r);{const i=e.get(j());t==null&&i!=null&&(t=In(i,j()));let s=[];const o=x(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=eh(r,o);s=s.concat(ch(a,l,c,u))}return i&&(s=s.concat(Xo(i,n,r,t))),s}}function uh(n,e,t,r){const i=e.get(j());t==null&&i!=null&&(t=In(i,j()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=eh(r,o),u=n.operationForChild(o);u&&(s=s.concat(uh(u,a,l,c)))}),i&&(s=s.concat(Xo(i,n,r,t))),s}function hh(n,e){const t=e.query,r=Ai(n,t);return{hashFn:()=>(uv(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Tv(n,t._path,r):Sv(n,t._path);{const s=kg(i,t);return Zs(n,t,null,s)}}}}function Ai(n,e){const t=es(e);return n.queryToTagMap.get(t)}function es(n){return n._path.toString()+"$"+n._queryIdentifier}function ea(n,e){return n.tagToQueryMap.get(e)}function ta(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Y(n.substr(0,e))}}function na(n,e,t){const r=n.syncPointTree_.get(e);v(r,"Missing sync point for query tag that we're tracking");const i=Ko(n.pendingWriteTree_,e);return Xo(r,t,i,null)}function Rv(n){return n.fold((e,t,r)=>{if(t&&jt(t))return[Xi(t)];{let i=[];return t&&(i=sh(t)),De(r,(s,o)=>{i=i.concat(o)}),i}})}function ar(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wv())(n._repo,n._path):n}function Av(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=es(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function Pv(){return Iv++}function Ov(n,e,t){const r=e._path,i=Ai(n,e),s=hh(n,t),o=n.listenProvider_.startListening(ar(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)v(!jt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!B(c)&&u&&jt(u))return[Xi(u).query];{let d=[];return u&&(d=d.concat(sh(u).map(f=>f.query))),De(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(ar(u),Ai(n,u))}}return o}/**
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
 */class ra{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ra(t)}node(){return this.node_}}class ia{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=se(this.path_,e);return new ia(this.syncTree_,t)}node(){return Zo(this.syncTree_,this.path_)}}const Dv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fl=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Mv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Lv(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Mv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},Lv=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&v(!1,"Unexpected increment value: "+r);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xv=function(n,e,t,r){return sa(e,new ia(t,n),r)},dh=function(n,e,t){return sa(n,new ra(e),t)};function sa(n,e,t){const r=n.getPriority().val(),i=Fl(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Fl(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ae(a,_e(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ae(i))),o.forEachChild(re,(a,l)=>{const c=sa(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class oa{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function aa(n,e){let t=e instanceof Y?e:new Y(e),r=n,i=x(t);for(;i!==null;){const s=An(r.node.children,i)||{children:{},childCount:0};r=new oa(i,r,s),t=Q(t),i=x(t)}return r}function Hn(n){return n.node.value}function fh(n,e){n.node.value=e,eo(n)}function _h(n){return n.node.childCount>0}function Fv(n){return Hn(n)===void 0&&!_h(n)}function ts(n,e){De(n.node.children,(t,r)=>{e(new oa(t,n,r))})}function ph(n,e,t,r){t&&e(n),ts(n,i=>{ph(i,e,!0)})}function Uv(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pr(n){return new Y(n.parent===null?n.name:Pr(n.parent)+"/"+n.name)}function eo(n){n.parent!==null&&Bv(n.parent,n.name,n)}function Bv(n,e,t){const r=Fv(t),i=kt(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,eo(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,eo(n))}/**
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
 */const Wv=/[\[\].#$\/\u0000-\u001F\u007F]/,Vv=/[\[\].#$\u0000-\u001F\u007F]/,Ts=10*1024*1024,gh=function(n){return typeof n=="string"&&n.length!==0&&!Wv.test(n)},mh=function(n){return typeof n=="string"&&n.length!==0&&!Vv.test(n)},Hv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mh(n)},$v=function(n,e,t,r){la(Do(n,"value"),e,t)},la=function(n,e,t){const r=t instanceof Y?new om(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qt(r));if(typeof e=="function")throw new Error(n+"contains a function "+Qt(r)+" with contents = "+e.toString());if(mu(e))throw new Error(n+"contains "+e.toString()+" "+Qt(r));if(typeof e=="string"&&e.length>Ts/3&&Yi(e)>Ts)throw new Error(n+"contains a string greater than "+Ts+" utf8 bytes "+Qt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(De(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gh(o)))throw new Error(n+" contains an invalid key ("+o+") "+Qt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);am(r,o),la(n,a,r),lm(r)}),i&&s)throw new Error(n+' contains ".value" child '+Qt(r)+" in addition to actual children.")}},vh=function(n,e,t,r){if(!mh(t))throw new Error(Do(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jv=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vh(n,e,t)},qv=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},zv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Hv(t))throw new Error(Do(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Gv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ca(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!Vo(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function yh(n,e,t){ca(n,t),bh(n,r=>Vo(r,e))}function It(n,e,t){ca(n,t),bh(n,r=>Je(r,e)||Je(e,r))}function bh(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(Kv(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Kv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();rr&&ge("event: "+t.toString()),Vn(r)}}}/**
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
 */const Yv="repo_interrupt",Qv=25;class Jv{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ii(),this.transactionQueueTree_=new oa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xv(n,e,t){if(n.stats_=Bo(n.repoInfo_),n.forceRestClient_||Pg())n.server_=new wi(n.repoInfo_,(r,i,s,o)=>{Ul(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Bl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new gt(n.repoInfo_,e,(r,i,s,o)=>{Ul(n,r,i,s,o)},r=>{Bl(n,r)},r=>{ey(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=xg(n.repoInfo_,()=>new Mm(n.stats_,n.server_)),n.infoData_=new Rm,n.infoSyncTree_=new Ll({startListening:(r,i,s,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Zi(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ha(n,"connected",!1),n.serverSyncTree_=new Ll({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);It(n.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function Zv(n){const t=n.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ua(n){return Dv({timestamp:Zv(n)})}function Ul(n,e,t,r,i){n.dataUpdateCount++;const s=new Y(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=gi(t,c=>_e(c));o=Nv(n.serverSyncTree_,s,l,i)}else{const l=_e(t);o=kv(n.serverSyncTree_,s,l,i)}else if(r){const l=gi(t,c=>_e(c));o=Cv(n.serverSyncTree_,s,l)}else{const l=_e(t);o=Zi(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ns(n,s)),It(n.eventQueue_,a,o)}function Bl(n,e){ha(n,"connected",e),e===!1&&ny(n)}function ey(n,e){De(e,(t,r)=>{ha(n,t,r)})}function ha(n,e,t){const r=new Y("/.info/"+e),i=_e(t);n.infoData_.updateSnapshot(r,i);const s=Zi(n.infoSyncTree_,r,i);It(n.eventQueue_,r,s)}function Eh(n){return n.nextWriteId_++}function ty(n,e,t,r,i){da(n,"set",{path:e.toString(),value:t,priority:r});const s=ua(n),o=_e(t,r),a=Zo(n.serverSyncTree_,e),l=dh(o,a,s),c=Eh(n),u=lh(n.serverSyncTree_,e,l,c,!0);ca(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||Pe("set at "+e+" failed: "+d);const g=en(n.serverSyncTree_,c,!_);It(n.eventQueue_,e,g),oy(n,i,d,f)});const h=Th(n,e);ns(n,h),It(n.eventQueue_,h,[])}function ny(n){da(n,"onDisconnectEvents");const e=ua(n),t=Ii();Gs(n.onDisconnect_,j(),(i,s)=>{const o=xv(i,s,n.serverSyncTree_,e);Ku(t,i,o)});let r=[];Gs(t,j(),(i,s)=>{r=r.concat(Zi(n.serverSyncTree_,i,s));const o=Th(n,i);ns(n,o)}),n.onDisconnect_=Ii(),It(n.eventQueue_,j(),r)}function ry(n,e,t){let r;x(e._path)===".info"?r=xl(n.infoSyncTree_,e,t):r=xl(n.serverSyncTree_,e,t),yh(n.eventQueue_,e._path,r)}function iy(n,e,t){let r;x(e._path)===".info"?r=Zs(n.infoSyncTree_,e,t):r=Zs(n.serverSyncTree_,e,t),yh(n.eventQueue_,e._path,r)}function sy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Yv)}function da(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ge(t,...e)}function oy(n,e,t,r){e&&Vn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function wh(n,e,t){return Zo(n.serverSyncTree_,e,t)||O.EMPTY_NODE}function fa(n,e=n.transactionQueueTree_){if(e||rs(n,e),Hn(e)){const t=Ch(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ay(n,Pr(e),t)}else _h(e)&&ts(e,t=>{fa(n,t)})}function ay(n,e,t){const r=t.map(c=>c.currentWriteId),i=wh(n,e,r);let s=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Re(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,c=>{da(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(en(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();rs(n,aa(n.transactionQueueTree_,e)),fa(n,n.transactionQueueTree_),It(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Vn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Pe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}ns(n,e)}},o)}function ns(n,e){const t=Ih(n,e),r=Pr(t),i=Ch(n,t);return ly(n,i,r),r}function ly(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Re(t,l.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(en(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qv)u=!0,h="maxretry",i=i.concat(en(n.serverSyncTree_,l.currentWriteId,!0));else{const d=wh(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){la("transaction failed: Data returned ",f,l.path);let _=_e(f);typeof f=="object"&&f!=null&&kt(f,".priority")||(_=_.updatePriority(d.getPriority()));const m=l.currentWriteId,w=ua(n),C=dh(_,d,w);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=Eh(n),o.splice(o.indexOf(m),1),i=i.concat(lh(n.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(en(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",i=i.concat(en(n.serverSyncTree_,l.currentWriteId,!0))}It(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}rs(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)Vn(r[a]);fa(n,n.transactionQueueTree_)}function Ih(n,e){let t,r=n.transactionQueueTree_;for(t=x(e);t!==null&&Hn(r)===void 0;)r=aa(r,t),e=Q(e),t=x(e);return r}function Ch(n,e){const t=[];return Sh(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Sh(n,e,t){const r=Hn(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);ts(e,i=>{Sh(n,i,t)})}function rs(n,e){const t=Hn(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,fh(e,t.length>0?t:void 0)}ts(e,r=>{rs(n,r)})}function Th(n,e){const t=Pr(Ih(n,e)),r=aa(n.transactionQueueTree_,e);return Uv(r,i=>{ks(n,i)}),ks(n,r),ph(r,i=>{ks(n,i)}),t}function ks(n,e){const t=Hn(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(en(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?fh(e,void 0):t.length=s+1,It(n.eventQueue_,Pr(e),i);for(let o=0;o<r.length;o++)Vn(r[o])}}/**
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
 */function cy(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wl=function(n,e){const t=hy(n),r=t.namespace;t.domain==="firebase.com"&&wt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||wg();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ru(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Y(t.pathString)}},hy=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=cy(n.substring(u,h)));const d=uy(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),t=e.substring(_+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class dy{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class fy{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class _y{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class _a{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Uu(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=Cl(this._queryParams),t=Fo(e);return t==="{}"?"default":t}get _queryObject(){return Cl(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof _a))return!1;const t=this._repo===e._repo,r=Vo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sm(this._path)}}class Gt extends _a{constructor(e,t){super(e,t,new qo,!1)}get parent(){const e=Wu(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Y(e),r=to(this.ref,e);return new Pi(this._node.getChild(t),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Pi(i,to(this.ref,r),re)))}hasChild(e){const t=new Y(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ze(n,e){return n=We(n),n._checkNotDeleted("ref"),e!==void 0?to(n._root,e):n._root}function to(n,e){return n=We(n),x(n._path)===null?jv("child","path",e):vh("child","path",e),new Gt(n._repo,se(n._path,e))}function nt(n,e){n=We(n),qv("set",n._path),$v("set",e,n._path);const t=new Ki;return ty(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class pa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new dy("value",this,new Pi(e.snapshotNode,new Gt(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new fy(this,e,t):null}matches(e){return e instanceof pa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function py(n,e,t,r,i){const s=new _y(t,void 0),o=new pa(s);return ry(n._repo,n,o),()=>iy(n._repo,n,o)}function Or(n,e,t,r){return py(n,"value",e)}pv(Gt);Ev(Gt);/**
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
 */const gy="FIREBASE_DATABASE_EMULATOR_HOST",no={};let my=!1;function vy(n,e,t,r){n.repoInfo_=new Ru(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function yy(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wl(s,i),a=o.repoInfo,l;typeof process<"u"&&ol&&(l=ol[gy]),l?(s=`http://${l}?ns=${a.namespace}`,o=Wl(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Dg(n.name,n.options,e);zv("Invalid Firebase Database URL",o),B(o.path)||wt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ey(a,n,c,new Og(n,t));return new wy(u,n)}function by(n,e){const t=no[e];(!t||t[n.key]!==n)&&wt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sy(n),delete t[n.key]}function Ey(n,e,t,r){let i=no[e.name];i||(i={},no[e.name]=i);let s=i[n.toURLString()];return s&&wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Jv(n,my,t,r),i[n.toURLString()]=s,s}class wy{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(by(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wt("Cannot call "+e+" on a deleted database.")}}function Iy(n=hu(),e){const t=xo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=j_("database");r&&Cy(t,...r)}return t}function Cy(n,e,t,r={}){n=We(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&wt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ei(ei.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:q_(r.mockUserToken,n.app.options.projectId);s=new ei(o)}vy(i,e,t,s)}/**
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
 */function Sy(n){gg(Bn),Pn(new on("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yy(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Ut(al,ll,n),Ut(al,ll,"esm2017")}gt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};gt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Sy();function ga(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function kh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ty=kh,Nh=new Tr("auth","Firebase",kh());/**
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
 */const Oi=new Mo("@firebase/auth");function ky(n,...e){Oi.logLevel<=z.WARN&&Oi.warn(`Auth (${Bn}): ${n}`,...e)}function ti(n,...e){Oi.logLevel<=z.ERROR&&Oi.error(`Auth (${Bn}): ${n}`,...e)}/**
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
 */function rt(n,...e){throw ma(n,...e)}function ot(n,...e){return ma(n,...e)}function Rh(n,e,t){const r=Object.assign(Object.assign({},Ty()),{[e]:t});return new Tr("auth","Firebase",r).create(e,{appName:n.name})}function Wt(n){return Rh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ma(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nh.create(n,...e)}function P(n,e,...t){if(!n)throw ma(e,...t)}function dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ti(e),new Error(e)}function Ct(n,e){n||dt(e)}/**
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
 */function ro(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ny(){return Vl()==="http:"||Vl()==="https:"}function Vl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ry(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ny()||G_()||"connection"in navigator)?navigator.onLine:!0}function Ay(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=Oo()||ou()}get(){return Ry()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function va(n,e){Ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ah{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Py={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Oy=new Dr(3e4,6e4);function fn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kt(n,e,t,r,i={}){return Ph(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Un(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},s);return z_()||(c.referrerPolicy="no-referrer"),Ah.fetch()(Oh(n,n.config.apiHost,t,a),c)})}async function Ph(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Py),e);try{const i=new My(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw qr(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rh(n,u,c);rt(n,u)}}catch(i){if(i instanceof zt)throw i;rt(n,"network-request-failed",{message:String(i)})}}async function is(n,e,t,r,i={}){const s=await Kt(n,e,t,r,i);return"mfaPendingCredential"in s&&rt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Oh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?va(n.config,i):`${n.config.apiScheme}://${i}`}function Dy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class My{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Oy.get())})}}function qr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ot(n,e,r);return i.customData._tokenResponse=t,i}function Hl(n){return n!==void 0&&n.enterprise!==void 0}class Ly{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xy(n,e){return Kt(n,"GET","/v2/recaptchaConfig",fn(n,e))}/**
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
 */async function Fy(n,e){return Kt(n,"POST","/v1/accounts:delete",e)}async function Dh(n,e){return Kt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uy(n,e=!1){const t=We(n),r=await t.getIdToken(e),i=ya(r);P(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lr(Ns(i.auth_time)),issuedAtTime:lr(Ns(i.iat)),expirationTime:lr(Ns(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ns(n){return Number(n)*1e3}function ya(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ti("JWT malformed, contained fewer than 3 sections"),null;try{const i=pi(t);return i?JSON.parse(i):(ti("Failed to decode base64 JWT payload"),null)}catch(i){return ti("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $l(n){const e=ya(n);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof zt&&By(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function By({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Wy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class io{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Di(n){var e;const t=n.auth,r=await n.getIdToken(),i=await yr(n,Dh(t,{idToken:r}));P(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Mh(s.providerUserInfo):[],a=Hy(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new io(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Vy(n){const e=We(n);await Di(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Mh(n){return n.map(e=>{var{providerId:t}=e,r=ga(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $y(n,e){const t=await Ph(n,{},async()=>{const r=Un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Oh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ah.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jy(n,e){return Kt(n,"POST","/v2/accounts:revokeToken",fn(n,e))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,"internal-error");const t=$l(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await $y(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Cn;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function Rt(n,e){P(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ga(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new io(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Uy(this,e)}reload(){return Vy(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(Wt(this.auth));const e=await this.getIdToken();return await yr(this,Fy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,C=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:A,isAnonymous:y,providerData:S,stsTokenManager:W}=t;P(T&&W,e,"internal-error");const M=Cn.fromJSON(this.name,W);P(typeof T=="string",e,"internal-error"),Rt(h,e.name),Rt(d,e.name),P(typeof A=="boolean",e,"internal-error"),P(typeof y=="boolean",e,"internal-error"),Rt(f,e.name),Rt(_,e.name),Rt(g,e.name),Rt(m,e.name),Rt(w,e.name),Rt(C,e.name);const L=new ft({uid:T,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:y,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:M,createdAt:w,lastLoginAt:C});return S&&Array.isArray(S)&&(L.providerData=S.map(R=>Object.assign({},R))),m&&(L._redirectEventId=m),L}static async _fromIdTokenResponse(e,t,r=!1){const i=new Cn;i.updateFromServerResponse(t);const s=new ft({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Di(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];P(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Mh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cn;a.updateFromIdToken(r);const l=new ft({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new io(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const jl=new Map;function _t(n){Ct(n instanceof Function,"Expected a class definition");let e=jl.get(n);return e?(Ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jl.set(n,e),e)}/**
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
 */class Lh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lh.type="NONE";const ql=Lh;/**
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
 */function ni(n,e,t){return`firebase:${n}:${e}:${t}`}class Sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ni(this.userKey,i.apiKey,s),this.fullPersistenceKey=ni("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Sn(_t(ql),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||_t(ql);const o=ni(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=ft._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Sn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Sn(s,e,r))}}/**
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
 */function zl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vh(e))return"Blackberry";if(Hh(e))return"Webos";if(Fh(e))return"Safari";if((e.includes("chrome/")||Uh(e))&&!e.includes("edge/"))return"Chrome";if(Wh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xh(n=we()){return/firefox\//i.test(n)}function Fh(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uh(n=we()){return/crios\//i.test(n)}function Bh(n=we()){return/iemobile/i.test(n)}function Wh(n=we()){return/android/i.test(n)}function Vh(n=we()){return/blackberry/i.test(n)}function Hh(n=we()){return/webos/i.test(n)}function ba(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qy(n=we()){var e;return ba(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zy(){return K_()&&document.documentMode===10}function $h(n=we()){return ba(n)||Wh(n)||Hh(n)||Vh(n)||/windows phone/i.test(n)||Bh(n)}/**
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
 */function jh(n,e=[]){let t;switch(n){case"Browser":t=zl(we());break;case"Worker":t=`${zl(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bn}/${r}`}/**
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
 */class Gy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ky(n,e={}){return Kt(n,"GET","/v2/passwordPolicy",fn(n,e))}/**
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
 */const Yy=6;class Qy{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Yy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Jy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gl(this),this.idTokenSubscription=new Gl(this),this.beforeStateQueue=new Gy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dh(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ye(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Di(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ay()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(Wt(this));const t=e?We(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ky(this),t=new Qy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ky(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $n(n){return We(n)}class Gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=ip(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xy(n){ss=n}function qh(n){return ss.loadJS(n)}function Zy(){return ss.recaptchaEnterpriseScript}function eb(){return ss.gapiScript}function tb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class nb{constructor(){this.enterprise=new rb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ib="recaptcha-enterprise",zh="NO_RECAPTCHA";class sb{constructor(e){this.type=ib,this.auth=$n(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ly(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Hl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Hl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Zy();l.length!==0&&(l+=a),qh(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Kl(n,e,t,r=!1,i=!1){const s=new sb(n);let o;if(i)o=zh;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yl(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function ob(n,e){const t=xo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(mi(s,e??{}))return i;rt(i,"already-initialized")}return t.initialize({options:e})}function ab(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lb(n,e,t){const r=$n(n);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Gh(e),{host:o,port:a}=cb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ub()}function Gh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cb(n){const e=Gh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ql(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ql(o)}}}function Ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ub(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ea{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function hb(n,e){return Kt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function db(n,e){return is(n,"POST","/v1/accounts:signInWithPassword",fn(n,e))}/**
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
 */async function fb(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}async function _b(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}/**
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
 */class br extends Ea{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new br(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new br(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,t,"signInWithPassword",db);case"emailLink":return fb(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,r,"signUpPassword",hb);case"emailLink":return _b(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tn(n,e){return is(n,"POST","/v1/accounts:signInWithIdp",fn(n,e))}/**
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
 */const pb="http://localhost";class hn extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ga(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Un(t)}return e}}/**
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
 */function gb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mb(n){const e=Xn(Zn(n)).link,t=e?Xn(Zn(e)).deep_link_id:null,r=Xn(Zn(n)).deep_link_id;return(r?Xn(Zn(r)).link:null)||r||t||e||n}class wa{constructor(e){var t,r,i,s,o,a;const l=Xn(Zn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=gb((i=l.mode)!==null&&i!==void 0?i:null);P(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=mb(e);try{return new wa(t)}catch{return null}}}/**
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
 */class jn{constructor(){this.providerId=jn.PROVIDER_ID}static credential(e,t){return br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wa.parseLink(t);return P(r,"argument-error"),br._fromEmailAndCode(e,r.code,r.tenantId)}}jn.PROVIDER_ID="password";jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends Kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends Mr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Dt extends Mr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Mt extends Mr{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ft._fromIdTokenResponse(e,r,i),o=Jl(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Jl(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Jl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Mi extends zt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Mi(e,t,r,i)}}function Yh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(n,s,e,r):s})}async function vb(n,e,t=!1){const r=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",r)}/**
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
 */async function yb(n,e,t=!1){const{auth:r}=n;if(Ye(r.app))return Promise.reject(Wt(r));const i="reauthenticate";try{const s=await yr(n,Yh(r,i,e,n),t);P(s.idToken,r,"internal-error");const o=ya(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(n.uid===a,r,"user-mismatch"),Ln._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
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
 */async function Qh(n,e,t=!1){if(Ye(n.app))return Promise.reject(Wt(n));const r="signIn",i=await Yh(n,r,e),s=await Ln._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function bb(n,e){return Qh($n(n),e)}/**
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
 */async function Eb(n){const e=$n(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function wb(n,e,t){return Ye(n.app)?Promise.reject(Wt(n)):bb(We(n),jn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Eb(n),r})}function Ib(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function Cb(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function Sb(n){return We(n).signOut()}const Li="__sak";/**
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
 */class Jh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Li,"1"),this.storage.removeItem(Li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Tb=1e3,kb=10;class Xh extends Jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$h(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kb):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xh.type="LOCAL";const Nb=Xh;/**
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
 */class Zh extends Jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zh.type="SESSION";const ed=Zh;/**
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
 */function Rb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await Rb(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */function Ia(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ia("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function Pb(n){at().location.href=n}/**
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
 */function td(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function Ob(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Db(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mb(){return td()?self:null}/**
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
 */const nd="firebaseLocalStorageDb",Lb=1,xi="firebaseLocalStorage",rd="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function as(n,e){return n.transaction([xi],e?"readwrite":"readonly").objectStore(xi)}function xb(){const n=indexedDB.deleteDatabase(nd);return new Lr(n).toPromise()}function so(){const n=indexedDB.open(nd,Lb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(xi,{keyPath:rd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(xi)?e(r):(r.close(),await xb(),e(await so()))})})}async function Xl(n,e,t){const r=as(n,!0).put({[rd]:e,value:t});return new Lr(r).toPromise()}async function Fb(n,e){const t=as(n,!1).get(e),r=await new Lr(t).toPromise();return r===void 0?null:r.value}function Zl(n,e){const t=as(n,!0).delete(e);return new Lr(t).toPromise()}const Ub=800,Bb=3;class id{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await so(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Bb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Mb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ob(),!this.activeServiceWorker)return;this.sender=new Ab(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Db()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await so();return await Xl(e,Li,"1"),await Zl(e,Li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=as(i,!1).getAll();return new Lr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}id.type="LOCAL";const Wb=id;new Dr(3e4,6e4);/**
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
 */function Vb(n,e){return e?_t(e):(P(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ca extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hb(n){return Qh(n.auth,new Ca(n),n.bypassAuthState)}function $b(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),yb(t,new Ca(n),n.bypassAuthState)}async function jb(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),vb(t,new Ca(n),n.bypassAuthState)}/**
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
 */class sd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hb;case"linkViaPopup":case"linkViaRedirect":return jb;case"reauthViaPopup":case"reauthViaRedirect":return $b;default:rt(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qb=new Dr(2e3,1e4);class bn extends sd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=Ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qb.get())};e()}}bn.currentPopupAction=null;/**
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
 */const zb="pendingRedirect",ri=new Map;class Gb extends sd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ri.get(this.auth._key());if(!e){try{const r=await Kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ri.set(this.auth._key(),e)}return this.bypassAuthState||ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kb(n,e){const t=Jb(e),r=Qb(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Yb(n,e){ri.set(n._key(),e)}function Qb(n){return _t(n._redirectPersistence)}function Jb(n){return ni(zb,n.config.apiKey,n.name)}async function Xb(n,e,t=!1){if(Ye(n.app))return Promise.reject(Wt(n));const r=$n(n),i=Vb(r,e),o=await new Gb(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zb=10*60*1e3;class eE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!od(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zb&&this.cachedEventUids.clear(),this.cachedEventUids.has(ec(e))}saveEventToCache(e){this.cachedEventUids.add(ec(e)),this.lastProcessedEventTime=Date.now()}}function ec(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function od({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return od(n);default:return!1}}/**
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
 */async function nE(n,e={}){return Kt(n,"GET","/v1/projects",e)}/**
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
 */const rE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iE=/^https?/;async function sE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nE(n);for(const t of e)try{if(oE(t))return}catch{}rt(n,"unauthorized-domain")}function oE(n){const e=ro(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!iE.test(t))return!1;if(rE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aE=new Dr(3e4,6e4);function tc(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lE(n){return new Promise((e,t)=>{var r,i,s;function o(){tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tc(),t(ot(n,"network-request-failed"))},timeout:aE.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=at().gapi)===null||s===void 0)&&s.load)o();else{const a=tb("iframefcb");return at()[a]=()=>{gapi.load?o():t(ot(n,"network-request-failed"))},qh(`${eb()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ii=null,e})}let ii=null;function cE(n){return ii=ii||lE(n),ii}/**
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
 */const uE=new Dr(5e3,15e3),hE="__/auth/iframe",dE="emulator/auth/iframe",fE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pE(n){const e=n.config;P(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?va(e,dE):`https://${n.config.authDomain}/${hE}`,r={apiKey:e.apiKey,appName:n.name,v:Bn},i=_E.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Un(r).slice(1)}`}async function gE(n){const e=await cE(n),t=at().gapi;return P(t,n,"internal-error"),e.open({where:document.body,url:pE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(n,"network-request-failed"),a=at().setTimeout(()=>{s(o)},uE.get());function l(){at().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const mE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vE=500,yE=600,bE="_blank",EE="http://localhost";class nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wE(n,e,t,r=vE,i=yE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mE),{width:r.toString(),height:i.toString(),top:s,left:o}),c=we().toLowerCase();t&&(a=Uh(c)?bE:t),xh(c)&&(e=e||EE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(qy(c)&&a!=="_self")return IE(e||"",a),new nc(null);const h=window.open(e||"",a,u);P(h,n,"popup-blocked");try{h.focus()}catch{}return new nc(h)}function IE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const CE="__/auth/handler",SE="emulator/auth/handler",TE=encodeURIComponent("fac");async function rc(n,e,t,r,i,s){P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Bn,eventId:i};if(e instanceof Kh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Us(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Mr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${TE}=${encodeURIComponent(l)}`:"";return`${kE(n)}?${Un(a).slice(1)}${c}`}function kE({config:n}){return n.emulator?va(n,SE):`https://${n.authDomain}/${CE}`}/**
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
 */const Rs="webStorageSupport";class NE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ed,this._completeRedirectFn=Xb,this._overrideRedirectResult=Yb}async _openPopup(e,t,r,i){var s;Ct((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rc(e,t,r,ro(),i);return wE(e,o,Ia())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await rc(e,t,r,ro(),i);return Pb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ct(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await gE(e),r=new eE(e);return t.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rs,{type:Rs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rs];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $h()||Fh()||ba()}}const RE=NE;var ic="@firebase/auth",sc="1.9.0";/**
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
 */class AE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OE(n){Pn(new on("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jh(n)},c=new Jy(r,i,s,l);return ab(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new on("auth-internal",e=>{const t=$n(e.getProvider("auth").getImmediate());return(r=>new AE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(ic,sc,PE(n)),Ut(ic,sc,"esm2017")}/**
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
 */const DE=5*60,ME=su("authIdTokenMaxAge")||DE;let oc=null;const LE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ME)return;const i=t==null?void 0:t.token;oc!==i&&(oc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xE(n=hu()){const e=xo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ob(n,{popupRedirectResolver:RE,persistence:[Wb,Nb,ed]}),r=su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LE(s.toString());Cb(t,o,()=>o(t.currentUser)),Ib(t,a=>o(a))}}const i=ru("auth");return i&&lb(t,`http://${i}`),t}function FE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Xy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",FE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OE("Browser");var UE="firebase",BE="11.3.1";/**
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
 */Ut(UE,BE,"app");const WE=JSON.parse(atob("eyJhcGlLZXkiOiJBSXphU3lEdlo1VXFsZmg5ZTI2NUN6Sms0OFBGSmhyS0V1alQ5NzAiLCJhdXRoRG9tYWluIjoicXVpY2tzY291dC1kNGQxYS5maXJlYmFzZWFwcC5jb20iLCJkYXRhYmFzZVVSTCI6Imh0dHBzOi8vcXVpY2tzY291dC1kNGQxYS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20iLCJwcm9qZWN0SWQiOiJxdWlja3Njb3V0LWQ0ZDFhIiwic3RvcmFnZUJ1Y2tldCI6InF1aWNrc2NvdXQtZDRkMWEuZmlyZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2luZ1NlbmRlcklkIjoiODI0MDY5ODk2OTkwIiwiYXBwSWQiOiIxOjgyNDA2OTg5Njk5MDp3ZWI6YjE1Y2ZiZjBjOTFhYzIxMTFiYTcwZiJ9")),ad=uu(WE),ac=xE(ad),Ge=Iy(ad);let As=!1,Ps=null;async function ld(){if(Z.scouterID.length>2&&!As){As=!0,console.log("trying to sign in"),await Sb(ac);try{await wb(ac,Z.email,Z.password),console.log("signed in"),Ze.signedIn=!0,Ps!=null&&clearInterval(Ps),Ps=setInterval(()=>{Ze.connected&&$E()},5e3)}catch(n){console.log("can't sign in",n),Ze.signedIn=!1}As=!1}}const VE="scouterIDMapping";let Fe=Ne({matchConfig:{matchNumber:NaN,red1:NaN,red2:NaN,red3:NaN,blue1:NaN,blue2:NaN,blue3:NaN},collectedMatchData:{},scouterIDMapping:JSON.parse(localStorage.getItem(VE))||{}});const HE=ze(Ge,"collectedMatchData");Or(HE,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),Fe.collectedMatchData=e,delete Fe.collectedMatchData._,Sa()});function $E(){console.log("Checking scouter connection");for(const n of Object.keys(b.connected))nt(ze(Ge,`connected/${n}`),!1)}function Sa(){console.log("Updating as lead");for(const n of Object.keys(b.queue))if(b.queue[n]==-1){const e=Object.values(b.queue),t=Math.max(e.length-1,Math.max(...e));nt(ze(Ge,`queue/${n}`),t+1)}if(b.match.matchRunning&&b.match.matchNumber.toString()in Fe.collectedMatchData){let n=!1;Object.values(b.match.objectiveScouters).every(e=>e.toString()in Fe.collectedMatchData[b.match.matchNumber.toString()])&&(b.match.matchRunning=!1,n=!0);for(const e of Object.keys(b.match.objectiveScouters))b.match.objectiveScouters[e].toString()in Fe.collectedMatchData[b.match.matchNumber.toString()]&&(delete b.match.objectiveScouters[e],n=!0);n&&nt(xr,b.match)}}function jE(){const n=Object.keys(b.queue).slice(0,6);b.match.matchNumber=Fe.matchConfig.matchNumber,b.match.teamAllianceColors={};const e=[Fe.matchConfig.red1,Fe.matchConfig.red2,Fe.matchConfig.red3],t=[Fe.matchConfig.blue1,Fe.matchConfig.blue2,Fe.matchConfig.blue3];for(const s of e)b.match.teamAllianceColors[s]="red";for(const s of t)b.match.teamAllianceColors[s]="blue";b.match.objectiveScouters={};const r=[...e,...t];let i=0;for(const s of n)b.match.objectiveScouters[s]=r[i],i++,nt(ze(Ge,`queue/${s}`),null);b.match.matchEnded=!1,b.match.matchRunning=!0,nt(xr,b.match)}function qE(){b.match.matchEnded=!0,nt(xr,b.match)}function zE(){b.match.matchRunning=!1,nt(xr,b.match)}let Ze=Ne({connected:!1,signedIn:!1});const GE=ze(Ge,".info/connected");Or(GE,n=>{n.val()===!0?(console.log("connected"),Ze.connected=!0):(console.log("not connected"),Ze.connected=!1)});let b=Ne({connected:{},queue:{},match:{matchRunning:!1,matchEnded:!1,matchNumber:0,teamAllianceColors:{},objectiveScouters:{},subjectiveScouters:{}}});const KE=ze(Ge,"connected");Or(KE,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),b.connected=e,delete b.connected._,Z.scouterID.length<=2?ka():Sa()});const YE=ze(Ge,"queue");Or(YE,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),b.queue=e,delete b.queue._,Z.scouterID.length<=2?ka():Sa()});const xr=ze(Ge,"match");Or(xr,n=>{let e=n.val()||{};typeof e!="object"&&(e={}),b.match=e,delete b.match._,b.match.matchRunning=b.match.matchRunning||!1,b.match.matchEnded=b.match.matchEnded||!1,b.match.matchNumber=b.match.matchNumber||0,b.match.teamAllianceColors=b.match.teamAllianceColors||{},b.match.objectiveScouters=b.match.objectiveScouters||{},b.match.subjectiveScouters=b.match.subjectiveScouters||{},Z.scouterID.length<=2&&ka()});function cd(n){nt(ze(Ge,`queue/${n}`),null)}const ud="isInMatch",hd="matchEndSignaled";let qe=Ne({isInOnlineMatch:JSON.parse(localStorage.getItem(ud))||!1,matchEndSignaled:JSON.parse(localStorage.getItem(hd))||!1});function Ta(){localStorage.setItem(ud,JSON.stringify(qe.isInOnlineMatch)),localStorage.setItem(hd,JSON.stringify(qe.matchEndSignaled))}function ka(){console.log("Updating as scouter"),(!(Z.scouterID in b.connected)||!b.connected[Z.scouterID])&&nt(ze(Ge,`connected/${Z.scouterID}`),!0),b.match.matchRunning&&Z.scouterID in b.match.objectiveScouters&&(ne.uiState!="match"&&(qe.isInOnlineMatch=!0,k.metadata.matchNumber=b.match.matchNumber,k.metadata.teamNumber=b.match.objectiveScouters[Z.scouterID],k.metadata.alliance=b.match.teamAllianceColors[k.metadata.teamNumber],yo("match"),ne.matchState="prematch"),qe.matchEndSignaled=b.match.matchEnded,Ta())}function QE(){nt(ze(Ge,`queue/${Z.scouterID}`),-1)}function JE(n,e,t){nt(ze(Ge,`collectedMatchData/${k.metadata.matchNumber}/${k.metadata.teamNumber}`),n).then(()=>{e(),qe.isInOnlineMatch=!1,qe.matchEndSignaled=!1,Ta()}).catch(()=>t())}function Na(){qe.isInOnlineMatch=!1,qe.matchEndSignaled=!1,Ta(),setTimeout(()=>location.reload(),300)}var XE=(n,e)=>e.buttonState="normal",ZE=()=>yo("home"),ew=N('<button class="standard-button header__return-button header--right">Cancel Exit</button> <button class="standard-button standard-button--danger header__return-button header--right">Confirm Exit (all data will be lost!)</button>',1),tw=(n,e)=>e.buttonState="confirm exit",nw=N('<button class="standard-button header__return-button header--right">Return to Home</button>');function _n(n,e){he(e,!0);let t=Ne({buttonState:"normal"});var r=ke(),i=D(r);{var s=o=>{var a=ke(),l=D(a);{var c=h=>{var d=ew(),f=D(d);f.__click=[XE,t];var _=p(f,2);_.__click=[ZE],I(h,d)},u=h=>{var d=nw();d.__click=[tw,t],I(h,d)};F(l,h=>{t.buttonState=="confirm exit"?h(c):h(u,!1)})}I(o,a)};F(i,o=>{qe.isInOnlineMatch||o(s)})}I(n,r),de()}Ue(["click"]);const Nt=""+new URL("text-logo-removebg.png",import.meta.url).href;var rw=N('<h3 style="color: orange">Scouting lead has signaled that the match is ended. Please finalize and upload your data.</h3>'),iw=N("<h2> </h2> <!>",1);function pn(n,e){he(e,!1),Be();var t=iw(),r=D(t),i=E(r),s=p(r,2);{var o=a=>{var l=rw();I(a,l)};F(s,a=>{qe.matchEndSignaled&&a(o)})}ce(()=>ut(i,`Scouting Team ${k.metadata.teamNumber??""} (${k.metadata.alliance??""} alliance)`)),I(n,t),de()}var sw=(n,e)=>pe(e,!1),ow=()=>Na(),aw=N('<!> <br> <br> <div><button class="standard-button">Back</button></div> <div><button class="standard-button standard-button--danger footer__button">New match (ALL DATA WILL BE RESET!)</button></div>',1),lw=N("<p>Exporting...</p>"),cw=(n,e)=>pe(e,!1),uw=N('<p>An error occurred. Check your internet connection and try again</p> <button class="standard-button">Back</button>',1),hw=()=>Na(),dw=N('<p>Successfully exported!</p> <button class="standard-button standard-button--danger footer__button">New match (ALL DATA WILL BE RESET!)</button>',1),fw=(n,e,t,r,i)=>{if(!Ze.connected){alert("Currently disconnected from server. Check your internet connection and try again");return}pe(e,!0),JE(t,()=>pe(e,!1),()=>pe(r,!0)),pe(i,!0)},_w=(n,e)=>pe(e,!0),pw=N('<button class="standard-button">Export over the internet (recommended)</button> <br> <button class="standard-button">Export via QR code</button> <br>',1),gw=()=>Na(),mw=N('<button class="standard-button standard-button--danger footer__button">New match (ALL DATA WILL BE RESET!)</button>'),vw=N('<div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Postmatch)</button> <!></div></div>'),yw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Export Data</h2> <!></div> <!>',1);function bw(n,e){he(e,!0);function t(A){let y=[];for(const S of Object.values(A))S==null?y.push(""):typeof S=="object"?y=[...y,...t(S)]:y.push(S);return y}const r=[Z.scouterID,...t(k.metadata),...t(k.prematch),...t(k.autonomous),...t(k.teleop),...t(k.endgame),...t(k.postmatch)];let i=L_(r.join("	"),{style:"width: 100%",margin:0}),s=Fr(!1),o=Fr(!1),a=Fr(!1),l=Fr(!1);var c=yw(),u=D(c),h=E(u);tt(h,"src",Nt);var d=p(h,2);_n(d,{});var f=p(u,2),_=E(f);pn(_,{});var g=p(_,4);{var m=A=>{var y=aw(),S=D(y);bf(S,()=>i);var W=p(S,6),M=E(W);M.__click=[sw,l];var L=p(W,2),R=E(L);R.__click=[ow],I(A,y)},w=A=>{var y=ke(),S=D(y);{var W=L=>{var R=ke(),H=D(R);{var q=te=>{var ee=lw();I(te,ee)},fe=te=>{var ee=ke(),ve=D(ee);{var Ve=Me=>{var J=uw(),gn=p(D(J),2);gn.__click=[cw,s],I(Me,J)},it=Me=>{var J=dw(),gn=p(D(J),2);gn.__click=[hw],I(Me,J)};F(ve,Me=>{$(a)?Me(Ve):Me(it,!1)},!0)}I(te,ee)};F(H,te=>{$(o)?te(q):te(fe,!1)})}I(L,R)},M=L=>{var R=pw(),H=D(R);H.__click=[fw,o,r,a,s];var q=p(H,4);q.__click=[_w,l],I(L,R)};F(S,L=>{$(s)?L(W):L(M,!1)},!0)}I(A,y)};F(g,A=>{$(l)?A(m):A(w,!1)})}var C=p(f,2);{var T=A=>{var y=vw(),S=E(y),W=E(S);W.__click=()=>ne.matchState="postmatch";var M=p(W,2);{var L=R=>{var H=mw();H.__click=[gw],I(R,H)};F(M,R=>{qe.isInOnlineMatch||R(L)})}I(A,y)};F(C,A=>{!$(s)&&!$(l)&&A(T)})}I(n,c),de()}Ue(["click"]);var Le=Ie(()=>k),lc=Ie(()=>ne),Ew=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <div class="subheader subheader--underline subheader--underline--blue">Metadata</div> <label>Match number: <input class="input input--disable-spinner" type="number" placeholder="Enter Match Number"></label> <br> <label>Team number: <input class="input input--disable-spinner" type="number" placeholder="Enter Team Number"></label> <br> <label>Alliance: <select class="input"><option>Blue</option><option>Red</option></select></label></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Next (Prematch)</button></div></div>',1);function ww(n,e){he(e,!1),Be();var t=Ew(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(i,2);_n(s,{});var o=p(r,2),a=E(o);pn(a,{});var l=p(a,4),c=p(E(l)),u=p(l,4),h=p(E(u)),d=p(u,4),f=p(E(d));ce(()=>{Le(),mo(()=>{})});var _=E(f);_.value=(_.__value="blue")==null?"":"blue";var g=p(_);g.value=(g.__value="red")==null?"":"red";var m=p(o,2),w=E(m),C=E(w);C.__click=()=>lc(lc().matchState="prematch"),ce(()=>C.disabled=Le().metadata.matchNumber==null||Le().metadata.teamNumber==null||Le().metadata.alliance==null),He(c,()=>Le().metadata.matchNumber,T=>Le(Le().metadata.matchNumber=T)),He(h,()=>Le().metadata.teamNumber,T=>Le(Le().metadata.teamNumber=T)),vo(f,()=>Le().metadata.alliance,T=>Le(Le().metadata.alliance=T)),I(n,t),de()}Ue(["click"]);const Iw=""+new URL("starting-position-red.png",import.meta.url).href,Cw=""+new URL("starting-position-blue.png",import.meta.url).href;var Ce=Ie(()=>k),zr=Ie(()=>ne),Sw=N('<button class="standard-button">&#x2715; No Show?</button> <br> <label>Starting position: <select class="input"><option>Barge-side</option><option>Center</option><option>Processor-side</option></select></label> <br> <img style="max-width:50%" alt="Field with starting locations indicated"> <br>',1),Tw=N('<button class="standard-button standard-button--danger">&#x2714; No Show?</button>'),kw=N('<button class="standard-button footer__button">Previous (Metadata)</button>'),Nw=N(`<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <div class="subheader subheader--underline subheader--underline--green">Prematch</div> <!> <style>img {
			max-width: 50%;
		}</style></div> <div class="footer"><div class="footer--middle"><!> <button class="standard-button footer__button">Next (Autonomous)</button></div></div>`,1);function Rw(n,e){he(e,!1),Be();var t=Nw(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(i,2);_n(s,{});var o=p(r,2),a=E(o);pn(a,{});var l=p(a,4);{var c=m=>{var w=Sw(),C=D(w);C.__click=()=>Ce(Ce().prematch.noShow=!Ce().prematch.noShow);var T=p(C,4),A=p(E(T));ce(()=>{Ce(),mo(()=>{})});var y=E(A);y.value=(y.__value="bargeSide")==null?"":"bargeSide";var S=p(y);S.value=(S.__value="center")==null?"":"center";var W=p(S);W.value=(W.__value="processorSide")==null?"":"processorSide";var M=p(T,4);ce(()=>tt(M,"src",Ce().metadata.alliance=="blue"?Cw:Iw)),vo(A,()=>Ce().prematch.startingLocation,L=>Ce(Ce().prematch.startingLocation=L)),I(m,w)},u=m=>{var w=Tw();w.__click=()=>Ce(Ce().prematch.noShow=!Ce().prematch.noShow),I(m,w)};F(l,m=>{Ce().prematch.noShow?m(u,!1):m(c)})}var h=p(o,2),d=E(h),f=E(d);{var _=m=>{var w=kw();w.__click=()=>zr(zr().matchState="metadata"),I(m,w)};F(f,m=>{qe.isInOnlineMatch||m(_)})}var g=p(f,2);g.__click=()=>zr(zr().matchState="autonomous"),ce(()=>g.disabled=Ce().prematch.startingLocation==null&&!Ce().prematch.noShow),I(n,t),de()}Ue(["click"]);function Aw(n,e){(e.isAutonomous?k.autonomous:k.teleop).algae.reefDescoreDrop++}var Pw=N('<button class="standard-button scoring-grid__button">Coral preloaded</button>'),Ow=N('<div><button class="standard-button scoring-grid__button">Coral taken from station</button></div> <div><button class="standard-button scoring-grid__button">Coral taken from ground</button></div> <div><!></div> <div></div> <div></div>',1),Dw=N('<div><button class="standard-button scoring-grid__button">Scored L4</button></div> <div><button class="standard-button scoring-grid__button">Scored L3</button></div> <div><button class="standard-button scoring-grid__button">Scored L2</button></div> <div><button class="standard-button scoring-grid__button">Scored L1 (Trough)</button></div> <div><button class="standard-button scoring-grid__button">Dropped</button></div>',1),Mw=N('<div><button class="standard-button scoring-grid__button">Descored from reef and dropped</button></div> <div><button class="standard-button scoring-grid__button">Descored from reef and taken</button></div> <div><button class="standard-button scoring-grid__button">Taken from ground</button></div> <div></div> <div></div>',1),Lw=N('<div><button class="standard-button scoring-grid__button">Scored in processor</button></div> <div><button class="standard-button scoring-grid__button">Scored in net</button></div> <div><button class="standard-button scoring-grid__button">Dropped</button></div> <div></div> <div></div>',1),xw=N(' <div class="scoring-grid full-height"><!> <!></div>',1);function dd(n,e){he(e,!0);function t(){(e.isAutonomous?k.autonomous:k.teleop).coral.preloaded=!0,ye.hasCoral=!0}function r(){(e.isAutonomous?k.autonomous:k.teleop).coral.stationPickup++,ye.hasCoral=!0}function i(){(e.isAutonomous?k.autonomous:k.teleop).coral.groundIntake++,ye.hasCoral=!0}function s(){(e.isAutonomous?k.autonomous:k.teleop).coral.l1++,ye.hasCoral=!1}function o(){(e.isAutonomous?k.autonomous:k.teleop).coral.l2++,ye.hasCoral=!1}function a(){(e.isAutonomous?k.autonomous:k.teleop).coral.l3++,ye.hasCoral=!1}function l(){(e.isAutonomous?k.autonomous:k.teleop).coral.l4++,ye.hasCoral=!1}function c(){(e.isAutonomous?k.autonomous:k.teleop).coral.dropped++,ye.hasCoral=!1}function u(){(e.isAutonomous?k.autonomous:k.teleop).algae.reefDescoreTake++,ye.hasAlgae=!0}function h(){(e.isAutonomous?k.autonomous:k.teleop).algae.groundIntake++,ye.hasAlgae=!0}function d(){(e.isAutonomous?k.autonomous:k.teleop).algae.processor++,ye.hasAlgae=!1}function f(){(e.isAutonomous?k.autonomous:k.teleop).algae.net++,ye.hasAlgae=!1}function _(){(e.isAutonomous?k.autonomous:k.teleop).algae.dropped++,ye.hasAlgae=!1}var g=xw(),m=D(g),w=p(m),C=E(w);{var T=M=>{var L=Ow(),R=D(L),H=E(R);H.__click=r;var q=p(R,2),fe=E(q);fe.__click=i;var te=p(q,2),ee=E(te);{var ve=Ve=>{var it=Pw();it.__click=t,I(Ve,it)};F(ee,Ve=>{e.isAutonomous&&!k.autonomous.coral.preloaded&&Ve(ve)})}I(M,L)},A=M=>{var L=Dw(),R=D(L),H=E(R);H.__click=l;var q=p(R,2),fe=E(q);fe.__click=a;var te=p(q,2),ee=E(te);ee.__click=o;var ve=p(te,2),Ve=E(ve);Ve.__click=s;var it=p(ve,2),Me=E(it);Me.__click=c,I(M,L)};F(C,M=>{ye.hasCoral?M(A,!1):M(T)})}var y=p(C,2);{var S=M=>{var L=Mw(),R=D(L),H=E(R);H.__click=[Aw,e];var q=p(R,2),fe=E(q);fe.__click=u;var te=p(q,2),ee=E(te);ee.__click=h,I(M,L)},W=M=>{var L=Lw(),R=D(L),H=E(R);H.__click=d;var q=p(R,2),fe=E(q);fe.__click=f;var te=p(q,2),ee=E(te);ee.__click=_,I(M,L)};F(y,M=>{ye.hasAlgae?M(W,!1):M(S)})}ce(()=>ut(m,`Coral Scored: ${k.autonomous.coral.l1+k.autonomous.coral.l2+k.autonomous.coral.l3+k.autonomous.coral.l4+k.teleop.coral.l1+k.teleop.coral.l2+k.teleop.coral.l3+k.teleop.coral.l4},
Algae Scored: ${k.autonomous.algae.net+k.autonomous.algae.processor+k.teleop.algae.net+k.teleop.algae.processor} `)),I(n,g),de()}Ue(["click"]);var Qn=Ie(()=>k),Gr=Ie(()=>ne),Fw=N('<button class="standard-button standard-button--danger">&#x2715; Left Starting Line</button>'),Uw=N('<button class="standard-button standard-button--success">&#x2714; Left Starting Line</button>'),Bw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Autonomous</h2> <!> <br> <!></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Prematch)</button> <button class="standard-button footer__button">Next (Teleop)</button></div></div>',1);function Ww(n,e){he(e,!1),Be();var t=Bw(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(i,2);_n(s,{});var o=p(r,2),a=E(o);pn(a,{});var l=p(a,4);{var c=m=>{var w=Fw();w.__click=()=>Qn(Qn().autonomous.leave=!0),I(m,w)},u=m=>{var w=Uw();w.__click=()=>Qn(Qn().autonomous.leave=!1),I(m,w)};F(l,m=>{Qn().autonomous.leave?m(u,!1):m(c)})}var h=p(l,4);dd(h,{isAutonomous:!0});var d=p(o,2),f=E(d),_=E(f);_.__click=()=>Gr(Gr().matchState="prematch");var g=p(_,2);g.__click=()=>Gr(Gr().matchState="teleop"),I(n,t),de()}Ue(["click"]);var Kr=Ie(()=>ne),Vw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Teleop</h2> <!></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Autonomous)</button> <button class="standard-button footer__button">Next (Endgame)</button></div></div>',1);function Hw(n,e){he(e,!1),Be();var t=Vw(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(i,2);_n(s,{});var o=p(r,2),a=E(o);pn(a,{});var l=p(a,4);dd(l,{isAutonomous:!1});var c=p(o,2),u=E(c),h=E(u);h.__click=()=>Kr(Kr().matchState="autonomous");var d=p(h,2);d.__click=()=>Kr(Kr().matchState="endgame"),I(n,t),de()}Ue(["click"]);const $w=""+new URL("cages.png",import.meta.url).href;var Jn=Ie(()=>k),Yr=Ie(()=>ne),jw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Endgame</h2> <label>Barge: <select class="input"><option>None</option><option>Park</option><option>Shallow cage climb</option><option>Deep cage climb</option></select></label> <br> <img style="max-width: 50%" alt="Barge with cage levels indicated"> <br></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Teleop)</button> <button class="standard-button footer__button">Next (Postmatch)</button></div></div>',1);function qw(n,e){he(e,!1),Be();var t=jw(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(i,2);_n(s,{});var o=p(r,2),a=E(o);pn(a,{});var l=p(a,4),c=p(E(l));ce(()=>{Jn(),mo(()=>{})});var u=E(c);u.value=(u.__value="none")==null?"":"none";var h=p(u);h.value=(h.__value="park")==null?"":"park";var d=p(h);d.value=(d.__value="shallowCage")==null?"":"shallowCage";var f=p(d);f.value=(f.__value="deepCage")==null?"":"deepCage";var _=p(l,4);tt(_,"src",$w);var g=p(o,2),m=E(g),w=E(m);w.__click=()=>Yr(Yr().matchState="teleop");var C=p(w,2);C.__click=()=>Yr(Yr().matchState="postmatch"),ce(()=>C.disabled=Jn().endgame.barge==null),vo(c,()=>Jn().endgame.barge,T=>Jn(Jn().endgame.barge=T)),I(n,t),de()}Ue(["click"]);var be=Ie(()=>k),Qr=Ie(()=>ne),zw=N('<button class="standard-button standard-button--danger">&#x2715; Dead?</button>'),Gw=N('<button class="standard-button standard-button--success">&#x2714; Dead?</button>'),Kw=N('<button class="standard-button standard-button--danger">&#x2715; Tipped Over?</button>'),Yw=N('<button class="standard-button standard-button--success">&#x2714; Tipped Over?</button>'),Qw=N('<button class="standard-button standard-button--danger">&#x2715; Yellow/red card?</button>'),Jw=N('<button class="standard-button standard-button--success">&#x2714; Yellow/red card?</button>'),Xw=N('<div class="header"><img class="header__img" alt="QuickScout"> <!></div> <div class="contents"><!> <h2 class="subheader subheader--underline subheader--underline--green">Postmatch</h2> <!> <br> <!> <br> <!> <br></div> <div class="footer"><div class="footer--middle"><button class="standard-button footer__button">Previous (Endgame)</button> <button class="standard-button footer__button">Finish and Export</button></div></div>',1);function Zw(n,e){he(e,!1),Be();var t=Xw(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(i,2);_n(s,{});var o=p(r,2),a=E(o);pn(a,{});var l=p(a,4);{var c=y=>{var S=zw();S.__click=()=>be(be().postmatch.dead=!0),I(y,S)},u=y=>{var S=Gw();S.__click=()=>be(be().postmatch.dead=!1),I(y,S)};F(l,y=>{be().postmatch.dead?y(u,!1):y(c)})}var h=p(l,4);{var d=y=>{var S=Kw();S.__click=()=>be(be().postmatch.tippedOver=!0),I(y,S)},f=y=>{var S=Yw();S.__click=()=>be(be().postmatch.tippedOver=!1),I(y,S)};F(h,y=>{be().postmatch.tippedOver?y(f,!1):y(d)})}var _=p(h,4);{var g=y=>{var S=Qw();S.__click=()=>be(be().postmatch.card=!0),I(y,S)},m=y=>{var S=Jw();S.__click=()=>be(be().postmatch.card=!1),I(y,S)};F(_,y=>{be().postmatch.card?y(m,!1):y(g)})}var w=p(o,2),C=E(w),T=E(C);T.__click=()=>Qr(Qr().matchState="endgame");var A=p(T,2);A.__click=()=>Qr(Qr().matchState="export"),I(n,t),de()}Ue(["click"]);function eI(n,e){he(e,!1),Be();var t=ke(),r=D(t);{var i=o=>{ww(o,{})},s=o=>{var a=ke(),l=D(a);{var c=h=>{Rw(h,{})},u=h=>{var d=ke(),f=D(d);{var _=m=>{Ww(m,{})},g=m=>{var w=ke(),C=D(w);{var T=y=>{Hw(y,{})},A=y=>{var S=ke(),W=D(S);{var M=R=>{qw(R,{})},L=R=>{var H=ke(),q=D(H);{var fe=ee=>{Zw(ee,{})},te=ee=>{bw(ee,{})};F(q,ee=>{ne.matchState=="postmatch"?ee(fe):ee(te,!1)},!0)}I(R,H)};F(W,R=>{ne.matchState=="endgame"?R(M):R(L,!1)},!0)}I(y,S)};F(C,y=>{ne.matchState=="teleop"?y(T):y(A,!1)},!0)}I(m,w)};F(f,m=>{ne.matchState=="autonomous"?m(_):m(g,!1)},!0)}I(h,d)};F(l,h=>{ne.matchState=="prematch"?h(c):h(u,!1)},!0)}I(o,a)};F(r,o=>{ne.matchState=="metadata"?o(i):o(s,!1)})}I(n,t),de()}var V=Ie(()=>Fe),tI=N("<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>"),nI=N("<p>Connected to server, but not signed in as a lead. Try going into setup and fixing your login.</p>"),rI=N("<p>Connected to server and successfully signed in as a lead!</p>"),iI=()=>alert("TODO"),sI=()=>alert("TODO"),oI=N("<p> </p>"),aI=N("<strong>NOT CONNECTED</strong>"),lI=(n,e)=>cd($(e)),cI=N('<p> <!> <button class="standard-button">Remove from queue</button></p>'),uI=()=>jE(),hI=N('<h2>Match Configuration</h2> <label>Match Number: <input type="number"></label> <br> <label>Red 1: <input type="number"></label> <br> <label>Red 2: <input type="number"></label> <br> <label>Red 3: <input type="number"></label> <br> <label>Blue 1: <input type="number"></label> <br> <label>Blue 2: <input type="number"></label> <br> <label>Blue 3: <input type="number"></label> <br> <div><button class="standard-button">Start match with top six in queue</button></div>',1),dI=N("<p> </p>"),fI=N("<p> </p>"),_I=()=>zE(),pI=N('<h2>Remaining Data</h2> <!> <div><button class="standard-button standard-button--danger">Force end match (not all scouters have submitted results)</button></div>',1),gI=()=>qE(),mI=N('<div><button class="standard-button">Signal match is ended and tell scouters to submit results</button></div>'),vI=N("<h2>Match Info</h2> <p> </p> <!> <!>",1),yI=N("<h2>Connected Scouters</h2> <details><summary>Expand</summary> <!></details> <h2>Queue</h2> <!> <!>",1),bI=N('<!> <button class="standard-button">Import scouter ID map</button> <br> <button class="standard-button">Export data</button> <br> <!>',1);function EI(n,e){he(e,!1),Be();var t=bI(),r=D(t);{var i=u=>{var h=tI();I(u,h)},s=u=>{var h=ke(),d=D(h);{var f=g=>{var m=nI();I(g,m)},_=g=>{var m=rI();I(g,m)};F(d,g=>{Ze.signedIn?g(_,!1):g(f)},!0)}I(u,h)};F(r,u=>{Ze.connected?u(s,!1):u(i)})}var o=p(r,2);o.__click=[iI];var a=p(o,4);a.__click=[sI];var l=p(a,4);{var c=u=>{var h=yI(),d=p(D(h),2),f=p(E(d),2);Wr(f,1,()=>Object.keys(b.connected).filter(C=>b.connected[C]),Br,(C,T)=>{var A=oI(),y=E(A);ce(()=>ut(y,`${V().scouterIDMapping[$(T)]||"Unknown"} (ID: ${$(T)??""})`)),I(C,A)});var _=p(d,4);Wr(_,1,()=>Object.keys(b.queue).sort((C,T)=>b.queue[C]-b.queue[T]),Br,(C,T,A)=>{var y=cI(),S=E(y),W=p(S);{var M=R=>{var H=aI();I(R,H)};F(W,R=>{(!($(T)in b.connected)||!b.connected[$(T)])&&R(M)})}var L=p(W,2);L.__click=[lI,T],ce(()=>ut(S,`${A+1}. ${V().scouterIDMapping[$(T)]||"Unknown"} (ID: ${$(T)??""}) `)),I(C,y)});var g=p(_,2);{var m=C=>{var T=hI(),A=p(D(T),2),y=p(E(A)),S=p(A,4),W=p(E(S)),M=p(S,4),L=p(E(M)),R=p(M,4),H=p(E(R)),q=p(R,4),fe=p(E(q)),te=p(q,4),ee=p(E(te)),ve=p(te,4),Ve=p(E(ve)),it=p(ve,4),Me=E(it);Me.__click=[uI],ce(J=>Me.disabled=J,[()=>Number.isNaN(V().matchConfig.matchNumber)||Number.isNaN(V().matchConfig.red1)||Number.isNaN(V().matchConfig.red2)||Number.isNaN(V().matchConfig.red3)||Number.isNaN(V().matchConfig.blue1)||Number.isNaN(V().matchConfig.blue2)||Number.isNaN(V().matchConfig.blue3)],Wi),He(y,()=>V().matchConfig.matchNumber,J=>V(V().matchConfig.matchNumber=Number.parseInt((J||"").toString()))),He(W,()=>V().matchConfig.red1,J=>V(V().matchConfig.red1=Number.parseInt((J||"").toString()))),He(L,()=>V().matchConfig.red2,J=>V(V().matchConfig.red2=Number.parseInt((J||"").toString()))),He(H,()=>V().matchConfig.red3,J=>V(V().matchConfig.red3=Number.parseInt((J||"").toString()))),He(fe,()=>V().matchConfig.blue1,J=>V(V().matchConfig.blue1=Number.parseInt((J||"").toString()))),He(ee,()=>V().matchConfig.blue2,J=>V(V().matchConfig.blue2=Number.parseInt((J||"").toString()))),He(Ve,()=>V().matchConfig.blue3,J=>V(V().matchConfig.blue3=Number.parseInt((J||"").toString()))),I(C,T)},w=C=>{var T=vI(),A=p(D(T),2),y=E(A),S=p(A,2);Wr(S,1,()=>Object.keys(b.match.objectiveScouters),Br,(R,H)=>{var q=dI(),fe=E(q);ce(()=>ut(fe,`${V().scouterIDMapping[$(H)]||"Unknown"} (ID: ${$(H)??""}) - ${b.match.objectiveScouters[$(H)]??""} (${b.match.teamAllianceColors[b.match.objectiveScouters[$(H)]]??""})`)),I(R,q)});var W=p(S,2);{var M=R=>{var H=pI(),q=p(D(H),2);Wr(q,1,()=>Object.keys(b.match.objectiveScouters),Br,(ee,ve)=>{var Ve=ke(),it=D(Ve);{var Me=J=>{var gn=fI(),fd=E(gn);ce(()=>ut(fd,`${V().scouterIDMapping[$(ve)]||"Unknown"} (ID: ${$(ve)??""}) - ${b.match.objectiveScouters[$(ve)]??""} (${b.match.teamAllianceColors[b.match.objectiveScouters[$(ve)]]??""})`)),I(J,gn)};F(it,J=>{(!(b.match.matchNumber.toString()in V().collectedMatchData)||!(b.match.objectiveScouters[$(ve)].toString()in V().collectedMatchData[b.match.matchNumber.toString()]))&&J(Me)})}I(ee,Ve)});var fe=p(q,2),te=E(fe);te.__click=[_I],I(R,H)},L=R=>{var H=mI(),q=E(H);q.__click=[gI],I(R,H)};F(W,R=>{b.match.matchEnded?R(M):R(L,!1)})}ce(()=>ut(y,`Match Number: ${b.match.matchNumber??""}`)),I(C,T)};F(g,C=>{b.match.matchRunning?C(w,!1):C(m)})}I(u,h)};F(l,u=>{Ze.connected&&Ze.signedIn&&u(c)})}I(n,t),de()}Ue(["click"]);var wI=N("<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>"),II=()=>QE(),CI=N('<button class="standard-button">Join Queue</button> <br>',1),SI=N("<p> </p>"),TI=()=>cd(Z.scouterID),kI=N('<!> <button class="standard-button">Leave Queue</button> <br>',1),NI=N("<p>Connected to server!</p> <!> <br> <br> <br>",1),RI=()=>yo("match"),AI=N('<!> <button class="standard-button standard-button--danger">Start manual scouting</button> <br>',1);function PI(n,e){he(e,!1),Be();var t=AI(),r=D(t);{var i=a=>{var l=wI();I(a,l)},s=a=>{var l=NI(),c=p(D(l),2);{var u=d=>{var f=CI(),_=D(f);_.__click=[II],I(d,f)},h=d=>{var f=kI(),_=D(f);{var g=w=>{var C=SI(),T=E(C);ce(A=>ut(T,`Currently #${A??""} in queue`),[()=>Object.keys(b.queue).sort((A,y)=>b.queue[A]-b.queue[y]).indexOf(Z.scouterID)+1],Wi),I(w,C)};F(_,w=>{b.queue[Z.scouterID]!=-1&&w(g)})}var m=p(_,2);m.__click=[TI],I(d,f)};F(c,d=>{!(Z.scouterID in b.queue)||!b.queue[Z.scouterID]?d(u):d(h,!1)})}I(a,l)};F(r,a=>{Ze.connected?a(s,!1):a(i)})}var o=p(r,2);o.__click=[RI],I(n,t),de()}Ue(["click"]);var cc=Ie(()=>ne),OI=N('<div class="header"><img class="header__img" alt="QuickScout"></div> <div class="contents"><h3>Made by FRC Teams 749, 955, 997</h3> <button class="standard-button">Setup</button> <p> </p> <!></div>',1);function DI(n,e){he(e,!1),Be();var t=OI(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(r,2),o=p(E(s),2);o.__click=()=>cc(cc().homeState="setup");var a=p(o,2),l=E(a),c=p(a,2);{var u=d=>{EI(d,{})},h=d=>{PI(d,{})};F(c,d=>{Z.scouterID.length>2?d(u):d(h,!1)})}ce(()=>ut(l,`Welcome! Your scouter ID is set to ${Z.scouterID??""}`)),I(n,t),de()}Ue(["click"]);var oe=Ie(()=>Z),uc=Ie(()=>ne),MI=N('<br> <label>Email: <input class="input"></label> <br> <label>Password: <input class="input"></label> <br>',1),LI=N("<p>Scouter IDs should be a single letter followed by a single number.</p> <p>Your scouter ID should be on your role badge. If you don't know it, please ask your scouting lead for your scouter ID.</p>",1),xI=N('<div class="header"><img class="header__img" alt="QuickScout"></div> <div class="contents"><h1>Setup</h1> <label>Scouter ID: <input class="input"></label> <!> <button class="standard-button">Complete Setup</button></div>',1);function FI(n,e){he(e,!1),Be();var t=xI(),r=D(t),i=E(r);tt(i,"src",Nt);var s=p(r,2),o=p(E(s),2),a=p(E(o)),l=p(o,2);{var c=d=>{var f=MI(),_=p(D(f),2),g=p(E(_)),m=p(_,4),w=p(E(m));He(g,()=>oe().email,C=>{oe(oe().email=C),us()}),He(w,()=>oe().password,C=>{oe(oe().password=C),us()}),I(d,f)},u=d=>{var f=LI();I(d,f)};F(l,d=>{oe().scouterID=="LEAD"?d(c):d(u,!1)})}var h=p(l,2);h.__click=()=>{ld(),uc(uc().homeState="start")},ce(d=>h.disabled=d,[()=>oe().scouterID.length>2?oe().email.length==0||oe().password.length==0:!/[A-Z][0-9]$/.test(oe().scouterID)],Wi),He(a,()=>oe().scouterID,d=>{oe(oe().scouterID=d.toUpperCase()),oe().scouterID.startsWith("LE")||oe(oe().scouterID=oe().scouterID.slice(0,2)),us()}),I(n,t),de()}Ue(["click"]);function UI(n,e){he(e,!1),Be();var t=ke(),r=D(t);{var i=o=>{FI(o,{})},s=o=>{DI(o,{})};F(r,o=>{ne.homeState=="setup"?o(i):o(s,!1)})}I(n,t),de()}var BI=N("<main><!></main>");function WI(n,e){he(e,!0),Os(()=>{ld()});var t=BI(),r=E(t);{var i=o=>{eI(o,{})},s=o=>{UI(o,{})};F(r,o=>{ne.uiState=="match"?o(i):o(s,!1)})}I(n,t),de()}ff(WI,{target:document.getElementById("app")});

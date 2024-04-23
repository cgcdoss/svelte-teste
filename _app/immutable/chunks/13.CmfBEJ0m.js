import{a6 as Ft,a7 as Ut,V as fe,R as vt,s as Dt,o as C,a as R,v as Lt,d as y,p as g,b as O,l as j,f as ye,h as N,i as _,x as Ae,n as S,y as Bt,H as jt,e as G,t as X,g as Q,z as Z,j as v,k as Y,F as De}from"./scheduler.BNGkLmhU.js";import{g as Ht,a as It,c as Mt,t as $,S as qt,i as zt,e as Le}from"./index.1MqC5lh-.js";import{f as Be}from"./index.CbeX2_PA.js";function me(e,t){const r=t.token={};function n(s,o,i,c){if(t.token!==r)return;t.resolved=c;let u=t.ctx;i!==void 0&&(u=u.slice(),u[i]=c);const h=s&&(t.current=s)(u);let f=!1;t.block&&(t.blocks?t.blocks.forEach((a,p)=>{p!==o&&a&&(Ht(),It(a,1,1,()=>{t.blocks[p]===a&&(t.blocks[p]=null)}),Mt())}):t.block.d(1),h.c(),$(h,1),h.m(t.mount(),t.anchor),f=!0),t.block=h,t.blocks&&(t.blocks[o]=h),f&&vt()}if(Ft(e)){const s=Ut();if(e.then(o=>{fe(s),n(t.then,1,t.value,o),fe(null)},o=>{if(fe(s),n(t.catch,2,t.error,o),fe(null),!t.hasCatch)throw o}),t.current!==t.pending)return n(t.pending,0),!0}else{if(t.current!==t.then)return n(t.then,1,t.value,e),!0;t.resolved=e}}function ut(e,t,r){const n=t.slice(),{resolved:s}=e;e.current===e.then&&(n[e.value]=s),e.current===e.catch&&(n[e.error]=s),e.block.p(n,r)}function ft(e,t){return function(){return e.apply(t,arguments)}}const{toString:Vt}=Object.prototype,{getPrototypeOf:je}=Object,_e=(e=>t=>{const r=Vt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),I=e=>(e=e.toLowerCase(),t=>_e(t)===e),Ee=e=>t=>typeof t===e,{isArray:te}=Array,se=Ee("undefined");function Jt(e){return e!==null&&!se(e)&&e.constructor!==null&&!se(e.constructor)&&B(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dt=I("ArrayBuffer");function Wt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dt(e.buffer),t}const Kt=Ee("string"),B=Ee("function"),pt=Ee("number"),we=e=>e!==null&&typeof e=="object",$t=e=>e===!0||e===!1,de=e=>{if(_e(e)!=="object")return!1;const t=je(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Gt=I("Date"),Xt=I("File"),Qt=I("Blob"),Zt=I("FileList"),Yt=e=>we(e)&&B(e.pipe),en=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||B(e.append)&&((t=_e(e))==="formdata"||t==="object"&&B(e.toString)&&e.toString()==="[object FormData]"))},tn=I("URLSearchParams"),nn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oe(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),te(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function ht(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const mt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,bt=e=>!se(e)&&e!==mt;function Ne(){const{caseless:e}=bt(this)&&this||{},t={},r=(n,s)=>{const o=e&&ht(t,s)||s;de(t[o])&&de(n)?t[o]=Ne(t[o],n):de(n)?t[o]=Ne({},n):te(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&oe(arguments[n],r);return t}const rn=(e,t,r,{allOwnKeys:n}={})=>(oe(t,(s,o)=>{r&&B(s)?e[o]=ft(s,r):e[o]=s},{allOwnKeys:n}),e),sn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),on=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},an=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&je(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ln=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},cn=e=>{if(!e)return null;if(te(e))return e;let t=e.length;if(!pt(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},un=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&je(Uint8Array)),fn=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},dn=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},pn=I("HTMLFormElement"),hn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Xe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),mn=I("RegExp"),yt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};oe(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},bn=e=>{yt(e,(t,r)=>{if(B(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(B(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},yn=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return te(e)?n(e):n(String(e).split(t)),r},_n=()=>{},En=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Te="abcdefghijklmnopqrstuvwxyz",Qe="0123456789",_t={DIGIT:Qe,ALPHA:Te,ALPHA_DIGIT:Te+Te.toUpperCase()+Qe},wn=(e=16,t=_t.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Sn(e){return!!(e&&B(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rn=e=>{const t=new Array(10),r=(n,s)=>{if(we(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=te(n)?[]:{};return oe(n,(i,c)=>{const u=r(i,s+1);!se(u)&&(o[c]=u)}),t[s]=void 0,o}}return n};return r(e,0)},On=I("AsyncFunction"),An=e=>e&&(we(e)||B(e))&&B(e.then)&&B(e.catch),l={isArray:te,isArrayBuffer:dt,isBuffer:Jt,isFormData:en,isArrayBufferView:Wt,isString:Kt,isNumber:pt,isBoolean:$t,isObject:we,isPlainObject:de,isUndefined:se,isDate:Gt,isFile:Xt,isBlob:Qt,isRegExp:mn,isFunction:B,isStream:Yt,isURLSearchParams:tn,isTypedArray:un,isFileList:Zt,forEach:oe,merge:Ne,extend:rn,trim:nn,stripBOM:sn,inherits:on,toFlatObject:an,kindOf:_e,kindOfTest:I,endsWith:ln,toArray:cn,forEachEntry:fn,matchAll:dn,isHTMLForm:pn,hasOwnProperty:Xe,hasOwnProp:Xe,reduceDescriptors:yt,freezeMethods:bn,toObjectSet:yn,toCamelCase:hn,noop:_n,toFiniteNumber:En,findKey:ht,global:mt,isContextDefined:bt,ALPHABET:_t,generateString:wn,isSpecCompliantForm:Sn,toJSONObject:Rn,isAsyncFn:On,isThenable:An};function E(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}l.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Et=E.prototype,wt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wt[e]={value:e}});Object.defineProperties(E,wt);Object.defineProperty(Et,"isAxiosError",{value:!0});E.from=(e,t,r,n,s,o)=>{const i=Object.create(Et);return l.toFlatObject(e,i,function(u){return u!==Error.prototype},c=>c!=="isAxiosError"),E.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Tn=null;function Pe(e){return l.isPlainObject(e)||l.isArray(e)}function St(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function Ze(e,t,r){return e?e.concat(t).map(function(s,o){return s=St(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function kn(e){return l.isArray(e)&&!e.some(Pe)}const xn=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function Se(e,t,r){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=l.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,A){return!l.isUndefined(A[m])});const n=r.metaTokens,s=r.visitor||f,o=r.dots,i=r.indexes,u=(r.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(t);if(!l.isFunction(s))throw new TypeError("visitor must be a function");function h(b){if(b===null)return"";if(l.isDate(b))return b.toISOString();if(!u&&l.isBlob(b))throw new E("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(b)||l.isTypedArray(b)?u&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function f(b,m,A){let T=b;if(b&&!A&&typeof b=="object"){if(l.endsWith(m,"{}"))m=n?m:m.slice(0,-2),b=JSON.stringify(b);else if(l.isArray(b)&&kn(b)||(l.isFileList(b)||l.endsWith(m,"[]"))&&(T=l.toArray(b)))return m=St(m),T.forEach(function(D,W){!(l.isUndefined(D)||D===null)&&t.append(i===!0?Ze([m],W,o):i===null?m:m+"[]",h(D))}),!1}return Pe(b)?!0:(t.append(Ze(A,m,o),h(b)),!1)}const a=[],p=Object.assign(xn,{defaultVisitor:f,convertValue:h,isVisitable:Pe});function F(b,m){if(!l.isUndefined(b)){if(a.indexOf(b)!==-1)throw Error("Circular reference detected in "+m.join("."));a.push(b),l.forEach(b,function(T,U){(!(l.isUndefined(T)||T===null)&&s.call(t,T,l.isString(U)?U.trim():U,m,p))===!0&&F(T,m?m.concat(U):[U])}),a.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return F(e),t}function Ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function He(e,t){this._pairs=[],e&&Se(e,this,t)}const Rt=He.prototype;Rt.append=function(t,r){this._pairs.push([t,r])};Rt.toString=function(t){const r=t?function(n){return t.call(this,n,Ye)}:Ye;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Cn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ot(e,t,r){if(!t)return e;const n=r&&r.encode||Cn,s=r&&r.serialize;let o;if(s?o=s(t,r):o=l.isURLSearchParams(t)?t.toString():new He(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class et{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){l.forEach(this.handlers,function(n){n!==null&&t(n)})}}const At={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gn=typeof URLSearchParams<"u"?URLSearchParams:He,Nn=typeof FormData<"u"?FormData:null,Pn=typeof Blob<"u"?Blob:null,Fn={isBrowser:!0,classes:{URLSearchParams:gn,FormData:Nn,Blob:Pn},protocols:["http","https","file","blob","url","data"]},Tt=typeof window<"u"&&typeof document<"u",Un=(e=>Tt&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Tt,hasStandardBrowserEnv:Un,hasStandardBrowserWebWorkerEnv:vn},Symbol.toStringTag,{value:"Module"})),H={...Dn,...Fn};function Ln(e,t){return Se(e,new H.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return H.isNode&&l.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Bn(e){return l.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jn(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function kt(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),u=o>=r.length;return i=!i&&l.isArray(s)?s.length:i,u?(l.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!l.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&l.isArray(s[i])&&(s[i]=jn(s[i])),!c)}if(l.isFormData(e)&&l.isFunction(e.entries)){const r={};return l.forEachEntry(e,(n,s)=>{t(Bn(n),s,r,0)}),r}return null}function Hn(e,t,r){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Ie={transitional:At,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=l.isObject(t);if(o&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return s?JSON.stringify(kt(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ln(t,this.formSerializer).toString();if((c=l.isFileList(t))||n.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Se(c?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),Hn(t)):t}],transformResponse:[function(t){const r=this.transitional||Ie.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&l.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?E.from(c,E.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:H.classes.FormData,Blob:H.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch"],e=>{Ie.headers[e]={}});const Me=Ie,In=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mn=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&In[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},tt=Symbol("internals");function re(e){return e&&String(e).trim().toLowerCase()}function pe(e){return e===!1||e==null?e:l.isArray(e)?e.map(pe):String(e)}function qn(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const zn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ke(e,t,r,n,s){if(l.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!l.isString(t)){if(l.isString(n))return t.indexOf(n)!==-1;if(l.isRegExp(n))return n.test(t)}}function Vn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Jn(e,t){const r=l.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class Re{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,u,h){const f=re(u);if(!f)throw new Error("header name must be a non-empty string");const a=l.findKey(s,f);(!a||s[a]===void 0||h===!0||h===void 0&&s[a]!==!1)&&(s[a||u]=pe(c))}const i=(c,u)=>l.forEach(c,(h,f)=>o(h,f,u));return l.isPlainObject(t)||t instanceof this.constructor?i(t,r):l.isString(t)&&(t=t.trim())&&!zn(t)?i(Mn(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=re(t),t){const n=l.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return qn(s);if(l.isFunction(r))return r.call(this,s,n);if(l.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=re(t),t){const n=l.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ke(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=re(i),i){const c=l.findKey(n,i);c&&(!r||ke(n,n[c],c,r))&&(delete n[c],s=!0)}}return l.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||ke(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return l.forEach(this,(s,o)=>{const i=l.findKey(n,o);if(i){r[i]=pe(s),delete r[o];return}const c=t?Vn(o):String(o).trim();c!==o&&delete r[o],r[c]=pe(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return l.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&l.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[tt]=this[tt]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=re(i);n[c]||(Jn(s,i),n[c]=!0)}return l.isArray(t)?t.forEach(o):o(t),this}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(Re.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});l.freezeMethods(Re);const q=Re;function xe(e,t){const r=this||Me,n=t||r,s=q.from(n.headers);let o=n.data;return l.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function xt(e){return!!(e&&e.__CANCEL__)}function ie(e,t,r){E.call(this,e??"canceled",E.ERR_CANCELED,t,r),this.name="CanceledError"}l.inherits(ie,E,{__CANCEL__:!0});function Wn(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new E("Request failed with status code "+r.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Kn=H.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];l.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),l.isString(n)&&i.push("path="+n),l.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ct(e,t){return e&&!$n(t)?Gn(e,t):t}const Xn=H.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const c=l.isString(i)?s(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function Qn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const h=Date.now(),f=n[o];i||(i=h),r[s]=u,n[s]=h;let a=o,p=0;for(;a!==s;)p+=r[a++],a=a%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const F=f&&h-f;return F?Math.round(p*1e3/F):void 0}}function nt(e,t){let r=0;const n=Zn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-r,u=n(c),h=o<=i;r=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:u||void 0,estimated:u&&i&&h?(i-o)/u:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const Yn=typeof XMLHttpRequest<"u",er=Yn&&function(e){return new Promise(function(r,n){let s=e.data;const o=q.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,u;function h(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let f;if(l.isFormData(s)){if(H.hasStandardBrowserEnv||H.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[m,...A]=f?f.split(";").map(T=>T.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...A].join("; "))}}let a=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",A=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+A))}const p=Ct(e.baseURL,e.url);a.open(e.method.toUpperCase(),Ot(p,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function F(){if(!a)return;const m=q.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),T={data:!i||i==="text"||i==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:m,config:e,request:a};Wn(function(D){r(D),h()},function(D){n(D),h()},T),a=null}if("onloadend"in a?a.onloadend=F:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(F)},a.onabort=function(){a&&(n(new E("Request aborted",E.ECONNABORTED,e,a)),a=null)},a.onerror=function(){n(new E("Network Error",E.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let A=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const T=e.transitional||At;e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),n(new E(A,T.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,a)),a=null},H.hasStandardBrowserEnv&&(c&&l.isFunction(c)&&(c=c(e)),c||c!==!1&&Xn(p))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&Kn.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in a&&l.forEach(o.toJSON(),function(A,T){a.setRequestHeader(T,A)}),l.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&i!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",nt(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",nt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=m=>{a&&(n(!m||m.type?new ie(null,e,a):m),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const b=Qn(p);if(b&&H.protocols.indexOf(b)===-1){n(new E("Unsupported protocol "+b+":",E.ERR_BAD_REQUEST,e));return}a.send(s||null)})},Fe={http:Tn,xhr:er};l.forEach(Fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const rt=e=>`- ${e}`,tr=e=>l.isFunction(e)||e===null||e===!1,gt={getAdapter:e=>{e=l.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!tr(r)&&(n=Fe[(i=String(r)).toLowerCase()],n===void 0))throw new E(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(rt).join(`
`):" "+rt(o[0]):"as no adapter specified";throw new E("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Fe};function Ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ie(null,e)}function st(e){return Ce(e),e.headers=q.from(e.headers),e.data=xe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gt.getAdapter(e.adapter||Me.adapter)(e).then(function(n){return Ce(e),n.data=xe.call(e,e.transformResponse,n),n.headers=q.from(n.headers),n},function(n){return xt(n)||(Ce(e),n&&n.response&&(n.response.data=xe.call(e,e.transformResponse,n.response),n.response.headers=q.from(n.response.headers))),Promise.reject(n)})}const ot=e=>e instanceof q?{...e}:e;function ee(e,t){t=t||{};const r={};function n(h,f,a){return l.isPlainObject(h)&&l.isPlainObject(f)?l.merge.call({caseless:a},h,f):l.isPlainObject(f)?l.merge({},f):l.isArray(f)?f.slice():f}function s(h,f,a){if(l.isUndefined(f)){if(!l.isUndefined(h))return n(void 0,h,a)}else return n(h,f,a)}function o(h,f){if(!l.isUndefined(f))return n(void 0,f)}function i(h,f){if(l.isUndefined(f)){if(!l.isUndefined(h))return n(void 0,h)}else return n(void 0,f)}function c(h,f,a){if(a in t)return n(h,f);if(a in e)return n(void 0,h)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,f)=>s(ot(h),ot(f),!0)};return l.forEach(Object.keys(Object.assign({},e,t)),function(f){const a=u[f]||s,p=a(e[f],t[f],f);l.isUndefined(p)&&a!==c||(r[f]=p)}),r}const Nt="1.6.8",qe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const it={};qe.transitional=function(t,r,n){function s(o,i){return"[Axios v"+Nt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new E(s(i," has been removed"+(r?" in "+r:"")),E.ERR_DEPRECATED);return r&&!it[i]&&(it[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function nr(e,t,r){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],u=c===void 0||i(c,o,e);if(u!==!0)throw new E("option "+o+" must be "+u,E.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const Ue={assertOptions:nr,validators:qe},V=Ue.validators;class be{constructor(t){this.defaults=t,this.interceptors={request:new et,response:new et}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ee(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Ue.assertOptions(n,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1),s!=null&&(l.isFunction(s)?r.paramsSerializer={serialize:s}:Ue.assertOptions(s,{encode:V.function,serialize:V.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&l.merge(o.common,o[r.method]);o&&l.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),r.headers=q.concat(i,o);const c=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(u=u&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const h=[];this.interceptors.response.forEach(function(m){h.push(m.fulfilled,m.rejected)});let f,a=0,p;if(!u){const b=[st.bind(this),void 0];for(b.unshift.apply(b,c),b.push.apply(b,h),p=b.length,f=Promise.resolve(r);a<p;)f=f.then(b[a++],b[a++]);return f}p=c.length;let F=r;for(a=0;a<p;){const b=c[a++],m=c[a++];try{F=b(F)}catch(A){m.call(this,A);break}}try{f=st.call(this,F)}catch(b){return Promise.reject(b)}for(a=0,p=h.length;a<p;)f=f.then(h[a++],h[a++]);return f}getUri(t){t=ee(this.defaults,t);const r=Ct(t.baseURL,t.url);return Ot(r,t.params,t.paramsSerializer)}}l.forEach(["delete","get","head","options"],function(t){be.prototype[t]=function(r,n){return this.request(ee(n||{},{method:t,url:r,data:(n||{}).data}))}});l.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(ee(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}be.prototype[t]=r(),be.prototype[t+"Form"]=r(!0)});const he=be;class ze{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new ie(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new ze(function(s){t=s}),cancel:t}}}const rr=ze;function sr(e){return function(r){return e.apply(null,r)}}function or(e){return l.isObject(e)&&e.isAxiosError===!0}const ve={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ve).forEach(([e,t])=>{ve[t]=e});const ir=ve;function Pt(e){const t=new he(e),r=ft(he.prototype.request,t);return l.extend(r,he.prototype,t,{allOwnKeys:!0}),l.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Pt(ee(e,s))},r}const k=Pt(Me);k.Axios=he;k.CanceledError=ie;k.CancelToken=rr;k.isCancel=xt;k.VERSION=Nt;k.toFormData=Se;k.AxiosError=E;k.Cancel=k.CanceledError;k.all=function(t){return Promise.all(t)};k.spread=sr;k.isAxiosError=or;k.mergeConfig=ee;k.AxiosHeaders=q;k.formToJSON=e=>kt(l.isHTMLForm(e)?new FormData(e):e);k.getAdapter=gt.getAdapter;k.HttpStatusCode=ir;k.default=k;const at=k.create({headers:{Authorization:"um token bearer"}}),ar={get:e=>at.get(e),post:(e,t)=>at.post(e,t)};function lt(e){let t,r,n={ctx:e,current:null,token:null,hasCatch:!0,pending:mr,then:cr,catch:lr,value:7};return me(r=e[0],n),{c(){t=G(),n.block.c()},l(s){t=G(),n.block.l(s)},m(s,o){_(s,t,o),n.block.m(s,n.anchor=o),n.mount=()=>t.parentNode,n.anchor=t},p(s,o){e=s,n.ctx=e,o&1&&r!==(r=e[0])&&me(r,n)||ut(n,e,o)},d(s){s&&y(t),n.block.d(s),n.token=null,n=null}}}function lr(e){let t,r="Erro ao obter usuário";return{c(){t=R("div"),t.textContent=r},l(n){t=O(n,"DIV",{"data-svelte-h":!0}),j(t)!=="svelte-xjm3q"&&(t.textContent=r)},m(n,s){_(n,t,s)},p:S,d(n){n&&y(t)}}}function cr(e){let t;function r(o,i){return o[7].ok?fr:ur}let n=r(e),s=n(e);return{c(){s.c(),t=G()},l(o){s.l(o),t=G()},m(o,i){s.m(o,i),_(o,t,i)},p(o,i){n===(n=r(o))&&s?s.p(o,i):(s.d(1),s=n(o),s&&(s.c(),s.m(t.parentNode,t)))},d(o){o&&y(t),s.d(o)}}}function ur(e){let t,r="Erro ao obter usuário";return{c(){t=R("div"),t.textContent=r},l(n){t=O(n,"DIV",{"data-svelte-h":!0}),j(t)!=="svelte-xjm3q"&&(t.textContent=r)},m(n,s){_(n,t,s)},p:S,d(n){n&&y(t)}}}function fr(e){let t,r,n={ctx:e,current:null,token:null,hasCatch:!1,pending:hr,then:pr,catch:dr,value:8};return me(r=e[7].json(),n),{c(){t=G(),n.block.c()},l(s){t=G(),n.block.l(s)},m(s,o){_(s,t,o),n.block.m(s,n.anchor=o),n.mount=()=>t.parentNode,n.anchor=t},p(s,o){e=s,n.ctx=e,o&1&&r!==(r=e[7].json())&&me(r,n)||ut(n,e,o)},d(s){s&&y(t),n.block.d(s),n.token=null,n=null}}}function dr(e){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function pr(e){let t,r,n,s,o=e[8].results[0].name.first+"",i,c,u=e[8].results[0].name.last+"",h,f;return{c(){t=R("div"),r=R("img"),s=C(),i=X(o),c=C(),h=X(u),this.h()},l(a){t=O(a,"DIV",{});var p=ye(t);r=O(p,"IMG",{src:!0,alt:!0}),s=g(p),i=Q(p,o),c=g(p),h=Q(p,u),p.forEach(y),this.h()},h(){Z(r.src,n=e[8].results[0].picture.medium)||N(r,"src",n),N(r,"alt","Usuario")},m(a,p){_(a,t,p),v(t,r),v(t,s),v(t,i),v(t,c),v(t,h)},p(a,p){p&1&&!Z(r.src,n=a[8].results[0].picture.medium)&&N(r,"src",n),p&1&&o!==(o=a[8].results[0].name.first+"")&&Y(i,o),p&1&&u!==(u=a[8].results[0].name.last+"")&&Y(h,u)},i(a){a&&(f||De(()=>{f=Le(t,Be,{y:250}),f.start()}))},o:S,d(a){a&&y(t)}}}function hr(e){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function mr(e){let t,r='<h1 class="font-bold text-xl">Carregando...</h1>';return{c(){t=R("div"),t.innerHTML=r,this.h()},l(n){t=O(n,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1h7cbj6"&&(t.innerHTML=r),this.h()},h(){N(t,"class","animate-bounce")},m(n,s){_(n,t,s)},p:S,d(n){n&&y(t)}}}function br(e){let t,r,n,s,o=e[2].results[0].name.first+"",i,c,u=e[2].results[0].name.last+"",h,f;return{c(){t=R("div"),r=R("img"),s=C(),i=X(o),c=C(),h=X(u),this.h()},l(a){t=O(a,"DIV",{});var p=ye(t);r=O(p,"IMG",{src:!0,alt:!0}),s=g(p),i=Q(p,o),c=g(p),h=Q(p,u),p.forEach(y),this.h()},h(){Z(r.src,n=e[2].results[0].picture.medium)||N(r,"src",n),N(r,"alt","Usuario")},m(a,p){_(a,t,p),v(t,r),v(t,s),v(t,i),v(t,c),v(t,h)},p(a,p){p&4&&!Z(r.src,n=a[2].results[0].picture.medium)&&N(r,"src",n),p&4&&o!==(o=a[2].results[0].name.first+"")&&Y(i,o),p&4&&u!==(u=a[2].results[0].name.last+"")&&Y(h,u)},i(a){a&&(f||De(()=>{f=Le(t,Be,{y:-250}),f.start()}))},o:S,d(a){a&&y(t)}}}function yr(e){let t,r='<h2 class="font-bold text-xl">Carregando...</h2>';return{c(){t=R("div"),t.innerHTML=r,this.h()},l(n){t=O(n,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-15xxgpe"&&(t.innerHTML=r),this.h()},h(){N(t,"class","animate-bounce")},m(n,s){_(n,t,s)},p:S,i:S,o:S,d(n){n&&y(t)}}}function ct(e){let t,r,n,s,o=e[1].results[0].name.first+"",i,c,u=e[1].results[0].name.last+"",h,f;return{c(){t=R("div"),r=R("img"),s=C(),i=X(o),c=C(),h=X(u),this.h()},l(a){t=O(a,"DIV",{});var p=ye(t);r=O(p,"IMG",{src:!0,alt:!0}),s=g(p),i=Q(p,o),c=g(p),h=Q(p,u),p.forEach(y),this.h()},h(){Z(r.src,n=e[1].results[0].picture.medium)||N(r,"src",n),N(r,"alt","Usuario")},m(a,p){_(a,t,p),v(t,r),v(t,s),v(t,i),v(t,c),v(t,h)},p(a,p){p&2&&!Z(r.src,n=a[1].results[0].picture.medium)&&N(r,"src",n),p&2&&o!==(o=a[1].results[0].name.first+"")&&Y(i,o),p&2&&u!==(u=a[1].results[0].name.last+"")&&Y(h,u)},i(a){a&&(f||De(()=>{f=Le(t,Be,{y:-250}),f.start()}))},o:S,d(a){a&&y(t)}}}function _r(e){let t,r,n="Usando bloco await do Svelte",s,o,i="Novo usuário",c,u,h,f,a,p,F=`Usando async/await nativo do JS:
  <p class="inline-block text-sm">(Sem loading global)</p>`,b,m,A="Novo usuário",T,U,D,W,z,Ve="Usando Axios:",ae,M,Je="Novo usuário",le,K,ne,ce,J,We=`API em uso no exemplo:
  <a class="text-blue-500" href="https://randomuser.me/" target="_blank">https://randomuser.me/</a>`,Oe,Ke,P=e[0]&&lt(e);function $e(d,w){return!d[2]||d[3]?yr:br}let ue=$e(e),L=ue(e),x=e[1]&&ct(e);return{c(){t=C(),r=R("h1"),r.textContent=n,s=C(),o=R("button"),o.textContent=i,c=C(),u=R("div"),P&&P.c(),h=C(),f=R("hr"),a=C(),p=R("h1"),p.innerHTML=F,b=C(),m=R("button"),m.textContent=A,T=C(),L.c(),U=C(),D=R("hr"),W=C(),z=R("h1"),z.textContent=Ve,ae=C(),M=R("button"),M.textContent=Je,le=C(),x&&x.c(),K=C(),ne=R("hr"),ce=C(),J=R("div"),J.innerHTML=We,this.h()},l(d){Lt("svelte-383ml6",document.head).forEach(y),t=g(d),r=O(d,"H1",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-1nuxkhe"&&(r.textContent=n),s=g(d),o=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),j(o)!=="svelte-t9zcep"&&(o.textContent=i),c=g(d),u=O(d,"DIV",{class:!0});var Ge=ye(u);P&&P.l(Ge),Ge.forEach(y),h=g(d),f=O(d,"HR",{}),a=g(d),p=O(d,"H1",{class:!0,"data-svelte-h":!0}),j(p)!=="svelte-1xggqiv"&&(p.innerHTML=F),b=g(d),m=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),j(m)!=="svelte-1eltx7k"&&(m.textContent=A),T=g(d),L.l(d),U=g(d),D=O(d,"HR",{}),W=g(d),z=O(d,"H1",{class:!0,"data-svelte-h":!0}),j(z)!=="svelte-1qpoiyf"&&(z.textContent=Ve),ae=g(d),M=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),j(M)!=="svelte-jkowxi"&&(M.textContent=Je),le=g(d),x&&x.l(d),K=g(d),ne=O(d,"HR",{class:!0}),ce=g(d),J=O(d,"DIV",{"data-svelte-h":!0}),j(J)!=="svelte-1p1p10l"&&(J.innerHTML=We),this.h()},h(){document.title="Svelte teste - Promises",N(r,"class","font-bold text-2xl my-4"),N(o,"class","bg-primary-500 text-white p-2 hover:bg-primary-700 mb-4"),N(u,"class","mb-3"),N(p,"class","font-bold text-2xl my-4"),N(m,"class","bg-primary-500 text-white p-2 hover:bg-primary-700 mb-4"),N(z,"class","font-bold text-2xl my-4"),N(M,"class","bg-primary-500 text-white p-2 hover:bg-primary-700 mb-4"),N(ne,"class","my-4")},m(d,w){_(d,t,w),_(d,r,w),_(d,s,w),_(d,o,w),_(d,c,w),_(d,u,w),P&&P.m(u,null),_(d,h,w),_(d,f,w),_(d,a,w),_(d,p,w),_(d,b,w),_(d,m,w),_(d,T,w),L.m(d,w),_(d,U,w),_(d,D,w),_(d,W,w),_(d,z,w),_(d,ae,w),_(d,M,w),_(d,le,w),x&&x.m(d,w),_(d,K,w),_(d,ne,w),_(d,ce,w),_(d,J,w),Oe||(Ke=[Ae(o,"click",e[6]),Ae(m,"click",e[4]),Ae(M,"click",e[5])],Oe=!0)},p(d,[w]){d[0]?P?P.p(d,w):(P=lt(d),P.c(),P.m(u,null)):P&&(P.d(1),P=null),ue===(ue=$e(d))&&L?L.p(d,w):(L.d(1),L=ue(d),L&&(L.c(),$(L,1),L.m(U.parentNode,U))),d[1]?x?(x.p(d,w),w&2&&$(x,1)):(x=ct(d),x.c(),$(x,1),x.m(K.parentNode,K)):x&&(x.d(1),x=null)},i(d){$(L),$(x)},o:S,d(d){d&&(y(t),y(r),y(s),y(o),y(c),y(u),y(h),y(f),y(a),y(p),y(b),y(m),y(T),y(U),y(D),y(W),y(z),y(ae),y(M),y(le),y(K),y(ne),y(ce),y(J)),P&&P.d(),L.d(d),x&&x.d(d),Oe=!1,Bt(Ke)}}}function ge(e=!1){return fetch("https://randomuser.me/api/",{skipLoading:e})}function Er(e,t,r){let n,s,o,i=!1;jt(()=>{r(0,n=ge()),c(),u()});async function c(){try{r(3,i=!0);const f=await ge(!0);if(f.ok){const a=await f.json();r(2,o=a)}else console.error("Erro ao obter usuário")}catch{console.error("Erro ao obter usuário")}finally{r(3,i=!1)}}async function u(){r(1,s=void 0),r(1,s=(await ar.get("https://randomuser.me/api/")).data)}return[n,s,o,i,c,u,()=>r(0,n=ge())]}class wr extends qt{constructor(t){super(),zt(this,t,Er,_r,Dt,{})}}const Ar=Object.freeze(Object.defineProperty({__proto__:null,default:wr},Symbol.toStringTag,{value:"Module"}));export{wr as P,Ar as _};

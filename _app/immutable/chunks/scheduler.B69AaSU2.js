function m(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function C(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function S(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function U(t){return Object.keys(t).length===0}function F(t,...n){if(t==null){for(const o of n)o(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(F(n,e))}function H(t,n,e,o){if(t){const r=x(t,n,e,o);return t[0](r)}}function x(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function I(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function J(t,n,e,o,r,a){if(r){const _=x(n,e,o,a);t.p(_,r)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t){return t&&q(t.destroy)?t.destroy:m}function Q(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function d(t){l=t}function y(){if(!l)throw new Error("Function called outside component initialization");return l}function R(t){y().$$.on_mount.push(t)}function T(t){y().$$.after_update.push(t)}function V(t){y().$$.on_destroy.push(t)}const i=[],b=[];let c=[];const g=[],k=Promise.resolve();let p=!1;function O(){p||(p=!0,k.then(D))}function W(){return O(),k}function z(t){c.push(t)}const h=new Set;let s=0;function D(){if(s!==0)return;const t=l;do{try{for(;s<i.length;){const n=i[s];s++,d(n),M(n.$$)}}catch(n){throw i.length=0,s=0,n}for(d(null),i.length=0,s=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(i.length);for(;g.length;)g.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function X(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{K as A,I as B,w as C,L as D,B as E,y as F,V as a,T as b,G as c,b as d,z as e,A as f,C as g,D as h,q as i,U as j,X as k,l,d as m,m as n,R as o,j as p,i as q,E as r,P as s,W as t,O as u,S as v,N as w,Q as x,H as y,J as z};

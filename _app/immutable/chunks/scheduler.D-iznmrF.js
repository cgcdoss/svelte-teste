function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(w)}function D(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(E(n,e))}function U(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function A(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function B(t,n,e,o,r,a){if(r){const f=y(n,e,o,a);t.p(f,r)}}function C(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function d(t){i=t}function p(){if(!i)throw new Error("Function called outside component initialization");return i}function G(t){p().$$.on_mount.push(t)}function H(t){p().$$.after_update.push(t)}function I(t){p().$$.on_destroy.push(t)}const l=[],b=[];let s=[];const g=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function J(){return v(),m}function O(t){s.push(t)}const _=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<l.length;){const n=l[c];c++,d(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(d(null),l.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];_.has(e)||(_.add(e),e())}s.length=0}while(l.length);for(;g.length;)g.pop()();h=!1,_.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function K(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{I as a,H as b,S as c,b as d,U as e,A as f,C as g,z as h,q as i,D as j,P as k,O as l,K as m,x as n,G as o,i as p,d as q,j as r,F as s,J as t,B as u,w as v,l as w,v as x};

import{s as j,o as d,a as k,t as v,v as z,d as u,p as h,b as C,g as S,z as q,h as p,i as m,k as b,n as g}from"./scheduler.DZULovi0.js";import{S as E,i as F}from"./index.BbX9ERtF.js";function G(r){let a,t,l,i,n=r[0].results[0].name.first+"",c,o,_=r[0].results[0].name.last+"",f;return{c(){a=d(),t=k("img"),i=d(),c=v(n),o=d(),f=v(_),this.h()},l(e){z("svelte-s5i2ij",document.head).forEach(u),a=h(e),t=C(e,"IMG",{src:!0,alt:!0}),i=h(e),c=S(e,n),o=h(e),f=S(e,_),this.h()},h(){document.title="Svelte teste - Fetch no load",q(t.src,l=r[0].results[0].picture.medium)||p(t,"src",l),p(t,"alt","Usuario")},m(e,s){m(e,a,s),m(e,t,s),m(e,i,s),m(e,c,s),m(e,o,s),m(e,f,s)},p(e,[s]){s&1&&!q(t.src,l=e[0].results[0].picture.medium)&&p(t,"src",l),s&1&&n!==(n=e[0].results[0].name.first+"")&&b(c,n),s&1&&_!==(_=e[0].results[0].name.last+"")&&b(f,_)},i:g,o:g,d(e){e&&(u(a),u(t),u(i),u(c),u(o),u(f))}}}function I(r,a,t){let{data:l}=a;return r.$$set=i=>{"data"in i&&t(0,l=i.data)},[l]}class U extends E{constructor(a){super(),F(this,a,I,G,j,{data:0})}}export{U as default};
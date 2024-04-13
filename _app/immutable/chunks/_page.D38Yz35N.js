import{s as fe,n as le,r as me,o as _e,a as ve}from"./scheduler.BpvEMTcR.js";import{S as ue,i as ce,e as ae,a as y,d as u,b as v,l as h,t as D,c as p,f as B,k as H,m as C,g as I,h as P,j as n,s as V,n as pe,o as he,p as Ce,q as se,r as be,u as ne,v as ge,w as Ee,x as ke}from"./index.DM9LFaN2.js";import{l as oe,e as ie}from"./store.BGqFpSZH.js";function re(o){let t,e,l,s="Estado:",E,b=o[0].uf+"",r,m,d,g,x="Cidade:",j,i=o[0].localidade+"",a,c,_,q,Z="Bairro:",Q,z=o[0].bairro+"",L,R,$,S,ee="Logradouro:",W,A=o[0].logradouro+"",M,X,w,N,te="Complemento:",Y,F=(o[0].complemento||"-")+"",T;return{c(){t=v("div"),e=v("div"),l=v("b"),l.textContent=s,E=h(),r=D(b),m=h(),d=v("div"),g=v("b"),g.textContent=x,j=h(),a=D(i),c=h(),_=v("div"),q=v("b"),q.textContent=Z,Q=h(),L=D(z),R=h(),$=v("div"),S=v("b"),S.textContent=ee,W=h(),M=D(A),X=h(),w=v("div"),N=v("b"),N.textContent=te,Y=h(),T=D(F),this.h()},l(k){t=p(k,"DIV",{class:!0});var f=B(t);e=p(f,"DIV",{});var U=B(e);l=p(U,"B",{"data-svelte-h":!0}),H(l)!=="svelte-lpe1rc"&&(l.textContent=s),E=C(U),r=I(U,b),U.forEach(u),m=C(f),d=p(f,"DIV",{});var G=B(d);g=p(G,"B",{"data-svelte-h":!0}),H(g)!=="svelte-phmq7u"&&(g.textContent=x),j=C(G),a=I(G,i),G.forEach(u),c=C(f),_=p(f,"DIV",{});var J=B(_);q=p(J,"B",{"data-svelte-h":!0}),H(q)!=="svelte-1gte1q5"&&(q.textContent=Z),Q=C(J),L=I(J,z),J.forEach(u),R=C(f),$=p(f,"DIV",{});var K=B($);S=p(K,"B",{"data-svelte-h":!0}),H(S)!=="svelte-13clcz0"&&(S.textContent=ee),W=C(K),M=I(K,A),K.forEach(u),X=C(f),w=p(f,"DIV",{});var O=B(w);N=p(O,"B",{"data-svelte-h":!0}),H(N)!=="svelte-13r29mv"&&(N.textContent=te),Y=C(O),T=I(O,F),O.forEach(u),f.forEach(u),this.h()},h(){P(t,"class","grid grid-cols-3 gap-2 mt-4")},m(k,f){y(k,t,f),n(t,e),n(e,l),n(e,E),n(e,r),n(t,m),n(t,d),n(d,g),n(d,j),n(d,a),n(t,c),n(t,_),n(_,q),n(_,Q),n(_,L),n(t,R),n(t,$),n($,S),n($,W),n($,M),n(t,X),n(t,w),n(w,N),n(w,Y),n(w,T)},p(k,f){f&1&&b!==(b=k[0].uf+"")&&V(r,b),f&1&&i!==(i=k[0].localidade+"")&&V(a,i),f&1&&z!==(z=k[0].bairro+"")&&V(L,z),f&1&&A!==(A=k[0].logradouro+"")&&V(M,A),f&1&&F!==(F=(k[0].complemento||"-")+"")&&V(T,F)},d(k){k&&u(t)}}}function ye(o){let t,e=o[0]&&re(o);return{c(){e&&e.c(),t=ae()},l(l){e&&e.l(l),t=ae()},m(l,s){e&&e.m(l,s),y(l,t,s)},p(l,[s]){l[0]?e?e.p(l,s):(e=re(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:le,o:le,d(l){l&&u(t),e&&e.d(l)}}}function De(o,t,e){let{address:l}=t;return o.$$set=s=>{"address"in s&&e(0,l=s.address)},[l]}class Ie extends ue{constructor(t){super(),ce(this,t,De,ye,fe,{address:0})}}function de(o){let t,e;return{c(){t=D("- "),e=D(o[1])},l(l){t=I(l,"- "),e=I(l,o[1])},m(l,s){y(l,t,s),y(l,e,s)},p(l,s){s&2&&V(e,l[1])},d(l){l&&(u(t),u(e))}}}function $e(o){let t,e,l=o[0].title+"",s,E,b,r,m,d,g,x,j,i=o[1]&&de(o);return d=new Ie({props:{address:o[2]}}),{c(){t=h(),e=v("h1"),s=D(l),E=h(),i&&i.c(),b=h(),r=v("input"),m=h(),pe(d.$$.fragment),this.h()},l(a){he("svelte-6e2o80",document.head).forEach(u),t=C(a),e=p(a,"H1",{class:!0});var _=B(e);s=I(_,l),E=C(_),i&&i.l(_),_.forEach(u),b=C(a),r=p(a,"INPUT",{type:!0,placeholder:!0,class:!0,maxlength:!0,inputmode:!0}),m=C(a),Ce(d.$$.fragment,a),this.h()},h(){document.title="Svelte teste - CEP",P(e,"class","text-3xl"),P(r,"type","text"),P(r,"placeholder","CEP"),P(r,"class","mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"),P(r,"maxlength","8"),P(r,"inputmode","numeric")},m(a,c){y(a,t,c),y(a,e,c),n(e,s),n(e,E),i&&i.m(e,null),y(a,b,c),y(a,r,c),se(r,o[1]),y(a,m,c),be(d,a,c),g=!0,x||(j=[ne(r,"input",o[4]),ne(r,"input",o[3])],x=!0)},p(a,[c]){(!g||c&1)&&l!==(l=a[0].title+"")&&V(s,l),a[1]?i?i.p(a,c):(i=de(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null),c&2&&r.value!==a[1]&&se(r,a[1]);const _={};c&4&&(_.address=a[2]),d.$set(_)},i(a){g||(ge(d.$$.fragment,a),g=!0)},o(a){Ee(d.$$.fragment,a),g=!1},d(a){a&&(u(t),u(e),u(b),u(r),u(m)),i&&i.d(),ke(d,a),x=!1,me(j)}}}function we(o,t,e){let{data:l}=t,s,E;_e(()=>{}),ve(()=>{});async function b(){if((s==null?void 0:s.toString().length)===8){oe.set(!0);try{const m=await fetch(`https://viacep.com.br/ws/${s}/json/`),d=await m.json();if(!m.ok){ie.set("Falha na comunicação com o servidor");return}if(d.erro){ie.set("CEP inválido");return}e(2,E=d)}catch{}finally{oe.set(!1)}}else e(2,E=void 0)}function r(){s=this.value,e(1,s)}return o.$$set=m=>{"data"in m&&e(0,l=m.data)},[l,s,E,b,r]}class xe extends ue{constructor(t){super(),ce(this,t,we,$e,fe,{data:0})}}export{xe as default};

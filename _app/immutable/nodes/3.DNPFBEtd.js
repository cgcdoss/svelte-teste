import{s as D,o as _,a as p,v as F,d as a,p as x,b as c,l as S,f as K,h as b,i as n,j as N,w as V,x as q,n as A,y as W}from"../chunks/scheduler.DZULovi0.js";import{S as z,i as G}from"../chunks/index.BbX9ERtF.js";function J(r){let e,o='O ambiente atual é: "prod"';return{c(){e=p("p"),e.textContent=o},l(i){e=c(i,"P",{"data-svelte-h":!0}),S(e)!=="svelte-c304kd"&&(e.textContent=o)},m(i,f){n(i,e,f)},d(i){i&&a(e)}}}function Q(r){let e,o='O ambiente atual é: "dev"';return{c(){e=p("p"),e.textContent=o},l(i){e=c(i,"P",{"data-svelte-h":!0}),S(e)!=="svelte-13msuwp"&&(e.textContent=o)},m(i,f){n(i,e,f)},d(i){i&&a(e)}}}function X(r){let e,o,i="Welcome to SvelteKit",f,s,k='Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',C,d,L,P,j,H,v,R="Texto no localStorage:",I,y,u,T,h,w="Recarregue a página para obter o valor atual",E,M;function B(t,l){if(t[1]==="dev")return Q;if(t[1]==="prod")return J}let O=B(r),m=O&&O(r);return{c(){e=_(),o=p("h1"),o.textContent=i,f=_(),s=p("p"),s.innerHTML=k,C=_(),d=p("hr"),L=_(),m&&m.c(),P=_(),j=p("hr"),H=_(),v=p("label"),v.textContent=R,I=_(),y=p("div"),u=p("input"),T=_(),h=p("sup"),h.textContent=w,this.h()},l(t){F("svelte-j3jjc9",document.head).forEach(a),e=x(t),o=c(t,"H1",{"data-svelte-h":!0}),S(o)!=="svelte-yyjjjs"&&(o.textContent=i),f=x(t),s=c(t,"P",{"data-svelte-h":!0}),S(s)!=="svelte-1vc1ga9"&&(s.innerHTML=k),C=x(t),d=c(t,"HR",{class:!0}),L=x(t),m&&m.l(t),P=x(t),j=c(t,"HR",{class:!0}),H=x(t),v=c(t,"LABEL",{for:!0,"data-svelte-h":!0}),S(v)!=="svelte-1em5exj"&&(v.textContent=R),I=x(t),y=c(t,"DIV",{});var U=K(y);u=c(U,"INPUT",{type:!0,id:!0,autocomplete:!0}),U.forEach(a),T=x(t),h=c(t,"SUP",{"data-svelte-h":!0}),S(h)!=="svelte-ou488i"&&(h.textContent=w),this.h()},h(){document.title="Svelte teste",b(d,"class","my-4"),b(j,"class","my-4"),b(v,"for","localStorage"),b(u,"type","text"),b(u,"id","localStorage"),b(u,"autocomplete","off")},m(t,l){n(t,e,l),n(t,o,l),n(t,f,l),n(t,s,l),n(t,C,l),n(t,d,l),n(t,L,l),m&&m.m(t,l),n(t,P,l),n(t,j,l),n(t,H,l),n(t,v,l),n(t,I,l),n(t,y,l),N(y,u),V(u,r[0]),n(t,T,l),n(t,h,l),E||(M=[q(u,"input",r[4]),q(u,"change",r[2])],E=!0)},p(t,[l]){l&1&&u.value!==t[0]&&V(u,t[0])},i:A,o:A,d(t){t&&(a(e),a(o),a(f),a(s),a(C),a(d),a(L),a(P),a(j),a(H),a(v),a(I),a(y),a(T),a(h)),m&&m.d(t),E=!1,W(M)}}}function Y(r,e,o){let{data:i}=e;const f="prod";let s=i.textFromLocalStorage;function k(){localStorage.setItem("texto",s)}function C(){s=this.value,o(0,s)}return r.$$set=d=>{"data"in d&&o(3,i=d.data)},[s,f,k,i,C]}class g extends z{constructor(e){super(),G(this,e,Y,X,D,{data:3})}}export{g as component};

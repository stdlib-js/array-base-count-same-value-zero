// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-typed-array@v0.1.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-booleanarray@v0.0.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex@v0.1.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value-zero@v0.2.2-esm/index.mjs";function j(j,p){return o(j,p)?s(j,p)?function(s,e){var r,d,o,a,j;if(!t(e))return 0;for(d=i(e),o=n(e),r=m(s,0),a=0,j=0;j<r.length;j+=2)l(r[j],d)&&l(r[j+1],o)&&(a+=1);return a}(j,p):e(j,p)?function(s,e){var t,i,n,m;if(!r(e))return 0;for(t=d(s,0),n=e?1:0,i=0,m=0;m<t.length;m++)t[m]===n&&(i+=1);return i}(j,p):function(s,e){var t,r,i;for(t=a(s),r=0,i=0;i<s.length;i++)l(t(s,i),e)&&(r+=1);return r}(j,p):function(s,e){var t,r;for(t=0,r=0;r<s.length;r++)l(s[r],e)&&(t+=1);return t}(j,p)}export{j as default};
//# sourceMappingURL=index.mjs.map

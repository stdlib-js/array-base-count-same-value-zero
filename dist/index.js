"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=f(function(k,v){
var c=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),q=require('@stdlib/array-base-assert-is-booleanarray/dist'),m=require('@stdlib/assert-is-complex-like/dist'),p=require('@stdlib/assert-is-boolean/dist').isPrimitive,g=require('@stdlib/complex-real/dist'),l=require('@stdlib/complex-imag/dist'),h=require('@stdlib/strided-base-reinterpret-complex/dist'),y=require('@stdlib/strided-base-reinterpret-boolean/dist'),A=require('@stdlib/array-base-assert-is-accessor-array/dist'),d=require('@stdlib/array-base-resolve-getter/dist'),u=require('@stdlib/assert-is-same-value-zero/dist');function B(e,r){var i,n;for(i=0,n=0;n<e.length;n++)u(e[n],r)&&(i+=1);return i}function w(e,r){var i,n,t;for(i=d(e),n=0,t=0;t<e.length;t++)u(i(e,t),r)&&(n+=1);return n}function C(e,r){var i,n,t,a,o;if(!m(r))return 0;for(n=g(r),t=l(r),i=h(e,0),a=0,o=0;o<i.length;o+=2)u(i[o],n)&&u(i[o+1],t)&&(a+=1);return a}function S(e,r){var i,n,t,a;if(!p(r))return 0;for(i=y(e,0),t=r?1:0,n=0,a=0;a<i.length;a++)i[a]===t&&(n+=1);return n}function V(e,r){return A(e,r)?c(e,r)?C(e,r):q(e,r)?S(e,r):w(e,r):B(e,r)}v.exports=V
});var Z=s();module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

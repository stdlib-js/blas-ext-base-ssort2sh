"use strict";var j=function(f,c){return function(){return c||f((c={exports:{}}).exports,c),c.exports}};var k=j(function(U,O){O.exports=[701,301,132,57,23,10,4,1]});var P=j(function(V,G){
var w=require('@stdlib/math-base-assert-is-negative-zerof/dist'),y=require('@stdlib/math-base-assert-is-nanf/dist'),A=k(),z=A.length;function B(f,c,v,a,g,o){var e,q,h,u,n,s,l,p,i,r;if(f<=0||c===0)return v;for(c<0&&(a*=-1,o*=-1),a<0?e=(1-f)*a:e=0,o<0?q=(1-f)*o:q=0,p=0;p<z;p++)for(u=A[p],i=u;i<f;i++)if(n=v[e+i*a],!y(n)){for(s=g[q+i*o],h=w(n),r=i;r>=u&&(l=v[e+(r-u)*a],!(l<=n&&!(h&&l===n)));r-=u)v[e+r*a]=l,g[q+r*o]=g[q+(r-u)*o];v[e+r*a]=n,g[q+r*o]=s}return v}G.exports=B
});var b=j(function(W,m){
var C=require('@stdlib/math-base-assert-is-negative-zerof/dist'),D=require('@stdlib/math-base-assert-is-nanf/dist'),S=k(),F=S.length;function H(f,c,v,a,g,o,e,q){var h,u,n,s,l,p,i,r;if(f<=0||c===0)return v;for(c<0&&(a*=-1,e*=-1,g-=(f-1)*a,q-=(f-1)*e),p=0;p<F;p++)for(u=S[p],i=u;i<f;i++)if(n=v[g+i*a],!D(n)){for(s=o[q+i*e],h=C(n),r=i;r>=u&&(l=v[g+(r-u)*a],!(l<=n&&!(h&&l===n)));r-=u)v[g+r*a]=l,o[q+r*e]=o[q+(r-u)*e];v[g+r*a]=n,o[q+r*e]=s}return v}m.exports=H
});var _=j(function($,Z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=P(),J=b();I(R,"ndarray",J);Z.exports=R
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),Q=_(),t,E=L(K(__dirname,"./native.js"));M(E)?t=Q:t=E;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

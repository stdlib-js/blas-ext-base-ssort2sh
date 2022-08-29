// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@esm/index.mjs";var n=[701,301,132,57,23,10,4,1],s=n.length;function i(r,i,a,f,o,d){var m,l,h,j,p,u,v,b,g,c;if(r<=0||0===i)return a;for(i<0&&(f*=-1,d*=-1),m=f<0?(1-r)*f:0,l=d<0?(1-r)*d:0,b=0;b<s;b++)for(g=j=n[b];g<r;g++)if(p=a[m+g*f],!t(p)){for(u=o[l+g*d],h=e(p),c=g;c>=j&&(!((v=a[m+(c-j)*f])<=p)||h&&v===p);c-=j)a[m+c*f]=v,o[l+c*d]=o[l+(c-j)*d];a[m+c*f]=p,o[l+c*d]=u}return a}var a=n.length;function f(r,s,i,f,o,d,m,l){var h,j,p,u,v,b,g,c;if(r<=0||0===s)return i;for(s<0&&(o-=(r-1)*(f*=-1),l-=(r-1)*(m*=-1)),b=0;b<a;b++)for(g=j=n[b];g<r;g++)if(p=i[o+g*f],!t(p)){for(u=d[l+g*m],h=e(p),c=g;c>=j&&(!((v=i[o+(c-j)*f])<=p)||h&&v===p);c-=j)i[o+c*f]=v,d[l+c*m]=d[l+(c-j)*m];i[o+c*f]=p,d[l+c*m]=u}return i}r(i,"ndarray",f);export{i as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
/**
 * Copyright (C) 2012 Matt McDonald.
 *
 * Matt's DOM Utils (Utils) is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Matt's DOM Utils (Utils) is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General
 * Public License along with Matt's DOM Utils (Utils).
 * If not, see <http://www.gnu.org/licenses/>.
 *
 * @see http://www.fortybelow.ca/projects/JavaScript/Utils/
 */

var Utils=Utils||{},global=global||this;if(typeof Utils==="object"&&Utils){(function(){var e={INDEX_SIZE_ERROR:"The index is not in the allowed range.",HEIRARCHY_REQUEST_ERROR:"The operation would yield an incorrect node tree.",WRONG_DOCUMENT_ERROR:"The object is in the wrong document.",INVALID_CHARACTER_ERROR:"The string contains invalid characters.",NO_MODIFICATION_ALLOWED_ERROR:"The object can not be modified.",NOT_FOUND_ERROR:"The object can not be found here.",NOT_SUPPORTED_ERROR:"The operation is not supported.",INVALID_STATE_ERROR:"The object is in an invalid state.",SYNTAX_ERROR:"The string did not match the expected pattern.",INVALID_MODIFICATION_ERROR:"The object can not be modified in this way.",NAMESPACE_ERROR:"The operation is not allowed by Namespaces in XML.",INVALID_ACCESS_ERROR:"The object does not support the operation or argument.",TYPE_MISMATCH_ERROR:"The type of the object does not match the expected type.",SECURITY_ERROR:"The operation is insecure.",NETWORK_ERROR:"A network error occurred.",ABORT_ERROR:"The operation was aborted.",URL_MISMATCH_ERROR:"The given URL does not match another URL.",QUOTA_EXCEEDED_ERROR:"The quota has been exceeded.",TIMEOUT_ERROR:"The operation timed out.",INVALID_NODE_TYPE_ERROR:"The supplied node is incorrect or has an incorrect ancestor for this operation.",DATA_CLONE_ERROR:"The object can not be cloned."};function c(){throw new Error(e.INDEX_SIZE_ERROR)}function k(){throw new Error(e.HEIRARCHY_REQUEST_ERROR)}function f(){throw new Error(e.WRONG_DOCUMENT_ERROR)}function h(){throw new Error(e.INVALID_CHARACTER_ERROR)}function o(){var w="NO_MODIFICATION_ALLOWED_ERROR";throw new Error(e[w])}function b(){throw new Error(e.NOT_FOUND_ERROR)}function p(){throw new Error(e.NOT_SUPPORTED_ERROR)}function i(){throw new Error(e.INVALID_STATE_ERROR)}function n(){throw new Error(e.SYNTAX_ERROR)}function m(){throw new Error(e.INVALID_MODIFICATION_ERROR)}function s(){throw new Error(e.NAMESPACE_ERROR)}function r(){throw new Error(e.INVALID_ACCESS_ERROR)}function v(){throw new Error(e.TYPE_MISMATCH_ERROR)}function u(){throw new Error(e.SECURITY_ERROR)}function a(){throw new Error(e.NETWORK_ERROR)}function l(){throw new Error(e.ABORT_ERROR)}function q(){throw new Error(e.URL_MISMATCH_ERROR)}function g(){throw new Error(e.QUOTA_EXCEEDED_ERROR)}function j(){throw new Error(e.TIMEOUT_ERROR)}function d(){throw new Error(e.INVALID_NODE_TYPE_ERROR)}function t(){throw new Error(e.DATA_CLONE_ERROR)}Utils.raise=Utils.raise||{types:e,indexSize:c,heirarchyRequest:k,wrongDocument:f,invalidCharacter:h,noModificationAllowed:o,notFound:b,notSupported:p,invalidState:i,syntax:n,invalidModification:m,namespace:s,invalidAccess:r,typeMismatch:v,security:u,network:a,abort:l,urlMismatch:q,quotaExceeded:g,timeout:j,invalidNodeType:d,dataClone:t}}())}if(typeof Utils==="object"&&Utils){(function(){Utils.types=Utils.types||{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCRESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}())}if(typeof Utils==="object"&&Utils){(function(){var t=Utils.types,k,u,g;k={object:true,"function":true};u=(function(){var w=null;if(global.document){if(typeof global.document==="object"){w=global.document}}return w}());function b(x,w){return typeof x===w}function d(y){var w=typeof y,x=k[w]&&y;return !!(x||w==="unknown")}function e(z){var x=typeof z,y=k[x]&&z,w=false;if(y||x==="unknown"){w=typeof z.length==="number"}return w}function c(z){var x=typeof z,y=k[x]&&z,w=false;if(y||x==="unknown"){w=typeof z.nodeType==="number"}return w}function v(A,x){var y=typeof A,z=k[y]&&A,w=false;if(z||y==="unknown"){w=A.nodeType===x}return w}function n(x){var w=t.ELEMENT_NODE;return v(x,w)}function j(x){var w=t.ATTRIBUTE_NODE;return v(x,w)}function h(x){var w=t.TEXT_NODE;return v(x,w)}function p(x){var w=t.CDATA_SECTION_NODE;return v(x,w)}function r(y){var w="ENTITY_REFERENCE_NODE",x=t[w];return v(y,x)}function o(x){var w=t.ENTITY_NODE;return v(x,w)}function a(y){var w="PROCESSING_INSTRUCTION_NODE",x=t[w];return v(y,x)}function q(x){var w=t.COMMENT_NODE;return v(x,w)}function i(x){var w=t.DOCUMENT_NODE;return v(x,w)}function m(w){return w===global.document}g=(function(){var w=i;if(!c(u)){w=m}return w}());function s(x){var w=t.DOCUMENT_TYPE_NODE;return v(x,w)}function f(y){var w="DOCUMENT_FRAGMENT_NODE",x=t[w];return v(y,x)}function l(x){var w=t.NOTATION_NODE;return v(x,w)}u=null;Utils.is=Utils.is||{type:b,hostObject:d,arrayLike:e,nodeLike:c,nodeType:v,element:n,attribute:j,text:h,cDataSection:p,entityReference:r,entity:o,processingInstruction:a,comment:q,document:g,documentType:s,documentFragment:f,notation:l}}())}if(typeof Utils==="object"&&Utils){(function(){var a=Utils.is.arrayLike;function b(g){var e,d,f,c=[];if(a(g)){c.length=g.length;e=g.length-1;for(d=e;d>-1;d-=1){f=e-d;c[f]=g[f]}}return c}Utils.helpers=Utils.helpers||{makeArray:b}}())}if(typeof Utils==="object"&&Utils){(function(){var f=Utils.types,i=Utils.is.nodeLike,d=Utils.is.hostObject,p=Utils.is.arrayLike,q;q=(function(){var r={};r[f.TEXT_NODE]=true;r[f.PROCESSING_INSTRUCTION_NODE]=true;r[f.COMMENT_NODE]=true;return r}());function k(v,s,u){var t="insertBefore",r=null;if(i(v)&&i(s)&&i(u)){if(d(v[t])){r=v[t](s,u)}}return r}function l(v,w,u){var t,s,x,r;if(p(w)){t=w.length-1;for(s=t;s>-1;s-=1){x=t-s;k(v,w[x],u)}}return r}function g(t,u){var s="appendChild",r=null;if(i(t)&&i(u)){if(d(t[s])){r=t[s](u)}}return r}function b(u,v){var t,s,w,r;if(p(v)){t=v.length-1;for(s=t;s>-1;s-=1){w=t-s;g(u,v[w])}}return r}function n(t,u){var s="removeChild",r=null;if(i(t)&&i(u)){if(d(t[s])){r=t[s](u)}}return r}function j(v,t,s){var u="replaceChild",r=null;if(i(v)&&i(t)&&i(s)){if(d(v[u])){r=v[u](t,s)}}return r}function c(u,s){var t="cloneNode",r=null;if(i(u)){if(d(u[t])){r=u[t](u,s)}}return r}function o(s){var r=false;if(i(s)){r=typeof s.nodeName==="string"}return r}function a(v,t){var u="toLowerCase",s="toUpperCase",r=null;if(o(v)){r=v.nodeName;if(t){r=r[u]()}else{if(!t){r=r[s]()}}}return r}function m(s){var r=false;if(i(s)){r=typeof s.nodeValue==="string"}return r}function h(s){var r=null;if(m(s)){r=s.nodeValue}return r}function e(u,t){var s="nodeValue",r=null;if(i(u)){if(q[u.nodeType]){r=u[s]=t}}return r}Utils.node=Utils.node||{prepend:k,prependList:l,append:g,appendList:b,remove:n,replace:j,clone:c,getName:a,getValue:h,setValue:e}}())}if(typeof Utils==="object"&&Utils){(function(){var i=Utils.is.document,e=Utils.is.hostObject,k,f,a,j,n,h,b,q,p;k=(function(){var r=null;if(global.document){if(typeof global.document==="object"){r=global.document}}return r}());function o(u,s){var t="createElement",r=null;if(i(u)){r=u[t](s)}return r}f=(function(){var s="createElement",r=null;if(i(k)){if(e(k[s])){r=o}}return r}());function d(v,u,s){var t="createElementNS",r=null;if(i(v)){r=v[t](u,s)}return r}a=(function(){var s="createElementNS",r=null;if(i(k)){if(e(k[s])){r=d}}return r}());function c(t,u){var s="createTextNode",r=null;if(i(t)){r=t[s](u)}return r}j=(function(){var s="createTextNode",r=null;if(i(k)){if(e(k[s])){r=c}}return r}());function m(u,t,v){var s="createProcessingInstruction",r=null;if(i(u)){r=u[s](t,v)}return r}n=(function(){var s="createProcessingInstruction",r=null;if(i(k)){if(e(k[s])){r=m}}return r}());function g(t,u){var s="createComment",r=null;if(i(t)){r=t[s](u)}return r}h=(function(){var s="createComment",r=null;if(i(k)){if(e(k[s])){r=g}}return r}());b=(function(){var s="createDocumentFragment",r=false;if(i(k)){if(e(k[s])){r=true}}return r}());q=(function(){var s="createDocumentFragment",r=b;if(b){try{k[s]()}catch(t){r=false}}return r}());function l(t){var s="createDocumentFragment",r=null;if(i(t)){r=t[s]()}return r}p=(function(){var r=null;if(q){r=l}return r}());k=null;Utils.create=Utils.create||{element:f,elementNS:a,text:j,processingInstruction:n,comment:h,documentFragment:p}}())}if(typeof Utils==="object"&&Utils){(function(){var D,y=Utils.is.document,X=Utils.is.element,G=Utils.is.hostObject,i=Utils.raise.invalidCharacter,z=Utils.raise.syntax,K=Utils.is.arrayLike,t=Utils.helpers.makeArray,k,B,j,T,Y,S,N,E,q,u,aa,d,H;D={" ":true,"\t":true,"\n":true,"\f":true,"\r":true};k=(function(){var ab=null;if(y(global.document)){ab=global.document}return ab}());B=(function(){var ab=null;if(k&&k.body){ab=k.body}return ab}());j=(function(){var ab=false;if(X(B)){ab=typeof B.className==="string"}return ab}());T=(function(){var ab=false;if(X(B)){ab=G(B.classList)}return ab}());function e(ae,ad){var ac=ae,ab=ad;return function(ag,af){if(X(ag)){ab=ag.classList[ac](af)}return ab}}Y=(function(){var ac="contains",ab=null;if(B&&T&&G(B.classList[ac])){ab=e(ac,"false")}return ab}());function p(ad){var ac=D[ad],ab=false;if(typeof ac!=="undefined"){i()}else{if(ad===""){z()}else{if(typeof ac==="undefined"){ab=true}}}return ab}function s(ae){var ad=0,ac,ab=true;if(ae&&ae.length){ac=ae.length;for(ad;ad<ac;ad+=1){ab=p(ae.charAt(ad))}}return ab}function Q(ad,af,ae){var ac=false,ab="";if(ad&&ad!==" "){ac=p(ad)}if(!ac&&af.length){ae[ae.length]=af}else{if(ac){ab=af+ad}}return ab}function c(ae){var ad=0,ac,af="",ab=[];if(ae&&ae.length){ac=ae.length+1;for(ad;ad<ac;ad+=1){af=Q(ae.charAt(ad),af,ab)}}return ab}function x(ac){var ab=[];if(j){ab=c(ac.className)}return ab}function L(ae,af){var ad=0,ac,ab=false;ac=ae.length;for(ad;ad<ac;ad+=1){if(af===ae[ad]){ab=true;break}}return ab}function I(ad,ac){var ab=false;if(s(ac)){ab=L(ad,ac)}return ab}function o(ad,ac){var ab=null;if(X(ad)){ab=I(x(ad),ac)}return ab}S=(function(){var ab=null;if(T){ab=Y}else{if(!T&&X(B)){ab=o}}return ab}());function a(ad,ac){var ab=null;if(S){ab=S(ad,ac)}return ab}function A(af,ae){var ad=0,ac=ae.length,ab=true;while(ad<ac&&ab){ab=a(af,ae[ad]);ab=!!ab;ad+=1}return ab}function b(ad,ac){var ab=false;if(X(ad)){if(K(ac)){ab=A(ad,ac)}}return ab}N=(function(){var ab=null;if(B&&T&&G(B.classList.add)){ab=e("add")}return ab}());function g(ae,ad,ac){var ab=false;if(!a(ae,ad)){ac[ac.length]=ad;ab=true}return ab}function P(ae,ac,ad){var ab=false;if(s(ac)){ab=g(ae,ac,ad)}return ab}function U(ad,ac){var ab;if(j){ad.className=ac.join(" ")}return ab}function h(ae,ac){var ad,ab;if(X(ae)){ad=x(ae);P(ae,ac,ad);U(ae,ad)}return ab}E=(function(){var ab=null;if(T){ab=N}else{if(!T&&X(B)){ab=h}}return ab}());function O(ad,ac){var ab=null;if(E){ab=E(ad,ac)}return ab}function l(af,ae){var ad=0,ac=ae.length,ab;for(ad;ad<ac;ad+=1){O(af,ae[ad])}return ab}function M(ad,ac){var ab;if(X(ad)){if(K(ac)){l(ad,ac)}}return ab}q=(function(){var ac="remove",ab=null;if(B&&T&&G(B.classList[ac])){ab=e(ac)}return ab}());function w(ae,ah){var ad=ah.length-1,ac=ad,ai,ag=0,af,ab;for(ac;ac>-1;ac-=1){ai=ad-ac;af=ah[ai];if(af===ae){delete ah[ai]}else{if(af!==ae){delete ah[ai];ah[ag]=af;ag+=1}}}ah.length=ag;return ab}function Z(ae,ac,ad){var ab;if(a(ae,ac)){ab=w(ac,ad)}return ab}function r(ae,ac,ad){var ab;if(s(ac)){Z(ae,ac,ad)}return ab}function f(ae,ac){var ad,ab;if(X(ae)){ad=x(ae);r(ae,ac,ad);U(ae,ad)}return ab}u=(function(){var ab=null;if(T){ab=q}else{if(!T&&X(B)){ab=f}}return ab}());function J(ad,ac){var ab=null;if(u){ab=u(ad,ac)}return ab}function F(ag,af){var ad=af.length,ac=ad,ae,ab;for(ac;ac>-1;ac-=1){ae=ad-ac;J(ag,af[ae])}return ab}function n(ad,ac){var ab;if(X(ad)){if(K(ac)){F(ad,ac)}}return ab}aa=(function(){var ac="toggle",ab=null;if(B&&T&&G(B.classList[ac])){ab=e(ac,"false")}return ab}());function R(ae,ad){var ac=a(ae,ad),ab=false;if(!ac){O(ae,ad);ab=true}else{if(ac){J(ae,ad)}}return ab}d=(function(){var ab=null;if(k){if(T){ab=aa}else{if(!T&&X(B)){ab=R}}}return ab}());function v(ad,ac){var ab=null;if(d){ab=d(ad,ac)}return ab}function W(af,ae){var ad=0,ac=ae.length,ab;for(ad;ad<ac;ad+=1){v(af,ae[ad])}return ab}function C(ad,ac){var ab;if(X(ad)){if(K(ac)){W(ad,ac)}}return ab}function m(ae,ac){var ad,ab=null;if(X(ae)){ad=x(ae);if(ac>=0&&ac<ad.length){ab=ad[ac]}}return ab}function V(ac){var ab=null;if(X(ac)){ab=t(ac.classList)}return ab}H=(function(){var ab=null;if(B){if(T){ab=V}else{if(!T&&X(B)){ab=x}}}return ab}());k=null;B=null;Utils.classes=Utils.classes||{contains:S,containsList:b,add:E,addList:M,remove:u,removeList:n,toggle:d,toggleList:C,item:m,get:H}}())}if(typeof Utils==="object"&&Utils){(function(){var y=Utils.is.document,B=Utils.types,q=Utils.is.nodeLike,L=Utils.is.hostObject,w=Utils.helpers.makeArray,N=Utils.is.arrayLike,af=Utils.is.element,r=Utils.node.remove,h=Utils.is.text,F=Utils.node.getValue,ad=Utils.create.text,Y=Utils.node.append,aj=Utils.node.setValue,k,ae,ag,s,ac,t,g;k=(function(){var al=null;if(y(global.document)){al=global.document}return al}());ae=(function(){var al={};al[B.ELEMENT_NODE]=true;al[B.TEXT_NODE]=true;al[B.PROCESSING_INSTRUCTION_NODE]=true;al[B.COMMENT_NODE]=true;al[B.DOCUMENT_FRAGMENT_NODE]=true;return al}());function A(an){var am=ae,al=false;if(q(an)){if(am[an.nodeType]){al=true}}return al}ag=(function(){var al={};al[B.ELEMENT_NODE]=true;al[B.TEXT_NODE]=true;al[B.PROCESSING_INSTRUCTION_NODE]=true;al[B.COMMENT_NODE]=true;al[B.DOCUMENT_FRAGMENT_NODE]=true;return al}());function D(an){var am=ag,al=false;if(q(an)){if(am[an.nodeType]){al=true}}return al}function P(an){var am="childNodes",al=null;if(q(an)){if(L(an[am])){al=w(an[am])}}return al}g=(function(){var am="childNodes",al=null;if(y(k)){if(L(k[am])){al=P}}return al}());function ab(an,ao,al){var am;if(typeof ao==="function"){am=ao(an);if(am===true){al[al.length]=an}else{if(am){al[al.length]=am}}}}function n(ap,aq){var an,am,ao,al=[];if(N(ap)){an=ap.length-1;for(am=an;am>-1;am-=1){ao=an-am;ab(ap[ao],aq,al)}}return al}function S(am){var al=null;if(g){al=g(am)}return al}function C(am,an){var al=[];if(typeof an==="function"){al=n(S(am),an)}return al}function p(am){var al=null;if(q(am)){r(am.parentNode,am)}return al}function ai(am){var al=null;if(q(am)){al=C(am,p)}return al}function d(am){var al=false;if(af(am)){al=true}return al}function K(al){return n(S(al),d)}function Z(an){var am="children",al=null;if(af(an)){if(L(an[am])){al=w(an[am])}}return al}function V(am){var al=false;if(af(am)){al=L(am.children)}return al}s=(function(){var am,al;if(k){am=V(k.body);if(am){al=Z}else{if(!am){al=K}}}return al}());function M(am){var al=null;if(s){al=s(am)}return al}function O(am,an){var al=[];if(typeof an==="function"){al=n(M(am),an)}return al}function J(am){var al=false;if(af(am)){al=p(am)}return al}function u(am){var al=null;if(q(am)){al=O(am,J)}return al}function m(am){var al=null;if(h(am)){al=F(am)}return al}function a(al){return F(al)}function X(ao,am,an){var al;an[an.length]=ao;if(am.length){an[an.length]=am}return al}function G(am){var al=false;if(q(am)){al=L(am.childNodes)}return al}function l(aq){var ao,an,ap,am,al=[];if(G(aq)){ao=aq.childNodes.length-1;for(an=ao;an>-1;an-=1){ap=ao-an;am=l(aq.childNodes[ap]);X(aq.childNodes[ap],am,al)}}return al}function aa(an){var am="childNodes",al=null;if(q(an)){if(L(an[am])){al=l(an)}}return al}function E(ap,aq,an){var am,al,ao;an=an||[];if(G(ap)){am=ap.childNodes.length-1;for(al=am;al>-1;al-=1){ao=am-al;E(ap.childNodes[ao],aq,an);ab(ap.childNodes[ao],aq,an)}}return an}function W(an){var am,al=null;if(q(an)){am=E(an,m);al=am.join("")}return al}ac=(function(){var al={};al[B.ELEMENT_NODE]=W;al[B.TEXT_NODE]=a;al[B.COMMENT_NODE]=a;al[B.DOCUMENT_FRAGMENT_NODE]=W;al[B.PROCESSING_INSTRUCTION_NODE]=a;return al}());function b(ao){var an=ac,am,al=null;if(A(ao)){am=an[ao.nodeType];if(typeof am==="function"){al=am(ao)}}return al}function j(am,an){var al=null;if(ad){al=ad(am,an)}return al}function U(ap,ao,an){var am,al=null;am=j(an,ap);al=Y(ao,am);return al}function z(an,ap,am){var ao,al=null;ap=ap||"";if(q(an)){if(y(am)){ai(an);ao=U(ap,an,am);al=F(ao)}}return al}function c(al,am){return aj(al,am)}t=(function(){var al={};al[B.ELEMENT_NODE]=z;al[B.TEXT_NODE]=c;al[B.COMMENT_NODE]=c;al[B.DOCUMENT_FRAGMENT_NODE]=z;al[B.PROCESSING_INSTRUCTION_NODE]=c;return al}());function f(ap,aq,ao){var an=t,am,al=null;if(D(ap)){am=an[ap.nodeType];if(typeof am==="function"){al=am(ap,aq,ao)}}return al}function I(ap,aq,an){var am,al,ao;an=an||[];if(N(ap)){am=ap.length-1;for(al=am;al>-1;al-=1){ao=am-al;I(ap[ao],aq,an);ab(ap[ao],aq,an)}}return an}function ah(an,am,ao){var al;if(af(an)){X(an,am,ao)}return al}function R(aq){var ao,an,ap,am,al=[];if(G(aq)){ao=aq.childNodes.length-1;for(an=ao;an>-1;an-=1){ap=ao-an;am=R(aq.childNodes[ap]);ah(aq.childNodes[ap],am,al)}}return al}function T(an){var am="childNodes",al=null;if(q(an)){if(L(an[am])){al=R(an)}}return al}function o(am,ao,an){var al;if(af(am)){ab(am,ao,an)}return al}function H(ap,aq,an){var am,al,ao;an=an||[];if(G(ap)){am=ap.childNodes.length-1;for(al=am;al>-1;al-=1){ao=am-al;H(ap.childNodes[ao],aq,an);o(ap.childNodes[ao],aq,an)}}return an}function v(an){var am="parent",al=null;if(q(an)){if(L(an.parentNode)){al={};al.value=an.parentNode;al[am]=v(an.parentNode)}}return al}function Q(an,ao){var am="parent",al=false;if(q(ao)){while(an){if(an.value===ao){al=true;break}an=an[am]}}return al}function ak(am,ao){var an,al=false;if(q(ao)){an=v(ao);al=Q(an,am)}return al}function e(am){var al=false;if(am&&typeof am==="object"){al=typeof am.value==="object"}return al}function i(an,ao){var am="parent",al=[];if(e(an)){while(an){ab(an.value,ao,al);an=an[am]}}return al}function x(am,an){var al=[];if(typeof an==="function"){al=i(v(am),an)}return al}k=null;Utils.traverse=Utils.traverse||{getNodes:g,linear:n,nodes:C,clearNodes:ai,getElements:s,elements:O,clearElements:u,getNodeTree:aa,nodeTree:E,getText:b,setText:f,recursive:I,getElementTree:T,elementTree:H,getAncestors:v,isAncestor:ak,list:i,ancestors:x}}())}if(typeof Utils==="object"&&Utils){(function(){var t=Utils.types,k=Utils.is.nodeLike,l=Utils.helpers.makeArray,q=Utils.is.document,C=Utils.is.hostObject,U=Utils.is.element,F=Utils.is.arrayLike,h,c,O,V,y,u,f,n,a,j,L,I,J,A,B,E,S,D,R,K,p,o,e,P,x;h=(function(){var Z=null;if(q(global.document)){Z=global.document}return Z}());c=(function(){var Z={};Z[t.ELEMENT_NODE]=true;Z[t.DOCMENT_NODE]=true;Z[t.DOCUMENT_FRAGMENT_NODE]=true;return Z}());function s(ab){var aa=c,Z=false;if(k(ab)){Z=typeof aa[ab.nodeType]==="undefined"}return Z}function i(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)){ab=l(ad[Z](ac))}return ab}}y=(function(){var aa="getElementsByName",Z=null;if(q(h)){if(C(h[aa])){Z=i(aa)}}return Z}());function v(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)||U(ad)){ab=l(ad[Z](ac))}return ab}}u=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h[aa])){Z=v(aa)}}return Z}());function r(aa){var Z=aa;return function(ac,ad,ae){var ab=null;if(q(ac)||U(ac)){ab=l(ac[Z](ad,ae))}return ab}}f=(function(){var aa="getElementsByTagNameNS",Z=null;if(q(h)){if(C(h[aa])){Z=r(aa)}}return Z}());function H(aa){var Z=aa;return function(ac,ad){var ab=null;if(q(ac)||U(ac)){ab=l(ac[Z](ad))}return ab}}n=(function(){var aa="getElementsByClassName",Z=null;if(q(h)){if(C(h[aa])){Z=H(aa)}}return Z}());function Q(aa){var Z=aa;return function(ac,ad){var ab=null;if(q(ac)){ab=ac[Z](ad)}return ab}}a=(function(){var aa="getElementById",Z=null;if(q(h)){if(C(h[aa])){Z=Q(aa)}}return Z}());function d(aa){var Z=aa;return function(ac,ad){var ab=null;if(s(ac)){ab=ac[Z](ad)}return ab}}j=(function(){var aa="querySelector",Z=null;if(s(h)){if(C(h[aa])){Z=d(aa)}}return Z}());function b(aa){var Z=aa;return function(ac,ad){var ab=null;if(s(ac)){ab=l(ac[Z](ad))}return ab}}L=(function(){var aa="querySelectorAll",Z=null;if(s(h)){if(C(h[aa])){Z=b(aa)}}return Z}());function z(aa){var Z=null;if(q(aa)){Z=aa.head}return Z}function Y(ab){var aa,Z=null;if(q(ab)){aa=u(ab,"head");if(F(aa)){Z=aa[0]}}return Z}O=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h.head)){Z=z}else{if(C(h[aa])){Z=Y}}}return Z}());function M(aa){var Z=null;if(q(aa)){Z=aa.body}return Z}function g(ab){var aa,Z=null;if(q(ab)){aa=u(ab,"body");if(F(aa)){Z=aa[0]}}return Z}V=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h.body)){Z=M}else{if(C(h[aa])){Z=g}}}return Z}());function N(aa){var Z=aa;if(!k(aa)&&F(aa)){Z=l(aa)}return Z}function G(aa){var Z=aa;return function(ac){var ab=null;if(q(ac)){ab=l(ac[Z])}return ab}}function T(ab,aa){var Z=null;if(q(ab)){if(C(ab[aa])){Z=G(aa)}}return Z}function w(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)){ab=N(ad[Z][ac])}return ab}}function X(ab,aa){var Z=null;if(q(ab)){if(C(ab[aa])){Z=w(aa)}}return Z}I=(function(){return X(h,"images")}());J=(function(){return T(h,"images")}());A=(function(){return X(h,"embeds")}());B=(function(){return T(h,"embeds")}());E=(function(){return X(h,"links")}());S=(function(){return T(h,"links")}());D=(function(){return X(h,"forms")}());R=(function(){return T(h,"forms")}());K=(function(){return X(h,"scripts")}());p=(function(){return T(h,"scripts")}());o=(function(){return X(h,"applets")}());e=(function(){return T(h,"applets")}());P=(function(){return X(h,"anchors")}());x=(function(){return T(h,"anchors")}());function W(ac,ab,aa){var Z=null;if(ac&&C(ac[ab])){Z=N(ac[ab][aa])}return Z}function m(ab,aa){var Z=null;if(ab&&C(ab[aa])){Z=l(ab[aa])}return Z}h=null;Utils.select=Utils.select||{byName:y,byTagName:u,byTagNameNS:f,byClassName:n,byId:a,query:j,queryAll:L,body:V,head:O,images:I,allImages:J,embeds:A,allEmbeds:B,plugins:A,allPlugins:B,links:E,allLinks:S,forms:D,allForms:R,scripts:K,allScripts:p,applets:o,allApplets:e,anchors:P,allAnchors:x,namedItem:W,collection:m}}())};
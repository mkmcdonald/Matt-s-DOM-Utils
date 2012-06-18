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

var Utils=Utils||{},global=global||this;if(typeof Utils==="object"&&Utils){(function(){var e={INDEX_SIZE_ERROR:"The index is not in the allowed range.",HEIRARCHY_REQUEST_ERROR:"The operation would yield an incorrect node tree.",WRONG_DOCUMENT_ERROR:"The object is in the wrong document.",INVALID_CHARACTER_ERROR:"The string contains invalid characters.",NO_MODIFICATION_ALLOWED_ERROR:"The object can not be modified.",NOT_FOUND_ERROR:"The object can not be found here.",NOT_SUPPORTED_ERROR:"The operation is not supported.",INVALID_STATE_ERROR:"The object is in an invalid state.",SYNTAX_ERROR:"The string did not match the expected pattern.",INVALID_MODIFICATION_ERROR:"The object can not be modified in this way.",NAMESPACE_ERROR:"The operation is not allowed by Namespaces in XML.",INVALID_ACCESS_ERROR:"The object does not support the operation or argument.",TYPE_MISMATCH_ERROR:"The type of the object does not match the expected type.",SECURITY_ERROR:"The operation is insecure.",NETWORK_ERROR:"A network error occurred.",ABORT_ERROR:"The operation was aborted.",URL_MISMATCH_ERROR:"The given URL does not match another URL.",QUOTA_EXCEEDED_ERROR:"The quota has been exceeded.",TIMEOUT_ERROR:"The operation timed out.",INVALID_NODE_TYPE_ERROR:"The supplied node is incorrect or has an incorrect ancestor for this operation.",DATA_CLONE_ERROR:"The object can not be cloned."};function c(){throw new Error(e.INDEX_SIZE_ERROR)}function k(){throw new Error(e.HEIRARCHY_REQUEST_ERROR)}function f(){throw new Error(e.WRONG_DOCUMENT_ERROR)}function h(){throw new Error(e.INVALID_CHARACTER_ERROR)}function o(){var w="NO_MODIFICATION_ALLOWED_ERROR";throw new Error(e[w])}function b(){throw new Error(e.NOT_FOUND_ERROR)}function p(){throw new Error(e.NOT_SUPPORTED_ERROR)}function i(){throw new Error(e.INVALID_STATE_ERROR)}function n(){throw new Error(e.SYNTAX_ERROR)}function m(){throw new Error(e.INVALID_MODIFICATION_ERROR)}function s(){throw new Error(e.NAMESPACE_ERROR)}function r(){throw new Error(e.INVALID_ACCESS_ERROR)}function v(){throw new Error(e.TYPE_MISMATCH_ERROR)}function u(){throw new Error(e.SECURITY_ERROR)}function a(){throw new Error(e.NETWORK_ERROR)}function l(){throw new Error(e.ABORT_ERROR)}function q(){throw new Error(e.URL_MISMATCH_ERROR)}function g(){throw new Error(e.QUOTA_EXCEEDED_ERROR)}function j(){throw new Error(e.TIMEOUT_ERROR)}function d(){throw new Error(e.INVALID_NODE_TYPE_ERROR)}function t(){throw new Error(e.DATA_CLONE_ERROR)}Utils.raise=Utils.raise||{types:e,indexSize:c,heirarchyRequest:k,wrongDocument:f,invalidCharacter:h,noModificationAllowed:o,notFound:b,notSupported:p,invalidState:i,syntax:n,invalidModification:m,namespace:s,invalidAccess:r,typeMismatch:v,security:u,network:a,abort:l,urlMismatch:q,quotaExceeded:g,timeout:j,invalidNodeType:d,dataClone:t}}())}if(typeof Utils==="object"&&Utils){(function(){Utils.types=Utils.types||{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCRESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}())}if(typeof Utils==="object"&&Utils){(function(){var t=Utils.types,k,u,g;k={object:true,"function":true};u=(function(){var w=null;if(global.document){if(typeof global.document==="object"){w=global.document}}return w}());function b(x,w){return typeof x===w}function d(y){var w=typeof y,x=k[w]&&y;return !!(x||w==="unknown")}function e(z){var x=typeof z,y=k[x]&&z,w=false;if(y||x==="unknown"){w=typeof z.length==="number"}return w}function c(z){var x=typeof z,y=k[x]&&z,w=false;if(y||x==="unknown"){w=typeof z.nodeType==="number"}return w}function v(A,x){var y=typeof A,z=k[y]&&A,w=false;if(z||y==="unknown"){w=A.nodeType===x}return w}function n(x){var w=t.ELEMENT_NODE;return v(x,w)}function j(x){var w=t.ATTRIBUTE_NODE;return v(x,w)}function h(x){var w=t.TEXT_NODE;return v(x,w)}function p(x){var w=t.CDATA_SECTION_NODE;return v(x,w)}function r(y){var w="ENTITY_REFERENCE_NODE",x=t[w];return v(y,x)}function o(x){var w=t.ENTITY_NODE;return v(x,w)}function a(y){var w="PROCESSING_INSTRUCTION_NODE",x=t[w];return v(y,x)}function q(x){var w=t.COMMENT_NODE;return v(x,w)}function i(x){var w=t.DOCUMENT_NODE;return v(x,w)}function m(w){return w===global.document}g=(function(){var w=i;if(!c(u)){w=m}return w}());function s(x){var w=t.DOCUMENT_TYPE_NODE;return v(x,w)}function f(y){var w="DOCUMENT_FRAGMENT_NODE",x=t[w];return v(y,x)}function l(x){var w=t.NOTATION_NODE;return v(x,w)}u=null;Utils.is=Utils.is||{type:b,hostObject:d,arrayLike:e,nodeLike:c,nodeType:v,element:n,attribute:j,text:h,cDataSection:p,entityReference:r,entity:o,processingInstruction:a,comment:q,document:g,documentType:s,documentFragment:f,notation:l}}())}if(typeof Utils==="object"&&Utils){(function(){var a=Utils.is.arrayLike;function b(g){var e,d,f,c=[];if(a(g)){c.length=g.length;e=g.length-1;for(d=e;d>-1;d-=1){f=e-d;c[f]=g[f]}}return c}Utils.helpers=Utils.helpers||{makeArray:b}}())}if(typeof Utils==="object"&&Utils){(function(){var f=Utils.types,i=Utils.is.nodeLike,d=Utils.is.hostObject,p=Utils.is.arrayLike,q;q=(function(){var r={};r[f.TEXT_NODE]=true;r[f.PROCESSING_INSTRUCTION_NODE]=true;r[f.COMMENT_NODE]=true;return r}());function k(v,s,u){var t="insertBefore",r=null;if(i(v)&&i(s)&&i(u)){if(d(v[t])){r=v[t](s,u)}}return r}function l(v,w,u){var t,s,x,r;if(p(w)){t=w.length-1;for(s=t;s>-1;s-=1){x=t-s;k(v,w[x],u)}}return r}function g(t,u){var s="appendChild",r=null;if(i(t)&&i(u)){if(d(t[s])){r=t[s](u)}}return r}function b(u,v){var t,s,w,r;if(p(v)){t=v.length-1;for(s=t;s>-1;s-=1){w=t-s;g(u,v[w])}}return r}function n(t,u){var s="removeChild",r=null;if(i(t)&&i(u)){if(d(t[s])){r=t[s](u)}}return r}function j(v,t,s){var u="replaceChild",r=null;if(i(v)&&i(t)&&i(s)){if(d(v[u])){r=v[u](t,s)}}return r}function c(u,s){var t="cloneNode",r=null;if(i(u)){if(d(u[t])){r=u[t](u,s)}}return r}function o(s){var r=false;if(i(s)){r=typeof s.nodeName==="string"}return r}function a(v,t){var u="toLowerCase",s="toUpperCase",r=null;if(o(v)){r=v.nodeName;if(t){r=r[u]()}else{if(!t){r=r[s]()}}}return r}function m(s){var r=false;if(i(s)){r=typeof s.nodeValue==="string"}return r}function h(s){var r=null;if(m(s)){r=s.nodeValue}return r}function e(u,t){var s="nodeValue",r=null;if(i(u)){if(q[u.nodeType]){r=u[s]=t}}return r}Utils.node=Utils.node||{prepend:k,prependList:l,append:g,appendList:b,remove:n,replace:j,clone:c,getName:a,getValue:h,setValue:e}}())}if(typeof Utils==="object"&&Utils){(function(){var i=Utils.is.document,e=Utils.is.hostObject,k,f,a,j,n,h,b,q,p;k=(function(){var r=null;if(global.document){if(typeof global.document==="object"){r=global.document}}return r}());function o(u,s){var t="createElement",r=null;if(i(u)){r=u[t](s)}return r}f=(function(){var s="createElement",r=null;if(i(k)){if(e(k[s])){r=o}}return r}());function d(v,u,s){var t="createElementNS",r=null;if(i(v)){r=v[t](u,s)}return r}a=(function(){var s="createElementNS",r=null;if(i(k)){if(e(k[s])){r=d}}return r}());function c(t,u){var s="createTextNode",r=null;if(i(t)){r=t[s](u)}return r}j=(function(){var s="createTextNode",r=null;if(i(k)){if(e(k[s])){r=c}}return r}());function m(u,t,v){var s="createProcessingInstruction",r=null;if(i(u)){r=u[s](t,v)}return r}n=(function(){var s="createProcessingInstruction",r=null;if(i(k)){if(e(k[s])){r=m}}return r}());function g(t,u){var s="createComment",r=null;if(i(t)){r=t[s](u)}return r}h=(function(){var s="createComment",r=null;if(i(k)){if(e(k[s])){r=g}}return r}());b=(function(){var s="createDocumentFragment",r=false;if(i(k)){if(e(k[s])){r=true}}return r}());q=(function(){var s="createDocumentFragment",r=b;if(b){try{k[s]()}catch(t){r=false}}return r}());function l(t){var s="createDocumentFragment",r=null;if(i(t)){r=t[s]()}return r}p=(function(){var r=null;if(q){r=l}return r}());k=null;Utils.create=Utils.create||{element:f,elementNS:a,text:j,processingInstruction:n,comment:h,documentFragment:p}}())}if(typeof Utils==="object"&&Utils){(function(){var D,y=Utils.is.document,X=Utils.is.element,G=Utils.is.hostObject,i=Utils.raise.invalidCharacter,z=Utils.raise.syntax,K=Utils.is.arrayLike,t=Utils.helpers.makeArray,k,B,j,T,Y,S,N,E,q,u,aa,d,H;D={" ":true,"\t":true,"\n":true,"\f":true,"\r":true};k=(function(){var ab=null;if(y(global.document)){ab=global.document}return ab}());B=(function(){var ab=null;if(k&&k.body){ab=k.body}return ab}());j=(function(){var ab=false;if(X(B)){ab=typeof B.className==="string"}return ab}());T=(function(){var ab=false;if(X(B)){ab=G(B.classList)}return ab}());function e(ae,ad){var ac=ae,ab=ad;return function(ag,af){if(X(ag)){ab=ag.classList[ac](af)}return ab}}Y=(function(){var ac="contains",ab=null;if(B&&T&&G(B.classList[ac])){ab=e(ac,"false")}return ab}());function p(ad){var ac=D[ad],ab=false;if(typeof ac!=="undefined"){i()}else{if(ad===""){z()}else{if(typeof ac==="undefined"){ab=true}}}return ab}function s(ae){var ad=0,ac,ab=true;if(ae&&ae.length){ac=ae.length;for(ad;ad<ac;ad+=1){ab=p(ae.charAt(ad))}}return ab}function Q(ad,af,ae){var ac=false,ab="";if(ad&&ad!==" "){ac=p(ad)}if(!ac&&af.length){ae[ae.length]=af}else{if(ac){ab=af+ad}}return ab}function c(ae){var ad=0,ac,af="",ab=[];if(ae&&ae.length){ac=ae.length+1;for(ad;ad<ac;ad+=1){af=Q(ae.charAt(ad),af,ab)}}return ab}function x(ac){var ab=[];if(j){ab=c(ac.className)}return ab}function L(ae,af){var ad=0,ac,ab=false;ac=ae.length;for(ad;ad<ac;ad+=1){if(af===ae[ad]){ab=true;break}}return ab}function I(ad,ac){var ab=false;if(s(ac)){ab=L(ad,ac)}return ab}function o(ad,ac){var ab=null;if(X(ad)){ab=I(x(ad),ac)}return ab}S=(function(){var ab=null;if(T){ab=Y}else{if(!T&&X(B)){ab=o}}return ab}());function a(ad,ac){var ab=null;if(S){ab=S(ad,ac)}return ab}function A(af,ae){var ad=0,ac=ae.length,ab=true;while(ad<ac&&ab){ab=a(af,ae[ad]);ab=!!ab;ad+=1}return ab}function b(ad,ac){var ab=false;if(X(ad)){if(K(ac)){ab=A(ad,ac)}}return ab}N=(function(){var ab=null;if(B&&T&&G(B.classList.add)){ab=e("add")}return ab}());function g(ae,ad,ac){var ab=false;if(!a(ae,ad)){ac[ac.length]=ad;ab=true}return ab}function P(ae,ac,ad){var ab=false;if(s(ac)){ab=g(ae,ac,ad)}return ab}function U(ad,ac){var ab;if(j){ad.className=ac.join(" ")}return ab}function h(ae,ac){var ad,ab;if(X(ae)){ad=x(ae);P(ae,ac,ad);U(ae,ad)}return ab}E=(function(){var ab=null;if(T){ab=N}else{if(!T&&X(B)){ab=h}}return ab}());function O(ad,ac){var ab=null;if(E){ab=E(ad,ac)}return ab}function l(af,ae){var ad=0,ac=ae.length,ab;for(ad;ad<ac;ad+=1){O(af,ae[ad])}return ab}function M(ad,ac){var ab;if(X(ad)){if(K(ac)){l(ad,ac)}}return ab}q=(function(){var ac="remove",ab=null;if(B&&T&&G(B.classList[ac])){ab=e(ac)}return ab}());function w(ae,ah){var ad=ah.length-1,ac=ad,ai,ag=0,af,ab;for(ac;ac>-1;ac-=1){ai=ad-ac;af=ah[ai];if(af===ae){delete ah[ai]}else{if(af!==ae){delete ah[ai];ah[ag]=af;ag+=1}}}ah.length=ag;return ab}function Z(ae,ac,ad){var ab;if(a(ae,ac)){ab=w(ac,ad)}return ab}function r(ae,ac,ad){var ab;if(s(ac)){Z(ae,ac,ad)}return ab}function f(ae,ac){var ad,ab;if(X(ae)){ad=x(ae);r(ae,ac,ad);U(ae,ad)}return ab}u=(function(){var ab=null;if(T){ab=q}else{if(!T&&X(B)){ab=f}}return ab}());function J(ad,ac){var ab=null;if(u){ab=u(ad,ac)}return ab}function F(ag,af){var ad=af.length,ac=ad,ae,ab;for(ac;ac>-1;ac-=1){ae=ad-ac;J(ag,af[ae])}return ab}function n(ad,ac){var ab;if(X(ad)){if(K(ac)){F(ad,ac)}}return ab}aa=(function(){var ac="toggle",ab=null;if(B&&T&&G(B.classList[ac])){ab=e(ac,"false")}return ab}());function R(ae,ad){var ac=a(ae,ad),ab=false;if(!ac){O(ae,ad);ab=true}else{if(ac){J(ae,ad)}}return ab}d=(function(){var ab=null;if(k){if(T){ab=aa}else{if(!T&&X(B)){ab=R}}}return ab}());function v(ad,ac){var ab=null;if(d){ab=d(ad,ac)}return ab}function W(af,ae){var ad=0,ac=ae.length,ab;for(ad;ad<ac;ad+=1){v(af,ae[ad])}return ab}function C(ad,ac){var ab;if(X(ad)){if(K(ac)){W(ad,ac)}}return ab}function m(ae,ac){var ad,ab=null;if(X(ae)){ad=x(ae);if(ac>=0&&ac<ad.length){ab=ad[ac]}}return ab}function V(ac){var ab=null;if(X(ac)){ab=t(ac.classList)}return ab}H=(function(){var ab=null;if(B){if(T){ab=V}else{if(!T&&X(B)){ab=x}}}return ab}());k=null;B=null;Utils.classes=Utils.classes||{contains:S,containsList:b,add:E,addList:M,remove:u,removeList:n,toggle:d,toggleList:C,item:m,get:H}}())};
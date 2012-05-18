var Utils=Utils||{},global=this;if(Utils){(function(){var e={INDEX_SIZE_ERROR:"The index is not in the allowed range.",HEIRARCHY_REQUEST_ERROR:"The operation would yield an incorrect node tree.",WRONG_DOCUMENT_ERROR:"The object is in the wrong document.",INVALID_CHARACTER_ERROR:"The string contains invalid characters.",NO_MODIFICATION_ALLOWED_ERROR:"The object can not be modified.",NOT_FOUND_ERROR:"The object can not be found here.",NOT_SUPPORTED_ERROR:"The operation is not supported.",INVALID_STATE_ERROR:"The object is in an invalid state.",SYNTAX_ERROR:"The string did not match the expected pattern.",INVALID_MODIFICATION_ERROR:"The object can not be modified in this way.",NAMESPACE_ERROR:"The operation is not allowed by Namespaces in XML.",INVALID_ACCESS_ERROR:"The object does not support the operation or argument.",TYPE_MISMATCH_ERROR:"The type of the object does not match the expected type.",SECURITY_ERROR:"The operation is insecure.",NETWORK_ERROR:"A network error occurred.",ABORT_ERROR:"The operation was aborted.",URL_MISMATCH_ERROR:"The given URL does not match another URL.",QUOTA_EXCEEDED_ERROR:"The quota has been exceeded.",TIMEOUT_ERROR:"The operation timed out.",INVALID_NODE_TYPE_ERROR:"The supplied node is incorrect or has an incorrect ancestor for this operation.",DATA_CLONE_ERROR:"The object can not be cloned."};function c(){throw new Error(e.INDEX_SIZE_ERROR)}function l(){throw new Error(e.HEIRARCHY_REQUEST_ERROR)}function f(){throw new Error(e.WRONG_DOCUMENT_ERROR)}function i(){throw new Error(e.INVALID_CHARACTER_ERROR)}function p(){var w="NO_MODIFICATION_ALLOWED_ERROR";throw new Error(e[w])}function b(){throw new Error(e.NOT_FOUND_ERROR)}function q(){throw new Error(e.NOT_SUPPORTED_ERROR)}function j(){throw new Error(e.INVALID_STATE_ERROR)}function o(){throw new Error(e.SYNTAX_ERROR)}function n(){throw new Error(e.INVALID_MODIFICATION_ERROR)}function s(){throw new Error(e.NAMESPACE_ERROR)}function r(){throw new Error(e.INVALID_ACCESS_ERROR)}function v(){throw new Error(e.TYPE_MISMATCH_ERROR)}function u(){throw new Error(e.SECURITY_ERROR)}function a(){throw new Error(e.NETWORK_ERROR)}function m(){throw new Error(e.ABORT_ERROR)}function h(){throw new Error(e.URL_MISMATCH_ERROR)}function g(){throw new Error(e.QUOTA_EXCEEDED_ERROR)}function k(){throw new Error(e.TIMEOUT_ERROR)}function d(){throw new Error(e.INVALID_NODE_TYPE_ERROR)}function t(){throw new Error(e.DATA_CLONE_ERROR)}Utils.raise=Utils.raise||{types:e,indexSize:c,heirarchyRequest:l,wrongDocument:f,invalidCharacter:i,noModificationAllowed:p,notFound:b,notSupported:q,invalidState:j,syntax:o,invalidModification:n,namespace:s,invalidAccess:r,typeMismatch:v,security:u,network:a,abort:m,urlMismatch:h,quotaExceeded:g,timeout:k,invalidNodeType:d,dataClone:t}}())}if(Utils){(function(){Utils.types=Utils.types||{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCRESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}())}if(Utils){(function(){function a(f){var d,c=Utils.is.arrayLike(f),b=[],e;if(c){b.length=f.length;d=f.length-1;while(d>-1){e=f[d];b[d]=e;d-=1}}return b}Utils.helpers=Utils.helpers||{makeLinearArray:a}}())}if(Utils){(function(){var q=Utils.types;function b(t,s){s=String(s);return typeof t===s}function d(w){var u,v,t,s=false;u=b(w,"object");v=b(w,"function");t=b(w,"unknown");if(u||v||t){s=true}return s}function e(u){var t=d(u),s=false;if(u&&t){s=b(u.length,"number")}return s}function c(u){var t=d(u),s=false;if(u&&t){s=b(u.nodeType,"number")}return s}function r(v,t){var u=c(v),s=false;t=Number(t);if(u){s=v.nodeType===t}return s}function k(t){var s=q.ELEMENT_NODE;return r(t,s)}function i(t){var s=q.ATTRIBUTE_NODE;return r(t,s)}function g(t){var s=q.TEXT_NODE;return r(t,s)}function m(t){var s=q.CDATA_SECTION_NODE;return r(t,s)}function o(u){var s="ENTITY_REFERENCE_NODE",t=q[s];return r(u,t)}function l(t){var s=q.ENTITY_NODE;return r(t,s)}function a(u){var s="PROCESSING_INSTRUCTION_NODE",t=q[s];return r(u,t)}function n(t){var s=q.COMMENT_NODE;return r(t,s)}function h(t){var s=q.DOCUMENT_NODE;return r(t,s)}function p(t){var s=q.DOCUMENT_TYPE_NODE;return r(t,s)}function f(u){var s="DOCUMENT_FRAGMENT_NODE",t=q[s];return r(u,t)}function j(t){var s=q.NOTATION_NODE;return r(t,s)}Utils.is=Utils.is||{type:b,hostObject:d,arrayLike:e,nodeLike:c,nodeType:r,element:k,attribute:i,text:g,cDataSection:m,entityReference:o,entity:l,processingInstruction:a,comment:n,document:h,documentType:p,documentFragment:f,notation:j}}())}if(Utils){(function(){function a(e){var d=Utils.is.nodeLike(e),c=false;if(d){c=Utils.is.type(e.nodeName,"string")}return c}function b(e){var d=Utils.is.nodeLike(e),c=false;if(d){c=Utils.is.type(e.nodeValue,"string")}return c}Utils.can=Utils.can||{getName:a,getValue:b}}())}if(Utils){(function(){function e(m,k,h){var i=Utils.is.nodeLike(m),o=Utils.is.nodeLike(k),l=Utils.is.nodeLike(h),j,n="insertBefore",p=null;if(i&&o&&l){j=Utils.is.hostObject(m[n]);if(j){p=m[n](k,h)}}return p}function b(j,n){var m=Utils.is.nodeLike(j),l=Utils.is.nodeLike(n),k,i="appendChild",h=null;if(m&&l){k=Utils.is.hostObject(j[i]);if(k){h=j[i](n)}}return h}function a(j,n){var m=Utils.is.nodeLike(j),l=Utils.is.nodeLike(n),k,i="removeChild",h=null;if(m&&l){k=Utils.is.hostObject(j[i]);if(k){h=j[i](n)}}return h}function f(l,k,h){var i=Utils.is.nodeLike(l),o=Utils.is.nodeLike(k),m=Utils.is.nodeLike(h),j,n="replaceChild",p=null;if(i&&o&&m){j=Utils.is.hostObject(l[n]);if(j){p=l[n](k,h)}}return p}function d(m,j){var i=Utils.is.nodeLike(m),l,k="cloneNode",h=null;j=Boolean(j);if(i){l=Utils.is.hostObject(m[k]);if(l){h=m[k](m,j)}}return h}function g(m,k){var i=Utils.can.getName(m),l="toLowerCase",j="toUpperCase",h=null;k=Boolean(k);if(i){h=m.nodeName;if(k){h=h[l]()}else{if(!k){h=h[j]()}}}return h}function c(j){var i=Utils.can.getValue(j),h=null;if(i){h=j.nodeValue}return h}Utils.node=Utils.node||{prepend:e,append:b,remove:a,replace:f,clone:d,name:g,value:c}}())}if(Utils){(function(){function e(k,h){var l=Utils.is.document(k),i="createElement",j,g=null;h=String(h);if(l){j=Utils.is.hostObject(k[i]);if(j){g=k[i](h)}}return g}function d(l,j,h){var m=Utils.is.document(l),i="createElementNS",k,g=null;j=String(j);h=String(h);if(m){k=Utils.is.hostObject(l[i]);if(k){g=l[i](j,h)}}return g}function f(j,l){var k=Utils.is.document(j),h="createTextNode",i,g=null;l=String(l);if(k){i=Utils.is.hostObject(j[h]);if(i){g=j[h](l)}}return g}function c(k,j,m){var l=Utils.is.document(k),h="createProcessingInstruction",i,g=null;j=String(j);m=String(m);if(l){i=Utils.is.hostObject(k[h]);if(i){g=k[h](j,m)}}return g}function b(j,l){var k=Utils.is.document(j),h="createComment",i,g=null;l=String(l);if(k){i=Utils.is.hostObject(j[h]);if(i){g=j[h](l)}}return g}function a(j){var k=Utils.is.document(j),h="createDocumentFragment",i,g=null;if(k){i=Utils.is.hostObject(j[h]);if(i){g=j[h]()}}return g}Utils.create=Utils.create||{element:e,elementNS:d,text:f,processingInstruction:c,comment:b,documentFragment:a}}())}if(Utils){(function(){var y={" ":true,"\t":true,"\n":true,"\f":true,"\r":true};function g(P){var O=Utils.is.element(P),N=false;if(O){N=Utils.is.type(P.className,"string")}return N}function G(P){var O=Utils.is.element(P),N=false;if(O){N=Utils.is.hostObject(P.classList)}return N}function K(Q,R){var P="contains",O=Utils.is.hostObject(R.classList[P]),N=false;Q=String(Q);if(O){N=R.classList[P](Q)}return N}function l(P){var O,Q,N=false;P=String(P);O=y[P];Q=Utils.is.type(O,"undefined");if(!Q){Utils.raise.invalidCharacter()}else{if(P===""){Utils.raise.syntax()}else{if(Q){N=true}}}return N}function n(Q){var P=0,O,R,N=true;Q=String(Q);O=Q.length;while(P<O){R=Q.charAt(P);N=l(R);P+=1}return N}function J(O,P){var N=true;O=String(O);P.push(O);return N}function D(P,R,Q){var O=false,N="";if(P&&P!==" "){O=l(P)}if(!O&&R.length){J(R,Q)}else{if(O){N=R+P}}return N}function b(R){var P=0,O,S="",Q,N=[];R=String(R);O=R.length+1;while(P<O){Q=R.charAt(P);S=D(Q,S,N);P+=1}return N}function r(Q){var O=g(Q),P,N=[];if(O){P=Q.className;N=b(P)}return N}function z(S,R){var P=0,O,Q,N=false;S=String(S);O=R.length;while(P<O){Q=R[P];if(S===Q){N=true;break}P+=1}return N}function x(O,P){var Q,N=false;O=String(O);Q=n(O);if(Q){N=z(O,P)}return N}function k(N,P){var O=r(P);return x(N,O)}function F(O,R){var Q=G(R),P=Utils.is.element(R),N=false;if(Q){N=K(O,R)}else{if(!Q&&P){N=k(O,R)}}return N}function s(R,Q){var P=0,O=R.length,N=false;while(P<O){N=F(R[P],Q);if(!N){break}P+=1}return N}function a(R,Q){var P=Utils.is.element(Q),O=Utils.is.arrayLike(R),N=false;if(P){if(O){N=s(R,Q)}}return N}function B(O,P){var Q=Utils.is.hostObject(P.classList.add),N=false;O=String(O);if(Q){N=P.classList.add(O)}return N}function e(R,Q,P){var O=F(R,Q),N=false;if(!O){P.push(R);N=true}return N}function C(O,Q,P){var R,N=false;O=String(O);R=n(O);if(R){N=e(O,Q,P)}return N}function H(Q,P){var O=g(Q),N;if(O){Q.className=P.join(" ")}return N}function f(O,Q){var P=r(Q),N;O=String(O);C(O,Q,P);H(Q,P);return N}function u(O,R){var Q=G(R),P=Utils.is.element(R),N=false;if(Q){N=B(O,R)}else{if(!Q&&P){N=f(O,R)}}return N}function h(R,Q){var P=0,O=R.length,N;while(P<O){u(R[P],Q);P+=1}return N}function A(R,Q){var P=Utils.is.element(Q),O=Utils.is.arrayLike(R),N;if(P){if(O){h(R,Q)}}return N}function m(Q,R){var P="remove",O=Utils.is.hostObject(R.classList[P]),N=false;Q=String(Q);if(O){N=R.classList[P](Q)}return N}function q(O,R){var P=R.length-1,Q,N=false;while(P>-1){Q=R[P];if(Q===O){R.splice(P,1)}P-=1}return N}function L(O,R,Q){var P=F(O,R),N=false;if(P){N=q(O,Q)}return N}function o(O,Q,P){var R,N=false;O=String(O);R=n(O);if(R){N=L(O,Q,P)}return N}function d(O,Q){var P=r(Q),R,N;O=String(O);R=n(O);if(R){o(O,Q,P);H(Q,P)}return N}function p(O,R){var Q=G(R),P=Utils.is.element(R),N=false;if(Q){N=m(O,R)}else{if(!Q&&P){N=d(O,R)}}return N}function v(Q,P){var O=Q.length-1,N;while(O>-1){p(Q[O],P);O-=1}return N}function j(R,Q){var P=Utils.is.element(Q),O=Utils.is.arrayLike(R),N;if(P){if(O){v(R,Q)}}return N}function M(Q,R){var P="toggle",O=Utils.is.hostObject(R.classList[P]),N=false;Q=String(Q);if(O){N=R.classList[P](Q)}return N}function E(P,Q){var O=F(P,Q),N=false;if(!O){u(P,Q);N=true}else{if(O){p(P,Q)}}return N}function c(O,R){var Q=G(R),P=Utils.is.element(R),N=false;if(Q){N=M(O,R)}else{if(!Q&&P){N=E(O,R)}}return N}function I(R,Q){var P=0,O=R.length,N;while(P<O){c(R[P],Q);P+=1}return N}function t(R,Q){var P=Utils.is.element(Q),O=Utils.is.arrayLike(R),N;if(P){if(O){I(R,Q)}}return N}function i(O,R){var P=Utils.is.element(R),Q,N=null;O=Number(O);if(P){Q=r(R);if(O>=0&&O<Q.length){N=Q[O]}}return N}function w(Q){var P=G(Q),O=Utils.is.element(Q),N=null;if(P){N=Q.classList}else{if(!P&&O){N=r(Q)}}return N}Utils.classes=Utils.classes||{contains:F,containsList:a,add:u,addList:A,remove:p,removeList:j,toggle:c,toggleList:t,item:i,get:w}}())}if(Utils){(function(){var u=Utils.types;function D(){var V={};V[u.ELEMENT_NODE]=true;V[u.TEXT_NODE]=true;V[u.PROCESSING_INSTRUCTION_NODE]=true;V[u.COMMENT_NODE]=true;V[u.DOCUMENT_FRAGMENT_NODE]=true;return V}function t(Z){var Y=Utils.is.nodeLike(Z),X=D(),W,V=false;if(Y){W=X[Z.nodeType];if(W){V=true}}return V}function E(){var V={};V[u.ELEMENT_NODE]=true;V[u.TEXT_NODE]=true;V[u.PROCESSING_INSTRUCTION_NODE]=true;V[u.COMMENT_NODE]=true;V[u.DOCUMENT_FRAGMENT_NODE]=true;return V}function w(Y){var X=Utils.is.nodeLike(Y),W=E(),Z,V=false;if(X){Z=W[Y.nodeType];if(Z){V=true}}return V}function y(V){return Utils.helpers.makeLinearArray(V)}function g(Z){var W=Utils.is.nodeLike(Z),X="childNodes",Y,V=null;if(W){Y=Utils.is.hostObject(Z[X]);if(Y){V=y(Z[X])}}return V}function h(Y,Z,V){var X=Utils.is.type(Z,"function"),W;if(X){W=Z(Y);if(W===true){V.unshift(Y)}else{if(W){V.unshift(W)}}}}function j(Z,aa){var W=Utils.is.arrayLike(Z),X,Y,V=[];if(W){X=Z.length-1;while(X>-1){Y=Z[X];h(Y,aa,V);X-=1}}return V}function v(Y,Z){var X=Utils.is.type(Z,"function"),W,V=[];if(X){W=g(Y);V=j(W,Z)}return V}function m(X){var W=Utils.is.nodeLike(X),V=null;if(W){Utils.node.remove(X.parentNode,X)}return V}function T(X){var W=Utils.is.nodeLike(X),V=null;if(W){V=v(X,m)}return V}function O(Y){var W=Utils.is.nodeLike(Y),X,V=null;if(W){X=Utils.is.hostObject(Y.children);if(X){V=y(Y.children)}}return V}function c(W){var X=Utils.is.element(W),V=false;if(X){V=true}return V}function K(X){var W=Utils.is.element(X),V=false;if(W){V=Utils.is.hostObject(X.children)}return V}function n(Y){var W=K(Y),X=[],V=null;if(W){V=O(Y)}else{if(!W){X=g(Y);V=j(X,c)}}return V}function F(Y,Z){var X=Utils.is.type(Z,"function"),W,V=[];if(X){W=n(Y);V=j(W,Z)}return V}function B(W){var X=Utils.is.element(W),V=false;if(X){V=Utils.node.remove(W)}return V}function o(X){var W=Utils.is.nodeLike(X),V=null;if(W){V=F(X,B)}return V}function k(X){var W=Utils.is.text(X),V=false;if(W){V=X.nodeValue}return V}function a(X){var W=Utils.can.getValue(X),V=null;if(W){V=X.nodeValue}return V}function L(W,Y,X){var V;if(W.length){X.unshift(W)}X.unshift(Y);return V}function z(X){var W=Utils.is.nodeLike(X),V=false;if(W){V=Utils.is.hostObject(X.childNodes)}return V}function i(Y){var Z=z(Y),X=-1,W,V=[];if(Z){X=Y.childNodes.length-1;while(X>-1){W=i(Y.childNodes[X]);L(W,Y.childNodes[X],V);X-=1}}return V}function P(Y){var W=Utils.is.nodeLike(Y),X,V=null;if(W){X=Utils.is.hostObject(Y.childNodes);if(X){V=i(Y)}}return V}function N(W,Y,X){var V;h(W,Y,X);return V}function x(X,Z,V){var Y=z(X),W=-1;V=V||[];if(Y){W=X.childNodes.length-1;while(W>-1){x(X.childNodes[W],Z,V);N(X.childNodes[W],Z,V);W-=1}}return V}function M(Y){var W=Utils.is.nodeLike(Y),X,V=null;if(W){X=x(k);V=X.join("")}return V}function r(){var V={};V[u.ELEMENT_NODE]=M;V[u.TEXT_NODE]=a;V[u.COMMENT_NODE]=a;V[u.DOCUMENT_FRAGMENT_NODE]=M;V[u.PROCESSING_INSTRUCTION_NODE]=a;return V}function b(aa){var W=t(aa),Z=r(),Y,X,V=null;if(W){Y=Z[aa.nodeType];X=Utils.is.type(Y,"function");if(X){V=Y(aa)}}return V}function s(ab,Z,Y){var W=Utils.is.nodeLike(Z),X=Utils.is.document(Y),aa,V=null;ab=String(ab);if(W&&X){aa=Utils.create.text(Y,ab);T(Z);Utils.node.append(Z,aa);V=ab}return V}function d(Y,X){var W=Utils.can.getValue(X),V=null;Y=String(Y);if(W){X.nodeValue=Y;V=X.nodeValue}return V}function G(){var V={};V[u.ELEMENT_NODE]=s;V[u.TEXT_NODE]=d;V[u.COMMENT_NODE]=d;V[u.DOCUMENT_FRAGMENT_NODE]=s;V[u.PROCESSING_INSTRUCTION_NODE]=d;return V}function f(ac,ab,aa){var Z=w(ab),Y=G(),X,W,V=null;if(Z){X=Y[ab.nodeType];W=Utils.is.type(X,"function");if(W){V=X(ac,ab,aa)}}return V}function C(Y,Z,V){var W=Utils.is.arrayLike(Y),X=-1;V=V||[];if(W){X=Y.length-1;while(X>-1){C(Y[X],Z,V);N(Y[X],Z,V);X-=1}}return V}function S(W,Y,Z){var X=Utils.is.element(Y),V;if(X){L(W,Y,Z)}return V}function I(Y){var Z=z(Y),X=-1,W,V=[];if(Z){X=Y.childNodes.length-1;while(X>-1){W=I(Y.childNodes[X]);S(W,Y.childNodes[X],V);X-=1}}return V}function J(Y){var W=Utils.is.nodeLike(Y),X,V=null;if(W){X=Utils.is.hostObject(Y.childNodes);if(X){V=I(Y)}}return V}function l(X,Z,Y){var W=Utils.is.element(X),V;if(W){N(X,Z,Y)}return V}function A(X,Z,V){var Y=z(X),W=-1;V=V||[];if(Y){W=X.childNodes.length-1;while(W>-1){A(X.childNodes[W],Z,V);l(X.childNodes[W],Z,V);W-=1}}return V}function p(Y){var W=Utils.is.nodeLike(Y),X="parent",V=null;if(W){if(Y.parentNode){V={};V.value=Y.parentNode;V[X]=p(Y.parentNode)}else{if(!Y.parentNode){V=null}}}return V}function H(Y,Z){var W=Utils.is.nodeLike(Z),X="parent",V=false;if(W){while(Y){if(Y.value===Z){V=true;break}Y=Y[X]}}return V}function U(X,Z){var W=Utils.is.nodeLike(Z),Y,V=false;if(W){Y=p(Z);V=H(Y,X)}return V}function e(X){var W=Utils.is.type(X,"object"),Y,V=false;if(X&&W){Y=Utils.is.type(X.value,"object");V=Y}return V}function Q(Y,Z,V){var X=Utils.is.type(Z,"function"),W;if(X){W=Z(Y);if(W===true){V.push(Y)}else{if(W){V.push(W)}}}}function R(X,Z){var Y=e(X),W="parent",V=[];if(Y){while(X){Q(X.value,Z,V);X=X[W]}}return V}function q(Y,Z){var X=Utils.is.type(Z,"function"),W,V=[];if(X){W=p(Y);V=R(W,Z)}return V}Utils.traverse=Utils.traverse||{getNodes:g,linear:j,nodes:v,clearNodes:T,getElements:n,elements:F,clearElements:o,getNodeTree:P,nodeTree:x,getText:b,setText:f,recursive:C,getElementTree:J,elementTree:A,getAncestors:p,isAncestor:U,list:R,ancestors:q}}())}if(Utils){(function(){var B=Utils.types;function i(){var G={};G[B.ELEMENT_NODE]=true;G[B.DOCMENT_NODE]=true;G[B.DOCUMENT_FRAGMENT_NODE]=true;return G}function E(K){var H=Utils.is.nodeLike(K),I=i(),J,G=false;if(H){J=I[K.nodeType];G=Utils.is.type(J,"undefined")}return G}function C(G){return Utils.helpers.makeLinearArray(G)}function p(K,I){var H=Utils.is.document(K),J="getElementsByName",L,G=null;I=String(I);if(H){L=Utils.is.hostObject(K[J]);if(L){G=C(K[J](I))}}return G}function y(J,H){var I=Utils.is.document(J),L=Utils.is.element(J),K="getElementsByTagName",M,G=null;H=String(H);if(I||L){M=Utils.is.hostObject(J[K]);if(M){G=C(J[K](H))}}return G}function h(I,K,L){var H=Utils.is.document(I),M=Utils.is.element(I),J="getElementsByTagNameNS",N,G=null;K=String(K);L=String(L);if(H||M){N=Utils.is.hostObject(I[J]);if(N){G=C(I[J](K,L))}}return G}function t(I,L){var H=Utils.is.document(I),K=Utils.is.element(I),J="getElementsByClassName",M,G=null;L=String(L);if(H||K){M=Utils.is.hostObject(I[J]);if(M){G=C(I[J](L))}}return G}function s(J,L){var H=Utils.is.document(J),I="getElementById",K,G=null;L=String(L);if(H){K=Utils.is.hostObject(J[I]);if(K){G=J[I](L)}}return G}function c(I,K){var H=E(I),J="querySelector",L,G=null;K=String(K);if(H){L=Utils.is.hostObject(I[J]);if(L){G=I[J](K)}}return G}function n(I,K){var H=E(I),J="querySelectorAll",L,G=null;K=String(K);if(H){L=Utils.is.hostObject(I[J]);if(L){G=C(I[J](K))}}return G}function q(J){var G=null,I=y(J,"head"),H=Utils.is.arrayLike(I);if(H){G=I[0]}return G}function r(I){var H=Utils.is.document(I),J,G=null;if(H){J=Utils.is.hostObject(global.document.head);if(J){G=global.document.head}else{if(!J){G=q(I)}}}return G}function D(J){var G=null,I=y(J,"body"),H=Utils.is.arrayLike(I);if(H){G=I[0]}return G}function F(I){var H=Utils.is.document(I),J,G=null;if(H){J=Utils.is.hostObject(global.document.body);if(J){G=global.document.body}else{if(!J){G=D(I)}}}return G}function d(J){var H=Utils.is.nodeLike(J),I=Utils.is.arrayLike(J),G=J;if(!H&&I){G=C(J)}return G}function u(J,I){var H=Utils.is.document(J),K,G=null;I=String(I);if(H){K=Utils.is.hostObject(J[I]);if(K){G=d(J[I])}}return G}function w(K,J,I){var H=Utils.is.document(K),L,G=null;J=String(J);I=String(I);if(H){L=Utils.is.hostObject(K[J]);if(L){G=d(K[J][I])}}return G}function g(H,G){return w(H,"images",G)}function o(G){return u(G,"images")}function l(H,G){return w(H,"embeds",G)}function A(G){return u(G,"embeds")}function k(H,G){return w(H,"links",G)}function a(G){return u(G,"links")}function m(H,G){return w(H,"forms",G)}function b(G){return u(G,"forms")}function v(H,G){return w(H,"scripts",G)}function j(G){return u(G,"scripts")}function f(H,G){return w(H,"applets",G)}function z(G){return u(G,"applets")}function e(H,G){return w(H,"anchors",G)}function x(G){return u(G,"anchors")}Utils.select=Utils.select||{byName:p,byTagName:y,byTagNameNS:h,byClassName:t,byId:s,query:c,queryAll:n,body:F,head:r,images:g,allImages:o,embeds:l,allEmbeds:A,plugins:l,allPlugins:A,links:k,allLinks:a,forms:m,allForms:b,scripts:v,allScripts:j,applets:f,allApplets:z,anchors:e,allAnchors:x}}())};
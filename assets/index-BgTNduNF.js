(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ob(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zm={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lb=Symbol.for("react.transitional.element"),rb=Symbol.for("react.fragment");function Jm(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var i in t)i!=="key"&&(n[i]=t[i])}else n=t;return t=n.ref,{$$typeof:lb,type:e,key:a,ref:t!==void 0?t:null,props:n}}hl.Fragment=rb;hl.jsx=Jm;hl.jsxs=Jm;Zm.exports=hl;var u=Zm.exports,ep={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu=Symbol.for("react.transitional.element"),cb=Symbol.for("react.portal"),ub=Symbol.for("react.fragment"),db=Symbol.for("react.strict_mode"),fb=Symbol.for("react.profiler"),hb=Symbol.for("react.consumer"),mb=Symbol.for("react.context"),pb=Symbol.for("react.forward_ref"),gb=Symbol.for("react.suspense"),yb=Symbol.for("react.memo"),tp=Symbol.for("react.lazy"),vb=Symbol.for("react.activity"),Qd=Symbol.iterator;function bb(e){return e===null||typeof e!="object"?null:(e=Qd&&e[Qd]||e["@@iterator"],typeof e=="function"?e:null)}var np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ap=Object.assign,ip={};function ii(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||np}ii.prototype.isReactComponent={};ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sp(){}sp.prototype=ii.prototype;function mu(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||np}var pu=mu.prototype=new sp;pu.constructor=mu;ap(pu,ii.prototype);pu.isPureReactComponent=!0;var Zd=Array.isArray;function Gr(){}var te={H:null,A:null,T:null,S:null},op=Object.prototype.hasOwnProperty;function gu(e,t,n){var a=n.ref;return{$$typeof:hu,type:e,key:t,ref:a!==void 0?a:null,props:n}}function xb(e,t){return gu(e.type,t,e.props)}function yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===hu}function wb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jd=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wb(""+e.key):t.toString(36)}function Sb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Gr,Gr):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ya(e,t,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case hu:case cb:o=!0;break;case tp:return o=e._init,ya(o(e._payload),t,n,a,i)}}if(o)return i=i(e),o=a===""?"."+Hl(e,0):a,Zd(i)?(n="",o!=null&&(n=o.replace(Jd,"$&/")+"/"),ya(i,t,n,"",function(c){return c})):i!=null&&(yu(i)&&(i=xb(i,n+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(Jd,"$&/")+"/")+o)),t.push(i)),1;o=0;var l=a===""?".":a+":";if(Zd(e))for(var r=0;r<e.length;r++)a=e[r],s=l+Hl(a,r),o+=ya(a,t,n,s,i);else if(r=bb(e),typeof r=="function")for(e=r.call(e),r=0;!(a=e.next()).done;)a=a.value,s=l+Hl(a,r++),o+=ya(a,t,n,s,i);else if(s==="object"){if(typeof e.then=="function")return ya(Sb(e),t,n,a,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function Vs(e,t,n){if(e==null)return e;var a=[],i=0;return ya(e,a,"","",function(s){return t.call(n,s,i++)}),a}function Tb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ef=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ab={map:Vs,forEach:function(e,t,n){Vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vs(e,function(){t++}),t},toArray:function(e){return Vs(e,function(t){return t})||[]},only:function(e){if(!yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Activity=vb;O.Children=Ab;O.Component=ii;O.Fragment=ub;O.Profiler=fb;O.PureComponent=mu;O.StrictMode=db;O.Suspense=gb;O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te;O.__COMPILER_RUNTIME={__proto__:null,c:function(e){return te.H.useMemoCache(e)}};O.cache=function(e){return function(){return e.apply(null,arguments)}};O.cacheSignal=function(){return null};O.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=ap({},e.props),i=e.key;if(t!=null)for(s in t.key!==void 0&&(i=""+t.key),t)!op.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(a[s]=t[s]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}return gu(e.type,i,a)};O.createContext=function(e){return e={$$typeof:mb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:hb,_context:e},e};O.createElement=function(e,t,n){var a,i={},s=null;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)op.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=t[a]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),r=0;r<o;r++)l[r]=arguments[r+2];i.children=l}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return gu(e,s,i)};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:pb,render:e}};O.isValidElement=yu;O.lazy=function(e){return{$$typeof:tp,_payload:{_status:-1,_result:e},_init:Tb}};O.memo=function(e,t){return{$$typeof:yb,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=te.T,n={};te.T=n;try{var a=e(),i=te.S;i!==null&&i(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Gr,ef)}catch(s){ef(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),te.T=t}};O.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()};O.use=function(e){return te.H.use(e)};O.useActionState=function(e,t,n){return te.H.useActionState(e,t,n)};O.useCallback=function(e,t){return te.H.useCallback(e,t)};O.useContext=function(e){return te.H.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e,t){return te.H.useDeferredValue(e,t)};O.useEffect=function(e,t){return te.H.useEffect(e,t)};O.useEffectEvent=function(e){return te.H.useEffectEvent(e)};O.useId=function(){return te.H.useId()};O.useImperativeHandle=function(e,t,n){return te.H.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return te.H.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return te.H.useLayoutEffect(e,t)};O.useMemo=function(e,t){return te.H.useMemo(e,t)};O.useOptimistic=function(e,t){return te.H.useOptimistic(e,t)};O.useReducer=function(e,t,n){return te.H.useReducer(e,t,n)};O.useRef=function(e){return te.H.useRef(e)};O.useState=function(e){return te.H.useState(e)};O.useSyncExternalStore=function(e,t,n){return te.H.useSyncExternalStore(e,t,n)};O.useTransition=function(){return te.H.useTransition()};O.version="19.2.4";ep.exports=O;var w=ep.exports;const Hs=ob(w);var lp={exports:{}},ml={},rp={exports:{}},cp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,j){var D=C.length;C.push(j);e:for(;0<D;){var B=D-1>>>1,Z=C[B];if(0<i(Z,j))C[B]=j,C[D]=Z,D=B;else break e}}function n(C){return C.length===0?null:C[0]}function a(C){if(C.length===0)return null;var j=C[0],D=C.pop();if(D!==j){C[0]=D;e:for(var B=0,Z=C.length,ma=Z>>>1;B<ma;){var Os=2*(B+1)-1,Vl=C[Os],Un=Os+1,Us=C[Un];if(0>i(Vl,D))Un<Z&&0>i(Us,Vl)?(C[B]=Us,C[Un]=D,B=Un):(C[B]=Vl,C[Os]=D,B=Os);else if(Un<Z&&0>i(Us,D))C[B]=Us,C[Un]=D,B=Un;else break e}}return j}function i(C,j){var D=C.sortIndex-j.sortIndex;return D!==0?D:C.id-j.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var r=[],c=[],d=1,f=null,h=3,g=!1,v=!1,S=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function b(C){for(var j=n(c);j!==null;){if(j.callback===null)a(c);else if(j.startTime<=C)a(c),j.sortIndex=j.expirationTime,t(r,j);else break;j=n(c)}}function T(C){if(S=!1,b(C),!v)if(n(r)!==null)v=!0,M||(M=!0,Ae());else{var j=n(c);j!==null&&tn(T,j.startTime-C)}}var M=!1,E=-1,A=5,N=-1;function z(){return x?!0:!(e.unstable_now()-N<A)}function ae(){if(x=!1,M){var C=e.unstable_now();N=C;var j=!0;try{e:{v=!1,S&&(S=!1,m(E),E=-1),g=!0;var D=h;try{t:{for(b(C),f=n(r);f!==null&&!(f.expirationTime>C&&z());){var B=f.callback;if(typeof B=="function"){f.callback=null,h=f.priorityLevel;var Z=B(f.expirationTime<=C);if(C=e.unstable_now(),typeof Z=="function"){f.callback=Z,b(C),j=!0;break t}f===n(r)&&a(r),b(C)}else a(r);f=n(r)}if(f!==null)j=!0;else{var ma=n(c);ma!==null&&tn(T,ma.startTime-C),j=!1}}break e}finally{f=null,h=D,g=!1}j=void 0}}finally{j?Ae():M=!1}}}var Ae;if(typeof y=="function")Ae=function(){y(ae)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,en=mt.port2;mt.port1.onmessage=ae,Ae=function(){en.postMessage(null)}}else Ae=function(){p(ae,0)};function tn(C,j){E=p(function(){C(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var D=h;h=j;try{return C()}finally{h=D}},e.unstable_requestPaint=function(){x=!0},e.unstable_runWithPriority=function(C,j){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=h;h=C;try{return j()}finally{h=D}},e.unstable_scheduleCallback=function(C,j,D){var B=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,C={id:d++,callback:j,priorityLevel:C,startTime:D,expirationTime:Z,sortIndex:-1},D>B?(C.sortIndex=D,t(c,C),n(r)===null&&C===n(c)&&(S?(m(E),E=-1):S=!0,tn(T,D-B))):(C.sortIndex=Z,t(r,C),v||g||(v=!0,M||(M=!0,Ae()))),C},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(C){var j=h;return function(){var D=h;h=j;try{return C.apply(this,arguments)}finally{h=D}}}})(cp);rp.exports=cp;var kb=rp.exports,up={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eb=w;function dp(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function nn(){}var ze={d:{f:nn,r:function(){throw Error(dp(522))},D:nn,C:nn,L:nn,m:nn,X:nn,S:nn,M:nn},p:0,findDOMNode:null},Cb=Symbol.for("react.portal");function Nb(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cb,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}var Ri=Eb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pl(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ze;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(dp(299));return Nb(e,t,null,n)};Oe.flushSync=function(e){var t=Ri.T,n=ze.p;try{if(Ri.T=null,ze.p=2,e)return e()}finally{Ri.T=t,ze.p=n,ze.d.f()}};Oe.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,ze.d.C(e,t))};Oe.prefetchDNS=function(e){typeof e=="string"&&ze.d.D(e)};Oe.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=pl(n,t.crossOrigin),i=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?ze.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:s}):n==="script"&&ze.d.X(e,{crossOrigin:a,integrity:i,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Oe.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=pl(t.as,t.crossOrigin);ze.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&ze.d.M(e)};Oe.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=pl(n,t.crossOrigin);ze.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Oe.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=pl(t.as,t.crossOrigin);ze.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else ze.d.m(e)};Oe.requestFormReset=function(e){ze.d.r(e)};Oe.unstable_batchedUpdates=function(e,t){return e(t)};Oe.useFormState=function(e,t,n){return Ri.H.useFormState(e,t,n)};Oe.useFormStatus=function(){return Ri.H.useHostTransitionStatus()};Oe.version="19.2.4";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(e){console.error(e)}}fp(),up.exports=Oe;var Mb=up.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=kb,hp=w,jb=Mb;function k(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function mp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ys(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gp(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tf(e){if(ys(e)!==e)throw Error(k(188))}function Db(e){var t=e.alternate;if(!t){if(t=ys(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tf(i),e;if(s===a)return tf(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==a.return)n=i,a=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,a=s;break}if(l===a){o=!0,a=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,a=i;break}if(l===a){o=!0,a=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==a)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function yp(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=yp(e),t!==null)return t;e=e.sibling}return null}var ne=Object.assign,Rb=Symbol.for("react.element"),_s=Symbol.for("react.transitional.element"),Ei=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),Ir=Symbol.for("react.profiler"),bp=Symbol.for("react.consumer"),Ht=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),Wr=Symbol.for("react.suspense"),Xr=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Fr=Symbol.for("react.activity"),zb=Symbol.for("react.memo_cache_sentinel"),nf=Symbol.iterator;function gi(e){return e===null||typeof e!="object"?null:(e=nf&&e[nf]||e["@@iterator"],typeof e=="function"?e:null)}var Bb=Symbol.for("react.client.reference");function $r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wa:return"Fragment";case Ir:return"Profiler";case vp:return"StrictMode";case Wr:return"Suspense";case Xr:return"SuspenseList";case Fr:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ei:return"Portal";case Ht:return e.displayName||"Context";case bp:return(e._context.displayName||"Context")+".Consumer";case vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bu:return t=e.displayName||null,t!==null?t:$r(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return $r(e(t))}catch{}}return null}var Ci=Array.isArray,L=hp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=jb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fn={pending:!1,data:null,method:null,action:null},Kr=[],Sa=-1;function Mt(e){return{current:e}}function Te(e){0>Sa||(e.current=Kr[Sa],Kr[Sa]=null,Sa--)}function K(e,t){Sa++,Kr[Sa]=e.current,e.current=t}var kt=Mt(null),Ki=Mt(null),vn=Mt(null),jo=Mt(null);function Do(e,t){switch(K(vn,t),K(Ki,e),K(kt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ch(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ch(t),e=Hy(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Te(kt),K(kt,e)}function Wa(){Te(kt),Te(Ki),Te(vn)}function Qr(e){e.memoizedState!==null&&K(jo,e);var t=kt.current,n=Hy(t,e.type);t!==n&&(K(Ki,e),K(kt,n))}function Ro(e){Ki.current===e&&(Te(kt),Te(Ki)),jo.current===e&&(Te(jo),ls._currentValue=Fn)}var _l,af;function _n(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||"",af=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_l+e+af}var Pl=!1;function ql(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(g){var h=g}Reflect.construct(e,[],f)}else{try{f.call()}catch(g){h=g}e.call(f.prototype)}}else{try{throw Error()}catch(g){h=g}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),o=s[0],l=s[1];if(o&&l){var r=o.split(`
`),c=l.split(`
`);for(i=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(a===r.length||i===c.length)for(a=r.length-1,i=c.length-1;1<=a&&0<=i&&r[a]!==c[i];)i--;for(;1<=a&&0<=i;a--,i--)if(r[a]!==c[i]){if(a!==1||i!==1)do if(a--,i--,0>i||r[a]!==c[i]){var d=`
`+r[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=i);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_n(n):""}function Lb(e,t){switch(e.tag){case 26:case 27:case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return e.child!==t&&t!==null?_n("Suspense Fallback"):_n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return ql(e.type,!1);case 11:return ql(e.type.render,!1);case 1:return ql(e.type,!0);case 31:return _n("Activity");default:return""}}function sf(e){try{var t="",n=null;do t+=Lb(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zr=Object.prototype.hasOwnProperty,xu=xe.unstable_scheduleCallback,Yl=xe.unstable_cancelCallback,Ob=xe.unstable_shouldYield,Ub=xe.unstable_requestPaint,$e=xe.unstable_now,Vb=xe.unstable_getCurrentPriorityLevel,xp=xe.unstable_ImmediatePriority,wp=xe.unstable_UserBlockingPriority,zo=xe.unstable_NormalPriority,Hb=xe.unstable_LowPriority,Sp=xe.unstable_IdlePriority,_b=xe.log,Pb=xe.unstable_setDisableYieldValue,vs=null,Ke=null;function fn(e){if(typeof _b=="function"&&Pb(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(vs,e)}catch{}}var Qe=Math.clz32?Math.clz32:Gb,qb=Math.log,Yb=Math.LN2;function Gb(e){return e>>>=0,e===0?32:31-(qb(e)/Yb|0)|0}var Ps=256,qs=262144,Ys=4194304;function Pn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var l=a&134217727;return l!==0?(a=l&~s,a!==0?i=Pn(a):(o&=l,o!==0?i=Pn(o):n||(n=l&~e,n!==0&&(i=Pn(n))))):(l=a&~s,l!==0?i=Pn(l):o!==0?i=Pn(o):n||(n=a&~e,n!==0&&(i=Pn(n)))),i===0?0:t!==0&&t!==i&&!(t&s)&&(s=i&-i,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:i}function bs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ib(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(){var e=Ys;return Ys<<=1,!(Ys&62914560)&&(Ys=4194304),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wb(e,t,n,a,i,s){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,r=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var d=31-Qe(n),f=1<<d;l[d]=0,r[d]=-1;var h=c[d];if(h!==null)for(c[d]=null,d=0;d<h.length;d++){var g=h[d];g!==null&&(g.lane&=-536870913)}n&=~f}a!==0&&Ap(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function Ap(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Qe(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Qe(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Ep(e,t){var n=t&-t;return n=n&42?1:wu(n),n&(e.suspendedLanes|t)?0:n}function wu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Cp(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Ky(e.type))}function of(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var zn=Math.random().toString(36).slice(2),Ce="__reactFiber$"+zn,qe="__reactProps$"+zn,si="__reactContainer$"+zn,Jr="__reactEvents$"+zn,Xb="__reactListeners$"+zn,Fb="__reactHandles$"+zn,lf="__reactResources$"+zn,ws="__reactMarker$"+zn;function Tu(e){delete e[Ce],delete e[qe],delete e[Jr],delete e[Xb],delete e[Fb]}function Ta(e){var t=e[Ce];if(t)return t;for(var n=e.parentNode;n;){if(t=n[si]||n[Ce]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mh(e);e!==null;){if(n=e[Ce])return n;e=mh(e)}return t}e=n,n=e.parentNode}return null}function oi(e){if(e=e[Ce]||e[si]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(k(33))}function Va(e){var t=e[lf];return t||(t=e[lf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[ws]=!0}var Np=new Set,Mp={};function la(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(Mp[e]=t,e=0;e<t.length;e++)Np.add(t[e])}var $b=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rf={},cf={};function Kb(e){return Zr.call(cf,e)?!0:Zr.call(rf,e)?!1:$b.test(e)?cf[e]=!0:(rf[e]=!0,!1)}function so(e,t,n){if(Kb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Gs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Rt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qb(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ec(e){if(!e._valueTracker){var t=jp(e)?"checked":"value";e._valueTracker=Qb(e,t,""+e[t])}}function Dp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=jp(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zb=/[\n"\\]/g;function st(e){return e.replace(Zb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tc(e,t,n,a,i,s,o,l){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nt(t)):e.value!==""+nt(t)&&(e.value=""+nt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?nc(e,o,nt(t)):n!=null?nc(e,o,nt(n)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+nt(l):e.removeAttribute("name")}function Rp(e,t,n,a,i,s,o,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ec(e);return}n=n!=null?""+nt(n):"",t=t!=null?""+nt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=l?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ec(e)}function nc(e,t,n){t==="number"&&Bo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ha(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zp(e,t,n){if(t!=null&&(t=""+nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+nt(n):""}function Bp(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(k(92));if(Ci(a)){if(1<a.length)throw Error(k(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=nt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ec(e)}function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Jb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Lp(e,t,n){if(t!=null&&typeof t!="object")throw Error(k(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&uf(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&uf(e,s,t[s])}function Au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ex=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oo(e){return tx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var ac=null;function ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,_a=null;function df(e){var t=oi(e);if(t&&(e=t.stateNode)){var n=e[qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(tc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[qe]||null;if(!i)throw Error(k(90));tc(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Dp(a)}break e;case"textarea":zp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ha(e,!!n.multiple,t,!1)}}}var Il=!1;function Op(e,t,n){if(Il)return e(t,n);Il=!0;try{var a=e(t);return a}finally{if(Il=!1,(Aa!==null||_a!==null)&&(Nl(),Aa&&(t=Aa,e=_a,_a=Aa=null,df(t),e)))for(t=0;t<e.length;t++)df(e[t])}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[qe]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=!1;if(Wt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){ic=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{ic=!1}var hn=null,Eu=null,lo=null;function Up(){if(lo)return lo;var e,t=Eu,n=t.length,a,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[s-a];a++);return lo=i.slice(e,1<a?1-a:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Is(){return!0}function ff(){return!1}function Ye(e){function t(n,a,i,s,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Is:ff,this.isPropagationStopped=ff,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),t}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ye(ra),Ss=ne({},ra,{view:0,detail:0}),nx=Ye(Ss),Wl,Xl,vi,vl=ne({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(Wl=e.screenX-vi.screenX,Xl=e.screenY-vi.screenY):Xl=Wl=0,vi=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),hf=Ye(vl),ax=ne({},vl,{dataTransfer:0}),ix=Ye(ax),sx=ne({},Ss,{relatedTarget:0}),Fl=Ye(sx),ox=ne({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=Ye(ox),rx=ne({},ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cx=Ye(rx),ux=ne({},ra,{data:0}),mf=Ye(ux),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hx[e])?!!t[e]:!1}function Cu(){return mx}var px=ne({},Ss,{key:function(e){if(e.key){var t=dx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gx=Ye(px),yx=ne({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=Ye(yx),vx=ne({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),bx=Ye(vx),xx=ne({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Ye(xx),Sx=ne({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=Ye(Sx),Ax=ne({},ra,{newState:0,oldState:0}),kx=Ye(Ax),Ex=[9,13,27,32],Nu=Wt&&"CompositionEvent"in window,zi=null;Wt&&"documentMode"in document&&(zi=document.documentMode);var Cx=Wt&&"TextEvent"in window&&!zi,Vp=Wt&&(!Nu||zi&&8<zi&&11>=zi),gf=" ",yf=!1;function Hp(e,t){switch(e){case"keyup":return Ex.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function Nx(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(yf=!0,gf);case"textInput":return e=t.data,e===gf&&yf?null:e;default:return null}}function Mx(e,t){if(ka)return e==="compositionend"||!Nu&&Hp(e,t)?(e=Up(),lo=Eu=hn=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vp&&t.locale!=="ko"?null:t.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jx[e.type]:t==="textarea"}function Pp(e,t,n,a){Aa?_a?_a.push(a):_a=[a]:Aa=a,t=Zo(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Bi=null,Zi=null;function Dx(e){Oy(e,0)}function bl(e){var t=Ni(e);if(Dp(t))return e}function bf(e,t){if(e==="change")return t}var qp=!1;if(Wt){var $l;if(Wt){var Kl="oninput"in document;if(!Kl){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Kl=typeof xf.oninput=="function"}$l=Kl}else $l=!1;qp=$l&&(!document.documentMode||9<document.documentMode)}function wf(){Bi&&(Bi.detachEvent("onpropertychange",Yp),Zi=Bi=null)}function Yp(e){if(e.propertyName==="value"&&bl(Zi)){var t=[];Pp(t,Zi,e,ku(e)),Op(Dx,t)}}function Rx(e,t,n){e==="focusin"?(wf(),Bi=t,Zi=n,Bi.attachEvent("onpropertychange",Yp)):e==="focusout"&&wf()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(Zi)}function Bx(e,t){if(e==="click")return bl(t)}function Lx(e,t){if(e==="input"||e==="change")return bl(t)}function Ox(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:Ox;function Ji(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Zr.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tf(e,t){var n=Sf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function Gp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ux=Wt&&"documentMode"in document&&11>=document.documentMode,Ea=null,sc=null,Li=null,oc=!1;function Af(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||Ea==null||Ea!==Bo(a)||(a=Ea,"selectionStart"in a&&Mu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Li&&Ji(Li,a)||(Li=a,a=Zo(sc,"onSelect"),0<a.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ea)))}function Vn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ca={animationend:Vn("Animation","AnimationEnd"),animationiteration:Vn("Animation","AnimationIteration"),animationstart:Vn("Animation","AnimationStart"),transitionrun:Vn("Transition","TransitionRun"),transitionstart:Vn("Transition","TransitionStart"),transitioncancel:Vn("Transition","TransitionCancel"),transitionend:Vn("Transition","TransitionEnd")},Ql={},Wp={};Wt&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function ca(e){if(Ql[e])return Ql[e];if(!Ca[e])return e;var t=Ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wp)return Ql[e]=t[n];return e}var Xp=ca("animationend"),Fp=ca("animationiteration"),$p=ca("animationstart"),Vx=ca("transitionrun"),Hx=ca("transitionstart"),_x=ca("transitioncancel"),Kp=ca("transitionend"),Qp=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function xt(e,t){Qp.set(e,t),la(t,[e])}var Lo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},tt=[],Na=0,ju=0;function xl(){for(var e=Na,t=ju=Na=0;t<e;){var n=tt[t];tt[t++]=null;var a=tt[t];tt[t++]=null;var i=tt[t];tt[t++]=null;var s=tt[t];if(tt[t++]=null,a!==null&&i!==null){var o=a.pending;o===null?i.next=i:(i.next=o.next,o.next=i),a.pending=i}s!==0&&Zp(n,i,s)}}function wl(e,t,n,a){tt[Na++]=e,tt[Na++]=t,tt[Na++]=n,tt[Na++]=a,ju|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Du(e,t,n,a){return wl(e,t,n,a),Oo(e)}function ua(e,t){return wl(e,null,null,t),Oo(e)}function Zp(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-Qe(n),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),s):null}function Oo(e){if(50<Gi)throw Gi=0,Nc=null,Error(k(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ma={};function Px(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,a){return new Px(e,t,n,a)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Jp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function co(e,t,n,a,i,s){var o=0;if(a=e,typeof e=="function")Ru(e)&&(o=1);else if(typeof e=="string")o=Ww(e,n,kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Fr:return e=We(31,n,t,i),e.elementType=Fr,e.lanes=s,e;case wa:return $n(n.children,i,s,t);case vp:o=8,i|=24;break;case Ir:return e=We(12,n,t,i|2),e.elementType=Ir,e.lanes=s,e;case Wr:return e=We(13,n,t,i),e.elementType=Wr,e.lanes=s,e;case Xr:return e=We(19,n,t,i),e.elementType=Xr,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ht:o=10;break e;case bp:o=9;break e;case vu:o=11;break e;case bu:o=14;break e;case on:o=16,a=null;break e}o=29,n=Error(k(130,e===null?"null":typeof e,"")),a=null}return t=We(o,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function $n(e,t,n,a){return e=We(7,e,a,t),e.lanes=n,e}function Zl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function eg(e){var t=We(18,null,null,0);return t.stateNode=e,t}function Jl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kf=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var n=kf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:sf(t)},kf.set(e,t),t)}return{value:e,source:t,stack:sf(t)}}var ja=[],Da=0,Uo=null,es=0,at=[],it=0,Cn=null,St=1,Tt="";function Ut(e,t){ja[Da++]=es,ja[Da++]=Uo,Uo=e,es=t}function tg(e,t,n){at[it++]=St,at[it++]=Tt,at[it++]=Cn,Cn=e;var a=St;e=Tt;var i=32-Qe(a)-1;a&=~(1<<i),n+=1;var s=32-Qe(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,St=1<<32-Qe(t)+i|n<<i|a,Tt=s+e}else St=1<<s|n<<i|a,Tt=e}function zu(e){e.return!==null&&(Ut(e,1),tg(e,1,0))}function Bu(e){for(;e===Uo;)Uo=ja[--Da],ja[Da]=null,es=ja[--Da],ja[Da]=null;for(;e===Cn;)Cn=at[--it],at[it]=null,Tt=at[--it],at[it]=null,St=at[--it],at[it]=null}function ng(e,t){at[it++]=St,at[it++]=Tt,at[it++]=Cn,St=t.id,Tt=t.overflow,Cn=e}var Ne=null,ee=null,P=!1,bn=null,lt=!1,rc=Error(k(519));function Nn(e){var t=Error(k(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ts(ot(t,e)),rc}function Ef(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ce]=e,t[qe]=a,n){case"dialog":V("cancel",t),V("close",t);break;case"iframe":case"object":case"embed":V("load",t);break;case"video":case"audio":for(n=0;n<ss.length;n++)V(ss[n],t);break;case"source":V("error",t);break;case"img":case"image":case"link":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"input":V("invalid",t),Rp(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":V("invalid",t);break;case"textarea":V("invalid",t),Bp(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Vy(t.textContent,n)?(a.popover!=null&&(V("beforetoggle",t),V("toggle",t)),a.onScroll!=null&&V("scroll",t),a.onScrollEnd!=null&&V("scrollend",t),a.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||Nn(e,!0)}function Cf(e){for(Ne=e.return;Ne;)switch(Ne.tag){case 5:case 31:case 13:lt=!1;return;case 27:case 3:lt=!0;return;default:Ne=Ne.return}}function pa(e){if(e!==Ne)return!1;if(!P)return Cf(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zc(e.type,e.memoizedProps)),n=!n),n&&ee&&Nn(e),Cf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));ee=hh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));ee=hh(e)}else t===27?(t=ee,Bn(e.type)?(e=Uc,Uc=null,ee=e):ee=t):ee=Ne?ut(e.stateNode.nextSibling):null;return!0}function na(){ee=Ne=null,P=!1}function er(){var e=bn;return e!==null&&(_e===null?_e=e:_e.push.apply(_e,e),bn=null),e}function ts(e){bn===null?bn=[e]:bn.push(e)}var cc=Mt(null),da=null,Pt=null;function rn(e,t,n){K(cc,t._currentValue),t._currentValue=n}function Yt(e){e._currentValue=cc.current,Te(cc)}function uc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function dc(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var o=i.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=i;for(var r=0;r<t.length;r++)if(l.context===t[r]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uc(s.return,n,e),a||(o=null);break e}s=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),uc(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function li(e,t,n,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(k(387));if(o=o.memoizedProps,o!==null){var l=i.type;Je(i.pendingProps.value,o.value)||(e!==null?e.push(l):e=[l])}}else if(i===jo.current){if(o=i.alternate,o===null)throw Error(k(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ls):e=[ls])}i=i.return}e!==null&&dc(t,e,n,a),t.flags|=262144}function Vo(e){for(e=e.firstContext;e!==null;){if(!Je(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){da=e,Pt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return ag(da,e)}function Ws(e,t){return da===null&&aa(e),ag(e,t)}function ag(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Pt===null){if(e===null)throw Error(k(308));Pt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pt=Pt.next=t;return n}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Yx=xe.unstable_scheduleCallback,Gx=xe.unstable_NormalPriority,ge={$$typeof:Ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new qx,data:new Map,refCount:0}}function Ts(e){e.refCount--,e.refCount===0&&Yx(Gx,function(){e.controller.abort()})}var Oi=null,fc=0,$a=0,Pa=null;function Ix(e,t){if(Oi===null){var n=Oi=[];fc=0,$a=od(),Pa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return fc++,t.then(Nf,Nf),t}function Nf(){if(--fc===0&&Oi!==null){Pa!==null&&(Pa.status="fulfilled");var e=Oi;Oi=null,$a=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wx(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Mf=L.S;L.S=function(e,t){yy=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ix(e,t),Mf!==null&&Mf(e,t)};var Kn=Mt(null);function Ou(){var e=Kn.current;return e!==null?e:$.pooledCache}function uo(e,t){t===null?K(Kn,Kn.current):K(Kn,t.pool)}function ig(){var e=Ou();return e===null?null:{parent:ge._currentValue,pool:e}}var ri=Error(k(460)),Uu=Error(k(474)),Sl=Error(k(542)),Ho={then:function(){}};function jf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sg(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_t,_t),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rf(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=$,e!==null&&100<e.shellSuspendCounter)throw Error(k(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rf(e),e}throw Qn=t,ri}}function qn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qn=n,ri):n}}var Qn=null;function Df(){if(Qn===null)throw Error(k(459));var e=Qn;return Qn=null,e}function Rf(e){if(e===ri||e===Sl)throw Error(k(483))}var qa=null,ns=0;function Xs(e){var t=ns;return ns+=1,qa===null&&(qa=[]),sg(qa,e,t)}function bi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fs(e,t){throw t.$$typeof===Rb?Error(k(525)):(e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function og(e){function t(p,m){if(e){var y=p.deletions;y===null?(p.deletions=[m],p.flags|=16):y.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function a(p){for(var m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(p,m){return p=qt(p,m),p.index=0,p.sibling=null,p}function s(p,m,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<m?(p.flags|=67108866,m):y):(p.flags|=67108866,m)):(p.flags|=1048576,m)}function o(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function l(p,m,y,b){return m===null||m.tag!==6?(m=Zl(y,p.mode,b),m.return=p,m):(m=i(m,y),m.return=p,m)}function r(p,m,y,b){var T=y.type;return T===wa?d(p,m,y.props.children,b,y.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===on&&qn(T)===m.type)?(m=i(m,y.props),bi(m,y),m.return=p,m):(m=co(y.type,y.key,y.props,null,p.mode,b),bi(m,y),m.return=p,m)}function c(p,m,y,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Jl(y,p.mode,b),m.return=p,m):(m=i(m,y.children||[]),m.return=p,m)}function d(p,m,y,b,T){return m===null||m.tag!==7?(m=$n(y,p.mode,b,T),m.return=p,m):(m=i(m,y),m.return=p,m)}function f(p,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Zl(""+m,p.mode,y),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _s:return y=co(m.type,m.key,m.props,null,p.mode,y),bi(y,m),y.return=p,y;case Ei:return m=Jl(m,p.mode,y),m.return=p,m;case on:return m=qn(m),f(p,m,y)}if(Ci(m)||gi(m))return m=$n(m,p.mode,y,null),m.return=p,m;if(typeof m.then=="function")return f(p,Xs(m),y);if(m.$$typeof===Ht)return f(p,Ws(p,m),y);Fs(p,m)}return null}function h(p,m,y,b){var T=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:l(p,m,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _s:return y.key===T?r(p,m,y,b):null;case Ei:return y.key===T?c(p,m,y,b):null;case on:return y=qn(y),h(p,m,y,b)}if(Ci(y)||gi(y))return T!==null?null:d(p,m,y,b,null);if(typeof y.then=="function")return h(p,m,Xs(y),b);if(y.$$typeof===Ht)return h(p,m,Ws(p,y),b);Fs(p,y)}return null}function g(p,m,y,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return p=p.get(y)||null,l(m,p,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _s:return p=p.get(b.key===null?y:b.key)||null,r(m,p,b,T);case Ei:return p=p.get(b.key===null?y:b.key)||null,c(m,p,b,T);case on:return b=qn(b),g(p,m,y,b,T)}if(Ci(b)||gi(b))return p=p.get(y)||null,d(m,p,b,T,null);if(typeof b.then=="function")return g(p,m,y,Xs(b),T);if(b.$$typeof===Ht)return g(p,m,y,Ws(m,b),T);Fs(m,b)}return null}function v(p,m,y,b){for(var T=null,M=null,E=m,A=m=0,N=null;E!==null&&A<y.length;A++){E.index>A?(N=E,E=null):N=E.sibling;var z=h(p,E,y[A],b);if(z===null){E===null&&(E=N);break}e&&E&&z.alternate===null&&t(p,E),m=s(z,m,A),M===null?T=z:M.sibling=z,M=z,E=N}if(A===y.length)return n(p,E),P&&Ut(p,A),T;if(E===null){for(;A<y.length;A++)E=f(p,y[A],b),E!==null&&(m=s(E,m,A),M===null?T=E:M.sibling=E,M=E);return P&&Ut(p,A),T}for(E=a(E);A<y.length;A++)N=g(E,p,A,y[A],b),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?A:N.key),m=s(N,m,A),M===null?T=N:M.sibling=N,M=N);return e&&E.forEach(function(ae){return t(p,ae)}),P&&Ut(p,A),T}function S(p,m,y,b){if(y==null)throw Error(k(151));for(var T=null,M=null,E=m,A=m=0,N=null,z=y.next();E!==null&&!z.done;A++,z=y.next()){E.index>A?(N=E,E=null):N=E.sibling;var ae=h(p,E,z.value,b);if(ae===null){E===null&&(E=N);break}e&&E&&ae.alternate===null&&t(p,E),m=s(ae,m,A),M===null?T=ae:M.sibling=ae,M=ae,E=N}if(z.done)return n(p,E),P&&Ut(p,A),T;if(E===null){for(;!z.done;A++,z=y.next())z=f(p,z.value,b),z!==null&&(m=s(z,m,A),M===null?T=z:M.sibling=z,M=z);return P&&Ut(p,A),T}for(E=a(E);!z.done;A++,z=y.next())z=g(E,p,A,z.value,b),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?A:z.key),m=s(z,m,A),M===null?T=z:M.sibling=z,M=z);return e&&E.forEach(function(Ae){return t(p,Ae)}),P&&Ut(p,A),T}function x(p,m,y,b){if(typeof y=="object"&&y!==null&&y.type===wa&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _s:e:{for(var T=y.key;m!==null;){if(m.key===T){if(T=y.type,T===wa){if(m.tag===7){n(p,m.sibling),b=i(m,y.props.children),b.return=p,p=b;break e}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===on&&qn(T)===m.type){n(p,m.sibling),b=i(m,y.props),bi(b,y),b.return=p,p=b;break e}n(p,m);break}else t(p,m);m=m.sibling}y.type===wa?(b=$n(y.props.children,p.mode,b,y.key),b.return=p,p=b):(b=co(y.type,y.key,y.props,null,p.mode,b),bi(b,y),b.return=p,p=b)}return o(p);case Ei:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(p,m.sibling),b=i(m,y.children||[]),b.return=p,p=b;break e}else{n(p,m);break}else t(p,m);m=m.sibling}b=Jl(y,p.mode,b),b.return=p,p=b}return o(p);case on:return y=qn(y),x(p,m,y,b)}if(Ci(y))return v(p,m,y,b);if(gi(y)){if(T=gi(y),typeof T!="function")throw Error(k(150));return y=T.call(y),S(p,m,y,b)}if(typeof y.then=="function")return x(p,m,Xs(y),b);if(y.$$typeof===Ht)return x(p,m,Ws(p,y),b);Fs(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(p,m.sibling),b=i(m,y),b.return=p,p=b):(n(p,m),b=Zl(y,p.mode,b),b.return=p,p=b),o(p)):n(p,m)}return function(p,m,y,b){try{ns=0;var T=x(p,m,y,b);return qa=null,T}catch(E){if(E===ri||E===Sl)throw E;var M=We(29,E,null,p.mode);return M.lanes=b,M.return=p,M}finally{}}}var ia=og(!0),lg=og(!1),ln=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Y&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Oo(e),Zp(e,null,n),t}return wl(e,a,t,n),Oo(e)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kp(e,n)}}function tr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mc=!1;function Vi(){if(mc){var e=Pa;if(e!==null)throw e}}function Hi(e,t,n,a){mc=!1;var i=e.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var r=l,c=r.next;r.next=null,o===null?s=c:o.next=c,o=r;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=r))}if(s!==null){var f=i.baseState;o=0,d=c=r=null,l=s;do{var h=l.lane&-536870913,g=h!==l.lane;if(g?(_&h)===h:(a&h)===h){h!==0&&h===$a&&(mc=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var v=e,S=l;h=t;var x=n;switch(S.tag){case 1:if(v=S.payload,typeof v=="function"){f=v.call(x,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(x,f,h):v,h==null)break e;f=ne({},f,h);break e;case 2:ln=!0}}h=l.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[h]:g.push(h))}else g={lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,r=f):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);d===null&&(r=f),i.baseState=r,i.firstBaseUpdate=c,i.lastBaseUpdate=d,s===null&&(i.shared.lanes=0),jn|=o,e.lanes=o,e.memoizedState=f}}function rg(e,t){if(typeof e!="function")throw Error(k(191,e));e.call(t)}function cg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rg(n[e],t)}var Ka=Mt(null),_o=Mt(0);function zf(e,t){e=Kt,K(_o,e),K(Ka,t),Kt=e|t.baseLanes}function pc(){K(_o,Kt),K(Ka,Ka.current)}function Hu(){Kt=_o.current,Te(Ka),Te(_o)}var et=Mt(null),ct=null;function cn(e){var t=e.alternate;K(de,de.current&1),K(et,e),ct===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(ct=e)}function gc(e){K(de,de.current),K(et,e),ct===null&&(ct=e)}function ug(e){e.tag===22?(K(de,de.current),K(et,e),ct===null&&(ct=e)):un()}function un(){K(de,de.current),K(et,et.current)}function Ie(e){Te(et),ct===e&&(ct=null),Te(de)}var de=Mt(0);function Po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Lc(n)||Oc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,U=null,F=null,me=null,qo=!1,Ya=!1,sa=!1,Yo=0,as=0,Ga=null,Xx=0;function re(){throw Error(k(321))}function _u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function Pu(e,t,n,a,i,s){return Xt=s,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Pg:Zu,sa=!1,s=n(a,i),sa=!1,Ya&&(s=fg(t,n,a,i)),dg(e),s}function dg(e){L.H=is;var t=F!==null&&F.next!==null;if(Xt=0,me=F=U=null,qo=!1,as=0,Ga=null,t)throw Error(k(300));e===null||ye||(e=e.dependencies,e!==null&&Vo(e)&&(ye=!0))}function fg(e,t,n,a){U=e;var i=0;do{if(Ya&&(Ga=null),as=0,Ya=!1,25<=i)throw Error(k(301));if(i+=1,me=F=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}L.H=qg,s=t(n,a)}while(Ya);return s}function Fx(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?As(t):t,e=e.useState()[0],(F!==null?F.memoizedState:null)!==e&&(U.flags|=1024),t}function qu(){var e=Yo!==0;return Yo=0,e}function Yu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Gu(e){if(qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qo=!1}Xt=0,me=F=U=null,Ya=!1,as=Yo=0,Ga=null}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?U.memoizedState=me=e:me=me.next=e,me}function fe(){if(F===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=F.next;var t=me===null?U.memoizedState:me.next;if(t!==null)me=t,F=e;else{if(e===null)throw U.alternate===null?Error(k(467)):Error(k(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},me===null?U.memoizedState=me=e:me=me.next=e}return me}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function As(e){var t=as;return as+=1,Ga===null&&(Ga=[]),e=sg(Ga,e,t),t=U,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Pg:Zu),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return As(e);if(e.$$typeof===Ht)return Me(e)}throw Error(k(438,String(e)))}function Iu(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=U.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Tl(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=zb;return t.index++,n}function Ft(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=fe();return Wu(t,F,e)}function Wu(e,t,n){var a=e.queue;if(a===null)throw Error(k(311));a.lastRenderedReducer=n;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var l=o=null,r=null,c=t,d=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(_&f)===f:(Xt&f)===f){var h=c.revertLane;if(h===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===$a&&(d=!0);else if((Xt&h)===h){c=c.next,h===$a&&(d=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},r===null?(l=r=f,o=s):r=r.next=f,U.lanes|=h,jn|=h;f=c.action,sa&&n(s,f),s=c.hasEagerState?c.eagerState:n(s,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},r===null?(l=r=h,o=s):r=r.next=h,U.lanes|=f,jn|=f;c=c.next}while(c!==null&&c!==t);if(r===null?o=s:r.next=l,!Je(s,e.memoizedState)&&(ye=!0,d&&(n=Pa,n!==null)))throw n;e.memoizedState=s,e.baseState=o,e.baseQueue=r,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function nr(e){var t=fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Je(s,t.memoizedState)||(ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function hg(e,t,n){var a=U,i=fe(),s=P;if(s){if(n===void 0)throw Error(k(407));n=n()}else n=t();var o=!Je((F||i).memoizedState,n);if(o&&(i.memoizedState=n,ye=!0),i=i.queue,Xu(gg.bind(null,a,i,e),[e]),i.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(a.flags|=2048,Qa(9,{destroy:void 0},pg.bind(null,a,i,n,t),null),$===null)throw Error(k(349));s||Xt&127||mg(a,t,n)}return n}function mg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Tl(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pg(e,t,n,a){t.value=n,t.getSnapshot=a,yg(t)&&vg(e)}function gg(e,t,n){return n(function(){yg(t)&&vg(e)})}function yg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function vg(e){var t=ua(e,2);t!==null&&Pe(t,e,2)}function yc(e){var t=Re();if(typeof e=="function"){var n=e;if(e=n(),sa){fn(!0);try{n()}finally{fn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function bg(e,t,n,a){return e.baseState=n,Wu(e,F,typeof a=="function"?a:Ft)}function $x(e,t,n,a,i){if(El(e))throw Error(k(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};L.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,xg(t,s)):(s.next=n.next,t.pending=n.next=s)}}function xg(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=L.T,o={};L.T=o;try{var l=n(i,a),r=L.S;r!==null&&r(o,l),Bf(e,t,l)}catch(c){vc(e,t,c)}finally{s!==null&&o.types!==null&&(s.types=o.types),L.T=s}}else try{s=n(i,a),Bf(e,t,s)}catch(c){vc(e,t,c)}}function Bf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Lf(e,t,a)},function(a){return vc(e,t,a)}):Lf(e,t,n)}function Lf(e,t,n){t.status="fulfilled",t.value=n,wg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,xg(e,n)))}function vc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,wg(t),t=t.next;while(t!==a)}e.action=null}function wg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sg(e,t){return t}function Of(e,t){if(P){var n=$.formState;if(n!==null){e:{var a=U;if(P){if(ee){t:{for(var i=ee,s=lt;i.nodeType!==8;){if(!s){i=null;break t}if(i=ut(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){ee=ut(i.nextSibling),a=i.data==="F!";break e}}Nn(a)}a=!1}a&&(t=n[0])}}return n=Re(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:t},n.queue=a,n=Vg.bind(null,U,a),a.dispatch=n,a=yc(!1),s=Qu.bind(null,U,!1,a.queue),a=Re(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=$x.bind(null,U,i,s,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Uf(e){var t=fe();return Tg(t,F,e)}function Tg(e,t,n){if(t=Wu(e,t,Sg)[0],e=fo(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=As(t)}catch(o){throw o===ri?Sl:o}else a=t;t=fe();var i=t.queue,s=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,Qa(9,{destroy:void 0},Kx.bind(null,i,n),null)),[a,s,e]}function Kx(e,t){e.action=t}function Vf(e){var t=fe(),n=F;if(n!==null)return Tg(t,n,e);fe(),t=t.memoizedState,n=fe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Qa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=U.updateQueue,t===null&&(t=Tl(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ag(){return fe().memoizedState}function ho(e,t,n,a){var i=Re();U.flags|=e,i.memoizedState=Qa(1|t,{destroy:void 0},n,a===void 0?null:a)}function kl(e,t,n,a){var i=fe();a=a===void 0?null:a;var s=i.memoizedState.inst;F!==null&&a!==null&&_u(a,F.memoizedState.deps)?i.memoizedState=Qa(t,s,n,a):(U.flags|=e,i.memoizedState=Qa(1|t,s,n,a))}function Hf(e,t){ho(8390656,8,e,t)}function Xu(e,t){kl(2048,8,e,t)}function Qx(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Tl(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function kg(e){var t=fe().memoizedState;return Qx({ref:t,nextImpl:e}),function(){if(Y&2)throw Error(k(440));return t.impl.apply(void 0,arguments)}}function Eg(e,t){return kl(4,2,e,t)}function Cg(e,t){return kl(4,4,e,t)}function Ng(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mg(e,t,n){n=n!=null?n.concat([e]):null,kl(4,4,Ng.bind(null,t,e),n)}function Fu(){}function jg(e,t){var n=fe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&_u(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Dg(e,t){var n=fe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&_u(t,a[1]))return a[0];if(a=e(),sa){fn(!0);try{e()}finally{fn(!1)}}return n.memoizedState=[a,t],a}function $u(e,t,n){return n===void 0||Xt&1073741824&&!(_&261930)?e.memoizedState=t:(e.memoizedState=n,e=by(),U.lanes|=e,jn|=e,n)}function Rg(e,t,n,a){return Je(n,t)?n:Ka.current!==null?(e=$u(e,n,a),Je(e,t)||(ye=!0),e):!(Xt&42)||Xt&1073741824&&!(_&261930)?(ye=!0,e.memoizedState=n):(e=by(),U.lanes|=e,jn|=e,t)}function zg(e,t,n,a,i){var s=G.p;G.p=s!==0&&8>s?s:8;var o=L.T,l={};L.T=l,Qu(e,!1,t,n);try{var r=i(),c=L.S;if(c!==null&&c(l,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var d=Wx(r,a);_i(e,t,d,Ze(e))}else _i(e,t,a,Ze(e))}catch(f){_i(e,t,{then:function(){},status:"rejected",reason:f},Ze())}finally{G.p=s,o!==null&&l.types!==null&&(o.types=l.types),L.T=o}}function Zx(){}function bc(e,t,n,a){if(e.tag!==5)throw Error(k(476));var i=Bg(e).queue;zg(e,i,t,Fn,n===null?Zx:function(){return Lg(e),n(a)})}function Bg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Fn,baseState:Fn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:Fn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lg(e){var t=Bg(e);t.next===null&&(t=e.alternate.memoizedState),_i(e,t.next.queue,{},Ze())}function Ku(){return Me(ls)}function Og(){return fe().memoizedState}function Ug(){return fe().memoizedState}function Jx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ze();e=xn(n);var a=wn(t,e,n);a!==null&&(Pe(a,t,n),Ui(a,t,n)),t={cache:Lu()},e.payload=t;return}t=t.return}}function ew(e,t,n){var a=Ze();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},El(e)?Hg(t,n):(n=Du(e,t,n,a),n!==null&&(Pe(n,e,a),_g(n,t,a)))}function Vg(e,t,n){var a=Ze();_i(e,t,n,a)}function _i(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(El(e))Hg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Je(l,o))return wl(e,t,i,0),$===null&&xl(),!1}catch{}finally{}if(n=Du(e,t,i,a),n!==null)return Pe(n,e,a),_g(n,t,a),!0}return!1}function Qu(e,t,n,a){if(a={lane:2,revertLane:od(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)){if(t)throw Error(k(479))}else t=Du(e,n,a,2),t!==null&&Pe(t,e,2)}function El(e){var t=e.alternate;return e===U||t!==null&&t===U}function Hg(e,t){Ya=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _g(e,t,n){if(n&4194048){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kp(e,n)}}var is={readContext:Me,use:Al,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useLayoutEffect:re,useInsertionEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useSyncExternalStore:re,useId:re,useHostTransitionStatus:re,useFormState:re,useActionState:re,useOptimistic:re,useMemoCache:re,useCacheRefresh:re};is.useEffectEvent=re;var Pg={readContext:Me,use:Al,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Hf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ho(4194308,4,Ng.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){ho(4,2,e,t)},useMemo:function(e,t){var n=Re();t=t===void 0?null:t;var a=e();if(sa){fn(!0);try{e()}finally{fn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Re();if(n!==void 0){var i=n(t);if(sa){fn(!0);try{n(t)}finally{fn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=ew.bind(null,U,e),[a.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:function(e){e=yc(e);var t=e.queue,n=Vg.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fu,useDeferredValue:function(e,t){var n=Re();return $u(n,e,t)},useTransition:function(){var e=yc(!1);return e=zg.bind(null,U,e.queue,!0,!1),Re().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=U,i=Re();if(P){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),$===null)throw Error(k(349));_&127||mg(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Hf(gg.bind(null,a,s,e),[e]),a.flags|=2048,Qa(9,{destroy:void 0},pg.bind(null,a,s,n,t),null),n},useId:function(){var e=Re(),t=$.identifierPrefix;if(P){var n=Tt,a=St;n=(a&~(1<<32-Qe(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Yo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Xx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ku,useFormState:Of,useActionState:Of,useOptimistic:function(e){var t=Re();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Qu.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:Iu,useCacheRefresh:function(){return Re().memoizedState=Jx.bind(null,U)},useEffectEvent:function(e){var t=Re(),n={impl:e};return t.memoizedState=n,function(){if(Y&2)throw Error(k(440));return n.impl.apply(void 0,arguments)}}},Zu={readContext:Me,use:Al,useCallback:jg,useContext:Me,useEffect:Xu,useImperativeHandle:Mg,useInsertionEffect:Eg,useLayoutEffect:Cg,useMemo:Dg,useReducer:fo,useRef:Ag,useState:function(){return fo(Ft)},useDebugValue:Fu,useDeferredValue:function(e,t){var n=fe();return Rg(n,F.memoizedState,e,t)},useTransition:function(){var e=fo(Ft)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:As(e),t]},useSyncExternalStore:hg,useId:Og,useHostTransitionStatus:Ku,useFormState:Uf,useActionState:Uf,useOptimistic:function(e,t){var n=fe();return bg(n,F,e,t)},useMemoCache:Iu,useCacheRefresh:Ug};Zu.useEffectEvent=kg;var qg={readContext:Me,use:Al,useCallback:jg,useContext:Me,useEffect:Xu,useImperativeHandle:Mg,useInsertionEffect:Eg,useLayoutEffect:Cg,useMemo:Dg,useReducer:nr,useRef:Ag,useState:function(){return nr(Ft)},useDebugValue:Fu,useDeferredValue:function(e,t){var n=fe();return F===null?$u(n,e,t):Rg(n,F.memoizedState,e,t)},useTransition:function(){var e=nr(Ft)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:As(e),t]},useSyncExternalStore:hg,useId:Og,useHostTransitionStatus:Ku,useFormState:Vf,useActionState:Vf,useOptimistic:function(e,t){var n=fe();return F!==null?bg(n,F,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:Ug};qg.useEffectEvent=kg;function ar(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ze(),i=xn(a);i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,a),t!==null&&(Pe(t,e,a),Ui(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ze(),i=xn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,a),t!==null&&(Pe(t,e,a),Ui(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),a=xn(n);a.tag=2,t!=null&&(a.callback=t),t=wn(e,a,n),t!==null&&(Pe(t,e,n),Ui(t,e,n))}};function _f(e,t,n,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,a)||!Ji(i,s):!0}function Pf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function oa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=ne({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function Yg(e){Lo(e)}function Gg(e){console.error(e)}function Ig(e){Lo(e)}function Go(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function qf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function wc(e,t,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Go(e,t)},n}function Wg(e){return e=xn(e),e.tag=3,e}function Xg(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){qf(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){qf(t,n,a),typeof i!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var l=a.stack;this.componentDidCatch(a.value,{componentStack:l!==null?l:""})})}function tw(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&li(t,n,i,!0),n=et.current,n!==null){switch(n.tag){case 31:case 13:return ct===null?$o():n.alternate===null&&ue===0&&(ue=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Ho?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),mr(e,a,i)),!1;case 22:return n.flags|=65536,a===Ho?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),mr(e,a,i)),!1}throw Error(k(435,n.tag))}return mr(e,a,i),$o(),!1}if(P)return t=et.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==rc&&(e=Error(k(422),{cause:a}),ts(ot(e,n)))):(a!==rc&&(t=Error(k(423),{cause:a}),ts(ot(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=ot(a,n),i=wc(e.stateNode,a,i),tr(e,i),ue!==4&&(ue=2)),!1;var s=Error(k(520),{cause:a});if(s=ot(s,n),Yi===null?Yi=[s]:Yi.push(s),ue!==4&&(ue=2),t===null)return!0;a=ot(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=wc(n.stateNode,a,e),tr(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Sn===null||!Sn.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Wg(i),Xg(i,e,n,a),tr(n,i),!1}n=n.return}while(n!==null);return!1}var Ju=Error(k(461)),ye=!1;function Ee(e,t,n,a){t.child=e===null?lg(t,null,n,a):ia(t,e.child,n,a)}function Yf(e,t,n,a,i){n=n.render;var s=t.ref;if("ref"in a){var o={};for(var l in a)l!=="ref"&&(o[l]=a[l])}else o=a;return aa(t),a=Pu(e,t,n,o,s,i),l=qu(),e!==null&&!ye?(Yu(e,t,i),$t(e,t,i)):(P&&l&&zu(t),t.flags|=1,Ee(e,t,a,i),t.child)}function Gf(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ru(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Fg(e,t,s,a,i)):(e=co(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!ed(e,i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(o,a)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=qt(s,a),e.ref=t.ref,e.return=t,t.child=e}function Fg(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(Ji(s,a)&&e.ref===t.ref)if(ye=!1,t.pendingProps=a=s,ed(e,i))e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Sc(e,t,n,a,i)}function $g(e,t,n,a){var i=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,t.child=null;return If(e,t,s,n,a)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&uo(t,s!==null?s.cachePool:null),s!==null?zf(t,s):pc(),ug(t);else return a=t.lanes=536870912,If(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(uo(t,s.cachePool),zf(t,s),un(),t.memoizedState=null):(e!==null&&uo(t,null),pc(),un());return Ee(e,t,i,n),t.child}function Mi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function If(e,t,n,a,i){var s=Ou();return s=s===null?null:{parent:ge._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&uo(t,null),pc(),ug(t),e!==null&&li(e,t,a,!0),t.childLanes=i,null}function mo(e,t){return t=Io({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wf(e,t,n){return ia(t,e.child,null,n),e=mo(t,t.pendingProps),e.flags|=2,Ie(t),t.memoizedState=null,e}function nw(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(P){if(a.mode==="hidden")return e=mo(t,a),t.lanes=536870912,Mi(null,e);if(gc(t),(e=ee)?(e=Py(e,lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:St,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},n=eg(e),n.return=t,t.child=n,Ne=t,ee=null)):e=null,e===null)throw Nn(t);return t.lanes=536870912,null}return mo(t,a)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(gc(t),i)if(t.flags&256)t.flags&=-257,t=Wf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(k(558));else if(ye||li(e,t,n,!1),i=(n&e.childLanes)!==0,ye||i){if(a=$,a!==null&&(o=Ep(a,n),o!==0&&o!==s.retryLane))throw s.retryLane=o,ua(e,o),Pe(a,e,o),Ju;$o(),t=Wf(e,t,n)}else e=s.treeContext,ee=ut(o.nextSibling),Ne=t,P=!0,bn=null,lt=!1,e!==null&&ng(t,e),t=mo(t,a),t.flags|=4096;return t}return e=qt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function po(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(k(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sc(e,t,n,a,i){return aa(t),n=Pu(e,t,n,a,void 0,i),a=qu(),e!==null&&!ye?(Yu(e,t,i),$t(e,t,i)):(P&&a&&zu(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Xf(e,t,n,a,i,s){return aa(t),t.updateQueue=null,n=fg(t,a,n,i),dg(e),a=qu(),e!==null&&!ye?(Yu(e,t,s),$t(e,t,s)):(P&&a&&zu(t),t.flags|=1,Ee(e,t,n,s),t.child)}function Ff(e,t,n,a,i){if(aa(t),t.stateNode===null){var s=Ma,o=n.contextType;typeof o=="object"&&o!==null&&(s=Me(o)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},Vu(t),o=n.contextType,s.context=typeof o=="object"&&o!==null?Me(o):Ma,s.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ar(t,n,o,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&xc.enqueueReplaceState(s,s.state,null),Hi(t,a,s,i),Vi(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var l=t.memoizedProps,r=oa(n,l);s.props=r;var c=s.context,d=n.contextType;o=Ma,typeof d=="object"&&d!==null&&(o=Me(d));var f=n.getDerivedStateFromProps;d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||c!==o)&&Pf(t,s,a,o),ln=!1;var h=t.memoizedState;s.state=h,Hi(t,a,s,i),Vi(),c=t.memoizedState,l||h!==c||ln?(typeof f=="function"&&(ar(t,n,f,a),c=t.memoizedState),(r=ln||_f(t,n,r,a,h,c,o))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),s.props=a,s.state=c,s.context=o,a=r):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,hc(e,t),o=t.memoizedProps,d=oa(n,o),s.props=d,f=t.pendingProps,h=s.context,c=n.contextType,r=Ma,typeof c=="object"&&c!==null&&(r=Me(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||h!==r)&&Pf(t,s,a,r),ln=!1,h=t.memoizedState,s.state=h,Hi(t,a,s,i),Vi();var g=t.memoizedState;o!==f||h!==g||ln||e!==null&&e.dependencies!==null&&Vo(e.dependencies)?(typeof l=="function"&&(ar(t,n,l,a),g=t.memoizedState),(d=ln||_f(t,n,d,a,h,g,r)||e!==null&&e.dependencies!==null&&Vo(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,g,r),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,g,r)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),s.props=a,s.state=g,s.context=r,a=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,po(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=ia(t,e.child,null,i),t.child=ia(t,null,n,i)):Ee(e,t,n,i),t.memoizedState=s.state,e=t.child):e=$t(e,t,i),e}function $f(e,t,n,a){return na(),t.flags|=256,Ee(e,t,n,a),t.child}var ir={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sr(e){return{baseLanes:e,cachePool:ig()}}function or(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Xe),e}function Kg(e,t,n){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(de.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(P){if(i?cn(t):un(),(e=ee)?(e=Py(e,lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:St,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},n=eg(e),n.return=t,t.child=n,Ne=t,ee=null)):e=null,e===null)throw Nn(t);return Oc(e)?t.lanes=32:t.lanes=536870912,null}var l=a.children;return a=a.fallback,i?(un(),i=t.mode,l=Io({mode:"hidden",children:l},i),a=$n(a,i,n,null),l.return=t,a.return=t,l.sibling=a,t.child=l,a=t.child,a.memoizedState=sr(n),a.childLanes=or(e,o,n),t.memoizedState=ir,Mi(null,a)):(cn(t),Tc(t,l))}var r=e.memoizedState;if(r!==null&&(l=r.dehydrated,l!==null)){if(s)t.flags&256?(cn(t),t.flags&=-257,t=lr(e,t,n)):t.memoizedState!==null?(un(),t.child=e.child,t.flags|=128,t=null):(un(),l=a.fallback,i=t.mode,a=Io({mode:"visible",children:a.children},i),l=$n(l,i,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,ia(t,e.child,null,n),a=t.child,a.memoizedState=sr(n),a.childLanes=or(e,o,n),t.memoizedState=ir,t=Mi(null,a));else if(cn(t),Oc(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var c=o.dgst;o=c,a=Error(k(419)),a.stack="",a.digest=o,ts({value:a,source:null,stack:null}),t=lr(e,t,n)}else if(ye||li(e,t,n,!1),o=(n&e.childLanes)!==0,ye||o){if(o=$,o!==null&&(a=Ep(o,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,ua(e,a),Pe(o,e,a),Ju;Lc(l)||$o(),t=lr(e,t,n)}else Lc(l)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ee=ut(l.nextSibling),Ne=t,P=!0,bn=null,lt=!1,e!==null&&ng(t,e),t=Tc(t,a.children),t.flags|=4096);return t}return i?(un(),l=a.fallback,i=t.mode,r=e.child,c=r.sibling,a=qt(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,c!==null?l=qt(c,l):(l=$n(l,i,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,Mi(null,a),a=t.child,l=e.child.memoizedState,l===null?l=sr(n):(i=l.cachePool,i!==null?(r=ge._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=ig(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=or(e,o,n),t.memoizedState=ir,Mi(e.child,a)):(cn(t),n=e.child,e=n.sibling,n=qt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Io({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Io(e,t){return e=We(22,e,null,t),e.lanes=0,e}function lr(e,t,n){return ia(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),uc(e.return,t,n)}function rr(e,t,n,a,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=i,o.treeForkCount=s)}function Qg(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var o=de.current,l=(o&2)!==0;if(l?(o=o&1|2,t.flags|=128):o&=1,K(de,o),Ee(e,t,a,n),a=P?es:0,!l&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kf(e,n,t);else if(e.tag===19)Kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rr(t,!1,i,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rr(t,!0,n,null,s,a);break;case"together":rr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))if(e!==null){if(li(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ed(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Vo(e)))}function aw(e,t,n){switch(t.tag){case 3:Do(t,t.stateNode.containerInfo),rn(t,ge,e.memoizedState.cache),na();break;case 27:case 5:Qr(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:rn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,gc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(cn(t),t.flags|=128,null):n&t.child.childLanes?Kg(e,t,n):(cn(t),e=$t(e,t,n),e!==null?e.sibling:null);cn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(li(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Qg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(de,de.current),a)break;return null;case 22:return t.lanes=0,$g(e,t,n,t.pendingProps);case 24:rn(t,ge,e.memoizedState.cache)}return $t(e,t,n)}function Zg(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ye=!0;else{if(!ed(e,n)&&!(t.flags&128))return ye=!1,aw(e,t,n);ye=!!(e.flags&131072)}else ye=!1,P&&t.flags&1048576&&tg(t,es,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=qn(t.elementType),t.type=e,typeof e=="function")Ru(e)?(a=oa(e,a),t.tag=1,t=Ff(null,t,e,a,n)):(t.tag=0,t=Sc(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===vu){t.tag=11,t=Yf(null,t,e,a,n);break e}else if(i===bu){t.tag=14,t=Gf(null,t,e,a,n);break e}}throw t=$r(e)||e,Error(k(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=oa(a,t.pendingProps),Ff(e,t,a,i,n);case 3:e:{if(Do(t,t.stateNode.containerInfo),e===null)throw Error(k(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,hc(e,t),Hi(t,a,null,n);var o=t.memoizedState;if(a=o.cache,rn(t,ge,a),a!==s.cache&&dc(t,[ge],n,!0),Vi(),a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=$f(e,t,a,n);break e}else if(a!==i){i=ot(Error(k(424)),t),ts(i),t=$f(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ee=ut(e.firstChild),Ne=t,P=!0,bn=null,lt=!0,n=lg(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(na(),a===i){t=$t(e,t,n);break e}Ee(e,t,a,n)}t=t.child}return t;case 26:return po(e,t),e===null?(n=gh(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,a=Jo(vn.current).createElement(n),a[Ce]=t,a[qe]=e,je(a,n,e),Se(a),t.stateNode=a):t.memoizedState=gh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qr(t),e===null&&P&&(a=t.stateNode=qy(t.type,t.pendingProps,vn.current),Ne=t,lt=!0,i=ee,Bn(t.type)?(Uc=i,ee=ut(a.firstChild)):ee=i),Ee(e,t,t.pendingProps.children,n),po(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((i=a=ee)&&(a=zw(a,t.type,t.pendingProps,lt),a!==null?(t.stateNode=a,Ne=t,ee=ut(a.firstChild),lt=!1,i=!0):i=!1),i||Nn(t)),Qr(t),i=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,zc(i,s)?a=null:o!==null&&zc(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Pu(e,t,Fx,null,null,n),ls._currentValue=i),po(e,t),Ee(e,t,a,n),t.child;case 6:return e===null&&P&&((e=n=ee)&&(n=Bw(n,t.pendingProps,lt),n!==null?(t.stateNode=n,Ne=t,ee=null,e=!0):e=!1),e||Nn(t)),null;case 13:return Kg(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ia(t,null,a,n):Ee(e,t,a,n),t.child;case 11:return Yf(e,t,t.type,t.pendingProps,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,rn(t,t.type,a.value),Ee(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,aa(t),i=Me(i),a=a(i),t.flags|=1,Ee(e,t,a,n),t.child;case 14:return Gf(e,t,t.type,t.pendingProps,n);case 15:return Fg(e,t,t.type,t.pendingProps,n);case 19:return Qg(e,t,n);case 31:return nw(e,t,n);case 22:return $g(e,t,n,t.pendingProps);case 24:return aa(t),a=Me(ge),e===null?(i=Ou(),i===null&&(i=$,s=Lu(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),t.memoizedState={parent:a,cache:i},Vu(t),rn(t,ge,i)):(e.lanes&n&&(hc(e,t),Hi(t,null,null,n),Vi()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),rn(t,ge,a)):(a=s.cache,rn(t,ge,a),a!==i.cache&&dc(t,[ge],n,!0))),Ee(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(k(156,t.tag))}function zt(e){e.flags|=4}function cr(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Sy())e.flags|=8192;else throw Qn=Ho,Uu}else e.flags&=-16777217}function Qf(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Iy(t))if(Sy())e.flags|=8192;else throw Qn=Ho,Uu}function $s(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tp():536870912,e.lanes|=t,Za|=t)}function xi(e,t){if(!P)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function J(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function iw(e,t,n){var a=t.pendingProps;switch(Bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(t),null;case 1:return J(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(ge),Wa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?zt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,er())),J(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(zt(t),s!==null?(J(t),Qf(t,s)):(J(t),cr(t,i,null,a,n))):s?s!==e.memoizedState?(zt(t),J(t),Qf(t,s)):(J(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&zt(t),J(t),cr(t,i,e,a,n)),null;case 27:if(Ro(t),n=vn.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(!a){if(t.stateNode===null)throw Error(k(166));return J(t),null}e=kt.current,pa(t)?Ef(t):(e=qy(i,a,n),t.stateNode=e,zt(t))}return J(t),null;case 5:if(Ro(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(!a){if(t.stateNode===null)throw Error(k(166));return J(t),null}if(s=kt.current,pa(t))Ef(t);else{var o=Jo(vn.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?o.createElement(i,{is:a.is}):o.createElement(i)}}s[Ce]=t,s[qe]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(je(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&zt(t)}}return J(t),cr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(k(166));if(e=vn.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ne,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ce]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Vy(e.nodeValue,n)),e||Nn(t,!0)}else e=Jo(e).createTextNode(a),e[Ce]=t,t.stateNode=e}return J(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=pa(t),n!==null){if(e===null){if(!a)throw Error(k(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(557));e[Ce]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),e=!1}else n=er(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ie(t),t):(Ie(t),null);if(t.flags&128)throw Error(k(558))}return J(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=pa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ce]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),i=!1}else i=er(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ie(t),t):(Ie(t),null)}return Ie(t),t.flags&128?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$s(t,t.updateQueue),J(t),null);case 4:return Wa(),e===null&&ld(t.stateNode.containerInfo),J(t),null;case 10:return Yt(t.type),J(t),null;case 19:if(Te(de),a=t.memoizedState,a===null)return J(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)xi(a,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Po(e),s!==null){for(t.flags|=128,xi(a,!1),e=s.updateQueue,t.updateQueue=e,$s(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Jp(n,e),n=n.sibling;return K(de,de.current&1|2),P&&Ut(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&$e()>Xo&&(t.flags|=128,i=!0,xi(a,!1),t.lanes=4194304)}else{if(!i)if(e=Po(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,$s(t,e),xi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!P)return J(t),null}else 2*$e()-a.renderingStartTime>Xo&&n!==536870912&&(t.flags|=128,i=!0,xi(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,n=de.current,K(de,i?n&1|2:n&1),P&&Ut(t,a.treeForkCount),e):(J(t),null);case 22:case 23:return Ie(t),Hu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(J(t),t.subtreeFlags&6&&(t.flags|=8192)):J(t),n=t.updateQueue,n!==null&&$s(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Te(Kn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(ge),J(t),null;case 25:return null;case 30:return null}throw Error(k(156,t.tag))}function sw(e,t){switch(Bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(ge),Wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ro(t),null;case 31:if(t.memoizedState!==null){if(Ie(t),t.alternate===null)throw Error(k(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ie(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(de),null;case 4:return Wa(),null;case 10:return Yt(t.type),null;case 22:case 23:return Ie(t),Hu(),e!==null&&Te(Kn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(ge),null;case 25:return null;default:return null}}function Jg(e,t){switch(Bu(t),t.tag){case 3:Yt(ge),Wa();break;case 26:case 27:case 5:Ro(t);break;case 4:Wa();break;case 31:t.memoizedState!==null&&Ie(t);break;case 13:Ie(t);break;case 19:Te(de);break;case 10:Yt(t.type);break;case 22:case 23:Ie(t),Hu(),e!==null&&Te(Kn);break;case 24:Yt(ge)}}function ks(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var s=n.create,o=n.inst;a=s(),o.destroy=a}n=n.next}while(n!==i)}}catch(l){W(t,t.return,l)}}function Mn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var o=a.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=t;var r=n,c=l;try{c()}catch(d){W(i,r,d)}}}a=a.next}while(a!==s)}}catch(d){W(t,t.return,d)}}function ey(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{cg(t,n)}catch(a){W(e,e.return,a)}}}function ty(e,t,n){n.props=oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){W(e,t,a)}}function Pi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){W(e,t,i)}}function At(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){W(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){W(e,t,i)}else n.current=null}function ny(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){W(e,e.return,i)}}function ur(e,t,n){try{var a=e.stateNode;Cw(a,e.type,n,t),a[qe]=t}catch(i){W(e,e.return,i)}}function ay(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bn(e.type)||e.tag===4}function dr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ay(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_t));else if(a!==4&&(a===27&&Bn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function Wo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Bn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}function iy(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);je(t,a,n),t[Ce]=e,t[qe]=n}catch(s){W(e,e.return,s)}}var Vt=!1,pe=!1,fr=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,we=null;function ow(e,t){if(e=e.containerInfo,Dc=al,e=Ip(e),Mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,r=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||a!==0&&f.nodeType!==3||(r=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++c===i&&(l=o),h===s&&++d===a&&(r=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=l===-1||r===-1?null:{start:l,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:e,selectionRange:n},al=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var v=oa(n.type,i);e=a.getSnapshotBeforeUpdate(v,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(S){W(n,n.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Bc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(k(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function sy(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Lt(e,n),a&4&&ks(5,n);break;case 1:if(Lt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){W(n,n.return,o)}else{var i=oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){W(n,n.return,o)}}a&64&&ey(n),a&512&&Pi(n,n.return);break;case 3:if(Lt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{cg(e,t)}catch(o){W(n,n.return,o)}}break;case 27:t===null&&a&4&&iy(n);case 26:case 5:Lt(e,n),t===null&&a&4&&ny(n),a&512&&Pi(n,n.return);break;case 12:Lt(e,n);break;case 31:Lt(e,n),a&4&&ry(e,n);break;case 13:Lt(e,n),a&4&&cy(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=pw.bind(null,n),Lw(e,n))));break;case 22:if(a=n.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||pe,i=Vt;var s=pe;Vt=a,(pe=t)&&!s?Ot(e,n,(n.subtreeFlags&8772)!==0):Lt(e,n),Vt=i,pe=s}break;case 30:break;default:Lt(e,n)}}function oy(e){var t=e.alternate;t!==null&&(e.alternate=null,oy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,He=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ly(e,t,n),n=n.sibling}function ly(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 26:pe||At(n,t),Bt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:pe||At(n,t);var a=ie,i=He;Bn(n.type)&&(ie=n.stateNode,He=!1),Bt(e,t,n),Ii(n.stateNode),ie=a,He=i;break;case 5:pe||At(n,t);case 6:if(a=ie,i=He,ie=null,Bt(e,t,n),ie=a,He=i,ie!==null)if(He)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(n.stateNode)}catch(s){W(n,t,s)}else try{ie.removeChild(n.stateNode)}catch(s){W(n,t,s)}break;case 18:ie!==null&&(He?(e=ie,dh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ni(e)):dh(ie,n.stateNode));break;case 4:a=ie,i=He,ie=n.stateNode.containerInfo,He=!0,Bt(e,t,n),ie=a,He=i;break;case 0:case 11:case 14:case 15:Mn(2,n,t),pe||Mn(4,n,t),Bt(e,t,n);break;case 1:pe||(At(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ty(n,t,a)),Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:pe=(a=pe)||n.memoizedState!==null,Bt(e,t,n),pe=a;break;default:Bt(e,t,n)}}function ry(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ni(e)}catch(n){W(t,t.return,n)}}}function cy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ni(e)}catch(n){W(t,t.return,n)}}function lw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zf),t;default:throw Error(k(435,e.tag))}}function Ks(e,t){var n=lw(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=gw.bind(null,e,a);a.then(i,i)}})}function Ue(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(Bn(l.type)){ie=l.stateNode,He=!1;break e}break;case 5:ie=l.stateNode,He=!1;break e;case 3:case 4:ie=l.stateNode.containerInfo,He=!0;break e}l=l.return}if(ie===null)throw Error(k(160));ly(s,o,i),ie=null,He=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)uy(t,e),t=t.sibling}var vt=null;function uy(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ue(t,e),Ve(e),a&4&&(Mn(3,e,e.return),ks(3,e),Mn(5,e,e.return));break;case 1:Ue(t,e),Ve(e),a&512&&(pe||n===null||At(n,n.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=vt;if(Ue(t,e),Ve(e),a&512&&(pe||n===null||At(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ws]||s[Ce]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),je(s,a,n),s[Ce]=e,Se(s),a=s;break e;case"link":var o=vh("link","href",i).get(a+(n.href||""));if(o){for(var l=0;l<o.length;l++)if(s=o[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(l,1);break t}}s=i.createElement(a),je(s,a,n),i.head.appendChild(s);break;case"meta":if(o=vh("meta","content",i).get(a+(n.content||""))){for(l=0;l<o.length;l++)if(s=o[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(l,1);break t}}s=i.createElement(a),je(s,a,n),i.head.appendChild(s);break;default:throw Error(k(468,a))}s[Ce]=e,Se(s),a=s}e.stateNode=a}else bh(i,e.type,e.stateNode);else e.stateNode=yh(i,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?bh(i,e.type,e.stateNode):yh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ur(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ue(t,e),Ve(e),a&512&&(pe||n===null||At(n,n.return)),n!==null&&a&4&&ur(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ue(t,e),Ve(e),a&512&&(pe||n===null||At(n,n.return)),e.flags&32){i=e.stateNode;try{Fa(i,"")}catch(v){W(e,e.return,v)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,ur(e,i,n!==null?n.memoizedProps:i)),a&1024&&(fr=!0);break;case 6:if(Ue(t,e),Ve(e),a&4){if(e.stateNode===null)throw Error(k(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(v){W(e,e.return,v)}}break;case 3:if(vo=null,i=vt,vt=el(t.containerInfo),Ue(t,e),vt=i,Ve(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(v){W(e,e.return,v)}fr&&(fr=!1,dy(e));break;case 4:a=vt,vt=el(e.stateNode.containerInfo),Ue(t,e),Ve(e),vt=a;break;case 12:Ue(t,e),Ve(e);break;case 31:Ue(t,e),Ve(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ks(e,a)));break;case 13:Ue(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cl=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ks(e,a)));break;case 22:i=e.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,c=Vt,d=pe;if(Vt=c||i,pe=d||r,Ue(t,e),pe=d,Vt=c,Ve(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||r||Vt||pe||Yn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){r=n=t;try{if(s=r.stateNode,i)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=r.stateNode;var f=r.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(v){W(r,r.return,v)}}}else if(t.tag===6){if(n===null){r=t;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(v){W(r,r.return,v)}}}else if(t.tag===18){if(n===null){r=t;try{var g=r.stateNode;i?fh(g,!0):fh(r.stateNode,!1)}catch(v){W(r,r.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ks(e,n))));break;case 19:Ue(t,e),Ve(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ks(e,a)));break;case 30:break;case 21:break;default:Ue(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ay(a)){n=a;break}a=a.return}if(n==null)throw Error(k(160));switch(n.tag){case 27:var i=n.stateNode,s=dr(e);Wo(e,s,i);break;case 5:var o=n.stateNode;n.flags&32&&(Fa(o,""),n.flags&=-33);var l=dr(e);Wo(e,l,o);break;case 3:case 4:var r=n.stateNode.containerInfo,c=dr(e);Ac(e,c,r);break;default:throw Error(k(161))}}catch(d){W(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dy(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Lt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sy(e,t.alternate,t),t=t.sibling}function Yn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mn(4,t,t.return),Yn(t);break;case 1:At(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ty(t,t.return,n),Yn(t);break;case 27:Ii(t.stateNode);case 26:case 5:At(t,t.return),Yn(t);break;case 22:t.memoizedState===null&&Yn(t);break;case 30:Yn(t);break;default:Yn(t)}e=e.sibling}}function Ot(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:Ot(i,s,n),ks(4,s);break;case 1:if(Ot(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){W(a,a.return,c)}if(a=s,i=a.updateQueue,i!==null){var l=a.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)rg(r[i],l)}catch(c){W(a,a.return,c)}}n&&o&64&&ey(s),Pi(s,s.return);break;case 27:iy(s);case 26:case 5:Ot(i,s,n),n&&a===null&&o&4&&ny(s),Pi(s,s.return);break;case 12:Ot(i,s,n);break;case 31:Ot(i,s,n),n&&o&4&&ry(i,s);break;case 13:Ot(i,s,n),n&&o&4&&cy(i,s);break;case 22:s.memoizedState===null&&Ot(i,s,n),Pi(s,s.return);break;case 30:break;default:Ot(i,s,n)}t=t.sibling}}function td(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ts(n))}function nd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ts(e))}function pt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fy(e,t,n,a),t=t.sibling}function fy(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:pt(e,t,n,a),i&2048&&ks(9,t);break;case 1:pt(e,t,n,a);break;case 3:pt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ts(e)));break;case 12:if(i&2048){pt(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,l=s.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){W(t,t.return,r)}}else pt(e,t,n,a);break;case 31:pt(e,t,n,a);break;case 13:pt(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?pt(e,t,n,a):qi(e,t):s._visibility&2?pt(e,t,n,a):(s._visibility|=2,va(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&td(o,t);break;case 24:pt(e,t,n,a),i&2048&&nd(t.alternate,t);break;default:pt(e,t,n,a)}}function va(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,l=n,r=a,c=o.flags;switch(o.tag){case 0:case 11:case 15:va(s,o,l,r,i),ks(8,o);break;case 23:break;case 22:var d=o.stateNode;o.memoizedState!==null?d._visibility&2?va(s,o,l,r,i):qi(s,o):(d._visibility|=2,va(s,o,l,r,i)),i&&c&2048&&td(o.alternate,o);break;case 24:va(s,o,l,r,i),i&&c&2048&&nd(o.alternate,o);break;default:va(s,o,l,r,i)}t=t.sibling}}function qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:qi(n,a),i&2048&&td(a.alternate,a);break;case 24:qi(n,a),i&2048&&nd(a.alternate,a);break;default:qi(n,a)}t=t.sibling}}var ji=8192;function ga(e,t,n){if(e.subtreeFlags&ji)for(e=e.child;e!==null;)hy(e,t,n),e=e.sibling}function hy(e,t,n){switch(e.tag){case 26:ga(e,t,n),e.flags&ji&&e.memoizedState!==null&&Xw(n,vt,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,n);break;case 3:case 4:var a=vt;vt=el(e.stateNode.containerInfo),ga(e,t,n),vt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ji,ji=16777216,ga(e,t,n),ji=a):ga(e,t,n));break;default:ga(e,t,n)}}function my(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];we=a,gy(a,e)}my(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)py(e),e=e.sibling}function py(e){switch(e.tag){case 0:case 11:case 15:wi(e),e.flags&2048&&Mn(9,e,e.return);break;case 3:wi(e);break;case 12:wi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,go(e)):wi(e);break;default:wi(e)}}function go(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];we=a,gy(a,e)}my(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mn(8,t,t.return),go(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,go(t));break;default:go(t)}e=e.sibling}}function gy(e,t){for(;we!==null;){var n=we;switch(n.tag){case 0:case 11:case 15:Mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ts(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,we=a;else e:for(n=e;we!==null;){a=we;var i=a.sibling,s=a.return;if(oy(a),a===n){we=null;break e}if(i!==null){i.return=s,we=i;break e}we=s}}}var rw={getCacheForType:function(e){var t=Me(ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Me(ge).controller.signal}},cw=typeof WeakMap=="function"?WeakMap:Map,Y=0,$=null,H=null,_=0,I=0,Ge=null,mn=!1,ci=!1,ad=!1,Kt=0,ue=0,jn=0,Zn=0,id=0,Xe=0,Za=0,Yi=null,_e=null,kc=!1,Cl=0,yy=0,Xo=1/0,Fo=null,Sn=null,be=0,Tn=null,Ja=null,Gt=0,Ec=0,Cc=null,vy=null,Gi=0,Nc=null;function Ze(){return Y&2&&_!==0?_&-_:L.T!==null?od():Cp()}function by(){if(Xe===0)if(!(_&536870912)||P){var e=qs;qs<<=1,!(qs&3932160)&&(qs=262144),Xe=e}else Xe=536870912;return e=et.current,e!==null&&(e.flags|=32),Xe}function Pe(e,t,n){(e===$&&(I===2||I===9)||e.cancelPendingCommit!==null)&&(ei(e,0),pn(e,_,Xe,!1)),xs(e,n),(!(Y&2)||e!==$)&&(e===$&&(!(Y&2)&&(Zn|=n),ue===4&&pn(e,_,Xe,!1)),jt(e))}function xy(e,t,n){if(Y&6)throw Error(k(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||bs(e,t),i=a?fw(e,t):hr(e,t,!0),s=a;do{if(i===0){ci&&!a&&pn(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!uw(n)){i=hr(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var l=e;i=Yi;var r=l.current.memoizedState.isDehydrated;if(r&&(ei(l,o).flags|=256),o=hr(l,o,!1),o!==2){if(ad&&!r){l.errorRecoveryDisabledLanes|=s,Zn|=s,i=4;break e}s=_e,_e=i,s!==null&&(_e===null?_e=s:_e.push.apply(_e,s))}i=o}if(s=!1,i!==2)continue}}if(i===1){ei(e,0),pn(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(k(345));case 4:if((t&4194048)!==t)break;case 6:pn(a,t,Xe,!mn);break e;case 2:_e=null;break;case 3:case 5:break;default:throw Error(k(329))}if((t&62914560)===t&&(i=Cl+300-$e(),10<i)){if(pn(a,t,Xe,!mn),gl(a,0,!0)!==0)break e;Gt=t,a.timeoutHandle=_y(Jf.bind(null,a,n,_e,Fo,kc,t,Xe,Zn,Za,mn,s,"Throttled",-0,0),i);break e}Jf(a,n,_e,Fo,kc,t,Xe,Zn,Za,mn,s,null,-0,0)}}break}while(!0);jt(e)}function Jf(e,t,n,a,i,s,o,l,r,c,d,f,h,g){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},hy(t,s,f);var v=(s&62914560)===s?Cl-$e():(s&4194048)===s?yy-$e():0;if(v=Fw(f,v),v!==null){Gt=s,e.cancelPendingCommit=v(th.bind(null,e,t,s,n,a,i,o,l,r,d,f,null,h,g)),pn(e,s,o,!c);return}}th(e,t,s,n,a,i,o,l,r)}function uw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Je(s(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t,n,a){t&=~id,t&=~Zn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-Qe(i),o=1<<s;a[s]=-1,i&=~o}n!==0&&Ap(e,n,t)}function Nl(){return Y&6?!0:(Es(0),!1)}function sd(){if(H!==null){if(I===0)var e=H.return;else e=H,Pt=da=null,Gu(e),qa=null,ns=0,e=H;for(;e!==null;)Jg(e.alternate,e),e=e.return;H=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,jw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gt=0,sd(),$=e,H=n=qt(e.current,null),_=t,I=0,Ge=null,mn=!1,ci=bs(e,t),ad=!1,Za=Xe=id=Zn=jn=ue=0,_e=Yi=null,kc=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-Qe(a),s=1<<i;t|=e[i],a&=~s}return Kt=t,xl(),n}function wy(e,t){U=null,L.H=is,t===ri||t===Sl?(t=Df(),I=3):t===Uu?(t=Df(),I=4):I=t===Ju?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ge=t,H===null&&(ue=1,Go(e,ot(t,e.current)))}function Sy(){var e=et.current;return e===null?!0:(_&4194048)===_?ct===null:(_&62914560)===_||_&536870912?e===ct:!1}function Ty(){var e=L.H;return L.H=is,e===null?is:e}function Ay(){var e=L.A;return L.A=rw,e}function $o(){ue=4,mn||(_&4194048)!==_&&et.current!==null||(ci=!0),!(jn&134217727)&&!(Zn&134217727)||$===null||pn($,_,Xe,!1)}function hr(e,t,n){var a=Y;Y|=2;var i=Ty(),s=Ay();($!==e||_!==t)&&(Fo=null,ei(e,t)),t=!1;var o=ue;e:do try{if(I!==0&&H!==null){var l=H,r=Ge;switch(I){case 8:sd(),o=6;break e;case 3:case 2:case 9:case 6:et.current===null&&(t=!0);var c=I;if(I=0,Ge=null,Ra(e,l,r,c),n&&ci){o=0;break e}break;default:c=I,I=0,Ge=null,Ra(e,l,r,c)}}dw(),o=ue;break}catch(d){wy(e,d)}while(!0);return t&&e.shellSuspendCounter++,Pt=da=null,Y=a,L.H=i,L.A=s,H===null&&($=null,_=0,xl()),o}function dw(){for(;H!==null;)ky(H)}function fw(e,t){var n=Y;Y|=2;var a=Ty(),i=Ay();$!==e||_!==t?(Fo=null,Xo=$e()+500,ei(e,t)):ci=bs(e,t);e:do try{if(I!==0&&H!==null){t=H;var s=Ge;t:switch(I){case 1:I=0,Ge=null,Ra(e,t,s,1);break;case 2:case 9:if(jf(s)){I=0,Ge=null,eh(t);break}t=function(){I!==2&&I!==9||$!==e||(I=7),jt(e)},s.then(t,t);break e;case 3:I=7;break e;case 4:I=5;break e;case 7:jf(s)?(I=0,Ge=null,eh(t)):(I=0,Ge=null,Ra(e,t,s,7));break;case 5:var o=null;switch(H.tag){case 26:o=H.memoizedState;case 5:case 27:var l=H;if(o?Iy(o):l.stateNode.complete){I=0,Ge=null;var r=l.sibling;if(r!==null)H=r;else{var c=l.return;c!==null?(H=c,Ml(c)):H=null}break t}}I=0,Ge=null,Ra(e,t,s,5);break;case 6:I=0,Ge=null,Ra(e,t,s,6);break;case 8:sd(),ue=6;break e;default:throw Error(k(462))}}hw();break}catch(d){wy(e,d)}while(!0);return Pt=da=null,L.H=a,L.A=i,Y=n,H!==null?0:($=null,_=0,xl(),ue)}function hw(){for(;H!==null&&!Ob();)ky(H)}function ky(e){var t=Zg(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Ml(e):H=t}function eh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Xf(n,t,t.pendingProps,t.type,void 0,_);break;case 11:t=Xf(n,t,t.pendingProps,t.type.render,t.ref,_);break;case 5:Gu(t);default:Jg(n,t),t=H=Jp(t,Kt),t=Zg(n,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Ml(e):H=t}function Ra(e,t,n,a){Pt=da=null,Gu(t),qa=null,ns=0;var i=t.return;try{if(tw(e,i,t,n,_)){ue=1,Go(e,ot(n,e.current)),H=null;return}}catch(s){if(i!==null)throw H=i,s;ue=1,Go(e,ot(n,e.current)),H=null;return}t.flags&32768?(P||a===1?e=!0:ci||_&536870912?e=!1:(mn=e=!0,(a===2||a===9||a===3||a===6)&&(a=et.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ey(t,e)):Ml(t)}function Ml(e){var t=e;do{if(t.flags&32768){Ey(t,mn);return}e=t.return;var n=iw(t.alternate,t,Kt);if(n!==null){H=n;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);ue===0&&(ue=5)}function Ey(e,t){do{var n=sw(e.alternate,e);if(n!==null){n.flags&=32767,H=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=n}while(e!==null);ue=6,H=null}function th(e,t,n,a,i,s,o,l,r){e.cancelPendingCommit=null;do jl();while(be!==0);if(Y&6)throw Error(k(327));if(t!==null){if(t===e.current)throw Error(k(177));if(s=t.lanes|t.childLanes,s|=ju,Wb(e,n,s,o,l,r),e===$&&(H=$=null,_=0),Ja=t,Tn=e,Gt=n,Ec=s,Cc=i,vy=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,yw(zo,function(){return Dy(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=L.T,L.T=null,i=G.p,G.p=2,o=Y,Y|=4;try{ow(e,t,n)}finally{Y=o,G.p=i,L.T=a}}be=1,Cy(),Ny(),My()}}function Cy(){if(be===1){be=0;var e=Tn,t=Ja,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=L.T,L.T=null;var a=G.p;G.p=2;var i=Y;Y|=4;try{uy(t,e);var s=Rc,o=Ip(e.containerInfo),l=s.focusedElem,r=s.selectionRange;if(o!==l&&l&&l.ownerDocument&&Gp(l.ownerDocument.documentElement,l)){if(r!==null&&Mu(l)){var c=r.start,d=r.end;if(d===void 0&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var f=l.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var g=h.getSelection(),v=l.textContent.length,S=Math.min(r.start,v),x=r.end===void 0?S:Math.min(r.end,v);!g.extend&&S>x&&(o=x,x=S,S=o);var p=Tf(l,S),m=Tf(l,x);if(p&&m&&(g.rangeCount!==1||g.anchorNode!==p.node||g.anchorOffset!==p.offset||g.focusNode!==m.node||g.focusOffset!==m.offset)){var y=f.createRange();y.setStart(p.node,p.offset),g.removeAllRanges(),S>x?(g.addRange(y),g.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),g.addRange(y))}}}}for(f=[],g=l;g=g.parentNode;)g.nodeType===1&&f.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var b=f[l];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}al=!!Dc,Rc=Dc=null}finally{Y=i,G.p=a,L.T=n}}e.current=t,be=2}}function Ny(){if(be===2){be=0;var e=Tn,t=Ja,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=L.T,L.T=null;var a=G.p;G.p=2;var i=Y;Y|=4;try{sy(e,t.alternate,t)}finally{Y=i,G.p=a,L.T=n}}be=3}}function My(){if(be===4||be===3){be=0,Ub();var e=Tn,t=Ja,n=Gt,a=vy;t.subtreeFlags&10256||t.flags&10256?be=5:(be=0,Ja=Tn=null,jy(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Sn=null),Su(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(vs,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,i=G.p,G.p=2,L.T=null;try{for(var s=e.onRecoverableError,o=0;o<a.length;o++){var l=a[o];s(l.value,{componentStack:l.stack})}}finally{L.T=t,G.p=i}}Gt&3&&jl(),jt(e),i=e.pendingLanes,n&261930&&i&42?e===Nc?Gi++:(Gi=0,Nc=e):Gi=0,Es(0)}}function jy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ts(t)))}function jl(){return Cy(),Ny(),My(),Dy()}function Dy(){if(be!==5)return!1;var e=Tn,t=Ec;Ec=0;var n=Su(Gt),a=L.T,i=G.p;try{G.p=32>n?32:n,L.T=null,n=Cc,Cc=null;var s=Tn,o=Gt;if(be=0,Ja=Tn=null,Gt=0,Y&6)throw Error(k(331));var l=Y;if(Y|=4,py(s.current),fy(s,s.current,o,n),Y=l,Es(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(vs,s)}catch{}return!0}finally{G.p=i,L.T=a,jy(e,t)}}function nh(e,t,n){t=ot(n,t),t=wc(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(xs(e,2),jt(e))}function W(e,t,n){if(e.tag===3)nh(e,e,n);else for(;t!==null;){if(t.tag===3){nh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sn===null||!Sn.has(a))){e=ot(n,e),n=Wg(2),a=wn(t,n,2),a!==null&&(Xg(n,a,t,e),xs(a,2),jt(a));break}}t=t.return}}function mr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new cw;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(ad=!0,i.add(n),e=mw.bind(null,e,t,n),t.then(e,e))}function mw(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$===e&&(_&n)===n&&(ue===4||ue===3&&(_&62914560)===_&&300>$e()-Cl?!(Y&2)&&ei(e,0):id|=n,Za===_&&(Za=0)),jt(e)}function Ry(e,t){t===0&&(t=Tp()),e=ua(e,t),e!==null&&(xs(e,t),jt(e))}function pw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ry(e,n)}function gw(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(k(314))}a!==null&&a.delete(t),Ry(e,n)}function yw(e,t){return xu(e,t)}var Ko=null,ba=null,Mc=!1,Qo=!1,pr=!1,gn=0;function jt(e){e!==ba&&e.next===null&&(ba===null?Ko=ba=e:ba=ba.next=e),Qo=!0,Mc||(Mc=!0,bw())}function Es(e,t){if(!pr&&Qo){pr=!0;do for(var n=!1,a=Ko;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var o=a.suspendedLanes,l=a.pingedLanes;s=(1<<31-Qe(42|e)+1)-1,s&=i&~(o&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,ah(a,s))}else s=_,s=gl(a,a===$?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(s&3)||bs(a,s)||(n=!0,ah(a,s));a=a.next}while(n);pr=!1}}function vw(){zy()}function zy(){Qo=Mc=!1;var e=0;gn!==0&&Mw()&&(e=gn);for(var t=$e(),n=null,a=Ko;a!==null;){var i=a.next,s=By(a,t);s===0?(a.next=null,n===null?Ko=i:n.next=i,i===null&&(ba=n)):(n=a,(e!==0||s&3)&&(Qo=!0)),a=i}be!==0&&be!==5||Es(e),gn!==0&&(gn=0)}function By(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-Qe(s),l=1<<o,r=i[o];r===-1?(!(l&n)||l&a)&&(i[o]=Ib(l,t)):r<=t&&(e.expiredLanes|=l),s&=~l}if(t=$,n=_,n=gl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(I===2||I===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Yl(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bs(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Yl(a),Su(n)){case 2:case 8:n=wp;break;case 32:n=zo;break;case 268435456:n=Sp;break;default:n=zo}return a=Ly.bind(null,e),n=xu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Yl(a),e.callbackPriority=2,e.callbackNode=null,2}function Ly(e,t){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(jl()&&e.callbackNode!==n)return null;var a=_;return a=gl(e,e===$?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(xy(e,a,t),By(e,$e()),e.callbackNode!=null&&e.callbackNode===n?Ly.bind(null,e):null)}function ah(e,t){if(jl())return null;xy(e,t,!0)}function bw(){Dw(function(){Y&6?xu(xp,vw):zy()})}function od(){if(gn===0){var e=$a;e===0&&(e=Ps,Ps<<=1,!(Ps&261888)&&(Ps=256)),gn=e}return gn}function ih(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oo(""+e)}function sh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xw(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var s=ih((i[qe]||null).action),o=a.submitter;o&&(t=(t=o[qe]||null)?ih(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var l=new yl("action","action",null,a,i);e.push({event:l,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gn!==0){var r=o?sh(i,o):new FormData(i);bc(n,{pending:!0,data:r,method:i.method,action:s},null,r)}}else typeof s=="function"&&(l.preventDefault(),r=o?sh(i,o):new FormData(i),bc(n,{pending:!0,data:r,method:i.method,action:s},s,r))},currentTarget:i}]})}}for(var gr=0;gr<lc.length;gr++){var yr=lc[gr],ww=yr.toLowerCase(),Sw=yr[0].toUpperCase()+yr.slice(1);xt(ww,"on"+Sw)}xt(Xp,"onAnimationEnd");xt(Fp,"onAnimationIteration");xt($p,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Vx,"onTransitionRun");xt(Hx,"onTransitionStart");xt(_x,"onTransitionCancel");xt(Kp,"onTransitionEnd");Xa("onMouseEnter",["mouseout","mouseover"]);Xa("onMouseLeave",["mouseout","mouseover"]);Xa("onPointerEnter",["pointerout","pointerover"]);Xa("onPointerLeave",["pointerout","pointerover"]);la("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));la("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));la("onBeforeInput",["compositionend","keypress","textInput","paste"]);la("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));la("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));la("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ss));function Oy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],r=l.instance,c=l.currentTarget;if(l=l.listener,r!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=c;try{s(i)}catch(d){Lo(d)}i.currentTarget=null,s=r}else for(o=0;o<a.length;o++){if(l=a[o],r=l.instance,c=l.currentTarget,l=l.listener,r!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=c;try{s(i)}catch(d){Lo(d)}i.currentTarget=null,s=r}}}}function V(e,t){var n=t[Jr];n===void 0&&(n=t[Jr]=new Set);var a=e+"__bubble";n.has(a)||(Uy(t,e,2,!1),n.add(a))}function vr(e,t,n){var a=0;t&&(a|=4),Uy(n,e,a,t)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[Qs]){e[Qs]=!0,Np.forEach(function(n){n!=="selectionchange"&&(Tw.has(n)||vr(n,!1,e),vr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qs]||(t[Qs]=!0,vr("selectionchange",!1,t))}}function Uy(e,t,n,a){switch(Ky(t)){case 2:var i=Qw;break;case 8:i=Zw;break;default:i=dd}n=i.bind(null,t,n,e),i=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function br(e,t,n,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=a.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Ta(l),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){a=s=o;continue e}l=l.parentNode}}a=a.return}Op(function(){var c=s,d=ku(n),f=[];e:{var h=Qp.get(e);if(h!==void 0){var g=yl,v=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":g=gx;break;case"focusin":v="focus",g=Fl;break;case"focusout":v="blur",g=Fl;break;case"beforeblur":case"afterblur":g=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bx;break;case Xp:case Fp:case $p:g=lx;break;case Kp:g=wx;break;case"scroll":case"scrollend":g=nx;break;case"wheel":g=Tx;break;case"copy":case"cut":case"paste":g=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pf;break;case"toggle":case"beforetoggle":g=kx}var S=(t&4)!==0,x=!S&&(e==="scroll"||e==="scrollend"),p=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,y;m!==null;){var b=m;if(y=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||y===null||p===null||(b=Qi(m,p),b!=null&&S.push(os(m,b,y))),x)break;m=m.return}0<S.length&&(h=new g(h,v,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ac&&(v=n.relatedTarget||n.fromElement)&&(Ta(v)||v[si]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Ta(v):null,v!==null&&(x=ys(v),S=v.tag,v!==x||S!==5&&S!==27&&S!==6)&&(v=null)):(g=null,v=c),g!==v)){if(S=hf,b="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=pf,b="onPointerLeave",p="onPointerEnter",m="pointer"),x=g==null?h:Ni(g),y=v==null?h:Ni(v),h=new S(b,m+"leave",g,n,d),h.target=x,h.relatedTarget=y,b=null,Ta(d)===c&&(S=new S(p,m+"enter",v,n,d),S.target=y,S.relatedTarget=x,b=S),x=b,g&&v)t:{for(S=Aw,p=g,m=v,y=0,b=p;b;b=S(b))y++;b=0;for(var T=m;T;T=S(T))b++;for(;0<y-b;)p=S(p),y--;for(;0<b-y;)m=S(m),b--;for(;y--;){if(p===m||m!==null&&p===m.alternate){S=p;break t}p=S(p),m=S(m)}S=null}else S=null;g!==null&&oh(f,h,g,S,!1),v!==null&&x!==null&&oh(f,x,v,S,!0)}}e:{if(h=c?Ni(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var M=bf;else if(vf(h))if(qp)M=Lx;else{M=zx;var E=Rx}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Au(c.elementType)&&(M=bf):M=Bx;if(M&&(M=M(e,c))){Pp(f,M,n,d);break e}E&&E(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&nc(h,"number",h.value)}switch(E=c?Ni(c):window,e){case"focusin":(vf(E)||E.contentEditable==="true")&&(Ea=E,sc=c,Li=null);break;case"focusout":Li=sc=Ea=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Af(f,n,d);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":Af(f,n,d)}var A;if(Nu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ka?Hp(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Vp&&n.locale!=="ko"&&(ka||N!=="onCompositionStart"?N==="onCompositionEnd"&&ka&&(A=Up()):(hn=d,Eu="value"in hn?hn.value:hn.textContent,ka=!0)),E=Zo(c,N),0<E.length&&(N=new mf(N,e,null,n,d),f.push({event:N,listeners:E}),A?N.data=A:(A=_p(n),A!==null&&(N.data=A)))),(A=Cx?Nx(e,n):Mx(e,n))&&(N=Zo(c,"onBeforeInput"),0<N.length&&(E=new mf("onBeforeInput","beforeinput",null,n,d),f.push({event:E,listeners:N}),E.data=A)),xw(f,e,c,n,d)}Oy(f,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zo(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Qi(e,n),i!=null&&a.unshift(os(e,i,s)),i=Qi(e,t),i!=null&&a.push(os(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Aw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function oh(e,t,n,a,i){for(var s=t._reactName,o=[];n!==null&&n!==a;){var l=n,r=l.alternate,c=l.stateNode;if(l=l.tag,r!==null&&r===a)break;l!==5&&l!==26&&l!==27||c===null||(r=c,i?(c=Qi(n,s),c!=null&&o.unshift(os(n,c,r))):i||(c=Qi(n,s),c!=null&&o.push(os(n,c,r)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kw=/\r\n?/g,Ew=/\u0000|\uFFFD/g;function lh(e){return(typeof e=="string"?e:""+e).replace(kw,`
`).replace(Ew,"")}function Vy(e,t){return t=lh(t),lh(e)===t}function X(e,t,n,a,i,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fa(e,""+a);break;case"className":Gs(e,"class",a);break;case"tabIndex":Gs(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gs(e,n,a);break;case"style":Lp(e,a,s);break;case"data":if(t!=="object"){Gs(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=oo(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&X(e,t,"name",i.name,i,null),X(e,t,"formEncType",i.formEncType,i,null),X(e,t,"formMethod",i.formMethod,i,null),X(e,t,"formTarget",i.formTarget,i,null)):(X(e,t,"encType",i.encType,i,null),X(e,t,"method",i.method,i,null),X(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=oo(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=_t);break;case"onScroll":a!=null&&V("scroll",e);break;case"onScrollEnd":a!=null&&V("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(k(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(k(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=oo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":V("beforetoggle",e),V("toggle",e),so(e,"popover",a);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":so(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ex.get(n)||n,so(e,n,a))}}function jc(e,t,n,a,i,s){switch(n){case"style":Lp(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(k(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(k(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Fa(e,a):(typeof a=="number"||typeof a=="bigint")&&Fa(e,""+a);break;case"onScroll":a!=null&&V("scroll",e);break;case"onScrollEnd":a!=null&&V("scrollend",e);break;case"onClick":a!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mp.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),s=e[qe]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):so(e,n,a)}}}function je(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",e),V("load",e);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var o=n[s];if(o!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(k(137,t));default:X(e,t,s,o,n,null)}}i&&X(e,t,"srcSet",n.srcSet,n,null),a&&X(e,t,"src",n.src,n,null);return;case"input":V("invalid",e);var l=s=o=i=null,r=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(d!=null)switch(a){case"name":i=d;break;case"type":o=d;break;case"checked":r=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(k(137,t));break;default:X(e,t,a,d,n,null)}}Rp(e,s,l,r,c,o,i,!1);return;case"select":V("invalid",e),a=o=s=null;for(i in n)if(n.hasOwnProperty(i)&&(l=n[i],l!=null))switch(i){case"value":s=l;break;case"defaultValue":o=l;break;case"multiple":a=l;default:X(e,t,i,l,n,null)}t=s,n=o,e.multiple=!!a,t!=null?Ha(e,!!a,t,!1):n!=null&&Ha(e,!!a,n,!0);return;case"textarea":V("invalid",e),s=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(l=n[o],l!=null))switch(o){case"value":a=l;break;case"defaultValue":i=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(k(91));break;default:X(e,t,o,l,n,null)}Bp(e,a,i,s);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(a=n[r],a!=null))switch(r){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:X(e,t,r,a,n,null)}return;case"dialog":V("beforetoggle",e),V("toggle",e),V("cancel",e),V("close",e);break;case"iframe":case"object":V("load",e);break;case"video":case"audio":for(a=0;a<ss.length;a++)V(ss[a],e);break;case"image":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"embed":case"source":case"link":V("error",e),V("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(a=n[c],a!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(k(137,t));default:X(e,t,c,a,n,null)}return;default:if(Au(t)){for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!==void 0&&jc(e,t,d,a,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(a=n[l],a!=null&&X(e,t,l,a,n,null))}function Cw(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,o=null,l=null,r=null,c=null,d=null;for(g in n){var f=n[g];if(n.hasOwnProperty(g)&&f!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":r=f;default:a.hasOwnProperty(g)||X(e,t,g,null,a,f)}}for(var h in a){var g=a[h];if(f=n[h],a.hasOwnProperty(h)&&(g!=null||f!=null))switch(h){case"type":s=g;break;case"name":i=g;break;case"checked":c=g;break;case"defaultChecked":d=g;break;case"value":o=g;break;case"defaultValue":l=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(k(137,t));break;default:g!==f&&X(e,t,h,g,a,f)}}tc(e,o,l,r,c,d,s,i);return;case"select":g=o=l=h=null;for(s in n)if(r=n[s],n.hasOwnProperty(s)&&r!=null)switch(s){case"value":break;case"multiple":g=r;default:a.hasOwnProperty(s)||X(e,t,s,null,a,r)}for(i in a)if(s=a[i],r=n[i],a.hasOwnProperty(i)&&(s!=null||r!=null))switch(i){case"value":h=s;break;case"defaultValue":l=s;break;case"multiple":o=s;default:s!==r&&X(e,t,i,s,a,r)}t=l,n=o,a=g,h!=null?Ha(e,!!n,h,!1):!!a!=!!n&&(t!=null?Ha(e,!!n,t,!0):Ha(e,!!n,n?[]:"",!1));return;case"textarea":g=h=null;for(l in n)if(i=n[l],n.hasOwnProperty(l)&&i!=null&&!a.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:X(e,t,l,null,a,i)}for(o in a)if(i=a[o],s=n[o],a.hasOwnProperty(o)&&(i!=null||s!=null))switch(o){case"value":h=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(k(91));break;default:i!==s&&X(e,t,o,i,a,s)}zp(e,h,g);return;case"option":for(var v in n)if(h=n[v],n.hasOwnProperty(v)&&h!=null&&!a.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:X(e,t,v,null,a,h)}for(r in a)if(h=a[r],g=n[r],a.hasOwnProperty(r)&&h!==g&&(h!=null||g!=null))switch(r){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:X(e,t,r,h,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!a.hasOwnProperty(S)&&X(e,t,S,null,a,h);for(c in a)if(h=a[c],g=n[c],a.hasOwnProperty(c)&&h!==g&&(h!=null||g!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(k(137,t));break;default:X(e,t,c,h,a,g)}return;default:if(Au(t)){for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!==void 0&&!a.hasOwnProperty(x)&&jc(e,t,x,void 0,a,h);for(d in a)h=a[d],g=n[d],!a.hasOwnProperty(d)||h===g||h===void 0&&g===void 0||jc(e,t,d,h,a,g);return}}for(var p in n)h=n[p],n.hasOwnProperty(p)&&h!=null&&!a.hasOwnProperty(p)&&X(e,t,p,null,a,h);for(f in a)h=a[f],g=n[f],!a.hasOwnProperty(f)||h===g||h==null&&g==null||X(e,t,f,h,a,g)}function rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],s=i.transferSize,o=i.initiatorType,l=i.duration;if(s&&l&&rh(o)){for(o=0,l=i.responseEnd,a+=1;a<n.length;a++){var r=n[a],c=r.startTime;if(c>l)break;var d=r.transferSize,f=r.initiatorType;d&&rh(f)&&(r=r.responseEnd,o+=d*(r<l?1:(l-c)/(r-c)))}if(--a,t+=8*(s+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dc=null,Rc=null;function Jo(e){return e.nodeType===9?e:e.ownerDocument}function ch(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xr=null;function Mw(){var e=window.event;return e&&e.type==="popstate"?e===xr?!1:(xr=e,!0):(xr=null,!1)}var _y=typeof setTimeout=="function"?setTimeout:void 0,jw=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Dw=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(e){return uh.resolve(null).then(e).catch(Rw)}:_y;function Rw(e){setTimeout(function(){throw e})}function Bn(e){return e==="head"}function dh(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),ni(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ii(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ii(n);for(var s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[ws]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}else n==="body"&&Ii(e.ownerDocument.body);n=i}while(n);ni(t)}function fh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bc(n),Tu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function zw(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ws])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ut(e.nextSibling),e===null)break}return null}function Bw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ut(e.nextSibling),e===null))return null;return e}function Py(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ut(e.nextSibling),e===null))return null;return e}function Lc(e){return e.data==="$?"||e.data==="$~"}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uc=null;function hh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ut(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function qy(e,t,n){switch(t=Jo(n),e){case"html":if(e=t.documentElement,!e)throw Error(k(452));return e;case"head":if(e=t.head,!e)throw Error(k(453));return e;case"body":if(e=t.body,!e)throw Error(k(454));return e;default:throw Error(k(451))}}function Ii(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tu(e)}var ft=new Map,ph=new Set;function el(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=G.d;G.d={f:Ow,r:Uw,D:Vw,C:Hw,L:_w,m:Pw,X:Yw,S:qw,M:Gw};function Ow(){var e=Jt.f(),t=Nl();return e||t}function Uw(e){var t=oi(e);t!==null&&t.tag===5&&t.type==="form"?Lg(t):Jt.r(e)}var ui=typeof document>"u"?null:document;function Yy(e,t,n){var a=ui;if(a&&typeof t=="string"&&t){var i=st(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),ph.has(i)||(ph.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),je(t,"link",e),Se(t),a.head.appendChild(t)))}}function Vw(e){Jt.D(e),Yy("dns-prefetch",e,null)}function Hw(e,t){Jt.C(e,t),Yy("preconnect",e,t)}function _w(e,t,n){Jt.L(e,t,n);var a=ui;if(a&&e&&t){var i='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+st(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+st(n.imageSizes)+'"]')):i+='[href="'+st(e)+'"]';var s=i;switch(t){case"style":s=ti(e);break;case"script":s=di(e)}ft.has(s)||(e=ne({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ft.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Cs(s))||t==="script"&&a.querySelector(Ns(s))||(t=a.createElement("link"),je(t,"link",e),Se(t),a.head.appendChild(t)))}}function Pw(e,t){Jt.m(e,t);var n=ui;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+st(a)+'"][href="'+st(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=di(e)}if(!ft.has(s)&&(e=ne({rel:"modulepreload",href:e},t),ft.set(s,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ns(s)))return}a=n.createElement("link"),je(a,"link",e),Se(a),n.head.appendChild(a)}}}function qw(e,t,n){Jt.S(e,t,n);var a=ui;if(a&&e){var i=Va(a).hoistableStyles,s=ti(e);t=t||"default";var o=i.get(s);if(!o){var l={loading:0,preload:null};if(o=a.querySelector(Cs(s)))l.loading=5;else{e=ne({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ft.get(s))&&rd(e,n);var r=o=a.createElement("link");Se(r),je(r,"link",e),r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),r.addEventListener("load",function(){l.loading|=1}),r.addEventListener("error",function(){l.loading|=2}),l.loading|=4,yo(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(s,o)}}}function Yw(e,t){Jt.X(e,t);var n=ui;if(n&&e){var a=Va(n).hoistableScripts,i=di(e),s=a.get(i);s||(s=n.querySelector(Ns(i)),s||(e=ne({src:e,async:!0},t),(t=ft.get(i))&&cd(e,t),s=n.createElement("script"),Se(s),je(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Gw(e,t){Jt.M(e,t);var n=ui;if(n&&e){var a=Va(n).hoistableScripts,i=di(e),s=a.get(i);s||(s=n.querySelector(Ns(i)),s||(e=ne({src:e,async:!0,type:"module"},t),(t=ft.get(i))&&cd(e,t),s=n.createElement("script"),Se(s),je(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function gh(e,t,n,a){var i=(i=vn.current)?el(i):null;if(!i)throw Error(k(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ti(n.href),n=Va(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ti(n.href);var s=Va(i).hoistableStyles,o=s.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=i.querySelector(Cs(e)))&&!s._p&&(o.instance=s,o.state.loading=5),ft.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ft.set(e,n),s||Iw(i,e,n,o.state))),t&&a===null)throw Error(k(528,""));return o}if(t&&a!==null)throw Error(k(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=di(n),n=Va(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(k(444,e))}}function ti(e){return'href="'+st(e)+'"'}function Cs(e){return'link[rel="stylesheet"]['+e+"]"}function Gy(e){return ne({},e,{"data-precedence":e.precedence,precedence:null})}function Iw(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),je(t,"link",n),Se(t),e.head.appendChild(t))}function di(e){return'[src="'+st(e)+'"]'}function Ns(e){return"script[async]"+e}function yh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+st(n.href)+'"]');if(a)return t.instance=a,Se(a),a;var i=ne({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Se(a),je(a,"style",i),yo(a,n.precedence,e),t.instance=a;case"stylesheet":i=ti(n.href);var s=e.querySelector(Cs(i));if(s)return t.state.loading|=4,t.instance=s,Se(s),s;a=Gy(n),(i=ft.get(i))&&rd(a,i),s=(e.ownerDocument||e).createElement("link"),Se(s);var o=s;return o._p=new Promise(function(l,r){o.onload=l,o.onerror=r}),je(s,"link",a),t.state.loading|=4,yo(s,n.precedence,e),t.instance=s;case"script":return s=di(n.src),(i=e.querySelector(Ns(s)))?(t.instance=i,Se(i),i):(a=n,(i=ft.get(s))&&(a=ne({},n),cd(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Se(i),je(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(k(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,yo(a,n.precedence,e));return t.instance}function yo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,o=0;o<a.length;o++){var l=a[o];if(l.dataset.precedence===t)s=l;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function rd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vo=null;function vh(e,t,n){if(vo===null){var a=new Map,i=vo=new Map;i.set(n,a)}else i=vo,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[ws]||s[Ce]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var l=a.get(o);l?l.push(s):a.set(o,[s])}}return a}function bh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ww(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Iy(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Xw(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var i=ti(a.href),s=t.querySelector(Cs(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Se(s);return}s=t.ownerDocument||t,a=Gy(a),(i=ft.get(i))&&rd(a,i),s=s.createElement("link"),Se(s);var o=s;o._p=new Promise(function(l,r){o.onload=l,o.onerror=r}),je(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=tl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wr=0;function Fw(e,t){return e.stylesheets&&e.count===0&&bo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&wr===0&&(wr=62500*Nw());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>wr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function tl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nl=null;function bo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nl=new Map,t.forEach($w,e),nl=null,tl.call(e))}function $w(e,t){if(!(t.state.loading&4)){var n=nl.get(e);if(n)var a=n.get(null);else{n=new Map,nl.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var o=i[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}i=t.instance,o=i.getAttribute("data-precedence"),s=n.get(o)||a,s===a&&n.set(null,i),n.set(o,i),this.count++,a=tl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ls={$$typeof:Ht,Provider:null,Consumer:null,_currentValue:Fn,_currentValue2:Fn,_threadCount:0};function Kw(e,t,n,a,i,s,o,l,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.hiddenUpdates=Gl(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Wy(e,t,n,a,i,s,o,l,r,c,d,f){return e=new Kw(e,t,n,o,r,c,d,f,l),t=1,s===!0&&(t|=24),s=We(3,null,null,t),e.current=s,s.stateNode=e,t=Lu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},Vu(s),e}function Xy(e){return e?(e=Ma,e):Ma}function Fy(e,t,n,a,i,s){i=Xy(i),a.context===null?a.context=i:a.pendingContext=i,a=xn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=wn(e,a,t),n!==null&&(Pe(n,e,t),Ui(n,e,t))}function xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ud(e,t){xh(e,t),(e=e.alternate)&&xh(e,t)}function $y(e){if(e.tag===13||e.tag===31){var t=ua(e,67108864);t!==null&&Pe(t,e,67108864),ud(e,67108864)}}function wh(e){if(e.tag===13||e.tag===31){var t=Ze();t=wu(t);var n=ua(e,t);n!==null&&Pe(n,e,t),ud(e,t)}}var al=!0;function Qw(e,t,n,a){var i=L.T;L.T=null;var s=G.p;try{G.p=2,dd(e,t,n,a)}finally{G.p=s,L.T=i}}function Zw(e,t,n,a){var i=L.T;L.T=null;var s=G.p;try{G.p=8,dd(e,t,n,a)}finally{G.p=s,L.T=i}}function dd(e,t,n,a){if(al){var i=Vc(a);if(i===null)br(e,t,a,il,n),Sh(e,a);else if(e1(i,e,t,n,a))a.stopPropagation();else if(Sh(e,a),t&4&&-1<Jw.indexOf(e)){for(;i!==null;){var s=oi(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=Pn(s.pendingLanes);if(o!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var r=1<<31-Qe(o);l.entanglements[1]|=r,o&=~r}jt(s),!(Y&6)&&(Xo=$e()+500,Es(0))}}break;case 31:case 13:l=ua(s,2),l!==null&&Pe(l,s,2),Nl(),ud(s,2)}if(s=Vc(a),s===null&&br(e,t,a,il,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else br(e,t,a,null,n)}}function Vc(e){return e=ku(e),fd(e)}var il=null;function fd(e){if(il=null,e=Ta(e),e!==null){var t=ys(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=pp(t),e!==null)return e;e=null}else if(n===31){if(e=gp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return il=e,null}function Ky(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vb()){case xp:return 2;case wp:return 8;case zo:case Hb:return 32;case Sp:return 268435456;default:return 32}default:return 32}}var Hc=!1,An=null,kn=null,En=null,rs=new Map,cs=new Map,dn=[],Jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sh(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(t.pointerId)}}function Si(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&$y(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function e1(e,t,n,a,i){switch(t){case"focusin":return An=Si(An,e,t,n,a,i),!0;case"dragenter":return kn=Si(kn,e,t,n,a,i),!0;case"mouseover":return En=Si(En,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return rs.set(s,Si(rs.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,cs.set(s,Si(cs.get(s)||null,e,t,n,a,i)),!0}return!1}function Qy(e){var t=Ta(e.target);if(t!==null){var n=ys(t);if(n!==null){if(t=n.tag,t===13){if(t=pp(n),t!==null){e.blockedOn=t,of(e.priority,function(){wh(n)});return}}else if(t===31){if(t=gp(n),t!==null){e.blockedOn=t,of(e.priority,function(){wh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ac=a,n.target.dispatchEvent(a),ac=null}else return t=oi(n),t!==null&&$y(t),e.blockedOn=n,!1;t.shift()}return!0}function Th(e,t,n){xo(e)&&n.delete(t)}function t1(){Hc=!1,An!==null&&xo(An)&&(An=null),kn!==null&&xo(kn)&&(kn=null),En!==null&&xo(En)&&(En=null),rs.forEach(Th),cs.forEach(Th)}function Zs(e,t){e.blockedOn===t&&(e.blockedOn=null,Hc||(Hc=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,t1)))}var Js=null;function Ah(e){Js!==e&&(Js=e,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,function(){Js===e&&(Js=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(fd(a||n)===null)continue;break}var s=oi(n);s!==null&&(e.splice(t,3),t-=3,bc(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function ni(e){function t(r){return Zs(r,e)}An!==null&&Zs(An,e),kn!==null&&Zs(kn,e),En!==null&&Zs(En,e),rs.forEach(t),cs.forEach(t);for(var n=0;n<dn.length;n++){var a=dn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Qy(n),n.blockedOn===null&&dn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],o=i[qe]||null;if(typeof s=="function")o||Ah(n);else if(o){var l=null;if(s&&s.hasAttribute("formAction")){if(i=s,o=s[qe]||null)l=o.formAction;else if(fd(i)!==null)continue}else l=o.action;typeof l=="function"?n[a+1]=l:(n.splice(a,3),a-=3),Ah(n)}}}function Zy(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function hd(e){this._internalRoot=e}Dl.prototype.render=hd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));var n=t.current,a=Ze();Fy(n,a,e,t,null,null)};Dl.prototype.unmount=hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fy(e.current,2,null,e,null,null),Nl(),t[si]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Qy(e)}};var kh=hp.version;if(kh!=="19.2.4")throw Error(k(527,kh,"19.2.4"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Db(t),e=e!==null?yp(e):null,e=e===null?null:e.stateNode,e};var n1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{vs=eo.inject(n1),Ke=eo}catch{}}ml.createRoot=function(e,t){if(!mp(e))throw Error(k(299));var n=!1,a="",i=Yg,s=Gg,o=Ig;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Wy(e,1,!1,null,null,n,a,null,i,s,o,Zy),e[si]=t.current,ld(e),new hd(t)};ml.hydrateRoot=function(e,t,n){if(!mp(e))throw Error(k(299));var a=!1,i="",s=Yg,o=Gg,l=Ig,r=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),t=Wy(e,1,!0,t,n??null,a,i,r,s,o,l,Zy),t.context=Xy(null),n=t.current,a=Ze(),a=wu(a),i=xn(a),i.callback=null,wn(n,i,a),n=a,t.current.lanes=n,xs(t,n),jt(t),e[si]=t.current,ld(e),new Dl(t)};ml.version="19.2.4";function Jy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy)}catch(e){console.error(e)}}Jy(),lp.exports=ml;var a1=lp.exports;/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Eh="popstate";function i1(e={}){function t(i,s){let{pathname:o="/",search:l="",hash:r=""}=fa(i.location.hash.substring(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),_c("",{pathname:o,search:l,hash:r},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let r=i.location.href,c=r.indexOf("#");l=c===-1?r:r.slice(0,c)}return l+"#"+(typeof s=="string"?s:us(s))}function a(i,s){bt(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return o1(t,n,a,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s1(){return Math.random().toString(36).substring(2,10)}function Ch(e,t){return{usr:e.state,key:e.key,idx:t}}function _c(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?fa(t):t,state:n,key:t&&t.key||a||s1()}}function us({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function fa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function o1(e,t,n,a={}){let{window:i=document.defaultView,v5Compat:s=!1}=a,o=i.history,l="POP",r=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function f(){l="POP";let x=d(),p=x==null?null:x-c;c=x,r&&r({action:l,location:S.location,delta:p})}function h(x,p){l="PUSH";let m=_c(S.location,x,p);n&&n(m,x),c=d()+1;let y=Ch(m,c),b=S.createHref(m);try{o.pushState(y,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(b)}s&&r&&r({action:l,location:S.location,delta:1})}function g(x,p){l="REPLACE";let m=_c(S.location,x,p);n&&n(m,x),c=d();let y=Ch(m,c),b=S.createHref(m);o.replaceState(y,"",b),s&&r&&r({action:l,location:S.location,delta:0})}function v(x){return l1(x)}let S={get action(){return l},get location(){return e(i,o)},listen(x){if(r)throw new Error("A history only accepts one active listener");return i.addEventListener(Eh,f),r=x,()=>{i.removeEventListener(Eh,f),r=null}},createHref(x){return t(i,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(x){return o.go(x)}};return S}function l1(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),oe(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:us(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function ev(e,t,n="/"){return r1(e,t,n,!1)}function r1(e,t,n,a){let i=typeof t=="string"?fa(t):t,s=Qt(i.pathname||"/",n);if(s==null)return null;let o=tv(e);c1(o);let l=null;for(let r=0;l==null&&r<o.length;++r){let c=x1(s);l=v1(o[r],c,a)}return l}function tv(e,t=[],n=[],a="",i=!1){let s=(o,l,r=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(a)&&r)return;oe(d.relativePath.startsWith(a),`Absolute route path "${d.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(a.length)}let f=It([a,d.relativePath]),h=n.concat(d);o.children&&o.children.length>0&&(oe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),tv(o.children,t,h,f,r)),!(o.path==null&&!o.index)&&t.push({path:f,score:g1(f,o.index),routesMeta:h})};return e.forEach((o,l)=>{var r;if(o.path===""||!((r=o.path)!=null&&r.includes("?")))s(o,l);else for(let c of nv(o.path))s(o,l,!0,c)}),t}function nv(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let o=nv(a.join("/")),l=[];return l.push(...o.map(r=>r===""?s:[s,r].join("/"))),i&&l.push(...o),l.map(r=>e.startsWith("/")&&r===""?"/":r)}function c1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y1(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var u1=/^:[\w-]+$/,d1=3,f1=2,h1=1,m1=10,p1=-2,Nh=e=>e==="*";function g1(e,t){let n=e.split("/"),a=n.length;return n.some(Nh)&&(a+=p1),t&&(a+=f1),n.filter(i=>!Nh(i)).reduce((i,s)=>i+(u1.test(s)?d1:s===""?h1:m1),a)}function y1(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function v1(e,t,n=!1){let{routesMeta:a}=e,i={},s="/",o=[];for(let l=0;l<a.length;++l){let r=a[l],c=l===a.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=sl({path:r.relativePath,caseSensitive:r.caseSensitive,end:c},d),h=r.route;if(!f&&c&&n&&!a[a.length-1].route.index&&(f=sl({path:r.relativePath,caseSensitive:r.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:It([s,f.pathname]),pathnameBase:A1(It([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=It([s,f.pathnameBase]))}return o}function sl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=b1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((c,{paramName:d,isOptional:f},h)=>{if(d==="*"){let v=l[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[h];return f&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function b1(e,t=!1,n=!0){bt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,r)=>(a.push({paramName:l,isOptional:r!=null}),r?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function x1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Qt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}var w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function S1(e,t="/"){let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?fa(e):e,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=Mh(n.substring(1),"/"):s=Mh(n,t)):s=t,{pathname:s,search:k1(a),hash:E1(i)}}function Mh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sr(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function T1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function av(e){let t=T1(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function iv(e,t,n,a=!1){let i;typeof e=="string"?i=fa(e):(i={...e},oe(!i.pathname||!i.pathname.includes("?"),Sr("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Sr("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Sr("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=t.length-1;if(!a&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let r=S1(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!r.pathname.endsWith("/")&&(c||d)&&(r.pathname+="/"),r}var It=e=>e.join("/").replace(/\/\/+/g,"/"),A1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),k1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,C1=class{constructor(e,t,n,a=!1){this.status=e,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function N1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function M1(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ov(e,t){let n=e;if(typeof n!="string"||!w1.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,i=!1;if(sv)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=Qt(o.pathname,t);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{bt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var lv=["POST","PUT","PATCH","DELETE"];new Set(lv);var j1=["GET",...lv];new Set(j1);var fi=w.createContext(null);fi.displayName="DataRouter";var Rl=w.createContext(null);Rl.displayName="DataRouterState";var D1=w.createContext(!1),rv=w.createContext({isTransitioning:!1});rv.displayName="ViewTransition";var R1=w.createContext(new Map);R1.displayName="Fetchers";var z1=w.createContext(null);z1.displayName="Await";var ht=w.createContext(null);ht.displayName="Navigation";var Ms=w.createContext(null);Ms.displayName="Location";var Dt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Dt.displayName="Route";var md=w.createContext(null);md.displayName="RouteError";var cv="REACT_ROUTER_ERROR",B1="REDIRECT",L1="ROUTE_ERROR_RESPONSE";function O1(e){if(e.startsWith(`${cv}:${B1}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function U1(e){if(e.startsWith(`${cv}:${L1}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new C1(t.status,t.statusText,t.data)}catch{}}function V1(e,{relative:t}={}){oe(js(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=w.useContext(ht),{hash:i,pathname:s,search:o}=Ds(e,{relative:t}),l=s;return n!=="/"&&(l=s==="/"?n:It([n,s])),a.createHref({pathname:l,search:o,hash:i})}function js(){return w.useContext(Ms)!=null}function Ln(){return oe(js(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Ms).location}var uv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dv(e){w.useContext(ht).static||w.useLayoutEffect(e)}function pd(){let{isDataRoute:e}=w.useContext(Dt);return e?Z1():H1()}function H1(){oe(js(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(fi),{basename:t,navigator:n}=w.useContext(ht),{matches:a}=w.useContext(Dt),{pathname:i}=Ln(),s=JSON.stringify(av(a)),o=w.useRef(!1);return dv(()=>{o.current=!0}),w.useCallback((r,c={})=>{if(bt(o.current,uv),!o.current)return;if(typeof r=="number"){n.go(r);return}let d=iv(r,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:It([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,s,i,e])}w.createContext(null);function _1(){let{matches:e}=w.useContext(Dt),t=e[e.length-1];return t?t.params:{}}function Ds(e,{relative:t}={}){let{matches:n}=w.useContext(Dt),{pathname:a}=Ln(),i=JSON.stringify(av(n));return w.useMemo(()=>iv(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function P1(e,t){return fv(e,t)}function fv(e,t,n,a,i){var m;oe(js(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=w.useContext(ht),{matches:o}=w.useContext(Dt),l=o[o.length-1],r=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",f=l&&l.route;{let y=f&&f.path||"";mv(c,!f||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let h=Ln(),g;if(t){let y=typeof t=="string"?fa(t):t;oe(d==="/"||((m=y.pathname)==null?void 0:m.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),g=y}else g=h;let v=g.pathname||"/",S=v;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(y.length).join("/")}let x=ev(e,{pathname:S});bt(f||x!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),bt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let p=W1(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},r,y.params),pathname:It([d,s.encodeLocation?s.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:It([d,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),o,n,a,i);return t&&p?w.createElement(Ms.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},p):p}function q1(){let e=Q1(),t=N1(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:s},"ErrorBoundary")," or"," ",w.createElement("code",{style:s},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}var Y1=w.createElement(q1,null),hv=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=U1(e.digest);n&&(e=n)}let t=e!==void 0?w.createElement(Dt.Provider,{value:this.props.routeContext},w.createElement(md.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?w.createElement(G1,{error:e},t):t}};hv.contextType=D1;var Tr=new WeakMap;function G1({children:e,error:t}){let{basename:n}=w.useContext(ht);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=O1(t.digest);if(a){let i=Tr.get(t);if(i)throw i;let s=ov(a.location,n);if(sv&&!Tr.get(t))if(s.isExternal||a.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:a.replace}));throw Tr.set(t,o),o}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}function I1({routeContext:e,match:t,children:n}){let a=w.useContext(fi);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Dt.Provider,{value:e},n)}function W1(e,t=[],n=null,a=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=n==null?void 0:n.errors;if(o!=null){let d=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);oe(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,r=-1;if(n)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(r=d),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,r>=0?s=s.slice(0,r+1):s=[s[0]];break}}}let c=n&&a?(d,f)=>{var h,g;a(d,{location:n.location,params:((g=(h=n.matches)==null?void 0:h[0])==null?void 0:g.params)??{},unstable_pattern:M1(n.matches),errorInfo:f})}:void 0;return s.reduceRight((d,f,h)=>{let g,v=!1,S=null,x=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,S=f.route.errorElement||Y1,l&&(r<0&&h===0?(mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,x=null):r===h&&(v=!0,x=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),m=()=>{let y;return g?y=S:v?y=x:f.route.Component?y=w.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,w.createElement(I1,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(hv,{location:n.location,revalidation:n.revalidation,component:S,error:g,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:c}):m()},null)}function gd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X1(e){let t=w.useContext(fi);return oe(t,gd(e)),t}function F1(e){let t=w.useContext(Rl);return oe(t,gd(e)),t}function $1(e){let t=w.useContext(Dt);return oe(t,gd(e)),t}function yd(e){let t=$1(e),n=t.matches[t.matches.length-1];return oe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function K1(){return yd("useRouteId")}function Q1(){var a;let e=w.useContext(md),t=F1("useRouteError"),n=yd("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function Z1(){let{router:e}=X1("useNavigate"),t=yd("useNavigate"),n=w.useRef(!1);return dv(()=>{n.current=!0}),w.useCallback(async(i,s={})=>{bt(n.current,uv),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var jh={};function mv(e,t,n){!t&&!jh[e]&&(jh[e]=!0,bt(!1,n))}w.memo(J1);function J1({routes:e,future:t,state:n,onError:a}){return fv(e,void 0,n,a,t)}function Gn(e){oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eS({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){oe(!js(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),r=w.useMemo(()=>({basename:l,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=fa(n));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:g="default"}=n,v=w.useMemo(()=>{let S=Qt(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:h,key:g},navigationType:a}},[l,c,d,f,h,g,a]);return bt(v!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:w.createElement(ht.Provider,{value:r},w.createElement(Ms.Provider,{children:t,value:v}))}function tS({children:e,location:t}){return P1(Pc(e),t)}function Pc(e,t=[]){let n=[];return w.Children.forEach(e,(a,i)=>{if(!w.isValidElement(a))return;let s=[...t,i];if(a.type===w.Fragment){n.push.apply(n,Pc(a.props.children,s));return}oe(a.type===Gn,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),oe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Pc(a.props.children,s)),n.push(o)}),n}var wo="get",So="application/x-www-form-urlencoded";function zl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function nS(e){return zl(e)&&e.tagName.toLowerCase()==="button"}function aS(e){return zl(e)&&e.tagName.toLowerCase()==="form"}function iS(e){return zl(e)&&e.tagName.toLowerCase()==="input"}function sS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oS(e,t){return e.button===0&&(!t||t==="_self")&&!sS(e)}var to=null;function lS(){if(to===null)try{new FormData(document.createElement("form"),0),to=!1}catch{to=!0}return to}var rS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ar(e){return e!=null&&!rS.has(e)?(bt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${So}"`),null):e}function cS(e,t){let n,a,i,s,o;if(aS(e)){let l=e.getAttribute("action");a=l?Qt(l,t):null,n=e.getAttribute("method")||wo,i=Ar(e.getAttribute("enctype"))||So,s=new FormData(e)}else if(nS(e)||iS(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let r=e.getAttribute("formaction")||l.getAttribute("action");if(a=r?Qt(r,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||wo,i=Ar(e.getAttribute("formenctype"))||Ar(l.getAttribute("enctype"))||So,s=new FormData(l,e),!lS()){let{name:c,type:d,value:f}=e;if(d==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,f)}}else{if(zl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=wo,a=null,i=So,o=e}return s&&i==="text/plain"&&(o=s,s=void 0),{action:a,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vd(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uS(e,t,n,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:t&&Qt(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function dS(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fS(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function hS(e,t,n){let a=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let o=await dS(s,n);return o.links?o.links():[]}return[]}));return yS(a.flat(1).filter(fS).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Dh(e,t,n,a,i,s){let o=(r,c)=>n[c]?r.route.id!==n[c].route.id:!0,l=(r,c)=>{var d;return n[c].pathname!==r.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==r.params["*"]};return s==="assets"?t.filter((r,c)=>o(r,c)||l(r,c)):s==="data"?t.filter((r,c)=>{var f;let d=a.routes[r.route.id];if(!d||!d.hasLoader)return!1;if(o(r,c)||l(r,c))return!0;if(r.route.shouldRevalidate){let h=r.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:r.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function mS(e,t,{includeHydrateFallback:n}={}){return pS(e.map(a=>{let i=t.routes[a.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function pS(e){return[...new Set(e)]}function gS(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function yS(e,t){let n=new Set;return new Set(t),e.reduce((a,i)=>{let s=JSON.stringify(gS(i));return n.has(s)||(n.add(s),a.push({key:s,link:i})),a},[])}function pv(){let e=w.useContext(fi);return vd(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function vS(){let e=w.useContext(Rl);return vd(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var bd=w.createContext(void 0);bd.displayName="FrameworkContext";function gv(){let e=w.useContext(bd);return vd(e,"You must render this element inside a <HydratedRouter> element"),e}function bS(e,t){let n=w.useContext(bd),[a,i]=w.useState(!1),[s,o]=w.useState(!1),{onFocus:l,onBlur:r,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,h=w.useRef(null);w.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let S=p=>{p.forEach(m=>{o(m.isIntersecting)})},x=new IntersectionObserver(S,{threshold:.5});return h.current&&x.observe(h.current),()=>{x.disconnect()}}},[e]),w.useEffect(()=>{if(a){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[a]);let g=()=>{i(!0)},v=()=>{i(!1),o(!1)};return n?e!=="intent"?[s,h,{}]:[s,h,{onFocus:Ti(l,g),onBlur:Ti(r,v),onMouseEnter:Ti(c,g),onMouseLeave:Ti(d,v),onTouchStart:Ti(f,g)}]:[!1,h,{}]}function Ti(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xS({page:e,...t}){let{router:n}=pv(),a=w.useMemo(()=>ev(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?w.createElement(SS,{page:e,matches:a,...t}):null}function wS(e){let{manifest:t,routeModules:n}=gv(),[a,i]=w.useState([]);return w.useEffect(()=>{let s=!1;return hS(e,t,n).then(o=>{s||i(o)}),()=>{s=!0}},[e,t,n]),a}function SS({page:e,matches:t,...n}){let a=Ln(),{future:i,manifest:s,routeModules:o}=gv(),{basename:l}=pv(),{loaderData:r,matches:c}=vS(),d=w.useMemo(()=>Dh(e,t,c,s,a,"data"),[e,t,c,s,a]),f=w.useMemo(()=>Dh(e,t,c,s,a,"assets"),[e,t,c,s,a]),h=w.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let S=new Set,x=!1;if(t.forEach(m=>{var b;let y=s.routes[m.route.id];!y||!y.hasLoader||(!d.some(T=>T.route.id===m.route.id)&&m.route.id in r&&((b=o[m.route.id])!=null&&b.shouldRevalidate)||y.hasClientLoader?x=!0:S.add(m.route.id))}),S.size===0)return[];let p=uS(e,l,i.unstable_trailingSlashAwareDataRequests,"data");return x&&S.size>0&&p.searchParams.set("_routes",t.filter(m=>S.has(m.route.id)).map(m=>m.route.id).join(",")),[p.pathname+p.search]},[l,i.unstable_trailingSlashAwareDataRequests,r,a,s,d,t,e,o]),g=w.useMemo(()=>mS(f,s),[f,s]),v=wS(f);return w.createElement(w.Fragment,null,h.map(S=>w.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...n})),g.map(S=>w.createElement("link",{key:S,rel:"modulepreload",href:S,...n})),v.map(({key:S,link:x})=>w.createElement("link",{key:S,nonce:n.nonce,...x,crossOrigin:x.crossOrigin??n.crossOrigin})))}function TS(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var AS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{AS&&(window.__reactRouterVersion="7.13.0")}catch{}function kS({basename:e,children:t,unstable_useTransitions:n,window:a}){let i=w.useRef();i.current==null&&(i.current=i1({window:a,v5Compat:!0}));let s=i.current,[o,l]=w.useState({action:s.action,location:s.location}),r=w.useCallback(c=>{n===!1?l(c):w.startTransition(()=>l(c))},[n]);return w.useLayoutEffect(()=>s.listen(r),[s,r]),w.createElement(eS,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n})}var yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=w.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:i,reloadDocument:s,replace:o,state:l,target:r,to:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:h,...g},v){let{basename:S,unstable_useTransitions:x}=w.useContext(ht),p=typeof c=="string"&&yv.test(c),m=ov(c,S);c=m.to;let y=V1(c,{relative:i}),[b,T,M]=bS(a,g),E=MS(c,{replace:o,state:l,target:r,preventScrollReset:d,relative:i,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:x});function A(z){t&&t(z),z.defaultPrevented||E(z)}let N=w.createElement("a",{...g,...M,href:m.absoluteURL||y,onClick:m.isExternal||s?t:A,ref:TS(v,T),target:r,"data-discover":!p&&n==="render"?"true":void 0});return b&&!p?w.createElement(w.Fragment,null,N,w.createElement(xS,{page:y})):N});Fe.displayName="Link";var ES=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:i=!1,style:s,to:o,viewTransition:l,children:r,...c},d){let f=Ds(o,{relative:c.relative}),h=Ln(),g=w.useContext(Rl),{navigator:v,basename:S}=w.useContext(ht),x=g!=null&&BS(f)&&l===!0,p=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,m=h.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase()),y&&S&&(y=Qt(y,S)||y);const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let T=m===p||!i&&m.startsWith(p)&&m.charAt(b)==="/",M=y!=null&&(y===p||!i&&y.startsWith(p)&&y.charAt(p.length)==="/"),E={isActive:T,isPending:M,isTransitioning:x},A=T?t:void 0,N;typeof a=="function"?N=a(E):N=[a,T?"active":null,M?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let z=typeof s=="function"?s(E):s;return w.createElement(Fe,{...c,"aria-current":A,className:N,ref:d,style:z,to:o,viewTransition:l},typeof r=="function"?r(E):r)});ES.displayName="NavLink";var CS=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:i,state:s,method:o=wo,action:l,onSubmit:r,relative:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:h,...g},v)=>{let{unstable_useTransitions:S}=w.useContext(ht),x=RS(),p=zS(l,{relative:c}),m=o.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&yv.test(l),b=T=>{if(r&&r(T),T.defaultPrevented)return;T.preventDefault();let M=T.nativeEvent.submitter,E=(M==null?void 0:M.getAttribute("formmethod"))||o,A=()=>x(M||T.currentTarget,{fetcherKey:t,method:E,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:h});S&&n!==!1?w.startTransition(()=>A()):A()};return w.createElement("form",{ref:v,method:m,action:p,onSubmit:a?r:b,...g,"data-discover":!y&&e==="render"?"true":void 0})});CS.displayName="Form";function NS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vv(e){let t=w.useContext(fi);return oe(t,NS(e)),t}function MS(e,{target:t,replace:n,state:a,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:r}={}){let c=pd(),d=Ln(),f=Ds(e,{relative:s});return w.useCallback(h=>{if(oS(h,t)){h.preventDefault();let g=n!==void 0?n:us(d)===us(f),v=()=>c(e,{replace:g,state:a,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l});r?w.startTransition(()=>v()):v()}},[d,c,f,n,a,t,e,i,s,o,l,r])}var jS=0,DS=()=>`__${String(++jS)}__`;function RS(){let{router:e}=vv("useSubmit"),{basename:t}=w.useContext(ht),n=K1(),a=e.fetch,i=e.navigate;return w.useCallback(async(s,o={})=>{let{action:l,method:r,encType:c,formData:d,body:f}=cS(s,t);if(o.navigate===!1){let h=o.fetcherKey||DS();await a(h,n,o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||r,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||r,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,i,t,n])}function zS(e,{relative:t}={}){let{basename:n}=w.useContext(ht),a=w.useContext(Dt);oe(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),s={...Ds(e||".",{relative:t})},o=Ln();if(e==null){s.search=o.search;let l=new URLSearchParams(s.search),r=l.getAll("index");if(r.some(d=>d==="")){l.delete("index"),r.filter(f=>f).forEach(f=>l.append("index",f));let d=l.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:It([n,s.pathname])),us(s)}function BS(e,{relative:t}={}){let n=w.useContext(rv);oe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=vv("useViewTransitionState"),i=Ds(e,{relative:t});if(!n.isTransitioning)return!1;let s=Qt(n.currentLocation.pathname,a)||n.currentLocation.pathname,o=Qt(n.nextLocation.pathname,a)||n.nextLocation.pathname;return sl(i.pathname,o)!=null||sl(i.pathname,s)!=null}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=e=>{const t=OS(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var US={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:i="",children:s,iconNode:o,...l},r)=>w.createElement("svg",{ref:r,...US,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:bv("lucide",i),...!s&&!VS(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,d])=>w.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(e,t)=>{const n=w.forwardRef(({className:a,...i},s)=>w.createElement(HS,{ref:s,iconNode:t,className:bv(`lucide-${LS(Rh(e))}`,`lucide-${e}`,a),...i}));return n.displayName=Rh(e),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],qc=le("arrow-left",_S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],kr=le("arrow-right",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],YS=le("award",qS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Bl=le("book-open",GS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yc=le("check",IS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],XS=le("chevron-left",WS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$S=le("chevron-right",FS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],To=le("circle-check-big",KS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],zh=le("circle-question-mark",QS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],JS=le("circle",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],xv=le("credit-card",eT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],nT=le("house",tT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],iT=le("lightbulb",aT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ds=le("lock",sT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],lT=le("pause",oT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],cT=le("play",rT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Jn=le("sparkles",uT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],fT=le("target",dT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],wv=le("trophy",hT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Sv=le("user",mT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],gT=le("volume-2",pT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vT=le("x",yT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ea=le("zap",bT),Bh=e=>{let t;const n=new Set,a=(c,d)=>{const f=typeof c=="function"?c(t):c;if(!Object.is(f,t)){const h=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(g=>g(t,h))}},i=()=>t,l={setState:a,getState:i,getInitialState:()=>r,subscribe:c=>(n.add(c),()=>n.delete(c))},r=t=e(a,i,l);return l},xT=e=>e?Bh(e):Bh,wT=e=>e;function ST(e,t=wT){const n=Hs.useSyncExternalStore(e.subscribe,Hs.useCallback(()=>t(e.getState()),[e,t]),Hs.useCallback(()=>t(e.getInitialState()),[e,t]));return Hs.useDebugValue(n),n}const TT=e=>{const t=xT(e),n=a=>ST(t,a);return Object.assign(n,t),n},AT=e=>TT;function kT(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var s;const o=r=>r===null?null:JSON.parse(r,void 0),l=(s=n.getItem(i))!=null?s:null;return l instanceof Promise?l.then(o):o(l)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const Gc=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(a){return Gc(a)(n)},catch(a){return this}}}catch(n){return{then(a){return this},catch(a){return Gc(a)(n)}}}},ET=(e,t)=>(n,a,i)=>{let s={storage:kT(()=>window.localStorage),partialize:x=>x,version:0,merge:(x,p)=>({...p,...x}),...t},o=!1,l=0;const r=new Set,c=new Set;let d=s.storage;if(!d)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...x)},a,i);const f=()=>{const x=s.partialize({...a()});return d.setItem(s.name,{state:x,version:s.version})},h=i.setState;i.setState=(x,p)=>(h(x,p),f());const g=e((...x)=>(n(...x),f()),a,i);i.getInitialState=()=>g;let v;const S=()=>{var x,p;if(!d)return;const m=++l;o=!1,r.forEach(b=>{var T;return b((T=a())!=null?T:g)});const y=((p=s.onRehydrateStorage)==null?void 0:p.call(s,(x=a())!=null?x:g))||void 0;return Gc(d.getItem.bind(d))(s.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==s.version){if(s.migrate){const T=s.migrate(b.state,b.version);return T instanceof Promise?T.then(M=>[!0,M]):[!0,T]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,b.state];return[!1,void 0]}).then(b=>{var T;if(m!==l)return;const[M,E]=b;if(v=s.merge(E,(T=a())!=null?T:g),n(v,!0),M)return f()}).then(()=>{m===l&&(y==null||y(v,void 0),v=a(),o=!0,c.forEach(b=>b(v)))}).catch(b=>{m===l&&(y==null||y(void 0,b))})};return i.persist={setOptions:x=>{s={...s,...x},x.storage&&(d=x.storage)},clearStorage:()=>{d==null||d.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>S(),hasHydrated:()=>o,onHydrate:x=>(r.add(x),()=>{r.delete(x)}),onFinishHydration:x=>(c.add(x),()=>{c.delete(x)})},s.skipHydration||S(),v||g},CT=ET,Lh=[{level:1,xp:0,title:"Freshman Explorer"},{level:2,xp:500,title:"Curious Learner"},{level:3,xp:1500,title:"Knowledge Seeker"},{level:4,xp:3500,title:"Skill Builder"},{level:5,xp:7e3,title:"Rising Scholar"},{level:6,xp:12e3,title:"Academic Achiever"},{level:7,xp:2e4,title:"Master Student"},{level:8,xp:35e3,title:"Wisdom Keeper"},{level:9,xp:55e3,title:"Elite Scholar"},{level:10,xp:8e4,title:"Valedictorian"}],Oh=e=>{let t=Lh[0];for(const n of Lh)if(e>=n.xp)t=n;else break;return t},NT=[{id:"financial-literacy",title:"Financial Literacy",description:"Master money management, budgeting, investing, and more",icon:"💰",badge:"💵",badgeName:"Money Master",isPremium:!1,lessons:[{id:"fl-1",title:"Money Basics & Budgeting",description:"Learn the fundamentals of managing money",xp:25,completed:!1},{id:"fl-2",title:"Banking & Saving Strategies",description:"Understand how banks work and how to save effectively",xp:25,completed:!1},{id:"fl-3",title:"Understanding Credit & Debt",description:"Learn about credit scores, loans, and managing debt",xp:25,completed:!1},{id:"fl-4",title:"Intro to Investing",description:"Start your journey into stocks, bonds, and more",xp:25,completed:!1},{id:"fl-5",title:"Taxes Demystified",description:"Understand how taxes work and why they matter",xp:25,completed:!1},{id:"fl-6",title:"Create Your Financial Plan",description:"Build a real financial plan for your future",xp:50,completed:!1}]},{id:"digital-literacy",title:"Digital Literacy & AI",description:"Navigate the digital world and understand AI",icon:"🤖",badge:"🤖",badgeName:"Digital Native",isPremium:!1,lessons:[{id:"dl-1",title:"How the Internet Works",description:"Understand the technology behind the web",xp:30,completed:!1},{id:"dl-2",title:"Digital Citizenship",description:"Be a responsible digital citizen",xp:30,completed:!1},{id:"dl-3",title:"AI & Machine Learning Basics",description:"Understand how AI works",xp:30,completed:!1},{id:"dl-4",title:"Spotting Misinformation",description:"Learn to identify fake news and scams",xp:30,completed:!1}]},{id:"critical-thinking",title:"Critical Thinking",description:"Develop logic, reasoning, and analytical skills",icon:"🧠",badge:"🔍",badgeName:"Truth Seeker",isPremium:!1,lessons:[{id:"ct-1",title:"Logic & Reasoning",description:"Master the fundamentals of logical thinking",xp:25,completed:!1},{id:"ct-2",title:"Argument Analysis",description:"Learn to break down and evaluate arguments",xp:25,completed:!1},{id:"ct-3",title:"Cognitive Biases",description:"Recognize and avoid mental traps",xp:25,completed:!1},{id:"ct-4",title:"Evaluating Sources",description:"Judge the reliability of information",xp:25,completed:!1},{id:"ct-5",title:"Debate & Persuasion",description:"Learn to argue effectively",xp:25,completed:!1}]},{id:"real-world-math",title:"Real-World Math",description:"Math skills you will actually use in life",icon:"📊",badge:"📐",badgeName:"Number Ninja",isPremium:!1,lessons:[{id:"rm-1",title:"Everyday Math",description:"Quick mental math and practical calculations",xp:30,completed:!1},{id:"rm-2",title:"Statistics in the News",description:"Understand data you see every day",xp:30,completed:!1},{id:"rm-3",title:"Probability & Risk",description:"Make better decisions with probability",xp:30,completed:!1},{id:"rm-4",title:"Math for Personal Finance",description:"Apply math to money decisions",xp:30,completed:!1}]},{id:"global-citizenship",title:"Global Citizenship",description:"Understand how the modern world works",icon:"🌍",badge:"🌍",badgeName:"World Citizen",isPremium:!1,lessons:[{id:"gc-1",title:"How Government Works",description:"Understand political systems",xp:25,completed:!1},{id:"gc-2",title:"Modern World History",description:"1990 to present",xp:25,completed:!1},{id:"gc-3",title:"Global Economics",description:"How the world economy functions",xp:25,completed:!1},{id:"gc-4",title:"Climate & Environment",description:"Understand environmental challenges",xp:25,completed:!1},{id:"gc-5",title:"Social Movements",description:"How change happens",xp:25,completed:!1}]},{id:"communication",title:"Communication Mastery",description:"Write, speak, and present like a pro",icon:"💬",badge:"🎤",badgeName:"Communicator",isPremium:!1,lessons:[{id:"cm-1",title:"Writing That Gets Read",description:"Clear, effective writing",xp:25,completed:!1},{id:"cm-2",title:"Professional Communication",description:"Emails and workplace writing",xp:25,completed:!1},{id:"cm-3",title:"Public Speaking Basics",description:"Overcome fear and speak well",xp:25,completed:!1},{id:"cm-4",title:"Active Listening",description:"The other half of communication",xp:25,completed:!1}]},{id:"health-wellness",title:"Health & Wellness",description:"Take care of your mind and body",icon:"💪",badge:"💪",badgeName:"Wellness Warrior",isPremium:!1,lessons:[{id:"hw-1",title:"Mental Health Fundamentals",description:"Understanding your mental health",xp:20,completed:!1},{id:"hw-2",title:"Stress Management",description:"Techniques for managing stress",xp:20,completed:!1},{id:"hw-3",title:"Sleep Science",description:"Why sleep matters and how to improve it",xp:20,completed:!1},{id:"hw-4",title:"Nutrition & Fitness",description:"Building healthy habits",xp:20,completed:!1},{id:"hw-5",title:"Building Habits",description:"Make good habits stick",xp:20,completed:!1}]},{id:"entrepreneurship",title:"Entrepreneurship",description:"Start a business or build career skills",icon:"🚀",badge:"🚀",badgeName:"Entrepreneur",isPremium:!0,lessons:[{id:"ep-1",title:"Finding Problems Worth Solving",description:"Identify opportunities",xp:35,completed:!1},{id:"ep-2",title:"Business Model Basics",description:"How businesses make money",xp:35,completed:!1},{id:"ep-3",title:"Marketing & Sales",description:"Get customers and close deals",xp:35,completed:!1},{id:"ep-4",title:"Building a Network",description:"Connect with the right people",xp:35,completed:!1},{id:"ep-5",title:"Resume & Interviews",description:"Land the job you want",xp:35,completed:!1},{id:"ep-6",title:"Freelancing & Side Hustles",description:"Make money on your own terms",xp:35,completed:!1},{id:"ep-7",title:"Launch Your Project",description:"Put it all together",xp:70,completed:!1}]},{id:"future-science",title:"Science for the Future",description:"Understand the science shaping tomorrow",icon:"🔬",badge:"🔬",badgeName:"Scientist",isPremium:!0,lessons:[{id:"fs-1",title:"Scientific Method",description:"Think like a scientist",xp:30,completed:!1},{id:"fs-2",title:"Climate Science",description:"Understanding our changing planet",xp:30,completed:!1},{id:"fs-3",title:"Health & Nutrition Science",description:"The science of being healthy",xp:30,completed:!1},{id:"fs-4",title:"Psychology Basics",description:"Understanding the mind",xp:30,completed:!1},{id:"fs-5",title:"Biotechnology & Genetics",description:"The future of medicine",xp:30,completed:!1},{id:"fs-6",title:"Space & Astronomy",description:"Explore the universe",xp:30,completed:!1}]},{id:"creative-expression",title:"Creative Expression",description:"Unleash your creativity",icon:"🎨",badge:"🎨",badgeName:"Creator",isPremium:!0,lessons:[{id:"ce-1",title:"Design Thinking",description:"Solve problems creatively",xp:30,completed:!1},{id:"ce-2",title:"Digital Art & Graphics",description:"Create visual content",xp:30,completed:!1},{id:"ce-3",title:"Music Production",description:"Make your own music",xp:30,completed:!1},{id:"ce-4",title:"Video Creation",description:"Film and edit like a pro",xp:30,completed:!1},{id:"ce-5",title:"Creative Writing",description:"Tell compelling stories",xp:30,completed:!1},{id:"ce-6",title:"Portfolio Building",description:"Showcase your work",xp:30,completed:!1}]}],MT=[{id:"first-lesson",title:"First Steps",description:"Complete your first lesson",icon:"🎯",earned:!1},{id:"streak-7",title:"On Fire",description:"Maintain a 7-day streak",icon:"🔥",earned:!1},{id:"streak-30",title:"Unstoppable",description:"Maintain a 30-day streak",icon:"⚡",earned:!1},{id:"bookworm",title:"Bookworm",description:"Complete 50 lessons",icon:"📚",earned:!1},{id:"perfectionist",title:"Perfectionist",description:"Score 100% on 10 quizzes",icon:"🎯",earned:!1},{id:"well-rounded",title:"Well-Rounded",description:"Complete one module from 5 different subjects",icon:"🌟",earned:!1},{id:"first-module",title:"Module Master",description:"Complete your first full module",icon:"👑",earned:!1}],ha=AT()(CT((e,t)=>({user:null,progress:{xp:0,rank:1,rankTitle:"Freshman Explorer",streak:0,lastLoginDate:"",completedLessons:[],earnedBadges:[],achievements:MT},modules:NT,setUser:(n,a)=>e({user:{name:n,isPremium:a}}),completeLesson:(n,a)=>e(i=>{if(i.progress.completedLessons.includes(n))return i;const s=i.progress.xp+a,o=Oh(s),l=[...i.progress.completedLessons,n],r=[...i.progress.achievements];if(l.length===1){const c=r.findIndex(d=>d.id==="first-lesson");c!==-1&&(r[c]={...r[c],earned:!0,earnedAt:new Date})}if(l.length>=50){const c=r.findIndex(d=>d.id==="bookworm");c!==-1&&(r[c]={...r[c],earned:!0,earnedAt:new Date})}return{progress:{...i.progress,xp:s,rank:o.level,rankTitle:o.title,completedLessons:l,achievements:r},modules:i.modules.map(c=>({...c,lessons:c.lessons.map(d=>d.id===n?{...d,completed:!0}:d)}))}}),claimDailyReward:()=>e(n=>{const a=new Date().toDateString();if(n.progress.lastLoginDate===a)return n;const i=new Date;i.setDate(i.getDate()-1);const o=n.progress.lastLoginDate===i.toDateString()?n.progress.streak+1:1;let l=10;o===7&&(l+=100),o===30&&(l+=500);const r=n.progress.xp+l,c=Oh(r),d=[...n.progress.achievements];if(o>=7){const f=d.findIndex(h=>h.id==="streak-7");f!==-1&&!d[f].earned&&(d[f]={...d[f],earned:!0,earnedAt:new Date})}if(o>=30){const f=d.findIndex(h=>h.id==="streak-30");f!==-1&&!d[f].earned&&(d[f]={...d[f],earned:!0,earnedAt:new Date})}return{progress:{...n.progress,xp:r,rank:c.level,rankTitle:c.title,streak:o,lastLoginDate:a,achievements:d}}}),upgradeToPermium:()=>e(n=>({user:n.user?{...n.user,isPremium:!0}:null}))}),{name:"homeschool-hub-storage"})),jT=[{path:"/",icon:nT,label:"Home"},{path:"/courses",icon:Bl,label:"Courses"},{path:"/achievements",icon:wv,label:"Achievements"},{path:"/profile",icon:Sv,label:"Profile"}];function DT({children:e}){const t=Ln(),{progress:n,user:a}=ha(),i=[0,500,1500,3500,7e3,12e3,2e4,35e3,55e3,8e4,1e5][n.rank]||1e5,s=[0,0,500,1500,3500,7e3,12e3,2e4,35e3,55e3,8e4][n.rank]||0,o=(n.xp-s)/(i-s)*100;return u.jsxs("div",{className:"min-h-screen flex flex-col",children:[u.jsx("header",{className:"bg-slate-800/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50",children:u.jsx("div",{className:"max-w-7xl mx-auto px-4 py-3",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs(Fe,{to:"/",className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-2xl",children:"🎓"}),u.jsx("span",{className:"font-bold text-xl bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent",children:"HomeSchool Hub"})]}),u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsxs("div",{className:"hidden sm:flex items-center gap-3 bg-slate-700/50 rounded-xl px-4 py-2",children:[u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-xs text-slate-400",children:["Level ",n.rank]}),u.jsxs("div",{className:"text-sm font-semibold text-gamify-xp",children:[n.xp.toLocaleString()," XP"]})]}),u.jsx("div",{className:"w-24",children:u.jsx("div",{className:"xp-bar",children:u.jsx("div",{className:"xp-fill",style:{width:`${Math.min(o,100)}%`}})})})]}),n.streak>0&&u.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 text-orange-400 px-3 py-1.5 rounded-lg",children:[u.jsx("span",{children:"🔥"}),u.jsx("span",{className:"font-bold",children:n.streak})]}),(a==null?void 0:a.isPremium)&&u.jsxs("div",{className:"badge-gold",children:[u.jsx(Jn,{className:"w-3 h-3"}),"Premium"]})]})]})})}),u.jsx("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 py-6",children:e}),u.jsx("nav",{className:"bg-slate-800/90 backdrop-blur-md border-t border-slate-700/50 sticky bottom-0",children:u.jsx("div",{className:"max-w-7xl mx-auto px-4",children:u.jsx("div",{className:"flex justify-around py-2",children:jT.map(({path:l,icon:r,label:c})=>{const d=t.pathname===l;return u.jsxs(Fe,{to:l,className:`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${d?"text-primary-400 bg-primary-500/10":"text-slate-400 hover:text-slate-200"}`,children:[u.jsx(r,{className:"w-5 h-5"}),u.jsx("span",{className:"text-xs font-medium",children:c})]},l)})})})})]})}const Tv=w.createContext({});function RT(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Av=typeof window<"u",zT=Av?w.useLayoutEffect:w.useEffect,xd=w.createContext(null);function wd(e,t){e.indexOf(t)===-1&&e.push(t)}function Sd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Nt=(e,t,n)=>n>t?t:n<e?e:n;let Td=()=>{};const Zt={},kv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ev(e){return typeof e=="object"&&e!==null}const Cv=e=>/^0[^.\s]+$/u.test(e);function Ad(e){let t;return()=>(t===void 0&&(t=e()),t)}const dt=e=>e,BT=(e,t)=>n=>t(e(n)),Rs=(...e)=>e.reduce(BT),fs=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class kd{constructor(){this.subscriptions=[]}add(t){return wd(this.subscriptions,t),()=>Sd(this.subscriptions,t)}notify(t,n,a){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,a);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Et=e=>e*1e3,rt=e=>e/1e3;function Nv(e,t){return t?e*(1e3/t):0}const Mv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,LT=1e-7,OT=12;function UT(e,t,n,a,i){let s,o,l=0;do o=t+(n-t)/2,s=Mv(o,a,i)-e,s>0?n=o:t=o;while(Math.abs(s)>LT&&++l<OT);return o}function zs(e,t,n,a){if(e===t&&n===a)return dt;const i=s=>UT(s,0,1,e,n);return s=>s===0||s===1?s:Mv(i(s),t,a)}const jv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Dv=e=>t=>1-e(1-t),Rv=zs(.33,1.53,.69,.99),Ed=Dv(Rv),zv=jv(Ed),Bv=e=>(e*=2)<1?.5*Ed(e):.5*(2-Math.pow(2,-10*(e-1))),Cd=e=>1-Math.sin(Math.acos(e)),Lv=Dv(Cd),Ov=jv(Cd),VT=zs(.42,0,1,1),HT=zs(0,0,.58,1),Uv=zs(.42,0,.58,1),_T=e=>Array.isArray(e)&&typeof e[0]!="number",Vv=e=>Array.isArray(e)&&typeof e[0]=="number",PT={linear:dt,easeIn:VT,easeInOut:Uv,easeOut:HT,circIn:Cd,circInOut:Ov,circOut:Lv,backIn:Ed,backInOut:zv,backOut:Rv,anticipate:Bv},qT=e=>typeof e=="string",Uh=e=>{if(Vv(e)){Td(e.length===4);const[t,n,a,i]=e;return zs(t,n,a,i)}else if(qT(e))return PT[e];return e},no=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function YT(e,t){let n=new Set,a=new Set,i=!1,s=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function r(d){o.has(d)&&(c.schedule(d),e()),d(l)}const c={schedule:(d,f=!1,h=!1)=>{const v=h&&i?n:a;return f&&o.add(d),v.has(d)||v.add(d),d},cancel:d=>{a.delete(d),o.delete(d)},process:d=>{if(l=d,i){s=!0;return}i=!0,[n,a]=[a,n],n.forEach(r),n.clear(),i=!1,s&&(s=!1,c.process(d))}};return c}const GT=40;function Hv(e,t){let n=!1,a=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=no.reduce((y,b)=>(y[b]=YT(s),y),{}),{setup:l,read:r,resolveKeyframes:c,preUpdate:d,update:f,preRender:h,render:g,postRender:v}=o,S=()=>{const y=Zt.useManualTiming?i.timestamp:performance.now();n=!1,Zt.useManualTiming||(i.delta=a?1e3/60:Math.max(Math.min(y-i.timestamp,GT),1)),i.timestamp=y,i.isProcessing=!0,l.process(i),r.process(i),c.process(i),d.process(i),f.process(i),h.process(i),g.process(i),v.process(i),i.isProcessing=!1,n&&t&&(a=!1,e(S))},x=()=>{n=!0,a=!0,i.isProcessing||e(S)};return{schedule:no.reduce((y,b)=>{const T=o[b];return y[b]=(M,E=!1,A=!1)=>(n||x(),T.schedule(M,E,A)),y},{}),cancel:y=>{for(let b=0;b<no.length;b++)o[no[b]].cancel(y)},state:i,steps:o}}const{schedule:Q,cancel:Dn,state:ke,steps:Er}=Hv(typeof requestAnimationFrame<"u"?requestAnimationFrame:dt,!0);let Ao;function IT(){Ao=void 0}const Be={now:()=>(Ao===void 0&&Be.set(ke.isProcessing||Zt.useManualTiming?ke.timestamp:performance.now()),Ao),set:e=>{Ao=e,queueMicrotask(IT)}},_v=e=>t=>typeof t=="string"&&t.startsWith(e),Pv=_v("--"),WT=_v("var(--"),Nd=e=>WT(e)?XT.test(e.split("/*")[0].trim()):!1,XT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Vh(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const hi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},hs={...hi,transform:e=>Nt(0,1,e)},ao={...hi,default:1},Wi=e=>Math.round(e*1e5)/1e5,Md=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function FT(e){return e==null}const $T=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jd=(e,t)=>n=>!!(typeof n=="string"&&$T.test(n)&&n.startsWith(e)||t&&!FT(n)&&Object.prototype.hasOwnProperty.call(n,t)),qv=(e,t,n)=>a=>{if(typeof a!="string")return a;const[i,s,o,l]=a.match(Md);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},KT=e=>Nt(0,255,e),Cr={...hi,transform:e=>Math.round(KT(e))},Wn={test:jd("rgb","red"),parse:qv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+Cr.transform(e)+", "+Cr.transform(t)+", "+Cr.transform(n)+", "+Wi(hs.transform(a))+")"};function QT(e){let t="",n="",a="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,a+=a,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:i?parseInt(i,16)/255:1}}const Ic={test:jd("#"),parse:QT,transform:Wn.transform},Bs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),an=Bs("deg"),Ct=Bs("%"),R=Bs("px"),ZT=Bs("vh"),JT=Bs("vw"),Hh={...Ct,parse:e=>Ct.parse(e)/100,transform:e=>Ct.transform(e*100)},za={test:jd("hsl","hue"),parse:qv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Ct.transform(Wi(t))+", "+Ct.transform(Wi(n))+", "+Wi(hs.transform(a))+")"},he={test:e=>Wn.test(e)||Ic.test(e)||za.test(e),parse:e=>Wn.test(e)?Wn.parse(e):za.test(e)?za.parse(e):Ic.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Wn.transform(e):za.transform(e),getAnimatableNone:e=>{const t=he.parse(e);return t.alpha=0,he.transform(t)}},e2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function t2(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Md))==null?void 0:t.length)||0)+(((n=e.match(e2))==null?void 0:n.length)||0)>0}const Yv="number",Gv="color",n2="var",a2="var(",_h="${}",i2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ms(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(i2,r=>(he.test(r)?(a.color.push(s),i.push(Gv),n.push(he.parse(r))):r.startsWith(a2)?(a.var.push(s),i.push(n2),n.push(r)):(a.number.push(s),i.push(Yv),n.push(parseFloat(r))),++s,_h)).split(_h);return{values:n,split:l,indexes:a,types:i}}function Iv(e){return ms(e).values}function Wv(e){const{split:t,types:n}=ms(e),a=t.length;return i=>{let s="";for(let o=0;o<a;o++)if(s+=t[o],i[o]!==void 0){const l=n[o];l===Yv?s+=Wi(i[o]):l===Gv?s+=he.transform(i[o]):s+=i[o]}return s}}const s2=e=>typeof e=="number"?0:he.test(e)?he.getAnimatableNone(e):e;function o2(e){const t=Iv(e);return Wv(e)(t.map(s2))}const Rn={test:t2,parse:Iv,createTransformer:Wv,getAnimatableNone:o2};function Nr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function l2({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,r=2*n-l;i=Nr(r,l,e+1/3),s=Nr(r,l,e),o=Nr(r,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:a}}function ol(e,t){return n=>n>0?t:e}const se=(e,t,n)=>e+(t-e)*n,Mr=(e,t,n)=>{const a=e*e,i=n*(t*t-a)+a;return i<0?0:Math.sqrt(i)},r2=[Ic,Wn,za],c2=e=>r2.find(t=>t.test(e));function Ph(e){const t=c2(e);if(!t)return!1;let n=t.parse(e);return t===za&&(n=l2(n)),n}const qh=(e,t)=>{const n=Ph(e),a=Ph(t);if(!n||!a)return ol(e,t);const i={...n};return s=>(i.red=Mr(n.red,a.red,s),i.green=Mr(n.green,a.green,s),i.blue=Mr(n.blue,a.blue,s),i.alpha=se(n.alpha,a.alpha,s),Wn.transform(i))},Wc=new Set(["none","hidden"]);function u2(e,t){return Wc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function d2(e,t){return n=>se(e,t,n)}function Dd(e){return typeof e=="number"?d2:typeof e=="string"?Nd(e)?ol:he.test(e)?qh:m2:Array.isArray(e)?Xv:typeof e=="object"?he.test(e)?qh:f2:ol}function Xv(e,t){const n=[...e],a=n.length,i=e.map((s,o)=>Dd(s)(s,t[o]));return s=>{for(let o=0;o<a;o++)n[o]=i[o](s);return n}}function f2(e,t){const n={...e,...t},a={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(a[i]=Dd(e[i])(e[i],t[i]));return i=>{for(const s in a)n[s]=a[s](i);return n}}function h2(e,t){const n=[],a={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][a[s]],l=e.values[o]??0;n[i]=l,a[s]++}return n}const m2=(e,t)=>{const n=Rn.createTransformer(t),a=ms(e),i=ms(t);return a.indexes.var.length===i.indexes.var.length&&a.indexes.color.length===i.indexes.color.length&&a.indexes.number.length>=i.indexes.number.length?Wc.has(e)&&!i.values.length||Wc.has(t)&&!a.values.length?u2(e,t):Rs(Xv(h2(a,i),i.values),n):ol(e,t)};function Fv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?se(e,t,n):Dd(e)(e,t)}const p2=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Q.update(t,n),stop:()=>Dn(t),now:()=>ke.isProcessing?ke.timestamp:Be.now()}},$v=(e,t,n=10)=>{let a="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)a+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},ll=2e4;function Rd(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<ll;)t+=n,a=e.next(t);return t>=ll?1/0:t}function g2(e,t=100,n){const a=n({...e,keyframes:[0,t]}),i=Math.min(Rd(a),ll);return{type:"keyframes",ease:s=>a.next(i*s).value/t,duration:rt(i)}}const y2=5;function Kv(e,t,n){const a=Math.max(t-y2,0);return Nv(n-e(a),t-a)}const ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jr=.001;function v2({duration:e=ce.duration,bounce:t=ce.bounce,velocity:n=ce.velocity,mass:a=ce.mass}){let i,s,o=1-t;o=Nt(ce.minDamping,ce.maxDamping,o),e=Nt(ce.minDuration,ce.maxDuration,rt(e)),o<1?(i=c=>{const d=c*o,f=d*e,h=d-n,g=Xc(c,o),v=Math.exp(-f);return jr-h/g*v},s=c=>{const f=c*o*e,h=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*e,v=Math.exp(-f),S=Xc(Math.pow(c,2),o);return(-i(c)+jr>0?-1:1)*((h-g)*v)/S}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-jr+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const l=5/e,r=x2(i,s,l);if(e=Et(e),isNaN(r))return{stiffness:ce.stiffness,damping:ce.damping,duration:e};{const c=Math.pow(r,2)*a;return{stiffness:c,damping:o*2*Math.sqrt(a*c),duration:e}}}const b2=12;function x2(e,t,n){let a=n;for(let i=1;i<b2;i++)a=a-e(a)/t(a);return a}function Xc(e,t){return e*Math.sqrt(1-t*t)}const w2=["duration","bounce"],S2=["stiffness","damping","mass"];function Yh(e,t){return t.some(n=>e[n]!==void 0)}function T2(e){let t={velocity:ce.velocity,stiffness:ce.stiffness,damping:ce.damping,mass:ce.mass,isResolvedFromDuration:!1,...e};if(!Yh(e,S2)&&Yh(e,w2))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),i=a*a,s=2*Nt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ce.mass,stiffness:i,damping:s}}else{const n=v2(e);t={...t,...n,mass:ce.mass},t.isResolvedFromDuration=!0}return t}function rl(e=ce.visualDuration,t=ce.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:r,damping:c,mass:d,duration:f,velocity:h,isResolvedFromDuration:g}=T2({...n,velocity:-rt(n.velocity||0)}),v=h||0,S=c/(2*Math.sqrt(r*d)),x=o-s,p=rt(Math.sqrt(r/d)),m=Math.abs(x)<5;a||(a=m?ce.restSpeed.granular:ce.restSpeed.default),i||(i=m?ce.restDelta.granular:ce.restDelta.default);let y;if(S<1){const T=Xc(p,S);y=M=>{const E=Math.exp(-S*p*M);return o-E*((v+S*p*x)/T*Math.sin(T*M)+x*Math.cos(T*M))}}else if(S===1)y=T=>o-Math.exp(-p*T)*(x+(v+p*x)*T);else{const T=p*Math.sqrt(S*S-1);y=M=>{const E=Math.exp(-S*p*M),A=Math.min(T*M,300);return o-E*((v+S*p*x)*Math.sinh(A)+T*x*Math.cosh(A))/T}}const b={calculatedDuration:g&&f||null,next:T=>{const M=y(T);if(g)l.done=T>=f;else{let E=T===0?v:0;S<1&&(E=T===0?Et(v):Kv(y,T,M));const A=Math.abs(E)<=a,N=Math.abs(o-M)<=i;l.done=A&&N}return l.value=l.done?o:M,l},toString:()=>{const T=Math.min(Rd(b),ll),M=$v(E=>b.next(T*E).value,T,30);return T+"ms "+M},toTransition:()=>{}};return b}rl.applyToOptions=e=>{const t=g2(e,100,rl);return e.ease=t.ease,e.duration=Et(t.duration),e.type="keyframes",e};function Fc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:r,restDelta:c=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},g=A=>l!==void 0&&A<l||r!==void 0&&A>r,v=A=>l===void 0?r:r===void 0||Math.abs(l-A)<Math.abs(r-A)?l:r;let S=n*t;const x=f+S,p=o===void 0?x:o(x);p!==x&&(S=p-f);const m=A=>-S*Math.exp(-A/a),y=A=>p+m(A),b=A=>{const N=m(A),z=y(A);h.done=Math.abs(N)<=c,h.value=h.done?p:z};let T,M;const E=A=>{g(h.value)&&(T=A,M=rl({keyframes:[h.value,v(h.value)],velocity:Kv(y,A,h.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return E(0),{calculatedDuration:null,next:A=>{let N=!1;return!M&&T===void 0&&(N=!0,b(A),E(A)),T!==void 0&&A>=T?M.next(A-T):(!N&&b(A),h)}}}function A2(e,t,n){const a=[],i=n||Zt.mix||Fv,s=e.length-1;for(let o=0;o<s;o++){let l=i(e[o],e[o+1]);if(t){const r=Array.isArray(t)?t[o]||dt:t;l=Rs(r,l)}a.push(l)}return a}function k2(e,t,{clamp:n=!0,ease:a,mixer:i}={}){const s=e.length;if(Td(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=A2(t,a,i),r=l.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(r>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=fs(e[f],e[f+1],d);return l[f](h)};return n?d=>c(Nt(e[0],e[s-1],d)):c}function E2(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const i=fs(0,t,a);e.push(se(n,1,i))}}function C2(e){const t=[0];return E2(t,e.length-1),t}function N2(e,t){return e.map(n=>n*t)}function M2(e,t){return e.map(()=>t||Uv).splice(0,e.length-1)}function Xi({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const i=_T(a)?a.map(Uh):Uh(a),s={done:!1,value:t[0]},o=N2(n&&n.length===t.length?n:C2(t),e),l=k2(o,t,{ease:Array.isArray(i)?i:M2(t,i)});return{calculatedDuration:e,next:r=>(s.value=l(r),s.done=r>=e,s)}}const j2=e=>e!==null;function zd(e,{repeat:t,repeatType:n="loop"},a,i=1){const s=e.filter(j2),l=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!l||a===void 0?s[l]:a}const D2={decay:Fc,inertia:Fc,tween:Xi,keyframes:Xi,spring:rl};function Qv(e){typeof e.type=="string"&&(e.type=D2[e.type])}class Bd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const R2=e=>e/100;class Ld extends Bd{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Be.now()&&this.tick(Be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(a=this.options).onStop)==null||i.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Qv(t);const{type:n=Xi,repeat:a=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:l}=t;const r=n||Xi;r!==Xi&&typeof l[0]!="number"&&(this.mixKeyframes=Rs(R2,Fv(l[0],l[1])),l=[0,100]);const c=r({...t,keyframes:l});s==="mirror"&&(this.mirroredGenerator=r({...t,keyframes:[...l].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Rd(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(a+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:r}=this;if(this.startTime===null)return a.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:h,repeatDelay:g,type:v,onUpdate:S,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?p<0:p>i;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let y=this.currentTime,b=a;if(f){const A=Math.min(this.currentTime,i)/l;let N=Math.floor(A),z=A%1;!z&&A>=1&&(z=1),z===1&&N--,N=Math.min(N,f+1),!!(N%2)&&(h==="reverse"?(z=1-z,g&&(z-=g/l)):h==="mirror"&&(b=o)),y=Nt(0,1,z)*l}const T=m?{done:!1,value:d[0]}:b.next(y);s&&(T.value=s(T.value));let{done:M}=T;!m&&r!==null&&(M=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return E&&v!==Fc&&(T.value=zd(d,this.options,x,this.speed)),S&&S(T.value),E&&this.finish(),T}then(t,n){return this.finished.then(t,n)}get duration(){return rt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+rt(t)}get time(){return rt(this.currentTime)}set time(t){var n;t=Et(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Be.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=rt(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=p2,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function z2(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Xn=e=>e*180/Math.PI,$c=e=>{const t=Xn(Math.atan2(e[1],e[0]));return Kc(t)},B2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:$c,rotateZ:$c,skewX:e=>Xn(Math.atan(e[1])),skewY:e=>Xn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Kc=e=>(e=e%360,e<0&&(e+=360),e),Gh=$c,Ih=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Wh=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),L2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ih,scaleY:Wh,scale:e=>(Ih(e)+Wh(e))/2,rotateX:e=>Kc(Xn(Math.atan2(e[6],e[5]))),rotateY:e=>Kc(Xn(Math.atan2(-e[2],e[0]))),rotateZ:Gh,rotate:Gh,skewX:e=>Xn(Math.atan(e[4])),skewY:e=>Xn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Qc(e){return e.includes("scale")?1:0}function Zc(e,t){if(!e||e==="none")return Qc(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,i;if(n)a=L2,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=B2,i=l}if(!i)return Qc(t);const s=a[t],o=i[1].split(",").map(U2);return typeof s=="function"?s(o):o[s]}const O2=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Zc(n,t)};function U2(e){return parseFloat(e.trim())}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],pi=new Set(mi),Xh=e=>e===hi||e===R,V2=new Set(["x","y","z"]),H2=mi.filter(e=>!V2.has(e));function _2(e){const t=[];return H2.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const yn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Zc(t,"x"),y:(e,{transform:t})=>Zc(t,"y")};yn.translateX=yn.x;yn.translateY=yn.y;const ta=new Set;let Jc=!1,eu=!1,tu=!1;function Zv(){if(eu){const e=Array.from(ta).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const i=_2(a);i.length&&(n.set(a,i),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const i=n.get(a);i&&i.forEach(([s,o])=>{var l;(l=a.getValue(s))==null||l.set(o)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}eu=!1,Jc=!1,ta.forEach(e=>e.complete(tu)),ta.clear()}function Jv(){ta.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(eu=!0)})}function P2(){tu=!0,Jv(),Zv(),tu=!1}class Od{constructor(t,n,a,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ta.add(this),Jc||(Jc=!0,Q.read(Jv),Q.resolveKeyframes(Zv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(a&&n){const l=a.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}z2(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ta.delete(this)}cancel(){this.state==="scheduled"&&(ta.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const q2=e=>e.startsWith("--");function Y2(e,t,n){q2(t)?e.style.setProperty(t,n):e.style[t]=n}const G2=Ad(()=>window.ScrollTimeline!==void 0),I2={};function W2(e,t){const n=Ad(e);return()=>I2[t]??n()}const e0=W2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Di=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,Fh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Di([0,.65,.55,1]),circOut:Di([.55,0,1,.45]),backIn:Di([.31,.01,.66,-.59]),backOut:Di([.33,1.53,.69,.99])};function t0(e,t){if(e)return typeof e=="function"?e0()?$v(e,t):"ease-out":Vv(e)?Di(e):Array.isArray(e)?e.map(n=>t0(n,t)||Fh.easeOut):Fh[e]}function X2(e,t,n,{delay:a=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:l="easeOut",times:r}={},c=void 0){const d={[t]:n};r&&(d.offset=r);const f=t0(l,i);Array.isArray(f)&&(d.easing=f);const h={delay:a,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(d,h)}function n0(e){return typeof e=="function"&&"applyToOptions"in e}function F2({type:e,...t}){return n0(e)&&e0()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class $2 extends Bd{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:a,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:l,onComplete:r}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,Td(typeof t.type!="string");const c=F2(t);this.animation=X2(n,a,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=zd(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(d):Y2(n,a,d),this.animation.cancel()}r==null||r(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,a,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(a=this.animation).commitStyles)==null||i.call(a))}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return rt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+rt(t)}get time(){return rt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Et(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&G2()?(this.animation.timeline=t,dt):n(this)}}const a0={anticipate:Bv,backInOut:zv,circInOut:Ov};function K2(e){return e in a0}function Q2(e){typeof e.ease=="string"&&K2(e.ease)&&(e.ease=a0[e.ease])}const Dr=10;class Z2 extends $2{constructor(t){Q2(t),Qv(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new Ld({...o,autoplay:!1}),r=Math.max(Dr,Be.now()-this.startTime),c=Nt(0,Dr,r-Dr);n.setWithVelocity(l.sample(Math.max(0,r-c)).value,l.sample(r).value,c),l.stop()}}const $h=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Rn.test(e)||e==="0")&&!e.startsWith("url("));function J2(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function eA(e,t,n,a){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=$h(i,t),l=$h(s,t);return!o||!l?!1:J2(e)||(n==="spring"||n0(n))&&a}function nu(e){e.duration=0,e.type="keyframes"}const tA=new Set(["opacity","clipPath","filter","transform"]),nA=Ad(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function aA(e){var d;const{motionValue:t,name:n,repeatDelay:a,repeatType:i,damping:s,type:o}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:r,transformTemplate:c}=t.owner.getProps();return nA()&&n&&tA.has(n)&&(n!=="transform"||!c)&&!r&&!a&&i!=="mirror"&&s!==0&&o!=="inertia"}const iA=40;class sA extends Bd{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:l,name:r,motionValue:c,element:d,...f}){var v;super(),this.stop=()=>{var S,x;this._animation&&(this._animation.stop(),(S=this.stopTimeline)==null||S.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=Be.now();const h={autoplay:t,delay:n,type:a,repeat:i,repeatDelay:s,repeatType:o,name:r,motionValue:c,element:d,...f},g=(d==null?void 0:d.KeyframeResolver)||Od;this.keyframeResolver=new g(l,(S,x,p)=>this.onKeyframesResolved(S,x,h,!p),r,c,d),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(t,n,a,i){var x,p;this.keyframeResolver=void 0;const{name:s,type:o,velocity:l,delay:r,isHandoff:c,onUpdate:d}=a;this.resolvedAt=Be.now(),eA(t,s,o,l)||((Zt.instantAnimations||!r)&&(d==null||d(zd(t,a,n))),t[0]=t[t.length-1],nu(a),a.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>iA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},g=!c&&aA(h),v=(p=(x=h.motionValue)==null?void 0:x.owner)==null?void 0:p.current,S=g?new Z2({...h,element:v}):new Ld(h);S.finished.then(()=>{this.notifyFinished()}).catch(dt),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),P2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function i0(e,t,n,a=0,i=1){const s=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),o=e.size,l=(o-1)*a;return typeof n=="function"?n(s,o):i===1?s*a:l-s*a}const oA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function lA(e){const t=oA.exec(e);if(!t)return[,];const[,n,a,i]=t;return[`--${n??a}`,i]}function s0(e,t,n=1){const[a,i]=lA(e);if(!a)return;const s=window.getComputedStyle(t).getPropertyValue(a);if(s){const o=s.trim();return kv(o)?parseFloat(o):o}return Nd(i)?s0(i,t,n+1):i}const rA={type:"spring",stiffness:500,damping:25,restSpeed:10},cA=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),uA={type:"keyframes",duration:.8},dA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fA=(e,{keyframes:t})=>t.length>2?uA:pi.has(e)?e.startsWith("scale")?cA(t[1]):rA:dA,hA=e=>e!==null;function mA(e,{repeat:t,repeatType:n="loop"},a){const i=e.filter(hA),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[s]}function o0(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...a}=e;return{...t,...a}}return e}function Ud(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?o0(n,e):n}function pA({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:l,from:r,elapsed:c,...d}){return!!Object.keys(d).length}const Vd=(e,t,n,a={},i,s)=>o=>{const l=Ud(a,e)||{},r=l.delay||a.delay||0;let{elapsed:c=0}=a;c=c-Et(r);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-c,onUpdate:h=>{t.set(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};pA(l)||Object.assign(d,fA(e,d)),d.duration&&(d.duration=Et(d.duration)),d.repeatDelay&&(d.repeatDelay=Et(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(nu(d),d.delay===0&&(f=!0)),(Zt.instantAnimations||Zt.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(f=!0,nu(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,f&&!s&&t.get()!==void 0){const h=mA(d.keyframes,l);if(h!==void 0){Q.update(()=>{d.onUpdate(h),d.onComplete()});return}}return l.isSync?new Ld(d):new sA(d)};function Kh(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function Hd(e,t,n,a){if(typeof t=="function"){const[i,s]=Kh(a);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Kh(a);t=t(n!==void 0?n:e.custom,i,s)}return t}function Ia(e,t,n){const a=e.getProps();return Hd(a,t,n!==void 0?n:a.custom,e)}const l0=new Set(["width","height","top","left","right","bottom",...mi]),Qh=30,gA=e=>!isNaN(parseFloat(e));class yA{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var s;const i=Be.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=gA(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new kd);const a=this.events[t].add(n);return t==="change"?()=>{a(),Q.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Qh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Qh);return Nv(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ai(e,t){return new yA(e,t)}const au=e=>Array.isArray(e);function vA(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ai(n))}function bA(e){return au(e)?e[e.length-1]||0:e}function xA(e,t){const n=Ia(e,t);let{transitionEnd:a={},transition:i={},...s}=n||{};s={...s,...a};for(const o in s){const l=bA(s[o]);vA(e,o,l)}}const De=e=>!!(e&&e.getVelocity);function wA(e){return!!(De(e)&&e.add)}function iu(e,t){const n=e.getValue("willChange");if(wA(n))return n.add(t);if(!n&&Zt.WillChange){const a=new Zt.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function _d(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const SA="framerAppearId",r0="data-"+_d(SA);function c0(e){return e.props[r0]}function TA({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function u0(e,t,{delay:n=0,transitionOverride:a,type:i}={}){let{transition:s,transitionEnd:o,...l}=t;const r=e.getDefaultTransition();s=s?o0(s,r):r;const c=s==null?void 0:s.reduceMotion;a&&(s=a);const d=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const h in l){const g=e.getValue(h,e.latestValues[h]??null),v=l[h];if(v===void 0||f&&TA(f,h))continue;const S={delay:n,...Ud(s||{},h)},x=g.get();if(x!==void 0&&!g.isAnimating&&!Array.isArray(v)&&v===x&&!S.velocity)continue;let p=!1;if(window.MotionHandoffAnimation){const b=c0(e);if(b){const T=window.MotionHandoffAnimation(b,h,Q);T!==null&&(S.startTime=T,p=!0)}}iu(e,h);const m=c??e.shouldReduceMotion;g.start(Vd(h,g,v,m&&l0.has(h)?{type:!1}:S,e,p));const y=g.animation;y&&d.push(y)}if(o){const h=()=>Q.update(()=>{o&&xA(e,o)});d.length?Promise.all(d).then(h):h()}return d}function su(e,t,n={}){var r;const a=Ia(e,t,n.type==="exit"?(r=e.presenceContext)==null?void 0:r.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(i=n.transitionOverride);const s=a?()=>Promise.all(u0(e,a,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=i;return AA(e,t,c,d,f,h,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,d]=l==="beforeChildren"?[s,o]:[o,s];return c().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function AA(e,t,n=0,a=0,i=0,s=1,o){const l=[];for(const r of e.variantChildren)r.notify("AnimationStart",t),l.push(su(r,t,{...o,delay:n+(typeof a=="function"?0:a)+i0(e.variantChildren,r,a,i,s)}).then(()=>r.notify("AnimationComplete",t)));return Promise.all(l)}function kA(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const i=t.map(s=>su(e,s,n));a=Promise.all(i)}else if(typeof t=="string")a=su(e,t,n);else{const i=typeof t=="function"?Ia(e,t,n.custom):t;a=Promise.all(u0(e,i,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}const EA={test:e=>e==="auto",parse:e=>e},d0=e=>t=>t.test(e),f0=[hi,R,Ct,an,JT,ZT,EA],Zh=e=>f0.find(d0(e));function CA(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Cv(e):!0}const NA=new Set(["brightness","contrast","saturate","opacity"]);function MA(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(Md)||[];if(!a)return e;const i=n.replace(a,"");let s=NA.has(t)?1:0;return a!==n&&(s*=100),t+"("+s+i+")"}const jA=/\b([a-z-]*)\(.*?\)/gu,ou={...Rn,getAnimatableNone:e=>{const t=e.match(jA);return t?t.map(MA).join(" "):e}},Jh={...hi,transform:Math.round},DA={rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:ao,scaleX:ao,scaleY:ao,scaleZ:ao,skew:an,skewX:an,skewY:an,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:hs,originX:Hh,originY:Hh,originZ:R},Pd={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,inset:R,insetBlock:R,insetBlockStart:R,insetBlockEnd:R,insetInline:R,insetInlineStart:R,insetInlineEnd:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,paddingBlock:R,paddingBlockStart:R,paddingBlockEnd:R,paddingInline:R,paddingInlineStart:R,paddingInlineEnd:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,marginBlock:R,marginBlockStart:R,marginBlockEnd:R,marginInline:R,marginInlineStart:R,marginInlineEnd:R,fontSize:R,backgroundPositionX:R,backgroundPositionY:R,...DA,zIndex:Jh,fillOpacity:hs,strokeOpacity:hs,numOctaves:Jh},RA={...Pd,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:ou,WebkitFilter:ou},h0=e=>RA[e];function m0(e,t){let n=h0(e);return n!==ou&&(n=Rn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const zA=new Set(["auto","none","0"]);function BA(e,t,n){let a=0,i;for(;a<e.length&&!i;){const s=e[a];typeof s=="string"&&!zA.has(s)&&ms(s).values.length&&(i=e[a]),a++}if(i&&n)for(const s of t)e[s]=m0(n,i)}class LA extends Od{constructor(t,n,a,i,s){super(t,n,a,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),Nd(f))){const h=s0(f,n.current);h!==void 0&&(t[d]=h),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!l0.has(a)||t.length!==2)return;const[i,s]=t,o=Zh(i),l=Zh(s),r=Vh(i),c=Vh(s);if(r!==c&&yn[a]){this.needsMeasurement=!0;return}if(o!==l)if(Xh(o)&&Xh(l))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else yn[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let i=0;i<t.length;i++)(t[i]===null||CA(t[i]))&&a.push(i);a.length&&BA(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yn[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(a,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=a.length-1,o=a[s];a[s]=yn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([r,c])=>{t.getValue(r).set(c)}),this.resolveNoneKeyframes()}}function p0(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let a=document;const i=(n==null?void 0:n[e])??a.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(a=>a!=null)}const g0=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function OA(e){return Ev(e)&&"offsetHeight"in e}const{schedule:qd}=Hv(queueMicrotask,!1),yt={x:!1,y:!1};function y0(){return yt.x||yt.y}function UA(e){return e==="x"||e==="y"?yt[e]?null:(yt[e]=!0,()=>{yt[e]=!1}):yt.x||yt.y?null:(yt.x=yt.y=!0,()=>{yt.x=yt.y=!1})}function v0(e,t){const n=p0(e),a=new AbortController,i={passive:!0,...t,signal:a.signal};return[n,i,()=>a.abort()]}function VA(e){return!(e.pointerType==="touch"||y0())}function HA(e,t,n={}){const[a,i,s]=v0(e,n);return a.forEach(o=>{let l=!1,r=!1,c;const d=()=>{o.removeEventListener("pointerleave",v)},f=x=>{c&&(c(x),c=void 0),d()},h=x=>{l=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),r&&(r=!1,f(x))},g=()=>{l=!0,window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",h,i)},v=x=>{if(x.pointerType!=="touch"){if(l){r=!0;return}f(x)}},S=x=>{if(!VA(x))return;r=!1;const p=t(o,x);typeof p=="function"&&(c=p,o.addEventListener("pointerleave",v,i))};o.addEventListener("pointerenter",S,i),o.addEventListener("pointerdown",g,i)}),s}const b0=(e,t)=>t?e===t?!0:b0(e,t.parentElement):!1,Yd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,_A=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function PA(e){return _A.has(e.tagName)||e.isContentEditable===!0}const qA=new Set(["INPUT","SELECT","TEXTAREA"]);function YA(e){return qA.has(e.tagName)||e.isContentEditable===!0}const ko=new WeakSet;function em(e){return t=>{t.key==="Enter"&&e(t)}}function Rr(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const GA=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=em(()=>{if(ko.has(n))return;Rr(n,"down");const i=em(()=>{Rr(n,"up")}),s=()=>Rr(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function tm(e){return Yd(e)&&!y0()}const nm=new WeakSet;function IA(e,t,n={}){const[a,i,s]=v0(e,n),o=l=>{const r=l.currentTarget;if(!tm(l)||nm.has(l))return;ko.add(r),n.stopPropagation&&nm.add(l);const c=t(r,l),d=(g,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),ko.has(r)&&ko.delete(r),tm(g)&&typeof c=="function"&&c(g,{success:v})},f=g=>{d(g,r===window||r===document||n.useGlobalTarget||b0(r,g.target))},h=g=>{d(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return a.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),OA(l)&&(l.addEventListener("focus",c=>GA(c,i)),!PA(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),s}function Gd(e){return Ev(e)&&"ownerSVGElement"in e}const Eo=new WeakMap;let sn;const x0=(e,t,n)=>(a,i)=>i&&i[0]?i[0][e+"Size"]:Gd(a)&&"getBBox"in a?a.getBBox()[t]:a[n],WA=x0("inline","width","offsetWidth"),XA=x0("block","height","offsetHeight");function FA({target:e,borderBoxSize:t}){var n;(n=Eo.get(e))==null||n.forEach(a=>{a(e,{get width(){return WA(e,t)},get height(){return XA(e,t)}})})}function $A(e){e.forEach(FA)}function KA(){typeof ResizeObserver>"u"||(sn=new ResizeObserver($A))}function QA(e,t){sn||KA();const n=p0(e);return n.forEach(a=>{let i=Eo.get(a);i||(i=new Set,Eo.set(a,i)),i.add(t),sn==null||sn.observe(a)}),()=>{n.forEach(a=>{const i=Eo.get(a);i==null||i.delete(t),i!=null&&i.size||sn==null||sn.unobserve(a)})}}const Co=new Set;let Ba;function ZA(){Ba=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Co.forEach(t=>t(e))},window.addEventListener("resize",Ba)}function JA(e){return Co.add(e),Ba||ZA(),()=>{Co.delete(e),!Co.size&&typeof Ba=="function"&&(window.removeEventListener("resize",Ba),Ba=void 0)}}function am(e,t){return typeof e=="function"?JA(e):QA(e,t)}function ek(e){return Gd(e)&&e.tagName==="svg"}const tk=[...f0,he,Rn],nk=e=>tk.find(d0(e)),im=()=>({translate:0,scale:1,origin:0,originPoint:0}),La=()=>({x:im(),y:im()}),sm=()=>({min:0,max:0}),ve=()=>({x:sm(),y:sm()}),lu={current:null},w0={current:!1},ak=typeof window<"u";function ik(){if(w0.current=!0,!!ak)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>lu.current=e.matches;e.addEventListener("change",t),t()}else lu.current=!1}const sk=new WeakMap;function Ll(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ps(e){return typeof e=="string"||Array.isArray(e)}const Id=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Wd=["initial",...Id];function Ol(e){return Ll(e.animate)||Wd.some(t=>ps(e[t]))}function S0(e){return!!(Ol(e)||e.variants)}function ok(e,t,n){for(const a in t){const i=t[a],s=n[a];if(De(i))e.addValue(a,i);else if(De(s))e.addValue(a,ai(i,{owner:e}));else if(s!==i)if(e.hasValue(a)){const o=e.getValue(a);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(a);e.addValue(a,ai(o!==void 0?o:i,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const om=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let cl={};function T0(e){cl=e}function lk(){return cl}class rk{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:o,visualState:l},r={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Od,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Be.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,Q.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=l;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=r,this.blockInitialAnimation=!!o,this.isControllingVariants=Ol(n),this.isVariantNode=S0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in h){const v=h[g];c[g]!==void 0&&De(v)&&v.set(c[g])}}mount(t){var n,a;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,sk.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(w0.current||ik(),this.shouldReduceMotion=lu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(a=this.parent)==null||a.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Dn(this.notifyUpdate),Dn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=pi.has(t);a&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Q.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in cl){const n=cl[t];if(!n)continue;const{isEnabled:a,Feature:i}=n;if(!this.features[t]&&i&&a(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ve()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<om.length;a++){const i=om[a];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=ok(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=ai(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(kv(a)||Cv(a))?a=parseFloat(a):!nk(a)&&Rn.test(n)&&(a=m0(t,n)),this.setBaseTarget(t,De(a)?a.get():a)),De(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const o=Hd(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(a=o[t])}if(n&&a!==void 0)return a;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!De(i)?i:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new kd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){qd.render(this.render)}}class A0 extends rk{constructor(){super(...arguments),this.KeyframeResolver=LA}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const a=t.style;return a?a[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;De(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class On{constructor(t){this.isMounted=!1,this.node=t}update(){}}function k0({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function ck({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function uk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function zr(e){return e===void 0||e===1}function ru({scale:e,scaleX:t,scaleY:n}){return!zr(e)||!zr(t)||!zr(n)}function In(e){return ru(e)||E0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function E0(e){return lm(e.x)||lm(e.y)}function lm(e){return e&&e!=="0%"}function ul(e,t,n){const a=e-n,i=t*a;return n+i}function rm(e,t,n,a,i){return i!==void 0&&(e=ul(e,i,a)),ul(e,n,a)+t}function cu(e,t=0,n=1,a,i){e.min=rm(e.min,t,n,a,i),e.max=rm(e.max,t,n,a,i)}function C0(e,{x:t,y:n}){cu(e.x,t.translate,t.scale,t.originPoint),cu(e.y,n.translate,n.scale,n.originPoint)}const cm=.999999999999,um=1.0000000000001;function dk(e,t,n,a=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const{visualElement:r}=s.options;r&&r.props.style&&r.props.style.display==="contents"||(a&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ua(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,C0(e,o)),a&&In(s.latestValues)&&Ua(e,s.latestValues))}t.x<um&&t.x>cm&&(t.x=1),t.y<um&&t.y>cm&&(t.y=1)}function Oa(e,t){e.min=e.min+t,e.max=e.max+t}function dm(e,t,n,a,i=.5){const s=se(e.min,e.max,i);cu(e,t,n,s,a)}function Ua(e,t){dm(e.x,t.x,t.scaleX,t.scale,t.originX),dm(e.y,t.y,t.scaleY,t.scale,t.originY)}function N0(e,t){return k0(uk(e.getBoundingClientRect(),t))}function fk(e,t,n){const a=N0(e,n),{scroll:i}=t;return i&&(Oa(a.x,i.offset.x),Oa(a.y,i.offset.y)),a}const hk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},mk=mi.length;function pk(e,t,n){let a="",i=!0;for(let s=0;s<mk;s++){const o=mi[s],l=e[o];if(l===void 0)continue;let r=!0;if(typeof l=="number")r=l===(o.startsWith("scale")?1:0);else{const c=parseFloat(l);r=o.startsWith("scale")?c===1:c===0}if(!r||n){const c=g0(l,Pd[o]);if(!r){i=!1;const d=hk[o]||o;a+=`${d}(${c}) `}n&&(t[o]=c)}}return a=a.trim(),n?a=n(t,i?"":a):i&&(a="none"),a}function Xd(e,t,n){const{style:a,vars:i,transformOrigin:s}=e;let o=!1,l=!1;for(const r in t){const c=t[r];if(pi.has(r)){o=!0;continue}else if(Pv(r)){i[r]=c;continue}else{const d=g0(c,Pd[r]);r.startsWith("origin")?(l=!0,s[r]=d):a[r]=d}}if(t.transform||(o||n?a.transform=pk(t,e.transform,n):a.transform&&(a.transform="none")),l){const{originX:r="50%",originY:c="50%",originZ:d=0}=s;a.transformOrigin=`${r} ${c} ${d}`}}function M0(e,{style:t,vars:n},a,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,a);for(o in n)s.setProperty(o,n[o])}function fm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ai={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=fm(e,t.target.x),a=fm(e,t.target.y);return`${n}% ${a}%`}},gk={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,i=Rn.parse(e);if(i.length>5)return a;const s=Rn.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,r=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=r;const c=se(l,r,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},uu={borderRadius:{...Ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ai,borderTopRightRadius:Ai,borderBottomLeftRadius:Ai,borderBottomRightRadius:Ai,boxShadow:gk};function j0(e,{layout:t,layoutId:n}){return pi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!uu[e]||e==="opacity")}function Fd(e,t,n){var o;const a=e.style,i=t==null?void 0:t.style,s={};if(!a)return s;for(const l in a)(De(a[l])||i&&De(i[l])||j0(l,e)||((o=n==null?void 0:n.getValue(l))==null?void 0:o.liveStyle)!==void 0)&&(s[l]=a[l]);return s}function yk(e){return window.getComputedStyle(e)}class vk extends A0{constructor(){super(...arguments),this.type="html",this.renderInstance=M0}readValueFromInstance(t,n){var a;if(pi.has(n))return(a=this.projection)!=null&&a.isProjecting?Qc(n):O2(t,n);{const i=yk(t),s=(Pv(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return N0(t,n)}build(t,n,a){Xd(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return Fd(t,n,a)}}const bk={offset:"stroke-dashoffset",array:"stroke-dasharray"},xk={offset:"strokeDashoffset",array:"strokeDasharray"};function wk(e,t,n=1,a=0,i=!0){e.pathLength=1;const s=i?bk:xk;e[s.offset]=`${-a}`,e[s.array]=`${t} ${n}`}const Sk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function D0(e,{attrX:t,attrY:n,attrScale:a,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...l},r,c,d){if(Xd(e,l,c),r){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:h}=e;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const g of Sk)f[g]!==void 0&&(h[g]=f[g],delete f[g]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),a!==void 0&&(f.scale=a),i!==void 0&&wk(f,i,s,o,!1)}const R0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),z0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Tk(e,t,n,a){M0(e,t,void 0,a);for(const i in t.attrs)e.setAttribute(R0.has(i)?i:_d(i),t.attrs[i])}function B0(e,t,n){const a=Fd(e,t,n);for(const i in e)if(De(e[i])||De(t[i])){const s=mi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;a[s]=e[i]}return a}class Ak extends A0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ve}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(pi.has(n)){const a=h0(n);return a&&a.default||0}return n=R0.has(n)?n:_d(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return B0(t,n,a)}build(t,n,a){D0(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,i){Tk(t,n,a,i)}mount(t){this.isSVGTag=z0(t.tagName),super.mount(t)}}const kk=Wd.length;function L0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?L0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<kk;n++){const a=Wd[n],i=e.props[a];(ps(i)||i===!1)&&(t[a]=i)}return t}function O0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const Ek=[...Id].reverse(),Ck=Id.length;function Nk(e){return t=>Promise.all(t.map(({animation:n,options:a})=>kA(e,n,a)))}function Mk(e){let t=Nk(e),n=hm(),a=!0;const i=r=>(c,d)=>{var h;const f=Ia(e,d,r==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:g,transitionEnd:v,...S}=f;c={...c,...S,...v}}return c};function s(r){t=r(e)}function o(r){const{props:c}=e,d=L0(e.parent)||{},f=[],h=new Set;let g={},v=1/0;for(let x=0;x<Ck;x++){const p=Ek[x],m=n[p],y=c[p]!==void 0?c[p]:d[p],b=ps(y),T=p===r?m.isActive:null;T===!1&&(v=x);let M=y===d[p]&&y!==c[p]&&b;if(M&&a&&e.manuallyAnimateOnMount&&(M=!1),m.protectedKeys={...g},!m.isActive&&T===null||!y&&!m.prevProp||Ll(y)||typeof y=="boolean")continue;const E=jk(m.prevProp,y);let A=E||p===r&&m.isActive&&!M&&b||x>v&&b,N=!1;const z=Array.isArray(y)?y:[y];let ae=z.reduce(i(p),{});T===!1&&(ae={});const{prevResolvedValues:Ae={}}=m,mt={...Ae,...ae},en=j=>{A=!0,h.has(j)&&(N=!0,h.delete(j)),m.needsAnimating[j]=!0;const D=e.getValue(j);D&&(D.liveStyle=!1)};for(const j in mt){const D=ae[j],B=Ae[j];if(g.hasOwnProperty(j))continue;let Z=!1;au(D)&&au(B)?Z=!O0(D,B):Z=D!==B,Z?D!=null?en(j):h.add(j):D!==void 0&&h.has(j)?en(j):m.protectedKeys[j]=!0}m.prevProp=y,m.prevResolvedValues=ae,m.isActive&&(g={...g,...ae}),a&&e.blockInitialAnimation&&(A=!1);const tn=M&&E;A&&(!tn||N)&&f.push(...z.map(j=>{const D={type:p};if(typeof j=="string"&&a&&!tn&&e.manuallyAnimateOnMount&&e.parent){const{parent:B}=e,Z=Ia(B,j);if(B.enteringChildren&&Z){const{delayChildren:ma}=Z.transition||{};D.delay=i0(B.enteringChildren,e,ma)}}return{animation:j,options:D}}))}if(h.size){const x={};if(typeof c.initial!="boolean"){const p=Ia(e,Array.isArray(c.initial)?c.initial[0]:c.initial);p&&p.transition&&(x.transition=p.transition)}h.forEach(p=>{const m=e.getBaseTarget(p),y=e.getValue(p);y&&(y.liveStyle=!0),x[p]=m??null}),f.push({animation:x})}let S=!!f.length;return a&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(S=!1),a=!1,S?t(f):Promise.resolve()}function l(r,c){var f;if(n[r].isActive===c)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var g;return(g=h.animationState)==null?void 0:g.setActive(r,c)}),n[r].isActive=c;const d=o(r);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=hm()}}}function jk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!O0(t,e):!1}function Hn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hm(){return{animate:Hn(!0),whileInView:Hn(),whileHover:Hn(),whileTap:Hn(),whileDrag:Hn(),whileFocus:Hn(),exit:Hn()}}function mm(e,t){e.min=t.min,e.max=t.max}function gt(e,t){mm(e.x,t.x),mm(e.y,t.y)}function pm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const U0=1e-4,Dk=1-U0,Rk=1+U0,V0=.01,zk=0-V0,Bk=0+V0;function Le(e){return e.max-e.min}function Lk(e,t,n){return Math.abs(e-t)<=n}function gm(e,t,n,a=.5){e.origin=a,e.originPoint=se(t.min,t.max,e.origin),e.scale=Le(n)/Le(t),e.translate=se(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Dk&&e.scale<=Rk||isNaN(e.scale))&&(e.scale=1),(e.translate>=zk&&e.translate<=Bk||isNaN(e.translate))&&(e.translate=0)}function Fi(e,t,n,a){gm(e.x,t.x,n.x,a?a.originX:void 0),gm(e.y,t.y,n.y,a?a.originY:void 0)}function ym(e,t,n){e.min=n.min+t.min,e.max=e.min+Le(t)}function Ok(e,t,n){ym(e.x,t.x,n.x),ym(e.y,t.y,n.y)}function vm(e,t,n){e.min=t.min-n.min,e.max=e.min+Le(t)}function dl(e,t,n){vm(e.x,t.x,n.x),vm(e.y,t.y,n.y)}function bm(e,t,n,a,i){return e-=t,e=ul(e,1/n,a),i!==void 0&&(e=ul(e,1/i,a)),e}function Uk(e,t=0,n=1,a=.5,i,s=e,o=e){if(Ct.test(t)&&(t=parseFloat(t),t=se(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=se(s.min,s.max,a);e===s&&(l-=t),e.min=bm(e.min,t,n,l,i),e.max=bm(e.max,t,n,l,i)}function xm(e,t,[n,a,i],s,o){Uk(e,t[n],t[a],t[i],t.scale,s,o)}const Vk=["x","scaleX","originX"],Hk=["y","scaleY","originY"];function wm(e,t,n,a){xm(e.x,t,Vk,n?n.x:void 0,a?a.x:void 0),xm(e.y,t,Hk,n?n.y:void 0,a?a.y:void 0)}function Sm(e){return e.translate===0&&e.scale===1}function H0(e){return Sm(e.x)&&Sm(e.y)}function Tm(e,t){return e.min===t.min&&e.max===t.max}function _k(e,t){return Tm(e.x,t.x)&&Tm(e.y,t.y)}function Am(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function _0(e,t){return Am(e.x,t.x)&&Am(e.y,t.y)}function km(e){return Le(e.x)/Le(e.y)}function Em(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function wt(e){return[e("x"),e("y")]}function Pk(e,t,n){let a="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(a=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:h,skewX:g,skewY:v}=n;c&&(a=`perspective(${c}px) ${a}`),d&&(a+=`rotate(${d}deg) `),f&&(a+=`rotateX(${f}deg) `),h&&(a+=`rotateY(${h}deg) `),g&&(a+=`skewX(${g}deg) `),v&&(a+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,r=e.y.scale*t.y;return(l!==1||r!==1)&&(a+=`scale(${l}, ${r})`),a||"none"}const P0=["TopLeft","TopRight","BottomLeft","BottomRight"],qk=P0.length,Cm=e=>typeof e=="string"?parseFloat(e):e,Nm=e=>typeof e=="number"||R.test(e);function Yk(e,t,n,a,i,s){i?(e.opacity=se(0,n.opacity??1,Gk(a)),e.opacityExit=se(t.opacity??1,0,Ik(a))):s&&(e.opacity=se(t.opacity??1,n.opacity??1,a));for(let o=0;o<qk;o++){const l=`border${P0[o]}Radius`;let r=Mm(t,l),c=Mm(n,l);if(r===void 0&&c===void 0)continue;r||(r=0),c||(c=0),r===0||c===0||Nm(r)===Nm(c)?(e[l]=Math.max(se(Cm(r),Cm(c),a),0),(Ct.test(c)||Ct.test(r))&&(e[l]+="%")):e[l]=c}(t.rotate||n.rotate)&&(e.rotate=se(t.rotate||0,n.rotate||0,a))}function Mm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Gk=q0(0,.5,Lv),Ik=q0(.5,.95,dt);function q0(e,t,n){return a=>a<e?0:a>t?1:n(fs(e,t,a))}function Wk(e,t,n){const a=De(e)?e:ai(e);return a.start(Vd("",a,t,n)),a.animation}function gs(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}const Xk=(e,t)=>e.depth-t.depth;class Fk{constructor(){this.children=[],this.isDirty=!1}add(t){wd(this.children,t),this.isDirty=!0}remove(t){Sd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Xk),this.isDirty=!1,this.children.forEach(t)}}function $k(e,t){const n=Be.now(),a=({timestamp:i})=>{const s=i-n;s>=t&&(Dn(a),e(s-t))};return Q.setup(a,!0),()=>Dn(a)}function No(e){return De(e)?e.get():e}class Kk{constructor(){this.members=[]}add(t){wd(this.members,t),t.scheduleRender()}remove(t){if(Sd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let a;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){a=s;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender();const i=a.options.layoutDependency,s=t.options.layoutDependency;i!==void 0&&s!==void 0&&i===s||(t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0));const{crossfade:l}=t.options;l===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Mo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Br=["","X","Y","Z"],Qk=1e3;let Zk=0;function Lr(e,t,n,a){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),a&&(a[e]=0))}function Y0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=c0(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Q,!(i||s))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&Y0(a)}function G0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=Zk++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tE),this.nodes.forEach(sE),this.nodes.forEach(oE),this.nodes.forEach(nE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let r=0;r<this.path.length;r++)this.path[r].shouldResetTransform=!0;this.root===this&&(this.nodes=new Fk)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new kd),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const r=this.eventHandlers.get(o);r&&r.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Gd(o)&&!ek(o),this.instance=o;const{layoutId:l,layout:r,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||l)&&(this.isLayoutDirty=!0),e){let d,f=0;const h=()=>this.root.updateBlockedByResize=!1;Q.read(()=>{f=window.innerWidth}),e(o,()=>{const g=window.innerWidth;g!==f&&(f=g,this.root.updateBlockedByResize=!0,d&&d(),d=$k(h,250),Mo.hasAnimatedSinceResize&&(Mo.hasAnimatedSinceResize=!1,this.nodes.forEach(Rm)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||r)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||dE,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=c.getProps(),p=!this.targetLayout||!_0(this.targetLayout,g),m=!f&&h;if(this.options.layoutRoot||this.resumeFrom||m||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...Ud(v,"layout"),onPlay:S,onComplete:x};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(d,m)}else f||Rm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Dn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lE),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Y0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:r}=this.options;if(l===void 0&&!r)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(jm);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Dm);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(iE),this.nodes.forEach(Jk),this.nodes.forEach(eE)):this.nodes.forEach(Dm),this.clearAllSnapshots();const l=Be.now();ke.delta=Nt(0,1e3/60,l-ke.timestamp),ke.timestamp=l,ke.isProcessing=!0,Er.update.process(ke),Er.preRender.process(ke),Er.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(aE),this.sharedNodes.forEach(rE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Le(this.snapshot.measuredBox.x)&&!Le(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let r=0;r<this.path.length;r++)this.path[r].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ve(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const r=a(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:r,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:r}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!H0(this.projectionDelta),r=this.getTransformTemplate(),c=r?r(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&this.instance&&(l||In(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let r=this.removeElementScroll(l);return o&&(r=this.removeTransform(r)),fE(r),{animationId:this.root.animationId,measuredBox:l,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return ve();const l=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(hE))){const{scroll:d}=this.root;d&&(Oa(l.x,d.offset.x),Oa(l.y,d.offset.y))}return l}removeElementScroll(o){var r;const l=ve();if(gt(l,o),(r=this.scroll)!=null&&r.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&gt(l,o),Oa(l.x,f.offset.x),Oa(l.y,f.offset.y))}return l}applyTransform(o,l=!1){const r=ve();gt(r,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ua(r,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),In(d.latestValues)&&Ua(r,d.latestValues)}return In(this.latestValues)&&Ua(r,this.latestValues),r}removeTransform(o){const l=ve();gt(l,o);for(let r=0;r<this.path.length;r++){const c=this.path[r];if(!c.instance||!In(c.latestValues))continue;ru(c.latestValues)&&c.updateSnapshot();const d=ve(),f=c.measurePageBox();gt(d,f),wm(l,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return In(this.latestValues)&&wm(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var g;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const r=!!this.resumingFrom||this!==l;if(!(o||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=ke.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ve(),this.targetWithTransforms=ve()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ok(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gt(this.target,this.layout.layoutBox),C0(this.target,this.targetDelta)):gt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ru(this.parent.latestValues)||E0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,l,r){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ve(),this.relativeTargetOrigin=ve(),dl(this.relativeTargetOrigin,l,r),gt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let r=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(r=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(r=!1),r)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;gt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;dk(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ve());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pm(this.prevProjectionDelta.x,this.projectionDelta.x),pm(this.prevProjectionDelta.y,this.projectionDelta.y)),Fi(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!Em(this.projectionDelta.x,this.prevProjectionDelta.x)||!Em(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const r=this.getStack();r&&r.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=La(),this.projectionDelta=La(),this.projectionDeltaWithTransform=La()}setAnimationOrigin(o,l=!1){const r=this.snapshot,c=r?r.latestValues:{},d={...this.latestValues},f=La();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=ve(),g=r?r.source:void 0,v=this.layout?this.layout.source:void 0,S=g!==v,x=this.getStack(),p=!x||x.members.length<=1,m=!!(S&&!p&&this.options.crossfade===!0&&!this.path.some(uE));this.animationProgress=0;let y;this.mixTargetDelta=b=>{const T=b/1e3;zm(f.x,o.x,T),zm(f.y,o.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(dl(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cE(this.relativeTarget,this.relativeTargetOrigin,h,T),y&&_k(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=ve()),gt(y,this.relativeTarget)),S&&(this.animationValues=d,Yk(d,c,this.latestValues,T,m,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,r,c;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(c=(r=this.resumingFrom)==null?void 0:r.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Dn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Q.update(()=>{Mo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ai(0)),this.currentAnimation=Wk(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:r,layout:c,latestValues:d}=o;if(!(!l||!r||!c)){if(this!==o&&this.layout&&c&&I0(this.options.animationType,this.layout.layoutBox,c.layoutBox)){r=this.target||ve();const f=Le(this.layout.layoutBox.x);r.x.min=o.target.x.min,r.x.max=r.x.min+f;const h=Le(this.layout.layoutBox.y);r.y.min=o.target.y.min,r.y.max=r.y.min+h}gt(l,r),Ua(l,d),Fi(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Kk),this.sharedNodes.get(o).add(l);const c=l.options.initialPromotionConfig;l.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:r}={}){const c=this.getStack();c&&c.promote(this,r),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:r}=o;if((r.z||r.rotate||r.rotateX||r.rotateY||r.rotateZ||r.skewX||r.skewY)&&(l=!0),!l)return;const c={};r.z&&Lr("z",o,c,this.animationValues);for(let d=0;d<Br.length;d++)Lr(`rotate${Br[d]}`,o,c,this.animationValues),Lr(`skew${Br[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const r=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=No(l==null?void 0:l.pointerEvents)||"",o.transform=r?r(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=No(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!In(this.latestValues)&&(o.transform=r?r({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=Pk(this.projectionDeltaWithTransform,this.treeScale,d);r&&(f=r(d,f)),o.transform=f;const{x:h,y:g}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${g.origin*100}% 0`,c.animationValues?o.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in uu){if(d[v]===void 0)continue;const{correct:S,applyTo:x,isCSSVariable:p}=uu[v],m=f==="none"?d[v]:S(d[v],c);if(x){const y=x.length;for(let b=0;b<y;b++)o[x[b]]=m}else p?this.options.visualElement.renderState.vars[v]=m:o[v]=m}this.options.layoutId&&(o.pointerEvents=c===this?No(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(jm),this.root.sharedNodes.clear()}}}function Jk(e){e.updateLayout()}function eE(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;s==="size"?wt(f=>{const h=o?t.measuredBox[f]:t.layoutBox[f],g=Le(h);h.min=a[f].min,h.max=h.min+g}):I0(s,t.layoutBox,a)&&wt(f=>{const h=o?t.measuredBox[f]:t.layoutBox[f],g=Le(a[f]);h.max=h.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const l=La();Fi(l,a,t.layoutBox);const r=La();o?Fi(r,e.applyTransform(i,!0),t.measuredBox):Fi(r,a,t.layoutBox);const c=!H0(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:g}=f;if(h&&g){const v=ve();dl(v,t.layoutBox,h.layoutBox);const S=ve();dl(S,a,g.layoutBox),_0(v,S)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=S,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:r,layoutDelta:l,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function tE(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function aE(e){e.clearSnapshot()}function jm(e){e.clearMeasurements()}function Dm(e){e.isLayoutDirty=!1}function iE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Rm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function sE(e){e.resolveTargetDelta()}function oE(e){e.calcProjection()}function lE(e){e.resetSkewAndRotation()}function rE(e){e.removeLeadSnapshot()}function zm(e,t,n){e.translate=se(t.translate,0,n),e.scale=se(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Bm(e,t,n,a){e.min=se(t.min,n.min,a),e.max=se(t.max,n.max,a)}function cE(e,t,n,a){Bm(e.x,t.x,n.x,a),Bm(e.y,t.y,n.y,a)}function uE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const dE={duration:.45,ease:[.4,0,.1,1]},Lm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Om=Lm("applewebkit/")&&!Lm("chrome/")?Math.round:dt;function Um(e){e.min=Om(e.min),e.max=Om(e.max)}function fE(e){Um(e.x),Um(e.y)}function I0(e,t,n){return e==="position"||e==="preserve-aspect"&&!Lk(km(t),km(n),.2)}function hE(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const mE=G0({attachResizeListener:(e,t)=>gs(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Or={current:void 0},W0=G0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Or.current){const e=new mE({});e.mount(window),e.setOptions({layoutScroll:!0}),Or.current=e}return Or.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),X0=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function pE(e=!0){const t=w.useContext(xd);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:i}=t,s=w.useId();w.useEffect(()=>{if(e)return i(s)},[e]);const o=w.useCallback(()=>e&&a&&a(s),[s,a,e]);return!n&&a?[!1,o]:[!0]}const F0=w.createContext({strict:!1}),Vm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Hm=!1;function gE(){if(Hm)return;const e={};for(const t in Vm)e[t]={isEnabled:n=>Vm[t].some(a=>!!n[a])};T0(e),Hm=!0}function $0(){return gE(),lk()}function yE(e){const t=$0();for(const n in e)t[n]={...t[n],...e[n]};T0(t)}const vE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||vE.has(e)}let K0=e=>!fl(e);function bE(e){typeof e=="function"&&(K0=t=>t.startsWith("on")?!fl(t):e(t))}try{bE(require("@emotion/is-prop-valid").default)}catch{}function xE(e,t,n){const a={};for(const i in e)i==="values"&&typeof e.values=="object"||(K0(i)||n===!0&&fl(i)||!t&&!fl(i)||e.draggable&&i.startsWith("onDrag"))&&(a[i]=e[i]);return a}const Ul=w.createContext({});function wE(e,t){if(Ol(e)){const{initial:n,animate:a}=e;return{initial:n===!1||ps(n)?n:void 0,animate:ps(a)?a:void 0}}return e.inherit!==!1?t:{}}function SE(e){const{initial:t,animate:n}=wE(e,w.useContext(Ul));return w.useMemo(()=>({initial:t,animate:n}),[_m(t),_m(n)])}function _m(e){return Array.isArray(e)?e.join(" "):e}const $d=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Q0(e,t,n){for(const a in t)!De(t[a])&&!j0(a,n)&&(e[a]=t[a])}function TE({transformTemplate:e},t){return w.useMemo(()=>{const n=$d();return Xd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function AE(e,t){const n=e.style||{},a={};return Q0(a,n,e),Object.assign(a,TE(e,t)),a}function kE(e,t){const n={},a=AE(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const Z0=()=>({...$d(),attrs:{}});function EE(e,t,n,a){const i=w.useMemo(()=>{const s=Z0();return D0(s,t,z0(a),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Q0(s,e.style,e),i.style={...s,...i.style}}return i}const CE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kd(e){return typeof e!="string"||e.includes("-")?!1:!!(CE.indexOf(e)>-1||/[A-Z]/u.test(e))}function NE(e,t,n,{latestValues:a},i,s=!1,o){const r=(o??Kd(e)?EE:kE)(t,a,i,e),c=xE(t,typeof e=="string",s),d=e!==w.Fragment?{...c,...r,ref:n}:{},{children:f}=t,h=w.useMemo(()=>De(f)?f.get():f,[f]);return w.createElement(e,{...d,children:h})}function ME({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,i){return{latestValues:jE(n,a,i,e),renderState:t()}}function jE(e,t,n,a){const i={},s=a(e,{});for(const h in s)i[h]=No(s[h]);let{initial:o,animate:l}=e;const r=Ol(e),c=S0(e);t&&c&&!r&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?l:o;if(f&&typeof f!="boolean"&&!Ll(f)){const h=Array.isArray(f)?f:[f];for(let g=0;g<h.length;g++){const v=Hd(e,h[g]);if(v){const{transitionEnd:S,transition:x,...p}=v;for(const m in p){let y=p[m];if(Array.isArray(y)){const b=d?y.length-1:0;y=y[b]}y!==null&&(i[m]=y)}for(const m in S)i[m]=S[m]}}}return i}const J0=e=>(t,n)=>{const a=w.useContext(Ul),i=w.useContext(xd),s=()=>ME(e,t,a,i);return n?s():RT(s)},DE=J0({scrapeMotionValuesFromProps:Fd,createRenderState:$d}),RE=J0({scrapeMotionValuesFromProps:B0,createRenderState:Z0}),zE=Symbol.for("motionComponentSymbol");function BE(e,t,n){const a=w.useRef(n);w.useInsertionEffect(()=>{a.current=n});const i=w.useRef(null);return w.useCallback(s=>{var l;s&&((l=e.onMount)==null||l.call(e,s)),t&&(s?t.mount(s):t.unmount());const o=a.current;if(typeof o=="function")if(s){const r=o(s);typeof r=="function"&&(i.current=r)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s)},[t])}const eb=w.createContext({});function xa(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function LE(e,t,n,a,i,s){var y,b;const{visualElement:o}=w.useContext(Ul),l=w.useContext(F0),r=w.useContext(xd),c=w.useContext(X0),d=c.reducedMotion,f=c.skipAnimations,h=w.useRef(null),g=w.useRef(!1);a=a||l.renderer,!h.current&&a&&(h.current=a(e,{visualState:t,parent:o,props:n,presenceContext:r,blockInitialAnimation:r?r.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:s}),g.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const v=h.current,S=w.useContext(eb);v&&!v.projection&&i&&(v.type==="html"||v.type==="svg")&&OE(h.current,n,i,S);const x=w.useRef(!1);w.useInsertionEffect(()=>{v&&x.current&&v.update(n,r)});const p=n[r0],m=w.useRef(!!p&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,p))&&((b=window.MotionHasOptimisedAnimation)==null?void 0:b.call(window,p)));return zT(()=>{g.current=!0,v&&(x.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),m.current&&v.animationState&&v.animationState.animateChanges())}),w.useEffect(()=>{v&&(!m.current&&v.animationState&&v.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,p)}),m.current=!1),v.enteringChildren=void 0)}),v}function OE(e,t,n,a){const{layoutId:i,layout:s,drag:o,dragConstraints:l,layoutScroll:r,layoutRoot:c,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:tb(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||l&&xa(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:a,crossfade:d,layoutScroll:r,layoutRoot:c})}function tb(e){if(e)return e.options.allowProjection!==!1?e.projection:tb(e.parent)}function Ur(e,{forwardMotionProps:t=!1,type:n}={},a,i){a&&yE(a);const s=n?n==="svg":Kd(e),o=s?RE:DE;function l(c,d){let f;const h={...w.useContext(X0),...c,layoutId:UE(c)},{isStatic:g}=h,v=SE(c),S=o(c,g);if(!g&&Av){VE();const x=HE(h);f=x.MeasureLayout,v.visualElement=LE(e,S,h,i,x.ProjectionNode,s)}return u.jsxs(Ul.Provider,{value:v,children:[f&&v.visualElement?u.jsx(f,{visualElement:v.visualElement,...h}):null,NE(e,c,BE(S,v.visualElement,d),S,g,t,s)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const r=w.forwardRef(l);return r[zE]=e,r}function UE({layoutId:e}){const t=w.useContext(Tv).id;return t&&e!==void 0?t+"-"+e:e}function VE(e,t){w.useContext(F0).strict}function HE(e){const t=$0(),{drag:n,layout:a}=t;if(!n&&!a)return{};const i={...n,...a};return{MeasureLayout:n!=null&&n.isEnabled(e)||a!=null&&a.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function _E(e,t){if(typeof Proxy>"u")return Ur;const n=new Map,a=(s,o)=>Ur(s,o,e,t),i=(s,o)=>a(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?a:(n.has(o)||n.set(o,Ur(o,void 0,e,t)),n.get(o))})}const PE=(e,t)=>t.isSVG??Kd(e)?new Ak(t):new vk(t,{allowProjection:e!==w.Fragment});class qE extends On{constructor(t){super(t),t.animationState||(t.animationState=Mk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ll(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let YE=0;class GE extends On{constructor(){super(...arguments),this.id=YE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const IE={animation:{Feature:qE},exit:{Feature:GE}};function Ls(e){return{point:{x:e.pageX,y:e.pageY}}}const WE=e=>t=>Yd(t)&&e(t,Ls(t));function $i(e,t,n,a){return gs(e,t,WE(n),a)}const nb=({current:e})=>e?e.ownerDocument.defaultView:null,Pm=(e,t)=>Math.abs(e-t);function XE(e,t){const n=Pm(e.x,t.x),a=Pm(e.y,t.y);return Math.sqrt(n**2+a**2)}const qm=new Set(["auto","scroll"]);class ab{constructor(t,n,{transformPagePoint:a,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Hr(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=XE(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:x}=g,{timestamp:p}=ke;this.history.push({...x,timestamp:p});const{onStart:m,onMove:y}=this.handlers;v||(m&&m(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Vr(v,this.transformPagePoint),Q.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:S,onSessionEnd:x,resumeAnimation:p}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Hr(g.type==="pointercancel"?this.lastMoveEventInfo:Vr(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(g,m),x&&x(g,m)},!Yd(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=o,this.contextWindow=i||window;const r=Ls(t),c=Vr(r,this.transformPagePoint),{point:d}=c,{timestamp:f}=ke;this.history=[{...d,timestamp:f}];const{onSessionStart:h}=n;h&&h(t,Hr(c,this.history)),this.removeListeners=Rs($i(this.contextWindow,"pointermove",this.handlePointerMove),$i(this.contextWindow,"pointerup",this.handlePointerUp),$i(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const a=getComputedStyle(n);(qm.has(a.overflowX)||qm.has(a.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const a=t===window,i=a?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),Q.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Dn(this.updatePoint)}}function Vr(e,t){return t?{point:t(e.point)}:e}function Ym(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Hr({point:e},t){return{point:e,delta:Ym(e,ib(t)),offset:Ym(e,FE(t)),velocity:$E(t,.1)}}function FE(e){return e[0]}function ib(e){return e[e.length-1]}function $E(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const i=ib(e);for(;n>=0&&(a=e[n],!(i.timestamp-a.timestamp>Et(t)));)n--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&i.timestamp-a.timestamp>Et(t)*2&&(a=e[1]);const s=rt(i.timestamp-a.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-a.x)/s,y:(i.y-a.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function KE(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?se(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?se(n,e,a.max):Math.min(e,n)),e}function Gm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function QE(e,{top:t,left:n,bottom:a,right:i}){return{x:Gm(e.x,n,i),y:Gm(e.y,t,a)}}function Im(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function ZE(e,t){return{x:Im(e.x,t.x),y:Im(e.y,t.y)}}function JE(e,t){let n=.5;const a=Le(e),i=Le(t);return i>a?n=fs(t.min,t.max-a,e.min):a>i&&(n=fs(e.min,e.max-i,t.min)),Nt(0,1,n)}function eC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const du=.35;function tC(e=du){return e===!1?e=0:e===!0&&(e=du),{x:Wm(e,"left","right"),y:Wm(e,"top","bottom")}}function Wm(e,t,n){return{min:Xm(e,t),max:Xm(e,n)}}function Xm(e,t){return typeof e=="number"?e:e[t]||0}const nC=new WeakMap;class aC{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ve(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(Ls(f).point),this.stopAnimation()},o=(f,h)=>{const{drag:g,dragPropagation:v,onDragStart:S}=this.getProps();if(g&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UA(g),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wt(p=>{let m=this.getAxisMotionValue(p).get()||0;if(Ct.test(m)){const{projection:y}=this.visualElement;if(y&&y.layout){const b=y.layout.layoutBox[p];b&&(m=Le(b)*(parseFloat(m)/100))}}this.originPoint[p]=m}),S&&Q.update(()=>S(f,h),!1,!0),iu(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;const{dragPropagation:g,dragDirectionLock:v,onDirectionLock:S,onDrag:x}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:p}=h;if(v&&this.currentDirection===null){this.currentDirection=sC(p),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",h.point,p),this.updateAxis("y",h.point,p),this.visualElement.render(),x&&Q.update(()=>x(f,h),!1,!0)},r=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new ab(t,{onSessionStart:s,onStart:o,onMove:l,onSessionEnd:r,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:a,contextWindow:nb(this.visualElement),element:this.visualElement.current})}stop(t,n){const a=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!a)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Q.postRender(()=>l(a,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,a){const{drag:i}=this.getProps();if(!a||!io(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(o=KE(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&xa(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=QE(a.layoutBox,t):this.constraints=!1,this.elastic=tC(n),i!==this.constraints&&!xa(t)&&a&&this.constraints&&!this.hasMutatedConstraints&&wt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=eC(a.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!xa(t))return!1;const a=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=fk(a,i.root,this.visualElement.getTransformPagePoint());let o=ZE(i.layout.layoutBox,s);if(n){const l=n(ck(o));this.hasMutatedConstraints=!!l,l&&(o=k0(l))}return o}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),r=this.constraints||{},c=wt(d=>{if(!io(d,n,this.currentDirection))return;let f=r&&r[d]||{};o&&(f={min:0,max:0});const h=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:a?t[d]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(l)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return iu(this.visualElement,t),a.start(Vd(t,a,0,n,this.visualElement,!1))}stopAnimation(){wt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),i=a[n];return i||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){wt(n=>{const{drag:a}=this.getProps();if(!io(n,a,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n],r=s.get()||0;s.set(t[n]-se(o,l,.5)+r)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!xa(n)||!a||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};wt(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const r=l.get();i[o]=JE({min:r,max:r},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),wt(o=>{if(!io(o,t,null))return;const l=this.getAxisMotionValue(o),{min:r,max:c}=this.constraints[o];l.set(se(r,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;nC.set(this.visualElement,this);const t=this.visualElement.current,n=$i(t,"pointerdown",c=>{const{drag:d,dragListener:f=!0}=this.getProps(),h=c.target,g=h!==t&&YA(h);d&&f&&!g&&this.start(c)});let a;const i=()=>{const{dragConstraints:c}=this.getProps();xa(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),a||(a=iC(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Q.read(i);const l=gs(window,"resize",()=>this.scalePositionWithinConstraints()),r=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(wt(f=>{const h=this.getAxisMotionValue(f);h&&(this.originPoint[f]+=c[f].translate,h.set(h.get()+c[f].translate))}),this.visualElement.render())});return()=>{l(),n(),o(),r&&r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=du,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function Fm(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function iC(e,t,n){const a=am(e,Fm(n)),i=am(t,Fm(n));return()=>{a(),i()}}function io(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function sC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class oC extends On{constructor(t){super(t),this.removeGroupControls=dt,this.removeListeners=dt,this.controls=new aC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||dt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const _r=e=>(t,n)=>{e&&Q.update(()=>e(t,n),!1,!0)};class lC extends On{constructor(){super(...arguments),this.removePointerDownListener=dt}onPointerDown(t){this.session=new ab(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nb(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:i}=this.node.getProps();return{onSessionStart:_r(t),onStart:_r(n),onMove:_r(a),onEnd:(s,o)=>{delete this.session,i&&Q.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=$i(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Pr=!1;class rC extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),a&&a.register&&i&&a.register(s),Pr&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Mo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:i,isPresent:s}=this.props,{projection:o}=a;return o&&(o.isPresent=s,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Pr=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Q.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),qd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:i}=t;Pr=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),a&&a.deregister&&a.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function sb(e){const[t,n]=pE(),a=w.useContext(Tv);return u.jsx(rC,{...e,layoutGroup:a,switchLayoutGroup:w.useContext(eb),isPresent:t,safeToRemove:n})}const cC={pan:{Feature:lC},drag:{Feature:oC,ProjectionNode:W0,MeasureLayout:sb}};function $m(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=a[i];s&&Q.postRender(()=>s(t,Ls(t)))}class uC extends On{mount(){const{current:t}=this.node;t&&(this.unmount=HA(t,(n,a)=>($m(this.node,a,"Start"),i=>$m(this.node,i,"End"))))}unmount(){}}class dC extends On{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rs(gs(this.node.current,"focus",()=>this.onFocus()),gs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Km(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=a[i];s&&Q.postRender(()=>s(t,Ls(t)))}class fC extends On{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:a}=this.node.props;this.unmount=IA(t,(i,s)=>(Km(this.node,s,"Start"),(o,{success:l})=>Km(this.node,o,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const fu=new WeakMap,qr=new WeakMap,hC=e=>{const t=fu.get(e.target);t&&t(e)},mC=e=>{e.forEach(hC)};function pC({root:e,...t}){const n=e||document;qr.has(n)||qr.set(n,{});const a=qr.get(n),i=JSON.stringify(t);return a[i]||(a[i]=new IntersectionObserver(mC,{root:e,...t})),a[i]}function gC(e,t,n){const a=pC(t);return fu.set(e,n),a.observe(e),()=>{fu.delete(e),a.unobserve(e)}}const yC={some:0,all:1};class vC extends On{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:a,threshold:typeof i=="number"?i:yC[i]},l=r=>{const{isIntersecting:c}=r;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=c?d:f;h&&h(r)};return gC(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(bC(t,n))&&this.startObserver()}unmount(){}}function bC({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const xC={inView:{Feature:vC},tap:{Feature:fC},focus:{Feature:dC},hover:{Feature:uC}},wC={layout:{ProjectionNode:W0,MeasureLayout:sb}},SC={...IE,...xC,...cC,...wC},q=_E(SC,PE),TC=[{level:1,title:"Freshman Explorer"},{level:2,title:"Curious Learner"},{level:3,title:"Knowledge Seeker"},{level:4,title:"Skill Builder"},{level:5,title:"Rising Scholar"},{level:6,title:"Academic Achiever"},{level:7,title:"Master Student"},{level:8,title:"Wisdom Keeper"},{level:9,title:"Elite Scholar"},{level:10,title:"Valedictorian"}];function AC(){const{user:e,progress:t,modules:n,claimDailyReward:a}=ha();w.useEffect(()=>{a()},[a]);const i=n.reduce((c,d)=>c+d.lessons.length,0),s=t.completedLessons.length,o=Math.round(s/i*100),l=n.filter(c=>c.lessons.some(d=>t.completedLessons.includes(d.id))&&!c.lessons.every(d=>t.completedLessons.includes(d.id))).slice(0,3),r=n.filter(c=>!c.isPremium&&!c.lessons.some(d=>t.completedLessons.includes(d.id))).slice(0,3);return u.jsxs("div",{className:"space-y-8",children:[u.jsxs(q.section,{initial:{opacity:0},animate:{opacity:1},className:"relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px]",children:[u.jsxs("div",{className:"absolute inset-0",children:[u.jsx("img",{src:"/Frontier_Forge/hero-image.jpg",alt:"Students learning in the digital age",className:"w-full h-full object-cover"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70"})]}),u.jsx("div",{className:"relative z-10 flex flex-col justify-center min-h-[500px] md:min-h-[600px] p-8 md:p-16",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"inline-flex items-center gap-2 bg-primary-100 border border-primary-300 rounded-full px-6 py-2 mb-8",children:[u.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),u.jsx("span",{className:"text-sm font-bold text-slate-800",children:"Now Enrolling for 2026"})]}),u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[u.jsxs("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4",children:[u.jsx("span",{className:"text-slate-900",children:"Frontier"}),u.jsx("span",{className:"text-primary-600",children:" Forge"})]}),u.jsx("p",{className:"text-xl md:text-2xl font-bold text-slate-700 tracking-wide uppercase mb-6",children:"AI-Powered Homeschool Academy"})]}),u.jsx(q.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-lg md:text-xl text-slate-700 font-medium mb-10 max-w-2xl mx-auto leading-relaxed",children:"A new kind of education for a new generation. Master real-world skills, learn at your own pace, and prepare for the future — not the past."}),u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[u.jsxs(Fe,{to:"/courses",className:"group bg-primary-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-primary-700 transition-all inline-flex items-center gap-3 hover:gap-4",children:["Start Learning Free",u.jsx(kr,{className:"w-5 h-5 transition-all"})]}),u.jsxs(Fe,{to:"/courses",className:"text-slate-700 font-bold px-6 py-4 transition-all inline-flex items-center gap-2 hover:text-slate-900 text-lg",children:["View Curriculum",u.jsx(kr,{className:"w-5 h-5"})]})]}),u.jsxs(q.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"flex items-center justify-center gap-8 md:gap-16 pt-6 border-t border-slate-300 px-8 py-4",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-4xl md:text-5xl font-black text-slate-900 mb-1",children:"100+"}),u.jsx("div",{className:"text-sm text-slate-600 font-bold uppercase tracking-wider",children:"Lessons"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-4xl md:text-5xl font-black text-slate-900 mb-1",children:"10"}),u.jsx("div",{className:"text-sm text-slate-600 font-bold uppercase tracking-wider",children:"Courses"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-4xl md:text-5xl font-black text-green-600 mb-1",children:"Free"}),u.jsx("div",{className:"text-sm text-slate-600 font-bold uppercase tracking-wider",children:"To Start"})]})]})]})})]}),u.jsx(q.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"card bg-gradient-to-br from-primary-600/20 to-accent-600/20",children:u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsxs("h2",{className:"text-xl md:text-2xl font-bold mb-2",children:["Welcome back",e!=null&&e.name?`, ${e.name}`:"","! 👋"]}),u.jsxs("p",{className:"text-slate-300",children:["You're a ",u.jsx("span",{className:"text-primary-400 font-semibold",children:t.rankTitle})," with"," ",u.jsxs("span",{className:"text-gamify-xp font-semibold",children:[t.xp.toLocaleString()," XP"]})]})]}),t.streak>0&&u.jsxs("div",{className:"flex items-center gap-3 bg-orange-500/20 rounded-xl px-5 py-3",children:[u.jsx("span",{className:"text-3xl",children:"🔥"}),u.jsxs("div",{children:[u.jsxs("div",{className:"text-2xl font-bold text-orange-400",children:[t.streak," Day Streak!"]}),u.jsx("div",{className:"text-sm text-orange-300/80",children:"Keep it going!"})]})]})]})}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[u.jsxs(q.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.1},className:"card text-center",children:[u.jsx(ea,{className:"w-8 h-8 text-gamify-xp mx-auto mb-2"}),u.jsx("div",{className:"text-2xl font-bold",children:t.xp.toLocaleString()}),u.jsx("div",{className:"text-sm text-slate-400",children:"Total XP"})]}),u.jsxs(q.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.2},className:"card text-center",children:[u.jsx(wv,{className:"w-8 h-8 text-gamify-gold mx-auto mb-2"}),u.jsxs("div",{className:"text-2xl font-bold",children:["Level ",t.rank]}),u.jsx("div",{className:"text-sm text-slate-400",children:t.rankTitle})]}),u.jsxs(q.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.3},className:"card text-center",children:[u.jsx(Bl,{className:"w-8 h-8 text-primary-400 mx-auto mb-2"}),u.jsx("div",{className:"text-2xl font-bold",children:s}),u.jsx("div",{className:"text-sm text-slate-400",children:"Lessons Done"})]}),u.jsxs(q.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},className:"card text-center",children:[u.jsx(fT,{className:"w-8 h-8 text-accent-400 mx-auto mb-2"}),u.jsxs("div",{className:"text-2xl font-bold",children:[o,"%"]}),u.jsx("div",{className:"text-sm text-slate-400",children:"Complete"})]})]}),l.length>0&&u.jsxs("section",{children:[u.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[u.jsx("span",{children:"📖"})," Continue Learning"]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:l.map((c,d)=>{const f=c.lessons.filter(g=>t.completedLessons.includes(g.id)).length,h=f/c.lessons.length*100;return u.jsx(q.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:d*.1},children:u.jsxs(Fe,{to:`/courses/${c.id}`,className:"card-hover block",children:[u.jsxs("div",{className:"flex items-start justify-between mb-3",children:[u.jsx("span",{className:"text-3xl",children:c.icon}),u.jsxs("span",{className:"text-sm text-slate-400",children:[f,"/",c.lessons.length]})]}),u.jsx("h3",{className:"font-semibold mb-1",children:c.title}),u.jsx("div",{className:"xp-bar mt-3",children:u.jsx("div",{className:"xp-fill",style:{width:`${h}%`}})})]})},c.id)})})]}),r.length>0&&u.jsxs("section",{children:[u.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[u.jsx("span",{children:"✨"})," Start Something New"]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:r.map((c,d)=>u.jsx(q.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:d*.1},children:u.jsxs(Fe,{to:`/courses/${c.id}`,className:"card-hover block",children:[u.jsxs("div",{className:"flex items-start justify-between mb-3",children:[u.jsx("span",{className:"text-3xl",children:c.icon}),u.jsx("span",{className:"badge-free",children:"Free"})]}),u.jsx("h3",{className:"font-semibold mb-1",children:c.title}),u.jsx("p",{className:"text-sm text-slate-400 mb-3",children:c.description}),u.jsxs("div",{className:"flex items-center text-primary-400 text-sm font-medium",children:["Start Learning ",u.jsx(kr,{className:"w-4 h-4 ml-1"})]})]})},c.id))})]}),u.jsxs("section",{className:"card",children:[u.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[u.jsx("span",{children:"🏆"})," Rank Progress"]}),u.jsx("div",{className:"space-y-3",children:TC.map(c=>{const d=c.level===t.rank,f=c.level<=t.rank;return u.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg transition-all ${d?"bg-primary-500/20 border border-primary-500/30":f?"bg-slate-700/30":"opacity-50"}`,children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold ${f?"bg-gamify-xp text-white":"bg-slate-700 text-slate-400"}`,children:c.level}),u.jsx("div",{className:"flex-1",children:u.jsx("div",{className:"font-medium",children:c.title})}),d&&u.jsx("span",{className:"text-xs bg-primary-500 text-white px-2 py-1 rounded-full",children:"Current"}),f&&!d&&u.jsx("span",{className:"text-gamify-xp",children:"✓"})]},c.level)})})]})]})}function kC(){const{modules:e,progress:t,user:n}=ha(),a=e.filter(s=>!s.isPremium),i=e.filter(s=>s.isPremium);return u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold mb-2",children:"📚 Courses"}),u.jsx("p",{className:"text-slate-400",children:"Choose a subject and start learning"})]}),u.jsxs("section",{children:[u.jsxs("h2",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[u.jsx("span",{className:"badge-free",children:"Free"}),"Available Courses"]}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.map((s,o)=>{const l=s.lessons.filter(f=>t.completedLessons.includes(f.id)).length,r=l===s.lessons.length,c=l/s.lessons.length*100,d=s.lessons.reduce((f,h)=>f+h.xp,0);return u.jsx(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:o*.05},children:u.jsxs(Fe,{to:`/courses/${s.id}`,className:"card-hover block h-full",children:[u.jsxs("div",{className:"flex items-start justify-between mb-3",children:[u.jsx("span",{className:"text-4xl",children:s.icon}),r&&u.jsx("span",{className:"text-2xl",children:s.badge})]}),u.jsx("h3",{className:"text-lg font-semibold mb-1",children:s.title}),u.jsx("p",{className:"text-sm text-slate-400 mb-4",children:s.description}),u.jsxs("div",{className:"flex items-center justify-between text-sm mb-2",children:[u.jsxs("span",{className:"text-slate-400",children:[s.lessons.length," lessons"]}),u.jsxs("span",{className:"text-gamify-xp font-medium",children:[d," XP"]})]}),u.jsx("div",{className:"xp-bar",children:u.jsx("div",{className:"xp-fill",style:{width:`${c}%`}})}),l>0&&u.jsxs("div",{className:"mt-2 text-xs text-slate-400",children:[l,"/",s.lessons.length," complete"]})]})},s.id)})})]}),u.jsxs("section",{children:[u.jsxs("h2",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[u.jsxs("span",{className:"badge-premium",children:[u.jsx(Jn,{className:"w-3 h-3"}),"Premium"]}),"Advanced Courses"]}),!(n!=null&&n.isPremium)&&u.jsx("div",{className:"card bg-gradient-to-r from-accent-600/20 to-primary-600/20 border-accent-500/30 mb-6",children:u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Unlock Premium Courses"}),u.jsx("p",{className:"text-slate-300 text-sm",children:"Get access to advanced courses, certificates, and more"})]}),u.jsx(Fe,{to:"/profile",className:"btn-accent whitespace-nowrap",children:"Upgrade Now"})]})}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:i.map((s,o)=>{const l=!(n!=null&&n.isPremium),c=s.lessons.filter(f=>t.completedLessons.includes(f.id)).length/s.lessons.length*100,d=s.lessons.reduce((f,h)=>f+h.xp,0);return u.jsx(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:o*.05+.2},children:u.jsxs(Fe,{to:l?"/profile":`/courses/${s.id}`,className:`card-hover block h-full relative ${l?"opacity-75":""}`,children:[l&&u.jsx("div",{className:"absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10",children:u.jsxs("div",{className:"text-center",children:[u.jsx(ds,{className:"w-8 h-8 text-accent-400 mx-auto mb-2"}),u.jsx("span",{className:"text-sm font-medium",children:"Premium Only"})]})}),u.jsxs("div",{className:"flex items-start justify-between mb-3",children:[u.jsx("span",{className:"text-4xl",children:s.icon}),u.jsxs("span",{className:"badge-premium",children:[u.jsx(Jn,{className:"w-3 h-3"}),"Premium"]})]}),u.jsx("h3",{className:"text-lg font-semibold mb-1",children:s.title}),u.jsx("p",{className:"text-sm text-slate-400 mb-4",children:s.description}),u.jsxs("div",{className:"flex items-center justify-between text-sm mb-2",children:[u.jsxs("span",{className:"text-slate-400",children:[s.lessons.length," lessons"]}),u.jsxs("span",{className:"text-gamify-xp font-medium",children:[d," XP"]})]}),!l&&u.jsx("div",{className:"xp-bar",children:u.jsx("div",{className:"xp-fill",style:{width:`${c}%`}})})]})},s.id)})})]})]})}const EC={"rm-1":{id:"rm-1",title:"Everyday Math & Mental Shortcuts",introduction:"Math isn't just for school — it's a daily life skill. From calculating tips to comparing prices, quick mental math makes you sharper and saves time. This lesson teaches you practical shortcuts you'll use constantly.",sections:[{heading:"The Power of Mental Math",videoUrl:"https://www.youtube.com/embed/v1Ih3-mDPUE",content:`Why bother with mental math when you have a phone? Because quick calculations make you:

• Faster at making decisions
• Better at spotting errors and scams
• More confident in negotiations
• Less dependent on technology

Mental math isn't about being a human calculator — it's about quick estimates that are "good enough" for real-life decisions.

The goal: Get within 5-10% of the exact answer in seconds.`},{heading:"Percentage Shortcuts",content:`Percentages come up constantly. Here are the shortcuts:

Finding 10%: Just move the decimal point one place left.
• 10% of $45.00 = $4.50
• 10% of $127 = $12.70

Finding 5%: Find 10%, then cut it in half.
• 5% of $80 = $8 ÷ 2 = $4

Finding 15%: Add 10% + 5%.
• 15% of $60 = $6 + $3 = $9

Finding 20%: Double 10%.
• 20% of $45 = $4.50 × 2 = $9

Finding 25%: Divide by 4.
• 25% of $80 = $80 ÷ 4 = $20

Tip calculation made easy:
For a 20% tip, find 10% and double it.
$67 bill → 10% = $6.70 → 20% = $13.40

For 15%, find 10% + half of 10%.
$67 bill → $6.70 + $3.35 = $10.05`},{heading:"Multiplication Tricks",content:`Multiplying by 5: Multiply by 10, then divide by 2.
• 24 × 5 = 240 ÷ 2 = 120

Multiplying by 9: Multiply by 10, subtract the original number.
• 7 × 9 = 70 - 7 = 63
• 23 × 9 = 230 - 23 = 207

Multiplying by 11: Add the digits and put the sum in the middle.
• 11 × 36 = 3_(3+6)_6 = 396
• 11 × 72 = 7_(7+2)_2 = 792

Squaring numbers ending in 5:
• Take the first digit, multiply by (itself + 1), append 25
• 35² = 3 × 4 = 12, append 25 = 1,225
• 75² = 7 × 8 = 56, append 25 = 5,625

Breaking apart problems:
• 47 × 8 = (50 × 8) - (3 × 8) = 400 - 24 = 376
• 99 × 6 = (100 × 6) - 6 = 594`},{heading:"Estimation and Rounding",content:`For quick estimates, round to easy numbers first:

Price comparison:
"Is $3.79 for 12 oz better than $5.49 for 20 oz?"
• $3.79 ÷ 12 ≈ $4 ÷ 12 ≈ $0.33/oz
• $5.49 ÷ 20 ≈ $5 ÷ 20 = $0.25/oz
• The larger size is better value!

Splitting bills:
$127 dinner for 4 people?
• Round to $128 (divisible by 4)
• $128 ÷ 4 = $32 each

Quick time calculations:
"How many hours from 10:45 AM to 3:20 PM?"
• 10:45 to 3:45 = 5 hours
• Subtract 25 minutes = 4 hours 35 minutes

The "Rule of 72" for investments:
To find how long money takes to double, divide 72 by the interest rate.
• At 6% interest: 72 ÷ 6 = 12 years to double
• At 9% interest: 72 ÷ 9 = 8 years to double`}],keyTakeaways:["Mental math is about quick, useful estimates — not perfection","Use 10% as your anchor for percentage calculations","Break complex problems into simpler parts","Round numbers to make calculations easier","The Rule of 72 estimates investment doubling time"]},"rm-2":{id:"rm-2",title:"Statistics in the News",introduction:"Statistics appear in news stories every day, from poll results to health studies. Understanding how to interpret — and question — these numbers helps you become a more informed citizen who can't be easily misled.",sections:[{heading:"Understanding Averages",videoUrl:"https://www.youtube.com/embed/k3aKKasOmIw",content:`There are three types of "average," and they can tell very different stories:

Mean: Add all values, divide by count.
• Household incomes: $30k, $35k, $40k, $45k, $500k
• Mean = $650k ÷ 5 = $130k
• This seems high because one outlier skews it.

Median: The middle value when sorted.
• Same incomes: $30k, $35k, $40k, $45k, $500k
• Median = $40k (the middle number)
• This better represents the "typical" household.

Mode: The most frequently occurring value.
• Test scores: 85, 90, 90, 90, 95, 100
• Mode = 90 (appears most often)

When you see "average" in the news, ask: Which average? 

The mean can be misleading when there are extreme values. For income and housing prices, the median is usually more meaningful.`},{heading:"Correlation vs. Causation",content:`This is one of the most common errors in statistical reasoning:

Correlation: Two things tend to happen together.
Causation: One thing actually causes the other.

Example: "Ice cream sales and drowning deaths are correlated."
Does ice cream cause drowning? No! Both increase in summer because of heat.

Questions to ask:
• Could there be a third factor causing both? (confounding variable)
• Could the causation be reversed?
• Is it just coincidence?

Real examples of misleading correlations:
• Countries that eat more chocolate have more Nobel Prize winners
• People who eat breakfast tend to be healthier (maybe healthy people just have time for breakfast)
• Cities with more police have more crime (they have more police BECAUSE of crime)

The phrase to remember: "Correlation does not imply causation."

Strong evidence for causation requires:
• Controlled experiments
• Clear mechanism of action
• Consistent results across studies
• Time sequence (cause before effect)`},{heading:"Sample Size and Selection Bias",content:`Not all studies are created equal. The quality of data matters enormously.

Sample size:
• Larger samples are more reliable
• "9 out of 10 dentists recommend..." — is that 9 out of 10, or 900 out of 1000?
• Small samples can produce extreme results by chance

Margin of error:
• Polls report margins like "±3%"
• A poll showing 52% to 48% with ±3% margin means it could be anywhere from 49-55% to 45-51%
• If margins overlap, the difference may not be meaningful

Selection bias:
• Who was included in the study?
• Online polls only reach online users
• Phone surveys miss people without phones
• Voluntary surveys attract people with strong opinions

Questions to ask:
• How many people were studied?
• How were they selected?
• Is the sample representative of the whole population?
• What's the margin of error?
• Who funded the study?`},{heading:"Misleading Graphs and Stats",content:`Numbers can be presented in deceptive ways:

Truncated axes:
• A graph showing change from $100 to $110 looks dramatic if the Y-axis starts at $99
• Always check if the axis starts at zero

Cherry-picked timeframes:
• "Stock up 50% this month!" (but down 30% this year)
• "Crime down from last year!" (but up from 5 years ago)
• Ask: Why this time period?

Relative vs. absolute risk:
• "Drug reduces risk by 50%!" 
• If risk went from 2% to 1%, that's technically true
• Absolute change is just 1 percentage point

Missing context:
• "1000% increase in rare disease!" 
• If cases went from 1 to 10, that's a 1000% increase but still very rare

Percentages of percentages:
• "Interest rates rose 10%!" 
• Did they go from 5% to 5.5% (10% increase) or from 5% to 15% (10 percentage points)?

Always ask: What's the base number? What's the full context?`}],keyTakeaways:["Know the difference between mean, median, and mode","Correlation does not imply causation","Sample size and selection method affect reliability","Check graph axes for manipulation","Distinguish between relative and absolute changes"]},"rm-3":{id:"rm-3",title:"Probability & Risk Assessment",introduction:"Every decision involves probability, whether you realize it or not. Understanding how to think about chance and risk helps you make better choices about everything from health decisions to financial investments.",sections:[{heading:"Basic Probability Concepts",videoUrl:"https://www.youtube.com/embed/uzkc-qNVoOk",content:`Probability measures how likely something is to happen, expressed as a number between 0 (impossible) and 1 (certain), or as a percentage.

Simple probability:
• Probability = Favorable outcomes ÷ Total possible outcomes
• Coin flip: 1 head ÷ 2 sides = 0.5 or 50%
• Rolling a 6: 1 ÷ 6 ≈ 0.167 or about 17%

"And" probabilities (both events happen):
• Multiply the probabilities
• Flipping heads twice: 0.5 × 0.5 = 0.25 or 25%
• Rolling two 6s: (1/6) × (1/6) = 1/36 ≈ 2.8%

"Or" probabilities (either event happens):
• Add the probabilities (if events can't both happen)
• Rolling 1 or 2: 1/6 + 1/6 = 2/6 ≈ 33%

The Gambler's Fallacy:
• Past random events don't affect future ones
• After 10 heads in a row, the next flip is still 50/50
• The coin has no memory!`},{heading:"Expected Value",content:`Expected value helps you evaluate decisions with uncertain outcomes:

Expected Value = Σ(Outcome × Probability of that outcome)

Simple example — a game:
• Pay $1 to play
• 50% chance to win $3
• 50% chance to win $0
• Expected value: (0.5 × $3) + (0.5 × $0) = $1.50
• Since you pay $1 to win an expected $1.50, this is a good bet!

Lottery example:
• Ticket costs $2
• 1 in 300 million chance to win $500 million
• Expected value: $500,000,000 × (1/300,000,000) = $1.67
• You pay $2 for expected value of $1.67 — bad deal!

Insurance example:
• Pay $100/month for insurance
• 1% chance of $50,000 loss
• Expected loss: 0.01 × $50,000 = $500/year
• You pay $1,200/year for protection against $500 expected loss
• Seems bad mathematically, but protects against catastrophe

Expected value helps with average decisions, but doesn't account for how much losing would hurt versus winning would help.`},{heading:"Risk Assessment in Real Life",content:`We're often bad at judging risk. Here's how to do better:

We overestimate risks that are:
• Dramatic or vivid (plane crashes, shark attacks)
• Featured in news media
• New or unfamiliar
• Out of our control

We underestimate risks that are:
• Gradual (poor diet, sedentary lifestyle)
• Familiar (driving, household accidents)
• Chosen voluntarily
• Under our perceived control

Actual leading causes of death vs. perceived risks:
• Heart disease: #1 cause, rarely feared
• Car accidents: Common but accepted
• Shark attacks: Extremely rare but highly feared

How to calibrate:
• Look up actual statistics
• Compare to familiar risks
• Consider base rates (how common is it generally?)
• Separate your emotional reaction from actual probability

Example: Flying vs. driving
• Chance of dying in a car accident: 1 in 100 over lifetime
• Chance of dying in a plane crash: 1 in 11,000 per year of regular flying
• Driving to the airport is usually more dangerous than the flight!`},{heading:"Making Decisions Under Uncertainty",content:`Life requires decisions with incomplete information. Here are frameworks:

Consider the worst case:
• What's the worst that could happen?
• How likely is it?
• Could you recover from it?

Consider the upside:
• What's the best outcome?
• How likely is it?
• How much would it help?

Reversibility:
• Can you undo this decision?
• Reversible decisions can be made faster
• Irreversible decisions deserve more thought

Optionality:
• Does this open up or close down future options?
• Prefer choices that keep options open

The "10/10/10" framework:
• How will you feel about this decision in 10 minutes?
• In 10 months?
• In 10 years?

When to take risks:
• When you have time to recover from failure
• When the upside is much larger than the downside
• When you can learn valuable information
• When not taking the risk carries its own risk`}],keyTakeaways:["Probability ranges from 0 (impossible) to 1 (certain)","Expected value helps evaluate decisions with uncertain outcomes","We systematically overestimate dramatic risks and underestimate gradual ones","Consider worst case, best case, and reversibility","Past random events don't affect future probabilities"]},"rm-4":{id:"rm-4",title:"Math for Personal Finance",introduction:"The math behind money might be the most valuable math you'll ever learn. This lesson covers the essential calculations for loans, savings, and financial planning that will save you thousands of dollars over your lifetime.",sections:[{heading:"Interest: The Price of Borrowing",videoUrl:"https://www.youtube.com/embed/Rm6UdfRs3gw",content:`Interest is what lenders charge you to borrow money — and what you earn when you save.

Simple Interest:
Interest = Principal × Rate × Time
• Borrow $1,000 at 5% for 2 years
• Interest = $1,000 × 0.05 × 2 = $100 total

Compound Interest (how it actually works):
Interest earns interest over time.
• $1,000 at 5% compounded annually for 2 years
• Year 1: $1,000 × 1.05 = $1,050
• Year 2: $1,050 × 1.05 = $1,102.50
• You earned $102.50, not just $100!

The compound interest formula:
Final Amount = Principal × (1 + rate)^years

Why this matters:
• Credit cards compound DAILY at 20%+ rates
• $1,000 credit card debt at 20% APR, paying minimums, takes 9+ years to pay off and costs $1,000+ in interest!
• Savings grow much faster with compound interest working FOR you`},{heading:"Loan Payments and True Cost",content:`Understanding how loans work helps you make smarter borrowing decisions.

Monthly payment factors:
• Principal (amount borrowed)
• Interest rate (annual %)
• Term (number of months)

Example car loan:
• $25,000 car, 6% APR, 60 months
• Monthly payment: ~$483
• Total paid: $483 × 60 = $28,980
• Total interest: $3,980!

The same loan at 72 months:
• Monthly payment: ~$414 (looks better!)
• Total paid: $414 × 72 = $29,808
• Total interest: $4,808
• "Lower payment" costs $800+ more!

APR vs. Interest Rate:
• APR (Annual Percentage Rate) includes fees
• A loan with 5% interest but high fees might have 6% APR
• Always compare APR, not just interest rates

The true cost of financing:
Before financing anything, calculate:
1. Total of all payments
2. Subtract original price
3. That's what borrowing actually costs you`},{heading:"Savings and Investment Growth",content:`The flip side of interest: making it work FOR you.

Future value of regular savings:
If you save $200/month at 7% annual return:
• After 10 years: ~$34,600
• After 20 years: ~$104,000
• After 30 years: ~$243,000
• After 40 years: ~$525,000

You only contributed $96,000 over 40 years — compound interest added $429,000!

Present value (working backwards):
"How much do I need to save to have $1 million at 65?"
• Starting at 25, investing for 40 years at 7%: ~$384/month
• Starting at 35, investing for 30 years at 7%: ~$820/month
• Starting at 45, investing for 20 years at 7%: ~$1,920/month

The cost of waiting is enormous. 10 years of delay more than doubles what you need to save.

The Rule of 72 (revisited):
Years to double = 72 ÷ Interest Rate
• At 6%: 72 ÷ 6 = 12 years
• At 8%: 72 ÷ 8 = 9 years
• At 10%: 72 ÷ 10 = 7.2 years

Small differences in return rates matter a lot over time.`},{heading:"Inflation and Real Returns",content:`Inflation erodes the value of money over time. You need to account for it.

What is inflation?
• The general increase in prices over time
• $100 today buys more than $100 will buy in 10 years
• Historical average: ~3% per year in the US

Real return = Nominal return - Inflation rate
• Your savings account pays 2%
• Inflation is 3%
• Real return: 2% - 3% = -1%
• You're actually losing purchasing power!

Why this matters for long-term planning:
• If you need $50,000/year in retirement today
• In 30 years at 3% inflation, you'll need ~$121,000/year for the same lifestyle
• Prices approximately double every 24 years at 3% inflation

Beating inflation:
• Cash and regular savings accounts typically lose to inflation
• Bonds roughly keep pace
• Stocks have historically beaten inflation by 4-7% annually
• Real estate often keeps pace with or beats inflation

This is why investing (not just saving) is essential for long-term financial health.`}],keyTakeaways:["Compound interest can work for you (savings) or against you (debt)","Longer loan terms mean lower payments but higher total cost","Starting to invest early dramatically reduces how much you need to save",'Inflation erodes purchasing power — aim for "real" returns above inflation',"The Rule of 72 estimates doubling time: 72 ÷ interest rate"]},"gc-1":{id:"gc-1",title:"How Government Works",introduction:"Understanding how government works is essential for being an active citizen. This lesson covers the basic structure of democratic government, how laws are made, and how you can participate in the political process.",sections:[{heading:"Branches of Government",videoUrl:"https://www.youtube.com/embed/HuFR5XBYLfU",content:`Most democratic governments have three branches that check and balance each other:

Legislative Branch (Congress/Parliament):
• Makes laws
• Controls government spending
• In the US: Senate (100 members) and House of Representatives (435 members)
• Represents the people directly

Executive Branch (President/Prime Minister):
• Enforces laws
• Manages day-to-day government operations
• Commands the military
• Conducts foreign policy
• In the US: President, Vice President, Cabinet, and federal agencies

Judicial Branch (Courts):
• Interprets laws
• Determines if laws are constitutional
• Resolves disputes
• In the US: Supreme Court (9 justices) and lower federal courts
• Judges often serve for life to remain independent

Why separation of powers?
• Prevents any one person or group from having too much control
• Each branch can check the others
• Creates deliberation and compromise
• Protects individual rights from government overreach`},{heading:"How Laws Are Made",content:`The process of turning an idea into a law:

1. Introduction:
• A member of the legislature proposes a bill
• Anyone can suggest an idea, but only legislators can formally introduce it

2. Committee Review:
• Bill goes to a relevant committee (e.g., education bills to education committee)
• Committee studies, debates, and may amend the bill
• Most bills die in committee — they're never voted on

3. Floor Debate and Vote:
• If approved by committee, the full chamber debates
• Amendments may be added
• Requires majority vote to pass

4. Other Chamber:
• In bicameral systems (two chambers), bill goes to the other house
• Goes through similar process
• Both chambers must pass identical versions

5. Executive Action:
• Bill goes to President/Governor
• They can sign (becomes law), veto (reject), or ignore
• Veto can often be overridden by supermajority (2/3 vote)

6. Judicial Review:
• Courts can later rule a law unconstitutional
• This invalidates the law

The process is deliberately slow to encourage careful deliberation.`},{heading:"Levels of Government",content:`Government operates at multiple levels, each with different responsibilities:

Federal/National Government:
• Defense and military
• Foreign policy and international trade
• Currency and monetary policy
• Interstate commerce
• Immigration
• Constitutional rights

State/Provincial Government:
• Education policy
• State roads and infrastructure
• Professional licensing
• State criminal laws
• Elections administration
• Most policing

Local Government (City/County):
• Local police and fire
• Zoning and land use
• Local roads and utilities
• Parks and recreation
• Local schools (with state oversight)
• Property taxes

Federalism:
• Powers are divided between national and state governments
• 10th Amendment (US): Powers not given to federal government belong to states
• Creates "laboratories of democracy" — states can try different approaches
• Can create complexity when laws differ by state

Why local government matters:
• Most directly affects daily life
• Easier to participate and have impact
• Lower voter turnout means your vote counts more`},{heading:"Civic Participation",content:`Democracy requires participation. Here's how you can engage:

Voting:
• The most basic civic duty
• Research candidates and issues
• Vote in local elections too — they often have the most direct impact
• Check your voter registration at vote.org

Beyond voting:
• Contact your representatives about issues you care about
• Attend town halls and public meetings
• Serve on local boards and commissions
• Join civic organizations
• Write letters to the editor
• Participate in peaceful protests
• Run for office (even local positions)

Jury duty:
• Not just an obligation — a right
• Ensures peers judge legal cases
• Critical check on government power

Staying informed:
• Follow news from multiple sources
• Understand different perspectives
• Distinguish between news and opinion
• Check facts before sharing

Being a good citizen isn't just about following rules — it's about active engagement in your community and democracy.`}],keyTakeaways:["Three branches of government check and balance each other","Laws must pass both legislative chambers and executive approval","Federal, state, and local governments have different responsibilities","Voting is the most basic form of civic participation","Local government often has the most direct impact on daily life"]},"gc-2":{id:"gc-2",title:"Modern World History",introduction:"To understand where we're going, we need to understand where we've been. This lesson covers the major events and trends from 1990 to present that have shaped our current world.",sections:[{heading:"End of the Cold War (1989-1991)",videoUrl:"https://www.youtube.com/embed/ygi5u1yBFbE",content:`The Cold War was a 45-year standoff between the United States and Soviet Union. Its end reshaped the world:

Key events:
• 1989: Fall of the Berlin Wall — symbol of Cold War division
• 1989-1991: Eastern European countries break from Soviet control
• 1991: Soviet Union dissolves into 15 separate countries
• Russia emerges as primary successor state

Why it happened:
• Soviet economy couldn't keep pace with the West
• Arms race was financially unsustainable
• Reforms (glasnost/perestroika) opened up criticism
• Eastern European peoples demanded freedom

Consequences:
• US becomes world's sole superpower
• Global spread of democracy and markets (for a time)
• NATO expands eastward
• New conflicts emerge in former Soviet regions
• Optimism about "end of history" — proved premature

The world order we inherited is still largely shaped by this moment.`},{heading:"The Digital Revolution",content:`Technology transformed human civilization in just 30 years:

Timeline:
• 1990s: World Wide Web created and popularized
• Late 1990s: Dot-com boom (and bust)
• 2004: Facebook launches
• 2007: iPhone releases — smartphones go mainstream
• 2010s: Social media becomes dominant
• 2020s: AI and machine learning accelerate

Impacts on society:
• Information: Instant access to nearly all human knowledge
• Communication: Global, instant, and free
• Economy: New industries, disrupted old ones
• Work: Remote work, gig economy, automation
• Politics: New forms of organizing — and manipulation
• Social: Changed how we form relationships and communities

The double-edged sword:
• Democratized information but also misinformation
• Connected people but also isolated them
• Created opportunity but also inequality
• Empowered individuals but also surveillance

We're still learning how to live with technology we created faster than we understood.`},{heading:"Globalization and Its Discontents",content:`Globalization accelerated dramatically after 1990:

What happened:
• Trade barriers fell worldwide
• Manufacturing moved to lower-cost countries
• Global supply chains developed
• Migration increased
• Cultural exchange accelerated

Benefits:
• Hundreds of millions lifted out of poverty (especially in Asia)
• Lower prices for consumers
• Greater variety of goods and services
• Faster spread of innovation
• Increased cultural exchange

Costs:
• Manufacturing job losses in developed countries
• Growing inequality within nations
• Environmental impacts from shipping and production
• Cultural homogenization concerns
• Power concentrated in multinational corporations

Backlash:
• Anti-globalization protests (1990s-2000s)
• Rise of nationalist movements (2010s)
• Trade wars and protectionism
• Brexit and similar movements
• Debate continues: Reform globalization or retreat from it?

COVID-19 revealed vulnerabilities in global supply chains and accelerated some deglobalization.`},{heading:"Major Events: 2001-Present",content:`Events that defined the 21st century so far:

September 11, 2001:
• Terrorist attacks on US kill nearly 3,000
• Launches "War on Terror"
• Wars in Afghanistan (2001-2021) and Iraq (2003-2011)
• Increased surveillance and security measures
• Ongoing debate about civil liberties vs. security

2008 Financial Crisis:
• Housing bubble bursts, banks fail
• Global recession — worst since 1930s
• Massive government bailouts
• Led to Occupy movement and populist politics
• Regulations tightened, then loosened again

Arab Spring (2011):
• Pro-democracy protests across Middle East
• Some dictators overthrown
• Mixed results: democracy, civil war, or authoritarian return
• Showed power of social media organizing

COVID-19 Pandemic (2020-):
• Global health crisis kills millions
• Economies shut down worldwide
• Accelerated remote work and digitalization
• Exposed inequalities and supply chain weaknesses
• Largest vaccination campaign in history

Climate Change Awareness:
• Scientific consensus solidified
• Paris Agreement (2015)
• Youth activism (Greta Thunberg)
• Extreme weather events increasing
• Debate over solutions continues`}],keyTakeaways:["The Cold War's end reshaped global politics and created the current world order","The digital revolution transformed every aspect of modern life","Globalization lifted millions from poverty but created new tensions","9/11 launched a new era of security concerns and military intervention","Financial crises, pandemics, and climate change are defining 21st century challenges"]},"gc-3":{id:"gc-3",title:"Global Economics Basics",introduction:"The global economy connects us all. Understanding basic economic concepts helps you make sense of news about trade, currencies, and international relations.",sections:[{heading:"Supply, Demand, and Markets",videoUrl:"https://www.youtube.com/embed/kIFBaaPJUO0",content:`Markets are where buyers and sellers meet. Prices are determined by supply and demand:

Demand: How much people want to buy at various prices
• Higher price → people buy less
• Lower price → people buy more

Supply: How much sellers offer at various prices  
• Higher price → sellers produce more
• Lower price → sellers produce less

Equilibrium:
• Where supply and demand meet
• This determines the market price
• If demand exceeds supply → price rises
• If supply exceeds demand → price falls

Real examples:
• Concert tickets: Limited supply + high demand = expensive tickets (or scalping)
• Seasonal produce: Abundant supply in season = lower prices
• Oil prices: Global supply disruptions = prices spike

Markets aren't perfect — they can fail when:
• One party has more information than another
• There are monopolies or cartels
• External costs aren't included (pollution)
• Essential goods become unaffordable`},{heading:"International Trade",content:`Why do countries trade?

Comparative advantage:
• Countries specialize in what they produce most efficiently
• Then trade for other goods
• Everyone can be better off through trade
• Example: Country A is better at making cars, Country B at growing coffee — both benefit by specializing and trading

Trade agreements:
• Reduce tariffs (taxes on imports)
• Set common rules and standards
• Examples: NAFTA/USMCA, European Union, WTO rules

Trade deficits/surpluses:
• Deficit: A country imports more than it exports
• Surplus: A country exports more than it imports
• The US has had a trade deficit for decades
• Not inherently good or bad — depends on context

Protectionism:
• Policies that restrict imports
• Tariffs, quotas, regulations
• Aims to protect domestic jobs/industries
• Can raise prices for consumers
• Often leads to retaliation from other countries

Current tensions:
• US-China trade disputes
• Supply chain concerns after COVID
• Debate over "reshoring" manufacturing
• Environmental standards in trade deals`},{heading:"Currency and Exchange Rates",content:`Different countries use different currencies. Exchange rates determine their relative values:

How exchange rates work:
• If $1 = €0.85, you can exchange 1 dollar for 0.85 euros
• Rates change constantly based on supply and demand for currencies

What affects exchange rates:
• Interest rates (higher rates attract foreign investment)
• Inflation (high inflation weakens a currency)
• Economic performance (strong economy = strong currency)
• Political stability
• Trade balances

Why exchange rates matter:
• Travel: Strong dollar means your money goes further abroad
• Imports/exports: Weak dollar makes US exports cheaper for foreigners
• Investments: Currency changes affect international investment returns

Currency manipulation:
• Some countries keep their currency artificially weak
• This makes their exports cheaper
• Creates trade tensions

Major currencies:
• US Dollar: World's primary reserve currency
• Euro: Used by 20 European countries
• Yen: Japan's currency
• Yuan/RMB: China's currency, increasingly important`},{heading:"Economic Indicators",content:`Key numbers that describe how an economy is doing:

GDP (Gross Domestic Product):
• Total value of goods and services produced
• Primary measure of economic size
• GDP growth rate shows if economy is expanding or shrinking
• US GDP: ~$25 trillion

Unemployment Rate:
• Percentage of workforce actively looking but unable to find work
• "Full employment" is usually considered 4-5%
• Doesn't count people who've stopped looking

Inflation:
• Rate at which prices are rising
• Measured by Consumer Price Index (CPI)
• Target is usually around 2% annually
• Too high = purchasing power erodes
• Too low = might indicate weak demand

Stock Market:
• Not the same as the economy!
• Reflects investor expectations about future profits
• Dow Jones, S&P 500, NASDAQ are major indexes
• Goes up when investors are optimistic

Interest Rates:
• The "price" of borrowing money
• Set by central banks (Federal Reserve in US)
• Lower rates encourage borrowing and spending
• Higher rates slow down economy and reduce inflation

When you hear economic news, ask: What do these numbers actually mean for people's lives?`}],keyTakeaways:["Prices are determined by supply and demand in markets","Countries trade based on comparative advantage","Exchange rates affect international purchasing power","GDP, unemployment, and inflation are key economic indicators","Stock market performance doesn't equal overall economic health"]},"gc-4":{id:"gc-4",title:"Climate Change & Environment",introduction:"Climate change is one of the defining challenges of our time. Understanding the science, impacts, and potential solutions helps you engage with this critical issue.",sections:[{heading:"The Science of Climate Change",videoUrl:"https://www.youtube.com/embed/dcBXmj1nMTQ",content:`What is climate change?

The Greenhouse Effect:
• Certain gases trap heat in Earth's atmosphere
• Without it, Earth would be too cold for life
• Problem: We're enhancing it dramatically

The evidence:
• Global average temperature up ~1.1°C since 1880
• Rate of warming accelerating
• 2014-2023: Hottest decade on record
• Arctic ice declining, sea levels rising
• Ocean acidification increasing

What's causing it:
• Burning fossil fuels (coal, oil, gas) releases CO2
• Deforestation reduces CO2 absorption
• Agriculture produces methane and nitrous oxide
• CO2 levels: 280 ppm (pre-industrial) → 420+ ppm (today)
• Highest in at least 800,000 years

Scientific consensus:
• 97%+ of climate scientists agree humans are causing warming
• Every major scientific organization concurs
• Basic physics has been understood since the 1800s
• Debate is over the pace and details, not the fundamentals`},{heading:"Current and Future Impacts",content:`Climate change is already affecting us — and impacts will intensify:

Weather extremes:
• More frequent and intense heat waves
• Stronger hurricanes and typhoons
• More severe droughts and floods
• Longer wildfire seasons

Ecosystem changes:
• Species shifting ranges toward poles
• Coral reef bleaching
• Earlier spring events
• Ecosystem mismatches

Sea level rise:
• Currently rising ~3.4 mm/year
• Threatens coastal cities and island nations
• Could displace hundreds of millions

Human impacts:
• Food and water security threats
• Health effects (heat, disease, air quality)
• Climate migration and conflict
• Economic damages

Feedback loops that could accelerate change:
• Melting permafrost releases stored methane
• Less ice means less sunlight reflected back to space
• Forests stressed by heat become carbon sources

The window to limit warming to 1.5-2°C is closing rapidly.`},{heading:"Solutions and Actions",content:`Addressing climate change requires action at every level:

At the macro level:
• Transition from fossil fuels to renewable energy
• Electrify transportation
• Improve energy efficiency in buildings
• Protect and restore forests
• Change agricultural practices
• Develop carbon capture technologies

Policy approaches:
• Carbon pricing (tax or cap-and-trade)
• Regulations on emissions
• Subsidies for clean energy
• International agreements (Paris Agreement)
• Investment in research and development

Individual actions that matter most:
• Reduce car and air travel when possible
• Eat less meat (especially beef)
• Choose energy-efficient housing and appliances
• Support clean energy policies
• Vote for climate-conscious leaders
• Talk about climate change

Why individual AND systemic action:
• Individual changes aren't enough alone
• But they influence culture and create demand
• And we vote, invest, and work in systems
• Change happens when individuals push for systemic solutions

Hope:
• Clean energy costs have plummeted
• Electric vehicle adoption accelerating
• Many countries and companies making commitments
• Young people mobilizing for change`},{heading:"Climate Justice",content:`Climate change doesn't affect everyone equally:

Who contributes most:
• Wealthy countries contributed most historical emissions
• US: 4% of population, 25% of historical emissions
• Per capita: Americans emit 10x the global average

Who suffers most:
• Developing countries with fewer resources to adapt
• Low-lying island nations facing existential threat
• Poor communities in all countries
• Future generations

Climate justice principles:
• Those most responsible should do most to address it
• Those most affected should have voice in solutions
• Transition should be fair to workers in fossil fuel industries
• Clean energy benefits should be accessible to all

Historical context:
• Developed nations industrialized using fossil fuels
• Now developing nations face restrictions on same path
• Questions of fairness in who pays for transition

Environmental justice:
• Pollution sources often located in low-income communities
• Those communities often lack political power
• Clean energy transition is opportunity to address this

Building a sustainable future requires equity and inclusion, not just technology.`}],keyTakeaways:["Burning fossil fuels is causing Earth's climate to change","Impacts include extreme weather, sea level rise, and ecosystem disruption","Solutions require both individual action and systemic change","Climate change affects vulnerable communities disproportionately","Clean energy transition is happening — the question is whether fast enough"]},"gc-5":{id:"gc-5",title:"Social Movements & Change",introduction:"Throughout history, ordinary people have come together to create extraordinary change. Understanding how social movements work helps you become an effective citizen and change-maker.",sections:[{heading:"What Makes Movements Succeed",videoUrl:"https://www.youtube.com/embed/xJfSaQlMDvk",content:`Social movements are collective efforts to promote or resist change:

Key elements of successful movements:
• Clear goals and demands
• Broad coalition building
• Strategic use of media and messaging
• Combination of "insider" and "outsider" tactics
• Persistence over time
• Leadership development at all levels

The "3.5% rule":
• Research suggests no government has withstood a challenge of 3.5% of population engaged in sustained nonviolent resistance
• That's about 11 million people in the US
• Key is active, committed participation, not just sympathy

Why nonviolent movements work:
• Lower barriers to participation
• Harder to justify repression
• Easier to maintain moral high ground
• Create more defections from opponents
• More sustainable over time

Historical success rates:
• Nonviolent campaigns have been twice as likely to succeed as violent ones
• This holds even against brutal regimes
• Violence tends to reduce public support and invite crackdowns`},{heading:"Historical Social Movements",content:`Lessons from movements that changed the world:

Civil Rights Movement (US, 1950s-60s):
• Fought racial segregation and discrimination
• Tactics: Boycotts, sit-ins, marches, voter registration
• Key wins: Civil Rights Act, Voting Rights Act
• Lessons: Combining legal strategy, direct action, and moral appeals

Women's Suffrage:
• 70+ years of organizing for women's right to vote
• Tactics: Petitions, protests, civil disobedience
• 19th Amendment passed in 1920 (US)
• Lessons: Persistence across generations, adapting strategies

Labor Movement:
• Fought for worker rights: 8-hour day, weekends, safety
• Tactics: Strikes, unions, political organizing
• Created the middle class as we know it
• Lessons: Collective bargaining power, economic leverage

Anti-Apartheid Movement:
• Ended legal racial segregation in South Africa
• International boycotts and divestment
• Internal resistance and organizing
• Lessons: Global solidarity, economic pressure

LGBTQ+ Rights Movement:
• From Stonewall (1969) to marriage equality (2015) and beyond
• Rapid shift in public opinion
• Lessons: Visibility, coming out, cultural change alongside legal change`},{heading:"Modern Movements and Tactics",content:`Today's movements build on the past while using new tools:

Black Lives Matter:
• Began: 2013 after Trayvon Martin verdict
• Decentralized, #hashtag-era movement
• Combines protest with policy demands
• Influenced policing debates nationwide

Climate Movement:
• Youth-led actions (school strikes, Fridays for Future)
• Direct action (pipeline protests)
• Lobbying and electoral politics
• Divestment campaigns

Me Too Movement:
• Exposed widespread sexual harassment
• Social media amplified survivor voices
• Changed workplace policies and norms
• Lessons: Power of shared stories

Digital tools:
• Rapid mobilization via social media
• Viral spread of information/images
• Online organizing and fundraising
• But also: Surveillance, "slacktivism," algorithm manipulation

Challenges for modern movements:
• Attention spans are shorter
• Easier to start movements, harder to sustain
• Online activism doesn't always translate to offline change
• Misinformation and counter-movements

Successful modern movements combine online and offline tactics.`},{heading:"Creating Change in Your Community",content:`You don't have to wait to make a difference:

Start local:
• Local issues are often more tractable
• Local government is more accessible
• Changes can happen faster
• Success builds skills and confidence

Steps to effective advocacy:
1. Research the issue deeply
2. Identify who has power to make the change
3. Build a coalition of supporters
4. Develop clear, specific demands
5. Choose tactics appropriate to your context
6. Persist through setbacks

Types of tactics:
• Direct service: Help individuals directly
• Organizing: Build collective power
• Advocacy: Influence decision-makers
• Education: Change how people think
• Protest: Demonstrate public support
• Litigation: Use legal system

Finding your role:
• Not everyone needs to be a public leader
• Movements need organizers, researchers, artists, donors, witnesses
• Find what you're good at and contribute that

Self-care and sustainability:
• Burnout is real — pace yourself
• Build community with fellow change-makers
• Celebrate small wins
• Remember: Change often takes longer than expected`}],keyTakeaways:["Successful movements have clear goals and broad coalitions","Nonviolent movements are historically twice as likely to succeed","Historical movements took persistence across years or decades","Modern movements combine digital tools with traditional tactics","Local action is a powerful starting point for creating change"]},"cm-1":{id:"cm-1",title:"Writing That Gets Read",introduction:"Clear writing is clear thinking made visible. Whether you're writing an essay, email, or social media post, the ability to communicate clearly in writing is one of the most valuable skills you can develop.",sections:[{heading:"The Foundation of Good Writing",videoUrl:"https://www.youtube.com/embed/vtIzMaLkCaM",content:`Good writing starts before you write a single word:

Know your purpose:
• What do you want readers to know, feel, or do?
• Everything in your writing should serve this purpose
• If it doesn't contribute, cut it

Know your audience:
• Who will read this?
• What do they already know?
• What do they care about?
• What language and tone will resonate?

Organize your thoughts:
• Start with an outline, even a rough one
• What's your main point?
• What are your supporting points?
• What order makes most sense?

The inverted pyramid:
• Put the most important information first
• Then supporting details
• Then background
• Readers often don't finish — front-load value`},{heading:"Writing Clear Sentences",content:`Clarity is the most important quality of good writing:

Use simple words:
• "Use" not "utilize"
• "Help" not "facilitate"  
• "About" not "regarding"
• Never use a complex word when a simple one will do

Keep sentences short:
• Average sentence: 15-20 words
• Mix short and medium sentences
• Long sentences are harder to follow
• One idea per sentence

Active voice over passive:
• Active: "The dog bit the man."
• Passive: "The man was bitten by the dog."
• Active is clearer, more direct, more engaging

Cut unnecessary words:
• "In order to" → "to"
• "At this point in time" → "now"
• "The reason why is that" → "because"
• "In the event that" → "if"

Be specific:
• "Soon" → "by Friday"
• "Many" → "73%"
• "Improve" → "reduce wait times by 20%"
• Specific details are more credible and memorable`},{heading:"Structuring Your Writing",content:`Structure helps readers follow your thinking:

Strong openings:
• Hook the reader immediately
• State your main point early
• Don't bury the lead
• First impressions matter

Paragraphs:
• One main idea per paragraph
• Topic sentence first
• Supporting evidence/details follow
• Transition to next paragraph

Transitions:
• Guide readers between ideas
• "However," "Therefore," "Additionally," "For example"
• Transitions show relationships between ideas
• Without them, writing feels choppy

Strong endings:
• Don't just trail off
• Summarize key points
• Call to action if appropriate
• Leave readers with something memorable

The "So what?" test:
• After every section, ask "So what?"
• Why should the reader care?
• What's the implication?
• Connect information to meaning`},{heading:"Editing and Revision",content:`Good writing is rewriting:

The editing process:
1. Write a rough draft — don't edit while writing
2. Step away before editing (hours or days if possible)
3. Read aloud to catch awkward phrases
4. Cut ruthlessly — most drafts are too long
5. Get feedback from others
6. Final proofread for errors

Questions to ask when editing:
• Is my main point clear?
• Does every sentence earn its place?
• Are there words I can cut?
• Is this as simple as it can be?
• Would a reader care about this?

Common issues to fix:
• Unnecessary qualifiers ("very," "really," "quite")
• Throat-clearing introductions ("I think that...")
• Repeated information
• Jargon and buzzwords
• Missing transitions

Tools that help:
• Hemingway App (readability)
• Grammarly (grammar and style)
• Reading aloud (catches problems you'd miss silently)
• A trusted friend or colleague

Remember: The goal is communication, not showing off. Simple is almost always better.`}],keyTakeaways:["Know your purpose and audience before writing","Use simple words and short sentences","Active voice is clearer than passive voice","Structure with strong openings, clear paragraphs, and purposeful endings","Good writing is rewriting — always edit and revise"]},"cm-2":{id:"cm-2",title:"Professional Communication",introduction:"Email and workplace communication can make or break your professional reputation. This lesson covers how to communicate clearly and professionally in any work context.",sections:[{heading:"Email Essentials",content:`Email is the primary communication tool in most workplaces:

Subject lines that work:
• Be specific: "Meeting rescheduled to Thursday 2pm"
• Be clear about action needed: "Action required: Budget approval by Friday"
• Keep it short but informative
• Bad: "Question" or "Hi" or "Update"

Structure of effective emails:
1. Clear subject line
2. Greeting
3. Purpose/context (1-2 sentences)
4. Main content
5. Clear ask or next steps
6. Closing

Keep it short:
• Most people skim emails
• Get to the point immediately
• Use bullet points for multiple items
• Aim for 5 sentences or fewer when possible

When to email vs. other channels:
• Email: Documentation, complex information, non-urgent
• Chat/Slack: Quick questions, casual discussion
• Phone/video: Sensitive topics, complex discussions, building relationships
• In-person: Important conversations, difficult feedback`},{heading:"Tone in Written Communication",content:`Written communication lacks tone of voice and body language. Be intentional:

Professional ≠ cold:
• Be warm but concise
• "Thanks for sending this!" vs. "Received."
• Use names: "Hi Sarah," not "Hello,"

Watch for misinterpretation:
• What sounds direct to you might seem curt to others
• Sarcasm rarely translates in text
• When in doubt, be more friendly

Calibrate formality:
• Match the culture of your workplace
• When in doubt, start more formal
• Let others set the tone first
• Relaxing formality is easier than tightening it

Avoid:
• ALL CAPS (reads as shouting)
• Too many exclamation points!!!
• Text-speak in professional contexts
• Passive-aggressive language
• Overly long emails when short would do

Cultural awareness:
• Communication norms vary across cultures
• Some prefer more formal language
• Some expect more relationship-building before business
• When working across cultures, observe and adapt`},{heading:"Difficult Communications",content:`Some messages are harder to write. Here's how to handle them:

Saying no:
1. Start with appreciation or acknowledgment
2. State your decision clearly
3. Give a brief reason (you don't owe a lengthy explanation)
4. Offer alternatives if possible
5. End positively

Example: "Thanks for thinking of me for this project. I won't be able to take it on this quarter because of existing commitments. Would it help if I suggested some colleagues who might be a good fit?"

Giving negative feedback:
• Be specific about the issue
• Focus on behavior, not personality
• Explain impact
• Suggest a path forward
• Best done in person when possible, followed up in writing

Responding to criticism:
• Don't respond when emotional
• Acknowledge what's valid
• Clarify misunderstandings without being defensive
• Propose solutions

Delivering bad news:
• Don't bury the lead
• Be direct but compassionate
• Explain context
• Focus on what can be done now`},{heading:"Building Your Professional Voice",content:`Over time, develop a communication style that represents you well:

Be yourself (professionally):
• You don't need to sound like a robot
• Personality can come through while being professional
• Authenticity builds trust

Be reliable:
• Respond to messages in reasonable timeframes
• Do what you say you'll do
• If you can't meet a deadline, communicate early

Be thoughtful:
• Proofread before sending
• Consider timing (don't send non-urgent emails at midnight)
• Think about cc's and reply-all carefully
• Protect confidential information

Build your reputation:
• Every communication shapes how people see you
• Be the person who's clear, helpful, and professional
• Small things matter over time

Templates and systems:
• Create templates for common messages
• Use email scheduling for non-urgent messages
• Set up folders and labels to stay organized
• Block time for communication vs. deep work`}],keyTakeaways:["Write clear subject lines that describe the email's purpose","Get to the point quickly — most people skim emails","Calibrate tone to be warm and professional","Handle difficult messages with care and directness","Your communication style shapes your professional reputation"]},"cm-3":{id:"cm-3",title:"Public Speaking Basics",introduction:"Fear of public speaking is common, but it's also a skill you can develop. Whether you're presenting in class, speaking at a meeting, or giving a toast, these fundamentals will help you communicate with confidence.",sections:[{heading:"Managing Speaking Anxiety",videoUrl:"https://www.youtube.com/embed/tShavGuo0_E",content:`Nearly everyone feels nervous before speaking. Here's how to manage it:

Reframe nervousness:
• Anxiety and excitement are physiologically similar
• Tell yourself you're excited, not scared
• Some adrenaline actually improves performance

Preparation reduces fear:
• Know your material inside and out
• Practice out loud, not just in your head
• Anticipate questions and prepare answers
• The more prepared you are, the calmer you'll feel

Physical strategies:
• Deep breathing: In for 4, hold for 4, out for 4
• Power poses: Stand tall with hands on hips for 2 minutes before
• Arrive early to get comfortable in the space
• Don't hold caffeine — it can increase jitters

Mental strategies:
• Visualize success
• Focus on your message, not yourself
• Remember: Audiences want you to succeed
• Mistakes aren't as noticeable as you think

The more you speak, the easier it gets. Start with low-stakes opportunities and build up.`},{heading:"Structuring a Talk",content:`A clear structure helps both you and your audience:

The classic structure:
1. Opening hook (grab attention)
2. Tell them what you'll tell them (overview)
3. Tell them (main content)
4. Tell them what you told them (summary)
5. Closing (call to action, memorable ending)

Opening strategies:
• Ask a question
• Tell a story
• State a surprising fact
• Address a problem the audience has

The "Rule of Three":
• Three main points are ideal
• Easy for audiences to remember
• Provides enough depth without overloading

Transitions:
• Signal when you're moving to a new point
• "Now that we've covered X, let's move to Y"
• Help the audience follow along

Closing strong:
• Don't just trail off or say "that's it"
• Summarize your main takeaway
• End with a call to action or memorable thought
• "What's the one thing I want you to remember?"`},{heading:"Delivery Techniques",content:`How you say it matters as much as what you say:

Eye contact:
• Look at individuals, not over heads
• Move your gaze around the room
• Hold eye contact for 3-5 seconds before moving on
• If too nervous, look at foreheads

Voice:
• Speak slower than feels natural (nerves speed us up)
• Vary your pace and volume for emphasis
• Pause intentionally — pauses are powerful
• Project to the back of the room

Body language:
• Stand tall, shoulders back
• Use natural hand gestures
• Move purposefully (don't pace or sway)
• Smile when appropriate

Avoid:
• "Um," "uh," "like" — pause silently instead
• Reading from notes or slides
• Turning your back to the audience
• Apologizing for being nervous

If something goes wrong:
• Don't panic — audiences are forgiving
• Make a brief acknowledgment and move on
• Have a printed backup if using slides
• Remember: Only you know what you planned to say`},{heading:"Using Visual Aids Effectively",content:`Slides should support your talk, not replace it:

Less is more:
• One idea per slide
• Few words (6x6 rule: max 6 bullets, 6 words each)
• Large, readable fonts
• High-quality images

Don't read your slides:
• Slides are for the audience, not you
• If you read them, why are you there?
• Use notes or speaker view if needed

Visual design:
• Consistent, clean design
• High contrast for readability
• Avoid busy backgrounds or clip art
• Empty space is okay

When to use slides:
• Visual information (charts, images, videos)
• Key data or quotes
• Not needed for every talk
• Some best talks use no slides at all

Backup plan:
• What if technology fails?
• Could you give this talk without slides?
• Have a printed outline as backup

Remember: You are the presentation. Slides are just a tool.`}],keyTakeaways:["Nervousness is normal — reframe it as excitement","Preparation is the best cure for speaking anxiety","Structure your talk with a clear opening, three main points, and strong close","Vary your voice, make eye contact, and use purposeful movement","Slides should support your message, not replace your voice"]},"cm-4":{id:"cm-4",title:"Active Listening",introduction:"Communication isn't just about speaking — listening might be the more important half. Active listening improves relationships, prevents misunderstandings, and helps you learn and connect more deeply.",sections:[{heading:"Why Listening Matters",content:`Most people listen to reply, not to understand:

The costs of poor listening:
• Misunderstandings and mistakes
• People feel unvalued and disrespected
• Missed information and opportunities
• Damaged relationships

Benefits of good listening:
• Build trust and rapport
• Understand others' needs and perspectives
• Learn more and make better decisions
• Resolve conflicts more effectively
• Stand out — good listeners are rare

The listening gap:
• We think at about 400 words per minute
• We speak at about 125 words per minute
• That gap can fill with distractions or judgments
• Active listening uses that gap productively`},{heading:"Active Listening Techniques",videoUrl:"https://www.youtube.com/embed/7wUCyjiyXdg",content:`Active listening is a skill you can practice:

Give full attention:
• Put away your phone
• Make eye contact
• Turn toward the speaker
• Don't multitask

Show you're listening:
• Nod and use brief verbal cues ("I see," "mm-hmm")
• Match your facial expression to the topic
• Lean in slightly
• Don't interrupt

Reflect and paraphrase:
• "What I'm hearing is..."
• "It sounds like you're saying..."
• This confirms understanding
• Shows you're actually processing

Ask clarifying questions:
• "Can you tell me more about...?"
• "What did you mean when you said...?"
• "How did that make you feel?"
• Open-ended questions invite more sharing

Summarize:
• "So the main issues are A, B, and C?"
• "If I understand correctly, you need X by Y date?"
• Confirms you've understood correctly
• Lets the speaker correct any misunderstanding`},{heading:"Common Listening Barriers",content:`Be aware of what blocks good listening:

Internal distractions:
• Planning what you'll say next
• Judging the speaker
• Getting triggered emotionally
• Mind wandering to other concerns

External distractions:
• Noise and interruptions
• Technology notifications
• Time pressure
• Physical discomfort

Premature conclusions:
• Thinking you already know what they'll say
• Finishing their sentences
• Assuming you understand before they finish
• Jumping to problem-solving mode

Defensive listening:
• Taking things personally
• Planning your rebuttal
• Looking for things to disagree with
• Protecting your ego instead of understanding

To overcome these:
• Notice when you're not fully present
• Gently refocus on the speaker
• Set aside your agenda temporarily
• Get curious instead of defensive`},{heading:"Responding Effectively",content:`How you respond affects whether people feel heard:

Validate first:
• Acknowledge their feelings or perspective
• "That sounds really frustrating"
• "I can see why you'd feel that way"
• Validation doesn't mean agreement

Wait before advising:
• Most people want to be heard first
• Ask: "Do you want advice or do you want me to listen?"
• Sometimes listening IS the help

If you disagree:
• Acknowledge what you do agree with
• "I see your point about X. Where I see it differently is..."
• Stay curious: Ask questions to understand their view
• You might learn something

Responding to emotions:
• Don't try to fix or minimize feelings
• "That sounds really hard"
• Sit with discomfort — you don't need to solve everything
• Sometimes presence is more valuable than words

In conflict:
• Listen to understand, not to win
• Find the underlying need or concern
• Look for common ground
• Reflect their position before arguing yours`}],keyTakeaways:["Most people listen to reply, not to understand","Give full attention: phone away, eye contact, no multitasking","Reflect and paraphrase to confirm understanding","Notice and overcome internal distractions and defensive listening","Validate first, advise second (if at all)"]}},CC={"hw-3":{id:"hw-3",title:"Sleep Science",introduction:"Sleep isn't just rest — it's when your brain processes memories, your body repairs itself, and your emotions reset. Yet most teenagers are chronically sleep-deprived. Understanding sleep science can transform your health, mood, and performance.",sections:[{heading:"Why Sleep Matters",videoUrl:"https://www.youtube.com/embed/gedoSfZvBgE",content:`Sleep is not optional — it's essential for every aspect of health:

Brain functions during sleep:
• Memory consolidation — moving learning into long-term storage
• Neural cleanup — clearing toxic waste products
• Emotional processing — regulating mood
• Creativity — making new connections between ideas

Physical health:
• Growth hormone release
• Muscle repair and recovery
• Immune system strengthening
• Hormone regulation

What happens without enough sleep:
• Impaired memory and learning
• Weakened immune system
• Increased anxiety and irritability
• Poor decision-making
• Higher risk of accidents
• Long-term: increased risk of obesity, diabetes, heart disease

How much sleep do you need?
• Teenagers: 8-10 hours
• Adults: 7-9 hours
• Quality matters as much as quantity`},{heading:"Understanding Sleep Cycles",content:`Sleep isn't one state — it's multiple stages in a cycle:

The sleep cycle (roughly 90 minutes):
• Stage 1: Light sleep, drifting off
• Stage 2: Body temperature drops, heart rate slows
• Stage 3: Deep sleep — physical restoration
• REM: Rapid Eye Movement — dreaming, memory consolidation

You cycle through these 4-6 times per night.

Deep sleep:
• Most restorative physically
• Harder to wake from
• Primarily in first half of night
• Exercise increases deep sleep

REM sleep:
• Brain highly active, body paralyzed
• Dreams occur
• Critical for learning and emotional health
• More REM in second half of night

Why timing matters:
• Waking mid-cycle leaves you groggy
• Try to wake at end of cycle (after REM)
• Sleep calculators can help time your bedtime
• Consistent wake times help regulate cycles`},{heading:"Sleep Disruptors",content:`Many things interfere with quality sleep:

Screens and blue light:
• Blue light suppresses melatonin (sleep hormone)
• Phones, tablets, computers all emit blue light
• Content can also be mentally stimulating
• Aim for no screens 1 hour before bed

Caffeine:
• Half-life of 5-6 hours (half still in system)
• Afternoon coffee affects nighttime sleep
• Cut off caffeine by early afternoon
• Remember: energy drinks, tea, and chocolate have caffeine too

Irregular schedules:
• Your body has an internal clock (circadian rhythm)
• Irregular bedtimes confuse this clock
• Social jet lag: sleeping differently on weekends
• Consistency helps — even on weekends

Stress and anxiety:
• Racing thoughts prevent sleep
• Worry activates alert systems
• Creates a cycle: stress → poor sleep → more stress

Environment:
• Too warm (ideal: 65-68°F / 18-20°C)
• Too bright (even small lights)
• Noise disruptions
• Uncomfortable bed`},{heading:"Building Better Sleep Habits",content:`Sleep hygiene — habits that promote good sleep:

Before bed:
• Wind-down routine 30-60 minutes before
• Dim lights in the evening
• Avoid screens or use night mode/blue light glasses
• No caffeine after early afternoon
• No large meals close to bedtime
• Relaxation: reading, stretching, meditation

Your bedroom:
• Cool, dark, and quiet
• Reserve bed for sleep (not homework or scrolling)
• Consider blackout curtains
• White noise if needed

Wake time matters most:
• Set a consistent wake time first
• Your body will adjust bedtime naturally
• Morning light exposure helps set your clock
• Avoid hitting snooze — it doesn't help

If you can't sleep:
• Don't lie in bed frustrated
• Get up, do something calm in dim light
• Return when sleepy
• Don't check the time repeatedly

Napping wisely:
• Keep naps under 20-30 minutes
• Nap before 3 PM
• Long or late naps disrupt nighttime sleep`}],keyTakeaways:["Sleep is essential for memory, health, and emotional regulation","Teenagers need 8-10 hours per night","Screens and caffeine are major sleep disruptors","Consistent wake times are more important than consistent bedtimes","Good sleep habits can be learned and practiced"]},"hw-4":{id:"hw-4",title:"Nutrition & Fitness Basics",introduction:"What you eat and how you move affects everything — your energy, mood, focus, and long-term health. This lesson covers the evidence-based basics, cutting through fad diets and fitness myths.",sections:[{heading:"Nutrition Fundamentals",videoUrl:"https://www.youtube.com/embed/H7Aa4N3hJjE",content:`Understanding what your body needs:

Macronutrients (you need all three):
• Carbohydrates: Primary energy source. Found in grains, fruits, vegetables.
• Protein: Building blocks for muscles, hormones, enzymes. Found in meat, fish, eggs, legumes.
• Fats: Essential for brain health, hormones, nutrient absorption. Found in nuts, oils, fish, avocados.

Micronutrients:
• Vitamins and minerals
• Needed in smaller amounts
• Essential for various body functions
• Usually covered if you eat varied whole foods

Calories:
• Energy measurement in food
• Balance: Calories in vs. calories out
• Everyone's needs differ based on age, size, activity
• Focus on food quality, not just calorie counting

Hydration:
• Water is essential for every body function
• General guideline: 8 cups (64 oz) per day
• More if active or in hot weather
• Urine should be pale yellow`},{heading:"Eating Well in Practice",content:`Simple principles that work:

Eat mostly whole foods:
• Foods that look like they came from nature
• Vegetables, fruits, whole grains, lean proteins
• Minimize highly processed foods
• "If it comes in a package with more than 5 ingredients, think twice"

The plate method:
• 1/2 plate: Vegetables and fruits
• 1/4 plate: Protein
• 1/4 plate: Whole grains
• Simple visual guide that works

Don't fear any food group:
• Carbs aren't evil
• Fat doesn't make you fat
• Protein isn't just for bodybuilders
• Extreme restriction usually backfires

Practical tips:
• Cook at home when possible
• Plan meals ahead to avoid impulse choices
• Keep healthy snacks available
• Learn to read nutrition labels
• Eat regular meals to avoid extreme hunger

Relationship with food:
• Food is fuel AND pleasure — both are okay
• Avoid labeling foods as "good" or "bad"
• All foods fit in moderation
• If you're struggling with eating, seek help`},{heading:"Physical Activity Basics",content:`Movement is medicine:

Benefits of exercise:
• Improves mood and reduces anxiety
• Boosts energy and focus
• Strengthens heart and muscles
• Improves sleep
• Reduces risk of chronic diseases
• Helps maintain healthy weight

How much is enough?
• Minimum: 150 minutes moderate activity per week
• That's just 30 minutes, 5 days a week
• Or 75 minutes vigorous activity
• Plus strength training 2+ days per week

Types of exercise:
• Cardio/aerobic: Walking, running, swimming, cycling — strengthens heart and lungs
• Strength training: Weights, bodyweight exercises — builds muscle, strengthens bones
• Flexibility: Stretching, yoga — maintains range of motion
• Balance: Important for injury prevention

Starting from scratch:
• Start small — a 10-minute walk counts
• Build gradually
• Find activities you actually enjoy
• Consistency beats intensity
• Something is always better than nothing`},{heading:"Building Sustainable Habits",content:`Long-term health is about habits, not perfection:

Make it easy:
• Remove barriers to good choices
• Prep healthy snacks in advance
• Keep workout clothes ready
• Have a default healthy meal option

Make it enjoyable:
• Exercise shouldn't be punishment
• Find foods you actually like that are healthy
• Exercise with friends
• Try different activities until something clicks

Handle setbacks:
• One "bad" meal doesn't ruin anything
• Missing a workout isn't failure
• The goal is overall pattern, not perfection
• Get back on track without guilt

Avoid:
• Extreme diets or restrictions
• "Detoxes" and cleanses (your liver already does this)
• Quick-fix promises
• Comparing yourself to social media images

Progress markers beyond weight:
• Energy levels
• Sleep quality
• Mood stability
• Physical capabilities
• How clothes fit
• Blood pressure, cholesterol (ask your doctor)

Small improvements compound over time. Start where you are.`}],keyTakeaways:["Eat mostly whole foods: vegetables, fruits, proteins, whole grains","All macronutrients (carbs, protein, fat) are necessary","Aim for 150 minutes of moderate exercise per week","Consistency matters more than perfection","Find foods and activities you genuinely enjoy"]},"hw-5":{id:"hw-5",title:"Building Healthy Habits",introduction:"We are what we repeatedly do. Habits shape your health, productivity, and happiness more than any single decision. This lesson covers the science of habit formation and how to build routines that stick.",sections:[{heading:"The Science of Habits",videoUrl:"https://www.youtube.com/embed/75d_29QWELk",content:`Habits are automatic behaviors triggered by context:

The habit loop:
1. Cue: A trigger that starts the behavior
2. Routine: The behavior itself
3. Reward: The benefit that reinforces the habit

Example — checking your phone:
• Cue: Notification sound
• Routine: Pick up phone, check apps
• Reward: Social connection, entertainment, dopamine hit

Why habits exist:
• Brain conserves energy by automating routines
• Frees up mental resources for other things
• Once formed, habits require little willpower
• This works for good AND bad habits

Habits vs. willpower:
• Willpower is limited and depletes throughout the day
• Relying on willpower for daily choices is exhausting
• Habits bypass willpower once established
• Building habits is an investment in your future self`},{heading:"Building New Habits",content:`Strategies that make habit formation easier:

Start incredibly small:
• Want to exercise? Start with 5 minutes
• Want to read? Start with one page
• Small enough that you can't say no
• Build up gradually over time

Stack habits:
• Attach new habit to existing routine
• "After I brush my teeth, I will do 5 pushups"
• Existing habit becomes the cue
• No need to remember — it's automatic

Design your environment:
• Make good habits easy, bad habits hard
• Want to eat fruit? Put it on the counter
• Want to limit phone use? Put it in another room
• Environment shapes behavior more than motivation

Track your progress:
• Don't break the chain — mark each successful day
• Visible progress is motivating
• But don't let one miss become two
• "Never miss twice"

Make it satisfying:
• Immediate rewards help habits stick
• Celebrate small wins
• The reward can be simple — a checkmark, a moment of pride
• Long-term benefits aren't enough; the habit needs to feel good now`},{heading:"Breaking Bad Habits",content:`Unwanted habits use the same loop — disrupt it:

Identify the cue:
• When does this habit happen?
• What triggers it?
• Time of day? Emotional state? Location?
• Awareness is the first step

Find the real reward:
• What do you actually get from this habit?
• Stress relief? Entertainment? Social connection?
• Can you get that reward differently?

Interrupt the routine:
• Make the bad habit harder
• Remove cues from your environment
• Create friction (phone in another room, snacks out of sight)
• Replace with a better alternative that provides similar reward

Common bad habit strategies:
• Mindless scrolling → Put phone out of reach, use app timers
• Junk food snacking → Don't keep it in the house
• Procrastination → Make the first step tiny and immediate
• Staying up too late → Set an alarm to start winding down

Be patient:
• Habits took time to form; they take time to break
• Expect setbacks
• Understanding triggers helps you anticipate and plan`},{heading:"Creating Lasting Change",content:`Beyond individual habits — building an identity:

Identity-based change:
• Instead of "I want to run a marathon" → "I'm a runner"
• Instead of "I want to read more" → "I'm a reader"
• Every action is a vote for your identity
• Small actions accumulate into who you become

Systems over goals:
• Goals set direction; systems create progress
• "I want to lose 20 pounds" (goal) vs. "I eat vegetables with every meal" (system)
• Once a goal is achieved, then what?
• Good systems run indefinitely

The compound effect:
• Small improvements (1% better) compound dramatically
• 1% better daily = 37x better in a year
• Works in reverse too — small declines compound
• Focus on trajectory, not current position

Building a habit-friendly life:
• Morning routine sets up your day
• Evening routine protects your sleep
• Design default behaviors for decision points
• Your environment is always shaping you

Keystone habits:
• Some habits trigger positive cascades
• Exercise often improves eating, sleep, and mood
• Making your bed starts the day with accomplishment
• Find the habits that multiply benefits`}],keyTakeaways:["Habits follow a loop: cue → routine → reward","Start with tiny habits that are impossibly small","Stack new habits onto existing routines","Design your environment to make good habits easy","Identity shapes behavior: become the type of person who does X"]},"ct-4":{id:"ct-4",title:"Evaluating Sources",introduction:"In a world of information overload, the ability to evaluate sources is essential. This lesson teaches you how to assess credibility and find reliable information on any topic.",sections:[{heading:"The CRAAP Test",videoUrl:"https://www.youtube.com/embed/EyMT08mD7Ds",content:`A framework for evaluating any source:

Currency:
• When was it published or updated?
• Is the information current enough for your topic?
• Have there been important developments since?
• Some topics need recent sources; others, not as much

Relevance:
• Does it relate to your question?
• Is the information at an appropriate level?
• Is it too technical? Too basic?
• Have you looked at a variety of sources?

Authority:
• Who is the author or publisher?
• What are their credentials?
• Are they qualified to write about this topic?
• Is there contact information?

Accuracy:
• Is the information supported by evidence?
• Can you verify it in other sources?
• Are there citations and references?
• Has it been reviewed or fact-checked?

Purpose:
• Why does this source exist?
• To inform? Persuade? Sell? Entertain?
• Is the purpose clearly stated?
• Might bias affect the content?`},{heading:"Types of Sources",content:`Different sources serve different purposes:

Primary sources:
• Original, firsthand accounts
• Research studies, historical documents, interviews
• Data sets, original works
• Most direct evidence

Secondary sources:
• Analyze or interpret primary sources
• Textbooks, review articles, biographies
• Useful for context and synthesis
• Build on primary research

Tertiary sources:
• Compile information from primary and secondary
• Encyclopedias, dictionaries
• Good starting points
• Not for deep research

Academic/Scholarly sources:
• Written by experts for experts
• Peer-reviewed before publication
• Include citations and methodology
• Found in academic databases

Popular sources:
• Written for general audience
• Newspapers, magazines, blogs
• Easier to read
• Quality varies widely

When to use what:
• Research papers: Need scholarly sources
• General understanding: Quality popular sources fine
• Current events: News sources
• Starting research: Tertiary sources to orient you`},{heading:"Red Flags and Green Flags",content:`Signs that a source is trustworthy or not:

Green flags (good signs):
• Author credentials are clear and relevant
• Organization has good reputation
• Claims are supported with evidence
• Sources are cited
• Multiple perspectives acknowledged
• Clear distinction between news and opinion
• Date is provided
• Contact information available

Red flags (warning signs):
• Anonymous author
• No citations or sources
• Emotional language and loaded words
• Only one perspective presented
• Asks you to share before reading
• Too good/bad to be true
• Domain is unusual (.biz, .info, misspelled names)
• Design is unprofessional
• Full of ads or clickbait

The "lateral reading" technique:
• Don't just evaluate the source itself
• Open new tabs and search for information ABOUT the source
• What do others say about this publication/author?
• Professional fact-checkers do this first

Trust but verify:
• Even good sources make mistakes
• Check key claims in multiple places
• Be especially careful with statistics
• Primary sources are best for important facts`},{heading:"Finding Good Sources",content:`Where to look for reliable information:

Academic databases:
• Google Scholar (scholar.google.com)
• JSTOR, PubMed, etc. (through library)
• Access peer-reviewed research
• Use through school/library for full access

Quality news sources:
• Major newspapers with editorial standards
• Wire services (AP, Reuters)
• Public broadcasting (NPR, PBS, BBC)
• Know the difference between news and opinion sections

Reference sources:
• Encyclopedia Britannica
• Wikipedia (good for overview, follow the citations)
• Specialized encyclopedias for deeper topics

Fact-checking sites:
• Snopes
• PolitiFact
• FactCheck.org
• AP Fact Check

Government and institutional data:
• Census Bureau, Bureau of Labor Statistics
• World Bank, WHO, UN agencies
• University research centers
• Often primary data sources

Evaluating search results:
• Don't just click the first result
• Look at URLs before clicking
• Compare multiple sources
• Go beyond the first page of results`}],keyTakeaways:["Use the CRAAP test: Currency, Relevance, Authority, Accuracy, Purpose","Distinguish between primary, secondary, and tertiary sources","Watch for red flags like anonymous authors, emotional language, no citations","Practice lateral reading — search for info about the source","Good sources include academic databases, quality news, and fact-checkers"]},"ct-5":{id:"ct-5",title:"Debate & Persuasion",introduction:"The ability to argue effectively is valuable in every area of life — from academic discussions to job interviews to personal relationships. This lesson teaches ethical persuasion and how to disagree productively.",sections:[{heading:"The Elements of Argument",videoUrl:"https://www.youtube.com/embed/NKEhdsnKKHs",content:`Every argument has essential components:

Claim: Your main assertion — what you're arguing for
• Should be debatable (reasonable people might disagree)
• Should be specific enough to argue
• Example: "Schools should start later for teenagers"

Evidence: Facts, statistics, examples that support your claim
• The stronger and more relevant, the better
• Multiple types of evidence strengthen your case
• Acknowledge limitations of your evidence

Reasoning: The logic connecting evidence to claim
• Why does your evidence support your conclusion?
• Make the connection explicit
• This is often the weakest part of arguments

Counterarguments: Opposing views
• Acknowledging them shows fairness
• Addressing them strengthens your argument
• Ignoring them weakens your credibility

Warrant: The underlying assumption connecting evidence to claim
• Often unstated but essential
• If your audience doesn't share it, your argument fails
• Make sure your warrants are defensible`},{heading:"Persuasion Techniques",content:`Aristotle identified three modes of persuasion:

Ethos (credibility):
• Why should they trust you?
• Demonstrate knowledge and fairness
• Acknowledge what you don't know
• Show you've done your homework
• Your character matters

Logos (logic):
• Sound reasoning and evidence
• Clear structure and organization
• Statistics, facts, examples
• Logical connections explained

Pathos (emotion):
• Emotional appeal to audience
• Stories and vivid examples
• Appeal to values
• Used ethically, creates connection
• Used manipulatively, is problematic

All three work together:
• Pure logic without credibility falls flat
• Emotion without evidence is manipulation
• Balance varies by context and audience

Know your audience:
• What do they already believe?
• What values do they hold?
• What would persuade them?
• Start from common ground`},{heading:"Disagreeing Productively",content:`How to argue without damaging relationships:

The hierarchy of disagreement:
• Refuting the central point (strongest)
• Refutation with evidence
• Counterargument
• Contradiction
• Responding to tone
• Ad hominem attack (weakest)

Aim for the top of the hierarchy.

Productive disagreement:
• Attack arguments, not people
• Seek to understand before being understood
• Acknowledge valid points on the other side
• Stay curious — you might be wrong
• Keep the goal in mind (understanding, resolution, or persuasion?)

Language that helps:
• "Help me understand..."
• "I see it differently because..."
• "What would change your mind?"
• "That's a fair point. What I'd add is..."
• "We might be defining X differently"

When to stop:
• If it's becoming personal, step back
• Not every disagreement needs resolution
• Some topics are better in different contexts
• Relationships usually matter more than "winning"`},{heading:"Ethical Persuasion",content:`With persuasion power comes responsibility:

Ethical persuasion:
• Based on truth and sound reasoning
• Respects audience autonomy
• Acknowledges uncertainty
• Uses emotion to illuminate, not manipulate
• Welcomes scrutiny

Unethical persuasion:
• Based on lies or misleading information
• Exploits psychological weaknesses
• Presents certainty where none exists
• Uses emotion to override reason
• Discourages questioning

Propaganda techniques to recognize:
• Bandwagon: "Everyone is doing it"
• Fear appeal: Exaggerated threats
• False dilemma: "You're either with us or against us"
• Testimonial: Using celebrities for credibility
• Plain folks: Appearing relatable to seem trustworthy
• Name calling: Labels instead of arguments

Your responsibility:
• Don't use techniques on others you'd resent being used on you
• Be the kind of debater you'd want to argue with
• Aim for truth, not just victory
• Change your mind when evidence warrants it`}],keyTakeaways:["Arguments need claims, evidence, reasoning, and response to counterarguments","Ethos (credibility), logos (logic), and pathos (emotion) work together","Attack arguments, not people — disagree productively","Know the hierarchy of disagreement — aim for refuting central points","Ethical persuasion respects truth, autonomy, and welcomes scrutiny"]}},NC={"fl-1":{id:"fl-1",title:"Money Basics & Budgeting",introduction:"Welcome to your first step toward financial freedom. Understanding money and budgeting is one of the most valuable skills you'll ever learn. Unlike many things taught in school, this is something you'll use every single day for the rest of your life. Let's begin with the fundamentals that will set you up for success.",sections:[{heading:"What Is Money, Really?",content:`Money is simply a tool for exchanging value. Before money existed, people used barter — trading goods directly. Imagine trying to buy a sandwich by offering to mow someone's lawn! Money solves this problem by providing a universal medium of exchange.

Money serves three main purposes:
• A medium of exchange — you can trade it for goods and services
• A store of value — you can save it for later use
• A unit of account — it helps us measure and compare the value of different things

Understanding this helps you see money for what it is: a tool, not a goal. The goal is what money can help you achieve — security, experiences, helping others, or building something meaningful.`},{heading:"The 50/30/20 Budget Rule",videoUrl:"https://www.youtube.com/embed/HQzoZfc3GwQ",content:`One of the simplest and most effective budgeting frameworks is the 50/30/20 rule. Here's how it works:

50% for Needs: These are expenses you must pay — housing, food, utilities, transportation to work or school, insurance, and minimum debt payments.

30% for Wants: These are things that improve your life but aren't essential — entertainment, dining out, hobbies, subscriptions, and upgrades to things you already have.

20% for Savings and Debt: This goes toward building your future — emergency fund, retirement savings, investments, and paying off debt faster than required.

For example, if you receive $1,000 per month:
• $500 goes to needs
• $300 goes to wants  
• $200 goes to savings

This isn't a rigid rule — it's a starting framework. Adjust it based on your situation and goals.`},{heading:"Tracking Your Spending",content:`You can't improve what you don't measure. Most people are shocked when they first track their spending and see where their money actually goes.

Start by tracking every expense for one month. You can use:
• A simple notebook
• A spreadsheet
• Apps like Mint, YNAB, or your bank's built-in tools

Categorize your spending into needs, wants, and savings. Look for patterns. That daily coffee might seem small, but $5 per day is $150 per month or $1,800 per year!

The goal isn't to feel guilty — it's to make conscious choices. Maybe that daily coffee brings you joy and is worth it. But now you're choosing it intentionally rather than spending mindlessly.`},{heading:"Building Your First Budget",content:`Let's create a simple budget right now:

Step 1: Calculate your monthly income (after taxes)

Step 2: List your fixed expenses — rent, utilities, phone, subscriptions, loan payments

Step 3: Estimate variable expenses — groceries, gas, entertainment

Step 4: Subtract expenses from income

If the number is positive, decide where that extra money should go — savings, debt payoff, or a specific goal.

If the number is negative, look for expenses to reduce. Start with wants, then look for ways to reduce needs (cheaper phone plan, energy-efficient habits, etc.).

Remember: A budget isn't a restriction — it's a plan that gives you permission to spend on what matters to you.`}],keyTakeaways:["Money is a tool for exchanging value, not a goal in itself","The 50/30/20 rule: 50% needs, 30% wants, 20% savings","Track your spending to understand where your money goes","A budget is a plan that empowers conscious spending choices"]},"fl-2":{id:"fl-2",title:"Banking & Saving Strategies",introduction:"Understanding how banks work and how to save effectively is crucial for building wealth. In this lesson, you'll learn how to choose the right bank accounts, maximize your savings, and make your money work for you instead of the other way around.",sections:[{heading:"Types of Bank Accounts",content:`There are several types of bank accounts, each serving a different purpose:

Checking Accounts: Your everyday spending account. Money flows in (paychecks) and out (bills, purchases). Usually has a debit card and check-writing ability. Typically earns little to no interest.

Savings Accounts: Designed for money you want to keep but might need access to. Earns interest (though often minimal at traditional banks). May have limits on monthly withdrawals.

High-Yield Savings Accounts: Offered mainly by online banks, these pay significantly higher interest rates — often 10-20 times more than traditional savings accounts. The trade-off is no physical branches.

Money Market Accounts: A hybrid between checking and savings. Usually higher interest rates than regular savings, often with check-writing privileges.

Certificates of Deposit (CDs): You lock your money away for a set period (3 months to 5 years) in exchange for a guaranteed, usually higher interest rate.`},{heading:"Choosing the Right Bank",content:`When choosing a bank, consider:

Fees: Watch out for monthly maintenance fees, ATM fees, overdraft fees, and minimum balance requirements. Many banks waive fees if you meet certain conditions.

Interest Rates: Compare savings account rates. Online banks typically offer much better rates than traditional banks.

Convenience: Consider ATM access, branch locations (if important to you), mobile app quality, and customer service.

Features: Look for free transfers, mobile check deposit, budgeting tools, and account alerts.

FDIC Insurance: Always choose an FDIC-insured bank. This protects your deposits up to $250,000 per account type if the bank fails.

Pro tip: You can use multiple banks! Many people use a local bank for checking and an online bank for high-yield savings.`},{heading:"The Pay Yourself First Strategy",videoUrl:"https://www.youtube.com/embed/CaF0_MxqkWY",content:`One of the most powerful savings strategies is "Pay Yourself First." Instead of saving whatever is left at the end of the month (usually nothing), you save first and spend what's left.

Here's how to implement it:

1. Set up automatic transfers from your checking to savings right after each paycheck

2. Treat savings like a bill you must pay — non-negotiable

3. Start small if needed — even $25 per paycheck builds the habit

4. Increase the amount gradually as you adjust

This works because it removes willpower from the equation. You can't spend what you don't see. The money moves automatically before you have a chance to spend it elsewhere.

Most employers also offer direct deposit splitting — you can have a portion of your paycheck go directly to savings without ever touching your checking account.`},{heading:"Building an Emergency Fund",content:`An emergency fund is money set aside for unexpected expenses — car repairs, medical bills, job loss, or urgent home repairs. It's your financial safety net.

How much should you save?

Starter goal: $1,000 — This covers most minor emergencies and prevents you from going into debt for unexpected expenses.

Standard goal: 3-6 months of essential expenses — This protects you from job loss or major emergencies.

Conservative goal: 6-12 months of expenses — For those with variable income, high-risk jobs, or who want extra security.

Where to keep it:

Your emergency fund should be:
• Easily accessible (liquid)
• Safe (FDIC insured)
• Separate from your regular spending

A high-yield savings account is ideal. It earns interest while remaining accessible. Keep it at a different bank than your checking to reduce the temptation to "borrow" from it.`}],keyTakeaways:["Use different account types for different purposes","Online banks often offer much higher savings interest rates","Pay yourself first by automating savings transfers","Build an emergency fund of 3-6 months of expenses","Keep your emergency fund separate and accessible"]},"fl-3":{id:"fl-3",title:"Understanding Credit & Debt",introduction:"Credit can be your best friend or your worst enemy, depending on how you use it. In this lesson, you'll learn how credit works, what credit scores mean, the difference between good and bad debt, and strategies for managing debt wisely.",sections:[{heading:"What Is Credit?",content:`Credit is borrowed money that you promise to pay back, usually with interest. When you use credit, you're essentially using someone else's money now with the agreement to repay it later.

Types of credit include:

Credit Cards: Revolving credit with a set limit. You can borrow up to your limit, pay it back, and borrow again.

Loans: Installment credit where you borrow a fixed amount and repay it over time with regular payments. Examples include car loans, student loans, and personal loans.

Mortgages: A specific type of loan used to buy real estate, typically paid back over 15-30 years.

Lines of Credit: Similar to credit cards but often with lower interest rates. You have access to a set amount and only pay interest on what you use.

Credit isn't inherently good or bad — it's a tool. Used wisely, it helps you build wealth. Used poorly, it can trap you in a cycle of debt.`},{heading:"Understanding Credit Scores",videoUrl:"https://www.youtube.com/embed/BI5IA8assfk",content:`Your credit score is a three-digit number (typically 300-850) that represents your creditworthiness — how likely you are to repay borrowed money.

Score ranges:
• 800-850: Exceptional
• 740-799: Very Good
• 670-739: Good
• 580-669: Fair
• 300-579: Poor

What affects your score:

Payment History (35%): Do you pay on time? Even one late payment can hurt significantly.

Credit Utilization (30%): How much of your available credit are you using? Keep it under 30%, ideally under 10%.

Length of Credit History (15%): How long have you had credit accounts? Longer is better.

Credit Mix (10%): Having different types of credit (cards, loans) can help.

New Credit (10%): Opening many new accounts quickly can hurt your score.

Check your credit score regularly for free through your bank, credit card company, or sites like Credit Karma.`},{heading:"Good Debt vs. Bad Debt",content:`Not all debt is created equal. Understanding the difference helps you make smarter borrowing decisions.

Good Debt tends to:
• Help you build wealth or increase earning potential
• Come with low interest rates
• Be for appreciating or income-producing assets

Examples: Mortgages (real estate often appreciates), student loans for high-return degrees, business loans for growing businesses.

Bad Debt tends to:
• Fund consumption of things that lose value
• Carry high interest rates
• Make you poorer over time

Examples: Credit card debt for everyday purchases, car loans for expensive vehicles, payday loans.

The key question: Will this debt help me build wealth or drain it?

Sometimes the line is blurry. A car loan might be "bad debt" mathematically, but if you need reliable transportation for work, it could be necessary. The goal is to minimize bad debt and be strategic about taking on any debt.`},{heading:"Strategies for Paying Off Debt",content:`If you have debt, here are proven strategies for paying it off:

The Avalanche Method: Pay minimum payments on all debts, then put extra money toward the highest interest rate debt first. This saves the most money mathematically.

The Snowball Method: Pay minimums on all debts, then put extra money toward the smallest balance first. This provides quick wins and psychological momentum.

Balance Transfer: Move high-interest credit card debt to a card with a 0% introductory rate (usually 12-21 months). Pay it off before the rate increases.

Debt Consolidation: Combine multiple debts into one loan with a lower interest rate. This simplifies payments and can reduce total interest.

Which method is best? The one you'll stick with. If you need motivation from quick wins, use the Snowball Method. If you're disciplined and want to save the most money, use the Avalanche Method.

Most importantly: Stop adding new debt while paying off existing debt!`}],keyTakeaways:["Credit is a tool that can build or destroy wealth","Your credit score affects interest rates and opportunities","Good debt builds wealth; bad debt drains it","Choose a debt payoff strategy you can stick with","Keep credit utilization below 30% of your limit"]},"fl-4":{id:"fl-4",title:"Intro to Investing",introduction:"Investing is how you make your money work for you. While saving protects your money, investing grows it. This lesson will introduce you to the fundamentals of investing, different investment types, and how to get started even with small amounts.",sections:[{heading:"Why Invest?",videoUrl:"https://www.youtube.com/embed/WEDIj9JBTC8",content:`Here's a powerful truth: Money sitting in a savings account is actually losing value over time due to inflation.

If inflation is 3% per year and your savings account earns 1%, you're losing 2% of your purchasing power annually. That's why investing matters.

The Magic of Compound Interest:

If you invest $100 per month starting at age 18 with a 7% average annual return:
• By age 30: ~$20,000
• By age 40: ~$52,000
• By age 50: ~$122,000
• By age 65: ~$380,000

That's $56,400 of your contributions turning into $380,000!

The earlier you start, the more powerful compounding becomes. Even small amounts invested consistently over time can grow into substantial wealth.`},{heading:"Types of Investments",videoUrl:"https://www.youtube.com/embed/vIQQozPUAWg",content:`Let's explore the main types of investments:

Stocks: Ownership shares in companies. Higher risk but historically higher returns (average ~10% annually for the overall market). You can buy individual stocks or diversified funds.

Bonds: Loans to governments or corporations. Lower risk, lower returns. Bonds provide stability and income. Think of them as IOUs that pay interest.

Index Funds: Collections of stocks that track a market index (like the S&P 500). Low fees, instant diversification, and historically strong performance. Many experts consider these the best choice for most investors.

ETFs (Exchange-Traded Funds): Similar to mutual funds but trade like stocks. Often have lower fees and more flexibility.

Mutual Funds: Professionally managed pools of stocks, bonds, or other investments. Some are actively managed (higher fees), others passively track indexes (lower fees).

Real Estate: Property ownership or REITs (Real Estate Investment Trusts) that let you invest in real estate without buying property.`},{heading:"Risk and Diversification",content:`All investments involve risk — the possibility of losing money. Understanding and managing risk is crucial.

Types of Risk:
• Market risk: The overall market goes down
• Individual risk: A specific company fails
• Inflation risk: Returns don't keep up with rising prices
• Interest rate risk: Changes in rates affect bond values

Risk vs. Return:

Generally, higher potential returns come with higher risk. Stocks are riskier than bonds, but historically return more over long periods.

Diversification — Your Best Defense:

"Don't put all your eggs in one basket." Diversification means spreading your investments across:
• Different asset types (stocks, bonds)
• Different industries (tech, healthcare, energy)
• Different company sizes (large, medium, small)
• Different countries (domestic, international)

Index funds automatically provide diversification across hundreds or thousands of companies with a single investment.`},{heading:"Getting Started with Investing",content:`Ready to begin? Here's how to start:

Step 1: Build your emergency fund first. Don't invest money you might need soon.

Step 2: Take advantage of tax-advantaged accounts:
• 401(k): Employer-sponsored retirement account, often with matching contributions (free money!)
• IRA/Roth IRA: Individual retirement accounts with tax benefits
• 529: Tax-advantaged education savings

Step 3: Start simple. A low-cost S&P 500 index fund or total market index fund is a great first investment. Examples include VOO, VTI, or FXAIX.

Step 4: Invest regularly. Set up automatic monthly contributions. This is called "dollar-cost averaging" — it removes emotion and timing from the equation.

Step 5: Think long-term. The market will go up and down. Historically, it has always recovered and grown over long periods. Don't panic sell during downturns.

You can start with as little as $1 on many platforms like Fidelity, Schwab, or Vanguard.`}],keyTakeaways:["Investing grows wealth; saving just preserves it","Compound interest is incredibly powerful over time","Index funds offer diversification with low fees","Start early, invest regularly, think long-term","Use tax-advantaged accounts like 401(k) and IRA"]},"fl-5":{id:"fl-5",title:"Taxes Demystified",introduction:"Taxes might seem complicated, but understanding the basics will save you stress and potentially a lot of money. In this lesson, we'll break down how taxes work, what affects how much you pay, and strategies for keeping more of your hard-earned money.",sections:[{heading:"How Income Tax Works",videoUrl:"https://www.youtube.com/embed/7Qtr_vA3Prw",content:`The United States uses a progressive tax system with tax brackets. A common misconception is that if you move into a higher tax bracket, all your income gets taxed at that higher rate. That's not how it works!

Tax brackets (2024 example for single filers):
• 10% on income up to $11,600
• 12% on income $11,601 to $47,150
• 22% on income $47,151 to $100,525
• And so on...

Example: If you earn $50,000:
• First $11,600 taxed at 10% = $1,160
• Next $35,550 taxed at 12% = $4,266
• Last $2,850 taxed at 22% = $627
• Total tax: $6,053 (effective rate of about 12%)

Notice your "effective" or "average" tax rate (12%) is lower than your "marginal" or "highest" rate (22%). Understanding this helps you realize that earning more money is always beneficial — only the additional income faces higher rates.`},{heading:"Important Tax Terms",content:`Understanding these terms will help you navigate taxes:

Gross Income: Your total income before any taxes or deductions.

Adjusted Gross Income (AGI): Gross income minus specific deductions like retirement contributions, student loan interest, and health savings account contributions.

Taxable Income: AGI minus either the standard deduction or itemized deductions. This is what you actually pay taxes on.

Standard Deduction: A fixed amount everyone can deduct ($14,600 for single filers in 2024). Most people use this.

Itemized Deductions: Specific expenses you can deduct if they exceed the standard deduction — mortgage interest, charitable donations, state/local taxes, etc.

Tax Credits: Directly reduce your tax bill dollar-for-dollar. Much more valuable than deductions! Examples: child tax credit, education credits, earned income credit.

Tax Deductions: Reduce your taxable income. A $1,000 deduction in the 22% bracket saves you $220.`},{heading:"Types of Taxes You'll Encounter",content:`Income tax isn't the only tax. Here are others to be aware of:

Federal Income Tax: Goes to the federal government. Funds national programs, military, social security, etc.

State Income Tax: Most states have their own income tax (some like Texas, Florida, and Nevada don't). Rates and brackets vary by state.

Social Security & Medicare (FICA): 6.2% for Social Security (up to a cap) and 1.45% for Medicare. Your employer pays an equal amount.

Sales Tax: Charged on purchases. Varies by state and locality.

Property Tax: Paid on real estate you own. Used to fund local schools, services, and infrastructure.

Capital Gains Tax: Applied to investment profits when you sell. Long-term (held over 1 year) rates are lower than short-term rates.

Understanding which taxes apply to you helps you plan and potentially reduce your overall tax burden.`},{heading:"Legal Ways to Reduce Your Taxes",content:`There are many legal strategies to reduce your tax burden:

Maximize Retirement Contributions:
• 401(k) contributions reduce taxable income (up to $23,000 in 2024)
• Traditional IRA contributions may be deductible
• This is often the biggest tax-saving opportunity available

Use Tax-Advantaged Accounts:
• Health Savings Account (HSA): Triple tax advantage — deductible contributions, tax-free growth, tax-free withdrawals for medical expenses
• 529 plans: Tax-free growth for education expenses

Claim All Eligible Credits:
• Earned Income Tax Credit
• American Opportunity Credit (education)
• Child Tax Credit
• Lifetime Learning Credit

Track Deductible Expenses:
• Charitable donations
• Student loan interest
• Self-employment expenses
• Home office (if applicable)

Time Your Income and Deductions:
• Sometimes it makes sense to defer income to next year or accelerate deductions to this year

Consider Tax-Loss Harvesting:
• Sell losing investments to offset gains and reduce taxes on investments`}],keyTakeaways:["Tax brackets are progressive — only additional income is taxed higher","Credits reduce taxes dollar-for-dollar; deductions reduce taxable income","Retirement contributions are often the best tax-saving strategy","Multiple types of taxes affect your finances","Legal tax planning can save you significant money"]},"fl-6":{id:"fl-6",title:"Create Your Financial Plan",introduction:"Now it's time to put everything together. In this capstone lesson, you'll create a personal financial plan that will guide your money decisions for years to come. A good financial plan isn't about perfection — it's about direction and intentionality.",sections:[{heading:"Step 1: Define Your Financial Goals",content:`Great financial plans start with clear goals. What do you want your money to help you achieve?

Short-term goals (under 1 year):
• Build a $1,000 emergency fund
• Pay off a specific credit card
• Save for a vacation or purchase

Medium-term goals (1-5 years):
• Save for a down payment on a car or home
• Build a 6-month emergency fund
• Pay off all credit card debt

Long-term goals (5+ years):
• Retire comfortably by age X
• Pay for children's education
• Achieve financial independence

For each goal, make it SMART:
• Specific: "Save $10,000 for a car down payment"
• Measurable: Track progress monthly
• Achievable: Realistic given your income
• Relevant: Aligned with your values
• Time-bound: "Within 2 years"

Write down your top 3 goals right now.`},{heading:"Step 2: Know Your Numbers",content:`Time to get specific about where you stand today:

Calculate Your Net Worth:
Assets (what you own):
• Cash and savings accounts
• Investment accounts
• Value of property, vehicles
• Retirement accounts

Liabilities (what you owe):
• Credit card balances
• Student loans
• Car loans
• Mortgage
• Other debts

Net Worth = Assets - Liabilities

Don't worry if your number is negative — many young people have negative net worth due to student loans. What matters is the direction: Is it improving over time?

Know Your Monthly Cash Flow:
• Monthly income (after taxes)
• Monthly expenses (needs + wants)
• Monthly savings rate

Your savings rate is one of the most important numbers. Even a 10% savings rate will transform your finances over time.`},{heading:"Step 3: Build Your Action Plan",content:`Now let's create concrete actions:

Priority 1: Emergency Fund
If you don't have one, this comes first. Start with $1,000, then build to 3-6 months of expenses.

Priority 2: Capture Free Money
If your employer offers 401(k) matching, contribute at least enough to get the full match. This is literally free money — often a 50-100% instant return.

Priority 3: Attack High-Interest Debt
Pay off anything with interest rates above 7-8%, especially credit cards (often 20%+).

Priority 4: Increase Investments
After the above, maximize tax-advantaged accounts (IRA, HSA) and invest in low-cost index funds.

Priority 5: Additional Goals
Save for specific goals like home ownership, education, or early retirement.

Create automations:
• Automatic transfer to savings each payday
• Automatic 401(k) contributions
• Automatic investment purchases

Automation removes willpower from the equation and ensures consistent progress.`},{heading:"Step 4: Review and Adjust",content:`A financial plan isn't set and forget — it's a living document.

Monthly Check-ins (15 minutes):
• Are you on track with your budget?
• Any unexpected expenses?
• Update your net worth tracker

Quarterly Reviews (1 hour):
• Are you progressing toward goals?
• Need to adjust savings amounts?
• Any major life changes to account for?

Annual Planning (half-day):
• Celebrate wins from the past year
• Set new goals for the coming year
• Rebalance investments if needed
• Review and update insurance coverage
• Check tax strategy

Life will throw curveballs — job changes, unexpected expenses, windfalls. That's okay. The plan helps you adapt intentionally rather than react randomly.

Remember: Progress over perfection. Even following your plan 80% of the time will transform your financial life.`}],keyTakeaways:["Define clear, SMART financial goals","Know your net worth and monthly cash flow","Prioritize: emergency fund → free money → debt → investing","Automate your finances for consistent progress","Review and adjust your plan regularly"]},"dl-1":{id:"dl-1",title:"How the Internet Works",introduction:"The internet is the backbone of modern life, yet most people have no idea how it actually works. Understanding this technology will help you use it more effectively, stay safer online, and appreciate one of humanity's greatest achievements.",sections:[{heading:"The Basic Concept",videoUrl:"https://www.youtube.com/embed/Dxcc6ycZ73M",content:`At its core, the internet is simply a global network of computers that can communicate with each other. When you visit a website, you're actually connecting to another computer somewhere in the world.

Think of it like a postal system for data:
• Your computer is your home
• The internet is the road and postal network
• Websites are destinations you want to visit
• Data packets are the letters being sent back and forth

When you type "google.com" into your browser, your computer sends a request across this network to Google's computers, which send back the webpage you see. This happens in milliseconds!`},{heading:"IP Addresses and DNS",videoUrl:"https://www.youtube.com/embed/5o8CwafCxnU",content:`Every device connected to the internet has a unique address called an IP address — like a phone number for computers. It looks like: 192.168.1.1

But memorizing numbers for every website would be impossible. That's where DNS (Domain Name System) comes in.

DNS is like the internet's phone book. When you type "google.com," DNS translates that human-readable name into Google's IP address so your computer knows where to send the request.

Here's the process:
1. You type "facebook.com"
2. Your computer asks a DNS server: "What's the IP for facebook.com?"
3. DNS responds: "157.240.1.35"
4. Your computer connects to that IP address
5. Facebook's server sends back the webpage

This happens automatically every time you visit a website!`},{heading:"How Data Travels",content:`When you send a message or load a webpage, the data doesn't travel in one piece. It's broken into small pieces called "packets."

Each packet contains:
• Part of your data
• The destination address (where it's going)
• The source address (where it came from)
• A sequence number (so it can be reassembled)

These packets travel independently across the network, potentially taking different routes, then reassemble at the destination. It's like mailing a book by sending each page in a separate envelope!

Why packets? If one gets lost, only that small piece needs to be resent. This makes the internet resilient — there's no single point of failure.

The journey might involve:
• Your router
• Your internet service provider (ISP)
• Major internet exchange points
• Undersea cables connecting continents
• Data centers housing servers

All of this happens in fractions of a second!`},{heading:"HTTP, HTTPS, and Security",content:`When you see "http://" or "https://" in a web address, those stand for HyperText Transfer Protocol — the language browsers and servers use to communicate.

HTTP is the basic version, but it has a critical flaw: data is sent as plain text. Anyone monitoring the network could read it.

HTTPS adds encryption through TLS (Transport Layer Security). With HTTPS:
• Your data is encrypted before sending
• Only the destination server can decrypt it
• No one in between can read the content
• The padlock icon shows the connection is secure

Always look for HTTPS when:
• Entering passwords
• Making purchases
• Submitting personal information
• Really... anytime you're online

Most modern browsers now warn you when visiting non-HTTPS sites. This is one of the most important security measures protecting you every day.`}],keyTakeaways:["The internet is a global network of connected computers","DNS translates website names into IP addresses","Data travels in small packets across multiple routes","HTTPS encrypts your data for secure communication","Look for the padlock icon when sharing sensitive information"]},"dl-2":{id:"dl-2",title:"Digital Citizenship",introduction:"Being a digital citizen means participating responsibly and ethically in the online world. Just as there are rules and norms for behavior in physical society, there are expectations for how we conduct ourselves online. This lesson will help you navigate the digital world with integrity and wisdom.",sections:[{heading:"Your Digital Footprint",content:`Every action you take online leaves a trace — your digital footprint. This includes:

Active footprint (intentional):
• Social media posts
• Comments on websites
• Emails and messages
• Photos you upload

Passive footprint (automatic):
• Websites you visit
• Location data
• Search history
• Cookies tracking your behavior

Here's the thing: the internet never forgets. That embarrassing post from years ago? It might still be accessible. Screenshots live forever.

Before posting anything, ask yourself:
• Would I be comfortable if my parents, teacher, or future employer saw this?
• How might this be interpreted by someone who doesn't know me?
• Could this hurt someone else?
• Is this something I'll be proud of in 5 years?

Your digital footprint can help or hurt your future opportunities. Many employers and colleges check social media. Make sure yours tells the story you want.`},{heading:"Online Privacy and Safety",content:`Protecting yourself online requires ongoing vigilance:

Protect your personal information:
• Never share passwords
• Be cautious with your address, phone number, and school
• Use strong, unique passwords for each account
• Enable two-factor authentication (2FA) wherever possible

Stranger danger applies online too:
• People may not be who they claim to be
• Never meet someone from the internet alone
• Be wary of anyone asking for personal information or photos
• If something feels wrong, trust your instincts

Social media safety:
• Review privacy settings regularly
• Think before accepting friend requests
• Be careful what you share about your location
• Remember that "private" accounts can still be screenshotted

If you encounter something that makes you uncomfortable online, tell a trusted adult. This includes harassment, threats, inappropriate content, or anyone asking you to keep secrets.`},{heading:"Cyberbullying and Online Kindness",content:`The separation of screens can make people forget that there are real humans on the other side. Cyberbullying affects millions of young people.

Cyberbullying includes:
• Sending mean or threatening messages
• Spreading rumors online
• Sharing embarrassing photos without consent
• Excluding someone from online groups deliberately
• Creating fake accounts to harass someone

If you're being cyberbullied:
• Don't respond to the bully
• Save evidence (screenshots)
• Block the person
• Report to the platform
• Tell a trusted adult
• Remember: it's not your fault

Be an upstander, not a bystander:
• Don't participate in or share bullying content
• Support the person being bullied
• Report harmful content
• Use your voice positively

The Golden Rule applies online: Treat others as you want to be treated. Behind every username is a real person with feelings.`},{heading:"Digital Wellness and Balance",content:`Technology should enhance your life, not control it. Digital wellness means using technology intentionally and maintaining balance.

Signs of unhealthy tech use:
• Constantly checking your phone
• Feeling anxious without device access
• Neglecting sleep, homework, or relationships
• Comparing yourself negatively to others online
• Using devices to avoid real-life problems

Strategies for balance:
• Set specific times for checking social media
• Use screen time tracking and limits
• Create device-free zones (bedroom, dinner table)
• Prioritize in-person relationships
• Find hobbies that don't involve screens
• Practice mindful use — ask "why am I reaching for my phone?"

Social media and mental health:
• Remember: people post highlights, not reality
• Comparison is the thief of joy
• Curate your feed — unfollow accounts that make you feel bad
• Take breaks when needed

Technology is a tool. You control it, not the other way around.`}],keyTakeaways:["Your digital footprint is permanent — think before you post","Protect your personal information and use strong passwords","Practice online kindness and stand up against cyberbullying","Maintain healthy boundaries with technology use","Behind every screen is a real person — treat them accordingly"]},"dl-3":{id:"dl-3",title:"AI & Machine Learning Basics",introduction:"Artificial Intelligence is transforming every aspect of our world. Understanding how AI works — and what it can and can't do — will help you use AI tools effectively and think critically about their impact on society.",sections:[{heading:"What Is Artificial Intelligence?",videoUrl:"https://www.youtube.com/embed/2ePf9rue1Ao",content:`Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. This includes:

• Understanding language
• Recognizing images
• Making decisions
• Learning from experience
• Solving problems

AI is not science fiction robots — it's already all around you:
• Netflix recommending shows
• Autocorrect on your phone
• Face filters on social media
• Spam filters in email
• Voice assistants like Siri or Alexa

There are different levels of AI:

Narrow AI (what we have today): Systems that do one thing well. A chess AI is brilliant at chess but can't tell you the weather.

General AI (hypothetical): A system that could do any intellectual task a human can. This doesn't exist yet.

AI today is a tool created by humans to solve specific problems — powerful but limited.`},{heading:"How Machine Learning Works",videoUrl:"https://www.youtube.com/embed/QghjaS0WQQU",content:`Machine Learning (ML) is the most common type of AI today. Instead of programming specific rules, we let computers learn from data.

Traditional Programming:
Input → Rules → Output
(Give the computer data and rules, it produces results)

Machine Learning:
Input + Output → Pattern → Predictions
(Give the computer examples, it figures out the patterns)

Example: Teaching a computer to recognize cats

Traditional: Write rules like "cats have pointy ears, whiskers, four legs..."

Machine Learning: Show the computer millions of pictures labeled "cat" or "not cat" and let it figure out what makes a cat a cat.

The computer learns by:
1. Making predictions
2. Seeing if it's right or wrong
3. Adjusting to get better
4. Repeating millions of times

This is why AI needs massive amounts of data to learn effectively. The more examples it sees, the better it gets.`},{heading:"AI You Use Every Day",content:`AI is woven into your daily life in countless ways:

Search engines: When you search Google, AI helps interpret your query, rank results, and even correct your spelling.

Social media: AI decides what appears in your feed, recognizes faces in photos, and suggests friends to follow.

Streaming services: Netflix, Spotify, and YouTube use AI to recommend content based on your preferences and viewing patterns.

Navigation: Maps apps use AI to predict traffic, suggest routes, and estimate arrival times.

Shopping: Amazon recommends products, while AI helps detect fraud on your credit card.

Communication: Email spam filters, autocomplete, and real-time translation all use AI.

Voice assistants: Siri, Alexa, and Google Assistant use AI to understand your speech and respond appropriately.

These systems are constantly improving by learning from user interactions. When you skip a song or click a search result, you're providing data that helps the AI learn.`},{heading:"Limitations and Ethics of AI",content:`AI is powerful but far from perfect. Understanding its limitations is crucial:

AI can be biased:
AI learns from human-created data, which can contain biases. If historical hiring data favored certain groups, an AI trained on it might replicate that bias.

AI can be wrong:
AI makes mistakes, sometimes confidently. Always verify important information.

AI doesn't understand:
Current AI processes patterns but doesn't truly understand meaning the way humans do. It can generate plausible-sounding text without knowing if it's true.

Ethical considerations:
• Privacy: AI systems often require lots of personal data
• Jobs: AI may automate some types of work
• Manipulation: AI can create convincing fake content
• Transparency: AI decision-making can be hard to explain
• Accountability: Who's responsible when AI makes mistakes?

Critical thinking tips:
• Don't blindly trust AI-generated content
• Understand that AI reflects its training data
• Consider who benefits from AI systems
• Think about unintended consequences
• Stay informed as technology evolves`}],keyTakeaways:["AI is computer systems that perform tasks requiring human intelligence","Machine Learning lets computers learn patterns from data","AI is already embedded in most apps and services you use","AI has limitations — it can be biased and make mistakes","Think critically about AI and verify important information"]},"dl-4":{id:"dl-4",title:"Spotting Misinformation",introduction:"In the age of information, the ability to distinguish truth from falsehood is a superpower. Misinformation spreads rapidly online, affecting everything from personal decisions to elections. This lesson will equip you with the tools to think critically about the information you encounter.",sections:[{heading:"Types of False Information",content:`Not all false information is the same. Understanding the types helps you identify and respond appropriately:

Misinformation: False information spread without intent to deceive. The person sharing believes it's true. Example: Sharing a health tip that sounds logical but is medically false.

Disinformation: Deliberately false information spread to deceive. This is intentional. Example: A fake news article designed to manipulate opinions.

Malinformation: Real information shared to cause harm. True but used inappropriately. Example: Leaking someone's private information for revenge.

Other forms:
• Satire/Parody: Humor that gets taken seriously
• Misleading content: True information presented in false context
• Manipulated content: Real images or videos that have been altered
• Fabricated content: 100% false, created to deceive
• Deepfakes: AI-generated fake videos or audio

The line between these can blur. Someone might create disinformation that then spreads as misinformation when others share it believing it's true.`},{heading:"Red Flags to Watch For",content:`Train yourself to notice these warning signs:

Emotional manipulation:
• Headlines designed to spark outrage, fear, or excitement
• Stories that seem too good or too bad to be true
• Content that confirms everything you already believe (confirmation bias bait)

Source issues:
• Unknown or suspicious website names
• No author listed or fake author names
• No dates or very old content presented as new
• Site mimics legitimate news but URL is slightly off

Content problems:
• Lack of evidence, sources, or quotes
• Only one side of the story presented
• Pictures that don't match the article
• Poor spelling and grammar (though not always)

Too viral:
• Stories spreading extremely fast before verification
• "Why isn't mainstream media covering this?" framing
• Urgent calls to share immediately

Remember: Your emotional reaction is often being manipulated. The stronger you feel about sharing something immediately, the more important it is to pause and verify first.`},{heading:"Verification Techniques",content:`SIFT is a simple method for evaluating information:

S - Stop: Pause before believing or sharing. Take a breath.

I - Investigate the source: Who created this? Are they credible? What's their expertise or potential agenda?

F - Find better coverage: Search for other sources reporting the same story. Do legitimate news organizations confirm it?

T - Trace claims: Go back to the original source. Is the quote or data being used accurately? What's the full context?

Practical tools:

Reverse image search: Right-click an image and search Google for it. You might find it's old, from a different event, or manipulated.

Fact-checking sites: Snopes, PolitiFact, FactCheck.org, and others investigate viral claims.

Check the About page: Legitimate news sites have clear ownership, editorial standards, and contact information.

Read past the headline: Many misleading stories have headlines that don't match the actual content.

Check the date: Old stories often recirculate as if they're current events.`},{heading:"Building Information Literacy",content:`Developing long-term information literacy habits:

Diversify your sources:
• Read across the political spectrum
• Include international perspectives
• Follow subject matter experts, not just commentators
• Be aware of your filter bubble

Understand how platforms work:
• Algorithms prioritize engagement, not accuracy
• Emotionally charged content spreads faster
• You're more likely to see content similar to what you've engaged with
• Bots can artificially amplify messages

Cultivate healthy skepticism:
• Question everything, but don't reject everything
• Being skeptical means demanding evidence, not being cynical
• Expertise matters — a virologist knows more about viruses than a random blogger

When you're wrong:
• Everyone gets fooled sometimes — it's okay
• Correct yourself publicly when you've shared misinformation
• Learn from the experience

The goal isn't to distrust everything but to trust appropriately based on evidence and credible sources.`}],keyTakeaways:["Distinguish between misinformation, disinformation, and malinformation","Watch for emotional manipulation and source red flags","Use SIFT: Stop, Investigate, Find better coverage, Trace claims","Reverse image search and fact-checking sites are valuable tools","Diversify your sources and understand how platform algorithms work"]},"ct-1":{id:"ct-1",title:"Logic & Reasoning Fundamentals",introduction:"Logic is the foundation of clear thinking. It helps you evaluate arguments, identify flaws in reasoning, and construct persuasive cases of your own. In a world full of information and opinions, strong logical skills are essential for making good decisions.",sections:[{heading:"What Is an Argument?",videoUrl:"https://www.youtube.com/embed/NKEhdsnKKHs",content:`In logic, an "argument" isn't a heated dispute — it's a structured attempt to support a conclusion with reasons.

Every argument has two parts:

Premises: The reasons, evidence, or claims that support the conclusion

Conclusion: What the argument is trying to prove

Example:
• Premise 1: All humans are mortal
• Premise 2: Socrates is a human
• Conclusion: Therefore, Socrates is mortal

When you analyze any argument, first identify:
1. What is the person trying to prove? (conclusion)
2. What reasons do they give? (premises)

This simple framework helps you cut through rhetoric and evaluate the actual logic. Often, people use lots of words but their actual argument is quite simple — or absent entirely!`},{heading:"Deductive vs. Inductive Reasoning",videoUrl:"https://www.youtube.com/embed/yAjkQ1YqLEE",content:`There are two main types of logical reasoning:

Deductive Reasoning: If the premises are true, the conclusion MUST be true.

Example:
• All birds have feathers (premise)
• A robin is a bird (premise)
• Therefore, a robin has feathers (conclusion)

If both premises are true, the conclusion is guaranteed. This is the strongest form of reasoning.

Inductive Reasoning: The premises support the conclusion, but don't guarantee it.

Example:
• Every swan I've ever seen is white (observation)
• Therefore, all swans are white (conclusion)

This conclusion is PROBABLE based on evidence, but not certain. (And in fact, black swans exist!)

Most real-world reasoning is inductive. Science, for example, uses induction — we observe patterns and infer general principles, but new evidence could always update our understanding.

Key insight: Inductive arguments aren't "bad" — they're essential for learning about the world. Just recognize that they provide probability, not certainty.`},{heading:"Valid vs. Sound Arguments",content:`These terms have specific meanings in logic:

Valid argument: If the premises were true, the conclusion would follow logically.

Sound argument: Valid AND the premises are actually true.

Example of valid but NOT sound:
• All fish can fly (premise — false)
• My goldfish is a fish (premise — true)
• Therefore, my goldfish can fly (conclusion)

The logic is perfect! If all fish could fly, your goldfish would indeed fly. The argument is valid. But since the first premise is false, the argument is not sound.

Example of sound:
• All mammals are warm-blooded (premise — true)
• Dogs are mammals (premise — true)
• Therefore, dogs are warm-blooded (conclusion)

This is both valid (the logic works) and sound (the premises are true).

Why does this matter? You can have perfect logic from false premises, leading to false conclusions. Always check both the logic AND the truth of the premises.`},{heading:"Common Logical Structures",content:`Recognizing common argument structures helps you evaluate them:

Modus Ponens (Affirming the Antecedent):
• If A, then B
• A is true
• Therefore, B is true
Valid! "If it rains, the ground is wet. It's raining. Therefore, the ground is wet."

Modus Tollens (Denying the Consequent):
• If A, then B
• B is not true
• Therefore, A is not true
Valid! "If it rains, the ground is wet. The ground is not wet. Therefore, it didn't rain."

Affirming the Consequent (FALLACY):
• If A, then B
• B is true
• Therefore, A is true
INVALID! "If it rains, the ground is wet. The ground is wet. Therefore, it rained."
(The ground could be wet from a sprinkler!)

Denying the Antecedent (FALLACY):
• If A, then B
• A is not true
• Therefore, B is not true
INVALID! "If it rains, the ground is wet. It didn't rain. Therefore, the ground isn't wet."
(Again, sprinklers exist!)

Learning these patterns helps you spot logical errors in your own and others' reasoning.`}],keyTakeaways:["Arguments have premises (reasons) and conclusions (claims)","Deductive reasoning guarantees conclusions; inductive reasoning suggests them","Valid arguments have good logic; sound arguments are valid with true premises","Learn common logical structures to identify both good and flawed reasoning","Always check both the logic AND the truth of premises"]},"ct-2":{id:"ct-2",title:"Argument Analysis",introduction:"Now that you understand the basics of logic, let's practice breaking down arguments you encounter in real life. This skill helps you cut through persuasive language to evaluate the actual substance of what people are saying.",sections:[{heading:"Identifying Hidden Premises",content:`Most arguments in everyday life leave some premises unstated. These "hidden premises" are assumptions the speaker takes for granted.

Example: "She got an A on the test, so she must have studied a lot."

Stated premise: She got an A on the test
Conclusion: She studied a lot
Hidden premise: Getting an A requires studying a lot

Is that hidden premise true? Maybe she already knew the material. Maybe the test was easy. Maybe she's naturally talented in that subject.

Once you identify hidden premises, you can evaluate whether they're valid:
• Are they true?
• Are there exceptions?
• Is the speaker aware they're making this assumption?

Practice: For any argument you hear, ask "What must this person be assuming for their conclusion to follow?" Often, the hidden premise is the weakest part of the argument.`},{heading:"Evaluating Evidence",content:`Arguments are only as strong as their evidence. Here's how to evaluate it:

Types of evidence:
• Statistics and data
• Expert testimony
• Personal anecdotes
• Research studies
• Logical reasoning
• Historical examples

Questions to ask:

For statistics:
• Where do these numbers come from?
• How was the data collected?
• Is the sample size adequate?
• Are there other interpretations?

For expert testimony:
• Is this person actually an expert in THIS field?
• Do other experts agree?
• Might they have bias or conflicts of interest?

For anecdotes:
• Is this representative or cherry-picked?
• Could there be other explanations?
• Does one story prove a general trend?

For studies:
• Was it peer-reviewed?
• Has it been replicated?
• Who funded the research?

Strong arguments use multiple types of evidence, acknowledge limitations, and consider alternative explanations.`},{heading:"Identifying Logical Fallacies",content:`Logical fallacies are common errors in reasoning. Learning to spot them protects you from being manipulated and improves your own arguments.

Ad Hominem: Attacking the person rather than their argument.
"You can't trust his economic policy — he cheated on his wife."

Straw Man: Misrepresenting someone's argument to make it easier to attack.
"She wants some gun regulations, so she wants to confiscate everyone's guns."

False Dichotomy: Presenting only two options when more exist.
"You're either with us or against us."

Appeal to Authority: Citing an authority who isn't actually an expert on the topic.
"This celebrity says the vaccine is dangerous."

Slippery Slope: Claiming one thing will inevitably lead to extreme outcomes without justification.
"If we allow students to use calculators, they'll forget how to do any math."

Appeal to Emotion: Using emotions rather than logic to persuade.
"Think of the children!" (without actual connection to the argument)

Bandwagon: Assuming something is true because many people believe it.
"Everyone knows that..." or "Millions of people use this product."

When you spot a fallacy, the argument isn't proven false — it's just not supported by that particular reasoning.`},{heading:"Steelmanning vs. Strawmanning",content:`There are two ways to engage with arguments you disagree with:

Strawmanning (weak approach):
Present the weakest version of your opponent's argument, then defeat that.
• Easy to "win"
• Doesn't actually address the real argument
• Often dishonest

Steelmanning (strong approach):
Present the STRONGEST version of your opponent's argument, then address that.
• More difficult
• More honest
• More persuasive to neutral observers
• Actually advances understanding

How to steelman:
1. Understand the argument fully first
2. Ask: "What's the strongest version of this position?"
3. Imagine how a reasonable, intelligent person would defend it
4. Address THAT version

Benefits of steelmanning:
• You might discover they have a point
• You sharpen your own thinking
• You build trust and respect in discussions
• Your counterarguments become stronger

Test yourself: Can you explain an opposing view so well that someone who holds that view would say "Yes, that's exactly what I believe"?`}],keyTakeaways:["Look for hidden premises — the unstated assumptions","Evaluate evidence for quality, source, and representativeness","Learn common logical fallacies to protect against manipulation","Steelman opposing arguments by addressing their strongest forms","Strong arguments use multiple types of evidence and acknowledge limitations"]},"ct-3":{id:"ct-3",title:"Cognitive Biases",introduction:"Your brain is amazing, but it takes shortcuts that can lead you astray. Cognitive biases are systematic patterns of thinking that can cause errors in judgment. Understanding them helps you think more clearly and make better decisions.",sections:[{heading:"Why Biases Exist",content:`Cognitive biases aren't bugs — they're features that helped our ancestors survive. Quick judgments were often better than slow, careful analysis when a predator might be lurking.

Our brains process about 11 million bits of information per second, but we can only consciously process about 50. To handle this gap, our brains use mental shortcuts called "heuristics."

These shortcuts are usually helpful — they let us function without analyzing every tiny decision. But they can also lead us astray, especially in modern situations our brains didn't evolve to handle.

The good news: Just knowing about biases helps you catch them. When you notice yourself falling into a biased pattern of thinking, you can pause and reconsider.

The challenge: We're often blind to our own biases while easily spotting them in others. This itself is a bias — the "bias blind spot"!`},{heading:"Biases in How We Seek Information",content:`These biases affect what information we notice and pay attention to:

Confirmation Bias: We seek out and favor information that confirms what we already believe, while avoiding or dismissing contradictory evidence.

Why it's dangerous: You can always find evidence for what you already believe. The internet makes this even easier.

Remedy: Actively seek out opposing viewpoints. Ask: "What would change my mind?"

Availability Heuristic: We judge likelihood based on how easily examples come to mind.

Example: After seeing news about plane crashes, we might overestimate flying dangers despite driving being statistically more dangerous.

Remedy: Seek actual statistics rather than relying on memorable examples.

Anchoring Bias: We rely too heavily on the first piece of information we receive.

Example: If a shirt is "marked down from $100 to $40," we focus on the $100 anchor, even if the shirt was never worth $100.

Remedy: Consider information independently of how it's presented.`},{heading:"Biases in How We Think About Ourselves",content:`These biases affect our self-perception:

Dunning-Kruger Effect: People with low ability in an area tend to overestimate their competence, while experts tend to underestimate theirs.

Why? Beginners don't know enough to know what they don't know. Experts know how much more there is to learn.

Fundamental Attribution Error: We attribute others' behavior to their character, but our own behavior to circumstances.

Example: If someone cuts you off in traffic, they're a jerk. If you cut someone off, you were running late or didn't see them.

Hindsight Bias: After an event, we think we "knew it all along."

This makes us overconfident in our predictive abilities and less likely to learn from mistakes.

Self-Serving Bias: We take credit for successes but blame failures on external factors.

"I got an A because I'm smart" vs. "I got an F because the test was unfair."

Awareness of these biases promote humility and more accurate self-assessment.`},{heading:"Biases in Decision-Making",content:`These biases affect our choices:

Sunk Cost Fallacy: We continue investing in something because of what we've already invested, even when quitting would be better.

Example: "I've watched two hours of this terrible movie, so I might as well finish it." (Those two hours are gone either way!)

Loss Aversion: Losses feel about twice as painful as equivalent gains feel good.

This can make us too risk-averse and too attached to what we have.

Status Quo Bias: We prefer things to stay the same, even when change would be beneficial.

The current situation feels safer simply because it's familiar.

Bandwagon Effect: We're more likely to believe or do something if many others do.

This can be useful (others might know something we don't) but also dangerous (groupthink, bubbles, harmful trends).

Overcoming decision biases:
• Consider the reverse: What would you do if you were starting fresh?
• Use frameworks to structure decisions
• Seek outside perspectives
• Sleep on big decisions`}],keyTakeaways:["Cognitive biases are mental shortcuts that can lead to errors","Confirmation bias makes us seek information that confirms existing beliefs","We attribute others' behavior to character but our own to circumstances","Sunk cost fallacy makes us stick with bad decisions too long","Awareness of biases is the first step to overcoming them"]},"hw-1":{id:"hw-1",title:"Mental Health Fundamentals",introduction:"Mental health is just as important as physical health, yet it's often overlooked. Understanding the basics of mental wellness helps you take care of yourself and recognize when you might need support. Let's explore what mental health really means and how to nurture it.",sections:[{heading:"What Is Mental Health?",videoUrl:"https://www.youtube.com/embed/DxIDKZHW3-E",content:`Mental health is more than just the absence of mental illness. It's a state of well-being where you can:

• Cope with normal life stresses
• Work productively
• Realize your potential
• Contribute to your community

Everyone has mental health, just like everyone has physical health. And just like physical health, it exists on a spectrum and changes over time.

Factors that influence mental health:
• Biology and genetics
• Life experiences and trauma
• Family history
• Social connections
• Physical health
• Environment and circumstances

Important truth: Struggling with mental health doesn't mean you're weak, broken, or flawed. It means you're human. Everyone faces challenges at some point.`},{heading:"Common Mental Health Challenges",content:`Understanding common conditions helps reduce stigma and promotes recognition:

Anxiety: Persistent, excessive worry that interferes with daily life. Goes beyond normal nervousness. Physical symptoms can include rapid heartbeat, sweating, and difficulty concentrating.

Depression: More than sadness — a persistent low mood, loss of interest in activities, changes in sleep/appetite, fatigue, and sometimes thoughts of self-harm. Depression is a medical condition, not a character flaw.

Stress: While some stress is normal and even helpful, chronic stress damages both mental and physical health. It can come from school, relationships, family, or uncertainty about the future.

ADHD: Difficulty with attention, hyperactivity, and impulse control. It's a neurodevelopmental difference, not laziness or lack of effort.

Eating disorders: Disordered relationships with food and body image, including anorexia, bulimia, and binge eating disorder.

Many people experience these to varying degrees. Professional help is available and effective.`},{heading:"Warning Signs to Watch For",content:`In yourself:
• Persistent sadness or hopelessness lasting more than two weeks
• Extreme mood changes
• Withdrawal from friends and activities you enjoy
• Changes in eating or sleeping patterns
• Difficulty concentrating
• Unexplained physical symptoms
• Thoughts of self-harm or suicide

In others:
• Personality changes
• Increased isolation
• Loss of interest in things they loved
• Giving away possessions
• Talking about being a burden
• Dramatic mood shifts
• Declining performance in school/work

What to do:
• Take it seriously — don't dismiss concerns
• Talk to a trusted adult (parent, counselor, teacher)
• If someone mentions suicide, tell an adult immediately
• Know crisis resources (988 Suicide & Crisis Lifeline in the US)

Remember: Getting help is a sign of strength, not weakness. Early intervention makes a big difference.`},{heading:"Building Mental Wellness",content:`Daily practices that support mental health:

Connection: Humans are social creatures. Maintain relationships, even when you don't feel like it. Quality matters more than quantity.

Physical activity: Exercise is one of the most powerful natural antidepressants. Even a short walk helps.

Sleep: Vital for emotional regulation and mental clarity. Most teens need 8-10 hours.

Nutrition: What you eat affects how you feel. Limit sugar and processed foods; eat regular, balanced meals.

Purpose: Having goals and meaning supports well-being. This can be school, hobbies, volunteering, or relationships.

Mindfulness: Practices like meditation help manage stress and improve emotional awareness.

Limit social media: Excessive use correlates with worse mental health, especially comparison culture.

Self-compassion: Treat yourself with the kindness you'd show a good friend.

When to seek professional help:
• Symptoms persist for weeks
• You can't function normally
• You're using substances to cope
• You have thoughts of self-harm
• You've experienced trauma

Therapy, counseling, and sometimes medication can help. There's no shame in getting support.`}],keyTakeaways:["Mental health is a spectrum that affects everyone","Common conditions include anxiety, depression, and stress","Warning signs shouldn't be ignored — early help matters","Daily habits like sleep, exercise, and connection support mental wellness","Seeking help is a sign of strength, not weakness"]},"hw-2":{id:"hw-2",title:"Stress Management",introduction:"Stress is an unavoidable part of life, but it doesn't have to control you. Learning to manage stress effectively is one of the most valuable life skills you can develop. This lesson covers practical techniques you can use starting today.",sections:[{heading:"Understanding Stress",videoUrl:"https://www.youtube.com/embed/v-t1Z5-oPtU",content:`Stress is your body's response to demands or threats. It triggers the "fight or flight" response — your heart races, muscles tense, and you become more alert.

In short bursts, stress can be helpful:
• Motivates you to meet deadlines
• Helps you perform in challenging situations
• Keeps you alert to danger

But chronic stress damages your health:
• Weakens immune system
• Increases risk of heart disease
• Affects memory and concentration
• Contributes to anxiety and depression
• Disrupts sleep
• Can lead to unhealthy coping (overeating, substances)

Common teenage stressors:
• Academic pressure
• Social dynamics and fitting in
• Family issues
• Future uncertainty
• Relationship problems
• Social media and comparison
• Global events and news

The goal isn't eliminating stress entirely — it's building skills to manage it effectively.`},{heading:"Immediate Stress Relief",content:`When stress hits, these techniques provide quick relief:

Deep breathing (4-7-8 technique):
• Breathe in through your nose for 4 seconds
• Hold for 7 seconds
• Exhale slowly through your mouth for 8 seconds
• Repeat 3-4 times

This activates your parasympathetic nervous system, physically calming your body.

Progressive muscle relaxation:
• Tense a muscle group (like your shoulders) for 5 seconds
• Release and notice the relaxation
• Move through major muscle groups

Grounding (5-4-3-2-1):
Notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This brings you back to the present moment.

Movement: Even a short walk or stretching helps release stress hormones.

Cold water: Splash cold water on your face or hold an ice cube. This triggers the "dive reflex" and slows your heart rate.

Talk it out: Sometimes just expressing what's stressing you — to a friend, journal, or even out loud to yourself — provides relief.`},{heading:"Long-Term Stress Management",content:`Building resilience requires consistent practices:

Time management:
• Break large tasks into smaller steps
• Use a planner or app to track deadlines
• Avoid procrastination (it creates more stress)
• Build in buffer time
• Learn to say no to overcommitment

Self-care routine:
• Regular sleep schedule (even on weekends)
• Physical activity most days
• Healthy, regular meals
• Time for activities you enjoy
• Social connection

Mindfulness and meditation:
• Regular practice rewires your brain to handle stress better
• Apps like Headspace or Calm can guide you
• Even 5-10 minutes daily helps
• Focus on breath and present moment

Cognitive reframing:
• Challenge catastrophic thinking
• Ask: "Will this matter in a year?"
• Look for what you can control
• Find opportunities in challenges

Support system:
• Maintain close relationships
• Don't isolate when stressed
• Ask for help when needed
• Consider talking to a counselor`},{heading:"Healthy vs. Unhealthy Coping",content:`Not all stress responses are equal:

Healthy coping:
• Exercise and physical activity
• Talking to someone you trust
• Creative expression (art, music, writing)
• Relaxation techniques
• Problem-solving
• Time in nature
• Adequate sleep
• Humor and play

Unhealthy coping:
• Alcohol or drug use  
• Overeating or undereating
• Excessive screen time/gaming
• Isolating yourself
• Lashing out at others
• Denial/avoidance
• Self-harm

Unhealthy coping might feel good immediately but makes things worse long-term. It's like putting problems on a credit card — you'll pay more later.

If you find yourself relying on unhealthy coping:
• Don't judge yourself harshly
• Try replacing with healthier alternatives gradually
• Seek support if needed
• Identify triggers and plan ahead

Building healthy habits takes time. Be patient with yourself.`}],keyTakeaways:["Some stress is helpful; chronic stress damages health","Deep breathing and grounding provide immediate relief","Long-term management includes time management, self-care, and mindfulness","Healthy coping skills strengthen you; unhealthy ones weaken you","Building resilience is a gradual process — be patient with yourself"]}},MC={...NC,...EC,...CC};function Yr(e){return MC[e]}const jC={"fl-1":{question:"According to the 50/30/20 budget rule, what percentage should go toward savings and debt repayment?",options:["10%","20%","30%","50%"],correctIndex:1,explanation:"The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings and debt repayment.",bonusXP:15},"fl-2":{question:'What is the "Pay Yourself First" strategy?',options:["Spend money on yourself before paying bills","Save money automatically before you have a chance to spend it","Pay off your smallest debts first","Invest in yourself through education"],correctIndex:1,explanation:"Pay Yourself First means automatically transferring money to savings right after each paycheck, before spending on anything else.",bonusXP:15},"fl-3":{question:"What factor has the BIGGEST impact on your credit score?",options:["Length of credit history","Payment history","Credit mix","New credit inquiries"],correctIndex:1,explanation:"Payment history accounts for 35% of your credit score — the largest factor. Always pay on time!",bonusXP:15},"fl-4":{question:"If you invest $100/month starting at age 18 with 7% annual returns, approximately how much would you have by age 65?",options:["$56,000","$150,000","$380,000","$1,000,000"],correctIndex:2,explanation:"Thanks to compound interest, $56,400 in contributions would grow to approximately $380,000 over 47 years at 7% returns.",bonusXP:15},"fl-5":{question:"If you earn $50,000 and your highest tax bracket is 22%, what is your effective (average) tax rate?",options:["22%","About 12%","0%","50%"],correctIndex:1,explanation:"Tax brackets are progressive — only the income IN each bracket is taxed at that rate, so your effective rate is lower than your marginal rate.",bonusXP:15},"fl-6":{question:"What should be your FIRST financial priority according to most experts?",options:["Invest in stocks","Pay off all debt","Build an emergency fund","Buy a house"],correctIndex:2,explanation:"An emergency fund (starting with $1,000, then 3-6 months of expenses) protects you from going into debt when unexpected expenses arise.",bonusXP:20},"dl-1":{question:"What does DNS (Domain Name System) do?",options:["Encrypts your internet connection","Translates website names into IP addresses","Blocks malicious websites","Speeds up your internet connection"],correctIndex:1,explanation:`DNS is like the internet's phone book — it translates human-readable names like "google.com" into numerical IP addresses that computers use.`,bonusXP:15},"dl-2":{question:'What is your "digital footprint"?',options:["The physical size of your computer","The record of all your online activities and information","Your internet connection speed","The number of devices you own"],correctIndex:1,explanation:"Your digital footprint includes everything you do online — posts, searches, websites visited, and data collected about you. It's permanent!",bonusXP:15},"dl-3":{question:"What is the main difference between traditional programming and machine learning?",options:["Machine learning is faster","Traditional programming gives the computer rules; machine learning lets it learn patterns from data","Machine learning doesn't use computers","Traditional programming can't solve complex problems"],correctIndex:1,explanation:"In traditional programming, humans write explicit rules. In machine learning, computers find patterns in data and figure out the rules themselves.",bonusXP:15},"dl-4":{question:'What does "correlation does not imply causation" mean?',options:["Statistics are always wrong","Just because two things happen together doesn't mean one causes the other","You can't measure relationships between things","Causes are impossible to determine"],correctIndex:1,explanation:"Two things can be correlated (happen together) without one causing the other — there might be a third factor, or it could be coincidence.",bonusXP:15},"ct-1":{question:'What makes an argument "sound"?',options:["It's loud and passionate","It's valid AND has true premises","It's accepted by most people","It's written by an expert"],correctIndex:1,explanation:"A sound argument is valid (the logic works) AND has premises that are actually true. Valid logic from false premises gives false conclusions.",bonusXP:15},"ct-2":{question:'What is "steelmanning" an argument?',options:["Making an argument stronger with armor","Presenting the weakest version of an opposing argument","Presenting the STRONGEST version of an opposing argument before responding","Refusing to engage with opposing views"],correctIndex:2,explanation:"Steelmanning means engaging with the best version of an opposing argument — the opposite of strawmanning. It's more honest and effective.",bonusXP:15},"ct-3":{question:'What is "confirmation bias"?',options:["Confirming facts before believing them","Seeking out information that confirms what you already believe","A bias toward positive news","Double-checking your work"],correctIndex:1,explanation:"Confirmation bias is our tendency to seek, interpret, and remember information that confirms our existing beliefs while avoiding contradictory evidence.",bonusXP:15},"ct-4":{question:'In the CRAAP test for evaluating sources, what does the second "A" stand for?',options:["Accuracy","Appearance","Attitude","Authorship"],correctIndex:0,explanation:"CRAAP stands for Currency, Relevance, Authority, Accuracy, and Purpose. Accuracy asks whether the information is supported by evidence.",bonusXP:15},"ct-5":{question:"According to Aristotle, what are the three modes of persuasion?",options:["Facts, figures, and stories","Ethos (credibility), logos (logic), and pathos (emotion)","Speaking, writing, and presenting","Introduction, body, and conclusion"],correctIndex:1,explanation:"Ethos appeals to credibility, logos appeals to logic and evidence, and pathos appeals to emotion. Effective persuasion uses all three.",bonusXP:15},"rm-1":{question:"What's the quickest way to calculate a 15% tip?",options:["Multiply by 0.15","Find 10%, then add half of that amount","Divide by 15","Move the decimal twice"],correctIndex:1,explanation:"Find 10% (move decimal left), then add half of that. For a $60 bill: 10% = $6, half = $3, total tip = $9.",bonusXP:15},"rm-2":{question:"Which average is LEAST affected by extreme outliers?",options:["Mean","Median","Mode","Range"],correctIndex:1,explanation:"The median (middle value) is resistant to outliers. One billionaire in a room dramatically affects the mean income but doesn't change the median much.",bonusXP:15},"rm-3":{question:`What is the "gambler's fallacy"?`,options:["Believing you can beat the house",'Believing past random events affect future ones (like thinking "heads is due" after many tails)',"Not understanding the odds","Betting too much money"],correctIndex:1,explanation:"The gambler's fallacy is believing that past random events influence future ones. After 10 heads, the next flip is still 50/50 — the coin has no memory!",bonusXP:15},"rm-4":{question:"Using the Rule of 72, approximately how long does it take money to double at 8% interest?",options:["6 years","9 years","12 years","72 years"],correctIndex:1,explanation:"Rule of 72: Years to double = 72 ÷ interest rate. At 8%: 72 ÷ 8 = 9 years.",bonusXP:15},"gc-1":{question:"What is the purpose of having three branches of government?",options:["To create more government jobs","To prevent any one branch from having too much power","To make the government larger","To slow down all decisions"],correctIndex:1,explanation:"Separation of powers creates checks and balances — each branch can limit the others, preventing concentration of power and protecting citizens.",bonusXP:15},"gc-2":{question:"What major event in 1991 ended the Cold War?",options:["Fall of the Berlin Wall","Dissolution of the Soviet Union","End of World War II","Creation of the European Union"],correctIndex:1,explanation:"The Soviet Union officially dissolved in 1991, ending the Cold War. (The Berlin Wall fell in 1989, which preceded this.)",bonusXP:15},"gc-3":{question:'What is "comparative advantage" in international trade?',options:["One country being better at everything","Countries specializing in what they produce most efficiently and trading","Having more natural resources","Having lower taxes"],correctIndex:1,explanation:"Comparative advantage means countries benefit by specializing in what they produce most efficiently relative to other things, then trading.",bonusXP:15},"gc-4":{question:"What is causing the current increase in global temperatures?",options:["Natural solar cycles only","Volcanic activity","Human emissions of greenhouse gases, primarily from burning fossil fuels","The Earth's orbit changing"],correctIndex:2,explanation:"While natural factors exist, 97%+ of climate scientists agree the current warming is primarily caused by human greenhouse gas emissions.",bonusXP:15},"gc-5":{question:"According to research, what percentage of a population actively participating in nonviolent resistance has never been overcome by a government?",options:["1%","3.5%","10%","51%"],correctIndex:1,explanation:"Research by Erica Chenoweth found that no government has withstood a challenge of 3.5% of its population engaged in sustained nonviolent resistance.",bonusXP:15},"cm-1":{question:'What is the "inverted pyramid" style of writing?',options:["Writing conclusions first, then introduction","Putting the most important information first, then supporting details","Writing in a triangular shape","Starting with the least important points"],correctIndex:1,explanation:"The inverted pyramid puts the most important information first, then adds supporting details. Readers often don't finish, so front-load value!",bonusXP:15},"cm-2":{question:"When should you use email vs. a phone/video call?",options:["Email for everything","Phone for everything","Email for documentation and non-urgent items; phone for sensitive or complex discussions","It doesn't matter"],correctIndex:2,explanation:"Email is best for documentation and non-urgent matters. Phone/video is better for sensitive topics, complex discussions, and relationship building.",bonusXP:15},"cm-3":{question:"What's the most effective way to manage public speaking anxiety?",options:["Avoid speaking publicly","Don't prepare so you seem natural","Prepare thoroughly and reframe nervousness as excitement","Imagine the audience in their underwear"],correctIndex:2,explanation:"Preparation reduces fear, and reframing anxiety as excitement (they feel similar) helps you perform better. The more you speak, the easier it gets.",bonusXP:15},"cm-4":{question:"What is the key difference between hearing and active listening?",options:["There is no difference","Active listening involves full attention, reflection, and response to understand","Hearing is more effective","Active listening means talking more"],correctIndex:1,explanation:"Active listening means fully concentrating, understanding, reflecting, and responding — not just hearing words while thinking about your reply.",bonusXP:15},"hw-1":{question:"What is the relationship between mental health and mental illness?",options:["They are the same thing","Mental health is a spectrum everyone has; mental illness is when challenges significantly impair functioning","Only people with mental illness have mental health","Mental health is physical, mental illness is psychological"],correctIndex:1,explanation:"Everyone has mental health (a spectrum of well-being). Mental illness refers to conditions that significantly impair daily functioning and well-being.",bonusXP:15},"hw-2":{question:"What is the 4-7-8 breathing technique for stress relief?",options:["Breathe 4 times, hold 7 times, exhale 8 times","Breathe in for 4 seconds, hold for 7 seconds, exhale for 8 seconds","Do 4+7+8=19 breaths","Breathe for 478 seconds"],correctIndex:1,explanation:"The 4-7-8 technique: breathe in for 4 seconds, hold for 7 seconds, exhale slowly for 8 seconds. This activates your body's relaxation response.",bonusXP:15},"hw-3":{question:"How much sleep do teenagers typically need?",options:["5-6 hours","6-7 hours","8-10 hours","12+ hours"],correctIndex:2,explanation:"Teenagers need 8-10 hours of sleep per night. Most are chronically sleep-deprived, which affects mood, learning, and health.",bonusXP:15},"hw-4":{question:"What's the minimum recommended amount of moderate physical activity per week?",options:["30 minutes total","150 minutes","60 minutes","7 hours"],correctIndex:1,explanation:"150 minutes of moderate activity per week (30 minutes, 5 days) is the minimum recommendation, plus strength training 2+ days.",bonusXP:15},"hw-5":{question:'According to the "habit loop," what are the three components of a habit?',options:["Start, middle, end","Cue, routine, reward","Motivation, action, result","Plan, execute, evaluate"],correctIndex:1,explanation:"The habit loop: Cue (trigger), Routine (the behavior), Reward (the benefit). Understanding this helps you build good habits and break bad ones.",bonusXP:15}};function DC(e){return jC[e]}function RC({content:e,onComplete:t,isCompleted:n,lessonId:a}){const[i,s]=w.useState(0),[o,l]=w.useState("female"),[r,c]=w.useState(!1),[d,f]=w.useState(!1),[h,g]=w.useState(null),[v,S]=w.useState(!1),[x,p]=w.useState(!1),m=DC(a),[y,b]=w.useState([]);w.useEffect(()=>{const C=()=>{const j=window.speechSynthesis.getVoices();b(j)};return C(),window.speechSynthesis.onvoiceschanged=C,()=>{window.speechSynthesis.cancel()}},[]);const T=()=>{const C=y.filter(D=>{const B=D.name.toLowerCase();return o==="female"?B.includes("samantha")||B.includes("karen")||B.includes("victoria")||B.includes("fiona")||B.includes("moira")||B.includes("tessa")||B.includes("female")||B.includes("zira")||B.includes("hazel")||B.includes("susan")||B.includes("catherine"):B.includes("daniel")||B.includes("tom")||B.includes("oliver")||B.includes("james")||B.includes("lee")||B.includes("rishi")||B.includes("male")||B.includes("david")||B.includes("mark")});return C.length>0?C[0]:y.filter(D=>D.lang==="en-US"||D.lang==="en-GB"||D.lang.startsWith("en"))[0]||y[0]||null},M=()=>{if(i===0)return e.introduction;if(i<=e.sections.length){const C=e.sections[i-1];return`${C.heading}. ${C.content}`}else return`Key Takeaways. ${e.keyTakeaways.join(". ")}`},E=()=>{if(r){window.speechSynthesis.cancel(),c(!1);return}const C=M(),j=new SpeechSynthesisUtterance(C),D=T();D&&(j.voice=D),j.rate=.85,j.pitch=o==="female"?1.05:.95,j.volume=.9,j.onend=()=>c(!1),j.onerror=()=>c(!1),window.speechSynthesis.speak(j),c(!0)},A=()=>{window.speechSynthesis.cancel(),c(!1)},N=e.sections.length+2,z=(i+1)/N*100,ae=()=>{A(),i<N-1&&s(i+1)},Ae=()=>{A(),i>0&&s(i-1)},mt=()=>{A(),m?(f(!0),g(null),S(!1),p(!1)):n||t()},en=()=>{if(h===null||!m)return;S(!0),h===m.correctIndex&&!n?(p(!0),setTimeout(()=>{t(m.bonusXP)},2500)):n||setTimeout(()=>{t()},2500)},tn=()=>{f(!1),t()};if(d&&m){const C=v&&h===m.correctIndex;return u.jsx("div",{className:"space-y-6",children:u.jsxs(q.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"card bg-gradient-to-br from-accent-600/20 to-primary-600/20",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(zh,{className:"w-10 h-10 text-yellow-400"}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold text-white",children:"Quick Quiz"}),u.jsx("p",{className:"text-base text-yellow-300",children:n?"Test your knowledge! (Already completed - no XP)":`Answer correctly for +${m.bonusXP} bonus XP!`})]})]}),!v&&u.jsx("button",{onClick:tn,className:"text-slate-400 hover:text-white transition-colors",children:u.jsx(vT,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("p",{className:"text-xl font-semibold text-white",children:m.question}),u.jsx("div",{className:"space-y-2",children:m.options.map((j,D)=>{let B="w-full text-left p-4 rounded-xl transition-all border ";return v?D===m.correctIndex?B+="bg-green-700 border-2 border-green-400 text-white font-semibold":D===h&&D!==m.correctIndex?B+="bg-red-700 border-2 border-red-400 text-white":B+="bg-slate-700 border-slate-500 text-slate-300":h===D?B+="bg-purple-700 border-2 border-purple-400 text-white font-semibold":B+="bg-slate-700 border-slate-500 hover:border-purple-400 hover:bg-slate-600 text-white",u.jsxs("button",{onClick:()=>!v&&g(D),disabled:v,className:B,children:[u.jsxs("span",{className:"font-bold mr-3 text-yellow-400",children:[String.fromCharCode(65+D),"."]}),u.jsx("span",{className:"text-base text-white",children:j})]},D)})}),v&&u.jsx(q.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`p-4 rounded-xl ${C?"bg-green-500/20 border border-green-500/30":"bg-orange-500/20 border border-orange-500/30"}`,children:C?u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(YS,{className:"w-10 h-10 text-yellow-400"}),u.jsxs("div",{children:[u.jsxs("p",{className:"font-bold text-xl text-green-300",children:["🎉 Correct! +",m.bonusXP," Bonus XP"]}),u.jsx("p",{className:"text-base text-white mt-1",children:m.explanation})]})]}):u.jsxs("div",{children:[u.jsx("p",{className:"font-bold text-xl text-orange-300",children:"Not quite — but you still completed the lesson!"}),u.jsx("p",{className:"text-base text-white mt-2",children:m.explanation})]})}),!v&&u.jsx("button",{onClick:en,disabled:h===null,className:`w-full py-4 rounded-xl font-bold text-lg transition-all ${h===null?"bg-slate-600 text-slate-400 cursor-not-allowed":"bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"}`,children:"✓ Submit Answer"})]})]})})}return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"card",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:"text-sm text-slate-400",children:"Lesson Progress"}),u.jsxs("span",{className:"text-sm text-gamify-xp font-medium",children:[Math.round(z),"%"]})]}),u.jsx("div",{className:"xp-bar h-2",children:u.jsx("div",{className:"xp-fill transition-all duration-500",style:{width:`${z}%`}})})]}),u.jsx("div",{className:"card bg-gradient-to-r from-primary-600/20 to-accent-600/20",children:u.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(gT,{className:"w-5 h-5 text-primary-400"}),u.jsx("span",{className:"text-sm font-medium",children:"🎧 Calm Teacher Voice:"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{onClick:()=>{A(),l("female")},className:`px-5 py-3 rounded-lg font-bold transition-all ${o==="female"?"bg-pink-600 text-white shadow-lg ring-2 ring-pink-400":"bg-slate-700 text-white hover:bg-slate-600 border border-slate-500"}`,children:["👩 ",u.jsx("span",{className:"text-white",children:"Female"})]}),u.jsxs("button",{onClick:()=>{A(),l("male")},className:`px-5 py-3 rounded-lg font-bold transition-all ${o==="male"?"bg-blue-600 text-white shadow-lg ring-2 ring-blue-400":"bg-slate-700 text-white hover:bg-slate-600 border border-slate-500"}`,children:["👨 ",u.jsx("span",{className:"text-white",children:"Male"})]})]}),u.jsx("button",{onClick:E,className:`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-lg transition-all ${r?"bg-red-600 hover:bg-red-700 ring-2 ring-red-400":"bg-green-600 hover:bg-green-700"} text-white shadow-lg`,children:r?u.jsxs(u.Fragment,{children:[u.jsx(lT,{className:"w-5 h-5"}),u.jsx("span",{className:"text-white",children:"Stop"})]}):u.jsxs(u.Fragment,{children:[u.jsx(cT,{className:"w-5 h-5"}),u.jsx("span",{className:"text-white",children:"Listen"})]})})]})}),u.jsxs(q.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.3},className:"card",children:[i===0&&u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx(Bl,{className:"w-6 h-6 text-primary-400"}),u.jsx("h2",{className:"text-xl font-bold",children:"Introduction"})]}),u.jsx("p",{className:"text-slate-200 leading-relaxed text-lg",children:e.introduction})]}),i>0&&i<=e.sections.length&&u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-bold mb-4 text-primary-400",children:e.sections[i-1].heading}),u.jsx("div",{className:"prose prose-invert max-w-none",children:e.sections[i-1].content.split(`

`).map((C,j)=>u.jsx("p",{className:"text-slate-200 leading-relaxed mb-4 text-lg whitespace-pre-wrap",children:C},j))}),e.sections[i-1].videoUrl&&u.jsx("div",{className:"mt-6 aspect-video rounded-xl overflow-hidden",children:u.jsx("iframe",{src:e.sections[i-1].videoUrl,className:"w-full h-full",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),i===e.sections.length+1&&u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx(iT,{className:"w-6 h-6 text-gamify-gold"}),u.jsx("h2",{className:"text-xl font-bold",children:"Key Takeaways"})]}),u.jsx("ul",{className:"space-y-3",children:e.keyTakeaways.map((C,j)=>u.jsxs(q.li,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:j*.1},className:"flex items-start gap-3",children:[u.jsx(To,{className:"w-5 h-5 text-gamify-xp flex-shrink-0 mt-0.5"}),u.jsx("span",{className:"text-slate-200 text-lg",children:C})]},j))}),m&&u.jsx(q.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5},className:"mt-6 p-5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-400/50 rounded-xl",children:u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"text-4xl",children:"🎯"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-bold text-xl text-white",children:"Quiz Time!"}),u.jsx("p",{className:"text-base text-purple-200",children:n?"Quiz already completed!":`Answer correctly for +${m.bonusXP} bonus XP`})]})]})})]})]},i),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("button",{onClick:Ae,disabled:i===0,className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${i===0?"opacity-50 cursor-not-allowed bg-slate-700":"bg-slate-700 hover:bg-slate-600"}`,children:[u.jsx(XS,{className:"w-4 h-4"}),"Previous"]}),u.jsxs("span",{className:"text-slate-400 text-sm",children:[i+1," of ",N]}),i<N-1?u.jsxs("button",{onClick:ae,className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 transition-all",children:["Next",u.jsx($S,{className:"w-4 h-4"})]}):u.jsx("button",{onClick:mt,disabled:!m&&n,className:`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg ${m?"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white cursor-pointer":n?"bg-green-600 text-white cursor-default":"bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"}`,children:m?u.jsxs(u.Fragment,{children:["🎯 ",n?"Retake Quiz":"Take Quiz",u.jsx(zh,{className:"w-5 h-5"})]}):n?u.jsxs(u.Fragment,{children:[u.jsx(To,{className:"w-5 h-5"}),"Completed!"]}):u.jsxs(u.Fragment,{children:["Complete Lesson",u.jsx(To,{className:"w-5 h-5"})]})})]})]})}function zC(){const{moduleId:e}=_1(),t=pd(),{modules:n,progress:a,user:i,completeLesson:s}=ha(),[o,l]=w.useState(null),r=n.find(p=>p.id===e);if(!r)return u.jsxs("div",{className:"text-center py-12",children:[u.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Course not found"}),u.jsx(Fe,{to:"/courses",className:"btn-primary",children:"Back to Courses"})]});const c=r.isPremium&&!(i!=null&&i.isPremium),d=r.lessons.filter(p=>a.completedLessons.includes(p.id)).length,f=d===r.lessons.length,h=r.lessons.reduce((p,m)=>p+m.xp,0),g=r.lessons.filter(p=>a.completedLessons.includes(p.id)).reduce((p,m)=>p+m.xp,0),v=(p,m)=>{c||s(p,m)},S=p=>{if(c)return;if(Yr(p))l(p);else{const y=r.lessons.find(b=>b.id===p);y&&!a.completedLessons.includes(p)&&v(p,y.xp)}},x=()=>{l(null)};if(o){const p=r.lessons.find(b=>b.id===o),m=Yr(o);if(!p||!m)return l(null),null;const y=a.completedLessons.includes(o);return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("button",{onClick:x,className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors",children:[u.jsx(qc,{className:"w-4 h-4"}),"Back to ",r.title]}),u.jsxs("div",{className:"flex items-center gap-2 text-gamify-xp",children:[u.jsx(ea,{className:"w-4 h-4"}),u.jsxs("span",{className:"font-medium",children:[p.xp," XP"]})]})]}),u.jsx("div",{className:"card bg-gradient-to-r from-primary-600/20 to-accent-600/20",children:u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("span",{className:"text-4xl",children:r.icon}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl font-bold",children:m.title}),u.jsx("p",{className:"text-slate-400",children:r.title})]})]})}),u.jsx(RC,{content:m,isCompleted:y,lessonId:o,onComplete:b=>v(o,p.xp+(b||0))})]})}return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("button",{onClick:()=>t("/courses"),className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors",children:[u.jsx(qc,{className:"w-4 h-4"}),"Back to Courses"]}),u.jsx(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"card",children:u.jsxs("div",{className:"flex flex-col md:flex-row md:items-start gap-6",children:[u.jsx("span",{className:"text-6xl",children:r.icon}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx("h1",{className:"text-2xl md:text-3xl font-bold",children:r.title}),r.isPremium?u.jsx("span",{className:"badge-premium",children:"Premium"}):u.jsx("span",{className:"badge-free",children:"Free"})]}),u.jsx("p",{className:"text-slate-300 mb-4",children:r.description}),u.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(ea,{className:"w-4 h-4 text-gamify-xp"}),u.jsxs("span",{children:[g,"/",h," XP earned"]})]}),u.jsxs("div",{children:[d,"/",r.lessons.length," lessons complete"]})]}),u.jsx("div",{className:"xp-bar mt-4 h-4",children:u.jsx("div",{className:"xp-fill",style:{width:`${d/r.lessons.length*100}%`}})})]}),f&&u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-5xl mb-2",children:r.badge}),u.jsx("div",{className:"text-sm font-semibold text-gamify-gold",children:r.badgeName}),u.jsx("div",{className:"text-xs text-slate-400",children:"Badge Earned!"})]})]})}),c&&u.jsx("div",{className:"card bg-accent-500/10 border-accent-500/30",children:u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx(ds,{className:"w-8 h-8 text-accent-400"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"font-semibold",children:"Premium Course"}),u.jsx("p",{className:"text-sm text-slate-300",children:"Upgrade to access this course and all premium content"})]}),u.jsx(Fe,{to:"/profile",className:"btn-accent",children:"Upgrade"})]})}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("h2",{className:"text-xl font-semibold flex items-center gap-2",children:[u.jsx(Bl,{className:"w-5 h-5"}),"Lessons"]}),r.lessons.map((p,m)=>{const y=a.completedLessons.includes(p.id),b=!!Yr(p.id);return u.jsxs(q.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:m*.05},className:`card flex items-center gap-4 cursor-pointer ${c?"opacity-50":y?"border-gamify-xp/30":"hover:border-primary-500/50"} transition-all`,onClick:()=>S(p.id),children:[u.jsx("div",{className:"flex-shrink-0",children:y?u.jsx(To,{className:"w-8 h-8 text-gamify-xp"}):c?u.jsx(ds,{className:"w-8 h-8 text-slate-500"}):u.jsx(JS,{className:"w-8 h-8 text-slate-500"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h3",{className:`font-medium ${y?"text-slate-300":""}`,children:p.title}),u.jsx("p",{className:"text-sm text-slate-400 truncate",children:p.description}),b&&!y&&!c&&u.jsx("span",{className:"text-xs text-primary-400",children:"Click to start lesson →"})]}),u.jsxs("div",{className:`flex items-center gap-1 text-sm font-medium ${y?"text-gamify-xp":"text-slate-400"}`,children:[u.jsx(ea,{className:"w-4 h-4"}),p.xp," XP"]})]},p.id)})]}),!f&&!c&&u.jsx("div",{className:"card bg-gradient-to-r from-gamify-gold/10 to-amber-600/10 border-gamify-gold/30",children:u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("span",{className:"text-4xl",children:r.badge}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:"Complete all lessons to earn:"}),u.jsxs("p",{className:"text-gamify-gold font-medium",children:[r.badgeName," Badge"]})]})]})})]})}function BC(){const{progress:e,modules:t}=ha(),n=e.achievements.filter(s=>s.earned),a=e.achievements.filter(s=>!s.earned),i=t.filter(s=>s.lessons.filter(l=>e.completedLessons.includes(l.id)).length===s.lessons.length);return u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold mb-2",children:"🏆 Achievements"}),u.jsx("p",{className:"text-slate-400",children:"Track your progress and show off your accomplishments"})]}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[u.jsxs("div",{className:"card text-center",children:[u.jsx("div",{className:"text-3xl mb-1",children:"🏅"}),u.jsx("div",{className:"text-2xl font-bold",children:n.length}),u.jsx("div",{className:"text-sm text-slate-400",children:"Achievements"})]}),u.jsxs("div",{className:"card text-center",children:[u.jsx("div",{className:"text-3xl mb-1",children:"🎖️"}),u.jsx("div",{className:"text-2xl font-bold",children:i.length}),u.jsx("div",{className:"text-sm text-slate-400",children:"Badges"})]}),u.jsxs("div",{className:"card text-center",children:[u.jsx("div",{className:"text-3xl mb-1",children:"📚"}),u.jsx("div",{className:"text-2xl font-bold",children:e.completedLessons.length}),u.jsx("div",{className:"text-sm text-slate-400",children:"Lessons"})]}),u.jsxs("div",{className:"card text-center",children:[u.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),u.jsx("div",{className:"text-2xl font-bold",children:e.streak}),u.jsx("div",{className:"text-sm text-slate-400",children:"Day Streak"})]})]}),i.length>0&&u.jsxs("section",{children:[u.jsx("h2",{className:"text-xl font-semibold mb-4",children:"🎖️ Earned Badges"}),u.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:i.map((s,o)=>u.jsxs(q.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:o*.1},className:"card text-center bg-gradient-to-br from-gamify-gold/10 to-amber-600/10 border-gamify-gold/30",children:[u.jsx("div",{className:"text-5xl mb-2",children:s.badge}),u.jsx("div",{className:"font-semibold text-gamify-gold",children:s.badgeName}),u.jsx("div",{className:"text-xs text-slate-400",children:s.title})]},s.id))})]}),n.length>0&&u.jsxs("section",{children:[u.jsx("h2",{className:"text-xl font-semibold mb-4",children:"🏅 Unlocked Achievements"}),u.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:n.map((s,o)=>u.jsxs(q.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o*.1},className:"card flex items-center gap-4 bg-gradient-to-r from-gamify-gold/10 to-transparent border-gamify-gold/30",children:[u.jsx("span",{className:"text-4xl",children:s.icon}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gamify-gold",children:s.title}),u.jsx("p",{className:"text-sm text-slate-300",children:s.description})]})]},s.id))})]}),u.jsxs("section",{children:[u.jsx("h2",{className:"text-xl font-semibold mb-4",children:"🔒 Locked Achievements"}),u.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:a.map((s,o)=>u.jsxs(q.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o*.05},className:"card flex items-center gap-4 opacity-60",children:[u.jsx("span",{className:"text-4xl grayscale",children:s.icon}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:s.title}),u.jsx("p",{className:"text-sm text-slate-400",children:s.description})]})]},s.id))})]}),u.jsxs("section",{children:[u.jsx("h2",{className:"text-xl font-semibold mb-4",children:"🎯 All Badges"}),u.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:t.map(s=>{const o=i.some(l=>l.id===s.id);return u.jsxs("div",{className:`card text-center ${o?"bg-gradient-to-br from-gamify-gold/10 to-amber-600/10 border-gamify-gold/30":"opacity-50"}`,children:[u.jsx("div",{className:`text-4xl mb-2 ${!o&&"grayscale"}`,children:s.badge}),u.jsx("div",{className:`text-sm font-medium ${o?"text-gamify-gold":""}`,children:s.badgeName}),o?u.jsx("div",{className:"text-xs text-gamify-xp mt-1",children:"✓ Earned"}):u.jsxs("div",{className:"text-xs text-slate-500 mt-1",children:["Complete ",s.title]})]},s.id)})})]})]})}const ki={monthly:{price:19.99},annual:{price:149.99,savings:"37%"},family:{price:249.99,note:"Up to 4 students"}};function LC(){const{user:e,progress:t,modules:n,setUser:a,upgradeToPermium:i}=ha(),[s,o]=w.useState((e==null?void 0:e.name)||""),[l,r]=w.useState(!1),c=t.completedLessons.length;n.reduce((g,v)=>g+v.lessons.length,0);const d=n.filter(g=>g.lessons.filter(S=>t.completedLessons.includes(S.id)).length===g.lessons.length).length,f=()=>{s.trim()&&a(s.trim(),(e==null?void 0:e.isPremium)||!1)},h=()=>{i(),r(!1)};return u.jsxs("div",{className:"space-y-8 max-w-2xl mx-auto",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold mb-2",children:"👤 Profile"}),u.jsx("p",{className:"text-slate-400",children:"Manage your account and subscription"})]}),u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"card",children:[u.jsxs("h2",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[u.jsx(Sv,{className:"w-5 h-5"}),"Your Profile"]}),u.jsx("div",{className:"space-y-4",children:u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Display Name"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:s,onChange:g=>o(g.target.value),placeholder:"Enter your name",className:"flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"}),u.jsx("button",{onClick:f,className:"btn-primary",children:"Save"})]})]})})]}),u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"card",children:[u.jsx("h2",{className:"text-lg font-semibold mb-4",children:"📊 Your Stats"}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[u.jsxs("div",{className:"text-center p-3 bg-slate-700/30 rounded-lg",children:[u.jsx("div",{className:"text-2xl font-bold text-gamify-xp",children:t.xp.toLocaleString()}),u.jsx("div",{className:"text-sm text-slate-400",children:"Total XP"})]}),u.jsxs("div",{className:"text-center p-3 bg-slate-700/30 rounded-lg",children:[u.jsxs("div",{className:"text-2xl font-bold text-gamify-gold",children:["Lv.",t.rank]}),u.jsx("div",{className:"text-sm text-slate-400",children:t.rankTitle})]}),u.jsxs("div",{className:"text-center p-3 bg-slate-700/30 rounded-lg",children:[u.jsx("div",{className:"text-2xl font-bold text-primary-400",children:c}),u.jsx("div",{className:"text-sm text-slate-400",children:"Lessons Done"})]}),u.jsxs("div",{className:"text-center p-3 bg-slate-700/30 rounded-lg",children:[u.jsx("div",{className:"text-2xl font-bold text-accent-400",children:d}),u.jsx("div",{className:"text-sm text-slate-400",children:"Badges Earned"})]})]})]}),u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"card",children:[u.jsxs("h2",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[u.jsx(xv,{className:"w-5 h-5"}),"Subscription"]}),e!=null&&e.isPremium?u.jsxs("div",{className:"bg-gradient-to-r from-accent-600/20 to-primary-600/20 rounded-xl p-6 border border-accent-500/30",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(Jn,{className:"w-6 h-6 text-accent-400"}),u.jsx("span",{className:"text-xl font-bold",children:"Premium Member"})]}),u.jsx("p",{className:"text-slate-300",children:"You have access to all courses, certificates, and premium features!"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-slate-700/30 rounded-xl p-6 mb-4",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx("span",{className:"text-xl",children:"📚"}),u.jsx("span",{className:"text-lg font-semibold",children:"Free Plan"})]}),u.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"You're on the free plan with access to 7 core courses."}),u.jsxs(Link,{to:"/checkout",className:"btn-accent w-full text-center block",children:[u.jsx(Jn,{className:"w-4 h-4 inline mr-2"}),"Upgrade to Premium"]})]}),l&&u.jsxs(q.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},className:"space-y-4",children:[u.jsx("h3",{className:"font-semibold",children:"Choose a Plan"}),u.jsx("div",{className:"card cursor-pointer hover:border-primary-500/50 transition-all",onClick:h,children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold",children:"Monthly"}),u.jsx("div",{className:"text-sm text-slate-400",children:"Billed monthly"})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-xl font-bold",children:["$",ki.monthly.price]}),u.jsx("div",{className:"text-sm text-slate-400",children:"/month"})]})]})}),u.jsxs("div",{className:"card cursor-pointer border-accent-500/50 bg-accent-500/5 hover:bg-accent-500/10 transition-all",onClick:h,children:[u.jsx("div",{className:"absolute -top-3 left-4 badge-premium",children:"Best Value"}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold",children:"Annual"}),u.jsx("div",{className:"text-sm text-slate-400",children:"Billed yearly"})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-xl font-bold",children:["$",ki.annual.price]}),u.jsxs("div",{className:"text-sm text-gamify-xp",children:["Save ",ki.annual.savings]})]})]})]}),u.jsx("div",{className:"card cursor-pointer hover:border-primary-500/50 transition-all",onClick:h,children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold",children:"Family Plan"}),u.jsx("div",{className:"text-sm text-slate-400",children:ki.family.note})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-xl font-bold",children:["$",ki.family.price]}),u.jsx("div",{className:"text-sm text-slate-400",children:"/year"})]})]})}),u.jsx("div",{className:"text-center text-sm text-slate-400",children:"Cancel anytime • 30-day money-back guarantee"})]})]})]}),!(e!=null&&e.isPremium)&&u.jsxs(q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"card",children:[u.jsxs("h2",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[u.jsx(Jn,{className:"w-5 h-5 text-accent-400"}),"Premium Benefits"]}),u.jsx("ul",{className:"space-y-3",children:["Access to all 10 courses (100+ lessons)","Advanced & specialized courses","Completion certificates","Parent dashboard & progress reports","1-on-1 tutoring sessions","Ad-free experience","Priority support","Exclusive challenges & badges"].map((g,v)=>u.jsxs("li",{className:"flex items-center gap-3",children:[u.jsx(Yc,{className:"w-5 h-5 text-gamify-xp flex-shrink-0"}),u.jsx("span",{children:g})]},v))})]})]})}const Qm={monthly:{id:"monthly",name:"Monthly",price:19.99,period:"month",priceId:"price_monthly_demo"},annual:{id:"annual",name:"Annual",price:149.99,period:"year",savings:"37%",priceId:"price_annual_demo",popular:!0},family:{id:"family",name:"Family",price:249.99,period:"year",note:"Up to 4 students",priceId:"price_family_demo"}},OC=["Access to all 10 courses (100+ lessons)","Advanced & specialized courses","Completion certificates","Parent dashboard & progress reports","1-on-1 tutoring sessions","Ad-free experience","Priority support","Exclusive challenges & badges"];function UC(){const e=pd(),{upgradeToPermium:t}=ha(),[n,a]=w.useState("annual"),[i,s]=w.useState("card"),[o,l]=w.useState(!1),[r,c]=w.useState(""),[d,f]=w.useState(""),[h,g]=w.useState(""),[v,S]=w.useState(!1),[x,p]=w.useState(null),m=Qm[n],y=A=>{const z=A.replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),ae=z&&z[0]||"",Ae=[];for(let mt=0,en=ae.length;mt<en;mt+=4)Ae.push(ae.substring(mt,mt+4));return Ae.length?Ae.join(" "):A},b=A=>{const N=A.replace(/\s+/g,"").replace(/[^0-9]/gi,"");return N.length>=2?N.substring(0,2)+"/"+N.substring(2,4):N},T=async()=>{l(!0),await new Promise(A=>setTimeout(A,2e3)),l(!1),S(!0),t(),setTimeout(()=>{e("/profile")},3e3)},M=async()=>{l(!0),await new Promise(N=>setTimeout(N,1e3));const A=`lnbc${Math.floor(m.price*1e5)}n1pjexampledemoinvoicenotreal${Date.now()}`;p(A),l(!1)},E=async()=>{l(!0),await new Promise(A=>setTimeout(A,2e3)),l(!1),S(!0),t(),setTimeout(()=>{e("/profile")},3e3)};return v?u.jsxs("div",{className:"max-w-lg mx-auto text-center py-12",children:[u.jsx(q.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",duration:.5},className:"w-24 h-24 bg-gamify-xp rounded-full flex items-center justify-center mx-auto mb-6",children:u.jsx(Yc,{className:"w-12 h-12 text-white"})}),u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Welcome to Premium! 🎉"}),u.jsx("p",{className:"text-slate-300 mb-6",children:"Your payment was successful. You now have access to all premium courses and features."}),u.jsx("p",{className:"text-sm text-slate-400",children:"Redirecting to your profile..."})]}):u.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[u.jsxs("button",{onClick:()=>e("/profile"),className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors",children:[u.jsx(qc,{className:"w-4 h-4"}),"Back to Profile"]}),u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Upgrade to Premium"}),u.jsx("p",{className:"text-slate-400",children:"Unlock all courses and features"})]}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"space-y-6",children:[u.jsx("h2",{className:"text-xl font-semibold",children:"Choose Your Plan"}),u.jsx("div",{className:"space-y-3",children:Object.entries(Qm).map(([A,N])=>u.jsxs("button",{onClick:()=>a(A),className:`w-full p-4 rounded-xl border transition-all text-left relative ${n===A?"border-accent-500 bg-accent-500/10":"border-slate-600 hover:border-slate-500"}`,children:[N.popular&&u.jsx("span",{className:"absolute -top-2 right-4 badge-premium text-xs",children:"Most Popular"}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold",children:N.name}),u.jsx("div",{className:"text-sm text-slate-400",children:N.note||`Billed ${N.period}ly`})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-2xl font-bold",children:["$",N.price]}),u.jsxs("div",{className:"text-sm text-slate-400",children:["/",N.period]}),N.savings&&u.jsxs("div",{className:"text-xs text-gamify-xp",children:["Save ",N.savings]})]})]})]},A))}),u.jsxs("div",{className:"card",children:[u.jsxs("h3",{className:"font-semibold mb-4 flex items-center gap-2",children:[u.jsx(Jn,{className:"w-5 h-5 text-accent-400"}),"Premium Includes"]}),u.jsx("ul",{className:"space-y-2",children:OC.map((A,N)=>u.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[u.jsx(Yc,{className:"w-4 h-4 text-gamify-xp flex-shrink-0"}),A]},N))})]})]}),u.jsxs("div",{className:"space-y-6",children:[u.jsx("h2",{className:"text-xl font-semibold",children:"Payment Method"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsxs("button",{onClick:()=>{s("card"),p(null)},className:`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${i==="card"?"bg-primary-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:[u.jsx(xv,{className:"w-5 h-5"}),"Card"]}),u.jsxs("button",{onClick:()=>s("bitcoin"),className:`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${i==="bitcoin"?"bg-orange-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:[u.jsx(ea,{className:"w-5 h-5"}),"Bitcoin ⚡"]})]}),i==="card"&&u.jsxs(q.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"card space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Card Number"}),u.jsx("input",{type:"text",value:r,onChange:A=>c(y(A.target.value)),placeholder:"4242 4242 4242 4242",maxLength:19,className:"w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Expiry"}),u.jsx("input",{type:"text",value:d,onChange:A=>f(b(A.target.value)),placeholder:"MM/YY",maxLength:5,className:"w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"CVC"}),u.jsx("input",{type:"text",value:h,onChange:A=>g(A.target.value.replace(/\D/g,"").slice(0,4)),placeholder:"123",maxLength:4,className:"w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500"})]})]}),u.jsx("button",{onClick:T,disabled:o||r.length<19||d.length<5||h.length<3,className:`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${o||r.length<19||d.length<5||h.length<3?"bg-slate-700 text-slate-400 cursor-not-allowed":"bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white"}`,children:o?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Processing..."]}):u.jsxs(u.Fragment,{children:[u.jsx(ds,{className:"w-5 h-5"}),"Pay $",m.price]})}),u.jsxs("p",{className:"text-xs text-center text-slate-500 flex items-center justify-center gap-1",children:[u.jsx(ds,{className:"w-3 h-3"}),"Secured by Stripe. Your payment info is encrypted."]})]}),i==="bitcoin"&&u.jsxs(q.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"card space-y-4",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-4xl mb-2",children:"⚡"}),u.jsx("h3",{className:"font-semibold",children:"Bitcoin Lightning"}),u.jsx("p",{className:"text-sm text-slate-400",children:"Instant, low-fee payments"})]}),x?u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"bg-white p-4 rounded-xl mx-auto w-48 h-48 flex items-center justify-center",children:u.jsxs("div",{className:"text-center text-slate-800",children:[u.jsx(ea,{className:"w-12 h-12 mx-auto mb-2 text-orange-500"}),u.jsx("p",{className:"text-xs font-mono",children:"QR Code"}),u.jsx("p",{className:"text-xs text-slate-500",children:"(Demo)"})]})}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3",children:[u.jsx("p",{className:"text-xs text-slate-400 mb-1",children:"Lightning Invoice:"}),u.jsxs("p",{className:"text-xs font-mono break-all text-slate-300",children:[x.slice(0,50),"..."]})]}),u.jsxs("div",{className:"text-center text-sm text-slate-400",children:[u.jsx("p",{children:"Scan with any Lightning wallet"}),u.jsxs("p",{className:"text-xs mt-1",children:["≈ ",Math.round(m.price/6e4*1e8)," sats"]})]}),u.jsx("button",{onClick:E,disabled:o,className:`w-full py-3 rounded-xl font-semibold transition-all ${o?"bg-slate-700 text-slate-400":"bg-green-500 hover:bg-green-600 text-white"}`,children:o?"Confirming Payment...":"✓ Simulate Payment (Demo)"})]}):u.jsx("button",{onClick:M,disabled:o,className:`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${o?"bg-slate-700 text-slate-400 cursor-not-allowed":"bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"}`,children:o?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Generating Invoice..."]}):u.jsxs(u.Fragment,{children:[u.jsx(ea,{className:"w-5 h-5"}),"Generate Lightning Invoice"]})}),u.jsx("p",{className:"text-xs text-center text-slate-500",children:"Lightning payments are instant and have minimal fees."})]}),u.jsxs("div",{className:"card bg-slate-800/50",children:[u.jsx("h3",{className:"font-semibold mb-3",children:"Order Summary"}),u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsxs("span",{className:"text-slate-400",children:["Premium ",m.name," Plan"]}),u.jsxs("span",{children:["$",m.price]})]}),m.savings&&u.jsxs("div",{className:"flex justify-between text-gamify-xp",children:[u.jsx("span",{children:"Savings"}),u.jsxs("span",{children:["-",m.savings]})]}),u.jsxs("div",{className:"border-t border-slate-700 pt-2 flex justify-between font-semibold text-lg",children:[u.jsx("span",{children:"Total"}),u.jsxs("span",{children:["$",m.price]})]})]})]}),u.jsx("p",{className:"text-xs text-center text-slate-500",children:"Cancel anytime • 30-day money-back guarantee"})]})]})]})}function VC(){return u.jsx(kS,{children:u.jsx(DT,{children:u.jsxs(tS,{children:[u.jsx(Gn,{path:"/",element:u.jsx(AC,{})}),u.jsx(Gn,{path:"/courses",element:u.jsx(kC,{})}),u.jsx(Gn,{path:"/courses/:moduleId",element:u.jsx(zC,{})}),u.jsx(Gn,{path:"/achievements",element:u.jsx(BC,{})}),u.jsx(Gn,{path:"/profile",element:u.jsx(LC,{})}),u.jsx(Gn,{path:"/checkout",element:u.jsx(UC,{})})]})})})}a1.createRoot(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(VC,{})}));

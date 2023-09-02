"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(Ae,X,m)=>{m.r(X),m.d(X,{ion_modal:()=>pe});var B=m(5861),l=m(7205),N=m(5729),O=m(6465),z=m(1878),g=m(3756),ee=m(1316),U=m(7208),R=m(3280),me=m(2854),fe=m(9753),c=m(9442),te=m(8685),ne=m(3139);m(3509);const Y=typeof window<"u"?window:void 0;var $=(()=>{return(e=$||($={})).Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",$;var e})();const F={getEngine(){var e,t,n;return(null===(t=null===(e=Y)||void 0===e?void 0:e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("StatusBar"))&&(null===(n=Y)||void 0===n?void 0:n.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var e,t;return!(null===(t=null===(e=Y)||void 0===e?void 0:e.Capacitor)||void 0===t||!t.PluginHeaders)},setStyle(e){const t=this.getEngine();!t||t.setStyle(e)}},V=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},oe=()=>{!Y||Y.innerWidth>=768||!F.supportsDefaultStatusBarStyle()||F.setStyle({style:$.Dark})},re=()=>{!Y||Y.innerWidth>=768||!F.supportsDefaultStatusBarStyle()||F.setStyle({style:$.Default})},ie=function(){var e=(0,B.Z)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss())||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,o){return e.apply(this,arguments)}}(),Q=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,se=(e,t)=>(0,g.l)(400,e/Math.abs(1.1*t),500),ae=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=void 0===n||n<t,r=o?`calc(var(--backdrop-opacity) * ${t})`:"0",i=(0,c.c)("backdropAnimation").fromTo("opacity",0,r);return o&&i.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,c.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:i}},de=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${V(t,n)})`,r=[{offset:0,opacity:o},{offset:1,opacity:0}],i=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],a=(0,c.c)("backdropAnimation").keyframes(0!==n?i:r);return{wrapperAnimation:(0,c.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},le=(e,t)=>{const{presentingEl:n,currentBreakpoint:o}=t,r=(0,g.g)(e),{wrapperAnimation:i,backdropAnimation:a}=void 0!==o?ae(t):{backdropAnimation:(0,c.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,c.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};a.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,c.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(n){const p=window.innerWidth<768,_="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,E=(0,g.g)(n),w=(0,c.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),k=document.body;if(p){const b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",y=`translateY(${_?"-10px":b}) scale(0.93)`;w.afterStyles({transform:y}).beforeAddWrite(()=>k.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:y,borderRadius:"10px 10px 0 0"}]),s.addAnimation(w)}else if(s.addAnimation(a),_){const f=`translateY(-10px) scale(${_?.93:1})`;w.afterStyles({transform:f}).addElement(E.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:f}]);const d=(0,c.c)().afterStyles({transform:f}).addElement(E.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:f}]);s.addAnimation([w,d])}else i.fromTo("opacity","0","1")}else s.addAnimation(a);return s},ce=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:r}=t,i=(0,g.g)(e),{wrapperAnimation:a,backdropAnimation:s}=void 0!==r?de(t):{backdropAnimation:(0,c.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,c.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(i.querySelector("ion-backdrop")),a.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const p=(0,c.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(a);if(o){const _=window.innerWidth<768,E="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,w=(0,g.g)(o),k=(0,c.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(f=>{1===f&&(o.style.setProperty("overflow",""),Array.from(b.querySelectorAll("ion-modal")).filter(y=>void 0!==y.presentingElement).length<=1&&b.style.setProperty("background-color",""))}),b=document.body;if(_){const f=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",M=`translateY(${E?"-10px":f}) scale(0.93)`;k.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:M,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),p.addAnimation(k)}else if(p.addAnimation(s),E){const d=`translateY(-10px) scale(${E?.93:1})`;k.addElement(w.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:d},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const y=(0,c.c)().addElement(w.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:d},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);p.addAnimation([k,y])}else a.fromTo("opacity","1","0")}else p.addAnimation(s);return p},we=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,g.g)(e),{wrapperAnimation:r,backdropAnimation:i}=void 0!==n?ae(t):{backdropAnimation:(0,c.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,c.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return i.addElement(o.querySelector("ion-backdrop")),r.addElement(o.querySelector(".modal-wrapper")),(0,c.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,r])},ve=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,g.g)(e),{wrapperAnimation:r,backdropAnimation:i}=void 0!==n?de(t):{backdropAnimation:(0,c.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,c.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return i.addElement(o.querySelector("ion-backdrop")),r.addElement(o.querySelector(".modal-wrapper")),(0,c.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,r])},pe=class{constructor(e){(0,l.r)(this,e),this.didPresent=(0,l.e)(this,"ionModalDidPresent",7),this.willPresent=(0,l.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,l.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,l.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,l.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,l.e)(this,"didPresent",7),this.willPresentShorthand=(0,l.e)(this,"willPresent",7),this.willDismissShorthand=(0,l.e)(this,"willDismiss",7),this.didDismissShorthand=(0,l.e)(this,"didDismiss",7),this.modalIndex=_e++,this.coreDelegate=(0,z.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:n,destroyTriggerInteraction:o}=this;o&&o();const r=void 0!==t?document.getElementById(t):null;r&&(this.destroyTriggerInteraction=((a,s)=>{const p=()=>{s.present()};return a.addEventListener("click",p),()=>{a.removeEventListener("click",p)}})(r,n))},this.onBackdropTap=()=>{this.dismiss(void 0,R.B)},this.onLifecycle=t=>{const n=this.usersElement,o=De[t.type];if(n&&o){const r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(r)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){var t=this;return(0,B.Z)(function*(){t.gesture?t.gesture.enable(e):e&&(yield t.initSwipeToClose())})()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){(0,R.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:n}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,U.p)("Your breakpoints array must include the initialBreakpoint value."),n&&(0,U.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,g.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(){var e=this;return(0,B.Z)(function*(){const{canDismiss:t}=e;return void 0===t||("function"==typeof t?t():t)})()}present(){var e=this;return(0,B.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:n,delegate:o}=e.getDelegate(!0);e.usersElement=yield(0,z.a)(o,e.el,e.component,["ion-page"],t,n),yield(0,fe.e)(e.usersElement),(0,l.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,R.d)(e,"modalEnter",le,we,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint});const r=e.swipeToClose||void 0!==e.canDismiss&&void 0!==e.presentingElement;r&&"ios"===(0,N.b)(e)&&oe(),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():r&&(yield e.initSwipeToClose()),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,g.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(ee.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;if("ios"!==(0,N.b)(this))return;const{el:t}=this,n=this.leaveAnimation||N.c.get("modalLeave",ce),o=this.animation=n(t,{presentingEl:this.presentingElement});(0,O.a)(t)?(this.gesture=((e,t,n)=>{const r=e.offsetHeight;let i=!1,a=!1,s=null,p=null,E=!0,w=0;const M=(0,ne.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:x=>{const h=x.event.target;return null===h||!h.closest||(s=(0,O.f)(h),s?(p=(0,O.i)(s)?(0,g.g)(s).querySelector(".inner-scroll"):s,!s.querySelector("ion-refresher")&&0===p.scrollTop):null===h.closest("ion-footer"))},onStart:x=>{const{deltaY:h}=x;E=!s||!(0,O.i)(s)||s.scrollY,a=void 0!==e.canDismiss&&!0!==e.canDismiss,h>0&&s&&(0,O.d)(s),t.progressStart(!0,i?1:0)},onMove:x=>{const{deltaY:h}=x;h>0&&s&&(0,O.d)(s);const u=x.deltaY/r,A=u>=0&&a,T=A?.2:.9999,j=A?Q(u/T):u,S=(0,g.l)(1e-4,j,T);t.progressStep(S),S>=.5&&w<.5?re():S<.5&&w>=.5&&oe(),w=S},onEnd:x=>{const h=x.velocityY,u=x.deltaY/r,A=u>=0&&a,T=A?.2:.9999,j=A?Q(u/T):u,S=(0,g.l)(1e-4,j,T),P=!A&&(x.deltaY+1e3*h)/r>=.5;let H=P?-.001:.001;P?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),H+=(0,te.g)([0,0],[.32,.72],[0,1],[1,1],S)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),H+=(0,te.g)([0,0],[1,0],[.68,.28],[1,1],S)[0]);const J=se(P?u*r:(1-S)*r,h);i=P,M.enable(!1),s&&(0,O.r)(s,E),t.onFinish(()=>{P||M.enable(!0)}).progressEnd(P?1:0,H,J),A&&S>T/4?ie(e,t):P&&n()}});return M})(t,o,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,B.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)):(0,O.p)(t)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const o=this.enterAnimation||N.c.get("modalEnter",le),r=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});r.progressStart(!0,1);const{gesture:i,moveSheetToBreakpoint:a}=((e,t,n,o,r,i,a=[],s,p,_)=>{const k={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==r?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-r,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},b=e.querySelector("ion-content"),f=n.clientHeight;let d=o,y=0,M=!1;const h=i.childAnimations.find(v=>"wrapperAnimation"===v.id),u=i.childAnimations.find(v=>"backdropAnimation"===v.id),A=a[a.length-1],T=a[0],j=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},S=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};h&&u&&(h.keyframes([...k.WRAPPER_KEYFRAMES]),u.keyframes([...k.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-d),d>r?j():S()),b&&d!==A&&(b.scrollY=!1);const he=v=>{const{breakpoint:L,canDismiss:C,breakpointOffset:I}=v,W=C&&0===L,D=W?d:L,K=0!==D;d=0,h&&u&&(h.keyframes([{offset:0,transform:`translateY(${100*I}%)`},{offset:1,transform:`translateY(${100*(1-D)}%)`}]),u.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${V(1-I,r)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${V(D,r)})`}]),i.progressStep(0)),Z.enable(!1),i.onFinish(()=>{K&&(h&&u?(0,g.r)(()=>{h.keyframes([...k.WRAPPER_KEYFRAMES]),u.keyframes([...k.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-D),d=D,_(d),b&&d===a[a.length-1]&&(b.scrollY=!0),d>r?j():S(),Z.enable(!0)}):Z.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),W?ie(e,i):K||p()},Z=(0,ne.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:v=>{const L=v.event.target.closest("ion-content");return d=s(),!(1===d&&L)},onStart:()=>{M=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===T,b&&(b.scrollY=!1),(0,g.r)(()=>{e.focus()}),i.progressStart(!0,1-d)},onMove:v=>{const C=a.length>1?1-a[1]:void 0,I=1-d+v.deltaY/f,W=void 0!==C&&I>=C&&M,D=W?.95:.9999,K=W&&void 0!==C?C+Q((I-C)/(D-C)):I;y=(0,g.l)(1e-4,K,D),i.progressStep(y)},onEnd:v=>{const I=d-(v.deltaY+100*v.velocityY)/f,W=a.reduce((D,K)=>Math.abs(K-I)<Math.abs(D-I)?K:D);he({breakpoint:W,breakpointOffset:y,canDismiss:M})}});return{gesture:Z,moveSheetToBreakpoint:he}})(this.el,this.backdropEl,e,t,n,r,this.sortedBreakpoints,()=>{var s;return null!==(s=this.currentBreakpoint)&&void 0!==s?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=i,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,B.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,B.Z)(function*(){if(n.gestureAnimationDismissing&&"gesture"!==t||"handler"!==t&&!(yield n.checkCanDismiss()))return!1;(n.swipeToClose||void 0!==n.canDismiss&&void 0!==n.presentingElement)&&"ios"===(0,N.b)(n)&&re(),typeof window<"u"&&n.keyboardOpenCallback&&window.removeEventListener(ee.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),void 0!==n.currentTransition&&(yield n.currentTransition);const r=R.h.get(n)||[];n.currentTransition=(0,R.f)(n,e,t,"modalLeave",ce,ve,{presentingEl:n.presentingElement,currentBreakpoint:n.currentBreakpoint||n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});const i=yield n.currentTransition;if(i){const{delegate:a}=n.getDelegate();yield(0,z.d)(a,n.usersElement),(0,l.c)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),r.forEach(s=>s.destroy())}return n.currentBreakpoint=void 0,n.currentTransition=void 0,n.animation=void 0,i})()}onDidDismiss(){return(0,R.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,R.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,B.Z)(function*(){if(!t.isSheetModal)return void(0,U.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,U.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:r,breakpoints:i}=t;n!==e&&o&&o({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==r&&!0!==r&&0===i[0]})})()}getCurrentBreakpoint(){var e=this;return(0,B.Z)(function*(){return e.currentBreakpoint})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o}=this,r=!1!==e&&t,i=(0,N.b)(this),{modalId:a}=this,s=void 0!==n&&"ios"===i;return(0,l.h)(l.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[i]:!0,"modal-default":!s&&!t,"modal-card":s,"modal-sheet":t,"overlay-hidden":!0},(0,me.g)(this.cssClass)),id:a,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,l.h)("ion-backdrop",{ref:p=>this.backdropEl=p,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===i&&(0,l.h)("div",{class:"modal-shadow"}),(0,l.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:p=>this.wrapperEl=p},r&&(0,l.h)("div",{class:"modal-handle",part:"handle"}),(0,l.h)("slot",null)))}get el(){return(0,l.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},De={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let _e=0;pe.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LetterLoading=t():e.LetterLoading=t()}(this,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var i={strings:["hey lovely,","use your own string...","abi you no go use am"],loadspeed:9,char:"-",hideChaar:!0,delay:2500,loop:!0,randomizeEl:!0,cursor:"line"};let r=new class{load(e,t,n){e.el=document.querySelector(t)||t,e.options={...i,...n},e.initialElContent=e.el.textContent,e.loadSpeed=e.options.loadspeed,e.defaultSpeed=e.options.loadspeed,e.loop=e.options.loop,e.strings=e.options.strings.map(e=>e.trim()),e.currentStrPos=0,e.randomizeEl=e.options.randomizeEl,e._shuffle=!1,e.currentString,e.randomEl,e.char=e.options.char,e.hideChar=e.options.hideChaar,e.ArrayIndex=0,e.delayAnime=500,e.delay=e.options.delay,e.simulate=e.options.simulate,this.cursorExist=!1,e.cursor=e.options.cursor,e.cColor=e.options.color,e.cursorType=e.options.cursorType,e.blinking=e.options.blinking,e.sequence=[];for(let t in e.strings)e.sequence[t]=t;this.setToTyped(e),this.appendCsstoHead(e),this.hideCharByForce(e),this.setBlinking(e)}check(e){console.log(e.cursorType)}setToTyped(e){"typed"===e.simulate&&(e.char="",e.randomizeEl=!1)}setBlinking(e){if(e.options.blinking)return e.options.blinking="no";e.blinking="yes"}hideCharByForce(e){e.hideChar&&(e.char=`<span class="data-hide">${e.char}</span>`)}appendCsstoHead(e){const t=e.cColor;if(!e.hideChar)return;if(document.querySelector("[data-type-css]"))return;let n=document.createElement("style");n.type="text/css",n.setAttribute("data-type-css",!0);let i="";e.hideChar&&(i+="\n              .data-hide{\n                opacity: 0;}"),e.cursor&&(i+=`\n        .line-cursor {\n          font-weight: 100;\n          font-size: 30px;\n          -webkit-animation: 1s blink step-end infinite;\n          -moz-animation: 1s blink step-end infinite;\n          -ms-animation: 1s blink step-end infinite;\n          -o-animation: 1s blink step-end infinite;\n          animation: 1s blink step-end infinite;\n        }\n        .block-cursor {\n          font-weight: 900;\n          width: 800px;\n          -webkit-animation: 1s blink step-end infinite;\n          -moz-animation: 1s blink step-end infinite;\n          -ms-animation: 1s blink step-end infinite;\n          -o-animation: 1s blink step-end infinite;\n          animation: 1s blink step-end infinite;\n        }\n        .underscore-cursor {\n          font-weight: 900;\n          width: 800px;\n          -webkit-animation: 1s blink step-end infinite;\n          -moz-animation: 1s blink step-end infinite;\n          -ms-animation: 1s blink step-end infinite;\n          -o-animation: 1s blink step-end infinite;\n          animation: 1s blink step-end infinite;\n        }\n        @keyframes blink {\n          from, to {\n            opacity: 0.9;\n          }\n          50%{\n            opacity: 0.0;\n          }\n        }\n\n        .block {\n          width: 0.45rem;\n          padding: 0.5em 0.07em;\n          display: inline-block;\n          background: ${t||"black"};\n          margin-left: 0.1em;\n          margin-top: 0.3em;\n          top: 5px;\n        }\n      `),0!==n.length&&(n.innerHTML=i,document.body.appendChild(n))}};class s{constructor(e,t){r.load(this,e,t),this.beginAnimation()}destroy(){this.reset(!1)}reset(e=!0){clearInterval(this.timeout),this.insertText(""),this.currentStrPos=0,this.ArrayIndex=0}beginAnimation(){this.timeout=setTimeout(()=>{this.randomMize(),this.makeCursor(),this.beginAnime(this.currentStrPos,this.strings[this.ArrayIndex])},this.delayAnime)}beginAnime(e,t,n=[]){this.currentString=t,this.random(),this.startFetching(e,t,n)}typedSpeed(){return this.loadSpeed}makeCursor(){if(!this.cursorExist)return this.cursor?(this.appendCursor(),void(this.cursorExist=!0)):void 0}loadingSpeed(e,t){return e>=.7*t.length?this.loadSpeed=this.loadSpeed-.5*this.loadSpeed:(e>=.4*t.length||e>=.2*t.length)&&(this.loadSpeed=this.loadSpeed-.2*this.loadSpeed),this.loadSpeed}simulater(e,t,n){return"typed"===e?this.typedSpeed():this.loadingSpeed(t,n)}startFetching(e,t,n){this.simulater(this.simulate,e,t);const i=this.humanize(this.loadSpeed);if(0===Object.keys(n).length&&(n=this.getSudoStringArray(t.length,this.char)),e>t.length-1)if(this.ArrayIndex++,this.currentStrPos=0,this.loadSpeed=this.defaultSpeed,this.ArrayIndex===this.strings.length){if(!this.loop)return;this.ArrayIndex=0,this.timeout=setTimeout(()=>{this.beginAnimation()},this.delay)}else this.timeout=setTimeout(()=>{this.beginAnime(this.currentStrPos,this.strings[this.ArrayIndex])},this.delay);else e++,this.timeout=setTimeout(()=>{this.doAnime(n,e)},i)}doAnime(e,t){e[this.randomEl[t-1]]=this.currentString[this.randomEl[t-1]];let n=e.join("");this.insertText(n),this.startFetching(t,this.currentString,e)}getSudoStringArray(e,t){let n,i=[];for(n=0;n<e;n++)i.push(t);return i}getStringKeysIntoArray(e){let t=[];for(let n=0;n<e;n++)t.push(n);return t}random(){const e=this.getStringKeysIntoArray(this.currentString.length);this.randomizeEl?this.randomEl=e.sort(()=>Math.random()-.5):this.randomEl=e}humanize(e){return Math.round(Math.random()*(100*e)/2)+100*e}appendCursor(){const e=document.createElement("span"),t=this.getCursorType(this.cursorType);e.className=t;const n=this.getCursorCha(this.cursorType);n&&(e.append(n),this.el.parentNode&&this.el.parentNode.insertBefore(e,this.el.nextSibling))}getCursorCha(e){const t=document.createElement("span");return t.className="block","line"===e?"|":"block"===e?t:"underscore"===e?"_":void 0}getCursorType(e){return"line"===e?"line-cursor":"block"===e?"block-cursor":"underscore"===e?"underscore-cursor":void 0}insertText(e){this.el.innerHTML=e}randomMize(){this._shuffle&&(this.sequence=this.sequence.sort(()=>Math.random()-.5))}}}]).default}));
//# sourceMappingURL=letterloading.js.map
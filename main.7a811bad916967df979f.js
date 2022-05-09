(()=>{"use strict";var e={122:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,":root {\r\n  --black-color: #000000;\r\n  --white-color: #ffffff;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  box-sizing: border-box;\r\n}\r\n\r\n.page {\r\n  min-width: 1040px;\r\n  height: 100vh;\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 17px;\r\n  text-align: center;\r\n\r\n  background: linear-gradient(to top left, #c1c0fd, #53d4ca);\r\n}\r\n\r\n.head {\r\n  display: block;\r\n  padding: 30px 0;\r\n}\r\n\r\n.hint {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.keyboard__output {\r\n  width: 1000px;\r\n  padding: 10px 20px;\r\n\r\n  font-size: 16px;\r\n\r\n  border: 3px solid var(--black-color);\r\n  border-radius: 10px;\r\n\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n.keyboard {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n\r\n  border: 3px solid var(--black-color);\r\n  border-radius: 10px;\r\n}\r\n\r\n.key {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 60px;\r\n  height: 60px;\r\n\r\n  border: 3px solid var(--black-color);\r\n  border-radius: 5px;\r\n\r\n  transition: all 0.1s;\r\n}\r\n\r\n.key:hover {\r\n  background-color: rgba(193, 192, 253, 0.6);\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.key.active,\r\n.key:active {\r\n  background-color: rgb(193, 192, 253, 0.9);\r\n  box-shadow: inset 0 0 3px 1px var(--black-color);\r\n}\r\n\r\n.fn-key {\r\n  flex: 1;\r\n} \r\n\r\n.tab {\r\n  flex: 70px;\r\n}\r\n\r\n.caps-lock,\r\n.enter {\r\n  flex: 120px;\r\n}\r\n\r\n.shift-left {\r\n  flex: 65px;\r\n}\r\n\r\n.shift-right {\r\n  flex: 160px;\r\n}\r\n\r\n.space {\r\n  flex: 300px;\r\n}\r\n\r\n.arrow-left,\r\n.arrow-right,\r\n.arrow-up,\r\n.arrow-down {\r\n  flex: 40px;\r\n}\r\n\r\n.control-left,\r\n.control-right,\r\n.alt-left,\r\n.alt-right {\r\n  flex: 95px;\r\n}",""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var h=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(f);else{var p=a(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var c=r(e,a),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),i=t(569),o=t.n(i),s=t(565),c=t.n(s),l=t(216),u=t.n(l),d=t(589),h=t.n(d),f=t(122),p={};function m(e,n,t,r){let a=null;try{a=document.createElement(e)}catch(e){throw new Error("Unable to create HTMLElement! Invalid tag name.")}if(n&&(a.innerHTML=n),t){const e=Array.isArray(t)?t:t.split(" ");a.classList.add(...e)}return r&&r.forEach((([e,n])=>a.setAttribute(e,n))),a}function g(e,n){try{if(!e||"object"!=typeof e)throw new Error("You're trying to insert invalid element datatype.");if(!n||"object"!=typeof n)throw new Error("You're trying to insert invalid container datatype.");Array.isArray(e)?e.forEach((e=>n.append(e))):n.append(e)}catch(e){throw new Error(e.message)}}p.styleTagTransform=h(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=u(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;class y{constructor(e){this.language=e,this.key=null}createKey({main:e,fn:n,code:t}){let r=n?"key fn-key":"key";if(!/Key|Digit/.test(t)){const e=t.split("");e[0]=e[0].toLowerCase();const n=t.search(/[a-z][A-Z].*$/);-1!==n&&(e[n+1]=`-${e[n+1].toLowerCase()}`),r+=` ${e.join("")}`}const a=e[this.language]||e;return this.key=m("div",a,r),this.key}}const v=[{main:{ru:"ё",en:"`"},shift:{ru:"Ё",en:"~"},code:"Backquote"},{main:"1",shift:"!",code:"Digit1"},{main:"2",shift:{ru:'"',en:"@"},code:"Digit2"},{main:"3",shift:{ru:"№",en:"#"},code:"Digit3"},{main:"4",shift:{ru:";",en:"$"},code:"Digit4"},{main:"5",shift:"%",code:"Digit5"},{main:"6",shift:{ru:":",en:"^"},code:"Digit6"},{main:"7",shift:{ru:"?",en:"&"},code:"Digit7"},{main:"8",shift:"*",code:"Digit8"},{main:"9",shift:"(",code:"Digit9"},{main:"0",shift:")",code:"Digit0"},{main:"-",shift:"_",code:"Minus"},{main:"=",shift:"+",code:"Equal"},{main:"Backspace",shift:null,code:"Backspace",fn:!0},{main:"Tab",shift:null,code:"Tab",fn:!0},{main:{ru:"й",en:"q"},shift:{ru:"Й",en:"Q"},code:"KeyQ"},{main:{ru:"ц",en:"w"},shift:{ru:"Ц",en:"W"},code:"KeyW"},{main:{ru:"у",en:"e"},shift:{ru:"У",en:"E"},code:"KeyE"},{main:{ru:"к",en:"r"},shift:{ru:"К",en:"R"},code:"KeyR"},{main:{ru:"е",en:"t"},shift:{ru:"Е",en:"T"},code:"KeyT"},{main:{ru:"н",en:"y"},shift:{ru:"Н",en:"Y"},code:"KeyY"},{main:{ru:"г",en:"u"},shift:{ru:"Г",en:"U"},code:"KeyU"},{main:{ru:"ш",en:"i"},shift:{ru:"Ш",en:"I"},code:"KeyI"},{main:{ru:"щ",en:"o"},shift:{ru:"Щ",en:"O"},code:"KeyO"},{main:{ru:"з",en:"p"},shift:{ru:"З",en:"P"},code:"KeyP"},{main:{ru:"х",en:"["},shift:{ru:"Х",en:"{"},code:"BracketLeft"},{main:{ru:"ъ",en:"]"},shift:{ru:"Ъ",en:"}"},code:"BracketRight"},{main:"\\",shift:{ru:"/",en:"|"},code:"Backslash"},{main:"delete",shift:null,code:"Delete",fn:!0},{main:"Caps Lock",shift:null,code:"CapsLock",fn:!0},{main:{ru:"ф",en:"a"},shift:{ru:"Ф",en:"A"},code:"KeyA"},{main:{ru:"ы",en:"s"},shift:{ru:"Ы",en:"S"},code:"KeyS"},{main:{ru:"в",en:"d"},shift:{ru:"В",en:"D"},code:"KeyD"},{main:{ru:"а",en:"f"},shift:{ru:"А",en:"F"},code:"KeyF"},{main:{ru:"п",en:"g"},shift:{ru:"П",en:"G"},code:"KeyG"},{main:{ru:"р",en:"h"},shift:{ru:"Р",en:"H"},code:"KeyH"},{main:{ru:"о",en:"j"},shift:{ru:"О",en:"J"},code:"KeyJ"},{main:{ru:"л",en:"k"},shift:{ru:"Л",en:"K"},code:"KeyK"},{main:{ru:"д",en:"l"},shift:{ru:"Д",en:"L"},code:"KeyL"},{main:{ru:"ж",en:";"},shift:{ru:"Ж",en:":"},code:"Semicolon"},{main:{ru:"э",en:"'"},shift:{ru:"Э",en:'"'},code:"Quote"},{main:"ENTER",shift:null,code:"Enter",fn:!0},{main:"Shift",shift:null,code:"ShiftLeft",fn:!0},{main:{ru:"я",en:"z"},shift:{ru:"Я",en:"Z"},code:"KeyZ"},{main:{ru:"ч",en:"x"},shift:{ru:"Ч",en:"X"},code:"KeyX"},{main:{ru:"с",en:"c"},shift:{ru:"С",en:"C"},code:"KeyC"},{main:{ru:"м",en:"v"},shift:{ru:"М",en:"V"},code:"KeyV"},{main:{ru:"и",en:"b"},shift:{ru:"И",en:"B"},code:"KeyB"},{main:{ru:"т",en:"n"},shift:{ru:"Т",en:"N"},code:"KeyN"},{main:{ru:"ь",en:"m"},shift:{ru:"Ь",en:"M"},code:"KeyM"},{main:{ru:"б",en:","},shift:{ru:"Б",en:"<"},code:"Comma"},{main:{ru:"ю",en:"."},shift:{ru:"Ю",en:">"},code:"Period"},{main:{ru:".",en:"/"},shift:{ru:",",en:"?"},code:"Slash"},{main:"▴",shift:null,code:"ArrowUp",fn:!0},{main:"Shift",shift:null,code:"ShiftRight",fn:!0},{main:"Ctrl",shift:null,code:"ControlLeft",fn:!0},{main:"Alt",shift:null,code:"AltLeft",fn:!0},{main:" ",shift:null,code:"Space",fn:!0},{main:"Alt",shift:null,code:"AltRight",fn:!0},{main:"◂",shift:null,code:"ArrowLeft",fn:!0},{main:"▾",shift:null,code:"ArrowDown",fn:!0},{main:"▸",shift:null,code:"ArrowRight",fn:!0},{main:"Ctrl",shift:null,code:"ControlRight",fn:!0}];class x{constructor(e){this.language=e,this.elements={}}renderKeyboard(){const e=new y(this.language);v.forEach((n=>{this.elements[n.code]=e.createKey(n)}));const n=m("div",null,"keyboard");return g(Object.values(this.elements),n),{keyboardContainer:n,elements:this.elements}}}const b=("keyboardLanguage","en",window.localStorage.getItem("keyboardLanguage")||"en");const k=new class{constructor(e){this.language=e,this.body=document.body,this.textarea=null,this.elements=null,this.pressedKey={},this.capsLock=!1}renderPage(){const e=m("head",null,"head");g(m("h1","RSS Virtual Keyboard","title"),e);const n=m("main",null,"main"),t=m("h3","The virtual keyboard was created in Windows operation system","subtitle"),r=m("p","Switch between English and Russian languages: Ctrl + Alt","hint");this.textarea=m("textarea",null,"keyboard__output",[["autocomplete","off"],["autocorrect","off"],["cols",140],["placeholder","Start typing…"],["rows",10],["spellcheck","false"]]);const a=new x(this.language),{keyboardContainer:i,elements:o}=a.renderKeyboard();this.elements=o,g([t,r,this.textarea,i],n),g([e,n],this.body),window.addEventListener("beforeunload",(()=>{var e;e=this.language,window.localStorage.setItem("keyboardLanguage",e)})),document.addEventListener("keydown",this.handleKeydownEvent),document.addEventListener("keyup",this.handleKeyUpEvent)}handleKeydownEvent=e=>{const{code:n}=e,t=this.elements[n];if(e.preventDefault(),t){this.pressedKey[n]=t;const e=t.textContent;if(this.textarea.focus(),"CapsLock"===n)return this.capsLock=!this.capsLock,t.classList.toggle("active"),void this.changeLetterCase(this.capsLock);/Alt/.test(n)&&(this.pressedKey.ControlLeft||this.pressedKey.ControlRight)||/Control/i.test(n)&&(this.pressedKey.AltLeft||this.pressedKey.AltRight)?(this.language="en"===this.language?"ru":"en",this.changeLanguage()):/Shift/.test(n)?this.addShiftText():this.outputResultToTextarea(n,e),t.classList.add("active")}};handleKeyUpEvent=e=>{const{code:n}=e,t=this.pressedKey[n];"CapsLock"!==n&&t&&t.classList.remove("active"),/Shift/.test(n)&&this.removeShiftText(),delete this.pressedKey[n]};changeLetterCase=e=>{const n=Object.entries(this.elements),t="en"===this.language?/Key/:/Key|Backquote|Bracket|Semicolon|Quote|Comma|Period/;let r=n.filter((([e])=>t.test(e)));r=r.map((e=>e[1])),r.forEach((n=>{const t=n;t.innerHTML=e?t.innerHTML.toUpperCase():t.innerHTML.toLowerCase()}))};changeLanguage=()=>{v.forEach((({main:e,code:n})=>{e[this.language]&&(this.elements[n].innerHTML=e[this.language])})),this.capsLock&&this.changeLetterCase(!0)};addShiftText=()=>{v.forEach((({shift:e,code:n})=>{e&&(this.elements[n].innerHTML=e[this.language]||e)})),this.capsLock&&this.changeLetterCase(!1)};removeShiftText=()=>{v.forEach((({main:e,shift:n,code:t})=>{n&&(this.elements[t].innerHTML=e[this.language]||e)})),this.capsLock&&this.changeLetterCase(!0)};outputResultToTextarea=(e,n)=>{const{value:t,selectionStart:r}=this.textarea,a=r,i=t.slice(0,a),o=t.slice(a),s=e.match(/(Key[A-Za-z])|(Digit[0-9])|[a-z]*quote|Minus|Equal|Bracket[a-z]*|[a-z]*slash|Semicolon|Comma|Period|Space|ArrowUp|ArrowDown/i);switch(e){case"Backspace":this.textarea.value=`${i.slice(0,-1)}${o}`;break;case"Tab":this.textarea.value=`${i}\t${o}`;break;case"Enter":this.textarea.value=`${i}\n${o}`;break;case"Delete":this.textarea.value=`${i}${o.slice(1)}`;break;case s?s[0]:null:this.textarea.value=`${i}${n}${o}`;break;default:this.textarea.value=`${i}${o}`}this.movePointer(e,a)};movePointer=(e,n)=>{let t=n;switch(e){case"Backspace":case"ArrowLeft":t-=t>0?1:0;break;case"Delete":t+=0;break;default:t+=1}this.textarea.setSelectionRange(t,t)}}(b);k.renderPage()})()})();
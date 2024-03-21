(()=>{"use strict";var e={249:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(601),o=t.n(a),r=t(314),i=t.n(r)()(o());i.push([e.id,'.contact-section ul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.contact-section li {\n  margin-bottom: 10px;\n}\n\n.contact-section label {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.contact-section input[type="text"],\n.contact-section input[type="email"],\n.contact-section textarea {\n  width: 40%; /* Adjusts the width to fill the container */\n  padding: 8px; /* Adds some padding inside the input fields and textarea */\n  box-sizing: border-box; /* Ensures padding does not affect the overall width */\n}\n\n.contact-section textarea {\n  height: 100px; /* Adjust height as needed */\n  resize: vertical; /* Allows the user to resize the textarea vertically */\n}\n\n.about-headline, .about-description, .contact-section {\n  text-align: left;\n}\n\n.form-input, .form-textarea {\n  width: 100%;\n  padding: 8px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  box-sizing: border-box; /* Ensures padding does not affect the overall width */\n}\n\n.form-textarea {\n  height: 100px; /* Adjust height as needed */\n  resize: vertical; /* Allows the user to resize the textarea vertically */\n}\n\n.submit-btn {\n  background-color: #4CAF50; /* Green background */\n  color: white;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.submit-btn:hover {\n  background-color: #45a049; /* Darker green on hover */\n}\n\n#submitMessage {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n\n',""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},659:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),a=t(825),o=t.n(a),r=t(659),i=t.n(r),s=t(56),c=t.n(s),d=t(540),l=t.n(d),u=t(113),p=t.n(u),m=t(249),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.classList.add("inner-content");const t=document.createElement("h1");t.textContent="The Pho Palace";const a=document.createElement("p");a.textContent="Indulge in the rich and vibrant flavors of Vietnam at The Pho Palace. Nestled in the heart of London, our restaurant provides a warm and inviting ambiance coupled with outstanding service. Our menu boasts a wide variety of authentic Vietnamese dishes, prepared using only the freshest ingredients and time-honored cooking methods. From the aromatic Pho to the zesty Banh Mi, every plate is a celebration of taste and aesthetics. Embark on a culinary adventure that promises to enchant your palate and keep you coming back for more. Experience the finest of Vietnamese cuisine at Pho Palace today.";const o=document.createElement("div");o.classList.add("restaurant-hours");const r=document.createElement("pre");r.textContent="\n    Hours\n    Sunday: 10am - 10pm\n    Monday: 9am - 6pm\n    Tuesday: 9am - 6pm\n    Wednesday: 9am - 6pm\n    Thursday: 9am - 10pm\n    Friday: 10am - 10pm\n    Saturday: 9am - 10pm\n  ";const i=document.createElement("pre");i.textContent="\n    Our location:\n    Pho Palace\n    5 High street\n    Camden, London\n    England\n  ",n.appendChild(t),n.appendChild(a),n.appendChild(o),o.appendChild(r),n.appendChild(i);const s=document.createElement("div");s.classList.add("outer-layer"),s.appendChild(n),e.appendChild(s)};console.log("testing"),document.addEventListener("DOMContentLoaded",(()=>{f()})),document.getElementById("homePageTab").addEventListener("click",f),document.getElementById("menuPageTab").addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="Menu";const t=document.createElement("div");t.classList.add("menu"),[{name:"Pho Bo",description:"Traditional Vietnamese beef noodle soup",price:"$10"},{name:"Banh Mi",description:"Vietnamese sandwich with various fillings",price:"$5"},{name:"Goi Cuon",description:"Fresh spring rolls with shrimp, herbs, bun noodles, and lettuce",price:"$7"},{name:"Bun Thit Nuong",description:"Grilled pork over vermicelli noodles, herbs, and lettuce",price:"$9"},{name:"Ca Phe Sua Da",description:"Vietnamese iced coffee with sweetened condensed milk",price:"$4"}].forEach((e=>{const n=document.createElement("div");n.classList.add("dish");const a=document.createElement("h3");a.textContent=e.name,n.appendChild(a);const o=document.createElement("p");o.textContent=e.description,n.appendChild(o);const r=document.createElement("span");r.textContent=e.price,n.appendChild(r),t.appendChild(n)})),e.appendChild(n),e.appendChild(t)})),document.getElementById("aboutPageTab").addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="About us",n.classList.add("about-headline");const t=document.createElement("p");t.textContent="Pho Palace was founded in 2020 with the goal of bringing authentic Vietnamese cuisine to our city. Our founders, inspired by their travels through Vietnam and their love for its rich culinary traditions, wanted to create a space where locals could experience the warmth and complexity of Vietnamese flavors. From our pho to our spring rolls, every dish is crafted with care, using traditional recipes and fresh ingredients.",t.classList.add("about-description"),document.createElement("h2").textContent="Contact Us";const a=document.createElement("div");a.classList.add("contact-section"),a.innerHTML='\n    <h2>Contact Us</h2>\n    For reservations and inquiries:<br>\n    Phone: 124-421-7890<br>\n    Email: info@phopalace123.com\n\n    <p>Or fill in the form below:</p>\n    <form id="contactForm">\n      <label for="name">Name:</label>\n      <input type="text" id="name" name="user_name" /><br>\n      <label for="mail">Email:</label>\n      <input type="email" id="mail" name="user_email" /><br>\n      <label for="msg">Message:</label>\n      <textarea id="msg" name="user_message"></textarea><br>\n      <button type="submit" id="submitBtn">Submit</button>\n    </form>\n    <span id="submitMessage" style="color: green; display: none;">Submitted</span>\n  ',e.appendChild(n),e.appendChild(t),e.appendChild(a),document.getElementById("contactForm").addEventListener("submit",(function(e){e.preventDefault(),document.getElementById("submitMessage").style.display="inline",setTimeout((()=>{document.getElementById("submitMessage").style.display="none"}),5e3)}))}))})()})();
(this.webpackJsonplocaldbprojectpwa=this.webpackJsonplocaldbprojectpwa||[]).push([[0],[,,,,,function(e,n,t){e.exports=t.p+"static/media/pwa.3abe438f.png"},,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e){e.exports=JSON.parse('{"pokemons":[{"id":1,"name":"Bulbasaur","picture":"https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png","abilities":[{"name":"Overgrow"},{"name":"Chlorophyll"}]},{"id":2,"name":"Pikachu","picture":"https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/500px-025Pikachu.png","abilities":[{"name":"Statics"},{"name":"Lightning Rod"}]}]}')},function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(4),r=t.n(i),c=(t(13),t(5)),l=t.n(c),s=t(6);var u=function(){return o.a.createElement(s.a,{variant:"primary",size:"lg",block:!0,id:"boutonInstall"},"Installer l'application")};var p=function(){return o.a.createElement("h1",null,"Liste des pokemons")};var d=function(){return o.a.createElement("h1",null,"Liste des pokemons")};t(15);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo",width:"400 px",height:"100 px"}),o.a.createElement("p",null,"Hello PWA World!")),o.a.createElement(p,null),o.a.createElement(d,null))},f=t(7),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(17);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(n,e)}))}window.addEventListener("activate",(function(e){e.waitUntil(function(){console.log("Create DB");try{Object(f.a)("products",1,(function(e){var n=e.createObjectStore("beverages",{keyPath:"id"});n.put({id:123,name:"coke",price:10.99,quantity:200}),n.put({id:321,name:"pepsi",price:8.99,quantity:100}),n.put({id:222,name:"water",price:11.99,quantity:300})}))}catch(e){console.log(e)}}())}))}()}],[[8,1,2]]]);
//# sourceMappingURL=main.39e40f79.chunk.js.map
console.log("Loading main.js");

var root = require("../root.js");

root.test();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful: ', registration);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

console.log("Done loading main.js");

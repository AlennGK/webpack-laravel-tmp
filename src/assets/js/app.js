require( "../scss/app.sass" ); // MAIN CSS NEEDED FOR THE PROJECT

// MODULES

var helpers = require('./test');
const name = "Alenn, ";

// ES6 BUNDLE TEST - CHECK CONSOLE
helpers.sayHello(name + "It is working!");

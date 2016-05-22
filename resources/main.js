import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
window.alert("app.js OK");


var AppComponent = require('./AppComponent.js');
console.log('Loaded the app component');

module.exports = {};
var React = require('react');
var ReactDOM = require('react-dom');

var ThreeUtils = require('./utils/ThreeUtils.jsx');
//ThreeUtils.init();
ThreeUtils.addModel();
//ThreeUtils.animate();

window.ThreeUtils = ThreeUtils;


var FullMenuApp = require('./components/FullMenuApp.jsx');

// Утилита загрузки меню
var MenuUtils = require('./utils/MenuUtils.jsx');
// Инициируем загрузку меню
MenuUtils.getAllMenu();

ReactDOM.render(
    <FullMenuApp />,
    document.getElementById('content')
);
var React = require('react');
var ReactDOM = require('react-dom');

var FullMenuApp = require('./components/FullMenuApp.jsx');

//ReactDOM.render(
//    <FullMenuApp />,
//    document.getElementById('content')
//);


var MenuBlock = require('./components/MenuBlock.jsx');

// Утилита загрузки меню
var MenuUtils = require('./utils/MenuUtils.jsx');
// Инициируем загрузку меню
MenuUtils.getAllMenu();

ReactDOM.render(
    <MenuBlock />,
    document.getElementById('content')
);
var React = require('react');
var ReactDOM = require('react-dom');

var FullMenuApp = require('./components/FullMenuApp.jsx');

//var MenuBlock = require('./components/MenuGroup.jsx');

// Утилита загрузки меню
var MenuUtils = require('./utils/MenuUtils.jsx');
// Инициируем загрузку меню
MenuUtils.getAllMenu();

//ReactDOM.render(
//    <MenuBlock />,
//    document.getElementById('content')
//);

ReactDOM.render(
    <FullMenuApp />,
    document.getElementById('content')
);
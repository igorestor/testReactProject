var React = require('react');
var MenuBlock = require('../components/MenuBlock.jsx');

/* Тут будем загружать и создавать менюхи */

var FullMenuApp = React.createClass({
    render: function() {
        return (
            <div>
                <MenuBlock />
                <MenuBlock />
            </div>
        )
    }
});

module.exports = FullMenuApp;
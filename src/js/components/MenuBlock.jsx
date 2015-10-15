var React = require('react');
var ButtonElement = require('../components/ButtonElement.jsx');

var MenuBlock = React.createClass({
    render: function() {

        var buttonList = ['test1', 'test2' , 'test3'];
        var buttonMap = [];

        buttonList.map(function(button) {buttonMap.push(<ButtonElement name={button}/>)});

        return (
            <div className="menuBlock">
                {buttonMap}
            </div>
        )
    }
});

module.exports = MenuBlock;
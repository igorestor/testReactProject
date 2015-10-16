var React = require('react');
var ButtonElement = require('../components/ButtonElement.jsx');

var MenuBlock = React.createClass({

    getButtons(buttonsList) {
        return buttonsList.map(function(button) {
            return (<ButtonElement key={button.id} name={button.name}/>);
        })
    },

    render: function() {
        return (
            <div className="menuBlock">
                {this.getButtons(this.props.menuInfo.buttons)}
            </div>
        )
    }
});

module.exports = MenuBlock;
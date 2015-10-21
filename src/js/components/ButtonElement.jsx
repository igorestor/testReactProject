var React = require('react');
var MenuActions = require('../actions/MenuActions.jsx');

var ButtonElement = React.createClass({

    _onToggleButton: function() {
        MenuActions.toggleButton(this.props.buttonInfo);
    },

    render: function() {
        return (
            <button onClick={this._onToggleButton}>{this.props.buttonInfo.name}</button>
        )
    }
});

module.exports = ButtonElement;
var React = require('react');
var MenuActions = require('../actions/MenuActions.jsx');

var ButtonElement = React.createClass({

    _onToggleButton: function() {
        MenuActions.toggleButton(this.props.buttonInfo);
    },

    render: function() {
        var btnClass = this.props.buttonInfo.isActive?'active':'';
        return (
            <button className={btnClass} onClick={this._onToggleButton}>
                {this.props.buttonInfo.name}
            </button>
        )
    }
});

module.exports = ButtonElement;
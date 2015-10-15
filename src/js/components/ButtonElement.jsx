var React = require('react');

var ButtonElement = React.createClass({
    render: function() {
        return (
            <button>{this.props.name}</button>
        )
    }
});

module.exports = ButtonElement;
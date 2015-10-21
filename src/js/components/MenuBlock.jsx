var React = require('react');
var ButtonElement = require('../components/ButtonElement.jsx');
var MenuStore = require('../stores/MenuStore.jsx');

function getButtonsFromStores() {
    return {
        buttonsList: MenuStore.getButtonsForBlock('test_block'),
        activeButton: null
    }
}



var MenuBlock = React.createClass({

    //componentDidMount: function() {
    //    MenuStore.addEventListener(this._onUpdate);
    //},

    getButtons(buttonsList) {
        return buttonsList.map(
            (button) => (<ButtonElement key={button.id} buttonInfo={button} />)
        )
    },

    getInitialState: function() {
        return getButtonsFromStores();
    },

    render: function() {
        return (
            <div className="menuBlock">
                {this.getButtons(this.state.buttonsList)}
            </div>
        )
    }
});

module.exports = MenuBlock;
var React = require('react');
var ButtonElement = require('../components/ButtonElement.jsx');
var MenuStore = require('../stores/MenuStore.jsx');

function getElementsGroupFromStores(groupId) {
    return {
        elementsList: MenuStore.getElementsForGroup(groupId)
    }
}

function getButtons(buttonsList) {
    return buttonsList.map(
        (button) => (<ButtonElement key={button.id} buttonInfo={button} />)
    )
}

var MenuBlock = React.createClass({
    _onUpdate: function() {
        this.setState(getElementsGroupFromStores(this.props.groupInfo.id));
    },

    componentDidMount: function() {
        MenuStore.addEventListener(this._onUpdate);
    },

    componentWillUnmount: function() {
        MenuStore.removeChangeListener(this._onChange);
    },

    getInitialState: function() {
        return getElementsGroupFromStores(this.props.groupInfo.id);
    },

    render: function() {
        return (
            <div className="menuBlock">
                <h4>{this.props.groupInfo.name}</h4>
                {getButtons(this.state.elementsList)}
            </div>
        )
    }
});

module.exports = MenuBlock;
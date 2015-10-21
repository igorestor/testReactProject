var React = require('react');
var MenuBlock = require('../components/MenuBlock.jsx');
var MenuStore = require('../stores/MenuStore.jsx');

function getMenuState() {
    return {
        allMenu: require('../data/menu.json'),
        btnState: MenuStore.getState()
    };
}

var FullMenuApp = React.createClass({

    _onUpdate: function() {
        this.setState(getMenuState());
    },

    getInitialState: function() {
        return getMenuState();
    },

    componentDidMount: function() {
        //MenuStore.addEventListener(this._onUpdate);
    },

    // componentWillUnmount - отписать стор от обновлений

    getMenuBlocks(allMenu) {
        return allMenu.map(
            (content) => (<MenuBlock key={content.id} menuInfo={content} onTest={this.setMyState}/>)
        );
    },

    getStatusString(currentMenu, currentState) {

        var __checkStatusString = (key) => (currentState[key]?'YES':'NO');

        return (
            currentMenu.map(
                (menuElement) => (
                    menuElement.buttons.map(
                        (buttonElement) => (
                            <p key={buttonElement.id}>
                                {buttonElement.name} - {__checkStatusString(buttonElement.id)}
                            </p>
                        )
                    )
                )
            )
        );
    },

    render: function() {
        return (
            <div>
                <div>{this.getMenuBlocks(this.state.allMenu)}</div>
                <div className='info-block'>{this.getStatusString(this.state.allMenu, this.state.btnState)}</div>
            </div>
        )
    }
});

module.exports = FullMenuApp;
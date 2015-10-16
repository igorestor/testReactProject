var React = require('react');
var MenuBlock = require('../components/MenuBlock.jsx');
var _ = require('underscore');

/* Тут будем загружать и создавать менюхи */

function getMenuState() {
    return {
        allMenu: [
            {
                id: 'menu1',
                name: 'test menu 1',
                buttons: {
                    button1: {
                        name: 'button 1-1'
                    },
                    button2: {
                        name: 'button 1-2'
                    },
                    button3: {
                        name: 'button 1-3'
                    }
                }
            },
            {
                id: 'menu2',
                name: 'test menu 2',
                buttons: {
                    button1: {
                        name: 'button 2-1'
                    },
                    button2: {
                        name: 'button 2-2'
                    }
                }
            }
        ]
    }
}

var FullMenuApp = React.createClass({

    getMenuBlocks(allMenu) {
        return _.map(allMenu, function(content){
            return (<MenuBlock key={content.id} contents={content} />)
        });
    },

    getInitialState: function() {
        return getMenuState();
    },

    // componentDidMount - подписать стор под обнволение
    // componentWillUnmount - отписать стор от обновлений

    render: function() {
        return (
            <div>
                {this.getMenuBlocks(this.state.allMenu)}
            </div>
        )
    }
});

module.exports = FullMenuApp;
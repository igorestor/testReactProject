var React = require('react');
var MenuBlock = require('../components/MenuBlock.jsx');

/* Тут будем загружать и создавать менюхи */

function getMenuState() {
    return {
        allMenu: [
            {
                id: 'menu1',
                name: 'test menu 1',
                buttons: [
                    {
                        id: 'button1-1',
                        name: 'button 1-1'
                    },
                    {
                        id: 'button1-2',
                        name: 'button 1-2'
                    },
                    {
                        id: 'button1-3',
                        name: 'button 1-3'
                    }
                ]
            },
            {
                id: 'menu2',
                name: 'test menu 2',
                buttons: [
                    {
                        id: 'button2-1',
                        name: 'button 2-1'
                    },
                    {
                        id: 'button2-2',
                        name: 'button 2-2'
                    }
                ]
            }
        ]
    }
}

var FullMenuApp = React.createClass({

    getInitialState: function() {
        return getMenuState();
    },

    // componentDidMount - подписать стор под обнволение
    // componentWillUnmount - отписать стор от обновлений

    getMenuBlocks(allMenu) {
        return allMenu.map(function(content){
            return (<MenuBlock key={content.id} menuInfo={content} />)
        });
    },

    render: function() {
        return (
            <div>
                {this.getMenuBlocks(this.state.allMenu)}
            </div>
        )
    }
});

module.exports = FullMenuApp;
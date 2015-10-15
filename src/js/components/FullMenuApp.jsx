var React = require('react');
var MenuBlock = require('../components/MenuBlock.jsx');
var _ = require('underscore');

/* Тут будем загружать и создавать менюхи */

function getMenuState() {
    return {
        allMenu: {
            menu1: {
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
            menu2: {
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
        }
    }
}

var FullMenuApp = React.createClass({

    menuBlocks: [],

    addMenuBlock(blockKey, blockVal) {
        this.menuBlocks.push(<MenuBlock key={blockKey} contents={blockVal} />)
    },

    getInitialState: function() {
        return getMenuState();
    },

    // componentDidMount - подписать стор под обнволение
    // componentWillUnmount - отписать стор от обновлений

    render: function() {

        var __this = this;

        //var allTodos = this.props.allTodos;
        //var todos = [];

        //for (var key in allTodos) {
        //    todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        //}


        _.mapObject(this.state.allMenu, function(val, key){
            __this.addMenuBlock(key, val);
        });


        return (
            <div>
                {this.menuBlocks}
            </div>
        )
    }
});

module.exports = FullMenuApp;
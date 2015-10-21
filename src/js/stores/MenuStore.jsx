var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var MenuConstants = require('../constants/MenuConstants.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _menuState = {};

function update(id, updates) {
    _menuState[id] = assign({}, _menuState[id], updates);
}

var MenuStore = assign({}, EventEmitter.prototype, {
    addEventListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        console.log(_menuState);
        this.emit(CHANGE_EVENT);
    },

    getState: function() {
        return _menuState;
    },




    /** NEW */
    getButtonsForBlock: function(blockId) {
        console.log('load block: '+blockId);
        return ([
                {
                    "id": "button1-1",
                    "name": "button 1-1"
                },
                {
                    "id": "button1-2",
                    "name": "button 1-2"
                },
                {
                    "id": "button1-3",
                    "name": "button 1-3"
                }
            ]
        )

    }



});

AppDispatcher.register( function(action) {
    console.log(action);
    switch (action.actionType) {
        case MenuConstants.MENU_ENABLE:
            //update(action.id, {'isActive': true});
            //MenuStore.emitChange();
            break;
        case MenuConstants.MENU_DISABLE:
            //update(action.id, {'isActive': false});
            //MenuStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = MenuStore;
var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var MenuConstants = require('../constants/MenuConstants.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _elements = [];
var _groups = [];

function _disable(element) {
    var id = element.id;
    var group = element.group;

    _elements = _elements.map((element) =>
        (assign({}, element, (element.id == id && element.group == group)? {isActive: false}: {}))
    );
}

function _enable(element) {
    var id = element.id;
    var group = element.group;

    _elements = _elements.map((element) =>
            (assign({}, element, (element.group == group)? (
                (element.id == id)? {isActive: true} : {isActive: false}) : {}))
    );
}

var MenuStore = assign({}, EventEmitter.prototype, {
    addEventListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllGroups: function() {
        return _groups;
    },

    getElementsForGroup: function(groupId) {
        return _elements.filter((elem) => elem.group == groupId);
    }
});

AppDispatcher.register( function(action) {
    switch (action.actionType) {
        case MenuConstants.RECEIVE_RAW_MENU:
            _elements = action.rawMenu.elements;
            _groups = action.rawMenu.groups;
            break;
        case MenuConstants.ELEMENT_ENABLE:
            _enable({id: action.id, group: action.group});
            MenuStore.emitChange();
            break;
        case MenuConstants.ELEMENT_DISABLE:
            _disable({id: action.id, group: action.group});
            MenuStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = MenuStore;
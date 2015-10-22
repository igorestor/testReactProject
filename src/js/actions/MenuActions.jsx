var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var MenuConstants = require('../constants/MenuConstants.jsx');

/** @namespace button.isActive */
var MenuActions = {
    receiveAll: function(rawMenu) {
        AppDispatcher.dispatch({
            actionType: MenuConstants.RECEIVE_RAW_MENU,
            rawMenu: rawMenu
        });
    },

    toggleButton: function(button) {
        AppDispatcher.dispatch({
            actionType: button.isActive ? MenuConstants.ELEMENT_DISABLE : MenuConstants.ELEMENT_ENABLE,
            id: button.id,
            group: button.group
        });
    }
};

module.exports = MenuActions;

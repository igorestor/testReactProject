var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var MenuConstants = require('../constants/MenuConstants.jsx');

/** @namespace button.isActive */
var MenuActions = {

    // Загружаем инфу по меню
    receiveAll: function(rawMenu) {
        console.log('load All');
        console.log(rawMenu);

        AppDispatcher.dispatch({
            type: MenuConstants.RECEIVE_RAW_MESSAGES,
            rawMenu: rawMenu
        });
    },

    toggleButton: function(button) {
        //AppDispatcher.dispatch({
        //    actionType: button.isActive ? MenuConstants.MENU_ENABLE : MenuConstants.MENU_DISABLE,
        //    id: button.id
        //});
    }
};

module.exports = MenuActions;

//var AppDispatcher = require('../dispatcher/AppDispatcher');
//var TodoConstants = require('../constants/TodoConstants');
//
//var TodoActions = {
//
//  /**
//   * @param  {string} text
//   */
//  create: function(text) {
//    AppDispatcher.dispatch({
//      actionType: TodoConstants.TODO_CREATE,
//      text: text
//    });
//  },
//
//  /**
//   * @param  {string} id The ID of the ToDo item
//   * @param  {string} text
//   */
//  updateText: function(id, text) {
//    AppDispatcher.dispatch({
//      actionType: TodoConstants.TODO_UPDATE_TEXT,
//      id: id,
//      text: text
//    });
//  },
//
//  /**
//   * Toggle whether a single ToDo is complete
//   * @param  {object} todo
//   */
//  toggleComplete: function(todo) {
//    var id = todo.id;
//    var actionType = todo.complete ?
//        TodoConstants.TODO_UNDO_COMPLETE :
//        TodoConstants.TODO_COMPLETE;
//
//    AppDispatcher.dispatch({
//      actionType: actionType,
//      id: id
//    });
//  },
//
//  /**
//   * Mark all ToDos as complete
//   */
//  toggleCompleteAll: function() {
//    AppDispatcher.dispatch({
//      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
//    });
//  },
//
//  /**
//   * @param  {string} id
//   */
//  destroy: function(id) {
//    AppDispatcher.dispatch({
//      actionType: TodoConstants.TODO_DESTROY,
//      id: id
//    });
//  },
//
//  /**
//   * Delete all the completed ToDos
//   */
//  destroyCompleted: function() {
//    AppDispatcher.dispatch({
//      actionType: TodoConstants.TODO_DESTROY_COMPLETED
//    });
//  }
//
//};
//
//module.exports = TodoActions;

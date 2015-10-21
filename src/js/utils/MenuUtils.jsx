var MenuActions = require('../actions/MenuActions.jsx');
var ChatExampleData = require('../ExampleData.jsx');

module.exports = {
    getAllMenu: function() {
        var rawMenu = ChatExampleData.init();

        // Инициируем регистрацию загрузки меню
        MenuActions.receiveAll(rawMenu);
    }
};

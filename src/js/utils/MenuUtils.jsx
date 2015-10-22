var MenuActions = require('../actions/MenuActions.jsx');
var ChatExampleData = require('../ExampleData.jsx');

module.exports = {
    getAllMenu: function() {
        var rawMenu = ChatExampleData.init();
        MenuActions.receiveAll(rawMenu);
    }
};

var MenuActions = require('../actions/MenuActions.jsx');
var ChatExampleData = require('../ExampleData.jsx');
var md5 = require('hash-anything').md5;

module.exports = {
    getAllMenu: function() {
        var rawMenu = ChatExampleData.init();
        rawMenu['elements'].map((el) => (el['elementId'] = md5(el)));

        MenuActions.receiveAll(rawMenu);
    }
};

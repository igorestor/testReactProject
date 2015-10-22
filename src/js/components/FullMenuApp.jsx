var React = require('react');
var MenuBlock = require('../components/MenuGroup.jsx');
var MenuStore = require('../stores/MenuStore.jsx');

function getGroupsFromStore() {
    return {
        groupsList: MenuStore.getAllGroups()
    };
}

var FullMenuApp = React.createClass({

    getInitialState: function() {
        return getGroupsFromStore();
    },

    getMenuGroups(allGroups) {
        return allGroups.map(
            (group) => (<MenuBlock key={group.id} groupInfo={group} />)
        );
    },

    render: function() {
        return (
            <div>
                <div>{this.getMenuGroups(this.state.groupsList)}</div>
            </div>
        )
    }
});

module.exports = FullMenuApp;
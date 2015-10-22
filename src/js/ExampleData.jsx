module.exports = {
    init: function() {
        return ({
            'groups': [
                {
                    id: 'g_1',
                    name: 'Test group'
                },
                {
                    id: 'g_2',
                    name: 'Test group2'
                }
            ],
            'elements' :[
                {
                    id: 'e_1',
                    name: 'button 1-1',
                    group: 'g_1'
                },
                {
                    id: 'e_2',
                    name: 'button 1-2',
                    group: 'g_1',
                    isActive: true
                },
                {
                    id: 'e_1',
                    name: 'button 2-1 (other)',
                    group: 'g_2'
                },
                {
                    id: 'e_3',
                    name: 'button 1-3',
                    group: 'g_1'
                }
            ]
        });
    }
};

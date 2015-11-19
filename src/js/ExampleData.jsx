module.exports = {
    init: function() {
        return ({
            'groups': [
                {
                    id: 'g_1',
                    name: 'Стеллы'
                },
                {
                    id: 'g_2',
                    name: 'Цветники'
                },
                {
                    id: 'g_3',
                    name: 'Оградки'
                }
            ],
            'elements' :[
                {
                    id: 'e_1',
                    name: 'Стелла №1',
                    group: 'g_1',
                    model: '3d/models/Headstone_1.obj'
                },
                {
                    id: 'e_2',
                    name: 'Стелла №2',
                    group: 'g_1',
                    model: '3d/models/Headstone_2.obj'
                },
                {
                    id: 'e_1',
                    name: 'Цветник №1',
                    group: 'g_2',
                    model: '3d/models/Mound.obj'
                },
                {
                    id: 'e_1',
                    name: 'Оградка №1',
                    group: 'g_3',
                    isActive: true,
                    model: '3d/models/Fence.obj'
                },


                {
                    id: 'e_3',
                    name: 'Памятник капля',
                    group: 'g_1',
                    model: '3d/models/blob_stella.obj'
                },
                {
                    id: 'e_2',
                    name: 'Цветник капля',
                    group: 'g_2',
                    model: '3d/models/blob_parterre.obj'
                }
            ]
        });
    }
};

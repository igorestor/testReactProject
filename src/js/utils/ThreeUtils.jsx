var MenuStore = require('../stores/MenuStore.jsx');

var container,
    camera, scene, renderer,
    mouseX = 0, mouseY = 0,

    windowHalfX = (window.innerWidth / 2),
    windowHalfY = (window.innerHeight / 2);


var manager = new THREE.LoadingManager();

//TODO: remove for release
/** @namespace xhr.lengthComputable */
var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( percentComplete + '% downloaded' );
    }
};

var onError = function ( xhr ) {
};
var texture = new THREE.Texture();

function _init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.z = 100;

    scene = new THREE.Scene();

    //var ambient = new THREE.AmbientLight( 0x101030 );
    var ambient = new THREE.AmbientLight( 0xffffff );
    scene.add( ambient );

    var directionalLight = new THREE.DirectionalLight( 0xffeedd );
    directionalLight.position.set( 0, 0, 1 );
    scene.add( directionalLight );



    var axes = new THREE.AxisHelper( 200 );
    axes.position.y = -30;
    scene.add(axes);
    var planeGeometry = new THREE.PlaneGeometry(400,400);
    var planeMaterial = new THREE.MeshBasicMaterial(
        {color: 0x457f32});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);
    plane.rotation.x = -0.5*Math.PI;
    plane.position.x = 0;
    plane.position.y = -30;
    plane.position.z = 0;
    scene.add(plane);







    //var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {

        console.log( item, loaded, total );

    };

//        var texture = new THREE.Texture();

//        var onProgress = function ( xhr ) {
//            if ( xhr.lengthComputable ) {
//                var percentComplete = xhr.loaded / xhr.total * 100;
//                console.log( Math.round(percentComplete, 2) + '% downloaded' );
//            }
//        };



    var loader = new THREE.ImageLoader( manager );
    loader.load( '3d/textures/texture.jpg', function ( image ) {

        texture.image = image;
        texture.needsUpdate = true;

    } );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;
}

function _animate() {
    requestAnimationFrame( _animate );
    render();
}

function render() {
    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}

function test() {
    var ttt = (scene.children);

    for (var i in ttt) {
        console.log(i);
        console.log(ttt[i]['type']);

        if ('Object3D' == ttt[i]['type']) {
            scene.remove(ttt[i]);
            addModel();
        }
    }
}



var ThreeUtils = {
    init: function() {
        _init();
    },
    animate: function() {
        _animate();
    },
    _addModel: function(el) {
        var manager = new THREE.LoadingManager();
        var loader = new THREE.OBJLoader( manager );
        loader.load( el.model, function ( object ) {
            object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material.map = texture;
                }
            } );

            object.groupId = el.groupId;
            object.elementId = el.elementId;

            object.rotation.x = -0.5*Math.PI;
            object.position.y = -30;
            object.position.z = -90;
            object.position.x = -60;

            scene.add( object );

            console.log(object)
        }, this.onProgress, this.onError);
    },

    _removeModel: function(el) {
        console.log(el);

        scene.remove(el);

        //var ttt = (scene.children);
        //
        //for (var i in ttt) {
        //    if ('Object3D' == ttt[i]['type']) {
        //        scene.remove(ttt[i]);
        //    }
        //}
    },

    updateGroup: function(groupId) {

        var groupElementsOnScene = (scene.children).filter((el) => (el.groupId == groupId));
        var activeElementOnStore = MenuStore.getActiveElementsForGroup(groupId);

        var toAdd = activeElementOnStore.filter((el) => {
            return !groupElementsOnScene.some((sceneEl) => sceneEl.elementId == el.elementId);
        });

        var toRemove = groupElementsOnScene.filter((sceneEl) => {
            return activeElementOnStore.every((el) => el.elementId != sceneEl.elementId);
        });

        toAdd.map((el) => el.groupId = groupId);

        toAdd.forEach((el) => ThreeUtils._addModel(el));
        toRemove.forEach((el) => ThreeUtils._removeModel(el));
    }
};

module.exports = ThreeUtils;
var MenuStore = require('../stores/MenuStore.jsx');

var container,
    camera, scene, renderer,
    mouseX = 0, mouseY = 0,

    windowHalfX = (window.innerWidth / 2),
    windowHalfY = (window.innerHeight / 2),

    controls, stats, mesh,

    skybox, plane;


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


/** GUI Control */
var controlsGui = new function() {
//    this.panoramY = 2469;
//    this.planeSize = 400;
};
var gui = new dat.GUI();
//gui.add(controlsGui, 'panoramY',0,2500);
//gui.add(controlsGui, 'planeSize',0,1000);


function _init() {
    /** SCENE */
    scene = new THREE.Scene();


    /** CAMERA */
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    camera.position.x = 250;
    camera.position.y = 350;
    camera.position.z = 500;
    scene.add(camera);


    /** RENDERER */
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.setClearColor( 0xaaaaaa );


    container = document.createElement( 'div' );
    document.body.appendChild( container );
    container.appendChild(renderer.domElement);


    /** CONTROLS */
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    controls.maxPolarAngle = Math.PI/2; //ground limit

    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;


    /** LIGHT */
    var ambient = new THREE.AmbientLight( 0xffffff );
    scene.add( ambient );

    var directionalLight = new THREE.DirectionalLight( 0xffeedd );
    directionalLight.position.set( 0, 0, 1 );
    scene.add( directionalLight );


    /** SKYBOX/FOG */
    var materialArray = [];
    materialArray.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('3d/test/dawnmountain-xpos.png')}));
    materialArray.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('3d/test/dawnmountain-xneg.png')}));
    materialArray.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('3d/test/dawnmountain-ypos.png')}));
    materialArray.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('3d/test/dawnmountain-yneg.png')}));
    materialArray.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('3d/test/dawnmountain-zpos.png')}));
    materialArray.push(new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('3d/test/dawnmountain-zneg.png')}));
    for (var i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;
    var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray);

    var skyboxGeom = new THREE.CubeGeometry(5000, 5000, 5000, 1, 1, 1);

    skybox = new THREE.Mesh(skyboxGeom, skyboxMaterial);
    skybox.position.y = 2469;
    //scene.add(skybox);


    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    window.addEventListener( 'resize', onWindowResize, false );


    /** TEXTURE (__helper__) */
    var loader = new THREE.ImageLoader( manager );
    loader.load( '3d/textures/texture.jpg', function ( image ) {
        texture.image = image;
        texture.needsUpdate = true;
    } );


    /** STATS (__helper__) */
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.bottom = '10px';
    stats.domElement.style.right = '10px';
    stats.domElement.style.zIndex = 100;
    container.appendChild( stats.domElement );


    /** AXES (__helpers__) */
    var axes = new THREE.AxisHelper( 200 );
    //axes.position.y = -30;
    scene.add(axes);
    var planeGeometry = new THREE.PlaneGeometry(400,400);
    var planeMaterial = new THREE.MeshBasicMaterial(
        {color: 0x457f32, wireframe: true });
    plane = new THREE.Mesh(planeGeometry,planeMaterial);
    plane.rotation.x = -0.5*Math.PI;
    //plane.position.x = 0;
    //plane.position.y = -30;
    //plane.position.z = 0;
    scene.add(plane);
}


function onWindowResize() {
    //windowHalfX = window.innerWidth / 2;
    //windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

//function onDocumentMouseMove( event ) {
//    mouseX = ( event.clientX - windowHalfX ) / 2;
//    mouseY = ( event.clientY - windowHalfY ) / 2;
//}

function _animate() {
    requestAnimationFrame( _animate );

    controls.update();
    stats.update();
    render();
}

function render() {
    //TODO: For tuning
    //skybox.position.y = controlsGui.panoramY;

    renderer.render( scene, camera );
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
            //object.position.y = -30;
            //object.position.z = -90;
            //object.position.x = -60;

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
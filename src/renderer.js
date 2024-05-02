let BABYLON = require('babylonjs');
let VIEWER = require('babylonjs-viewer');


document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("render-canvas");
    const engine = new BABYLON.Engine(canvas, true);

    function createScene(){
        const scene = new BABYLON.Scene(engine);

        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

        const box = BABYLON.MeshBuilder.CreateBox("box", {}); 

        return scene;
    }

    const scene = createScene();
    console.log(scene);

    engine.runRenderLoop(function () {
        scene.render();
    });
  });

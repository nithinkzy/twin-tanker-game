/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function () {

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;
  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];
  let currentScene: objects.Scene;
  let currentState: number;
  let keyboardManager: managers.Keyboard;
  let textureAtlasData: any;
  let textureAtlas: createjs.SpriteSheet;
  let stats: Stats;
  let level:number;

  textureAtlasData = {

    "images": [
      ""
      //"./Assets/sprites/textureAtlas.png"
    ],

    "frames": [
      [2, 2, 100, 90, 0, 0, 0],
      [104, 2, 100, 90, 0, 0, 0],
      [206, 2, 100, 90, 0, 0, 0],
      [308, 2, 100, 90, 0, 0, 0],
      [410, 2, 16, 16, 0, 0, 0],
      [428, 2, 35, 50, 0, 0, 0],
      [465, 2, 44, 40, 0, 0, 0],
      [2, 94, 44, 40, 0, 0, 0],
      [48, 94, 44, 40, 0, 0, 0],
      [94, 94, 44, 40, 0, 0, 0],
      [140, 94, 44, 40, 0, 0, 0],
      [186, 94, 44, 40, 0, 0, 0],
      [232, 94, 44, 40, 0, 0, 0],
      [278, 94, 44, 40, 0, 0, 0],
      [324, 94, 44, 40, 0, 0, 0],
      [370, 94, 44, 40, 0, 0, 0],
      [416, 94, 93, 74, 0, 0, 0],
      [2, 170, 93, 74, 0, 0, 0],
      [97, 170, 93, 74, 0, 0, 0],
      [192, 170, 93, 74, 0, 0, 0],
      [287, 170, 200, 60, 0, 0, 0],
      [2, 246, 65, 65, 0, 0, 0],
      [69, 246, 65, 65, 0, 0, 0],
      [136, 246, 65, 65, 0, 0, 0],
      [203, 246, 65, 65, 0, 0, 0],
      [270, 246, 65, 65, 0, 0, 0],
      [337, 246, 65, 65, 0, 0, 0],
      [404, 246, 65, 65, 0, 0, 0],
      [2, 313, 200, 60, 0, 0, 0],
      [204, 313, 62, 63, 0, 0, 0],
      [268, 313, 200, 60, 0, 0, 0],
      [2, 378, 200, 60, 0, 0, 0],
      [204, 378, 200, 60, 0, 0, 0],
      [2, 440, 200, 60, 0, 0, 0],
      [204, 440, 200, 60, 0, 0, 0],
      [406, 440, 65, 65, 0, 0, 0],
      [2, 507, 65, 65, 0, 0, 0],
      [69, 507, 65, 65, 0, 0, 0],
      [136, 507, 65, 65, 0, 0, 0],
      [203, 507, 32, 32, 0, 0, 0],
      [237, 507, 32, 32, 0, 0, 0],
      [271, 507, 32, 32, 0, 0, 0],
      [305, 507, 32, 32, 0, 0, 0],
      [339, 507, 32, 32, 0, 0, 0],
      [373, 507, 32, 32, 0, 0, 0],
      [2, 574, 200, 60, 0, 0, 0],
      [204, 574, 200, 60, 0, 0, 0]
  ],
  

  "animations": {
    "boss": { "frames": [0,1,2,3] },
    "bullet": { "frames": [4] },
    "cloud": { "frames": [5] },
    "coin": {
      "frames": [ 6, 7, 8, 9, 10, 11,12,13,14,15],
      "speed": 0.33
    },
    "enemy": {
      "frames": [16,17,18,19],
      "speed": 0.25
    },
    "exitButton": { 
      "frames": [20] 
    },
    "explosion": { 
      "frames": [21,22,23,24,25,26,27] 
    },
  
    "helpButton": {
       "frames": [28] 
      },
    "island": {
       "frames": [29]
       },
       "levelOneButton": { "frames": [30] },
       "levelThreeButton": { "frames": [31] },
       "levelTwoButton": { "frames": [32] },
    "menuButton": { "frames": [33] },
    "nextLevelButton": { "frames": [34] },
    "plane1": { "frames": [35] },
    "plane2": { "frames": [36] },
    "planeflash": { "frames": [37,38] },
    
    "smallexplosion": { "frames": [39,40,41,42,43,44] },
   
    "startButton": { "frames": [45] },
    "tryAgainButton": { "frames": [46] }
},

  };

  assetManifest = [
    { id: "textureAtlas", src: "./Assets/sprites/textureAtlas.png" },
    { id: "ocean", src: "./Assets/images/ocean.png" },
    { id: "bg", src: "./Assets/images/gameBG.png" },
    { id: "level2", src: "./Assets/images/ocean2.png" },
    { id: "level3", src: "./Assets/images/ocean3.png" },
    { id: "engine", src: "./Assets/audio/engine.mp3" },
    { id: "coin", src: "./Assets/audio/coin.wav" },
    { id: "life", src: "./Assets/audio/life.wav" },
    { id: "explosion", src: "./Assets/audio/explosion.mp3" },
    { id: "bulletSound", src: "./Assets/audio/bullet.mp3" },
    { id: "button", src: "./Assets/audio/button.mp3" },
    { id: "bulletOpen", src: "./Assets/audio/buttonOpen.mp3" },
    { id: "bossEntry", src: "./Assets/audio/bossEntry.mp3" },
    { id: "victory", src: "./Assets/audio/victory.mp3" }
  ];

  // preloads assets
  function Init(): void {
    console.log("Initialization Started...");
    assetManager = new createjs.LoadQueue(); // creates the assetManager object
    assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
    assetManager.loadManifest(assetManifest);
    assetManager.on("complete", Start, this);
  }

  function InitStats(): void {
    stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
  }

  function Start(): void {
    console.log("Starting Application...")
    // initialize performance counting
    InitStats();

    textureAtlasData.images = [assetManager.getResult("textureAtlas")];
    textureAtlas = new createjs.SpriteSheet(textureAtlasData);

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);

    managers.Game.stage = stage;
    managers.Game.currentScene = config.Scene.START;
    currentState = config.Scene.START;

    keyboardManager = new managers.Keyboard();
    managers.Game.keyboardManager = keyboardManager;
    managers.Game.assetManager = assetManager;
    managers.Game.textureAtlas = textureAtlas;

    Main();
  }

  function Update(): void {
    stats.begin();
    // if the scene that is playing returns another current scene
    // then call Main again and switch the scene
    if (currentState != managers.Game.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage

    stats.end();
  }

  function Main(): void {
    stage.removeAllChildren();

    switch (managers.Game.currentScene) {
      case config.Scene.START:
        currentScene = new scenes.StartScene();
        break;
      case config.Scene.PLAY:
        currentScene = new scenes.PlayScene();
        break;
      case config.Scene.OVER:
        currentScene = new scenes.OverScene();
        break;
        case config.Scene.LEVELS:
        currentScene = new scenes.LevelScene();
        break;
        case config.Scene.LEVEL1:
        currentScene = new scenes.LevelOne();
        break;
        case config.Scene.LEVEL2:
        currentScene = new scenes.LevelTwo();
        break;
        case config.Scene.LEVEL3:
        currentScene = new scenes.LevelThree();
        break;
        case config.Scene.NEXTLEVEL:
        currentScene = new scenes.NextLevel();
        break;
        case config.Scene.HELP:
        currentScene = new scenes.HelpScene();
        break;

    }

    currentState = managers.Game.currentScene;
    managers.Game.currentSceneObject = currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();

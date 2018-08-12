/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    var stats;
    textureAtlasData = {
        "images": [
            ""
            //"./Assets/sprites/textureAtlas.png"
        ],
        "frames": [
            [2, 2, 16, 16, 0, 0, 0],
            [20, 2, 35, 50, 0, 0, 0],
            [57, 2, 44, 40, 0, 0, 0],
            [103, 2, 44, 40, 0, 0, 0],
            [149, 2, 44, 40, 0, 0, 0],
            [195, 2, 44, 40, 0, 0, 0],
            [241, 2, 44, 40, 0, 0, 0],
            [287, 2, 44, 40, 0, 0, 0],
            [333, 2, 44, 40, 0, 0, 0],
            [379, 2, 44, 40, 0, 0, 0],
            [425, 2, 44, 40, 0, 0, 0],
            [2, 54, 44, 40, 0, 0, 0],
            [48, 54, 93, 74, 0, 0, 0],
            [143, 54, 93, 74, 0, 0, 0],
            [238, 54, 93, 74, 0, 0, 0],
            [333, 54, 93, 74, 0, 0, 0],
            [2, 130, 200, 60, 0, 0, 0],
            [204, 130, 65, 65, 0, 0, 0],
            [271, 130, 65, 65, 0, 0, 0],
            [338, 130, 65, 65, 0, 0, 0],
            [405, 130, 65, 65, 0, 0, 0],
            [2, 197, 65, 65, 0, 0, 0],
            [69, 197, 65, 65, 0, 0, 0],
            [136, 197, 65, 65, 0, 0, 0],
            [203, 197, 200, 60, 0, 0, 0],
            [405, 197, 62, 63, 0, 0, 0],
            [2, 264, 200, 60, 0, 0, 0],
            [204, 264, 200, 60, 0, 0, 0],
            [2, 326, 200, 60, 0, 0, 0],
            [204, 326, 200, 60, 0, 0, 0],
            [2, 388, 200, 60, 0, 0, 0],
            [204, 388, 65, 65, 0, 0, 0],
            [271, 388, 65, 65, 0, 0, 0],
            [338, 388, 65, 65, 0, 0, 0],
            [405, 388, 65, 65, 0, 0, 0],
            [472, 388, 32, 32, 0, 0, 0],
            [2, 455, 32, 32, 0, 0, 0],
            [36, 455, 32, 32, 0, 0, 0],
            [70, 455, 32, 32, 0, 0, 0],
            [104, 455, 32, 32, 0, 0, 0],
            [138, 455, 32, 32, 0, 0, 0],
            [172, 455, 200, 60, 0, 0, 0],
            [2, 517, 200, 60, 0, 0, 0]
        ],
        "animations": {
            "bullet": { "frames": [0] },
            "cloud": { "frames": [1] },
            "coin": {
                "frames": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                "speed": 0.33
            },
            "enemy": {
                "frames": [12, 13, 14, 15],
                "speed": 0.25
            },
            "exitButton": {
                "frames": [16]
            },
            "explosion": {
                "frames": [17, 18, 19, 20, 21, 22, 23]
            },
            "helpButton": {
                "frames": [24]
            },
            "island": {
                "frames": [25]
            },
            "levelOneButton": { "frames": [26] },
            "levelThreeButton": { "frames": [27] },
            "levelTwoButton": { "frames": [28] },
            "menuButton": { "frames": [29] },
            "nextLevelButton": { "frames": [30] },
            "plane1": { "frames": [31] },
            "plane2": { "frames": [32] },
            "planeflash": { "frames": [33, 34] },
            "smallexplosion": { "frames": [35, 36, 37, 38, 39, 40] },
            "startButton": { "frames": [41] },
            "tryAgainButton": { "frames": [42] }
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
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function InitStats() {
        stats = new Stats();
        stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom);
    }
    function Start() {
        console.log("Starting Application...");
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
    function Update() {
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
    function Main() {
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
//# sourceMappingURL=game.js.map
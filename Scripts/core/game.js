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
    // var stats;
    var level;
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
            [2, 136, 200, 60, 0, 0, 0],
            [204, 136, 93, 74, 0, 0, 0],
            [299, 136, 93, 74, 0, 0, 0],
            [394, 136, 93, 74, 0, 0, 0],
            [2, 212, 93, 74, 0, 0, 0],
            [97, 212, 200, 60, 0, 0, 0],
            [299, 212, 65, 65, 0, 0, 0],
            [366, 212, 65, 65, 0, 0, 0],
            [433, 212, 65, 65, 0, 0, 0],
            [2, 288, 65, 65, 0, 0, 0],
            [69, 288, 65, 65, 0, 0, 0],
            [136, 288, 65, 65, 0, 0, 0],
            [203, 288, 65, 65, 0, 0, 0],
            [270, 288, 200, 60, 0, 0, 0],
            [2, 355, 62, 63, 0, 0, 0],
            [66, 355, 200, 60, 0, 0, 0],
            [268, 355, 200, 60, 0, 0, 0],
            [2, 420, 200, 60, 0, 0, 0],
            [204, 420, 200, 60, 0, 0, 0],
            [2, 482, 200, 60, 0, 0, 0],
            [204, 482, 65, 65, 0, 0, 0],
            [271, 482, 65, 65, 0, 0, 0],
            [338, 482, 65, 65, 0, 0, 0],
            [405, 482, 65, 65, 0, 0, 0],
            [472, 482, 32, 32, 0, 0, 0],
            [2, 549, 32, 32, 0, 0, 0],
            [36, 549, 32, 32, 0, 0, 0],
            [70, 549, 32, 32, 0, 0, 0],
            [104, 549, 32, 32, 0, 0, 0],
            [138, 549, 32, 32, 0, 0, 0],
            [172, 549, 200, 60, 0, 0, 0],
            [2, 611, 200, 60, 0, 0, 0]
        ],
        "animations": {
            "boss": { "frames": [0, 1, 2, 3] },
            "bullet": { "frames": [4] },
            "cloud": { "frames": [5] },
            "coin": {
                "frames": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                "speed": 0.33
            },
            "controlButton": { "frames": [16] },
            "enemy": {
                "frames": [17, 18, 19, 20],
                "speed": 0.25
            },
            "exitButton": {
                "frames": [21]
            },
            "explosion": {
                "frames": [22, 23, 24, 25, 26, 27, 28]
            },
            "helpButton": {
                "frames": [29]
            },
            "island": {
                "frames": [30]
            },
            "levelOneButton": { "frames": [31] },
            "levelThreeButton": { "frames": [32] },
            "levelTwoButton": { "frames": [33] },
            "menuButton": { "frames": [34] },
            "nextLevelButton": { "frames": [35] },
            "plane1": { "frames": [36] },
            "plane2": { "frames": [37] },
            "planeflash": { "frames": [38, 39] },
            "smallexplosion": { "frames": [40, 41, 42, 43, 44, 45] },
            "startButton": { "frames": [46] },
            "tryAgainButton": { "frames": [47] }
        },
    };
    assetManifest = [
        { id: "textureAtlas", src: "Assets/sprites/textureAtlas.png" },
        { id: "ocean", src: "Assets/images/ocean.png" },
        { id: "help", src: "Assets/images/helpPage.png" },
        { id: "control", src: "Assets/images/controlPage.png" },
        { id: "bg", src: "Assets/images/gameBG.png" },
        { id: "level2", src: "Assets/images/ocean2.png" },
        { id: "level3", src: "Assets/images/ocean3.png" },
        { id: "engine", src: "Assets/audio/engine.mp3" },
        { id: "coin", src: "Assets/audio/coin.wav" },
        { id: "life", src: "Assets/audio/life.wav" },
        { id: "explosion", src: "Assets/audio/explosion.mp3" },
        { id: "bulletSound", src: "Assets/audio/bullet.mp3" },
        { id: "button", src: "Assets/audio/button.mp3" },
        { id: "bulletOpen", src: "Assets/audio/buttonOpen.mp3" },
        { id: "bossEntry", src: "Assets/audio/bossEntry.mp3" },
        { id: "victory", src: "Assets/audio/victory.mp3" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    // function InitStats() {
    //     stats = new Stats();
    //     stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    //     document.body.appendChild(stats.dom);
    // }
    function Start() {
        console.log("Starting Application...");
        // initialize performance counting
        // InitStats();
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
        // stats.begin();
        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
        // stats.end();
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
            case config.Scene.CONTROL:
                currentScene = new scenes.ControlsScene();
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
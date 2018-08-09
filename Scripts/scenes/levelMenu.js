var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var LevelScene = /** @class */ (function (_super) {
        __extends(LevelScene, _super);
        // Public Properties
        // Constructor
        function LevelScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        LevelScene.prototype._menuButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        LevelScene.prototype.__levelOneButtonClick = function () {
            managers.Game.currentScene = config.Scene.LEVEL1;
        };
        LevelScene.prototype._levelTwoButtonClick = function () {
            managers.Game.currentScene = config.Scene.LEVEL2;
        };
        LevelScene.prototype._freeRunButtonClick = function () {
            managers.Game.currentScene = config.Scene.LEVEL3;
        };
        // Public Methods
        LevelScene.prototype.stopMusic = function () {
            this._gameTheme.stop();
        };
        // Initialize Game Variables and objects
        LevelScene.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("LEVELS", "60px", "Consolas", "#FAEFFF", 320, 50, true);
            this._levelOneButton = new objects.Button("levelOneButton", 320, 160);
            this._levelTwoButton = new objects.Button("levelTwoButton", 320, 230);
            this._levelThreeButton = new objects.Button("levelThreeButton", 320, 300);
            this._menuButton = new objects.Button("menuButton", 320, 370);
            this.Main();
        };
        LevelScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        LevelScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._welcomeLabel);
            // add the startButton to the scene
            this.addChild(this._levelOneButton);
            // add the instructionButton to the scene
            this.addChild(this._levelTwoButton);
            // add the exit Button to the scene
            this.addChild(this._levelThreeButton);
            // add the menu Button to the scene
            this.addChild(this._menuButton);
            this._levelOneButton.on("click", this.__levelOneButtonClick);
            this._levelTwoButton.on("click", this._levelTwoButtonClick);
            this._levelThreeButton.on("click", this._freeRunButtonClick);
            this._menuButton.on("click", this._menuButtonClick);
        };
        return LevelScene;
    }(objects.Scene));
    scenes.LevelScene = LevelScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelMenu.js.map
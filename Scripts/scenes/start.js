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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Public Properties
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        StartScene.prototype._startButtonClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
        };
        StartScene.prototype._helpButtonClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
        };
        StartScene.prototype._exitButtonClick = function () {
            window.close();
        };
        // Public Methods
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Mail Pilot", "60px", "Dock51", "#FFFF00", 320, 120, true);
            this._startButton = new objects.Button("startButton", 320, 220);
            this._helpButton = new objects.Button("helpButton", 320, 290);
            this._exitButton = new objects.Button("exitButton", 320, 360);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        StartScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._welcomeLabel);
            // add the startButton to the scene
            this.addChild(this._startButton);
            // add the helpButton to the scene
            this.addChild(this._helpButton);
            // add the exitButton to the scene
            this.addChild(this._exitButton);
            this._startButton.on("click", this._startButtonClick);
            this._helpButton.on("click", this._helpButtonClick);
            this._exitButton.on("click", this._exitButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map
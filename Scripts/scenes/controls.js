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
    var ControlsScene = /** @class */ (function (_super) {
        __extends(ControlsScene, _super);
        // Public Properties
        // Constructor
        function ControlsScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        ControlsScene.prototype._backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        // Public Methods
        // Initialize Game Variables and objects
        ControlsScene.prototype.Start = function () {
            // this._ocean = new objects.Ocean(this.assetManager);
            // this._instructionLabel = new objects.Label("INSTRUCTIONS", "60px", "Consolas", "#FAEFFF", 320, 50, true);
            // this._moveup = new objects.Label("1.Move the tanks to collect coins", "20px", "Consolas", "#FAEFFF", 320, 150, true);
            // this._movedown = new objects.Label("2.Avoid missile", "20px", "Consolas", "#FAEFFF", 320, 180, true);
            // this._moveleft = new objects.Label("3.Kill Enemies to get extra bonus", "20px", "Consolas", "#FAEFFF", 320, 210, true);
            // this._moveright = new objects.Label("4.Kill boss to complete levels", "20px", "Consolas", "#FAEFFF", 320, 240, true);
            // this._label1 = new objects.Label("5.Player one is slow moving, No missles harms it", "20px", "Consolas", "#FAEFFF", 320, 270, true);
            // this._label2 = new objects.Label("6.Player two moves fast, missles harms it", "20px", "Consolas", "#FAEFFF", 320, 300, true);
            this._backButton = new objects.Button("menuButton", 320, 350);
            this._scoreboard = new managers.ScoreBoard();
            this._helpPage = new objects.HelpPage(this.assetManager, "control", 0, 0);
            this.Main();
        };
        ControlsScene.prototype.Update = function () {
            // this._ocean.Update();
        };
        // This is where the fun happens
        ControlsScene.prototype.Main = function () {
            // add the ocean object
            // this.addChild(this._ocean);
            // // add the welcome label to the scene
            // this.addChild(this._instructionLabel);
            this.addChild(this._helpPage);
            // add the backButton to the scene
            this.addChild(this._backButton);
            //   // add the arrow keys  to the scene
            //   this.addChild(this._movedown);
            //   this.addChild(this._moveleft);
            //   this.addChild(this._moveright);
            //   this.addChild(this._moveup);
            //   this.addChild(this._label1);
            //   this.addChild(this._label2);
            // event listeners
            this._backButton.on("click", this._backButtonClick);
        };
        return ControlsScene;
    }(objects.Scene));
    scenes.ControlsScene = ControlsScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=controls.js.map
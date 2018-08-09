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
    var NextLevel = /** @class */ (function (_super) {
        __extends(NextLevel, _super);
        // Public Properties
        // Constructor
        function NextLevel() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        NextLevel.prototype._nextLevelButtonClick = function () {
            switch (managers.Game.HighScore) {
                case 200:
                    managers.Game.currentScene = config.Scene.LEVEL2;
                    break;
                case 400:
                    managers.Game.currentScene = config.Scene.LEVEL3;
                    break;
            }
        };
        // Public Methods
        // Initialize Game Variables and objects
        NextLevel.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._overLabel = new objects.Label("LEVEL COMPLETED", "60px", "Dock51", "#FFFF00", 320, 140, true);
            this._nextLevelButton = new objects.Button("nextLevelButton", 320, 340);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        NextLevel.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        NextLevel.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._overLabel);
            // add the backButton to the scene
            this.addChild(this._nextLevelButton);
            // add scoreboard to the scene
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = managers.Game.HighScore;
            // event listeners
            this._nextLevelButton.on("click", this._nextLevelButtonClick);
        };
        return NextLevel;
    }(objects.Scene));
    scenes.NextLevel = NextLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=nextLevel.js.map
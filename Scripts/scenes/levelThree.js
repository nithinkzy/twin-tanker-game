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
    var LevelThree = /** @class */ (function (_super) {
        __extends(LevelThree, _super);
        // Public Properties
        // Constructor
        function LevelThree() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        LevelThree.prototype.Start = function () {
            this._ocean = new objects.Ocean(3);
            this._plane = new objects.Plane();
            managers.Game.plane = this._plane;
            this._tankeOne = new objects.tankOne();
            managers.Game.tank2 = this._tankeOne;
            // make a reference to the bullet manager in the game manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManger = this._bulletManager;
            // create an enemy object
            this._enemy = new objects.Enemy();
            this._boss = new objects.Boss();
            this._coin = new objects.Coin();
            this._island = new objects.Island();
            // instantiate the cloud array
            this._clouds = new Array();
            this._cloudNum = 6;
            // loop and add each cloud to the array
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1; // play forever
            this._engineSound.volume = 0.1;
            // create the scoreboard UI for the Scene
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this.Main();
        };
        // triggered every frame
        LevelThree.prototype.Update = function () {
            var _this = this;
            //console.log("Num Objects: " + this.numChildren);
            // if((managers.Game.HighScore >= 200)&& (managers.Game.HighScore <= 300)){
            //     this._engineSound.stop();
            //     managers.Game.currentScene = config.Scene.NEXTLEVEL;
            // }
            this._ocean.Update();
            this._plane.Update();
            this._tankeOne.Update();
            this._enemy.Update();
            this._boss.Update();
            this._bulletManager.Update();
            this._coin.x = this._island.x;
            this._coin.y = this._island.y;
            this._coin.Update();
            this._island.Update();
            // check collision between tank 1 and coin
            managers.Collision.Check(this._plane, this._coin);
            // check collision between tank 2 and coin
            managers.Collision.Check(this._tankeOne, this._coin);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                // check collision between plane and current cloud
                managers.Collision.Check(_this._plane, cloud);
                // check collision between tank 2  and current cloud
                // managers.Collision.Check(this._tankeOne, cloud);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._enemy);
            });
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(bullet, _this._boss);
            });
            // if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                managers.Game.currentScene = config.Scene.OVER;
            }
            if (this._scoreBoard.Score > 800) {
                this._overLabel = new objects.Label("Boss coming !", "40px", "Dock51", "#FF6347", 320, 60, true);
                this.addChild(this._overLabel);
                this.addChild(this._boss);
            }
        };
        // This is where the fun happens
        LevelThree.prototype.Main = function () {
            var _this = this;
            // add the ocean to the scene
            this.addChild(this._ocean);
            // add the island to the scene
            this.addChild(this._island);
            // add the coin to the scene
            this.addChild(this._coin);
            this.addChild(this._tankeOne);
            // add the plane to the scene
            this.addChild(this._plane);
            this.addChild(this._plane.planeFlash); // add the plane flashing effect
            // add the enemy plane to the scene
            this.addChild(this._enemy);
            // add the bullets to the scene
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // add clouds to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add scoreboard labels to the scene
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return LevelThree;
    }(objects.Scene));
    scenes.LevelThree = LevelThree;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelThree.js.map
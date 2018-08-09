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
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy() {
            var _this = _super.call(this, "enemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.planeFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Enemy.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash();
            this.planeFlash.alpha = 1;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            this.x = 100;
            this.y = 200;
            this._bulletSpawn = new math.Vec2();
        };
        // updates the game object every frame
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            this.BulletFire();
        };
        // reset the objects location to some value
        Enemy.prototype.Reset = function () {
        };
        // move the object to some new location
        Enemy.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            var x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            var direction = Math.floor((Math.random() * 4) + 1);
            var length = Math.floor((Math.random() * 100) + 1);
            var ticker = createjs.Ticker.getTicks();
            switch (direction) {
                case 1:
                    if (ticker % 10 == 0)
                        this.y -= length;
                    break;
                case 2:
                    if (ticker % 10 == 0)
                        this.y += length;
                    break;
                case 3:
                    if (ticker % 10 == 0)
                        this.x -= length;
                    break;
                case 4:
                    if (ticker % 10 == 0)
                        this.x += length;
                    break;
            }
            this.planeFlash.x = this.x;
            this.planeFlash.y = this.y;
        };
        // check to see if some boundary has been passed
        Enemy.prototype.CheckBounds = function () {
            // right boundary
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= 480 - this.halfWidth) {
                this.y = 480 - this.halfWidth;
            }
            // left boundary
            if (this.y <= this.halfWidth) {
                this.y = this.halfWidth;
            }
        };
        Enemy.prototype.BulletFire = function () {
            // check if Plane is "alive"
            if (this.alpha = 1) {
                var ticker = createjs.Ticker.getTicks();
                if ((managers.Game.keyboardManager.fire) && (ticker % 10 == 0)) {
                    this._bulletSpawn = new math.Vec2(this.x, this.y - this.halfHeight);
                    var currentBullet = managers.Game.bulletManger.CurrentBullet;
                    var bullet = managers.Game.bulletManger.Bullets[currentBullet];
                    bullet.x = this._bulletSpawn.x;
                    bullet.y = this._bulletSpawn.y;
                    managers.Game.bulletManger.CurrentBullet++;
                    if (managers.Game.bulletManger.CurrentBullet > 49) {
                        managers.Game.bulletManger.CurrentBullet = 0;
                    }
                    createjs.Sound.play("bulletSound");
                }
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
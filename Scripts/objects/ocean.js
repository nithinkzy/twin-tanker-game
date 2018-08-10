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
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // Constructor
        function Ocean(number) {
            var _this = this;
            console.log(number);
            if (number == 1) {
                _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
                _this.Start();
            }
            else if (number == 2) {
                _this = _super.call(this, managers.Game.assetManager.getResult("level2")) || this;
                _this.Start();
                console.log("level 2");
            }
            else if (number == 3) {
                _this = _super.call(this, managers.Game.assetManager.getResult("level3")) || this;
                _this.Start();
            }
            else if (number == 0) {
                _this = _super.call(this, managers.Game.assetManager.getResult("bg")) || this;
                _this.Start();
            }
            else {
                _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
                _this.Start();
            }
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Ocean.prototype._reset = function () {
            //this.y = -960;
        };
        // move the object to some new location
        Ocean.prototype._move = function () {
            //this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Ocean.prototype._checkBounds = function () {
            // if(this.y >= 0) {
            //this._reset();
            // }
        };
        // public methods
        // Initializes variables and creates new objects
        Ocean.prototype.Start = function () {
            //  this._dy = 5;
            // this._reset();
        };
        // updates the game object every frame
        Ocean.prototype.Update = function () {
            // this._move();
            // this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
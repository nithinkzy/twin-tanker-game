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
    var HelpPage = /** @class */ (function (_super) {
        __extends(HelpPage, _super);
        // Private Instance Variables
        // Public Properties
        // Constructor
        function HelpPage(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            //this.regX = this.getBounds().width * 0.5;
            // this.regY = this.getBounds().height * 0.5;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return HelpPage;
    }(createjs.Bitmap));
    objects.HelpPage = HelpPage;
})(objects || (objects = {}));
//# sourceMappingURL=helpPage.js.map
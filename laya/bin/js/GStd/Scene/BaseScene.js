var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GStd;
(function (GStd) {
    var BaseScene = /** @class */ (function (_super) {
        __extends(BaseScene, _super);
        function BaseScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseScene.prototype.enter = function () {
            this.onEnter();
        };
        BaseScene.prototype.leave = function () {
            this.onLeave();
        };
        BaseScene.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.onDestroy();
        };
        BaseScene.prototype.onLoad = function () { };
        BaseScene.prototype.onDestroy = function () { };
        BaseScene.prototype.onEnter = function () { };
        BaseScene.prototype.onLeave = function () { };
        return BaseScene;
    }(Laya.Scene));
    GStd.BaseScene = BaseScene;
})(GStd || (GStd = {}));
//# sourceMappingURL=BaseScene.js.map
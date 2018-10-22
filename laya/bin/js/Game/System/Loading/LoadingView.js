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
var Game;
(function (Game) {
    var LoadingView = /** @class */ (function (_super) {
        __extends(LoadingView, _super);
        function LoadingView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layout = "res/ui/Loading.json";
            _this.atlas = "res/ui/loading.atlas";
            return _this;
        }
        LoadingView.prototype.onLoad = function () {
            this.progressValue = 0;
            this.progressTargetValue = -1;
        };
        LoadingView.prototype.SetProgress = function (progress) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.progressTargetValue = progress * 100;
                if (_this.runningTween != null) {
                    _this.runningTween.clear();
                }
                var duration = 1000;
                _this.runningTween = Laya.Tween.to(_this, { progressValue: _this.progressTargetValue }, duration, null, Laya.Handler.create(_this, function () {
                    resolve();
                }), null, true);
            });
        };
        LoadingView.prototype.update = function () {
            if (!this.visible ||
                this.progressTargetValue == -1)
                return;
            if (this.progressValue >= 100) {
                this.progressTargetValue = -1;
                this.hide(GStd.ViewEffect.Alpha);
                return;
            }
            this.progress.value = this.progressValue / 100;
        };
        return LoadingView;
    }(GStd.BaseView));
    Game.LoadingView = LoadingView;
    GStd.View.register("loading", LoadingView);
})(Game || (Game = {}));
//# sourceMappingURL=LoadingView.js.map
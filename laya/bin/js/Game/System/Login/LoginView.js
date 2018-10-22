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
    var LoginView = /** @class */ (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layout = "res/ui/Login.json";
            _this.atlas = "res/ui/loading.atlas";
            return _this;
        }
        return LoginView;
    }(GStd.BaseView));
    Game.LoginView = LoginView;
    GStd.View.register("login", LoginView);
})(Game || (Game = {}));
//# sourceMappingURL=LoginView.js.map
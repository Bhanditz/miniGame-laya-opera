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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var GStd;
(function (GStd) {
    var ViewEffect;
    (function (ViewEffect) {
        ViewEffect[ViewEffect["None"] = 1] = "None";
        ViewEffect[ViewEffect["Scale"] = 2] = "Scale";
        ViewEffect[ViewEffect["Alpha"] = 3] = "Alpha";
        ViewEffect[ViewEffect["MoveLeft"] = 11] = "MoveLeft";
        ViewEffect[ViewEffect["MoveRight"] = 12] = "MoveRight";
        ViewEffect[ViewEffect["MoveUp"] = 13] = "MoveUp";
        ViewEffect[ViewEffect["MoveDown"] = 14] = "MoveDown";
    })(ViewEffect = GStd.ViewEffect || (GStd.ViewEffect = {}));
    var BaseView = /** @class */ (function (_super) {
        __extends(BaseView, _super);
        function BaseView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseView.prototype.load = function () {
            return __awaiter(this, void 0, void 0, function () {
                var layoutData, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, GStd.Resource.load([this.layout, this.atlas])];
                        case 1:
                            _a.sent();
                            layoutData = GStd.Resource.getRes(this.layout);
                            this.createView(layoutData);
                            // 自适应
                            if (GStd.Device.isIphoneX()) {
                                this.y = 50;
                                this.height = Laya.stage.height - 100;
                            }
                            else {
                                this.y = 0;
                                this.height = Laya.stage.height;
                            }
                            this.width = Laya.stage.width;
                            this.anchorX = 0.5;
                            this.anchorY = 0.5;
                            //
                            this.onLoad();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            console.error("[View]load fail ", e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        BaseView.prototype.open = function (effect) {
            if (effect === void 0) { effect = ViewEffect.None; }
            _super.prototype.show.call(this, false, false);
            this.visible = true;
            switch (effect) {
                case ViewEffect.Alpha:
                    {
                        this.alpha = 0;
                        GStd.Tween.to(this, { alpha: 1 }, 500);
                    }
                    break;
                case ViewEffect.MoveLeft:
                    {
                        this.x = 720;
                        GStd.Tween.to(this, { x: 0 }, 500, Laya.Ease.backOut);
                    }
                    break;
                case ViewEffect.MoveRight:
                    {
                        this.x = -720;
                        GStd.Tween.to(this, { x: 0 }, 500, Laya.Ease.backOut);
                    }
                    break;
                case ViewEffect.MoveUp:
                    {
                        this.y = 1280;
                        GStd.Tween.to(this, { y: 0 }, 500, Laya.Ease.backOut);
                    }
                    break;
                case ViewEffect.MoveDown:
                    {
                        this.y = -1280;
                        GStd.Tween.to(this, { y: 0 }, 500, Laya.Ease.backOut);
                    }
                    break;
                case ViewEffect.Scale:
                    {
                        this.scale(0, 0);
                        GStd.Tween.to(this, { scaleX: 1, scaleY: 1 }, 500);
                    }
                    break;
            }
        };
        BaseView.prototype.hide = function (effect) {
            var _this = this;
            if (effect === void 0) { effect = ViewEffect.None; }
            switch (effect) {
                case ViewEffect.Alpha:
                    {
                        GStd.Tween.to(this, { alpha: 0 }, 500)
                            .then(function () {
                            _super.prototype.close.call(_this, null, false);
                        });
                    }
                    break;
                case ViewEffect.MoveRight:
                    {
                        GStd.Tween.to(this, { x: 720 }, 500, Laya.Ease.backIn)
                            .then(function () {
                            _super.prototype.close.call(_this, null, false);
                        });
                    }
                    break;
                case ViewEffect.MoveLeft:
                    {
                        GStd.Tween.to(this, { x: -720 }, 500, Laya.Ease.backIn)
                            .then(function () {
                            _super.prototype.close.call(_this, null, false);
                        });
                    }
                    break;
                case ViewEffect.MoveUp:
                    {
                        GStd.Tween.to(this, { y: -1280 }, 500, Laya.Ease.backIn)
                            .then(function () {
                            _super.prototype.close.call(_this, null, false);
                        });
                    }
                    break;
                case ViewEffect.MoveDown:
                    {
                        GStd.Tween.to(this, { y: 1280 }, 500, Laya.Ease.backIn)
                            .then(function () {
                            _super.prototype.close.call(_this, null, false);
                        });
                    }
                    break;
                case ViewEffect.Scale:
                    {
                        GStd.Tween.to(this, { scaleX: 0, scaleY: 0 }, 500)
                            .then(function () {
                            _super.prototype.close.call(_this, null, false);
                        });
                    }
                    break;
            }
        };
        BaseView.prototype.onClosed = function () {
            _super.prototype.onClosed.call(this);
            this.visible = false;
            this.time2Destroy = Laya.timer.currTimer + 10000;
        };
        BaseView.prototype.onLoad = function () {
        };
        BaseView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.onDestroy();
        };
        BaseView.prototype.onDestroy = function () {
        };
        BaseView.prototype.update = function (delta) {
        };
        return BaseView;
    }(Laya.Dialog));
    GStd.BaseView = BaseView;
})(GStd || (GStd = {}));
//# sourceMappingURL=BaseView.js.map
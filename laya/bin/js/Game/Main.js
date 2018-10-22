// 程序入口
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
var Main = /** @class */ (function () {
    function Main() {
        console.log("[Main]start");
        this._init();
    }
    Main.prototype._init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // 
                        Laya.MiniAdpter.init();
                        Laya3D.init(720, 1280, true);
                        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
                        Laya.Stat.show();
                        // 
                        GStd.Device.setup();
                        GStd.Scene.setup();
                        GStd.View.setup([
                            Common.View.Layer.Background,
                            Common.View.Layer.Normal,
                            Common.View.Layer.Popup,
                            Common.View.Layer.Overlay
                        ]);
                        return [4 /*yield*/, GStd.View.show("loading", Common.View.Layer.Overlay)];
                    case 1:
                        loadingView = _a.sent();
                        loadingView.SetProgress(1);
                        // update
                        // preload
                        // frameloop
                        Laya.timer.frameLoop(1, this, this._update);
                        // enter first scene
                        this._enterGame();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error("[Main]init fail ", e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype._enterGame = function () {
        GStd.Scene.change("fight");
    };
    Main.prototype._update = function () {
        var delta = Laya.timer.delta;
        GStd.View.update(delta);
        GStd.Scene.update(delta);
    };
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map
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
    var View = /** @class */ (function () {
        function View() {
        }
        View.register = function (id, viewType) {
            console.log("[view]register ", id);
            this._viewTypeMap[id] = viewType;
        };
        View.setup = function (layers) {
            this._root = new Laya.View();
            Laya.stage.addChild(this._root);
            if (layers) {
                for (var i in layers) {
                    var layer = new Laya.View();
                    this._root.addChild(layer);
                    var id = layers[i];
                    this._layers[id] = layer;
                }
            }
        };
        View.show = function (id, layer, effect) {
            if (layer === void 0) { layer = "normal"; }
            if (effect === void 0) { effect = GStd.ViewEffect.None; }
            return __awaiter(this, void 0, void 0, function () {
                var i, view_1, view, layerObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("[view]show ", id);
                            // loaded
                            if (this._actives[id]) {
                                console.warn("view " + id + " already show");
                                return [2 /*return*/, this._actives[id]];
                            }
                            for (i = 0; i < this._hides.length; i++) {
                                view_1 = this._hides[i];
                                if (view_1.id == id) {
                                    this._hides.slice(i);
                                    view_1.open(effect);
                                    this._actives[id] = view_1;
                                    return [2 /*return*/, view_1];
                                }
                            }
                            view = new this._viewTypeMap[id]();
                            if (!view) {
                                console.error("[View]show " + id + " fail, not registered");
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, view.load()];
                        case 1:
                            _a.sent();
                            layerObj = this._layers[layer];
                            if (!layerObj) {
                                console.warn("[view]layer not found ", layer);
                                layerObj = this._root;
                            }
                            layerObj.addChild(view);
                            // call show function
                            view.open(effect);
                            this._actives[id] = view;
                            return [2 /*return*/, view];
                    }
                });
            });
        };
        View.close = function (id, effect) {
            if (effect === void 0) { effect = GStd.ViewEffect.None; }
            console.log("[view]close ", id);
            var view = this._actives[id];
            if (!view) {
                console.warn("[view]view not found ", id);
                return;
            }
            view.hide(effect);
            this._hides.push(view);
            delete this._actives[id];
        };
        View.update = function (delta) {
            var curTime = Laya.timer.currTimer;
            // update actives
            for (var id in this._actives) {
                var view = this._actives[id];
                view.update(delta);
            }
            // check destroy
            for (var i = this._hides.length - 1; i >= 0; i--) {
                var view = this._hides[i];
                if (curTime > view.time2Destroy) {
                    console.log("[view]destroy ", view.id);
                    view.destroy();
                    this._hides.slice(i);
                }
            }
        };
        View._viewTypeMap = {};
        View._actives = {};
        View._hides = [];
        View._layers = {};
        return View;
    }());
    GStd.View = View;
})(GStd || (GStd = {}));
//# sourceMappingURL=View.js.map
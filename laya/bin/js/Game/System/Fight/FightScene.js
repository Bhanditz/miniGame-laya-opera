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
    var FightScene = /** @class */ (function (_super) {
        __extends(FightScene, _super);
        function FightScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FightScene;
    }(GStd.BaseScene));
    Game.FightScene = FightScene;
    GStd.Scene.register("fight", {
        url: "res/3d/LayaScene_Catch_ball/Catch_ball.ls",
        type: FightScene
    });
})(Game || (Game = {}));
//# sourceMappingURL=FightScene.js.map
// interface Laya.Tween{
//     async_to():Promise<any>
// }
// Laya.Tween.prototype.async_to = function(){
//     return new Promise((resolve, reject) => {
//     });
// }
var GStd;
(function (GStd) {
    var Tween = /** @class */ (function () {
        function Tween() {
        }
        Tween.to = function (target, props, duration, ease, 
        // complete?:Laya.Handler, 
        delay, coverBefore, autoRecover) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var complete = Laya.Handler.create(_this, function () {
                    resolve();
                });
                Laya.Tween.to(target, props, duration, ease, complete, delay, coverBefore, autoRecover);
            });
        };
        return Tween;
    }());
    GStd.Tween = Tween;
})(GStd || (GStd = {}));
//# sourceMappingURL=Tween.js.map
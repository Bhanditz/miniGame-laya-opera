var GStd;
(function (GStd) {
    var Resource = /** @class */ (function () {
        function Resource() {
        }
        Resource.load = function (url, progress, type, priority, cache, group, ignoreCache) {
            var _this = this;
            console.log("[res]load ", url);
            return new Promise(function (resolve, reject) {
                Laya.loader.load(url, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }));
            });
        };
        Resource.load3D = function (url, 
        // complete?: Handler, 
        progress, clas, params, priority, cache, group) {
            var _this = this;
            console.log("[res]load 3d ", url);
            return new Promise(function (resolve, reject) {
                Laya.loader.create(url, Laya.Handler.create(_this, function () {
                    resolve();
                }), progress, clas, params, priority, cache, group);
            });
        };
        Resource.getRes = function (url) {
            return Laya.loader.getRes(url);
        };
        return Resource;
    }());
    GStd.Resource = Resource;
})(GStd || (GStd = {}));
//# sourceMappingURL=Resource.js.map
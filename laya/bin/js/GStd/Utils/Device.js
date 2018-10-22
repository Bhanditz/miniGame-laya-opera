var GStd;
(function (GStd) {
    var Device = /** @class */ (function () {
        function Device() {
        }
        Device.setup = function () {
        };
        Device.isIphoneX = function () {
            // return Mgr.Platform.wxSystemInfo && 
            //     (Mgr.Platform.wxSystemInfo.model as string).indexOf("iPhone X") != -1;
            return false;
        };
        return Device;
    }());
    GStd.Device = Device;
})(GStd || (GStd = {}));
//# sourceMappingURL=Device.js.map
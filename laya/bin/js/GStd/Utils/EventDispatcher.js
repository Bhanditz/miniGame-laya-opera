var Utils;
(function (Utils) {
    var EventDispatcher = /** @class */ (function () {
        function EventDispatcher() {
        }
        EventDispatcher.addListener = function (type, caller, method, args, once) {
            if (once === void 0) { once = false; }
            var handler = Laya.Handler.create(caller, method, args, once);
            var handlers = this._events[type];
            if (handlers == null) {
                handlers = new Array();
                this._events[type] = handlers;
            }
            if (handlers.indexOf(handler) != -1) {
                console.warn("[Event]already add ", type);
                return;
            }
            this._events[type].push(handler);
        };
        EventDispatcher.fire = function (type, data) {
            var handlers = this._events[type];
            if (handlers) {
                for (var i in handlers) {
                    if (handlers[i])
                        handlers[i].runWith(data);
                }
            }
        };
        EventDispatcher._events = {};
        return EventDispatcher;
    }());
    Utils.EventDispatcher = EventDispatcher;
})(Utils || (Utils = {}));
//# sourceMappingURL=EventDispatcher.js.map
namespace Utils{
    export class EventDispatcher{
        private static _events:{[type:string]:Array<Laya.Handler>} = {}
        public static addListener(type:string, caller:any, method:Function, args?:any[], once:boolean=false){
            let handler = Laya.Handler.create(caller, method, args, once)
            let handlers =this._events[type];
            if (handlers == null){
                handlers = new Array<Laya.Handler>();
                this._events[type] = handlers;
            } 

            if (handlers.indexOf(handler) != -1){
                console.warn("[Event]already add ", type);
                return;
            }
            this._events[type].push(handler);
        }

        public static fire(type:string, data?:any){
            let handlers = this._events[type];
            if (handlers){
                for(let i in handlers){
                    if (handlers[i]) handlers[i].runWith(data);
                }
            }
        }
    }
}
namespace GStd{
    export class View{
        private static _viewTypeMap:{[id:string]:any} = {};
        private static _root:Laya.View;
        private static _actives:{[id:string]:BaseView} = {};
        private static _hides:BaseView[] = [];
        private static _layers:{[id:string]:Laya.View} = {};
        
        public static register(id:string, viewType:any){
            console.log("[view]register ", id);
            this._viewTypeMap[id] = viewType;
        }

        public static setup(layers:string[]){
            this._root = new Laya.View();
            Laya.stage.addChild(this._root);

            if (layers){
                for(let i in layers){
                    let layer = new Laya.View();
                    this._root.addChild(layer);

                    let id = layers[i];
                    this._layers[id] = layer;
                }
            }
        }
        
        public static async show(id:string, layer:string="normal", effect:ViewEffect=ViewEffect.None){
            console.log("[view]show ", id);

            // loaded
            if (this._actives[id]){
                console.warn("view " + id + " already show");
                return this._actives[id];
            }

            for (let i=0; i<this._hides.length; i++){
                let view = this._hides[i];
                if (view.id == id){
                    this._hides.slice(i);
                    view.open(effect);
                    this._actives[id] = view;
                    return view;
                }
            }

            // to load
            let view = new this._viewTypeMap[id]();
            if (!view) {
                console.error("[View]show " + id + " fail, not registered");
                return;
            }
            await view.load();

            // add to child
            let layerObj = this._layers[layer];
            if (!layerObj){
                console.warn("[view]layer not found ", layer);
                layerObj = this._root;
            }
            layerObj.addChild(view);

            // call show function
            view.open(effect);

            this._actives[id] = view;

            return view;
        }

        public static close(id:string, effect:ViewEffect=ViewEffect.None){
            console.log("[view]close ", id);
            let view = this._actives[id];
            if (!view){
                console.warn("[view]view not found ", id);
                return;
            }

            view.hide(effect);

            this._hides.push(view);
            delete this._actives[id];
        }

        public static update(delta:number){
            let curTime = Laya.timer.currTimer;
            // update actives
            for (let id in this._actives){
                let view = this._actives[id];
                view.update(delta);
            }

            // check destroy
            for (let i=this._hides.length-1; i>=0; i--){
                let view = this._hides[i];
                if (curTime > view.time2Destroy){
                    console.log("[view]destroy ", view.id);
                    view.destroy();
                    this._hides.slice(i);
                }
            }
        }
    }
}
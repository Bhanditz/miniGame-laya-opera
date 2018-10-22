namespace GStd{
    export interface SceneTypeInfo{
        url:string;
        type:any;
    }

    export class Scene{
        private static _sceneTypeMap:{[id:string]:SceneTypeInfo} = {}
        private static _curScene:BaseScene;

        public static register(id:string, sceneType:SceneTypeInfo){
            console.log("[scene]register ", id);
            this._sceneTypeMap[id] = sceneType;
        }       

        public static setup(){
        }

        public static update(delta:number){
        }

        public static async change(id:string, progress?:Laya.Handler){
            console.log("[scnee]change scene to ", id);
            let typeInfo = this._sceneTypeMap[id];
            if (!typeInfo){
                console.error("[scene]change fail, not eixst ", id);
                return;
            }

            // leave last scene
            if (this._curScene){
                
            }
            if ( this._curScene.id == id){
                console.warn("[scene]change to same scene, id = ", id);
                return;
            }

            if (this._curScene){
                console.log("[scene]leave last scene ", this._curScene.id);
                this._curScene.leave();
                this._curScene.destroy();
                this._curScene = null;
            }

            await Resource.load3D(typeInfo.url, progress);

            this._curScene = Resource.getRes(typeInfo.url) as BaseScene
            this._curScene.onLoad();
            this._curScene.enter();
        }
    }
}
namespace GStd{
    export class Resource{
        public static load(
            url: any, 
            progress?: Laya.Handler, 
            type?: string, 
            priority?: number, 
            cache?: boolean, 
            group?: string, 
            ignoreCache?: boolean):Promise<any>{
            console.log("[res]load ", url);
            return new Promise((resolve, reject) => {
                Laya.loader.load(url, Laya.Handler.create(this, function(res){
                    resolve(res);
                }));
            });
        }

        public static load3D(
            url: any, 
            // complete?: Handler, 
            progress?: Laya.Handler, 
            clas?: any, 
            params?: Array<any>, 
            priority?: number, 
            cache?: boolean, 
            group?: string){
            console.log("[res]load 3d ", url);
            return new Promise((resolve, reject) => {
                Laya.loader.create(url, Laya.Handler.create(this, function(){
                    resolve();
                }), progress, clas, params, priority, cache, group);
            });
        }

        public static getRes(url){
            return Laya.loader.getRes(url);
        }
    }
}
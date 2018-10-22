// interface Laya.Tween{
//     async_to():Promise<any>
// }

// Laya.Tween.prototype.async_to = function(){
//     return new Promise((resolve, reject) => {

//     });
// }

namespace GStd{
    export class Tween{
        public static to(
            target:any,  
            props:any, 
            duration:number, 
            ease?:Function, 
            // complete?:Laya.Handler, 
            delay?:number, 
            coverBefore?:boolean, 
            autoRecover?:boolean):Promise<any>{
                return new Promise((resolve, reject) => {
                    let complete = Laya.Handler.create(this, function(){
                        resolve();
                    });
                    Laya.Tween.to(target, props, duration, ease, complete, delay, coverBefore, autoRecover);
                });
        }
    }
}
namespace GStd{
    export enum ViewEffect{
        None=1,
        Scale=2,
        Alpha=3,
        MoveLeft=11,
        MoveRight=12,
        MoveUp=13,
        MoveDown=14,
    }

    export class BaseView extends Laya.Dialog{
        public id:string;
        public layout:string;
        public atlas:string;

        public time2Destroy:number;

        public async load(){
            // console.log("[baseView]to load ", this.layout, this.atlas);
            try {
                await Resource.load([this.layout,this.atlas]);
                let layoutData = Resource.getRes(this.layout);
                this.createView(layoutData);

                // 自适应
                if (Device.isIphoneX()){
                    this.y = 50;
                    this.height = Laya.stage.height-100;
                } else {
                    this.y = 0;
                    this.height = Laya.stage.height;
                }
                this.width = Laya.stage.width;
                this.anchorX = 0.5;
                this.anchorY = 0.5;

                //
                this.onLoad();
            } catch(e){
                console.error("[View]load fail ", e);
            }
        }

        public open(effect:ViewEffect = ViewEffect.None){
            super.show(false, false)
            this.visible = true;

            switch(effect){
                case ViewEffect.Alpha:{
                    this.alpha = 0;
                    GStd.Tween.to(this, {alpha:1}, 500);
                }break;
                case ViewEffect.MoveLeft:{
                    this.x = 720;
                    GStd.Tween.to(this, {x:0}, 500, Laya.Ease.backOut);
                }break;
                case ViewEffect.MoveRight:{
                    this.x = -720;
                    GStd.Tween.to(this, {x:0}, 500, Laya.Ease.backOut);
                }break;
                case ViewEffect.MoveUp:{
                    this.y = 1280;
                    GStd.Tween.to(this, {y:0}, 500, Laya.Ease.backOut);
                }break;
                case ViewEffect.MoveDown:{
                    this.y = -1280;
                    GStd.Tween.to(this, {y:0}, 500, Laya.Ease.backOut);
                }break;
                case ViewEffect.Scale:{
                    this.scale(0,0);
                    GStd.Tween.to(this, {scaleX:1, scaleY:1}, 500);
                }break;
            }
        }

        public hide(effect:ViewEffect = ViewEffect.None){
            switch(effect){
                case ViewEffect.Alpha:{
                    GStd.Tween.to(this, {alpha:0}, 500)
                    .then(() => {
                        super.close(null, false);
                    });
                }break;
                case ViewEffect.MoveRight:{
                    GStd.Tween.to(this, {x:720}, 500, Laya.Ease.backIn)
                    .then(() => {
                        super.close(null, false);
                    });
                }break;
                case ViewEffect.MoveLeft:{
                    GStd.Tween.to(this, {x:-720}, 500, Laya.Ease.backIn)
                    .then(() => {
                        super.close(null, false);
                    });
                }break;
                case ViewEffect.MoveUp:{
                    GStd.Tween.to(this, {y:-1280}, 500, Laya.Ease.backIn)
                    .then(() => {
                        super.close(null, false);
                    });
                }break;
                case ViewEffect.MoveDown:{
                    GStd.Tween.to(this, {y:1280}, 500, Laya.Ease.backIn)
                    .then(() => {
                        super.close(null, false);
                    });
                }break;
                case ViewEffect.Scale:{
                    GStd.Tween.to(this, {scaleX:0, scaleY:0}, 500)
                    .then(() => {
                        super.close(null, false);
                    });
                }break;
            }
        }

        public onClosed(){
            super.onClosed();

            this.visible = false;
            this.time2Destroy = Laya.timer.currTimer+10000;
        }

        protected onLoad(){

        }

        public destroy(){
            super.destroy();
            this.onDestroy();
        }

        protected onDestroy(){
            
        }

        public update(delta:number){

        }

        // onOpened,onClosed
    }
}
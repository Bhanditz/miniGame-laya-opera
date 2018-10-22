namespace Game{
    export class LoadingView extends GStd.BaseView{
        public id:"loading";
        public layout = "res/ui/Loading.json";
        public atlas = "res/ui/loading.atlas";

        private progressValue:number;
        private progressTargetValue:number;
        private progress:Laya.ProgressBar;
        private runningTween:Laya.Tween;

        protected onLoad(){
            this.progressValue = 0;
            this.progressTargetValue = -1;
        }

        public SetProgress(progress:number):Promise<any>{
            return new Promise((resolve, reject) => {
                this.progressTargetValue = progress * 100;

                if (this.runningTween != null){
                    this.runningTween.clear();
                }

                let duration = 1000;
                this.runningTween = Laya.Tween.to(this, {progressValue:this.progressTargetValue}, duration, null, Laya.Handler.create(
                    this, function(){
                        resolve();
                    }
                ), null, true);
            });
            
        }

        public update(){
            if (!this.visible ||
                this.progressTargetValue == -1)
                return;

            if (this.progressValue >= 100)
            {
                this.progressTargetValue = -1;
                this.hide(GStd.ViewEffect.Alpha);
                return;
            }

            this.progress.value = this.progressValue / 100;
        }
    }

    GStd.View.register("loading", LoadingView);
}
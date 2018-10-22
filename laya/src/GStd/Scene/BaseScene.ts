namespace GStd{
    export class BaseScene extends Laya.Scene{
        public id:string;

        public enter(){
            this.onEnter();
        }

        public leave(){
            this.onLeave();
        }

        public destroy(){
            super.destroy();
            this.onDestroy();
        }

        public onLoad(){}
        public onDestroy(){}
        public onEnter(){}
        public onLeave(){}
    }
}
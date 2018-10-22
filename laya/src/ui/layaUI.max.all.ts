
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class LoadingUI extends View {
		public bg:Laya.Button;
		public imgDefaultIcon:Laya.Image;
		public progress:Laya.ProgressBar;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("Loading");

        }

    }
}

module ui {
    export class LoginUI extends Dialog {

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.loadUI("Login");

        }

    }
}

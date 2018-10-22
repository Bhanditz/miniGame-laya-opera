// 程序入口

class Main {
    constructor() {
        console.log("[Main]start");
        this._init();
    }

    private async _init(){
        try {
            // 
            Laya.MiniAdpter.init();
            Laya3D.init(720, 1280, true);

            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;

            Laya.Stat.show();

            // 
            GStd.Device.setup();

            GStd.Scene.setup();
            GStd.View.setup([
                Common.View.Layer.Background,
                Common.View.Layer.Normal,
                Common.View.Layer.Popup,
                Common.View.Layer.Overlay
                ]);

            // show loading
            let loadingView = await GStd.View.show("loading", Common.View.Layer.Overlay) as Game.LoadingView;
            loadingView.SetProgress(1);

            // update

            // preload

            // frameloop
            Laya.timer.frameLoop(1, this, this._update);

            // enter first scene
            this._enterGame();
        } catch (e){
            console.error("[Main]init fail ", e);
        }
    }

    private _enterGame(){
        GStd.Scene.change("fight");
    }

    private _update(){
        let delta = Laya.timer.delta;

        GStd.View.update(delta);
        GStd.Scene.update(delta);
    }
}
new Main();
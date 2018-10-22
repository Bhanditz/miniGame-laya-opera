namespace Game{
    export class FightScene extends GStd.BaseScene{
        public id:"fight"
    }

    GStd.Scene.register(
        "fight", 
        {
            url:"res/3d/LayaScene_Catch_ball/Catch_ball.ls",
            type:FightScene
        });
}
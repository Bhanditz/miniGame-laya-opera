namespace Game{
    export class LoginView extends GStd.BaseView{   
        public id:"login";
        public layout = "res/ui/Login.json";
        public atlas = "res/ui/loading.atlas";
    }

    GStd.View.register("login", LoginView);
}
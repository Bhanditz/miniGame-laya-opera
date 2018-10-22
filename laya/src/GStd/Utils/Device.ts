namespace GStd{
    export class Device{
        public static setup(){

        }

        public static isIphoneX(){
            // return Mgr.Platform.wxSystemInfo && 
            //     (Mgr.Platform.wxSystemInfo.model as string).indexOf("iPhone X") != -1;

            return false;
        }
    }
}
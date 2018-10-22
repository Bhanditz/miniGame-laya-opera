interface String{
    format(args:string[]):string;
    strlen():number;
}

String.prototype.format = function(args){
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
　　　　　　　　　　　　var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

String.prototype.strlen = function(){
    let ret=0;
    for (let i=0; i<this.length; i++){
        let c = this.charCodeAt(i);
        if (c >= 0 && c <= 128)
            ret++;
        else
            ret += 2;
    }
    return ret;
}
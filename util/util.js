/**
 * Created by jessic on 2016/10/18.
 */
module.exports={
    extend:function(target,source,flag){
        for(var key in source){
            if(source.hasOwnProperty(key)){
                flag?
                    (target[key]=source[key]):
                    (target[key]===void 0&&(target[key]=source[key]));
            }
        }
        return target;
    },
    hasClass:function(obj,classOfName){
        return obj.className.match(new RegExp('(\\s|^)'+classOfName+'(\\s|$)'));
    },
    addClass:function(obj,classOfName){
        if(!exports.hasClass(obj,classOfName)){
            //必须是加空格的双引号
            obj.className+=" "+classOfName;
        }
    },
    removeClass:function(obj,classOfName){
        if(exports.hasClass(obj,classOfName)){
            var reg=new RegExp('(\\s|^)'+classOfName+'(\\s|$)');
            obj.className=obj.className.replace(reg,"");
        }
    },
    toggleClass:function(obj,classOfName){
        if(exports.hasClass(obj,classOfName)){
            exports.removeClass(obj,classOfName);
        }else{
            exports.addClass(obj,classOfName);
        }
    }
};
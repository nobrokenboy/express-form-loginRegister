/**
 * Created by jessic on 2016/10/19.
 */
window.ajax=(function(){
    var ajax={};
    ajax.requestWithRespond=function(url,type,isAsync,data){
        debugger;
        //创建XMLHttpRequest
        var xmlHttp;
        var type=type||"get";
        var url=url||"127.0.0.1";
        var isAsync=isAsync||true;
        var data=data||null;
        if(window.ActiveXObject) {
            //ie6版本以及以前
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }else if(window.XMLHttpRequest){
            xmlHttp=new XMLHttpRequest();
        }else{
            alert("亲，您的浏览器版本太低了");
            return false;
        }

        //连接
        xmlHttp.open(type,url,isAsync);
        if(type=="get"){
            xmlHttp.send(null);
        }else if(type="post"){
            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xmlHttp.send(null);
        }

        xmlHttp.onreadystatechange=function(){
            if((xmlHttp.readyState==4)&&(xmlHttp.status==200)){
                console.log("success with");
            }else if((xmlHttp.readyState==4)&&xmlHttp.status==404){
                console.log("后台响应不存在");
            }else{
                console.log("fail");
            }
        }

    };
    return ajax;
})();

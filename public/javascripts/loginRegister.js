/**
 * Created by jessic on 2016/10/19.
 */
//获取切换的按钮
var btnLinkLogin=document.querySelector(".link-login");
var btnLinkRegister=document.querySelector(".link-register");
var btnGoResister=document.querySelector(".btn-go-register");
//获取滑块
var slideBlock=document.querySelector(".slide-block");
//获取登录界面
var loginForm=document.getElementById("login");
//获取注册界面
var registerForm=document.getElementById("register");
//获取登录按钮
var loginBtn=document.querySelector(".btn-login");
//获取注册按钮
var registerBtn=document.querySelector(".btn-register");

/*切换登录注册模块效果*/
if(window.addEventListener){
    btnLinkLogin.addEventListener("click",function(e){
        var self=this;
        util.removeClass(slideBlock,"active");
        util.addClass(self,"select");
        util.removeClass(btnLinkRegister,"select");
        //界面处理
        loginForm.style.display="block";
        registerForm.style.display="none";
    });
    btnLinkRegister.addEventListener("click",function(e){
        var self=this;
        util.addClass(slideBlock,"active");
        util.addClass(self,"select");
        util.removeClass(btnLinkLogin,"select");
        //界面处理
        registerForm.style.display="block";
        loginForm.style.display="none";

    });
    btnLinkRegister.addEventListener("click",function(e){
        var self=this;
        util.addClass(slideBlock,"active");
        util.addClass(self,"select");
        util.removeClass(btnLinkLogin,"select");
        //界面处理
        registerForm.style.display="block";
        loginForm.style.display="none";

    });
    btnGoResister.addEventListener("click", function () {
        var self=this;
        util.addClass(slideBlock,"active");
        util.addClass(btnLinkRegister,"select");
        util.removeClass(btnLinkLogin,"select");
        //界面处理
        registerForm.style.display="block";
        loginForm.style.display="none";

    });

    //实现登陆
  /*  loginBtn.addEventListener("click", function () {

    });
    //实现注册
    registerBtn.addEventListener("click", function () {
        debugger;
        //@param url,type,isAsync,data
        ajax.requestWithRespond("/register","post",true,{});


    });*/
}

//实现登陆



/*
 //判断是否有类
 var hasClass=function(obj,classOfName){
 debugger;
 console.log(obj.className);
 return obj.className.match(new RegExp('(\\s|^)'+classOfName+'(\\s|$)'));
 }
 //添加类的操作
 var addClass=function(obj,classOfName){
 debugger;
 console.log(obj.className);
 if(!hasClass(obj,classOfName)){
 //必须是加空格的双引号
 obj.className+=" "+classOfName;
 }
 };
 //删除类的操作
 var removeClass=function(obj,classOfName){
 if(hasClass(obj,classOfName)){
 var reg=new RegExp('(\\s|^)'+classOfName+'(\\s|$)');
 obj.className=obj.className.replace(reg,"");
 }
 }
 //切换类
 var toggleClass=function(obj,classOfName){
 if(hasClass(obj,classOfName)){
 removeClass(obj,classOfName);
 }else{
 addClass(obj,classOfName);
 }
 }*/

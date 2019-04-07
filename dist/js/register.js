$(function(){
    var flag=false;
    var phone=/^1(5|8|3)\d{9}$/;
    var value="";
    $(".text2").blur(function(){
        $(this).css({"border-color":"red"});
        value=$(".text2").val();
        
        if(value==""){
            $(this).parent().next().find("span").show();
        }else if(!(phone.test(value))){
            $(this).parent().next().find("span").show().html("手机号格式不正确");
        }else{
            $(this).css({"border-color":"#ccc"})
            .parent().next().find("span").hide();
            flag=true;
        }

        

    })
    $(".btn").click(function(){
        if(flag){
            $.cookie("userphone",value,{expires:10});
            alert("通过验证");
            location.href="register1.html";
        }else{
            $(".text2").css({"border-color":"red"});
            if(value==""){
                $(".text2").parent().next().find("span").show();
            }else if(!(phone.test(value))){
                $(".text2").parent().next().find("span").show().html("手机号格式不正确");
            }
        }
        
    })

    $("ul li").mouseenter(function(){
        $(this).addClass("hover").siblings().removeClass("hover")
    })

    //取用户名
    var userphone=$.cookie("userphone");
    $(".reg2 .tit").find("span").html(userphone);

    var flag1=false;
    var password=/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{7,20}$/;
    var pwdvalue="";
    var qpwdvalue="";
    $(".reg2 input").blur(function(){
        pwdvalue=$(".pwd").val();
        qpwdvalue=$(".qpwd").val();
        console.log(pwdvalue,qpwdvalue);
        if($(this).val()==""){
            $(this).css({"border-color":"red"});
            // console.log($(this).index());
            if($(this).index()==0){
                $(".msg").find("span").html("请输入密码").css({"color":"red"});
            }else if($(this).index()==1){
                $(".msg").find("span").html("请输入确认密码").css({"color":"red"});
            } 
            
        }else if(!password.test(pwdvalue)){
            $(".pwd").css({"border-color":"red"});
            $(".msg").find("span").css({"color":"red"});
        }else if(pwdvalue!=qpwdvalue){
            console.log(pwdvalue,qpwdvalue);
            $(".qpwd").css({"border-color":"red"});
            $(".msg").find("span").html("密码输入不一致").css({"color":"red"});
        }
        console.log(pwdvalue!=qpwdvalue);
    })
    $(".reg2 .qpwd").focus(function(){
        if($(".pwd").val()==""){
            $(".pwd").css({"border-color":"red"});
            $(".msg").find("span").html("请输入密码").css({"color":"red"});
        }
    })
   
    $(".sub").click(function(){
        pwdvalue=$(".pwd").val();
        qpwdvalue=$(".qpwd").val();
        if(pwdvalue==qpwdvalue){
            $.ajax({
                type:"get",
                url:"http://jx.xuzhixiang.top/ap/api/reg.php",
                data:{
                    username:userphone,
                    password:pwdvalue
                },
                dataType:"json",
                success:function(data){
                    console.log(data);
                    if(data.code==1){
                        alert("注册成功");
                        location.href="login.html";
                    }
                }
            })
        }
    })
})
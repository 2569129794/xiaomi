$(function(){
    $(".sub").click(function(){
        var uname=$(".uname").val();
        var pwd=$(".pwd").val();
        $.ajax({
            type:"get",
            url:"http://jx.xuzhixiang.top/ap/api/login.php",
            data:{
                username:uname,
                password:pwd
            },
            dataType:"json",
            success:function(data){
                // console.log(data);
                if(data.code==0){
                    $(".msg").show();
                }else if(data.code==1){
                    // alert("登录成功");
                    location.href="index.html";
                }
            }

        })
    })
})
$(function(){
    $(".header").find("a").mouseover(function(){
        $(this).css({"color":"#fff"})
        .parent().siblings().find("a").css({"color":"#b0b0b0"});
    })
    $(".header").find("a").mouseout(function(){
        $(this).css({"color":"#b0b0b0"})
    })
    $(".header .xz").mouseover(function(){
        $(this).find("p").show();
    })
    $(".header .xz").mouseout(function(){
        $(this).find("p").hide();
    })
    $(".header .shopping").mouseover(function(){
        $(this).css({"background":"#fff"})
        .find("a").css({"color":"#ff6700"})
    })
    $(".header .shopping").mouseout(function(){
        $(this).css({"background":"#424242"})
        .find("a").css({"color":"#b0b0b0"})
    })
//搜索框
    $(".lright").mouseover(function(){
        $(this).find("input").css({"border-color":"#aaa"});
    })
    $(".lright").mouseout(function(){
        $(this).find("input").css({"border-color":"#ccc"});
    })
    $(".lright .sub").mouseover(function(){
        $(this).css({"background":"#ff6700"});
    })
    $(".lright .sub").mouseout(function(){
        $(this).css({"background":"#fff"});
    })
    $(".mi p").mouseover(function(){
        $(this).css({"backgroundColor":"#ff6700"})
        .find("a").css({"color":"#fff"});
    })
    $(".mi p").mouseout(function(){
        $(this).css({"backgroundColor":"#eee"})
        .find("a").css({"color":"#666"});
    })
    $(".lright .txt").focus(function(){
        $(".mi").hide().siblings().css({"border-color":"#ff6700"})
        .parent().unbind("mouseout").unbind("mouseover");
        $(".sel").show();
    })
    $(".lright .txt").blur(function(){
        $(".mi").show().siblings().css({"border-color":"#ccc"})
        .parent().bind("mouseover",function(){
            $(".lright").find("input").css({"border-color":"#aaa"});
        }).bind("mouseout",function(){
            $(".lright").find("input").css({"border-color":"#ccc"});
        });
        $(".sel").hide();
    })
    
})
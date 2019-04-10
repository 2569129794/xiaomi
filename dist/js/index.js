$(function(){
    $(".uleft a").hover(function(){
        $(this).css({"color":"#fff"})
        .parent().siblings().find("a").css({"color":"#b0b0b0"});
    },function(){
        $(this).css({"color":"#b0b0b0"})
    })

    $(".header .xz").hover(function(){
        $(this).find("p").show();
    },function(){
        $(this).find("p").hide();
    })


    //购物车商品数量
    // console.log($.cookie("cartNum"));
    // $(".shopping span").html($.cookie("cartNum"));

//查询购物车商品

    $.ajax({
        type:"get",
        url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
        data:{
            id:"1678"
        },
        dataType:"json",
        success:function(data){
            console.log(data);
            var data=data.data;
            var str="";
            for(var i=0;i<data.length;i++){
                str+=`<li pid=${data[i].pid}>
                    <img src="${data[i].pimg}" alt="">
                    <p class="name">${data[i].pname}</p>
                    <p><span class="price">${data[i].pprice}</span>元X<span class="num">${data[i].pnum}</span></p>
                </li>`;
            }
            $(".cart ul").html(str);

            //商品件数
            // 总金额结算
            var count=0;
            var money=0;
            for(var i=0;i<data.length;i++){
                count+=Number(data[i].pnum);
                money+=Number(data[i].pnum)*Number(data[i].pprice);
            }
            console.log(count,money);
            $(".money span").html(money);
            $(".goods span").html(count);
            $(".shopping>a>span").html(count);

            //点击li进入详情页
            $(".cart li").click(function(){
                console.log($(this).attr("pid"));
                var pid=$(this).attr("pid")
                location.href="detail.html?pid="+pid;
            })
        }
    })
    

    $(".uright>.shopping").hover(function(){
        $(this).css({"background":"#fff"})
        .find("a").css({"color":"#ff6700"})
        .next().slideDown();
    },function(){
        $(this).css({"background":"#ff6700"})
        .find("a").css({"color":"#fff"})
        .next().slideUp();
    })

    //点击进入购物车
    $(".uright>.shopping>a,.jiesuan>.right").click(function(){
        location.href="cart.html";
    })
    
//搜索框
    $(".lright").mouseover(function(){
        $(this).find("input").css({"border-color":"#aaa"});
    })
    $(".lright").mouseout(function(){
        $(this).find("input").css({"border-color":"#ccc"});
    })
    
    $(".lright .sub").hover(function(){
        $(this).css({"background":"#ff6700"});
    },function(){
        $(this).css({"background":"#fff"});
    })

    $(".mi p").hover(function(){
        $(this).css({"backgroundColor":"#ff6700"})
        .find("a").css({"color":"#fff"});
    },function(){
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
    $(".big,.big>li").hover(function(){
        $(this).css({"color":"#ff6700"}).siblings().css({"color":"#333"});
        $(".small").stop().slideDown();
    },function(){
        $(this).css({"color":"#333"});
        $(".small").stop().slideUp();
    })
   
    
    $(".listLeft li").hover(function(){
        $(".content").show();
    },function(){
        $(".content").hide();
    })
    



    //轮播
    $(function() {
        //$("#toright").hide();
        //$("#toleft").hide();
        $('#toright').hover(function() {
            $("#toleft").hide()
        }, function() {
            $("#toleft").show()
        })
        $('#toleft').hover(function() {
            $("#toright").hide()
        }, function() {
            $("#toright").show()
        })
    })
    
    var t;
    var index = 0;
    /////自动播放
    t = setInterval(play, 3000)
    
    function play() {
        index++;
        if (index > 4) {
            index = 0
        }
        // console.log(index)
        $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc",
            "border": ""
        })
    
        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    };
    
    ///点击鼠标 图片切换
    $("#lunbobox ul li").click(function() {
    
        //添加 移除样式
        //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
        $(this).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc"
        })
        var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
        // console.log(index);
    
        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
    });
    
    /////////////上一张、下一张切换
    $("#toleft").click(function() {
        index--;
        if (index <= 0) //判断index<0的情况为：开始点击#toright  index=0时  再点击 #toleft 为负数了 会出错
        {
            index = 4
        }
        // console.log(index);
        $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc"
        })
    
        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
    }); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换
    
    $("#toright").click(function() {
        index++;
        if (index > 4) {
            index = 0
        }
        console.log(index);
        $(this).css({
            "opacity": "0.5"
        })
        $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc"
        })
        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
    });
    $("#toleft,#toright").hover(function() {
            $(this).css({
                "color": "black"
            })
        },
        function() {
            $(this).css({
                "opacity": "0.3",
                "color": ""
            })
        })
    ///
    
    ///////鼠标移进  移出
    $("#lunbobox ul li,.lunbo a img,#toright,#toleft ").hover(
        ////////鼠标移进
        function() {
            $('#toright,#toleft').show()
            clearInterval(t);
    
        },
        ///////鼠标移开
        function() {
            //$('#toright,#toleft').hide()
            //alert('aaa')
            t = setInterval(play, 3000)
    
            function play() {
                index++;
                if (index > 4) {
                    index = 0
                }
                $("#lunbobox ul li").eq(index).css({
                    "background": "#999",
                    "border": "1px solid #ffffff"
                }).siblings().css({
                    "background": "#cccccc"
                })
                $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
            }
        }
    )

    $(".listphone a").hover(function(){
        $(this).css({"color":"#ff6700"});
    },function(){
        $(this).css({"color":"#424242"});
    })
    
    $(".listphone li").hover(function(){
        $(this).find(".lidiv").stop().animate({"top":"-3px"},300)
        .css({"box-shadow":"0px 3px 10px 3px #ccc"})
    },function(){
        $(this).find(".lidiv").stop().animate({"top":"0"},300)
        .css({"box-shadow":"0px 0px 0px 0px #ccc"})
    })
    $(".listjiadian li").hover(function(){
        $(this).find(".leftli").stop().animate({"top":"-3px"},300)
        .css({"box-shadow":"0px 3px 10px 3px #ccc"})
    },function(){
        $(this).find(".leftli").stop().animate({"top":"0"},300)
        .css({"box-shadow":"0px 0px 0px 0px #ccc"})
    })

    $(".listjiadian .right li").hover(function(){
        $(this).find(".lidiv").css({"box-shadow":"0px 3px 10px 3px #ccc"})
        .stop().animate({"top":"-3px"},300).next().stop().animate({"top":"224px"},300)
        
    },function(){
        $(this).find(".lidiv").css({"box-shadow":"0px 0px 0px 0px #ccc"})
        .stop().animate({"top":"0"},300).next().stop().animate({"top":"300px"},300)
        
    })



})
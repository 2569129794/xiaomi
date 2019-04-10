$(function(){
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
                str+=`<li>
                    <input class="ge" type="checkbox" checked/>
                    <img src="${data[i].pimg}" alt=""/> 
                    <p class="name" pid="${data[i].pid}">${data[i].pname}</p>
                    <p class="desc">${data[i].pdesc}</p>
                    <p class="price"><span>${data[i].pprice}</span>元</p>
                    <p class="number">
                        <span class="jian btn">-</span>
                        <span class="num">${data[i].pnum}</span>
                        <span class="jia btn">+</span>
                    </p>
                    <span class="totalPrice"><span>${Number(data[i].pprice)*Number(data[i].pnum)}</span>.00元</span>
                    <p class="del">x</p>
                </li>`;
            }
            $(".list ul").html(str);

            // $("input").each(function(){
            //     if($(this).prop("checked")){
            //         $(this).prop("checked",true);
            //     }else{

            //     }
                
            // })
            goodsCount();
            //计算总计金额
            function TotalPrice(){
                var totalprice=0;
                $(".totalPrice span").each(function(){
                    // console.log($(this).html());
                    if($(this).parent().parent().find("input").prop("checked")){
                        totalprice+=Number($(this).html());
                    }
                    // console.log($(this).parent().parent().find("input").prop("checked"));
                    
                })
                // console.log(totalprice);
                $(".total span").html(totalprice);
            }
            
            TotalPrice();

            //点击加减
            $(".btn").click(function(){
                var num=0;
                var num1=0;
                var price=Number($(this).parent().prev().find("span").html());
                if($(this).attr("class")=="jia btn"){
                    num=Number($(this).prev().html());
                    $(this).prev().html(num+1);
                    // console.log($(this).prev().html());
                    
                    num1=Number($(this).prev().html());
                    // console.log(price,num1)
                    $(this).parent().next().find("span").html(price*num1);
                }else{
                    num=Number($(this).next().html());
                    if(num<=1){
                        $(this).next().html(1);
                    }else{
                        $(this).next().html(num-1);
                    }

                    // price=Number($(this).parent().prev().find("span").html());
                    num1=Number($(this).next().html());
                    $(this).parent().next().find("span").html(price*num1);
                }  
                TotalPrice();

                //更新购物车中产品数量
// console.log($(this).parent().parent().find(".name").attr("pid"));
// console.log($(this).parent().find(".num").html());

                $.ajax({
                    type:"get",
                    url:"http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                    data:{
                        uid:"1678",
                        pid:$(this).parent().parent().find(".name").attr("pid"),
                        pnum:$(this).parent().find(".num").html()
                    },
                    dataType:"json",
                    success:function(data){
                        // console.log(data);
                    }
                }) 
                goodsCount();  
                
                
            })
            
             //删除购物车中的商品
             $(".del").click(function(){
                // console.log($(this).parent().index());
                var _this=this;
                $.ajax({
                    type:"get",
                    url:"http://jx.xuzhixiang.top/ap/api/cart-delete.php",
                    data:{
                        uid:"1678",
                        pid:$(_this).parent().find(".name").attr("pid")
                    },
                    dataType:"json",
                    success:function(data){
                        // console.log(data);
                        var index=$(_this).parent().index();
                        $(_this).parent().parent().find("li").eq(index).remove();
                        goodsCount();
                    }
                })

                
                
            })

            //商品件数
            function goodsCount(){
                var count=0;
                $(".num").each(function(){
                    count+=Number($(this).html());
                })
                $(".tnum").html(count);


                var select=0;
                $(".ge").each(function(){
                    if($(this).prop("checked")){
                        select+=Number($(this).parent().find(".num").html());
                    }
                })
                $(".snum").html(select);

                $.cookie("cartNum",select,{expires:10});
            }
            
            

            //给勾选按钮添加点击事件
            $(".list input").click(function(){
                // console.log($(this).attr("class"));
                if($(this).attr("class")=="quan"&&$(this).prop("checked")){
                    var checked=$(this).prop("checked");
                    $(".ge").prop("checked",true);
                }else if($(this).attr("class")=="ge"){
                    
                    if(!($(this).prop("checked"))){
                        $(".quan").prop("checked",false);
                        
                    }else{
                        
                        $(".ge").each(function(){
                            if($(this).prop("checked")){
                                $(".quan").prop("checked",true);
                            }
                            
                        })
                        
                    }
                    
                }
                goodsCount();

                TotalPrice();

               
            })  
            
        }
        
    })
    
})
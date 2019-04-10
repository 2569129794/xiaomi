$(function(){
    // console.log(location.search.replace("?","").split("=")[1]);
    var pid=location.search.replace("?","").split("=")[1];
    $.ajax({
        type:"get",
        url:"http://jx.xuzhixiang.top/ap/api/detail.php",
        dataType:"json",
        data:{
            id:pid
        },
        success:function(data){
            console.log(data);
            var obj=data.data;
            var str="";
            str=`<div class="lunbo">
                    <img src="${obj.pimg}"/>
                </div>
                <div class="box">
                    <p class="name">${obj.pname}</p>
                    <p class="desc"><span>[米粉节热卖中]</span>${obj.pdesc}</p>
                    <p class="price">${obj.pprice}元</p>
                    <div class="jisuan">
                        <button type="button" class="jian">-</button>
                        <span class="number">1</span>
                        <button type="button" class="jia">+</button>
                    </div>
                    <button class="addCart">加入购物车</button>
                </div>
            `;
            $(".list").html(str);


            $(".jisuan button").click(function(){
                var num=Number($(".number").html());
                // console.log(num);
                // console.log($(this).attr("class"));
                if($(this).attr("class")=="jia"){
                    $(".number").html(num+1);
                }else{
                    if(num<=1){
                        $(".number").html("1");
                    }else{
                        $(".number").html(num-1);
                    }
                    
                }
            })

            $(".addCart").click(function(){
                var pid=location.search.replace("?","").split("=")[1];
                // console.log(pid);
                $.ajax({
                    type:"get",
                    url:"http://jx.xuzhixiang.top/ap/api/add-product.php",
                    data:{
                        uid:"1678",
                        pid:pid,
                        pnum:Number($(".number").html())
                    },
                    dataType:"json",
                    success:function(data){
                        console.log(data);
                        location.href="cart.html";
                    }
                })
            })
        }
    })
})
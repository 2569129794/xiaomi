$(function(){
    $.ajax({
        type:"get",
        url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
        data:{
            uid:"1678"
        },
        dataType:"json",
        success:function(data){
            console.log(data.data);
            
            var data=data.data;
            var str1="";
            var str2="";
            for(var i=0;i<data.length-2;i++){
                str2+=`<li>
                   <div class="ttu">
                    <a href="#">
                        <img src='${data[i].pimg}'/>
                    </a>
                   </div> 
                   <div class="msg">
                    <span class="name">
                        <a href="#">${data[i].pname}</a> 
                    </span>
                    <p class="shao">${data[i].pdesc}</p>
                    <p class="price"><em>￥</em>${data[i].pprice}<span>起</span></p>
                    <button pid=${data[i].pid}>立即购买</button>
                    </div>
                </li>`    
            }
            $(".foot ul").html(str2);

            for(var i=data.length-2;i<data.length;i++){
                str1+=`<li class="box">
                    <a href="#" class="image">
                        <img src='${data[i].pimg}'/>
                    </a>
                    <p class="remai">
                        <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b7ac335ec1792af375acf0940fb7563.png?w=167&h=167'/>
                    </p>
                   <div class="message">
                        <div class="left">
                            <a href="#" class="name">${data[i].pname}</a>
                            <span class="shao">${data[i].pdesc}</span>
                        </div>
                        <div class="right">
                            <p class="price"><em>￥</em>${data[i].pprice}<span>起</span></p>
                            <button pid=${data[i].pid}>立即购买</button>
                        </div>
                    </div>
                </li>`   
            }
            $(".recommend .top").html(str1);

            // $(".ttu img").hover(function(){
            //     $(this).stop().animate({"width":"404px","height":"270px","top":"-2px","left":"-2px"},300)
            // },function(){
            //     $(this).stop().animate({"width":"400px","height":"266px","top":"0px","left":"0px"},300)
            // })

            $("button").click(function(){
                // console.log($(this).attr("pid"));
                var pid=$(this).attr("pid")
                location.href="detail.html?pid="+pid;
            })
        }
    })

    
})
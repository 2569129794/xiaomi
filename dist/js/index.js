"use strict";$(function(){var o;$(".uleft a").hover(function(){$(this).css({color:"#fff"}).parent().siblings().find("a").css({color:"#b0b0b0"})},function(){$(this).css({color:"#b0b0b0"})}),$(".header .xz").hover(function(){$(this).find("p").show()},function(){$(this).find("p").hide()}),$.ajax({type:"get",url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",data:{id:"1678"},dataType:"json",success:function(o){console.log(o);o=o.data;for(var i="",n=0;n<o.length;n++)i+="<li pid="+o[n].pid+'>\n                    <img src="'+o[n].pimg+'" alt="">\n                    <p class="name">'+o[n].pname+'</p>\n                    <p><span class="price">'+o[n].pprice+'</span>元X<span class="num">'+o[n].pnum+"</span></p>\n                </li>";$(".cart ul").html(i);var s=0,c=0;for(n=0;n<o.length;n++)s+=Number(o[n].pnum),c+=Number(o[n].pnum)*Number(o[n].pprice);console.log(s,c),$(".money span").html(c),$(".goods span").html(s),$(".shopping>a>span").html(s),$(".cart li").click(function(){console.log($(this).attr("pid"));var o=$(this).attr("pid");location.href="detail.html?pid="+o})}}),$(".uright>.shopping").hover(function(){$(this).css({background:"#fff"}).find("a").css({color:"#ff6700"}).next().slideDown()},function(){$(this).css({background:"#ff6700"}).find("a").css({color:"#fff"}).next().slideUp()}),$(".uright>.shopping>a,.jiesuan>.right").click(function(){location.href="cart.html"}),$(".lright").mouseover(function(){$(this).find("input").css({"border-color":"#aaa"})}),$(".lright").mouseout(function(){$(this).find("input").css({"border-color":"#ccc"})}),$(".lright .sub").hover(function(){$(this).css({background:"#ff6700"})},function(){$(this).css({background:"#fff"})}),$(".mi p").hover(function(){$(this).css({backgroundColor:"#ff6700"}).find("a").css({color:"#fff"})},function(){$(this).css({backgroundColor:"#eee"}).find("a").css({color:"#666"})}),$(".lright .txt").focus(function(){$(".mi").hide().siblings().css({"border-color":"#ff6700"}).parent().unbind("mouseout").unbind("mouseover"),$(".sel").show()}),$(".lright .txt").blur(function(){$(".mi").show().siblings().css({"border-color":"#ccc"}).parent().bind("mouseover",function(){$(".lright").find("input").css({"border-color":"#aaa"})}).bind("mouseout",function(){$(".lright").find("input").css({"border-color":"#ccc"})}),$(".sel").hide()}),$(".big,.big>li").hover(function(){$(this).css({color:"#ff6700"}).siblings().css({color:"#333"}),$(".small").stop().slideDown()},function(){$(this).css({color:"#333"}),$(".small").stop().slideUp()}),$(".listLeft li").hover(function(){$(".content").show()},function(){$(".content").hide()}),$(function(){$("#toright").hover(function(){$("#toleft").hide()},function(){$("#toleft").show()}),$("#toleft").hover(function(){$("#toright").hide()},function(){$("#toright").show()})});var i=0;o=setInterval(function(){4<++i&&(i=0);$("#lunbobox ul li").eq(i).css({background:"#999",border:"1px solid #ffffff"}).siblings().css({background:"#cccccc",border:""}),$(".lunbo a ").eq(i).fadeIn(1e3).siblings().fadeOut(1e3)},3e3),$("#lunbobox ul li").click(function(){$(this).css({background:"#999",border:"1px solid #ffffff"}).siblings().css({background:"#cccccc"});var o=$(this).index();$(".lunbo a ").eq(o).fadeIn(1e3).siblings().fadeOut(1e3)}),$("#toleft").click(function(){--i<=0&&(i=4),$("#lunbobox ul li").eq(i).css({background:"#999",border:"1px solid #ffffff"}).siblings().css({background:"#cccccc"}),$(".lunbo a ").eq(i).fadeIn(1e3).siblings().fadeOut(1e3)}),$("#toright").click(function(){4<++i&&(i=0),console.log(i),$(this).css({opacity:"0.5"}),$("#lunbobox ul li").eq(i).css({background:"#999",border:"1px solid #ffffff"}).siblings().css({background:"#cccccc"}),$(".lunbo a ").eq(i).fadeIn(1e3).siblings().fadeOut(1e3)}),$("#toleft,#toright").hover(function(){$(this).css({color:"black"})},function(){$(this).css({opacity:"0.3",color:""})}),$("#lunbobox ul li,.lunbo a img,#toright,#toleft ").hover(function(){$("#toright,#toleft").show(),clearInterval(o)},function(){o=setInterval(function(){4<++i&&(i=0);$("#lunbobox ul li").eq(i).css({background:"#999",border:"1px solid #ffffff"}).siblings().css({background:"#cccccc"}),$(".lunbo a ").eq(i).fadeIn(1e3).siblings().fadeOut(1e3)},3e3)}),$(".listphone a").hover(function(){$(this).css({color:"#ff6700"})},function(){$(this).css({color:"#424242"})}),$(".listphone li").hover(function(){$(this).find(".lidiv").stop().animate({top:"-3px"},300).css({"box-shadow":"0px 3px 10px 3px #ccc"})},function(){$(this).find(".lidiv").stop().animate({top:"0"},300).css({"box-shadow":"0px 0px 0px 0px #ccc"})}),$(".listjiadian li").hover(function(){$(this).find(".leftli").stop().animate({top:"-3px"},300).css({"box-shadow":"0px 3px 10px 3px #ccc"})},function(){$(this).find(".leftli").stop().animate({top:"0"},300).css({"box-shadow":"0px 0px 0px 0px #ccc"})}),$(".listjiadian .right li").hover(function(){$(this).find(".lidiv").css({"box-shadow":"0px 3px 10px 3px #ccc"}).stop().animate({top:"-3px"},300).next().stop().animate({top:"224px"},300)},function(){$(this).find(".lidiv").css({"box-shadow":"0px 0px 0px 0px #ccc"}).stop().animate({top:"0"},300).next().stop().animate({top:"300px"},300)})});
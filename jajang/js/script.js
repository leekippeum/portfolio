// 서브 하나 내려온거

// $("nav > ul > li").mouseover(function(){
//     $(this).find("ul.sub").stop().slideDown(200);
//  });
//  $("nav > ul > li").mouseout(function(){
//     $(this).find("ul.sub").stop().slideUp(200);
//  });



// 메뉴영역에서 서브 내려옴
//  $("nav > ul > li").mouseover(function(){
//    $("ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function(){
//    $("ul.sub").stop().slideUp(200);
// });




// 바디영역에서 서브 내려옴
$("nav > ul > li").mouseover(function(){
   $(".nav_bg, ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
   $(".nav_bg, ul.sub").stop().slideUp(200);
});




 //  햄버거메뉴

$(function(){
    var pull=$('#pull');
        menu=$('nav ul');
        menuHeight=menu.height();            
 $(pull).on('click', function(e){
    e.preventDefault();
    menu.slideToggle();               
 });

 $(window).resize(function(){
    var w=$(window).width();
    if(w>600 && menu.is(':hidden'))
        {menu.removeAttr('style');}
 });

 $("nav > ul > li").click(function(){
    $(".nav_bg").hide();
 });


 });
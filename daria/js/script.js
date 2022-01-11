


// 바디영역에서 서브 내려옴
$("nav > ul > li").mouseover(function(){
   $(".nav_bg, ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
   $(".nav_bg, ul.sub").stop().slideUp(200);
});

$("nav > ul > li").mouseover(function(){
   $(".nav_bg, ul.sub_1").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
   $(".nav_bg, ul.sub_1").stop().slideUp(200);
});



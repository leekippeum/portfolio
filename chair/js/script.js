
// 네비위치 고정

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



// 서브 하나 내려온거

// $("#navbar > ul > li").mouseover(function(){
//     $(this).find("ul.sub").stop().slideDown(200);
//  });
//  $("#navbar > ul > li").mouseout(function(){
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
// $("nav > ul > li").mouseover(function(){
//    $(".nav_bg, ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function(){
//    $(".nav_bg, ul.sub").stop().slideUp(200);
// });




 //  햄버거메뉴

// $(function(){
//     var pull=$('#pull');
//         menu=$('#navbar ul');
//         menuHeight=menu.height();            
//  $(pull).on('click', function(e){
//     e.preventDefault();
//     menu.slideToggle();               
//  });

//  $(window).resize(function(){
//     var w=$(window).width();
//     if(w>600 && menu.is(':hidden'))
//         {menu.removeAttr('style');}
//  });

//  $("#navbar > ul > li").click(function(){
//     $(".nav_bg").hide();
//  });


//  });


 <script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>

// 네비위치 고정

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// 서브 하나 내려온거

$("#navbar > ul > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
 });
 $("#navbar > ul > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
 });




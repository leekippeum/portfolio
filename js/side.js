var side = document.querySelectorAll('.side-menu li');

for(var i = 0; i < side.length; i++) {
    side[i].addEventListener('mouseover', function(){

        for(var x = 0; x<side.length; x++){
            side[x].classList.remove('active');
        }
        this.classList.add('active');
    })
}
window.onscroll = function() {makeSticky()};

let header = document.getElementById('myHeader');
let nav = document.getElementById('desktop-nav');
let intro = document.getElementById('intro');

let sticky = nav.offsetTop;

function makeSticky() {
    if(window.pageYOffset > sticky) {
        nav.classList.add('stick');
        // intro.classList.add('hide');
    } else {
        nav.classList.remove('sticky');
        // intro.classList.remove('hide');
    }
}

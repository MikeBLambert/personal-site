window.onscroll = function() {makeFixed(), fadeIn()};

let header = document.getElementById('myHeader');
let nav = document.getElementById('desktop-nav');
let portfolio = document.getElementById('portfolio');

let project = document.getElementsByClassName('project')

function makeFixed() {
    if(window.pageYOffset >= header.offsetHeight) {
        nav.classList.add('fix');
        portfolio.classList.add('portfolioOffset');

    } else if (header.offsetHeight > window.pageYOffset) {
        nav.classList.remove('fix');
        portfolio.classList.remove('portfolioOffset')
    }
}

function fadeIn() {
    if(window.pageYOffset >= nav.offsetHeight) {
        project[0].style.animationName = 'fade-in';
        project[0].style.animationDuration = '5s';
    } else {
        // console.log(project[0].style)
        project[0].style.display = 'none';
    }
}


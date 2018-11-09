
const header = document.getElementById('myHeader');
const nav = document.getElementById('desktop-nav');

const portfolio = document.getElementById('portfolio');
const projects = document.getElementsByClassName('project');


function makeFixed() {
    if(window.pageYOffset >= header.offsetHeight) {
        nav.classList.add('fix');
        portfolio.classList.add('portfolioOffset');
        
    } else if (header.offsetHeight > window.pageYOffset) {
        nav.classList.remove('fix');
        portfolio.classList.remove('portfolioOffset')
    }
}

const fadeIn = function (parent, children) {
    if(window.pageYOffset + window.innerHeight >= parent.offsetHeight) {
        Array.from(children).forEach((child, index) => {
            child.classList.add('fade-in');
            child.classList.remove('display-none');
        })
    }
}

window.onscroll = function() {
    makeFixed(), 
    fadeIn(portfolio, projects)
};




const nav = document.getElementById('desktop-nav');


function makeFixed() {
    if(window.pageYOffset >= header.offsetHeight) {
        nav.classList.add('fix');
        portfolio.classList.add('portfolioOffset');
        
    } else if (header.offsetHeight > window.pageYOffset) {
        nav.classList.remove('fix');
        portfolio.classList.remove('portfolioOffset')
    }
}


window.onscroll = function() {
    makeFixed()
};
const header = document.getElementById('myHeader');
const about = document.getElementById('about');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

const modals = document.getElementsByClassName('modal');
const projects = document.getElementsByClassName('project');
const portfolio = document.getElementById('portfolio');
const overlay = document.getElementById('overlay');

for(let i=0; i<projects.length; i++) {

    const clickedProject = projects[i];
    const projectDetails = clickedProject.childNodes[3];

    clickedProject.onclick = function() {
        this.classList.add('modal-item');
        projectDetails.classList.add('show-content');
        portfolio.classList.add('modal-view')
        portfolio.style.display = 'flex';
        overlay.style.display = 'block';

        // header.classList.add('hidden');
        // about.classList.add('hidden');
        // blog.classList.add('hidden');
        // contact.classList.add('hidden');

        Array.from(portfolio.children).forEach((element) => {
            if(element !== clickedProject) {
                element.classList.add('hidden');   
            }
        })
    }
}

overlay.onclick = function() {
    // header.classList.remove('hidden');
    // about.classList.remove('hidden');
    // blog.classList.remove('hidden');
    // contact.classList.remove('hidden');

    portfolio.classList.remove('modal-view');
    portfolio.style.display = 'grid';
    overlay.style.display = 'none';
    Array.from(portfolio.children).forEach(element => {
        element.classList.remove('hidden');
        element.classList.remove('modal-item');
        element.childNodes[3].classList.remove('show-content');
    })
}




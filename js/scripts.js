
const header = document.getElementById('myHeader');
const nav = document.getElementById('desktop-nav');

// const portfolio = document.getElementById('portfolio');
// const projects = document.getElementsByClassName('project');

// const contact = document.getElementById('contact');
// const contactIcons = document.getElementsByClassName('icons');


// function makeFixed() {
//     if(window.pageYOffset >= header.offsetHeight) {
//         nav.classList.add('fix');
//         portfolio.classList.add('portfolioOffset');
        
//     } else if (header.offsetHeight > window.pageYOffset) {
//         nav.classList.remove('fix');
//         portfolio.classList.remove('portfolioOffset')
//     }
// }

// const fadeIn = function (parent, children) {
//     if(window.pageYOffset + window.innerHeight >= parent.offsetHeight) {
//         Array.from(children).forEach(child => {
//             child.classList.add('fade-in');
//             child.classList.remove('display-none');
//         })
//     }
// }

// window.onscroll = function() {
//     makeFixed(), 
//     fadeIn(portfolio, projects),
//     fadeIn(contact, contactIcons)
// };

const modals = document.getElementsByClassName('modal');
const projects = document.getElementsByClassName('project');
const portfolio = document.getElementById('portfolio');
const main = document.getElementById('main');
const overlay = document.getElementById('overlay');

for(let i=0; i<projects.length; i++) {
    const clickedProject = projects[i];

    clickedProject.onclick = function() {
        this.classList.toggle('modal-item');
        this.childNodes[3].classList.toggle('show-content');
        main.classList.toggle('overlay');
        portfolio.classList.toggle('modal-view')
        portfolio.style.display = 'flex';
        overlay.style.display = 'block';
        Array.from(portfolio.children).forEach((element) => {
            if(element !== clickedProject) {
                element.classList.toggle('hidden');
            }
        })
    }

}
        main.onclick = function() {
            console.log('hi')
        }


// trigger.addEventListener('click', toggleModal);
// const closeModal = function() {
//     modal.style.display = 'none';
// }

// button.addEventListener('click', openModal, false);


// window.onclick = function(event) {
//     console.log(clickable)
//     if(event.target === button) {
//         console.log('hi')
//     }
// }



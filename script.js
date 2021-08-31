init();

function init() {
    clcikNav();
    scrollEvent();
};

function clcikNav() {
    const nav = document.querySelector('.menu');
    const ham = document.querySelector('.ham');
    const back = document.querySelector('.menu .back');
    const txtContent = document.querySelector('.mainTxt');
    ham.addEventListener('click', () => {
        ham.style.opacity = 0;
        nav.classList.add('active');
        txtContent.classList.add('active');
    });
    back.addEventListener('click', () => {
        nav.classList.remove('active');
        txtContent.classList.remove('active');
        ham.style.opacity = 1;
    });
}
function scrollEvent() {
    window.addEventListener('scroll', () => {
        var contents = document.querySelectorAll('.scroll');

        for(var i=0; i<contents.length; i++) {
            var contentPosition = contents[i].getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.5; // you can user fixed value but it don't work on other 
            if(contentPosition < screenPosition) {
                contents[i].classList.add('active');
            } else {
                contents[i].classList.remove('active');
            }
        }
    })
}
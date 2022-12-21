

const btn_up = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
    if(window.scrollY > 80) {
        btn_up.classList.add('btn-scroll');
    } else {
        btn_up.classList.remove('btn-scroll');
    }
});







import Neige from "./Neige.js";

const btn_up = document.querySelector('.btn-up');
const body = document.querySelector('body')

var navMobile = mobilecheck()

window.addEventListener('scroll', () => {
    if(window.scrollY > 80) {
        btn_up.classList.add('btn-scroll');
    } else {
        btn_up.classList.remove('btn-scroll');
    }
});


var flocons = [];

if (!navMobile) {

    for (let i = 0; i < 150; i++) {

        new_flocon()
       
    }

    setInterval(playing, 1000/60)

}

function playing() {


flocons.forEach((flocon, id) => {

    flocon.move()

    if (flocon.y > body.offsetHeight -20) {
        flocons.splice(id,1);
        flocon.remove()
        new_flocon()
    }

})

};


function new_flocon() {

    let taille = rnd(10)
    let flocon = new Neige(rnd(innerWidth-20), -rnd(innerHeight), taille, taille,0, rnd(10))

    flocons.push(flocon);

}

function rnd(valeur) {

    return 3 + Math.floor(Math.random() * valeur);

}


function mobilecheck() {
    return (typeof window.orientation !== "undefined") 
      || (navigator.userAgent.indexOf('IEMobile') !== -1
      );
};







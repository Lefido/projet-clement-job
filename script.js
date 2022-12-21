
import Neige from "./Neige.js";

const btn_up = document.querySelector('.btn-up');
const body = document.querySelector('body')

window.addEventListener('scroll', () => {
    if(window.scrollY > 80) {
        btn_up.classList.add('btn-scroll');
    } else {
        btn_up.classList.remove('btn-scroll');
    }
});


var flocons = [];

for (let i = 0; i < 150; i++) {

    console.log("Ajout flocon :" , i)

    new_flocon()

}

let playInterval = setInterval(playing, 1000/60)

function playing() {

flocons.forEach((flocon, id) => {

    flocon.move()

    if (flocon.y > body.offsetHeight) {
        flocons.splice(id,1);
        flocon.remove()
        new_flocon()
    }

})

};


function new_flocon() {

    let taille = rnd(10)
    let flocon = new Neige(rnd(innerWidth), -rnd(500), taille, taille,rnd(10), rnd(10))

    flocons.push(flocon);

}

function rnd(valeur) {

    return 2 + Math.floor(Math.random() * valeur);

}











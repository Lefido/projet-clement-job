

const body = document.querySelector('body')

export default class Neige {

    constructor(x, y, w, h, vx, vy) {

        let flocon = document.createElement('div')
        flocon.classList.add("flocon");
        flocon.style.backgroundColor = "gray";
        flocon.style.position = "absolute"
        flocon.style.borderRadius = "50%"
        flocon.style.opacity = "0.2"

        body.appendChild(flocon);

        this.flocon = flocon;
        this.flocon.style.width = w + "px"
        this.flocon.style.height = h + "px"
        this.flocon.style.left = x + "px"
        this.flocon.style.top = y + "px"
        this.y = y
        this.x= x
        this.vy = vy
        this.vx = vx
    }

    move() {

        this.y += this.vy
        this.x = this.x  + this.vx
        this.flocon.style.top = this.y + "px"
        this.flocon.style.left = this.x + "px"

        // let direction = Math.floor(Math.random() * 3);

        // if (direction === 1 ) {
        //     this.vx = 5
        //     console.log("direction droite")
        // } else {
        //     this.vx = -5
        //     console.log("direction gauche")
        // }

    }

    remove() {

        this.flocon.remove();

    }


}
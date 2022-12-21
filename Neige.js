

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
        this.vy = vy
    }

    move() {

        this.y += this.vy
        this.flocon.style.top = this.y + "px"

       

    }

    remove() {

        this.flocon.remove();

    }


}
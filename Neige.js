const body = document.querySelector("body");

export default class Neige {
  constructor(x, y, w, h, vx, vy) {
    let flocon = document.createElement("div");
    flocon.classList.add("flocon");
    // flocon.style.background = "url('./assets/flocon.png') no-repeat"
    // flocon.style.backgroundSize = "100% 100%";
    flocon.style.position = "absolute";
    flocon.style.borderRadius = "50%";
    let gray = 100 + rnd(100)
    flocon.style.backgroundColor = `rgb(${gray},${gray},${gray})`;

    flocon.style.opacity = "0.2";

    body.appendChild(flocon);

    this.flocon = flocon;
    this.flocon.style.width = w + "px";
    this.flocon.style.height = h + "px";
    this.flocon.style.left = x + "px";
    this.flocon.style.top = y + "px";
    this.y = y;
    this.x = x;
    this.vy = vy;
    this.vx = vx;
  }

  move() {
    this.y += this.vy;
    this.x = this.x + this.vx;
    this.flocon.style.top = this.y + "px";
    this.flocon.style.left = this.x + "px";

  }

  remove() {
    this.flocon.remove();
  }
}

function rnd(valeur) {
    return Math.floor(Math.random() * valeur)
}

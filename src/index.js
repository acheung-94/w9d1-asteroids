console.log(`hello from index.js!`)
// import MovingObject from "./moving-object.js"
// window.MovingObject = MovingObject;
import Asteroid from "./asteroid.js"
window.Asteroid = Asteroid;

let canvas = document.getElementById ("game-canvas")
let ctx = canvas.getContext("2d")
const mo = new Asteroid({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "purple"
  });
mo.draw(ctx)
mo.move();
mo.draw(ctx)


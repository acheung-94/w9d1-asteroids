console.log(`hello from index.js!`)
// import MovingObject from "./moving-object.js"
// window.MovingObject = MovingObject;
import GameView from "./game-view.js"
window.GameView = GameView;

import Game from "./game.js"
import MovingObject from "./moving-object.js";
let canvas = document.getElementById ("game-canvas")
canvas.width = Game.DIM_X
canvas.height = Game.DIM_Y
const ctx = canvas.getContext("2d")

const img = new Image()
img.addEventListener ("load", ()=>{
    ctx.drawImage(img, 0,0)
})
img.src = "space_stars_universe_169405_800x600.jpg"

let g = new GameView(ctx, img);
g.start();

// const mo = new MovingObject({
//     pos: [400, 400],
//     vel: [10, 10],
//     radius: 15,
//     color: "#00FF00"
//   });
// mo.draw(ctx)
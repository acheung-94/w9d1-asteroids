console.log(`hello from index.js!`)
// import MovingObject from "./moving-object.js"
// window.MovingObject = MovingObject;
import GameView from "./game-view.js"
window.GameView = GameView;

import Game from "./game.js"
let canvas = document.getElementById ("game-canvas")
canvas.width = Game.DIM_X
canvas.height = Game.DIM_Y
const ctx = canvas.getContext("2d")

let g = new GameView(ctx);
g.start()
import Game from "./game"
//OMG *v* it populated when i typed "new Game()" !!! <3 <3

class GameView {
    constructor(ctx, img){
        this.ctx = ctx
        this.img = img
        this.game = new Game()
    }

    start () {
        setInterval( (game) => {
            this.game.moveObjects()
            this.game.draw(this.ctx, this.img);
        }, 100)
    }
}

export default GameView;
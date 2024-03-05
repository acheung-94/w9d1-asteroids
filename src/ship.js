import MovingObject from "./moving-object";

class Ship extends MovingObject{
    static RADIUS = 5
    static COLOR = "white"
    constructor (optionsObject){
        let deltaFlyer = {
            "radius" : Ship.RADIUS,
            "color" : Ship.COLOR,
            "pos" : optionsObject["game"].randomPosition(),
            "vel" : [0,0],
            "game" : optionsObject["game"]
        }
        super(deltaFlyer)
    }
    /** TBD - overwrite MovingObject.prototype.draw to make a ship-shaped object 
    draw(){

    }
    */

    relocate(){
        console.log("relocated!")
        this.pos = this.game.randomPosition();
        this.vel = [0,0]
    }
}

export default Ship
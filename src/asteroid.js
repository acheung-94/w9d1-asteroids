import * as Util from "./util.js";
import MovingObject from "./moving-object.js";
import Ship from "./ship.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "gray"

    constructor (optionsObject){
        const asteroidOptions = {
        "radius" : Asteroid.RADIUS,
        "color" : Asteroid.COLOR,
        "pos" : optionsObject["pos"],
        "vel" : Util.randomVec(20),
        "game" : optionsObject["game"]
        }

        super(asteroidOptions);
    }

    collideWith(otherObject){
        if (otherObject instanceof Ship){
            otherObject.relocate()
        }
    }
}

export default Asteroid;
import * as Util from "./util.js";
import MovingObject from "./moving-object.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "gray"

    constructor (optionsObject){
        const asteroidOptions = {
        "radius" : Asteroid.RADIUS,
        "color" : Asteroid.COLOR,
        "pos" : optionsObject["pos"],
        "vel" : Util.randomVec(100)
        }

        super(asteroidOptions);
    }
}

export default Asteroid;
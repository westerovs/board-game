import Slider from './slider.js'
import Control from './control.js'

class Game {
    constructor() {
        this.gameControls = document.querySelector('#game-controls')
        this.control = new Control(this.gameControls)
        this.slider = new Slider()
    }
    
    start = () => {
        this.slider.init()
    }
}

const game = new Game()
game.start()

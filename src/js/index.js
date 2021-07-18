import Slider from './slider.js'
import Control from './control.js'

const gameControls = document.querySelector('#game-controls')
const control = new Control(gameControls)

const slider = new Slider()
slider.init()



//
// // const slider = new Slider()
//
// console.log(slider)

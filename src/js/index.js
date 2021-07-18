import Slider from './slider.js'
import Control from './control.js'

const gameControls = document.querySelector('#game-controls')
const control = new Control(gameControls)

const slider = new Slider()
slider.init()

// const path = document.querySelectorAll('path')
// function getPathLength(node) {
//     node.forEach(item => {
//         item.style.strokeDasharray = `${ Math.trunc(item.getTotalLength()) }`
//         item.style.strokeDashoffset = `${ Math.trunc(item.getTotalLength()) }`
//     })
// }
//
// getPathLength(path)

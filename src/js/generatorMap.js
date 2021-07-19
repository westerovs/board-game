const pointsMap = [
    { location: 10, room: true },
    { location: 120 },
    { location: 200 },
    { location: 300 },
    { location: 385 },
    { location: 485, room: true },
    { location: 560 },
    { location: 645 },
    { location: 780 },
    { location: 860 },
    { location: 980, room: true  },
    { location: 1050 },
    { location: 1130 },
    { location: 1230 },
    { location: 1310 },
    { location: 1410, room: true  },
    { location: 1520 },
    { location: 1620 },
    { location: 1740 },
    { location: 1820, room: true  },
    { location: 1900 },
    { location: 1990 },
    { location: 2070 },
    { location: 2150 },
    { location: 2270, room: true  },
    { location: 2390 },
    { location: 2510 },
    { location: 2600 },
    { location: 2680 },
    { location: 2760, room: true  },
    { location: 2840 },
    { location: 2910 },
    { location: 2980 },
    { location: 3060 },
    { location: 3130 },
    { location: 3220, room: true  },
    { location: 3310 },
    { location: 3360 },
    { location: 3445 },
    { location: 3520 },
    { location: 3600 },
    { location: 3660, room: true  },
    { location: 3720 },
    { location: 3790 },
    { location: 3850 },
    { location: 3950 },
    { location: 4015 },
    { location: 4080, room: true  },
    { location: 4180 },
    { location: 4290 },
    { location: 4390 },
    { location: 4470 },
    { location: 4580, room: true  },
]

export default class GeneratorMap {
    constructor(step = 1) {
        this.startStep = step
    
        this.path = document.querySelector('#path-map')
        this.wrapper = document.querySelector('#game')
        this.player = document.querySelector('.player');
        this.pathTotalLength = Math.trunc(this.path.getTotalLength())
    }
    
    getStartPosition = (pathPoint) => {
        this.player.style.left = `${ this.path.getPointAtLength(pathPoint).x}px`
        this.player.style.top  = `${ this.path.getPointAtLength(pathPoint).y}px`
    }
    
    changePosition = (pathPoint) => {
        this.player.style.transition = '1s'

        this.player.style.left = `${ this.path.getPointAtLength(pathPoint).x}px`
        this.player.style.top  = `${ this.path.getPointAtLength(pathPoint).y}px`
    }
    
     createPoint = (pathPoint) => {
        const { location, room } = pathPoint
        const point = document.createElement('div')
        
        point.style.left = `${ this.path.getPointAtLength(location).x}px`
        point.style.top  = `${ this.path.getPointAtLength(location).y}px`

        point.classList.add(`${ room ? 'map-point--room' : 'map-point'}`)
        this.wrapper.append(point)
    }

     generatePoints = () => {
        pointsMap.forEach(item => this.createPoint(item))
    }
    
    move = () => {
        const lastPoint = pointsMap.length - 1
        this.changePosition(pointsMap[this.startStep].location)
    
        if (this.startStep >= lastPoint) {
            console.log('CONGRATULATIONS YOU WIN !')
            return
        }
    
        this.startStep++
    }
    
    init = (startPosition = 0) => {
        this.getStartPosition(pointsMap[startPosition].location)
        this.generatePoints()
    }
}

const generatorMap = new GeneratorMap()
generatorMap.init()

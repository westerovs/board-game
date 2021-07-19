const path = document.querySelector('#path-map')
const wrapper = document.querySelector('#game')
const player = document.querySelector('.player');

const pathTotalLength = Math.trunc(path.getTotalLength())

// задаёт стартовую позицию
const getStartPosition = (pathPoint) => {
    player.style.left = `${ path.getPointAtLength(pathPoint).x}px`
    player.style.top  = `${ path.getPointAtLength(pathPoint).y}px`
    
    console.log(path.getPointAtLength(pathPoint).x)
    console.log(path.getPointAtLength(pathPoint).y)
}


const changePosition = (pathPoint) => {
    player.style.transition = '1s'
    
    player.style.left = `${ path.getPointAtLength(pathPoint).x}px`
    player.style.top  = `${ path.getPointAtLength(pathPoint).y}px`
}

getStartPosition(0)

// ========================== generator points
const pointsMap = [
    { location: 10 },
    { location: 120 },
    { location: 200 },
    { location: 300 },
    { location: 385 },
    { location: 485 },
    { location: 560 },
    { location: 645 },
    { location: 780 },
    { location: 860 },
    { location: 980 },
    { location: 1050 },
    { location: 1130 },
    { location: 1230 },
    { location: 1310 },
    { location: 1410 },
    { location: 1520 },
    { location: 1620 },
    { location: 1740 },
    { location: 1820 },
    { location: 1900 },
    { location: 1990 },
    { location: 2070 },
    { location: 2150 },
    { location: 2270 },
    { location: 2390 },
    { location: 2510 },
    { location: 2600 },
    { location: 2680 },
    { location: 2760 },
    { location: 2840 },
    { location: 2910 },
    { location: 2980 },
    { location: 3060 },
    { location: 3130 },
    { location: 3220 },
    { location: 3310 },
    { location: 3360 },
    { location: 3445 },
    { location: 3520 },
    { location: 3600 },
    { location: 3660 },
    { location: 3720 },
    { location: 3790 },
    { location: 3850 },
    { location: 3950 },
    { location: 4015 },
    { location: 4080 },
    { location: 4180 },
    { location: 4290 },
    { location: 4390 },
    { location: 4470 },
    { location: 4580 },
]

const createPoint = (pathPoint) => {
    if (pathPoint > pathTotalLength || pathPoint > pathTotalLength) {
        console.log('превышена длинна пути карты ! Уменьшите значение')
        return
    }
    if (pathPoint < 0 || pathPoint < 0) {
        console.log('координата не может быть меньше начального отрезка карты!')
        return
    }
    
    const point = document.createElement('div')
    point.style.left = `${ path.getPointAtLength(pathPoint).x}px`
    point.style.top  = `${ path.getPointAtLength(pathPoint).y}px`
    
    point.classList.add('map-point')
    wrapper.append(point)
}

const generatePoints = () => {
    pointsMap.forEach(item => {
        createPoint(item.location)
    
    })
}

generatePoints()

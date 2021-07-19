const path = document.querySelector('#path-map')
const wrapper = document.querySelector('#game')
const user = document.querySelector('.user');

const pathTotalLenght = Math.trunc(path.getTotalLength())

// задаёт стартовую позицию
const getStartPosition = (pathPoint) => {
    user.style.left = `${ path.getPointAtLength(pathPoint).x}px`
    user.style.top  = `${ path.getPointAtLength(pathPoint).y}px`
}


const changePosition = (pathPoint) => {
    user.style.transition = '1s'
    
    user.style.left = `${ path.getPointAtLength(pathPoint).x}px`
    user.style.top  = `${ path.getPointAtLength(pathPoint).y}px`
}

getStartPosition(100)
changePosition(666)

// ========================== generator points
const pointsMap = [
    {location: 100},
    {location: 700},
    {location: 900},
    {location: 1200},
    {location: 3200},
    {location: 5200},
]

const createPoint = (pathPoint) => {
    if (pathPoint > pathTotalLenght || pathPoint > pathTotalLenght) {
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

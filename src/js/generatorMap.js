/*
Сперва я получил длинну SVG, потом достаточно задать интересующий отрезок пути
и можно на нём рендерить объекты.
При желании можно автоматизировать процесс и рендерить точки с равными расстояниями
Иконка игрока привязана к координатам пути.

надо бы разделить пользователя и генератор карт.. но пока так.
пользователь получает координаты и движется.
временно движение такое топорное. Не успел прикрутить requestAnimationFrame.
да и анимировать правильнее на трансформациях, а не на top/left.
*/

// массив с кооринатами точек / комнат. Нужно вынести отсюда в данные
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
    { location: 980, room: true },
    { location: 1050 },
    { location: 1130 },
    { location: 1230 },
    { location: 1310 },
    { location: 1410, room: true },
    { location: 1520 },
    { location: 1620 },
    { location: 1740 },
    { location: 1820, room: true },
    { location: 1900 },
    { location: 1990 },
    { location: 2070 },
    { location: 2150 },
    { location: 2270, room: true },
    { location: 2390 },
    { location: 2510 },
    { location: 2600 },
    { location: 2680 },
    { location: 2760, room: true },
    { location: 2840 },
    { location: 2910 },
    { location: 2980 },
    { location: 3060 },
    { location: 3130 },
    { location: 3220, room: true },
    { location: 3310 },
    { location: 3360 },
    { location: 3445 },
    { location: 3520 },
    { location: 3600 },
    { location: 3660, room: true },
    { location: 3720 },
    { location: 3790 },
    { location: 3850 },
    { location: 3950 },
    { location: 4015 },
    { location: 4080, room: true },
    { location: 4180 },
    { location: 4290 },
    { location: 4390 },
    { location: 4470 },
    { location: 4580, room: true },
]

export default class GeneratorMap {
    constructor(step = 1) {
        this.path = document.querySelector('#path-map')
        this.wrapper = document.querySelector('#game')
        this.player = document.querySelector('.player')
        this.btnAction = document.querySelector('.btn--action')
    
        this.startStep = step
    }
    
    changeUserPosition = (pathPoint, nextPoint) => {

        
        // nextPositions - понадобится для плавной анимации по path. Пока off
        // const nextPositionX = Math.trunc(this.path.getPointAtLength(nextPoint).x)
        // const nextPositionY = Math.trunc(this.path.getPointAtLength(nextPoint).y)
    
        this.player.style.left = `${ Math.trunc(this.path.getPointAtLength(pathPoint).x) }px`
        this.player.style.top = `${ Math.trunc(this.path.getPointAtLength(pathPoint).y) }px`
    }
    
    createPoint = (pathPoint) => {
        // герерит черные и красные точки
        const { location, room } = pathPoint
        const point = document.createElement('div')
        
        point.style.left = `${ Math.trunc(this.path.getPointAtLength(location).x) }px`
        point.style.top = `${ Math.trunc(this.path.getPointAtLength(location).y) }px`
        
        // если это комната, то доп.класс точка красная
        if (room) point.classList.add('map-point', 'map-point--room')
        point.classList.add('map-point')
        
        point.setAttribute('tabindex', '1')
        this.wrapper.append(point)
    }
    
    generatePoints = () => {
        pointsMap.forEach(item => this.createPoint(item))
    }
    
    // отмечает пройденные точки цветом
    getCompletedPath = (step = this.startStep) => {
        const allPoints = document.querySelectorAll('.map-point')
        allPoints[step - 1].classList.add('map-point--completed')
    }
    
    moveUser = () => {
        try {
            const lastPoint = pointsMap.length - 1
    
            // проверка, что бы не тыкали, пока идёт анимация
            this.player.addEventListener('transitionstart', (e) => {
                if (e.propertyName === 'top') this.btnAction.disabled = true
            })
            this.player.addEventListener('transitionend', (e) => {
                if (e.propertyName === 'top') this.btnAction.disabled = false
            })
    
            // если счётчик равен длине всех локаций, игра окончена
            if (this.startStep >= lastPoint) {
                console.log('CONGRATULATIONS YOU WIN !')
                return
            }
    
            // изменение позиции. При каждом клике, счётчик++ и выбирается след. локация в массиве
            this.changeUserPosition(pointsMap[this.startStep].location, pointsMap[this.startStep + 1].location)
            this.getCompletedPath()
    

            this.startStep++
        }
        catch (e) {
            console.log(e)
        }
        
    }
    
    init = (startPosition = 0) => {
        this.changeUserPosition(pointsMap[startPosition].location, pointsMap[this.startStep + 1].location)
        this.generatePoints()
    }
}

const generatorMap = new GeneratorMap()
generatorMap.init()

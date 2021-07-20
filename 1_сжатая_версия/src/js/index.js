const render = (container, template, place = 'beforeend') => {
    if (container instanceof Element) {
        container.insertAdjacentHTML(place, template)
    }
}

const data = {
    "rating": [
        {
            "id": "123",
            "name": "Владимир",
            "lastName": "Ларионов",
            "img": "./male.png",
            "points": "463"
        },
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png",
            "points": "521"
        },
        {
            "id": "231",
            "name": "Вениамин",
            "lastName": "Васильев",
            "img": "./male.png",
            "points": "865"
        },
        {
            "id": "321",
            "name": "Мария",
            "lastName": "Логинова",
            "img": "./female.png",
            "points": "865"
        },
        {
            "id": "492",
            "name": "Борис",
            "lastName": "Казанцев",
            "img": "./male.png",
            "points": "784"
        },
        {
            "id": "452",
            "name": "Полина",
            "lastName": "Калинина",
            "img": "./female.png",
            "points": "225"
        },
        {
            "id": "796",
            "name": "Даниил",
            "lastName": "Воробьёв",
            "img": "./male.png",
            "points": "642"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png",
            "points": "150"
        },
        {
            "id": "1155",
            "name": "Иван",
            "lastName": "Иванов",
            "img": "./male.png",
            "points": "100"
        },
        {
            "id": "12145",
            "name": "Артем",
            "lastName": "Алексеев",
            "img": "./male.png",
            "points": "1000"
        }
    ],
    "friends": [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "./female.png"
        }
    ]
}

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

class GeneratorMap {
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

class Control {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
        
        this.rating = new Rating()
        this.generatorMap = new GeneratorMap()
    }
    
    openChat = () => {
        console.log('chat');
    }
    
    openAction = () => {
        this.generatorMap.moveUser()
    }
    
    openMessage = () => {
        console.log('message');
        
    }
    
    openRating = () => {
        this.rating.init()
    }
    
    onClick = (event) => {
        let action = event.target.dataset.action;
        
        if (action) {
            this[action]();
        }
    };
}

const generatorMap = new GeneratorMap()
generatorMap.init()

class Slider {
    constructor() {
        this.slider = document.querySelector('.slider')
        this.sliderList = this.slider.querySelector('.slider-list')
        this.templateElem = this.slider.querySelector('#template-slider')
        this.btnAddFriends = this.slider.querySelector('.slider-item-add')
        this.mockFriends = [
            { empty: false },
            { empty: false },
            { empty: false },
            { empty: false },
            { empty: false },
            { empty: false },
            { empty: true },
            { empty: true },
            { empty: true },
            { empty: true },
        ]
    }
    
    createSlide = (params) => {
        const { empty } = params
        
        const slide = this.templateElem.content.cloneNode(true);
        const slideItem = slide.querySelector('li')
        
        if (!empty) this.addTodoListeners(slide)
        if (empty) slideItem.classList.add('slider-item--empty')
        
        this.sliderList.append(slide);
    }
    
    addTodoListeners = (slide) => {
        slide.querySelector('.slider-item').addEventListener('click', this.handleClick);
    }
    
    handleClick = (e) => {
        console.log('click', e.target)
    }
    
    addFriends = () => {
        console.log('добавить друзей')
    }
    
    changeImage = (event) => {
        const target = event.target
        if (!target.closest('button')) return
        
        if (target.classList.contains('slider-btn-prev')) this.slidePrev()
        if (target.classList.contains('slider-btn-next')) this.slideNext()
    }
    
    slidePrev = () => {
        const images = Array.from(this.slider.querySelectorAll('.slider-item'))
        const last   = images[images.length - 1]
        this.sliderList.prepend(last)
    }
    
    slideNext = () => {
        const images = Array.from(this.slider.querySelectorAll('.slider-item'))
        const first  = images[0]
        this.sliderList.append(first)
    }
    
    init = () => {
        this.mockFriends.forEach(this.createSlide)
        this.slider.addEventListener('click', this.changeImage)
        this.btnAddFriends.addEventListener('click', this.addFriends)
    }
    
    destroy = () => {
    
    }
}

class Rating {
    constructor() {
        this.rating = document.querySelector('.rating')
        this.ratingList = this.rating.querySelector('.rating__list')
        this.btnClose = this.rating .querySelector('.rating__close')
        this.dataRating = data.rating
        this.dataFriends = data.friends
    }
    
    showPopUp = () => {
        this.rating.classList.remove('rating-hide')
    }
    
    closePopUp = () => {
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                if (!this.rating.classList.contains('rating-hide')) {
                    this.destroy()
                    this.rating.classList.add('rating-hide');
                }
            }
        }, { once: true });
        
        this.rating.addEventListener('click', (event) => {
            if (!event.target.closest('.rating-container')) this.destroy()
        });
    }
    
    template = (params, i, isFriend) => {
        const { id, name, lastName, points } = params
        
        return (`
        <li class="rating__item ${ isFriend ? 'rating__item--friend' : '' }" id="${ id }">
          <p class="rating__item-text rating__item-place">${ i }</p>
          <img class="rating__item-img" width="30" height="30" src="https://via.placeholder.com/30x30" alt="#">
          <p class="rating__item-text rating__item-name">${ name } ${ lastName }</p>
          <p class="rating__item-text rating__item-score">${ Math.trunc(points) }</p>
        </li>`)
    }
    
    getResponse = () => {
        try {
            const getResponse = async () => {
                return this.dataRating.sort((a, b) => b.points - a.points)
            }
            
            getResponse()
                .then(sortPointsUsers => {
                    const friendsId = this.dataFriends.map(friend => friend.id)
                    
                    let isFriend = false
                    
                    sortPointsUsers.forEach((params, i) => {
                        friendsId.forEach(friend => {
                            if (friend === params.id) isFriend = params.id
                        })
                        render(this.ratingList, this.template(params, i + 1, isFriend))
                        
                        isFriend = null
                    })
                })
        } catch (err) {
            console.log(err)
            console.log('something went wrong...')
        }
    }
    
    destroy = () => {
        this.ratingList.innerHTML = ''
        this.rating.classList.add('rating-hide')
    }
    
    init = () => {
        this.showPopUp()
        this.closePopUp()
        this.btnClose.addEventListener('click', this.destroy)
        
        this.getResponse()
    }
}

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

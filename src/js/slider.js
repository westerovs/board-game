export default class Slider {
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

import { render } from './utils.js'

export default class Slider {
    constructor() {
        this.slider = document.querySelector('.slider')
        this.sliderList = this.slider.querySelector('.slider-list')
        this.templateElem = this.slider.querySelector('#template-slider')
        this.mockFriends = [
            { id: 1, empty: false },
            { id: 2, empty: false },
            { id: 3, empty: false },
            { id: 4, empty: false },
            { id: 5, empty: false },
            { id: 6, empty: false },
            { id: 7, empty: true },
            { id: 8, empty: true },
            { id: 9, empty: true },
            { id: 10, empty: true },
            { id: 11, empty: true },
            { id: 12, empty: true },
            { id: 13, empty: true },
            { id: 14, empty: true },
            { id: 15, empty: true },
            { id: 16, empty: true },
        ]
    }
    
    createSlide = (params) => {
        const { id, empty } = params
        
        const slide = this.templateElem.content.cloneNode(true);
        const slideItem = slide.querySelector('li')
    
        if (!empty) this.addTodoListeners(slide)
        if (empty) slideItem.classList.add('slider-item--empty')
        
        slideItem.innerHTML = id
        this.sliderList.append(slide);
    }
    
    addTodoListeners = (slide) => {
        slide.querySelector('.slider-item').addEventListener('click', this.handleClick);
    }
    
    handleClick = () => {
        console.log('click')
    }

    changeImage = (event) => {
        const target = event.target
        if (!target.closest('button')) return

        if (target.classList.contains('slider-btn-prev')) this.slidePrev()
        if (target.classList.contains('slider-btn-next')) this.slideNext()
        
        if (!target.closest('.slider-item')) return
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
    }
    
    destroy = () => {

    }
}

const slider = document.querySelector('.slider')
const sliderList = slider.querySelector('.slider-list')

const changeImage = (event) => {
    const target = event.target
    if (!target.closest('button')) return
    
    if (target.classList.contains('slider-btn-prev')) slidePrev()
    if (target.classList.contains('slider-btn-next')) slideNext()
}

const slidePrev = () => {
    const images = Array.from(slider.querySelectorAll('.slider-item'))
    const last   = images[images.length - 1]
    sliderList.prepend(last)
}

const slideNext = () => {
    const images = Array.from(slider.querySelectorAll('.slider-item'))
    const first  = images[0]
    sliderList.append(first)
}

slider.addEventListener('click', changeImage)

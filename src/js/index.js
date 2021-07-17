// let position = 0
// const sliderToShow = 8
// const sliderToScroll = 1
// const container = document.querySelector('.slider-row')
// const track = document.querySelector('.slider-list')
//
// const btnPrev = document.querySelector('.btn-prev')
// const btnNext = document.querySelector('.btn-next')
// const items = document.querySelectorAll('.slider-item')
// const itemsCount = items.length
// const itemWidth = container.clientWidth / sliderToShow
// const movePosition = sliderToScroll * itemWidth
//
// items.forEach(item => item.style.minWidth = `${ itemWidth }px`)
//
// btnNext.addEventListener('click', () => {
//     const itemsLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth
//
//     position -= itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth
//
//     setPosition()
//     checkBtns()
// })
//
// btnPrev.addEventListener('click', () => {
//     const itemsLeft = Math.abs(position) / itemWidth
//
//     position += itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth
//
//     setPosition()
//     checkBtns()
// })
//
// const setPosition = () => {
//     track.style.transform = `translateX(${ position }px)`
// }
//
// const checkBtns = () => {
//     btnPrev.disabled = position === 0
//     btnNext.disabled = position <= -(itemsCount - sliderToShow) * itemWidth
// }
//
//
//
//
//
//
//
//
//
//
//
//
//

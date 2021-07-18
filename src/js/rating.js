export default class Rating {
    constructor() {
        this.rating = document.querySelector('.rating')
        this.btnClose = document.querySelector('.rating__close')
    }
    
    showPopUp = () => {
        this.rating.classList.toggle('rating-hide')
    }
    
    closePopUp = () => {
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                if (!this.rating.classList.contains('rating-hide')) {
                    this.rating.classList.add('rating-hide');
                }
            }
        }, { once: true });
    }
    
    handleClick = () => {
        this.rating.classList.add('rating-hide')
    }
    
    const
    
    init = () => {
        this.showPopUp()
        this.closePopUp()
        this.btnClose.addEventListener('click', this.handleClick)
        console.log('init rating')
    }
}

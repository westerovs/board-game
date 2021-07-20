import {data} from './mock/data.js'

export default class Rating {
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
    
    render = (element, template, place = 'beforeend') => {
        if (element instanceof Element) {
            element.insertAdjacentHTML(place, template)
        }
    }
    
    template = (params, i, isFriend) => {
        `
        <li class="rating__item">
          <p class="rating__item-text rating__item-place">${ i }</p>
          <img class="rating__item-img" width="30" height="30" src="https://via.placeholder.com/30x30" alt="#">
          <p class="rating__item-text rating__item-name">${ params.name }</p>
          <p class="rating__item-text rating__item-score">${ Math.trunc(params.points) }</p>
        </li>
    `
    }
    
    getResponse = () => {
        try {
            const getResponse = async () => {
                return this.dataRating.sort((a, b) => b.points - a.points)
            }
        
            getResponse()
                .then(data => {
                    data.forEach((params, i) => {
                            this.render(this.ratingList, this.template(params, i + 1))
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
        console.log('init rating')
    }
}

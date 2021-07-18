/*const mapLink = document.querySelector('.contacts-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close-map');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            mapPopup.classList.remove('modal-show');
        }
    }
});
*/

export default class Rating {
    constructor() {
        this.btnRating = document.querySelector('.pop-up--rating')
    }
    
    showPopUp = () => {
        this.btnRating.style.display = 'block'
    }
    
    handleClick = () => {
    
    }
    
    init = () => {
        this.showPopUp()
        console.log('init rating')
    }
}

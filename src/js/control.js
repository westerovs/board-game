import Rating from './rating.js'
export default class Control {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
        
        this.rating = new Rating()
    }
    
    openChat = () => {
        console.log('chat');
    }
    
    openAction = () => {
        console.log('action');
    }
    
    openMessage = () => {
        console.log('message');
    }
    
    openRating = () => {
        console.log('rating');
        this.rating.init()
    }
    
    onClick = (event) => {
        let action = event.target.dataset.action;
        
        if (action) {
            this[action]();
        }
    };
}


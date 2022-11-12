const SIZE_SMALL = { price: 50, calloties: 20};
const SIZE_MIDDLE = { price: 75, calloties: 30};
const SIZE_BIG = { price: 100, callories: 40};

const TOPPING_MAYO = { price: 20, callories: 5};
const TOPPING_SALAD = { price: 20, callories: 5};
const TOPPING_CHEESE= { price: 10, callories: 20};
const TOPPING_POTATO = { price: 15, callories: 10};
const TOPPING_HERBAL = { price: 15, callories: 0};


function Hamburger({price, callories}) {
    this._price = price;
    this._callories = callories;
}


Hamburger.prototype.addTopping = function ({price, callories}) {
    this._price += price;
    this._callories += callories;
}

Hamburger.prototype.getPrice = function(){
    return this._price;
}

Hamburger.prototype.getCallories = function(){
    return this._callories;
}
const ham = new Hamburger(SIZE_BIG);





function Hamburger({price, callories}) {
    this._price = price;
    this._callories = callories;
}

Hamburger.SIZE_SMALL = { price: 50, calloties: 20};
Hamburger.SIZE_MIDDLE = { price: 75, calloties: 30};
Hamburger.SIZE_BIG = { price: 100, callories: 40};

Hamburger.TOPPING_MAYO = { price: 20, callories: 5};
Hamburger.TOPPING_SALAD = { price: 20, callories: 5};
Hamburger.TOPPING_CHEESE= { price: 10, callories: 20};
Hamburger.TOPPING_POTATO = { price: 15, callories: 10};
Hamburger.TOPPING_HERBAL = { price: 15, callories: 0};


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





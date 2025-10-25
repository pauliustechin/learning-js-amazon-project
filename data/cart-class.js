// Use PascalCase for functions which generates classes.
// sintakse siek tiek skiriasi nuo funkcijos. 
// vietoje : naudojam = , o vietoje ',' naudojam ';'

class Cart {
    //jei undefined priimtina taip:
    cartItems;
    // # PRIVATE PROPERTY GALIMA NAUDOTI TIK KLASEJE
    #localStorageKey;
    // cartItems = undefined;
    // localStorageKey = undefined;

    // constructor galime naudoti paramtetrus.
    // great place to add set up code
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    // 
    #loadFromStorage() {
        // keiciam cart to "this", jei pasikeistu cart name.
        // cart.cartItems = JSON.parse(localStorage.getItem('cart'));

        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        // keiciam visur kur cart.
        if (!this.cartItems) {
            this.cartItems = [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantyti: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantyti: 1,
                    deliveryOptionId: '2'
                }];
        }
    }

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantyti += 1;
        } else {
            this.cartItems.push({
                productId: productId,
                quantyti: 1,
                deliveryOptionId: '1'
            });
        }

        // norint panaudoti cart metoda (funckija), naudojam this.
        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        })

        this.cartItems = newCart;
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
    // virsuje kur naudojom kableli funkcijoje, tai klases nereikia nieko is vis 
}




// Problem, reikia nurodyti kita parametra, nes naudoja ta pati localStorage.
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

// galime naudoti constructor klaseje. 
// cart.localStorageKey = 'cart-oop';
// businessCart.localStorageKey = 'cart-business';

// cart.loadFromStorage();
// businessCart.loadFromStorage();
// ir paimti situos kodus.


console.log(cart);
console.log(businessCart);

// taip neveiks, nes padarem private property
// cart.#localStorageKey = 'test';

// galime paziureti ar businessCart yra klases instance.
console.log(businessCart instanceof Cart);
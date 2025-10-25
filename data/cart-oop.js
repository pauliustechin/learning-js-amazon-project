// Use PascalCase for functions which generates an objects.

function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            // keiciam cart to "this", jei pasikeistu cart name.
            // cart.cartItems = JSON.parse(localStorage.getItem('cart'));
            // JEI NAUDOJAM PER KLASE, TADA NAUDOJAM parametra localStorageKey.
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

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
        },

        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        // shortcut for >>>  addToCart: function(productId) {}
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
        },

        removeFromCart(productId) {
            const newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            })

            this.cartItems = newCart;
            this.saveToStorage();
        },

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
    };

    return cart;
};

// Problem, reikia nurodyti kita parametra, nes naudoja ta pati localStorage.
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();

console.log(cart);
console.log(businessCart);

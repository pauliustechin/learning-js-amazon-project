import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practise.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';

new Promise((resolve) => {
    // console.log('start promise')
    loadProducts(() => {
        // console.log('finished loading')
        resolve();
    });
}).then(() => {
    // console.log('next step');
    renderOrderSummary();
    renderPaymentSummary();
});



// CALL BACK
// loadProducts(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// CALL BACK cart
// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });


// // kai baigia visus promise, tada juda i kita zingsni then()
// // taip galima  vienu metu daug promise vykdyti o ne viena po kito
// Promise.all([

//     new Promise((resolve) => {
//         loadProducts(() => {
//             resolve('value1');
//         });
//     }),

//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })

// ]).then((values) => {
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary();
// });



// // PROMISE cart
// new Promise((resolve) => {
//     loadProducts(() => {
//         //galime duoti value resolve ir naudoti kitame zingsnyje
//         resolve('value1');
//     });

// }).then((value) => {
//     console.log(value)
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

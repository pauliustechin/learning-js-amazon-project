import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practise.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';



// KAI DAROM SU ASYNC AWAIT

async function loadPage() {
    try {
        // // throw manually add an error
        // // skips the rest of the code.
        // throw 'error1';

        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2';
            // jei throwinam error tada loadCart nesuveiks ir suveiks catch metodas.
            loadCart(() => {
                // throw does not work in the future, tai cia neveiktu.
                // naudojam tada reject
                // reject('error3');
                resolve('value3');
            });
        });

    } catch (error) {
        console.log('unexpected error. Please try again later.');
    }


    // console.log('load page');



    renderOrderSummary();
    renderPaymentSummary();

    // // Jei norime, grazinti kazkoki value
    // // tada await priskiriam value ir returninam
    // // siuo atveju value butu value3
    // const value = await new Promise((resolve) => {
    //     loadCart(() => {
    //         resolve('value3');
    //     });
    // });

    // renderOrderSummary();
    // renderPaymentSummary();


    // NAUDOJAM await vietoje:
    // loadProductsFetch().then(() => {

    // })

    // return 'value2'
}

// value 2 = value
loadPage();



// // KAI DAROM SU FETCH
// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })
// ]).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });




// SU XHR KAI DAROM
// new Promise((resolve) => {
//     // console.log('start promise')
//     loadProducts(() => {
//         // console.log('finished loading')
//         resolve();
//     });
// }).then(() => {
//     // console.log('next step');
//     renderOrderSummary();
//     renderPaymentSummary();
// });





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

// jei nera nei vieno orderio dauodame empty array su || [];
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
    // unshift gives an order to the front of the array
    // instead of back.
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

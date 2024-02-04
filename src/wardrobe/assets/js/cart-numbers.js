
// Function onLoadCartNumbers() will show cart-span value every time.
function onLoadCartNumbers() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let  productNumbers = 0;
    if (cartItems) {
        for (cartItem in cartItems) {
            productNumbers += cartItems[cartItem].inCart;
        }
    }
    document.querySelector('.cart span').textContent = productNumbers;
}
onLoadCartNumbers();

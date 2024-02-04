let carts = document.querySelector('.btn');
carts.addEventListener('click', () => {
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id');
    var productDetail = getProductDetail(productId);
    var qty = parseInt($(".qty").html());
    setItems(productDetail, qty);
    window.location = "./shopping-cart.html";
})


// Function setItems() will store product details in local storage
function setItems(productDetail, qty) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[productDetail.id] == undefined) {
            cartItems = {
                ...cartItems,
                [productDetail.id]: productDetail
            }
            cartItems[productDetail.id].inCart = qty;
        } else {
            cartItems[productDetail.id].inCart += qty;
        }
    } else {
        productDetail.inCart = qty;
        cartItems = {
            [productDetail.id]: productDetail
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


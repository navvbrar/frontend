// This function will display the cart items 
function displaycart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container");
    if (cartItems && productContainer) {
        productContainer.innerHTML = "";

        Object.values(cartItems).forEach(item => {
            // below is some back-ticks which i have used to add some variables with strings
            productContainer.innerHTML += `
            <tr class='cart-row' data-id='${item.id}'>
                <td scope="parent-row" valign="middle" class="max-w100">
                    <div class="product_img"><img width="100%"
                    src="assets/img/product/${item.id}/main.png" class="img-fluid" alt="cart img">
                    </div>
                </td>
                <td valign="middle">
                    <h1 class="product_name">${item.title}</h1>
                </td>
                <td valign="middle">
                    <div class="price_money">$${item.price}</div>
                </td>
                <td valign="middle">
                <div class="quantity_changer backward"><a href="javascript:void(0)" style="width:20px"><img
                            src="assets/img/backward-svgrepo-com.svg" alt="sub" /></a></div>
                </td>
                <td valign="middle">
                    <div class="qty">${item.inCart}</div>
                </td>
                <td valign="middle">
                <div class="quantity_changer forward"><a href="javascript:void(0)" style="width:20px"><img
                            src="assets/img/forward-svgrepo-com.svg" alt="sub" /></a></div>
                </td>
                <td valign="middle">
                    <div class="total-price_money">$${(item.price * item.inCart).toFixed(2)}</div>
                </td>
                <td valign="middle">
                    <div class="quantity_changer"><a href="javascript:void(0)" onclick='deleteProduct(this)' style="width:20px"><img
                                src="assets/img/close.svg" alt="close" /></a></div>
                </td>
            </tr>
            </div>`
        })
    }
    displayPrices();
    addListernes();
}

displaycart();

function displayPrices() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var cartCost =  0;
    if (cartItems) {
        Object.values(cartItems).forEach(item => {
            cartCost += item.price * item.inCart;
        })
    }
    document.querySelector(".product_total").innerHTML = "$" + cartCost.toFixed(2);

    var tax_total = cartCost * 13 / 100;
    tax_total = tax_total.toFixed(2);
    document.querySelector(".tax_total").innerHTML = "$" + tax_total;

    cartCost = Number(cartCost);
    tax_total = Number(tax_total);
    var total_amount = cartCost + tax_total;
    total_amount = total_amount.toFixed(2);
    document.querySelector(".total_amount").innerHTML = "$" + total_amount;
}

function addListernes() {
    $(".quantity_changer.backward").click(function() {
        var qty = parseInt($(this).closest(".cart-row").find(".qty").html());
        if (qty > 0) {
            qty--;
        }
        $(this).closest(".cart-row").find(".qty").html(qty);
        if (qty == 0) {
            ;
        }
        updateCart(this);
    });
    
    $(".quantity_changer.forward").click(function() {
        var qty = parseInt($(this).closest(".cart-row").find(".qty").html());
        qty++;
        $(this).closest(".cart-row").find(".qty").html(qty);
        updateCart(this);
    });
}

function deleteProduct(obj) {
    var parentObj = $(obj).closest(".cart-row");
    var productId = parentObj.data("id");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    delete cartItems[productId];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    window.location = "./shopping-cart.html";
}

function updateCart(obj) {
    var parentObj = $(obj).closest(".cart-row");
    var productId = parentObj.data("id");
    var qty = parseInt($(parentObj).find(".qty").html());

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null && cartItems[productId] != undefined) {
        cartItems[productId].inCart = qty;
    }
    $(parentObj).find(".total-price_money").text("$"+ (qty * PRODUCTS[productId].price).toFixed(2));
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayPrices();
}

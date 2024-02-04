/**
 * set product data on product detail page
 */
function setProductData() {
    var params = new URLSearchParams(window.location.search);
    
    if (!params.get('id') || !getProductDetail(params.get('id'))) {
        window.location = "./";
    }
    
    var productId = params.get('id');
    // get product detail
    var productDetail = getProductDetail(productId);
    //set title
    $("#product-title").html(productDetail.title);
    //set brand
    $("#product-brand").html(productDetail.brand);
    //set prices
    $("#after-discount-price").html("$" + productDetail.price);
    if (productDetail.discount && productDetail.discount > 0) {
        $("#mrp").html("$" + productDetail.mrp);
        $("#discount").html(productDetail.discount);
    } else {
        $("#discount-section").hide();
    }
    
    var sizeHtml = ``;
    
    productDetail.sizes.forEach(size => {
        sizeHtml += `<option value="${size}">${size}</option>`;
    });
    
    $("#size").html(sizeHtml);
    
    $("#main-1").attr("src", `assets/img/product/${productId}/main-1.webp`);
    $("#main-2").attr("src", `assets/img/product/${productId}/main-2.webp`);
    $("#main-3").attr("src", `assets/img/product/${productId}/main-3.webp`);
    $("#main-4").attr("src", `assets/img/product/${productId}/main-4.webp`);

    
    printProductGrid(productDetail.similar, "./", "id");
}
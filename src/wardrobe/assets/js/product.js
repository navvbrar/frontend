/**
 * return the product detail of specific product
 */
function getProductDetail(productId) {
  let productDetail = null;
  if (productId in PRODUCTS) {
    productDetail = PRODUCTS[productId];
  }
  return productDetail;
}

/**
 * Print Grid HTML
 */
function printProductGrid(
  products = null,
  urlPrefix = "./",
  sort = "title",
  search = null,
  sortKey = "asc"
) {
  var productArray = Object.keys(PRODUCTS).map((key) => {
    return PRODUCTS[key];
  });

  productArray = productArray.filter((product, index) => {
    if (products && !products.includes(product.id)) {
      return false;
    }

    if (search && !product.title.includes(search)) {
      return false;
    }

    return true;
  });

  //sort products
  var sortedProducts = productArray.sort((a, b) => {
    if (sortKey == "asc") {
      if (a[sort] < b[sort]) {
        return -1;
      }
      if (a[sort] > b[sort]) {
        return 1;
      }
      return 0;
    } else {
      if (a[sort] > b[sort]) {
        return -1;
      }
      if (a[sort] < b[sort]) {
        return 1;
      }
      return 0;
    }
  });

  var productGridHtml = ``;
  sortedProducts.forEach((product) => {
    productGridHtml += `<div class="product-tile width-2-3">
                                <a href="${urlPrefix}product-detail.html?id=${
      product.id
    }">
                                    <div class="image-container">
                                        <img src="${urlPrefix}/assets/img/product/${
      product.id
    }/main.png" alt="${product.title}">
                                    </div>
                                    <div class="product-data">
                                        <p class="product-brand font-weight-bold">${
                                          product.brand
                                        }</p>
                                        <p class="product-name">${
                                          product.title
                                        }</p>
                                        <div class="product-addition-info">
                                            <p class="product-size">Size: ${product.sizes.join(
                                              ", "
                                            )}</p>
                                        </div>
                                        <div class="price">
                                            <del>$ ${product.mrp}</del>
                                            <ins>$ ${product.price}</ins>
                                        </div>
                                    </div>
                                </a>
                            </div>`;
  });

  $("#product-grid").html(productGridHtml);
}

$(".quantity_changer.backward").click(function () {
  var qty = parseInt($(".qty").html());
  if (qty > 1) {
    qty--;
  }
  $(".qty").html(qty);
});

$(".quantity_changer.forward").click(function () {
  var qty = parseInt($(".qty").html());
  qty++;
  $(".qty").html(qty);
});

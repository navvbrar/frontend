const PRODUCTS = {
    201 : {
        "id": 201,
        "title" : "Polo Tshirt",
        "brand" : "Nautica",
        "mrp" : 50.99,
        "price" : 25.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [202, 203, 204]
    },
    202 : {
        "id": 202,
        "title" : "Round Neck Tshirt",
        "brand" : "Dillinger",
        "mrp" : 40.99,
        "price" : 22.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [201, 203, 204]
    },
    203 : {
        "id": 203,
        "title" : "Cotton Tshirt",
        "brand" : "H&M",
        "mrp" : 60.99,
        "price" : 30.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [201, 202, 204]
    },
    204 : {
        "id": 204,
        "title" : "Solid Round Neck",
        "brand" : "H&M",
        "mrp" : 70.99,
        "price" : 35.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [201, 202, 203]
    },
    205 : {
        "id": 205,
        "title" : "Solid Slim Fit Shirt",
        "brand" : "Invictus",
        "mrp" : 45.99,
        "price" : 23.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [201, 202, 203, 204]
    },
    206 : {
        "id": 206,
        "title" : "Cotton Textured Shirt",
        "brand" : "BlackBerry",
        "mrp" : 78.99,
        "price" : 36.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [207,208,209]
    },
    207 : {
        "id": 207,
        "title" : "Opaque Formal Shirt",
        "brand" : "Louis Phillippe",
        "mrp" : 80.99,
        "price" : 40.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [208,209,206]
    },
    208 : {
        "id": 208,
        "title" : "Slim Fit Formal Trouser",
        "brand" : "H&M",
        "mrp" : 42.99,
        "price" : 21.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [209,207,206]
    },
    209 : {
        "id": 209,
        "title" : "Formal Trouser",
        "brand" : "Louis Phillippe",
        "mrp" : 52.99,
        "price" : 26.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [208,207,206]
    },
    210 : {
        "id": 210,
        "title" : "Print Kurta Set",
        "brand" : "Libas",
        "mrp" : 48.99,
        "price" : 24.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [211, 212]
    },
    211 : {
        "id": 211,
        "title" : "Printed Kurta With Trouser",
        "brand" : "H&M",
        "mrp" : 58.99,
        "price" : 29.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [210, 212]
    },
    212 : {
        "id": 212,
        "title" : "Blazer Dress",
        "brand" : "H&M",
        "mrp" : 90.99,
        "price" : 45.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [210, 211]
    },
    213 : {
        "id": 213,
        "title" : "SpiderMan Tshirt",
        "brand" : "H&M",
        "mrp" : 30.99,
        "price" : 15.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [214,215]
    },
    214 : {
        "id": 214,
        "title" : "Pack of 2 T-shirts",
        "brand" : "Hellcat",
        "mrp" : 38.99,
        "price" : 19.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [213,215]
    },
    215 : {
        "id": 215,
        "title" : "Pack of 2 Tshirt",
        "brand" : "H&M",
        "mrp" : 34.99,
        "price" : 17.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [214,213]
    },
    216 : {
        "id": 216,
        "title" : "Unicorn Printed Dress",
        "brand" : "H&M",
        "mrp" : 45.99,
        "price" : 22.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [217,218]
    },
    217 : {
        "id": 217,
        "title" : "Maxi Dress",
        "brand" : "Pink Chick",
        "mrp" : 50.99,
        "price" : 25.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [216,218]
    },
    218 : {
        "id": 218,
        "title" : "Net Dress",
        "brand" : "CuteCumber",
        "mrp" : 65.99,
        "price" : 32.45,
        "discount" : 50,
        "sizes" : [1,2,3,4,5],
        "similar" : [216,217]
    },
}


const MEN_PRODUCTS = [201, 202, 203, 204, 206,207,208,209];
const WOMEN_PRODUCTS = [210,211,212];
const CHILD_PRODUCT = [213,214,215,216,217,218];
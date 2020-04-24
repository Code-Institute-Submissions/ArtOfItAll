function products(product){
    var products = {
        product1: productInfo = {
            name: "Landscape 1",
            price: 101,
        },
        product2: productInfo = {
            name: "Landscape 2",
            price: 102,
        },
        product3: productInfo = {
            name: "Landscape 3",
            price: 103,
        },
        product4: productInfo = {
            name: "Landscape 4",
            price: 104,
        },
        product5: productInfo = {
            name: "Cartoon 1",
            price: 105,
        },
        product6: productInfo = {
            name: "Cartoon 2",
            price: 106,
        },
        product7: productInfo = {
            name: "Cartoon 3",
            price: 107,
        },
        product8: productInfo = {
            name: "Manga 1",
            price: 108,
        },
        product9: productInfo = {
            name: "Manga 2",
            price: 109,
        },
        product10: productInfo = {
            name: "Manga 3",
            price: 110,
        },
        product11: productInfo = {
            name: "Abstract 1",
            price: 111,
        },
        product12: productInfo = {
            name: "Abstract 2",
            price: 112,
        },
        product13: productInfo = {
            name: "Portrait 3",
            price: 113,
        },
        product14: productInfo = {
            name: "Paint 2",
            price: 114,
        },
        product15: productInfo = {
            name: "Portrait 1",
            price: 115,
        },
    };
    var product = {
    productName: products[product].name,
    productPrice: products[product].price
    }
    return(product)
}

function addBasket(productInfo){
    var product = products(productInfo)
    var price = product["productPrice"]
    var total = document.getElementById('total').textContent
    var prodNum = Math.random()
    total = total.substring(1)
    total = parseInt(total)
    total = total + price
    $("#basket1").append("<h4 class='body-text " + prodNum + "'>" + product["productName"] + "</h4>")
    $("#basket2").append("<h4 class='body-text " + prodNum + "'>£" + product["productPrice"] + "</h4>")
    $("#basket3").append("<h4 class='body-text " + prodNum + "'><i id='remove' class='far fa-minus-square' data-prodnum=" + prodNum + " data-prod=" + productInfo + " onclick='remove()'></i></h4>")
    $("#total").html("£" + total)
}

function remove(){
    var prod = $("#remove").data("prod")
    var prodNum = $("#remove").data("prodnum")
    var total = document.getElementById('total').textContent
    total = total.substring(1)
    var product = products(prod)
    var price = product["productPrice"]
    total = total - price
    $("#total").html("£" + total)
    var removeProd = document.getElementsByClassName(prodNum)
    $(removeProd).empty()
}
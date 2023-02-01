function ajax(src, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.responseText;
            callback(data);
        };
     };
    xhr.open("GET", src);
    xhr.send();
}

function render(data) {
    const productList = JSON.parse(data)
    productList.forEach(product => {
        const products = document.createElement("div");
        products.setAttribute("class", "products")
        products.innerHTML =  `
        <h2>${product.name}</h2>
        <p class="price">$${product.price}</p>
        <p class="desc">${product.description}</p>
        `
        document.querySelector("main").appendChild(products)
    })
 // document.createElement() and appendChild() methods are preferred.
}

ajax(
"https://appworks-school.github.io/Remote-Assignment-Data/products",
 function (response) {
    render(response);
 }
); // you should get product information in JSON format and render data in the page
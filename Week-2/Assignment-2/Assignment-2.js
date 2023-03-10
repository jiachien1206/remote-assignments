function avg(data) {
    let totalPrice = 0;
    for (let product of data.products){
        totalPrice += product.price;
    }
    return (totalPrice / data.size).toFixed(2);
};
console.log(
 avg({
   size: 3,
   products: [
     {
       name: 'Product 1',
       price: 100,
}, {
       name: 'Product 2',
       price: 700,
     },
     {
       name: 'Product 3',
       price: 250,
}, ],
 })
); // should print the average price of all products
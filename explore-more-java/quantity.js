const shoppingCart = [
    {name: 'shoe' , Price: 1200, quantity:2 },
    {name: 'pant' , Price: 2500, quantity:6 },
    {name: 'shirt' , Price: 1700, quantity:5 },
    {name: 'belt' , Price: 600, quantity: 2 },
];
function totalCost(products){
    let sum = 0;
    for(let i = 0; i< products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}
const mySelection = totalCost(shoppingCart);
console.log('total const product today',mySelection);
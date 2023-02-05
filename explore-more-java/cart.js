const shoppingCart = [
    {name: 'shoe' , Price: 1200},
    {name: 'pant' , Price: 2500},
    {name: 'shirt' , Price: 1700},
];
function totalCost(products){
    let sum = 0;
    for(let i = 0; i< products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}
const mySelection = totalCost(shoppingCart);
console.log('total const product today',mySelection);
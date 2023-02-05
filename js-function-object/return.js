// function add(number1 , number2){
//     console.log(number1 , number2)
//     var sum = number1 + number2;
//     return sum;
// }

// var total = add(80 , 20);
// console.log("total" , total); 



function bringSingara(money){
    var foodPrice = 10;
    var quantity = money / foodPrice;
    return quantity;
}

var myTaka = 150
var shingaraPrice = bringSingara(myTaka);
console.log('eating singara' , shingaraPrice);
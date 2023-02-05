function multiNumber(numbers){
    let result = 1;
    for(let i = 1; i <=7; i++ ){
        result = result * i;
    }
    return result;
}
const result =  multiNumber(7);
console.log(result);
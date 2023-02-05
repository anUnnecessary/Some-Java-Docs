function isEven(number){
    const reminder = number % 2;
    // console.log(reminder); 
    if(reminder === 0){
        return true;
    }
    else{
       return false;
    }
}


const myNumberIsEven = isEven(48);
console.log(myNumberIsEven)
const herNumberIsEven = isEven(127);
console.log(herNumberIsEven);
function getSumOFAnArray(numbers){
    for(let i = 0; i < numbers.length; i++ ){    
        const index = i;
        const element = numbers[index]
        console.log(index, element);
    }
    
}

const myNumbers = [25,36,77,89,55,24,28,36];
getSumOFAnArray(myNumbers);
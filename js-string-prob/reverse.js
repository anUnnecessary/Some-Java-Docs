function reverseString(text){
    let reversed = ' ' ;
    for (let i = text.length-4; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element , reversed);
    }
    return reversed;
}
const myString = "i am a good boy"
const reversed = reverseString(myString);
console.log('reverse output', reversed)
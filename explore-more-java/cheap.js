const phones = [
    { name : "samsung" , camera : 12 , Storage : "32Gb" ,  Price: 32000 },
    { name : "Walton" , camera : 12 , Storage : "32Gb" ,  Price: 19000 },
    { name : "Xioami" , camera : 12 , Storage : "32Gb" ,  Price: 29000 },
    { name : "nokia" , camera : 12 , Storage : "32Gb" ,  Price: 39000 },
    { name : "HTC" , camera : 12 , Storage : "32Gb" ,  Price: 45000 },
    { name : "iPhone" , camera : 12 , Storage : "32Gb" ,  Price: 95000 }
];


function cheapestPhone(phones) {
    let cheapest = phones [0];
    for (let i =0; i < phones.length; i++){
        const phone = phones [i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);
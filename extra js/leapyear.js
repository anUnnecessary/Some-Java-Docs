function isLeapyear (year){
    const reminder = year % 4;
    if (reminder === 0){
        console.log("Riya is Yours" ,year);
    }
    else{
        console.log("Riya is not yours man!");
    }
}

isLeapyear(1999);
function getAverage (assignment1,  assignment2, assignment3){
    const total = (assignment1 + assignment2 + assignment3);
    const average = total / 3; 
    return average;

}
const assignment1Marks = 57;
const assignment2Marks = 35;
const assignment3Marks = 55;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAverage);
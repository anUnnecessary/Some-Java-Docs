// *75.25,65,80,35.45,99.50
// Mathematics, Physics, Chemistry and Bangla

var mathMarks = 75.25
var biologyMarks = 65
var physicsMarks = 80
var chemistryMarks = 35.45
var Bangla = 99.50

var totalMarks = mathMarks + biologyMarks + physicsMarks + chemistryMarks + Bangla;
console.log(totalMarks);

var avarage = totalMarks / 5
var avarageTwoDecimal = avarage.toFixed(2);
console.log(avarageTwoDecimal);
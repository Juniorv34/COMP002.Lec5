let myGrades = [ 95, 100, 76, 100, 85 ];
let myAverage = 0;
for(let i = 0; i < myGrades.length; i++) {	
    myAverage += myGrades[i];
}
myAverage = myAverage / myGrades.length;
myGrades.push(100);
console.log(myAverage)
console.log(myGrades)
console.log(myGrades.pop())
console.log(myGrades)
let myString = ("Howdy")
console.log(myString.length)
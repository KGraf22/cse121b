// activity 1
let new_array = arr.map(function callback( currentValue[index, array]) {
    // return element for new_array
    return new_array;
}[ thisArg])
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

// activity 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points =3;
    }
    return points;
}

//activity 3
const gpaPoints = grades.map(convertGradeToPoints);
let pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;



// actiity 4

const words =["watermelon","peach","apple","tomato","grape"]
const shortWords= words.filter(function (word) {
    return word.length >6;
});

//activity 5 
const myArray =[12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber); 
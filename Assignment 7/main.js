// Task 1

// var cityName = prompt('Enter your City name')

// if(cityName =='Karachi'){
//     alert('Welcome to city of lights')
// }

// Task 2

// var gender = prompt('Enter your gender')

// if (gender == 'Male') {
//     alert('Good Morning Sir')
    
// }
// else if (gender == 'Female') {
//     alert('Good Morning Maam')
    
// } 

//Task 3

// var signalColor = prompt('Enter a signal color')

// if (signalColor == 'Red') {

//     alert('Must Stop')
    
// }
// else if (signalColor == 'Yellow') {
//     alert('Ready to move')
    
// }
// else if (signalColor == 'Green') {
//     alert('Move now')
    
// }

//Task 4

// var remFuel = prompt('Enter fuel in litres')

// var currentFuel = 0.25

// if (remFuel > currentFuel) {
//     alert('Please refill the fuel in your car')
    
// }

// Task 5 a

// var a = 4
// if (++a === 5) {

//     alert('given condition for variable a is true')
// }

// Task 5 b

// var b = 82
// if (b++ === 83) {
//     alert('given condition for variable b is true')
    
// }

// Task 5 c

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Task 5 d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Task 5 e

// if (true){
//     alert("True");
//     }
// if (false) {
//     alert("false");
// }

// Task 5 f

// if ("car"< "cat") {
//     alert("car is smaller than cat")
    
// }  

// var subject1Marks = +prompt("Enter subject 1 marks")
// var subject2Marks = +prompt("Enter subject 2 marks")
// var subject3Marks = +prompt("Enter subject 3 marks")

// var totalMarks = prompt('Enter total Marks')

// var marksObtained = subject1Marks+subject2Marks+subject3Marks

// var per = (marksObtained/totalMarks)*100

// document.write('<h1>Marksheet</h1>')

// document.write('<p>'+'Total Marks :' + " " + totalMarks +'</p>')
// document.write('<p>'+'Marks Obtained :' + " " + marksObtained +'</p>')
// document.write('<p>'+'Percentage :' + " " + per + '%' +'</p>')


// if (per >= 80) {
//     document.write('<p>Grade : A-one</p>')
//     document.write('<p>Remarks : Excellent</p>')
      
// }
// else if (per >= 70) {
//     document.write('<p>Grade : A</p>')
//     document.write('<p>Remarks : Good</p>')
      
// }
// else if (per >= 60) {
//     document.write('<p>Grade : B</p>')
//     document.write('<p>Remarks : You need to improve</p>')
// }
// else {
//     document.write('<p>Grade : Fail</p>')
//     document.write('<p>Remarks : Sorry</p>')
// }

// Task 7 Guess Game

// var secret = 5

// var guess = +prompt('Enter a number')

// if (guess === secret) {
//     alert('Bingo!')
    
// }
// else if (guess+1 === secret) {
//     alert('Close enough to the correct answer')
    
// }
// else{
//     alert('Try Again')
// }

// Task 8

// var number = prompt('Enter a number')

// if (number % 3 ===0) {
//     alert('this number is divisible by 3')
// }
// else{
//     alert('this number is not divisible by 3')
// }

// Task 9

// var number = prompt('Enter a number')
// if (number==0) {
//     alert('number is not even nor odd')
// }
// else if (number % 2==0) {
//     alert('number is even')
    
// }
// else{
//     alert('number is odd')
// }

// Task 10

// var temperature = prompt('Enter temperature ')
// if (temperature> 40) {
//     alert('It is too hot outside')
// }
// else if (temperature>30) {
//     alert('The Weather today is Normal')
// }
// else if(temperature>20){
//     alert("Today's Weather is cool" )
// }
// else{
//     alert("OMG! Today's weather is so cool")
// }

// Task 11

var number1 = +prompt('Enter first number')
var number2 = +prompt('Enter second number')

var result
var operation = prompt('Enter Operation')

if(operation == '+'){
   var result =  number1+number2
   alert(result)
}
else if (operation == '-') {
    var result =  number1-number2
   alert(result)
}
else if (operation == '/') {
    var result =  number1/number2
   alert(result)
}
else if (operation == '*') {
    var result =  number1*number2
   alert(result)
}

else if (operation == '%') {
    var result =  number1%number2
   alert(result)
}
alert('Thanks for Visiting!')

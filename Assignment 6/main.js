// Task 1

// document.write('<h4>Result:</h4>')

// var number = prompt('Enter a number')

// document.write('<p>' + 'The value of a is'+" " + number + '</p>')

// document.write('<p>..................................</p>')

// ++ number
// document.write('<p>'+'The value of ++number is:'+ number + '</p>')
// document.write('<p>'+'Now The value of number is:'+ number + '</p>')



// document.write('<p>'+ 'The value of number++ is:'+ " " + number+'</p>')
// number++
// document.write('<p>'+ 'Now The value of number is:'+" "+ number+'</p>')



// --number
// document.write('<p>'+ ' The value of --number is:'+" "+ number+'</p\n')
// document.write('<p>'+ 'Now The value of number is:'+" "+ number+'</p>')

// document.write('<p>'+ 'Now The value of number is:'+" "+ number+'</p>')
// number --
// document.write('<p>'+ 'Now The value of number is:'+" "+ number+'</p>')

// Task 3

// var name = prompt('Enter your name')
// alert('welcome'+ ' ' +name)

 // Task 4

// var input = prompt('Enter a number')
// var defValue = 5

// if(input == ""){
//     for(var i=1;i<11;i++){
//     document.write('<p>'+ defValue + 'x'+ i + '='+ (defValue*i) + '</p>') 
// }
// }
// else{
// for(var i=1;i<11;i++){
//     document.write('<p>'+ input + 'x'+ i + '='+ input*i + '</p>')
 
// }
// }

// Task 6

var subjectOne = prompt('Enter 1st subject name')
var subjectTwo= prompt('Enter 2nd subject name')
var subjectThree = prompt('Enter 3rd subject name')

var totalMarks = 100

var subjectOneMarks = +prompt('Enter 1st subject marks')
var subjectTwoMarks = +prompt('Enter 2nd subject marks')
var subjectThreeMarks = +prompt('Enter 3rd subject marks')

var totalMarks2 = totalMarks*3
var allSubjectMarks = subjectOneMarks+subjectTwoMarks+subjectThreeMarks
var finalper = (allSubjectMarks/totalMarks2)*100
document.write('<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>'+subjectOne+'</td><td>'+ totalMarks+'</td><td>'+ subjectOneMarks +'</td><td>'+((subjectOneMarks/totalMarks)*100)+ '</tr><tr><td>'+subjectTwo+'</td><td>'+ totalMarks+'</td><td>'+ subjectTwoMarks +'</td><td>'+((subjectTwoMarks/totalMarks)*100)+'<tr><td>'+subjectThree+'</td><td>'+ totalMarks+'</td><td>'+ subjectThreeMarks +'</td><td>'+((subjectThreeMarks/totalMarks)*100)+'</tr> <tr><td></td><td>'+ (totalMarks2) +'</td><td>'+(allSubjectMarks)+'</td><td>'+(finalper)+'</td></tr></table>')



// Task 5


document.write('<h2>Table of 4</h2>')
for (var i=1 ; i<=10; i++ ){
   
    document.write('<h3>' +'4 × ' + i + '='+ 4*i  +'</h3>')
}

// Task 6

var tempinCelcius = 25

document.write('<h2>' + tempinCelcius + '°C is'+" "+ ((tempinCelcius*9/5)+32)+ '°F' + '</h2>')

var tempinFarenhite = 70

document.write('<h2>' + tempinFarenhite + '°F is'+" "+ ((tempinFarenhite-32)*5/9)+ '°C' + '</h2>')

// Task 7

document.write('<h2>Shopping Cart</h2>')

var priceOfItem1 = 650
var priceOfItem2 = 100

var QtyOfItem1 = 3
var QtyOfItem2 = 7

var shoppingCharges = 100

document.write('<p>' + 'Price of Item 1 is'+" " + priceOfItem1 + '</p>')
document.write('<p>' + 'Quantity of Item 1'+ QtyOfItem1 + '</p>')


document.write('<p>' + 'Price of Item 2 is'+ " " + priceOfItem2 + '</p>')
document.write('<p>' + 'Quantity of Item 2'+ " " + QtyOfItem2 + '</p>')
document.write('<p>'+ 'Shopping Charges' + " " + shoppingCharges + '</p> \n')

document.write('<p>'+ 'Total cost of your order is'+" "+ ((priceOfItem1*QtyOfItem1)+(priceOfItem2*QtyOfItem2) + shoppingCharges)+ '</p>')

//Task 8

document.write('<h2>Marks Sheet</h2>\n \n')

document.write('<p>Total marks: 980 </p>')
document.write('<p>Marks obtaibed: 804</p>')
document.write('<p>'+ 'Percentage:'+ " " + ((804/980) *100)+'</p>')

// Task 9

document.write('<h2>Currency in PKR</h2>')

document.write('<p>' + 'Total Currency in PKR:' + " " + ((10*104.80)+(25*28)) +  '</p> \n')

// Task 10

var number = 4

document.write('<p>'+ ((number +5)*10)/2 + '</p>')

// Task 11

document.write('<h2>Age Calculator</h2>')
var currentYear = 2023

var birthYear = prompt('Enter Birth year')

document.write('<p>'+'Current Year:' +" "+ currentYear + '</p>')
document.write('<p>'+ 'Birth Year:' +" " + birthYear +'</p>')

document.write('<p>'+'Your Age is:'+" "+ (currentYear-birthYear) + '</p>')

// Task 12

document.write('<h2>The Geometrizer</h2>')

var radius = 20

var pi = 3.412

var circumference = 2*(pi*radius)

var area = (pi*(r*r))

document.write('<h2>The Geometrizer</h2>')
document.write('<p>'+ 'Radius of circle is '+ " " + radius +'</p>')
document.write('<p>'+ 'The circumference  is '+ " " + circumference +'</p>')
document.write('<p>'+ 'The Area  is '+ " " + area +'</p>')


// Task 13

var favSnack = 'Choco Lava'
var currentAge = 21
var maxAge = 50

var aosPerday = 2

document.write('<p>'+ 'You will need '+ ((maxAge-currentAge)*aosPerday)+ 'Choco Lava to last you until the ripe old age of'+ maxAge+'</p>')



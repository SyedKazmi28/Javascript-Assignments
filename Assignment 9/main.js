let arr = [] ;



let strArray = ["apple", "mango", "banana","orange"]

let numArray = [0, 1, 2, 3, 4, 5]


let boolArray = [true , false , false , true, true]


let mixArray = ["apple", 2, true, 5, "mango", false]


let qualificationinPK = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]  


// document.write("<h1>Qualifications</h1>")
// document.write("<h1>" + qualificationinPK  + "</h1>")

let stdnames = ["Ali", "Zain", "Saif"]

let stdscore = [320 , 400 , 250]

// document.write("<h1> Score of" + " " + stdnames[0]+ " " + "is"+ " " + stdscore[0]+ "." + " "  + "Percentage:" + (stdscore[0]/500)*100 +  "% </h1>")
// document.write("<h1> Score of" + " " + stdnames[1]+ " " + "is"+ " " + stdscore[1]+ "." + " "  + "Percentage:" + (stdscore[1]/500)*100 +  "% </h1>")
// document.write("<h1> Score of" + " " + stdnames[2]+ " " + "is"+ " " + stdscore[2]+ "." + " "  + "Percentage:" + (stdscore[2]/500)*100 +  "% </h1>")


let color = ["yellow", "red", "black", "blue"]

// document.write("<h1>"+ color +"</h1>")


// const addcolor = prompt("which color do you want to add to the beginning")

// color.unshift(addcolor)

// document.write("<h1>"+ color +"</h1>")

// const endcolor =prompt("which color do you want to add to the end")

// color.push(endcolor)
// document.write("<h1>"+ color +"</h1>")


// color.unshift("grey", "purple")
// document.write("<h1>"+ color +"</h1>")


// color.shift()
// document.write("<h1>"+ color +"</h1>")


// color.pop()
// document.write("<h1>"+ color +"</h1>")


// const colorName = prompt("which color do you want to add")
// const colorPosition = prompt("at which index you want to add the color")

// color.splice(colorPosition,0,colorName)
// document.write("<h1>"+ color +"</h1>")


// const colorIndex = prompt("at which index you want to delete a color")
// const colorQty = prompt("how many colors do you want to delete")

// color.splice(colorIndex,colorQty)
// document.write("<h1>"+ color +"</h1>");

////////////


let scoreOfStds = [320,220,480,120] 

// document.write("<h1> Scores of Students:"+ scoreOfStds+"</h1>")
scoreOfStds.sort()

// document.write("<h1> Ordered Scores of Students:"+ scoreOfStds +"</h1>")

//////////////

let cityNames = ["Karachi", "Islamabad","Lahore", "Quetta", "Balochistan"]

// document.write("<h1> Cities list:"+ "<br>" + cityNames +"</h1>")

let selectedCities = cityNames.slice(0,2)

// document.write("<h1> Selected cities list:"+ "<br>" + selectedCities  +"</h1>")

////////////

let arr1 = ["This", "is", "my" , "cat"]
// document.write("<h1> Array:"+ "<br>"+ arr1 +"</h1>")

let strarr= arr1.join(" ")
// document.write("<h1> String:"+ "<br>"+ strarr +"</h1>")


////////


let devicesFifo = ["keyboard","mouse","printer","moniter"]

// document.write("<h1> Devices:"+ "<br>"+ devicesFifo +"</h1>")

// document.write("<h1> Out:"+ "<br>"+ devicesFifo.shift() +"</h1>")
// document.write("<h1> Out:"+ "<br>"+ devicesFifo.shift() +"</h1>")
// document.write("<h1> Out:"+ "<br>"+ devicesFifo.shift() +"</h1>")
// document.write("<h1> Out:"+ "<br>"+ devicesFifo.shift() +"</h1>")

////////


let devicesLifo = ["keyboard","mouse","printer","moniter"]


// document.write("<h1> Devices:"+ "<br>"+ devicesLifo +"</h1>")

// document.write("<h1> Out:"+ "<br>"+ devicesLifo.pop() +"</h1>")
// document.write("<h1> Out:"+ "<br>"+ devicesLifo.pop() +"</h1>")
// document.write("<h1> Out:"+ "<br>"+ devicesLifo.pop() +"</h1>")
// document.write("<h1> Out:"+ "<br>"+ devicesLifo.pop() +"</h1>")

/////////

let phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<h> <select value=select company><option>"+ phone[0]+"</option><option>"+ phone[1]+"</option><option>"+ phone[2]+"</option><option>"+ phone[3]+"</option><option>"+ phone[4]+"</option> <option>"+ phone[5]+"</option></select> </h1>")
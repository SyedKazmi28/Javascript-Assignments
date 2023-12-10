

// let num = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// for(let i =0;i<num.length;i++){
//     let matrix = ""
//     for(let j=0;j<num[i].length;j++){
//     matrix+= num[i][j] + " "
// }
// console.log(matrix);
// }

// let reverseCount = ""
// for(let j=10; j>=1; j--){
//     console.log(j);
// }
// console.log(reverseCount);

// Finding largest number in Array

let number = [24,53,78,91,12]

// let largestNumber = number[0]

// for(let i=1; i<number.length; i++){
//     if(number[i]>largestNumber){
//         largestNumber= number[i]
//     }
// }
// console.log(largestNumber);


///  largnum = 24   i=1  check if 53 > 24 then largnum =53
///  largnum = 53   i=2  check if 78 > 53 then largnum = 78
///  largnu  = 78   i=3  check if 91 > 78 then largnum = 91
///  largnum = 91   i=4  check if 12 > 91 then condition will become false   

/// Using Spread and math.max() method

// let result = Math.max(...number)
// console.log(result);

///// Find Smallest number in Array
let smallestNumber = number[0]

for(let i=1; i<number.length; i++){
    if(number[i]<smallestNumber){
        smallestNumber = number[i]
    }
}
// console.log(smallestNumber);


/// Using Spread and Math.max() method

let result2 = Math.min(...number)
// console.log(result2);


let carName = "Civic", carModel = 2002 , carPrice = 700000

console.log(carName,carModel,carPrice);
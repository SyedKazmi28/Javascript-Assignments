const bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

let itemInput = prompt("Enter item")
 
let itemInputToLower = itemInput.toLowerCase()


for (const item of bakeryItems) {

    if(itemInputToLower == item){
        console.log(`${itemInputToLower} is available at index ${item.indexOf(itemInputToLower)}`);
    }
    
}
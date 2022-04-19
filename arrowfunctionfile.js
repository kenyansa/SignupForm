//Simple comparison of funcitons and arrowfucntions
function printBook(book){
    console.log(book)
}
const printBookArrow = (book)=>{
    console.log(book)
}
printBook("Eloquent JavaScript")
printBookArrow("You don\'t know JS" );

//comparisons for return values
const watchMovie = function (movie){
    return movie;
}
const watchSermon = sermon =>sermon 
//or
const watchSermon1 = sermon1 =>{
    return sermon1
}
//Demonstrating for...of loop for iterating through array elements
const nums = [10,20,30,40];
for(const value of nums){
    console.log(value);
}
// for...of loop for iterating through a string
const utesi = "carohera";
for(const value of utesi){
    console.log(value);
}

const jaribu = "Kenyansa";
for(const digiti of jaribu){
    console.log(digiti);
}
// Using for...in loop to iterate through an object
const girlfriends = { girlfriend1: "Carohera", girlfriend2: "Abby", girlfriend3: "Ruth"};

for (const name in girlfriends) {
  console.log(`${name}: ${girlfriends[name]}`);
}

// Using map method
let laptops = [
{
    model: 'hp',
    price: 400,
    stock: 10,
},
{
    model: 'toshiba',
    price: 500,
    stock: 15,
},
{
    model: 'macbook',
    price: 1500,
    stock: 8,
},
{
    model: 'lenovo',
    price: 280,
    stock: 20,
}
]
//take an stock array as an argument and a function that will update my stock items
//we're going to loop thruogh every item in the array and update the item properties.
//we'll then push the laptop properties to a new array and return the updated array

function updateStockOfLaptops(stock, updaterStock){
    let updatedStockArray = []
    for(const item of stock){
        console.log(updaterStock(item));
    }
}
//create a function that takes item as an argument and updates the prices to 50% off
function fiftyPercentDiscount(item){
    item.price = Math.floor((item.price)/2)
    return item
}
console.log(updateStockOfLaptops(laptops, fiftyPercentDiscount));

//Updating the stock of the laptops by 10
function stockLaptops(item){
    item.stock +=10
    return item
}
console.log(updateStockOfLaptops(laptops, stockLaptops))
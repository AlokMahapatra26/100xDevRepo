// // // example one
// // const playerOneName = "tim";
// // const playerTwoName = "jenn";
// // const playerOneMarker = "X";
// // const playerTwoMarker = "O";

// // // example two
// // const playerOne = {
// //   name: "tim",
// //   marker: "X"
// // };

// // const playerTwo = {
// //   name: "jenn",
// //   marker: "O"
// // };


// //OBject constructor

// function Product(name , description , price , stock){
//     this.name = name;
//     this.description = description;
//     this.price  = price;
//     this.stock = stock
//     this.addToCard = function(){
//         console.log("Added to cart")
//     }
// }

// Product.prototype.protoFunc = function(){
//     console.log(this , "Proto func running");
// }
// Product.prototype.protoFunc2 = function(){
//     console.log(this , "Proto func2 running");
// }
// Product.prototype.protoFunc3 = function(){
//     console.log(this , "Proto func3 running");
// }

// const speaker = new Product('Boat 02' , "best speaker in market" , 2000 , 12);
// const earphone = new Product('boat x2' , "best earphone" , 3000 , 30);

// // speaker.protoFunc();
// // earphone.protoFunc();

// //Method 1 for getting prototype
// // console.log(Object.getPrototypeOf(earphone) , this);

// //Method 2 forgetting prototype -- deprecated
// console.log(speaker.__proto__)



// // console.log(speaker);
// // console.log(earphone);

// // console.log(Object.getPrototypeOf(speaker) === Product.prototype )


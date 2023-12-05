// console.log("Hello World")

// let firstName = "Alok Mahapatra";
// let age  = 19;
// let isMarried = false;

// if(isMarried){
//     console.log(`Alok is Married`)
// }else{
//     console.log(`Alok is Unmarried`)
// }

// let count = 0;
// for(let i = 0; i <  1000 ; i++){
//     count+=1;
// }

// console.log(count);

// const ages = [21, 34,54,32,75,98];
// for(let i = 0; i< ages.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }


//Find Largest number in an array
//  let score = [3200 , 7800 , 5466 , 9800 ,7656 , 7656 ,9878 , 9876 , 9003 , 5436 , 9990 , 1204 , 8734 , 10000];

//  let biggest = 0;
// for(let i = 0; i < score.length; i++){
    
//     if(biggest < score[i]){
//         biggest = score[i]
//     }
    
// }

// console.log(biggest);

// const persons = [
//     {
//         firstName : "Alok",
//         age: 19,
//         gender : "Male",
//         course : "BCA"
//     },
//     {
//         firstName : "Vikas",
//         age: 18,
//         gender : "Male",
//         course : "BBA"
//     },
//     {
//         firstName : "Sandhya",
//         age: 20,
//         gender : "Female",
//         course : "CS"
//     },
//     {
//         firstName : "Tarun",
//         age: 21,
//         gender : "Male",
//         course : "Btech"
//     }
// ]

// function personDataAnalyser(data){
     
//     var result = {
//         totalPersons: data.length,
//         male : 0,
//         female : 0,
//     }

//     for(let i = 0; i < data.length; i++){

       

//         if(data[i].gender == "Male"){
//             result.male += 1;
//         }else{
//             result.female += 1;
//         }
//     }

//     return result;
// }


// analyseData = personDataAnalyser(persons);
// console.log(analyseData);

//Resverse an array
// const arr = [1,2,3,4,5,6,7,8,10 ];

// function reverse(arr){
//     let start = 0;
//     let end = arr.length-1;
//     while(start < end){
//         [arr[start],arr[end]] = [arr[end],arr[start]];
//         start++;
//         end--;
//     }
    
// }

// reverse(arr);
// console.log(arr);

//FUNCTION

// let sum = 0;
// for(let i =0; i<1000000000000; i++)
// {
//     sum+=1;
// }

//CAllback

// function calculateArithmetic(a,b,func){
//     const ans = func(a,b);
//     return ans;
// }

// function add(a,b){
//     return a + b;
// }

// function sub(a,b){
//     return a- b;
// }

// const val = calculateArithmetic(3,3,sub);
// console.log(val);

//SetTimeOut

// function greet(){
//     console.log("hello World");
// }

// setTimeout(greet , 2000);
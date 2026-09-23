// function prime(num)
//       {
//         for(let i=2 ; i<num ; i++)
//         {
//         if (num % i === 0)
//         {
//             return false;
//         }
//     }
//            return true;

//     }
//         console.log(prime(2));
//         console.log(prime(8));
//         console.log(prime(23));
//         console.log(prime(57));
//         console.log(prime(83));
//         console.log(prime(99));

// function string_reverse(str) {
//     // Split the string into an array of characters, reverse the order, and join them back into a string
//     return str.split("").reverse().join("");
// }

// // Log the result of calling string_reverse with the argument "w3resource" to the console
// console.log(string_reverse("RIWWASUM"));
// let cube = num => num*num*num;
// console.log(cube(25658));
// let alarm = () => console.log(`Subha ho gyi uth Mamu.........${new Date()}`);
// let intervalid=  setInterval(alarm, 1000);
// setTimeout (() =>  clearInterval(intervalid), 5000);
// let array = [1,2,3,4,5,6,7,8,9,0];
// let square = array.map(num => (num*num)) ;
// console.log(square);

// for (let i = 1; i <= 5; i++)
//     {
//    let string
//     for (let j = 1; j <= i; j++) {
//         console.log("string+=*");
//     }
//     console.log(" ");
// }
// console.log(" string");

// for (let i = 1; i <= 5; i++)
//     {

//     for (let j = 1; j <= i; j++)
//     {
//         console.log("*");
//     }
//         console.log("\n");
//     }

// const student = {
//      Name : 'Husain' ,
//      age : 21 ,
//      course : 'B.E' ,
//      marks : {
//         Maths : 95 ,
//         Science : 86,
//         Computer : 78
//      }

// };

// student.Hobby = "Singing",
// student.class = "2nd",
// delete student.class,
// console.log(student)

// let str = "Musawwir";
// let array = str.split("");
// console.log(array);

// let count = ['one' , 'Two' , 'Three' , 'Four' , 'Five'] ;
// count.copyWithin(0,4);
// console.log(count);

// let name1 = 'Musawwir Husain';
// let nm =  'Rehmaan';

// let r = 3 ;
// let h = 7 ;

// let V = 1/3 *Math.PI * Math.pow(r,2)* h ;
// console.log(V);

// let a = +prompt('Enter first number : ');
// let b = +prompt('Enter second number : ');
// if (a>b)
//     {
//         console.log(`Number a is larger than b : ${a}`);
//     }
//     else
//     {
//         console.log(`Number b is larger than a : ${b}`);
//     }

// let a = +prompt('Enter number : ');

// if (a%2==1)
// {
//     console.log(`Number is odd `);
// }
// else if(a%2!=1)
// {
//     console.log(`Number is even `);
// }
// else
// {
//     console.log(`Number is zero `);
// }

// let date = new Date();
// let hours = date.getHours();
// let years = date.getFullYear();
// let min = date.getMinutes();

// console.log(date);
// console.log(hours);
// console.log(years);
// console.log(min);

// let product = {
//     size : 'M',
//     Color : 'Red' ,
//     Price : 499 ,
//     rating : {
//         reviws : 'Good' ,
//         stars : 4 ,
//     }

// }
// console.log(product);

// function sum(a,b)
// {
//     let sum = a+b;
//  console.log(sum);
// }

// sum(5,8);
// sum(5,-8);
// sum(2.5,3.5);

// function person(name='John')
// {
//     console.log(`Hello ${name}`);

// }
// person()
// let displayPi = function (){
//     console.log('pi = 3.14');
// }
// displayPi()
//     const count = document.querySelector('.count')
// const btn_plus = document.querySelector('.plus_button')
// const btn_minus = document.querySelector('.minus_button')
// const changeBy = document.querySelector('.changeBy')
// const resetBtn = document.querySelector('.resetBtn')

// btn_plus.addEventListener('click' , () =>{
//     const countValue = parseInt(count.innerText)
//     const changeByValue = parseInt(changeBy.value)
//     count.innerText = countValue + changeByValue
// })
// btn_minus.addEventListener('click' , () =>{
//     const countValue = parseInt(count.innerText)
//     const changeByValue = parseInt(changeBy.value)
//     count.innerText = countValue - changeByValue
// })
// resetBtn.addEventListener('click' , () =>{
//     count.innerText = 0

// })
// let a = [1,2,3,4,5];
// let b = [];
// for(let i=0 ; i=a.length ; i++)
// {
//     b[i] = a [i]
// }
// console.log(b[i]);

// let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

// console.log(
//   fruits.forEach((fruit) => {
//     console.log(fruit);
//     return fruit.toUpperCase();
//   })
// );

// console.log(
//   fruits.map((fruit, i) => {
//     console.log(i + 1, fruit);
//     return fruit.toUpperCase();
//   })
// );

// let obj = {
//   Name: "Musawwir",
//   Age: 30,
//   Add: {
//     Distt: "Amroha",
//     Mob: 8505860986,
//   },
// };
// console.log(obj.Add);

// function user(a, b) {
//   let c = a * b;
//   console.log(c);
// }
// user(60, 50);
fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err);
  });

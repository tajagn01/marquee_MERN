// const int = document.querySelector('.int');
// const btn = document.querySelector('.btn');
// const list = document.querySelector('.list')
// const arr = []



// btn.addEventListener('click',() => {
//     arr.push(int.value);
//     console.log(arr);
//     int.value = " ";

//     list.innerHTML = arr.map((e,ind) =>{
//     return `<div>${e}</div>
//     <button onclick="remove(${ind})">remove</button>`;
// }).join(" ");


// })


// function remove(ind){
//     arr.splice(ind,1);
//         list.innerHTML = arr.map((e,ind) =>{
//     return `<div>${e}</div>
//     <button>remove</button>`;
// }).join(" ");
// }



// function Print(){
//    console.log("Hi this is function without arg....")
//      return  function(){
//     console.log("Hi There");
// }
// }

// function Add(a,b){
//     console.log(a+b);
//     function Add3(a,b){
//     return a+b;
// }
// }

// Print()();

// function Add3(a,b){
//     return a+b;
// }


// console.log(Add3(3,4))
// console.log(Add(3,4))
// Print()


// const a = () => {
//     console.log("hi there");
// };

// a();


// const detail = {
//     name: "riya"
// }
// detail.name = "raj"
// console.log(detail.name);


// function name(msg){
//     return msg;



// }

// function hello(jiii){
//     console.log(jiii);
// }

// hello(name("hello"));


const numbers = [20, 18, 16, 22, 34,88];
const multipliedNumbers = numbers.map(n => n * 5);
console.log(multipliedNumbers); 

const filteredNumbers = numbers.filter(n => n > 20);
console.log(filteredNumbers);




function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3, 3]));

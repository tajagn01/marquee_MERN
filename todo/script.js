const int = document.querySelector('.int');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list')
const arr = []



btn.addEventListener('click',() => {
    arr.push(int.value);
    console.log(arr);
    int.value = " ";

    list.innerHTML = arr.map((e,ind) =>{
    return `<div>${e}</div>
    <button onclick="remove(${ind})">remove</button>`;
}).join(" ");


})


function remove(ind){
    arr.splice(ind,1);
        list.innerHTML = arr.map((e,ind) =>{
    return `<div>${e}</div>
    <button>remove</button>`;
}).join(" ");
}

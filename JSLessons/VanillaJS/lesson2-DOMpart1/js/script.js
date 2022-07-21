// DOM -> Document Object Module

// Selectors
// for (let index = 0; index < 10; index++) {
//     document.getElementsByTagName('h1')[index].innerHTML = "new value";
    
// }

// document.getElementById('a').innerHTML = "new value";
// document.getElementsByClassName('b')[1].innerHTML = "new value";



// Query Selector
// document.querySelector
// document.querySelectorAll

// document.querySelector('#j').innerHTML = "new value";
// document.querySelector('#j').innerHTML="<i>Hello</i>";
// document.querySelector('#j').innerText="<i>Hello</i>";




// const btn  = document.querySelector('button');
// const text  = document.querySelector('.mytext');

// const newAction=()=>{
//     text.innerHTML = "new value";
//     text.style.color = "red";
//     text.style.backgroundColor = "green";
// }

// btn.addEventListener('mouseover',newAction);
// btn.onclick = newAction;



const btn = document.querySelector('.btn');
const text = document.querySelector('h1');


const newAtionOne = ()=>{
    text.attributes[1].value = "sebuhi";
}
btn.onclick = newAtionOne;








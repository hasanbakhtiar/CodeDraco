document.querySelector('button').onclick = ()=>{
    const a = document.createElement('li');
    a.innerHTML = document.querySelector('input').value;
    const b =  document.querySelector(".todo");
    b.appendChild(a);
    document.querySelector('input').value = "";
    a.onclick = ()=>{
        a.style.textDecoration = 'line-through'
    }
    a.ondblclick = ()=>{
        a.remove();
    }
}




// const mext = document.querySelector('ol');
// const test = document.querySelector('h1');

// // test.innerHTML = text.lastChild.firstChild.nodeValue;
// // test.innerHTML = mext.childNodes[1].firstChild.nodeValue;
// test.innerHTML = document.querySelector('.a').previousSibling.firstChild.nodeValue
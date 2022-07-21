const btn = document.querySelector('.navBtn');
const nav = document.querySelector('.navList');


const toggleNav =()=>{

    if (nav.attributes[0].value === "show") {
        nav.attributes[0].value = "hide"
        btn.innerHTML = ">"
    }else{
        nav.attributes[0].value = "show"
        btn.innerHTML = "X"

    }
    
}   

btn.onclick = toggleNav;
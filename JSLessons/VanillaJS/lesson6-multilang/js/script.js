// selectors
const navMenu = document.querySelector('nav');
const modeBtn = document.querySelector('#mode-btn');

// multiLang
// multilang selectors
const langItems = document.querySelectorAll('a');
const langBtn = document.querySelector('#lang-btn');


// function
const mode  = ()=>{
    if (navMenu.className == 'navbar navbar-expand-lg navbar-light bg-light' ) {
        navMenu.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
        modeBtn.innerHTML = '🌞';
        modeBtn.className = 'btn btn-light'
        langBtn.className = 'btn btn-light'
    }else{
        navMenu.className = 'navbar navbar-expand-lg navbar-light bg-light';
        modeBtn.innerHTML = '🌙';
        modeBtn.className = 'btn btn-dark'
        langBtn.className = 'btn btn-dark'
    }
}

modeBtn.onclick = mode;






// data array
const az = ["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"];
const en = ["Home","About","Services","Blog","Contact"];

//function
const multiLang = ()=>{
       if (langBtn.innerHTML == "AZ") {
            for (let index = 0; index < az.length; index++) {
                langItems[index].innerHTML = az[index];
                langBtn.innerHTML = "EN"
            }
       } else{
        for (let index = 0; index < az.length; index++) {
            langItems[index].innerHTML = en[index];
            langBtn.innerHTML = "AZ"
            
        }
       }
}

// action
langBtn.onclick = multiLang;
// var -> variable -> global
// const -> constant -> local
// let -> local



// // global

// if (true) {
//     // c1
//     // local global
//     if (true) {
//         // c2
//         // local global
//         if (true) {
//             const info = "Hello";
//             // c3
//             // local
//         }


//     }
// }

// console.log(info);
// const a =5;
//  a = 10;
// console.log(a);

// while
// let a = 0;
// while(a<1000){
//     console.log(a);
//     a+=100;
// }
// do while

// for
// for in
// for of


// const a = ["table", "pen","desc",[1,2,[true,false,['Hello',["Mello"]],],3]];

// console.log(a[3][2][2][1][0]);

// const a = ["table","pen","book"];
// for(x in a){
//     console.log(a[x]+x);
// }
// for(x of a){
//     console.log("Hello");
// }

// saat 5dən 12dək-> good morining  
// saat 7de desin ki get up
// saat 9da have breakfast

// saat 12den 17dek-> good afternoon 
// saat 17den 22dek-> good evening
// 23 sonra-> good night


// const myTime = 100;


// if ((myTime > 5) && (myTime < 12)) {
//     console.log("good morining ");
//     if (myTime == 7) {
//         console.log("Get up");
//     }else if(myTime == 9){
//         console.log('have breakfast');
//     }
// } else if ((myTime >= 12) && (myTime < 17)) {
//     console.log("good afternoon ");
// } else if ((myTime >= 17) && (myTime < 22)) {
//     console.log("good evening ");
// } else if (myTime == 23) {
//     console.log("good night ");
// } else {
//     console.log('no time');
// }


// const inputUser = "ElgunDraco";
// const inputPass = "elgUn132a";


// const dataUser = "ElgunDraco";
// const dataPass = "elgUn132"

// if ((inputUser === dataUser)&&(inputPass===dataPass)) {
//     console.log('login success');
// }else{
//     console.log('username or password wrong!');
// }


// (function infoFunc(a=5,b=10) {
//     console.log(a+b);
// })(100,200)

// function infoFunc (ad,soyad){
//     this.name = ad;
//     this.surname = soyad;
//     return this.name + this.surname;
   
   
// }

// infoFunc.prototype.color = "White";
// const myInfo = new infoFunc("Elgun","Shirinov");

// console.log(myInfo.color);




// infoFunc();


// const carData = {
//     model: (data)=>{
//         console.log(data);
//     },
//     color: 'White',
//     year: 2002
// }
// console.log(carData.model("BMW"));



// const text = document.getElementsByTagName('li');

// for( let a = 0 ; a < 5; a++){
    
    //     text[a].style.color = "red";
    // }
    
const text = document.getElementsByTagName('li');
const az = ["Ana Sehife", "Haqqimizda","Xidmetlerimiz","Meqale", "Elaqe"];
const en = ["Home", "About","Services","Blog", "Contact"];
const multiBtn = document.querySelector('button');

const multiLang =()=>{

  if (multiBtn.innerHTML == "EN") {
    for (let index = 0; index < en.length; index++) {
        text[index].innerHTML = en[index];
        
    }
    multiBtn.innerHTML = "AZ";

  }else{
    for (let index = 0; index < az.length; index++) {
        text[index].innerHTML = az[index];
        
    }
    multiBtn.innerHTML = "EN"

  }
}

multiBtn.addEventListener('click',multiLang);







// function Car(brand,year,color){
//         this.mybrand = brand;
//         this.myyear = year;
//         this.mycolor = color;
// }

// const myCar = new Car("BMW",1993,"red");
// console.log(myCar.mybrand);

// ES6

// class Car {
//     constructor(year){
//         console.log('running constructor...');
//         this.caryear = year;
//     }
//     infomodel(a){
//         return `My Car is ${a}`
//     }
//     calculateCarAge(carname){
//             return `${carname} is ${new Date().getFullYear()- this.caryear}`
//     }
// }

// const myCar = new Car(1993);
// console.log(myCar.infomodel("BMW"));
// console.log(myCar.calculateCarAge("BMW"));

class Car {
  constructor(year, name) {
    this.ad = name;
    this.il = year;
  }
  calculateCarAge() {
    return `${this.ad} is ${new Date().getFullYear() - this.il}`;
  }
}

class Moto extends Car {
  sayName() {
    return "Hello";
  }
}

const myCar = new Car(1993, "BMW");
const myCar1 = new Car(2000, "Lada");
const myCar2 = new Car(2021, "Mercedes");

const myMoto = new Moto(2000, "Yamaha");
console.log(myMoto.calculateCarAge());

console.log(myCar.ad);
console.log(myCar1.ad);
console.log(myCar2.ad);
console.log(myCar.calculateCarAge());
console.log(myCar1.calculateCarAge());
console.log(myCar2.calculateCarAge());



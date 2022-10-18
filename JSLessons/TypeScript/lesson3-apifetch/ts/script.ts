var row: any = document.querySelector<HTMLDivElement>(".row");
var countStart: number = 0;
var countEnd: number = 50;

var countryData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res: any) => res.json())
    .then((data: any) => {
      let div: string = "";
      // data.map((fd:any,i:number)=>{
      //     console.log(fd);})
      for (let x: number = countStart; x < countEnd; x++) {
        console.log(data[x + 1]);
        div += `<div data-aos="flip-left" class="card" style="width: 18rem;">
        <img src="${data[x].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[x].name.common}</h5>
          <p>${x + 1}</p>
        </div>
      </div>`;
      }

      row.innerHTML = div;
    });
};

document.querySelectorAll("button")[0].onclick = () => {
  countStart = 0;
  countEnd = 50;
  countryData();
};
document.querySelectorAll("button")[1].onclick = () => {
    countStart = 50;
    countEnd = 100;
    countryData();
  };

  document.querySelectorAll("button")[2].onclick = () => {
    countStart = 100;
    countEnd = 150;
    countryData();
  };
  document.querySelectorAll("button")[3].onclick = () => {
    countStart = 150;
    countEnd = 200;
    countryData();
  };
  document.querySelectorAll("button")[4].onclick = () => {
    countStart = 200;
    countEnd = 250;
    countryData();
  };
  
countryData();

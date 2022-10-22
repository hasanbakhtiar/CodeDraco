// request - sorgu 
// response - cavab 

// const comeData = new Promise((success,reject)=>{
//     const resData = false;
//     if (resData) {
//         success('this responce is successfully');
//     }else{
//         reject('this responce is wrong...')
//     }
// })
// comeData
// .then((res)=>console.log("Data",res))
// .catch(err=>console.log('Error',err))

// const axios = require('axios');

// function comeCountry(){
//     axios
//     .get('https://restcountries.com/v3.1/all')
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
// }
// comeCountry();

const axios = require('axios');

async function comeCountry() {
    const countryList = await axios.get('https://restcountries.com/v3.1/all');
    console.log(countryList);
    
}
comeCountry();
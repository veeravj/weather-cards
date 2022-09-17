fetch('https://restcountries.com/v3.1/all')
.then((data)=>data.json())
.then((countries)=>{
     // console.log(countries);
     countryCard(countries)
     // console.log(countries);
} )
.catch((errorMsg)=>console.log(errorMsg))

function countryCard(countries){
    let cards=document.querySelector(".row");
    countries.forEach((country)=>{   cards.innerHTML+=`<div class="col-lg-4 col-sm-12">
                    
    <div class="card " style="width: 18rem;">
        <div class="card-header">
      <header>${country.name.common}</header>
       </div>
         
        
            <img  src="${country.flags.svg}" class="card-img-top" alt="flag">
            <div class="card-body">
                 <h5 class="card-title">Capital:${country.capital}</h5>
                 <p class="card-text">Region:${country.region}</p>
                 <p class="card-text">Country Code:${country.cioc}</p>
                 <a href="#" onclick="getWeather(${country.latlng[0]},${country.latlng[1]})"   class="btn btn-primary weather-button">Click for Weather</a>
               <!--<p class="weather"></p>-->
            </div>
     </div>

</div>`
}
);
 
}

function getWeather(lat,lan){
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=b912f8434d2cf2ebe775aba24c01eb0f`)
     .then((data)=>data.json())
     .then((data)=>{
          // document.querySelector(".weather").innerText=`Weather:${data.weather[0].description}`;
          alert(`WEATHER:${data.weather[0].main}
TEMPERATURE:${data.main.temp}
DESCRIPTION:${data.weather[0].description}`)
          // console.log(data);
          // console.log(data.weather[0].description)});
     // console.log(lat,lan);
     // alert(``);
     });
}

// countryCard();
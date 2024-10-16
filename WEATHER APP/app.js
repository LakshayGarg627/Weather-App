const apikey = "6ae7dc84ae4c418fa7b100920ac6161b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");

const weatherimg=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

    

    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;
    
    if(data.weather[0].main=="Clouds"){
        weatherimg.src="images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weatherimg.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherimg.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherimg.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherimg.src="images/mist.png";
    }else if(data.weather[0].main=="Snow"){
        weatherimg.src="images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchinput.value);
    searchinput.value="";
    
})


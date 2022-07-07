let weatherApi = {
    key: "b902038244c090aa774251292971cff2",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
  };
  
  let searchInputBox = document.getElementById("search_input");
  
  searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      getReport(searchInputBox.value);
    }
  });
  
  
  function getReport(city) {
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
      .then((weather) => {
        return weather.json();
      })
      .then(showReport);
      
  }
  
  
  function showReport(weather) {
  
    let city = document.getElementById("city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  
    let temperature = document.getElementById("temp");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  
    let minMaxTemp = document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(
      weather.main.temp_min
    )}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
  
    let weatherType = document.getElementById("weather");
    weatherType.innerHTML = `${weather.weather[0].main}`;
  
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
  
  
    if(weatherType.textContent=='Clear'){
      document.body.style.backgroundImage='url(img/sunny.jpg)';
    }else if(weatherType.textContent=='Clouds'){
      document.body.style.backgroundImage='url(img/istockphoto-940404238-612x612.jpg)';
    }
    else if(weatherType.textContent=='Dust'){
      document.body.style.backgroundImage='url(img/d4caf8e3ad010b8bdc586397b310b388.jpg)';
    }
    else if(weatherType.textContent=='Rain'){
      document.body.style.backgroundImage='url(img/261cacab-fa60-4bf2-a8e0-e76bf5ae643e.jpg)';
    }
    else if(weatherType.textContent=='Snow'){
      document.body.style.backgroundImage='url(img/1.webp)';
    }
    else if(weatherType.textContent=='Thunderstorm'){
      document.body.style.backgroundImage='url(img/9.webp)';
    }
    else if(weatherType.textContent=='Sunny'){
      document.body.style.backgroundImage='url(img/sunny.jpg)';
    }
    else{
      document.body.style.backgroundImage='url(img/d4caf8e3ad010b8bdc586397b310b388.jpg)';
    }
  }
  

  
  function dateManage(dateArg) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    let date = dateArg.getDate();
    let month = months[dateArg.getMonth()];
    let day = days[dateArg.getDay()];
    let year = dateArg.getFullYear();
    
    return `${date} ${month} ${year}, (${day})`;
  
    
  }
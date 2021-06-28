
const API_KEY = "f4ea50cdc8bc01a38d159901b1d86f81";

function onGeoOk(position){
    const lat = position.coords.latitude;   
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch(url) : 자바 스크립트가 url 요청
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}
//navigator.geolocation.getCurrentPosition(실행될 함수 , 오류났을때 함수); : gps 수집 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
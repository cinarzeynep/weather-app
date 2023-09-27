require('dotenv').config();

const url = 'https://api.openweathermap.org/data/2.5/';


const setQuery = (e) => {
    if(e.keyCode == '13') 
    getResult(searchBar.value);
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.getElementById('city')
    city.innerText  = `${result.name}, ${result.sys.country}`;


    let temp = document.getElementById('temperature')
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.getElementById('description')
    desc.innerText = `${result.weather[0].description}`

}

const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keypress', setQuery);

/*
const changeImage = () => {
    if(`${result.timezone}`=7200) 
}
*/
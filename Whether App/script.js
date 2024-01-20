const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('search-btn')
const temprature = document.querySelector('.temprature');
const whetherimg = document.querySelector('.whether-img');
const desc = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const whether_body = document.querySelector('.whether-body');

async function checkWhether(city) {

    const api_key = "bb7c3b0f752d8a7e499478823fd521f1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const whether_data = await fetch(`${url}`).then((response) => response.json());
    console.log(whether_data)
    if (whether_data.cod === '404') {
        location_not_found.style.display = "flex";
        whether_body.style.display = "none"
        console.log("error")
        return;
    }
    temprature.innerHTML = `${Math.round(whether_data.main.temp - 275.15)}°C`;
    desc.innerHTML = `${whether_data.weather[0].main}`;
    humidity.innerHTML = `${whether_data.main.humidity}%`;
    windspeed.innerHTML = `${whether_data.wind.speed}Km/h`;

    switch (whether_data.weather[0].main) {



        case 'Clouds':
            whetherimg.src = '/asset/cloud.png';
            break;
        case 'Clear':
            whetherimg.src = '/asset/clear.png';
            break;
        case 'Mist':
            whetherimg.src = '/asset/mist.png';
            break;
        case 'Rain':
            whetherimg.src = '/asset/rain.png';
            break;
        case 'Snow':
            whetherimg.src = '/asset/snow.png';
            break;
        case 'Haze':
            whetherimg.src = '/asset/haze.png';
            break;

    }
}

searchbtn.addEventListener('click', () => {
    checkWhether(inputbox.value);
    whether_body.style.display = "flex"
})
const formWeather = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
let iconWeather = document.querySelector('[data-js="time-icon"]')

formWeather.addEventListener('submit', async event=>{
    event.preventDefault()
    const inputValue  = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
    const timeIcons = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    if(IsDayTime){
        timeImg.src = './src/day.svg'
    }else{
        timeImg.src = './src/night.svg'
    }
    
    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }
    
    
    iconWeather.innerHTML = timeIcons
    cityName.textContent = LocalizedName
    cityWeather.textContent = WeatherText
    cityTemperature.textContent = Temperature.Metric.Value


    

    event.target.reset()
})
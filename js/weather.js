const myKey = 'TIajKP5A7lCNWVNB7LfYHqx9H4FQgikb'

const getCityUrl = cityName =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${myKey}&q=${cityName}`

const fetchData = async (url) =>{
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Não foi possivel obter os dados')
        }
        
      return response.json()
        
    } catch ({name,message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName =>{
    const [cityData] = await getCityData(cityName)
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${myKey}&language=pt-br`
    return await fetchData(cityWeatherUrl)
}   


    
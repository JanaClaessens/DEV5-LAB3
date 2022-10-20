export default class Weather {
    async get(latitude, longitude){
        let apiKey = "0de8f4d4eadaaddd4e32875f7ce2cf06"

        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&units=metric')
        return await response.json()
    }
}
import Cacher from "./cacher.js"
let cacher = new Cacher()

export default class Weather {
    async get(latitude, longitude){
        // Als het eerder opgeslaan is en minder als 1 uur geleden
        // => return opgeslagen result van localstorage
        // Anders roep API aan en store de response in local storage, en stuur dat dan terug
        
        if(cacher.isSaved("weather")){
            return cacher.loadResult("weather")
        }

        let apiKey = "0de8f4d4eadaaddd4e32875f7ce2cf06"

        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&units=metric')
        let json = await response.json()

        cacher.saveResult("weather", json)
        return json
    }
}
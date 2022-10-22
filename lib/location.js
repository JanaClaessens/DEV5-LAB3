import Cacher from "./cacher.js"
let cacher = new Cacher()

export default class Location {
    async get(latitude, longitude){
        let apiKey = "AIzaSyD1NN5Uc1kXKqPml9QWZoRQHQGJNSg7K_k"
        let destination = "Vilvoordsesteenweg 170, 1861 Meise"

        if(cacher.isSaved("location")){
            return cacher.loadResult("location")
        }

        let response = await fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + latitude + "," + longitude + '&destinations=' + destination + '&key=' + apiKey)
        let json = await response.json()

        cacher.saveResult("location", json)
        return json
    } 
}



import './style.css'
import Weather from './lib/weather.js'

async function success(pos) {
    const coordinaten = pos.coords;

    let weather = new Weather();
    let huidigWeer = await weather.get(coordinaten.latitude, coordinaten.longitude)

    document.getElementById("plaatsTekst").innerText = huidigWeer.name
    document.getElementById("temperatuur").innerText = huidigWeer.main.temp

    if (huidigWeer.main.temp >= 15) {
        document.getElementById("trui").innerText = "Koop een tshirt"
    }else{
        document.getElementById("trui").innerText = "Koop een trui"
    }
}


  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
  
navigator.geolocation.getCurrentPosition(success, error);
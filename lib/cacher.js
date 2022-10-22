export default class Cacher {
    isSaved(apiNaam){
        // Check of het eerder opgeslaan is
        if (localStorage.getItem(apiNaam)){
            let saved = localStorage.getItem(apiNaam);
            saved = JSON.parse(saved)
            let tijd = new Date(saved.tijd)
            let huidigeTijd = new Date()
            let verschil = huidigeTijd - tijd
            
            // Check of het minder dan een uur geleden is
            if (verschil <= 60 * 60 * 1000) {
                console.log("Tijd is nog niet verstreken")
                return true
            } else {
                console.log("Tijd is wél verstreken")
                return false
            }
        }else{
            console.log("Localstorage item bestaat niet")
            return false
        }
    }

    loadResult(apiNaam){
        // return opgeslagen result van localstorage
        let saved = localStorage.getItem(apiNaam);
        saved = JSON.parse(saved)
        return saved.result
    }

    saveResult(apiNaam, result){
        // store de response in local storage
        let tijd = new Date()
        let toSave = {
            tijd: tijd,
            result: result,
        }

        localStorage.setItem(apiNaam, JSON.stringify(toSave))
    }
}
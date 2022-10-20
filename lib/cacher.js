export default class Cacher {
    isSaved(apiNaam){
        // Check of het eerder opgeslaan is en minder als 1 uur geleden
        if (localStorage.getItem(apiNaam)){
            return true   
        }else{
            return false
        }
    }

    loadResult(apiNaam){
        // return opgeslagen result van localstorage
        return {}
    }

    saveResult(apiNaam, result){
        // store de response in local storage
        return {}
    }
}
function weatherTip(weather){
    if(weather === "rainy") return "remember to bring an umbrella";
    else if(weather === "sunny") return "Dress lightly";
    else if(weather === "cloudly") return "Go outside";
    else return "Unkown weather"
}

weatherTip("sunny") // Dress lightly


function weatherTipSwitch(weather){
    switch(weather){
        case "rainy":
            return "remember to bring an umbrella";
            break;
        case "sunny":
            return "Dress lightly";
            break;
        case "cloudly":
            return "Go outside";
            break;
        default:
            return "Unkown weather";
            break;
    }
}
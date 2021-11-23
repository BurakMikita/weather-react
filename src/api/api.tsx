import {ObjectWeathersType} from "../types/types";


const ApiKey = '1a14457ca2795e8e05dcaf6e9d15d940'



export const apiRequest = (city:string):Promise<ObjectWeathersType>=> {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&cnt=32&mode=json&appid=${ApiKey}`).then(
        response=>response.json()
    )
}
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux";
import {Action} from "redux";

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends  Action,R = Promise<void>> = ThunkAction<R, AppStateType,unknown, A>



export type ObjectWeathersType = {
    city: {
        name:string
    },
    cod:string
    list:Array<ListType>
}

export type ListType = {
    dt_txt: string
    main: {
        temp: number
    }
    weather: Array<WeatherType>
}

export type  WeatherType ={
    description: string
}
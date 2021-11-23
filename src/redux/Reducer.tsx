import {apiRequest} from "../api/api";
import {InferActionsTypes, ObjectWeathersType} from './../types/types'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./index";


const ADD_WEATHER = 'ADD_WEATHER'
const IS_FETCHING = 'IS_FETCHING'
const SET_ERROR = 'SET_ERROR'

let initialState = {
        data:null as null | ObjectWeathersType,
    isFetching: true as boolean,
    error: null as null | string

};

export type initialStateType = typeof initialState


const Reducer = (state= initialState, action:ActionsTypes ):initialStateType=> {
        switch (action.type){
                case ADD_WEATHER:
                        return {...state, data: action.data}
            case IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
            case SET_ERROR:
                return {...state, error: action.payload}

                default:
                        return state
        }
}
export const actions = {
    setData : (data: ObjectWeathersType) => ({
        type: ADD_WEATHER, data
    }as const),
     toggleIsFetching : (isFetching: boolean) => ({
        type: IS_FETCHING, isFetching
    }as const),
     setError : (payload:string) => ({type: SET_ERROR, payload}as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getDataWeather = (city:string):ThunkType=> async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        let response = await apiRequest(city)
        dispatch(actions.setData(response))
        console.log(response)
        localStorage.setItem('city',city)
        dispatch(actions.toggleIsFetching(false));
    } catch (e) {




    }


}



export default Reducer










//.then(
  //  data=> {setWeatherData(data)
    //        setValueInput('')
      //      localStorage.setItem('city',city)
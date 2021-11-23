import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import Reducer from "./Reducer";


let rootReducer = combineReducers({
   add: Reducer
})

type reducerType = typeof rootReducer
export type AppStateType = ReturnType<reducerType>




const store = createStore(rootReducer,  compose(applyMiddleware(thunkMiddleware)))

export default store
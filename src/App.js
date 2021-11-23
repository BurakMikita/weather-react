import './App.css';
import React, {Fragment, useEffect, useState} from "react";
import Preloader from "./Preloader/Preloader";
import PageWeather from "./components/PageWeather"
import {
    Routes,
    Route
} from "react-router-dom";
import WeatherDays from "./components/WeatherDays";
import {getDataWeather} from "./redux/Reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux";


const App=()=>{

    const nameCity =()=> {
     let logo  = localStorage.getItem('city')

        if(logo){
            return logo
        }else {
            return 'Minsk'
        }
    }
     const preloader   = useSelector((state)=>state.add.isFetching)
    const err = useSelector((state)=> state.add.error)
    const data   = useSelector((state)=>state.add.data)




    const [city, setCity] = useState(nameCity)


    const dispatch = useDispatch()



  useEffect(()=>{(dispatch(getDataWeather(city))   )}

      ,[city])



console.log('Mein')
    if(preloader){
        return <Preloader/>
    }





    // @ts-ignore
    return (
      <Fragment>

          <Routes>
              <Route path="/" element={<PageWeather
                                                    setCity={setCity}
                                                    weatherData={data} city={city}/>} />
              <Route path="days/:city" element={<WeatherDays  data={data}/>} />
          </Routes>

      </Fragment>


  );
}

export default App;

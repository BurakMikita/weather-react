import React, {Fragment} from 'react';
import Preloader from "../Preloader/Preloader";
import {ObjectWeathersType} from "../types/types";


type PropsType = {
    weatherData:ObjectWeathersType
}
const Weather: React.FC<PropsType>  = ({weatherData}) => {


    return (
        <Fragment>
        <div style={{alignSelf:"center"} }>
            <p><b>City: </b>{weatherData.city.name}</p>
            <p><b>Temperature: </b> {Math.round(weatherData.list[0].main.temp)}℃</p>
            <p> <b>Description: </b>{weatherData.list[0].weather[0].description}</p>
            <p><b>Data:</b> {weatherData.list[0].dt_txt }</p>
        </div>


            <div className='forecast'>
                {weatherData.list.filter((e,index)=> index % 8 === 0).filter((e,index)=>index !== 0).map((e,index)=>{

                  return (<div className='items' key={index}>
                          {index === 0 ? <div>tomorrow</div>:index === 1 ? <div>after tomorrow</div>: <div>in 3 days</div> }
                    <div><b>Temperature:</b> <span>{Math.round(e.main.temp)}℃</span></div>
                      <div><b>Description:</b> <span>{e.weather[0].description}</span></div>
                          <div> <b>Data:</b> <span>{e.dt_txt }</span></div>
                      </div>
                  )
                })}
            </div>

        </Fragment>

    );
};

export default Weather;
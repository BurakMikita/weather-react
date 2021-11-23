import React from 'react';
import {Link} from "react-router-dom";
import {ObjectWeathersType} from "../types/types";


type PropsType = {
    data:  ObjectWeathersType
}

const WeatherDays: React.FC<PropsType> = ({data}) => {
    console.log('df')
    return (
        <div className='container'>
        <div className='forecastDays'>
            {data.list.filter((e,index)=>index <= 7).map((e,index)=>{
         let time     =  e.dt_txt.split(' ')
                return (<div className='items' key={index}>
                        <div><b>Temperature:</b><span>{Math.round(e.main.temp)}℃</span>{time[1]==='00:00:00' ? <span className='tomorrow'>tomorrow</span>: null}
                           </div>
                        <div><b>Description:</b> <span>{e.weather[0].description}</span></div>
                        <div> <b>Data:</b> <span>{time[1]}</span></div>

                    </div>
                )
            })}
        </div>
            <Link className='detalis' to={`/`}>Back</Link>
        </div>
    );
};

export default React.memo(WeatherDays);
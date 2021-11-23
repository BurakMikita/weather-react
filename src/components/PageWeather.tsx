import React, {useState} from 'react';
import Weather from "./Weather";
import {Link} from "react-router-dom";
import {ObjectWeathersType} from "../types/types";

type PropsType = {
    setCity: (string:string)=>void
    city:string
    weatherData:ObjectWeathersType
}

const PageWeather: React.FC<PropsType> = ({setCity,weatherData, city}) => {
    const [valueInput, setValueInput] = useState('')


    return (
        <div className='container'>
            <div  className='input'  >
                <input  className='search-input' placeholder='Enter city' onChange={e=>setValueInput(e.target.value)}
                        value={valueInput}
                /> <button className='bttn' onClick={()=>{setCity(valueInput) ;setValueInput('')}}> Search</button>

            </div>


            { weatherData.cod === '404' ?<div style={{alignSelf: 'center', color:'red',
                fontSize:'20px'}}>enter the correct city name</div>:<Weather weatherData={weatherData}/>}

                <div className='buttons'>
                <button onClick={()=>{setCity('Minsk')}}>Minsk</button>
                <button onClick={()=>{setCity('Moscow')}}>Moscow</button>
                <button onClick={()=>{setCity('Bratislava')}}>Bratislava</button>
            </div>
            <Link className='detalis' to={`/days/${city}`}>Details</Link>

        </div>
    );
};

export default PageWeather;
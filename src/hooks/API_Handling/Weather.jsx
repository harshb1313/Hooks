import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'


function Weather() {
    const [store, setStore] = useState(null)
    const APIKEY = import.meta.env.VITE_API_KEY
    const API =`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${APIKEY}&units=metric`

    async function ApiCall(){
        try {
            const resp =await axios.get(API)
            setStore(resp.data)
            console.log(resp.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        ApiCall()
    }, [])



    return (

        <div>
            {store && ( // Only render if store has data
                <WeatherCard
                    key={store.id}
                    Name={store.name}
                    temperature={store.main.temp}
                />
            )}
        </div>
    )
}

export default Weather

import React from 'react'
import ForecastItem from './ForecastItem'

function Forecast({title}) {
  return (
    <div> 

      <div className="flex items-center justify-start mt-6">
         <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className='my-2'/>

      <div className="flex flex-row items-center justify-between text-white">
         <ForecastItem time="04:35 PM" imgsrc="http://openweathermap.org/img/wn/01d@2x.png" degrs="22°"/>
         <ForecastItem  time="04:35 PM" imgsrc="http://openweathermap.org/img/wn/01d@2x.png" degrs="22°"/>
         <ForecastItem  time="04:35 PM" imgsrc="http://openweathermap.org/img/wn/01d@2x.png" degrs="22°"/>
         <ForecastItem  time="04:35 PM" imgsrc="http://openweathermap.org/img/wn/01d@2x.png" degrs="22°"/>
         <ForecastItem  time="04:35 PM" imgsrc="http://openweathermap.org/img/wn/01d@2x.png" degrs="22°"/>
      </div>

    </div>
  )
}

export default Forecast
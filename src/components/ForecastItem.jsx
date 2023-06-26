import React from 'react'

function ForecastItem({time,imgsrc,degrs}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
            <p className='font-ligh text-sm'>
               {time}
            </p>
            <img src={imgsrc} alt=""  className='w-12 my-1'/>
            <p className='font-medium'>{degrs}</p>
         </div>
    </div>
  )
}

export default ForecastItem

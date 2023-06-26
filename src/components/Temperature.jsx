import React from 'react'
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons'

function Temperature() {
	return (
		<div>
			<div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
				<p>Cloudy or whatever</p>
			</div>

			<div className='flex flex-row items-center justify-between text-white py-3'>
				<img
					src='http://openweathermap.org/img/wn/01d@2x.png'
					alt=''
					className='w-20'
				/>
				<p className='text-5xl'>34°</p>

				<div className='flex flex-col space-y-2'>
					<div className='flex items-center text-sm'>
						<UilTemperature size={18} className='mr-1' />
						<span className='font-medium'>Real fell:</span>
						<span className='font-medium ml-2'>32°</span>
					</div>

					<div className='flex items-center text-sm'>
						<UilTear size={18} className='mr-1' />
						<span className='font-medium'>Humidity:</span>
						<span className='font-medium ml-2'>65%</span>
					</div>

					<div className='flex items-center text-sm'>
						<UilWind size={18} className='mr-1' />
						<span className='font-medium'>Wind:</span>
						<span className='font-medium ml-2'>11km/h</span>
					</div>
				</div>
			</div>

			<div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
				<UilSun />
				<p className='font-light'>
					Rise : <span className='fond-medium ml-1'>06:45 AM</span>
				</p>
            <p className='font-light'>|</p>

				<UilSunset />
				<p className='font-light'>
					Set : <span className='fond-medium ml-1'>07:45 PM</span>
				</p>
            <p className='font-light'>|</p>

				<UilArrowUp />
				<p className='font-light'>
					High : <span className='fond-medium ml-1'>37°</span>
				</p>
            <p className='font-light'>|</p>

				<UilArrowDown />
				<p className='font-light'>
					Low : <span className='fond-medium ml-'>27°</span>
				</p>
			</div>
		</div>
	)
}

export default Temperature

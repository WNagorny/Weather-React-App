import React from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css'
import { useState, useEffect } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation.jsx'
import Temperature from './components/Temperature'
import Forecast from './components/Forecast'
import getWeatherData from './services/weatherService'
import getFormattedWeatherData from './services/weatherService'

function App() {
	const [query, setQuery] = useState({ q: 'berlin' })
	const [units, setUnits] = useState('metric')
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units }).then(data => {
				setWeather(data)
			})
		}
		fetchWeather()
	}, [query, units])

	return (
		<div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-md'>
			<TopButtons />
			<Inputs />

			{weather && (
				<div>
					<TimeAndLocation  weather={weather}/>
					<Temperature  weather={weather}/>
					<Forecast title='hourly forecast' items={weather.hourly} />
					<Forecast title='daily forecast' items={weather.daily} />
				</div>
			)}
		</div>
	)
}

export default App

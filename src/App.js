import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation.jsx'
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';



function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-md">
        <TopButtons/>
        <Inputs/>

        <TimeAndLocation/>
        <Temperature/>
        <Forecast  title="hourly forecast"/>
        <Forecast  title="daily forecast"/>
    </div>
  );
}

export default App;

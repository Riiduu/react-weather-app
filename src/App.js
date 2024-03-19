import './App.css';
import rain from './assets/rainIcon.png'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {

  return (

    <div className="flex flex-row h-dvh w-dvw bg-rainy-bg bg-opacity-75 text-center">
        {/* Left side / Main container */}
        <div className="flex h-dvh flex-col justify-between w-3/4">
            <div className="flex flex-col h-dvh p-10 justify-between text-right">
                {/* top text - date & time */}
                <h2 className="text-2xl text-white">21 April 2024 <span className="text-gray-500">|</span> 11:00</h2>
                {/* bottom text */}
                <div>
                    <h1 className="text-4xl text-white">Helsinki</h1>
                    <h1 className="text-8xl text-white">Rainy</h1>
                </div>

            </div>
            {/* Hourly forecast */}
            <div className="flex flex-row h-72 p-10 border-t-2 border-gray-600 justify-between">
                <div className="b h-fit p-3 rounded-xl text-white bg-gray-500 bg-opacity-75">
                    <div className="border-b-2 border-gray-500 text-lg">09:00</div>
                    <div className="bg-gray-300 rounded-xl my-2 bg-opacity-35"><img src={rain} alt=""/></div>
                    <div className="text-xl font-bold">9°C</div>
                </div>

            </div>
        </div>

        {/* Sidebar */}
        <div
            className="w-1/4 border-l-2 border-gray-600 bg-gray-500 bg-opacity-40 p-10 text-white text-lg backdrop-blur-sm">
            {/* Upper info forecast */}
            <div className="flex flex-col justify-between h-64 ">
                {/* Input */}
                <div className="flex border-2 border-gray-500 rounded-2xl px-1">
                    <i className="m-auto">📍</i>
                    <input className="text-white bg-transparent p-2 flex-1 focus:outline-0" placeholder="City Name" type="text"/>
                    <i className="cursor-pointer my-auto mr-3">🔍</i>
                </div>
                {/* Temperature */}
                    <h1 className="text-8xl my-5">30°C</h1>
                {/* Wind */}
                <div className="flex align-middle justify-center">
                    <img width="20" height="20" src="https://img.icons8.com/ios/100/FFFFFF/air-element.png"
                         alt="air-element"/>
                    <h3 className="text-gray-300 text-lg ml-2">Northeast, 30m/s</h3>
                </div>

            </div>

            {/* Lower info */}
            <div>
                <h1 className="pt-6 mt-10 border-t-2 text-xl font-medium">The Next Days Forecast</h1>
                <div className="my-5">
                    <a className="py-1 px-2 mx-2 hover:bg-gray-600 after:bg-gray-600 rounded-lg hover:font-medium font-thin"
                       href="#">5 Days</a>
                    <a className="py-1 px-2 mx-2 hover:bg-gray-600 after:bg-gray-600 rounded-lg hover:font-medium font-thin"
                       href="#">14 Days</a>
                    <a className="py-1 px-2 mx-2 hover:bg-gray-600 after:bg-gray-600 rounded-lg hover:font-medium font-thin"
                       href="#">30 Days</a>
                </div>
                <div className="flex flex-row align-middle">
                    <div className="bg-gray-300 rounded-xl my-2 bg-opacity-35"><img src={rain} alt=""/></div>
                    <div className="flex flex-col text-left w-5/6 align-middle my-auto ml-3">
                        <h3>Friday, April 22</h3>
                        <p className="font-thin text-sm">Heavy Rain</p>
                    </div>
                    <div className="flex flex-col justify-center px-2 border-l-2 h-3/4 my-auto">
                        <h3>30°C</h3>
                        <h3>20°C</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;

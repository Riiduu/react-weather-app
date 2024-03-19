import './App.css';
import rain from './assets/rainIcon.png'
function App() {

  return (

    <div className="App flex flex-row h-dvh w-dvw">
        {/* Left side / Main container */}
        <div className="flex h-dvh flex-col justify-between w-4/5">
            <div className="flex flex-col h-dvh bg-green-500 p-10 justify-between text-right">
                {/* top text - date & time */}
                <h2 className="text-2xl text-gray-900">21 April 2024 <span className="text-gray-500">|</span> 11:00</h2>
                {/* bottom text */}
                <h1 className="text-8xl">Cloudy</h1>
            </div>
            {/* Hourly forecast */}
            <div className="flex flex-row h-72 p-10 bg-blue-400 border-t-2 border-gray-600">
                <div className="b h-fit p-3 rounded-xl text-white bg-gray-500 bg-opacity-75">
                    <div className="border-b-2 border-gray-500 text-lg">09:00</div>
                    <div className="bg-gray-300 rounded-xl my-2 bg-opacity-35"><img  src={rain} alt=""/></div>
                    <div className="text-xl font-bold">9°C</div>
                </div>
            </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/5 bg-red-500">yeye</div>
    </div>
  );
}

export default App;

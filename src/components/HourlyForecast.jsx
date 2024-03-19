import rain from "../assets/rainIcon.png";

const HourlyForecast = () => {
    fetch

    return (
        <div className="b h-fit p-3 rounded-xl text-white bg-gray-500 bg-opacity-75">
            <div className="border-b-2 border-gray-500 text-lg">09:00</div>
            <div className="bg-gray-300 rounded-xl my-2 bg-opacity-35"><img src={rain} alt=""/></div>
            <div className="text-xl font-bold">9°C</div>
        </div>
    )
}

export default HourlyForecast
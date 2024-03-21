const HourlyForecast = (props) => {
    return (
        <div className="mx-2 h-fit py-3 px-1 rounded-xl text-white bg-gray-500 bg-opacity-75">
            <div className="border-b-2 border-gray-500 text-lg" id="time">{props.time}</div>
            <div className="bg-gray-300 rounded-xl my-2 bg-opacity-35"><img src={props.img} alt=""/></div>
            <div className="text-xl font-bold">{props.temperature}</div>
        </div>

    )

}

export default HourlyForecast
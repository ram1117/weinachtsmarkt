const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=52.520008&lon=13.404954&appid=${apiKey}&units=metric&lang=de`

const fetchWeatherData = async () => {
  const response = await fetch(weatherApi)
  return response.json()
}

const WeatherButton = async () => {
  const weatherData = await fetchWeatherData()
  if (weatherData)
    return (
      <div className="absolute left-4 top-16 lg:top-24 z-[999] bg-app-secondary border border-app-primary text-app-primary rounded-md py-2 px-4 font-bold shadow-lg shadow-slate-900 flex gap-2 max-w-[90vw]">
        <h2 className="border-r border-app-primary px-2">
          {Math.floor(weatherData.main?.temp)}&deg;C
        </h2>
        <h2 className="capitalize px-2">
          {weatherData.weather?.[0].description}
        </h2>
      </div>
    )

  return <h2>N/A</h2>
}

export default WeatherButton

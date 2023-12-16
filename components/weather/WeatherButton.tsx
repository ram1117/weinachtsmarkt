import ImageWrapper from '@/atoms/ImageWrapper'

const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=52.520008&lon=13.404954&appid=${apiKey}&units=metric&lang=de`

const fetchWeatherData = async () => {
  const response = await fetch(weatherApi, { cache: 'no-store' })
  const data = await response.json()
  return data
}

const WeatherButton = async () => {
  const weatherData = await fetchWeatherData()
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather?.[0].icon}@2x.png`

  if (weatherData)
    return (
      <div className="absolute left-4 top-16 lg:top-24 z-[999] bg-app-primary border border-app-primary text-app-secondary rounded-md py-2 px-4 font-bold shadow-lg shadow-slate-900 flex gap-2 max-w-[90vw] items-stretch justify-center">
        <h2 className="border-r border-app-secondary px-2 flex gap-2 items-center">
          <ImageWrapper
            src={weatherIconUrl}
            alt="weather icon"
            imageSize="h-[26px] w-[26px] lg:h-[32px] lg:w-[32px]"
          />
          {Math.floor(weatherData.main?.temp)}&deg;C
        </h2>
        <h2 className="capitalize px-2 border-r border-app-secondary flex items-center">
          {weatherData.main?.feels_like}&deg;C
          <sub className="mx-1 font-normal">Feel</sub>
        </h2>
        <h2 className="capitalize px-2 flex items-center">
          {weatherData.weather?.[0].description}
        </h2>
      </div>
    )

  return <h2>N/A</h2>
}

export default WeatherButton

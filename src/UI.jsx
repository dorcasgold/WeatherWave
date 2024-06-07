import { useState } from 'react'
import axios from 'axios'

export default function UI() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = '77e910ab95f1c4ed23b028165893dd6d'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setLoading(true)
      setError(null)
      axios.get(url)
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          setLocation('')
        })
        .catch((err) => {
          console.error("Error fetching data: ", err)
          setError('Error fetching data. Please try again.')
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <div className='container' >
      <header>
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
        />
      </header>
      {loading && <p className='loading-state'>Loading...</p>}
      {error && <p className='error-state'>{error}</p>}
      {data.weather && (
        <main>
          <div>
            <section className='section'>
              <div className="top">
                <div className="text">
                  <div>
                    <p>{data.name},</p>
                    <span>{data.sys.country}</span>
                  </div>
                  <p>{data.weather[0].description}</p>
                </div>
                <div className="icon">
                  <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <p>{data.main.temp.toFixed()}&deg;C</p>
                </div>
                <div className="right">
                  <div className='flex'>
                    <p>Feels Like</p>
                    <p>{data.main.feels_like.toFixed()} &deg; C</p>
                  </div>
                  <div className='flex'>
                    <p>Humidity</p>
                    <p>{data.main.humidity} %</p>
                  </div>
                  <div className='flex'>
                    <p>Wind Speed</p>
                    <p>{data.wind.speed.toFixed()} KM</p>
                  </div>
                  <div className='flex'>
                    <p>Pressure</p>
                    <p>{data.main.pressure} hPa</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </div>
  )
}

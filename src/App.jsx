import pic from './pic.png'

export default function App() {
  return (
    <main>
      <div>
        <header>
          <input type="text" placeholder="Enter Location" />
        </header>
        <section className='section'>
          <div className="top">
            <div className="text">
              <div>
                <p>Lagos,</p>
                <span>ng</span>
              </div>
              <p>Broken Clouds</p>
            </div>
            <div className="icon">
              <img src={pic} />
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <p>11 &deg; C</p>
            </div>
            <div className="right">
              <div>
                <p>Feels Like</p>
                <p>110 &deg; C</p>
              </div>
              <div>
                <p>humidity</p>
                <p>2%</p>
              </div>
              <div>
                <p>wind speed</p>
                <p>11 KM</p>
              </div>
              <div>
                <p>pressurre</p>
                <p>1 hpa</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

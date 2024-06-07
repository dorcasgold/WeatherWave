// import axios, { Axios } from "axios"
// import { useState, useEffect } from "react"
// import Weather from "./components/Weather"

// export default function App() {
//   const [data, setData] = useState({})
//   const [location, setLocation] = useState('')

//   const API_KEY = '77e910ab95f1c4ed23b028165893dd6d'
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
//   const searchLocation = (event) => {
//     if (event.key === 'Enter') {
//       axios.get(url)
//         .then((res) => {
//           setData(res.data)
//           console.log(res.data);
//           console.log(url);
//         })
//       setLocation('')
//     }
//   }

//   return (
//     <div className="w-full h-full relative">
//       <div className="text-center p-4">
//         <input type="text" className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
//           placeholder="Enter Location"
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyDownCapture={searchLocation}
//         />
//       </div>
//       <Weather weatherData={data} />
//     </div>
//   )
// }

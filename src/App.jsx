
import './App.css'
import LineChart from './assets/components/LineChart/LineChart'
import Navbar from './assets/components/NavBar/Navbar'
import Phones from './assets/components/Phones/Phones'
import PriceOptions from './assets/components/PriceOptions/PriceOptions'
// import DaisyNav from './assets/components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
     <Navbar></Navbar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart  className="bg-black"></LineChart>
      <Phones></Phones>
      
     
    </>
  )
}

export default App

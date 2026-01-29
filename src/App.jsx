import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CryptoPayment from './Screens/Products/CryptoPayment'
import GetStarted from './Components/GetStarted'
import { GetStart } from './Screens/GetStart'
import { Price } from './Screens/Price'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/get-started' element={<GetStart/>} />
          <Route path='/pricing' element={<Price/>} />
   <Route path='/products/crypto-payments' element={<CryptoPayment />} />



        </Routes>





      </BrowserRouter>




    </>
  )
}

export default App

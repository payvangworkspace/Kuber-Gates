import React from 'react'
import Navbar from '../Components/Navbar'
import MultiCurrencySupport from '../Components/MultiCurrencySupport'
import SecurityTransparency from '../Components/SecurityTransparency'
import Footer from '../Components/Footer'
import CryptoCTA from '../Components/CryptoCTA'

const MultiCurrency = () => {
  return (
    <div>
    <Navbar/>
    <MultiCurrencySupport/>
    <SecurityTransparency/>
    <CryptoCTA/>
    <Footer/>
      
    </div>
  )
}

export default MultiCurrency

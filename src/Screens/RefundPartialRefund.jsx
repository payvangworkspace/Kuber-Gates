import React from 'react'
import Navbar from '../Components/Navbar'
import RefundsComponent from '../Components/RefundsComponent'
import SecurityTransparency from '../Components/SecurityTransparency'
import CryptoCTA from '../Components/CryptoCTA'
import Footer from '../Components/Footer'

const RefundPartialRefund = () => {
  return (
    <div>
      <Navbar/>
      <RefundsComponent/>
      <SecurityTransparency/>
      <CryptoCTA/>
      <Footer/>
      
    </div>
  )
}

export default RefundPartialRefund

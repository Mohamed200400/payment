import React from 'react'
import { discount, robot } from '../image'

const Section1 = () => {
  return (
    <div className='section1'>
        <div className='text-zone'>
            <div className='min-title'>
                <img src={discount} alt="min"/>
                <h3>20% DISCOUNT FOR 1 MONTH ACCOUNT</h3>
            </div>
            <div className='main'>
                <h1>The Next </h1>
                <h1 id='sp'>Generation </h1>
                <span>Get Started</span>
                <h1> Payment Method. </h1>
                <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>
        </div>
        <div className='image-zone'>
            <img src={robot} alt='huu' className='robot'/>
        </div>
    </div>
  )
}

export default Section1
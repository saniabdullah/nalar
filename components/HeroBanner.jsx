import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <h1>KOPI <span>NALAR</span></h1>
        <h3>{ heroBanner.midText }</h3>

        <div>
          <button type='button'>
            { heroBanner.buttonText }
          </button>
          <div className='desc'>
            <h5>Open</h5>
            <p>{ heroBanner.desc }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
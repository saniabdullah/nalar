import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <h1>KOPI NALAR</h1>
        <h3>Best Coffee <span>in</span> Town</h3>

        <div>
          <Link href={'#products'}>
            <button type='button'>
              { heroBanner.buttonText }
            </button>
          </Link>
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
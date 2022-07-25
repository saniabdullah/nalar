import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = () => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>Angkirangan</p>
        </div>
        <div className='right'>
          <h3>Coming Soon</h3>
          <Link href="">
            <button type='button'>Kunjungi</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
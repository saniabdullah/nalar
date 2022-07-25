import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Kopi Nalar</Link>
      </p>
    </div>
  )
}

export default Navbar
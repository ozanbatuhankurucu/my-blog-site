import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='p-8'>
      <Link href='/'>
        <h1>Ozan's Blog</h1>
      </Link>
    </div>
  )
}

export default Header

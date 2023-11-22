import React from 'react'
import itvoice_expo from '../../assets/itvoice_expo.png'

function Header() {
    return (
        <div className='flex justify-center items-center'>
            <img src={itvoice_expo} alt="itvoice" className='sm:w-1/5  w-1/4 sm:h-1/5 h-1/5' />
        </div>
    )
}

export default Header
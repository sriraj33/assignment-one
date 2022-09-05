import React from 'react'
import dogImg from '../images/ujTDLZ.webp'
import './style.css'

const Image = () => {
  return (
    <div className='image'>
        <img src={dogImg} alt='Dog Image' />
    </div>
  )
}

export default Image
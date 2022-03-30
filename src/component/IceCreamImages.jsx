import React from 'react'
import '../assets/css/imges.css'

function IceCreamImages({id}) {
  
  return (
    <>
      {id && <img className='card_image'
    src={`${process.env.PUBLIC_URL}/ice-cream-images/ice-cream-${id.toString()}.svg`} 
    alt="" />}
    </>
  )
}

export default IceCreamImages
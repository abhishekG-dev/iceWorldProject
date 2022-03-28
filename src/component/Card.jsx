import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/card.css'
import IceCreamImages from './IceCreamImages'

function Card({name,id,desc,price,quantity,history}) {

    const handleOnClickCard = to =>{
        history(to)
    }

    const handleOnClickName = e =>{
        e.stopPropogration()
    }
  return (
   <div className="card"  
   onClick={()=>{
       handleOnClickCard(`/menu/${id.toString()}`)
   }}
   >
       <div className="img_container">
           <IceCreamImages id={id} />
       </div>
       <div className="text_container">
           <Link to={`/menu/${id}`} onClick={handleOnClickName} >
               <h3>{name}</h3>
            </Link>
           <div className="p_s">
            <p> $ {price}</p>
        	&bull;
            <p>{`${quantity} in stock`}</p>
           </div>
           <p className='desc'>{desc}</p>
       </div>
   </div>
  )
}

export default Card
import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/iceCreamCard.css'
import IceCreamImages from './IceCreamImages'


function IceCreamCard({iceID,iceName,navigate}) {

    const handleOnClickCard =(to) =>{
            navigate(to)
    }

    const handleOnClickName = e =>{
        e.stopPropagation()
    }

  return (
    <>
    <div className="ice_card"  
   onClick={()=>{
       handleOnClickCard(`/menu/additem/${iceID.toString()}`)
   }}
   >
       <div className="ice_img_container">
           <IceCreamImages id={iceID} />
       </div>
       <div className="ice_text_container">
           <Link to={`/menu/additem/${iceID}`} onClick={handleOnClickName} >
               <h3>{iceName}</h3>
            </Link>
       </div>
   </div>
    
    </>
  )
}

export default IceCreamCard
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../assets/css/editIceCream.css'
import IceCreamImages from './IceCreamImages'

function EditIceCream() {

  const [menuItem,setMenuItem] = useState({
      price:'0.00',
      description:'',
      quantity:'0',
      iceCream:{},
      inStock:true
  })
  const itemId = useParams().id
  
  useEffect(()=>{
    (
      async (itemId) =>{
        const response = await fetch(`/menu/${itemId}`)
        const res = await response.json()
        const {id,inStock,description,iceCream,price,quantity} = res
        setMenuItem({
          id,
          price : price.toFixed(2),
          inStock,
          quantity:quantity.toString(),
          iceCream,
          description 
        })
      }
    )
    (itemId)
  },[itemId])

  return (
    <>
    <div className="mainE_container">

    <div className="edit_container">
      <div className="edit_img_container">
        <IceCreamImages id={itemId} />
      </div>
      <div className="detail_container">
        <div className="detailM_container">

        <dl>
          <dt>Name :</dt>
          <dd>{menuItem.iceCream.name}</dd>
        </dl>
        <form >
          <label>Description :</label>
          <textarea name="description"  cols="30" rows="3"></textarea>
          <label>In Stock :</label>
          <input type="checkbox" name='instock' />
          <label>Quantity :</label>
          <select name='quantity'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <label>Price* :</label>
          <input type="number" name='price'/>
          <button type="submit">save</button>
        </form>
       
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default EditIceCream
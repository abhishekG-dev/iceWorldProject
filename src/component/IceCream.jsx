import React from 'react'
import IceCreamImages from './IceCreamImages'
import '../assets/css/editIceCream.css'
import { useNavigate } from 'react-router-dom'
import useUniqIds from '../js files/uniqId'
import {descriptionValidate,priceValidate,quantityValidate} from '../utiles/validators'
import useValidation from '../js files/useValidate'

function IceCream({item,setNewItem}) {

    
    const {inStock,description,iceCream,price,quantity} = item
    const [descriptionId,priceId,quantityId,inStockId]= useUniqIds(4)
    const navigate = useNavigate()    
   
    const descriptionError = useValidation(
        description,descriptionValidate
    )
    const priceError = useValidation(
        price,priceValidate
    )
    const quantityError = useValidation(
        {inStock,quantity},quantityValidate
    )
   
    const onChangeHandler = (e) =>{
        let newItemData = {
            ...item,
            [e.target.name]:
            e.target.type === 'checkbox'? e.target.checked : e.target.value
        }

        if(e.target.name === 'quantity'){
            newItemData.inStock = e.target.value !== '0';
        }

        if(e.target.name === 'inStock' && !e.target.checked){
            newItemData.quantity = '0'
        }

        setNewItem(newItemData)
        
    }

    const onSubmitHandler = async(e)=>{
        e.preventDefault()

        // console.log(descriptionError)
        // console.log(quantityError)
        // console.log(priceError)
        
        if(!descriptionError && !quantityError && !priceError ){
        const {id,inStock,description,iceCream,price,quantity} = item
        
        
        const submitItem ={
            id,
            price:parseFloat(price),
            description,
            inStock,
            quantity:parseInt(quantity),
            iceCream:{id:iceCream.id}
        }
        
        const reqData = {
            method:'put',
            headers:{'content-type':'application/json',
            'Accept': 'application/json'},
            body: JSON.stringify(submitItem)
            
        }

        try{

            await fetch(`/menu/${id.toString()}`,reqData)
            navigate('/')
            
        }
        catch(err){
            console.log({"error":err.message})
        }
    }   

    }

    const onDeleteHandler = (e) =>{
        e.preventDefault()
    }
    
   
    
    
  return (
    <>
    <div className="mainE_container">

        <div className="edit_container">
        <div className="edit_img_container">
            <IceCreamImages id={iceCream.id} />
        </div>
        <div className="detail_container">
            <div className="detailM_container">

            <dl>
            <dt>Name :</dt>
            <dd>{iceCream.name}</dd>
            </dl>
            {/* ---form----*/}
            <form onSubmit={onSubmitHandler} >
            <label htmlFor={descriptionId}>Description :</label>
            <textarea name="description"  rows="6 "
            value={description}
            onChange={onChangeHandler}
            id={descriptionId}
            ></textarea>
            <label htmlFor={inStockId}>In Stock :</label>
            <div className='checkbox' >
            <input type="checkbox" name='inStock' 
            onChange={onChangeHandler}
            checked={inStock} 
            id={inStockId} />
            </div>
            <label htmlFor={quantityId}>Quantity :</label>
            
            <select name='quantity' value={quantity}  
            onChange={onChangeHandler}
            id={quantityId} >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
            <label htmlFor={priceId}>Price* :</label>
            <input type="number" name='price' step={0.02}  value={price}
             onChange={onChangeHandler} 
             id={priceId} />
            <div className="btn_container">
            <button type="submit" className='ok' >save</button>
            <button type="button" onClick={onDeleteHandler} className='delete' >delete</button>
            </div>
            </form>
        
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default IceCream
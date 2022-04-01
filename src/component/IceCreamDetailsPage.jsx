import React from "react";
import IceCreamImages from "./IceCreamImages";
import "../assets/css/editIceCream.css";
import { Helmet } from "react-helmet";

function IceCreamDetailsPage({ data, onDelete }) {
  const {
    onSubmit,
    descriptionId,
    priceId,
    quantityId,
    inStockId,
    inStock,
    description,
    iceCream,
    price,
    quantity,
    onChangeHandler,
    add
  } = data;

  return (
    <>
      <Helmet>
       {add ?  <title>Edit | Ice World</title>  
       :<title>Add | Ice World</title> }
      </Helmet>

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
              <form onSubmit={onSubmit}>
                <label htmlFor={descriptionId}>Description :</label>
                <textarea
                  name="description"
                  rows="6 "
                  value={description}
                  onChange={onChangeHandler}
                  id={descriptionId}
                ></textarea>
                <label htmlFor={inStockId}>In Stock :</label>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="inStock"
                    onChange={onChangeHandler}
                    checked={inStock}
                    id={inStockId}
                  />
                </div>
                <label htmlFor={quantityId}>Quantity :</label>

                <select
                  name="quantity"
                  value={quantity}
                  onChange={onChangeHandler}
                  id={quantityId}
                >
                  <option value="0">0</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                <label htmlFor={priceId}>Price* :</label>
                <input
                  type="number"
                  name="price"
                  step={0.02}
                  value={price}
                  onChange={onChangeHandler}
                  id={priceId}
                />
                <div className="btn_container">
                  <button type="submit" className="ok">
                    save
                  </button>
                  {onDelete && (
                    <button type="button" onClick={onDelete} className="delete">
                      delete
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IceCreamDetailsPage;

import React from "react";
// import IceCreamImages from './IceCreamImages'
// import '../assets/css/editIceCream.css'
import { useNavigate, useParams } from "react-router-dom";
import useUniqIds from "../js files/uniqId";
import {
  descriptionValidate,
  priceValidate,
  quantityValidate,
} from "../utiles/validators";
import useValidation from "../js files/useValidate";
import IceCreamDetailsPage from "./IceCreamDetailsPage";

function IceCream({ item, setNewItem }) {
  const { inStock, description, iceCream, price, quantity } = item;
  const [descriptionId, priceId, quantityId, inStockId] = useUniqIds(4);

  const itemID = useParams().id;

  const navigate = useNavigate();

  const descriptionError = useValidation(description, descriptionValidate);
  const priceError = useValidation(price, priceValidate);
  const quantityError = useValidation({ inStock, quantity }, quantityValidate);

  const onChangeHandler = (e) => {
    let newItemData = {
      ...item,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    if (e.target.name === "quantity") {
      newItemData.inStock = e.target.value !== "0";
    }

    if (e.target.name === "inStock" && !e.target.checked) {
      newItemData.quantity = "0";
    }

    setNewItem(newItemData);
  };
  // ------  updating a particular item data ------------
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // console.log(descriptionError)
    // console.log(quantityError)
    // console.log(priceError)

    if (!descriptionError && !quantityError && !priceError) {
      const { id, inStock, description, iceCream, price, quantity } = item;

      const submitItem = {
        id,
        price: parseFloat(price),
        description,
        inStock,
        quantity: parseInt(quantity),
        iceCream: { id: iceCream.id },
      };

      const reqData = {
        method: "put",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitItem),
      };

      try {
        await fetch(`/menu/${id.toString()}`, reqData);

        navigate("/");
      } catch (err) {
        console.log({ error: err.message });
      }
    }
  };
  //  ---deleteing a particular item ------
  const onDeleteHandler = async () => {
    try {
      await fetch(`/menu/${itemID}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    onSubmit: onSubmitHandler,
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
  };

  return (
    <>
      <IceCreamDetailsPage data={data} onDelete={onDeleteHandler} />
    </>
  );
}

export default IceCream;

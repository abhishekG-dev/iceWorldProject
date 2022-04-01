import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import EditIceCream from './EditIceCream'
import useUniqIds from "../js files/uniqId";
import {
  descriptionValidate,
  priceValidate,
  quantityValidate,
} from "../utiles/validators";
import useValidation from "../js files/useValidate";
// import IceCream from './IceCream'
import IceCreamDetailsPage from "./IceCreamDetailsPage";

function AddIceCream() {
  const navigate = useNavigate();

  const [descriptionId, priceId, quantityId, inStockId] = useUniqIds(4);

  const [addItem, setAddItem] = useState({
    price: "0.00",
    description: "",
    quantity: "0",
    iceCream: {},
    inStock: true,
  });

  const { inStock, description, iceCream, price, quantity } = addItem;

  const itemId = useParams().id;

  //   getting ice cream id and name
  useEffect(() => {
    (async (itemId) => {
      const response = await fetch(`/menu/stocks/iceCream/${itemId}`);
      const res = await response.json();

      // console.log(res);
      setAddItem({
        iceCream: { ...res },
        price: "0.00",
        description: "",
        quantity: "0",
        inStock: true,
      });
    })(itemId);
  }, [itemId]);

  // console.log(addItem)
  // ---------------------------------------------------------

  // editing details--------------------------------

  const descriptionError = useValidation(description, descriptionValidate);
  const priceError = useValidation(price, priceValidate);
  const quantityError = useValidation({ inStock, quantity }, quantityValidate);

  const onChangeHandler = (e) => {
    let newItemData = {
      ...addItem,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    if (e.target.name === "quantity") {
      newItemData.inStock = e.target.value !== "0";
    }

    if (e.target.name === "inStock" && !e.target.checked) {
      newItemData.quantity = "0";
    }

    setAddItem(newItemData);
  };

  // -----------------------------------------------

  //  on  submit handler ----------------------

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!descriptionError && !quantityError && !priceError) {
      const { inStock, description, iceCream, price, quantity } = addItem;

      const submitItem = {
        price: parseFloat(price),
        description,
        inStock,
        quantity: parseInt(quantity),
        iceCream: { id: iceCream.id },
      };

      const reqData = {
        method: "post",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitItem),
      };

      try {
        navigate("/");
        await fetch("/menu", reqData);
      } catch (err) {
        console.log(err);
      }
    }
  };
  //  -----------------------------------------

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
    add:false
  };

  return (
    <>
      <IceCreamDetailsPage data={data} />
    </>
  );
}

export default AddIceCream;

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import IceCream from "./IceCream";

function EditIceCream() {
  const [menuItem, setMenuItem] = useState({
    price: "0.00",
    description: "",
    quantity: "0",
    iceCream: {},
    inStock: true,
  });
  const itemId = useParams().id;

  useEffect(() => {
    (async (itemId) => {
      const response = await fetch(`/menu/${itemId}`);
      let res = await response.json();
      const { id, inStock, description, iceCream, price, quantity } = res;
      setMenuItem({
        id,
        price: price.toFixed(2),
        inStock,
        quantity: quantity.toString(),
        iceCream,
        description,
      });
    })(itemId);
  }, [itemId]);

  return (
    <>
      <IceCream item={menuItem} setNewItem={setMenuItem} />
    </>
  );
}

export default EditIceCream;

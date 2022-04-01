import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IceCreamCard from "./IceCreamCard";
import "../assets/css/iceCreamStock.css";
import Helmet from "react-helmet";

function IceCreamStock() {
  const [stock, setStock] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch("/menu/stocks/iceCream");
      const res = await response.json();
      setStock(res);
      // console.log(res)
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>ice creams | Ice World</title>
      </Helmet>
      <div className="ice_main_container">
        <ul className="ice_stock_list">
          {stock.map(({ id, name }) => (
            <li className="col" key={id.toString()}>
              <IceCreamCard iceID={id} iceName={name} navigate={navigate} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default IceCreamStock;

import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../assets/css/menu.css";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch("/menu");
      const res = await response.json();
      setMenu(res);
    })();
  }, []);
  return (
    <>
      <Helmet>
        <title>Ice World</title>
      </Helmet>
      <div className="main_container">
        <ul className="menu_container">
          {menu.map(({ id, iceCream, description, price, quantity }) => (
            <li className="col" key={id.toString()}>
              <Card
                history={history}
                name={iceCream.name}
                desc={description}
                quantity={quantity}
                price={price}
                id={id}
                iceId={iceCream.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;

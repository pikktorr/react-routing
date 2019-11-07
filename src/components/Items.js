import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Items = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/items/list/");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div className="card">
      <h3>SHOP</h3>
      {items.map(item => (
        <p key={item.identifier}>
        <Link to={`/shop/${item.identifier}`}>{item.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Items;

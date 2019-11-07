import React, { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images:{}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?ids=${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log("Response:", item);
    setItem(item);
  };

  return (
    <div className="card">
      <h3>{item.name}</h3>
      <img src={item.images.information} alt={item.name}/>
    </div>
  );
};

export default ItemDetail;

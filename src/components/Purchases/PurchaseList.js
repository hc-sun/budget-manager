import React from "react";
import "./PurchaseList.css";
import PurchaseItem from "./PurchaseItem";

function PurchaseList(props) {
  if (props.items.length === 0) {
    return <h2 className="no-purchase">No Purchases</h2>;
  }
  return (
    <ul className="purchases-list">
      {props.items.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          title={purchase.title}
          price={purchase.price}
          date={purchase.date}
        />
      ))}
    </ul>
  );
}

export default PurchaseList;

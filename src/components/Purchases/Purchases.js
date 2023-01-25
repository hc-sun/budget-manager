import PurchaseItem from "./PurchaseItem";
import "./Purchases.css";
import Card from "../UI/Card";
import PurchaseFilter from "./Filter.js";
import React, { useState } from "react";

function Purchases(props) {
  const [yearData, setYear] = useState("2023");

  function selectYearHandler(year) {
    setYear(year);
  }

  const filteredPurchases = props.items.filter(purchase => {
    return purchase.date.getFullYear().toString() === yearData;
  });

  return (
    <div>
      <Card className="purchases">
        <PurchaseFilter
          selectedYearData={yearData}
          selectYear={selectYearHandler}
        />
        {filteredPurchases.map((purchase) => (
          <PurchaseItem
            key={purchase.id}
            title={purchase.title}
            price={purchase.price}
            date={purchase.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Purchases;

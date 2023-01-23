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

  return (
    <div>
      <Card className="purchases">
        <PurchaseFilter
          selectedYearData={yearData}
          selectYear={selectYearHandler}
        />
        {props.items.map((purchase) => (
          <PurchaseItem
            title={purchase.title}
            amount={purchase.amount}
            date={purchase.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Purchases;

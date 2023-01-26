import "./Purchases.css";
import Card from "../UI/Card";
import PurchaseFilter from "./Filter.js";
import React, { useState } from "react";
import PurchaseList from './PurchaseList';
import PurchasesGraph from "./PurchasesGraph";

function Purchases(props) {
  const [yearData, setYear] = useState("2023");

  function selectYearHandler(year) {
    setYear(year);
  }

  const filteredPurchases = props.items.filter((purchase) => {
    return purchase.date.getFullYear().toString() === yearData;
  });

  return (
    <div>
      <Card className="purchases">
        <PurchaseFilter
          selectedYearData={yearData}
          selectYear={selectYearHandler}
        />
        <PurchasesGraph purchases={filteredPurchases} />
        <PurchaseList items={filteredPurchases} />
      </Card>
    </div>
  );
}

export default Purchases;

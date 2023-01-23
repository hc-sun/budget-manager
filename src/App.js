import Purchases from "./components/Purchases/Purchases";
import AddPurchase from "./components/AddPurchase/AddPurchase";
import React, { useState } from "react";

const defaultPurchases = [
  { id: "00", title: "Food0", price: 2342.5, date: new Date(2022, 1, 1) },
  { id: "01", title: "Food1", price: 2342.5, date: new Date(2022, 1, 1) },
  { id: "02", title: "Food2", price: 2342.5, date: new Date(2022, 1, 1) },
  { id: "03", title: "Food3", price: 2342.5, date: new Date(2022, 1, 1) },
];

const App = () => {
  const [purchases, setPurchases] = useState(defaultPurchases);

  function updatePurchaseHandler(purchase) {
    // add one purchase to purchases
    setPurchases((purchased) => {
      return [purchase, ...purchased];
    });
  }

  return (
    <div>
      <AddPurchase updatePurchase={updatePurchaseHandler} />
      <Purchases items={purchases} />
    </div>
  );
};

export default App;

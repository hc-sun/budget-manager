import Purchases from "./components/Purchases/Purchases";
import AddPurchase from "./components/AddPurchase/AddPurchase";
import React, { useState } from "react";

const defaultPurchases = [
  { id: "00", title: "Food", price: 20.5, date: new Date(2023, 1, 12) },
  { id: "01", title: "Ticket", price: 121.6, date: new Date(2023, 4, 1) },
  { id: "02", title: "TV", price: 893, date: new Date(2022, 11, 2) },
  { id: "03", title: "Water", price: 40.5, date: new Date(2022, 7, 3) },
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

import React, { useState } from "react";
import "./AddPurchase.css";
import PurchaseForm from "./PurchaseForm";

function AddPurchase(props) {
  const [newPurchase, setNewPurchase] = useState(false);

  function updateFormHandler(inputData) {
    const newFormData = {
      ...inputData,
      id: Math.random().toString(),
    };
    props.updatePurchase(newFormData);
    setNewPurchase(false);
  }

  function newPurchaseHandler() {
    setNewPurchase(true);
  }

  function cancleEditHandler() {
    setNewPurchase(false);
  }

  return (
    <div className="add-purchase">
      {/* if newPurchase is true, show PurchaseForm */}
      {!newPurchase && (
        <button onClick={newPurchaseHandler}>New Purchase</button>
      )}
      {newPurchase && (
        <PurchaseForm
          updateForm={updateFormHandler}
          onCancelEdit={cancleEditHandler}
        />
      )}
      {/* add onCancelEdit={cancleEditHandler} to pass function to addpurchase.js */}
    </div>
  );
}

export default AddPurchase;

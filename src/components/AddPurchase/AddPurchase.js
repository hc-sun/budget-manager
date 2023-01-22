import React from "react";
import "./AddPurchase.css";
import PurchaseForm from "./PurchaseForm";

function AddPurchase(props) {
  function updateFormHandler(inputData) {
    const formData = {
      ...inputData, id: Math.random().toString()
    };
    props.updatePurchase(formData);
  }

  return (
    <div className="add-purchase">
      <PurchaseForm updateForm={updateFormHandler} />
    </div>
  );
}

export default AddPurchase;

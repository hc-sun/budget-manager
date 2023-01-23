import React from "react";
import "./AddPurchase.css";
import PurchaseForm from "./PurchaseForm";

function AddPurchase(props) {
  function updateFormHandler(inputData) {
    const newFormData = {
      ...inputData, id: Math.random().toString()
    };
    props.updatePurchase(newFormData);
  }

  return (
    <div className="add-purchase">
      <PurchaseForm updateForm={updateFormHandler} />
    </div>
  );
}

export default AddPurchase;

import React, { useState } from "react";
import "./PurchaseForm.css";

function PurchaseForm(props) {
  const [formTitle, setTitle] = useState("");
  const [formPrice, setPrice] = useState("");
  const [formDate, setDate] = useState("");

  function titleChange(event) {
    setTitle(event.target.value);
  }

  function priceChange(event) {
    setPrice(event.target.value);
  }

  function dateChange(event) {
    setDate(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    const formData = {
      title: formTitle,
      price: formPrice,
      date: new Date(formDate),
    };
    props.updateForm(formData);
    setTitle("");
    setPrice("");
    setDate("");
  }

  return (
    <form onSubmit={submitForm}>
      <div className="add-purchase-controls">
        <div className="add-purchase-control">
          <label>Title</label>
          <input type="text" value={formTitle} onChange={titleChange} />
        </div>
        <div className="add-purchase-control">
          <label>Price</label>
          <input type="number" value={formPrice} onChange={priceChange} />
        </div>
        <div className="add-purchase-control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            value="formDate"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="add-purchase-actions">
        <button type="button" onClick={props.onCancelEdit}>Cancel</button>
        <button type="submit">Add Purchase</button>
      </div>
    </form>
  );
}

export default PurchaseForm;

import React, { useState } from "react";
import "./PurchaseForm.css";

function PurchaseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleChange(event) {
    setTitle(event.target.value);
  }

  function amountChange(event) {
    setAmount(event.target.value);
  }

  function dateChange(event) {
    setDate(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    const formData = {formTitle: title, formAmout: amount, formDate: new Date(date)};
    props.updateForm(formData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitForm}>
      <div className="add-purchase-controls">
        <div className="add-purchase-control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChange} />
        </div>
        <div className="add-purchase-control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChange} />
        </div>
        <div className="add-purchase-control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            value="date"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="add-purchase-actions">
        <button type="submit">Add Purchase</button>
      </div>
    </form>
  );
}

export default PurchaseForm;

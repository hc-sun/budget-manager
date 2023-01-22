import React, { useState } from "react";
import "./PurchaseForm.css";

function PurchaseForm() {
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

  return (
    <form>
      <div className="add-purchase-controls">
        <div className="add-purchase-control">
          <label>Title</label>
          <input type="text" onChange={titleChange} />
        </div>
        <div className="add-purchase-control">
          <label>Amount</label>
          <input type="number" onChange={amountChange} />
        </div>
        <div className="add-purchase-control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
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

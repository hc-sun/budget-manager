import React from "react";
import "./PurchaseForm.css";

function PurchaseForm() {
  return (
    <form>
      <div className="add-purchase-controls">
        <div className="add-purchase-control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="add-purchase-control">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="add-purchase-control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2025-12-31" />
        </div>
      </div>
      <div className="add-purchase-actions">
        <button type='submit'>Add Purchase</button>
      </div>
    </form>
  );
}

export default PurchaseForm;

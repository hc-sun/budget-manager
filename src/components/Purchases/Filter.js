import React, { useState } from "react";
import "./Filter.css";

function PurchaseFilter(props) {
  function filterHandler(event) {
    props.selectYear(event.target.value);
  }

  return (
    <div className="purchases-filter">
      <div className="purchases-filter-control">
        <label value={props.selectedYearData}>Filter</label>
        <select onChange={filterHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default PurchaseFilter;

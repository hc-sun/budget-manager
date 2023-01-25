import "./Graph.css";
import React from "react";

function BarChart(props) {
  return (
    <div className="bar">
      <div className="inner">
        <div className="fill" style={{ height: height }}></div>
      </div>
      <div className="label">{props.lable}</div>
    </div>
  );
}

export default BarChart;

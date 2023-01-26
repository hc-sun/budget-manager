import "./Graph.css";
import React from "react";

function BarChart(props) {
  let barHeight = "0%";
  if (props.maxval > 0) {
    barHeight = Math.round((props.value / props.maxval) * 100) + "%";
  }
  return (
    <div className="bar">
      <div className="inner">
        <div className="fill" style={{ height: barHeight }}></div>
      </div>
      <div className="month">{props.month}</div>
    </div>
  );
}

export default BarChart;

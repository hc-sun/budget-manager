import "./Graph.css";
import React from "react";
import BarChart from "./BarChart";

function Graph(props) {
  let height = "0%";
  if (props.maxval > 0) {
    height = Math.round((props.value / props.maxval) * 100) + "%";
  }
  return (
    <div className="graph">
      {props.data.map((data) => (
        <BarChart
          key={data.month}
          value={data.value}
          maxval={null}
          month={data.month}
        />
      ))}
    </div>
  );
}

export default Graph;

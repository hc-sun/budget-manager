import "./Graph.css";
import React from "react";
import BarChart from "./BarChart";

function Graph(props) {
  const dataVals = props.graphData.map((data) => data.value);
  const dataMax = Math.max(...dataVals);

  return (
    <div className="graph">
      {props.graphData.map((data) => (
        <BarChart
          key={data.month}
          value={data.value}
          maxval={dataMax}
          month={data.month}
        />
      ))}
    </div>
  );
}

export default Graph;

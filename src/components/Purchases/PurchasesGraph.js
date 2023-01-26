import React from "react";
import Graph from "../Graph/Graph";

function PurchasesGraph(props) {
  const monthData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const purchase of props.purchases) {
    const purchaseMonth = purchase.date.getMonth();
    monthData[purchaseMonth].value += purchase.price;
  }

  return <Graph graphData={monthData} />;
}

export default PurchasesGraph;

import "./PurchaseDate.css";

function PurchaseDate(props) {
  const year = props.date?.getFullYear();
  const month = props.date?.toLocaleString("en-US", { month: "long" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="purchase-date">
      <div className="purchase-date-day">{day}</div>
      <div className="purchase-date-month">{month}</div>
      <div className="purchase-date-year">{year}</div>
    </div>
  );
}

export default PurchaseDate;

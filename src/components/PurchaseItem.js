import "./PurchaseItem.css";

function PurchaseItem(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', {month:'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className="purchase-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <h2 className="purchase-item-description">{props.title}</h2>
      <div className="purchase-item-price">${props.amount}</div>
    </div>
  );
}

export default PurchaseItem;

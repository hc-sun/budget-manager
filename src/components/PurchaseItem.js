import "./PurchaseItem.css";

function PurchaseItem(props) {
  return (
    <div className="purchase-item">
      <div>{props.date.toISOString()}</div>
      <h2 className="purchase-item-description">{props.title}</h2>
      <div className="purchase-item-price">${props.amount}</div>
    </div>
  );
}

export default PurchaseItem;

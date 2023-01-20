import "./PurchaseItem.css";
import PurchaseDate from "./PurchaseDate";

function PurchaseItem(props) {
  return (
    <div className="purchase-item">
      <PurchaseDate date={props.date}/>
      <h2 className="purchase-item-description">{props.title}</h2>
      <div className="purchase-item-price">${props.amount}</div>
    </div>
  );
}

export default PurchaseItem;

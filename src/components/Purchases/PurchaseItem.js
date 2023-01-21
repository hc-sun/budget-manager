import "./PurchaseItem.css";
import PurchaseDate from "./PurchaseDate";
import Card from "../UI/Card";

function PurchaseItem(props) {
  return (
    <Card className="purchase-item">
      <PurchaseDate date={props.date} />
      <div className="purchase-item-description">
        <h2>{props.title}</h2>
        <div className="purchase-item-price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default PurchaseItem;

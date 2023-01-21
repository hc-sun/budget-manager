import PurchaseItem from "./PurchaseItem";
import "./Purchases.css";
import Card from '../UI/Card';

function Purchases(props) {
  return (
    <Card className="purchases">
      <PurchaseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <PurchaseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <PurchaseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <PurchaseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Purchases;

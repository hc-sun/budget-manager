import "./PurchaseItem.css";
import PurchaseDate from "./PurchaseDate";
import Card from "../UI/Card";
// import React, {useState} from 'react';

function PurchaseItem(props) {

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   {/*use setTitle to assign new value*/}
  //   setTitle('Updated');
  // };

  return (
    <Card className="purchase-item">
      <PurchaseDate date={props.date} />
      <div className="purchase-item-description">
        <h2>{props.title}</h2>
        {/* <h2>{title}</h2> */}
        <div className="purchase-item-price">${props.price}</div>
      </div>
      {/* <button onClick={clickHandler}>Change</button> */}
    </Card>
  );
}

export default PurchaseItem;

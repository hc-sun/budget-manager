import "./Card.css";

function Card(props) {
  {/* multi classes, 'card' class and props.className*/}
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

import PurchaseItem from "./components/PurchaseItem";

function App() {
  const purchases = [
    { id: "00", title: "Food0", amount: 2342.5, date: new Date(2022, 1, 1) },
    { id: "01", title: "Food1", amount: 2342.5, date: new Date(2022, 1, 1) },
    { id: "02", title: "Food2", amount: 2342.5, date: new Date(2022, 1, 1) },
    { id: "03", title: "Food3", amount: 2342.5, date: new Date(2022, 1, 1) },
  ];
  return (
    <div>
      <h1>React App</h1>
      <PurchaseItem
        title={purchases[0].title}
        amount={purchases[0].amount}
        date={purchases[0].date}
      ></PurchaseItem>
      <PurchaseItem
        title={purchases[1].title}
        amount={purchases[1].amount}
        date={purchases[1].date}
      ></PurchaseItem>
      <PurchaseItem
        title={purchases[2].title}
        amount={purchases[2].amount}
        date={purchases[2].date}
      ></PurchaseItem>
      <PurchaseItem
        title={purchases[3].title}
        amount={purchases[3].amount}
        date={purchases[3].date}
      ></PurchaseItem>
    </div>
  );
}

export default App;

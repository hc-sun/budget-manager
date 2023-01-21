import Purchases from "./components/Purchases/Purchases";

const App = () => {
  const purchases = [
    { id: "00", title: "Food0", amount: 2342.5, date: new Date(2022, 1, 1) },
    { id: "01", title: "Food1", amount: 2342.5, date: new Date(2022, 1, 1) },
    { id: "02", title: "Food2", amount: 2342.5, date: new Date(2022, 1, 1) },
    { id: "03", title: "Food3", amount: 2342.5, date: new Date(2022, 1, 1) },
  ];
  return (
    <div>
      <h1>React App</h1>
      <Purchases items={purchases} />
    </div>
  );
}

export default App;

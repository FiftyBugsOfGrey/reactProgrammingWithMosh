import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New Delhi",
    "Bangaluru",
    "Pune",
    "Mumbai",
    "Chennai",
    "Hyderabad",
  ];

  let heading = "Cities";
  let handleSelectedItem = (item: String) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelect={handleSelectedItem}
      />
    </div>
  );
}

export default App;

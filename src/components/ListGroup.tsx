import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: ListGroupProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 ? <p>No items found</p> : ""}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              console.log(item, index);
              setSelectedIndex(index);
              onSelect(item);
            }}
            key={item}
            className={
              index == selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

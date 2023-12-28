import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleRemoveItems = (itemId) => {
    setItems((items) => items.filter((item) => item.id !== itemId));
  };

  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Do you really wants to clear the list ? "
    );
    if (confirmed) setItems([]);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onRemoveItems={handleRemoveItems}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
};

export default App;

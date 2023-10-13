import React, { useState } from "react";
import "./OrderForm.css";

function OrderForm({ addOrder, tableCount }) {
  const [selectedTable, setSelectedTable] = useState(1);
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");

  const handleAddOrder = () => {
    if (id && price && dish) {
      addOrder({ id, price, dish }, selectedTable);
      setId("");
      setPrice("");
      setDish("");
    }
  };

  return (
    <div className="order-form">
      <h2>Add Order for Table</h2>
      <select onChange={(e) => setSelectedTable(parseInt(e.target.value))}>
        {[...Array(tableCount)].map((_, index) => (
          <option key={index} value={index + 1}>
            Table {index + 1}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Unique Order ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dish"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
      />
      <button onClick={handleAddOrder}>Add to Order</button>
    </div>
  );
}

export default OrderForm;

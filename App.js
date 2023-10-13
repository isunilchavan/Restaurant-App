import React, { useState, useEffect } from "react";
import OrderForm from "./component/OrderForm";
import OrderList from "./component/OrderList";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const tableCount = 4; // Number of tables

  useEffect(() => {
    // Load orders from local storage when the app starts
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    // Save orders to local storage whenever orders change
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order, selectedTable) => {
    setOrders([...orders, { ...order, table: selectedTable }]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="App">
      <h1 className="Restaurant">Restaurant Orders</h1>
      <OrderForm addOrder={addOrder} tableCount={tableCount} />
      <OrderList
        orders={orders}
        deleteOrder={deleteOrder}
        tableCount={tableCount}
      />
    </div>
  );
}

export default App;

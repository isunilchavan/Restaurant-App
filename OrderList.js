import React from "react";
import "./OrderList.css";

function OrderList({ orders, deleteOrder, tableCount }) {
  const tables = [...Array(tableCount).keys()];

  return (
    <div className="order-list">
      <h2>Order List</h2>
      {tables.map((table) => (
        <div key={table}>
          <h3>Table {table + 1}</h3>
          <ul>
            {orders
              .filter((order) => order.table === table + 1)
              .map((order) => (
                <li key={order.id}>
                  Order ID: {order.id}, Dish: {order.dish}, Price: {order.price}
                  <button onClick={() => deleteOrder(order.id)}>
                    Delete Order
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrderList;

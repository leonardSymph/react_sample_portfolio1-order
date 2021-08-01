import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import { OrderedItems } from "./models/ordered";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  fetch("https://meals-558fd-default-rtdb.firebaseio.com/orders.json")
    .then((response) => response.json())
    .then((data) => {
      for (let key in data) {
        const user = data[key].user;
        const id = key;
        const orders = data[key].orderedItems;
        const orderSummary = new OrderedItems(
          id,
          user.name,
          user.city,
          user.street,
          orders
        );
        console.log(orderSummary.getOrderDetails());
        console.log("Your order: ", orderSummary.summarizeOrders());
      }
    });

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

import react from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      userInfo: {},
      subTotal: 0,
    };
  }

  addToCart = (event) => {
    this.setState({ cart: this.state.cart.push(event.target.value) });
  };

  render() {
    return (
      <div className="app" id="app-container">
        <div className="left">
          <h1>My Garage Sale</h1>
        </div>
        <div className="right">
          <Cart addToCart={this.addToCart} />
          <Checkout />
        </div>
      </div>
    );
  }
}

export default App;

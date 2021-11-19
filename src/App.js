import react from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Item from "./components/Item";

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
    this.setState({
      //workaround since couldn't store full object into the button value
      cart: [
        ...this.state.cart,
        { name: event.target.name, price: event.target.value },
      ],
    });
    // console.log(this.state.cart);
  };

  render() {
    return (
      <div className="app" id="app-container">
        <div className="left">
          <h1>My Garage Sale</h1>
          <Item addToCart={this.addToCart} />
        </div>
        <div className="right">
          <Cart items={this.state.cart} />
          <Checkout />
        </div>
      </div>
    );
  }
}

export default App;

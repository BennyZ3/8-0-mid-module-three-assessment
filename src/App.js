import react from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Item from "./components/Item";
import formatPrice from "./helpers/formatPrice";

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
      subTotal: (this.state.subTotal += Number(event.target.value)),
    });
    // console.log(this.state.cart);
  };

  checkout = (e) => {
    e.preventDefault();
    let accept = true;
    let invalid = "Input is not valid";
    let complete = `Purchase complete. You will be charged ${formatPrice(
      this.state.subTotal * 1.05
    )}.`;
    if (!e.target.first.value || !e.target.last.value) {
      invalid += `\nPlease enter a name`;
      accept = false;
    }
    if (e.target.credit.value.length != 16) {
      invalid += `\nCredit card number is not valid`;
      accept = false;
    }
    if (e.target.zip.value.length < 5) {
      complete += `\nZip code is not valid`;
    }
    if (accept) {
      alert(complete);
    } else {
      alert(invalid);
    }
    console.log(e.target.first.value);
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
          <Checkout checkout={this.checkout} />
        </div>
      </div>
    );
  }
}

export default App;

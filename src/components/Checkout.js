//Checkout form componenet probably
const Checkout = (props) => {
  return (
    <>
      <h2>Checkout</h2>
      <form id="checkout">
        <label for="first">First Name </label>
        <input type="text" id="first" name="first" />
        <label for="last">Last Name </label>
        <input type="text" id="last" name="last" />
        <label for="email">Email </label>
        <input type="email" id="email" name="email" />
        <label for="credit">Credit Card</label>
        <input type="number" id="credit" name="credit" />
        <label for="zip">Zip Code</label>
        <input type="number" id="zip" name="zip" />
        <button type="submit">Buy Now</button>
      </form>
    </>
  );
};

export default Checkout;

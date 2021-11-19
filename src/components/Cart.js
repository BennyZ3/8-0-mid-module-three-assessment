import formatPrice from "../helpers/formatPrice";

const Cart = (props) => {
  let array = [];
  let sub = 0;
  props.items.forEach((item) => {
    array.push(
      <li>
        {item.name}: ${item.price}
      </li>
    );
    sub += Number(item.price);
  });

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>{array}</ul>
      <h3>Subtotal: {formatPrice(sub)}</h3>
      <h3>Tax: {formatPrice(sub * 0.05)}</h3>
      <h3>Total: {formatPrice(sub * 1.05)}</h3>
    </div>
  );
};

export default Cart;

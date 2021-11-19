//Import product data and for each here
import productData from "../data/productData";
import formatPrice from "../helpers/formatPrice";
const Item = (props) => {
  let itemArr = [];
  productData.forEach((item) => {
    // console.log(item);
    itemArr.push(
      <div>
        <h2>{item.name}</h2>
        <p>Price: {formatPrice(item.price)}</p>
        <button onClick={props.addToCart} name={item.name} value={item.price}>
          Add To Cart
        </button>
        <p />
        <img src={item.img} />
        <p>{item.description}</p>
      </div>
    );
  });
  //   console.log(itemArr);
  return <div className="products">{itemArr}</div>;
};

export default Item;

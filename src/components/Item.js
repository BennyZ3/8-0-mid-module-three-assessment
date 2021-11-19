//Import product data and for each here
import productData from "../data/productData";
const Item = (props) => {
  let itemArr = [];
  productData.forEach((item) => {
    itemArr.push(
      <div>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <button onClick={props.addToCart} />
        <img src={item.img} />
        <p>{item.description}</p>
      </div>
    );
  });
  return <>{itemArr}</>;
};

export default Item;

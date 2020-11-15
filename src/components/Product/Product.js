import React, { useEffect } from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { useAlert } from "react-alert";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const alert = useAlert();
  const addToBasket = () => {
    alert.show(
      <div className="popup">
        <div className="product__info">
          <p>{title}</p>
          <br />
          <p>has been added to your cart!</p>
        </div>
        <img src={image} />
      </div>
    );
    // dispatch add to basket item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

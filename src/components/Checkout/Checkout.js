import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { CheckoutProduct } from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://d2ct9xspam8wud.cloudfront.net/blog/2016/06/21162551/Facebook-Carousel-Ads-examples.png"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          <FlipMove
            duration={500}
            easing="ease-out"
            enterAnimation="accordianVertical"
            leaveAnimation="accordianVertical"
          >
            {basket.map((item, index) => (
              <CheckoutProduct
                key={`${item.id}${index}`}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

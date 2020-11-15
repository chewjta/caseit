import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  let [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      dispatch({
        type: "EMPTY_BASKET",
      });
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://thumbs.dreamstime.com/b/home-roof-icon-house-roof-icon-logo-dark-background-white-home-roof-icon-house-roof-icon-logo-dark-background-133987514.jpg"
        />
      </Link>

      {/* <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div> */}
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="optionLineOne">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="optionLineTwo header__basketCount">
              {basket ? basket.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

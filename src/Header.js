import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const {basket, user} = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
        <img src="https://shopjasmine.com/wp-content/uploads/2021/08/Jasmine-1-pdf-62.jpg" alt="" />

      <div className="header__search">
        <input classname="header__searchInput" type="text" />
        <i class="fas fa-search header__searchIcon"></i>
      </div>

      <div className="header__nav">
      <Link to={!user && '/login'}>
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">Hello {user ? 'Guest' :
          user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <i
              class="fas fa-shopping-cart header__optionBasket"
              style={{ color: "white" }}
            ></i>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

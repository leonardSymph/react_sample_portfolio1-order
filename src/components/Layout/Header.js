import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import marketImage from "../../assets/market-image.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CarbonMarket-Talamban 13c</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={marketImage} alt="carbon market" />
      </div>
    </Fragment>
  );
};

export default Header;
